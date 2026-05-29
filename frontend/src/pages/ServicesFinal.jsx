import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Services = () => {
  // Animated Background Particles
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
            className="absolute rounded-full bg-slate-900/10"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              y: [0, -100, 0],
              x: [0, Math.random() * 40 - 20, 0],
              opacity: [0, 1, 0],
              scale: [1, 1.5, 1]
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

  const [activeSection, setActiveSection] = useState('digital-marketing');

  const serviceSections = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Services',
      subtitle: 'Complete End-to-End B2B & B2C Solutions',
      description: 'We provide complete end-to-end digital marketing solutions designed for both B2B (Business to Business) and B2C (Business to Customer) businesses. Our focus is not just simple marketing — but brand growth, lead generation, customer acquisition, and revenue increase.',
      icon: 'trending_up',
       color: 'from-slate-900 to-slate-700',
      services: [
        {
          category: 'Core Digital Marketing Services',
          description: 'These services build strong foundation for your business',
          items: [
            'Digital marketing strategy & planning',
            'Brand positioning & online presence setup',
            'Market & competitor research',
            'Customer journey & funnel mapping',
            'Conversion-focused campaign planning'
          ]
        },
        {
          category: 'Performance Marketing Services',
          description: 'ROI-focused services for maximum leads and sales generation',
          items: [
            'Google Search Ads',
            'Google Display Ads',
            'YouTube Video Ads',
            'Facebook & Instagram Ads',
            'LinkedIn Ads (B2B targeting)',
            'Remarketing & Retargeting Ads',
            'Campaign setup & optimization',
            'Audience research & targeting'
          ]
        },
        {
          category: 'Social Media Management Services',
          description: 'Convert your social media into professional brand growth machine',
          items: [
            'Instagram, Facebook, LinkedIn management',
            'Monthly content calendar planning',
            'Post, reel & story management',
            'Caption & hashtag strategy',
            'Community engagement',
            'Analytics & growth reporting'
          ]
        },
        {
          category: 'Content & Creative Services',
          description: 'Strong content = Strong brand identity',
          items: [
            'Brand creatives & ad banners',
            'Social media post designs',
            'Video content creation',
            'Explainer videos',
            'Corporate presentations'
          ]
        },
        {
          category: 'SEO & Organic Growth Services',
          description: 'Help your website rank top in search engines',
          items: [
            'Complete website SEO audit',
            'Keyword research & strategy',
            'On-page SEO optimization',
            'Technical SEO improvements',
            'Local SEO & Content SEO'
          ]
        }
      ],
      packages: [
        {
          name: 'Starter Package',
          price: '₹25,000/month',
          description: 'Perfect for small businesses launching their digital presence',
          features: [
            'Basic SEO optimization',
            '2 social media platforms',
            'Monthly performance reports',
            'Google Ads setup (₹10,000 budget)',
            'Basic content creation',
            'Email support'
          ],
          color: 'from-green-500 to-emerald-500',
          popular: false
        },
        {
          name: 'Growth Package',
          price: '₹75,000/month',
          description: 'Ideal for scaling companies seeking significant growth',
          features: [
            'Advanced SEO & content strategy',
            'All major social platforms',
            'Weekly analytics & insights',
            'Multi-channel advertising (₹50,000 budget)',
            'Professional video content',
            'Dedicated account manager'
          ],
          color: 'from-blue-500 to-purple-500',
          popular: true
        },
        {
          name: 'Premium Package',
          price: '₹1,50,000/month',
          description: 'Enterprise solution for maximum market dominance',
          features: [
            'Enterprise SEO strategy',
            'Full social media ecosystem',
            'Real-time analytics dashboard',
            'Omnichannel advertising (₹1,00,000 budget)',
            'Custom video production',
            'Strategic consulting sessions'
          ],
          color: 'from-purple-500 to-pink-500',
          popular: false
        }
      ]
    },
    {
      id: 'ai-automation',
      title: 'AI Automation Agent Services',
      subtitle: 'Intelligent Business Transformation',
      description: 'Revolutionize your operations with AI-powered automation agents that eliminate repetitive tasks, reduce costs by up to 80%, and enable 24/7 business operations.',
      icon: 'auto_mode',
      color: 'from-purple-500 to-pink-500',
      services: [
        {
          category: 'AI Automation Solutions',
          items: [
            'Auto Lead Generation Agent',
            'AI Calling & Voice Agent',
            'AI Chatbot Support Agent',
            'AI Website Development Agent',
            'AI Content Creation Agent',
            'Social Media Automation Agent',
            'Performance Marketing AI Agent',
            'AI Copywriting Agent',
            'AI Graphic Design Agent',
            'AI Video Editing Agent',
            'AI Marketing Strategy Agent',
            'AI Branding & Digital Growth Agent'
          ]
        }
      ],
      benefits: [
        { title: 'Complete Automation', stat: '100%', label: 'Task Automation' },
        { title: 'Cost Reduction', stat: '80%', label: 'Cost Savings' },
        { title: '24/7 Operations', stat: '24/7', label: 'Availability' },
        { title: 'Enhanced Productivity', stat: '300%', label: 'Productivity Boost' },
        { title: 'Scalable Growth', stat: '10X', label: 'Scalability' }
      ],
      packages: [
        {
          name: 'Starter Automation',
          price: '₹35,000/month',
          description: 'Entry-level automation for basic business processes',
          features: [
            'Basic chatbot implementation',
            'Simple workflow automation',
            'Email automation setup',
            'Basic data processing',
            'Standard support'
          ],
          color: 'from-green-500 to-emerald-500',
          popular: false
        },
        {
          name: 'Business Automation',
          price: '₹95,000/month',
          description: 'Comprehensive automation suite for growing businesses',
          features: [
            'Advanced AI chatbots',
            'Multi-channel automation',
            'Intelligent data processing',
            'Custom workflow design',
            'Integration with existing systems',
            'Analytics & reporting'
          ],
          color: 'from-blue-500 to-purple-500',
          popular: true
        },
        {
          name: 'Enterprise AI Suite',
          price: '₹2,00,000/month',
          description: 'Full-scale AI transformation for enterprise operations',
          features: [
            'Enterprise-grade AI agents',
            'Complete process automation',
            'Advanced machine learning models',
            'Real-time optimization',
            'Predictive analytics',
            'Custom AI development'
          ],
          color: 'from-purple-500 to-pink-500',
          popular: false
        }
      ]
    },
    {
      id: 'software-development',
      title: 'Software Development Services',
      subtitle: 'Complete Custom B2B & B2C Solutions',
      description: 'We provide complete custom software development solutions designed for both B2B and B2C companies. Our focus is on business automation, efficiency improvement, scalability, and digital transformation.',
      icon: 'code',
      color: 'from-green-500 to-emerald-500',
      b2bServices: [
        'CRM Software (All Industries)',
        'Finance / Accounting / Billing Software',
        'Project & Task Management Software',
        'HRMS & Payroll Software',
        'Communication & Collaboration Software',
        'Email & Marketing Automation Software',
        'Customer Support & Helpdesk Software',
        'Document Management & E-Signature Software',
        'Inventory, Supply Chain & Logistics Software',
        'Data Analytics, BI & Reporting Software',
        'ERP (Enterprise Resource Planning) Software',
        'Business Intelligence & Dashboard Software'
      ],
      b2cServices: [
        'E-Commerce & Online Store Systems',
        'Payment Gateway & Wallet Systems',
        'Accounting, Billing & GST Software',
        'Customer Relationship Software (B2C CRM)',
        'Appointment Booking Software',
        'Delivery, Logistics & Order Tracking Software',
        'Inventory & Stock Management Software',
        'Customer Support, Chatbot & FAQ Systems',
        'Data Analytics & Reporting Software'
      ],
      packages: [
        {
          name: 'Basic Solution',
          price: '₹50,000/project',
          description: 'Essential software development for startups and small businesses',
          features: [
            'Basic web application',
            'Responsive design',
            'Core functionality implementation',
            'Basic database setup',
            '30 days support',
            'Documentation provided'
          ],
          color: 'from-green-500 to-emerald-500',
          popular: false
        },
        {
          name: 'Professional Solution',
          price: '₹2,00,000/project',
          description: 'Advanced software with comprehensive features and integrations',
          features: [
            'Full-stack development',
            'Advanced UI/UX design',
            'Database optimization',
            'API integrations',
            'Security implementation',
            'Performance optimization'
          ],
          color: 'from-blue-500 to-purple-500',
          popular: true
        },
        {
          name: 'Enterprise Solution',
          price: 'Custom Pricing',
          description: 'Large-scale enterprise software with advanced capabilities',
          features: [
            'Enterprise architecture',
            'Microservices design',
            'Advanced security protocols',
            'Cloud infrastructure',
            'Real-time processing',
            'AI/ML integration'
          ],
          color: 'from-purple-500 to-pink-500',
          popular: false
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden pt-20">
      {/* Animated Background */}
      <Particles />

      {/* Gradient Overlay */}
       <div className="absolute inset-0 bg-slate-50"></div>

      {/* Hero Section */}
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 heading-underline active pb-2">
              Professional
               <span className="block text-slate-400">
                IT Services
              </span>
            </h1>

             <p className="text-xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-12 font-bold italic">
              Comprehensive technology solutions for modern business growth
            </p>
          </motion.div>

          {/* Service Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {serviceSections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm ${activeSection === section.id
                   ? 'bg-slate-900 text-white shadow-lg'
                  : 'bg-white text-slate-500 border border-slate-200 hover:border-slate-900 hover:text-slate-900'
                  }`}
              >
                <span className="material-symbols-outlined text-base">{section.icon}</span>
                {section.title}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Service Sections */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {serviceSections.map((section) => (
            activeSection === section.id && (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="space-y-12"
              >
                {/* Section Header */}
                 <div className="text-center">
                  <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900 text-white border border-slate-800 backdrop-blur-sm mb-6`}>
                    <span className="material-symbols-outlined text-white text-sm">{section.icon}</span>
                    <span className="text-white font-black tracking-widest uppercase text-[10px]">{section.subtitle}</span>
                  </div>
                  <h2 className="text-4xl font-black text-slate-900 mb-6 uppercase italic tracking-tighter">{section.title}</h2>
                  <p className="text-lg text-slate-500 max-w-4xl mx-auto leading-relaxed font-bold italic">
                    {section.description}
                  </p>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {section.services?.map((service, index) => (
                     <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-300 group"
                    >
                      <h3 className="text-lg font-black text-slate-900 mb-4 flex items-center gap-3 uppercase italic tracking-tight">
                        <span className="material-symbols-outlined text-slate-900">check_circle</span>
                        {service.category}
                      </h3>
                      <p className="text-slate-500 text-sm font-bold italic mb-6">"{service.description}"</p>
                      <ul className="space-y-2">
                         {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-3 text-slate-600 text-sm font-bold italic">
                            <span className="material-symbols-outlined text-slate-900 text-xs mt-1">arrow_right</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  ))}
                </div>

                {/* B2B & B2C Services */}
                {(section.b2bServices || section.b2cServices) && (
                  <div className="grid md:grid-cols-2 gap-8">
                    {section.b2bServices && (
                       <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl"
                      >
                         <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center">
                            <span className="material-symbols-outlined text-white">business</span>
                          </div>
                          <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">B2B Solutions</h3>
                        </div>
                        <ul className="space-y-2">
                           {section.b2bServices.map((item, index) => (
                            <li key={index} className="flex items-center gap-3 text-slate-600 font-bold italic">
                              <span className="material-symbols-outlined text-slate-900 text-sm">check</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}

                    {section.b2cServices && (
                       <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="bg-white rounded-2xl p-8 border border-slate-200 shadow-xl"
                      >
                         <div className="flex items-center gap-4 mb-8">
                          <div className="w-12 h-12 rounded-xl bg-slate-100 border border-slate-200 flex items-center justify-center">
                            <span className="material-symbols-outlined text-slate-900">storefront</span>
                          </div>
                          <h3 className="text-2xl font-black text-slate-900 uppercase italic tracking-tighter">B2C Solutions</h3>
                        </div>
                        <ul className="space-y-2">
                           {section.b2cServices.map((item, index) => (
                            <li key={index} className="flex items-center gap-3 text-slate-600 font-bold italic">
                              <span className="material-symbols-outlined text-slate-400 text-sm">check</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Benefits Section */}
                {section.benefits && (
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                    {section.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                         className="bg-white rounded-xl p-6 border border-slate-200 shadow-lg text-center relative overflow-hidden group hover:bg-slate-900 transition-all duration-500"
                      >
                        <div className="absolute -top-2 -right-2 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-slate-900 transition-colors border-2 border-white">
                          <span className="text-[10px] font-black">{benefit.stat}</span>
                        </div>
                        <div className="text-lg font-black text-slate-900 mb-1 uppercase tracking-tight group-hover:text-white transition-colors">{benefit.title}</div>
                        <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest group-hover:text-slate-400 transition-colors">{benefit.label}</div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Service Packages */}
                <div className="space-y-8">
                   <div className="text-center">
                    <h2 className="text-3xl font-black text-slate-900 mb-2 uppercase italic tracking-tighter">Service Packages</h2>
                    <p className="text-slate-500 font-bold italic">Provision your institutional solution tier</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-6">
                    {section.packages.map((packageItem, index) => (
                       <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className={`bg-white rounded-[2.5rem] p-10 border-2 transition-all duration-500 relative group shadow-xl hover:shadow-2xl ${packageItem.popular
                          ? 'border-slate-900 scale-105 z-20'
                          : 'border-slate-100'
                          }`}
                      >
                        {packageItem.popular && (
                           <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                            <span className="px-6 py-2 bg-slate-900 text-white font-black rounded-full text-[9px] uppercase tracking-[0.2em] shadow-2xl">
                              MOST POPULAR
                            </span>
                          </div>
                        )}

                         <div className={`text-center mb-10 ${packageItem.popular ? 'pt-4' : ''}`}>
                          <h3 className="text-2xl font-black text-slate-900 mb-2 uppercase italic tracking-tight">{packageItem.name}</h3>
                          <div className="text-3xl font-black text-slate-900 mb-3">{packageItem.price}</div>
                          <p className="text-slate-500 text-sm font-bold italic leading-relaxed opacity-80">"{packageItem.description}"</p>
                        </div>

                         <ul className="space-y-4 mb-10">
                          {packageItem.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-4 text-slate-600 text-sm font-bold italic">
                              <span className="material-symbols-outlined text-slate-900 text-lg mt-0.5">check_circle</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                         <button className={`w-full py-5 rounded-2xl font-black uppercase tracking-widest text-[10px] transition-all duration-500 ${packageItem.popular
                          ? 'bg-slate-900 text-white shadow-2xl hover:scale-[1.02]'
                          : 'bg-slate-50 text-slate-900 border border-slate-200 hover:bg-slate-100'
                          }`}>
                          Initialize Project
                        </button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>

      {/* Final CTA */}
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-4xl mx-auto text-center">
           <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="bg-slate-900 rounded-[4rem] p-16 md:p-24 border border-slate-800 shadow-3xl text-center relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-800 rounded-full blur-[120px] -mr-64 -mt-64 opacity-50 pointer-events-none transition-all duration-700 group-hover:bg-slate-700"></div>
             <h2 className="text-4xl md:text-6xl font-black text-white mb-8 uppercase italic tracking-tighter">
              Transform Your Business Today
            </h2>
            <p className="text-xl text-slate-400 mb-12 max-w-3xl mx-auto font-medium leading-relaxed">
              Partner with our architectural elite for comprehensive digital transformation and high-fidelity institutional technology solutions.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white text-slate-900 font-black px-10 py-5 rounded-full transition-all shadow-3xl flex items-center gap-3 uppercase tracking-widest text-[10px]"
                >
                  <span className="material-symbols-outlined text-lg">contact_support</span>
                  Schedule Consultation
                </motion.button>
              </Link>
               <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-slate-800 text-white font-black px-10 py-5 rounded-full border border-slate-700 transition-all flex items-center gap-3 uppercase tracking-widest text-[10px]"
                >
                  <span className="material-symbols-outlined text-lg">work</span>
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

export default Services;
