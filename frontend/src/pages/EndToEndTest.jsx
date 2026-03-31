import { useState } from 'react';
import { motion } from 'framer-motion';
import { contactAPI, clientAPI, projectAPI } from '../services/api';

const EndToEndTest = () => {
  const [testSteps, setTestSteps] = useState([]);
  const [currentStep, setCurrentStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  const addTestStep = (step, status, details = '') => {
    setTestSteps(prev => [...prev, { step, status, details, timestamp: new Date().toLocaleTimeString() }]);
  };

  const runFullTest = async () => {
    setIsRunning(true);
    setTestSteps([]);
    setCurrentStep(0);

    try {
      // Step 1: Test Backend Connection
      addTestStep('1. Testing Backend Health', 'running', 'Checking if backend server is responding...');
      const healthResponse = await fetch('http://localhost:5001/api/health');
      const healthData = await healthResponse.json();
      addTestStep('1. Backend Health Check', 'success', `✅ Server running: ${healthData.message}`);

      // Step 2: Test MongoDB Connection
      addTestStep('2. Testing MongoDB Connection', 'running', 'Verifying database connectivity...');
      const contactsResponse = await fetch('http://localhost:5001/api/contact');
      const contactsData = await contactsResponse.json();
      addTestStep('2. MongoDB Connection', 'success', `✅ Database connected, found ${contactsData.count} contacts`);

      // Step 3: Add Sample Contact
      addTestStep('3. Adding Sample Contact', 'running', 'Submitting contact form data...');
      const contactData = {
        name: 'Test User',
        email: 'test@example.com',
        service: 'Cloud Migration',
        message: 'This is a test contact submission from end-to-end testing.'
      };
      const contactResult = await contactAPI.submitContact(contactData);
      addTestStep('3. Contact Submission', 'success', `✅ Contact added with ID: ${contactResult.data.id}`);

      // Step 4: Add Sample Client
      addTestStep('4. Adding Sample Client', 'running', 'Creating client record...');
      const clientData = {
        companyName: 'Test Corporation',
        contactPerson: 'Test Manager',
        email: 'manager@testcorp.com',
        phone: '+1-555-0199',
        industry: 'Technology',
        companySize: '51-200',
        website: 'www.testcorp.com',
        status: 'Active',
        healthScore: 90,
        notes: 'Test client for demonstration purposes'
      };
      const clientResult = await clientAPI.createClient(clientData);
      addTestStep('4. Client Creation', 'success', `✅ Client added with ID: ${clientResult.data._id}`);

      // Step 5: Add Sample Project
      addTestStep('5. Adding Sample Project', 'running', 'Creating project record...');
      const projectData = {
        projectName: 'Test Project Alpha',
        clientId: clientResult.data._id,
        clientName: 'Test Corporation',
        description: 'Comprehensive testing of full-stack application functionality and data flow.',
        status: 'In Progress',
        priority: 'High',
        startDate: new Date(),
        budget: 75000,
        technologies: ['React', 'Node.js', 'MongoDB'],
        milestones: [
          {
            title: 'Initial Setup',
            description: 'Complete environment configuration and testing',
            dueDate: new Date(Date.now() + 14*24*60*60*1000),
            completed: false
          }
        ],
        risks: [
          {
            title: 'Testing Complexity',
            description: 'Multiple integration points requiring thorough validation',
            severity: 'Medium',
            mitigationPlan: 'Systematic step-by-step testing approach'
          }
        ]
      };
      const projectResult = await projectAPI.createProject(projectData);
      addTestStep('5. Project Creation', 'success', `✅ Project added with ID: ${projectResult.data._id}`);

      // Step 6: Verify Data Retrieval
      addTestStep('6. Verifying Data Retrieval', 'running', 'Fetching data back from database...');
      
      // Get updated counts
      const [updatedContacts, updatedClients, updatedProjects] = await Promise.all([
        fetch('http://localhost:5001/api/contact').then(res => res.json()),
        fetch('http://localhost:5001/api/clients').then(res => res.json()),
        fetch('http://localhost:5001/api/projects').then(res => res.json())
      ]);

      addTestStep('6. Data Verification', 'success', 
        `✅ Retrieved: ${updatedContacts.count} contacts, ${updatedClients.count} clients, ${updatedProjects.count} projects`
      );

      // Step 7: Final Summary
      addTestStep('7. Test Complete', 'success', 
        `🎉 All tests passed! Frontend ↔ Backend ↔ MongoDB connection working perfectly.`
      );

    } catch (error) {
      addTestStep(`Error at Step ${currentStep + 1}`, 'failed', `❌ ${error.message}`);
    } finally {
      setIsRunning(false);
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'success': return 'text-green-400';
      case 'failed': return 'text-red-400';
      case 'running': return 'text-yellow-400';
      default: return 'text-slate-400';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'success': return '✅';
      case 'failed': return '❌';
      case 'running': return '🔄';
      default: return '⏳';
    }
  };

  return (
    <div className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-2">End-to-End Connectivity Test</h1>
        <p className="text-slate-400">Complete test of frontend → backend → MongoDB data flow</p>
      </motion.div>

      {/* Test Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 rounded-xl p-6 border border-white/10 mb-6"
      >
        <h2 className="text-xl font-bold text-white mb-4">Run Complete Test</h2>
        <p className="text-slate-300 mb-6">
          This test will perform the following:
        </p>
        
        <ol className="text-slate-300 mb-6 space-y-2 list-decimal list-inside">
          <li>Verify backend server is running</li>
          <li>Test MongoDB database connection</li>
          <li>Add sample contact through frontend API</li>
          <li>Create sample client record</li>
          <li>Create sample project with all details</li>
          <li>Verify data can be retrieved back</li>
          <li>Show complete data flow success</li>
        </ol>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={runFullTest}
          disabled={isRunning}
          className="w-full bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-white font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {isRunning ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Running Test... ({currentStep}/7)
            </>
          ) : (
            <>
              <span className="material-symbols-outlined">play_arrow</span>
              Run End-to-End Test
            </>
          )}
        </motion.button>
      </motion.div>

      {/* Test Results */}
      {testSteps.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white/5 rounded-xl p-6 border border-white/10"
        >
          <h2 className="text-xl font-bold text-white mb-4">Test Results</h2>
          
          <div className="space-y-3">
            {testSteps.map((test, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 p-3 rounded-lg bg-black/20"
              >
                <span className="text-xl mt-0.5">{getStatusIcon(test.status)}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className={`font-bold ${getStatusColor(test.status)}`}>
                      {test.step}
                    </span>
                    <span className="text-xs text-slate-500">{test.timestamp}</span>
                  </div>
                  <p className="text-slate-300 text-sm">{test.details}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Success Message */}
          {testSteps.length > 0 && testSteps[testSteps.length - 1].status === 'success' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-center"
            >
              <div className="text-green-400 font-bold text-lg">🎉 Test Completed Successfully!</div>
              <p className="text-slate-300 mt-2">
                Frontend ↔ Backend ↔ MongoDB connection is working perfectly!
              </p>
              <div className="mt-3 flex gap-3 justify-center">
                <a 
                  href="/database" 
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  View Database Data
                </a>
                <a 
                  href="/contact" 
                  className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  Test Contact Form
                </a>
              </div>
            </motion.div>
          )}
        </motion.div>
      )}

      {/* Connection Diagram */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/30 rounded-xl p-6"
      >
        <h3 className="text-lg font-bold text-blue-400 mb-4">Data Flow Path</h3>
        <div className="flex items-center justify-between text-center">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-green-400">desktop_windows</span>
            </div>
            <span className="text-sm text-slate-300">Frontend</span>
            <span className="text-xs text-slate-500">(React)</span>
          </div>
          
          <div className="flex-1 mx-4">
            <div className="h-px bg-gradient-to-r from-green-500 to-blue-500"></div>
            <div className="text-xs text-slate-500 mt-1">API Calls</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-blue-400">dns</span>
            </div>
            <span className="text-sm text-slate-300">Backend</span>
            <span className="text-xs text-slate-500">(Node.js/Express)</span>
          </div>
          
          <div className="flex-1 mx-4">
            <div className="h-px bg-gradient-to-r from-blue-500 to-purple-500"></div>
            <div className="text-xs text-slate-500 mt-1">Database Queries</div>
          </div>
          
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
              <span className="material-symbols-outlined text-purple-400">storage</span>
            </div>
            <span className="text-sm text-slate-300">MongoDB</span>
            <span className="text-xs text-slate-500">(Database)</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default EndToEndTest;