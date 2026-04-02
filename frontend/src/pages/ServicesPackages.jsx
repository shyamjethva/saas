import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPackages = () => {
  const [activeTab, setActiveTab] = useState('marketing');

  const services = {
    marketing: {
      title: 'Digital Marketing Matrix',
      subtitle: 'Performance-Fused Expansion Protocols',
      icon: 'campaign',
      color: 'blue',
      offerings: [
        {
          name: 'Performance Architecture',
          description: 'Harness high-precision marketing nodes across Meta, Google, and LinkedIn with neural-targeted logic.',
          includes: [
            'ROI-Focused Ledger Management',
            'Full Conversion Funnel Synthesis',
            'Strategic Retargeting Pulses',
            'Neural Audience Mapping',
            'Institutional Analysis Integration'
          ],
          benefits: ['Quantifiable Growth', 'Logic-Driven Success', 'Scalable Ecosystem']
        },
        {
          name: 'Identity & Brand Ledger',
          description: 'Strategic positioning Matrix through professional design synthesis and content chronology.',
          includes: [
            'Social Presence Governance',
            'Visual Identity Synthesis',
            'Dynamic Motion Production',
            'Engagement Synchronization'
          ],
          benefits: ['Elite Brand Authority', 'Institutional Presence', 'Audience Resonance']
        }
      ]
    },
    software: {
      title: 'Structural Development',
      subtitle: 'Custom Architectural Software Engineering',
      icon: 'code',
      color: 'indigo',
      offerings: [
        {
          name: 'Institutional CRM Sync',
          description: 'Architecting high-fidelity CRM ecosystems tailored to complex organizational logic.',
          includes: [
            'Entity Lifecycle Tracking',
            'Automated Pipeline Synchronization',
            'Neural Follow-up Protocols',
            'Role-based Governance Matrix',
            'Financial Ledger Integration'
          ],
          benefits: ['Process Precision', 'Maximum Productivity', 'Client Resonance']
        },
        {
          name: 'Core System Engineering',
          description: 'High-performance web and mobile architecture optimized for corporate scalability.',
          includes: [
            'Corporate Hub Architecture',
            'Digital Commerce Matrices',
            'Administrative Logic Panels',
            'Secure API Gateways'
          ],
          benefits: ['Architectural UX', 'Performance Stability', 'Cross-Platform Unity']
        }
      ]
    },
    ai: {
      title: 'Neural Automation',
      subtitle: 'Intelligent Enterprise Transformation Nodes',
      icon: 'auto_mode',
      color: 'purple',
      offerings: [
        {
          name: 'Autonomous Logic Flows',
          description: 'Deploy intelligent automation nodes to orchestrate business processes and eliminate latency.',
          includes: [
            'Interactive Neural Agents (Chat)',
            'Autonomous Media Synthesis',
            'Protocol Trigger Mapping',
            'Neural Strategy Synthesis'
          ],
          benefits: ['Zero-Latency Ops', 'Institutional Scaling', '24/7 Neural Presence']
        }
      ]
    }
  };

  const currentService = services[activeTab];

  return (
    <div className="min-h-screen premium-bg pt-20 selection:bg-blue-500/10 font-plus-jakarta">
      {/* Hero Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-blue-50 border border-blue-100 mb-8 shadow-sm mx-auto">
              <span className="material-symbols-outlined text-blue-600 text-sm font-black">verified</span>
              <span className="text-blue-600 font-black tracking-widest uppercase text-[10px]">PROFESSIONAL PROVISION MATRIX</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.3] py-8 overflow-visible">
              Service
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 py-4">
                Protocols
              </span>
            </h1>

            <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
              High-fidelity digital solutions designed to accelerate organizational velocity and orchestrate operational excellence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {Object.entries(services).map(([key, service]) => (
            <motion.button
              key={key}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab(key)}
              className={`px-8 py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all flex items-center gap-3 border ${activeTab === key
                ? 'bg-slate-900 text-white shadow-2xl border-slate-900 scale-105'
                : 'bg-white text-slate-500 border-slate-200 hover:border-slate-800 shadow-sm'
                }`}
            >
              <span className="material-symbols-outlined text-lg font-black">{service.icon}</span>
              {service.title}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="px-6 py-20 pb-40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-10"
          >
            {currentService.offerings.map((offering, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[3.5rem] p-12 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col group"
              >
                <div className="flex items-start gap-8 mb-10">
                  <div className={`w-16 h-16 rounded-2xl bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 transition-colors shadow-inner`}>
                    <span className="material-symbols-outlined text-blue-600 text-2xl font-black group-hover:text-white transition-colors">
                      {offering.name.includes('Marketing') ? 'trending_up' :
                        offering.name.includes('CRM') ? 'hub' :
                          offering.name.includes('Web') ? 'devices' : 'auto_awesome'}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic mb-4">{offering.name}</h3>
                    <p className="text-slate-500 text-sm font-bold italic leading-relaxed opacity-80">"{offering.description}"</p>
                  </div>
                </div>

                <div className="mb-10">
                  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-6 border-l-2 border-blue-600 pl-4">Technological Components</h4>
                  <ul className="space-y-4">
                    {offering.includes.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-4">
                        <span className="material-symbols-outlined text-blue-600 text-lg font-black">verified</span>
                        <span className="text-slate-600 text-sm font-bold italic">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex flex-wrap gap-3 pt-8 border-t border-slate-50">
                  {offering.benefits.map((benefit, idx) => (
                    <span key={idx} className="px-4 py-2 bg-blue-50 text-blue-600 text-[9px] font-black uppercase tracking-widest rounded-full border border-blue-100 italic">
                      #{benefit}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* CTA Matrix */}
      <section className="px-6 py-24 bg-white border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="rounded-[4rem] p-16 md:p-24 bg-slate-900 text-center relative overflow-hidden group shadow-3xl"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full blur-[120px] -mr-48 -mt-48 opacity-20 group-hover:opacity-40 transition-opacity"></div>

            <h2 className="text-4xl md:text-5xl font-black text-white mb-8 tracking-tighter italic">Orchestrate Your Transformation</h2>
            <p className="text-xl text-slate-400 mb-12 max-w-2xl mx-auto font-medium">
              Initialize a high-fidelity consultation with our architectural experts to synchronize your organizational goals.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-white text-slate-900 rounded-[2rem] font-black uppercase tracking-widest text-[10px] shadow-2xl hover:bg-slate-50 transition-all flex items-center justify-center gap-3"
                >
                  <span className="material-symbols-outlined text-lg">calendar_month</span>
                  Provision Consultation
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-10 py-5 bg-slate-800 text-white border border-slate-700 rounded-[2rem] font-black uppercase tracking-widest text-[10px] hover:bg-slate-700 transition-all flex items-center justify-center gap-3"
                >
                  <span className="material-symbols-outlined text-lg">account_tree</span>
                  View Logic Archive
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPackages;