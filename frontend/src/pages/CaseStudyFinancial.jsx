import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CaseStudyFinancial = () => {
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
              <Link to="/" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Back to Home
              </Link>
            </div>
            
            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 rounded-full font-semibold">
                Financial Services
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 text-green-400 rounded-full font-semibold">
                +42% Efficiency
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 rounded-full font-semibold">
                18 Months
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Global <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400">FinTech Platform</span> Transformation
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              Modernized legacy banking infrastructure serving 5M+ users globally with enhanced security, scalability, and user experience.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-white mb-6">The Challenge</h2>
              <div className="space-y-6">
                <div className="glass-card rounded-xl p-6 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-white">warning</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Legacy System Limitations</h3>
                      <p className="text-slate-400">Outdated monolithic architecture couldn't handle modern transaction volumes and security requirements</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-6 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-white">speed</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Performance Bottlenecks</h3>
                      <p className="text-slate-400">Slow transaction processing times affecting customer satisfaction and business growth</p>
                    </div>
                  </div>
                </div>
                
                <div className="glass-card rounded-xl p-6 border border-white/10">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                      <span className="material-symbols-outlined text-white">security</span>
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-2">Security Compliance</h3>
                      <p className="text-slate-400">Need to meet evolving regulatory requirements and protect sensitive financial data</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6">Key Statistics</h3>
              <div className="space-y-6">
                {[
                  { label: "Legacy Response Time", value: "8.2s", target: "2.1s" },
                  { label: "Monthly Transactions", value: "12M", target: "25M" },
                  { label: "System Downtime", value: "12h/month", target: "<1h/year" },
                  { label: "Security Incidents", value: "3-5/month", target: "0" }
                ].map((stat, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-slate-400">{stat.label}</span>
                      <div className="flex items-center gap-3">
                        <span className="text-red-400 font-semibold">{stat.value}</span>
                        <span className="material-symbols-outlined text-slate-500">arrow_forward</span>
                        <span className="text-green-400 font-semibold">{stat.target}</span>
                      </div>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-2">
                      <div className="bg-gradient-to-r from-red-500 to-green-500 h-full rounded-full w-3/4"></div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-16 bg-gradient-to-r from-background-dark/50 to-blue-900/10 rounded-3xl">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Solution</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Comprehensive digital transformation approach</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                title: "Microservices Architecture", 
                desc: "Decoupled monolith into scalable microservices for better performance and maintenance",
                icon: "account_tree",
                color: "from-blue-500 to-cyan-500"
              },
              { 
                title: "Cloud-Native Infrastructure", 
                desc: "Migrated to AWS with auto-scaling capabilities and disaster recovery systems",
                icon: "cloud",
                color: "from-purple-500 to-pink-500"
              },
              { 
                title: "Advanced Security Framework", 
                desc: "Implemented zero-trust security model with real-time threat detection",
                icon: "shield",
                color: "from-green-500 to-teal-500"
              }
            ].map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-6 text-center border border-white/10  transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${solution.color} flex items-center justify-center mx-auto mb-6`}>
                  <span className="material-symbols-outlined text-white text-2xl">{solution.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{solution.title}</h3>
                <p className="text-slate-400">{solution.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Exceptional Results</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Measurable impact on business performance</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              { value: "+42%", label: "Efficiency Gain", color: "from-green-500 to-teal-500" },
              { value: "2.1s", label: "Avg Response Time", color: "from-blue-500 to-cyan-500" },
              { value: "99.98%", label: "Uptime", color: "from-purple-500 to-pink-500" },
              { value: "25M", label: "Monthly Transactions", color: "from-orange-500 to-red-500" }
            ].map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="glass-card rounded-2xl p-6 text-center border border-white/10  transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${result.color} flex items-center justify-center mx-auto mb-4`}>
                  <span className="text-white font-bold text-xl">↑</span>
                </div>
                <div className="text-3xl font-bold text-primary mb-2">{result.value}</div>
                <div className="text-slate-400">{result.label}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-white/10"
          >
            <h3 className="text-xl font-bold text-white mb-6">Business Impact Timeline</h3>
            <div className="space-y-6">
              {[
                { month: "Month 3", milestone: "Core migration completed", impact: "25% performance improvement" },
                { month: "Month 6", milestone: "Security framework deployed", impact: "Zero security incidents" },
                { month: "Month 12", milestone: "Full system optimization", impact: "42% efficiency gain achieved" },
                { month: "Month 18", milestone: "Advanced analytics implemented", impact: "Predictive maintenance active" }
              ].map((phase, index) => (
                <div key={index} className="flex items-center gap-6">
                  <div className="w-24 text-primary font-semibold">{phase.month}</div>
                  <div className="flex-1">
                    <div className="text-white font-semibold mb-1">{phase.milestone}</div>
                    <div className="text-slate-400 text-sm">{phase.impact}</div>
                  </div>
                  <div className="w-3 h-3 rounded-full bg-primary"></div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-16 bg-gradient-to-r from-background-dark/50 to-purple-900/10 rounded-3xl">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technology Stack</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Modern tools powering the transformation</p>
          </motion.div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {[
              { name: "AWS", icon: "cloud" },
              { name: "Kubernetes", icon: "settings" },
              { name: "Node.js", icon: "code" },
              { name: "React", icon: "web" },
              { name: "MongoDB", icon: "database" },
              { name: "Redis", icon: "bolt" },
              { name: "Docker", icon: "inventory_2" },
              { name: "Jenkins", icon: "build" },
              { name: "Splunk", icon: "analytics" },
              { name: "HashiCorp", icon: "key" },
              { name: "Datadog", icon: "monitor" },
              { name: "Terraform", icon: "map" }
            ].map((tech, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="glass-card rounded-xl p-4 text-center border border-white/10  transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center mx-auto mb-3">
                  <span className="material-symbols-outlined text-white">{tech.icon}</span>
                </div>
                <div className="text-white font-semibold text-sm">{tech.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready for Your Transformation?</h2>
          <p className="text-slate-400 text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help transform your business with cutting-edge technology solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-purple-500 text-white font-bold h-14 px-8 rounded-full shadow-[0_0_30px_rgba(56,105,250,0.5)]"
              >
                Start Your Project
              </motion.button>
            </Link>
            <Link to="/portfolio">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold h-14 px-8 rounded-full border border-white/30 backdrop-blur-sm"
              >
                View More Case Studies
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default CaseStudyFinancial;