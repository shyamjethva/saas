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
    <div className="pt-24 pb-12 px-6">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl font-bold text-white mb-2">Support & Helpdesk</h1>
        <p className="text-slate-400">Ticket management, knowledge base, and customer support</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {[
          { id: 'tickets', label: 'Tickets', icon: 'confirmation_number' },
          { id: 'knowledge', label: 'Knowledge Base', icon: 'school' },
          { id: 'sla', label: 'SLA Monitoring', icon: 'timer' },
          { id: 'analytics', label: 'Support Analytics', icon: 'analytics' }
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
        <StatCard title="Open Tickets" value={tickets.filter(t => t.status === 'Open').length} icon="confirmation_number" color="red" />
        <StatCard title="Avg Response Time" value="2.3 hrs" icon="timer" color="blue" />
        <StatCard title="Resolution Rate" value="94%" icon="done_all" color="green" />
        <StatCard title="Customer Satisfaction" value="4.8/5" icon="star" color="yellow" />
      </div>

      {/* Main Content */}
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

const TicketManagement = ({ tickets, setTickets }) => {
  const getPriorityColor = (priority) => {
    switch(priority) {
      case 'High': return 'bg-red-500/20 text-red-400';
      case 'Medium': return 'bg-yellow-500/20 text-yellow-400';
      case 'Low': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  const getStatusColor = (status) => {
    switch(status) {
      case 'Open': return 'bg-red-500/20 text-red-400';
      case 'In Progress': return 'bg-blue-500/20 text-blue-400';
      case 'Resolved': return 'bg-green-500/20 text-green-400';
      default: return 'bg-gray-500/20 text-gray-400';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-6"
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold text-white">Support Tickets</h2>
        <button className="bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2">
          <span className="material-symbols-outlined">add</span>
          New Ticket
        </button>
      </div>

      <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white/5">
              <tr>
                <th className="text-left p-4 text-slate-300 font-semibold">Ticket ID</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Title</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Customer</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Priority</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Status</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Assigned To</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Last Update</th>
                <th className="text-left p-4 text-slate-300 font-semibold">Actions</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket, index) => (
                <motion.tr
                  key={ticket.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="border-b border-white/5 hover:bg-white/5 transition-colors"
                >
                  <td className="p-4">
                    <span className="text-white font-medium">{ticket.id}</span>
                  </td>
                  <td className="p-4 text-slate-300 max-w-xs truncate">{ticket.title}</td>
                  <td className="p-4 text-slate-300">{ticket.customer}</td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getPriorityColor(ticket.priority)}`}>
                      {ticket.priority}
                    </span>
                  </td>
                  <td className="p-4">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(ticket.status)}`}>
                      {ticket.status}
                    </span>
                  </td>
                  <td className="p-4 text-slate-300">{ticket.assignedTo}</td>
                  <td className="p-4 text-slate-300 text-sm">{ticket.lastUpdate}</td>
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
      </div>

      {/* Ticket Creation Form */}
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Create New Ticket</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label className="block text-slate-300 text-sm mb-2">Customer Name</label>
              <input
                type="text"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary"
                placeholder="Enter customer name"
              />
            </div>
            
            <div>
              <label className="block text-slate-300 text-sm mb-2">Ticket Title</label>
              <input
                type="text"
                className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary"
                placeholder="Brief description of the issue"
              />
            </div>
            
            <div>
              <label className="block text-slate-300 text-sm mb-2">Priority</label>
              <select className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-primary">
                <option className="bg-background-dark">High</option>
                <option className="bg-background-dark">Medium</option>
                <option className="bg-background-dark">Low</option>
              </select>
            </div>
          </div>
          
          <div>
            <label className="block text-slate-300 text-sm mb-2">Description</label>
            <textarea
              rows="6"
              className="w-full bg-white/10 border border-white/20 rounded-lg px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:border-primary resize-none"
              placeholder="Detailed description of the issue..."
            ></textarea>
          </div>
        </div>
        
        <div className="flex gap-3 mt-6">
          <button className="bg-primary hover:bg-primary/90 text-white font-bold px-6 py-3 rounded-lg">
            Create Ticket
          </button>
          <button className="bg-white/10 hover:bg-white/20 text-white font-bold px-6 py-3 rounded-lg">
            Save Draft
          </button>
        </div>
      </div>
    </motion.div>
  );
};

const KnowledgeBase = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white">Knowledge Base</h2>
      <button className="bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 rounded-lg flex items-center gap-2">
        <span className="material-symbols-outlined">add</span>
        New Article
      </button>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { title: 'Getting Started Guide', category: 'Setup', views: 1247, rating: 4.8 },
        { title: 'Troubleshooting Common Issues', category: 'Support', views: 892, rating: 4.6 },
        { title: 'API Integration Documentation', category: 'Development', views: 2156, rating: 4.9 },
        { title: 'Billing and Payments', category: 'Finance', views: 563, rating: 4.7 },
        { title: 'Security Best Practices', category: 'Security', views: 742, rating: 4.5 },
        { title: 'User Management Guide', category: 'Administration', views: 931, rating: 4.8 }
      ].map((article, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.1 }}
          className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="bg-blue-500/20 p-2 rounded-lg">
              <span className="material-symbols-outlined text-blue-400">article</span>
            </div>
            <div>
              <h3 className="text-white font-bold">{article.title}</h3>
              <p className="text-slate-400 text-sm">{article.category}</p>
            </div>
          </div>
          
          <div className="flex justify-between items-center mb-4">
            <span className="text-slate-400 text-sm">{article.views} views</span>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-yellow-400 text-sm">star</span>
              <span className="text-slate-300 text-sm">{article.rating}</span>
            </div>
          </div>
          
          <button className="w-full bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 py-2 rounded-lg text-sm">
            Read Article
          </button>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const SLAMonitoring = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <h2 className="text-2xl font-bold text-white">SLA Monitoring</h2>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">SLA Performance</h3>
        
        <div className="space-y-4">
          <div className="p-4 bg-green-500/10 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-300">First Response Time</span>
              <span className="text-green-400 font-bold">96%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '96%' }}></div>
            </div>
            <p className="text-slate-400 text-xs mt-2">Target: 95% within 2 hours</p>
          </div>
          
          <div className="p-4 bg-green-500/10 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <span className="text-slate-300">Resolution Time</span>
              <span className="text-green-400 font-bold">92%</span>
            </div>
            <div className="w-full bg-slate-700 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '92%' }}></div>
            </div>
            <p className="text-slate-400 text-xs mt-2">Target: 90% within 24 hours</p>
          </div>
        </div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">SLA Violations</h3>
        
        <div className="space-y-3">
          {[
            { ticket: 'TKT-007', violation: 'First response overdue', time: '3 hours late' },
            { ticket: 'TKT-012', violation: 'Resolution time exceeded', time: '6 hours late' }
          ].map((violation, index) => (
            <div key={index} className="flex items-center justify-between p-3 bg-red-500/10 rounded-lg">
              <div>
                <p className="text-white font-medium">{violation.ticket}</p>
                <p className="text-slate-300 text-sm">{violation.violation}</p>
              </div>
              <span className="text-red-400 text-sm">{violation.time}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.div>
);

const SupportAnalytics = ({ tickets }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <h2 className="text-2xl font-bold text-white">Support Analytics</h2>
    
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Ticket Volume</h3>
        <div className="text-center">
          <div className="text-4xl font-bold text-blue-400 mb-2">24</div>
          <p className="text-slate-300">Tickets this week</p>
        </div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Resolution Time</h3>
        <div className="text-center">
          <div className="text-4xl font-bold text-green-400 mb-2">3.2 hrs</div>
          <p className="text-slate-300">Avg resolution time</p>
        </div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Customer Satisfaction</h3>
        <div className="text-center">
          <div className="text-4xl font-bold text-yellow-400 mb-2">4.8/5</div>
          <p className="text-slate-300">Based on 156 reviews</p>
        </div>
      </div>
    </div>
    
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-6">Ticket Distribution by Priority</h3>
      
      <div className="flex items-center justify-center gap-8">
        <div className="text-center">
          <div className="w-20 h-20 rounded-full border-8 border-red-500 flex items-center justify-center mb-2">
            <span className="text-white font-bold">42%</span>
          </div>
          <p className="text-slate-300">High Priority</p>
        </div>
        
        <div className="text-center">
          <div className="w-20 h-20 rounded-full border-8 border-yellow-500 flex items-center justify-center mb-2">
            <span className="text-white font-bold">35%</span>
          </div>
          <p className="text-slate-300">Medium Priority</p>
        </div>
        
        <div className="text-center">
          <div className="w-20 h-20 rounded-full border-8 border-green-500 flex items-center justify-center mb-2">
            <span className="text-white font-bold">23%</span>
          </div>
          <p className="text-slate-300">Low Priority</p>
        </div>
      </div>
    </div>
  </motion.div>
);

export default SupportHelpdesk;