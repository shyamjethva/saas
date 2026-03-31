import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MarketingFramework = () => {
  const growthSteps = [
    {
      step: 1,
      title: 'Market Research',
      description: 'Deep analysis of target audience, market trends, and customer behavior patterns to identify optimal opportunities.',
      icon: 'search',
      color: 'from-blue-500 to-cyan-500',
      metrics: ['300+ Markets Analyzed', '95% Accuracy Rate']
    },
    {
      step: 2,
      title: 'Competitor Analysis',
      description: 'Comprehensive evaluation of competitor strategies, pricing models, and market positioning to find competitive advantages.',
      icon: 'insights',
      color: 'from-purple-500 to-pink-500',
      metrics: ['50+ Competitors', '40% Edge Found']
    },
    {
      step: 3,
      title: 'Funnel Planning',
      description: 'Strategic design of customer journey maps with optimized touchpoints and conversion pathways for maximum ROI.',
      icon: 'account_tree',
      color: 'from-green-500 to-emerald-500',
      metrics: ['6-Stage Funnels', '25% Higher Conversions']
    },
    {
      step: 4,
      title: 'Creative Testing',
      description: 'A/B testing of ad creatives, copy variations, and landing pages to identify high-performing assets and messaging.',
      icon: 'experiment',
      color: 'from-orange-500 to-red-500',
      metrics: ['200+ Variations', '3X Better Results']
    },
    {
      step: 5,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization of campaign performance using real-time data and predictive analytics.',
      icon: 'monitoring',
      color: 'from-indigo-500 to-purple-500',
      metrics: ['Real-time Analytics', '40% Cost Reduction']
    },
    {
      step: 6,
      title: 'Scaling Strategy',
      description: 'Systematic expansion of successful campaigns across channels with automated scaling algorithms and budget optimization.',
      icon: 'trending_up',
      color: 'from-teal-500 to-cyan-500',
      metrics: ['5X Growth Potential', 'Automated Scaling']
    }
  ];

  const caseResults = [
    {
      client: 'TechCorp Solutions',
      industry: 'SaaS',
      results: [
        { metric: 'Revenue Growth', value: '340%', period: '6 months' },
        { metric: 'Lead Conversion', value: '67%', improvement: '+23%' },
        { metric: 'Customer Acquisition', value: '180%', cost: '-40%' }
      ],
      testimonial: 'Error Infotech transformed our marketing approach completely. Their systematic framework delivered unprecedented results.'
    },
    {
      client: 'RetailPro India',
      industry: 'E-commerce',
      results: [
        { metric: 'Sales Increase', value: '220%', period: '3 months' },
        { metric: 'ROAS', value: '4.8X', improvement: '+180%' },
        { metric: 'Customer Lifetime', value: '140%', retention: '+35%' }
      ],
      testimonial: 'The structured approach helped us scale from local to national presence with data-driven precision.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900/20 pt-20">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-blue-400">account_tree</span>
              <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">GROWTH FRAMEWORK</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Structured
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                Marketing Growth
              </span>
            </h1>

            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
              Systematic approach to scale your business with data-driven marketing strategies
            </p>
          </motion.div>
        </div>
      </div>

      {/* Funnel Visualization */}
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-white/10 backdrop-blur-sm mb-16"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Marketing Funnel Visualization</h2>

            <div className="relative">
              {/* Funnel Shape */}
              <div className="relative mx-auto w-full max-w-2xl">
                {/* Funnel Container */}
                <div className="relative h-96">
                  {/* Funnel Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {/* Wide Top */}
                    <div className="h-16 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-t-2xl border-t-2 border-l-2 border-r-2 border-blue-500/30"></div>

                    {/* Medium Middle */}
                    <div className="h-16 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border-l-2 border-r-2 border-purple-500/30 mx-8"></div>

                    {/* Narrow Bottom */}
                    <div className="h-16 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-b-2xl border-b-2 border-l-2 border-r-2 border-green-500/30 mx-16"></div>
                  </div>

                  {/* Funnel Labels */}
                  <div className="absolute inset-0 flex flex-col justify-between text-center py-4">
                    <div>
                      <div className="text-blue-400 font-bold text-lg">Awareness</div>
                      <div className="text-slate-400 text-sm">Mass Reach</div>
                    </div>
                    <div>
                      <div className="text-purple-400 font-bold text-lg">Consideration</div>
                      <div className="text-slate-400 text-sm">Engagement</div>
                    </div>
                    <div>
                      <div className="text-green-400 font-bold text-lg">Conversion</div>
                      <div className="text-slate-400 text-sm">Purchase</div>
                    </div>
                  </div>
                </div>

                {/* Metrics Display */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-blue-400">100%</div>
                    <div className="text-slate-300">Traffic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-purple-400">25%</div>
                    <div className="text-slate-300">Qualified Leads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-400">5%</div>
                    <div className="text-slate-300">Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-white text-center mb-16">Our 6-Step Growth Framework</h2>

          <div className="relative">
            {/* Animated Progress Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-green-500 rounded-full"></div>

            <div className="space-y-16">
              {growthSteps.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className={`relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 border-4 border-gray-900 z-10 flex items-center justify-center">
                    <span className="text-white font-bold text-sm">{step.step}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                    <motion.div
                      whileHover={{
                        y: -10,
                        borderColor: 'rgba(37,99,235,0.2)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                      }}
                      className="glass-card rounded-2xl p-8 border border-white/10 transition-all duration-500 backdrop-blur-sm relative group overflow-hidden"
                    >
                      {/* Hover Gradient Overlay */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none bg-gradient-to-br ${step.color}`}></div>

                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]`}>
                        <span className="material-symbols-outlined text-white text-2xl">{step.icon}</span>
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-400 transition-all duration-500">{step.title}</h3>
                      <p className="text-slate-300 mb-6 leading-relaxed flex-1">{step.description}</p>

                      {/* Metrics */}
                      <div className="flex flex-wrap gap-3">
                        {step.metrics.map((metric, idx) => (
                          <span key={idx} className={`px-3 py-1 bg-white/5 rounded-full text-sm text-cyan-400 border border-white/10 group-hover:bg-white/10 group-hover:border-cyan-500/30 transition-all duration-500 tracking-wide font-bold`}>
                            {metric}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Case Results */}
      <div className="px-6 py-20 bg-gradient-to-r from-slate-800/50 to-blue-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Proven Results</h2>
            <p className="text-xl text-slate-300">Real outcomes from our structured marketing framework</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseResults.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <span className="material-symbols-outlined text-white">business</span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white">{caseStudy.client}</h3>
                    <p className="text-slate-400">{caseStudy.industry}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                      <span className="text-slate-300">{result.metric}</span>
                      <div className="text-right">
                        <div className="text-white font-bold">{result.value}</div>
                        {result.improvement && (
                          <div className="text-green-400 text-sm">↑ {result.improvement}</div>
                        )}
                        {result.cost && (
                          <div className="text-red-400 text-sm">↓ {result.cost}</div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="p-4 bg-white/5 rounded-lg border-l-4 border-blue-500">
                  <p className="text-slate-300 italic">"{caseStudy.testimonial}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-16 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Implement Your
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                Growth Framework?
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-12">
              Start your structured marketing journey with our proven 6-step framework
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/book-demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold px-10 py-5 rounded-full transition-all shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">rocket_launch</span>
                  Book Strategy Session
                </motion.button>
              </Link>
              <Link to="/crm-pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-5 rounded-full border border-white/20 transition-all flex items-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">workspace_premium</span>
                  View Pricing Plans
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