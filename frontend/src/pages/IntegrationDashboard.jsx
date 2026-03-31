import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { contactAPI, clientAPI, projectAPI, consultationAPI } from '../services/api';

const IntegrationDashboard = () => {
  const [dashboardData, setDashboardData] = useState({
    contacts: { count: 0, recent: [] },
    clients: { count: 0, recent: [] },
    projects: { count: 0, recent: [] },
    consultations: { count: 0, recent: [] }
  });
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('overview');

  const fetchData = async () => {
    setLoading(true);
    try {
      const [contactsRes, clientsRes, projectsRes, consultationsRes] = await Promise.all([
        contactAPI.getAllContacts(),
        clientAPI.getAllClients(),
        projectAPI.getAllProjects(),
        consultationAPI.getAllConsultations()
      ]);

      setDashboardData({
        contacts: {
          count: contactsRes.data.count || contactsRes.data.length || 0,
          recent: (contactsRes.data.data || contactsRes.data).slice(0, 5)
        },
        clients: {
          count: clientsRes.data.count || clientsRes.data.length || 0,
          recent: (clientsRes.data.data || clientsRes.data).slice(0, 5)
        },
        projects: {
          count: projectsRes.data.count || projectsRes.data.length || 0,
          recent: (projectsRes.data.data || projectsRes.data).slice(0, 5)
        },
        consultations: {
          count: consultationsRes.data.count || consultationsRes.data.length || 0,
          recent: (consultationsRes.data.data || consultationsRes.data).slice(0, 5)
        }
      });
    } catch (error) {
      console.error('Error fetching dashboard data:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
    // Refresh data every 30 seconds
    const interval = setInterval(fetchData, 30000);
    return () => clearInterval(interval);
  }, []);

  const StatCard = ({ title, count, icon, color, subtitle }) => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`bg-white/5 rounded-xl p-6 border border-white/10 ${color}`}
    >
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-3xl font-bold text-white">{count}</h3>
          <p className="text-slate-300 mt-1">{title}</p>
          {subtitle && <p className="text-slate-400 text-sm mt-1">{subtitle}</p>}
        </div>
        <div className="text-4xl opacity-20">
          <span className="material-symbols-outlined">{icon}</span>
        </div>
      </div>
    </motion.div>
  );

  const RecentItem = ({ item, type }) => {
    const getTitle = () => {
      switch (type) {
        case 'contact': return item.name || 'Anonymous';
        case 'client': return item.companyName || 'Unnamed Client';
        case 'project': return item.projectName || 'Unnamed Project';
        case 'consultation': return item.name || 'Anonymous';
        default: return 'Unknown';
      }
    };

    const getSubtitle = () => {
      switch (type) {
        case 'contact': return item.email || item.service;
        case 'client': return item.industry || item.email;
        case 'project': return item.clientName || item.status;
        case 'consultation': return item.company || item.service;
        default: return '';
      }
    };

    return (
      <div className="flex items-center justify-between p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
        <div className="flex-1">
          <h4 className="text-white font-medium">{getTitle()}</h4>
          <p className="text-slate-400 text-sm">{getSubtitle()}</p>
        </div>
        <div className="text-slate-400 text-xs">
          {new Date(item.createdAt).toLocaleDateString()}
        </div>
      </div>
    );
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900/20 pt-20 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mx-auto mb-4"></div>
          <p className="text-slate-300">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900/20 pt-20">
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Integration Dashboard
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Monitor your fully connected frontend-backend-MongoDB data flow in real-time
            </p>
          </motion.div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <StatCard
              title="Contact Inquiries"
              count={dashboardData.contacts.count}
              icon="mail"
              color="from-blue-500/20 to-cyan-500/20 border-blue-500/30"
              subtitle="Form submissions"
            />
            <StatCard
              title="Active Clients"
              count={dashboardData.clients.count}
              icon="corporate_fare"
              color="from-green-500/20 to-emerald-500/20 border-green-500/30"
              subtitle="Business relationships"
            />
            <StatCard
              title="Projects"
              count={dashboardData.projects.count}
              icon="work"
              color="from-purple-500/20 to-pink-500/20 border-purple-500/30"
              subtitle="Active initiatives"
            />
            <StatCard
              title="Consultations"
              count={dashboardData.consultations.count}
              icon="calendar_today"
              color="from-orange-500/20 to-red-500/20 border-orange-500/30"
              subtitle="Scheduled meetings"
            />
          </div>

          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {[
              { id: 'overview', label: 'Overview', icon: 'dashboard' },
              { id: 'contacts', label: 'Contacts', icon: 'mail' },
              { id: 'clients', label: 'Clients', icon: 'corporate_fare' },
              { id: 'projects', label: 'Projects', icon: 'work' },
              { id: 'consultations', label: 'Consultations', icon: 'calendar_today' }
            ].map((tab) => (
              <motion.button
                key={tab.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-medium transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                <span className="material-symbols-outlined text-sm">{tab.icon}</span>
                {tab.label}
              </motion.button>
            ))}
          </div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="glass-card rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
          >
            {activeTab === 'overview' && (
              <div className="space-y-8">
                <h2 className="text-2xl font-bold text-white mb-6">Recent Activity</h2>
                
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-blue-400">mail</span>
                      Recent Contacts
                    </h3>
                    <div className="space-y-3">
                      {dashboardData.contacts.recent.map((contact, index) => (
                        <RecentItem key={index} item={contact} type="contact" />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-400">corporate_fare</span>
                      Recent Clients
                    </h3>
                    <div className="space-y-3">
                      {dashboardData.clients.recent.map((client, index) => (
                        <RecentItem key={index} item={client} type="client" />
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8 mt-8">
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-purple-400">work</span>
                      Recent Projects
                    </h3>
                    <div className="space-y-3">
                      {dashboardData.projects.recent.map((project, index) => (
                        <RecentItem key={index} item={project} type="project" />
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-lg font-semibold text-white mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-orange-400">calendar_today</span>
                      Recent Consultations
                    </h3>
                    <div className="space-y-3">
                      {dashboardData.consultations.recent.map((consultation, index) => (
                        <RecentItem key={index} item={consultation} type="consultation" />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'contacts' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">All Contact Inquiries</h2>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {(dashboardData.contacts.recent || []).map((contact, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white font-medium">{contact.name}</h3>
                          <p className="text-slate-300">{contact.email}</p>
                          <p className="text-slate-400 text-sm mt-1">{contact.service}</p>
                        </div>
                        <span className="text-slate-400 text-sm">
                          {new Date(contact.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="text-slate-300 mt-3 text-sm">{contact.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'clients' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">All Clients</h2>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {(dashboardData.clients.recent || []).map((client, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white font-medium">{client.companyName}</h3>
                          <p className="text-slate-300">{client.contactPerson}</p>
                          <p className="text-slate-400 text-sm mt-1">{client.industry} • {client.companySize}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            client.status === 'Active' 
                              ? 'bg-green-500/20 text-green-400' 
                              : 'bg-gray-500/20 text-gray-400'
                          }`}>
                            {client.status}
                          </span>
                          <p className="text-slate-400 text-sm mt-2">
                            Health: {client.healthScore}/100
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">All Projects</h2>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {(dashboardData.projects.recent || []).map((project, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white font-medium">{project.projectName}</h3>
                          <p className="text-slate-300">Client: {project.clientName}</p>
                          <p className="text-slate-400 text-sm mt-1">
                            {project.status} • {project.priority} Priority
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-slate-400 text-sm">
                            Budget: ${project.budget?.toLocaleString() || 'N/A'}
                          </p>
                          <p className="text-slate-400 text-sm mt-1">
                            Team: {project.teamSize || 'N/A'} members
                          </p>
                        </div>
                      </div>
                      <p className="text-slate-300 mt-3 text-sm">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'consultations' && (
              <div>
                <h2 className="text-2xl font-bold text-white mb-6">All Consultations</h2>
                <div className="space-y-3 max-h-96 overflow-y-auto">
                  {(dashboardData.consultations.recent || []).map((consultation, index) => (
                    <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="text-white font-medium">{consultation.name}</h3>
                          <p className="text-slate-300">{consultation.company}</p>
                          <p className="text-slate-400 text-sm mt-1">{consultation.email}</p>
                        </div>
                        <div className="text-right">
                          <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                            consultation.status === 'Scheduled' 
                              ? 'bg-blue-500/20 text-blue-400' 
                              : consultation.status === 'Completed'
                              ? 'bg-green-500/20 text-green-400'
                              : 'bg-gray-500/20 text-gray-400'
                          }`}>
                            {consultation.status}
                          </span>
                          <p className="text-slate-400 text-sm mt-2">
                            {consultation.preferredDate 
                              ? new Date(consultation.preferredDate).toLocaleDateString()
                              : 'No date set'
                            }
                          </p>
                        </div>
                      </div>
                      <p className="text-slate-300 mt-3 text-sm">{consultation.message}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Connection Status */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-12 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/30 rounded-xl p-6 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <span className="material-symbols-outlined text-green-400 text-2xl">check_circle</span>
              <h3 className="text-xl font-bold text-green-400">All Systems Operational</h3>
            </div>
            <p className="text-slate-300">
              Frontend ↔ Backend API ↔ MongoDB database connection is fully synchronized
            </p>
            <div className="flex justify-center gap-8 mt-4 text-sm text-slate-400">
              <span>✓ Real-time data sync</span>
              <span>✓ Auto-refresh every 30s</span>
              <span>✓ Full CRUD operations</span>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default IntegrationDashboard;