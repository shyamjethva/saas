const Client = require('../models/Client');

// @desc    Create new client
// @route   POST /api/clients
// @access  Public
exports.createClient = async (req, res) => {
  try {
    const client = new Client(req.body);
    const savedClient = await client.save();
    
    res.status(201).json({
      success: true,
      message: 'Client created successfully',
      data: savedClient
    });
  } catch (error) {
    console.error('Error creating client:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors
      });
    }
    
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: 'Client with this email already exists'
      });
    }
    
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// @desc    Get all clients
// @route   GET /api/clients
// @access  Public
exports.getAllClients = async (req, res) => {
  try {
    const { status, industry, sortBy = 'createdAt', sortOrder = 'desc' } = req.query;
    let filter = {};
    
    if (status) filter.status = status;
    if (industry) filter.industry = industry;
    
    const sortObj = {};
    sortObj[sortBy] = sortOrder === 'asc' ? 1 : -1;
    
    const clients = await Client.find(filter)
      .sort(sortObj)
      .select('-__v');
    
    res.status(200).json({
      success: true,
      count: clients.length,
      data: clients
    });
  } catch (error) {
    console.error('Error fetching clients:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// @desc    Get client by ID
// @route   GET /api/clients/:id
// @access  Public
exports.getClientById = async (req, res) => {
  try {
    const client = await Client.findById(req.params.id);
    
    if (!client) {
      return res.status(404).json({
        success: false,
        error: 'Client not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: client
    });
  } catch (error) {
    console.error('Error fetching client:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// @desc    Update client
// @route   PUT /api/clients/:id
// @access  Public
exports.updateClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!client) {
      return res.status(404).json({
        success: false,
        error: 'Client not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Client updated successfully',
      data: client
    });
  } catch (error) {
    console.error('Error updating client:', error);
    
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors
      });
    }
    
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// @desc    Delete client
// @route   DELETE /api/clients/:id
// @access  Public
exports.deleteClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndDelete(req.params.id);
    
    if (!client) {
      return res.status(404).json({
        success: false,
        error: 'Client not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Client deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting client:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// @desc    Update client health score
// @route   PUT /api/clients/:id/health-score
// @access  Public
exports.updateHealthScore = async (req, res) => {
  try {
    const { healthScore } = req.body;
    
    if (healthScore === undefined || healthScore < 0 || healthScore > 100) {
      return res.status(400).json({
        success: false,
        error: 'Health score must be between 0 and 100'
      });
    }
    
    const client = await Client.findByIdAndUpdate(
      req.params.id,
      { healthScore },
      { new: true }
    );
    
    if (!client) {
      return res.status(404).json({
        success: false,
        error: 'Client not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Health score updated successfully',
      data: client
    });
  } catch (error) {
    console.error('Error updating health score:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};