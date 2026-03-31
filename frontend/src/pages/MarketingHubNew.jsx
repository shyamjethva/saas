import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MarketingHub = () => {
  const [activeSection, setActiveSection] = useState('strategy');
  
  // Premium marketing services with unique approach
  const premiumServices = [
    {
      id: 'brand',
      title: 'Strategic Brand Architecture',
      subtitle: 'Building Market-Dominant Brands',
      description: 'We architect brands that command premium positioning and drive enterprise value creation through systematic brand equity development.',
      icon: 'account_tree',
      color: 'from-purple-600 to-indigo-600',
      metrics: [
        { label: 'Brand Valuation Increase', value: '+340%' },
        { label: 'Market Share Growth', value: '+180%' },
        { label: 'Premium Pricing Power', value: '+65%' }
      ],
      approach: [
        'Executive stakeholder alignment workshops',
        'Competitive positioning matrix analysis',
        'Brand architecture framework development',
        'Premium messaging hierarchy creation',
        'Multi-touchpoint experience orchestration'
      ]
    },
    {
      id: 'demand',
      title: 'Enterprise Demand Orchestration',
      subtitle: 'Precision-Engineered Growth Engines',
      description: 'Sophisticated demand generation ecosystems that convert complex enterprise buying committees into predictable revenue streams.',
      icon: 'hub',
      color: 'from-cyan-600 to-blue-600',
      metrics: [
        { label: 'Qualified Opportunities', value: '500+' },
        { label: 'Conversion Rate', value: '72%' },
        { label: 'Revenue Pipeline', value: '$150M+' }
      ],
      approach: [
        'Account-based ecosystem design',
        'Executive engagement orchestration',
        'Multi-channel attribution modeling',
        'Sales-marketing alignment frameworks',
        'Predictive pipeline analytics'
      ]
    },
    {
      id: 'thought',
      title: 'Executive Thought Leadership Platform',
      subtitle: 'Amplifying C-Suite Influence',
      description: 'Transforming corporate executives into recognized industry visionaries through strategic content amplification and media positioning.',
      icon: 'record_voice_over',
      color: 'from-pink-600 to-rose-600',
      metrics: [
        { label: 'Executive Publications', value: '100+' },
        { label: 'Speaking Engagements', value: '50+' },
        { label: 'Media Mentions', value: '200+' }
      ],
      approach: [
        'Executive narrative development',
        'Industry publication partnerships',
        'Conference keynote positioning',
        'Media training and spokesperson coaching',
        'Influence measurement frameworks'
      ]
    }
  ];
  
  const successMetrics = [
    { client: 'Global Financial Institution', result: '300% increase in enterprise deal velocity', metric: 'Deal Acceleration' },
    { client: 'Fortune 50 Technology Leader', result: '$200M+ in pipeline generated', metric: 'Revenue Impact' },
    { client: 'Manufacturing Conglomerate', result: '75% improvement in brand perception scores', metric: 'Brand Equity' }
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
      </div>
      
      {/* Hero Section */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Premium Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-purple-400 animate-pulse">auto_awesome</span>
              <span className="text-purple-400 font-bold tracking-wider uppercase text-sm">Enterprise Marketing Innovation</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
              Redefine
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400">
                Market Dominance
              </span>
            </h1>
            
            {/* Subheading */}
            <p className="text-2xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              We architect marketing ecosystems that transform enterprise brands into market leaders, 
              generate predictable revenue streams, and establish executives as industry visionaries.
            </p>
            
            {/* Key Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
              {[
                { number: '$500M+', label: 'Campaign Revenue Generated' },
                { number: 'Fortune 500', label: 'Enterprise Clients Served' },
                { number: '98%', label: 'Client Retention Rate' }
              ].map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                  className="glass-card rounded-2xl p-6 border border-white/10  transition-all duration-500"
                >
                  <div className="text-4xl font-bold text-purple-400 mb-2">{stat.number}</div>
                  <div className="text-slate-300 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Services Navigation */}
      <div className="relative z-10 px-6 pb-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {[
              { id: 'strategy', label: 'Strategic Approach', icon: 'strategy' },
              { id: 'services', label: 'Premium Services', icon: 'workspace_premium' },
              { id: 'results', label: 'Proven Results', icon: 'monitoring' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSection(tab.id)}
                className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center gap-3 ${
                  activeSection === tab.id
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-2xl scale-105'
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                }`}
              >
                <span className="material-symbols-outlined">{tab.icon}</span>
                {tab.label}
              </button>
            ))}
          </div>
          
          {/* Services Showcase */}
          {activeSection === 'services' && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-12"
            >
              {premiumServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card rounded-2xl overflow-hidden border border-white/10  transition-all duration-500"
                >
                  <div className="p-8 md:p-12">
                    <div className="flex flex-col lg:flex-row gap-8 items-start">
                      {/* Left Side - Content */}
                      <div className="flex-1">
                        <div className="flex items-center gap-4 mb-6">
                          <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center`}>
                            <span className="material-symbols-outlined text-white text-2xl">{service.icon}</span>
                          </div>
                          <div>
                            <h3 className="text-3xl font-bold text-white mb-2">{service.title}</h3>
                            <p className="text-purple-400 font-semibold">{service.subtitle}</p>
                          </div>
                        </div>
                        
                        <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-3xl">
                          {service.description}
                        </p>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                          {service.approach.slice(0, 3).map((approach, idx) => (
                            <div key={idx} className="flex items-start gap-3">
                              <span className="material-symbols-outlined text-purple-400 mt-1">chevron_right</span>
                              <span className="text-slate-300">{approach}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      {/* Right Side - Metrics */}
                      <div className="lg:w-80">
                        <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-6 border border-white/10">
                          <h4 className="text-white font-bold text-lg mb-6 text-center">Impact Metrics</h4>
                          <div className="space-y-4">
                            {service.metrics.map((metric, idx) => (
                              <div key={idx} className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                                <div className="text-2xl font-bold text-purple-400 mb-1">{metric.value}</div>
                                <div className="text-slate-300 text-sm">{metric.label}</div>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
          
          {/* Results Showcase */}
          {activeSection === 'results' && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-5xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white text-center mb-16">Enterprise Success Stories</h2>
              <div className="grid md:grid-cols-3 gap-8">
                {successMetrics.map((result, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    className="glass-card rounded-2xl p-8 border border-white/10  transition-all duration-500 text-center"
                  >
                    <div className="text-5xl font-bold text-pink-400 mb-4">"</div>
                    <p className="text-white text-lg mb-6 leading-relaxed">{result.result}</p>
                    <div className="text-purple-400 font-bold mb-2">{result.metric}</div>
                    <div className="text-slate-400 text-sm">{result.client}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Strategy Overview */}
          {activeSection === 'strategy' && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="text-4xl font-bold text-white text-center mb-16">Our Strategic Framework</h2>
              <div className="grid md:grid-cols-4 gap-6">
                {[
                  { step: 'Discover', desc: 'Deep market analysis and stakeholder alignment', icon: 'search' },
                  { step: 'Design', desc: 'Architecture development and ecosystem mapping', icon: 'design_services' },
                  { step: 'Deploy', desc: 'Execution across all touchpoints and channels', icon: 'rocket_launch' },
                  { step: 'Dominate', desc: 'Continuous optimization and market leadership', icon: 'emoji_events' }
                ].map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="glass-card rounded-2xl p-6 border border-white/10  transition-all duration-300 text-center"
                  >
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center mx-auto mb-4">
                      <span className="material-symbols-outlined text-white text-2xl">{phase.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{phase.step}</h3>
                    <p className="text-slate-300 text-sm">{phase.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
      
      {/* CTA Section */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-12 border border-white/10 bg-gradient-to-br from-white/5 to-white/10"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Redefine Your Market Position?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Schedule a strategic consultation with our enterprise marketing architects
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-bold px-8 py-4 rounded-2xl transition-all shadow-2xl hover:shadow-purple-500/25 flex items-center gap-3">
                <span className="material-symbols-outlined">calendar_today</span>
                Schedule Consultation
              </button>
              <button className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-2xl border border-white/20 transition-all flex items-center gap-3">
                <span className="material-symbols-outlined">download</span>
                Download Framework
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MarketingHub;