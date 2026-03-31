const express = require('express');
const jwt = require('jsonwebtoken');
const Auth = require('../models/Auth');
const Client = require('../models/Client');
const Project = require('../models/Project');
const { protect } = require('../middleware/auth');

const JWT_SECRET = process.env.JWT_SECRET || 'enterprise_nexus_digital_secret_2024';

const router = express.Router();

// Login route
router.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({
        success: false,
        error: 'Username and password are required'
      });
    }

    // Find user by username or email
    const user = await Auth.findOne({
      $or: [{ username }, { email: username }]
    }).populate('clientId');

    if (!user) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(401).json({
        success: false,
        error: 'Account is deactivated'
      });
    }

    // Verify password
    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(401).json({
        success: false,
        error: 'Invalid credentials'
      });
    }

    // Update last login
    user.lastLogin = new Date();
    await user.save();

    // Generate JWT token
    const token = jwt.sign(
      {
        id: user._id,
        clientId: user.clientId._id,
        username: user.username,
        role: user.role
      },
      JWT_SECRET,
      { expiresIn: '24h' }
    );

    res.json({
      success: true,
      message: 'Login successful',
      token,
      user: {
        id: user._id,
        username: user.username,
        email: user.email,
        role: user.role,
        companyName: user.clientId.companyName,
        clientId: user.clientId._id
      }
    });

  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
});

// Get client dashboard data
router.get('/dashboard', protect, async (req, res) => {
  try {
    const clientId = req.user.clientId;

    // Get client projects
    const projects = await Project.find({ clientId })
      .sort({ createdAt: -1 })
      .limit(10);

    // Calculate dashboard stats
    const activeProjects = projects.filter(p => p.status !== 'Completed').length;
    const completedProjects = projects.filter(p => p.status === 'Completed').length;

    // Get team members from projects (mock data since we don't have actual team member refs)
    const totalTeamMembers = projects.reduce((sum, p) => sum + (p.teamMembers?.length || 4), 0);

    // Calculate total hours (using budget as proxy or mock data)
    const totalHours = projects.reduce((sum, p) => sum + (p.actualCost || p.budget || 0) / 100, 0);

    res.json({
      success: true,
      data: {
        projects: projects.map(project => ({
          id: project._id,
          name: project.projectName,
          status: project.status,
          progress: project.status === 'Completed' ? 100 : project.status === 'In Progress' ? 75 : 50,
          dueDate: project.endDate,
          team: project.teamMembers?.length || 4,
          startDate: project.startDate,
          endDate: project.endDate
        })),
        stats: {
          activeProjects,
          completedProjects,
          totalTeamMembers,
          totalHoursLogged: Math.round(totalHours)
        }
      }
    });

  } catch (error) {
    console.error('Dashboard error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch dashboard data'
    });
  }
});

// Get specific project details
router.get('/projects/:projectId', protect, async (req, res) => {
  try {
    const { projectId } = req.params;
    const clientId = req.user.clientId;

    const project = await Project.findOne({
      _id: projectId,
      clientId
    }).populate('teamMembers', 'name email role');

    if (!project) {
      return res.status(404).json({
        success: false,
        error: 'Project not found'
      });
    }

    res.json({
      success: true,
      data: project
    });

  } catch (error) {
    console.error('Project details error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch project details'
    });
  }
});

// Get recent activity
router.get('/activity', protect, async (req, res) => {
  try {
    const clientId = req.user.clientId;

    // Get recent projects to simulate activity
    const recentProjects = await Project.find({ clientId })
      .sort({ updatedAt: -1 })
      .limit(10);

    const activity = recentProjects.map((project, index) => ({
      id: index + 1,
      action: `Project "${project.name}" was updated`,
      project: project.name,
      time: getTimeAgo(project.updatedAt),
      type: 'project_update'
    }));

    res.json({
      success: true,
      data: activity
    });

  } catch (error) {
    console.error('Activity error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to fetch activity'
    });
  }
});

// Helper function to format time ago
function getTimeAgo(date) {
  const now = new Date();
  const diffMs = now - new Date(date);
  const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
  const diffMinutes = Math.floor(diffMs / (1000 * 60));

  if (diffDays > 0) {
    return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
  } else if (diffHours > 0) {
    return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
  } else {
    return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
  }
}

// Upload document
router.post('/documents/upload', protect, async (req, res) => {
  try {
    // In a real implementation, you'd handle file uploads here
    // This is a mock implementation
    const { fileName, fileType } = req.body;

    if (!fileName || !fileType) {
      return res.status(400).json({
        success: false,
        error: 'File name and type are required'
      });
    }

    res.json({
      success: true,
      message: 'Document uploaded successfully',
      data: {
        id: Math.random().toString(36).substr(2, 9),
        fileName,
        fileType,
        uploadDate: new Date()
      }
    });

  } catch (error) {
    console.error('Document upload error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to upload document'
    });
  }
});

module.exports = router;