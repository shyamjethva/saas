const express = require('express');
const SystemSetting = require('../models/SystemSetting');
const User = require('../models/User');
const { protect, authorize } = require('../middleware/auth');
const router = express.Router();

// All system settings routes require authentication and admin role
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

// Get all system settings
router.get('/', async (req, res) => {
    try {
        const { type, active } = req.query;
        const filter = {};
        if (type) filter.settingType = type;
        if (active) filter.isActive = active === 'true';

        const settings = await SystemSetting.find(filter)
            .populate('createdBy', 'firstName lastName email username')
            .populate('updatedBy', 'firstName lastName email username')
            .sort({ settingType: 1, settingName: 1 });

        res.status(200).json({
            success: true,
            count: settings.length,
            data: settings
        });
    } catch (error) {
        console.error('Error fetching system settings:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch system settings'
        });
    }
});

// Get system setting by ID
router.get('/:id', validateObjectId, async (req, res) => {
    try {
        const setting = await SystemSetting.findById(req.params.id)
            .populate('createdBy', 'firstName lastName email username')
            .populate('updatedBy', 'firstName lastName email username');

        if (!setting) {
            return res.status(404).json({
                success: false,
                error: 'System setting not found'
            });
        }

        res.status(200).json({
            success: true,
            data: setting
        });
    } catch (error) {
        console.error('Error fetching system setting:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to fetch system setting'
        });
    }
});

// Create new system setting
router.post('/', async (req, res) => {
    try {
        const { settingType, settingName, settingValue, description, isActive } = req.body;

        if (!settingType || !settingName || settingValue === undefined) {
            return res.status(400).json({
                success: false,
                error: 'Setting type, name, and value are required'
            });
        }

        const newSetting = new SystemSetting({
            settingType,
            settingName,
            settingValue,
            description,
            isActive,
            createdBy: req.user.id
        });

        const savedSetting = await newSetting.save();

        // Populate before returning
        const populated = await SystemSetting.findById(savedSetting._id)
            .populate('createdBy', 'firstName lastName email username');

        res.status(201).json({
            success: true,
            message: 'System setting created successfully',
            data: populated
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ success: false, error: messages.join(', ') });
        }
        console.error('Error creating system setting:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to create system setting'
        });
    }
});

// Update system setting
router.put('/:id', validateObjectId, async (req, res) => {
    try {
        const updatedSetting = await SystemSetting.findByIdAndUpdate(
            req.params.id,
            { ...req.body, updatedBy: req.user.id, updatedAt: Date.now() },
            { new: true, runValidators: true }
        ).populate('createdBy updatedBy', 'firstName lastName email username');

        if (!updatedSetting) {
            return res.status(404).json({
                success: false,
                error: 'System setting not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'System setting updated successfully',
            data: updatedSetting
        });
    } catch (error) {
        if (error.name === 'ValidationError') {
            const messages = Object.values(error.errors).map(err => err.message);
            return res.status(400).json({ success: false, error: messages.join(', ') });
        }
        console.error('Error updating system setting:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to update system setting'
        });
    }
});

// Delete system setting
router.delete('/:id', validateObjectId, async (req, res) => {
    try {
        const deletedSetting = await SystemSetting.findByIdAndDelete(req.params.id);

        if (!deletedSetting) {
            return res.status(404).json({
                success: false,
                error: 'System setting not found'
            });
        }

        res.status(200).json({
            success: true,
            message: 'System setting deleted successfully'
        });
    } catch (error) {
        console.error('Error deleting system setting:', error);
        res.status(500).json({
            success: false,
            error: 'Failed to delete system setting'
        });
    }
});

module.exports = router;