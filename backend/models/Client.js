const mongoose = require('mongoose');

const clientSchema = new mongoose.Schema({
  companyName: {
    type: String,
    required: [true, 'Company name is required'],
    trim: true,
    maxlength: [100, 'Company name cannot exceed 100 characters']
  },
  contactPerson: {
    type: String,
    required: [true, 'Contact person is required'],
    trim: true,
    maxlength: [100, 'Contact person name cannot exceed 100 characters']
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  phone: {
    type: String,
    trim: true
  },
  industry: {
    type: String,
    required: [true, 'Industry is required'],
    enum: {
      values: ['Technology', 'Finance', 'Healthcare', 'Retail', 'Manufacturing', 'Education', 'Government', 'Other'],
      message: '{VALUE} is not a valid industry'
    }
  },
  companySize: {
    type: String,
    enum: {
      values: ['1-10', '11-50', '51-200', '201-500', '501-1000', '1000+'],
      message: '{VALUE} is not a valid company size'
    }
  },
  website: {
    type: String,
    trim: true
  },
  address: {
    street: String,
    city: String,
    state: String,
    zipCode: String,
    country: String
  },
  status: {
    type: String,
    enum: {
      values: ['Prospect', 'Active', 'Inactive', 'Lost'],
      message: '{VALUE} is not a valid status'
    },
    default: 'Prospect'
  },
  healthScore: {
    type: Number,
    min: 0,
    max: 100,
    default: 50
  },
  notes: {
    type: String,
    maxlength: [1000, 'Notes cannot exceed 1000 characters']
  }
}, {
  timestamps: true
});

// Indexes for faster queries
clientSchema.index({ email: 1 });
clientSchema.index({ companyName: 1 });
clientSchema.index({ status: 1 });
clientSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Client', clientSchema);