import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AIVoiceCallerDetail = () => {
  const [activeTab, setActiveTab] = useState(0);

  const workflows = [
    {
      id: 1,
      title: 'AI Conversation Agent',
      subtitle: 'Main Calling Brain',
      role: 'Handles real-time AI conversation during outbound calls.',
      icon: 'chat',
      color: 'from-green-500 to-emerald-500',
      image: '/images/ai-conversation/aiconversationagent1.jpeg', // Your custom image 1
      steps: [
        'Twilio connects the call',
        'Customer speech is converted to text (Speech-to-Text)',
        'Text is sent to OpenAI',
        'AI generates a human-like reply',
        'Reply is converted to speech (Text-to-Speech)',
        'Voice is played to customer and loop continues',
        'Handles objections, multi-language, and human transfer triggers'
      ]
    },
    {
      id: 2,
      title: 'Script Builder Agent',
      subtitle: 'Campaign Script Generator',
      role: 'Generates full campaign sales script before calls start.',
      icon: 'description',
      color: 'from-blue-500 to-cyan-500',
      image: '/images/ai-conversation/scriptbuilder2.jpeg', // Your custom image 2
      steps: [
        { title: 'Inputs', desc: 'Product/Service, City, Offer, Industry, Language' },
        { title: 'Generates', desc: 'Opening pitch, rapport lines, qualification questions' },
        { title: 'Creates', desc: 'Objection handling logic and closing pitch' },
        { title: 'Adds', desc: 'Follow-up logic' },
        { title: 'Stores', desc: 'Runs once per campaign and stores script in database' }
      ]
    },
    {
      id: 3,
      title: 'Call Analysis & Sentiment Agent',
      subtitle: 'Post-Call Analytics',
      role: 'Analyzes transcript after call completion.',
      icon: 'analytics',
      color: 'from-purple-500 to-violet-500',
      image: '/images/ai-conversation/callanalysis3.jpeg', // Your custom image 3
      features: [
        { label: 'Sentiment Detection', value: 'Positive / Neutral / Negative' },
        { label: 'Call Score', value: '1–10 rating' },
        { label: 'Lead Classification', value: 'Hot / Warm / Cold' },
        { label: 'Interest Probability', value: 'Percentage calculation' },
        { label: 'Usage', value: 'Analytics dashboard and lead prioritization' }
      ]
    },
    {
      id: 4,
      title: 'Smart Retry & Decision Agent',
      subtitle: 'Automation Decision Maker',
      role: 'Makes automation decisions after each call.',
      icon: 'smart_toy',
      color: 'from-pink-500 to-rose-500',
      image: '/images/ai-conversation/smartretry4.jpeg', // Your custom image 4
      decisions: [
        { condition: 'No answer', action: 'Retry (max 2 times)' },
        { condition: 'Busy', action: 'Schedule callback' },
        { condition: 'Interested', action: 'Push to CRM & notify sales team' },
        { condition: 'Negative sentiment', action: 'Mark as cold lead' },
        { condition: 'Manager request', action: 'Trigger human transfer' },
        { condition: 'Controls', action: 'Retry scheduling, CRM updates, and notifications' }
      ]
    }
  ];



  return (
    <div className="min-h-screen premium-bg text-slate-900 pt-20">
      {/* Header Section */}
      <div className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <Link to="/ai-center">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 text-slate-400 hover:text-white mb-8 transition-colors"
            >
              <span className="material-symbols-outlined">arrow_back</span>
              Back to AI Center
            </motion.button>
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white border border-slate-200 shadow-xl mb-8 group transition-all duration-700 hover:shadow-green-500/10">
              <span className="material-symbols-outlined text-green-600 group-hover:rotate-12 transition-transform">phone_in_talk</span>
              <span className="text-slate-900 font-black tracking-widest uppercase text-[10px]">AI Voice Technology</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
              AUTO HUMAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-emerald-600">CALLING</span> AGENT
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Intelligent outbound calling system powered by AI. Automate your sales calls with human-like conversations,
              real-time sentiment analysis, and smart decision-making.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Workflow Navigation Tabs */}
      <div className="sticky top-20 z-40 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex overflow-x-auto scrollbar-hide">
            {workflows.map((workflow, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-2 px-6 py-5 text-sm font-black transition-all whitespace-nowrap border-b-2 relative group ${activeTab === index
                  ? 'text-slate-900 border-green-500'
                  : 'text-slate-500 border-transparent hover:text-slate-900 hover:bg-slate-50'
                  }`}
              >
                <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${workflow.color} transition-opacity duration-300 ${activeTab === index ? 'opacity-100' : 'opacity-0'}`}></div>
                <span className={`material-symbols-outlined text-lg ${activeTab === index ? 'text-green-600' : 'text-slate-400'}`}>
                  {workflow.icon}
                </span>
                <span className="uppercase tracking-wider">{workflow.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Workflow Content */}
      <div className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-8"
          >
            {/* Workflow Image */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
              <div className="relative aspect-video bg-slate-950">
                <img
                  src={workflows[activeTab].image}
                  alt={`${workflows[activeTab].title} Workflow`}
                  className="w-full h-full object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-60"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <div className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-white font-black uppercase tracking-widest text-[10px]`}>
                    <span className="material-symbols-outlined text-sm">{workflows[activeTab].icon}</span>
                    Step {activeTab + 1} of 4
                  </div>
                </div>
              </div>
            </div>

            {/* Workflow Details */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-start gap-4 mb-6">
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${workflows[activeTab].color} flex items-center justify-center flex-shrink-0`}>
                  <span className="material-symbols-outlined text-white text-3xl">{workflows[activeTab].icon}</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tighter">
                    {workflows[activeTab].id}) {workflows[activeTab].title}
                  </h2>
                  <p className={`text-lg font-semibold bg-gradient-to-r ${workflows[activeTab].color} bg-clip-text text-transparent`}>
                    {workflows[activeTab].subtitle}
                  </p>
                </div>
              </div>

              <p className="text-xl text-slate-600 mb-8 pl-20 font-bold">
                <span className="font-black text-slate-900 uppercase tracking-wider text-sm mr-2">Role:</span> {workflows[activeTab].role}
              </p>

              {/* Steps/Features Grid */}
              <div className="pl-20">
                {activeTab === 0 && (
                  <div>
                    {/* Steps Grid */}
                    <div className="grid md:grid-cols-2 gap-4">
                      {workflows[activeTab].steps.map((step, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className={`flex items-start gap-5 p-6 rounded-2xl bg-white hover:bg-slate-50 transition-all duration-700 border border-slate-100 group shadow-sm hover:shadow-xl relative overflow-hidden ${workflows[activeTab].color.includes('blue') ? 'hover:border-blue-500/50' :
                            workflows[activeTab].color.includes('purple') ? 'hover:border-purple-500/50' :
                              workflows[activeTab].color.includes('emerald') ? 'hover:border-emerald-500/50' :
                                workflows[activeTab].color.includes('orange') ? 'hover:border-orange-500/50' :
                                  workflows[activeTab].color.includes('pink') ? 'hover:border-pink-500/50' :
                                    workflows[activeTab].color.includes('indigo') ? 'hover:border-indigo-500/50' :
                                      'hover:border-blue-500/50'
                            }`}
                        >
                          <div className={`absolute inset-0 bg-gradient-to-br ${workflows[activeTab].color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                          <span className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${workflows[activeTab].color} text-white flex items-center justify-center font-black shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                            {idx + 1}
                          </span>
                          <span className="text-slate-600 text-lg font-bold pt-1">{step}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {activeTab === 1 && (
                  <div className="space-y-4">
                    {workflows[activeTab].steps.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-5 p-6 rounded-2xl bg-slate-50 hover:bg-white transition-all duration-500 border border-slate-100 shadow-sm hover:shadow-md"
                      >
                        <span className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${workflows[activeTab].color} text-white flex items-center justify-center font-black shadow-lg`}>
                          {idx + 1}
                        </span>
                        <div className="pt-1">
                          <span className={`font-black uppercase tracking-tight bg-gradient-to-r ${workflows[activeTab].color} bg-clip-text text-transparent text-sm`}>
                            {item.title}
                          </span>
                          <div className="text-slate-600 text-lg font-bold mt-1">{item.desc}</div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 2 && (
                  <div className="grid md:grid-cols-2 gap-4">
                    {workflows[activeTab].features.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        className="p-8 rounded-2xl bg-slate-50 hover:bg-white transition-all duration-500 border border-slate-100 shadow-sm hover:shadow-md group"
                      >
                        <div className={`text-xs font-black uppercase tracking-widest bg-gradient-to-r ${workflows[activeTab].color} bg-clip-text text-transparent mb-3`}>
                          {item.label}
                        </div>
                        <div className="text-slate-900 text-3xl font-black group-hover:scale-105 transition-transform duration-500">{item.value}</div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {activeTab === 3 && (
                  <div className="space-y-4">
                    {workflows[activeTab].decisions.map((item, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-center gap-6 p-6 rounded-2xl bg-slate-50 hover:bg-white transition-all duration-500 border border-slate-100 shadow-sm hover:shadow-md"
                      >
                        <span className={`flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br ${workflows[activeTab].color} text-white flex items-center justify-center font-black shadow-lg`}>
                          {idx + 1}
                        </span>
                        <div className="flex-1 flex flex-col md:flex-row md:items-center gap-2 md:gap-6">
                          <span className={`font-black uppercase tracking-tight bg-gradient-to-r ${workflows[activeTab].color} bg-clip-text text-transparent text-sm`}>
                            {item.condition}
                          </span>
                          <span className="material-symbols-outlined text-slate-300 hidden md:block">arrow_forward_ios</span>
                          <span className="text-slate-600 text-lg font-bold">{item.action}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center">
              <button
                onClick={() => setActiveTab(Math.max(0, activeTab - 1))}
                disabled={activeTab === 0}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all ${activeTab === 0
                  ? 'bg-slate-50 text-slate-300 cursor-not-allowed'
                  : 'bg-white text-slate-900 hover:bg-slate-50 border-2 border-slate-900 shadow-lg'
                  }`}
              >
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Previous
              </button>

              <div className="flex gap-2">
                {workflows.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveTab(idx)}
                    className={`w-3 h-3 rounded-full transition-all duration-500 ${activeTab === idx
                      ? 'bg-green-600 w-10'
                      : 'bg-slate-200 hover:bg-slate-300'
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={() => setActiveTab(Math.min(workflows.length - 1, activeTab + 1))}
                disabled={activeTab === workflows.length - 1}
                className={`flex items-center gap-2 px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs transition-all ${activeTab === workflows.length - 1
                  ? 'bg-slate-50 text-slate-300 cursor-not-allowed'
                  : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-500/20 hover:scale-105'
                  }`}
              >
                Next
                <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </button>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 border border-white/10 bg-gradient-to-br from-green-500/10 to-cyan-500/10"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-6">
              Ready to Automate Your Calls?
            </h2>
            <p className="text-xl text-slate-600 mb-8 font-medium">
              Experience the power of AI-driven voice calling for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/book-demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-bold px-10 py-4 rounded-full transition-all shadow-2xl hover:shadow-green-500/25 flex items-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">phone_in_talk</span>
                  Book AI Voice Caller Demo
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-10 py-4 rounded-full transition-all shadow-xl shadow-blue-500/20 flex items-center gap-3 text-xl"
                >
                  <span className="material-symbols-outlined">contact_support</span>
                  Contact Sales
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AIVoiceCallerDetail;
