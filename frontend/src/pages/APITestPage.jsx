import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { callAPI } from '../services/api';

const APITestPage = () => {
  const [testResults, setTestResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const runTests = async () => {
    setLoading(true);
    const results = [];
    
    try {
      // Test 1: Health check
      const healthResult = await callAPI('GET', '/health');
      results.push({
        test: 'Health Check',
        status: 'Passed',
        result: healthResult
      });
    } catch (error) {
      results.push({
        test: 'Health Check',
        status: 'Failed',
        error: error.message
      });
    }
    
    try {
      // Test 2: Get all contacts
      const contactsResult = await callAPI('GET', '/contact');
      results.push({
        test: 'Get Contacts',
        status: 'Passed',
        result: contactsResult
      });
    } catch (error) {
      results.push({
        test: 'Get Contacts',
        status: 'Failed',
        error: error.message
      });
    }
    
    try {
      // Test 3: Get all clients
      const clientsResult = await callAPI('GET', '/clients');
      results.push({
        test: 'Get Clients',
        status: 'Passed',
        result: clientsResult
      });
    } catch (error) {
      results.push({
        test: 'Get Clients',
        status: 'Failed',
        error: error.message
      });
    }
    
    try {
      // Test 4: Get all projects
      const projectsResult = await callAPI('GET', '/projects');
      results.push({
        test: 'Get Projects',
        status: 'Passed',
        result: projectsResult
      });
    } catch (error) {
      results.push({
        test: 'Get Projects',
        status: 'Failed',
        error: error.message
      });
    }
    
    setTestResults(results);
    setLoading(false);
  };

  useEffect(() => {
    runTests();
  }, []);

  return (
    <div className="pt-24 pb-12 px-6 max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-12 text-center"
      >
        <h1 className="text-4xl font-bold text-white mb-4">
          API Connection Test
        </h1>
        <p className="text-slate-400 text-lg">
          Testing backend API connectivity and MongoDB connection
        </p>
      </motion.div>

      <div className="space-y-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={runTests}
          disabled={loading}
          className="bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-xl transition-all disabled:opacity-50"
        >
          {loading ? 'Testing...' : 'Run Tests Again'}
        </motion.button>

        <div className="grid gap-4">
          {testResults.map((test, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`p-6 rounded-xl border ${
                test.status === 'Passed' 
                  ? 'bg-green-500/10 border-green-500/30' 
                  : 'bg-red-500/10 border-red-500/30'
              }`}
            >
              <div className="flex items-center justify-between mb-3">
                <h3 className="text-lg font-bold text-white">{test.test}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  test.status === 'Passed' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-red-500/20 text-red-400'
                }`}>
                  {test.status}
                </span>
              </div>
              
              {test.result && (
                <pre className="text-slate-300 text-sm bg-black/20 p-3 rounded-lg overflow-x-auto">
                  {JSON.stringify(test.result, null, 2)}
                </pre>
              )}
              
              {test.error && (
                <p className="text-red-400 text-sm">{test.error}</p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default APITestPage;