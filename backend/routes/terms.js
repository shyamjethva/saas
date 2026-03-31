const express = require('express');
const Term = require('../models/Term');
const User = require('../models/User');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All terms/contracts routes require authentication
router.use(protect);
router.use(authorize('Admin', 'admin', 'client'));

// Middleware to validate ObjectId format
const { isValidObjectId } = require('mongoose');

const validateObjectId = (req, res, next) => {
  if (!isValidObjectId(req.params.id)) {
    return res.status(400).json({
      success: false,
      error: 'Invalid ID format'
    });
  }
  next();
};

// Get all terms with optional filtering
router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search,
      contractType,
      status,
      startDate,
      endDate
    } = req.query;

    // Build filter object
    const filter = {};
    if (contractType) filter.contractType = contractType;
    if (status) filter.status = status;
    if (startDate) filter.startDate = { $gte: new Date(startDate) };
    if (endDate) filter.endDate = { $lte: new Date(endDate) };
    if (search) {
      filter.$or = [
        { title: { $regex: search, $options: 'i' } },
        { description: { $regex: search, $options: 'i' } }
      ];
    }

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Execute query with populate
    const terms = await Term.find(filter)
      .populate('createdBy updatedBy', 'firstName lastName email username')
      .populate('approvalStatus.approvedBy.userId approvalStatus.currentApprovers.userId', 'firstName lastName email username')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    // Get total count for pagination
    const total = await Term.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: terms,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalItems: total,
        hasNext: skip + terms.length < total,
        hasPrev: parseInt(page) > 1
      }
    });
  } catch (error) {
    console.error('Error fetching terms:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch terms'
    });
  }
});

// Get term by ID
router.get('/:id', validateObjectId, async (req, res) => {
  try {
    const term = await Term.findById(req.params.id)
      .populate('createdBy updatedBy', 'firstName lastName email username')
      .populate('approvalStatus.approvedBy.userId approvalStatus.currentApprovers.userId', 'firstName lastName email username');

    if (!term) {
      return res.status(404).json({
        success: false,
        error: 'Term not found'
      });
    }

    res.status(200).json({
      success: true,
      data: term
    });
  } catch (error) {
    console.error('Error fetching term:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch term'
    });
  }
});

// Create new term/contract
router.post('/', async (req, res) => {
  try {
    const {
      contractType,
      title,
      description,
      parties,
      startDate,
      endDate,
      renewalTerms,
      templateId,
      attachments,
      approvalStatus,
      notes,
      createdBy
    } = req.body;

    // Validate required fields
    if (!contractType || !title || !startDate || !createdBy) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: contractType, title, startDate, and createdBy are required'
      });
    }

    const validContractTypes = [
      'Service Agreement', 'NDA', 'Employment Contract',
      'Vendor Agreement', 'Partnership Deed', 'Client Contract'
    ];

    if (!validContractTypes.includes(contractType)) {
      return res.status(400).json({
        success: false,
        error: `Invalid contract type. Valid options are: ${validContractTypes.join(', ')}`
      });
    }

    // Check if user exists
    const userExists = await User.findById(createdBy);
    if (!userExists) {
      return res.status(400).json({
        success: false,
        error: 'Created by user does not exist'
      });
    }

    // Create new term
    const newTerm = new Term({
      contractType,
      title,
      description,
      parties: parties || [],
      startDate: new Date(startDate),
      endDate: endDate ? new Date(endDate) : undefined,
      renewalTerms: renewalTerms || {},
      templateId,
      attachments: attachments || [],
      approvalStatus: approvalStatus || {},
      notes,
      createdBy
    });

    const savedTerm = await newTerm.save();

    // Populate the term before returning
    const populatedTerm = await Term.findById(savedTerm._id)
      .populate('createdBy updatedBy', 'firstName lastName email username')
      .populate('approvalStatus.approvedBy.userId approvalStatus.currentApprovers.userId', 'firstName lastName email username');

    res.status(201).json({
      success: true,
      message: 'Term created successfully',
      data: populatedTerm
    });
  } catch (error) {
    console.error('Error creating term:', error);

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
      error: 'Failed to create term'
    });
  }
});

// Update term by ID
router.put('/:id', validateObjectId, async (req, res) => {
  try {
    const {
      contractType,
      title,
      description,
      parties,
      startDate,
      endDate,
      renewalTerms,
      status,
      templateId,
      attachments,
      approvalStatus,
      notes,
      updatedBy
    } = req.body;

    // Check if user exists if updatedBy is provided
    if (updatedBy) {
      const userExists = await User.findById(updatedBy);
      if (!userExists) {
        return res.status(400).json({
          success: false,
          error: 'Updated by user does not exist'
        });
      }
    }

    const validContractTypes = [
      'Service Agreement', 'NDA', 'Employment Contract',
      'Vendor Agreement', 'Partnership Deed', 'Client Contract'
    ];

    if (contractType && !validContractTypes.includes(contractType)) {
      return res.status(400).json({
        success: false,
        error: `Invalid contract type. Valid options are: ${validContractTypes.join(', ')}`
      });
    }

    const updatedTerm = await Term.findByIdAndUpdate(
      req.params.id,
      {
        contractType,
        title,
        description,
        parties,
        startDate,
        endDate,
        renewalTerms,
        status,
        templateId,
        attachments,
        approvalStatus,
        notes,
        updatedBy
      },
      { new: true, runValidators: true }
    ).populate('createdBy updatedBy', 'firstName lastName email username')
      .populate('approvalStatus.approvedBy.userId approvalStatus.currentApprovers.userId', 'firstName lastName email username');

    if (!updatedTerm) {
      return res.status(404).json({
        success: false,
        error: 'Term not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Term updated successfully',
      data: updatedTerm
    });
  } catch (error) {
    console.error('Error updating term:', error);

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
      error: 'Failed to update term'
    });
  }
});

// Delete term by ID
router.delete('/:id', validateObjectId, async (req, res) => {
  try {
    const deletedTerm = await Term.findByIdAndDelete(req.params.id);

    if (!deletedTerm) {
      return res.status(404).json({
        success: false,
        error: 'Term not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Term deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting term:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete term'
    });
  }
});

// Update term status
router.patch('/:id/status', validateObjectId, async (req, res) => {
  try {
    const { status } = req.body;

    if (!status) {
      return res.status(400).json({
        success: false,
        error: 'Status is required'
      });
    }

    const validStatuses = ['Draft', 'Pending', 'Active', 'Expired', 'Completed', 'Terminated'];

    if (!validStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        error: `Invalid status. Valid options are: ${validStatuses.join(', ')}`
      });
    }

    const updatedTerm = await Term.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    ).populate('createdBy updatedBy', 'firstName lastName email username')
      .populate('approvalStatus.approvedBy.userId approvalStatus.currentApprovers.userId', 'firstName lastName email username');

    if (!updatedTerm) {
      return res.status(404).json({
        success: false,
        error: 'Term not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Term status updated successfully',
      data: updatedTerm
    });
  } catch (error) {
    console.error('Error updating term status:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update term status'
    });
  }
});

// Add party to term
router.patch('/:id/add-party', validateObjectId, async (req, res) => {
  try {
    const { name, role, email } = req.body;

    if (!name || !role) {
      return res.status(400).json({
        success: false,
        error: 'Name and role are required'
      });
    }

    const updatedTerm = await Term.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          parties: {
            name,
            role,
            email
          }
        }
      },
      { new: true }
    ).populate('createdBy updatedBy', 'firstName lastName email username')
      .populate('approvalStatus.approvedBy.userId approvalStatus.currentApprovers.userId', 'firstName lastName email username');

    if (!updatedTerm) {
      return res.status(404).json({
        success: false,
        error: 'Term not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Party added successfully',
      data: updatedTerm
    });
  } catch (error) {
    console.error('Error adding party to term:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to add party to term'
    });
  }
});

// Add attachment to term
router.patch('/:id/add-attachment', validateObjectId, async (req, res) => {
  try {
    const { fileName, filePath } = req.body;

    if (!fileName || !filePath) {
      return res.status(400).json({
        success: false,
        error: 'FileName and filePath are required'
      });
    }

    const updatedTerm = await Term.findByIdAndUpdate(
      req.params.id,
      {
        $push: {
          attachments: {
            fileName,
            filePath,
            uploadedAt: new Date(),
            uploadedBy: 'System' // This would typically come from authenticated user
          }
        }
      },
      { new: true }
    ).populate('createdBy updatedBy', 'firstName lastName email username')
      .populate('approvalStatus.approvedBy.userId approvalStatus.currentApprovers.userId', 'firstName lastName email username');

    if (!updatedTerm) {
      return res.status(404).json({
        success: false,
        error: 'Term not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Attachment added successfully',
      data: updatedTerm
    });
  } catch (error) {
    console.error('Error adding attachment to term:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to add attachment to term'
    });
  }
});

// Mark term as signed
router.patch('/:id/sign', validateObjectId, async (req, res) => {
  try {
    const { partyIndex, signatureDate, signedBy } = req.body;

    if (partyIndex === undefined || !signatureDate || !signedBy) {
      return res.status(400).json({
        success: false,
        error: 'Party index, signature date, and signed by are required'
      });
    }

    const updatedTerm = await Term.findByIdAndUpdate(
      req.params.id,
      {
        $set: {
          [`parties.${partyIndex}.signature.signed`]: true,
          [`parties.${partyIndex}.signature.signatureDate`]: new Date(signatureDate),
          [`parties.${partyIndex}.signature.signedBy`]: signedBy
        }
      },
      { new: true }
    ).populate('createdBy updatedBy', 'firstName lastName email username')
      .populate('approvalStatus.approvedBy.userId approvalStatus.currentApprovers.userId', 'firstName lastName email username');

    if (!updatedTerm) {
      return res.status(404).json({
        success: false,
        error: 'Term not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Term signature updated successfully',
      data: updatedTerm
    });
  } catch (error) {
    console.error('Error marking term as signed:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to mark term as signed'
    });
  }
});

module.exports = router;