import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CRMERPSolutions = () => {
  const businessSizes = [
    {
      id: 'small',
      name: 'Small Business',
      subtitle: 'Startups & Growing Teams',
      icon: 'storefront',
      color: 'from-slate-500 to-slate-600',
      bgColor: 'from-slate-500/10 to-slate-600/10',
      borderColor: 'border-slate-200',
      features: [
        { icon: 'contacts', title: 'Contact & Lead Management', desc: 'Track all customer interactions in one place' },
        { icon: 'receipt', title: 'Basic Invoicing & Billing', desc: 'Simple payment tracking and invoicing' },
        { icon: 'event_note', title: 'Task & Calendar Management', desc: 'Organize your daily work efficiently' },
        { icon: 'mail', title: 'Email Integration', desc: 'Connect with Gmail and Outlook seamlessly' },
        { icon: 'chat', title: 'Customer Support', desc: 'Basic ticketing system for client queries' },
        { icon: 'bar_chart', title: 'Simple Reports', desc: 'Essential business analytics and insights' }
      ]
    },
    {
      id: 'medium',
      name: 'Medium Business',
      subtitle: 'Established Companies',
      icon: 'business_center',
      color: 'from-slate-600 to-slate-700',
      bgColor: 'from-slate-600/10 to-slate-700/10',
      borderColor: 'border-slate-200',
      features: [
        { icon: 'integration_instructions', title: 'Advanced CRM + ERP Integration', desc: 'Complete business suite with unified data' },
        { icon: 'inventory', title: 'Inventory & Supply Chain', desc: 'Track stock, orders, and suppliers' },
        { icon: 'people', title: 'HR & Payroll Management', desc: 'Employee data, attendance, and salaries' },
        { icon: 'analytics', title: 'Analytics Dashboard', desc: 'Deep business insights and custom reports' },
        { icon: 'groups', title: 'Multi-user Collaboration', desc: 'Team access control and role management' },
        { icon: 'automation', title: 'Workflow Automation', desc: 'Automate repetitive tasks and approvals' },
        { icon: 'payments', title: 'Advanced Billing', desc: 'Recurring invoices, subscriptions, and payments' },
        { icon: 'support_agent', title: 'Priority Support', desc: 'Faster response times and dedicated help' }
      ]
    },
    {
      id: 'large',
      name: 'Large Enterprise',
      subtitle: 'Organizations with Complex Needs',
      icon: 'corporate_fare',
      color: 'from-slate-700 to-slate-800',
      bgColor: 'from-slate-700/10 to-slate-800/10',
      borderColor: 'border-slate-200',
      features: [
        { icon: 'account_tree', title: 'Full ERP Suite', desc: 'Finance, HR, Operations, Sales unified platform' },
        { icon: 'code', title: 'Custom Module Development', desc: 'Tailored solutions for your unique workflow' },
        { icon: 'api', title: 'API Integrations', desc: 'Connect with existing systems and third-party tools' },
        { icon: 'security', title: 'Advanced Security & Compliance', desc: 'Data protection, GDPR, and industry standards' },
        { icon: 'psychology', title: 'AI-Powered Insights', desc: 'Predictive analytics and intelligent automation' },
        { icon: 'headset_mic', title: '24/7 Dedicated Support', desc: 'Priority assistance, training, and consultation' },
        { icon: 'cloud_done', title: 'Cloud & On-Premise Options', desc: 'Flexible deployment models for your needs' },
        { icon: 'trending_up', title: 'Scalable Architecture', desc: 'Grows with your business without limits' }
      ]
    }
  ];

  return (
    <div className="min-h-screen premium-bg text-slate-900 pt-20">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-slate-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-slate-300/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 px-6 py-8">
          <div className="max-w-6xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl md:text-7xl font-black text-black mb-6 tracking-tighter heading-underline active pt-10">
                Powerful{' '}
                <span className="text-slate-500 pb-2">
                  CRM & ERP
                </span>{' '}
                Software
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 font-medium leading-relaxed">
                Tailored solutions for businesses of all sizes. From startups to enterprises,
                we provide the tools you need to manage, grow, and scale your operations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 text-white font-bold px-8 py-4 rounded-full transition-all shadow-2xl flex items-center gap-3 border border-slate-600/20"
                  >
                    <span className="material-symbols-outlined">chat</span>
                    Discuss Your Requirements
                  </motion.button>
                </Link>
                <Link to="/services-page">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white hover:bg-slate-50 text-slate-900 font-bold px-8 py-4 rounded-full border border-slate-200 transition-all flex items-center gap-3 shadow-lg"
                  >
                    <span className="material-symbols-outlined font-black">arrow_back</span>
                    Back to Services
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Business Size Cards */}
      <div className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            {businessSizes.map((business, index) => (
              <motion.div
                key={business.id}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="relative group"
              >
                {/* Card Background */}
                <div className={`absolute inset-0 rounded-3xl bg-white ${business.borderColor} border shadow-xl transition-all duration-500 group-hover:scale-[1.02] group-hover:shadow-2xl`}></div>

                {/* Card Content */}
                <div className="relative p-8 h-full flex flex-col">
                  {/* Header */}
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl bg-slate-100 border border-slate-200 flex items-center justify-center shadow-sm">
                      <span className="material-symbols-outlined text-slate-900 text-3xl">{business.icon}</span>
                    </div>
                    <div>
                      <h2 className="text-2xl font-black text-slate-900 tracking-tight">{business.name}</h2>
                      <p className="text-xs font-black uppercase tracking-widest text-slate-500">
                        {business.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="space-y-4 flex-grow">
                    {business.features.map((feature, fIndex) => (
                      <motion.div
                        key={fIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 + fIndex * 0.05 }}
                        className="flex items-start gap-4 p-4 rounded-2xl bg-slate-50 hover:bg-white transition-all duration-500 border border-slate-100 shadow-sm hover:shadow-md"
                      >
                        <div className="w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center flex-shrink-0">
                          <span className="material-symbols-outlined text-white text-sm">{feature.icon}</span>
                        </div>
                        <div>
                          <h4 className="text-slate-900 font-bold text-sm tracking-tight">{feature.title}</h4>
                          <p className="text-slate-500 text-xs font-medium">{feature.desc}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="mt-6 pt-6 border-t border-slate-100">
                    <Link to="/contact">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-500 text-white font-bold transition-all shadow-lg flex items-center justify-center gap-2"
                      >
                        <span>Get Started</span>
                        <span className="material-symbols-outlined text-sm">arrow_forward</span>
                      </motion.button>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="px-6 py-8 bg-white/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-black mb-4 tracking-tight heading-underline active inline-block pt-10">Why Choose Our <span className="text-slate-500">Solutions?</span></h2>
            <p className="text-xl text-slate-600 font-medium">Trusted by businesses worldwide for reliability and innovation</p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              { icon: 'speed', title: 'Fast Implementation', desc: 'Get started in days, not months' },
              { icon: 'sync', title: 'Easy Integration', desc: 'Works with your existing tools' },
              { icon: 'shield', title: 'Enterprise Security', desc: 'Bank-level data protection' },
              { icon: 'support_agent', title: 'Expert Support', desc: '24/7 help when you need it' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="text-center p-8 rounded-3xl bg-white border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-700"
              >
                <div className="w-14 h-14 rounded-xl bg-slate-900 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white text-2xl">{item.icon}</span>
                </div>
                <h3 className="text-slate-900 text-lg font-black mb-2 tracking-tight">{item.title}</h3>
                <p className="text-slate-500 text-sm font-medium leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom CTA */}
      <div className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.2 }}
            className="text-center p-10 rounded-3xl bg-slate-50 border border-slate-200"
          >
            <h2 className="text-3xl md:text-4xl font-black text-black mb-4 tracking-tight heading-underline active inline-block pt-8">Ready to Transform Your <span className="text-slate-500">Business?</span></h2>
            <p className="text-xl text-slate-600 mb-8 font-medium">Let's discuss how our CRM & ERP solutions can help you grow</p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 text-white font-bold px-8 py-4 rounded-full hover:brightness-110 transition-all shadow-2xl flex items-center gap-3 mx-auto border border-slate-600/20"
              >
                <span className="material-symbols-outlined">calendar_today</span>
                Schedule a Free Consultation
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CRMERPSolutions;
