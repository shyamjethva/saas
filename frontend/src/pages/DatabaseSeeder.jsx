import { useState } from 'react';
import { motion } from 'framer-motion';
import { contactAPI, clientAPI, projectAPI } from '../services/api';

const DatabaseSeeder = () => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState('');

  const seedData = async () => {
    setLoading(true);
    setResult('');
    
    try {
      // Add sample contact
      await contactAPI.submitContact({
        name: 'John Smith',
        email: 'john.smith@techcorp.com',
        service: 'Cloud Migration',
        message: 'Looking for cloud migration services for our enterprise infrastructure.'
      });

      // Add sample client
      const clientResponse = await clientAPI.createClient({
        companyName: 'TechCorp Solutions',
        contactPerson: 'Sarah Johnson',
        email: 'sarah.johnson@techcorp.com',
        phone: '+1-555-0123',
        industry: 'Technology',
        companySize: '201-500',
        website: 'www.techcorp.com',
        status: 'Active',
        healthScore: 85,
        notes: 'Long-term client with multiple ongoing projects'
      });

      // Add sample project
      await projectAPI.createProject({
        projectName: 'Cloud Infrastructure Modernization',
        clientId: clientResponse.data._id,
        clientName: 'TechCorp Solutions',
        description: 'Complete migration of legacy systems to AWS cloud infrastructure with improved scalability and security.',
        status: 'In Progress',
        priority: 'High',
        startDate: new Date(),
        budget: 150000,
        technologies: ['AWS', 'Docker', 'Kubernetes', 'React'],
        milestones: [
          {
            title: 'Infrastructure Assessment',
            description: 'Complete audit of current systems and requirements gathering',
            dueDate: new Date(Date.now() + 30*24*60*60*1000), // 30 days from now
            completed: false
          },
          {
            title: 'Migration Planning',
            description: 'Detailed migration strategy and timeline development',
            dueDate: new Date(Date.now() + 60*24*60*60*1000), // 60 days from now
            completed: false
          }
        ],
        risks: [
          {
            title: 'Data Migration Complexity',
            description: 'Large volume of legacy data requiring careful migration',
            severity: 'High',
            mitigationPlan: 'Phased migration approach with extensive testing'
          }
        ]
      });

      setResult('✅ Sample data successfully added to all collections!');
    } catch (error) {
      console.error('Error seeding data:', error);
      setResult(`❌ Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="pt-24 pb-12 px-6 max-w-2xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Database Seeder</h1>
        <p className="text-slate-400">Add sample data to test database connections</p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 rounded-xl p-6 border border-white/10"
      >
        <h2 className="text-xl font-bold text-white mb-4">Add Sample Data</h2>
        <p className="text-slate-300 mb-6">
          This will add one sample record to each collection:
        </p>
        
        <ul className="text-slate-300 mb-6 space-y-2">
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
            1 Contact record
          </li>
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
            1 Client record
          </li>
          <li className="flex items-center gap-2">
            <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
            1 Project record with milestones and risks
          </li>
        </ul>

        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={seedData}
          disabled={loading}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Adding Data...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined">add</span>
              Add Sample Data
            </>
          )}
        </motion.button>

        {result && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`mt-4 p-4 rounded-lg text-center ${
              result.includes('✅') 
                ? 'bg-green-500/20 border border-green-500/30 text-green-400'
                : 'bg-red-500/20 border border-red-500/30 text-red-400'
            }`}
          >
            {result}
          </motion.div>
        )}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-6 bg-blue-500/10 border border-blue-500/30 rounded-xl p-6"
      >
        <h3 className="text-lg font-bold text-blue-400 mb-2">Next Steps</h3>
        <p className="text-slate-300">
          After adding sample data, visit the <a href="/database" className="text-blue-400 hover:underline">Database Viewer</a> page to see the data in MongoDB collections.
        </p>
      </motion.div>
    </div>
  );
};

export default DatabaseSeeder;