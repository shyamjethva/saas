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
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-red-500/20 to-pink-500/20 border border-red-500/30 backdrop-blur-sm mb-8">
              <motion.span
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="material-symbols-outlined text-red-400"
              >
                shield
              </motion.span>
              <span className="text-red-400 font-bold tracking-wider uppercase text-sm">SECURITY SETTINGS</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 font-space-grotesk">
              Enterprise-Grade
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-red-500">
                Security
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-medium">
              Your business data is protected with multi-layered security protocols.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Security Dashboard */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/80 rounded-2xl p-8 border border-slate-200 backdrop-blur-sm mb-16 shadow-xl shadow-slate-200/50"
          >
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Security Status Dashboard</h2>

            {/* Security Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {securityStats.map((stat, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-4 border border-slate-200 text-center">
                  <div className="text-slate-500 text-sm mb-1 font-bold">{stat.label}</div>
                  <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                  <div className={`text-sm font-black ${stat.color === 'text-green-400' ? 'text-green-600' : 'text-blue-600'}`}>{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Security Visualization */}
            <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-900 font-black">Security Layers</h3>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse"></div>
                  <span className="text-green-600 text-sm font-black">All Systems Secure</span>
                </div>
              </div>

              <div className="space-y-3">
                {[100, 95, 88, 92, 100, 85, 90, 97].map((percentage, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="w-32 text-slate-600 text-sm font-bold">
                      {['Firewall', 'Encryption', 'Authentication', 'Monitoring', 'Backup', 'Access Control', 'Threat Detection', 'Compliance'][index]}
                    </div>
                    <div className="flex-1 bg-slate-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className="bg-gradient-to-r from-green-600 to-emerald-600 h-2 rounded-full shadow-lg shadow-green-500/20"
                      ></motion.div>
                    </div>
                    <div className="w-12 text-right text-slate-900 font-black text-sm">{percentage}%</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Security Features Grid */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-space-grotesk">Advanced Security Features</h2>
            <p className="text-xl text-slate-600 font-medium">Military-grade protection for your business data</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-white rounded-xl p-6 border border-slate-200 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden ${feature.color.includes('red') ? 'hover:border-red-500/50' :
                    feature.color.includes('blue') ? 'hover:border-blue-500/50' :
                      feature.color.includes('green') ? 'hover:border-emerald-500/50' :
                        feature.color.includes('purple') ? 'hover:border-purple-500/50' :
                          feature.color.includes('orange') ? 'hover:border-orange-500/50' :
                            feature.color.includes('teal') ? 'hover:border-teal-500/50' :
                              feature.color.includes('indigo') ? 'hover:border-indigo-500/50' :
                                feature.color.includes('yellow') ? 'hover:border-yellow-500/50' :
                                  'hover:border-red-500/50'
                  }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                    <span className="material-symbols-outlined text-white">{feature.icon}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-lg font-black text-slate-900">{feature.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${feature.status === 'Active'
                        ? 'bg-green-500 text-white'
                        : 'bg-blue-600 text-white'
                        }`}>
                        {feature.status}
                      </span>
                    </div>
                    <p className="text-slate-600 text-sm font-medium">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-red-50 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-red-100 transition-colors"></div>

            <h2 className="relative z-10 text-4xl font-black text-slate-900 mb-6 font-space-grotesk">
              Ready to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-red-600 via-pink-600 to-red-500">
                Secure My System?
              </span>
            </h2>

            <p className="relative z-10 text-xl text-slate-600 mb-10 font-medium">
              Protect your business with enterprise-grade security infrastructure
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 bg-gradient-to-r from-red-600 to-pink-600 hover:from-red-700 hover:to-pink-700 text-white font-black px-10 py-5 rounded-3xl transition-all shadow-2xl shadow-red-500/25 flex items-center gap-3 text-lg mx-auto"
            >
              <span className="material-symbols-outlined font-black">shield_lock</span>
              Secure My System
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;