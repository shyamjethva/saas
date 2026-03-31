const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contact');
const clientRoutes = require('./routes/clients');
const projectRoutes = require('./routes/projects');
const clientPortalRoutes = require('./routes/clientPortal');
const consultationRoutes = require('./routes/consultations');
const billingRoutes = require('./routes/billing');
const userRoutes = require('./routes/users');
const leadsRoutes = require('./routes/leads');
const securitySettingsRoutes = require('./routes/securitySettings');
const systemSettingsRoutes = require('./routes/systemSettings');
const termsRoutes = require('./routes/terms');

const app = express();

/* =======================
   Middleware
======================= */
app.use(helmet());
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true }));

/* =======================
   Routes
======================= */
app.use('/api/auth', authRoutes);
app.use('/api/contact', contactRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/projects', projectRoutes);
app.use('/api/client-portal', clientPortalRoutes);
app.use('/api/consultations', consultationRoutes);
app.use('/api/billing', billingRoutes);
app.use('/api/users', userRoutes);
app.use('/api/leads', leadsRoutes);
app.use('/api/security-settings', securitySettingsRoutes);
app.use('/api/system-settings', systemSettingsRoutes);
app.use('/api/terms', termsRoutes);

// Health check
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running 🚀',
    timestamp: new Date().toISOString(),
    uptime: process.uptime()
  });
});

/* =======================
   404 Handler
======================= */
app.use('*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'Route not found'
  });
});

/* =======================
   Global Error Handler
======================= */
app.use((err, req, res, next) => {
  console.error('Global error:', err);

  res.status(err.status || 500).json({
    success: false,
    error: err.message || 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

/* =======================
   Database + Server Start
======================= */
const PORT = process.env.PORT || 5002;

const startServer = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log('✅ MongoDB connected successfully');

    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
      console.log(`🌍 Environment: ${process.env.NODE_ENV || 'development'}`);
    });

  } catch (error) {
    console.error('❌ Failed to start server:', error);
    process.exit(1);
  }
};

startServer();

/* =======================
   Graceful Shutdown
======================= */
const shutdown = (signal) => {
  console.log(`${signal} received. Shutting down gracefully...`);
  mongoose.connection.close(false, () => {
    console.log('MongoDB connection closed');
    process.exit(0);
  });
};

process.on('SIGTERM', () => shutdown('SIGTERM'));
process.on('SIGINT', () => shutdown('SIGINT'));
