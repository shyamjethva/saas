const axios = require('axios');

async function testConsultationForm() {
  try {
    console.log('Testing consultation form submission...');
    
    const consultationData = {
      name: 'Test Client',
      email: 'test.client@example.com',
      phone: '+91 98765 43210',
      company: 'Test Company Pvt Ltd',
      industry: 'Technology',
      companySize: '51-200 employees',
      website: 'https://testcompany.com',
      projectType: 'Website Development',
      budget: '₹2,00,000 - ₹5,00,000',
      timeline: 'Short term (1-3 months)',
      goals: 'Increase online sales by 300% and improve customer experience',
      challenges: 'Outdated website, low conversion rates, limited digital presence',
      consultationType: 'strategy',
      preferredContact: 'email',
      service: 'Free Consultation',
      source: 'Consultation Page',
      message: 'Looking for a complete digital transformation solution'
    };

    console.log('Sending consultation data:', consultationData);
    
    const response = await axios.post('http://localhost:8080/api/contact', consultationData);
    
    console.log('✅ Success! Response:', response.data);
    
    if (response.data.success) {
      console.log('✅ Consultation form submitted successfully!');
      console.log('📋 Lead details saved to database');
      console.log('📧 Emails should be sent to HR and BDE');
    }
    
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
  }
}

// Run the test
testConsultationForm();