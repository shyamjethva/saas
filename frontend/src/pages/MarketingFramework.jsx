import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MarketingFramework = () => {
  const frameworkSteps = [
    {
      step: '1',
      title: 'Market Research',
      description: 'Deep dive into target audience, competitor landscape, and market opportunities to identify growth potential',
      icon: 'search',
      color: 'from-blue-700 to-sky-500'
    },
    {
      step: '2',
      title: 'Competitor Analysis',
      description: 'Analyze competitor strategies, strengths, weaknesses, and market positioning to find differentiation opportunities',
      icon: 'insights',
      color: 'from-purple-500 to-pink-500'
    },
    {
      step: '3',
      title: 'Funnel Planning',
      description: 'Design structured customer journey with clear stages from awareness to conversion and retention',
      icon: 'account_tree',
      color: 'from-green-500 to-emerald-500'
    },
    {
      step: '4',
      title: 'Creative Testing',
      description: 'Develop and test multiple creative variations to identify high-performing messaging and visuals',
      icon: 'palette',
      color: 'from-orange-500 to-red-500'
    },
    {
      step: '5',
      title: 'Optimization',
      description: 'Continuously refine campaigns based on performance data, user feedback, and market changes',
      icon: 'tune',
      color: 'from-indigo-500 to-purple-500'
    },
    {
      step: '6',
      title: 'Scaling',
      description: 'Expand successful campaigns strategically while maintaining quality and profitability metrics',
      icon: 'trending_up',
      color: 'from-teal-500 to-cyan-500'
    }
  ];

  const corePrinciples = [
    {
      title: 'Data-Driven Approach',
      description: 'Every decision backed by analytics and measurable insights',
      icon: 'bar_chart'
    },
    {
      title: 'Performance Focus',
      description: 'ROI-centered strategies that deliver tangible business results',
      icon: 'trending_up'
    },
    {
      title: 'Continuous Optimization',
      description: 'Regular testing and refinement for sustained growth',
      icon: 'autorenew'
    },
    {
      title: 'Scalable Systems',
      description: 'Frameworks that grow with your business needs',
      icon: 'account_tree'
    }
  ];

  return (
    <div className="min-h-screen premium-bg pt-20">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-blue-600">campaign</span>
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">MARKETING FRAMEWORK</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 tracking-tighter">
              Performance-Driven 
              <span className="block text-slate-500">
                Growth Systems
              </span>
            </h1>
            
            <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6 font-medium">
              We don't run ads.
            </p>
            <p className="text-2xl text-blue-600 max-w-3xl mx-auto leading-relaxed mb-6 font-bold">
              We build growth systems.
            </p>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-medium">
              Structured approach to sustainable business growth through systematic marketing execution
            </p>
          </motion.div>
        </div>
      </div>

      {/* Core Principles */}
      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16 tracking-tight">Core Principles</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {corePrinciples.map((principle, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-white/10  transition-all duration-300 backdrop-blur-sm text-center"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-700 via-blue-600 to-sky-500 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white">{principle.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">{principle.title}</h3>
                <p className="text-slate-500 text-sm font-medium">{principle.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Framework Process */}
      <div className="px-6 py-20 bg-blue-50/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-slate-900 text-center mb-16 tracking-tight">6-Step Framework</h2>
          
          {/* Connected Steps */}
          <div className="relative">
            {/* Horizontal Connecting Lines */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-green-500/50 via-blue-500/50 to-cyan-500/50 transform -translate-y-1/2 z-0 hidden md:block"></div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
              {frameworkSteps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Vertical Connector for mobile */}
                  {index < frameworkSteps.length - 1 && (
                    <div className="absolute top-full left-1/2 w-1 h-8 bg-gradient-to-b from-green-500/50 to-blue-500/50 transform -translate-x-1/2 md:hidden"></div>
                  )}
                  
                  <div className="glass-card rounded-2xl p-8 border border-white/10  transition-all duration-300 backdrop-blur-sm h-full">
                    <div className="flex items-start gap-6">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center flex-shrink-0`}>
                        <span className="text-white text-2xl font-bold">{step.step}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                        <p className="text-slate-600 font-medium">{step.description}</p>
                      </div>
                    </div>
                    
                    {/* Icon at bottom for visual connection */}
                    <div className="mt-6 flex justify-center">
                      <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                        <span className="material-symbols-outlined text-white">{step.icon}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Results Section */}
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-16 tracking-tight">Proven Results</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-5xl font-bold text-blue-600 mb-4">300%</div>
              <h3 className="text-xl font-bold text-slate-900 mb-2 tracking-tight">Average Lead Growth</h3>
              <p className="text-slate-500 font-medium">Across clients using our systematic approach</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-5xl font-bold text-blue-400 mb-4">85%</div>
              <h3 className="text-xl font-bold text-white mb-2">Client Retention</h3>
              <p className="text-slate-300">Long-term partnerships built on consistent results</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
            >
              <div className="text-5xl font-bold text-cyan-400 mb-4">6X</div>
              <h3 className="text-xl font-bold text-white mb-2">ROI Average</h3>
              <p className="text-slate-300">Return on investment for systematic marketing campaigns</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-20 bg-blue-50/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-12 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-6 tracking-tight">Ready to Build Your Growth System?</h2>
            <p className="text-xl text-slate-500 mb-8 max-w-2xl mx-auto font-medium">
              Let's create a structured marketing framework that delivers consistent, measurable results for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-2xl hover:shadow-blue-600/25 flex items-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">calendar_today</span>
                  Schedule Strategy Session
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full border border-white/20 transition-all flex items-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">workspace_premium</span>
                  View Our Services
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MarketingFramework;
