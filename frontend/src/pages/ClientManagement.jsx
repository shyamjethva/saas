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
    <div className="min-h-screen premium-bg pt-20">
      {/* Header Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-blue-50 border border-blue-100 mb-8 shadow-sm">
                  <span className="material-symbols-outlined text-blue-600 text-sm font-black">groups</span>
                  <span className="text-blue-600 font-black tracking-widest uppercase text-[10px]">CLIENT RELATIONS</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                  Strategic Client
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                    Portfolio Management
                  </span>
                </h1>

                <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-medium">
                  Comprehensive CRM for maintaining high-value client relationships and monitoring lead conversion pipelines.
                </p>

                {loading && (
                  <div className="flex items-center gap-3 mt-8 px-5 py-3 bg-blue-50 rounded-2xl border border-blue-100 w-fit">
                    <div className="w-5 h-5 border-[3px] border-blue-600 border-t-transparent rounded-full animate-spin"></div>
                    <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest">Synchronizing Enterprise Data...</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4 h-fit">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={fetchClients}
                  disabled={loading}
                  className="px-8 py-4 bg-white text-slate-900 rounded-2xl border border-slate-200 font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 shadow-xl hover:border-slate-900 disabled:opacity-50"
                >
                  <span className="material-symbols-outlined text-sm font-black">refresh</span>
                  Sync Data
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-blue-600 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 shadow-2xl shadow-blue-500/25 hover:bg-blue-700"
                >
                  <span className="material-symbols-outlined text-sm font-black">person_add</span>
                  Register Client
                </motion.button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap gap-4">
          {[
            { id: 'clients', label: 'Client Directory', icon: 'business' },
            { id: 'leads', label: 'Opportunity Pipeline', icon: 'trending_up' },
            { id: 'segments', label: 'Market Segments', icon: 'category' }
          ].map(tab => (
            <motion.button
              key={tab.id}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(tab.id)}
              className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 relative ${activeTab === tab.id
                ? 'bg-slate-900 text-white shadow-2xl'
                : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-800'
                }`}
            >
              <span className="material-symbols-outlined text-sm font-black">{tab.icon}</span>
              {tab.label}
              {activeTab === tab.id && (
                <motion.div
                  layoutId="client-tab-underline"
                  className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 w-4 h-1 bg-blue-600 rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Stats Cards */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {activeTab === 'clients' ? (
            <>
              <StatCard title="Total Registered" value={getClientStats().total} icon="groups" color="blue" />
              <StatCard title="Active Contracts" value={getClientStats().active} icon="verified" color="indigo" />
              <StatCard title="Strategic Prospects" value={getClientStats().prospects} icon="radar" color="purple" />
              <StatCard title="Lifetime Revenue" value={`₹${(getClientStats().totalRevenue / 100000).toFixed(1)}M`} icon="payments" color="blue" />
            </>
          ) : (
            <>
              <StatCard title="Total Opportunities" value={getLeadStats().total} icon="trending_up" color="blue" />
              <StatCard title="Qualified Leads" value={getLeadStats().qualified} icon="check_circle" color="indigo" />
              <StatCard title="Average Intent" value={`${getLeadStats().avgScore}%`} icon="auto_graph" color="purple" />
              <StatCard title="Conversion Rate" value="68%" icon="percent" color="blue" />
            </>
          )}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-6 py-12 pb-32">
        <div className="max-w-7xl mx-auto">
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
      </div>
    </div>
  );
};

const StatCard = ({ title, value, icon, color }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] transition-all group"
  >
    <div className="flex items-center justify-between">
      <div>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">{title}</p>
        <p className="text-4xl font-black text-slate-900 tracking-tight">{value}</p>
      </div>
      <div className={`w-14 h-14 rounded-2xl bg-${color}-50 flex items-center justify-center group-hover:scale-110 transition-transform`}>
        <span className={`material-symbols-outlined text-${color}-600 text-2xl font-black`}>{icon}</span>
      </div>
    </div>
  </motion.div>
);

const ClientList = ({ clients, setClients }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden"
  >
    <div className="p-10 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
      <h2 className="text-3xl font-black text-slate-900 tracking-tighter uppercase tracking-widest text-xs font-black">Enterprise Client Registry</h2>
    </div>

    <div className="overflow-x-auto">
      <table className="w-full">
        <thead className="bg-slate-900">
          <tr>
            <th className="text-left px-10 py-6 text-white text-[10px] font-black uppercase tracking-widest">Enterprise Profile</th>
            <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Engagement Status</th>
            <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Active Scale</th>
            <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Financial Yield</th>
            <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Last Synced</th>
            <th className="text-right px-10 py-6 text-white text-[10px] font-black uppercase tracking-widest">Operations</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {clients.map((client, index) => (
            <motion.tr
              key={client.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
              className="hover:bg-slate-50 transition-colors group"
            >
              <td className="px-10 py-8">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 font-black">
                    {client.company.charAt(0)}
                  </div>
                  <div>
                    <p className="text-slate-900 font-black tracking-tight">{client.company}</p>
                    <p className="text-slate-400 text-[10px] font-black uppercase m-0 p-0 leading-none mt-1">{client.contactPerson}</p>
                  </div>
                </div>
              </td>
              <td className="px-8 py-8">
                <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${client.status === 'Active'
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                    : 'bg-slate-100 text-slate-400'
                  }`}>
                  {client.status}
                </span>
              </td>
              <td className="px-8 py-8">
                <div className="flex flex-col">
                  <span className="text-slate-900 font-black text-sm">{client.projects} active</span>
                  <div className="w-24 h-1.5 bg-slate-100 rounded-full mt-2 overflow-hidden">
                    <div className="bg-blue-600 h-full rounded-full" style={{ width: `${(client.projects / 5) * 100}%` }}></div>
                  </div>
                </div>
              </td>
              <td className="px-8 py-8">
                <span className="text-slate-900 font-black">₹{client.revenue.toLocaleString()}</span>
              </td>
              <td className="px-8 py-8 text-slate-400 text-xs font-medium">{client.lastContact}</td>
              <td className="px-10 py-8 text-right">
                <div className="flex gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                  <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm hover:border-slate-900">
                    <span className="material-symbols-outlined text-sm font-black">visibility</span>
                  </motion.button>
                  <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm hover:border-slate-900">
                    <span className="material-symbols-outlined text-sm font-black">edit</span>
                  </motion.button>
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
  <div className="space-y-8">
    <div className="grid grid-cols-1 md:grid-cols-7 gap-6">
      {leadStages.map(stage => {
        const stageLeads = leads.filter(lead => lead.stage === stage);
        return (
          <motion.div
            key={stage}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[2rem] p-6 border border-slate-200 shadow-xl min-h-[400px]"
          >
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-[10px] font-black text-slate-900 uppercase tracking-widest">{stage}</h3>
              <span className="bg-slate-100 text-slate-900 px-3 py-1 rounded-full text-[9px] font-black">
                {stageLeads.length}
              </span>
            </div>

            <div className="space-y-4">
              {stageLeads.map(lead => (
                <motion.div
                  key={lead.id}
                  whileHover={{ y: -4 }}
                  className="bg-slate-50 rounded-[1.25rem] p-5 border border-slate-100 hover:border-slate-900 transition-all cursor-pointer group"
                >
                  <div className="flex justify-between items-start mb-3">
                    <h4 className="text-slate-900 font-black text-xs leading-none">{lead.company}</h4>
                    <span className={`text-[8px] font-black px-2 py-1 rounded-full ${lead.score >= 80 ? 'bg-blue-600 text-white' :
                        lead.score >= 60 ? 'bg-indigo-600 text-white' :
                          'bg-slate-400 text-white'
                      }`}>
                      {lead.score}%
                    </span>
                  </div>
                  <p className="text-slate-400 text-[10px] font-black uppercase mb-4">{lead.contact}</p>
                  <p className="text-blue-600 text-xs font-black">₹{lead.value.toLocaleString()}</p>
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
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="grid grid-cols-1 md:grid-cols-3 gap-12"
  >
    {[
      { name: 'Strategic Enterprise', count: 12, revenue: '₹2.4M', color: 'blue' },
      { name: 'Emerging Market', count: 28, revenue: '₹1.1M', color: 'indigo' },
      { name: 'Velocity Accounts', count: 45, revenue: '₹420K', color: 'purple' }
    ].map(segment => (
      <div key={segment.name} className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none group-hover:bg-blue-50 transition-colors"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-10">
            <h3 className="text-2xl font-black text-slate-900 tracking-tight">{segment.name}</h3>
            <div className={`w-14 h-14 rounded-2xl bg-${segment.color}-50 flex items-center justify-center text-${segment.color}-600`}>
              <span className="material-symbols-outlined text-2xl font-black">hub</span>
            </div>
          </div>
          <div className="space-y-4">
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              <span className="text-slate-900 text-lg leading-none">{segment.count}</span> Identified Partners
            </p>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest flex items-center gap-2">
              <span className="text-slate-900 text-lg leading-none">{segment.revenue}</span> Asset Valuation
            </p>
          </div>
        </div>
      </div>
    ))}
  </motion.div>
);

export default ClientManagement;
