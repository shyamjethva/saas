const mongoose = require('mongoose');

const systemSettingSchema = new mongoose.Schema({
  settingType: {
    type: String,
    required: true,
    enum: [
      'role-management', 'access-control', 'workflow', 'department',
      'branch-config', 'custom-fields', 'automation', 'integrations'
    ]
  },
  settingName: {
    type: String,
    required: true,
    trim: true
  },
  settingValue: {
    type: mongoose.Schema.Types.Mixed,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  isActive: {
    type: Boolean,
    default: true
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
systemSettingSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

module.exports = mongoose.model('SystemSetting', systemSettingSchema);