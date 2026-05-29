import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { callAPI } from '../services/api';

const DatabaseViewer = () => {
  const [databaseData, setDatabaseData] = useState({
    contacts: [],
    clients: [],
    projects: []
  });
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState('contacts');

  const fetchData = async () => {
    setLoading(true);
    
    try {
      // Fetch all data
      const [contactsRes, clientsRes, projectsRes] = await Promise.all([
        callAPI('GET', '/contact'),
        callAPI('GET', '/clients'),
        callAPI('GET', '/projects')
      ]);
      
      setDatabaseData({
        contacts: contactsRes.data || [],
        clients: clientsRes.data || [],
        projects: projectsRes.data || []
      });
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderTable = (data, columns) => {
    if (!data || data.length === 0) {
      return (
        <div className="text-center py-8 text-slate-400">
          <span className="material-symbols-outlined text-4xl mb-2">database</span>
          <p>No data found in this collection</p>
        </div>
      );
    }

    return (
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white/5 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-white/10">
              {columns.map((col, index) => (
                <th key={index} className="px-4 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-white/10">
            {data.map((item, index) => (
              <tr key={index} className="hover:bg-white/5 transition-colors">
                {columns.map((col, colIndex) => (
                  <td key={colIndex} className="px-4 py-3 text-sm text-slate-200">
                    {col.render ? col.render(item) : item[col.key] || '-'}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  const tabs = [
    { id: 'contacts', label: 'Contacts', count: databaseData.contacts.length },
    { id: 'clients', label: 'Clients', count: databaseData.clients.length },
    { id: 'projects', label: 'Projects', count: databaseData.projects.length }
  ];

  const contactColumns = [
    { header: 'Name', key: 'name' },
    { header: 'Email', key: 'email' },
    { header: 'Service', key: 'service' },
    { header: 'Message', key: 'message' },
    { header: 'Date', key: 'createdAt', render: (item) => new Date(item.createdAt).toLocaleDateString() }
  ];

  const clientColumns = [
    { header: 'Company', key: 'companyName' },
    { header: 'Contact Person', key: 'contactPerson' },
    { header: 'Email', key: 'email' },
    { header: 'Industry', key: 'industry' },
    { header: 'Status', key: 'status' },
    { header: 'Health Score', key: 'healthScore' },
    { header: 'Date', key: 'createdAt', render: (item) => new Date(item.createdAt).toLocaleDateString() }
  ];

  const projectColumns = [
    { header: 'Project Name', key: 'projectName' },
    { header: 'Client', key: 'clientName' },
    { header: 'Status', key: 'status' },
    { header: 'Priority', key: 'priority' },
    { header: 'Start Date', key: 'startDate', render: (item) => new Date(item.startDate).toLocaleDateString() },
    { header: 'Budget', key: 'budget', render: (item) => item.budget ? `$${item.budget.toLocaleString()}` : '-' },
    { header: 'Date', key: 'createdAt', render: (item) => new Date(item.createdAt).toLocaleDateString() }
  ];

  return (
    <div className="pt-24 pb-12 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-3xl font-bold text-white mb-2">Database Viewer</h1>
        <p className="text-slate-400">View all data stored in MongoDB collections</p>
      </motion.div>

      {/* Refresh Button */}
      <div className="mb-6">
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={fetchData}
          disabled={loading}
          className="bg-primary hover:bg-primary/90 text-white font-bold py-2 px-4 rounded-lg transition-all disabled:opacity-50 flex items-center gap-2"
        >
          {loading ? (
            <>
              <svg className="animate-spin h-4 w-4 text-white" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Loading...
            </>
          ) : (
            <>
              <span className="material-symbols-outlined">refresh</span>
              Refresh Data
            </>
          )}
        </motion.button>
      </div>

      {/* Tabs */}
      <div className="flex gap-1 mb-6 bg-white/5 p-1 rounded-lg">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex-1 py-2 px-4 rounded-md font-medium transition-all ${
              activeTab === tab.id
                ? 'bg-primary text-white'
                : 'text-slate-300 hover:text-white hover:bg-white/10'
            }`}
          >
            {tab.label} ({tab.count})
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <motion.div
        key={activeTab}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white/5 rounded-xl p-6 border border-white/10"
      >
        {activeTab === 'contacts' && renderTable(databaseData.contacts, contactColumns)}
        {activeTab === 'clients' && renderTable(databaseData.clients, clientColumns)}
        {activeTab === 'projects' && renderTable(databaseData.projects, projectColumns)}
      </motion.div>

      {/* Database Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 grid md:grid-cols-3 gap-4"
      >
        <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/20 p-4 rounded-lg border border-blue-500/30">
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-blue-400">mail</span>
            <h3 className="text-white font-bold">Contacts</h3>
          </div>
          <p className="text-2xl font-bold text-blue-400">{databaseData.contacts.length}</p>
          <p className="text-slate-400 text-sm">Total submissions</p>
        </div>

        <div className="bg-gradient-to-br from-green-500/20 to-green-600/20 p-4 rounded-lg border border-green-500/30">
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-green-400">business</span>
            <h3 className="text-white font-bold">Clients</h3>
          </div>
          <p className="text-2xl font-bold text-green-400">{databaseData.clients.length}</p>
          <p className="text-slate-400 text-sm">Active clients</p>
        </div>

        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/20 p-4 rounded-lg border border-purple-500/30">
          <div className="flex items-center gap-3 mb-2">
            <span className="material-symbols-outlined text-purple-400">assignment</span>
            <h3 className="text-white font-bold">Projects</h3>
          </div>
          <p className="text-2xl font-bold text-purple-400">{databaseData.projects.length}</p>
          <p className="text-slate-400 text-sm">Total projects</p>
        </div>
      </motion.div>
    </div>
  );
};

export default DatabaseViewer;
