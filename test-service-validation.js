const axios = require('axios');

async function testServiceValidation() {
  try {
    console.log('Testing service validation with updated services...');
    
    // Test with a valid service from the updated list
    const testData = {
      name: 'Test User',
      email: 'test@example.com',
      phone: '+919876543210',
      company: 'Test Company',
      service: 'Custom Software Development',
      message: 'I would like to discuss custom software development for my business.'
    };
    
    console.log('Sending data with valid service:', testData);
    
    const response = await axios.post('http://localhost:5001/api/contact', testData);
    
    console.log('✅ Success!', response.data);
    
    // Test with another valid service
    const testData2 = {
      name: 'Another Test',
      email: 'test2@example.com',
      phone: '+919876543211',
      service: 'Digital Marketing',
      message: 'Interested in digital marketing services.'
    };
    
    console.log('\nSending data with another valid service:', testData2);
    
    const response2 = await axios.post('http://localhost:5001/api/contact', testData2);
    
    console.log('✅ Success!', response2.data);
    
  } catch (error) {
    console.error('❌ Error:', error.response?.data || error.message);
  }
}

testServiceValidation();