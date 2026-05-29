import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CaseStudyHealthcare = () => {
  const projectData = {
    title: "Healthcare Digital Ecosystem",
    client: "National Healthcare Network",
    industry: "Healthcare",
    year: "2023",
    duration: "15 months",
    teamSize: "38 specialists",
    
    overview: "HIPAA-compliant integrated healthcare management system connecting 100K+ healthcare providers with telemedicine capabilities, electronic health records, and AI-powered diagnostic assistance. Improved patient outcomes by 35% through data-driven care coordination.",
    
    challenge: "Secure patient data management across multiple healthcare facilities while ensuring compliance with stringent healthcare regulations and enabling seamless communication between providers and patients.",
    
    solution: "Implemented blockchain-based electronic health records with AI diagnostic support, secure telemedicine platform, and real-time care coordination tools that maintain data privacy while improving accessibility.",
    
    results: {
      providers: "100K+",
      uptime: "99.95%",
      patients: "500K+",
      improvement: "35% better outcomes",
      response: "60% faster diagnosis",
      compliance: "100% HIPAA"
    },
    
    technologies: [
      { name: "Vue.js", category: "Frontend" },
      { name: "Python", category: "Backend" },
      { name: "PostgreSQL", category: "Database" },
      { name: "Azure", category: "Cloud" },
      { name: "TensorFlow", category: "AI/ML" },
      { name: "Blockchain", category: "Security" }
    ],
    
    metrics: [
      { label: "Patient Outcomes", value: "35% improvement", icon: "monitor_heart" },
      { label: "Diagnosis Speed", value: "60% faster", icon: "speed" },
      { label: "System Uptime", value: "99.95%", icon: "monitor_heart" },
      { label: "Healthcare Providers", value: "100K+", icon: "group" },
      { label: "Patient Records", value: "500K+", icon: "description" },
      { label: "Compliance", value: "100% HIPAA", icon: "verified" }
    ],
    
    testimonial: {
      quote: "The healthcare solution they built has revolutionized patient care in our network. Professional, reliable, and truly innovative approach to complex healthcare challenges. The 35% improvement in patient outcomes speaks volumes about their expertise.",
      author: "Dr. Michael Chen",
      position: "Director of Digital Health",
      company: "National Healthcare Network"
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
              <span className="px-4 py-2 bg-gradient-to-r from-green-500/20 to-teal-500/20 border border-green-500/30 text-green-400 rounded-full font-semibold">
                {projectData.industry}
              </span>
              <span className="px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 text-blue-400 rounded-full font-semibold">
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
                  <div className="text-slate-400">Healthcare Specialists</div>
                </div>
                <div className="glass-card rounded-xl p-6 border border-white/10">
                  <div className="text-2xl font-bold text-primary mb-2">{projectData.duration}</div>
                  <div className="text-slate-400">Implementation Period</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass-card rounded-2xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold text-white mb-6">Healthcare Impact</h3>
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
      <section className="py-16 bg-gradient-to-r from-background-dark/50 to-green-900/10 rounded-3xl">
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
                <h2 className="text-2xl font-bold text-white">The Healthcare Challenge</h2>
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
                <h2 className="text-2xl font-bold text-white">Our Medical Solution</h2>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Healthcare Excellence Metrics</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Measurable improvements in patient care and operational efficiency</p>
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
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center mx-auto mb-6">
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
      <section className="py-16 bg-gradient-to-r from-background-dark/50 to-teal-900/10 rounded-3xl">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Medical Technology Stack</h2>
            <p className="text-slate-400 max-w-2xl mx-auto">Secure and compliant tools for healthcare innovation</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {['Frontend', 'Backend', 'Database', 'Cloud', 'AI/ML', 'Security'].map((category, index) => {
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
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-green-500 to-teal-500 flex items-center justify-center">
                          <span className="material-symbols-outlined text-white text-sm">local_hospital</span>
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transform Your Healthcare Delivery?</h2>
          <p className="text-slate-400 text-xl mb-8 max-w-2xl mx-auto">
            Let's discuss how we can improve patient outcomes and operational efficiency for your healthcare organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-green-500 to-teal-500 text-white font-bold h-14 px-8 rounded-full shadow-[0_0_30px_rgba(16,185,129,0.5)]"
              >
                Schedule Healthcare Consultation
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

export default CaseStudyHealthcare;
