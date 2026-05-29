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
            className="absolute rounded-full bg-gradient-to-r from-cyan-400/30 to-purple-400/30"
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
      color: 'from-blue-700 to-sky-500',
      benefits: ['95% accuracy', 'Real-time updates', 'Multi-scenario modeling']
    },
    {
      title: 'Smart Lead Scoring',
      description: 'Automatically qualify and rank leads based on behavior patterns, engagement scores, and conversion likelihood.',
      icon: 'stars',
      color: 'from-purple-500 to-pink-500',
      benefits: ['40% higher conversion', 'Real-time scoring', 'Customizable criteria']
    },
    {
      title: 'AI Sales Assistant',
      description: 'Intelligent virtual assistant that helps sales teams prioritize prospects and automate follow-up communications.',
      icon: 'support_agent',
      color: 'from-blue-600 to-slate-900',
      benefits: ['24/7 availability', 'Natural language', 'Multi-channel support']
    },
    {
      title: 'AI Chatbots',
      description: '24/7 automated customer support with natural language processing for instant query resolution.',
      icon: 'chat',
      color: 'from-indigo-500 to-purple-500',
      benefits: ['90% resolution rate', 'Multi-language support', 'Seamless handoff']
    },
    {
      title: 'Automated Reports',
      description: 'Generate comprehensive business intelligence reports automatically with customizable dashboards and insights.',
      icon: 'auto_graph',
      color: 'from-orange-500 to-red-500',
      benefits: ['Real-time data', 'Custom templates', 'Scheduled delivery']
    },
    {
      title: 'Behavior Tracking',
      description: 'Monitor customer interactions across all touchpoints to understand preferences and optimize engagement strategies.',
      icon: 'track_changes',
      color: 'from-teal-500 to-cyan-500',
      benefits: ['Cross-platform tracking', 'Predictive analytics', 'Personalization engine']
    },
    {
      title: 'Predictive Analytics',
      description: 'Advanced machine learning models that predict customer behavior and business outcomes with high accuracy.',
      icon: 'psychology',
      color: 'from-violet-500 to-purple-500',
      benefits: ['Pattern recognition', 'Risk assessment', 'Opportunity identification']
    },
    {
      title: 'Process Automation',
      description: 'Intelligent workflow automation that reduces manual tasks and improves operational efficiency.',
      icon: 'auto_mode',
      color: 'from-amber-500 to-orange-500',
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
              <span className="block text-premium-gradient">
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
              <div className="absolute inset-0 rounded-full border-4 border-cyan-400/30 animate-pulse"></div>
              <div className="absolute inset-4 rounded-full border-2 border-purple-400/30 animate-pulse" style={{ animationDelay: '0.5s' }}></div>

              {/* Neural Connections */}
              <div className="absolute inset-8">
                {[...Array(12)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 rounded-full bg-cyan-400"
                    style={{
                      left: `${50 + 40 * Math.cos((i * 30 * Math.PI) / 180)}%`,
                      top: `${50 + 40 * Math.sin((i * 30 * Math.PI) / 180)}%`,
                      animation: `pulse 2s infinite ${i * 0.2}s`
                    }}
                  ></div>
                ))}
              </div>

              {/* Central Core */}
              <div className="absolute inset-12 rounded-full bg-gradient-to-br from-cyan-500 to-purple-500 flex items-center justify-center animate-pulse">
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
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="material-symbols-outlined text-white text-2xl">{feature.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4 text-center">{feature.title}</h3>
                <p className="text-slate-300 text-center mb-6">{feature.description}</p>

                {/* Benefits */}
                <div className="space-y-2">
                  {feature.benefits.map((benefit, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-sm text-cyan-400">
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

      {/* AI Voice Caller Section */}
      <div className="relative z-10 px-6 py-20 bg-gradient-to-r from-slate-800/50 to-purple-900/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Auto Human Calling Agent
              <span className="block text-premium-gradient">
                (AI Voice Caller)
              </span>
            </h2>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Intelligent outbound calling system powered by AI. Automate your sales calls with human-like conversations,
              real-time sentiment analysis, and smart decision-making.
            </p>
          </motion.div>

          {/* Workflow Images Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* Workflow 1 - AI Conversation Agent */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/10  transition-all duration-300"
            >
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <img
                  src="/images/ai-conversation/aiconversationagent1.jpeg"
                  alt="AI Conversation Agent Workflow"
                  className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold border border-blue-500/30">Step 1</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">1) AI Conversation Agent (Main Calling Brain)</h3>
                <p className="text-slate-400 text-sm mb-4">Role: Handles real-time AI conversation during outbound calls.</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-sm mt-0.5">check_circle</span>
                    <span>Twilio connects the call</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-sm mt-0.5">check_circle</span>
                    <span>Customer speech is converted to text (Speech-to-Text)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-sm mt-0.5">check_circle</span>
                    <span>Text is sent to OpenAI</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-sm mt-0.5">check_circle</span>
                    <span>AI generates a human-like reply</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-sm mt-0.5">check_circle</span>
                    <span>Reply is converted to speech (Text-to-Speech)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-sm mt-0.5">check_circle</span>
                    <span>Voice is played to customer and loop continues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-sm mt-0.5">check_circle</span>
                    <span>Handles objections, multi-language, and human transfer triggers</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Workflow 2 - Script Builder Agent */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/10  transition-all duration-300"
            >
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <img
                  src="/images/ai-conversation/scriptbuilder2.jpeg"
                  alt="Script Builder Agent Workflow"
                  className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-blue-500/20 text-blue-400 text-sm font-bold border border-blue-500/30">Step 2</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">2) Script Builder Agent</h3>
                <p className="text-slate-400 text-sm mb-4">Role: Generates full campaign sales script before calls start.</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-sm mt-0.5">check_circle</span>
                    <span>Inputs: Product/Service, City, Offer, Industry, Language</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-sm mt-0.5">check_circle</span>
                    <span>Generates: Opening pitch, rapport lines, qualification questions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-sm mt-0.5">check_circle</span>
                    <span>Creates objection handling logic and closing pitch</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-sm mt-0.5">check_circle</span>
                    <span>Adds follow-up logic</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-blue-400 text-sm mt-0.5">check_circle</span>
                    <span>Runs once per campaign and stores script in database</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Workflow 3 - Call Analysis & Sentiment Agent */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/10  transition-all duration-300"
            >
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <img
                  src="/images/ai-conversation/callanalysis3.jpeg"
                  alt="Call Analysis & Sentiment Agent Workflow"
                  className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 text-sm font-bold border border-purple-500/30">Step 3</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">3) Call Analysis & Sentiment Agent</h3>
                <p className="text-slate-400 text-sm mb-4">Role: Analyzes transcript after call completion.</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-purple-400 text-sm mt-0.5">check_circle</span>
                    <span>Detects sentiment (Positive / Neutral / Negative)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-purple-400 text-sm mt-0.5">check_circle</span>
                    <span>Gives call score (1–10)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-purple-400 text-sm mt-0.5">check_circle</span>
                    <span>Classifies lead as Hot / Warm / Cold</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-purple-400 text-sm mt-0.5">check_circle</span>
                    <span>Calculates interest probability percentage</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-purple-400 text-sm mt-0.5">check_circle</span>
                    <span>Used for analytics dashboard and lead prioritization</span>
                  </li>
                </ul>
              </div>
            </motion.div>

            {/* Workflow 4 - Smart Retry & Decision Agent */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card rounded-2xl overflow-hidden border border-white/10  transition-all duration-300"
            >
              <div className="relative aspect-video bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
                <img
                  src="/images/ai-conversation/smartretry4.jpeg"
                  alt="Smart Retry & Decision Agent Workflow"
                  className="w-full h-full object-contain opacity-90 hover:opacity-100 transition-opacity"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-pink-500/20 text-pink-400 text-sm font-bold border border-pink-500/30">Step 4</span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-4">4) Smart Retry & Decision Agent</h3>
                <p className="text-slate-400 text-sm mb-4">Role: Makes automation decisions after each call.</p>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-pink-400 text-sm mt-0.5">check_circle</span>
                    <span>No answer → Retry (max 2 times)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-pink-400 text-sm mt-0.5">check_circle</span>
                    <span>Busy → Schedule callback</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-pink-400 text-sm mt-0.5">check_circle</span>
                    <span>Interested → Push to CRM & notify sales team</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-pink-400 text-sm mt-0.5">check_circle</span>
                    <span>Negative sentiment → Mark as cold lead</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-pink-400 text-sm mt-0.5">check_circle</span>
                    <span>Manager request → Trigger human transfer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="material-symbols-outlined text-pink-400 text-sm mt-0.5">check_circle</span>
                    <span>Controls retry scheduling, CRM updates, and notifications</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* View Details Button */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <Link to="/ai-voice-caller">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-slate-900 hover:bg-black text-white font-bold px-10 py-5 rounded-full transition-all shadow-2xl hover:shadow-slate-900/25 flex items-center gap-3 text-lg mx-auto"
              >
                <span className="material-symbols-outlined">visibility</span>
                View Details
              </motion.button>
            </Link>
          </motion.div>

          {/* CTA for AI Voice Caller */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Link to="/book-demo">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white border-2 border-slate-900 text-slate-900 hover:bg-slate-50 font-bold px-10 py-5 rounded-full transition-all shadow-xl flex items-center gap-3 text-lg mx-auto"
              >
                <span className="material-symbols-outlined">phone_in_talk</span>
                Book AI Voice Caller Demo
              </motion.button>
            </Link>
          </motion.div>
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
                <div className="w-20 h-20 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center mx-auto mb-4">
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
                <div className="text-5xl font-bold text-cyan-400 mb-2">70%</div>
                <p className="text-slate-300">Faster Decision Making</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-purple-400 mb-2">45%</div>
                <p className="text-slate-300">Cost Reduction</p>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold text-slate-900 mb-2">3X</div>
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
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-blue-400">
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
