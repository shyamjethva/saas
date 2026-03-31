const mongoose = require('mongoose');

const termSchema = new mongoose.Schema({
  contractType: {
    type: String,
    required: true,
    enum: [
      'Service Agreement', 'NDA', 'Employment Contract', 
      'Vendor Agreement', 'Partnership Deed', 'Client Contract'
    ]
  },
  title: {
    type: String,
    required: true,
    trim: true
  },
  description: {
    type: String,
    default: ''
  },
  parties: [{
    name: String,
    role: String, // Client, Vendor, Employee, etc.
    email: String,
    signature: {
      signed: Boolean,
      signatureDate: Date,
      signedBy: String
    }
  }],
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date
  },
  renewalTerms: {
    autoRenew: {
      type: Boolean,
      default: false
    },
    renewalPeriod: {
      type: Number, // months
      default: 12
    },
    renewalNotice: {
      type: Number, // days before expiration
      default: 30
    }
  },
  status: {
    type: String,
    enum: ['Draft', 'Pending', 'Active', 'Expired', 'Completed', 'Terminated'],
    default: 'Draft'
  },
  templateId: {
    type: String, // Reference to a template if applicable
    default: null
  },
  attachments: [{
    fileName: String,
    filePath: String,
    uploadedAt: Date,
    uploadedBy: String
  }],
  approvalStatus: {
    requiredApprovals: Number,
    approvedBy: [{
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      approvedAt: Date,
      role: String
    }],
    currentApprovers: [{
      userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
      },
      role: String,
      approved: {
        type: Boolean,
        default: false
      }
    }]
  },
  notes: {
    type: String,
    default: ''
  },
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  updatedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
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
termSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('Term', termSchema);