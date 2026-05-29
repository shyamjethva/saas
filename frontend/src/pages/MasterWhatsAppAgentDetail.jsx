import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const MasterWhatsAppAgentDetail = () => {
  const coreObjectives = [
    'Real-time WhatsApp automation',
    'AI-based intelligent responses',
    'Appointment booking automation',
    'Order management automation',
    'Lead capture and follow-up',
    'Owner real-time notification',
    'Google Sheet / Excel data storage',
    'Campaign-based automation',
    'Multi-platform integration (WhatsApp, Telegram, Instagram, GitHub)'
  ];

  const technologyStack = [
    {
      category: 'Messaging Platform',
      items: ['WhatsApp Business API (Twilio / Gupshup / Interakt / AiSensy)']
    },
    {
      category: 'Automation Engine',
      items: ['n8n (Self-hosted VPS Automation Engine)']
    },
    {
      category: 'AI Brain',
      items: ['OpenAI GPT-4.1 / GPT-4o']
    },
    {
      category: 'Data Storage',
      items: ['Google Sheets / Excel']
    },
    {
      category: 'Vector Database',
      items: ['Optional Vector DB (Supabase / Qdrant)']
    },
    {
      category: 'Additional Platforms',
      items: ['Telegram Bot API', 'Facebook / Instagram Webhook', 'GitHub Webhook Integration']
    },
    {
      category: 'Dashboard',
      items: ['Custom Dashboard (React / Next.js / Admin Panel)']
    }
  ];

  const workflowSteps = [
    'STEP 1: Incoming Message (WhatsApp / Telegram / Instagram / GitHub)',
    'STEP 2: Route by Intent (Inquiry / Appointment / Order / Lead)',
    'STEP 3: AI Processing (OpenAI Node)',
    'STEP 4: Prepare Structured Data',
    'STEP 5: Store Data (Lead / Order / Appointment Sheets)',
    'STEP 6: Normalize Platform Data',
    'STEP 7: Send Platform-Specific Reply',
    'STEP 8: Notify Business Owner',
    'STEP 9: Follow-up Automation (Wait / Cron)'
  ];

  const n8nNodes = [
    'Webhook Nodes (WhatsApp, Telegram, Instagram, GitHub)',
    'OpenAI Chat Model Node',
    'Structured JSON Output Parser',
    'Route by Intent (Switch / IF)',
    'Prepare Appointment Data',
    'Prepare Order Data',
    'Prepare Lead Data',
    'Store Appointment (Google Sheets)',
    'Store Order (Google Sheets)',
    'Store Lead (Google Sheets)',
    'Merge All Platforms',
    'Normalize Platform Data',
    'Send WhatsApp Reply',
    'Send Telegram Reply',
    'Send Instagram Reply',
    'Send GitHub Comment',
    'Notify Business Owner'
  ];

  const securityFeatures = [
    'Multi-business isolation (Separate Knowledge per Business)',
    'API Rate Limit Handling',
    'Manual takeover option',
    'Logging and Audit trail',
    'Error handling with retry logic',
    'Scalable VPS deployment'
  ];

  return (
    <div className="min-h-screen premium-bg text-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden bg-slate-50 border-b border-slate-200">
        <div className="relative z-10 px-6 py-12">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/ai-center"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 font-black uppercase tracking-widest text-[10px]"
            >
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              Back to AI Center
            </Link>

            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-slate-900 mb-6 shadow-2xl shadow-slate-900/40">
                <span className="material-symbols-outlined text-white text-5xl">smart_toy</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-black mb-4 tracking-tighter font-space-grotesk leading-none">
                MASTER <span className="text-slate-400 pb-2">WHATSAPP</span> CHAT AGENT
              </h1>
              <p className="text-xl text-slate-600 font-black uppercase tracking-[0.2em]">Complete Workflow & System Architecture</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Hero Image Section */}
            <div className="rounded-3xl overflow-hidden border border-slate-200 shadow-2xl">
              <div className="relative aspect-video bg-slate-100">
                <img
                  src="/images/ai-conversation/masterwpagent.jpeg"
                  alt="Master WhatsApp Automation Agent Workflow"
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-slate-900 text-white font-black uppercase tracking-widest text-[10px] shadow-xl shadow-slate-900/40">
                    <span className="material-symbols-outlined text-sm font-black">smart_toy</span>
                    Master WhatsApp Automation System
                  </div>
                </div>
              </div>
            </div>

            {/* Core Objectives Section */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-slate-900 text-3xl">target</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tighter heading-underline active">
                    1. CORE OBJECTIVE
                  </h2>
                  <p className="text-slate-400 text-lg">
                    Comprehensive automation system for multi-platform customer engagement
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {coreObjectives.map((objective, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`flex items-start gap-5 p-6 rounded-[2rem] bg-slate-50 hover:bg-white transition-all duration-700 border border-slate-100 group relative overflow-hidden shadow-sm hover:shadow-xl ${index % 4 === 0 ? 'hover:border-blue-500/50' :
                      index % 4 === 1 ? 'hover:border-purple-500/50' :
                        index % 4 === 2 ? 'hover:border-emerald-500/50' :
                          'hover:border-orange-500/50'
                      }`}
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br from-indigo-600 to-purple-600 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                    <span className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 text-white flex items-center justify-center font-black shadow-lg group-hover:scale-110 transition-transform duration-500">
                      {index + 1}
                    </span>
                    <span className="text-slate-600 text-lg font-bold pt-1">{objective}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Technology Stack Section */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-700 to-sky-500 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-slate-900 text-3xl">construction</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tighter heading-underline active">
                    2. SYSTEM TECHNOLOGY STACK
                  </h2>
                  <p className="text-slate-400 text-lg">
                    Enterprise-grade technology architecture for robust automation
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {technologyStack.map((category, catIndex) => (
                  <motion.div
                    key={catIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: catIndex * 0.1 }}
                    className={`p-8 rounded-[2.5rem] bg-white hover:bg-slate-50 transition-all duration-700 border border-slate-100 group relative overflow-hidden shadow-sm hover:shadow-xl ${catIndex % 4 === 0 ? 'hover:border-blue-500/50' :
                      catIndex % 4 === 1 ? 'hover:border-purple-500/50' :
                        catIndex % 4 === 2 ? 'hover:border-emerald-500/50' :
                          'hover:border-orange-500/50'
                      }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-600 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"></div>
                    <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                      <span className="material-symbols-outlined text-blue-600 p-2 bg-blue-50 rounded-lg">category</span>
                      {category.category}
                    </h3>
                    <ul className="space-y-3">
                      {category.items.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3 text-slate-600 font-bold group-hover:text-blue-600 transition-colors">
                          <span className="material-symbols-outlined text-blue-400 text-sm mt-1">verified</span>
                          <span className="text-lg">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Workflow Logic Section */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-slate-900 text-3xl">timeline</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tighter heading-underline active">
                    3. WORKFLOW LOGIC ARCHITECTURE
                  </h2>
                  <p className="text-slate-400 text-lg">
                    Step-by-step automation workflow for intelligent customer interactions
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {workflowSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-center gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100"
                  >
                    <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-teal-500 text-slate-900 flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </span>
                    <div className="flex-1">
                      <span className="text-slate-900 font-bold text-lg">{step.split(':')[0]}:</span>
                      <span className="text-slate-600 text-lg ml-2">{step.split(':')[1]}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* n8n Architecture Section */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-slate-900 text-3xl">account_tree</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tighter heading-underline active">
                    4. n8n NODE ARCHITECTURE BREAKDOWN
                  </h2>
                  <p className="text-slate-400 text-lg">
                    Detailed node configuration for complete automation workflow
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                {n8nNodes.map((node, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.03 }}
                    className="p-5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100"
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 text-slate-900 flex items-center justify-center text-sm font-bold">
                        {index + 1}
                      </span>
                      <span className="text-slate-600 text-lg pt-1">{node}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>



            {/* Security & Scalability Section */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-slate-900 text-3xl">security</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tighter heading-underline active">
                    5. SECURITY & SCALABILITY DESIGN
                  </h2>
                  <p className="text-slate-400 text-lg">
                    Enterprise-grade security and scalable architecture
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {securityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="flex items-start gap-4 p-5 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100"
                  >
                    <span className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-br from-red-500 to-orange-500 text-slate-900 flex items-center justify-center font-bold">
                      <span className="material-symbols-outlined text-sm">shield</span>
                    </span>
                    <span className="text-slate-600 text-lg pt-1">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <section className="py-16 px-6 text-center">
        <div className="max-w-6xl mx-auto">
          <div className="glass-card rounded-[3rem] p-12 md:p-20 border border-white/20 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">Ready to Automate <span className="text-indigo-600">Your Communication?</span></h2>
              <p className="text-slate-600 text-xl mb-10 max-w-2xl mx-auto font-medium">
                Deploy intelligent AI agents across all your messaging channels and never miss a lead again.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-slate-900 text-white font-bold h-14 px-10 rounded-full transition-all shadow-xl shadow-slate-900/20 flex items-center gap-3"
                  >
                    <span className="material-symbols-outlined">launch</span>
                    Deploy Master Agent
                  </motion.button>
                </Link>
                <Link to="/ai-center">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white/10 hover:bg-white/20 text-slate-600 font-semibold h-14 px-8 rounded-full border border-slate-200 backdrop-blur-sm"
                  >
                    Explore More Agents
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MasterWhatsAppAgentDetail;
