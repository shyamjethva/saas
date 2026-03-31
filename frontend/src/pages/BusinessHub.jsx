import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { clientAPI, projectAPI, billingAPI, consultationAPI, userAPI, leadAPI, securitySettingAPI, systemSettingAPI, termAPI } from '../services/api';

const BusinessHub = () => {
  const [loading, setLoading] = useState(true);
  const [stats, setStats] = useState({
    totalClients: 0,
    activeProjects: 0,
    monthlyRevenue: 0,
    pendingPayments: 0,
    totalUsers: 0,
    newConsultations: 0,
    totalLeads: 0,
    activeDeals: 0,
    totalContracts: 0,
    systemSecurityScore: 0
  });
  
  const [recentActivity, setRecentActivity] = useState([]);
  const [systemHealth, setSystemHealth] = useState({
    database: 'Operational',
    api: 'Operational',
    dataSync: 'Real-time',
    lastBackup: '2 hours ago'
  });

  // Fetch all business data
  const fetchBusinessData = async () => {
    setLoading(true);
    try {
      // Fetch all data in parallel
      const [clientsRes, projectsRes, billingRes, consultationsRes, usersRes, leadsRes, termsRes, securitySettingsRes] = await Promise.all([
        clientAPI.getAllClients(),
        projectAPI.getAllProjects(),
        billingAPI.getAllBilling(),
        consultationAPI.getAllConsultations(),
        userAPI.getAllUsers(),
        leadAPI.getAllLeads(),
        termAPI.getAllTerms(),
        securitySettingAPI.getAllSecuritySettings()
      ]);

      // Process data
      const clients = clientsRes.data || [];
      const projects = projectsRes.data || [];
      const billing = billingRes.data || [];
      const consultations = consultationsRes.data || [];
      const users = usersRes.data || [];
      const leads = leadsRes.data || [];
      const terms = termsRes.data || [];
      const securitySettings = securitySettingsRes.data || [];

      // Calculate stats
      setStats({
        totalClients: clients.length,
        activeProjects: projects.filter(p => p.status === 'In Progress').length,
        monthlyRevenue: billing
          .filter(b => b.status === 'Paid')
          .reduce((sum, b) => sum + b.amount, 0),
        pendingPayments: billing
          .filter(b => b.status === 'Pending' || b.status === 'Overdue')
          .reduce((sum, b) => sum + b.amount, 0),
        totalUsers: users.length,
        newConsultations: consultations.filter(c => 
          new Date(c.createdAt) > new Date(Date.now() - 7 * 24 * 60 * 60 * 1000)
        ).length,
        totalLeads: leads.length,
        activeDeals: leads.filter(lead => ['Qualified', 'Proposal Sent', 'Negotiation'].includes(lead.leadStage)).length,
        totalContracts: terms.length,
        systemSecurityScore: Math.min(100, Math.floor((securitySettings.filter(setting => setting.twoFactorAuth?.enabled).length / securitySettings.length) * 100) || 0)
      });

      // Generate recent activity from all sources
      const activities = [
        ...clients.slice(0, 2).map(client => ({
          id: `client-${client._id || client.id}`,
          action: 'New client registered',
          entity: client.companyName || client.company,
          time: client.createdAt ? new Date(client.createdAt).toLocaleDateString() : 'Recently',
          type: 'success'
        })),
        ...projects.slice(0, 2).map(project => ({
          id: `project-${project._id || project.id}`,
          action: 'Project milestone reached',
          entity: project.projectName || project.name,
          time: project.updatedAt ? new Date(project.updatedAt).toLocaleDateString() : 'Recently',
          type: 'info'
        })),
        ...billing.slice(0, 1).map(bill => ({
          id: `billing-${bill._id || bill.id}`,
          action: 'Payment received',
          entity: `₹${bill.amount.toLocaleString()}`,
          time: bill.createdAt ? new Date(bill.createdAt).toLocaleDateString() : 'Recently',
          type: 'success'
        })),
        ...consultations.slice(0, 2).map(consultation => ({
          id: `consult-${consultation._id || consultation.id}`,
          action: 'New consultation booked',
          entity: consultation.company || consultation.name,
          time: consultation.createdAt ? new Date(consultation.createdAt).toLocaleDateString() : 'Recently',
          type: 'warning'
        })),
        ...leads.slice(0, 2).map(lead => ({
          id: `lead-${lead._id || lead.id}`,
          action: 'New lead captured',
          entity: `${lead.firstName} ${lead.lastName} - ${lead.company}`,
          time: lead.createdAt ? new Date(lead.createdAt).toLocaleDateString() : 'Recently',
          type: 'primary'
        })),
        ...terms.slice(0, 1).map(term => ({
          id: `term-${term._id || term.id}`,
          action: 'New contract created',
          entity: `${term.contractType} - ${term.title}`,
          time: term.createdAt ? new Date(term.createdAt).toLocaleDateString() : 'Recently',
          type: 'info'
        }))
      ];

      setRecentActivity(activities);

    } catch (error) {
      console.error('Error fetching business data:', error);
      // Set default values if API fails
      setStats({
        totalClients: 0,
        activeProjects: 0,
        monthlyRevenue: 0,
        pendingPayments: 0,
        totalUsers: 0,
        newConsultations: 0
      });
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBusinessData();
    // Refresh data every 30 seconds
    const interval = setInterval(fetchBusinessData, 30000);
    return () => clearInterval(interval);
  }, []);

  const KPICard = ({ title, value, icon, color, trend }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
    >
      <div className="flex items-center justify-between">
        <div>
          <p className="text-slate-400 text-sm font-medium">{title}</p>
          <p className={`text-3xl font-bold mt-2 ${color}`}>
            {typeof value === 'number' ? value.toLocaleString() : value}
          </p>
          {trend && (
            <p className="text-xs text-green-400 mt-1">
              <span className="material-symbols-outlined align-middle text-sm">trending_up</span>
              {trend}
            </p>
          )}
        </div>
        <div className={`p-3 rounded-xl ${color.replace('text-', 'bg-').replace('-400', '-400/20')}`}>
          <span className="material-symbols-outlined text-2xl">{icon}</span>
        </div>
      </div>
    </motion.div>
  );

  const ActivityItem = ({ activity }) => (
    <div className="flex items-center justify-between p-4 bg-white/5 rounded-xl border border-white/10">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${
          activity.type === 'success' ? 'bg-green-500/20 text-green-400' :
          activity.type === 'info' ? 'bg-blue-500/20 text-blue-400' :
          activity.type === 'warning' ? 'bg-yellow-500/20 text-yellow-400' :
          activity.type === 'primary' ? 'bg-indigo-500/20 text-indigo-400' :
          'bg-slate-500/20 text-slate-400'
        }`}>
          <span className="material-symbols-outlined text-sm">
            {activity.type === 'success' ? 'check_circle' : 
             activity.type === 'info' ? 'info' : 
             activity.type === 'warning' ? 'schedule' : 
             activity.type === 'primary' ? 'person_add' : 'help'}
          </span>
        </div>
        <div>
          <p className="text-white font-medium">{activity.action}</p>
          <p className="text-slate-400 text-sm">{activity.entity}</p>
        </div>
      </div>
      <span className="text-slate-500 text-sm">{activity.time}</span>
    </div>
  );

  const SystemHealthCard = ({ title, status, icon, color }) => (
    <div className="bg-white/5 backdrop-blur-lg rounded-xl p-4 border border-white/10">
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-lg ${color}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        <div>
          <p className="text-slate-400 text-sm">{title}</p>
          <p className="text-white font-medium">{status}</p>
        </div>
      </div>
    </div>
  );

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
            <h1 className="text-4xl font-bold text-white mb-2">Business Hub</h1>
            <p className="text-slate-400">Comprehensive business management and analytics platform</p>
            {loading && (
              <div className="flex items-center gap-2 mt-2 text-sm text-blue-400">
                <div className="w-4 h-4 border-2 border-blue-400 border-t-transparent rounded-full animate-spin"></div>
                Loading business data from MongoDB...
              </div>
            )}
          </div>
          <div className="flex gap-3">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={fetchBusinessData}
              disabled={loading}
              className="px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-400 rounded-lg border border-blue-500/30 transition-all flex items-center gap-2 disabled:opacity-50"
            >
              <span className="material-symbols-outlined text-lg">refresh</span>
              {loading ? 'Loading...' : 'Refresh'}
            </motion.button>
          </div>
        </div>
      </motion.div>

      {/* KPI Cards Grid */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-8 gap-6 mb-8"
      >
        <KPICard 
          title="Total Clients" 
          value={stats.totalClients} 
          icon="groups" 
          color="text-blue-400"
          trend="+12% this month"
        />
        <KPICard 
          title="Active Projects" 
          value={stats.activeProjects} 
          icon="task" 
          color="text-green-400"
          trend="+3 this week"
        />
        <KPICard 
          title="Monthly Revenue" 
          value={`₹${(stats.monthlyRevenue / 100000).toFixed(1)}L`} 
          icon="payments" 
          color="text-yellow-400"
          trend="+8.5% vs last month"
        />
        <KPICard 
          title="Pending Payments" 
          value={`₹${(stats.pendingPayments / 100000).toFixed(1)}L`} 
          icon="pending_actions" 
          color="text-orange-400"
          trend="Due soon"
        />
        <KPICard 
          title="Team Members" 
          value={stats.totalUsers} 
          icon="people" 
          color="text-purple-400"
          trend="+2 this month"
        />
        <KPICard 
          title="New Consultations" 
          value={stats.newConsultations} 
          icon="calendar_month" 
          color="text-cyan-400"
          trend="Last 7 days"
        />
        <KPICard 
          title="Total Leads" 
          value={stats.totalLeads} 
          icon="trending_up" 
          color="text-indigo-400"
          trend="+5 this week"
        />
        <KPICard 
          title="Active Deals" 
          value={stats.activeDeals} 
          icon="receipt_long" 
          color="text-pink-400"
          trend="In pipeline"
        />
        <KPICard 
          title="Total Contracts" 
          value={stats.totalContracts} 
          icon="gavel" 
          color="text-teal-400"
          trend="Active agreements"
        />
        <KPICard 
          title="Security Score" 
          value={`${stats.systemSecurityScore}%`} 
          icon="shield" 
          color="text-red-400"
          trend="Enterprise grade"
        />
      </motion.div>

      {/* System Health and Recent Activity */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* System Health */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-1"
        >
          <h2 className="text-xl font-bold text-white mb-4">System Health</h2>
          <div className="space-y-4">
            <SystemHealthCard 
              title="Database" 
              status={systemHealth.database} 
              icon="database" 
              color="bg-green-500/20 text-green-400" 
            />
            <SystemHealthCard 
              title="API Status" 
              status={systemHealth.api} 
              icon="api" 
              color="bg-green-500/20 text-green-400" 
            />
            <SystemHealthCard 
              title="Data Sync" 
              status={systemHealth.dataSync} 
              icon="sync" 
              color="bg-blue-500/20 text-blue-400" 
            />
            <SystemHealthCard 
              title="Last Backup" 
              status={systemHealth.lastBackup} 
              icon="backup" 
              color="bg-purple-500/20 text-purple-400" 
            />
          </div>
        </motion.div>

        {/* Recent Activity */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-2"
        >
          <h2 className="text-xl font-bold text-white mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivity.length > 0 ? (
              recentActivity.map(activity => (
                <ActivityItem key={activity.id} activity={activity} />
              ))
            ) : (
              <div className="text-center py-8 text-slate-400">
                <span className="material-symbols-outlined text-4xl mb-2">event_note</span>
                <p>No recent activity found</p>
              </div>
            )}
          </div>
        </motion.div>
      </div>

      {/* Quick Actions */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <h2 className="text-xl font-bold text-white mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = '/crm'}
            className="p-4 bg-blue-500/10 hover:bg-blue-500/20 border border-blue-500/30 rounded-xl text-white transition-all flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-blue-400">dashboard</span>
            <span>CRM Dashboard</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = '/projects'}
            className="p-4 bg-green-500/10 hover:bg-green-500/20 border border-green-500/30 rounded-xl text-white transition-all flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-green-400">folder_shared</span>
            <span>Projects</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = '/billing'}
            className="p-4 bg-yellow-500/10 hover:bg-yellow-500/20 border border-yellow-500/30 rounded-xl text-white transition-all flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-yellow-400">receipt_long</span>
            <span>Billing</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = '/analytics'}
            className="p-4 bg-purple-500/10 hover:bg-purple-500/20 border border-purple-500/30 rounded-xl text-white transition-all flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-purple-400">analytics</span>
            <span>Analytics</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = '/crm/leads'}
            className="p-4 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/30 rounded-xl text-white transition-all flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-indigo-400">trending_up</span>
            <span>Leads & Sales</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = '/crm/terms'}
            className="p-4 bg-teal-500/10 hover:bg-teal-500/20 border border-teal-500/30 rounded-xl text-white transition-all flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-teal-400">gavel</span>
            <span>Terms & Contracts</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = '/crm/settings'}
            className="p-4 bg-orange-500/10 hover:bg-orange-500/20 border border-orange-500/30 rounded-xl text-white transition-all flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-orange-400">settings</span>
            <span>System Settings</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => window.location.href = '/crm/security'}
            className="p-4 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl text-white transition-all flex items-center gap-3"
          >
            <span className="material-symbols-outlined text-red-400">shield</span>
            <span>Security Settings</span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

export default BusinessHub;