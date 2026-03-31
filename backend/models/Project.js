const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
  projectName: {
    type: String,
    required: [true, 'Project name is required'],
    trim: true,
    maxlength: [100, 'Project name cannot exceed 100 characters']
  },
  clientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Client',
    required: [true, 'Client is required']
  },
  clientName: {
    type: String,
    required: [true, 'Client name is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    maxlength: [1000, 'Description cannot exceed 1000 characters']
  },
  status: {
    type: String,
    enum: {
      values: ['Planning', 'In Progress', 'On Hold', 'Completed', 'Cancelled'],
      message: '{VALUE} is not a valid status'
    },
    default: 'Planning'
  },
  priority: {
    type: String,
    enum: {
      values: ['Low', 'Medium', 'High', 'Critical'],
      message: '{VALUE} is not a valid priority'
    },
    default: 'Medium'
  },
  startDate: {
    type: Date,
    required: [true, 'Start date is required']
  },
  endDate: {
    type: Date
  },
  budget: {
    type: Number,
    min: 0
  },
  actualCost: {
    type: Number,
    default: 0,
    min: 0
  },
  teamMembers: [{
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    role: {
      type: String,
      trim: true
    },
    assignedDate: {
      type: Date,
      default: Date.now
    }
  }],
  technologies: [{
    type: String,
    trim: true
  }],
  milestones: [{
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      maxlength: [500, 'Milestone description cannot exceed 500 characters']
    },
    dueDate: Date,
    completed: {
      type: Boolean,
      default: false
    },
    completedDate: Date
  }],
  risks: [{
    title: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      maxlength: [500, 'Risk description cannot exceed 500 characters']
    },
    severity: {
      type: String,
      enum: ['Low', 'Medium', 'High', 'Critical'],
      default: 'Medium'
    },
    mitigationPlan: String
  }]
}, {
  timestamps: true
});

// Indexes for faster queries
projectSchema.index({ clientId: 1 });
projectSchema.index({ status: 1 });
projectSchema.index({ priority: 1 });
projectSchema.index({ startDate: -1 });

module.exports = mongoose.model('Project', projectSchema);