import { useState } from 'react';
import { motion } from 'framer-motion';

const CompanyProfile = () => {
  const [activeTab, setActiveTab] = useState('mission');

  const stats = [
    { value: '500+', label: 'Enterprise Clients', icon: 'business' },
    { value: '98%', label: 'Client Retention', icon: 'verified' },
    { value: '15+', label: 'Countries Served', icon: 'public' },
    { value: '24/7', label: 'Support Coverage', icon: 'support_agent' }
  ];

  const leadership = [
    {
      name: 'Rajesh Kumar',
      role: 'Chief Executive Officer',
      experience: '20+ years in enterprise technology',
      companies: 'Former CTO at TechGlobal, Microsoft India'
    },
    {
      name: 'Priya Sharma',
      role: 'Chief Technology Officer',
      experience: '15+ years in AI & Cloud Architecture',
      companies: 'Ex-Google, AWS Solutions Architect'
    },
    {
      name: 'Amit Patel',
      role: 'Head of Innovation',
      experience: '12+ years in digital transformation',
      companies: 'Former Director at Deloitte Digital'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      {/* Hero Section */}
      <div className="container mx-auto px-6 mb-20">
        <div className="text-center max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent"
          >
            Error Infotech
            <span className="block text-primary">Digital Solutions</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-slate-300 mb-12 leading-relaxed"
          >
            Since 2010, we've been the trusted technology partner for Fortune 500 companies
            and innovative startups worldwide. Our mission is to accelerate business growth
            through intelligent digital transformation and cutting-edge technological solutions.
          </motion.p>

          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary hover:bg-primary/90 text-white font-bold px-8 py-4 rounded-consistent-full transition-all shadow-[0_0_30px_rgba(56,105,250,0.5)]"
            >
              Schedule Consultation
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-consistent-full border border-white/20 transition-all backdrop-blur-sm"
            >
              View Case Studies
            </motion.button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-gradient-to-r from-background-dark to-slate-900 py-16 mb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-slate-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Team */}
      <div className="container mx-auto px-6 mb-20">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold text-center mb-16 text-white"
        >
          Leadership <span className="text-primary">Team</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {leadership.map((leader, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-2xl p-8 border border-white/10 text-center"
            >
              <div className="w-24 h-24 bg-gradient-to-br from-primary to-purple-500 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="material-symbols-outlined text-white text-4xl">person</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
              <p className="text-primary font-semibold mb-4">{leader.role}</p>
              <p className="text-slate-300 mb-3">{leader.experience}</p>
              <p className="text-sm text-slate-400">{leader.companies}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Core Values */}
      <div className="bg-gradient-to-r from-slate-900 to-background-dark py-20">
        <div className="container mx-auto px-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-16 text-white"
          >
            Our <span className="text-primary">Core Values</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: 'handshake', title: 'Client Partnership', desc: 'We believe in long-term partnerships built on trust and mutual success.' },
              { icon: 'auto_awesome', title: 'Innovation First', desc: 'Constantly pushing boundaries with emerging technologies and creative solutions.' },
              { icon: 'shield', title: 'Security Excellence', desc: 'Uncompromising commitment to data protection and regulatory compliance.' },
              { icon: 'speed', title: 'Performance Driven', desc: 'Delivering measurable results and ROI-focused solutions.' },
              { icon: 'groups', title: 'People Centric', desc: 'Investing in talent development and fostering collaborative environments.' },
              { icon: 'eco', title: 'Sustainable Growth', desc: 'Building scalable solutions that grow with your business needs.' }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10"
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4">
                  <span className="material-symbols-outlined text-primary text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{value.title}</h3>
                <p className="text-slate-300">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompanyProfile;
