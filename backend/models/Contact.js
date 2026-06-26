const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
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
  service: {
    type: String,
    required: [true, 'Service type is required'],
    enum: {
      values: ['Cloud Migration', 'AI/ML Integration', 'Custom Software Development', 'Cybersecurity Audit', 'Free Consultation', 'CRM Demo', 'CRM Demo Booking', 'Business Transformation', 'General Inquiry', 'Digital Marketing', 'SEO Optimization', 'Social Media Marketing', 'Content Marketing', 'PPC Advertising', 'Graphical Development', 'Collaboration & Project Management', 'Job Application'],
      message: '{VALUE} is not a valid service type'
    }
  },
  phone: {
    type: String,
    trim: true,
    // Looser regex to allow most formats, and only if provided
    validate: {
      validator: function (v) {
        return !v || /^\+?[0-9\s-]{8,20}$/.test(v);
      },
      message: 'Please enter a valid phone number'
    }
  },
  company: {
    type: String,
    trim: true,
    maxlength: [100, 'Company name cannot exceed 100 characters']
  },
  projectType: String,
  budget: String,
  timeline: String,
  industry: String,
  companySize: String,
  website: String,
  goals: String,
  challenges: String,
  preferredContact: String,
  consultationType: String,
  source: {
    type: String,
    default: 'Website'
  },
  message: {
    type: String,
    required: [true, 'Message is required'],
    trim: true,
    maxlength: [5000, 'Message cannot exceed 5000 characters']
  }
}, {
  timestamps: true,
  strict: false // Allow extra fields from frontend
});

// Index for faster queries
contactSchema.index({ email: 1 });
contactSchema.index({ createdAt: -1 });

module.exports = mongoose.model('Contact', contactSchema);