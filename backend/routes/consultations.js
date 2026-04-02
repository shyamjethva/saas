const express = require('express');
const Consultation = require('../models/Consultation');
const { protect, authorize } = require('../middleware/auth');

const { sendConsultationEmail, sendClientConfirmation } = require('../services/emailService');

const router = express.Router();

// Create new consultation
router.post('/', async (req, res) => {
  try {
    const {
      name,
      email,
      company,
      phone,
      service,
      message,
      preferredDate,
      timezone
    } = req.body;

    // Validate required fields
    if (!name || !email || !company || !service || !message) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: name, email, company, service, and message are required'
      });
    }

    // Create new consultation
    const consultation = new Consultation({
      name,
      email,
      company,
      phone,
      service,
      message,
      preferredDate: preferredDate ? new Date(preferredDate) : null,
      timezone
    });

    // Save to database
    const savedConsultation = await consultation.save();

    // Send emails
    try {
      await sendConsultationEmail(req.body);
      await sendClientConfirmation(email, name);
      console.log('✅ Consultation emails sent successfully');
    } catch (emailError) {
      console.error('❌ Error sending consultation emails:', emailError);
    }

    console.log('New consultation scheduled:', {
      id: savedConsultation._id,
      company: savedConsultation.company,
      service: savedConsultation.service,
      createdAt: savedConsultation.createdAt
    });

    res.status(201).json({
      success: true,
      message: 'Consultation scheduled successfully!',
      data: {
        id: savedConsultation._id,
        name: savedConsultation.name,
        company: savedConsultation.company,
        service: savedConsultation.service,
        createdAt: savedConsultation.createdAt
      }
    });

  } catch (error) {
    console.error('Consultation scheduling error:', error);

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
        error: 'A consultation with this email already exists'
      });
    }

    res.status(500).json({
      success: false,
      error: 'Internal server error. Please try again later.',
      message: error.message,
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
    });
  }
});

// Get all consultations (for admin panel)
router.get('/', protect, authorize('Admin', 'admin'), async (req, res) => {
  try {
    const { status, limit = 20, page = 1 } = req.query;

    // Build filter
    const filter = {};
    if (status) {
      filter.status = status;
    }

    // Pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    const consultations = await Consultation.find(filter)
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    const total = await Consultation.countDocuments(filter);

    res.json({
      success: true,
      data: consultations,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalRecords: total,
        hasNext: skip + parseInt(limit) < total,
        hasPrev: parseInt(page) > 1
      }
    });

  } catch (error) {
    console.error('Error fetching consultations:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch consultations'
    });
  }
});

// Get consultation by ID
router.get('/:id', protect, authorize('Admin', 'admin'), async (req, res) => {
  try {
    const consultation = await Consultation.findById(req.params.id);

    if (!consultation) {
      return res.status(404).json({
        success: false,
        error: 'Consultation not found'
      });
    }

    res.json({
      success: true,
      data: consultation
    });

  } catch (error) {
    console.error('Error fetching consultation:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch consultation'
    });
  }
});

// Update consultation status
router.patch('/:id', protect, authorize('Admin', 'admin'), async (req, res) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        error: 'Status is required'
      });
    }

    const consultation = await Consultation.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true, runValidators: true }
    );

    if (!consultation) {
      return res.status(404).json({
        success: false,
        error: 'Consultation not found'
      });
    }

    res.json({
      success: true,
      message: 'Consultation status updated successfully',
      data: consultation
    });

  } catch (error) {
    console.error('Error updating consultation:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update consultation'
    });
  }
});

module.exports = router;