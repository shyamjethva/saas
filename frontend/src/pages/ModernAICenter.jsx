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
      color: 'from-slate-700 to-slate-900',
      description: 'Automatically find and qualify potential customers across multiple platforms',
      benefits: [
        'Sales team ka 70% manual kaam kam',
        'High quality targeted leads',
        'Daily auto lead flow'
      ],
      image: '/images/ai-conversation/leadgenerate.jpeg',
      path: '/lead-generation-agent'
    },
    {
      id: 2,
      title: 'Auto Human Calling Agent (AI Voice Caller)',
      category: 'sales',
      icon: 'keyboard_voice',
      color: 'from-slate-800 to-slate-950',
      description: 'AI voice calling system for customer engagement and appointment booking',
      benefits: [
        '24x7 calling system',
        'Sales conversion increase',
        'No need for big calling team'
      ],
      image: '/images/ai-conversation/aiconversationagent1.jpeg',
      path: '/ai-voice-caller'
    },
    {
      id: 3,
      title: 'Auto Chatbot & WhatsApp Agent',
      category: 'sales',
      icon: 'smart_toy',
      color: 'from-slate-600 to-slate-800',
      description: 'Intelligent chatbot & WhatsApp automation for instant customer response and lead capture across multiple platforms.',
      benefits: [
        'Instant response & WhatsApp automation',
        'Lead capture and automated follow-up',
        'High customer satisfaction via AI'
      ],
      image: '/images/ai-conversation/masterwpagent.jpeg',
      path: '/master-whatsapp-agent'
    },
    {
      id: 4,
      title: 'Auto Frontend / Backend Developing Agent',
      category: 'development',
      icon: 'terminal',
      color: 'from-slate-700 to-slate-900',
      description: 'AI-powered development agent for rapid application building',
      benefits: [
        'Fast development',
        'Low development cost',
        'Auto updates & maintenance'
      ],
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80'
    },
    {
      id: 5,
      title: 'Auto Content Creator Agent',
      category: 'content',
      icon: 'auto_awesome',
      color: 'from-slate-500 to-slate-700',
      description: 'AI content generation for social media and marketing materials',
      benefits: [
        'Daily content ready',
        'Engagement increase',
        'Brand awareness strong'
      ],
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&q=80'
    },
    {
      id: 6,
      title: 'Auto Social Media Handling Agent',
      category: 'marketing',
      icon: 'public',
      color: 'from-slate-600 to-slate-800',
      description: 'Complete social media automation and management system',
      benefits: [
        'Social media active rahega',
        'Followers growth',
        'Engagement tracking'
      ],
      image: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=800&q=80'
    },
    {
      id: 7,
      title: 'Auto Performance Marketing Agent',
      category: 'marketing',
      icon: 'monitoring',
      color: 'from-slate-400 to-slate-600',
      description: 'AI-driven advertising optimization and campaign management',
      benefits: [
        'Low cost ads',
        'High conversion',
        'Smart budget control'
      ],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&q=80'
    },
    {
      id: 8,
      title: 'Auto Content Writer Agent',
      category: 'content',
      icon: 'history_edu',
      color: 'from-slate-500 to-slate-700',
      description: 'Professional content writing with SEO optimization',
      benefits: [
        'Professional brand image',
        'Google ranking improve',
        'Sales copy powerful'
      ],
      image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=800&q=80'
    },
    {
      id: 9,
      title: 'Auto Graphic Development Agent',
      category: 'content',
      icon: 'layers',
      color: 'from-slate-700 to-slate-900',
      description: 'AI-powered graphic design and visual content creation',
      benefits: [
        'Professional look',
        'Time saving',
        'Consistent branding'
      ],
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80'
    },
    {
      id: 10,
      title: 'Auto Photo / Video Editing Agent',
      category: 'content',
      icon: 'auto_videocam',
      color: 'from-slate-800 to-slate-950',
      description: 'Automated video editing and photo enhancement tools',
      benefits: [
        'Fast reel production',
        'Viral content chances high',
        'Production cost kam'
      ],
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&q=80'
    },
    {
      id: 11,
      title: 'Auto Physical Marketing Strategy Agent',
      category: 'strategy',
      icon: 'near_me',
      color: 'from-slate-600 to-slate-800',
      description: 'Offline marketing strategy and local campaign planning',
      benefits: [
        'Local brand strong',
        'Footfall increase',
        'Offline visibility grow'
      ],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&q=80'
    },
    {
      id: 12,
      title: 'Auto Digital Marketing & Branding Strategy Agent',
      category: 'strategy',
      icon: 'workspace_premium',
      color: 'from-slate-700 to-slate-900',
      description: 'Complete digital growth strategy and brand positioning',
      benefits: [
        'Long term growth',
        'Brand authority build',
        'Consistent revenue system'
      ],
      image: 'https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=800&q=80'
    }
  ];

  const filteredAgents = activeCategory === 'all'
    ? aiAgents
    : aiAgents.filter(agent => agent.category === activeCategory);

  return (
    <div className="min-h-screen premium-bg relative overflow-hidden">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl -mr-48 -mt-48 opacity-30"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl -ml-48 -mb-48 opacity-30"></div>

      <main className="relative z-10 pt-16 pb-16">
        {/* Hero Section */}
        <section className="py-8 px-6 text-center">

          <div className="max-w-6xl mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h1 className="text-5xl md:text-7xl font-black mb-8 text-slate-900 leading-tight pb-4 tracking-tighter heading-underline active">
                Intelligent
                <span className="block text-4xl md:text-6xl mt-2 text-slate-500 py-2">
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
              className="grid grid-cols-3 md:flex md:flex-wrap justify-center gap-2 md:gap-4 mb-12 px-4 max-w-md mx-auto md:max-w-none"
            >
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex flex-col md:flex-row items-center justify-center gap-2 md:gap-3 px-3 md:px-8 py-4 md:py-4 rounded-3xl md:rounded-2xl font-bold transition-all duration-500 border shadow-sm ${activeCategory === category.id
                    ? 'bg-slate-900 text-white border-transparent scale-105 shadow-xl shadow-slate-900/20'
                    : 'bg-white text-slate-500 border-slate-100 hover:border-slate-300 hover:text-slate-900'
                    }`}
                >
                  <span className="material-symbols-outlined text-xl md:text-xl">{category.icon}</span>
                  <span className="tracking-wide text-[10px] md:text-sm lg:text-base leading-tight whitespace-nowrap md:whitespace-normal text-center">
                    {category.name.includes('&') ? (
                      <span className="flex flex-col md:block">
                        <span>{category.name.split('&')[0]}</span>
                        <span className="hidden md:inline"> & </span>
                        <span>{category.name.split('&')[1]}</span>
                      </span>
                    ) : category.name}
                  </span>
                </button>
              ))}
            </motion.div>
          </div>
        </section>

        <section className="px-6 mb-20">
          <div className="max-w-7xl mx-auto">
            {/* AI Center Premium Frame */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative group rounded-[3.5rem] overflow-hidden transition-all duration-1000 p-1 md:p-2 bg-white"
            >
              {/* Frame Background Layer */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-10 group-hover:opacity-20 transition-opacity duration-1000 scale-110 group-hover:scale-100 pointer-events-none"
                style={{ backgroundImage: 'url("/images/frames/ai_center_bg.png")' }}
              />
              <div className="absolute inset-0 bg-gradient-to-br from-slate-900/5 via-slate-700/5 to-slate-900/5 opacity-50 backdrop-blur-[2px] pointer-events-none" />

              {/* Inner Content Area */}
              <div className="relative z-10 p-6 md:p-12 bg-white rounded-[3rem]">

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
                          className="relative group/card rounded-[2.5rem] transition-all duration-700 overflow-hidden flex flex-col cursor-pointer h-full bg-white shadow-lg hover:shadow-2xl"
                        >
                          {agent.path ? (
                            <Link to={agent.path} className="absolute inset-0 z-20" />
                          ) : (
                            <a
                              href="https://404.errorinfotech.in/"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="absolute inset-0 z-20"
                            />
                          )}

                          {/* BACKGROUND IMAGE LAYER */}
                          <div
                            className="absolute top-0 left-0 right-0 h-64 z-0 opacity-80 group-hover/card:opacity-100 pointer-events-none transition-all duration-700"
                            style={{
                              backgroundImage: `url(${agent.image})`,
                              backgroundSize: 'cover',
                              backgroundPosition: 'center',
                              WebkitMaskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)',
                              maskImage: 'linear-gradient(to bottom, black 0%, transparent 60%)'
                            }}
                          />

                          {/* Info Content Area */}
                          <div className="p-8 flex-1 relative z-10 flex flex-col">
                            {/* Hover Gradient Overlay */}
                            <div className={`absolute inset-0 opacity-0 group-hover/card:opacity-[0.02] transition-opacity duration-700 pointer-events-none bg-gradient-to-br ${agent.color}`}></div>

                            {/* Category Tag */}
                            <div className="mb-4">
                              <span className="px-3 py-1 rounded-full bg-slate-50 border border-slate-100 text-[10px] font-bold text-slate-500 uppercase tracking-widest">
                                {agent.category}
                              </span>
                            </div>

                            <h3 className="text-2xl font-black tracking-tight mb-3 text-slate-800 transition-colors duration-300 leading-snug pb-4 group-hover/card:text-slate-950">
                              {agent.title}
                            </h3>

                            <p className="text-sm text-slate-700 leading-relaxed mb-6 font-medium">
                              {agent.description}
                            </p>

                            {/* Bullet Points Preview */}
                            <div className="space-y-2 mb-8">
                              {agent.benefits.slice(0, 3).map((benefit, i) => (
                                <div key={i} className="flex items-center gap-2 text-[11px] text-slate-600 font-bold">
                                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400 shadow-sm" />
                                  <span>{benefit}</span>
                                </div>
                              ))}
                            </div>

                            {/* Footer: Action Button */}
                            <div className="mt-auto relative z-10 pt-4 border-t border-slate-50 overflow-visible">
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-bold text-slate-900 tracking-widest uppercase">Explore Matrix</span>
                                  <motion.div
                                    className="w-10 h-10 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center shadow-md border border-slate-100 group-hover/card:bg-slate-900 group-hover/card:text-white transition-all duration-500 flex-shrink-0"
                                  whileHover={{ x: 5 }}
                                >
                                  <span className="material-symbols-outlined text-sm flex-shrink-0 group-hover/card:text-white transition-colors">arrow_forward</span>
                                </motion.div>
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>
                </LayoutGroup>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 px-6 bg-white rounded-[4rem] mx-6 border-y border-slate-100 relative overflow-hidden mb-16">
          <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
          <div className="max-w-6xl mx-auto relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 pb-8 tracking-tighter">
                AI-Powered <span className="text-slate-500">Transformation</span>
              </h2>
              <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                Real impact metrics from our intelligent automation solutions globally.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-4 gap-8">
              {[
                { value: '13', label: 'AI Agents', icon: 'auto_awesome', color: 'from-slate-700 to-slate-900' },
                { value: '85%', label: 'Efficiency Gain', icon: 'speed', color: 'from-slate-600 to-slate-800' },
                { value: '24/7', label: 'Operation', icon: 'schedule', color: 'from-slate-500 to-slate-700' },
                { value: '50%', label: 'Cost Reduction', icon: 'savings', color: 'from-slate-400 to-slate-600' }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="group relative p-6 text-center transition-all duration-700"
                >
                  <div className="relative z-10">
                    <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center mx-auto mb-6 border border-slate-100 group-hover:bg-slate-900 transition-all duration-500">
                      <span className="material-symbols-outlined text-slate-400 text-2xl font-black group-hover:text-white transition-colors">{stat.icon}</span>
                    </div>
                    <div className="text-6xl font-black mb-2 text-slate-900 pb-1">{stat.value}</div>
                    <div className="text-slate-500 font-black tracking-widest text-[11px] uppercase">{stat.label}</div>
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
          <div className="bg-white rounded-[3rem] p-10 md:p-16 text-center relative overflow-hidden shadow-2xl border border-slate-200">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-900/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
              <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] -ml-64 -mb-64"></div>

              <div className="relative z-10">
                <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-none pb-8">
                  Ready to Transform <br />
                  <span className="text-slate-500 pb-4">with AI?</span>
                </h3>
                <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-bold">
                  Experience the future of business automation with our intelligent AI agents.
                  Start your transformation journey today.
                </p>

                <div className="flex flex-col sm:flex-row gap-6 justify-center">
                  <Link to="/contact">
                    <button className="bg-slate-900 text-white font-black h-16 px-12 rounded-full shadow-2xl shadow-slate-900/20 hover:shadow-slate-900/40 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto uppercase tracking-widest text-sm">
                      <span className="material-symbols-outlined text-2xl flex-shrink-0">auto_awesome</span>
                      Start AI Integration
                    </button>
                  </Link>

                  <Link to="/join-contact">
                    <button className="bg-white hover:bg-slate-50 text-slate-900 font-black h-16 px-12 rounded-full border-2 border-slate-200 hover:border-slate-900 transition-all duration-300 flex items-center justify-center gap-3 w-full sm:w-auto uppercase tracking-widest text-sm shadow-xl">
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
