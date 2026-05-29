import React from 'react';
import { motion } from 'framer-motion';

const TermsManagement = () => {
  const contractFeatures = [
    {
      title: 'Blueprint Templates',
      description: 'Institutional-grade contract frameworks for rapid deployment.',
      icon: 'description',
      color: 'from-slate-900 to-slate-700'
    },
    {
      title: 'Digital Validation',
      description: 'High-precision approval workflows with multi-entity verification.',
      icon: 'done_all',
      color: 'from-slate-800 to-slate-600'
    },
    {
      title: 'Neural Signatures',
      description: 'State-of-the-art electronic verification for legal finality.',
      icon: 'draw',
      color: 'from-slate-700 to-slate-500'
    },
    {
      title: 'Agreement Matrix',
      description: 'Centralized visualization of institutional legal infrastructure.',
      icon: 'grid_view',
      color: 'from-slate-600 to-slate-400'
    },
    {
      title: 'Maturity Alerts',
      description: 'Autonomous notifications for contract lifecycle transitions.',
      icon: 'notifications_active',
      color: 'from-slate-900 to-slate-500'
    },
    {
      title: 'Version Lineage',
      description: 'Complete immutable history of document architectural changes.',
      icon: 'history',
      color: 'from-slate-800 to-slate-400'
    }
  ];

  const contractTypes = [
    { name: 'Service Agreements', count: 0, status: 'VERIFIED' },
    { name: 'Non-Disclosure Protocols', count: 0, status: 'ACTIVE' },
    { name: 'Operational Contracts', count: 0, status: 'VERIFIED' },
    { name: 'Entity Deeds', count: 0, status: 'ACTIVE' },
    { name: 'Client Infrastructure', count: 0, status: 'ACTIVE' }
  ];

  return (
    <div className="min-h-screen premium-bg pt-20">
      {/* Header Section */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-slate-50 border border-slate-100 mb-8 shadow-sm mx-auto">
              <span className="material-symbols-outlined text-slate-900 text-sm font-black">gavel</span>
              <span className="text-slate-900 font-black tracking-widest uppercase text-[10px]">LEGAL INFRASTRUCTURE GOVERNANCE</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-black mb-8 tracking-tighter leading-tight py-4">
              Contractual
              <span className="block text-slate-400 py-2">
                &amp; Legal Matrix
              </span>
            </h1>

            <p className="text-lg text-slate-500 max-w-3xl leading-relaxed font-medium mx-auto mb-12">
              Orchestrate your entire business legal framework with automated agreement lifecycles,
              high-precision validation protocols, and secure digital finality.
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
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12 mb-20">
            {/* Contract Types */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2 bg-white rounded-[3.5rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 w-48 h-48 bg-slate-50 rounded-full blur-[80px] -mr-24 -mt-24 opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <h2 className="text-xs font-black text-slate-900 mb-12 tracking-widest uppercase italic">Agreement Categories</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {contractTypes.map((contract, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -8 }}
                    className="bg-slate-50 rounded-[2.5rem] p-8 border border-slate-100 transition-all hover:bg-white hover:border-slate-900 group/card text-center"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center mb-6 mx-auto shadow-inner group-hover/card:scale-110 transition-transform">
                      <span className="text-slate-900 font-black text-xl italic">{contract.count}</span>
                    </div>
                    <h3 className="text-slate-900 font-black text-[10px] uppercase tracking-tight mb-2 italic">{contract.name}</h3>
                    <span className={`text-[8px] font-black uppercase tracking-widest px-3 py-1 rounded-full ${
                      contract.status === 'VERIFIED'
                        ? 'bg-slate-900 text-white shadow-lg shadow-slate-900/20'
                        : 'bg-slate-200 text-slate-400'
                    }`}>
                      {contract.status}
                    </span>
                  </motion.div>
                ))}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="bg-slate-900 rounded-[2.5rem] p-8 border border-slate-800 shadow-xl flex flex-col items-center justify-center text-center cursor-pointer group/add overflow-hidden relative"
                >
                  <div className="absolute inset-0 bg-white opacity-0 group-hover/add:opacity-10 transition-opacity"></div>
                  <span className="material-symbols-outlined text-white text-3xl font-black mb-3">add_circle</span>
                  <span className="text-white font-black text-[10px] uppercase tracking-widest">Provision New Tier</span>
                </motion.div>
              </div>
            </motion.div>

            {/* Institutional Pulse */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3.5rem] p-12 border border-slate-200 shadow-2xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-slate-50 rounded-full blur-3xl -mr-16 -mt-16"></div>
              <h2 className="text-xs font-black text-slate-900 mb-12 tracking-widest uppercase italic text-right">Institutional Pulse</h2>
              <div className="space-y-6 relative z-10">
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <span className="material-symbols-outlined text-slate-200 text-6xl mb-4">contract</span>
                  <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">No recent activity</p>
                  <p className="text-slate-300 text-[10px] mt-2">Contracts will appear here</p>
                </div>
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
            <h2 className="text-4xl md:text-6xl font-black text-black mb-8 tracking-tighter leading-tight py-4 inline-block">
              Agreement <span className="text-slate-400">Infrastructure</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">
              Enterprise-grade architectural nodes for global legal finality and verification.
            </p>
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
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-10 shadow-lg group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-white text-2xl font-black">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter uppercase">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-slate-800/10 to-transparent"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-16"
          >
            <h2 className="text-5xl md:text-7xl font-black text-white mb-10 tracking-tighter leading-tight py-4">
              Scale Your
              <span className="block text-slate-400 py-2">
                Institutional Trust.
              </span>
            </h2>

            <p className="text-xl text-slate-400 mb-16 font-bold max-w-2xl mx-auto">
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
