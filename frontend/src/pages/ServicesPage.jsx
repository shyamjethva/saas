import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { consultationAPI } from '../services/api';

const ServicesPage = () => {
  const [expandedCard, setExpandedCard] = useState(null);
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

  const coreServices = [
    {
      title: 'Enterprise Software Development',
      description: 'Custom-built solutions designed for scalability, security, and long-term business growth.',
      features: ['Full-Stack Development', 'Microservices Architecture', 'API Integration', 'Legacy System Modernization'],
      icon: 'code_blocks',
      color: 'from-blue-500 to-cyan-500',
      stats: '150+ Projects Delivered'
    },
    {
      title: 'Cloud Infrastructure & Migration',
      description: 'Seamless cloud transformation with zero downtime and enterprise-grade reliability.',
      features: ['Multi-Cloud Strategy', 'Serverless Solutions', 'Disaster Recovery', 'Cost Optimization'],
      icon: 'cloud_upload',
      color: 'from-purple-500 to-pink-500',
      stats: '99.99% Uptime Guarantee'
    },
    {
      title: 'Digital Transformation Consulting',
      description: 'Strategic guidance to modernize your business processes and technology stack.',
      features: ['Process Optimization', 'Technology Roadmaps', 'Change Management', 'ROI Analysis'],
      icon: 'trending_up',
      color: 'from-green-500 to-teal-500',
      stats: '340% Average ROI'
    },
    {
      title: 'AI & Intelligent Automation',
      description: 'Leverage artificial intelligence to automate workflows and gain competitive advantages.',
      features: ['Machine Learning Models', 'Process Automation', 'Predictive Analytics', 'Chatbots & Assistants'],
      icon: 'auto_awesome',
      color: 'from-orange-500 to-red-500',
      stats: '2.8x Productivity Boost'
    },
    {
      title: 'Enterprise Security Solutions',
      description: 'Comprehensive cybersecurity framework protecting your business assets and reputation.',
      features: ['Zero-Trust Architecture', 'Compliance Management', 'Threat Detection', 'Security Audits'],
      icon: 'security',
      color: 'from-indigo-500 to-purple-500',
      stats: 'Zero Security Breaches'
    },
    {
      title: '24/7 Managed Services',
      description: 'Round-the-clock support and maintenance to ensure your systems operate flawlessly.',
      features: ['Proactive Monitoring', 'Incident Response', 'Performance Tuning', 'Regular Updates'],
      icon: 'support_agent',
      color: 'from-yellow-500 to-orange-500',
      stats: '24/7 Support Coverage'
    }
  ];

  const serviceBenefits = [
    {
      title: 'Partnership Approach',
      description: 'We become your technology partner, not just a vendor. Long-term relationships drive sustainable success.',
      icon: 'handshake',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Transparent Process',
      description: 'Clear communication, regular updates, and complete visibility into project progress and budget.',
      icon: 'visibility',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Quality Assurance',
      description: 'Rigorous testing protocols and code reviews ensure enterprise-grade quality in every deliverable.',
      icon: 'verified',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Future-Proof Solutions',
      description: 'Architectures designed to scale with your business and adapt to emerging technologies.',
      icon: 'rocket_launch',
      color: 'from-orange-500 to-red-500'
    }
  ];

  const clientSuccessMetrics = [
    { value: '250+', label: 'Enterprise Clients', icon: 'corporate_fare' },
    { value: '1500+', label: 'Projects Completed', icon: 'checklist' },
    { value: '24', label: 'Countries Served', icon: 'public' },
    { value: '98%', label: 'Client Retention', icon: 'thumb_up' }
  ];

  // Consultation Handlers
  const openConsultationModal = () => {
    setIsConsultationOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeConsultationModal = () => {
    setIsConsultationOpen(false);
    document.body.style.overflow = 'unset';
    // Reset form
    setConsultationData({
      name: '',
      email: '',
      company: '',
      phone: '',
      service: '',
      message: '',
      preferredDate: '',
      timezone: ''
    });
  };

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleConsultationSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Format phone number by removing spaces and special characters
      const formattedPhone = consultationData.phone.replace(/\s+/g, '').replace(/[^0-9+]/g, '');

      const submitData = {
        ...consultationData,
        phone: formattedPhone
      };

      const response = await consultationAPI.createConsultation(submitData);

      if (response.data.success) {
        alert('Consultation scheduled successfully! Our team will contact you soon.');
        closeConsultationModal();
      } else {
        setSubmitError(response.data.error || 'Failed to schedule consultation');
      }
    } catch (error) {
      console.error('Error:', error);
      if (error.response?.data?.details) {
        setSubmitError(`Error: ${error.response.data.details.join(', ')}`);
      } else {
        setSubmitError('Network error. Please try again.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (e) => {
    setConsultationData({
      ...consultationData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <main className="pt-24 pb-12 px-6">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-background-dark via-blue-900/10 to-purple-900/10"></div>
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-l from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

        <div className="max-w-6xl mx-auto relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="material-symbols-outlined text-primary animate-spin">settings</span>
              <span className="text-primary font-semibold uppercase tracking-wider text-sm">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive technology services designed to accelerate your business transformation and drive measurable results.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Client Success Metrics */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
          >
            {clientSuccessMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-2xl p-6 text-center border border-white/10 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white text-2xl">{metric.icon}</span>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-slate-400 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Enterprise-grade solutions tailored to your business needs</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -15, scale: 1.03 }}
                className="glass-card rounded-2xl p-8 group relative overflow-hidden border border-white/10 transition-all duration-500"
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>

                {/* Floating Elements */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-700"></div>

                <div className="relative z-10">
                  {/* Service Icon */}
                  <motion.div
                    className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                    whileHover={{ rotate: 10 }}
                  >
                    <span className="material-symbols-outlined text-white text-3xl">
                      {service.icon}
                    </span>
                  </motion.div>

                  {/* Stats Badge */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="inline-block px-3 py-1 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 rounded-full text-green-400 text-xs font-semibold mb-4"
                  >
                    {service.stats}
                  </motion.div>

                  <h3 className="text-xl font-bold text-white mb-4 group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </h3>

                  <p className="text-slate-400 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features List */}
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.7 + index * 0.1 + idx * 0.1 }}
                        className="flex items-center gap-3 text-slate-300 text-sm group-hover:text-white transition-colors"
                      >
                        <div className={`w-6 h-6 rounded-consistent-md bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                          <span className="material-symbols-outlined text-white text-xs">check</span>
                        </div>
                        {feature}
                      </motion.li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <motion.button
                    onClick={() => {
                      setExpandedCard(expandedCard === index ? null : index);
                    }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(56, 105, 250, 0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-6 w-full bg-white/10 hover:bg-primary/20 text-white font-semibold py-3 rounded-consistent-md border border-white/20  transition-all duration-300 group/button cursor-pointer flex items-center justify-center gap-2"
                  >
                    {expandedCard === index ? 'Show Less' : 'Learn More'}
                    <span className={`material-symbols-outlined text-sm transition-transform duration-300 ${expandedCard === index ? 'rotate-90' : ''}`}>
                      {expandedCard === index ? 'expand_less' : 'expand_more'}
                    </span>
                  </motion.button>

                  {/* Expanded Content */}
                  {expandedCard === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mt-6 pt-6 border-t border-white/20"
                    >
                      <div className="space-y-4">
                        <div>
                          <h4 className="text-white font-semibold mb-3">Detailed Overview</h4>
                          <p className="text-slate-300 text-sm leading-relaxed">
                            {index === 0 && 'Our enterprise software development services deliver robust, scalable solutions built with modern architectures and best practices. We specialize in creating applications that grow with your business needs while maintaining security and performance standards.'}
                            {index === 1 && 'Complete cloud migration strategy with zero downtime deployment. Our experts handle everything from assessment and planning to execution and optimization, ensuring seamless transition to cloud infrastructure with maximum reliability and cost efficiency.'}
                            {index === 2 && 'Strategic consulting services to transform your business through technology adoption. We analyze current processes, identify improvement opportunities, and create roadmap for digital transformation that delivers measurable ROI and competitive advantage.'}
                            {index === 3 && 'Advanced AI solutions leveraging machine learning and automation to optimize workflows, predict outcomes, and create intelligent systems. Our implementations include custom models, process automation, and predictive analytics tailored to your specific business requirements.'}
                            {index === 4 && 'Comprehensive cybersecurity framework protecting your digital assets with proactive threat detection, compliance management, and incident response capabilities. We implement zero-trust architecture and continuous monitoring for maximum protection.'}
                            {index === 5 && '24/7 managed services ensuring your systems operate at peak performance with proactive monitoring, rapid incident response, and expert technical support. Our SLA-guaranteed services include performance tuning, regular updates, and round-the-clock coverage.'}
                          </p>
                        </div>

                        <div>
                          <h4 className="text-white font-semibold mb-3">Key Deliverables</h4>
                          <ul className="space-y-2">
                            {index === 0 && ['Custom Application Development', 'API Integration', 'Database Design', 'Security Implementation', 'Testing & QA', 'Documentation'].map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                                <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                                {item}
                              </li>
                            ))}
                            {index === 1 && ['Cloud Architecture Design', 'Migration Planning', 'Data Transfer', 'Performance Optimization', 'Cost Management', 'Ongoing Support'].map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                                <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                                {item}
                              </li>
                            ))}
                            {index === 2 && ['Process Analysis', 'Technology Assessment', 'Roadmap Creation', 'Implementation Planning', 'Change Management', 'ROI Tracking'].map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                                <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                                {item}
                              </li>
                            ))}
                            {index === 3 && ['ML Model Development', 'Automation Workflows', 'Predictive Analytics', 'Chatbot Implementation', 'Data Processing', 'Model Training'].map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                                <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                                {item}
                              </li>
                            ))}
                            {index === 4 && ['Threat Assessment', 'Security Implementation', 'Compliance Framework', 'Incident Response', 'Monitoring Setup', 'Regular Audits'].map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                                <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                                {item}
                              </li>
                            ))}
                            {index === 5 && ['24/7 Monitoring', 'Performance Tuning', 'Incident Response', 'System Updates', 'Backup Management', 'Technical Support'].map((item, idx) => (
                              <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                                <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          <span className="px-3 py-1 bg-primary/20 border border-primary/30 text-primary rounded-full text-xs font-semibold">
                            {index === 0 && '6-8 weeks'}
                            {index === 1 && '4-6 weeks'}
                            {index === 2 && '2-3 months'}
                            {index === 3 && '8-12 weeks'}
                            {index === 4 && 'Ongoing'}
                            {index === 5 && '24/7'}
                          </span>
                          <span className="px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 rounded-full text-xs font-semibold">
                            {index === 0 && 'Starting $25K'}
                            {index === 1 && 'Starting $15K'}
                            {index === 2 && 'Starting $10K'}
                            {index === 3 && 'Starting $30K'}
                            {index === 4 && 'Custom Pricing'}
                            {index === 5 && 'Monthly Plans'}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-20 bg-gradient-to-r from-background-dark/50 to-blue-900/10 rounded-3xl">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">The Error Infotech difference that drives exceptional results</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {serviceBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-6 text-center group border border-white/10 transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="material-symbols-outlined text-white text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{benefit.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Process */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Structured approach ensuring consistent delivery excellence</p>
          </motion.div>

          <div className="relative">
            {/* Connecting Line */}
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary/30 to-purple-500/30 transform -translate-y-1/2 hidden md:block"></div>

            <div className="grid md:grid-cols-4 gap-8 relative">
              {[
                { step: 1, title: 'Discovery', desc: 'Requirements analysis and strategic planning' },
                { step: 2, title: 'Design', desc: 'Architecture design and technical specifications' },
                { step: 3, title: 'Develop', desc: 'Implementation with continuous integration' },
                { step: 4, title: 'Deploy', desc: 'Production deployment and ongoing support' }
              ].map((phase, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative z-10 text-center"
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mb-6 shadow-lg border-4 border-background-dark relative"
                    >
                      <span className="text-white font-bold text-xl">{phase.step}</span>
                      {/* Floating particles */}
                      <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-ping"></div>
                    </motion.div>
                    <h3 className="text-white font-bold text-lg mb-3">{phase.title}</h3>
                    <p className="text-slate-400 text-sm">{phase.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/10 to-cyan-500/10"></div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card rounded-3xl p-12 text-center relative overflow-hidden max-w-4xl mx-auto border border-white/20"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-purple-500/5"></div>
          <div className="relative z-10">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-slate-300 text-xl mb-10 max-w-2xl mx-auto"
            >
              Let's discuss how our enterprise services can accelerate your digital transformation journey.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <motion.button
                onClick={openConsultationModal}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-purple-500 text-white font-bold h-14 px-8 rounded-full shadow-[0_0_30px_rgba(56,105,250,0.5)] hover:shadow-[0_0_40px_rgba(56,105,250,0.7)] transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined">calendar_today</span>
                Schedule Consultation
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold h-14 px-8 rounded-full border border-white/30 backdrop-blur-sm transition-all flex items-center gap-2"
              >
                <span className="material-symbols-outlined">download</span>
                Download Brochure
              </motion.button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Consultation Modal */}
      <AnimatePresence>
        {isConsultationOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeConsultationModal}
          >
            <motion.div
              initial={{ scale: 0.8, y: 50 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.8, y: 50 }}
              className="bg-white border border-slate-200 rounded-consistent-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8">
                {/* Header */}
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-slate-900 mb-2">Schedule Consultation</h2>
                    <p className="text-slate-600">Connect with our experts to discuss your project needs</p>
                  </div>
                  <button
                    onClick={closeConsultationModal}
                    className="text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    <span className="material-symbols-outlined text-2xl">close</span>
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleConsultationSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-700 font-bold mb-2">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={consultationData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-50 border border-slate-200 rounded-consistent-md px-4 py-3 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all font-medium"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-2">Email Address *</label>
                      <input
                        type="email"
                        name="email"
                        value={consultationData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-800 border border-slate-600 rounded-consistent-md px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Enter your email"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-2">Company *</label>
                      <input
                        type="text"
                        name="company"
                        value={consultationData.company}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-800 border border-slate-600 rounded-consistent-md px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Enter your company name"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-2">Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        value={consultationData.phone}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800 border border-slate-600 rounded-consistent-md px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-2">Service Interest *</label>
                      <select
                        name="service"
                        value={consultationData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full bg-slate-800 border border-slate-600 rounded-consistent-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Select a service</option>
                        <option value="enterprise-software">Enterprise Software Development</option>
                        <option value="cloud-infrastructure">Cloud Infrastructure & Migration</option>
                        <option value="digital-transformation">Digital Transformation Consulting</option>
                        <option value="ai-automation">AI & Intelligent Automation</option>
                        <option value="security">Enterprise Security Solutions</option>
                        <option value="managed-services">24/7 Managed Services</option>
                        <option value="graphical-development">Graphical Development Services</option>
                        <option value="collaboration">Collaboration & Project Management</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-slate-300 font-medium mb-2">Preferred Timezone</label>
                      <select
                        name="timezone"
                        value={consultationData.timezone}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800 border border-slate-600 rounded-consistent-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      >
                        <option value="">Select timezone</option>
                        <option value="EST">Eastern Time (EST)</option>
                        <option value="CST">Central Time (CST)</option>
                        <option value="MST">Mountain Time (MST)</option>
                        <option value="PST">Pacific Time (PST)</option>
                        <option value="GMT">Greenwich Mean Time (GMT)</option>
                        <option value="IST">India Standard Time (IST)</option>
                        <option value="CET">Central European Time (CET)</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-slate-300 font-medium mb-2">Preferred Date/Time</label>
                      <input
                        type="datetime-local"
                        name="preferredDate"
                        value={consultationData.preferredDate}
                        onChange={handleInputChange}
                        className="w-full bg-slate-800 border border-slate-600 rounded-consistent-md px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 font-medium mb-2">Project Details *</label>
                    <textarea
                      name="message"
                      value={consultationData.message}
                      onChange={handleInputChange}
                      required
                      rows="4"
                      className="w-full bg-slate-800 border border-slate-600 rounded-consistent-md px-4 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                      placeholder="Tell us about your project, requirements, timeline, and any specific challenges you're facing..."
                    ></textarea>
                  </div>

                  {submitError && (
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-300 text-center">
                      ❌ {submitError}
                    </div>
                  )}

                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={isSubmitting}
                      className={`flex-1 font-semibold py-3 rounded-consistent-md transition-all duration-300 ${isSubmitting
                        ? 'bg-gray-600 cursor-not-allowed'
                        : 'bg-gradient-to-r from-primary to-purple-500 text-white'
                        }`}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="material-symbols-outlined animate-spin mr-2">sync</span>
                          Scheduling...
                        </>
                      ) : (
                        'Schedule Consultation'
                      )}
                    </motion.button>
                    <motion.button
                      type="button"
                      onClick={closeConsultationModal}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-1 bg-slate-100 text-slate-900 font-bold py-3 rounded-consistent-md border border-slate-200 hover:border-slate-400 transition-all duration-300"
                    >
                      Cancel
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default ServicesPage;