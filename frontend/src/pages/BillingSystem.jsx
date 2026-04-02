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
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-blue-50 border border-blue-100 mb-8 shadow-sm">
              <span className="material-symbols-outlined text-blue-600 text-sm font-black">payments</span>
              <span className="text-blue-600 font-black tracking-widest uppercase text-[10px]">BILLING SYSTEM</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
              Enterprise Billing &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                Revenue Control
              </span>
            </h1>

            <p className="text-lg text-slate-500 max-w-3xl leading-relaxed font-medium mx-auto">
              Our integrated billing engine ensures structured financial management with complete automation and compliance.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Dashboard Preview */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] mb-16"
          >
            <h2 className="text-3xl font-black text-slate-900 mb-10 text-center tracking-tighter">Billing Performance</h2>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
              {dashboardStats.map((stat, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 group hover:border-blue-200 transition-all">
                  <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">{stat.label}</div>
                  <div className="text-3xl font-black text-slate-900 mb-1 tracking-tight">{stat.value}</div>
                  <div className={`text-xs font-black uppercase tracking-tighter ${stat.color === 'text-green-400' ? 'text-green-600' : stat.color === 'text-orange-400' ? 'text-orange-600' : stat.color === 'text-blue-400' ? 'text-blue-600' : 'text-red-600'}`}>{stat.change}</div>
                </div>
              ))}
            </div>

            {/* Revenue Graph Placeholder */}
            <div className="bg-slate-50 rounded-3xl p-8 mb-8 border border-slate-100">
              <div className="flex items-center justify-between mb-8">
                <h3 className="text-slate-900 font-black uppercase tracking-widest text-xs">Revenue Trend Projection</h3>
                <div className="flex gap-2">
                  <span className="px-4 py-1.5 bg-blue-600 text-white rounded-full text-[10px] font-black uppercase shadow-lg shadow-blue-500/20">Active View</span>
                  <span className="px-4 py-1.5 bg-white border border-slate-200 text-slate-400 rounded-full text-[10px] font-black uppercase">Historical</span>
                </div>
              </div>
              <div className="h-40 flex items-end justify-between gap-3 px-4">
                {[65, 78, 85, 72, 90, 88, 95].map((height, index) => (
                  <motion.div
                    key={index}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${height}%` }}
                    className="flex-1 max-w-[40px] bg-gradient-to-t from-blue-600 to-indigo-600 rounded-t-xl transition-all hover:scale-105"
                    style={{ height: `${height}%` }}
                  ></motion.div>
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
      <div className="px-6 py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">
              Unified
              <span className="block md:inline text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500 md:ml-3">
                Billing Intelligence
              </span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Everything you need for enterprise-grade financial control and automation.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-3xl p-8 border border-slate-200 transition-all duration-500 shadow-xl hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-8 shadow-lg group-hover:scale-110 transition-transform`}>
                  <span className="material-symbols-outlined text-white text-2xl font-black">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed font-medium">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[4rem] p-16 border border-slate-200 shadow-2xl relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-blue-50 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:bg-blue-100 transition-colors"></div>

            <h2 className="relative z-10 text-5xl font-black text-slate-900 mb-8 tracking-tighter">
              Ready to Enable
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-500">
                Smart Billing?
              </span>
            </h2>

            <p className="relative z-10 text-xl text-slate-500 mb-12 font-medium">
              Transform your financial operations with our automated billing system.
            </p>

            <div className="relative z-10 flex flex-col sm:flex-row gap-6 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-black px-10 py-5 rounded-3xl transition-all shadow-2xl shadow-blue-500/25 flex items-center gap-3 text-lg"
              >
                <span className="material-symbols-outlined font-black">bolt</span>
                Enable Smart Billing
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-50 hover:bg-slate-100 text-slate-900 font-black px-10 py-5 rounded-3xl border border-slate-200 transition-all flex items-center gap-3 text-lg shadow-xl shadow-slate-200/20"
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