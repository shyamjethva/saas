import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const CaseStudyModal = ({ isOpen, onClose, caseStudy }) => {
  const [activeTab, setActiveTab] = useState('overview');

  if (!caseStudy) return null;

  const tabs = [
    { id: 'overview', label: 'Overview', icon: 'description' },
    { id: 'challenge', label: 'The Challenge', icon: 'warning' },
    { id: 'solution', label: 'Our Solution', icon: 'build' },
    { id: 'results', label: 'Results', icon: 'trending_up' },
    { id: 'testimonials', label: 'Client Feedback', icon: 'reviews' }
  ];

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="relative w-full max-w-6xl max-h-[90vh] overflow-hidden bg-white rounded-consistent-3xl border border-slate-200 shadow-[0_0_100px_rgba(0,0,0,0.1)]"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 bg-slate-50 border-b border-slate-200 p-8">
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter font-space-grotesk">{caseStudy.title}</h2>
                  <p className="text-blue-600 font-black uppercase tracking-widest text-xs">{caseStudy.company}</p>
                  <p className="text-slate-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2">{caseStudy.industry} • {caseStudy.duration}</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/10"
                >
                  <span className="material-symbols-outlined text-2xl">close</span>
                </button>
              </div>
            </div>

            {/* Tab Navigation */}
            <div className="sticky top-[108px] z-10 bg-white/80 backdrop-blur-sm border-b border-slate-200 px-8">
              <div className="flex overflow-x-auto gap-2 py-4 no-scrollbar">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-3 px-6 py-2.5 rounded-full font-black uppercase tracking-widest text-[10px] transition-all whitespace-nowrap ${activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20'
                        : 'text-slate-500 hover:text-slate-900 hover:bg-slate-50'
                      }`}
                  >
                    <span className="material-symbols-outlined text-sm font-black">{tab.icon}</span>
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
              {/* Overview Tab */}
              {activeTab === 'overview' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-slate-50 rounded-consistent-2xl p-8 border border-slate-100 shadow-sm transition-all">
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-400">business</span>
                        Industry
                      </h3>
                      <p className="text-slate-600">{caseStudy.industryDetails}</p>
                    </div>
                    <div className="bg-slate-50 rounded-consistent-2xl p-8 border border-slate-100 shadow-sm transition-all">
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-blue-400">groups</span>
                        Company Size
                      </h3>
                      <p className="text-slate-600">{caseStudy.companySize}</p>
                    </div>
                    <div className="bg-slate-50 rounded-consistent-2xl p-8 border border-slate-100 shadow-sm transition-all">
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-purple-400">schedule</span>
                        Timeline
                      </h3>
                      <p className="text-slate-600">{caseStudy.timeline}</p>
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-consistent-2xl p-8 border border-slate-100 shadow-sm transition-all">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Project Summary</h3>
                    <p className="text-slate-600 leading-relaxed">{caseStudy.summary}</p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 rounded-consistent-2xl p-8 border border-slate-100 shadow-sm transition-all">
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-yellow-400">lightbulb</span>
                        Key Objectives
                      </h3>
                      <ul className="space-y-2">
                        {caseStudy.objectives.map((objective, index) => (
                          <li key={index} className="flex items-start gap-2 text-slate-600">
                            <span className="text-green-400 mt-1">•</span>
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-slate-50 rounded-consistent-2xl p-8 border border-slate-100 shadow-sm transition-all">
                      <h3 className="text-lg font-bold text-slate-900 mb-4 flex items-center gap-2">
                        <span className="material-symbols-outlined text-cyan-400">rocket_launch</span>
                        Technologies Used
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-gradient-to-r from-green-500/20 to-blue-500/20 text-green-400 rounded-full text-sm border border-green-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Challenge Tab */}
              {activeTab === 'challenge' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-slate-50 rounded-consistent-2xl p-8 border border-slate-100 shadow-sm transition-all">
                    <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                      <span className="material-symbols-outlined text-red-400">warning</span>
                      Business Challenges Faced
                    </h3>
                    <div className="space-y-4">
                      {caseStudy.challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start gap-4 p-4 bg-white/5 rounded-lg">
                          <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="material-symbols-outlined text-red-400 text-sm">error</span>
                          </div>
                          <div>
                            <h4 className="font-bold text-slate-900 mb-1">{challenge.title}</h4>
                            <p className="text-slate-600 text-sm">{challenge.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-slate-50 rounded-consistent-2xl p-8 border border-slate-100 shadow-sm transition-all bg-gradient-to-br from-red-500/10 to-orange-500/10">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Impact Before Our Solution</h3>
                    <div className="grid md:grid-cols-3 gap-4">
                      {caseStudy.preSolutionMetrics.map((metric, index) => (
                        <div key={index} className="text-center p-4 bg-black/20 rounded-lg">
                          <div className="text-3xl font-black text-red-400 mb-2">{metric.value}</div>
                          <div className="text-slate-600 text-sm">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Solution Tab */}
              {activeTab === 'solution' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-slate-50 rounded-consistent-2xl p-8 border border-slate-100 shadow-sm transition-all">
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-400">build</span>
                      Our Strategic Approach
                    </h3>
                    <div className="space-y-6">
                      {caseStudy.solutions.map((solution, index) => (
                        <div key={index} className="flex items-start gap-4">
                          <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="material-symbols-outlined text-green-400">check</span>
                          </div>
                          <div className="flex-1">
                            <h4 className="font-bold text-slate-900 mb-2">{solution.title}</h4>
                            <p className="text-slate-600 mb-3">{solution.description}</p>
                            {solution.benefits && (
                              <div className="flex flex-wrap gap-2">
                                {solution.benefits.map((benefit, i) => (
                                  <span
                                    key={i}
                                    className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs"
                                  >
                                    {benefit}
                                  </span>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-slate-50 rounded-consistent-2xl p-8 border border-slate-100 shadow-sm transition-all">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">Implementation Timeline</h3>
                      <div className="space-y-3">
                        {caseStudy.implementation.map((phase, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-3 h-3 rounded-full bg-green-400"></div>
                            <div>
                              <div className="text-slate-900 font-medium">{phase.title}</div>
                              <div className="text-slate-400 text-sm">{phase.duration}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-slate-50 rounded-consistent-2xl p-8 border border-slate-100 shadow-sm transition-all">
                      <h3 className="text-lg font-bold text-slate-900 mb-4">Team Structure</h3>
                      <div className="space-y-3">
                        {caseStudy.team.map((member, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-slate-900 text-xs font-bold">
                              {member.name.charAt(0)}
                            </div>
                            <div>
                              <div className="text-slate-900 font-medium">{member.name}</div>
                              <div className="text-slate-400 text-sm">{member.role}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Results Tab */}
              {activeTab === 'results' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">Measurable Results</h3>
                    <p className="text-slate-400">Real business impact achieved</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6 mb-8">
                    {caseStudy.results.map((result, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-slate-50 rounded-consistent-2xl p-8 border border-slate-100 shadow-sm transition-all text-center  transition-all"
                      >
                        <div className="text-5xl font-black text-green-400 mb-3">{result.value}</div>
                        <div className="text-slate-900 font-bold mb-2">{result.metric}</div>
                        <div className="text-slate-400 text-sm">{result.description}</div>
                      </motion.div>
                    ))}
                  </div>

                  <div className="bg-slate-50 rounded-consistent-2xl p-8 border border-slate-100 shadow-sm transition-all bg-gradient-to-br from-green-500/10 to-blue-500/10">
                    <h3 className="text-xl font-bold text-slate-900 mb-4">Return on Investment</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="text-lg font-bold text-green-400 mb-3">Financial Impact</h4>
                        <ul className="space-y-2 text-slate-600">
                          <li className="flex items-center gap-2">
                            <span className="text-green-400">•</span>
                            Initial Investment: {caseStudy.roi.investment}
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-400">•</span>
                            Revenue Increase: {caseStudy.roi.revenueIncrease}
                          </li>
                          <li className="flex items-center gap-2">
                            <span className="text-green-400">•</span>
                            Cost Savings: {caseStudy.roi.costSavings}
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-lg font-bold text-green-400 mb-3">ROI Calculation</h4>
                        <div className="text-center p-4 bg-black/20 rounded-lg">
                          <div className="text-4xl font-black text-green-400 mb-2">
                            {caseStudy.roi.percentage}
                          </div>
                          <div className="text-slate-900 font-bold">Return on Investment</div>
                          <div className="text-slate-400 text-sm mt-2">
                            Achieved in {caseStudy.roi.timeframe}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Testimonials Tab */}
              {activeTab === 'testimonials' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="text-center mb-8">
                    <h3 className="text-3xl font-bold text-slate-900 mb-2">Client Testimonials</h3>
                    <p className="text-slate-400">What our clients say about working with us</p>
                  </div>

                  <div className="space-y-6">
                    {caseStudy.testimonials.map((testimonial, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-slate-50 rounded-consistent-2xl p-8 border border-slate-100 shadow-sm transition-all"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center text-slate-900 font-bold text-xl flex-shrink-0">
                            {testimonial.name.charAt(0)}
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-3">
                              <div className="font-bold text-slate-900">{testimonial.name}</div>
                              <div className="text-slate-400">•</div>
                              <div className="text-slate-400">{testimonial.position}</div>
                              <div className="text-slate-500">at {testimonial.company}</div>
                            </div>
                            <div className="flex items-center gap-1 mb-4">
                              {[...Array(5)].map((_, i) => (
                                <span
                                  key={i}
                                  className={`material-symbols-outlined text-lg ${i < testimonial.rating ? 'text-yellow-400' : 'text-slate-600'
                                    }`}
                                >
                                  star
                                </span>
                              ))}
                            </div>
                            <p className="text-slate-600 italic mb-4">"{testimonial.quote}"</p>
                            <div className="flex flex-wrap gap-2">
                              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                                {testimonial.projectType}
                              </span>
                              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                                {testimonial.duration}
                              </span>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyModal;