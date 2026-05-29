import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const ServicesPackages = () => {
  const [activeCategory, setActiveCategory] = useState('marketing');

  const serviceCategories = {
    marketing: {
      title: 'Digital Marketing Services',
      subtitle: 'Performance-Focused Growth Strategies',
      services: [
        {
          name: 'Performance Marketing',
          description: 'We build ROI-focused campaigns across Google, Meta, LinkedIn, and YouTube with data-driven targeting.',
          features: [
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
          features: [
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
      services: [
        {
          name: 'Custom CRM Development',
          description: 'We build scalable CRM systems tailored to your business workflow.',
          features: [
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
          features: [
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
      services: [
        {
          name: 'Workflow Automation',
          description: 'Automate repetitive tasks and streamline business processes with intelligent systems.',
          features: [
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

  const currentServices = serviceCategories[activeCategory];

  return (
    <div className="min-h-screen premium-bg text-slate-900">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-600 text-sm font-semibold rounded-full">
              Professional Services
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 font-space-grotesk tracking-tighter">
            Services &
            <span className="text-blue-600"> Packages</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 font-medium">
            Comprehensive digital solutions designed to accelerate your business growth
            and optimize operational efficiency
          </p>
        </div>
      </div>

      {/* Category Navigation */}
      <div className="px-6 pb-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            {Object.entries(serviceCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveCategory(key)}
                className={`px-6 py-3 rounded-lg font-black transition-all duration-300 border ${activeCategory === key
                  ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-500/20'
                  : 'bg-white text-slate-500 border-slate-200 hover:border-slate-400 hover:text-slate-900'
                  }`}
              >
                {category.title}
              </button>
            ))}
          </div>

          {/* Category Content */}
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter uppercase">{currentServices.title}</h2>
            <p className="text-xl text-slate-600 font-medium">{currentServices.subtitle}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {currentServices.services.map((service, index) => (
              <div key={index} className="bg-white border border-slate-200 rounded-xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500">
                <div className="flex items-start gap-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-white text-2xl">
                      {service.name.includes('Marketing') ? 'trending_up' :
                        service.name.includes('CRM') ? 'account_tree' :
                          service.name.includes('Web') ? 'devices' : 'auto_mode'}
                    </span>
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tighter">{service.name}</h3>
                    <p className="text-slate-600 font-medium mb-6">{service.description}</p>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-3 text-slate-600 font-medium">
                            <span className="material-symbols-outlined text-blue-600 text-sm">check_circle</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex flex-wrap gap-3">
                      {service.benefits.map((benefit, idx) => (
                        <span key={idx} className="px-4 py-2 bg-blue-600/20 text-blue-300 text-sm rounded-full">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-20 bg-blue-50/50 border-t border-blue-100">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-white border border-slate-200 rounded-2xl p-12 shadow-2xl">
            <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tighter">Ready to Transform Your Business?</h2>
            <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto font-medium">
              Schedule a free consultation with our experts to discuss your specific requirements
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                to="/contact"
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold px-8 py-4 rounded-lg transition-colors"
              >
                Book Free Consultation
              </Link>
              <Link
                to="/portfolio"
                className="bg-gray-600 hover:bg-gray-500 text-white font-bold px-8 py-4 rounded-lg transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPackages;
