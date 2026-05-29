import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPackage = () => {
  const services = [
    {
      id: 1,
      title: 'AI Automation Agent Service',
      icon: 'auto_mode',
      color: 'from-blue-700 to-sky-500',
      description: 'Advanced business automation using AI agents to streamline operations, save time, and scale your business efficiently.',
      features: [
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
        'AI Branding & Digital Growth Agent',
        'Automation & Time Saving Solutions',
        'Scalability & Cost Reduction',
        '24/7 Operations Management',
        'Intelligent Decision Making',
        'Predictive Analytics & Insights',
        'Custom AI Agent Development',
        'AI Training & Implementation',
        'AI Performance Monitoring'
      ],
      cta: 'Schedule AI Strategy Call'
    },
    {
      id: 2,
      title: 'Software + APK Development Service',
      icon: 'code',
      color: 'from-purple-500 to-pink-500',
      description: 'Custom software solutions for B2B and B2C businesses with advanced functionality and seamless user experience.',
      features: [
        'CRM systems',
        'ERP software',
        'HR & payroll systems',
        'Project management tools',
        'Accounting & billing systems',
        'Communication & collaboration tools',
        'Email marketing automation',
        'Customer support systems',
        'Document & e-signature software',
        'Inventory & logistics software',
        'Business analytics dashboards',
        'E-commerce platforms',
        'Online booking systems',
        'Payment gateway integration',
        'Customer relationship apps',
        'Mobile applications',
        'Delivery & order tracking systems',
        'Appointment scheduling software',
        'Stock management systems',
        'Customer support chat systems',
        'Data reporting tools',
        'User Experience Design',
        'API Integration',
        'Cloud Solutions',
        'Security & Compliance'
      ],
      cta: 'Start Development'
    },
    {
      id: 3,
      title: 'Enterprise Industry Solution',
      icon: 'corporate_fare',
      color: 'from-blue-600 to-cyan-500',
      description: 'Specialized solutions for Education, Healthcare, Real Estate, and more industries with advanced features and compliance standards.',
      features: [
        'School management system',
        'Student mobile application',
        'AI learning platform',
        'Attendance & performance tracking',
        'Parent communication tools',
        'Digital marketing for schools',
        'Online courses & mentorship',
        'Student engagement systems',
        'Hospital management software',
        'Patient record systems',
        'Online appointment booking',
        'Telemedicine platform',
        'Billing & insurance integration',
        'Pharmacy management',
        'AI health monitoring tools',
        'Secure data management',
        'HIPAA Compliance',
        'Medical Records Security',
        'Patient Privacy Protection',
        'Regulatory Compliance'
      ],
      cta: 'Get Industry Quote'
    },
    {
      id: 4,
      title: 'Digital + Performance Marketing Service',
      icon: 'campaign',
      color: 'from-orange-500 to-red-600',
      description: 'ROI-focused digital marketing solutions designed to maximize your business growth through data-driven strategies and performance optimization.',
      features: [
        'Digital marketing strategy & planning',
        'Brand positioning & online presence setup',
        'Market & competitor research',
        'Funnel & customer journey mapping',
        'Conversion campaign planning',
        'Google Ads (Search, Display, YouTube)',
        'Meta Ads (Facebook & Instagram)',
        'LinkedIn Ads (B2B)',
        'Remarketing campaigns',
        'Campaign optimization & scaling',
        'Conversion tracking & analytics',
        'Account setup & optimization',
        'Content calendar planning',
        'Post, reel, story management',
        'Engagement & community management',
        'Influencer coordination',
        'Growth analytics reporting',
        'Graphic design & ad creatives',
        'Video production & editing',
        'Promotional & explainer videos',
        'Branding materials',
        'AI creative ads',
        'Website SEO audit',
        'Keyword research',
        'On-page & technical SEO',
        'Local SEO',
        'Content SEO',
        'Weekly & monthly reports',
        'KPI dashboards',
        'Lead quality analysis',
        'Strategy improvement'
      ],
      cta: 'Boost Your Growth'
    },
    {
      id: 5,
      title: 'Physical Marketing Services',
      icon: 'storefront',
      color: 'from-pink-500 to-rose-600',
      description: 'Comprehensive physical marketing solutions designed to build real-world brand presence and drive direct local engagement.',
      features: [
        'Business cards & brochures',
        'Banners & hoardings',
        'Custom promotional merchandise',
        'Event collateral',
        'Catalog distribution',
        'Postcard campaigns',
        'Local area marketing',
        'In-store promotional displays',
        'Direct mail campaigns',
        'Print advertising'
      ],
      cta: 'Request Print Quote'
    },
    {
      id: 6,
      title: 'Graphical Development Services',
      icon: 'palette',
      color: 'from-teal-500 to-emerald-600',
      description: 'Stunning visual identity and graphics that communicate your brand effectively across all touchpoints.',
      features: [
        'Brand Identity Design',
        'Logo & Typography',
        'Marketing Collateral',
        'Social Media Graphics',
        'UI/UX Design',
        'Packaging Design',
        'Presentation Design',
        'Custom Illustrations'
      ],
      cta: 'Get Design Services'
    },
    {
      id: 7,
      title: 'Collaboration and Project Management',
      icon: 'groups',
      color: 'from-indigo-500 to-purple-600',
      description: 'Streamlined team collaboration solutions and project management expertise to ensure your team works effectively.',
      features: [
        'Project Scope Definition',
        'Timeline & Milestone Planning',
        'Agile Methodology Training',
        'Sprint Planning & Execution',
        'Slack & Microsoft Teams Setup',
        'Notion & Confluence Implementation',
        'Strategic Partnerships',
        'Investor Relations Management'
      ],
      cta: 'Streamline Your Team'
    },
    {
      id: 8,
      title: 'Cloud Infrastructure & DevOps',
      icon: 'cloud_done',
      color: 'from-sky-500 to-blue-600',
      description: 'Scale your business with high-performance cloud infrastructure and seamless DevOps automation for maximum reliability.',
      features: [
        'Cloud Architecture Design',
        'AWS/Azure/GCP Management',
        'CI/CD Pipeline Setup',
        'Serverless Implementation',
        'Infrastructure as Code (IaC)',
        'Containerization (Docker/K8s)',
        'Performance Optimization',
        'Cloud Cost Management'
      ],
      cta: 'Scale Your Cloud'
    },
    {
      id: 9,
      title: 'Cybersecurity & Compliance',
      icon: 'security',
      color: 'from-red-600 to-rose-700',
      description: 'Protect your digital assets and ensure regulatory compliance with advanced security protocols and continuous monitoring.',
      features: [
        'Vulnerability Assessment',
        'Penetration Testing',
        'Data Encryption Services',
        'Compliance Audits (GDPR/ISO)',
        'Identity & Access Management',
        'End-to-end Security Monitoring',
        'Incident Response Planning',
        'Employee Security Training'
      ],
      cta: 'Secure Your Business'
    },
    {
      id: 10,
      title: 'E-commerce Strategy & Growth',
      icon: 'shopping_cart',
      color: 'from-yellow-400 to-orange-500',
      description: 'Turn your e-commerce store into a high-conversion sales engine with data-driven strategies and user-centric design.',
      features: [
        'Store Design & Optimization',
        'Conversion Rate Optimization',
        'Customer Retention Strategy',
        'Omnichannel Integration',
        'Product Performance Analysis',
        'Payment & Shipping Strategy',
        'Loyalty Program Design',
        'Marketplace Management'
      ],
      cta: 'Grow Your Sales'
    }
  ];

  // Service Benefits
  const serviceBenefits = [
    { title: 'Proven Track Record', description: '15+ successful projects delivered across diverse industries', icon: 'workspace_premium', color: 'from-blue-600 to-cyan-500' },
    { title: 'Expert Team', description: 'Certified professionals with deep domain expertise', icon: 'groups', color: 'from-purple-600 to-pink-600' },
    { title: 'Cutting-Edge Tech', description: 'Latest technologies and methodologies', icon: 'auto_mode', color: 'from-emerald-600 to-teal-600' },
    { title: '24/7 Support', description: 'Round-the-clock assistance and maintenance', icon: 'support_agent', color: 'from-orange-600 to-red-600' }
  ];

  return (
    <div className="min-h-screen premium-bg pt-12">
      {/* Hero Section */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl md:text-7xl font-bold text-black mb-6 heading-underline active pb-2">
              Premium
              <span className="block text-premium-gradient">
                Enterprise Solutions
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-12">
              Comprehensive digital services designed to accelerate your business growth
              with structured systems and intelligent automation
            </p>
          </motion.div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-6 pb-20">
        <div className="max-w-7xl mx-auto">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-16 relative group"
            >
              {/* Premium Frame Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-500/10 via-emerald-500/10 to-purple-500/10 rounded-[3rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

              <div className="glass-card rounded-[3rem] p-8 lg:p-12 border border-slate-200 hover:border-blue-500/30 transition-all duration-700 backdrop-blur-md group bg-white/90 shadow-2xl overflow-hidden relative">
                {/* Decorative background image (Subtle AI pattern for all services) */}
                <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5 pointer-events-none"></div>
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>

                <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
                  {/* Left Side */}
                  <div className="w-full lg:w-1/3">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 shadow-2xl shadow-slate-200 group-hover:shadow-[0_0_40px_rgba(37,99,235,0.2)] transition-all duration-500`}
                    >
                      <span className="material-symbols-outlined text-white text-4xl">{service.icon}</span>
                    </motion.div>
                    <h2 className="text-4xl font-black text-slate-800 mb-6 tracking-tight leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-slate-900 group-hover:to-slate-600 transition-all duration-500">
                      {service.title}
                    </h2>
                    <p className="text-slate-600 text-lg mb-10 leading-relaxed font-medium">{service.description}</p>

                    <div className="space-y-4 mb-10">
                      {[
                        'Scalable Architecture',
                        'Premium Implementation',
                        'Next-Gen Tech Stack',
                        'Expert Support'
                      ].map((point, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-blue-emerald text-base font-bold">check_circle</span>
                          <span className="text-slate-700 font-bold text-sm tracking-tight">{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-wrap gap-3 mt-auto">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-700 text-[10px] font-black uppercase tracking-widest border border-slate-100 w-fit">
                        <span className="material-symbols-outlined text-xs">verified</span>
                        <span>Enterprise Certified</span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-700 text-[10px] font-black uppercase tracking-widest border border-slate-100 w-fit">
                        <span className="material-symbols-outlined text-xs">security</span>
                        <span>Premium Security</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Feature Grid */}
                  <div className="w-full lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                      {service.features.map((feature, featIndex) => (
                        <motion.div
                          key={featIndex}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: featIndex * 0.05 }}
                          whileHover={{ x: 8, backgroundColor: 'white', borderColor: 'rgba(37,99,235,0.2)' }}
                          className="flex items-center gap-4 p-5 bg-white/50 rounded-2xl border border-slate-100 transition-all duration-300 shadow-sm group/feat"
                        >
                          <div className={`w-9 h-9 rounded-xl bg-white flex items-center justify-center flex-shrink-0 shadow-md group-hover/feat:bg-gradient-to-br ${service.color} transition-all duration-500`}>
                            <span className="material-symbols-outlined text-slate-800 text-sm group-hover/feat:text-white transition-colors">arrow_right_alt</span>
                          </div>
                          <span className="text-slate-700 text-[13px] font-bold group-hover/feat:text-slate-900 transition-colors tracking-tight">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-16 pt-12 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex items-center gap-4">
                    <div className="flex -space-x-4">
                      {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="w-12 h-12 rounded-full border-4 border-white bg-slate-100 overflow-hidden shadow-lg">
                          <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${service.id + i}`} alt="Client" />
                        </div>
                      ))}
                    </div>
                    <div className="text-sm font-bold text-slate-500">
                      <span className="text-slate-900 block font-black uppercase tracking-wider">Trusted by 500+</span>
                      Active enterprises
                    </div>
                  </div>

                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 25px 50px -12px rgba(16, 185, 129, 0.25)' }}
                      whileTap={{ scale: 0.95 }}
                      className="bg-blue-emerald text-white font-black px-12 py-5 rounded-full transition-all shadow-2xl flex items-center gap-4 text-xl"
                    >
                      <span className="material-symbols-outlined font-black">rocket_launch</span>
                      {service.cta}
                    </motion.button>
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="px-6 py-24 bg-slate-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-black text-black mb-6 heading-underline active inline-block tracking-tighter uppercase pb-10">Elite Expertise</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">Premium enterprise solutions backed by years of innovation and proven global results.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-[2.5rem] p-8 border border-slate-200 bg-white shadow-xl text-center group transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-blue-emerald flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-blue-500/10`}>
                  <span className="material-symbols-outlined text-white text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-black text-slate-800 mb-4 group-hover:text-blue-emerald transition-colors duration-500 uppercase tracking-tight">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors duration-500 font-medium">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Banner */}
      <div className="px-6 py-24 relative overflow-hidden bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 border border-slate-100 rounded-[4rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-blue-emerald opacity-[0.02]"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black text-black mb-8 tracking-tighter heading-underline active inline-block uppercase pb-12 leading-none">
                Scale Your <br className="md:hidden" /> Business Now
              </h2>
              <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-bold">
                Join 500+ successful enterprises that have transformed their operations with our high-performance solutions.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-blue-emerald text-white font-black px-12 py-5 rounded-full text-xl shadow-2xl shadow-blue-500/20 transition-all flex items-center gap-3 uppercase tracking-widest text-sm"
                  >
                    Get Started Now
                    <span className="material-symbols-outlined font-black">arrow_forward</span>
                  </motion.button>
                </Link>
                <Link to="/join-contact">
                  <button className="text-slate-900 font-black text-lg hover:underline flex items-center gap-2 uppercase tracking-widest text-sm">
                    Schedule Demo
                  </button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesPackage;
