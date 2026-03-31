import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CRMDemoShowcase = () => {
  const features = [
    {
      title: "Smart Lead Scoring",
      description: "AI-powered lead qualification that identifies your best prospects automatically",
      icon: "auto_awesome"
    },
    {
      title: "Automated Workflows",
      description: "Set up custom automation sequences that save 10+ hours per week",
      icon: "bolt"
    },
    {
      title: "Real-time Analytics",
      description: "Track performance metrics with beautiful, actionable dashboards",
      icon: "analytics"
    },
    {
      title: "Team Collaboration",
      description: "Built-in communication tools for seamless team coordination",
      icon: "groups"
    }
  ];

  const stats = [
    { value: "70%", label: "Time Saved" },
    { value: "300%", label: "ROI Increase" },
    { value: "500+", label: "Active Clients" },
    { value: "24/7", label: "Support" }
  ];

  return (
    <div className="relative z-10 px-6 py-20 bg-gradient-to-br from-slate-900/50 to-green-900/20">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-500/30 backdrop-blur-sm mb-6">
            <span className="material-symbols-outlined text-green-400">smart_toy</span>
            <span className="text-green-400 font-bold tracking-wider uppercase text-sm">Live CRM Demo</span>
          </div>
          
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
            Experience Our CRM
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-green-400 via-blue-400 to-cyan-400">
              Before You Commit
            </span>
          </h2>
          
          <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            See exactly how our enterprise CRM can transform your sales process, 
            automate workflows, and boost your revenue - all in a personalized 30-minute session.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass-card rounded-2xl p-6 border border-white/10  transition-all duration-300 text-center group backdrop-blur-sm"
            >
              <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-green-500/20 to-blue-500/20 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 border border-green-500/20">
                <span className="material-symbols-outlined text-green-400 text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center p-6 bg-gradient-to-br from-white/5 to-white/10 rounded-2xl border border-white/10 backdrop-blur-sm"
            >
              <div className="text-4xl font-black text-green-400 mb-2">{stat.value}</div>
              <div className="text-slate-300 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="glass-card rounded-2xl p-12 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold text-white mb-4">Ready to See It in Action?</h3>
            <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
              Book a free 30-minute personalized demo with our CRM experts. 
              No pressure, no obligations - just a hands-on showcase of real business value.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/book-demo">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold px-10 py-5 rounded-full transition-all shadow-2xl hover:shadow-green-500/25 flex items-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">calendar_today</span>
                  Book Free CRM Demo
                </motion.button>
              </Link>
              <Link to="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-5 rounded-full border border-white/20 transition-all flex items-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">chat</span>
                  Talk to Sales Expert
                </motion.button>
              </Link>
            </div>
            
            <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-slate-400">
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-400 text-base">schedule</span>
                30-minute session
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-400 text-base">person</span>
                Personalized demo
              </span>
              <span className="flex items-center gap-2">
                <span className="material-symbols-outlined text-green-400 text-base">verified</span>
                No obligations
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CRMDemoShowcase;