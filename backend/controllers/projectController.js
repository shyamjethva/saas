const Project = require('../models/Project');
const Client = require('../models/Client');

// @desc    Create new project
// @route   POST /api/projects
// @access  Public
exports.createProject = async (req, res) => {
  try {
    const { clientId } = req.body;
    
    // Verify client exists
    const client = await Client.findById(clientId);
    if (!client) {
      return res.status(404).json({
        success: false,
        error: 'Client not found'
      });
    }
    
    // Add client name to project
    req.body.clientName = client.companyName;
    
    const project = new Project(req.body);
    const savedProject = await project.save();
    
    res.status(201).json({
      success: true,
      message: 'Project created successfully',
      data: savedProject
    });
  } catch (error) {
    console.error('Error creating project:', error);
    
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

// @desc    Get all projects
// @route   GET /api/projects
// @access  Public
exports.getAllProjects = async (req, res) => {
  try {
    const { status, clientId, sortBy = 'startDate', sortOrder = 'desc' } = req.query;
    let filter = {};
    
    if (status) filter.status = status;
    if (clientId) filter.clientId = clientId;
    
    const sortObj = {};
    sortObj[sortBy] = sortOrder === 'asc' ? 1 : -1;
    
    const projects = await Project.find(filter)
      .sort(sortObj)
      .populate('clientId', 'companyName contactPerson email')
      .select('-__v');
    
    res.status(200).json({
      success: true,
      count: projects.length,
      data: projects
    });
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// @desc    Get project by ID
// @route   GET /api/projects/:id
// @access  Public
exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id)
      .populate('clientId', 'companyName contactPerson email phone')
      .populate('teamMembers.userId', 'firstName lastName email department position');
    
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }
    
    res.status(200).json({
      success: true,
      data: project
    });
  } catch (error) {
    console.error('Error fetching project:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// @desc    Update project
// @route   PUT /api/projects/:id
// @access  Public
exports.updateProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Project updated successfully',
      data: project
    });
  } catch (error) {
    console.error('Error updating project:', error);
    
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

// @desc    Delete project
// @route   DELETE /api/projects/:id
// @access  Public
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findByIdAndDelete(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }
    
    res.status(200).json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// @desc    Add milestone to project
// @route   POST /api/projects/:id/milestones
// @access  Public
exports.addMilestone = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }
    
    project.milestones.push(req.body);
    const savedProject = await project.save();
    
    res.status(200).json({
      success: true,
      message: 'Milestone added successfully',
      data: savedProject
    });
  } catch (error) {
    console.error('Error adding milestone:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// @desc    Update milestone
// @route   PUT /api/projects/:id/milestones/:milestoneId
// @access  Public
exports.updateMilestone = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }
    
    const milestoneIndex = project.milestones.findIndex(
      m => m._id.toString() === req.params.milestoneId
    );
    
    if (milestoneIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Milestone not found'
      });
    }
    
    Object.assign(project.milestones[milestoneIndex], req.body);
    const savedProject = await project.save();
    
    res.status(200).json({
      success: true,
      message: 'Milestone updated successfully',
      data: savedProject
    });
  } catch (error) {
    console.error('Error updating milestone:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// @desc    Add risk to project
// @route   POST /api/projects/:id/risks
// @access  Public
exports.addRisk = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }
    
    project.risks.push(req.body);
    const savedProject = await project.save();
    
    res.status(200).json({
      success: true,
      message: 'Risk added successfully',
      data: savedProject
    });
  } catch (error) {
    console.error('Error adding risk:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// @desc    Update risk
// @route   PUT /api/projects/:id/risks/:riskId
// @access  Public
exports.updateRisk = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    
    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }
    
    const riskIndex = project.risks.findIndex(
      r => r._id.toString() === req.params.riskId
    );
    
    if (riskIndex === -1) {
      return res.status(404).json({
        success: false,
        error: 'Risk not found'
      });
    }
    
    Object.assign(project.risks[riskIndex], req.body);
    const savedProject = await project.save();
    
    res.status(200).json({
      success: true,
      message: 'Risk updated successfully',
      data: savedProject
    });
  } catch (error) {
    console.error('Error updating risk:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};