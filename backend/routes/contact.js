const express = require('express');
const { submitContact, getAllContacts, getContactById, deleteContact } = require('../controllers/contactController');
const { protect, authorize } = require('../middleware/auth');

const router = express.Router();

// Public routes
router.route('/')
  .post(submitContact);

// Admin routes
router.route('/')
  .get(protect, authorize('Admin', 'admin'), getAllContacts);

router.route('/:id')
  .get(protect, authorize('Admin', 'admin'), getContactById)
  .delete(protect, authorize('Admin', 'admin'), deleteContact);

module.exports = router;