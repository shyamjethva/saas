import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { clientAPI } from '../services/api';

const ClientManagement = () => {
  const [activeTab, setActiveTab] = useState('clients');
  const [clients, setClients] = useState([]);
  const [loading, setLoading] = useState(false);
  const [newClient, setNewClient] = useState({
    companyName: '',
    contactPerson: '',
    email: '',
    phone: '',
    industry: '',
    status: 'Active',
    healthScore: 80
  });

  // Fetch real client data
  const fetchClients = async () => {
    setLoading(true);
    try {
      const response = await clientAPI.getAllClients();
      const clientData = response.data || [];
      
      // Transform data to match component structure
      const transformedClients = clientData.map(client => ({
        id: client._id || client.id,
        company: client.companyName || client.company,
        contactPerson: client.contactPerson || client.name,
        email: client.email,
        phone: client.phone || '',
        status: client.status || 'Active',
        projects: client.projectsCount || 0,
        revenue: client.totalRevenue || 0,
        lastContact: client.lastContact || 'Recently',
        industry: client.industry || 'Technology',
        healthScore: client.healthScore || 80
      }));
      
      setClients(transformedClients);
    } catch (error) {
      console.error('Error fetching clients:', error);
      // Fallback to mock data
      setClients([
        {
          id: 1,
          company: 'TechCorp Solutions',
          contactPerson: 'Raj Malhotra',
          email: 'raj@techcorp.com',
          phone: '+91 98765 43210',
          status: 'Active',
          projects: 3,
          revenue: 125000,
          lastContact: '2 days ago',
          industry: 'Technology',
          healthScore: 95
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchClients();
  }, []);

  // Initialize mock leads data
  const [leads, setLeads] = useState([
    {
      id: 1,
      company: 'Future Tech Ltd',
      contact: 'Sneha Reddy',
      email: 'sneha@futuretech.com',
      phone: '+91 98765 43213',
      stage: 'Qualified',
      score: 85,
      value: 75000,
      source: 'Website Form'
    },
    {
      id: 2,
      company: 'Digital Solutions',
      contact: 'Vikram Singh',
      email: 'vikram@digi-sol.com',
      phone: '+91 98765 43214',
      stage: 'Proposal Sent',
      score: 72,
      value: 42000,
      source: 'LinkedIn'
    },
    {
      id: 3,
      company: 'Smart Systems',
      contact: 'Kavita Mehta',
      email: 'kavita@smartsys.com',
      phone: '+91 98765 43215',
      stage: 'Initial Contact',
      score: 45,
      value: 25000,
      source: 'Referral'
    }
  ]);

  const [selectedClient, setSelectedClient] = useState(null);

  const leadStages = ['New Lead', 'Initial Contact', 'Qualified', 'Proposal Sent', 'Negotiation', 'Closed Won', 'Closed Lost'];

  const getClientStats = () => ({
    total: clients.length,
    active: clients.filter(c => c.status === 'Active').length,
    prospects: clients.filter(c => c.status === 'Prospect').length,
    totalRevenue: clients.reduce((sum, c) => sum + c.revenue, 0)
  });

  const getLeadStats = () => ({
    total: leads.length,
    qualified: leads.filter(l => l.stage === 'Qualified' || l.stage === 'Proposal Sent' || l.stage === 'Negotiation').length,
    won: leads.filter(l => l.stage === 'Closed Won').length,
    avgScore: Math.round(leads.reduce((sum, l) => sum + l.score, 0) / leads.length)
  });

  return (
    <div className="pt-24 pb-12 px-6">
      {/* Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <div className="flex justify-between items-start mb-4">
          <div>
            <h1 className="text-4xl font-bold text-white mb-2">Client Management</h1>
            <p className="text-slate-400">CRM for client relationships and lead management</p>
            {loading && (
              <div className="flex items-center gap-2 mt-2 text-sm text-blue-400">
                <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                Loading clients from MongoDB...
              </div>
            )}
          </div>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={fetchClients}
              disabled={loading}
              className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-lg">refresh</span>
              {loading ? 'Loading...' : 'Refresh'}
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                // Add new client logic would go here
                alert('Add new client functionality will be implemented');
              }}
              className="px-4 py-2 bg-green-500/20 hover:bg-green-500/30 text-green-400 rounded-lg border border-green-500/30 transition-all flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-lg">add</span>
              Add Client
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {[
          { id: 'clients', label: 'Clients', icon: 'business' },
          { id: 'leads', label: 'Leads Pipeline', icon: 'trending_up' },
          { id: 'segments', label: 'Segments', icon: 'category' }
        ].map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`px-6 py-3 rounded-xl font-medium transition-all flex items-center gap-2 ${
              activeTab === tab.id
                ? 'bg-primary text-white'
                : 'bg-white/5 text-slate-300 hover:bg-white/10'
            }`}
          >
            <span className="material-symbols-outlined">{tab.icon}</span>
            {tab.label}
          </button>
        ))}
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
        {activeTab === 'clients' ? (
          <>
            <StatCard title="Total Clients" value={getClientStats().total} icon="groups" color="blue" />
            <StatCard title="Active Clients" value={getClientStats().active} icon="check_circle" color="green" />
            <StatCard title="Prospects" value={getClientStats().prospects} icon="hourglass_empty" color="yellow" />
            <StatCard title="Total Revenue" value={`₹${getClientStats().totalRevenue.toLocaleString()}`} icon="payments" color="purple" />
          </>
        ) : (
          <>
            <StatCard title="Total Leads" value={getLeadStats().total} icon="trending_up" color="blue" />
            <StatCard title="Qualified Leads" value={getLeadStats().qualified} icon="verified" color="green" />
            <StatCard title="Avg Score" value={`${getLeadStats().avgScore}%`} icon="auto_graph" color="yellow" />
            <StatCard title="Conversion Rate" value="68%" icon="percent" color="purple" />
          </>
        )}
      </div>

      {/* Main Content */}
      {activeTab === 'clients' && (
        <ClientList clients={clients} setClients={setClients} />
      )}

      {activeTab === 'leads' && (
        <LeadPipeline leads={leads} setLeads={setLeads} leadStages={leadStages} />
      )}

      {activeTab === 'segments' && (
        <ClientSegments />
      )}
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-slate-400 text-sm">{title}</p>
        <p className={`text-3xl font-bold mt-2 text-${color}-400`}>{value}</p>
      </div>
      <div className={`p-3 rounded-xl bg-${color}-500/20`}>
        <span className={`material-symbols-outlined text-${color}-400 text-2xl`}>{icon}</span>
      </div>
    </div>
  </motion.div>
);

const ClientList = ({ clients, setClients }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden"
  >
    <div className="p-6 border-b border-white/10 flex justify-between items-center">
      <h2 className="text-xl font-bold text-white">Client Directory</h2>
      <button className="bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2">
        <span className="material-symbols-outlined">add</span>
        Add Client
      </button>
    </div>
    
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-white/5">
          <tr>
            <th className="text-left p-4 text-slate-300 font-semibold">Company</th>
            <th className="text-left p-4 text-slate-300 font-semibold">Contact</th>
            <th className="text-left p-4 text-slate-300 font-semibold">Status</th>
            <th className="text-left p-4 text-slate-300 font-semibold">Projects</th>
            <th className="text-left p-4 text-slate-300 font-semibold">Revenue</th>
            <th className="text-left p-4 text-slate-300 font-semibold">Last Contact</th>
            <th className="text-left p-4 text-slate-300 font-semibold">Actions</th>
          </tr>
        </thead>
        <tbody>
          {clients.map((client, index) => (
            <motion.tr
              key={client.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-white/5 hover:bg-white/5 transition-colors"
            >
              <td className="p-4">
                <div>
                  <p className="text-white font-medium">{client.company}</p>
                  <p className="text-slate-400 text-sm">{client.email}</p>
                </div>
              </td>
              <td className="p-4 text-slate-300">{client.contactPerson}</td>
              <td className="p-4">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                  client.status === 'Active' 
                    ? 'bg-green-500/20 text-green-400' 
                    : 'bg-yellow-500/20 text-yellow-400'
                }`}>
                  {client.status}
                </span>
              </td>
              <td className="p-4 text-slate-300">{client.projects}</td>
              <td className="p-4 text-slate-300">₹{client.revenue.toLocaleString()}</td>
              <td className="p-4 text-slate-300">{client.lastContact}</td>
              <td className="p-4">
                <div className="flex gap-2">
                  <button className="p-2 rounded-lg bg-blue-500/20 hover:bg-blue-500/30 text-blue-400">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                  <button className="p-2 rounded-lg bg-green-500/20 hover:bg-green-500/30 text-green-400">
                    <span className="material-symbols-outlined">edit</span>
                  </button>
                  <button className="p-2 rounded-lg bg-purple-500/20 hover:bg-purple-500/30 text-purple-400">
                    <span className="material-symbols-outlined">chat</span>
                  </button>
                </div>
              </td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  </motion.div>
);

const LeadPipeline = ({ leads, setLeads, leadStages }) => (
  <div className="space-y-6">
    {/* Kanban Board */}
    <div className="grid grid-cols-1 md:grid-cols-7 gap-4">
      {leadStages.map(stage => {
        const stageLeads = leads.filter(lead => lead.stage === stage);
        return (
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10"
          >
            <h3 className="text-white font-semibold mb-4 flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">drag_indicator</span>
              {stage}
              <span className="ml-auto bg-white/10 px-2 py-1 rounded-full text-xs">
                {stageLeads.length}
              </span>
            </h3>
            
            <div className="space-y-3">
              {stageLeads.map(lead => (
                <motion.div
                  key={lead.id}
                  whileHover={{ scale: 1.02 }}
                  className="bg-white/10 rounded-lg p-3 cursor-move"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-white font-medium text-sm">{lead.company}</h4>
                    <span className={`text-xs px-2 py-1 rounded ${
                      lead.score >= 80 ? 'bg-green-500/20 text-green-400' :
                      lead.score >= 60 ? 'bg-yellow-500/20 text-yellow-400' :
                      'bg-red-500/20 text-red-400'
                    }`}>
                      {lead.score}%
                    </span>
                  </div>
                  <p className="text-slate-300 text-xs mb-2">{lead.contact}</p>
                  <p className="text-primary text-xs font-medium">₹{lead.value.toLocaleString()}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  </div>
);

const ClientSegments = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="grid grid-cols-1 md:grid-cols-3 gap-6"
  >
    {[
      { name: 'Enterprise', count: 12, revenue: '₹2.4M', color: 'blue' },
      { name: 'Mid-Market', count: 28, revenue: '₹1.1M', color: 'green' },
      { name: 'SMB', count: 45, revenue: '₹420K', color: 'yellow' }
    ].map(segment => (
      <div key={segment.name} className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">{segment.name}</h3>
          <div className={`p-2 rounded-lg bg-${segment.color}-500/20`}>
            <span className={`material-symbols-outlined text-${segment.color}-400`}>business</span>
          </div>
        </div>
        <div className="space-y-2">
          <p className="text-slate-300"><span className="text-white font-medium">{segment.count}</span> clients</p>
          <p className="text-slate-300"><span className="text-white font-medium">{segment.revenue}</span> revenue</p>
        </div>
      </div>
    ))}
  </motion.div>
);

export default ClientManagement;