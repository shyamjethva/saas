import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { termAPI } from '../services/api';
import { useNavigate } from 'react-router-dom';

const TermsManagement = () => {
  const [terms, setTerms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Load terms data
  useEffect(() => {
    const fetchTerms = async () => {
      try {
        const response = await termAPI.getAllTerms({
          page: 1,
          limit: 100
        });
        setTerms(response.data.data || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching terms:', err);
        setError(err.response?.data?.error || err.message || 'Failed to load terms');
        setLoading(false);
      }
    };

    fetchTerms();

    // Set up interval to refresh data every 30 seconds
    const interval = setInterval(fetchTerms, 30000);
    return () => clearInterval(interval);
  }, []);
  const contractFeatures = [
    {
      title: 'Pre-Built Contract Templates',
      description: 'Ready-to-use templates for various business agreements',
      icon: 'description',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Digital Approval System',
      description: 'Streamlined approval workflows with electronic signatures',
      icon: 'done_all',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'E-Signature Integration',
      description: 'Secure electronic signature capabilities for legal documents',
      icon: 'draw',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Agreement Tracking Dashboard',
      description: 'Centralized view of all contracts and their statuses',
      icon: 'dashboard',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Auto Renewal Reminders',
      description: 'Automated notifications for contract renewals and expirations',
      icon: 'notifications_active',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Version Control System',
      description: 'Track changes and maintain document version history',
      icon: 'history',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Legal Document Storage',
      description: 'Secure cloud storage for all legal agreements and contracts',
      icon: 'cloud_upload',
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  // Calculate contract types from terms data
  const contractTypes = [
    {
      name: 'Service Agreements',
      count: terms.filter(term => term.contractType === 'Service Agreement').length,
      status: terms.some(term => term.contractType === 'Service Agreement') ? 'active' : 'inactive',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'NDAs',
      count: terms.filter(term => term.contractType === 'NDA').length,
      status: terms.some(term => term.contractType === 'NDA') ? 'pending' : 'inactive',
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Employment Contracts',
      count: terms.filter(term => term.contractType === 'Employment Contract').length,
      status: terms.some(term => term.contractType === 'Employment Contract') ? 'completed' : 'inactive',
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Vendor Agreements',
      count: terms.filter(term => term.contractType === 'Vendor Agreement').length,
      status: terms.some(term => term.contractType === 'Vendor Agreement') ? 'draft' : 'inactive',
      color: 'from-orange-500 to-red-500'
    },
    {
      name: 'Partnership Deeds',
      count: terms.filter(term => term.contractType === 'Partnership Deed').length,
      status: terms.some(term => term.contractType === 'Partnership Deed') ? 'active' : 'inactive',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      name: 'Client Contracts',
      count: terms.filter(term => term.contractType === 'Client Contract').length,
      status: terms.some(term => term.contractType === 'Client Contract') ? 'active' : 'inactive',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  // Use actual recent activities from terms data
  const recentActivities = terms.slice(0, 4).map((term, index) => ({
    action: `${term.contractType} - ${term.status}`,
    client: term.parties.length > 0 ? term.parties[0].name : 'Unknown',
    time: term.createdAt ? new Date(term.createdAt).toLocaleDateString() : 'Unknown',
    status: term.status.toLowerCase()
  }));

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
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-purple-400">gavel</span>
              <span className="text-purple-400 font-bold tracking-wider uppercase text-sm">TERMS MANAGEMENT</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 font-space-grotesk">
              Contract & Agreement
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
                Management
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-medium">
              Digitally manage all your business agreements with secure approval workflows.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Contract Dashboard */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {/* Contract Types */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white/80 rounded-2xl p-8 border border-slate-200 backdrop-blur-sm shadow-xl shadow-slate-200/50"
            >
              <h2 className="text-2xl font-black text-slate-900 mb-6">Contract Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {contractTypes.map((contract, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className={`bg-white/5 rounded-xl p-4 border border-white/10 transition-all duration-300 relative overflow-hidden group ${contract.color.includes('blue') ? 'hover:border-blue-500/50' :
                        contract.color.includes('purple') ? 'hover:border-purple-500/50' :
                          contract.color.includes('green') ? 'hover:border-emerald-500/50' :
                            contract.color.includes('orange') ? 'hover:border-orange-500/50' :
                              contract.color.includes('teal') ? 'hover:border-teal-500/50' :
                                contract.color.includes('indigo') ? 'hover:border-indigo-500/50' :
                                  'hover:border-blue-500/50'
                      }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${contract.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${contract.color} flex items-center justify-center mb-3 mx-auto shadow-lg`}>
                      <span className="text-white font-black">{contract.count}</span>
                    </div>
                    <h3 className="text-slate-900 font-bold text-center text-sm mb-1">{contract.name}</h3>
                    <div className="text-center">
                      <span className={`px-2 py-1 rounded-full text-xs font-bold ${contract.status === 'active' ? 'bg-green-500/20 text-green-400' :
                        contract.status === 'pending' ? 'bg-yellow-500/20 text-yellow-400' :
                          contract.status === 'completed' ? 'bg-blue-500/20 text-blue-400' :
                            'bg-gray-500/20 text-gray-400'
                        }`}>
                        {contract.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 rounded-2xl p-8 border border-slate-200 backdrop-blur-sm shadow-xl shadow-slate-200/50"
            >
              <h2 className="text-2xl font-black text-slate-900 mb-6">Recent Activity</h2>
              <div className="space-y-4">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100"
                  >
                    <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${activity.status === 'completed' ? 'bg-green-500' :
                      activity.status === 'pending' ? 'bg-yellow-500' : 'bg-red-500'
                      }`}></div>
                    <div className="flex-1">
                      <div className="text-slate-900 font-bold text-sm tracking-tight">{activity.action}</div>
                      <div className="text-slate-600 text-xs font-medium">{activity.client}</div>
                      <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">{activity.time}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-space-grotesk">Complete Contract Management</h2>
            <p className="text-xl text-slate-600 font-medium">Professional tools for managing all your business agreements</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {contractFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-white rounded-xl p-6 border border-slate-200 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden ${feature.color.includes('blue') ? 'hover:border-blue-500/50' :
                    feature.color.includes('green') ? 'hover:border-emerald-500/50' :
                      feature.color.includes('purple') ? 'hover:border-purple-500/50' :
                        feature.color.includes('orange') ? 'hover:border-orange-500/50' :
                          feature.color.includes('teal') ? 'hover:border-teal-500/50' :
                            feature.color.includes('indigo') ? 'hover:border-indigo-500/50' :
                              feature.color.includes('yellow') ? 'hover:border-yellow-500/50' :
                                'hover:border-purple-500/50'
                  }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <span className="material-symbols-outlined text-white">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm font-medium">{feature.description}</p>
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
            <div className="absolute top-0 right-0 w-64 h-64 bg-purple-50 rounded-full blur-3xl -mr-32 -mt-32 group-hover:bg-purple-100 transition-colors"></div>

            <h2 className="relative z-10 text-4xl font-black text-slate-900 mb-6 font-space-grotesk">
              Ready to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-red-600">
                Manage My Agreements?
              </span>
            </h2>

            <p className="relative z-10 text-xl text-slate-600 mb-10 font-medium">
              Streamline your contract management with digital workflows
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-black px-10 py-5 rounded-3xl transition-all shadow-2xl shadow-purple-500/25 flex items-center gap-3 text-lg mx-auto"
            >
              <span className="material-symbols-outlined font-black">gavel</span>
              Manage My Agreements
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsManagement;