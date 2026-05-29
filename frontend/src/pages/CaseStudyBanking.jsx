import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CaseStudyBanking = () => {
  const projectData = {
    title: "Global Banking Transformation",
    client: "Major International Bank",
    industry: "Financial Services",
    year: "2023",
    duration: "18 months",
    teamSize: "45 specialists",

    overview: "Revolutionary digital banking platform serving 500K+ users with real-time transactions, advanced fraud detection, and regulatory compliance. Reduced processing time by 70% and improved customer satisfaction scores by 45%.",

    challenge: "Legacy system modernization with zero downtime deployment while maintaining strict regulatory compliance and ensuring uninterrupted service for half a million daily users.",

    solution: "Implemented microservices architecture with cloud-native deployment, real-time fraud detection using machine learning, and seamless API integration with existing banking infrastructure.",

    results: {
      users: "500K+",
      uptime: "99.9%",
      transactions: "2M+/day",
      reduction: "70% faster processing",
      satisfaction: "45% improvement",
      security: "Zero breaches"
    },

    technologies: [
      { name: "React", category: "Frontend" },
      { name: "Node.js", category: "Backend" },
      { name: "MongoDB", category: "Database" },
      { name: "AWS", category: "Cloud" },
      { name: "Kubernetes", category: "Orchestration" },
      { name: "TensorFlow", category: "AI/ML" }
    ],

    metrics: [
      { label: "Transaction Speed", value: "70% faster", icon: "speed" },
      { label: "Customer Satisfaction", value: "45% increase", icon: "sentiment_satisfied" },
      { label: "System Uptime", value: "99.9%", icon: "monitor_heart" },
      { label: "Daily Transactions", value: "2M+", icon: "swap_horiz" },
      { label: "User Base", value: "500K+", icon: "group" },
      { label: "Security", value: "Zero breaches", icon: "security" }
    ],

    testimonial: {
      quote: "Error Infotech transformed our digital banking platform completely. Their expertise in modern architecture and commitment to excellence delivered results beyond our expectations. The 70% improvement in transaction speed has revolutionized our customer experience.",
      author: "Sarah Johnson",
      position: "CTO, Global Financial Services",
      company: "Major International Bank"
    }
  };

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
              <Link to="/portfolio" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-1">
                <span className="material-symbols-outlined text-sm">arrow_back</span>
                Back to Portfolio
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-4 mb-6">
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 rounded-full font-semibold">
                {projectData.industry}
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 text-green-400 rounded-full font-semibold">
                {projectData.year}
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400 rounded-full font-semibold">
                {projectData.duration}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {projectData.title}
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl">
              For <span className="text-primary font-semibold">{projectData.client}</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-3xl font-bold text-white mb-6">Project Overview</h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                {projectData.overview}
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="glass-card rounded-xl p-6 border border-white/10">
                  <div className="text-2xl font-bold text-primary mb-2">{projectData.teamSize}</div>
                  <div className="text-slate-400">Specialist Team</div>
                </div>
                <div className="glass-card rounded-xl p-6 border border-white/10">
                  <div className="text-2xl font-bold text-primary mb-2">{projectData.duration}</div>
                  <div className="text-slate-400">Project Duration</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6">Key Results</h3>
              <div className="space-y-4">
                {Object.entries(projectData.results).map(([key, value], index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg border border-white/10">
                    <span className="text-slate-300 capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                    <span className="text-primary font-semibold">{value}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-16 bg-gradient-to-r from-background-dark/50 to-blue-900/10 rounded-3xl">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-red-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-red-400 text-xl">error</span>
                </div>
                <h2 className="text-2xl font-bold text-white">The Challenge</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                {projectData.challenge}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-green-500/20 flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-400 text-xl">check_circle</span>
                </div>
                <h2 className="text-2xl font-bold text-white">Our Solution</h2>
              </div>
              <p className="text-slate-300 leading-relaxed text-lg">
                {projectData.solution}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Detailed Metrics */}
      <section className="py-16">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Measurable Impact</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Quantified results that transformed the banking experience</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-6 text-center border border-white/10  transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-blue-500 flex items-center justify-center mx-auto mb-6">
                  <span className="material-symbols-outlined text-white text-2xl">{metric.icon}</span>
                </div>
                <div className="text-3xl font-bold text-primary mb-3">{metric.value}</div>
                <div className="text-slate-400 font-medium">{metric.label}</div>
              </motion.div>
            ))}
          </div>
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
            <p className="text-slate-400 max-w-2xl mx-auto">Enterprise-grade tools powering the transformation</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Frontend', 'Backend', 'Database', 'Cloud', 'Orchestration', 'AI/ML'].map((category, index) => {
              const techItems = projectData.technologies.filter(tech => tech.category === category);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-card rounded-2xl p-6 border border-white/10"
                >
                  <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary">category</span>
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {techItems.map((tech, idx) => (
                      <div key={idx} className="flex items-center gap-3 p-3 bg-white/5 rounded-lg">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center">
                          <span className="material-symbols-outlined text-white text-sm">code</span>
                        </div>
                        <span className="text-white font-medium">{tech.name}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Client Testimonial */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-3xl p-12 text-center border border-white/10"
          >
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="material-symbols-outlined text-yellow-400 text-2xl">star</span>
              ))}
            </div>

            <blockquote className="text-xl text-slate-300 italic mb-8 leading-relaxed">
              "{projectData.testimonial.quote}"
            </blockquote>

            <div className="border-t border-white/10 pt-6">
              <div className="font-bold text-white text-lg">{projectData.testimonial.author}</div>
              <div className="text-primary">{projectData.testimonial.position}</div>
              <div className="text-slate-400">{projectData.testimonial.company}</div>
            </div>
          </motion.div>
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
            Let's discuss how we can deliver similar results for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-purple-500 text-white font-bold h-14 px-8 rounded-full shadow-[0_0_30px_rgba(56,105,250,0.5)]"
              >
                Schedule Consultation
              </motion.button>
            </Link>
            <Link to="/portfolio">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white/10 hover:bg-white/20 text-white font-semibold h-14 px-8 rounded-full border border-white/30 backdrop-blur-sm"
              >
                View All Case Studies
              </motion.button>
            </Link>
          </div>
        </motion.div>
      </section>
    </main>
  );
};

export default CaseStudyBanking;
