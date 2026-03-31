import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const LeadGenerationDetail = () => {
  return (
    <div className="min-h-screen premium-bg text-slate-900">
      {/* Header */}
      <div className="relative overflow-hidden bg-white border-b border-slate-100 uppercase">
        {/* Background Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="relative z-10 px-6 py-24">
          <div className="max-w-6xl mx-auto">
            <Link
              to="/ai-center"
              className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 transition-colors mb-8 font-black uppercase tracking-widest text-[10px]"
            >
              <span className="material-symbols-outlined text-sm font-black">arrow_back</span>
              Back to AI Center
            </Link>

            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-24 h-24 rounded-3xl bg-blue-600 mb-6 shadow-2xl shadow-blue-500/40">
                <span className="material-symbols-outlined text-white text-5xl">person_search</span>
              </div>
              <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-6 tracking-tighter leading-none">
                MASTER <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">LEAD GENERATION</span> AGENT
              </h1>
              <p className="text-xl text-slate-500 font-black uppercase tracking-[0.3em]">Automated Multi-Platform Lead Intelligence</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-12"
          >
            {/* Hero Image Section */}
            <div className="rounded-[3rem] overflow-hidden border border-slate-200 shadow-2xl bg-white p-4">
              <div className="relative aspect-video bg-slate-50 rounded-2xl overflow-hidden">
                <img
                  src="/images/ai-conversation/leadgenerate.jpeg"
                  alt="Master Lead Generation Automation Agent Workflow"
                  className="w-full h-full object-contain"
                />
                <div className="absolute bottom-6 left-6 right-6">
                  <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] shadow-xl shadow-blue-500/40">
                    <span className="material-symbols-outlined text-sm font-black">person_search</span>
                    Master Lead Generation Automation
                  </div>
                </div>
              </div>
            </div>

            {/* OVERVIEW Section */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-3xl">summarize</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tighter">
                    1. OVERVIEW
                  </h2>
                  <p className="text-slate-500 text-lg font-bold">
                    Comprehensive multi-platform lead intelligence system
                  </p>
                </div>
              </div>

              <div className="prose max-w-none">
                <p className="text-slate-600 text-lg leading-relaxed font-medium">
                  The <span className="font-black text-blue-600">MASTER Lead Generation AI Agent</span> is a fully automated multi-platform intelligence system built inside n8n. It automatically detects B2B or B2C intent, generates keyword strategies, hunts targeted leads from multiple platforms, filters irrelevant data, enriches qualified leads, and stores structured output inside CRM or dashboard systems.
                </p>
              </div>
            </div>

            {/* WORKING PROCESS Section */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-green-500 to-emerald-500 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-3xl">timeline</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tighter">
                    2. WORKING PROCESS
                  </h2>
                  <p className="text-slate-500 text-lg font-bold">
                    Step-by-step automated lead generation workflow
                  </p>
                </div>
              </div>

              <div className="space-y-6">
                {[
                  { id: 1, title: "User Input Layer", desc: "City, Sector, Product/Service, Platform selection and simple prompt.", color: "from-blue-600 to-cyan-500" },
                  { id: 2, title: "AI Intent Engine", desc: "Detects B2B/B2C mode, target audience, buying intent, and decision maker.", color: "from-purple-600 to-pink-600" },
                  { id: 3, title: "Keyword Expansion Engine", desc: "Generates high-intent, commercial, local, and long-tail keywords.", color: "from-emerald-600 to-teal-600" },
                  { id: 4, title: "Multi-Source Data Hunter", desc: "Extracts data from Google, Websites, LinkedIn, GitHub, and Directories.", color: "from-orange-600 to-red-600" },
                  { id: 5, title: "Data Cleaning & Validation", desc: "Removes duplicates, invalid emails, wrong sector leads.", color: "from-pink-600 to-purple-600" },
                  { id: 6, title: "AI Qualification Layer", desc: "Approves only relevant and high probability leads.", color: "from-cyan-600 to-blue-600" },
                  { id: 7, title: "Lead Enrichment Engine", desc: "Adds business summary, pitch line, pain points, and deal probability.", color: "from-teal-600 to-emerald-600" },
                  { id: 8, title: "Output Layer", desc: "Saves structured leads to Google Sheets / CRM with dashboard analytics.", color: "from-blue-600 to-indigo-600" }
                ].map((item, idx) => (
                  <div key={idx} className={`flex items-start gap-5 p-6 rounded-2xl bg-white hover:bg-slate-50 transition-all duration-700 border border-slate-100 group shadow-sm hover:shadow-xl relative overflow-hidden ${item.color.includes('blue') ? 'hover:border-blue-500/50' :
                    item.color.includes('purple') ? 'hover:border-purple-500/50' :
                      item.color.includes('emerald') ? 'hover:border-emerald-500/50' :
                        item.color.includes('orange') ? 'hover:border-orange-500/50' :
                          item.color.includes('pink') ? 'hover:border-pink-500/50' :
                            item.color.includes('indigo') ? 'hover:border-indigo-500/50' :
                              item.color.includes('teal') ? 'hover:border-teal-500/50' :
                                'hover:border-blue-500/50'
                    }`}>
                    <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                    <span className={`flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br ${item.color} text-white flex items-center justify-center font-black text-xl shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                      {item.id}
                    </span>
                    <div>
                      <h3 className={`text-xl font-black mb-2 transition-colors duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${item.color}`}>{item.title}</h3>
                      <p className="text-slate-600 font-bold leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* DAILY CAPACITY Section */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-3xl">speed</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tighter">
                    3. DAILY LEAD GENERATION CAPACITY
                  </h2>
                  <p className="text-slate-500 text-lg font-bold">
                    High-volume automated lead processing capabilities
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div className="p-8 rounded-[2rem] bg-blue-50/50 border border-blue-100 shadow-sm">
                    <h3 className="text-xl font-black text-blue-700 mb-4 uppercase tracking-wider">Designed Target Output</h3>
                    <ul className="space-y-4 text-slate-600">
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-blue-600 text-[10px] font-black">check</span>
                        </div>
                        <span className="font-medium"><span className="font-black text-slate-900">Minimum Raw Leads per Day:</span> <span className="font-black text-blue-600">800+</span></span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="material-symbols-outlined text-blue-600 text-[10px] font-black">check</span>
                        </div>
                        <span className="font-medium"><span className="font-black text-slate-900">Qualified High-Quality Leads per Day:</span> <span className="font-black text-blue-600">300 to 500</span></span>
                      </li>
                    </ul>
                  </div>

                  <div className="p-8 rounded-[2rem] bg-purple-50/50 border border-purple-100 shadow-sm">
                    <h3 className="text-xl font-black text-purple-700 mb-4 uppercase tracking-wider">Source Distribution</h3>
                    <ul className="space-y-4 text-slate-600">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                        <span className="font-medium"><span className="font-black text-slate-900">40%</span> Google & Website</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                        <span className="font-medium"><span className="font-black text-slate-900">30%</span> Google Maps / Business Listings</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                        <span className="font-medium"><span className="font-black text-slate-900">20%</span> LinkedIn Decision Makers</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-purple-400 mt-2"></div>
                        <span className="font-medium"><span className="font-black text-slate-900">10%</span> Other Platforms</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="p-8 rounded-[2rem] bg-emerald-50/50 border border-emerald-100 shadow-sm flex flex-col h-full">
                  <h3 className="text-xl font-black text-emerald-700 mb-6 uppercase tracking-wider">Quality Focus</h3>
                  <p className="text-slate-600 text-lg leading-relaxed font-medium flex-grow">
                    Quality is prioritized over quantity to ensure high conversion probability.
                    The system focuses on delivering highly qualified leads that match your
                    specific business requirements and have strong conversion potential.
                  </p>
                  <div className="mt-8 p-6 rounded-2xl bg-emerald-600 shadow-xl shadow-emerald-500/20">
                    <div className="flex items-center gap-3 text-white font-black uppercase tracking-widest text-xs">
                      <span className="material-symbols-outlined text-lg">verified</span>
                      <span>High Conversion Probability Guaranteed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* CORE BENEFITS Section */}
            <div className="bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl">
              <div className="flex items-start gap-4 mb-8">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-white text-3xl">workspace_premium</span>
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-2 tracking-tighter">
                    4. CORE BENEFITS
                  </h2>
                  <p className="text-slate-400 text-lg">
                    Key advantages of the Master Lead Generation System
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold">
                    1
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Single AI Agent</h3>
                    <p className="text-slate-600">With Auto B2B/B2C Detection</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold">
                    2
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Multi-Platform Intelligence</h3>
                    <p className="text-slate-600">Lead Intelligence System</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold">
                    3
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Self-Optimizing Engine</h3>
                    <p className="text-slate-600">Keyword Strategy Engine</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold">
                    4
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">AI-Based Qualification</h3>
                    <p className="text-slate-600">Filtering & Processing</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold">
                    5
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Lead Enrichment</h3>
                    <p className="text-slate-600">Smart Pitch Suggestions</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold">
                    6
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">CEO-Level Dashboard</h3>
                    <p className="text-slate-600">Analytics & Reporting</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold">
                    7
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Universal Compatibility</h3>
                    <p className="text-slate-600">Reusable Across Any Sector or City</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-6 rounded-2xl bg-slate-50 hover:bg-slate-100 transition-colors border border-slate-100">
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-orange-500 to-red-500 text-white flex items-center justify-center font-bold">
                    8
                  </span>
                  <div>
                    <h3 className="text-xl font-bold text-slate-900 mb-2">Scalable Infrastructure</h3>
                    <p className="text-slate-600">High Volume Processing</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LeadGenerationDetail;