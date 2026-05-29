const Contact = require('../models/Contact');
const Lead = require('../models/Lead');
const { sendConsultationEmail, sendClientConfirmation } = require('../services/emailService');

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
exports.submitContact = async (req, res) => {
  try {
    const { name, email, service, message, phone, company, projectType, budget, timeline, source } = req.body;

    // Validate required fields
    if (!name || !email || !service || !message) {
      return res.status(400).json({
        success: false,
        error: 'Name, email, service, and message are required'
      });
    }

    // Check if service is valid
    const validServices = ['Cloud Migration', 'AI/ML Integration', 'Custom Software Development', 'Cybersecurity Audit', 'Free Consultation', 'CRM Demo', 'CRM Demo Booking', 'Business Transformation', 'General Inquiry', 'Digital Marketing', 'SEO Optimization', 'Social Media Marketing', 'Content Marketing', 'PPC Advertising', 'Graphical Development', 'Collaboration & Project Management'];

    if (!validServices.includes(service)) {
      console.log('Invalid service type attempted:', service);
      return res.status(400).json({
        success: false,
        error: `Invalid service type: ${service}. Valid options are: ${validServices.join(', ')}`
      });
    }

    // Create new contact with all fields from body (strict: false in model allows this)
    const contact = new Contact({
      ...req.body,
      // Ensure specific fields are present as they are used in CRM logic
      name: name || req.body.name,
      email: email || req.body.email,
      service: service || req.body.service,
      message: message || req.body.message
    });

    console.log('📝 Attempting to save contact:', {
      name: contact.name,
      email: contact.email,
      service: contact.service
    });

    // Save to database
    const savedContact = await contact.save();

    // Also create a Lead for CRM
    try {
      await Lead.create({
        firstName: name.split(' ')[0] || name,
        lastName: name.split(' ').slice(1).join(' ') || 'Lead',
        email,
        phone: phone || '0000000000',
        company: company || 'Individual',
        position: 'Potential Client',
        leadSource: 'Website',
        industry: service,
        leadStage: 'New Lead',
        priority: 'Medium',
        notes: message,
        assignedTo: null // This will be assigned manually by Admin later
      });
      console.log('✅ Lead created in CRM successfully');
    } catch (leadError) {
      console.error('❌ Error creating Lead from contact:', leadError);
      // Don't fail the contact submission if Lead creation fails
    }

    // Send emails for all submissions
    // Execute asynchronously to not block the response
    sendConsultationEmail(req.body)
      .then(() => console.log('✅ Notification email to team sent successfully'))
      .catch(emailError => console.error('❌ Error sending notification emails:', emailError));

    sendClientConfirmation(email, name)
      .then(() => console.log('✅ Confirmation email to client sent successfully'))
      .catch(emailError => console.error('❌ Error sending client confirmation email:', emailError));

    // Return success response
    res.status(201).json({
      success: true,
      message: 'Contact form submitted successfully',
      data: {
        id: savedContact._id,
        name: savedContact.name,
        email: savedContact.email,
        service: savedContact.service,
        company: savedContact.company,
        phone: savedContact.phone,
        projectType: savedContact.projectType,
        budget: savedContact.budget,
        timeline: savedContact.timeline,
        createdAt: savedContact.createdAt
      }
    });

  } catch (error) {
    console.error('Error submitting contact form:', error);

    // Handle validation errors
    if (error.name === 'ValidationError') {
      const errors = Object.values(error.errors).map(err => err.message);
      return res.status(400).json({
        success: false,
        error: 'Validation failed',
        details: errors
      });
    }

    // Handle duplicate email error
    if (error.code === 11000) {
      return res.status(400).json({
        success: false,
        error: 'Email already exists'
      });
    }

    // Handle general errors
    res.status(500).json({
      success: false,
      error: 'Internal server error',
      message: error.message,
      ...(process.env.NODE_ENV === 'development' && { stack: error.stack })
    });
  }
};

// @desc    Get all contacts
// @route   GET /api/contact
// @access  Private/Admin
exports.getAllContacts = async (req, res) => {
  try {
    const contacts = await Contact.find()
      .sort({ createdAt: -1 })
      .select('-__v');

    res.status(200).json({
      success: true,
      count: contacts.length,
      data: contacts
    });

  } catch (error) {
    console.error('Error fetching contacts:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// @desc    Get contact by ID
// @route   GET /api/contact/:id
// @access  Private/Admin
exports.getContactById = async (req, res) => {
  try {
    const contact = await Contact.findById(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact not found'
      });
    }

    res.status(200).json({
      success: true,
      data: contact
    });

  } catch (error) {
    console.error('Error fetching contact:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};

// @desc    Delete contact
// @route   DELETE /api/contact/:id
// @access  Private/Admin
exports.deleteContact = async (req, res) => {
  try {
    const contact = await Contact.findByIdAndDelete(req.params.id);

    if (!contact) {
      return res.status(404).json({
        success: false,
        error: 'Contact not found'
      });
    }

    res.status(200).json({
      success: true,
      message: 'Contact deleted successfully'
    });

  } catch (error) {
    console.error('Error deleting contact:', error);
    res.status(500).json({
      success: false,
      error: 'Internal server error'
    });
  }
};