import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const ModernAICenter = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedAgent, setSelectedAgent] = useState(null);

  const categories = [
    { id: 'all', name: 'All Agents', icon: 'auto_awesome' },
    { id: 'sales', name: 'Sales & Lead', icon: 'trending_up' },
    { id: 'development', name: 'Development', icon: 'code' },
    { id: 'content', name: 'Content & Media', icon: 'palette' },
    { id: 'marketing', name: 'Marketing', icon: 'campaign' },
    { id: 'strategy', name: 'Strategy', icon: 'business_center' }
  ];

  const aiAgents = [
    {
      id: 1,
      title: 'Auto Lead Generation Agent',
      category: 'sales',
      icon: 'target',
      color: 'from-blue-600 to-cyan-500',
      description: 'Automatically find and qualify potential customers across multiple platforms',
      benefits: [
        'Sales team ka 70% manual kaam kam',
        'High quality targeted leads',
        'Daily auto lead flow'
      ],
      path: '/lead-generation-agent'
    },
    {
      id: 2,
      title: 'Auto Human Calling Agent (AI Voice Caller)',
      category: 'sales',
      icon: 'keyboard_voice',
      color: 'from-purple-600 to-pink-600',
      description: 'AI voice calling system for customer engagement and appointment booking',
      benefits: [
        '24x7 calling system',
        'Sales conversion increase',
        'No need for big calling team'
      ],
      path: '/ai-voice-caller'
    },
    {
      id: 3,
      title: 'Auto Chatbot Agent',
      category: 'sales',
      icon: 'smart_toy',
      color: 'from-emerald-600 to-teal-600',
      description: 'Intelligent chatbot for instant customer response across platforms',
      benefits: [
        'Instant response',
        'Customer satisfaction high',
        'No delay in communication'
      ]
    },
    {
      id: 4,
      title: 'Auto Frontend / Backend Developing Agent',
      category: 'development',
      icon: 'terminal',
      color: 'from-orange-600 to-red-600',
      description: 'AI-powered development agent for rapid application building',
      benefits: [
        'Fast development',
        'Low development cost',
        'Auto updates & maintenance'
      ]
    },
    {
      id: 5,
      title: 'Auto Content Creator Agent',
      category: 'content',
      icon: 'auto_awesome',
      color: 'from-pink-600 to-purple-600',
      description: 'AI content generation for social media and marketing materials',
      benefits: [
        'Daily content ready',
        'Engagement increase',
        'Brand awareness strong'
      ]
    },
    {
      id: 6,
      title: 'Auto Social Media Handling Agent',
      category: 'marketing',
      icon: 'public',
      color: 'from-blue-600 to-indigo-600',
      description: 'Complete social media automation and management system',
      benefits: [
        'Social media active rahega',
        'Followers growth',
        'Engagement tracking'
      ]
    },
    {
      id: 7,
      title: 'Auto Performance Marketing Agent',
      category: 'marketing',
      icon: 'monitoring',
      color: 'from-cyan-600 to-blue-600',
      description: 'AI-driven advertising optimization and campaign management',
      benefits: [
        'Low cost ads',
        'High conversion',
        'Smart budget control'
      ]
    },
    {
      id: 8,
      title: 'Auto Content Writer Agent',
      category: 'content',
      icon: 'history_edu',
      color: 'from-teal-600 to-emerald-600',
      description: 'Professional content writing with SEO optimization',
      benefits: [
        'Professional brand image',
        'Google ranking improve',
        'Sales copy powerful'
      ]
    },
    {
      id: 9,
      title: 'Auto Graphic Development Agent',
      category: 'content',
      icon: 'layers',
      color: 'from-amber-600 to-orange-600',
      description: 'AI-powered graphic design and visual content creation',
      benefits: [
        'Professional look',
        'Time saving',
        'Consistent branding'
      ]
    },
    {
      id: 10,
      title: 'Auto Photo / Video Editing Agent',
      category: 'content',
      icon: 'auto_videocam',
      color: 'from-red-600 to-pink-600',
      description: 'Automated video editing and photo enhancement tools',
      benefits: [
        'Fast reel production',
        'Viral content chances high',
        'Production cost kam'
      ]
    },
    {
      id: 11,
      title: 'Auto Physical Marketing Strategy Agent',
      category: 'strategy',
      icon: 'near_me',
      color: 'from-indigo-600 to-purple-600',
      description: 'Offline marketing strategy and local campaign planning',
      benefits: [
        'Local brand strong',
        'Footfall increase',
        'Offline visibility grow'
      ]
    },
    {
      id: 12,
      title: 'Auto Digital Marketing & Branding Strategy Agent',
      category: 'strategy',
      icon: 'workspace_premium',
      color: 'from-blue-600 to-cyan-500',
      description: 'Complete digital growth strategy and brand positioning',
      benefits: [
        'Long term growth',
        'Brand authority build',
        'Consistent revenue system'
      ]
    }
  ];

  const filteredAgents = activeCategory === 'all'
    ? aiAgents
    : aiAgents.filter(agent => agent.category === activeCategory);

  return (
    <div className="min-h-screen premium-bg relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl -mr-48 -mt-48 opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl -ml-48 -mb-48 opacity-50"></div>

      <main className="relative z-10 pt-24 pb-20">
        {/* Hero Section */}
        <section className="py-12 px-6">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50 border border-blue-100 mb-8 backdrop-blur-sm shadow-sm transition-all hover:bg-white">
                <span className="material-symbols-outlined text-blue-600 animate-pulse">auto_awesome</span>
                <span className="text-blue-600 font-black uppercase tracking-wider text-[11px]">AI Innovation Center</span>
              </div>

              <h1 className="text-6xl md:text-8xl font-black mb-8 text-slate-800 leading-tight pb-8 tracking-tighter">
                Intelligent
                <span className="block text-5xl md:text-7xl mt-2 text-blue-600 pb-4">
                  Automation Agents
                </span>
              </h1>

              <p className="text-lg md:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
                Revolutionary AI agents that transform your business operations with intelligent automation,
                seamless integration, and unprecedented efficiency.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-4 mb-12 px-4"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center gap-3 px-8 py-4 rounded-2xl font-bold transition-all duration-500 border shadow-sm ${activeCategory === category.id
                    ? 'bg-blue-600 text-white border-blue-600 scale-105 shadow-xl shadow-blue-500/20'
                    : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-900'
                    }`}
                >
                  <span className="material-symbols-outlined text-xl">{category.icon}</span>
                  <span className="tracking-wide">{category.name}</span>
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            <LayoutGroup>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
                <AnimatePresence mode="popLayout">
                  {filteredAgents.map((agent) => (
                    <motion.div
                      key={agent.id}
                      layout="position"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{
                        layout: { type: 'spring', stiffness: 300, damping: 30 },
                        opacity: { duration: 0.3 }
                      }}
                      whileHover={{ y: -10 }}
                      className={`relative group p-8 rounded-[2.5rem] border transition-all duration-700 overflow-hidden flex flex-col cursor-pointer h-full bg-white/80 backdrop-blur-xl shadow-xl hover:shadow-2xl border-slate-200 ${agent.color.includes('blue-600') ? 'hover:border-blue-500/50' :
                        agent.color.includes('purple-600') ? 'hover:border-purple-500/50' :
                          agent.color.includes('emerald-600') ? 'hover:border-emerald-500/50' :
                            agent.color.includes('orange-600') ? 'hover:border-orange-500/50' :
                              agent.color.includes('pink-600') ? 'hover:border-pink-500/50' :
                                agent.color.includes('cyan-600') ? 'hover:border-cyan-500/50' :
                                  agent.color.includes('teal-600') ? 'hover:border-teal-500/50' :
                                    agent.color.includes('amber-600') ? 'hover:border-amber-500/50' :
                                      agent.color.includes('red-600') ? 'hover:border-red-500/50' :
                                        agent.color.includes('indigo-600') ? 'hover:border-indigo-500/50' :
                                          'hover:border-blue-500/50'
                        }`}
                    >
                      <Link to={agent.path || "/consultation"} className="absolute inset-0 z-20" />

                      {/* Hover Gradient Overlay */}
                      <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none bg-gradient-to-br ${agent.color}`}></div>

                      {/* Top Bar: Icon & Category */}
                      <div className="flex items-start justify-between mb-8 relative z-10">
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className={`w-14 h-14 rounded-2xl flex items-center justify-center bg-gradient-to-br ${agent.color} text-white shadow-xl group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] transition-all duration-500`}
                        >
                          <span className="material-symbols-outlined text-2xl">{agent.icon}</span>
                        </motion.div>

                        <div className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                          {agent.category}
                        </div>
                      </div>

                      {/* Info Content */}
                      <div className="flex-1 relative z-10">
                        <h3 className="text-2xl font-black tracking-tight mb-3 text-slate-800 transition-colors duration-300 leading-snug pb-4 group-hover:text-blue-600">
                          {agent.title}
                        </h3>

                        <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium">
                          {agent.description}
                        </p>

                        {/* Bullet Points Preview */}
                        <div className="space-y-2 mb-8">
                          {agent.benefits.slice(0, 3).map((benefit, i) => (
                            <div key={i} className="flex items-center gap-2 text-[11px] text-slate-600 font-bold">
                              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shadow-[0_0_5px_rgba(37,99,235,0.5)]" />
                              <span>{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Footer: Action Button */}
                      <div className="mt-auto relative z-10 pt-4 border-t border-slate-100">
                        <div className="flex items-center justify-between">
                          <span className="text-xs font-bold text-slate-900 tracking-widest uppercase">Explore Details</span>
                          <motion.div
                            className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shadow-md border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-500 flex-shrink-0"
                            whileHover={{ x: 5 }}
                          >
                            <span className="material-symbols-outlined text-sm flex-shrink-0">arrow_forward</span>
                          </motion.div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </LayoutGroup>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-slate-50 relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-800 pb-8 tracking-tighter">
                AI-Powered Transformation
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Real impact metrics from our intelligent automation solutions globally.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: '13', label: 'AI Agents', icon: 'auto_awesome', color: 'from-blue-600 to-cyan-500' },
                { value: '85%', label: 'Efficiency Gain', icon: 'speed', color: 'from-purple-600 to-pink-600' },
                { value: '24/7', label: 'Operation', icon: 'schedule', color: 'from-emerald-600 to-teal-600' },
                { value: '50%', label: 'Cost Reduction', icon: 'savings', color: 'from-orange-600 to-red-600' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className={`group relative rounded-[2.5rem] p-10 text-center border border-slate-200 bg-white transition-all duration-700 shadow-xl hover:shadow-2xl overflow-hidden ${stat.color.includes('blue-600') ? 'hover:border-blue-500/50' :
                    stat.color.includes('purple-600') ? 'hover:border-purple-500/50' :
                      stat.color.includes('emerald-600') ? 'hover:border-emerald-500/50' :
                        stat.color.includes('orange-600') ? 'hover:border-orange-500/50' :
                          'hover:border-blue-500/50'
                    }`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                  <div className="relative z-10">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mx-auto mb-6 shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                      <span className="material-symbols-outlined text-white text-2xl font-black">{stat.icon}</span>
                    </div>
                    <div className={`text-6xl font-black mb-2 bg-clip-text text-transparent bg-gradient-to-r ${stat.color} pb-1`}>{stat.value}</div>
                    <div className="text-slate-800 font-black tracking-widest text-[11px] uppercase">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto text-center"
          >
            <div className="bg-white rounded-[3.5rem] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl border border-slate-200">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] -ml-64 -mb-64"></div>

              <div className="relative z-10">
                <h3 className="text-5xl md:text-7xl font-black text-slate-800 mb-8 tracking-tighter leading-none pb-8">
                  Ready to Transform <br />
                  <span className="text-blue-600 pb-4">with AI?</span>
                </h3>
                <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-bold">
                  Experience the future of business automation with our intelligent AI agents.
                  Start your transformation journey today.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to="/contact">
                    <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black h-16 px-12 rounded-full shadow-2xl shadow-blue-500/20 hover:shadow-blue-500/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto uppercase tracking-widest text-sm">
                      <span className="material-symbols-outlined text-2xl flex-shrink-0">auto_awesome</span>
                      Start AI Integration
                    </button>
                  </Link>

                  <Link to="/join-contact">
                    <button className="bg-white hover:bg-slate-50 text-slate-900 font-black h-16 px-12 rounded-full border-2 border-slate-900 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto uppercase tracking-widest text-sm shadow-xl">
                      <span className="material-symbols-outlined text-2xl flex-shrink-0">calendar_today</span>
                      Schedule Demo
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default ModernAICenter;