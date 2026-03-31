import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { systemSettingAPI } from '../services/api';
import { useNavigate } from 'react-router-dom';

const SystemSettings = () => {
  const [systemSettings, setSystemSettings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedSections, setExpandedSections] = useState({});
  const navigate = useNavigate();

  // Load system settings data
  useEffect(() => {
    const fetchSystemSettings = async () => {
      try {
        const response = await systemSettingAPI.getAllSystemSettings({
          page: 1,
          limit: 100
        });
        setSystemSettings(response.data.data || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching system settings:', err);
        setError(err.response?.data?.error || err.message || 'Failed to load system settings');
        setLoading(false);
      }
    };

    fetchSystemSettings();

    // Set up interval to refresh data every 30 seconds
    const interval = setInterval(fetchSystemSettings, 30000);
    return () => clearInterval(interval);
  }, []);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const settingsSections = [
    {
      id: 'role-management',
      title: 'Role Management',
      icon: 'admin_panel_settings',
      color: 'from-blue-500 to-cyan-500',
      description: 'Define user roles and permissions across your organization',
      features: ['Admin Access Control', 'Manager Permissions', 'Sales Team Roles', 'Accounts Department Access', 'Custom Role Creation', 'Role-Based Dashboards']
    },
    {
      id: 'access-control',
      title: 'Access Control Permissions',
      icon: 'vpn_key',
      color: 'from-purple-500 to-pink-500',
      description: 'Granular permission settings for different user groups',
      features: ['Module-Level Access', 'Data Visibility Controls', 'Action-Based Permissions', 'Time-Restricted Access', 'IP-Based Restrictions', 'Audit Trail Logging']
    },
    {
      id: 'workflow',
      title: 'Workflow Customization',
      icon: 'account_tree',
      color: 'from-green-500 to-emerald-500',
      description: 'Design custom business processes and approval workflows',
      features: ['Approval Chains', 'Task Routing Logic', 'Conditional Workflows', 'Parallel Processing', 'Escalation Rules', 'Workflow Templates']
    },
    {
      id: 'department',
      title: 'Department Setup',
      icon: 'corporate_fare',
      color: 'from-orange-500 to-red-500',
      description: 'Organize your business structure with department hierarchies',
      features: ['Department Creation', 'Team Structure Management', 'Reporting Lines', 'Resource Allocation', 'Budget Distribution', 'Performance Metrics']
    },
    {
      id: 'branch-config',
      title: 'Multi-Branch Configuration',
      icon: 'location_city',
      color: 'from-teal-500 to-cyan-500',
      description: 'Manage multiple office locations from centralized system',
      features: ['Branch Profiles', 'Regional Settings', 'Local Compliance', 'Cross-Branch Sync', 'Centralized Reporting', 'Location-Based Access']
    },
    {
      id: 'custom-fields',
      title: 'Custom Field Creation',
      icon: 'edit_note',
      color: 'from-indigo-500 to-purple-500',
      description: 'Add custom data fields to match your business requirements',
      features: ['Dynamic Field Types', 'Form Builder', 'Validation Rules', 'Conditional Logic', 'Field Dependencies', 'Template Library']
    },
    {
      id: 'automation',
      title: 'Automation Rule Setup',
      icon: 'bolt',
      color: 'from-yellow-500 to-orange-500',
      description: 'Create smart automation rules to streamline operations',
      features: ['Trigger Events', 'Action Sequences', 'Schedule-Based Rules', 'Conditional Automation', 'Notification Triggers', 'Process Optimization']
    },
    {
      id: 'integrations',
      title: 'Email & WhatsApp Integration Settings',
      icon: 'integration_instructions',
      color: 'from-red-500 to-pink-500',
      description: 'Connect external communication channels seamlessly',
      features: ['SMTP Configuration', 'WhatsApp Business API', 'Template Integration', 'Message Queuing', 'Delivery Tracking', 'Response Handling']
    }
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
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-blue-400">settings</span>
              <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">SYSTEM SETTINGS</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              Advanced System
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                Configuration
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
              Control every aspect of your business operations with structured administrative settings.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Settings Accordion */}
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto space-y-4">
          {settingsSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-xl border border-slate-200 shadow-lg hover:shadow-xl relative overflow-hidden transition-all duration-300 ${section.color.includes('blue') ? 'hover:border-blue-500/50' :
                  section.color.includes('purple') ? 'hover:border-purple-500/50' :
                    section.color.includes('green') ? 'hover:border-emerald-500/50' :
                      section.color.includes('orange') ? 'hover:border-orange-500/50' :
                        section.color.includes('teal') ? 'hover:border-teal-500/50' :
                          section.color.includes('indigo') ? 'hover:border-indigo-500/50' :
                            section.color.includes('yellow') ? 'hover:border-yellow-500/50' :
                              section.color.includes('red') ? 'hover:border-red-500/50' :
                                'hover:border-blue-500/50'
                }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-6 text-left flex items-center justify-between hover:bg-white/5 transition-all duration-300"
              >
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${section.color} flex items-center justify-center`}>
                    <span className="material-symbols-outlined text-white text-xl">{section.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-black text-slate-900">{section.title}</h3>
                    <p className="text-slate-500 text-sm font-medium">{section.description}</p>
                  </div>
                </div>
                <span className={`material-symbols-outlined text-slate-400 transition-transform duration-300 ${expandedSections[section.id] ? 'rotate-180' : ''
                  }`}>
                  expand_more
                </span>
              </button>

              {expandedSections[section.id] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-6 pb-6"
                >
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
                    {section.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-500 text-sm font-black">check_circle</span>
                        <span className="text-slate-600 text-sm font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-12 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-space-grotesk">
              Ready to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                Customize Your Workflow?
              </span>
            </h2>

            <p className="text-xl text-slate-600 mb-8 font-medium">
              Configure your system exactly how your business works
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black px-8 py-4 rounded-full transition-all shadow-2xl shadow-blue-500/25 flex items-center gap-3 text-lg mx-auto"
            >
              <span className="material-symbols-outlined font-black">tune</span>
              Customize Your Workflow
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;