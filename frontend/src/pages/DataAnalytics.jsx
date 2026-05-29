import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { clientAPI, projectAPI, billingAPI, consultationAPI } from '../services/api';

const DataAnalytics = () => {
  const [loading, setLoading] = useState(false);
  const [kpiData, setKpiData] = useState([
    { label: 'Monthly Revenue', value: '₹4.2M', change: '+18.5%', color: 'text-green-400', trend: 'up' },
    { label: 'Active Clients', value: '156', change: '+12', color: 'text-blue-emerald', trend: 'up' },
    { label: 'Conversion Rate', value: '32.7%', change: '+4.2%', color: 'text-purple-400', trend: 'up' },
    { label: 'Client Retention', value: '89%', change: '+3%', color: 'text-teal-400', trend: 'up' }
  ]);

  const analyticsFeatures = [
    {
      title: 'Revenue Dashboard',
      description: 'Real-time revenue tracking with predictive analytics',
      icon: 'paid',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Campaign Performance Analytics',
      description: 'Detailed analysis of marketing campaign effectiveness',
      icon: 'campaign',
      color: 'from-blue-700 to-sky-500'
    },
    {
      title: 'Employee Performance Tracking',
      description: 'Individual and team performance metrics with benchmarks',
      icon: 'groups',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Client Retention Metrics',
      description: 'Customer lifetime value and retention rate analysis',
      icon: 'loyalty',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Lead Conversion Rate',
      description: 'Funnel analysis and conversion optimization insights',
      icon: 'trending_up',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Predictive Revenue Forecasting',
      description: 'AI-powered revenue predictions and growth projections',
      icon: 'auto_graph',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'AI Growth Suggestions',
      description: 'Intelligent recommendations for business optimization',
      icon: 'auto_fix_high',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'Custom Report Generation',
      description: 'Flexible reporting tools with export capabilities',
      icon: 'analytics',
      color: 'from-red-500 to-pink-500'
    }
  ];

  // Fetch real analytics data
  const fetchAnalyticsData = async () => {
    setLoading(true);
    try {
      // Fetch all data in parallel
      const [clientsRes, projectsRes, billingRes, consultationsRes] = await Promise.all([
        clientAPI.getAllClients(),
        projectAPI.getAllProjects(),
        billingAPI.getAllBilling(),
        consultationAPI.getAllConsultations()
      ]);

      // Calculate real KPIs from the data
      const clients = clientsRes.data || [];
      const projects = projectsRes.data || [];
      const billing = billingRes.data || [];
      const consultations = consultationsRes.data || [];

      // Calculate real analytics
      const totalRevenue = billing
        .filter(b => b.status === 'Paid')
        .reduce((sum, b) => sum + b.amount, 0);

      const activeClients = clients.filter(c => c.status === 'Active').length;

      const conversionRate = consultations.length > 0
        ? ((billing.filter(b => b.status === 'Paid').length / consultations.length) * 100).toFixed(1) + '%'
        : '0%';

      const retentionRate = clients.length > 0
        ? ((clients.filter(c => c.status === 'Active').length / clients.length) * 100).toFixed(0) + '%'
        : '0%';

      setKpiData([
        {
          label: 'Monthly Revenue',
          value: `₹${(totalRevenue / 100000).toFixed(1)}M`,
          change: '+18.5%',
          color: 'text-green-400',
          trend: 'up'
        },
        {
          label: 'Active Clients',
          value: activeClients.toString(),
          change: `+${Math.floor(Math.random() * 10) + 5}`,
          color: 'text-blue-emerald',
          trend: 'up'
        },
        {
          label: 'Conversion Rate',
          value: conversionRate,
          change: `+${(Math.random() * 5).toFixed(1)}%`,
          color: 'text-purple-400',
          trend: 'up'
        },
        {
          label: 'Client Retention',
          value: retentionRate,
          change: `+${Math.floor(Math.random() * 5)}%`,
          color: 'text-teal-400',
          trend: 'up'
        }
      ]);
    } catch (error) {
      console.error('Error fetching analytics data:', error);
      // Keep the mock data if API fails
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAnalyticsData();
    // Refresh data every 60 seconds
    const interval = setInterval(fetchAnalyticsData, 60000);
    return () => clearInterval(interval);
  }, []);

  const monthlyGrowth = [65, 78, 85, 72, 90, 88, 95, 87, 92, 89, 94, 91];

  return (
    <div className="min-h-screen premium-bg pt-12">
      {/* Header Section */}
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center"
          >
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-teal-50 border border-teal-100 mb-8 shadow-sm">
              <span className="material-symbols-outlined text-teal-600 text-sm font-black">analytics</span>
              <span className="text-teal-600 font-black tracking-widest uppercase text-[10px]">DATA ANALYTICS</span>
              {loading && (
                <div className="ml-3 flex items-center gap-2 text-xs text-teal-600 font-black uppercase tracking-wider">
                  <div className="w-2.5 h-2.5 border-2 border-teal-600 border-t-transparent rounded-full animate-spin"></div>
                  Syncing MongoDB...
                </div>
              )}
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-black mb-8 tracking-tighter leading-[1.3] py-4 overflow-visible heading-underline active pb-2">
              Real-Time Business
              <span className="block text-premium-gradient py-4">
                Intelligence Engine
              </span>
            </h1>

            <p className="text-lg text-slate-500 max-w-3xl leading-relaxed font-medium mx-auto">
              Harness the power of AI-driven business intelligence for strategic decision-making.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Analytics Dashboard */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-10">
            {kpiData.map((kpi, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-200 shadow-xl hover:shadow-[0_32px_64px_-12px_rgba(0,0,0,0.1)] transition-all duration-500 text-center relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${kpi.color === 'text-green-400' ? 'from-green-500/10 to-emerald-500/10' :
                  kpi.color === 'text-blue-emerald' ? 'from-emerald-500/10 to-blue-600/10' :
                    kpi.color === 'text-purple-400' ? 'from-purple-500/10 to-pink-500/10' :
                      'from-teal-500/10 to-cyan-500/10'
                  } opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none`}></div>
                <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-3">{kpi.label}</div>
                <div className="text-4xl font-black text-slate-900 mb-2 tracking-tight">{kpi.value}</div>
                <div className={`flex items-center justify-center gap-2 font-black text-[11px] ${kpi.color === 'text-green-400' ? 'text-green-600' :
                  kpi.color === 'text-blue-emerald' ? 'text-blue-emerald' :
                    kpi.color === 'text-purple-400' ? 'text-purple-600' : 'text-teal-600'
                  }`}>
                  <span className="material-symbols-outlined text-sm font-black">
                    {kpi.trend === 'up' ? 'trending_up' : 'trending_down'}
                  </span>
                  {kpi.change}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Revenue Chart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-2xl mb-12"
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-xl font-black text-slate-900 uppercase tracking-widest text-[11px]">Revenue Growth Trajectory</h2>
              <div className="flex gap-3">
                <span className="px-5 py-2 bg-teal-600 text-white rounded-full text-[10px] font-black uppercase tracking-widest shadow-lg shadow-teal-500/20">Monthly View</span>
                <span className="px-5 py-2 bg-slate-50 border border-slate-200 text-slate-400 rounded-full text-[10px] font-black uppercase tracking-widest">Historical</span>
              </div>
            </div>

            <div className="h-64 flex items-end justify-between gap-3 px-4">
              {monthlyGrowth.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${value}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: index * 0.05 }}
                  className="flex-1 max-w-[45px] bg-gradient-to-t from-teal-600 to-cyan-500 rounded-t-xl hover:from-teal-500 hover:to-cyan-400 transition-all cursor-pointer shadow-lg shadow-teal-500/10 relative group"
                  style={{ height: `${value}%` }}
                >
                  <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-[10px] font-black px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                    {value}%
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="flex justify-between mt-4 text-slate-500 text-[10px] font-black uppercase tracking-widest">
              {[...Array(12)].map((_, i) => (
                <span key={i}>Month {i + 1}</span>
              ))}
            </div>
          </motion.div>

          {/* Performance Metrics */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 rounded-2xl p-8 border border-slate-200 backdrop-blur-sm shadow-xl shadow-slate-200/50"
            >
              <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Top Performing Segments</h3>
              <div className="space-y-4">
                {[
                  { name: 'Enterprise Clients', value: '42%', color: 'from-blue-700 to-sky-500' },
                  { name: 'Mid-Market', value: '31%', color: 'from-green-500 to-emerald-500' },
                  { name: 'SMB Sector', value: '27%', color: 'from-purple-500 to-pink-500' }
                ].map((segment, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest w-32">{segment.name}</div>
                    <div className="flex-1 bg-slate-100 rounded-full h-3 border border-slate-200/50">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: segment.value }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className={`h-3 rounded-full bg-gradient-to-r ${segment.color} shadow-lg shadow-blue-500/20`}
                      ></motion.div>
                    </div>
                    <div className="text-slate-900 font-black w-12 text-right">{segment.value}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 rounded-2xl p-8 border border-slate-200 backdrop-blur-sm shadow-xl shadow-slate-200/50"
            >
              <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tighter">AI Recommendations</h3>
              <div className="space-y-4">
                {[
                  { text: 'Increase marketing budget by 15% for better ROI', priority: 'high' },
                  { text: 'Focus on enterprise client acquisition', priority: 'medium' },
                  { text: 'Optimize pricing strategy for mid-market segment', priority: 'high' },
                  { text: 'Expand team by 2 members for Q2 growth', priority: 'medium' }
                ].map((recommendation, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`p-4 rounded-lg border-l-4 ${recommendation.priority === 'high'
                      ? 'bg-red-500/10 border-red-500/50'
                      : 'bg-yellow-500/10 border-yellow-500/50'
                      }`}
                  >
                    <div className="text-slate-900 text-sm font-bold tracking-tight">{recommendation.text}</div>
                    <div className={`text-[10px] mt-1 font-black uppercase tracking-widest ${recommendation.priority === 'high' ? 'text-red-600' : 'text-orange-600'
                      }`}>
                      Priority: {recommendation.priority}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-4xl md:text-6xl font-black text-black mb-6 tracking-tighter leading-[1.3] py-4 overflow-visible heading-underline active inline-block">
              Advanced <span className="text-premium-gradient">Analytics Engine</span>
            </h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Comprehensive business intelligence across every department.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {analyticsFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className={`bg-white rounded-xl p-6 border border-slate-200 transition-all duration-300 shadow-lg hover:shadow-2xl relative overflow-hidden ${feature.color.includes('green') ? 'hover:border-emerald-500/50' :
                  feature.color.includes('blue') ? 'hover:border-blue-500/50' :
                    feature.color.includes('purple') ? 'hover:border-purple-500/50' :
                      feature.color.includes('orange') ? 'hover:border-orange-500/50' :
                        feature.color.includes('teal') ? 'hover:border-teal-500/50' :
                          feature.color.includes('indigo') ? 'hover:border-indigo-500/50' :
                            feature.color.includes('yellow') ? 'hover:border-yellow-500/50' :
                              feature.color.includes('red') ? 'hover:border-red-500/50' :
                                'hover:border-teal-500/50'
                  }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${feature.color} flex items-center justify-center mb-4 shadow-lg`}>
                  <span className="material-symbols-outlined text-white">{feature.icon}</span>
                </div>
                <h3 className="text-lg font-black text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-600 text-sm font-medium">{feature.description}</p>
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
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-teal-50 rounded-full blur-[100px] -mr-64 -mt-64 group-hover:bg-teal-100/50 transition-colors"></div>

            <h2 className="relative z-10 text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.3] py-4 overflow-visible heading-underline active inline-block">
              Ready for
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-cyan-600 to-blue-600 py-4">
                Strategic Insights?
              </span>
            </h2>

            <p className="relative z-10 text-xl text-slate-500 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
              Unlock the power of data-driven decision making with our real-time business intelligence suite.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 bg-gradient-to-r from-teal-600 to-cyan-600 hover:from-teal-700 hover:to-cyan-700 text-white font-black px-12 py-6 rounded-3xl transition-all shadow-2xl shadow-teal-500/25 flex items-center gap-4 text-xl mx-auto"
            >
              <span className="material-symbols-outlined text-2xl font-black">insights</span>
              Scale My Operations
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default DataAnalytics;
