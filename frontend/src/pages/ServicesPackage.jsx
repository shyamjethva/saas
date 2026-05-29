import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPackage = () => {
  const [activeTab, setActiveTab] = useState('marketing');

  const servicePackages = {
    marketing: {
      title: 'DIGITAL MARKETING',
      subtitle: 'Performance Marketing System',
      icon: 'campaign',
      color: 'from-slate-900 to-slate-700',
      description: 'We build structured growth funnels across:',
      platforms: [
        'Google Ads',
        'Meta Ads',
        'LinkedIn Ads',
        'YouTube Ads'
      ],
      includes: [
        'Funnel Strategy',
        'Retargeting Campaigns',
        'Conversion Optimization',
        'CRM Integration',
        'Weekly Reporting'
      ],
      branding: {
        title: 'Branding & Creative',
        services: [
          'Brand Identity',
          'Social Media Management',
          'Graphic Design',
          'Video Ads Production',
          'Content Calendar'
        ]
      }
    },
    software: {
      title: 'SOFTWARE DEVELOPMENT',
      subtitle: 'Custom Solutions for Enterprise',
      icon: 'code',
      color: 'from-slate-800 to-slate-600',
      description: 'Advanced custom development with enterprise-grade security:',
      crmModules: [
        'Lead Management',
        'Sales Pipeline',
        'Automated Follow-ups',
        'Task Assignment',
        'Employee Role Control',
        'Billing & GST Integration',
        'Payment Tracking',
        'Client Ledger',
        'Analytics Dashboard'
      ],
      webDevelopment: {
        title: 'Web & App Development',
        services: [
          'Corporate Websites',
          'E-commerce Platforms',
          'Admin Panels',
          'API Integrations',
          'Mobile Apps'
        ]
      },
      security: [
        'Data Encryption',
        'Role-Based Access',
        'Cloud Backup',
        'Secure Login'
      ]
    }
  };

  const currentPackage = servicePackages[activeTab];

  return (
    <div className="min-h-screen bg-slate-50 pt-20">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 heading-underline active pb-2">
              Our
               <span className="block text-slate-400">
                Service Packages
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Comprehensive digital solutions designed to accelerate your business growth
              and optimize operational efficiency
            </p>
          </motion.div>
        </div>
      </div>

      {/* Service Tabs */}
      <div className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(servicePackages).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-3 ${activeTab === key
                  ? `bg-gradient-to-r ${service.color} text-white shadow-2xl scale-105`
                   : 'bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-900'
                  }`}
              >
                <span className="material-symbols-outlined">{service.icon}</span>
                {service.title}
              </button>
            ))}
          </div>

          {/* Service Package Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-black mb-4">{currentPackage.title}</h2>
              <p className="text-xl text-slate-500">{currentPackage.subtitle}</p>
               <p className="text-lg text-slate-900 mt-4 font-black uppercase tracking-widest text-xs">{currentPackage.description}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Main Content */}
              <div className="space-y-8">
                {/* Platforms/Modules Section */}
                 <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl">
                  <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tighter italic">
                    {activeTab === 'marketing' ? 'Advertising Platforms' : 'Advanced Modules'}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {(activeTab === 'marketing' ? currentPackage.platforms : currentPackage.crmModules).map((item, index) => (
                       <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg hover:bg-slate-100 transition-colors border border-slate-100">
                        <span className="material-symbols-outlined text-slate-900">check_circle</span>
                        <span className="text-slate-600 font-bold italic text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Includes Section (Marketing Only) */}
                {activeTab === 'marketing' && (
                   <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl">
                    <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-tighter italic">
                      <span className="material-symbols-outlined text-slate-900">checklist</span>
                      Includes
                    </h3>
                    <ul className="space-y-3">
                         <li key={index} className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-slate-900">check_box</span>
                          <span className="text-slate-600 font-bold italic text-sm">{item}</span>
                        </li>
                    </ul>
                  </div>
                )}

                {/* Security Section (Software Only) */}
                {activeTab === 'software' && (
                   <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl">
                    <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-tighter italic">
                      <span className="material-symbols-outlined text-slate-900">security</span>
                      Security
                    </h3>
                    <ul className="space-y-3">
                         <li key={index} className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-slate-900">shield</span>
                          <span className="text-slate-600 font-bold italic text-sm">{item}</span>
                        </li>
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column - Additional Services */}
              <div className="space-y-8">
                {/* Branding/Web Development Section */}
                 <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl">
                  <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-2 uppercase tracking-tighter italic">
                    <span className="material-symbols-outlined text-slate-900">
                      {activeTab === 'marketing' ? 'palette' : 'devices'}
                    </span>
                    {activeTab === 'marketing' ? currentPackage.branding.title : currentPackage.webDevelopment.title}
                  </h3>
                  <ul className="space-y-3">
                       <li key={index} className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <span className="material-symbols-outlined text-slate-900 text-sm">
                          {activeTab === 'marketing' ? 'brush' : 'web'}
                        </span>
                        <span className="text-slate-600 font-bold italic text-sm">{item}</span>
                      </li>
                  </ul>
                </div>

                {/* Benefits Section */}
                 <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl">
                  <h3 className="text-2xl font-black text-slate-900 mb-6 uppercase tracking-tighter italic">Key Benefits</h3>
                  <div className="space-y-4">
                     <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-slate-900 mt-1">speed</span>
                      <div>
                        <h4 className="text-slate-900 font-black uppercase text-xs tracking-widest">Fast Implementation</h4>
                        <p className="text-slate-400 text-sm">Quick deployment with minimal disruption to your operations</p>
                      </div>
                    </div>
                     <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-slate-600 mt-1">sync</span>
                      <div>
                        <h4 className="text-slate-900 font-black uppercase text-xs tracking-widest">Seamless Integration</h4>
                        <p className="text-slate-400 text-sm">Works perfectly with your existing systems and workflows</p>
                      </div>
                    </div>
                     <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-slate-400 mt-1">monitoring</span>
                      <div>
                        <h4 className="text-slate-900 font-black uppercase text-xs tracking-widest">24/7 Support</h4>
                        <p className="text-slate-400 text-sm">Round-the-clock assistance for all your technical needs</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-20 bg-blue-50/30">
        <div className="max-w-4xl mx-auto text-center">
           <div className="bg-slate-900 rounded-[3rem] p-12 border border-slate-800 shadow-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-96 h-96 bg-slate-800 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none transition-colors group-hover:bg-slate-700"></div>
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss which package is perfect for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
               <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-slate-900 font-black px-8 py-4 rounded-full transition-all shadow-2xl flex items-center gap-3 text-lg hover:bg-slate-100"
                >
                  <span className="material-symbols-outlined">calendar_today</span>
                  Book Free Consultation
                </motion.button>
              </Link>
              <Link to="/crm-pricing">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full border border-white/20 transition-all flex items-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">workspace_premium</span>
                  View Pricing Plans
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPackage;
