const mongoose = require('mongoose');

const leadSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    required: true,
    trim: true
  },
  position: {
    type: String,
    required: true,
    trim: true
  },
  leadSource: {
    type: String,
    enum: [
      'Website', 'Referral', 'Social Media', 'Email Campaign',
      'Cold Call', 'Event', 'Partner', 'Advertisement'
    ],
    required: true
  },
  industry: {
    type: String,
    required: true,
    trim: true
  },
  estimatedValue: {
    type: Number,
    min: 0
  },
  leadStage: {
    type: String,
    enum: [
      'New Lead', 'Contacted', 'Qualified', 'Proposal Sent',
      'Negotiation', 'Closed Won', 'Closed Lost'
    ],
    default: 'New Lead'
  },
  priority: {
    type: String,
    enum: ['Low', 'Medium', 'High', 'Critical'],
    default: 'Medium'
  },
  assignedTo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: false
  },
  lastContacted: {
    type: Date
  },
  nextFollowUp: {
    type: Date
  },
  notes: {
    type: String,
    default: ''
  },
  convertedToClient: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Update the updatedAt field before saving
leadSchema.pre('save', function (next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Lead', leadSchema);