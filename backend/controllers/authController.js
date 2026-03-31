const Auth = require('../models/Auth');
const jwt = require('jsonwebtoken');

// @desc    Register a new user/client account
// @route   POST /api/auth/register
// @access  Public
exports.register = async (req, res) => {
    try {
        const { username, email, password, clientId, role } = req.body;

        // Check if user already exists
        const userExists = await Auth.findOne({ $or: [{ email }, { username }] });
        if (userExists) {
            return res.status(400).json({
                success: false,
                error: 'User with this email or username already exists'
            });
        }

        // Create auth entry
        const auth = await Auth.create({
            username,
            email,
            password,
            clientId,
            role
        });

        // Create token
        const token = jwt.sign({ id: auth._id, role: auth.role }, process.env.JWT_SECRET || 'secret', {
            expiresIn: '30d'
        });

        res.status(201).json({
            success: true,
            data: {
                id: auth._id,
                username: auth.username,
                email: auth.email,
                role: auth.role,
                token
            }
        });
    } catch (error) {
        console.error('Registration error:', error);
        res.status(500).json({
            success: false,
            error: error.message || 'Server error'
        });
    }
};

// @desc    Login user/client
// @route   POST /api/auth/login
// @access  Public
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Validation
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                error: 'Please provide email and password'
            });
        }

        // Check user
        const auth = await Auth.findOne({ email }).select('+password');
        if (!auth) {
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials'
            });
        }

        // Check if password matches
        const isMatch = await auth.comparePassword(password);
        if (!isMatch) {
            return res.status(401).json({
                success: false,
                error: 'Invalid credentials'
            });
        }

        // Create token
        const token = jwt.sign({ id: auth._id, role: auth.role }, process.env.JWT_SECRET || 'secret', {
            expiresIn: '30d'
        });

        auth.lastLogin = Date.now();
        await auth.save();

        res.status(200).json({
            success: true,
            data: {
                id: auth._id,
                username: auth.username,
                email: auth.email,
                role: auth.role,
                token
            }
        });
    } catch (error) {
        console.error('Login error:', error);
        res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
};

// @desc    Get current logged in user
// @route   GET /api/auth/me
// @access  Private
exports.getMe = async (req, res) => {
    try {
        const auth = await Auth.findById(req.user.id);
        res.status(200).json({
            success: true,
            data: auth
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server error'
        });
    }
};
