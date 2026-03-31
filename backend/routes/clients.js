const express = require('express');
const {
  createClient,
  getAllClients,
  getClientById,
  updateClient,
  deleteClient,
  updateHealthScore
} = require('../controllers/clientController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// All client management routes require authentication and admin role
router.use(protect);
router.use(authorize('Admin', 'admin'));

// Public routes
router.route('/')
  .post(createClient)
  .get(getAllClients);

router.route('/:id')
  .get(getClientById)
  .put(updateClient)
  .delete(deleteClient);

router.route('/:id/health-score')
  .put(updateHealthScore);

module.exports = router;