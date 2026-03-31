import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ERPPricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');

  const pricingPlans = [
    {
      name: 'Growth Plan',
      tier: '🥉',
      price: '4,999',
      period: '/ Month',
      color: 'from-green-500 to-emerald-500',
      popular: false,
      features: [
        'Lead Management',
        'Basic Pipeline',
        'Task Assignment',
        'Email Automation',
        'Basic Reports'
      ],
      notIncluded: [
        'Advanced Pipeline',
        'WhatsApp Automation',
        'Billing + GST',
        'Payment Tracking',
        'Performance Dashboard',
        'API Integration',
        'AI Lead Scoring',
        'Predictive Analytics',
        'AI Sales Assistant',
        'Multi-Branch Control',
        'Advanced Security',
        'Dedicated Manager'
      ]
    },
    {
      name: 'Professional Plan',
      tier: '🥈',
      price: '9,999',
      period: '/ Month',
      color: 'from-blue-500 to-cyan-500',
      popular: true,
      features: [
        'Everything in Growth +',
        'Advanced Pipeline',
        'WhatsApp Automation',
        'Billing + GST',
        'Payment Tracking',
        'Performance Dashboard',
        'API Integration'
      ],
      notIncluded: [
        'AI Lead Scoring',
        'Predictive Analytics',
        'AI Sales Assistant',
        'Multi-Branch Control',
        'Advanced Security',
        'Dedicated Manager'
      ]
    },
    {
      name: 'Enterprise Plan',
      tier: '🥇',
      price: 'Custom',
      period: 'Pricing',
      color: 'from-purple-500 to-pink-500',
      popular: false,
      features: [
        'Full Custom ERP',
        'AI Lead Scoring',
        'Predictive Analytics',
        'AI Sales Assistant',
        'Multi-Branch Control',
        'Advanced Security',
        'Dedicated Manager'
      ],
      notIncluded: []
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-green-900/20 pt-20">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-green-400">workspace_premium</span>
              <span className="text-green-400 font-bold tracking-wider uppercase text-sm">ERP PRICING</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Monthly 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400">
                Premium Model
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-4">
              Build Once. Scale Every Month.
            </p>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto mb-12">
              Continuous updates, automation improvements, AI upgrades, and real human support included.
            </p>
          </motion.div>
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
                whileHover={{ y: -10 }}
                className={`glass-card rounded-2xl p-8 border transition-all duration-300 relative backdrop-blur-sm ${
                  plan.popular 
                    ? 'border-green-500/50 ring-2 ring-green-500/30 scale-105' 
                    : 'border-white/10 '
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-2 rounded-full text-sm font-bold">
                      MOST POPULAR
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-8">
                  <div className="text-4xl mb-2">{plan.tier}</div>
                  <h3 className="text-2xl font-bold text-white mb-4">{plan.name}</h3>
                  <div className="mb-6">
                    <span className="text-5xl font-black text-white">₹</span>
                    <span className="text-5xl font-black text-white">{plan.price}</span>
                    <span className="text-xl text-slate-300">{plan.period}</span>
                  </div>
                </div>

                {/* Included Features */}
                <div className="mb-8">
                  <h4 className="text-white font-semibold mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-400">check_circle</span>
                    Included Features
                  </h4>
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-300">
                        <span className="material-symbols-outlined text-green-400 mt-1 text-sm">
                          {feature.startsWith('Everything in') ? 'upgrade' : 'check_circle'}
                        </span>
                        <span className={feature.startsWith('Everything in') ? 'font-semibold text-green-400' : ''}>
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Not Included (for comparison) */}
                {plan.notIncluded.length > 0 && (
                  <div className="mb-8">
                    <h4 className="text-slate-400 font-semibold mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-red-400">cancel</span>
                      Not Included
                    </h4>
                    <ul className="space-y-2 max-h-40 overflow-y-auto">
                      {plan.notIncluded.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3 text-slate-500">
                          <span className="material-symbols-outlined text-red-400/60 mt-1 text-sm">close</span>
                          <span className="text-sm line-through">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA Button */}
                <Link to="/book-demo">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full font-bold py-4 rounded-full transition-all flex items-center justify-center gap-3 text-lg ${
                      plan.popular
                        ? 'bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white shadow-2xl hover:shadow-green-500/25'
                        : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                  >
                    <span className="material-symbols-outlined">
                      {plan.name === 'Enterprise Plan' ? 'contact_support' : 'smart_toy'}
                    </span>
                    {plan.name === 'Enterprise Plan' ? 'Contact Sales' : 'Book Free ERP Demo'}
                  </motion.button>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Money Back Guarantee */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="glass-card rounded-2xl p-8 border border-white/10 bg-gradient-to-br from-green-500/10 to-emerald-500/10 mt-16 text-center backdrop-blur-sm"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="material-symbols-outlined text-3xl text-green-400">verified</span>
              <h3 className="text-2xl font-bold text-white">30-Day Money Back Guarantee</h3>
            </div>
            <p className="text-slate-300 max-w-2xl mx-auto">
              Not satisfied? Get a full refund within 30 days. No questions asked.
            </p>
          </motion.div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-6 py-20 bg-gradient-to-r from-slate-800/50 to-green-900/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              {
                question: 'Can I switch between plans?',
                answer: 'Yes, you can upgrade or downgrade your plan anytime. Changes take effect immediately.'
              },
              {
                question: 'Is there a setup fee?',
                answer: 'No setup fees! Everything is included in your monthly subscription.'
              },
              {
                question: 'What support do you provide?',
                answer: '24/7 email support for all plans. Phone support available for Professional and Enterprise plans.'
              },
              {
                question: 'Can I cancel anytime?',
                answer: 'Yes, you can cancel your subscription at any time with no cancellation fees.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="glass-card rounded-xl p-6 border border-white/10 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold text-white mb-3">{faq.question}</h3>
                <p className="text-slate-300">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ERPPricing;