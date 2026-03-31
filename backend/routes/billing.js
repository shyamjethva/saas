const express = require('express');
const Billing = require('../models/Billing');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All billing routes require authentication
router.use(protect);
router.use(authorize('Admin', 'admin', 'client')); // Allowed for both admins and clients (filtering happens in controller)

// Get all billing records
router.get('/', async (req, res) => {
  try {
    const { status, client, sortBy = '-createdAt', limit = 20, page = 1 } = req.query;

    // Build filter
    const filter = {};
    if (status) filter.status = status;
    if (client) filter.client = new RegExp(client, 'i');

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Query with pagination
    const billings = await Billing.find(filter)
      .sort(sortBy)
      .skip(skip)
      .limit(parseInt(limit))
      .lean(); // Use lean() for better performance

    const total = await Billing.countDocuments(filter);

    res.json({
      success: true,
      data: billings,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalRecords: total,
        hasNext: skip + parseInt(limit) < total,
        hasPrev: parseInt(page) > 1
      }
    });
  } catch (error) {
    console.error('Error fetching billing records:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch billing records'
    });
  }
});

// Get billing by ID
router.get('/:id', async (req, res) => {
  try {
    const billing = await Billing.findById(req.params.id);
    if (!billing) {
      return res.status(404).json({
        success: false,
        error: 'Billing record not found'
      });
    }
    res.json({
      success: true,
      data: billing
    });
  } catch (error) {
    console.error('Error fetching billing record:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch billing record'
    });
  }
});

// Create new billing record
router.post('/', async (req, res) => {
  try {
    const { client, amount, status, dueDate, items, invoiceNumber, ...rest } = req.body;

    if (!client || !dueDate) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: client and dueDate are required'
      });
    }

    // Use the static method to create invoice with smart calculations
    const newBilling = await Billing.createInvoiceWithSmartCalculations({
      client,
      dueDate,
      items: items || [],
      invoiceNumber: invoiceNumber || `INV-${Date.now()}`,
      ...rest
    });

    res.status(201).json({
      success: true,
      message: 'Billing record created successfully',
      data: newBilling
    });
  } catch (error) {
    console.error('Error creating billing record:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        error: messages.join(', ')
      });
    }

    // Handle duplicate key errors
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: 'An invoice with this number already exists'
      });
    }

    res.status(500).json({
      success: false,
      error: 'Failed to create billing record'
    });
  }
});

// Update billing record
router.put('/:id', async (req, res) => {
  try {
    const { client, amount, status, dueDate, items, ...rest } = req.body;

    // Prepare update object
    const updateData = {};
    if (client) updateData.client = client;
    if (amount) updateData.amount = parseFloat(amount);
    if (status) updateData.status = status;
    if (dueDate) updateData.dueDate = new Date(dueDate);
    if (items) updateData.items = items;

    // Add any other fields that were passed
    Object.assign(updateData, rest);

    const updatedBilling = await Billing.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedBilling) {
      return res.status(404).json({
        success: false,
        error: 'Billing record not found'
      });
    }

    res.json({
      success: true,
      message: 'Billing record updated successfully',
      data: updatedBilling
    });
  } catch (error) {
    console.error('Error updating billing record:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const messages = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        error: messages.join(', ')
      });
    }

    res.status(500).json({
      success: false,
      error: 'Failed to update billing record'
    });
  }
});

// Delete billing record
router.delete('/:id', async (req, res) => {
  try {
    const deletedBilling = await Billing.findByIdAndDelete(req.params.id);

    if (!deletedBilling) {
      return res.status(404).json({
        success: false,
        error: 'Billing record not found'
      });
    }

    res.json({
      success: true,
      message: 'Billing record deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting billing record:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete billing record'
    });
  }
});

// Update billing status
router.patch('/:id/status', async (req, res) => {
  try {
    const { status, paymentDate, paidAmount } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        error: 'Status is required'
      });
    }

    const updateData = { status };

    // If status is 'Paid', update payment details
    if (status === 'Paid') {
      updateData.paymentDate = paymentDate || new Date();
      updateData.paidAmount = paidAmount || 0;
      updateData.balanceAmount = 0; // Balance becomes 0 when fully paid
    } else if (status === 'Partially Paid' && paidAmount !== undefined) {
      updateData.paidAmount = paidAmount;
      updateData.balanceAmount = (await Billing.findById(req.params.id)).totalAmount - paidAmount;
    }

    const updatedBilling = await Billing.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedBilling) {
      return res.status(404).json({
        success: false,
        error: 'Billing record not found'
      });
    }

    res.json({
      success: true,
      message: 'Billing status updated successfully',
      data: updatedBilling
    });
  } catch (error) {
    console.error('Error updating billing status:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update billing status'
    });
  }
});

// Process payment
router.post('/:id/payment', async (req, res) => {
  try {
    const { amount, method, transactionId } = req.body;

    if (!amount || !method) {
      return res.status(400).json({
        success: false,
        error: 'Amount and payment method are required'
      });
    }

    const billing = await Billing.findById(req.params.id);
    if (!billing) {
      return res.status(404).json({
        success: false,
        error: 'Billing record not found'
      });
    }

    // Update payment details
    const newPaidAmount = (billing.paidAmount || 0) + amount;
    const newBalance = billing.totalAmount - newPaidAmount;

    let newStatus = billing.status;
    if (newBalance <= 0) {
      newStatus = 'Paid';
    } else if (newPaidAmount > 0 && newBalance > 0) {
      newStatus = 'Partially Paid';
    }

    const updatedBilling = await Billing.findByIdAndUpdate(
      req.params.id,
      {
        paidAmount: newPaidAmount,
        balanceAmount: newBalance,
        status: newStatus,
        paymentMethod: method,
        paymentDate: new Date()
      },
      { new: true, runValidators: true }
    );

    res.json({
      success: true,
      message: 'Payment processed successfully',
      data: updatedBilling
    });
  } catch (error) {
    console.error('Error processing payment:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to process payment'
    });
  }
});

// Generate invoice PDF
router.get('/:id/pdf', async (req, res) => {
  try {
    const billing = await Billing.findById(req.params.id);
    if (!billing) {
      return res.status(404).json({
        success: false,
        error: 'Billing record not found'
      });
    }

    // In a real implementation, this would generate a PDF
    // For now, we'll return the billing data that would be used for PDF generation
    res.json({
      success: true,
      message: 'PDF generation would happen here',
      data: billing
    });
  } catch (error) {
    console.error('Error generating invoice PDF:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to generate invoice PDF'
    });
  }
});

module.exports = router;