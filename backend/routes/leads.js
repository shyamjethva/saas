const express = require('express');
const Lead = require('../models/Lead');
const User = require('../models/User');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All lead routes require authentication
router.use(protect);
router.use(authorize('Admin', 'admin'));

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

// Get all leads with optional filtering
router.get('/', async (req, res) => {
  try {
    const {
      page = 1,
      limit = 10,
      search,
      leadStage,
      priority,
      assignedTo,
      leadSource
    } = req.query;

    // Build filter object
    const filter = {};
    if (search) {
      filter.$or = [
        { firstName: { $regex: search, $options: 'i' } },
        { lastName: { $regex: search, $options: 'i' } },
        { email: { $regex: search, $options: 'i' } },
        { company: { $regex: search, $options: 'i' } }
      ];
    }
    if (leadStage) filter.leadStage = leadStage;
    if (priority) filter.priority = priority;
    if (assignedTo) filter.assignedTo = assignedTo;
    if (leadSource) filter.leadSource = leadSource;

    // Calculate pagination
    const skip = (parseInt(page) - 1) * parseInt(limit);

    // Execute query with populate
    const leads = await Lead.find(filter)
      .populate('assignedTo', 'firstName lastName email')
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(parseInt(limit));

    // Get total count for pagination
    const total = await Lead.countDocuments(filter);

    res.status(200).json({
      success: true,
      data: leads,
      pagination: {
        currentPage: parseInt(page),
        totalPages: Math.ceil(total / parseInt(limit)),
        totalItems: total,
        hasNext: skip + leads.length < total,
        hasPrev: parseInt(page) > 1
      }
    });
  } catch (error) {
    console.error('Error fetching leads:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch leads'
    });
  }
});

// Get lead by ID
router.get('/:id', validateObjectId, async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id)
      .populate('assignedTo', 'firstName lastName email');

    if (!lead) {
      return res.status(404).json({
        success: false,
        error: 'Lead not found'
      });
    }

    res.status(200).json({
      success: true,
      data: lead
    });
  } catch (error) {
    console.error('Error fetching lead:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch lead'
    });
  }
});

// Create new lead
router.post('/', async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      position,
      leadSource,
      industry,
      estimatedValue,
      leadStage,
      priority,
      assignedTo,
      notes
    } = req.body;

    // Validate required fields
    if (!firstName || !lastName || !email || !phone || !company || !position || !leadSource || !industry || !assignedTo) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields: firstName, lastName, email, phone, company, position, leadSource, industry, assignedTo are required'
      });
    }

    // Check if user exists
    const userExists = await User.findById(assignedTo);
    if (!userExists) {
      return res.status(400).json({
        success: false,
        error: 'Assigned user does not exist'
      });
    }

    // Create new lead
    const newLead = new Lead({
      firstName,
      lastName,
      email,
      phone,
      company,
      position,
      leadSource,
      industry,
      estimatedValue,
      leadStage,
      priority,
      assignedTo,
      notes
    });

    const savedLead = await newLead.save();

    // Populate the assigned user before returning
    const populatedLead = await Lead.findById(savedLead._id)
      .populate('assignedTo', 'firstName lastName email');

    res.status(201).json({
      success: true,
      message: 'Lead created successfully',
      data: populatedLead
    });
  } catch (error) {
    console.error('Error creating lead:', error);

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
      error: 'Failed to create lead'
    });
  }
});

// Update lead by ID
router.put('/:id', validateObjectId, async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      email,
      phone,
      company,
      position,
      leadSource,
      industry,
      estimatedValue,
      leadStage,
      priority,
      assignedTo,
      notes,
      lastContacted,
      nextFollowUp,
      convertedToClient
    } = req.body;

    // Check if user exists if assignedTo is provided
    if (assignedTo) {
      const userExists = await User.findById(assignedTo);
      if (!userExists) {
        return res.status(400).json({
          success: false,
          error: 'Assigned user does not exist'
        });
      }
    }

    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        lastName,
        email,
        phone,
        company,
        position,
        leadSource,
        industry,
        estimatedValue,
        leadStage,
        priority,
        assignedTo,
        notes,
        lastContacted,
        nextFollowUp,
        convertedToClient
      },
      { new: true, runValidators: true }
    ).populate('assignedTo', 'firstName lastName email');

    if (!updatedLead) {
      return res.status(404).json({
        success: false,
        error: 'Lead not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Lead updated successfully',
      data: updatedLead
    });
  } catch (error) {
    console.error('Error updating lead:', error);

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
      error: 'Failed to update lead'
    });
  }
});

// Delete lead by ID
router.delete('/:id', validateObjectId, async (req, res) => {
  try {
    const deletedLead = await Lead.findByIdAndDelete(req.params.id);

    if (!deletedLead) {
      return res.status(404).json({
        success: false,
        error: 'Lead not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Lead deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting lead:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to delete lead'
    });
  }
});

// Update lead stage
router.patch('/:id/stage', validateObjectId, async (req, res) => {
  try {
    const { stage } = req.body;

    if (!stage) {
      return res.status(400).json({
        success: false,
        error: 'Stage is required'
      });
    }

    const validStages = [
      'New Lead', 'Contacted', 'Qualified', 'Proposal Sent',
      'Negotiation', 'Closed Won', 'Closed Lost'
    ];

    if (!validStages.includes(stage)) {
      return res.status(400).json({
        success: false,
        error: `Invalid stage. Valid options are: ${validStages.join(', ')}`
      });
    }

    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      {
        leadStage: stage,
        lastContacted: new Date()
      },
      { new: true }
    ).populate('assignedTo', 'firstName lastName email');

    if (!updatedLead) {
      return res.status(404).json({
        success: false,
        error: 'Lead not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Lead stage updated successfully',
      data: updatedLead
    });
  } catch (error) {
    console.error('Error updating lead stage:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to update lead stage'
    });
  }
});

// Assign lead to user
router.patch('/:id/assign', validateObjectId, async (req, res) => {
  try {
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({
        success: false,
        error: 'User ID is required'
      });
    }

    const userExists = await User.findById(userId);
    if (!userExists) {
      return res.status(400).json({
        success: false,
        error: 'Assigned user does not exist'
      });
    }

    const updatedLead = await Lead.findByIdAndUpdate(
      req.params.id,
      {
        assignedTo: userId,
        lastContacted: new Date()
      },
      { new: true }
    ).populate('assignedTo', 'firstName lastName email');

    if (!updatedLead) {
      return res.status(404).json({
        success: false,
        error: 'Lead not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Lead assigned successfully',
      data: updatedLead
    });
  } catch (error) {
    console.error('Error assigning lead:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to assign lead'
    });
  }
});

module.exports = router;