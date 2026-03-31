const express = require('express');
const {
  createProject,
  getAllProjects,
  getProjectById,
  updateProject,
  deleteProject,
  addMilestone,
  updateMilestone,
  addRisk,
  updateRisk
} = require('../controllers/projectController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All project management routes require authentication and admin role
router.use(protect);
router.use(authorize('Admin', 'admin'));

// Public routes
router.route('/')
  .post(createProject)
  .get(getAllProjects);

router.route('/:id')
  .get(getProjectById)
  .put(updateProject)
  .delete(deleteProject);

// Milestone routes
router.route('/:id/milestones')
  .post(addMilestone);

router.route('/:id/milestones/:milestoneId')
  .put(updateMilestone);

// Risk routes
router.route('/:id/risks')
  .post(addRisk);

router.route('/:id/risks/:riskId')
  .put(updateRisk);

module.exports = router;