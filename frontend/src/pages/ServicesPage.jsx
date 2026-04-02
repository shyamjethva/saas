import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { consultationAPI } from '../services/api';

// Default Home View Data
const defaultBenefits = [
  {
    title: 'Complete Automation',
    description: 'Eliminate manual repetitive tasks and streamline workflows',
    icon: 'bolt',
    color: 'from-yellow-500 to-orange-500',
    stat: '100%',
    statLabel: 'Task Automation'
  },
  {
    title: 'Cost Reduction',
    description: 'Reduce operational costs by up to 80% through intelligent automation',
    icon: 'savings',
    color: 'from-green-500 to-emerald-500',
    stat: '80%',
    statLabel: 'Cost Savings'
  },
  {
    title: '24/7 Operations',
    description: 'Enable round-the-clock business operations without human intervention',
    icon: 'schedule',
    color: 'from-blue-500 to-cyan-500',
    stat: '24/7',
    statLabel: 'Availability'
  },
  {
    title: 'Enhanced Productivity',
    description: 'Free up human resources for strategic and creative work',
    icon: 'auto_graph',
    color: 'from-purple-500 to-pink-500',
    stat: '300%',
    statLabel: 'Productivity Boost'
  },
  {
    title: 'Scalable Growth',
    description: 'Easily scale operations without proportional resource increase',
    icon: 'trending_up',
    color: 'from-cyan-500 to-blue-500',
    stat: '10X',
    statLabel: 'Scalability'
  }
];

const defaultProcess = [
  {
    step: 1,
    title: 'Requirement Analysis',
    description: 'Deep understanding of business needs and objectives',
    icon: 'search',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    step: 2,
    title: 'System Design',
    description: 'Architecture planning and technical specification',
    icon: 'architecture',
    color: 'from-purple-500 to-pink-500'
  },
  {
    step: 3,
    title: 'Development & Testing',
    description: 'Agile development with continuous testing',
    icon: 'code',
    color: 'from-green-500 to-emerald-500'
  },
  {
    step: 4,
    title: 'Deployment & Launch',
    description: 'Smooth deployment and go-live support',
    icon: 'rocket_launch',
    color: 'from-orange-500 to-red-500'
  },
  {
    step: 5,
    title: 'Maintenance & Support',
    description: 'Ongoing support and continuous improvement',
    icon: 'build',
    color: 'from-indigo-500 to-purple-500'
  }
];

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

  // Animated Background Particles
  const Particles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
      const generateParticles = () => {
        const newParticles = [];
        for (let i = 0; i < 50; i++) {
          newParticles.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1,
            duration: Math.random() * 30 + 20,
            delay: Math.random() * 10
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
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0, 1, 0],
              scale: [1, 2, 1]
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

  // Service Sections Data (Re-integrated from legacy Services.jsx)
  const serviceSections = [
    {
      id: 'software-development',
      title: 'Software + APK Development Service',
      subtitle: 'Complete Custom B2B & B2C Solutions',
      description: 'We provide complete custom software development solutions designed for both B2B (Business to Business) and B2C (Business to Customer) companies. Our focus is on business automation, efficiency improvement, scalability, and digital transformation.',
      icon: 'code',
      color: 'from-green-500 to-emerald-500',
      b2bServices: [
        {
          name: 'CRM Software (All Industries)',
          description: 'Customer data management, lead tracking, sales automation and relationship management',
          features: ['Customer database', 'Lead tracking', 'Sales pipeline', 'Reporting'],
          icon: 'groups',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          name: 'Finance / Accounting / Billing',
          description: 'Invoicing, expense tracking, financial reporting and GST management',
          features: ['Automated invoicing', 'Expense tracking', 'Financial reports', 'GST compliance'],
          icon: 'payments',
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Project & Task Management',
          description: 'Team collaboration, task assignment, workflow automation and productivity tracking',
          features: ['Team collaboration', 'Task assignment', 'Workflow automation', 'Resource management'],
          icon: 'task',
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'HRMS & Payroll Software',
          description: 'Employee management, attendance, payroll processing and performance tracking',
          features: ['Employee database', 'Attendance tracking', 'Payroll automation', 'Leave management'],
          icon: 'badge',
          color: 'from-indigo-500 to-purple-500'
        },
        {
          name: 'Communication & Collaboration',
          description: 'Internal chat systems, team collaboration tools and workflow communication',
          features: ['Internal messaging', 'Video conferencing', 'File sharing', 'Team workspace'],
          icon: 'chat',
          color: 'from-cyan-500 to-blue-500'
        },
        {
          name: 'Email & Marketing Automation',
          description: 'Automated email campaigns, lead nurturing and marketing workflows',
          features: ['Email campaigns', 'Lead nurturing', 'Marketing automation', 'Audience segmentation'],
          icon: 'mail',
          color: 'from-orange-500 to-red-500'
        },
        {
          name: 'Inventory & Supply Chain',
          description: 'Stock tracking, warehouse management and logistics automation',
          features: ['Real-time inventory', 'Warehouse management', 'Logistics automation', 'Demand forecasting'],
          icon: 'inventory',
          color: 'from-lime-500 to-green-500'
        },
        {
          name: 'ERP & BI Solutions',
          description: 'Integrated enterprise management and business intelligence reporting',
          features: ['Process integration', 'Resource planning', 'Real-time BI', 'Predictive analytics'],
          icon: 'analytics',
          color: 'from-violet-500 to-purple-500'
        }
      ],
      b2cServices: [
        {
          name: 'E-Commerce Systems',
          description: 'Online selling platforms, product management and order automation',
          features: ['Store platform', 'Catalog management', 'Order automation', 'Shopping cart'],
          icon: 'storefront',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          name: 'Payment & Wallet Systems',
          description: 'Secure online payments, digital wallets and transaction management',
          features: ['Secure payments', 'Digital wallets', 'Transaction management', 'Fraud detection'],
          icon: 'account_balance_wallet',
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Appointment Booking',
          description: 'Online scheduling systems for all service-based companies',
          features: ['Online scheduling', 'Calendar integration', 'Automated reminders', 'Booking portal'],
          icon: 'event',
          color: 'from-cyan-500 to-blue-500'
        }
      ],
      developmentProcess: defaultProcess
    },
    {
      id: 'digital-marketing',
      title: 'Digital + Performance Marketing Service',
      subtitle: 'Complete End-to-End B2B & B2C Solutions',
      description: 'We provide complete end-to-end digital marketing solutions designed for both B2B and B2C businesses. Our focus is brand growth, lead generation, and revenue increase through data-driven strategies.',
      icon: 'trending_up',
      color: 'from-blue-500 to-cyan-500',
      services: [
        {
          category: 'Core Digital Marketing',
          description: 'Building a strong digital foundation for your brand',
          items: ['Strategy & Planning', 'Brand Positioning', 'Market Research', 'Funnel Mapping', 'Campaign Planning'],
          icon: 'foundation',
          color: 'from-blue-500 to-cyan-500'
        },
        {
          category: 'Performance Marketing',
          description: 'ROI-focused campaigns for maximum lead generation',
          subcategories: [
            { title: 'Ad Platforms', items: ['Google Ads', 'Meta Ads', 'LinkedIn Ads', 'YouTube Ads'] },
            { title: 'Operations', items: ['Campaign Optimization', 'A/B Testing', 'Conversion Tracking', 'Scaling Strategies'] }
          ],
          icon: 'analytics',
          color: 'from-purple-500 to-pink-500'
        },
        {
          category: 'Social Media Management',
          description: 'Full-service social media profile growth and management',
          platforms: ['Instagram', 'LinkedIn', 'YouTube', 'Facebook', 'Twitter', 'WhatsApp'],
          activities: ['Content Calendar', 'Reel Management', 'Engagement Strategy', 'Analytics'],
          icon: 'share',
          color: 'from-green-500 to-emerald-500'
        }
      ],
      reporting: {
        title: 'Reporting & Analytics',
        description: 'Transparency through detailed performance tracking',
        features: ['Weekly Reports', 'KPI Dashboards', 'Lead Quality Analysis', 'Sales Funnel Audit'],
        icon: 'monitoring',
        color: 'from-teal-500 to-cyan-500'
      }
    },
    {
      id: 'physical-marketing',
      title: 'Physical Marketing Services',
      subtitle: 'Offline Branding & Direct Marketing',
      description: 'Reaching your audience through physical touchpoints and direct local engagement strategies.',
      icon: 'storefront',
      color: 'from-orange-500 to-red-500',
      services: [
        {
          category: 'Print & Collateral',
          description: 'High-quality business cards, brochures, and banners',
          items: ['Business Cards', 'Brochures', 'Banners', 'Event Collateral'],
          icon: 'print',
          color: 'from-orange-500 to-red-500'
        },
        {
          category: 'Direct Distribution',
          description: 'Local area marketing and physical distribution services',
          items: ['Catalog Distribution', 'Postcard Campaigns', 'Local Marketing'],
          icon: 'mail',
          color: 'from-red-500 to-rose-500'
        }
      ]
    },
    {
      id: 'core-services',
      title: 'Core Design & Graphics',
      subtitle: 'Premium Visual Identity Solutions',
      description: 'Transform your brand vision into stunning visual experiences. From UI/UX to 3D visualization, we deliver pixel-perfect designs.',
      icon: 'design_services',
      color: 'from-pink-500 to-rose-500',
      services: [
        {
          category: 'UI/UX Design',
          description: 'User-centered design that enhances engagement and conversion',
          items: ['Website & App UI', 'Landing Pages', 'Design Systems', 'Interactive Prototypes'],
          icon: 'phonelink',
          color: 'from-blue-500 to-indigo-500'
        },
        {
          category: 'Brand Identity',
          description: 'Establishing your unique market presence and guidelines',
          items: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Color Palette'],
          icon: 'brush',
          color: 'from-purple-500 to-pink-500'
        }
      ]
    },
    {
      id: 'industry-transformation',
      title: 'Industry Transformation',
      subtitle: 'Sector-Specific Digital Solutions',
      description: 'Revolutionary technology platforms designed exclusively for education, healthcare, and finance sectors.',
      icon: 'apartment',
      color: 'from-indigo-600 to-blue-700',
      industries: [
        {
          name: 'Education Sector',
          description: 'Complete digital ecosystem for schools and institutions',
          icon: 'school',
          color: 'from-green-500 to-emerald-600',
          solutions: ['School Management ERP', 'Student App', 'LMS Platform', 'Fees Management'],
          benefits: ['100% Paperless', 'Parent Connection', 'Real-time Tracking']
        },
        {
          name: 'Healthcare Sector',
          description: 'End-to-end hospital and clinic management systems',
          icon: 'medical_services',
          color: 'from-red-500 to-pink-600',
          solutions: ['Hospital ERP', 'OPD Management', 'Pharmacy Billing', 'Patient Records'],
          benefits: ['Secure Data', 'Easy Scheduling', '24/7 Access']
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 relative overflow-hidden pt-24">
      <Particles />

      {/* Hero Section */}
      <section className="relative z-10 px-6 py-20 text-center">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/80 border border-slate-200 backdrop-blur-md mb-8 shadow-sm">
              <span className="material-symbols-outlined text-blue-600 font-bold">precision_manufacturing</span>
              <span className="text-slate-800 font-bold tracking-widest uppercase text-xs">Global Tech Ecosystem</span>
            </div>
            <h1 className="text-5xl md:text-8xl font-black mb-8 tracking-tighter pb-4 leading-none">
              <span className="text-slate-900 block">Professional</span>
              <span className="text-blue-600 block">IT Services.</span>
            </h1>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed mb-12">
              From high-precision engineering to global marketing, we provide enterprise-grade solutions for the next generation of businesses.
            </p>

            {/* Anchored Navigation */}
            <div className="flex flex-wrap justify-center gap-3 mb-20 scrollbar-hide">
              <button
                onClick={() => setActiveSection(null)}
                className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${activeSection === null ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20' : 'bg-white text-slate-500 border border-slate-200 hover:text-slate-900'}`}
              >
                Overview
              </button>
              {serviceSections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-widest transition-all ${activeSection === section.id ? 'bg-blue-600 text-white shadow-xl shadow-blue-500/20 scale-105' : 'bg-white text-slate-500 border border-slate-200 hover:text-slate-900'}`}
                >
                  {section.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </motion.div>

          {/* Overview Section */}
          <AnimatePresence mode="wait">
            {activeSection === null ? (
              <motion.div key="overview" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} className="space-y-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                  {defaultBenefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -15, scale: 1.02 }}
                      className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl text-center group transition-all duration-500 flex flex-col items-center relative overflow-hidden active:scale-95"
                    >
                      {/* Hover Gradient Overlay */}
                      <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-100 transition-all duration-500 z-0`}></div>

                      {/* Stat Tag (Top Right) */}
                      <div className="absolute top-4 right-4 z-10">
                        <div className="bg-orange-500 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg transform rotate-12 group-hover:rotate-0 transition-transform duration-500">
                          {benefit.stat}
                        </div>
                      </div>

                      <div className="relative z-10 flex flex-col items-center h-full">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mb-6 shadow-lg group-hover:bg-white group-hover:from-white group-hover:to-white transition-all duration-500`}>
                          <span className={`material-symbols-outlined text-white text-2xl group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-br ${benefit.color}`}>{benefit.icon}</span>
                        </div>

                        <h3 className="text-xl font-black text-slate-800 mb-4 uppercase tracking-tighter leading-none group-hover:text-white transition-colors duration-500">
                          {benefit.title}
                        </h3>

                        <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6 flex-grow group-hover:text-white/90 transition-colors duration-500">
                          {benefit.description}
                        </p>

                        <div className="px-6 py-2 rounded-full bg-blue-50 group-hover:bg-white/20 transition-all duration-500">
                          <div className="text-blue-600 font-black text-[10px] tracking-widest uppercase group-hover:text-white">
                            {benefit.statLabel}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Development Process */}
                <div className="relative py-24 bg-white rounded-[4rem] border border-slate-200 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
                  <div className="text-center mb-16 px-6">
                    <h3 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 tracking-tighter">Our Development <span className="text-blue-600">Process</span></h3>
                    <p className="text-slate-500 font-medium max-w-2xl mx-auto leading-relaxed">Structured engineering methodology for maximum efficiency and quality.</p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-5 gap-px bg-slate-100">
                    {defaultProcess.map((step, i) => (
                      <div key={i} className="bg-white p-12 text-center group hover:bg-slate-50 transition-colors">
                        <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-8 shadow-xl group-hover:scale-110 transition-transform`}>
                          <span className="text-white font-black text-2xl">{step.step}</span>
                        </div>
                        <h4 className="text-lg font-black text-slate-800 mb-4 uppercase tracking-tight">{step.title}</h4>
                        <p className="text-sm text-slate-400 font-medium leading-relaxed">{step.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : (
              <motion.div key={activeSection} initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -40 }} className="space-y-20 text-left">
                {serviceSections.map((section) => activeSection === section.id && (
                  <div key={section.id} className="space-y-16">
                    {/* Section Information */}
                    <div className="bg-white p-12 md:p-20 rounded-[3rem] border border-slate-200 shadow-2xl relative overflow-hidden">
                      <div className={`absolute top-0 right-0 w-96 h-96 bg-gradient-to-br ${section.color} opacity-5 rounded-full blur-[100px] -mr-48 -mt-48`} />
                      <div className="relative z-10">
                        <span className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-6 block">{section.subtitle}</span>
                        <h2 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter pb-2">{section.title}</h2>
                        <p className="text-2xl text-slate-500 font-medium leading-relaxed max-w-4xl">{section.description}</p>
                      </div>
                    </div>

                    {/* Section Grid Content */}
                    <div className="grid grid-cols-1 gap-12">
                      {section.id === 'software-development' && (
                        <div className="space-y-20">
                          <div>
                            <h3 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4">
                              <span className="w-12 h-1 bg-blue-600 rounded-full" />
                              B2B Software Solutions
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                              {section.b2bServices.map((s, i) => (
                                <div key={i} className="bg-white p-8 rounded-[2.5rem] border border-slate-200 shadow-xl group hover:border-blue-200 transition-all">
                                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-6 shadow-md`}>
                                    <span className="material-symbols-outlined text-white text-xl">{s.icon}</span>
                                  </div>
                                  <h4 className="text-lg font-black text-slate-800 mb-4 leading-tight">{s.name}</h4>
                                  <p className="text-sm text-slate-500 font-medium mb-6 leading-relaxed">{s.description}</p>
                                  <ul className="space-y-3">
                                    {s.features.map((f, j) => (
                                      <li key={j} className="flex items-center gap-3 text-[11px] font-bold text-slate-400">
                                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500/40" />
                                        {f}
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                          <div>
                            <h3 className="text-3xl font-black text-slate-900 mb-10 flex items-center gap-4">
                              <span className="w-12 h-1 bg-emerald-600 rounded-full" />
                              B2C & Consumer Platforms
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                              {section.b2cServices.map((s, i) => (
                                <div key={i} className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-xl flex items-start gap-6">
                                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center flex-shrink-0 shadow-lg`}>
                                    <span className="material-symbols-outlined text-white text-2xl">{s.icon}</span>
                                  </div>
                                  <div>
                                    <h4 className="text-xl font-black text-slate-800 mb-3">{s.name}</h4>
                                    <p className="text-sm text-slate-500 font-medium leading-relaxed mb-6">{s.description}</p>
                                    <button onClick={() => setIsConsultationOpen(true)} className="text-xs font-black text-blue-600 uppercase tracking-widest hover:gap-3 transition-all flex items-center gap-2">Request Demo <span className="material-symbols-outlined text-sm">arrow_forward</span></button>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}

                      {section.id === 'digital-marketing' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                          {section.services.map((s, i) => (
                            <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-slate-200 shadow-2xl flex flex-col h-full">
                              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-10 shadow-xl`}>
                                <span className="material-symbols-outlined text-white text-2xl">{s.icon}</span>
                              </div>
                              <h4 className="text-2xl font-black text-slate-900 mb-6 pb-2 tracking-tighter leading-none border-b border-slate-50">{s.category}</h4>
                              <p className="text-slate-500 font-medium mb-10 leading-relaxed">{s.description}</p>
                              {s.items && (
                                <ul className="space-y-4 mb-10">
                                  {s.items.map((item, j) => (
                                    <li key={j} className="flex items-center gap-4 text-slate-600 font-bold group cursor-default">
                                      <span className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center text-blue-600 text-xs border border-slate-100 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm">
                                        <span className="material-symbols-outlined text-sm">check</span>
                                      </span>
                                      {item}
                                    </li>
                                  ))}
                                </ul>
                              )}
                              <button onClick={() => setIsConsultationOpen(true)} className="mt-auto py-4 bg-slate-900 text-white rounded-2xl font-black text-[11px] uppercase tracking-widest hover:bg-blue-600 transition-colors shadow-lg">Schedule Consultation</button>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Industry Section */}
                      {section.id === 'industry-transformation' && (
                        <div className="grid md:grid-cols-2 gap-12">
                          {section.industries.map((ind, i) => (
                            <div key={i} className="bg-white p-14 rounded-[4rem] border border-slate-200 shadow-2xl relative overflow-hidden group">
                              <div className={`absolute top-0 right-0 w-48 h-48 bg-gradient-to-br ${ind.color} opacity-5 rounded-full blur-[60px] transform translate-x-12 -translate-y-12`} />
                              <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${ind.color} flex items-center justify-center mb-10 shadow-2xl transform group-hover:rotate-12 transition-transform`}>
                                <span className="material-symbols-outlined text-white text-3xl font-black">{ind.icon}</span>
                              </div>
                              <h3 className="text-3xl font-black text-slate-900 mb-4 tracking-tighter uppercase">{ind.name}</h3>
                              <p className="text-slate-500 font-medium mb-12 leading-relaxed">{ind.description}</p>
                              <div className="flex flex-wrap gap-3 mb-12">
                                {ind.solutions.map((sol, j) => (
                                  <span key={j} className="px-5 py-2.5 bg-slate-50 border border-slate-100 rounded-2xl text-[11px] font-black text-slate-700 uppercase tracking-widest group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">{sol}</span>
                                ))}
                              </div>
                              <div className="grid grid-cols-1 gap-4">
                                {ind.benefits.map((ben, j) => (
                                  <div key={j} className="flex items-center gap-4 text-slate-600 font-black text-[11px] tracking-widest uppercase">
                                    <span className="material-symbols-outlined text-blue-600 text-sm">verified</span>
                                    {ben}
                                  </div>
                                ))}
                              </div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Generic Section Grid */}
                      {section.id !== 'software-development' && section.id !== 'digital-marketing' && section.id !== 'industry-transformation' && (
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                          {section.services.map((s, i) => (
                            <div key={i} className="bg-white p-12 rounded-[3.5rem] border border-slate-200 shadow-xl group hover:border-blue-200 transition-all">
                              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-8 shadow-lg`}>
                                <span className="material-symbols-outlined text-white text-2xl">{s.icon}</span>
                              </div>
                              <h4 className="text-2xl font-black text-slate-900 mb-6 tracking-tighter pb-2 border-b border-slate-50">{s.category}</h4>
                              <p className="text-slate-600 font-medium mb-10 leading-relaxed">{s.description}</p>
                              <ul className="grid grid-cols-1 gap-4">
                                {s.items.map((item, j) => (
                                  <li key={j} className="flex items-center gap-4 text-slate-600 font-bold uppercase text-[11px] tracking-widest cursor-default">
                                    <span className="w-6 h-6 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 border border-blue-100 shadow-sm">
                                      <span className="material-symbols-outlined text-[12px]">check</span>
                                    </span>
                                    {item}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>

                    {/* Bottom CTA for Section */}
                    <div className="text-center py-20 bg-slate-50 rounded-[4rem] border border-slate-100 shadow-inner">
                      <h3 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter lowercase leading-none">ready to automate your <span className="text-blue-600 underline">business?</span></h3>
                      <button onClick={() => setIsConsultationOpen(true)} className="px-16 py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xs uppercase tracking-[0.3em] shadow-2xl shadow-blue-500/40 hover:scale-105 active:scale-95 transition-all">Start Project Briefing</button>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Universal Bottom Stats */}
      <section className="relative z-10 px-6 py-20 border-t border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl text-center group hover:-translate-y-4 transition-all duration-700">
            <div className="text-6xl font-black text-slate-900 mb-4 tracking-tighter group-hover:text-blue-600 transition-colors">2-4<span className="text-blue-600 ml-1">wks</span></div>
            <div className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">Average Delivery</div>
          </div>
          <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl text-center group hover:-translate-y-4 transition-all duration-700">
            <div className="text-6xl font-black text-slate-900 mb-4 tracking-tighter group-hover:text-indigo-600 transition-colors">100<span className="text-indigo-600 ml-1">%</span></div>
            <div className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">Success Rate</div>
          </div>
          <div className="bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-xl text-center group hover:-translate-y-4 transition-all duration-700">
            <div className="text-6xl font-black text-slate-900 mb-4 tracking-tighter group-hover:text-purple-600 transition-colors">24/7<span className="text-purple-600 ml-1"></span></div>
            <div className="text-xs font-black text-slate-400 uppercase tracking-[0.4em]">Expert Support</div>
          </div>
        </div>
      </section>

      {/* Consultation Modal */}
      <AnimatePresence>
        {isConsultationOpen && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xl">
            <motion.div initial={{ opacity: 0, scale: 0.9, y: 30 }} animate={{ opacity: 1, scale: 1, y: 0 }} exit={{ opacity: 0, scale: 0.9, y: 30 }} className="bg-white border border-slate-200 rounded-[3rem] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl p-12 relative no-scrollbar">
              <button onClick={() => setIsConsultationOpen(false)} className="absolute top-10 right-10 text-slate-400 hover:text-slate-900 transition-colors">
                <span className="material-symbols-outlined text-3xl font-black">close</span>
              </button>
              <div className="mb-12 text-center">
                <h2 className="text-4xl font-black text-slate-900 mb-3 tracking-tighter uppercase">Initiate Protocol</h2>
                <p className="text-slate-500 font-bold text-xs uppercase tracking-widest">Connect with our executive engineering team</p>
              </div>
              <form onSubmit={handleConsultationSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <FormInput label="Full Identity" icon="person" value={consultationData.name} onChange={(e) => setConsultationData({ ...consultationData, name: e.target.value })} placeholder="Alexander Vance" required />
                  <FormInput label="Digital Line" icon="mail" type="email" value={consultationData.email} onChange={(e) => setConsultationData({ ...consultationData, email: e.target.value })} placeholder="name@org.com" required />
                  <FormInput label="Organization" icon="business" value={consultationData.company} onChange={(e) => setConsultationData({ ...consultationData, company: e.target.value })} placeholder="Vance Dynamics" required />
                  <FormInput label="Voice Channel" icon="call" type="tel" value={consultationData.phone} onChange={(e) => setConsultationData({ ...consultationData, phone: e.target.value })} placeholder="+1 (555) 000-0000" />
                </div>
                <div>
                  <label className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-3 block ml-2">Mission Payload Description</label>
                  <textarea rows="4" value={consultationData.message} onChange={(e) => setConsultationData({ ...consultationData, message: e.target.value })} className="w-full bg-slate-50 border border-slate-200 rounded-[2rem] px-8 py-6 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-900 font-black placeholder:text-slate-300 shadow-inner" placeholder="Outline your vertical requirements..." required></textarea>
                </div>
                {submitError && <div className="text-red-600 text-[10px] font-bold uppercase tracking-widest text-center">{submitError}</div>}
                <button type="submit" disabled={isSubmitting} className="w-full py-6 bg-blue-600 text-white rounded-[2rem] font-black text-xs tracking-[0.3em] shadow-2xl shadow-blue-500/40 hover:scale-[1.02] active:scale-95 transition-all uppercase">
                  {isSubmitting ? 'Synchronizing Parameters...' : 'Launch Mission Briefing'}
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
  <div className="space-y-3">
    <label className="text-[10px] font-black text-blue-600 uppercase tracking-widest mb-1 ml-2 block">{label}</label>
    <div className="relative">
      <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 text-xl font-black">{icon}</span>
      <input {...props} className="w-full bg-slate-50 border border-slate-200 rounded-[2rem] pl-16 pr-8 py-5 focus:ring-4 focus:ring-blue-500/10 focus:border-blue-500 outline-none transition-all text-slate-900 font-black placeholder:text-slate-300 shadow-inner" />
    </div>
  </div>
);

export default ServicesPage;
