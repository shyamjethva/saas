import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPackages = () => {
  const [activeTab, setActiveTab] = useState('marketing');

  const services = {
    marketing: {
      title: 'Digital Marketing Services',
      subtitle: 'Performance-Focused Growth Strategies',
      icon: 'campaign',
      color: 'from-green-500 to-emerald-500',
      offerings: [
        {
          name: 'Performance Marketing',
          description: 'We build ROI-focused campaigns across Google, Meta, LinkedIn, and YouTube with data-driven targeting.',
          includes: [
            'Paid Ads Management',
            'Funnel Design',
            'Retargeting Campaigns',
            'Conversion Optimization',
            'Lead Tracking Integration'
          ],
          benefits: ['Measurable ROI', 'Data-Driven Decisions', 'Scalable Growth']
        },
        {
          name: 'Branding & Creative',
          description: 'Strategic brand positioning with professional creatives and content strategy.',
          includes: [
            'Social Media Management',
            'Graphic Design',
            'Video Ads Production',
            'Content Calendar Planning'
          ],
          benefits: ['Strong Brand Identity', 'Professional Presence', 'Audience Engagement']
        }
      ]
    },
    software: {
      title: 'Software Development',
      subtitle: 'Custom Solutions for Modern Business',
      icon: 'code',
      color: 'from-blue-500 to-cyan-500',
      offerings: [
        {
          name: 'Custom CRM Development',
          description: 'We build scalable CRM systems tailored to your business workflow.',
          includes: [
            'Lead Management',
            'Sales Pipeline Tracking',
            'Automated Follow-ups',
            'Employee Role Control',
            'Analytics Dashboard',
            'Billing Integration'
          ],
          benefits: ['Streamlined Operations', 'Enhanced Productivity', 'Better Customer Relations']
        },
        {
          name: 'Web & App Development',
          description: 'Secure, scalable and performance-optimized web & mobile applications.',
          includes: [
            'Corporate Websites',
            'E-commerce Platforms',
            'Admin Panels',
            'API Integrations'
          ],
          benefits: ['Modern User Experience', 'Fast Loading Times', 'Mobile Responsiveness']
        }
      ]
    },
    ai: {
      title: 'AI & Automation',
      subtitle: 'Intelligent Business Transformation',
      icon: 'auto_mode',
      color: 'from-purple-500 to-pink-500',
      offerings: [
        {
          name: 'Workflow Automation',
          description: 'Automate repetitive tasks and streamline business processes with intelligent systems.',
          includes: [
            'AI Chatbots',
            'AI Image & Video Processing',
            'n8n Automation Setup',
            'Business Process AI Agents'
          ],
          benefits: ['Reduced Manual Work', 'Increased Efficiency', '24/7 Operations']
        }
      ]
    }
  };

  const currentService = services[activeTab];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-dark via-slate-900 to-background-dark pt-20">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-primary/20 to-purple-500/20 border border-primary/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-primary">workspace_premium</span>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Professional Services</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-[var(--text-primary)] mb-6">
              Services & 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-purple-400">
                Packages
              </span>
            </h1>
            
            <p className="text-xl text-[var(--text-secondary)] max-w-3xl mx-auto leading-relaxed mb-12">
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
            {Object.entries(services).map(([key, service]) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-8 py-4 rounded-consistent-full font-bold transition-all duration-300 flex items-center gap-3 ${
                  activeTab === key
                    ? `bg-gradient-to-r ${service.color} text-white shadow-2xl scale-105`
                    : 'bg-white/5 text-[var(--text-secondary)] hover:bg-white/10 hover:text-[var(--text-primary)]'
                }`}
              >
                <span className="material-symbols-outlined">{service.icon}</span>
                {service.title}
              </button>
            ))}
          </div>

          {/* Service Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-4">{currentService.title}</h2>
              <p className="text-xl text-[var(--text-secondary)]">{currentService.subtitle}</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {currentService.offerings.map((offering, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.2 }}
                  className="glass-card rounded-consistent-2xl p-8 border border-white/10  transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className={`w-16 h-16 rounded-consistent-xl bg-gradient-to-br ${currentService.color} flex items-center justify-center flex-shrink-0`}>
                      <span className="material-symbols-outlined text-white text-2xl">
                        {offering.name.includes('Marketing') ? 'trending_up' : 
                         offering.name.includes('CRM') ? 'account_tree' : 
                         offering.name.includes('Web') ? 'devices' : 'auto_mode'}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-4">{offering.name}</h3>
                      <p className="text-[var(--text-secondary)] mb-6 leading-relaxed">{offering.description}</p>
                      
                      <div className="mb-6">
                        <h4 className="text-[var(--text-primary)] font-semibold mb-3">Includes:</h4>
                        <ul className="space-y-2">
                          {offering.includes.map((item, idx) => (
                            <li key={idx} className="flex items-center gap-3 text-[var(--text-secondary)]">
                              <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                              {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex flex-wrap gap-3">
                        {offering.benefits.map((benefit, idx) => (
                          <span key={idx} className="px-4 py-2 bg-primary/20 text-primary text-sm rounded-full border border-primary/30">
                            {benefit}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-20 bg-gradient-to-r from-slate-800/50 to-background-dark/30">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-consistent-2xl p-12 border border-white/10 bg-gradient-to-br from-white/5 to-white/10"
          >
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-6">Ready to Transform Your Business?</h2>
            <p className="text-xl text-[var(--text-secondary)] mb-8 max-w-2xl mx-auto">
              Schedule a free consultation with our experts to discuss your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-cyan-500 hover:from-primary/90 hover:to-cyan-600 text-white font-bold px-8 py-4 rounded-consistent-full transition-all shadow-[0_0_30px_rgba(56,105,250,0.5)] flex items-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">calendar_today</span>
                  Book Free Consultation
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 text-[var(--text-primary)] font-bold px-8 py-4 rounded-consistent-full border border-white/20 transition-all flex items-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">work</span>
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPackages;