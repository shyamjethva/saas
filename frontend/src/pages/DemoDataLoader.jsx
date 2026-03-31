import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { contactAPI, clientAPI, projectAPI } from '../services/api';

const DemoDataLoader = () => {
  const [demoStatus, setDemoStatus] = useState('ready');
  const [demoData, setDemoData] = useState({
    contacts: [],
    clients: [],
    projects: []
  });
  const [loading, setLoading] = useState(false);

  // Sample data to demonstrate
  const sampleData = {
    contact: {
      name: 'Rajesh Kumar',
      email: 'rajesh.kumar@globaltech.in',
      service: 'Custom Software Development',
      message: 'Looking for enterprise software solution for our manufacturing business. Need integration with existing ERP system.'
    },
    client: {
      companyName: 'Global Manufacturing Ltd',
      contactPerson: 'Rajesh Kumar',
      email: 'rajesh.kumar@globaltech.in',
      phone: '+91-98765-43210',
      industry: 'Manufacturing',
      companySize: '501-1000',
      website: 'www.globalmanufacturing.in',
      status: 'Active',
      healthScore: 88,
      notes: 'Premium client with high-value contract potential. Decision maker identified.'
    },
    project: {
      projectName: 'ERP Integration Suite',
      description: 'Complete digital transformation project involving legacy system modernization, cloud migration, and real-time analytics dashboard for manufacturing operations.',
      status: 'Planning',
      priority: 'Critical',
      budget: 2500000,
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS', 'Docker'],
      startDate: new Date('2024-03-01'),
      endDate: new Date('2024-09-30')
    }
  };

  const loadDemoData = async () => {
    setLoading(true);
    setDemoStatus('loading');
    
    try {
      // Step 1: Add sample contact
      setDemoStatus('Adding contact...');
      const contactResult = await contactAPI.submitContact(sampleData.contact);
      
      // Step 2: Add sample client
      setDemoStatus('Adding client...');
      const clientResult = await clientAPI.createClient(sampleData.client);
      
      // Step 3: Add sample project (linked to the client)
      setDemoStatus('Adding project...');
      const projectData = {
        ...sampleData.project,
        clientId: clientResult.data._id,
        clientName: sampleData.client.companyName,
        milestones: [
          {
            title: 'Requirements Gathering',
            description: 'Detailed analysis of current systems and future requirements',
            dueDate: new Date('2024-03-15'),
            completed: false
          },
          {
            title: 'System Architecture Design',
            description: 'Complete technical architecture and technology stack selection',
            dueDate: new Date('2024-04-01'),
            completed: false
          },
          {
            title: 'Development Phase 1',
            description: 'Core module development and database design',
            dueDate: new Date('2024-05-15'),
            completed: false
          }
        ],
        risks: [
          {
            title: 'Integration Complexity',
            description: 'Multiple legacy systems requiring careful integration approach',
            severity: 'High',
            mitigationPlan: 'Phased integration with extensive testing at each stage'
          }
        ]
      };
      const projectResult = await projectAPI.createProject(projectData);
      
      // Step 4: Fetch all data to show current state
      setDemoStatus('Loading current data...');
      const [contactsRes, clientsRes, projectsRes] = await Promise.all([
        contactAPI.getAllContacts(),
        clientAPI.getAllClients(),
        projectAPI.getAllProjects()
      ]);
      
      setDemoData({
        contacts: contactsRes.data,
        clients: clientsRes.data,
        projects: projectsRes.data
      });
      
      setDemoStatus('complete');
      
    } catch (error) {
      console.error('Demo loading error:', error);
      setDemoStatus('error');
    } finally {
      setLoading(false);
    }
  };

  const refreshData = async () => {
    try {
      const [contactsRes, clientsRes, projectsRes] = await Promise.all([
        contactAPI.getAllContacts(),
        clientAPI.getAllClients(),
        projectAPI.getAllProjects()
      ]);
      
      setDemoData({
        contacts: contactsRes.data,
        clients: clientsRes.data,
        projects: projectsRes.data
      });
    } catch (error) {
      console.error('Refresh error:', error);
    }
  };

  useEffect(() => {
    refreshData();
  }, []);

  const DataCard = ({ title, data, icon, color }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white/5 rounded-xl p-5 border border-white/10`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`w-10 h-10 rounded-lg ${color} flex items-center justify-center`}>
          <span className="material-symbols-outlined text-white">{icon}</span>
        </div>
        <h3 className="text-lg font-bold text-white">{title}</h3>
        <span className="ml-auto bg-primary/20 text-primary px-2 py-1 rounded-full text-sm">
          {data.length} records
        </span>
      </div>
      
      {data.length === 0 ? (
        <p className="text-slate-400 text-center py-4">No data yet</p>
      ) : (
        <div className="space-y-3 max-h-60 overflow-y-auto">
          {data.slice(0, 3).map((item, index) => (
            <div key={index} className="bg-black/20 p-3 rounded-lg">
              <p className="text-white font-medium truncate">
                {item.name || item.companyName || item.projectName}
              </p>
              <p className="text-slate-400 text-sm truncate">
                {item.email || item.contactPerson || item.description?.substring(0, 50) + '...'}
              </p>
              <p className="text-xs text-slate-500 mt-1">
                Added: {new Date(item.createdAt).toLocaleDateString()}
              </p>
            </div>
          ))}
          {data.length > 3 && (
            <p className="text-slate-400 text-center text-sm">
              + {data.length - 3} more records
            </p>
          )}
        </div>
      )}
    </motion.div>
  );

  return (
    <div className="pt-24 pb-12 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-2">📊 Demo Data Loader</h1>
        <p className="text-slate-400">Load sample data to demonstrate full connectivity</p>
      </motion.div>

      {/* Demo Controls */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-xl p-6 border border-blue-500/30 mb-8"
      >
        <h2 className="text-xl font-bold text-white mb-4">Load Sample Data</h2>
        <p className="text-slate-300 mb-6">
          This will add realistic sample data showing the complete flow:
        </p>
        
        <div className="grid md:grid-cols-3 gap-4 mb-6 text-sm">
          <div className="bg-white/5 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-green-400">person</span>
              <span className="font-medium text-white">Contact</span>
            </div>
            <p className="text-slate-400">Rajesh Kumar from Global Manufacturing</p>
          </div>
          <div className="bg-white/5 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-blue-400">business</span>
              <span className="font-medium text-white">Client</span>
            </div>
            <p className="text-slate-400">Global Manufacturing Ltd company profile</p>
          </div>
          <div className="bg-white/5 p-3 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <span className="material-symbols-outlined text-purple-400">assignment</span>
              <span className="font-medium text-white">Project</span>
            </div>
            <p className="text-slate-400">ERP Integration Suite with milestones</p>
          </div>
        </div>

        <div className="flex gap-3">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={loadDemoData}
            disabled={loading || demoStatus === 'complete'}
            className="flex-1 bg-gradient-to-r from-primary to-purple-500 hover:from-primary/90 hover:to-purple-500/90 text-white font-bold py-3 px-6 rounded-lg transition-all disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                {demoStatus}
              </>
            ) : demoStatus === 'complete' ? (
              <>
                <span className="material-symbols-outlined">check_circle</span>
                Demo Loaded Successfully!
              </>
            ) : (
              <>
                <span className="material-symbols-outlined">play_arrow</span>
                Load Demo Data
              </>
            )}
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={refreshData}
            className="bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-lg transition-all flex items-center gap-2"
          >
            <span className="material-symbols-outlined">refresh</span>
            Refresh
          </motion.button>
        </div>
      </motion.div>

      {/* Current Data Display */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-2xl font-bold text-white mb-6">Current Database State</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          <DataCard 
            title="Contacts" 
            data={demoData.contacts} 
            icon="mail" 
            color="bg-green-500/20" 
          />
          <DataCard 
            title="Clients" 
            data={demoData.clients} 
            icon="business" 
            color="bg-blue-500/20" 
          />
          <DataCard 
            title="Projects" 
            data={demoData.projects} 
            icon="assignment" 
            color="bg-purple-500/20" 
          />
        </div>
      </motion.div>

      {/* Success Message */}
      {demoStatus === 'complete' && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="mt-8 p-6 bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-xl text-center"
        >
          <div className="text-5xl mb-3">🎉</div>
          <h3 className="text-2xl font-bold text-green-400 mb-2">Demo Data Loaded Successfully!</h3>
          <p className="text-slate-300 mb-4">
            You can now see the data flowing from frontend → backend → MongoDB
          </p>
          <div className="flex gap-3 justify-center">
            <a 
              href="/database" 
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              View Full Database
            </a>
            <a 
              href="/contact" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg font-medium transition-colors"
            >
              Try Contact Form
            </a>
          </div>
        </motion.div>
      )}

      {/* Connection Status */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8 grid md:grid-cols-3 gap-4"
      >
        <div className="bg-white/5 p-4 rounded-lg border border-green-500/30 text-center">
          <span className="material-symbols-outlined text-green-400 text-2xl mb-2">check_circle</span>
          <h4 className="text-white font-bold">Frontend</h4>
          <p className="text-slate-400 text-sm">React Application</p>
        </div>
        <div className="bg-white/5 p-4 rounded-lg border border-blue-500/30 text-center">
          <span className="material-symbols-outlined text-blue-400 text-2xl mb-2">sync_alt</span>
          <h4 className="text-white font-bold">Backend API</h4>
          <p className="text-slate-400 text-sm">Node.js/Express</p>
        </div>
        <div className="bg-white/5 p-4 rounded-lg border border-purple-500/30 text-center">
          <span className="material-symbols-outlined text-purple-400 text-2xl mb-2">database</span>
          <h4 className="text-white font-bold">MongoDB</h4>
          <p className="text-slate-400 text-sm">Database Connected</p>
        </div>
      </motion.div>
    </div>
  );
};

export default DemoDataLoader;