import React, { useState } from 'react';
import { motion } from 'framer-motion';

const MarketingHub = () => {
  const [activeView, setActiveView] = useState('hub');
  
  // Unique marketing concepts
  const marketingConcepts = [
    {
      id: 'orchestration',
      title: 'Growth Orchestration Engine',
      subtitle: 'Symphony of Strategic Channels',
      description: 'We conduct multi-channel marketing campaigns like a master conductor, ensuring every touchpoint harmonizes to create crescendo moments that drive enterprise transformation.',
      icon: 'music_note',
      color: 'from-emerald-500 to-teal-500',
      metrics: [
        { value: '400%', label: 'Revenue Multiplication' },
        { value: '89%', label: 'Cross-Channel Synergy' },
        { value: '3.2x', label: 'Customer Lifetime Value' }
      ],
      orchestra: [
        'Brand Voice as Conductor',
        'Demand Generation as Strings',
        'Content Marketing as Woodwinds', 
        'Paid Media as Brass Section',
        'Analytics as Rhythm Section'
      ]
    },
    {
      id: 'alchemy',
      title: 'Marketing Alchemy Lab',
      subtitle: 'Transforming Data into Gold',
      description: 'Our proprietary methodology transmutes raw customer data into precious business insights, crafting campaigns that generate measurable gold-standard returns on investment.',
      icon: 'science',
      color: 'from-amber-500 to-orange-500',
      metrics: [
        { value: '250+', label: 'Successful Transformations' },
        { value: '15:1', label: 'Average ROI Ratio' },
        { value: '$75M+', label: 'Value Created' }
      ],
      elements: [
        'Customer Data Refinement',
        'Insight Crystallization',
        'Campaign Transmutation',
        'Performance Alchemy',
        'ROI Optimization'
      ]
    },
    {
      id: 'nexus',
      title: 'Influence Nexus Platform',
      subtitle: 'Connecting Thought Leaders',
      description: 'We architect influence networks that position executives at the center of industry conversations, creating gravitational pull that attracts opportunities and accelerates business growth.',
      icon: 'hub',
      color: 'from-violet-500 to-purple-500',
      metrics: [
        { value: '1000+', label: 'Executive Connections' },
        { value: '150+', label: 'Speaking Engagements' },
        { value: '50+', label: 'Media Placements' }
      ],
      connections: [
        'Industry Expert Networks',
        'Media Relationship Matrix',
        'Conference Speaking Circuit',
        'Publication Partnership Web',
        'Influence Amplification Loops'
      ]
    }
  ];

  const campaignShowcase = [
    {
      name: 'Quantum Leap Campaign',
      industry: 'Financial Services',
      result: 'Transformed market perception from traditional bank to fintech innovator',
      impact: '300% increase in enterprise client acquisition',
      visual: 'quantum'
    },
    {
      name: 'Digital Renaissance Initiative', 
      industry: 'Manufacturing',
      result: 'Repositioned 150-year-old company as Industry 4.0 leader',
      impact: '45% premium pricing acceptance achieved',
      visual: 'brush'
    },
    {
      name: 'Cloud Ascension Program',
      industry: 'Technology',
      result: 'Established thought leadership in emerging cloud technologies',
      impact: '$200M+ in pipeline generated through executive influence',
      visual: 'rocket'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-900 to-slate-900 relative overflow-hidden">
      {/* Dynamic Background */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-500/5 rounded-full blur-3xl"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Innovation Badge */}
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-cyan-400 animate-bounce">auto_fix_high</span>
              <span className="text-cyan-400 font-bold tracking-wider uppercase text-sm">Marketing Innovation Lab</span>
            </div>
            
            {/* Main Heading */}
            <h1 className="text-7xl md:text-9xl font-black text-white mb-8 leading-none">
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-emerald-400 to-amber-400">
                Beyond
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-violet-400 to-pink-400">
                Traditional
              </span>
            </h1>
            
            {/* Subtitle */}
            <div className="text-3xl md:text-4xl font-bold text-white mb-12 max-w-4xl mx-auto">
              We don't do marketing. 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-cyan-400 to-violet-400">
                We engineer business transformation.
              </span>
            </div>
            
            {/* Philosophy Statement */}
            <p className="text-2xl text-slate-300 max-w-5xl mx-auto leading-relaxed mb-16 font-light">
              Through revolutionary approaches that blend artistry with precision engineering, 
              we create marketing ecosystems that don't just attract customers—they architect entire 
              business ecosystems where opportunities multiply organically.
            </p>
            
            {/* Navigation Pills */}
            <div className="flex flex-wrap justify-center gap-4 mb-20">
              {[
                { id: 'hub', label: 'Innovation Hub', icon: 'hub' },
                { id: 'concepts', label: 'Revolutionary Concepts', icon: 'psychology_alt' },
                { id: 'showcase', label: 'Transformation Showcase', icon: 'theaters' }
              ].map((nav) => (
                <button
                  key={nav.id}
                  onClick={() => setActiveView(nav.id)}
                  className={`px-8 py-4 rounded-2xl font-bold transition-all duration-300 flex items-center gap-3 ${
                    activeView === nav.id
                      ? 'bg-gradient-to-r from-cyan-500 to-emerald-500 text-white shadow-2xl scale-105'
                      : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="material-symbols-outlined">{nav.icon}</span>
                  {nav.label}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          
          {/* Revolutionary Concepts View */}
          {activeView === 'concepts' && (
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-16"
            >
              {marketingConcepts.map((concept, index) => (
                <motion.div
                  key={concept.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card rounded-3xl overflow-hidden border border-white/10  transition-all duration-500"
                >
                  <div className="p-12">
                    <div className="flex flex-col lg:flex-row gap-12 items-center">
                      {/* Visual Concept Representation */}
                      <div className="lg:w-1/3 flex justify-center">
                        <div className={`w-64 h-64 rounded-3xl bg-gradient-to-br ${concept.color} flex items-center justify-center relative overflow-hidden`}>
                          <span className="material-symbols-outlined text-white text-7xl z-10">{concept.icon}</span>
                          <div className="absolute inset-0 bg-black/10"></div>
                        </div>
                      </div>
                      
                      {/* Content */}
                      <div className="lg:w-2/3">
                        <div className="mb-8">
                          <h2 className="text-4xl font-black text-white mb-3">{concept.title}</h2>
                          <p className="text-cyan-400 text-xl font-bold mb-6">{concept.subtitle}</p>
                          <p className="text-slate-300 text-lg leading-relaxed mb-8">{concept.description}</p>
                        </div>
                        
                        {/* Unique Elements Display */}
                        <div className="grid md:grid-cols-2 gap-6 mb-8">
                          {(concept.orchestra || concept.elements || concept.connections)?.slice(0, 4).map((element, idx) => (
                            <div key={idx} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                              <span className="material-symbols-outlined text-cyan-400">check_circle</span>
                              <span className="text-slate-200">{element}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Impact Metrics */}
                        <div className="grid grid-cols-3 gap-6">
                          {concept.metrics.map((metric, idx) => (
                            <div key={idx} className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10">
                              <div className="text-3xl font-black text-cyan-400 mb-2">{metric.value}</div>
                              <div className="text-slate-300 font-medium">{metric.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Transformation Showcase View */}
          {activeView === 'showcase' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <h2 className="text-5xl font-black text-white text-center mb-16">
                Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-pink-400">Transformation</span> Gallery
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {campaignShowcase.map((campaign, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -15 }}
                    className="glass-card rounded-2xl overflow-hidden border border-white/10  transition-all duration-500"
                  >
                    <div className="h-48 bg-gradient-to-br from-amber-500/20 to-pink-500/20 flex items-center justify-center">
                      <span className="material-symbols-outlined text-6xl text-amber-400">{campaign.visual}</span>
                    </div>
                    <div className="p-8">
                      <span className="inline-block px-3 py-1 bg-amber-500/20 text-amber-400 text-sm rounded-full mb-4">
                        {campaign.industry}
                      </span>
                      <h3 className="text-2xl font-bold text-white mb-4">{campaign.name}</h3>
                      <p className="text-slate-300 mb-6 leading-relaxed">{campaign.result}</p>
                      <div className="p-4 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-xl border border-green-500/30">
                        <div className="text-2xl font-black text-green-400 mb-1">Impact</div>
                        <div className="text-white font-medium">{campaign.impact}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Innovation Hub View (Default) */}
          {activeView === 'hub' && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center"
            >
              <h2 className="text-5xl font-black text-white mb-16">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Innovation Engine</span>
              </h2>
              
              <div className="grid md:grid-cols-4 gap-8 mb-20">
                {[
                  { icon: 'psychology', title: 'Behavioral Science', desc: 'Understanding decision psychology' },
                  { icon: 'data_exploration', title: 'Data Orchestration', desc: 'Harmonizing customer insights' },
                  { icon: 'architecture', title: 'Ecosystem Design', desc: 'Architecting opportunity networks' },
                  { icon: 'auto_graph', title: 'Growth Physics', desc: 'Engineering scalable momentum' }
                ].map((pillar, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="glass-card rounded-2xl p-8 border border-white/10  transition-all duration-300"
                  >
                    <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-cyan-500 to-emerald-500 flex items-center justify-center mx-auto mb-6">
                      <span className="material-symbols-outlined text-white text-3xl">{pillar.icon}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                    <p className="text-slate-300">{pillar.desc}</p>
                  </motion.div>
                ))}
              </div>
              
              {/* CTA Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="glass-card rounded-3xl p-16 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 max-w-4xl mx-auto"
              >
                <h3 className="text-4xl font-black text-white mb-6">
                  Ready to Engineer Your Next Transformation?
                </h3>
                <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
                  Join visionary enterprises who've transcended traditional marketing to architect business ecosystems
                </p>
                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <button className="bg-gradient-to-r from-cyan-500 to-emerald-500 hover:from-cyan-600 hover:to-emerald-600 text-white font-bold px-10 py-5 rounded-2xl transition-all shadow-2xl hover:shadow-cyan-500/25 flex items-center gap-3 text-lg">
                    <span className="material-symbols-outlined">rocket_launch</span>
                    Initiate Transformation
                  </button>
                  <button className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-5 rounded-2xl border border-white/20 transition-all flex items-center gap-3 text-lg">
                    <span className="material-symbols-outlined">lab_profile</span>
                    Explore Methodology
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MarketingHub;