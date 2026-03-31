const express = require('express');
const SecuritySetting = require('../models/SecuritySetting');
const User = require('../models/User');
const { protect, authorize } = require('../middleware/auth');
const router = express.Router();

// All security settings routes require authentication and admin role
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

// Get all security settings
router.get('/', async (req, res) => {
    try {
        const settings = await SecuritySetting.find().populate('userId', 'firstName lastName email username');
        res.status(200).json({
            success: true,
            count: settings.length,
            data: settings
        });
    } catch (error) {
        console.error('Error fetching security settings:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch security settings'
        });
    }
});

// Get security settings for a specific user
router.get('/user/:userId', async (req, res) => {
    try {
        if (!isValidObjectId(req.params.userId)) {
            return res.status(400).json({ success: false, error: 'Invalid User ID format' });
        }

        let settings = await SecuritySetting.findOne({ userId: req.params.userId })
            .populate('userId', 'firstName lastName email username');

        if (!settings) {
            // Create default settings if not found
            settings = await SecuritySetting.create({ userId: req.params.userId });
        }

        res.status(200).json({
            success: true,
            data: settings
        });
    } catch (error) {
        console.error('Error fetching user security settings:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch security settings'
        });
    }
});

// Update security settings by ID
router.put('/:id', validateObjectId, async (req, res) => {
    try {
        const settings = await SecuritySetting.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        ).populate('userId', 'firstName lastName email username');

        if (!settings) {
            return res.status(404).json({
                success: false,
                error: 'Security settings not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'Security settings updated successfully',
            data: settings
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ success: false, error: messages.join(', ') });
        }
        console.error('Error updating security settings:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to update security settings'
        });
    }
});

// Reset security settings for a user
router.post('/user/:userId/reset', async (req, res) => {
    try {
        if (!isValidObjectId(req.params.userId)) {
            return res.status(400).json({ success: false, error: 'Invalid User ID format' });
        }

        await SecuritySetting.findOneAndDelete({ userId: req.params.userId });
        const newSettings = await SecuritySetting.create({ userId: req.params.userId });

        res.status(200).json({
            success: true,
            message: 'Security settings reset to factory defaults',
            data: newSettings
        });
    } catch (error) {
        console.error('Error resetting security settings:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to reset security settings'
        });
    }
});

module.exports = router;