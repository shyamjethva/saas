import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ERPPackagesPage = () => {
  const [activeDepartment, setActiveDepartment] = useState('sales');
  const [openFaq, setOpenFaq] = useState({});
  const [pricingType, setPricingType] = useState('yearly');

  const toggleFaq = (index) => {
    setOpenFaq(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const departments = {
    sales: {
      name: 'Sales Transformation',
      price: pricingType === 'monthly' ? '₹3,500' : '₹35,000',
      period: pricingType === 'monthly' ? '/mo' : '/yr',
      audience: 'Advanced Sales Engineers & Decision Makers',
      features: [
        'Institutional Lead Capture',
        'Neural Lead Entry Points',
        'Website Perimeter Integration',
        'Status Lifecycle Tracking',
        'Intelligent Lead Flow',
        'Follow-up Synchronization',
        'Sales Pipeline Architecture',
        'Visual Deal Trajectories',
        'Conversion Acceleration',
        'Real-time Sales Insights',
        'Agent Performance KPIs',
        'Automated Task Synthesis',
        'Deadline Precision Tracking',
        'Role-Based Governance Control'
      ],
      discount: '15% Efficiency Gain (Annual)',
      cta: 'Provision Unit',
      highlight: true,
      badge: 'HIGH DEMAND'
    },
    marketing: {
      name: 'Intelligence Marketing',
      price: pricingType === 'monthly' ? '₹2,500' : '₹25,000',
      period: pricingType === 'monthly' ? '/mo' : '/yr',
      audience: 'Growth Strategists & Marketing Architects',
      features: [
        'Marketing Data Perimeter',
        'Omni-channel Lead Capture',
        'Lead Scoring Algorithms',
        'Campaign Lifecycle Engine',
        'Automated Nurture Flows',
        'Email Consensus Tools',
        'Pending Conversion Tracking',
        'Marketing Funnel Analytics',
        'Lead Source Attribution',
        'Social Matrix Integration',
        'Architectural Governance'
      ],
      discount: '10% Efficiency Gain (Annual)',
      cta: 'Deploy Node',
      highlight: false
    },
    support: {
      name: 'Experience Support',
      price: pricingType === 'monthly' ? '₹2,000' : '₹20,000',
      period: pricingType === 'monthly' ? '/mo' : '/yr',
      audience: 'Customer Success Hubs',
      features: [
        'Entity Database Management',
        'Communication Chronology',
        'Interaction Persistence',
        'Ticket Lifecycle Matrix',
        'Response Latency Tracking',
        'Satisfaction Indexing',
        'Support Intelligence Reports',
        'Automated Ticket Routing',
        'Knowledge Infrastructure',
        'SLA Governance Perimeter'
      ],
      discount: '10% Efficiency Gain (Annual)',
      cta: 'Activate Portal',
      highlight: false
    }
  };

  const addons = [
    { name: "Extra Cognitive Node (User)", price: "₹1,000 / Year", icon: "person_add" },
    { name: "Mobile Ecosystem", price: "₹20,000 / Year", icon: "smartphone" },
    { name: "WhatsApp Neural API", price: "₹5,000 / Year", icon: "chat" },
    { name: "Identity Branding", price: "₹5,000", icon: "brush" },
    { name: "Institutional Manager", price: "₹25,000 / Year", icon: "badge" },
    { name: "Automation Protocol", price: "₹15,000", icon: "settings_suggest" },
    { name: "Architectural Module", price: "₹20,000+", icon: "extension" },
    { name: "Dedicated Core Server", price: "₹15,000 / Year", icon: "dns" }
  ];

  const faqs = [
    {
      question: "Institutional Validation Protocols?",
      answer: "We support high-security transfers, encryption-verified credit nodes, and institutional invoice-based governance for enterprise entities."
    },
    {
      question: "Scalability Transitions?",
      answer: "Agreement tiers can be dynamically scaled. Our engine prorates institutional nodes based on active cycle usage."
    },
    {
      question: "Architectural Customization?",
      answer: "Our core framework supports extensive custom module synthesis to align with complex organizational taxonomies."
    }
  ];

  return (
    <div className="min-h-screen premium-bg pt-20 selection:bg-blue-500/10">
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
                  <span className="material-symbols-outlined text-blue-600 text-sm font-black">inventory_2</span>
                  <span className="text-blue-600 font-black tracking-widest uppercase text-[10px]">ERP INFRASTRUCTURE TIERS</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.3] py-8 overflow-visible">
                  Unit
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 py-4">
                    Provisions
                  </span>
                </h1>

                <p className="text-xl text-slate-500 max-w-3xl leading-relaxed font-medium">
                  Select your institutional department node to deploy high-precision ERP architecture tailored for modern organizational governance.
                </p>
              </div>

              <div className="flex flex-col items-center bg-white p-2 rounded-3xl border border-slate-200 shadow-xl h-fit">
                <div className="flex gap-2 p-1">
                  <button
                    onClick={() => setPricingType('monthly')}
                    className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${pricingType === 'monthly' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:text-slate-900'}`}
                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setPricingType('yearly')}
                    className={`px-8 py-4 rounded-2xl text-[10px] font-black uppercase tracking-widest transition-all ${pricingType === 'yearly' ? 'bg-slate-900 text-white shadow-lg' : 'text-slate-400 hover:text-slate-900'}`}
                  >
                    Annual
                  </button>
                </div>
                {pricingType === 'yearly' && (
                  <span className="text-[9px] font-black text-blue-600 uppercase tracking-widest py-2">10% Architectural Rebate</span>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="px-6 pb-40">
        <div className="max-w-7xl mx-auto">
          {/* Department Selection Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-24">
            {Object.entries(departments).map(([key, dept], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`flex flex-col bg-white rounded-[3.5rem] p-12 border transition-all duration-500 group relative overflow-hidden ${dept.highlight ? 'border-blue-600 shadow-2xl scale-[1.02] z-10' : 'border-slate-200 shadow-xl hover:border-slate-900'
                  }`}
              >
                {dept.badge && (
                  <div className="absolute top-0 right-0 p-8">
                    <span className="px-5 py-2 bg-blue-600 text-white rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg shadow-blue-500/20">
                      {dept.badge}
                    </span>
                  </div>
                )}

                <div className="mb-12">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-8 shadow-inner group-hover:scale-110 transition-transform ${dept.highlight ? 'bg-blue-600 text-white shadow-blue-500/20' : 'bg-slate-50 text-slate-400'
                    }`}>
                    <span className="material-symbols-outlined text-2xl font-black">
                      {key === 'sales' ? 'trending_up' : key === 'marketing' ? 'hub' : 'support_agent'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-900 tracking-tighter uppercase italic mb-2">{dept.name}</h3>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className={`text-5xl font-black tracking-tighter py-2 overflow-visible ${dept.highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600' : 'text-slate-900'}`}>
                      {dept.price}
                    </span>
                    <span className="text-slate-400 text-xs font-black uppercase tracking-widest">{dept.period}</span>
                  </div>
                  <p className="text-slate-500 text-xs font-bold italic opacity-70">"{dept.audience}"</p>
                </div>

                <div className="flex-1 mb-12">
                  <h4 className="text-[10px] font-black text-slate-900 uppercase tracking-widest mb-6 border-l-2 border-blue-600 pl-4">Node Capabilities</h4>
                  <ul className="space-y-4">
                    {dept.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-4 group/item">
                        <span className="material-symbols-outlined text-blue-600 text-lg font-black shrink-0 mt-0.5 group-hover/item:scale-125 transition-transform">verified</span>
                        <span className="text-slate-600 text-sm font-bold italic group-hover/item:text-slate-900 transition-colors">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button className={`w-full py-5 rounded-[2rem] font-black text-[10px] uppercase tracking-widest transition-all shadow-xl hover:shadow-2xl active:scale-95 ${dept.highlight ? 'bg-slate-900 text-white hover:bg-black' : 'bg-white text-slate-900 border border-slate-200 hover:border-slate-900'
                  }`}>
                  {dept.cta}
                </button>
              </motion.div>
            ))}
          </div>

          {/* Add-ons Section */}
          <div className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase italic">Extension Nodes</h2>
              <p className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em] mt-4">Augment your core department provisions</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {addons.map((addon, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -8 }}
                  className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl text-center group hover:border-blue-600 transition-all"
                >
                  <div className="w-14 h-14 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-inner group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <span className="material-symbols-outlined text-2xl font-black">{addon.icon}</span>
                  </div>
                  <h3 className="text-slate-900 font-black text-[10px] uppercase tracking-tight mb-2 italic">"{addon.name}"</h3>
                  <p className="text-blue-600 font-black text-[10px] uppercase tracking-widest italic">{addon.price}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* FAQ Architecture */}
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-2xl font-black text-slate-900 tracking-widest uppercase text-xs italic">Governance FAQ</h2>
            </div>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-[3rem] border border-slate-200 shadow-xl overflow-hidden group"
                >
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full p-10 text-left flex justify-between items-center group-hover:bg-slate-50 transition-colors"
                  >
                    <span className="text-slate-900 font-black text-xs uppercase tracking-tight italic">"{faq.question}"</span>
                    <motion.span
                      animate={{ rotate: openFaq[index] ? 180 : 0 }}
                      className="material-symbols-outlined font-black text-slate-400"
                    >
                      expand_more
                    </motion.span>
                  </button>
                  <AnimatePresence>
                    {openFaq[index] && (
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: 'auto' }}
                        exit={{ height: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-10 pb-10">
                          <div className="pt-10 border-t border-slate-100">
                            <p className="text-slate-500 text-sm font-bold italic leading-relaxed opacity-80">"{faq.answer}"</p>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERPPackagesPage;