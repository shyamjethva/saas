import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ERPPricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: 'Growth Plan',
      tier: 'Institutional Starter',
      price: '4,999',
      period: '/ Month',
      popular: false,
      features: [
        'Entity Lifecycle Logic',
        'Basic Pipeline Architecture',
        'Protocol Task Assignment',
        'Automated Interaction Sync',
        'Standard Intelligence Reports'
      ],
      notIncluded: [
        'Advanced Neural Pipeline',
        'Institutional WhatsApp Sync',
        'Financial Ledger + GST',
        'Capital Flux Tracking',
        'Performance Metrics Matrix',
        'Strategic API Integration',
        'Neural Identity Scoring',
        'Predictive Growth Analytics',
        'Autonomous Sales Agent',
        'Multi-Entity Control',
        'High-Security Governance',
        'Dedicated Protocol Manager'
      ]
    },
    {
      name: 'Professional Plan',
      tier: 'Organizational Core',
      price: '9,999',
      period: '/ Month',
      popular: true,
      features: [
        'Everything in Growth +',
        'Advanced Neural Pipeline',
        'Institutional WhatsApp Sync',
        'Financial Ledger + GST',
        'Capital Flux Tracking',
        'Performance Metrics Matrix',
        'Strategic API Integration'
      ],
      notIncluded: [
        'Neural Identity Scoring',
        'Predictive Growth Analytics',
        'Autonomous Sales Agent',
        'Multi-Entity Control',
        'High-Security Governance',
        'Dedicated Protocol Manager'
      ]
    },
    {
      name: 'Enterprise Plan',
      tier: 'Market Leadership',
      price: 'Custom',
      period: 'Provisioning',
      popular: false,
      features: [
        'Bespoke Institutional ERP',
        'Neural Identity Scoring',
        'Predictive Growth Analytics',
        'Autonomous Sales Agent',
        'Multi-Entity Governance',
        'High-Security Perimeter',
        'Dedicated Protocol Manager'
      ],
      notIncluded: []
    }
  ];

  return (
    <div className="min-h-screen premium-bg pt-20 selection:bg-blue-500/10 font-plus-jakarta">
      {/* Hero Section */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-emerald-50 border border-emerald-100 mb-8 shadow-sm mx-auto">
              <span className="material-symbols-outlined text-blue-emerald text-sm font-black">finance</span>
              <span className="text-blue-emerald font-black tracking-widest uppercase text-[10px]">ERP CAPITAL ARCHITECTURE</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-black mb-8 tracking-tighter leading-[1.3] py-8 overflow-visible heading-underline active">
              Growth
              <span className="block text-premium-gradient py-4 pb-2">
                Provisioning
              </span>
            </h1>

            <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed font-medium">
              Architect Once. Scale Indefinitely. Continuous neural updates, protocol improvements, and high-fidelity institutional support.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pricing Modules */}
      <div className="px-6 py-12 pb-40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-[3.5rem] p-12 border transition-all duration-500 relative flex flex-col group ${plan.popular
                  ? 'border-blue-emerald shadow-2xl scale-105 z-10'
                  : 'border-slate-200 shadow-xl'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 p-8">
                    <span className="px-5 py-2 bg-blue-emerald text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">
                      Standard Provision
                    </span>
                  </div>
                )}

                <div className="mb-12">
                  <h3 className="text-sm font-black text-slate-400 font-black uppercase tracking-[0.2em] mb-4">{plan.tier}</h3>
                  <div className="flex items-baseline gap-2 mb-4 py-2 overflow-visible">
                    <span className="text-2xl font-black text-slate-900">₹</span>
                    <span className={`text-6xl font-black tracking-tighter leading-tight ${plan.popular ? 'text-premium-gradient py-2 px-1' : 'text-slate-900'}`}>
                      {plan.price}
                    </span>
                    <span className="text-slate-400 text-xs font-black uppercase tracking-widest ml-1">{plan.period}</span>
                  </div>
                  <h2 className="text-2xl font-black text-slate-900 tracking-tight uppercase italic">{plan.name}</h2>
                </div>

                <div className="flex-1 mb-12">
                  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-6 border-l-2 border-blue-emerald pl-4">Included Logic</h4>
                  <ul className="space-y-4 mb-10">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-blue-emerald text-lg font-black shrink-0">verified</span>
                        <span className="text-slate-600 text-sm font-bold italic leading-tight">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {plan.notIncluded.length > 0 && (
                    <div className="pt-8 border-t border-slate-50">
                      <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-6">Advanced Gates</h4>
                      <ul className="space-y-3 opacity-40 grayscale">
                        {plan.notIncluded.slice(0, 5).map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-4 text-slate-400">
                            <span className="material-symbols-outlined text-sm font-black mt-0.5">close</span>
                            <span className="text-[10px] font-black uppercase tracking-wider">{feature}</span>
                          </li>
                        ))}
                        <li className="text-[9px] font-black text-blue-emerald uppercase tracking-[0.2em] mt-4 italic">+ {plan.notIncluded.length - 5} More Advanced Protocols</li>
                      </ul>
                    </div>
                  )}
                </div>

                <Link to="/book-demo" className="mt-auto">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`w-full py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-widest transition-all flex items-center justify-center gap-3 ${plan.popular
                      ? 'bg-slate-900 text-white shadow-xl hover:bg-black'
                      : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-900'
                      }`}
                  >
                    <span className="material-symbols-outlined text-lg font-black">
                      {plan.name === 'Enterprise Plan' ? 'contact_support' : 'robot_2'}
                    </span>
                    {plan.name === 'Enterprise Plan' ? 'Contact Architecture Sales' : 'Initialize ERP Provisioning'}
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[4rem] p-16 border border-slate-200 shadow-2xl mt-24 text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-[100px] -mr-32 -mt-32 opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8 relative z-10">
              <div className="w-20 h-20 rounded-3xl bg-blue-emerald flex items-center justify-center shadow-2xl shadow-blue-500/40">
                <span className="material-symbols-outlined text-4xl text-white font-black">verified_user</span>
              </div>
              <div className="text-left">
                <h3 className="text-3xl font-black text-slate-900 tracking-tighter uppercase italic">30-Cycle Efficiency Guarantee</h3>
                <p className="text-slate-500 font-bold text-lg mt-2 italic">Institutional-grade satisfaction protocol. Absolute financial ledger transparency.</p>
              </div>
            </div>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.3em] max-w-2xl mx-auto italic">RELIABLE • ARCHITECTURAL • ENTITY-FOCUSED</p>
          </motion.div>
        </div>
      </div>

      {/* FAQ Matrix */}
      <section className="px-6 py-12 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-slate-900 text-center mb-16 tracking-tighter uppercase italic heading-underline active inline-block">Institutional Inquiries</h2>
          <div className="space-y-6">
            {[
              {
                question: 'Tier Transition Protocols?',
                answer: 'Organizations can dynamically upgrade or scale their provision tiers. Our architecture prorates node usage with absolute ledger precision.'
              },
              {
                question: 'Provisioning Setup Latency?',
                answer: 'Zero entry friction. Core logic is provisioned immediately upon agreement synchronization.'
              },
              {
                question: 'Governance Support Availability?',
                answer: 'High-fidelity institutional support is available 24/7 for all structural inquiries and architectural optimizations.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.05)] transition-all group"
              >
                <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight uppercase italic group-hover:text-blue-emerald transition-colors">{faq.question}</h3>
                <p className="text-slate-500 font-medium leading-relaxed italic">"{faq.answer}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ERPPricing;
