const nodemailer = require('nodemailer');

// Create transporter
const createTransporter = () => {
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, // Use SSL
    auth: {
      user: process.env.EMAIL_USER || 'errorinfotech404@gmail.com',
      pass: process.env.EMAIL_PASS || 'your-app-password-here'
    },
    debug: true, // Enable debug logging
    logger: true // Log to console
  });

  // Verify connection
  transporter.verify((error, success) => {
    if (error) {
      console.error('❌ SMTP Connection Error:', error);
    } else {
      console.log('✅ SMTP Server is ready to take messages');
    }
  });

  return transporter;
};

// Send email to HR and BDE
const sendConsultationEmail = async (consultationData) => {
  try {
    const transporter = createTransporter();

    const {
      name, email, phone, company, industry, companySize,
      website, projectType, budget, timeline, goals, challenges,
      consultationType, preferredContact, message, service
    } = consultationData;

    // Email content
    const emailContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="background: linear-gradient(135deg, #00c853, #2979ff); color: white; padding: 20px; text-align: center; border-radius: 10px;">
          <h1 style="margin: 0; font-size: 28px;">🚨 New ${service || 'Consultation'} Request</h1>
          <p style="margin: 10px 0 0; font-size: 16px;">High Priority - New Lead</p>
        </div>
        
        <div style="background: #f5f5f5; padding: 20px; margin: 20px 0; border-radius: 10px;">
          <h2 style="color: #333; margin-top: 0;">📋 Client Information</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Name:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Email:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Phone:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Company:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${company || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Industry:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${industry || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Company Size:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${companySize || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Website:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${website || 'Not provided'}</td>
            </tr>
          </table>
        </div>

        <div style="background: #e3f2fd; padding: 20px; margin: 20px 0; border-radius: 10px;">
          <h2 style="color: #1976d2; margin-top: 0;">🎯 Project Details</h2>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Consultation Type:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${consultationType}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Project Type:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${projectType || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Budget Range:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${budget || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Timeline:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${timeline || 'Not specified'}</td>
            </tr>
            <tr>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;"><strong>Preferred Contact:</strong></td>
              <td style="padding: 8px; border-bottom: 1px solid #ddd;">${preferredContact}</td>
            </tr>
          </table>
        </div>

        <div style="background: #fff3e0; padding: 20px; margin: 20px 0; border-radius: 10px;">
          <h2 style="color: #f57c00; margin-top: 0;">💡 Business Goals / Request Details</h2>
          <p style="margin: 0; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #f57c00; white-space: pre-line;">
            ${message || goals || 'Not provided'}
          </p>
        </div>

        <div style="background: #ffebee; padding: 20px; margin: 20px 0; border-radius: 10px; display: ${challenges ? 'block' : 'none'};">
          <h2 style="color: #d32f2f; margin-top: 0;">⚠️ Current Challenges</h2>
          <p style="margin: 0; padding: 10px; background: white; border-radius: 5px; border-left: 4px solid #d32f2f;">
            ${challenges || 'Not provided'}
          </p>
        </div>

        <div style="text-align: center; padding: 20px; background: #f1f8e9; border-radius: 10px;">
          <h3 style="color: #388e3c; margin: 0;">⚡ Action Required</h3>
          <p style="margin: 10px 0 0; color: #666;">
            Please contact this lead within 24 hours to schedule the consultation.
          </p>
          <div style="margin-top: 15px;">
            <a href="mailto:${email}" style="background: #4caf50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 0 10px;">
              📧 Email Client
            </a>
            <a href="tel:${phone}" style="background: #2196f3; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; display: inline-block; margin: 0 10px;">
              📞 Call Client
            </a>
          </div>
        </div>

        <div style="text-align: center; padding: 15px; background: #e0e0e0; border-radius: 10px; margin-top: 20px; font-size: 12px; color: #666;">
          <p style="margin: 0;">
            This is an automated notification from Error Infotech CRM System<br>
            Lead submitted on: ${new Date().toLocaleString('en-IN')}
          </p>
        </div>
      </div>
    `;

    // Send to HR
    const hrMailOptions = {
      from: process.env.EMAIL_USER || 'errorinfotech404@gmail.com',
      to: process.env.EMAIL_USER, // Changed to use the email in .env
      subject: `🚨 URGENT: New ${service || 'Consultation'} Request from ${name} - ${company || 'Individual'}`,
      html: emailContent
    };

    // Send to BDE
    const bdeMailOptions = {
      from: process.env.EMAIL_USER || 'errorinfotech404@gmail.com',
      to: process.env.EMAIL_USER, // Changed to use the email in .env
      subject: `🎯 NEW LEAD: ${service || 'Consultation'} Request - ${name} (${company || 'Individual'})`,
      html: emailContent
    };

    // Send emails
    await transporter.sendMail(hrMailOptions);
    await transporter.sendMail(bdeMailOptions);

    console.log('✅ Consultation emails sent successfully to HR and BDE');
    return true;

  } catch (error) {
    console.error('❌ Error sending consultation emails:', error);
    throw error;
  }
};

// Send confirmation email to client
const sendClientConfirmation = async (clientEmail, clientName) => {
  try {
    const transporter = createTransporter();

    const confirmationContent = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; padding: 30px; background: linear-gradient(135deg, #00c853, #2979ff); color: white; border-radius: 10px;">
          <h1 style="margin: 0; font-size: 32px;">🎉 Thank You!</h1>
          <p style="margin: 10px 0 0; font-size: 18px;">We've Received Your Consultation Request</p>
        </div>
        
        <div style="padding: 30px; text-align: center;">
          <h2 style="color: #333;">Hi ${clientName},</h2>
          <p style="font-size: 16px; line-height: 1.6; color: #666;">
            Thank you for your interest in Error Infotech's services. We're excited to help you 
            transform your business with our digital solutions.
          </p>
          
          <div style="background: #e8f5e8; padding: 20px; margin: 25px 0; border-radius: 10px; border-left: 4px solid #4caf50;">
            <h3 style="color: #2e7d32; margin-top: 0;">📋 What Happens Next?</h3>
            <ul style="text-align: left; color: #555; margin: 15px 0; padding-left: 20px;">
              <li style="margin: 10px 0;">Our team will review your requirements within 2 hours</li>
              <li style="margin: 10px 0;">You'll receive a call from our Business Development Expert</li>
              <li style="margin: 10px 0;">We'll schedule your free 30-minute consultation</li>
              <li style="margin: 10px 0;">Get a customized digital transformation roadmap</li>
            </ul>
          </div>
          
          <div style="background: #fff3e0; padding: 20px; margin: 25px 0; border-radius: 10px;">
            <h3 style="color: #f57c00; margin-top: 0;">⏰ Expected Timeline</h3>
            <p style="margin: 0; color: #666;">
              <strong>24 Hours:</strong> Initial contact from our team<br>
              <strong>48 Hours:</strong> Consultation scheduled<br>
              <strong>72 Hours:</strong> Detailed proposal delivered
            </p>
          </div>
          
          <div style="margin: 30px 0;">
            <a href="https://errorinfotech.com" style="background: #2979ff; color: white; padding: 15px 30px; text-decoration: none; border-radius: 30px; display: inline-block; font-weight: bold;">
              Visit Our Website
            </a>
          </div>
          
          <div style="background: #f5f5f5; padding: 20px; margin-top: 30px; border-radius: 10px;">
            <h3 style="color: #333; margin-top: 0;">📞 Need Immediate Help?</h3>
            <p style="margin: 10px 0; color: #666;">
              Call us: <strong>+91 81287 04400</strong><br>
              Email: <strong>errorinfotech404@gmail.com</strong><br>
              WhatsApp: <strong>+91 81287 04400</strong>
            </p>
          </div>
        </div>
        
        <div style="text-align: center; padding: 15px; background: #333; color: white; border-radius: 0 0 10px 10px; font-size: 12px;">
          <p style="margin: 0;">
            © 2024 Error Infotech Pvt. Ltd. | Transforming Businesses Digitally<br>
            302 - Malviya Coins, Dr Yagnik Rd, Rajkot, Gujarat 360002
          </p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER || 'errorinfotech404@gmail.com',
      to: clientEmail,
      subject: '✅ Confirmation: Your Free Consultation Request Received',
      html: confirmationContent
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Confirmation email sent to client');
    return true;

  } catch (error) {
    console.error('❌ Error sending client confirmation:', error);
    throw error;
  }
};

module.exports = {
  sendConsultationEmail,
  sendClientConfirmation
};