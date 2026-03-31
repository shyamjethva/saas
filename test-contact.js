const axios = require('axios');

async function testContactForm() {
  try {
    console.log('Testing contact form submission...');
    
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      service: 'Cloud Migration',
      message: 'This is a test message'
    };
    
    console.log('Sending data:', testData);
    
    const response = await axios.post('http://localhost:5001/api/contact', testData);
    
    console.log('Success!', response.data);
    
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
  }
}

testContactForm();