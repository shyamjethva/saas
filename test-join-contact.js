const axios = require('axios');

async function testJoinContactForm() {
  try {
    console.log('Testing JoinContact form submission...');
    
    // Test contact form data
    const contactData = {
      name: 'John Doe',
      email: 'john.doe@example.com',
      phone: '+919876543210',
      company: 'Tech Solutions Inc',
      service: 'Custom Software Development',
      message: 'I would like to discuss a custom software development project for our business.'
    };
    
    console.log('Sending contact data:', contactData);
    
    const response = await axios.post('http://localhost:5001/api/contact', contactData);
    
    console.log('✅ Contact Success!', response.data);
    
    // Test career form data
    const careerData = {
      name: 'Jane Smith',
      email: 'jane.smith@example.com',
      phone: '+919876543211',
      position: 'Frontend Developer',
      experience: '3-5',
      service: 'General Inquiry',
      message: 'Job Application for: Frontend Developer\nExperience: 3-5 years\nCover Letter: I am excited to apply for the Frontend Developer position...'
    };
    
    console.log('\nSending career data:', careerData);
    
    const careerResponse = await axios.post('http://localhost:5001/api/contact', careerData);
    
    console.log('✅ Career Success!', careerResponse.data);
    
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

testJoinContactForm();