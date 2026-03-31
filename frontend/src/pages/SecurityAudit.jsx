import { useState } from 'react';
import { motion } from 'framer-motion';

const SecurityAudit = () => {
  const [activeTab, setActiveTab] = useState('logs');
  const [auditLogs, setAuditLogs] = useState([
    {
      id: 1,
      user: 'Rajesh Patel',
      action: 'User Login',
      ip: '192.168.1.100',
      timestamp: '2024-02-05 14:30:22',
      status: 'Success',
      details: 'Successful login from office network'
    },
    {
      id: 2,
      user: 'System',
      action: 'Database Backup',
      ip: '127.0.0.1',
      timestamp: '2024-02-05 02:00:00',
      status: 'Success',
      details: 'Automatic daily backup completed'
    },
    {
      id: 3,
      user: 'Priya Sharma',
      action: 'Client Data Access',
      ip: '192.168.1.105',
      timestamp: '2024-02-05 11:45:17',
      status: 'Success',
      details: 'Accessed client financial records'
    },
    {
      id: 4,
      user: 'Unknown',
      action: 'Failed Login Attempt',
      ip: '203.120.45.67',
      timestamp: '2024-02-05 09:15:33',
      status: 'Failed',
      details: 'Invalid credentials - suspicious activity detected'
    }
  ]);

  const [securityAlerts, setSecurityAlerts] = useState([
    {
      id: 1,
      title: 'Unusual Login Pattern Detected',
      severity: 'High',
      description: 'Multiple failed login attempts from unknown IP address',
      timestamp: '2024-02-05 09:15:33',
      resolved: false
    },
    {
      id: 2,
      title: 'Data Access Anomaly',
      severity: 'Medium',
      description: 'Unusual amount of client data accessed outside business hours',
      timestamp: '2024-02-04 22:30:15',
      resolved: true
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
        <h1 className="text-4xl font-bold text-white mb-2">Security & Audit</h1>
        <p className="text-slate-400">Monitor security events, audit logs, and system integrity</p>
      </motion.div>

      {/* Tabs */}
      <div className="flex gap-2 mb-8">
        {[
          { id: 'logs', label: 'Audit Logs', icon: 'history' },
          { id: 'alerts', label: 'Security Alerts', icon: 'warning' },
          { id: 'access', label: 'Access Control', icon: 'shield' },
          { id: 'compliance', label: 'Compliance', icon: 'gavel' }
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
        <StatCard title="Total Events" value={auditLogs.length} icon="event" color="blue" />
        <StatCard title="Security Alerts" value={securityAlerts.filter(a => !a.resolved).length} icon="warning" color="red" />
        <StatCard title="Active Sessions" value="12" icon="devices" color="green" />
        <StatCard title="Compliance Score" value="98%" icon="gavel" color="yellow" />
      </div>

      {/* Main Content */}
      {activeTab === 'logs' && (
        <AuditLogs logs={auditLogs} setAuditLogs={setAuditLogs} />
      )}

      {activeTab === 'alerts' && (
        <SecurityAlerts alerts={securityAlerts} setSecurityAlerts={setSecurityAlerts} />
      )}

      {activeTab === 'access' && (
        <AccessControl />
      )}

      {activeTab === 'compliance' && (
        <ComplianceDashboard />
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

const AuditLogs = ({ logs, setAuditLogs }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white">Audit Trail</h2>
      <div className="flex gap-2">
        <button className="bg-primary hover:bg-primary/90 text-white font-bold px-4 py-2 rounded-lg">
          Export Logs
        </button>
        <button className="bg-white/10 hover:bg-white/20 text-white font-bold px-4 py-2 rounded-lg">
          Refresh
        </button>
      </div>
    </div>

    <div className="bg-white/5 backdrop-blur-lg rounded-2xl border border-white/10 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-white/5">
            <tr>
              <th className="text-left p-4 text-slate-300 font-semibold">User</th>
              <th className="text-left p-4 text-slate-300 font-semibold">Action</th>
              <th className="text-left p-4 text-slate-300 font-semibold">IP Address</th>
              <th className="text-left p-4 text-slate-300 font-semibold">Timestamp</th>
              <th className="text-left p-4 text-slate-300 font-semibold">Status</th>
              <th className="text-left p-4 text-slate-300 font-semibold">Details</th>
            </tr>
          </thead>
          <tbody>
            {logs.map((log, index) => (
              <motion.tr
                key={log.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="border-b border-white/5 hover:bg-white/5 transition-colors"
              >
                <td className="p-4">
                  <span className="text-white font-medium">{log.user}</span>
                </td>
                <td className="p-4 text-slate-300">{log.action}</td>
                <td className="p-4 text-slate-300 font-mono text-sm">{log.ip}</td>
                <td className="p-4 text-slate-300">{log.timestamp}</td>
                <td className="p-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    log.status === 'Success' 
                      ? 'bg-green-500/20 text-green-400' 
                      : 'bg-red-500/20 text-red-400'
                  }`}>
                    {log.status}
                  </span>
                </td>
                <td className="p-4 text-slate-300 text-sm max-w-xs truncate">{log.details}</td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Filter Controls */}
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-4">Filter Logs</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label className="block text-slate-300 text-sm mb-2">Date Range</label>
          <div className="flex gap-2">
            <input
              type="date"
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
            />
            <input
              type="date"
              className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm"
            />
          </div>
        </div>
        
        <div>
          <label className="block text-slate-300 text-sm mb-2">User</label>
          <select className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm">
            <option className="bg-background-dark">All Users</option>
            <option className="bg-background-dark">Rajesh Patel</option>
            <option className="bg-background-dark">Priya Sharma</option>
          </select>
        </div>
        
        <div>
          <label className="block text-slate-300 text-sm mb-2">Action Type</label>
          <select className="w-full bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-white text-sm">
            <option className="bg-background-dark">All Actions</option>
            <option className="bg-background-dark">Login</option>
            <option className="bg-background-dark">Data Access</option>
            <option className="bg-background-dark">Configuration Change</option>
          </select>
        </div>
        
        <div className="flex items-end">
          <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-2 rounded-lg">
            Apply Filters
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const SecurityAlerts = ({ alerts, setSecurityAlerts }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <div className="flex justify-between items-center">
      <h2 className="text-2xl font-bold text-white">Security Alerts</h2>
      <button className="bg-red-500/20 hover:bg-red-500/30 text-red-400 font-bold px-4 py-2 rounded-lg">
        Acknowledge All
      </button>
    </div>

    <div className="space-y-4">
      {alerts.map(alert => (
        <motion.div
          key={alert.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className={`p-5 rounded-xl border ${
            alert.severity === 'High' 
              ? 'bg-red-500/10 border-red-500/30' 
              : 'bg-yellow-500/10 border-yellow-500/30'
          }`}
        >
          <div className="flex justify-between items-start mb-3">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className={`material-symbols-outlined ${
                  alert.severity === 'High' ? 'text-red-400' : 'text-yellow-400'
                }`}>
                  {alert.severity === 'High' ? 'error' : 'warning'}
                </span>
                <h3 className="text-white font-bold">{alert.title}</h3>
              </div>
              <p className="text-slate-300 text-sm">{alert.description}</p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                alert.severity === 'High' 
                  ? 'bg-red-500/20 text-red-400' 
                  : 'bg-yellow-500/20 text-yellow-400'
              }`}>
                {alert.severity} Severity
              </span>
              {!alert.resolved && (
                <button className="bg-green-500/20 hover:bg-green-500/30 text-green-400 text-xs px-3 py-1 rounded-full">
                  Resolve
                </button>
              )}
            </div>
          </div>
          
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span>{alert.timestamp}</span>
            {alert.resolved && (
              <span className="text-green-400">✓ Resolved</span>
            )}
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const AccessControl = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <h2 className="text-2xl font-bold text-white">Access Control Management</h2>
    
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Two-Factor Authentication</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between p-4 bg-green-500/10 rounded-lg">
            <div>
              <h4 className="text-white font-medium">System-wide 2FA</h4>
              <p className="text-slate-300 text-sm">Enabled for all administrative accounts</p>
            </div>
            <span className="px-3 py-1 bg-green-500/20 text-green-400 text-xs rounded-full">
              Active
            </span>
          </div>
          
          <div className="flex items-center justify-between p-4 bg-blue-500/10 rounded-lg">
            <div>
              <h4 className="text-white font-medium">User Enrollment</h4>
              <p className="text-slate-300 text-sm">85% of users enrolled in 2FA</p>
            </div>
            <div className="text-right">
              <p className="text-white font-medium">85%</p>
              <p className="text-slate-400 text-xs">21 of 25 users</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <h3 className="text-xl font-bold text-white mb-6">Session Management</h3>
        
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Active Sessions</span>
            <span className="text-white font-medium">12 sessions</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Session Timeout</span>
            <span className="text-white">30 minutes</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Max Concurrent Sessions</span>
            <span className="text-white">3 per user</span>
          </div>
          
          <button className="w-full bg-red-500/20 hover:bg-red-500/30 text-red-400 font-bold py-2 rounded-lg mt-4">
            Terminate All Sessions
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const ComplianceDashboard = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-6"
  >
    <h2 className="text-2xl font-bold text-white">Compliance Dashboard</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <div className="text-center">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-green-400 text-2xl">gavel</span>
          </div>
          <h3 className="text-2xl font-bold text-green-400 mb-2">98%</h3>
          <p className="text-slate-300">GDPR Compliance</p>
        </div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <div className="text-center">
          <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-blue-400 text-2xl">lock</span>
          </div>
          <h3 className="text-2xl font-bold text-blue-400 mb-2">100%</h3>
          <p className="text-slate-300">Data Encryption</p>
        </div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <div className="text-center">
          <div className="w-16 h-16 bg-purple-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-purple-400 text-2xl">history</span>
          </div>
          <h3 className="text-2xl font-bold text-purple-400 mb-2">95%</h3>
          <p className="text-slate-300">Audit Coverage</p>
        </div>
      </div>
      
      <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
        <div className="text-center">
          <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-yellow-400 text-2xl">security</span>
          </div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-2">92%</h3>
          <p className="text-slate-300">Access Control</p>
        </div>
      </div>
    </div>
    
    <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10">
      <h3 className="text-xl font-bold text-white mb-6">Compliance Checklist</h3>
      
      <div className="space-y-3">
        {[
          { item: 'Regular Security Audits', status: 'Completed', date: '2024-01-15' },
          { item: 'Data Breach Response Plan', status: 'Completed', date: '2024-01-20' },
          { item: 'Employee Security Training', status: 'In Progress', date: '2024-02-01' },
          { item: 'Third-party Vendor Assessment', status: 'Pending', date: '2024-02-15' }
        ].map((check, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-3 bg-white/5 rounded-lg"
          >
            <span className="text-slate-300">{check.item}</span>
            <div className="flex items-center gap-3">
              <span className={`text-xs px-2 py-1 rounded-full ${
                check.status === 'Completed' ? 'bg-green-500/20 text-green-400' :
                check.status === 'In Progress' ? 'bg-yellow-500/20 text-yellow-400' :
                'bg-gray-500/20 text-gray-400'
              }`}>
                {check.status}
              </span>
              <span className="text-slate-400 text-sm">{check.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

export default SecurityAudit;