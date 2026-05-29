import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CRMPricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: 'Growth',
      price: '4,999',
      period: '/month',
      color: 'from-blue-700 to-sky-500',
      popular: false,
      features: [
        'Lead Management',
        'Basic Pipeline',
        'Task Assignment',
        'Email Automation',
        'Basic Reports',
        'CRM Integration'
      ]
    },
    {
      name: 'Professional',
      price: '9,999',
      period: '/month',
      color: 'from-purple-600 to-pink-600',
      popular: true,
      features: [
        'Everything in Growth +',
        'Advanced Pipeline',
        'WhatsApp Automation',
        'Billing + GST',
        'Payment Tracking',
        'Performance Dashboard',
        'API Integration'
      ]
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: 'Pricing',
      color: 'from-emerald-600 to-teal-600',
      popular: false,
      features: [
        'Full Custom CRM',
        'AI Lead Scoring',
        'Predictive Analytics',
        'AI Sales Assistant',
        'Multi-Branch Control',
        'Advanced Security',
        'Dedicated Manager'
      ]
    }
  ];

  return (
    <div className="min-h-screen premium-bg text-slate-900 pt-20">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-emerald-50 border border-emerald-100 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-blue-emerald">workspace_premium</span>
              <span className="text-blue-emerald font-bold tracking-wider uppercase text-sm">CRM PRICING</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter">
              Monthly
              <span className="block text-premium-gradient py-2">
                CRM Subscription
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12 font-medium">
              Premium CRM solutions designed for modern businesses with flexible monthly pricing
            </p>
          </motion.div>
        </div>
      </div>

      {/* Billing Toggle */}
      <div className="px-6 mb-16">
        <div className="max-w-md mx-auto">
          <div className="flex items-center justify-center gap-4 p-2 bg-slate-100 rounded-full border border-slate-200 shadow-inner">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-8 py-3 rounded-full font-black transition-all duration-300 uppercase tracking-widest text-xs ${billingCycle === 'monthly'
                ? 'bg-blue-emerald text-white shadow-lg'
                : 'text-slate-500 hover:text-slate-900'
                }`}>
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-8 py-3 rounded-full font-black transition-all duration-300 uppercase tracking-widest text-xs ${billingCycle === 'annual'
                ? 'bg-blue-emerald text-white shadow-lg'
                : 'text-slate-500 hover:text-slate-900'
                }`}>
              Annual
            </button>
          </div>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -15, borderColor: 'rgba(37,99,235,0.2)' }}
                className={`bg-white rounded-[2rem] p-10 border transition-all duration-700 relative shadow-xl hover:shadow-2xl overflow-hidden group ${plan.popular
                  ? 'border-blue-emerald'
                  : 'border-slate-100'
                  }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${plan.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>

                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div className="bg-blue-emerald text-white px-6 py-2 rounded-bl-2xl text-[10px] font-black uppercase tracking-widest">
                      Most Popular
                    </div>
                  </div>
                )}

                <div className="text-center mb-10">
                  <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-widest">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-2xl font-black text-slate-900 align-top mt-2 inline-block">₹</span>
                    <span className={`text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r ${plan.color}`}>{plan.price}</span>
                    <span className="text-sm font-bold text-slate-400 block mt-2">{plan.period}</span>
                  </div>
                </div>

                <div className="h-px bg-slate-100 w-full mb-10"></div>

                {/* Features List */}
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-4">
                      <span className={`material-symbols-outlined text-sm font-black mt-1 bg-clip-text text-transparent bg-gradient-to-r ${plan.color}`}>check_circle</span>
                      <span className={`text-slate-600 text-sm font-medium ${feature.startsWith('Everything in') ? 'font-black text-slate-900' : ''}`}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA Buttons */}
                <div className="space-y-4">
                  <Link to="/join-contact">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full font-black py-5 rounded-2xl transition-all shadow-xl hover:shadow-2xl flex items-center justify-center gap-3 text-sm uppercase tracking-widest text-white bg-gradient-to-r ${plan.color} hover:opacity-90`}
                    >
                      <span className="material-symbols-outlined text-lg">rocket_launch</span>
                      Start Now
                    </motion.button>
                  </Link>
                  <Link to="/book-demo">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full bg-slate-100 hover:bg-slate-200 text-slate-900 font-black py-4 rounded-2xl transition-all flex items-center justify-center gap-3 text-sm uppercase tracking-widest"
                    >
                      <span className="material-symbols-outlined text-lg">smart_toy</span>
                      Book Demo
                    </motion.button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Feature Comparison Table */}
      <div className="px-6 py-20 bg-slate-50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tighter">Detailed Comparison</h2>
            <p className="text-xl text-slate-500 font-medium">Everything you need to know about our CRM plans</p>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full bg-white rounded-[2rem] border border-slate-200 shadow-2xl overflow-hidden">
              <thead>
                <tr className="bg-gradient-to-r from-slate-800 to-slate-900">
                  <th className="text-left p-8 text-white font-black uppercase tracking-widest text-xs">Features</th>
                  <th className="text-center p-8 text-white font-black uppercase tracking-widest text-xs">Growth</th>
                  <th className="text-center p-8 text-white font-black uppercase tracking-widest text-xs">Professional</th>
                  <th className="text-center p-8 text-white font-black uppercase tracking-widest text-xs">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  'Lead Management',
                  'Sales Pipeline',
                  'Task Assignment',
                  'Email Automation',
                  'WhatsApp Integration',
                  'Billing & GST',
                  'Payment Tracking',
                  'Client Ledger',
                  'Analytics Dashboard',
                  'API Integration',
                  'AI Lead Scoring',
                  'Predictive Analytics',
                  'Multi-Branch Control',
                  'Advanced Security',
                  'Dedicated Manager'
                ].map((feature, index) => (
                  <tr key={index} className="border-b border-slate-50 hover:bg-slate-50/50 transition-colors">
                    <td className="p-6 text-slate-700 text-sm font-bold">{feature}</td>
                    <td className="p-6 text-center">
                      {index < 5 ? (
                        <span className="material-symbols-outlined text-blue-emerald font-black">check</span>
                      ) : (
                        <span className="material-symbols-outlined text-slate-200">close</span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      {index < 10 ? (
                        <span className="material-symbols-outlined text-purple-600 font-black">check</span>
                      ) : (
                        <span className="material-symbols-outlined text-slate-200">close</span>
                      )}
                    </td>
                    <td className="p-6 text-center">
                      <span className="material-symbols-outlined text-emerald-600 font-black">check</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Trust Section */}
      <div className="px-6 py-32">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-16 border border-slate-100 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500"></div>

            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tighter">Trusted by Enterprises Worldwide</h2>

            <div className="grid grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-slate-50 rounded-2xl">
                <div className="text-4xl font-black text-blue-emerald mb-2">99.9%</div>
                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Uptime</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-2xl">
                <div className="text-4xl font-black text-purple-600 mb-2">500+</div>
                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Happy Clients</div>
              </div>
              <div className="text-center p-6 bg-slate-50 rounded-2xl">
                <div className="text-4xl font-black text-emerald-600 mb-2">24/7</div>
                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">Support</div>
              </div>
            </div>

            <p className="text-slate-600 mb-10 text-lg font-medium leading-relaxed">
              Join hundreds of businesses already transforming their operations with our premium CRM solutions.
            </p>

            <Link to="/join-contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-emerald text-white font-black px-12 py-5 rounded-2xl transition-all shadow-2xl shadow-blue-500/30 text-sm uppercase tracking-widest"
              >
                Get Started Today
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CRMPricing;
