import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const ServiceSecurityDetail = () => {
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
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 rounded-full font-semibold">
                Cybersecurity
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 text-green-400 rounded-full font-semibold">
                Zero Security Breaches
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 rounded-full font-semibold">
                Compliance Ready
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">Security Solutions</span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Comprehensive cybersecurity framework protecting your business assets, customer data, and digital reputation with enterprise-grade security measures.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Security Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">Proactive Security Protection</h2>
              <p className="text-slate-400 mb-6 leading-relaxed">
                Our security solutions go beyond traditional protection by implementing a zero-trust architecture that assumes every access request is potentially malicious until verified.
              </p>
              <p className="text-slate-400 mb-8 leading-relaxed">
                We provide end-to-end security coverage including threat detection, compliance management, incident response, and continuous monitoring to keep your business protected 24/7.
              </p>

              <div className="grid grid-cols-2 gap-4">
                <div className="glass-card rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-primary mb-1">99.9%</div>
                  <div className="text-slate-400 text-sm">Threat Detection Rate</div>
                </div>
                <div className="glass-card rounded-xl p-4 border border-white/10">
                  <div className="text-2xl font-bold text-primary mb-1">&lt;1min</div>
                  <div className="text-slate-400 text-sm">Incident Response</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6">Security Framework</h3>
              <div className="space-y-4">
                {[
                  { area: "Network Security", status: "Active Protection", color: "green" },
                  { area: "Endpoint Protection", status: "Real-time Monitoring", color: "green" },
                  { area: "Data Encryption", status: "AES-256 Standard", color: "green" },
                  { area: "Access Control", status: "Zero-Trust Model", color: "green" },
                  { area: "Threat Intelligence", status: "AI-Powered Detection", color: "green" },
                  { area: "Compliance", status: "SOC 2 & ISO 27001", color: "blue" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-white font-medium">{item.area}</span>
                    <span className={`px-2 py-1 rounded-full text-xs font-semibold ${item.color === 'green' ? 'bg-green-500/20 text-green-400' : 'bg-blue-500/20 text-blue-400'
                      }`}>
                      {item.status}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Security Services */}
      <section className="py-16 bg-gradient-to-r from-background-dark/50 to-blue-900/10 rounded-3xl">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Comprehensive Security Services</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Multi-layered protection for complete peace of mind</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Zero-Trust Architecture",
                desc: "Modern security model that verifies every user and device before granting access to resources, regardless of location.",
                icon: "shield_lock",
                color: "from-blue-700 to-sky-500",
                features: ["Identity Verification", "Device Authentication", "Continuous Monitoring", "Least Privilege Access"]
              },
              {
                title: "Compliance Management",
                desc: "Ensure regulatory compliance with automated frameworks for GDPR, HIPAA, SOC 2, and industry-specific standards.",
                icon: "gavel",
                color: "from-purple-500 to-pink-500",
                features: ["Audit Trail Automation", "Policy Enforcement", "Compliance Reporting", "Regulatory Updates"]
              },
              {
                title: "Threat Detection & Response",
                desc: "Advanced monitoring systems that detect, analyze, and respond to security threats in real-time using AI and machine learning.",
                icon: "security_update_good",
                color: "from-green-500 to-teal-500",
                features: ["Behavioral Analytics", "Anomaly Detection", "Automated Response", "Forensic Analysis"]
              },
              {
                title: "Security Audits",
                desc: "Comprehensive security assessments identifying vulnerabilities and providing actionable remediation strategies.",
                icon: "fact_check",
                color: "from-orange-500 to-red-500",
                features: ["Vulnerability Scanning", "Penetration Testing", "Risk Assessment", "Remediation Planning"]
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

      {/* Security Metrics */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Security Performance Metrics</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Measurable security outcomes that protect your business</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { value: "99.9%", label: "Threat Detection", color: "from-green-500 to-teal-500" },
              { value: "0", label: "Security Breaches", color: "from-blue-700 to-sky-500" },
              { value: "<1 min", label: "Incident Response", color: "from-purple-500 to-pink-500" },
              { value: "24/7", label: "Monitoring Coverage", color: "from-orange-500 to-red-500" }
            ].map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-2xl p-6 text-center border border-white/10  transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${metric.color} flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-xl">🛡️</span>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{metric.value}</div>
                <div className="text-slate-400">{metric.label}</div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-6">Security Incident Statistics</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-green-400 mb-2">99.98%</div>
                <div className="text-white font-semibold mb-1">Prevention Rate</div>
                <div className="text-slate-400 text-sm">Of attempted attacks blocked</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-400 mb-2">4.2s</div>
                <div className="text-white font-semibold mb-1">Average Detection</div>
                <div className="text-slate-400 text-sm">Time to identify threats</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-400 mb-2">0</div>
                <div className="text-white font-semibold mb-1">Successful Breaches</div>
                <div className="text-slate-400 text-sm">In past 24 months</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance Standards */}
      <section className="py-16 bg-gradient-to-r from-background-dark/50 to-purple-900/10 rounded-3xl">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Industry Compliance Standards</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Meeting the highest security and privacy requirements</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                standard: "SOC 2 Type II",
                desc: "Security, availability, and confidentiality controls for service organizations",
                status: "Compliant",
                color: "from-green-500 to-teal-500"
              },
              {
                standard: "ISO 27001",
                desc: "International standard for information security management systems",
                status: "Certified",
                color: "from-blue-700 to-sky-500"
              },
              {
                standard: "GDPR",
                desc: "European data protection regulation compliance framework",
                status: "Ready",
                color: "from-purple-500 to-pink-500"
              },
              {
                standard: "HIPAA",
                desc: "Healthcare information privacy and security standards",
                status: "Compliant",
                color: "from-red-500 to-orange-500"
              },
              {
                standard: "PCI DSS",
                desc: "Payment card industry data security standard",
                status: "Compliant",
                color: "from-yellow-500 to-orange-500"
              },
              {
                standard: "NIST",
                desc: "National Institute of Standards and Technology cybersecurity framework",
                status: "Aligned",
                color: "from-indigo-500 to-purple-500"
              }
            ].map((standard, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-2xl p-6 border border-white/10  transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${standard.color} flex items-center justify-center mb-4`}>
                  <span className="material-symbols-outlined text-white">verified</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{standard.standard}</h3>
                <p className="text-slate-400 text-sm mb-4">{standard.desc}</p>
                <span className="inline-block px-3 py-1 bg-green-500/20 border border-green-500/30 text-green-400 rounded-full text-xs font-semibold">
                  {standard.status}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Modern Threat Protection</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Advanced security measures against evolving cyber threats</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6">Common Threats We Protect Against</h3>
              <div className="space-y-4">
                {[
                  { threat: "Ransomware Attacks", protection: "Advanced endpoint detection and behavioral analysis" },
                  { threat: "Phishing Attempts", protection: "Email filtering and user awareness training" },
                  { threat: "DDoS Attacks", protection: "Traffic filtering and CDN protection" },
                  { threat: "Insider Threats", protection: "User behavior analytics and access controls" },
                  { threat: "Zero-day Exploits", protection: "Patch management and vulnerability scanning" }
                ].map((item, index) => (
                  <div key={index} className="p-4 bg-white/5 rounded-lg border border-white/10">
                    <div className="text-white font-semibold mb-1">{item.threat}</div>
                    <div className="text-slate-400 text-sm">{item.protection}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6">Our Security Approach</h3>
              <div className="space-y-6">
                {[
                  { step: "Prevention", desc: "Proactive measures to stop threats before they occur" },
                  { step: "Detection", desc: "Real-time monitoring and anomaly identification" },
                  { step: "Response", desc: "Immediate containment and mitigation actions" },
                  { step: "Recovery", desc: "Restoration of systems and post-incident analysis" }
                ].map((phase, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center flex-shrink-0 mt-1">
                      <span className="text-white font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <div className="text-white font-semibold">{phase.step}</div>
                      <div className="text-slate-400 text-sm">{phase.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <div className="glass-card rounded-[3rem] p-12 md:p-20 border border-white/20 bg-gradient-to-br from-red-500/5 to-purple-500/5 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-red-500/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-6 tracking-tighter">Secure Your <span className="text-red-600">Business Today</span></h2>
            <p className="text-slate-600 text-xl mb-10 max-w-2xl mx-auto font-medium">
              Protect your digital assets with enterprise-grade cybersecurity solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-red-600 to-rose-600 text-white font-bold h-14 px-10 rounded-full transition-all shadow-xl shadow-red-500/20 flex items-center gap-3"
                >
                  <span className="material-symbols-outlined">shield</span>
                  Request Security Assessment
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

export default ServiceSecurityDetail;
