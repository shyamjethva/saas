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
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-blue-50 border border-blue-100 mb-8 shadow-sm">
              <span className="material-symbols-outlined text-blue-600 text-sm font-black">settings</span>
              <span className="text-blue-600 font-black tracking-widest uppercase text-[10px]">PLATFORM GOVERNANCE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
              Advanced System
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                Orchestration
              </span>
            </h1>

            <p className="text-lg text-slate-500 max-w-3xl leading-relaxed font-medium mx-auto">
              Control every dimension of your enterprise operations with professional-grade administrative configuration tools.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Settings Accordion */}
      <div className="px-6 py-12 pb-24">
        <div className="max-w-5xl mx-auto space-y-6">
          {settingsSections.map((section, index) => (
            <motion.div
              key={section.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white rounded-[2.5rem] border transition-all duration-500 shadow-xl relative overflow-hidden group ${expandedSections[section.id]
                ? 'border-blue-200 shadow-[0_32px_64px_-16px_rgba(37,99,235,0.1)]'
                : 'border-slate-200 hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]'
                }`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${section.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
              <button
                onClick={() => toggleSection(section.id)}
                className="w-full p-10 text-left flex items-center justify-between transition-all duration-300"
              >
                <div className="flex items-center gap-8">
                  <div className={`w-20 h-20 rounded-[1.5rem] bg-gradient-to-br ${section.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-500`}>
                    <span className="material-symbols-outlined text-white text-3xl font-black">{section.icon}</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2 tracking-tight">{section.title}</h3>
                    <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{section.description}</p>
                  </div>
                </div>
                <div className={`w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center transition-all duration-500 ${expandedSections[section.id] ? 'bg-slate-900 border-slate-900 rotate-180' : 'bg-slate-50'}`}>
                  <span className={`material-symbols-outlined text-sm font-black ${expandedSections[section.id] ? 'text-white' : 'text-slate-400'}`}>
                    expand_more
                  </span>
                </div>
              </button>

              {expandedSections[section.id] && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="px-10 pb-10"
                >
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {section.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3 bg-slate-50 p-4 rounded-2xl border border-slate-100 hover:bg-white transition-colors group/item">
                        <span className="material-symbols-outlined text-blue-600 text-sm font-black">verified</span>
                        <span className="text-slate-600 text-[11px] font-black uppercase tracking-tight">{feature}</span>
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
      <div className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[4rem] p-16 border border-slate-200 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:bg-blue-100 transition-colors"></div>

            <h2 className="relative z-10 text-5xl font-black text-slate-900 mb-8 tracking-tighter">
              Ready to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                Optimize Your Workflow?
              </span>
            </h2>

            <p className="relative z-10 text-xl text-slate-500 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
              Tailor the platform specifically to your business requirements with granular controls.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black px-12 py-6 rounded-3xl transition-all shadow-2xl shadow-blue-500/25 flex items-center gap-4 text-xl mx-auto"
            >
              <span className="material-symbols-outlined text-2xl font-black">tune</span>
              Configure My Platform
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SystemSettings;