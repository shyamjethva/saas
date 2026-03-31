const axios = require('axios');

async function testContactForms() {
  console.log('Testing contact forms with updated services...\n');
  
  // Test data that might have been causing the error
  const testData = {
    name: 'Test User',
    email: 'test@example.com',
    phone: '+919876543210',
    service: 'Web & App Development', // This should now fail with proper validation
    message: 'Testing contact form submission'
  };
  
  try {
    console.log('Attempting to submit with invalid service:', testData.service);
    await axios.post('http://localhost:5001/api/contact', testData);
    console.log('❌ Unexpected success - this should have failed');
  } catch (error) {
    console.log('✅ Correctly rejected invalid service:', error.response?.data?.error);
  }
  
  // Test with valid services
  const validServices = [
    'Custom Software Development',
    'Digital Marketing',
    'AI/ML Integration'
  ];
  
  for (const service of validServices) {
    try {
      const validData = {
        name: `Test User - ${service}`,
        email: `test-${service.toLowerCase().replace(/\s+/g, '-')}@example.com`,
        phone: '+919876543210',
        service: service,
        message: `Interested in ${service} services`
      };
      
      console.log(`\nTesting valid service: ${service}`);
      const response = await axios.post('http://localhost:5001/api/contact', validData);
      console.log(`✅ Success: ${service}`);
      
    } catch (error) {
      console.log(`❌ Failed: ${service} - ${error.response?.data?.error || error.message}`);
    }
  }
}

testContactForms();