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

  if (loading) {
    return (
      <div className="min-h-screen premium-bg flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-[4px] border-blue-600 border-t-transparent rounded-full animate-spin mx-auto mb-6 shadow-2xl shadow-blue-500/20"></div>
          <p className="text-slate-900 font-black uppercase tracking-widest text-[10px]">Synchronizing Integration Nodes...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen premium-bg pt-20">
      {/* Header Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-blue-50 border border-blue-100 mb-8 shadow-sm mx-auto">
              <span className="material-symbols-outlined text-blue-600 text-sm font-black">hub</span>
              <span className="text-blue-600 font-black tracking-widest uppercase text-[10px]">REAL-TIME DATA SYNCHRONIZATION</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
              Integration
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                Command Center
              </span>
            </h1>

            <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
              Monitor your full-stack architecture's throughput, visualize real-time data flow between frontend nodes, backend APIs, and distributed MongoDB clusters.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard
            title="Inquiry Throughput"
            count={dashboardData.contacts.count}
            icon="mail"
            color="blue"
            subtitle="Contact Form Clusters"
          />
          <StatCard
            title="Partner Population"
            count={dashboardData.clients.count}
            icon="corporate_fare"
            color="indigo"
            subtitle="Active Business Nodes"
          />
          <StatCard
            title="Operational Load"
            count={dashboardData.projects.count}
            icon="work"
            color="purple"
            subtitle="Active Initiative Threads"
          />
          <StatCard
            title="Consultation Matrix"
            count={dashboardData.consultations.count}
            icon="calendar_today"
            color="blue"
            subtitle="Scheduled Synced Events"
          />
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 py-12">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {[
            { id: 'overview', label: 'Architecture Overview', icon: 'dashboard' },
            { id: 'contacts', label: 'Contact Inquiries', icon: 'mail' },
            { id: 'clients', label: 'Client Nodes', icon: 'corporate_fare' },
            { id: 'projects', label: 'Project Threads', icon: 'work' },
            { id: 'consultations', label: 'Sync Events', icon: 'calendar_today' }
          ].map((tab) => (
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
                  layoutId="tab-underline"
                  className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 w-4 h-1 bg-blue-600 rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content Area */}
      <div className="px-6 py-12 pb-40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 opacity-20"></div>

            {activeTab === 'overview' && (
              <div className="space-y-16">
                <div className="flex justify-between items-center">
                  <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Recent System Pulses</h2>
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-full">
                    <div className="w-2 h-2 bg-blue-600 rounded-full animate-pulse"></div>
                    <span className="text-blue-600 text-[10px] font-black uppercase tracking-[0.2em]">Live Monitoring</span>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <ActivitySection
                    title="Communication Sync"
                    icon="mail"
                    iconColor="text-blue-600"
                    bgColor="bg-blue-50"
                  >
                    {dashboardData.contacts.recent.map((contact, index) => (
                      <RecentItem key={index} item={contact} type="contact" />
                    ))}
                  </ActivitySection>

                  <ActivitySection
                    title="Client Propagation"
                    icon="corporate_fare"
                    iconColor="text-indigo-600"
                    bgColor="bg-indigo-50"
                  >
                    {dashboardData.clients.recent.map((client, index) => (
                      <RecentItem key={index} item={client} type="client" />
                    ))}
                  </ActivitySection>
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <ActivitySection
                    title="Initiative Cycles"
                    icon="work"
                    iconColor="text-purple-600"
                    bgColor="bg-purple-50"
                  >
                    {dashboardData.projects.recent.map((project, index) => (
                      <RecentItem key={index} item={project} type="project" />
                    ))}
                  </ActivitySection>

                  <ActivitySection
                    title="Consultation Protocol"
                    icon="calendar_today"
                    iconColor="text-blue-600"
                    bgColor="bg-blue-50"
                  >
                    {dashboardData.consultations.recent.map((consultation, index) => (
                      <RecentItem key={index} item={consultation} type="consultation" />
                    ))}
                  </ActivitySection>
                </div>
              </div>
            )}

            {activeTab === 'contacts' && (
              <div className="space-y-12">
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Distributed Contact Ledger</h2>
                <div className="grid grid-cols-1 gap-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                  {(dashboardData.contacts.recent || []).map((contact, index) => (
                    <DetailCard key={index} title={contact.name} subtitle={contact.email} info={contact.service} date={contact.createdAt} content={contact.message} />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'clients' && (
              <div className="space-y-12">
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Provisioned Client Nodes</h2>
                <div className="grid grid-cols-1 gap-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                  {(dashboardData.clients.recent || []).map((client, index) => (
                    <DetailCard
                      key={index}
                      title={client.companyName}
                      subtitle={client.contactPerson}
                      info={`${client.industry} • ${client.companySize}`}
                      status={client.status}
                      meta={`Health Index: ${client.healthScore}%`}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'projects' && (
              <div className="space-y-12">
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Active Initiative Threads</h2>
                <div className="grid grid-cols-1 gap-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                  {(dashboardData.projects.recent || []).map((project, index) => (
                    <DetailCard
                      key={index}
                      title={project.projectName}
                      subtitle={`Target Entity: ${project.clientName}`}
                      info={`${project.status} • ${project.priority} Priority`}
                      content={project.description}
                      meta={`Capital Load: $${project.budget?.toLocaleString() || 'N/A'}`}
                    />
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'consultations' && (
              <div className="space-y-12">
                <h2 className="text-3xl font-black text-slate-900 tracking-tighter">Synchronized Consultation Matrix</h2>
                <div className="grid grid-cols-1 gap-6 max-h-[600px] overflow-y-auto pr-4 custom-scrollbar">
                  {(dashboardData.consultations.recent || []).map((consultation, index) => (
                    <DetailCard
                      key={index}
                      title={consultation.name}
                      subtitle={consultation.company}
                      info={consultation.email}
                      status={consultation.status}
                      date={consultation.preferredDate}
                      content={consultation.message}
                    />
                  ))}
                </div>
              </div>
            )}
          </motion.div>

          {/* Connection Status Perimeter */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="mt-16 bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-blue-50 rounded-full blur-[80px] -mr-24 -mt-24"></div>
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
              <div className="flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
                <div className="w-24 h-24 bg-blue-600 rounded-[2rem] flex items-center justify-center shadow-2xl shadow-blue-500/40 transform rotate-12">
                  <span className="material-symbols-outlined text-white text-4xl font-black">verified</span>
                </div>
                <div>
                  <h3 className="text-3xl font-black text-slate-900 tracking-tighter mb-2 italic">Infrastructure Verification</h3>
                  <p className="text-slate-500 font-medium max-w-xl">
                    Frontend Node ↔ Backend Service Layer ↔ MongoDB Cluster connection is optimized and fully synchronized at peak performance.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-6">
                <StatusPill label="Real-time Flow" />
                <StatusPill label="Auto-Sync: 30s" />
                <StatusPill label="Full CRUD Matrix" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const StatCard = ({ title, count, icon, color, subtitle }) => (
  <motion.div
    whileHover={{ y: -10 }}
    className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl relative overflow-hidden group"
  >
    <div className={`absolute top-0 right-0 w-24 h-24 bg-${color}-50 rounded-full blur-2xl -mr-12 -mt-12 group-hover:bg-${color}-100 transition-colors`}></div>
    <div className="relative z-10">
      <div className={`w-12 h-12 bg-${color}-50 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform`}>
        <span className={`material-symbols-outlined text-${color}-600 font-black`}>{icon}</span>
      </div>
      <h3 className="text-6xl font-black text-slate-900 tracking-tighter mb-2 italic">{count}</h3>
      <p className="text-slate-900 font-black text-[10px] uppercase tracking-widest">{title}</p>
      <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-2 opacity-60">{subtitle}</p>
    </div>
  </motion.div>
);

const ActivitySection = ({ title, icon, iconColor, bgColor, children }) => (
  <div className="space-y-8">
    <div className="flex items-center gap-4 border-b border-slate-50 pb-6">
      <div className={`w-10 h-10 ${bgColor} rounded-xl flex items-center justify-center`}>
        <span className={`material-symbols-outlined ${iconColor} text-sm font-black`}>{icon}</span>
      </div>
      <h3 className="text-slate-900 font-black tracking-widest uppercase text-xs">{title}</h3>
    </div>
    <div className="space-y-4">
      {children}
    </div>
  </div>
);

const RecentItem = ({ item, type }) => {
  const getTitle = () => {
    switch (type) {
      case 'contact': return item.name || 'Anonymous Node';
      case 'client': return item.companyName || 'Unnamed Entity';
      case 'project': return item.projectName || 'Unidentified Initiative';
      case 'consultation': return item.name || 'Anonymous Requester';
      default: return 'Encryption Lost';
    }
  };

  const getSubtitle = () => {
    switch (type) {
      case 'contact': return item.email || item.service;
      case 'client': return item.industry || item.email;
      case 'project': return item.clientName || item.status;
      case 'consultation': return item.company || item.service;
      default: return 'Data Corrupted';
    }
  };

  return (
    <div className="flex items-center justify-between p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-slate-900 transition-all group/item">
      <div className="flex-1">
        <h4 className="text-slate-900 font-black tracking-tight text-xs group-hover/item:text-blue-600 transition-colors uppercase">{getTitle()}</h4>
        <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-1 opacity-70 italic">{getSubtitle()}</p>
      </div>
      <div className="text-slate-900 font-black text-[9px] uppercase tracking-widest italic opacity-50">
        {new Date(item.createdAt).toLocaleDateString()}
      </div>
    </div>
  );
};

const DetailCard = ({ title, subtitle, info, date, content, status, meta }) => (
  <div className="p-10 bg-slate-50 rounded-[3rem] border border-slate-100 hover:bg-white hover:border-slate-900 transition-all group/card">
    <div className="flex justify-between items-start mb-8">
      <div>
        <h3 className="text-2xl font-black text-slate-900 tracking-tighter group-hover/card:text-blue-600 transition-colors uppercase italic">{title}</h3>
        <p className="text-slate-500 font-black text-[10px] uppercase tracking-widest mt-2">{subtitle}</p>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1 opacity-60 italic">{info}</p>
      </div>
      <div className="text-right flex flex-col items-end gap-3">
        {status && (
          <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-widest ${status === 'Active' || status === 'Completed' || status === 'Scheduled'
              ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
              : 'bg-slate-200 text-slate-500'
            }`}>
            {status}
          </span>
        )}
        {date && (
          <span className="text-slate-400 text-[10px] font-black uppercase tracking-widest italic">
            DATE SECURED: {new Date(date).toLocaleDateString()}
          </span>
        )}
        {meta && (
          <span className="text-slate-900 font-black text-[10px] uppercase tracking-widest bg-white border border-slate-200 px-4 py-1.5 rounded-full shadow-sm">
            {meta}
          </span>
        )}
      </div>
    </div>
    {content && (
      <div className="bg-white p-8 rounded-[2rem] border border-slate-100 italic text-slate-500 text-sm leading-relaxed border-l-[6px] border-l-blue-600">
        "{content}"
      </div>
    )}
  </div>
);

const StatusPill = ({ label }) => (
  <div className="px-6 py-2.5 bg-blue-50 border border-blue-100 rounded-full flex items-center gap-3">
    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-ping"></div>
    <span className="text-blue-600 text-[10px] font-black uppercase tracking-widest">{label}</span>
  </div>
);

export default IntegrationDashboard;