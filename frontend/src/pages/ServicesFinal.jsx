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
            className="absolute rounded-full bg-gradient-to-r from-blue-400/30 to-purple-400/30"
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
      color: 'from-blue-500 to-cyan-500',
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
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-black relative overflow-hidden pt-20">
      {/* Animated Background */}
      <Particles />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-cyan-500/5 animate-pulse"></div>
      
      {/* Hero Section */}
      <div className="relative z-10 px-6 py-16">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-blue-400">precision_manufacturing</span>
              <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">COMPREHENSIVE IT SOLUTIONS</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Professional 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">
                IT Services
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-12">
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
                className={`px-5 py-2.5 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 text-sm ${
                  activeSection === section.id
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
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
                  <div className={`inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gradient-to-r ${section.color}/20 border ${section.color.split(' ')[1]}/30 backdrop-blur-sm mb-6`}>
                    <span className="material-symbols-outlined text-blue-400">{section.icon}</span>
                    <span className="text-blue-400 font-bold tracking-wider uppercase text-xs">{section.subtitle}</span>
                  </div>
                  <h2 className="text-4xl font-bold text-white mb-6">{section.title}</h2>
                  <p className="text-lg text-slate-300 max-w-4xl mx-auto leading-relaxed">
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
                      className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10  transition-all duration-300"
                    >
                      <h3 className="text-lg font-bold text-white mb-3 flex items-center gap-2">
                        <span className="material-symbols-outlined text-blue-400">check_circle</span>
                        {service.category}
                      </h3>
                      <p className="text-slate-300 text-sm mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-slate-300 text-sm">
                            <span className="material-symbols-outlined text-green-400 text-xs mt-1">arrow_right</span>
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
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                            <span className="material-symbols-outlined text-white">business</span>
                          </div>
                          <h3 className="text-xl font-bold text-white">B2B Solutions</h3>
                        </div>
                        <ul className="space-y-2">
                          {section.b2bServices.map((item, index) => (
                            <li key={index} className="flex items-center gap-2 text-slate-300">
                              <span className="material-symbols-outlined text-green-400 text-sm">check</span>
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
                        className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
                            <span className="material-symbols-outlined text-white">storefront</span>
                          </div>
                          <h3 className="text-xl font-bold text-white">B2C Solutions</h3>
                        </div>
                        <ul className="space-y-2">
                          {section.b2cServices.map((item, index) => (
                            <li key={index} className="flex items-center gap-2 text-slate-300">
                              <span className="material-symbols-outlined text-green-400 text-sm">check</span>
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
                        className="bg-white/5 backdrop-blur-sm rounded-lg p-4 border border-white/10 text-center relative overflow-hidden"
                      >
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">{benefit.stat}</span>
                        </div>
                        <div className="text-lg font-bold text-white mb-1">{benefit.title}</div>
                        <div className="text-cyan-400 text-xs">{benefit.label}</div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Service Packages */}
                <div className="space-y-8">
                  <div className="text-center">
                    <h2 className="text-3xl font-bold text-white mb-2">Service Packages</h2>
                    <p className="text-slate-300">Choose the perfect solution for your business needs</p>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {section.packages.map((packageItem, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className={`bg-white/5 backdrop-blur-sm rounded-xl p-6 border-2 transition-all duration-300 relative ${
                          packageItem.popular
                            ? 'border-blue-500/50 bg-gradient-to-br from-blue-500/10 to-purple-500/10'
                            : 'border-white/10 '
                        }`}
                      >
                        {packageItem.popular && (
                          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                            <span className="px-3 py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full text-xs">
                              MOST POPULAR
                            </span>
                          </div>
                        )}
                        
                        <div className={`text-center mb-6 ${packageItem.popular ? 'pt-3' : ''}`}>
                          <h3 className="text-xl font-bold text-white mb-1">{packageItem.name}</h3>
                          <div className="text-2xl font-bold text-blue-400 mb-1">{packageItem.price}</div>
                          <p className="text-slate-300 text-sm">{packageItem.description}</p>
                        </div>
                        
                        <ul className="space-y-3 mb-6">
                          {packageItem.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-2 text-slate-300 text-sm">
                              <span className="material-symbols-outlined text-green-400 text-sm mt-0.5">check</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        
                        <button className={`w-full py-3 rounded-lg font-bold transition-all duration-300 text-sm ${
                          packageItem.popular
                            ? 'bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white'
                            : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                        }`}>
                          Get Started
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
            className="bg-white/5 backdrop-blur-sm rounded-2xl p-12 border border-white/10"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Transform Your Business Today
            </h2>
            <p className="text-lg text-slate-300 mb-8 max-w-2xl mx-auto">
              Partner with us for comprehensive digital transformation and cutting-edge technology solutions
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold px-8 py-4 rounded-full transition-all flex items-center gap-2"
                >
                  <span className="material-symbols-outlined">contact_support</span>
                  Schedule Consultation
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-full border border-white/20 transition-all flex items-center gap-2"
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

export default Services;