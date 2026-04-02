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
    <div className="min-h-screen premium-bg pt-20 selection:bg-blue-500/10">
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
                  <span className="material-symbols-outlined text-blue-600 text-sm font-black">security</span>
                  <span className="text-blue-600 font-black tracking-widest uppercase text-[10px]">SECURITY AUDIT PERIMETER</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
                  Vigilance
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                    & Governance
                  </span>
                </h1>

                <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-medium">
                  Maintain absolute system integrity with real-time audit trails, automated threat detection, and comprehensive compliance monitoring across the entire SaaS infrastructure.
                </p>
              </div>

              <div className="flex flex-wrap gap-4 h-fit">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 shadow-2xl hover:bg-black"
                >
                  <span className="material-symbols-outlined text-sm font-black">download</span>
                  Export Audit Ledger
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
            { id: 'logs', label: 'Audit Trail', icon: 'history' },
            { id: 'alerts', label: 'Threat Matrix', icon: 'warning' },
            { id: 'access', label: 'Access protocols', icon: 'shield' },
            { id: 'compliance', label: 'Compliance Ledger', icon: 'gavel' }
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
                  layoutId="security-tab-underline"
                  className="absolute bottom-[-1rem] left-1/2 -translate-x-1/2 w-4 h-1 bg-blue-600 rounded-full"
                />
              )}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCard title="Security Events" value={auditLogs.length} icon="event" color="blue" />
          <StatCard title="Active Alerts" value={securityAlerts.filter(a => !a.resolved).length} icon="warning" color="indigo" />
          <StatCard title="Active Nodes" value="12" icon="devices" color="purple" />
          <StatCard title="Compliance Index" value="98%" icon="verified" color="blue" />
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-6 py-12 pb-40">
        <div className="max-w-7xl mx-auto">
          {activeTab === 'logs' && (
            <AuditTrail logs={auditLogs} />
          )}

          {activeTab === 'alerts' && (
            <SecurityAlerts alerts={securityAlerts} />
          )}

          {activeTab === 'access' && (
            <AccessManagement />
          )}

          {activeTab === 'compliance' && (
            <ComplianceDashboard />
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
        <p className="text-4xl font-black text-slate-900 tracking-tight italic">{value}</p>
      </div>
      <div className={`w-14 h-14 rounded-2xl bg-${color}-50 flex items-center justify-center group-hover:scale-110 transition-transform shadow-inner`}>
        <span className={`material-symbols-outlined text-${color}-600 text-2xl font-black`}>{icon}</span>
      </div>
    </div>
  </motion.div>
);

const AuditTrail = ({ logs }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-12"
  >
    <div className="bg-white rounded-[3rem] border border-slate-200 shadow-2xl overflow-hidden relative group">
      <div className="p-10 border-b border-slate-100 flex justify-between items-center bg-slate-50/50">
        <h2 className="text-xl font-black text-slate-900 tracking-widest uppercase text-xs">High-Fidelity Audit Ledger</h2>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-slate-900">
            <tr>
              <th className="text-left px-10 py-6 text-white text-[10px] font-black uppercase tracking-widest">Operator Identity</th>
              <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Action Protocol</th>
              <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Network Origin (IP)</th>
              <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Chronos Marker</th>
              <th className="text-left px-8 py-6 text-white text-[10px] font-black uppercase tracking-widest">Execution Status</th>
              <th className="text-right px-10 py-6 text-white text-[10px] font-black uppercase tracking-widest">Operational Detail</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100">
            {logs.map((log, index) => (
              <motion.tr
                key={log.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-slate-50 transition-colors group/row"
              >
                <td className="px-10 py-8">
                  <p className="text-slate-900 font-black tracking-tight text-xs uppercase">{log.user}</p>
                </td>
                <td className="px-8 py-8 text-slate-400 text-[10px] font-black uppercase tracking-tight italic">{log.action}</td>
                <td className="px-8 py-8 text-slate-500 font-black text-[10px] font-mono italic tracking-widest">{log.ip}</td>
                <td className="px-8 py-8 text-slate-400 text-[10px] font-black uppercase tracking-widest">{log.timestamp}</td>
                <td className="px-8 py-8">
                  <span className={`px-4 py-1.5 rounded-full text-[8px] font-black uppercase tracking-widest ${log.status === 'Success' ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20' : 'bg-slate-900 text-white shadow-lg'}`}>
                    {log.status}
                  </span>
                </td>
                <td className="px-10 py-8 text-right max-w-xs">
                  <p className="text-slate-500 text-[10px] font-bold uppercase italic truncate">"{log.details}"</p>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </motion.div>
);

const SecurityAlerts = ({ alerts }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-12"
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
      <div>
        <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase tracking-widest text-xs font-black">Threat Detection Matrix</h2>
        <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-2">Active security anomaly monitoring</p>
      </div>
      <button className="bg-slate-900 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-black transition-all">
        Acknowledge Perimeter
      </button>
    </div>

    <div className="grid grid-cols-1 gap-8">
      {alerts.map((alert, index) => (
        <motion.div
          key={alert.id}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className={`p-10 rounded-[3rem] border shadow-2xl relative overflow-hidden group ${alert.severity === 'High'
              ? 'bg-slate-900 border-slate-800'
              : 'bg-white border-slate-200'
            }`}
        >
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 relative z-10">
            <div className="flex gap-6 items-start">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 shadow-inner group-hover:scale-110 transition-transform ${alert.severity === 'High' ? 'bg-white/10' : 'bg-slate-50'
                }`}>
                <span className={`material-symbols-outlined font-black ${alert.severity === 'High' ? 'text-white' : 'text-slate-900'
                  }`}>
                  {alert.severity === 'High' ? 'gpp_maybe' : 'report'}
                </span>
              </div>
              <div>
                <h3 className={`text-2xl font-black tracking-tighter uppercase italic mb-2 ${alert.severity === 'High' ? 'text-white' : 'text-slate-900'
                  }`}>{alert.title}</h3>
                <p className={`text-sm font-bold italic leading-relaxed max-w-2xl ${alert.severity === 'High' ? 'text-slate-400' : 'text-slate-500'
                  }`}>"{alert.description}"</p>
                <div className="flex gap-4 mt-4">
                  <span className={`text-[10px] font-black uppercase tracking-widest italic ${alert.severity === 'High' ? 'text-blue-500' : 'text-slate-400'
                    }`}>{alert.timestamp}</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col items-end gap-4 min-w-[200px]">
              <span className={`px-6 py-2 rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg ${alert.severity === 'High'
                  ? 'bg-blue-600 text-white shadow-blue-500/20'
                  : 'bg-slate-100 text-slate-500'
                }`}>
                {alert.severity} Criticality
              </span>
              {!alert.resolved && (
                <button className={`w-full py-4 rounded-xl text-[10px] font-black uppercase tracking-widest border transition-all ${alert.severity === 'High'
                    ? 'border-white/10 text-white hover:bg-white/10'
                    : 'border-slate-200 text-slate-900 hover:border-slate-900'
                  }`}>
                  Initiate Resolution
                </button>
              )}
              {alert.resolved && (
                <span className="text-blue-600 font-black uppercase tracking-widest text-[10px] italic">Verified Resolved ✓</span>
              )}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </motion.div>
);

const AccessManagement = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-12"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-50 transition-colors"></div>
        <h3 className="text-xl font-black text-slate-900 mb-10 tracking-widest uppercase text-xs italic">Identity Synthesis (2FA)</h3>

        <div className="space-y-6 relative z-10">
          <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-center justify-between hover:bg-white hover:border-slate-900 transition-all group/item">
            <div>
              <p className="text-slate-900 font-black tracking-tighter uppercase italic">Institutional 2FA</p>
              <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-1">Universal Protocol Active</p>
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover/item:scale-110 transition-transform">
              <span className="material-symbols-outlined text-white text-xl font-black">verified_user</span>
            </div>
          </div>

          <div className="p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 flex items-center justify-between hover:bg-white hover:border-slate-900 transition-all group/item">
            <div>
              <p className="text-slate-900 font-black tracking-tighter uppercase italic">Operator Enrollment</p>
              <div className="flex items-center gap-3 mt-2">
                <div className="w-32 bg-slate-200 rounded-full h-1.5 overflow-hidden">
                  <div className="bg-blue-600 h-full rounded-full" style={{ width: '85%' }}></div>
                </div>
                <span className="text-slate-900 font-black text-[10px] italic">85%</span>
              </div>
            </div>
            <span className="text-slate-400 text-[9px] font-black uppercase italic tracking-widest">21 of 25 NODES</span>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden group">
        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-20"></div>
        <h3 className="text-xl font-black text-slate-900 mb-10 tracking-widest uppercase text-xs italic">Session Lifecycle Control</h3>

        <div className="space-y-8 relative z-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 bg-slate-50 rounded-2xl">
              <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">Active Latency</p>
              <p className="text-2xl font-black text-slate-900 tracking-tighter italic">12 NODES</p>
            </div>
            <div className="p-6 bg-slate-50 rounded-2xl">
              <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mb-1">Expiry Protocol</p>
              <p className="text-2xl font-black text-slate-900 tracking-tighter italic">30 MINS</p>
            </div>
          </div>

          <button className="w-full bg-slate-900 text-white font-black py-5 rounded-2xl text-[10px] uppercase tracking-widest shadow-2xl hover:bg-black transition-all">
            Execute Node Termination (ALL)
          </button>
        </div>
      </div>
    </div>
  </motion.div>
);

const ComplianceDashboard = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    className="space-y-12"
  >
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <ComplianceStat title="GDPR INDEX" value="98%" icon="gavel" color="blue" />
      <ComplianceStat title="ENCYPTION RATIO" value="100%" icon="lock" color="indigo" />
      <ComplianceStat title="AUDIT RADIUS" value="95%" icon="radar" color="purple" />
      <ComplianceStat title="GOVERNANCE" value="92%" icon="verified" color="blue" />
    </div>

    <div className="bg-white rounded-[4rem] p-16 border border-slate-200 shadow-2xl relative overflow-hidden group">
      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none transition-colors group-hover:bg-blue-50"></div>
      <h3 className="text-xl font-black text-slate-900 mb-12 tracking-widest uppercase text-xs italic">Institutional Compliance Inventory</h3>

      <div className="space-y-4 relative z-10">
        {[
          { item: 'Cyclical Security Audit Persistence', status: 'VERIFIED', date: 'JAN 15, 2024' },
          { item: 'Data Finality & Breach protocols', status: 'VERIFIED', date: 'JAN 20, 2024' },
          { item: 'Operator Security Induction', status: 'SYNCHRONIZING', date: 'FEB 01, 2024' },
          { item: 'Vendor Entity Compliance Assessment', status: 'QUEUED', date: 'FEB 15, 2024' }
        ].map((check, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className="flex items-center justify-between p-8 bg-slate-50 rounded-[2.5rem] border border-slate-100 hover:bg-white hover:border-slate-900 transition-all group/item"
          >
            <span className="text-slate-900 font-black text-xs uppercase tracking-tight italic group-hover/item:text-blue-600 transition-colors">"{check.item}"</span>
            <div className="flex items-center gap-6">
              <span className={`text-[9px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-sm ${check.status === 'VERIFIED' ? 'bg-blue-600 text-white shadow-blue-500/20' :
                  check.status === 'SYNCHRONIZING' ? 'bg-indigo-600 text-white shadow-indigo-500/20' :
                    'bg-slate-200 text-slate-500'
                }`}>
                {check.status}
              </span>
              <span className="text-slate-400 text-[10px] font-black uppercase italic">{check.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const ComplianceStat = ({ title, value, icon, color }) => (
  <div className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl text-center group hover:border-blue-600 transition-all">
    <div className={`w-16 h-16 bg-${color}-50 rounded-[1.5rem] flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:scale-110 transition-transform`}>
      <span className={`material-symbols-outlined text-${color}-600 text-2xl font-black`}>{icon}</span>
    </div>
    <h3 className="text-4xl font-black text-slate-900 tracking-tighter mb-2 italic">{value}</h3>
    <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest">{title}</p>
  </div>
);

export default SecurityAudit;