import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceManagedDetail = () => {
  return (
    <main className="pt-24 pb-12 px-6">
      {/* Hero Section */}
      <section className="py-16 bg-gradient-to-br from-background-dark to-slate-900">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="flex items-center gap-3 mb-6">
              <Link to="/services" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Back to Services
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-orange-500/20 to-red-500/20 border border-orange-500/30 text-orange-400 rounded-full font-semibold">
                Managed Services
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 text-green-400 rounded-full font-semibold">
                24/7 Support Coverage
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 rounded-full font-semibold">
                SLA Guaranteed
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              24/7 <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Managed Services</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Round-the-clock support and maintenance ensuring your systems operate flawlessly with proactive monitoring, instant incident response, and expert technical assistance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Continuous System Excellence</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Our managed services provide comprehensive oversight of your technology infrastructure, ensuring optimal performance, security, and reliability without the burden of constant monitoring.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                With our proactive approach, potential issues are identified and resolved before they impact your business operations, allowing you to focus on strategic initiatives while we handle the technical complexities.
              </p>

              <div className="flex items-center gap-6 mb-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">99.9%</div>
                  <div className="text-slate-400 text-sm">Uptime SLA</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">&lt;15min</div>
                  <div className="text-slate-400 text-sm">Response Time</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary">24/7</div>
                  <div className="text-slate-400 text-sm">Support</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6">Service Level Agreements</h3>
              <div className="space-y-4">
                {[
                  { metric: "System Availability", target: "99.9%", actual: "99.95%", status: "exceeding" },
                  { metric: "Response Time", target: "<30 min", actual: "12 min", status: "exceeding" },
                  { metric: "Resolution Time", target: "<4 hours", actual: "2.3 hours", status: "exceeding" },
                  { metric: "Maintenance Window", target: "Scheduled", actual: "Minimal Impact", status: "meeting" }
                ].map((sla, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">{sla.metric}</span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${sla.status === 'exceeding' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                        }`}>
                        {sla.status}
                      </span>
                    </div>
                    <div className="flex justify-between text-sm text-slate-400">
                      <span>Target: {sla.target}</span>
                      <span>Actual: {sla.actual}</span>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Managed Services */}
      <section className="py-16 bg-gradient-to-r from-background-dark/50 to-blue-900/10 rounded-3xl">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Managed Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">End-to-end infrastructure management and support</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Proactive Monitoring",
                desc: "24/7 surveillance of system performance, resource utilization, and potential issues with automated alerts and preventive actions.",
                icon: "monitoring",
                color: "from-blue-700 to-sky-500",
                features: ["Real-time Performance Tracking", "Resource Utilization Analytics", "Automated Alerting", "Predictive Maintenance"]
              },
              {
                title: "Incident Response",
                desc: "Rapid identification, escalation, and resolution of technical issues with minimal disruption to your business operations.",
                icon: "emergency",
                color: "from-red-500 to-orange-500",
                features: ["Immediate Issue Detection", "Priority Escalation", "Root Cause Analysis", "Post-Incident Reporting"]
              },
              {
                title: "Performance Tuning",
                desc: "Continuous optimization of system configurations, databases, and applications to ensure peak performance and efficiency.",
                icon: "speed",
                color: "from-green-500 to-teal-500",
                features: ["Database Optimization", "Application Performance", "Load Balancing", "Capacity Planning"]
              },
              {
                title: "Regular Updates",
                desc: "Scheduled maintenance, security patches, and software updates to keep your systems current and secure.",
                icon: "system_update",
                color: "from-purple-500 to-pink-500",
                features: ["Security Patch Management", "Software Updates", "Version Control", "Change Management"]
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-6 border border-white/10  transition-all duration-300"
              >
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6`}>
                  <span className="material-symbols-outlined text-white text-2xl">{service.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-slate-300 text-sm">
                      <span className="material-symbols-outlined text-primary text-sm">check_circle</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Support Tiers */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Flexible Support Options</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Choose the level of support that matches your business needs</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                tier: "Basic",
                price: "$999/month",
                response: "2 hours",
                coverage: "Business hours",
                features: ["Standard monitoring", "Email support", "Monthly reporting", "Basic maintenance"],
                color: "from-slate-500 to-slate-600",
                popular: false
              },
              {
                tier: "Professional",
                price: "$2,499/month",
                response: "30 minutes",
                coverage: "24/7",
                features: ["Advanced monitoring", "Phone & email support", "Weekly reporting", "Performance tuning", "Security updates"],
                color: "from-blue-700 to-sky-500",
                popular: true
              },
              {
                tier: "Enterprise",
                price: "Custom",
                response: "15 minutes",
                coverage: "24/7/365",
                features: ["Premium monitoring", "Dedicated support team", "Real-time reporting", "Proactive optimization", "SLA guarantees", "Executive dashboard"],
                color: "from-purple-500 to-pink-500",
                popular: false
              }
            ].map((plan, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`glass-card rounded-2xl p-8 border-2 relative overflow-hidden ${plan.popular
                  ? 'border-primary ring-2 ring-primary/20'
                  : 'border-white/10 '
                  } transition-all duration-300`}
              >
                {plan.popular && (
                  <div className="absolute -top-2 -right-8 w-32 h-6 bg-primary rotate-45 flex items-center justify-center">
                    <span className="text-white text-xs font-bold rotate-0">POPULAR</span>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-6`}>
                  <span className="text-white font-bold text-xl">{index + 1}</span>
                </div>

                <h3 className="text-2xl font-bold text-white text-center mb-2">{plan.tier}</h3>
                <div className="text-3xl font-bold text-primary text-center mb-1">{plan.price}</div>
                <div className="text-slate-400 text-center mb-6">Starting from</div>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-slate-300">Response Time</span>
                    <span className="text-white font-semibold">{plan.response}</span>
                  </div>
                  <div className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                    <span className="text-slate-300">Coverage</span>
                    <span className="text-white font-semibold">{plan.coverage}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-slate-300 text-sm">
                      <span className="material-symbols-outlined text-green-400 text-sm">check</span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${plan.popular
                    ? 'bg-primary hover:bg-primary/90 text-white'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/20'
                    }`}
                >
                  Select Plan
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Operations Center */}
      <section className="py-16 bg-gradient-to-r from-background-dark/50 to-purple-900/10 rounded-3xl">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Operations Center</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">State-of-the-art facilities supporting 24/7 service delivery</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                facility: "Network Operations Center",
                desc: "Centralized monitoring hub with redundant systems and backup power",
                icon: "lan",
                stats: "99.99% uptime"
              },
              {
                facility: "Security Operations Center",
                desc: "Dedicated team monitoring threats and responding to security incidents",
                icon: "security",
                stats: "24/7 coverage"
              },
              {
                facility: "Customer Support Center",
                desc: "Multilingual support team providing immediate assistance",
                icon: "support_agent",
                stats: "<15min response"
              }
            ].map((center, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 text-center border border-white/10  transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-white text-2xl">{center.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{center.facility}</h3>
                <p className="text-slate-400 mb-4">{center.desc}</p>
                <div className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 rounded-full text-sm font-semibold">
                  {center.stats}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Benefits */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Choose Our Managed Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">The advantages of partnering with our expert team</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Expert Team", desc: "Certified professionals with deep industry expertise", icon: "groups" },
              { title: "Cost Effective", desc: "Reduce operational costs by up to 40% compared to in-house teams", icon: "payments" },
              { title: "Scalable Solutions", desc: "Services that grow with your business needs", icon: "trending_up" },
              { title: "Peace of Mind", desc: "Focus on your core business while we handle technical operations", icon: "shield" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-2xl p-6 text-center border border-white/10  transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-white text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{benefit.title}</h3>
                <p className="text-slate-400 text-sm">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="glass-card rounded-[3rem] p-12 md:p-20 border border-white/20 bg-gradient-to-br from-green-500/5 to-cyan-500/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">Ready for <span className="text-green-600">Managed IT?</span></h2>
            <p className="text-slate-600 text-xl mb-10 max-w-2xl mx-auto font-medium">
              Let our expert team handle your infrastructure while you focus on growing your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-600 to-emerald-600 text-white font-bold h-14 px-10 rounded-full transition-all shadow-xl shadow-blue-600/20 flex items-center gap-3"
                >
                  <span className="material-symbols-outlined">support_agent</span>
                  Schedule Free Consultation
                </motion.button>
              </Link>
              <Link to="/services">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 text-white font-semibold h-14 px-8 rounded-full border border-white/30 backdrop-blur-sm"
                >
                  View All Services
                </motion.button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ServiceManagedDetail;
