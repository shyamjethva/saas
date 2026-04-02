const mongoose = require('mongoose');

const consultationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Name is required'],
    trim: true,
    maxlength: [100, 'Name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/, 'Please enter a valid email']
  },
  company: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true,
    maxlength: [100, 'Company name cannot exceed 100 characters']
  },
  phone: {
    type: String,
    trim: true
  },
  service: {
    type: String,
    required: [true, 'Service interest is required']
  },
  message: {
    type: String,
    required: [true, 'Project details are required'],
    maxlength: [5000, 'Message cannot exceed 5000 characters']
  },
  preferredDate: {
    type: Date
  },
  timezone: {
    type: String,
    trim: true
  },
  status: {
    type: String,
    default: 'Pending'
  }
}, {
  timestamps: true,
  strict: false
});

// Indexes for faster queries
consultationSchema.index({ email: 1 });
consultationSchema.index({ company: 1 });
consultationSchema.index({ status: 1 });
consultationSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Consultation', consultationSchema);