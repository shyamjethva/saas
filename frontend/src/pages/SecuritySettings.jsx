import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { securitySettingAPI } from '../services/api';
import { useNavigate } from 'react-router-dom';

const SecuritySettings = () => {
  const [securitySettings, setSecuritySettings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Load security settings data
  useEffect(() => {
    const fetchSecuritySettings = async () => {
      try {
        const response = await securitySettingAPI.getAllSecuritySettings({
          page: 1,
          limit: 100
        });
        setSecuritySettings(response.data.data || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching security settings:', err);
        setError(err.response?.data?.error || err.message || 'Failed to load security settings');
        setLoading(false);
      }
    };

    fetchSecuritySettings();

    // Set up interval to refresh data every 30 seconds
    const interval = setInterval(fetchSecuritySettings, 30000);
    return () => clearInterval(interval);
  }, []);
  const securityFeatures = [
    {
      title: 'Multi-Level Permission Access',
      description: 'Granular access controls with role-based restrictions',
      icon: 'security',
      color: 'from-red-500 to-pink-500',
      status: 'Active'
    },
    {
      title: 'Secure Login & Authentication',
      description: 'Advanced authentication protocols with session management',
      icon: 'lock',
      color: 'from-blue-500 to-cyan-500',
      status: 'Active'
    },
    {
      title: 'Two-Factor Authentication',
      description: 'Enhanced security with 2FA for all user accounts',
      icon: 'verified_user',
      color: 'from-green-500 to-emerald-500',
      status: 'Configurable'
    },
    {
      title: 'Activity Logs & Monitoring',
      description: 'Real-time tracking of all system activities and user actions',
      icon: 'history',
      color: 'from-purple-500 to-indigo-500',
      status: 'Active'
    },
    {
      title: 'IP Access Restrictions',
      description: 'Control access based on geographical location and IP addresses',
      icon: 'location_on',
      color: 'from-orange-500 to-red-500',
      status: 'Configurable'
    },
    {
      title: 'Encrypted Data Storage',
      description: 'Military-grade encryption for all stored business data',
      icon: 'encrypted',
      color: 'from-teal-500 to-cyan-500',
      status: 'Active'
    },
    {
      title: 'Cloud Backup & Recovery',
      description: 'Automated backups with instant recovery capabilities',
      icon: 'cloud_download',
      color: 'from-indigo-500 to-purple-500',
      status: 'Active'
    },
    {
      title: 'Real-Time Security Alerts',
      description: 'Instant notifications for suspicious activities and threats',
      icon: 'warning',
      color: 'from-yellow-500 to-orange-500',
      status: 'Active'
    }
  ];

  const securityStats = [
    { label: 'Active Threats Blocked', value: '1,247', change: '+12%', color: 'text-green-400' },
    { label: 'Security Incidents', value: '0', change: '0%', color: 'text-green-400' },
    { label: '2FA Enabled Users', value: '89%', change: '+15%', color: 'text-blue-400' },
    { label: 'Encrypted Records', value: '100%', change: '✓', color: 'text-green-400' }
  ];

  return (
    <div className="min-h-screen premium-bg pt-20">
      {/* Header Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-red-50 border border-red-100 mb-8 shadow-sm">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="material-symbols-outlined text-red-600 text-sm font-black"
              >
                shield
              </motion.span>
              <span className="text-red-600 font-black tracking-widest uppercase text-[10px]">SECURITY INFRASTRUCTURE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
              Enterprise-Grade
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-red-600">
                Data Protection
              </span>
            </h1>

            <p className="text-lg text-slate-500 max-w-3xl leading-relaxed font-medium mx-auto">
              Your business data is protected with multi-layered, military-grade security protocols and real-time monitoring.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Security Dashboard */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] mb-16"
          >
            <h2 className="text-3xl font-black text-slate-900 mb-12 text-center tracking-tighter uppercase tracking-widest text-xs font-black">Security Governance Overview</h2>

            {/* Security Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
              {securityStats.map((stat, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center group hover:border-red-200 transition-all">
                  <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">{stat.label}</div>
                  <div className="text-3xl font-black text-slate-900 mb-1 tracking-tight">{stat.value}</div>
                  <div className={`text-xs font-black uppercase tracking-tighter ${stat.color === 'text-green-400' ? 'text-green-600' : 'text-blue-600'}`}>{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Security Visualization */}
            <div className="bg-slate-50 rounded-[2rem] p-10 border border-slate-100">
              <div className="flex flex-col md:flex-row items-center justify-between mb-10 gap-6">
                <h3 className="text-xs font-black text-slate-900 uppercase tracking-[0.2em]">Security Infrastructure Layers</h3>
                <div className="flex items-center gap-3 px-5 py-2 bg-white rounded-full border border-slate-200 shadow-sm">
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-green-600 text-[10px] font-black uppercase tracking-widest">Autonomous Defense Active</span>
                </div>
              </div>

              <div className="space-y-6">
                {[100, 95, 88, 92, 100, 85, 90, 97].map((percentage, index) => (
                  <div key={index} className="flex flex-col md:flex-row md:items-center gap-4">
                    <div className="w-48 text-slate-400 text-[10px] font-black uppercase tracking-widest">
                      {['Firewall', 'Encryption', 'Authentication', 'Monitoring', 'Backup', 'Access Control', 'Threat Detection', 'Compliance'][index]}
                    </div>
                    <div className="flex-1 bg-white rounded-full h-3 p-0.5 border border-slate-100">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeOut" }}
                        className="bg-gradient-to-r from-red-600 to-pink-600 h-full rounded-full shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                      ></motion.div>
                    </div>
                    <div className="w-12 text-right text-slate-900 font-black text-xs">{percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Security Features Grid */}
      <div className="px-6 py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Advanced Defense Protocols</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Military-grade protection for your professional business infrastructure.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-200 transition-all duration-500 shadow-xl hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                <div className="flex items-start gap-8">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                    <span className="material-symbols-outlined text-white text-3xl font-black">{feature.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-xl font-black text-slate-900 tracking-tight">{feature.title}</h3>
                      <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${feature.status === 'Active'
                        ? 'bg-slate-900 text-white'
                        : 'bg-slate-50 text-slate-400 border border-slate-100'
                        }`}>
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-slate-500 text-sm font-medium leading-relaxed">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[4rem] p-16 border border-slate-200 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:bg-red-100 transition-colors"></div>

            <h2 className="relative z-10 text-5xl font-black text-slate-900 mb-8 tracking-tighter">
              Ready to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-red-600">
                Fortify My Infrastructure?
              </span>
            </h2>

            <p className="relative z-10 text-xl text-slate-500 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
              Transform your business security with our advanced, multi-layered defense protocols.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-black px-12 py-6 rounded-3xl transition-all shadow-2xl shadow-red-500/25 flex items-center gap-4 text-xl mx-auto"
            >
              <span className="material-symbols-outlined text-2xl font-black">shield_lock</span>
              Protect My Enterprise
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;