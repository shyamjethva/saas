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
      title: 'Blueprint Templates',
      description: 'Institutional-grade contract frameworks for rapid deployment.',
      icon: 'description',
      color: 'from-blue-600 to-indigo-600'
    },
    {
      title: 'Digital Validation',
      description: 'High-precision approval workflows with multi-entity verification.',
      icon: 'done_all',
      color: 'from-indigo-600 to-purple-600'
    },
    {
      title: 'Neural Signatures',
      description: 'State-of-the-art electronic verification for legal finality.',
      icon: 'draw',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'Agreement Matrix',
      description: 'Centralized visualization of institutional legal infrastructure.',
      icon: 'grid_view',
      color: 'from-pink-600 to-rose-600'
    },
    {
      title: 'Maturity Alerts',
      description: 'Autonomous notifications for contract lifecycle transitions.',
      icon: 'notifications_active',
      color: 'from-rose-600 to-orange-600'
    },
    {
      title: 'Version Lineage',
      description: 'Complete immutable history of document architectural changes.',
      icon: 'history',
      color: 'from-orange-600 to-amber-600'
    }
  ];

  const contractTypes = [
    {
      name: 'Service Agreements',
      count: terms.filter(term => term.contractType === 'Service Agreement').length,
      status: 'VERIFIED',
      color: 'blue'
    },
    {
      name: 'Non-Disclosure Protocols',
      count: terms.filter(term => term.contractType === 'NDA').length,
      status: 'ACTIVE',
      color: 'indigo'
    },
    {
      name: 'Operational Contracts',
      count: terms.filter(term => term.contractType === 'Employment Contract').length,
      status: 'VERIFIED',
      color: 'purple'
    },
    {
      name: 'Entity Deeds',
      count: terms.filter(term => term.contractType === 'Partnership Deed').length,
      status: 'ACTIVE',
      color: 'pink'
    },
    {
      name: 'Client Infrastructure',
      count: terms.filter(term => term.contractType === 'Client Contract').length,
      status: 'ACTIVE',
      color: 'rose'
    }
  ];

  const recentActivities = terms.slice(0, 4).map((term, index) => ({
    action: `${term.contractType}`,
    client: term.parties.length > 0 ? term.parties[0].name : 'External Entity',
    time: term.createdAt ? new Date(term.createdAt).toLocaleDateString() : 'Active Cycle',
    status: term.status.toUpperCase()
  }));

  return (
    <div className="min-h-screen premium-bg pt-20 selection:bg-purple-500/10">
      {/* Header Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-purple-50 border border-purple-100 mb-8 shadow-sm mx-auto">
              <span className="material-symbols-outlined text-purple-600 text-sm font-black">gavel</span>
              <span className="text-purple-600 font-black tracking-widest uppercase text-[10px]">LEGAL INFRASTRUCTURE GOVERNANCE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.3] py-4 overflow-visible">
              Contractual
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 py-4">
                & Legal Matrix
              </span>
            </h1>

            <p className="text-lg text-slate-500 max-w-3xl leading-relaxed font-medium mx-auto mb-12">
              Orchestrate your entire business legal framework with automated agreement lifecycles, high-precision validation protocols, and secure digital finality.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-slate-900 text-white rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 shadow-2xl hover:bg-black"
            >
              <span className="material-symbols-outlined text-sm font-black">add_circle</span>
              Engineer Agreement
            </motion.button>
          </motion.div>
        </div>
      </div>

      {/* Contract Dashboard */}
      <div className="px-6 pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Contract Types */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white rounded-[3.5rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-purple-50 rounded-full blur-[80px] -mr-24 -mt-24 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h2 className="text-xl font-black text-slate-900 mb-12 tracking-widest uppercase text-xs italic">Agreement Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {contractTypes.map((contract, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 transition-all hover:bg-white hover:border-slate-900 group/card text-center"
                  >
                    <div className={`w-14 h-14 rounded-2xl bg-${contract.color}-50 flex items-center justify-center mb-6 mx-auto shadow-inner group-hover/card:scale-110 transition-transform`}>
                      <span className={`text-${contract.color}-600 font-black text-xl italic`}>{contract.count}</span>
                    </div>
                    <h3 className="text-slate-900 font-black text-[10px] uppercase tracking-tight mb-2 italic">"{contract.name}"</h3>
                    <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${contract.status === 'VERIFIED' ? 'bg-purple-600 text-white shadow-lg shadow-purple-500/20' : 'bg-slate-200 text-slate-400'
                      }`}>
                      {contract.status}
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-purple-600 rounded-[2.5rem] p-8 border border-purple-500 shadow-xl flex flex-col items-center justify-center text-center cursor-pointer group/add overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/add:opacity-10 transition-opacity"></div>
                  <span className="material-symbols-outlined text-white text-3xl font-black mb-3">add_circle</span>
                  <span className="text-white font-black text-[10px] uppercase tracking-widest">Provision New Tier</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Recent Activities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3.5rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <h2 className="text-xl font-black text-slate-900 mb-12 tracking-widest uppercase text-xs italic scale-x-[-1] inline-block w-full text-right" style={{ transform: 'scaleX(-1)' }}>Institutional Pulse</h2>
              <div className="space-y-6 relative z-10">
                {recentActivities.map((activity, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-6 bg-slate-50 rounded-[2rem] border border-slate-100 hover:bg-white hover:border-slate-900 transition-all group/item"
                  >
                    <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0 bg-purple-600 shadow-lg shadow-purple-500/50 group-hover/item:scale-150 transition-transform"></div>
                    <div className="flex-1">
                      <div className="text-slate-900 font-black text-[10px] uppercase tracking-tight italic group-hover/item:text-purple-600 transition-colors">{activity.action}</div>
                      <div className="text-slate-500 text-[10px] font-bold mt-1">"{activity.client}"</div>
                      <div className="flex justify-between items-center mt-3 pt-3 border-t border-slate-100">
                        <span className="text-slate-400 text-[8px] font-black uppercase tracking-widest italic">{activity.time}</span>
                        <span className="text-purple-600 text-[8px] font-black uppercase tracking-widest">{activity.status}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Infrastructure Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.3] py-4 overflow-visible">Agreement Infrastructure</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Enterprise-grade architectural nodes for global legal finality and verification.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {contractFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[3rem] p-10 border border-slate-200 transition-all duration-500 shadow-2xl hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform shadow-purple-500/10`}>
                  <span className="material-symbols-outlined text-white text-2xl font-black">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter uppercase italic">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-bold italic opacity-80 group-hover:opacity-100 transition-opacity">"{feature.description}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-purple-600/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter italic leading-[1.3] py-4 overflow-visible">
              Scale Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500 py-4">
                Institutional Trust.
              </span>
            </h2>

            <p className="text-xl text-slate-400 mb-16 font-bold italic max-w-2xl mx-auto">
              Transform your business legal workflows with our high-precision digital agreement management engine.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-slate-900 font-black px-12 py-6 rounded-[2rem] transition-all shadow-2xl flex items-center gap-4 text-xl mx-auto uppercase tracking-widest hover:bg-slate-100"
            >
              <span className="material-symbols-outlined text-2xl font-black">lock_open</span>
              Initialize Governance
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TermsManagement;