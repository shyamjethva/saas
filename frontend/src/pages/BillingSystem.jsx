import React from 'react';
import { motion } from 'framer-motion';

const BillingSystem = () => {
  const features = [
    {
      title: 'Invoice Creation',
      description: 'Auto-generated invoices with professional templates and automatic numbering',
      icon: 'receipt_long',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'GST Integration',
      description: 'Automatic tax calculation and compliance-ready reporting for Indian businesses',
      icon: 'account_balance',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Payment Tracking',
      description: 'Real-time monitoring of pending and paid invoice statuses with alerts',
      icon: 'payments',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Client Ledger Management',
      description: 'Complete transaction history and account balance tracking for each client',
      icon: 'book',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Recurring Subscription Billing',
      description: 'Automated billing for monthly/yearly subscriptions with flexible cycles',
      icon: 'autorenew',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Automated Payment Reminders',
      description: 'Smart reminder system with escalation workflows for overdue payments',
      icon: 'notifications_active',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Multi-Payment Gateway Support',
      description: 'Integration with Razorpay, Stripe, PayPal, and bank transfers',
      icon: 'credit_card',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Financial Reports & Revenue Summary',
      description: 'Comprehensive dashboards with revenue analytics and export capabilities',
      icon: 'analytics',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const dashboardStats = [
    { label: 'Total Revenue', value: '₹2.4M', change: '+12.5%', color: 'text-green-400' },
    { label: 'Pending Payments', value: '₹3.2L', change: '-8.2%', color: 'text-orange-400' },
    { label: 'Active Subscriptions', value: '142', change: '+15', color: 'text-blue-400' },
    { label: 'Overdue Invoices', value: '7', change: '-3', color: 'text-red-400' }
  ];

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
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-blue-400">payments</span>
              <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">BILLING SYSTEM</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              Enterprise Billing &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                Revenue Control
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed">
              Our integrated billing engine ensures structured financial management with complete automation and compliance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white/80 rounded-2xl p-8 border border-slate-200 backdrop-blur-sm mb-16 shadow-xl shadow-slate-200/50"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6 text-center">Billing Dashboard Preview</h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {dashboardStats.map((stat, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-4 border border-slate-200">
                  <div className="text-slate-500 text-sm mb-1">{stat.label}</div>
                  <div className="text-2xl font-black text-slate-900">{stat.value}</div>
                  <div className={`text-sm font-bold ${stat.color}`}>{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Revenue Graph Placeholder */}
            <div className="bg-slate-50 rounded-xl p-6 mb-6 border border-slate-200">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-900 font-black">Revenue Trend</h3>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-green-500 text-white rounded text-xs font-bold shadow-lg shadow-green-500/20">Monthly</span>
                  <span className="px-3 py-1 bg-slate-200 text-slate-600 rounded text-xs font-bold">Quarterly</span>
                </div>
              </div>
              <div className="h-32 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-lg flex items-end justify-between px-4 py-2">
                {[65, 78, 85, 72, 90, 88, 95].map((height, index) => (
                  <div
                    key={index}
                    className="w-6 bg-gradient-to-t from-blue-500 to-cyan-500 rounded-t-lg transition-all hover:from-blue-400 hover:to-cyan-400"
                    style={{ height: `${height}%` }}
                  ></div>
                ))}
              </div>
            </div>

            {/* Payment Status Cards */}
            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-green-500/10 border border-green-500/30 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <div>
                    <div className="text-slate-900 font-bold">Paid</div>
                    <div className="text-green-600 text-sm font-medium">42 invoices</div>
                  </div>
                </div>
              </div>
              <div className="bg-orange-500/10 border border-orange-500/30 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-orange-500"></div>
                  <div>
                    <div className="text-slate-900 font-bold">Pending</div>
                    <div className="text-orange-600 text-sm font-medium">18 invoices</div>
                  </div>
                </div>
              </div>
              <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <div>
                    <div className="text-slate-900 font-bold">Overdue</div>
                    <div className="text-red-600 text-sm font-medium">7 invoices</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
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
            <h2 className="text-4xl font-bold text-slate-900 mb-4 font-space-grotesk">Complete Billing Features</h2>
            <p className="text-xl text-slate-600">Everything you need for professional financial management</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-white rounded-xl p-6 border border-slate-200 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-2xl relative overflow-hidden ${feature.color.includes('blue') ? 'hover:border-blue-500/50' :
                    feature.color.includes('green') ? 'hover:border-emerald-500/50' :
                      feature.color.includes('purple') ? 'hover:border-purple-500/50' :
                        feature.color.includes('orange') ? 'hover:border-orange-500/50' :
                          feature.color.includes('teal') ? 'hover:border-teal-500/50' :
                            feature.color.includes('indigo') ? 'hover:border-indigo-500/50' :
                              feature.color.includes('yellow') ? 'hover:border-yellow-500/50' :
                                feature.color.includes('red') ? 'hover:border-red-500/50' :
                                  'hover:border-blue-500/50'
                  }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <span className="material-symbols-outlined text-white">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm">{feature.description}</p>
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
            className="glass-card rounded-2xl p-12 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6 font-space-grotesk">
              Ready to Enable
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                Smart Billing?
              </span>
            </h2>

            <p className="text-xl text-slate-600 mb-8">
              Transform your financial operations with our automated billing system
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black px-8 py-4 rounded-full transition-all shadow-2xl shadow-blue-500/25 flex items-center gap-3 text-lg"
              >
                <span className="material-symbols-outlined font-black">bolt</span>
                Enable Smart Billing
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-100 hover:bg-slate-200 text-slate-900 font-bold px-8 py-4 rounded-full border border-slate-200 transition-all flex items-center gap-3 text-lg"
              >
                <span className="material-symbols-outlined font-black">play_circle</span>
                Watch Demo
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default BillingSystem;