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
      color: 'from-slate-900 to-slate-700',
      metrics: ['300+ Markets Analyzed', '95% Accuracy Rate']
    },
    {
      step: 2,
      title: 'Competitor Analysis',
      description: 'Comprehensive evaluation of competitor strategies, pricing models, and market positioning to find competitive advantages.',
      icon: 'insights',
      color: 'from-slate-800 to-slate-600',
      metrics: ['50+ Competitors', '40% Edge Found']
    },
    {
      step: 3,
      title: 'Funnel Planning',
      description: 'Strategic design of customer journey maps with optimized touchpoints and conversion pathways for maximum ROI.',
      icon: 'account_tree',
      color: 'from-slate-700 to-slate-500',
      metrics: ['6-Stage Funnels', '25% Higher Conversions']
    },
    {
      step: 4,
      title: 'Creative Testing',
      description: 'A/B testing of ad creatives, copy variations, and landing pages to identify high-performing assets and messaging.',
      icon: 'experiment',
      color: 'from-slate-900 to-black',
      metrics: ['200+ Variations', '3X Better Results']
    },
    {
      step: 5,
      title: 'Performance Optimization',
      description: 'Continuous monitoring and optimization of campaign performance using real-time data and predictive analytics.',
      icon: 'monitoring',
      color: 'from-slate-800 to-slate-700',
      metrics: ['Real-time Analytics', '40% Cost Reduction']
    },
    {
      step: 6,
      title: 'Scaling Strategy',
      description: 'Systematic expansion of successful campaigns across channels with automated scaling algorithms and budget optimization.',
      icon: 'trending_up',
      color: 'from-slate-700 to-slate-600',
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
    <div className="min-h-screen premium-bg pt-20">
      {/* Hero Section */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 heading-underline active">
              Structured
              <span className="block text-slate-500 pb-2">
                Marketing Growth
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Systematic approach to scale your business with data-driven marketing strategies
            </p>
          </motion.div>
        </div>
      </div>

      {/* Funnel Visualization */}
      <div className="px-6 py-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white rounded-[3rem] p-10 border border-slate-200 shadow-2xl mb-16"
          >
            <h2 className="text-3xl font-black text-slate-900 text-center mb-12 heading-underline active inline-block">Marketing Funnel Visualization</h2>

            <div className="relative">
              {/* Funnel Shape */}
              <div className="relative mx-auto w-full max-w-2xl">
                {/* Funnel Container */}
                <div className="relative h-96">
                  {/* Funnel Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between">
                    {/* Wide Top */}
                    <div className="h-16 bg-gradient-to-r from-slate-900/10 to-slate-950/10 rounded-t-2xl border-t-2 border-l-2 border-r-2 border-slate-900/20"></div>

                    {/* Medium Middle */}
                    <div className="h-16 bg-gradient-to-r from-slate-700/10 to-slate-800/10 border-l-2 border-r-2 border-slate-700/20 mx-8"></div>

                    {/* Narrow Bottom */}
                    <div className="h-16 bg-gradient-to-r from-slate-950/10 to-slate-900/10 rounded-b-2xl border-b-2 border-l-2 border-r-2 border-slate-900/20 mx-16"></div>
                  </div>

                  {/* Funnel Labels */}
                  <div className="absolute inset-0 flex flex-col justify-between text-center py-4">
                    <div>
                      <div className="text-slate-900 font-bold text-lg">Awareness</div>
                      <div className="text-slate-400 text-sm">Mass Reach</div>
                    </div>
                    <div>
                      <div className="text-slate-500 font-bold text-lg">Consideration</div>
                      <div className="text-slate-500 text-sm">Engagement</div>
                    </div>
                    <div>
                      <div className="text-slate-900 font-bold text-lg">Conversion</div>
                      <div className="text-slate-500 text-sm">Purchase</div>
                    </div>
                  </div>
                </div>

                {/* Metrics Display */}
                <div className="grid grid-cols-3 gap-6 mt-12">
                  <div className="text-center">
                    <div className="text-3xl font-black text-slate-900">100%</div>
                    <div className="text-slate-500 font-bold text-xs uppercase tracking-widest">Traffic</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-slate-500">25%</div>
                    <div className="text-slate-500 font-bold text-xs uppercase tracking-widest">Qualified Leads</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-slate-900">5%</div>
                    <div className="text-slate-500 font-bold text-xs uppercase tracking-widest">Customers</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Vertical Timeline */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 text-center mb-20 heading-underline active inline-block">Our 6-Step Growth Framework</h2>

          <div className="relative">
            {/* Animated Progress Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-slate-200 via-slate-900 to-slate-200 rounded-full"></div>

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
                  <div className={`absolute left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-full border-4 border-white z-10 flex items-center justify-center shadow-lg
                    ${index % 2 === 0 ? 'bg-slate-400 text-slate-900' : 'bg-slate-200 text-slate-700'}`}
                  >
                    <span className="font-black text-sm">{step.step}</span>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'pr-16' : 'pl-16'}`}>
                    <motion.div
                      whileHover={{
                        y: -10,
                        borderColor: 'rgba(37,99,235,0.2)',
                        boxShadow: '0 32px 64px -16px rgba(0,0,0,0.1)'
                      }}
                      className="bg-white rounded-[2.5rem] p-10 border border-slate-200 transition-all duration-500 shadow-xl relative group overflow-hidden"
                    >
                      {/* Hover Gradient Overlay */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.05] transition-opacity duration-700 pointer-events-none bg-gradient-to-br ${step.color}`}></div>

                        <div className={`w-16 h-16 rounded-xl bg-slate-900 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-500 group-hover:shadow-[0_0_20px_rgba(15,23,42,0.3)]`}>
                          <span className="material-symbols-outlined text-white text-2xl">{step.icon}</span>
                        </div>
                        <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-slate-500 transition-colors duration-500">{step.title}</h3>
                      <p className="text-slate-600 mb-6 leading-relaxed flex-1 font-medium">{step.description}</p>

                       <div className="flex flex-wrap gap-3">
                        {step.metrics.map((metric, idx) => (
                          <span key={idx} className={`px-4 py-1.5 bg-slate-50 rounded-full text-[10px] text-slate-900 border border-slate-100 group-hover:bg-slate-100 group-hover:border-slate-200 transition-all duration-500 tracking-widest font-black uppercase`}>
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
       {/* Case Results */}
      <div className="px-6 py-20 bg-slate-50/50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 heading-underline active inline-block">Proven Results</h2>
            <p className="text-lg text-slate-600 font-medium">Real outcomes from our structured marketing framework</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {caseResults.map((caseStudy, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-[2.5rem] p-10 border border-slate-200 shadow-xl"
              >
                 <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-slate-100 flex items-center justify-center text-slate-900 border border-slate-200">
                    <span className="material-symbols-outlined text-2xl font-black">business</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900">{caseStudy.client}</h3>
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">{caseStudy.industry}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {caseStudy.results.map((result, idx) => (
                    <div key={idx} className="flex justify-between items-center p-4 bg-slate-50 rounded-2xl border border-slate-100">
                      <span className="text-slate-600 font-medium">{result.metric}</span>
                      <div className="text-right">
                        <div className="text-slate-900 font-black text-lg">{result.value}</div>
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

                 <div className="p-6 bg-slate-50 rounded-2xl border-l-4 border-slate-900">
                  <p className="text-slate-700 italic font-medium">"{caseStudy.testimonial}"</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-12">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-[4rem] p-16 md:p-24 border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] relative overflow-hidden"
          >
            <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter">
              Ready to Implement Your
              <span className="block text-slate-500 pb-2">
                Growth Framework?
              </span>
            </h2>

            <p className="text-xl md:text-2xl text-slate-600 mb-12 font-bold">
              Start your structured marketing journey with our proven 6-step framework
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                 <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-900 hover:bg-black text-white font-black px-12 py-5 rounded-full transition-all shadow-2xl shadow-slate-900/25 flex items-center gap-3 text-lg uppercase tracking-widest"
                >
                  <span className="material-symbols-outlined">rocket_launch</span>
                  Book Strategy Session
                </motion.button>
              </Link>
              <Link to="/crm-pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-slate-50 text-slate-900 font-black px-12 py-5 rounded-full border-2 border-slate-900 transition-all flex items-center gap-3 text-lg uppercase tracking-widest shadow-xl"
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
