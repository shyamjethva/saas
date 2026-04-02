import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PremiumPricingPage = () => {
  const [activeDepartment, setActiveDepartment] = useState(0);
  const [openFaq, setOpenFaq] = useState({});
  const [pricingType, setPricingType] = useState('yearly');

  const departments = [
    {
      id: 'erp_solutions',
      name: 'ERP Solutions',
      subtitle: 'Institutional Resource Planning Matrix',
      plans: [
        {
          name: 'Core Node',
          price: pricingType === 'monthly' ? '₹20,000' : '₹225,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Agile Business Units',
          features: [
            '10 Institutional Users',
            '5GB Neural Storage',
            'Lead Lifecycle Logic',
            'Sales Pipeline Architecture',
            'Standard Logic Reports',
            'Protocol Audit Logs'
          ],
          discount: '10% Efficiency Rebate',
          cta: 'Initialize Node'
        },
        {
          name: 'Growth Cluster',
          price: pricingType === 'monthly' ? '₹30,000' : '₹325,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Expanding Organizations',
          features: [
            '25 Institutional Users',
            '10GB Neural Storage',
            'Neural Automation Flows',
            'Customer Interaction Matrix',
            'Advanced Analytics Hub',
            'API Logic Gates'
          ],
          discount: '15% Efficiency Rebate',
          cta: 'Expand Cluster',
          popular: true
        },
        {
          name: 'Enterprise Grid',
          price: pricingType === 'monthly' ? '₹45,000' : '₹475,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Market Leaders',
          features: [
            'Unlimited Entity Nodes',
            '20GB Neural Storage',
            'Full Protocol Automation',
            'Custom Analytical Matrix',
            'White-label Governance',
            'Priority Neural Routing'
          ],
          discount: '20% Efficiency Rebate',
          cta: 'Deploy Grid'
        }
      ]
    },
    {
      id: 'digital_presence',
      name: 'Digital Presence',
      subtitle: 'Brand Identity & Web Architecture',
      plans: [
        {
          name: 'Identity Node',
          price: '₹25,000',
          period: '',
          audience: 'Emerging Entities',
          features: [
            'Architectural Prototypes',
            'Mobile Optimization',
            'ERP Synchronization',
            'Global SEO Perimeter',
            'Interactive Protocols',
            'Deployment Support'
          ],
          discount: '5% Advance Rebate',
          cta: 'Initialize Identity'
        },
        {
          name: 'Dynamic Hub',
          price: '₹60,000',
          period: '',
          audience: 'Scaling Brands',
          features: [
            'Adaptive Web Logic',
            'Governance Admin Panel',
            'Content Synthesis Engine',
            'Payment Gateway Matrix',
            'Advanced Meta Sync',
            '2-Cycle Support'
          ],
          discount: '5% Advance Rebate',
          cta: 'Launch Hub',
          popular: true
        },
        {
          name: 'Omni-Channel',
          price: '₹1,80,000',
          period: '',
          audience: 'Enterprises',
          features: [
            'Bespoke Digital Core',
            'Entity Management Tier',
            'Neural Flow Synthesis',
            'API Perimeter Access',
            'High-Security Logic',
            'Priority Support Gear'
          ],
          discount: '10% Launch Rebate',
          cta: 'Scale Matrix'
        }
      ]
    }
  ];

  const faqs = [
    {
      question: "Institutional Payment Protocols?",
      answer: "We support high-security transfers, encryption-verified credit nodes, and institutional invoice-based governance for enterprise entities."
    },
    {
      question: "Scalability Transitions?",
      answer: "Agreement tiers can be dynamically scaled. Our engine prorates institutional nodes based on active cycle usage."
    }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(prev => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="min-h-screen premium-bg pt-20 selection:bg-blue-500/10 font-plus-jakarta">
      {/* Header Section */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-12">
              <div className="flex-1">
                <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-blue-50 border border-blue-100 mb-8 shadow-sm">
                  <span className="material-symbols-outlined text-blue-600 text-sm font-black">payments</span>
                  <span className="text-blue-600 font-black tracking-widest uppercase text-[10px]">PREMIUM FINANCIAL TIERS</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.3] py-8 overflow-visible">
                  Capital
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 py-4">
                    Provisions
                  </span>
                </h1>

                <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-medium">
                  Transparent architectural costing for modern enterprise deployment. Select your provision tier to initialize organizational transformation.
                </p>
              </div>

              <div className="flex flex-col items-center bg-white p-2 rounded-3xl border border-slate-200 shadow-xl h-fit">
                <div className="flex gap-2 p-1">
                  <button
                    onClick={() => setPricingType('monthly')}
                    className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${pricingType === 'monthly' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:text-slate-900'}`}
                  >
                    Monthly Pulse
                  </button>
                  <button
                    onClick={() => setPricingType('yearly')}
                    className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${pricingType === 'yearly' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:text-slate-900'}`}
                  >
                    Annual Cycle
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Navigation */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center gap-4">
          {departments.map((dept, index) => (
            <motion.button
              key={index}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveDepartment(index)}
              className={`px-8 py-4 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all border ${activeDepartment === index
                ? 'bg-slate-900 text-white shadow-2xl border-slate-900'
                : 'bg-white text-slate-500 border-slate-200 hover:border-slate-800 shadow-sm'
                }`}
            >
              {dept.name}
            </motion.button>
          ))}
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="px-6 py-20 pb-40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            key={activeDepartment}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10"
          >
            {departments[activeDepartment].plans.map((plan, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-[3.5rem] p-12 border transition-all duration-500 relative flex flex-col group ${plan.popular ? 'border-blue-600 shadow-2xl scale-[1.05]' : 'border-slate-200 shadow-xl'
                  }`}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 p-8">
                    <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-[9px] font-black uppercase tracking-widest shadow-lg shadow-blue-500/20">
                      Standard Provision
                    </span>
                  </div>
                )}

                <div className="mb-12">
                  <h3 className="text-sm font-black text-slate-400 uppercase tracking-[0.2em] mb-4">{plan.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4 py-2 overflow-visible">
                    <span className="text-2xl font-black text-slate-900">₹</span>
                    <span className={`text-6xl font-black tracking-tighter leading-tight ${plan.popular ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600' : 'text-slate-900'}`}>
                      {plan.price.replace('₹', '')}
                    </span>
                    <span className="text-slate-400 text-xs font-black uppercase tracking-widest ml-1">{plan.period}</span>
                  </div>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest opacity-60 italic">Target: {plan.audience}</p>
                </div>

                <div className="flex-1 mb-12">
                  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-6 border-l-2 border-blue-600 pl-4">Institutional Features</h4>
                  <ul className="space-y-4">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4">
                        <span className="material-symbols-outlined text-blue-600 text-lg font-black shrink-0">verified</span>
                        <span className="text-slate-600 text-sm font-bold italic">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-auto">
                  <p className="text-blue-600 text-[10px] font-black uppercase tracking-widest mb-6 text-center italic">{plan.discount}</p>
                  <button className={`w-full py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-widest transition-all ${plan.popular ? 'bg-slate-900 text-white shadow-xl hover:bg-black' : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-900'
                    }`}>
                    {plan.cta}
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PremiumPricingPage;