const mongoose = require('mongoose');

const securitySettingSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  twoFactorAuth: {
    enabled: {
      type: Boolean,
      default: false
    },
    method: {
      type: String,
      enum: ['SMS', 'Email', 'Authenticator', 'Hardware Token'],
      default: 'SMS'
    },
    backupCodes: [{
      code: String,
      used: {
        type: Boolean,
        default: false
      },
      createdAt: Date
    }]
  },
  ipRestrictions: {
    enabled: {
      type: Boolean,
      default: false
    },
    allowedIPs: [String],
    blockedIPs: [String],
    countryRestrictions: [String]
  },
  sessionTimeout: {
    type: Number, // minutes
    default: 30
  },
  loginAttempts: {
    maxAttempts: {
      type: Number,
      default: 5
    },
    lockoutDuration: {
      type: Number, // minutes
      default: 30
    },
    lastAttempt: Date,
    attemptsCount: {
      type: Number,
      default: 0
    }
  },
  passwordPolicy: {
    minLength: {
      type: Number,
      default: 8
    },
    requireNumbers: {
      type: Boolean,
      default: true
    },
    requireSpecialChars: {
      type: Boolean,
      default: true
    },
    requireUppercase: {
      type: Boolean,
      default: true
    },
    requireLowercase: {
      type: Boolean,
      default: true
    },
    expireDays: {
      type: Number,
      default: 90
    }
  },
  activityLogging: {
    enabled: {
      type: Boolean,
      default: true
    },
    logLevel: {
      type: String,
      enum: ['Basic', 'Standard', 'Detailed'],
      default: 'Standard'
    },
    retentionPeriod: {
      type: Number, // days
      default: 90
    }
  },
  notificationSettings: {
    securityAlerts: {
      email: {
        type: Boolean,
        default: true
      },
      sms: {
        type: Boolean,
        default: false
      },
      push: {
        type: Boolean,
        default: true
      }
    }
  },
  lastUpdated: {
    type: Date,
    default: Date.now
  }
});

// Update the lastUpdated field before saving
securitySettingSchema.pre('save', function(next) {
  this.lastUpdated = Date.now();
  next();
});

module.exports = mongoose.model('SecuritySetting', securitySettingSchema);