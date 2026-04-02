import { useState } from 'react';
import { motion } from 'framer-motion';

const SupportHelpdesk = () => {
  const [activeTab, setActiveTab] = useState('tickets');
  const [tickets, setTickets] = useState([
    {
      id: 'TKT-001',
      title: 'Unable to access client portal',
      customer: 'TechCorp Solutions',
      priority: 'High',
      status: 'Open',
      assignedTo: 'Rajesh Patel',
      createdAt: '2024-02-05 10:30',
      lastUpdate: '2024-02-05 14:20'
    },
    {
      id: 'TKT-002',
      title: 'Payment gateway integration issue',
      customer: 'Global Enterprises',
      priority: 'Medium',
      status: 'In Progress',
      assignedTo: 'Priya Sharma',
      createdAt: '2024-02-04 15:45',
      lastUpdate: '2024-02-05 11:30'
    },
    {
      id: 'TKT-003',
      title: 'Feature request: Custom report templates',
      customer: 'Innovate Labs',
      priority: 'Low',
      status: 'Resolved',
      assignedTo: 'Amit Kumar',
      createdAt: '2024-02-03 09:15',
      lastUpdate: '2024-02-04 16:45'
    }
  ]);

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
                  <span className="material-symbols-outlined text-blue-600 text-sm font-black">support_agent</span>
                  <span className="text-blue-600 font-black tracking-widest uppercase text-[10px]">CUSTOMER SUCCESS INFRASTRUCTURE</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                  Support Hub
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                    & Resolution Matrix
                  </span>
                </h1>

                <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-medium">
                  Centralized command for ticket lifecycle management, high-performance knowledge base access, and real-time SLA monitoring.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 h-fit">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 shadow-2xl hover:bg-black"
                >
                  <span className="material-symbols-outlined text-sm font-black">add_circle</span>
                  Engineer Ticket
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
            { id: 'tickets', label: 'Resolution Tickets', icon: 'confirmation_number' },
            { id: 'knowledge', label: 'Intelligence Repository', icon: 'school' },
            { id: 'sla', label: 'SLA Protocols', icon: 'timer' },
            { id: 'analytics', label: 'Success Metrics', icon: 'analytics' }
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
                  layoutId="support-tab-underline"
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
          <StatCard title="Active Inquiries" value={tickets.filter(t => t.status === 'Open').length} icon="confirmation_number" color="blue" />
          <StatCard title="Mean Response" value="2.3 hrs" icon="timer" color="indigo" />
          <StatCard title="Resolution Index" value="94%" icon="done_all" color="purple" />
          <StatCard title="Partner Sentiment" value="4.8/5" icon="star" color="blue" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-6 py-12 pb-32">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'tickets' && (
            <TicketManagement tickets={tickets} setTickets={setTickets} />
          )}

          {activeTab === 'knowledge' && (
            <KnowledgeBase />
          )}

          {activeTab === 'sla' && (
            <SLAMonitoring />
          )}

          {activeTab === 'analytics' && (
            <SupportAnalytics tickets={tickets} />
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

const TicketManagement = ({ tickets, setTickets }) => {
  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High': return 'bg-blue-600 text-white shadow-lg shadow-blue-500/20';
      case 'Medium': return 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20';
      case 'Low': return 'bg-slate-100 text-slate-400';
      default: return 'bg-slate-100 text-slate-400';
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Open': return 'bg-blue-600 text-white shadow-lg shadow-blue-500/20';
      case 'In Progress': return 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20';
      case 'Resolved': return 'bg-slate-100 text-slate-400 text-slate-900 border border-slate-200';
      default: return 'bg-slate-100 text-slate-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-12"
    >
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase tracking-widest text-xs font-black">Resolution Ledger</h2>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Active inquiry synchronization matrix</p>
        </div>
        <button className="bg-slate-900 text-white font-black px-10 py-5 rounded-[2rem] flex items-center gap-4 text-xs uppercase tracking-widest shadow-2xl hover:bg-black transition-all">
          <span className="material-symbols-outlined text-sm font-black">add</span>
          Provision Ticket
        </button>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden"
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-slate-900">
              <tr>
                <th className="text-left px-10 py-6 text-white text-[10px] font-black uppercase tracking-widest">Protocol ID</th>
                <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Operational Title</th>
                <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Partner Entity</th>
                <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Urgency Index</th>
                <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Current Status</th>
                <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Lead Strategist</th>
                <th className="text-right px-10 py-6 text-white text-[10px] font-black uppercase tracking-widest">Operations</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {tickets.map((ticket, index) => (
                <motion.tr
                  key={ticket.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-slate-50 transition-colors group"
                >
                  <td className="px-10 py-8">
                    <span className="text-slate-900 font-black tracking-widest text-[9px] uppercase italic">{ticket.id}</span>
                  </td>
                  <td className="px-8 py-8">
                    <p className="text-slate-900 font-black tracking-tight text-xs leading-relaxed max-w-xs">{ticket.title}</p>
                  </td>
                  <td className="px-8 py-8 text-slate-400 text-[10px] font-black uppercase tracking-tight">{ticket.customer}</td>
                  <td className="px-8 py-8">
                    <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="px-8 py-8">
                    <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest ${getStatusColor(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="px-8 py-8 text-slate-500 text-xs font-black italic">{ticket.assignedTo}</td>
                  <td className="px-10 py-8 text-right">
                    <div className="flex gap-2 justify-end opacity-0 group-hover:opacity-100 transition-opacity">
                      <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-900 shadow-sm hover:border-slate-900">
                        <span className="material-symbols-outlined text-sm font-black">visibility</span>
                      </motion.button>
                      <motion.button whileHover={{ scale: 1.1 }} className="w-10 h-10 rounded-xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm hover:border-slate-900">
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

      {/* Ticket Creation Form */}
      <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-colors group-hover:bg-blue-50"></div>
        <h3 className="text-xl font-black text-slate-900 mb-10 tracking-widest uppercase text-xs">Provision Identity Ticket</h3>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 relative z-10">
          <div className="space-y-8">
            <div>
              <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3 px-1">Partner Identity</label>
              <input
                type="text"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-bold"
                placeholder="Enter registered partner name"
              />
            </div>

            <div>
              <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3 px-1">Operational Directive (Title)</label>
              <input
                type="text"
                className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-bold"
                placeholder="Brief operational brief"
              />
            </div>

            <div>
              <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3 px-1">Urgency Index</label>
              <select className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-bold appearance-none cursor-pointer">
                <option>High Priority</option>
                <option>Medium Priority</option>
                <option>Low Priority</option>
              </select>
            </div>
          </div>

          <div>
            <label className="block text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3 px-1">Architectural Brief (Description)</label>
            <textarea
              rows="6"
              className="w-full bg-slate-50 border border-slate-100 rounded-2xl px-6 py-5 text-slate-900 placeholder-slate-300 focus:outline-none focus:border-slate-900 focus:bg-white transition-all font-bold resize-none h-[278px]"
              placeholder="Detailed technical description of the required resolution..."
            ></textarea>
          </div>
        </div>

        <div className="flex gap-4 mt-12 relative z-10">
          <button className="bg-slate-900 text-white font-black px-12 py-5 rounded-2xl text-[10px] uppercase tracking-widest shadow-2xl hover:bg-black transition-all">
            Incorporate Ticket
          </button>
          <button className="px-12 bg-white text-slate-400 border border-slate-100 font-black py-5 rounded-2xl text-[10px] uppercase tracking-widest hover:border-slate-900 hover:text-slate-900 transition-all">
            Save Protocol Draft
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const KnowledgeBase = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-12"
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase tracking-widest text-xs font-black">Intelligence Repository</h2>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Strategically archived technical documentation</p>
      </div>
      <button className="bg-slate-900 text-white font-black px-10 py-5 rounded-[2rem] flex items-center gap-4 text-xs uppercase tracking-widest shadow-2xl hover:bg-black transition-all">
        <span className="material-symbols-outlined text-sm font-black">add_link</span>
        Engineer Article
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
      {[
        { title: 'Global Onboarding Protocol', category: 'Infrastructure', views: 1247, rating: 4.8 },
        { title: 'Operational Troubleshooting Matrix', category: 'Support', views: 892, rating: 4.6 },
        { title: 'API Architectural Integration', category: 'Engineering', views: 2156, rating: 4.9 },
        { title: 'Capital Disbursement Guide', category: 'Finance', views: 563, rating: 4.7 },
        { title: 'Security Perimeter Protocol', category: 'Security', views: 742, rating: 4.5 },
        { title: 'Identity Governance Manual', category: 'Governance', views: 931, rating: 4.8 }
      ].map((article, index) => (
        <motion.div
          key={index}
          whileHover={{ y: -8 }}
          className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-xl hover:shadow-2xl transition-all relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-24 h-24 bg-slate-50 rounded-full blur-2xl -mr-12 -mt-12 pointer-events-none transition-colors group-hover:bg-blue-50"></div>

          <div className="flex items-center gap-4 mb-8 relative z-10">
            <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-blue-600 text-xl font-black">menu_book</span>
            </div>
            <div>
              <h3 className="text-slate-900 font-black tracking-tight text-sm leading-tight">{article.title}</h3>
              <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-1 italic">{article.category}</p>
            </div>
          </div>

          <div className="flex justify-between items-center mb-10 relative z-10 border-y border-slate-50 py-4">
            <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{article.views.toLocaleString()} AUDITS</span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-blue-600 text-[10px] font-black">stars</span>
              <span className="text-slate-900 text-[10px] font-black italic">{article.rating} INDEX</span>
            </div>
          </div>

          <button className="w-full bg-slate-900 text-white border border-slate-200 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest hover:bg-black transition-all shadow-sm">
            Access Intel
          </button>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const SLAMonitoring = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-12"
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase tracking-widest text-xs font-black">SLA Protocols</h2>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Operational performance threshold monitoring</p>
      </div>
    </div>

    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
      <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-colors group-hover:bg-blue-50"></div>
        <h3 className="text-xl font-black text-slate-900 mb-10 tracking-widest uppercase text-xs">Efficiency Index</h3>

        <div className="space-y-10 relative z-10">
          <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-slate-900 transition-all">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-900 font-black tracking-tight text-xs uppercase">Primary Response Threshold</span>
              <span className="text-blue-600 font-black text-xl italic tracking-tighter">96%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '96%' }}
                transition={{ duration: 1.5, ease: "circOut" }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 h-full rounded-full"
              ></motion.div>
            </div>
            <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-4 italic opacity-70 italic tracking-widest">Target: 95% within 120min lifecycle</p>
          </div>

          <div className="p-8 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-slate-900 transition-all">
            <div className="flex justify-between items-center mb-4">
              <span className="text-slate-900 font-black tracking-tight text-xs uppercase">Resolution Finality Matrix</span>
              <span className="text-indigo-600 font-black text-xl italic tracking-tighter">92%</span>
            </div>
            <div className="w-full bg-slate-200 rounded-full h-2 overflow-hidden shadow-inner">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '92%' }}
                transition={{ duration: 1.5, ease: "circOut", delay: 0.2 }}
                className="bg-gradient-to-r from-indigo-600 to-blue-500 h-full rounded-full"
              ></motion.div>
            </div>
            <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-4 italic opacity-70 italic tracking-widest">Target: 90% within 24hr operational window</p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none transition-colors group-hover:bg-red-50"></div>
        <h3 className="text-xl font-black text-slate-900 mb-10 tracking-widest uppercase text-xs">Protocol Deviations</h3>

        <div className="space-y-6 relative z-10">
          {[
            { ticket: 'TKT-007', violation: 'Response Overdue', time: '3.2hr deviation' },
            { ticket: 'TKT-012', violation: 'Resolution Gap', time: '6.5hr deviation' }
          ].map((violation, index) => (
            <div key={index} className="flex items-center justify-between p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-red-600 hover:border-opacity-30 transition-all">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center">
                  <span className="material-symbols-outlined text-red-600 text-sm font-black">warning</span>
                </div>
                <div>
                  <p className="text-slate-900 font-black tracking-widest text-[10px] uppercase italic leading-none">{violation.ticket}</p>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-tight mt-1">{violation.violation}</p>
                </div>
              </div>
              <span className="text-red-600 text-[10px] font-black italic tracking-widest">{violation.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const SupportAnalytics = ({ tickets }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-12"
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase tracking-widest text-xs font-black">Success Metrics</h2>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">High-fidelity support performance auditing</p>
      </div>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
      <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-xl text-center group hover:border-blue-600 transition-all">
        <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-blue-600 text-3xl font-black">hub</span>
        </div>
        <div className="text-6xl font-black text-slate-900 tracking-tighter mb-2 italic">24</div>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest italic tracking-[0.2em]">Weekly Inquiries</p>
      </div>

      <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-xl text-center group hover:border-indigo-600 transition-all">
        <div className="w-16 h-16 bg-indigo-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-indigo-600 text-3xl font-black">verified_user</span>
        </div>
        <div className="text-6xl font-black text-slate-900 tracking-tighter mb-2 italic text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">3.2</div>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest italic tracking-[0.2em]">Mean Resolution Hrs</p>
      </div>

      <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-xl text-center group hover:border-purple-600 transition-all">
        <div className="w-16 h-16 bg-purple-50 rounded-2xl flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-purple-600 text-3xl font-black">grade</span>
        </div>
        <div className="text-6xl font-black text-slate-900 tracking-tighter mb-2 italic">4.8</div>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest italic tracking-[0.2em]">Sentiment Index</p>
      </div>
    </div>

    <div className="bg-white rounded-[4rem] p-16 border border-slate-200 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none transition-colors group-hover:bg-blue-50"></div>
      <h3 className="text-xl font-black text-slate-900 mb-16 tracking-widest uppercase text-xs text-center">Urgency Distribution Matrix</h3>

      <div className="flex flex-col md:flex-row items-center justify-center gap-20 relative z-10">
        <div className="text-center group/metric">
          <div className="w-40 h-40 rounded-full border-[10px] border-slate-100 border-t-blue-600 flex items-center justify-center mb-8 transform group-hover/metric:scale-110 transition-transform shadow-xl">
            <span className="text-4xl font-black text-slate-900 tracking-tighter italic">42%</span>
          </div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest tracking-[0.3em]">Critical Urgency</p>
        </div>

        <div className="text-center group/metric">
          <div className="w-40 h-40 rounded-full border-[10px] border-slate-100 border-t-indigo-600 flex items-center justify-center mb-8 transform group-hover/metric:scale-110 transition-transform shadow-xl">
            <span className="text-4xl font-black text-slate-900 tracking-tighter italic">35%</span>
          </div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest tracking-[0.3em]">Operational Priority</p>
        </div>

        <div className="text-center group/metric">
          <div className="w-40 h-40 rounded-full border-[10px] border-slate-100 border-t-blue-400 flex items-center justify-center mb-8 transform group-hover/metric:scale-110 transition-transform shadow-xl">
            <span className="text-4xl font-black text-slate-900 tracking-tighter italic">23%</span>
          </div>
          <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest tracking-[0.3em]">Standard Inquiries</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default SupportHelpdesk;