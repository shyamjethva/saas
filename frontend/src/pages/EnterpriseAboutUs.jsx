import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const AboutUs = () => {
  const missionVisionValues = [
    {
      title: 'Our Mission',
      description: 'To empower businesses with intelligent, scalable digital infrastructure that drives measurable growth and operational excellence through structured innovation.',
      icon: 'rocket_launch',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Our Vision',
      description: 'To become the global leader in structured digital transformation, redefining how enterprises innovate, scale, and achieve sustainable competitive advantage.',
      icon: 'visibility',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Our Values',
      description: 'We pioneer new technologies to solve complex problems with integrity, collaboration, and unwavering commitment to excellence and customer success.',
      icon: 'diamond',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const industries = [
    { name: 'Education', icon: 'school', color: 'from-blue-500 to-cyan-500' },
    { name: 'Healthcare', icon: 'local_hospital', color: 'from-red-500 to-pink-500' },
    { name: 'Real Estate', icon: 'apartment', color: 'from-green-500 to-emerald-500' },
    { name: 'Manufacturing', icon: 'factory', color: 'from-orange-500 to-red-500' },
    { name: 'Agencies', icon: 'business_center', color: 'from-purple-500 to-indigo-500' },
    { name: 'Startups', icon: 'emoji_objects', color: 'from-yellow-500 to-orange-500' }
  ];

  const teamMembers = [
    {
      name: 'Rahul Sharma',
      role: 'Founder & CEO',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      name: 'Priya Patel',
      role: 'CTO',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      name: 'Amit Kumar',
      role: 'Head of Operations',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop&crop=face',
      linkedin: '#'
    },
    {
      name: 'Sneha Gupta',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=400&fit=crop&crop=face',
      linkedin: '#'
    }
  ];

  const trustBadges = [
    { name: 'ISO 27001 Certified', icon: 'verified' },
    { name: 'SOC 2 Compliant', icon: 'shield' },
    { name: 'Microsoft Partner', icon: 'apps' },
    { name: 'Google Cloud Partner', icon: 'cloud' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-slate-900 to-blue-900/20 pt-20">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-blue-400">corporate_fare</span>
              <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">ABOUT ERROR INFOTECH</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8">
              Engineering Structured 
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
                Digital Growth
              </span>
            </h1>
            
            <p className="text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed">
              We design intelligent digital ecosystems that help businesses scale faster and smarter through innovative technology solutions.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Mission, Vision, Values */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {missionVisionValues.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-8 border border-white/10  transition-all duration-300 backdrop-blur-sm text-center"
              >
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6`}>
                  <span className="material-symbols-outlined text-white text-3xl">{item.icon}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{item.title}</h3>
                <p className="text-slate-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="px-6 py-20 bg-gradient-to-r from-slate-800/50 to-blue-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-300">Tailored solutions for diverse business sectors</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.05 }}
                className="glass-card rounded-2xl p-8 border border-white/10  transition-all duration-300 backdrop-blur-sm text-center group"
              >
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="material-symbols-outlined text-white text-2xl">{industry.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Leadership Team</h2>
            <p className="text-xl text-slate-300">Experienced professionals driving innovation</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="text-center group"
              >
                <div className="relative mb-6">
                  <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-white/20 group- transition-all duration-300">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                  <a 
                    href={member.linkedin}
                    className="absolute bottom-4 right-4 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-lg"
                  >
                    <span className="material-symbols-outlined">link</span>
                  </a>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                <p className="text-slate-400">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Badges */}
      <div className="px-6 py-20 bg-gradient-to-r from-slate-800/50 to-blue-900/30">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Trusted By Industry Leaders</h2>
            <p className="text-lg text-slate-300">Recognized certifications and partnerships</p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustBadges.map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card rounded-xl p-6 border border-white/10 backdrop-blur-sm text-center hover:bg-white/5 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center mx-auto mb-4">
                  <span className="material-symbols-outlined text-blue-400 text-2xl">{badge.icon}</span>
                </div>
                <h3 className="text-white font-semibold">{badge.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-16 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm"
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            
            <p className="text-xl text-slate-300 mb-12">
              Join hundreds of enterprises already experiencing structured digital growth
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold px-10 py-5 rounded-full transition-all shadow-2xl hover:shadow-blue-500/25 flex items-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">contact_support</span>
                  Get In Touch
                </motion.button>
              </Link>
              <Link to="/clients-projects">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 hover:bg-white/20 text-white font-bold px-10 py-5 rounded-full border border-white/20 transition-all flex items-center gap-3 text-lg"
                >
                  <span className="material-symbols-outlined">work</span>
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;