import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AICenter = () => {
  const aiFeatures = [
    {
      title: 'AI Revenue Prediction',
      description: 'Forecast future revenue streams with machine learning algorithms that analyze historical data and market trends.',
      icon: 'trending_up',
      color: 'bg-slate-900'
    },
    {
      title: 'Smart Lead Scoring',
      description: 'Automatically qualify and rank leads based on behavior patterns, engagement scores, and conversion likelihood.',
      icon: 'stars',
      color: 'bg-slate-800'
    },
    {
      title: 'Behavior Tracking',
      description: 'Monitor customer interactions across all touchpoints to understand preferences and optimize engagement strategies.',
      icon: 'track_changes',
      color: 'bg-slate-700'
    },
    {
      title: 'Performance Alerts',
      description: 'Real-time notifications for critical metrics, anomaly detection, and automated recommendations for optimization.',
      icon: 'notifications_active',
      color: 'bg-slate-600'
    },
    {
      title: 'Automated Reports',
      description: 'Generate comprehensive business intelligence reports automatically with customizable dashboards and insights.',
      icon: 'auto_graph',
      color: 'bg-slate-500'
    }
  ];

  const workflowSteps = [
    {
      step: '1',
      title: 'Data Collection',
      description: 'Gather structured data from CRM, marketing platforms, and business operations'
    },
    {
      step: '2',
      title: 'Pattern Analysis',
      description: 'AI algorithms identify trends, correlations, and behavioral patterns in your data'
    },
    {
      step: '3',
      title: 'Intelligent Insights',
      description: 'Generate actionable recommendations and predictions based on analyzed patterns'
    },
    {
      step: '4',
      title: 'Automated Actions',
      description: 'Execute predefined workflows and optimizations without manual intervention'
    },
    {
      step: '5',
      title: 'Continuous Learning',
      description: 'System improves over time by learning from results and adapting to new patterns'
    },
    {
      step: '6',
      title: 'Performance Monitoring',
      description: 'Track effectiveness of AI-driven actions and refine strategies continuously'
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 pb-2">
              AI-Powered
              <span className="block text-slate-400">
                Business Intelligence
              </span>
            </h1>

            <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6">
              Your CRM learns from your data.
            </p>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12">
              Transform raw business data into intelligent insights and automated actions
            </p>
          </motion.div>
        </div>
      </div>

      {/* AI Features Grid */}
      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">AI Capabilities</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 text-center group"
              >
                <div className={`w-20 h-20 rounded-2xl ${feature.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="material-symbols-outlined text-white text-3xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                <p className="text-slate-500">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Workflow Process */}
      <div className="px-6 py-20 bg-slate-50 border-y border-slate-200">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">How Our AI Works</h2>

          {/* Connected Steps */}
          <div className="relative">
            {/* Connecting Lines */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 transform -translate-x-1/2 z-0"></div>

            <div className="space-y-12 relative z-10">
              {workflowSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Step Number Circle */}
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-full bg-slate-900 flex items-center justify-center text-white font-bold text-xl shadow-2xl">
                      {step.step}
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`mx-8 flex-1 ${index % 2 === 0 ? 'text-left' : 'text-right'}`}>
                    <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm max-w-md">
                      <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                      <p className="text-slate-500">{step.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16">Business Impact</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="text-5xl font-bold text-slate-900 mb-4">70%</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Faster Decision Making</h3>
              <p className="text-slate-500">AI-driven insights enable rapid, data-backed decisions</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="text-5xl font-bold text-slate-600 mb-4">45%</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Cost Reduction</h3>
              <p className="text-slate-500">Automated processes reduce manual overhead significantly</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all"
            >
              <div className="text-5xl font-bold text-slate-400 mb-4">3X</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">ROI Improvement</h3>
              <p className="text-slate-500">Intelligent targeting and optimization boost returns</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-20 bg-slate-50 border-t border-slate-200">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-12 border border-slate-200 shadow-sm"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Experience AI-Powered Business Intelligence</h2>
            <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto">
              See how artificial intelligence can transform your business operations and decision-making
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/book-demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-900 hover:bg-black text-white font-bold px-8 py-4 rounded-full transition-all shadow-2xl hover:shadow-slate-900/25 flex items-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">smart_toy</span>
                  Book AI Demo
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white border-2 border-slate-200 hover:border-slate-900 text-slate-900 font-bold px-8 py-4 rounded-full transition-all flex items-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">contact_support</span>
                  Talk to AI Experts
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AICenter;
