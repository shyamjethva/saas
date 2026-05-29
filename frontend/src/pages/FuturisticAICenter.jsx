import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AICenter = () => {
  // Animated Particles Component
  const Particles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
      const generateParticles = () => {
        const newParticles = [];
        for (let i = 0; i < 30; i++) {
          newParticles.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 25 + 15,
            delay: Math.random() * 5
          });
        }
        setParticles(newParticles);
      };

      generateParticles();
    }, []);

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-slate-400/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              y: [0, -120, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.8, 1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  };

  const aiFeatures = [
    {
      title: 'AI Revenue Prediction',
      description: 'Forecast future revenue streams with machine learning algorithms that analyze historical data and market trends.',
      icon: 'trending_up',
      color: 'bg-slate-900',
      benefits: ['95% accuracy', 'Real-time updates', 'Multi-scenario modeling']
    },
    {
      title: 'Smart Lead Scoring',
      description: 'Automatically qualify and rank leads based on behavior patterns, engagement scores, and conversion likelihood.',
      icon: 'stars',
      color: 'bg-slate-800',
      benefits: ['40% higher conversion', 'Real-time scoring', 'Customizable criteria']
    },
    {
      title: 'AI Sales Assistant',
      description: 'Intelligent virtual assistant that helps sales teams prioritize prospects and automate follow-up communications.',
      icon: 'support_agent',
      color: 'bg-slate-700',
      benefits: ['24/7 availability', 'Natural language', 'Multi-channel support']
    },
    {
      title: 'AI Chatbots',
      description: '24/7 automated customer support with natural language processing for instant query resolution.',
      icon: 'chat',
      color: 'bg-slate-600',
      benefits: ['90% resolution rate', 'Multi-language support', 'Seamless handoff']
    },
    {
      title: 'Automated Reports',
      description: 'Generate comprehensive business intelligence reports automatically with customizable dashboards and insights.',
      icon: 'auto_graph',
      color: 'bg-slate-500',
      benefits: ['Real-time data', 'Custom templates', 'Scheduled delivery']
    },
    {
      title: 'Behavior Tracking',
      description: 'Monitor customer interactions across all touchpoints to understand preferences and optimize engagement strategies.',
      icon: 'track_changes',
      color: 'bg-slate-400',
      benefits: ['Cross-platform tracking', 'Predictive analytics', 'Personalization engine']
    },
    {
      title: 'Predictive Analytics',
      description: 'Advanced machine learning models that predict customer behavior and business outcomes with high accuracy.',
      icon: 'psychology',
      color: 'bg-slate-300',
      benefits: ['Pattern recognition', 'Risk assessment', 'Opportunity identification']
    },
    {
      title: 'Process Automation',
      description: 'Intelligent workflow automation that reduces manual tasks and improves operational efficiency.',
      icon: 'auto_mode',
      color: 'bg-slate-200',
      benefits: ['70% time reduction', 'Error minimization', 'Scalable processes']
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden pt-20">
      {/* Animated Background */}
      <Particles />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 via-purple-500/5 to-blue-500/5 animate-pulse"></div>

      {/* Hero Section */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 heading-underline active pb-2">
              Future of
              <span className="block text-slate-900">
                Business Intelligence
              </span>
            </h1>

            <p className="text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-6">
              Your CRM learns from your data.
            </p>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12">
              Transform raw business data into intelligent insights and automated actions
            </p>
          </motion.div>

          {/* Animated AI Brain Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
            className="relative mx-auto mb-16"
          >
            <div className="w-64 h-64 mx-auto relative">
              {/* Brain Outline */}
              <div className="absolute inset-0 rounded-full border-4 border-slate-900/10 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full border-2 border-slate-900/5 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

              {/* Neural Connections */}
              <div className="absolute inset-8">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-slate-900"
                    style={{
                      left: `${50 + 40 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                      top: `${50 + 40 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                      animation: `pulse 2s infinite ${i * 0.2}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Central Core */}
              <div className="absolute inset-12 rounded-full bg-slate-900 flex items-center justify-center animate-pulse shadow-xl shadow-slate-900/20">
                <span className="text-white text-4xl font-bold">AI</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* AI Features Grid */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {aiFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="glass-card rounded-2xl p-8 border border-white/10  transition-all duration-300 backdrop-blur-sm group"
              >
                <div className={`w-16 h-16 rounded-xl ${feature.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="material-symbols-outlined text-white text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                <p className="text-slate-300 text-center mb-6">{feature.description}</p>

                {/* Benefits */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-slate-500">
                      <span className="material-symbols-outlined text-xs">check_circle</span>
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Data Learning Section */}
      <div className="relative z-10 px-6 py-20 bg-gradient-to-r from-slate-800/50 to-purple-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-16 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-white mb-8">
              Your CRM Learns From Your Data
            </h2>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-slate-900 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white text-3xl">database</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Collects Intelligence</h3>
                <p className="text-slate-300">Gathers structured data from all business touchpoints</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-slate-900 text-3xl">psychology</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Analyzes Patterns</h3>
                <p className="text-slate-300">Identifies trends and behavioral insights automatically</p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-slate-800 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white text-3xl">auto_fix_high</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Automates Actions</h3>
                <p className="text-slate-300">Executes optimized workflows without manual intervention</p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <div className="text-center">
                <div className="text-5xl font-bold text-white mb-2">70%</div>
                <p className="text-slate-300">Faster Decision Making</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-slate-200 mb-2">45%</div>
                <p className="text-slate-300">Cost Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-slate-400 mb-2">3X</div>
                <p className="text-slate-300">ROI Improvement</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-16 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
          >
            <h2 className="text-5xl font-bold text-white mb-8">
              Experience
              <span className="block text-slate-200">
                AI-Powered Growth
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Transform your business with intelligent automation and data-driven insights
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/book-demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-900 hover:bg-black text-white font-bold px-10 py-5 rounded-full transition-all shadow-2xl flex items-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">smart_toy</span>
                  Book AI Demo
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-5 rounded-full border border-white/20 transition-all flex items-center gap-3 text-lg"
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
