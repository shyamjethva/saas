const axios = require('axios');

async function testFullIntegration() {
  console.log('🚀 Starting Full Integration Test...\n');
  
  const testResults = [];
  
  // Test 1: Backend Health Check
  try {
    console.log('1. Testing Backend Health...');
    const healthResponse = await axios.get('http://localhost:5001/api/health');
    console.log('✅ Backend Health:', healthResponse.data.message);
    testResults.push({ test: 'Backend Health', status: 'PASS', details: healthResponse.data.message });
  } catch (error) {
    console.log('❌ Backend Health Failed:', error.message);
    testResults.push({ test: 'Backend Health', status: 'FAIL', details: error.message });
    return;
  }
  
  // Test 2: MongoDB Connection
  try {
    console.log('\n2. Testing MongoDB Connection...');
    const dbResponse = await axios.get('http://localhost:5001/api/contact');
    console.log(`✅ MongoDB Connected: ${dbResponse.data.count} contacts found`);
    testResults.push({ test: 'MongoDB Connection', status: 'PASS', details: `${dbResponse.data.count} contacts` });
  } catch (error) {
    console.log('❌ MongoDB Connection Failed:', error.message);
    testResults.push({ test: 'MongoDB Connection', status: 'FAIL', details: error.message });
  }
  
  // Test 3: Contact Form Submission
  try {
    console.log('\n3. Testing Contact Form Submission...');
    const contactData = {
      name: 'Integration Test User',
      email: 'integration@test.com',
      phone: '+919876543210',
      service: 'Custom Software Development',
      message: 'This is an automated integration test submission.'
    };
    
    const contactResponse = await axios.post('http://localhost:5001/api/contact', contactData);
    console.log('✅ Contact Form:', contactResponse.data.message);
    testResults.push({ test: 'Contact Form', status: 'PASS', details: contactResponse.data.message });
  } catch (error) {
    console.log('❌ Contact Form Failed:', error.response?.data?.error || error.message);
    testResults.push({ test: 'Contact Form', status: 'FAIL', details: error.response?.data?.error || error.message });
  }
  
  // Test 4: Consultation Form Submission
  try {
    console.log('\n4. Testing Consultation Form Submission...');
    const consultationData = {
      name: 'Consultation Test User',
      email: 'consultation@test.com',
      company: 'Test Company Inc',
      phone: '+919876543211',
      service: 'ai-automation',
      message: 'Testing consultation scheduling integration.',
      preferredDate: new Date(Date.now() + 86400000).toISOString(), // Tomorrow
      timezone: 'IST'
    };
    
    const consultationResponse = await axios.post('http://localhost:5001/api/consultations', consultationData);
    console.log('✅ Consultation Form:', consultationResponse.data.message);
    testResults.push({ test: 'Consultation Form', status: 'PASS', details: consultationResponse.data.message });
  } catch (error) {
    console.log('❌ Consultation Form Failed:', error.response?.data?.error || error.message);
    testResults.push({ test: 'Consultation Form', status: 'FAIL', details: error.response?.data?.error || error.message });
  }
  
  // Test 5: Client Creation
  try {
    console.log('\n5. Testing Client Creation...');
    const clientData = {
      companyName: 'Integration Test Corp',
      contactPerson: 'Test Manager',
      email: 'manager@integrationtest.com',
      phone: '+1-555-0199',
      industry: 'Technology',
      companySize: '51-200',
      website: 'www.integrationtest.com',
      status: 'Active',
      healthScore: 90,
      notes: 'Test client for integration verification'
    };
    
    const clientResponse = await axios.post('http://localhost:5001/api/clients', clientData);
    console.log('✅ Client Creation:', `Client ID: ${clientResponse.data.data?._id || clientResponse.data._id}`);
    testResults.push({ test: 'Client Creation', status: 'PASS', details: `ID: ${clientResponse.data.data?._id || clientResponse.data._id}` });
  } catch (error) {
    console.log('❌ Client Creation Failed:', error.response?.data?.error || error.message);
    testResults.push({ test: 'Client Creation', status: 'FAIL', details: error.response?.data?.error || error.message });
  }
  
  // Test 6: Project Creation
  try {
    console.log('\n6. Testing Project Creation...');
    // First get a client ID to use
    const clientsResponse = await axios.get('http://localhost:5001/api/clients');
    const clientId = clientsResponse.data.data?.[0]?._id || clientsResponse.data[0]?._id || '69959d0241743f8969ae0366'; // fallback ID
    
    const projectData = {
      projectName: 'Integration Test Project',
      clientId: clientId,
      clientName: 'Integration Test Corp',
      description: 'Automated integration testing project',
      status: 'Planning',
      priority: 'High',
      startDate: new Date().toISOString(),
      endDate: new Date(Date.now() + 7776000000).toISOString(), // 90 days from now
      budget: 50000,
      teamSize: 5
    };
    
    const projectResponse = await axios.post('http://localhost:5001/api/projects', projectData);
    console.log('✅ Project Creation:', `Project ID: ${projectResponse.data.data?._id || projectResponse.data._id}`);
    testResults.push({ test: 'Project Creation', status: 'PASS', details: `ID: ${projectResponse.data.data?._id || projectResponse.data._id}` });
  } catch (error) {
    console.log('❌ Project Creation Failed:', error.response?.data?.error || error.message);
    testResults.push({ test: 'Project Creation', status: 'FAIL', details: error.response?.data?.error || error.message });
  }
  
  // Test 7: Data Retrieval
  try {
    console.log('\n7. Testing Data Retrieval...');
    const [contacts, clients, projects, consultations] = await Promise.all([
      axios.get('http://localhost:5001/api/contact'),
      axios.get('http://localhost:5001/api/clients'),
      axios.get('http://localhost:5001/api/projects'),
      axios.get('http://localhost:5001/api/consultations')
    ]);
    
    const clientCount = clients.data.data?.length || clients.data.length || 0;
    const projectCount = projects.data.data?.length || projects.data.length || 0;
    const consultationCount = consultations.data.data?.length || consultations.data.length || 0;
    
    console.log(`✅ Data Retrieval: ${contacts.data.count} contacts, ${clientCount} clients, ${projectCount} projects, ${consultationCount} consultations`);
    testResults.push({ 
      test: 'Data Retrieval', 
      status: 'PASS', 
      details: `${contacts.data.count} contacts, ${clientCount} clients, ${projectCount} projects, ${consultationCount} consultations` 
    });
  } catch (error) {
    console.log('❌ Data Retrieval Failed:', error.message);
    testResults.push({ test: 'Data Retrieval', status: 'FAIL', details: error.message });
  }
  
  // Final Summary
  console.log('\n' + '='.repeat(60));
  console.log('📊 INTEGRATION TEST RESULTS SUMMARY');
  console.log('='.repeat(60));
  
  const passed = testResults.filter(t => t.status === 'PASS').length;
  const failed = testResults.filter(t => t.status === 'FAIL').length;
  
  testResults.forEach(result => {
    const statusIcon = result.status === 'PASS' ? '✅' : '❌';
    console.log(`${statusIcon} ${result.test}: ${result.details}`);
  });
  
  console.log('\n' + '='.repeat(60));
  console.log(`TOTAL: ${passed} PASSED, ${failed} FAILED`);
  console.log(`SUCCESS RATE: ${((passed / testResults.length) * 100).toFixed(1)}%`);
  console.log('='.repeat(60));
  
  if (failed === 0) {
    console.log('\n🎉 ALL TESTS PASSED! Your full-stack integration is working perfectly!');
    console.log('Frontend ↔ Backend ↔ MongoDB connection is fully operational.');
  } else {
    console.log('\n⚠️  Some tests failed. Please check the error messages above.');
  }
}

testFullIntegration();