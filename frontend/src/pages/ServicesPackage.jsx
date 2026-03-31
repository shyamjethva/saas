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
      color: 'from-green-500 to-emerald-500',
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
      color: 'from-blue-500 to-cyan-500',
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-green-900/20 pt-20">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-green-400">workspace_premium</span>
              <span className="text-green-400 font-bold tracking-wider uppercase text-sm">SERVICE PACKAGES</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Our 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400">
                Service Packages
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
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
                className={`px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${service.color} text-white shadow-2xl scale-105`
                    : 'bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
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
              <h2 className="text-4xl font-bold text-white mb-4">{currentPackage.title}</h2>
              <p className="text-xl text-slate-300">{currentPackage.subtitle}</p>
              <p className="text-lg text-green-400 mt-4">{currentPackage.description}</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              {/* Left Column - Main Content */}
              <div className="space-y-8">
                {/* Platforms/Modules Section */}
                <div className="glass-card rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-6">
                    {activeTab === 'marketing' ? 'Advertising Platforms' : 'Advanced Modules'}
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    {(activeTab === 'marketing' ? currentPackage.platforms : currentPackage.crmModules).map((item, index) => (
                      <div key={index} className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-colors">
                        <span className="material-symbols-outlined text-green-400">check_circle</span>
                        <span className="text-slate-300 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Includes Section (Marketing Only) */}
                {activeTab === 'marketing' && (
                  <div className="glass-card rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-400">checklist</span>
                      Includes
                    </h3>
                    <ul className="space-y-3">
                      {currentPackage.includes.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-green-400">check_box</span>
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Security Section (Software Only) */}
                {activeTab === 'software' && (
                  <div className="glass-card rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                    <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                      <span className="material-symbols-outlined text-green-400">security</span>
                      Security
                    </h3>
                    <ul className="space-y-3">
                      {currentPackage.security.map((item, index) => (
                        <li key={index} className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-green-400">shield</span>
                          <span className="text-slate-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Right Column - Additional Services */}
              <div className="space-y-8">
                {/* Branding/Web Development Section */}
                <div className="glass-card rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-400">
                      {activeTab === 'marketing' ? 'palette' : 'devices'}
                    </span>
                    {activeTab === 'marketing' ? currentPackage.branding.title : currentPackage.webDevelopment.title}
                  </h3>
                  <ul className="space-y-3">
                    {(activeTab === 'marketing' ? currentPackage.branding.services : currentPackage.webDevelopment.services).map((item, index) => (
                      <li key={index} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                        <span className="material-symbols-outlined text-blue-400 text-sm">
                          {activeTab === 'marketing' ? 'brush' : 'web'}
                        </span>
                        <span className="text-slate-300">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Benefits Section */}
                <div className="glass-card rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
                  <h3 className="text-2xl font-bold text-white mb-6">Key Benefits</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-green-400 mt-1">speed</span>
                      <div>
                        <h4 className="text-white font-semibold">Fast Implementation</h4>
                        <p className="text-slate-400 text-sm">Quick deployment with minimal disruption to your operations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-blue-400 mt-1">sync</span>
                      <div>
                        <h4 className="text-white font-semibold">Seamless Integration</h4>
                        <p className="text-slate-400 text-sm">Works perfectly with your existing systems and workflows</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <span className="material-symbols-outlined text-purple-400 mt-1">monitoring</span>
                      <div>
                        <h4 className="text-white font-semibold">24/7 Support</h4>
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
      <div className="px-6 py-20 bg-gradient-to-r from-slate-800/50 to-green-900/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-12 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
              Schedule a free consultation to discuss which package is perfect for your business needs
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-2xl hover:shadow-green-500/25 flex items-center gap-3 text-lg"
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