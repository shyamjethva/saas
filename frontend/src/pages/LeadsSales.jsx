import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { leadAPI } from '../services/api';
import { useNavigate } from 'react-router-dom';

const LeadsSales = () => {
  const [leads, setLeads] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  // Load leads data
  useEffect(() => {
    const fetchLeads = async () => {
      try {
        const response = await leadAPI.getAllLeads({
          page: 1,
          limit: 100
        });
        setLeads(response.data.data || []);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching leads:', err);
        setError(err.response?.data?.error || err.message || 'Failed to load leads');
        setLoading(false);
      }
    };

    fetchLeads();

    // Set up interval to refresh data every 30 seconds
    const interval = setInterval(fetchLeads, 30000);
    return () => clearInterval(interval);
  }, []);

  const leadFeatures = [
    // Add dynamic data from API if available
    ...leads.length > 0 ? [
      {
        title: `Total Leads (${leads.length})`,
        description: 'Current leads in your system',
        icon: 'groups',
        color: 'from-blue-500 to-cyan-500'
      }
    ] : [],
    {
      title: 'Lead Capture Integration',
      description: 'Seamlessly collect leads from website forms, ads, and landing pages',
      icon: 'webhook',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Automated Lead Assignment',
      description: 'Smart distribution of leads to appropriate sales representatives',
      icon: 'assignment_ind',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Sales Pipeline Tracking',
      description: 'Visual pipeline management from prospect to closed deal',
      icon: 'account_tree',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Task & Follow-Up Automation',
      description: 'Automated reminders and scheduled follow-ups for timely engagement',
      icon: 'alarm',
      color: 'from-orange-500 to-red-500'
    },
    {
      title: 'Smart Lead Scoring (AI-Based)',
      description: 'Intelligent scoring system to prioritize high-value prospects',
      icon: 'auto_graph',
      color: 'from-teal-500 to-cyan-500'
    },
    {
      title: 'Conversion Tracking',
      description: 'Detailed analytics on lead conversion rates and funnel performance',
      icon: 'trending_up',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      title: 'Sales Performance Reports',
      description: 'Comprehensive reporting on team performance and individual metrics',
      icon: 'analytics',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'WhatsApp Follow-Up Automation',
      description: 'Automated WhatsApp messaging for instant customer engagement',
      icon: 'chat',
      color: 'from-red-500 to-pink-500'
    }
  ];

  // Calculate pipeline stages from leads data
  const pipelineStages = [
    {
      name: 'New Leads',
      count: leads.filter(lead => lead.leadStage === 'New Lead').length,
      percentage: leads.length > 0 ? 100 : 0,
      color: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Contacted',
      count: leads.filter(lead => lead.leadStage === 'Contacted').length,
      percentage: leads.length > 0 ? Math.round((leads.filter(lead => lead.leadStage === 'Contacted').length / leads.length) * 100) : 0,
      color: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Qualified',
      count: leads.filter(lead => lead.leadStage === 'Qualified').length,
      percentage: leads.length > 0 ? Math.round((leads.filter(lead => lead.leadStage === 'Qualified').length / leads.length) * 100) : 0,
      color: 'from-yellow-500 to-orange-500'
    },
    {
      name: 'Proposal Sent',
      count: leads.filter(lead => lead.leadStage === 'Proposal Sent').length,
      percentage: leads.length > 0 ? Math.round((leads.filter(lead => lead.leadStage === 'Proposal Sent').length / leads.length) * 100) : 0,
      color: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Negotiation',
      count: leads.filter(lead => lead.leadStage === 'Negotiation').length,
      percentage: leads.length > 0 ? Math.round((leads.filter(lead => lead.leadStage === 'Negotiation').length / leads.length) * 100) : 0,
      color: 'from-indigo-500 to-blue-500'
    },
    {
      name: 'Closed Won',
      count: leads.filter(lead => lead.leadStage === 'Closed Won').length,
      percentage: leads.length > 0 ? Math.round((leads.filter(lead => lead.leadStage === 'Closed Won').length / leads.length) * 100) : 0,
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  // Calculate conversion metrics from leads data
  const conversionMetrics = [
    {
      label: 'Lead Conversion Rate',
      value: leads.length > 0 ? `${Math.round((leads.filter(lead => lead.leadStage === 'Closed Won').length / leads.length) * 100)}%` : '0%',
      change: '+8.2%',
      color: 'text-green-400'
    },
    {
      label: 'Avg. Deal Size',
      value: '₹2.4L',
      change: '+15%',
      color: 'text-blue-400'
    },
    {
      label: 'Sales Cycle',
      value: '42 days',
      change: '-7 days',
      color: 'text-green-400'
    },
    {
      label: 'Pipeline Value',
      value: '₹8.2M',
      change: '+22%',
      color: 'text-purple-400'
    }
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
            <div className="inline-flex items-center gap-3 px-5 py-2 rounded-xl bg-green-50 border border-green-100 mb-8 shadow-sm">
              <span className="material-symbols-outlined text-green-600 text-sm font-black">trending_up</span>
              <span className="text-green-600 font-black tracking-widest uppercase text-[10px]">LEADS & SALES</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.3] py-4 overflow-visible">
              Intelligent Lead &
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 py-4">
                Sales Management
              </span>
            </h1>

            <p className="text-lg text-slate-500 max-w-3xl leading-relaxed font-medium mx-auto">
              Convert more leads with structured pipeline tracking and automated sales intelligence.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Pipeline Visualization */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] mb-16"
          >
            <h2 className="text-3xl font-black text-slate-900 mb-12 text-center tracking-tighter uppercase tracking-widest text-xs font-black">Sales Pipeline Visualization</h2>

            {/* Pipeline Flow */}
            <div className="relative">
              {/* Connecting Lines */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-green-500 via-yellow-500 via-purple-500 via-indigo-500 to-teal-500 transform -translate-y-1/2 z-0"></div>

              <div className="relative z-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {pipelineStages.map((stage, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="text-center"
                  >
                    <div className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-br ${stage.color} flex items-center justify-center mb-3 shadow-lg shadow-slate-200/50`}>
                      <span className="text-white font-black text-lg">{stage.count}</span>
                    </div>
                    <h3 className="text-slate-900 font-bold text-sm mb-1">{stage.name}</h3>
                    <div className="text-slate-500 text-xs font-black">{stage.percentage}%</div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Conversion Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
              {conversionMetrics.map((metric, index) => (
                <div key={index} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 text-center group hover:border-green-200 transition-all">
                  <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mb-2">{metric.label}</div>
                  <div className="text-3xl font-black text-slate-900 mb-1 tracking-tight">{metric.value}</div>
                  <div className={`text-xs font-black uppercase tracking-tighter ${metric.color === 'text-green-400' ? 'text-green-600' : metric.color === 'text-blue-400' ? 'text-blue-600' : 'text-purple-600'}`}>{metric.change}</div>
                </div>
              ))}
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
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter leading-[1.3] py-4 overflow-visible">Sales Management Suite</h2>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto font-medium">Everything needed to optimize your conversion pipeline and boost performance.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {leadFeatures.map((feature, index) => (
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
            <div className="absolute top-0 right-0 w-96 h-96 bg-green-50 rounded-full blur-[100px] -mr-48 -mt-48 group-hover:bg-green-100 transition-colors"></div>

            <h2 className="relative z-10 text-5xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.3] py-4 overflow-visible">
              Ready to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-600 via-emerald-600 to-teal-600 py-2">
                Optimize My Sales?
              </span>
            </h2>

            <p className="relative z-10 text-xl text-slate-500 mb-12 font-medium max-w-2xl mx-auto">
              Transform your lead management and close more deals with our integrated sales engine.
            </p>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative z-10 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-black px-12 py-6 rounded-3xl transition-all shadow-2xl shadow-green-500/25 flex items-center gap-4 text-xl mx-auto"
            >
              <span className="material-symbols-outlined text-2xl font-black">rocket_launch</span>
              Boost My Sales Performance
            </motion.button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LeadsSales;