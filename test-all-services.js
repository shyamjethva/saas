const axios = require('axios');

async function testAllServices() {
  const validServices = [
    'Cloud Migration',
    'AI/ML Integration',
    'Custom Software Development',
    'Cybersecurity Audit',
    'Free Consultation',
    'CRM Demo',
    'CRM Demo Booking',
    'Business Transformation',
    'General Inquiry',
    'Digital Marketing',
    'SEO Optimization',
    'Social Media Marketing',
    'Content Marketing',
    'PPC Advertising'
  ];

  console.log('Testing all valid services...\n');
  
  for (const service of validServices) {
    try {
      const testData = {
        name: `Test User - ${service}`,
        email: `test-${service.toLowerCase().replace(/\s+/g, '-')}@example.com`,
        phone: '+919876543210',
        service: service,
        message: `Interested in ${service} services.`
      };
      
      console.log(`Testing: ${service}`);
      const response = await axios.post('http://localhost:5001/api/contact', testData);
      console.log(`✅ ${service}: Success!\n`);
      
    } catch (error) {
      console.log(`❌ ${service}: Failed - ${error.response?.data?.error || error.message}\n`);
    }
  }
}

testAllServices();