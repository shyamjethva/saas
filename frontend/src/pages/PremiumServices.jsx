import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServicesPackage = () => {
  const services = [
    {
      id: 1,
      title: 'AI Automation Agent Service',
      icon: 'auto_mode',
      color: 'from-blue-600 to-cyan-500',
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
      cta: 'Schedule Strategy Call'
    },
    {
      id: 2,
      title: 'Software + APK Development Service',
      icon: 'code',
      color: 'from-purple-600 to-pink-600',
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
      cta: 'Schedule Strategy Call'
    },
    {
      id: 3,
      title: 'Enterprise Industry Solution',
      icon: 'corporate_fare',
      color: 'from-emerald-600 to-teal-600',
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
      cta: 'Schedule Strategy Call'
    },
    {
      id: 4,
      title: 'Digital + Performance Marketing Service',
      icon: 'campaign',
      color: 'from-orange-600 to-red-600',
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
      cta: 'Schedule Strategy Call'
    },
    {
      id: 5,
      title: 'Physical Marketing Services',
      icon: 'storefront',
      color: 'from-pink-600 to-purple-600',
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
      cta: 'Schedule Strategy Call'
    },
    {
      id: 6,
      title: 'Graphical Development Services',
      icon: 'palette',
      color: 'from-cyan-600 to-blue-600',
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
      cta: 'Schedule Strategy Call'
    },
    {
      id: 7,
      title: 'Collaboration and Project Management',
      icon: 'groups',
      color: 'from-blue-600 to-indigo-600',
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
      cta: 'Schedule Strategy Call'
    }
  ];

  // Service Benefits
  const serviceBenefits = [
    { title: 'Proven Track Record', description: '500+ successful projects delivered across diverse industries', icon: 'workspace_premium', color: 'from-blue-600 to-cyan-500' },
    { title: 'Expert Team', description: 'Certified professionals with deep domain expertise', icon: 'groups', color: 'from-purple-600 to-pink-600' },
    { title: 'Cutting-Edge Tech', description: 'Latest technologies and methodologies', icon: 'auto_mode', color: 'from-emerald-600 to-teal-600' },
    { title: '24/7 Support', description: 'Round-the-clock assistance and maintenance', icon: 'support_agent', color: 'from-orange-600 to-red-600' }
  ];

  return (
    <div className="min-h-screen premium-bg pt-20">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-100 border border-slate-200 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-slate-900">workspace_premium</span>
              <span className="text-slate-900 font-bold tracking-wider uppercase text-sm">SERVICES & PACKAGES</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6">
              Premium
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500">
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
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="mb-12"
            >
              <div className="glass-card rounded-[2.5rem] p-8 lg:p-12 border border-slate-200 hover:border-slate-400 transition-all duration-700 backdrop-blur-sm group bg-white/80 shadow-xl overflow-hidden relative">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100 rounded-full blur-3xl -mr-32 -mt-32 opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="flex flex-col lg:flex-row gap-12 items-start relative z-10">
                  {/* Left Side */}
                  <div className="w-full lg:w-1/3">
                    <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-2xl group-hover:shadow-[0_0_30px_rgba(37,99,235,0.3)]`}>
                      <span className="material-symbols-outlined text-white text-4xl">{service.icon}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-4">{service.title}</h2>
                    <p className="text-slate-600 text-lg mb-8 leading-relaxed">{service.description}</p>

                    <div className="space-y-4 mb-8">
                      {[
                        'Scalable Solutions',
                        'Expert Implementation',
                        'Modern Technology Stack',
                        '24/7 Dedicated Support'
                      ].map((point, i) => (
                        <div key={i} className="flex items-center gap-3">
                          <span className="material-symbols-outlined text-slate-900 text-sm">check_circle</span>
                          <span className="text-slate-700 font-medium">{point}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col gap-3">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-700 text-sm font-semibold border border-slate-100 w-fit">
                        <span className="material-symbols-outlined text-base">verified</span>
                        <span>Industry Certified</span>
                      </div>
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-50 text-slate-700 text-sm font-semibold border border-slate-100 w-fit">
                        <span className="material-symbols-outlined text-base">security</span>
                        <span>Enterprise Security</span>
                      </div>
                    </div>
                  </div>

                  {/* Right Side - Feature Grid */}
                  <div className="w-full lg:w-2/3">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                      {service.features.map((feature, featIndex) => (
                        <motion.div
                          key={featIndex}
                          whileHover={{ x: 5, backgroundColor: 'white', borderColor: 'rgba(37,99,235,0.3)' }}
                          className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 transition-all duration-300 shadow-sm group/feat"
                        >
                          <div className={`w-8 h-8 rounded-lg bg-white flex items-center justify-center flex-shrink-0 shadow-sm group-hover/feat:bg-gradient-to-br ${service.color} transition-colors duration-500`}>
                            <span className="material-symbols-outlined text-slate-900 text-base group-hover/feat:text-white transition-colors">done</span>
                          </div>
                          <span className="text-slate-700 text-sm font-bold group-hover/feat:text-slate-900 transition-colors">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-12 border-t border-slate-100 flex justify-center">
                  <Link to="/contact">
                    <motion.button
                      whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(37,99,235,0.3)' }}
                      whileTap={{ scale: 0.95 }}
                      className={`bg-gradient-to-r ${service.color} text-white font-black px-12 py-5 rounded-full transition-all shadow-2xl flex items-center gap-4 text-xl`}
                    >
                      <span className="material-symbols-outlined">rocket_launch</span>
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
      <div className="px-6 py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Why Choose Our Expertise?</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">Premium enterprise solutions backed by years of innovation and proven results.</p>
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
                className="glass-card rounded-3xl p-8 border border-slate-200 bg-white shadow-lg text-center group transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(37,99,235,0.3)]`}>
                  <span className="material-symbols-outlined text-white text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-500">{benefit.title}</h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors duration-500">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Banner */}
      <div className="px-6 py-24 relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-slate-50 border border-slate-100 rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-xl"
          >
            <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Scale Your Business Today
              </h2>
              <p className="text-xl text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
                Join hundreds of successful enterprises that have transformed their operations with our high-performance solutions and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-slate-900 font-bold px-12 py-5 rounded-full text-xl shadow-2xl hover:shadow-white/20 transition-all flex items-center gap-3"
                  >
                    Get Started Now
                    <span className="material-symbols-outlined">arrow_forward</span>
                  </motion.button>
                </Link>
                <Link to="/portfolio">
                  <button className="text-white font-bold text-xl hover:underline flex items-center gap-2">
                    View Case Studies
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