import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { consultationAPI } from '../services/api';
import { SERVICE_SECTIONS } from '../data/servicesData';
import ServicesDNAImageBackground from '../components/ServicesDNAImageBackground';

// Default Home View Data
const defaultBenefits = [
  {
    title: 'Smart Technology',
    description: 'Custom-built solutions using modern tech stacks for maximum performance',
    icon: 'smart_toy',
    color: 'from-slate-900 to-slate-700',
    stat: 'Elite',
    statLabel: 'Tech Quality'
  },
  {
    title: 'Powerful Marketing',
    description: 'ROI-focused digital strategies to increase your visibility and sales',
    icon: 'trending_up',
    color: 'from-slate-800 to-slate-600',
    stat: 'High',
    statLabel: 'ROI Growth'
  },
  {
    title: 'Automation Systems',
    description: 'Automate manual work using AI calling, chat, and lead capture systems',
    icon: 'bolt',
    color: 'from-slate-700 to-slate-500',
    stat: '24/7',
    statLabel: 'Autopilot'
  },
  {
    title: 'Business Growth',
    description: 'Everything we build is designed with one goal: To grow your business faster',
    icon: 'auto_graph',
    color: 'from-slate-900 to-black',
    stat: '10X',
    statLabel: 'Scalability'
  },
  {
    title: 'All-in-One Solution',
    description: 'Website, Software, Marketing, and AI Automation – All under one roof',
    icon: 'apps',
    color: 'from-slate-800 to-slate-700',
    stat: 'Full',
    statLabel: 'Ecosystem'
  }
];

const defaultProcess = [
  {
    step: 1,
    title: 'Requirement Understanding',
    description: 'We understand your business, goals & challenges',
    icon: 'psychology',
    color: 'from-slate-900 to-slate-800'
  },
  {
    step: 2,
    title: 'Planning & Strategy',
    description: 'We create a clear roadmap & solution plan',
    icon: 'map',
    color: 'from-slate-800 to-slate-700'
  },
  {
    step: 3,
    title: 'Design & Development',
    description: 'Execution with best technology and design practices',
    icon: 'code',
    color: 'from-slate-700 to-slate-600'
  },
  {
    step: 4,
    title: 'Testing & Launch',
    description: 'Quality check and smooth deployment',
    icon: 'rocket_launch',
    color: 'from-slate-600 to-slate-500'
  },
  {
    step: 5,
    title: 'Support & Growth',
    description: 'Ongoing support + optimization for better results',
    icon: 'auto_graph',
    color: 'from-slate-500 to-slate-400'
  }
];

const sectionImages = {
  'website-development': '/images/web-dev-service.png',
  'software-development': '/images/software-dev-service.png',
  'apk-development': '/images/mobile-dev-service.png',
  'saas-development': '/images/saas-service.png',
  'digital-marketing': '/images/digital-marketing-service.png',
  'performance-marketing': '/images/performance-marketing-service.png',
  'sales-support': '/images/software-dev-service.png',
  'ai-agents': '/images/saas-service.png',
  'physical-marketing': '/images/physical-marketing-service.png',
};

const ServicesPage = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [isConsultationOpen, setIsConsultationOpen] = useState(false);
  const [consultationData, setConsultationData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
    timezone: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleConsultationSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');
    try {
      const formattedPhone = consultationData.phone.replace(/\s+/g, '').replace(/[^0-9+]/g, '');
      const response = await consultationAPI.createConsultation({ ...consultationData, phone: formattedPhone });
      if (response.data.success) {
        alert('Consultation scheduled successfully!');
        setIsConsultationOpen(false);
      } else {
        setSubmitError(response.data.error || 'Failed to schedule');
      }
    } catch (error) {
      setSubmitError('Network error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="homepage-monochrome premium-bg relative overflow-x-hidden pt-24 pb-0">
      <div className="relative z-10">
      </div>

      {/* Global Premium Background - Pure White */}
      <div className="fixed inset-0 pointer-events-none z-0 bg-white">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.02]"></div>
      </div>

      {/* Hero Section */}
      <section className="relative z-20 px-6 py-12 text-center">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter pb-4 leading-[1.1] heading-underline active px-2">
              <span className="text-black block">Complete IT & Digital Growth</span>
              <span className="text-slate-500 block pb-2 leading-tight">
                Solutions Under One Roof
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
              We help businesses grow faster with smart technology, powerful marketing, and automation systems.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-16">
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-8 py-4 bg-slate-900 text-white rounded-2xl font-black text-xs uppercase tracking-widest shadow-xl shadow-slate-900/10 hover:bg-slate-800 active:scale-95 transition-all"
              >
                Get Free Consultation
              </button>
              <button
                onClick={() => setIsConsultationOpen(true)}
                className="px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-2xl font-black text-xs uppercase tracking-widest shadow-lg hover:bg-slate-50 active:scale-95 transition-all"
              >
                Start Your Project
              </button>
            </div>

            {/* Anchored Navigation - 6 top, 4 bottom */}
            <div className="flex flex-col items-center gap-3 mb-20">
              <div className="flex flex-wrap justify-center gap-3">
                <button
                  onClick={() => setActiveSection(null)}
                  className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-sm 
                    ${activeSection === null
                      ? 'bg-slate-900 text-white shadow-slate-900/10 scale-105'
                      : 'bg-slate-200 text-slate-600 border border-slate-100'}`}
                >
                  Overview
                </button>
                {SERVICE_SECTIONS.slice(0, 5).map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-sm 
                      ${activeSection === section.id
                        ? 'bg-slate-900 text-white shadow-slate-900/10 scale-105'
                        : (index % 2 === 0 
                            ? 'bg-slate-50 text-slate-500 border border-slate-100' 
                            : 'bg-slate-200 text-slate-600 border border-slate-100')}`}
                  >
                    {section.title.split(' ')[0]}
                  </button>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {SERVICE_SECTIONS.slice(5).map((section, index) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-sm 
                      ${activeSection === section.id
                        ? 'bg-slate-900 text-white shadow-slate-900/10 scale-105'
                        : (index % 2 === 0 
                            ? 'bg-slate-200 text-slate-600 border border-slate-100' 
                            : 'bg-slate-50 text-slate-500 border border-slate-100')}`}
                  >
                    {section.title.split(' ')[0]}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="relative z-20 px-6 pb-12">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            {activeSection === null ? (
              <motion.div
                key="overview"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="grid gap-24"
              >
                {/* Benefits Section - NO BOXES */}
                <div className="flex flex-wrap justify-center gap-12">
                  {defaultBenefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="group w-full sm:w-[calc(45%)] lg:w-[calc(30%)] px-4 sm:px-0 text-center sm:text-left"
                    >
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center text-slate-600 mb-6 mx-auto sm:mx-0 shadow-lg shadow-slate-200/50 group-hover:scale-110 transition-transform`}>
                        <span className="material-symbols-outlined text-2xl">{benefit.icon}</span>
                      </div>
                      <h3 className="text-xl font-black text-slate-900 mb-3 uppercase tracking-tight">{benefit.title}</h3>
                      <p className="text-slate-600 font-medium leading-relaxed">{benefit.description}</p>
                    </motion.div>
                  ))}
                </div>

                {/* Development Process Section - NO BOXES */}
                <div className="pt-24 pb-8">
                   <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tighter uppercase">
                      <span className="text-black">Our Develo</span><span className="text-slate-400">pment Process</span>
                    </h2>
                    <p className="text-slate-500 font-bold text-xs uppercase tracking-[0.3em]">How we bring your vision to life</p>
                  </div>
                  <div className="grid md:grid-cols-5 gap-8">
                    {defaultProcess.map((step, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center"
                      >
                        <div className={`w-16 h-16 rounded-full border border-slate-200 flex items-center justify-center mx-auto mb-6 text-xl font-black shadow-lg
                          ${index % 2 === 0 ? 'bg-slate-300 text-slate-900' : 'bg-slate-100 text-slate-600'}`}
                        >
                          {step.step}
                        </div>
                         <h4 className="text-xl font-black text-slate-900 mb-2 uppercase tracking-tight">{step.title}</h4>
                        <p className="text-sm text-slate-500 font-light leading-relaxed">{step.description}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div
                key="section-detail"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                {SERVICE_SECTIONS.filter(s => s.id === activeSection).map((section) => (
                  <div key={section.id} className="space-y-16">
                    <div className="grid lg:grid-cols-2 gap-16 items-start">
                      <div className="space-y-8">
                        <div className="pt-8">
                          <h2 className="text-5xl font-black text-slate-950 mb-4 tracking-tight uppercase">{section.title}</h2>
                          <p className="text-xl text-slate-600 font-medium leading-relaxed">{section.description}</p>
                        </div>
                        <div className="space-y-10">
                          {section.services.map((service, idx) => (
                            <div key={idx} className="space-y-4">
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center`}>
                                  <span className="material-symbols-outlined text-slate-700 text-sm">{service.icon}</span>
                                </div>
                                <h4 className="text-xl font-black text-slate-900 uppercase tracking-tight">{service.category}</h4>
                              </div>
                              <p className="text-slate-500 font-medium text-sm pl-11">{service.description}</p>
                              <div className="grid sm:grid-cols-2 gap-4 pl-11">
                                {service.items.map((item, itemIdx) => (
                                <div key={itemIdx} className="flex items-center gap-3 group">
                                    <span className="material-symbols-outlined text-slate-400 text-lg">check_circle</span>
                                    <span className="text-slate-700 font-bold text-sm">{item}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                      <div className="lg:pt-8 p-10 space-y-10">
                        {sectionImages[section.id] && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                             className="relative mb-6 group lg:mt-[-50px] overflow-hidden rounded-[2rem] shadow-xl"
                          >
                            <img
                              src={sectionImages[section.id]}
                              alt={section.title}
                              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                          </motion.div>
                        )}
                        {(section.tech || section.tools) && (
                          <div className="space-y-10">
                            {section.tech && (
                              <div>
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-slate-900 text-xl">terminal</span>
                                  </div>
                                  <div>
                                    <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mb-1">Core Architecture</h5>
                                    <p className="text-sm font-bold text-slate-800">Technology Stack</p>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {section.tech.split(',').map((item, idx) => (
                                    <div key={idx} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2 group hover:border-slate-900 hover:bg-white hover:shadow-lg hover:shadow-slate-900/10 transition-all cursor-default">
                                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900 group-hover:scale-150 transition-transform" />
                                      <span className="text-[11px] font-black text-slate-700 uppercase tracking-wider">{item.trim()}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                            {section.tools && (
                              <div>
                                <div className="flex items-center gap-3 mb-6">
                                  <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center">
                                    <span className="material-symbols-outlined text-slate-900 text-xl">build</span>
                                  </div>
                                  <div>
                                    <h5 className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] leading-none mb-1">Ecosystem</h5>
                                    <p className="text-sm font-bold text-slate-800">Tools & Platforms</p>
                                  </div>
                                </div>
                                <div className="flex flex-wrap gap-2">
                                  {section.tools.split(',').map((item, idx) => (
                                    <div key={idx} className="px-4 py-2 bg-slate-50 border border-slate-200 rounded-xl flex items-center gap-2 group hover:border-slate-900 hover:bg-white hover:shadow-lg hover:shadow-slate-900/10 transition-all cursor-default">
                                      <div className="w-1.5 h-1.5 rounded-full bg-slate-900 group-hover:scale-150 transition-transform" />
                                      <span className="text-[11px] font-black text-slate-700 uppercase tracking-wider">{item.trim()}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                        <div className="flex justify-center pt-8">
                          <button
                            onClick={() => setIsConsultationOpen(true)}
                            className="px-10 py-5 bg-gradient-to-br from-slate-900 to-slate-800 text-white rounded-3xl font-black text-xs uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-slate-900/20"
                          >
                            Get Started with {section.title}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Universal Bottom Stats - NO BOXES */}
      <section className="relative z-10 px-6 pt-12 pb-12">
         <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          <div className="p-8 md:p-12 text-center group">
            <div className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter group-hover:text-slate-600 transition-all duration-500 group-hover:scale-110 flex items-center justify-center whitespace-nowrap">2-4<span className="text-slate-600 ml-1">wks</span></div>
            <div className="text-sm font-black text-slate-400 uppercase tracking-[0.4em]">Average Delivery</div>
          </div>
          <div className="p-8 md:p-12 text-center group">
            <div className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter group-hover:text-slate-900 transition-all duration-500 group-hover:scale-110 flex items-center justify-center whitespace-nowrap">100<span className="text-slate-900 ml-1">%</span></div>
            <div className="text-sm font-black text-slate-400 uppercase tracking-[0.4em]">Success Rate</div>
          </div>
          <div className="p-8 md:p-12 text-center group">
            <div className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tighter group-hover:text-slate-600 transition-all duration-500 group-hover:scale-110 flex items-center justify-center whitespace-nowrap">24/7<span className="text-slate-600 ml-1"></span></div>
            <div className="text-sm font-black text-slate-400 uppercase tracking-[0.4em]">Expert Support</div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <AnimatePresence>
        {isConsultationOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 bg-slate-900/60 backdrop-blur-xl overflow-y-auto">
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 20 }} className="bg-white border border-slate-200 rounded-[1.5rem] md:rounded-[2.5rem] w-[95%] sm:w-full max-w-lg min-w-0 shadow-2xl p-4 md:p-8 pt-8 md:pt-10 pb-8 md:pb-10 relative max-h-[95vh] overflow-y-auto overflow-x-hidden m-auto">
              <button onClick={() => setIsConsultationOpen(false)} className="absolute top-4 md:top-6 right-4 md:right-8 text-slate-400 hover:text-slate-900 transition-colors z-10 bg-white/50 backdrop-blur-sm rounded-full p-1">
                <span className="material-symbols-outlined text-xl md:text-2xl font-black block">close</span>
              </button>
              <div className="mb-4 md:mb-6 text-center">
                <h2 className="text-xl sm:text-2xl md:text-3xl font-black text-slate-900 mb-1 tracking-tighter uppercase px-2">Initiate Protocol</h2>
                <p className="text-slate-500 font-bold text-[8px] md:text-[10px] uppercase tracking-widest">Connect with our engineering team</p>
              </div>
              <form onSubmit={handleConsultationSubmit} className="space-y-3 md:space-y-4">
                <div className="space-y-3 md:space-y-4">
                  <FormInput label="Full Identity" icon="person" value={consultationData.name} onChange={(e) => setConsultationData({ ...consultationData, name: e.target.value })} placeholder="Alexander Vance" required />
                  <FormInput label="Digital Line" icon="mail" type="email" value={consultationData.email} onChange={(e) => setConsultationData({ ...consultationData, email: e.target.value })} placeholder="name@org.com" required />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                    <FormInput label="Organization" icon="business" value={consultationData.company} onChange={(e) => setConsultationData({ ...consultationData, company: e.target.value })} placeholder="Vance Dynamics" required />
                    <FormInput label="Voice Channel" icon="call" type="tel" value={consultationData.phone} onChange={(e) => setConsultationData({ ...consultationData, phone: e.target.value })} placeholder="+1..." />
                  </div>
                </div>
                <div>
                  <label className="text-[8px] md:text-[9px] font-black text-slate-900 uppercase tracking-widest mb-1.5 md:mb-2 block ml-1 md:ml-2">Mission Payload Description</label>
                  <textarea rows="3" value={consultationData.message} onChange={(e) => setConsultationData({ ...consultationData, message: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-[1rem] md:rounded-[1.5rem] px-4 md:px-6 py-3 md:py-4 focus:ring-4 focus:ring-slate-900/10 focus:border-slate-900 outline-none transition-all text-slate-900 font-black placeholder:text-slate-300 shadow-inner text-xs md:text-sm" placeholder="Outline your requirements..." required></textarea>
                </div>
                {submitError && <div className="text-red-600 text-[10px] font-bold uppercase tracking-widest text-center">{submitError}</div>}
                <button type="submit" disabled={isSubmitting} className="w-full py-3 md:py-5 bg-slate-900 text-white rounded-[1rem] md:rounded-[1.5rem] font-black text-[9px] md:text-[10px] tracking-[0.2em] shadow-xl shadow-slate-900/40 hover:scale-[1.02] active:scale-95 transition-all uppercase mt-1 md:mt-2">
                  {isSubmitting ? 'Synchronizing...' : 'Launch Mission Briefing'}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FormInput = ({ label, icon, ...props }) => (
  <div className="space-y-1 md:space-y-1.5">
    <label className="text-[8px] md:text-[9px] font-black text-slate-900 uppercase tracking-widest ml-1 md:ml-2 block">{label}</label>
    <div className="relative">
      <span className="material-symbols-outlined absolute left-3 md:left-5 top-1/2 -translate-y-1/2 text-slate-300 text-base md:text-lg font-black">{icon}</span>
      <input {...props} className="w-full bg-slate-50 border border-slate-200 rounded-[1rem] md:rounded-[1.5rem] pl-10 md:pl-14 pr-4 md:pr-6 py-2.5 md:py-3.5 focus:ring-4 focus:ring-slate-900/10 focus:border-slate-900 outline-none transition-all text-slate-900 font-black placeholder:text-slate-300 shadow-inner text-[10px] md:text-xs" />
    </div>
  </div>
);

export default ServicesPage;
