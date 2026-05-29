import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const About = () => {
  const [showFullTeam, setShowFullTeam] = useState(false);

  const milestones = [
    { year: '2021', event: 'Error Infotech Founded', desc: 'Started with 3 passionate developers focusing on web and app development' },
    { year: '2022', event: 'First Major Client', desc: 'Secured our first enterprise client and delivered successful web solutions' },
    { year: '2023', event: 'Service Expansion', desc: 'Expanded services to include AI solutions, digital marketing, and UI/UX design' },
    { year: '2024', event: 'Team Growth', desc: 'Grew to 15+ professionals and completed multiple successful projects' },
    { year: '2025', event: 'AI & Automation Focus', desc: 'Launched dedicated AI automation and n8n workflow solutions division' },
    { year: '2026', event: 'Global Recognition', desc: 'Recognized as emerging IT solutions provider with happy clients across India' }
  ];

  const coreTeam = [
    {
      id: 1,
      name: 'Rakshit Patadiya',
      role: 'Founder',
      bio: 'Visionary leader with years of experience in enterprise technology',
      image: '/images/team/Rakshit.png',
      achievements: ['Founded Error Infotech', 'Led company growth', 'Industry thought leader'],
      color: 'from-slate-800 to-slate-600',
      portfolio: '/portfolios/rakshit_portfolio/index.html'
    },
    {
      id: 3,
      name: 'Prayushi Teraiya',
      role: 'BDE',
      bio: 'Strategic business growth and client relationship management',
      image: '/images/team/Prayushi.png',
      achievements: ['Market expansion', 'Strategic partnerships', 'Client success lead'],
      color: 'from-slate-500 to-slate-400',
      portfolio: '/portfolios/prayushi_portfolio/index.html'
    },
    {
      id: 4,
      name: 'Mahima Sarvaiya',
      role: 'Human Resource Management',
      bio: 'Excellence in talent acquisition and people operations',
      image: '/images/team/Hemal.png',
      achievements: ['Talent acquisition', 'Employee engagement', 'People operations'],
      color: 'from-slate-700 to-slate-500'
    }
  ];

  const fullTeam = [
    { id: 1, name: 'Rakshit Patadiya', role: 'Founder', department: 'Leadership', image: '/images/team/Rakshit.png', portfolio: '/portfolios/rakshit_portfolio/index.html' },
    { id: 2, name: 'Prayushi Teraiya', role: 'BDE', department: 'Operations', image: '/images/team/Prayushi.png', portfolio: '/portfolios/prayushi_portfolio/index.html' },
    { id: 3, name: 'Mahima Sarvaiya', role: 'Human Resource Management', department: 'Operations', image: '/images/team/Hemal.png' },
    { id: 4, name: 'Manav Jotangiya', role: 'Ai Solution Architect', department: 'Engineering', image: '/images/team/Manav.png' },
    { id: 5, name: 'Shyam Jethva', role: 'Ai Automation Developer', department: 'Engineering', image: '/images/team/shyam.png', portfolio: '/portfolios/shyam-portfolio/index.html' },
    { id: 6, name: 'Astha Maniyar', role: 'Fullstack Developer', department: 'Engineering', image: '/images/team/Astha.png', portfolio: '/portfolios/aastha_portfolio/index.html' },
    { id: 7, name: 'Hiarl Nadiyapara', role: 'Ai Automation Developer', department: 'Engineering', image: '/images/team/Astha.png', portfolio: '/portfolios/hiral_portfolio/index.html' },
    { id: 8, name: 'Pratham Upadhyay', role: 'Ai Automation Developer', department: 'Engineering', image: '/images/team/Parth.png', portfolio: '/portfolios/pratham_portfolio/index.html' },
    { id: 9, name: 'Rohit Jariya', role: 'Digital Marketing', department: 'Marketing', image: '/images/team/Rohit.png', portfolio: '/portfolios/rohit_portfoliolatest/index.html' },
    { id: 10, name: 'Prushti Boriya', role: 'Creative Content Creator', department: 'Marketing', image: '/images/team/Prushti.png' },
  ];

  const values = [
    {
      title: 'Innovation',
      desc: 'Pushing boundaries and embracing new technologies to create competitive advantages for our clients',
      icon: 'auto_awesome',
      color: 'from-slate-800 to-slate-600'
    },
    {
      title: 'Integrity',
      desc: 'Honest, transparent, and ethical in all interactions with clients, partners, and employees',
      icon: 'verified',
      color: 'from-slate-700 to-slate-900'
    },
    {
      title: 'Collaboration',
      desc: 'Working together to achieve shared success through trust and mutual respect',
      icon: 'group',
      color: 'from-slate-800 to-slate-600'
    },
    {
      title: 'Excellence',
      desc: 'Delivering exceptional quality in everything we do, exceeding expectations consistently',
      icon: 'workspace_premium',
      color: 'from-slate-900 to-slate-600'
    }
  ];

  const stats = [
    { value: '65+', label: 'Global Clients', color: 'from-slate-900 to-slate-600' },
    { value: '75+', label: 'Projects Delivered', color: 'from-slate-500 to-slate-400' },
    { value: '40+', label: 'Countries Served', color: 'from-slate-900 to-slate-600' },
    { value: '98%', label: 'Client Retention', color: 'from-slate-500 to-slate-400' }
  ];

  return (
    <div className="min-h-screen premium-bg pt-20">
      {/* Hero Section */}
      <section className="px-6 py-12 border-b border-slate-100 relative overflow-hidden mb-12">
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl -mr-48 -mt-48 opacity-50"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tighter leading-tight font-space-grotesk">
              <span className="heading-underline active pb-2 inline-block">
                About Error <span className="text-slate-500">Infotech</span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              Leading the digital transformation revolution with innovative solutions and unwavering commitment to excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mt-20">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 relative overflow-hidden md:border-r border-slate-200/60 last:border-0 group transition-all duration-500 text-center"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none`}></div>
                <div className={`text-6xl font-black mb-4 transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>{stat.value}</div>
                <div className="text-slate-500 text-[11px] font-black uppercase tracking-widest leading-none">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="px-6 py-12 bg-slate-50 border-y border-slate-100 rounded-[4rem] mx-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-10 tracking-tighter font-space-grotesk">
                Our Vision <span className="text-slate-500">for the Future</span>
              </h2>
              <div className="space-y-8 text-lg text-slate-600 leading-relaxed font-medium">
                <p className="text-xl text-slate-600 leading-relaxed font-medium">
                  We envision a world where technology seamlessly empowers every business to reach its full potential. Our mission is to bridge the gap between complex digital challenges and elegant, scalable solutions.
                </p>
                <p>
                  Based in Rajkot, Gujarat, we specialize in providing end-to-end services in web development, mobile applications, software solutions, and IT consulting. Our focus is on bridging the gap between business vision and technical excellence.
                </p>
                <p>
                  We believe technology is more than just a tool — it is a bridge that connects businesses to opportunities, scalability, and growth.
                </p>
              </div>

              <div className="flex justify-center mt-12">
                <div className="p-8 bg-white rounded-3xl border border-slate-100 shadow-2xl shadow-slate-500/5 transition-all hover:scale-105 group text-center w-full max-w-sm">
                  <span className="text-slate-800 font-black text-4xl block mb-2 group-hover:scale-110 transition-transform">5+ Years</span>
                  <span className="text-slate-500 font-black uppercase tracking-widest text-xs">Industry Excellence</span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-[3rem] p-10 lg:p-16 border border-slate-100 shadow-2xl shadow-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <h3 className="text-2xl font-black text-slate-800 mb-10">Milestone Journey</h3>
                <div className="space-y-10">
                  {milestones.slice(0, 5).map((item, index) => (
                    <div key={index} className="flex gap-6 relative">
                      <div className="w-4 h-4 rounded-full bg-slate-400 mt-1 shadow-lg shadow-slate-500/20"></div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-2">{item.year} - {item.event}</h4>
                        <p className="text-slate-600 font-medium">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="px-6 py-24">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 tracking-tighter font-space-grotesk">
              The <span className="text-slate-500">Visionaries</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">The innovative minds driving our success and tech evolution.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {coreTeam.map((member, index) => (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-[2.5rem] p-8 border border-slate-200 shadow-xl text-center group transition-all duration-700 relative overflow-hidden hover:border-slate-400/50`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${member.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700 pointer-events-none`}></div>
                <div className="relative mb-8 inline-block z-10">
                  <div className={`absolute inset-0 bg-gradient-to-br ${member.color} rounded-full scale-110 opacity-0 group-hover:opacity-10 transition-opacity`}></div>
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full object-cover border-4 border-slate-100 shadow-lg transition-transform duration-500 group-hover:rotate-6"
                  />
                </div>
                <h3 className="text-2xl font-black text-slate-800 mb-2">{member.name}</h3>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-[10px] mb-4 font-black">{member.role}</p>

                {member.portfolio && (
                  <a 
                    href={member.portfolio} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-block mb-6 px-4 py-2 bg-slate-900 text-white rounded-full text-[10px] font-bold uppercase tracking-widest hover:bg-slate-700 transition-colors z-10 relative"
                  >
                    View Portfolio
                  </a>
                )}

                <div className="space-y-2 pt-6 border-t border-slate-100 z-10 relative">
                  {member.achievements.slice(0, 2).map((ach, i) => (
                    <div key={i} className="flex items-center justify-center gap-2 text-[11px] font-bold text-slate-500">
                      <span className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${member.color}`}></span>
                      <span>{ach}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}

            {/* View Full Team Button */}
            <motion.div
              whileHover={{ y: -10 }}
              onClick={() => setShowFullTeam(true)}
              className="bg-white rounded-[2.5rem] p-8 shadow-2xl text-center flex flex-col items-center justify-center cursor-pointer group transition-all duration-500 border border-slate-200 hover:border-slate-400 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-slate-800 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none"></div>
              <div className="w-24 h-24 rounded-full mb-6 group-hover:scale-110 transition-transform relative z-10 overflow-hidden border-2 border-slate-100 shadow-lg">
                <img
                  src="/images/team/FullTeam.jpg"
                  alt="Full Team"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-2">Our Full Team</h3>
              <p className="text-slate-600 text-sm font-bold mb-8">Meet all our talented engineers and specialists</p>
              <button className="px-6 py-3 bg-white text-slate-800 rounded-full font-black uppercase tracking-widest text-[10px] shadow-lg">
                Meet Everyone
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-6 py-12 bg-slate-50/50 rounded-[4rem] mx-6 border border-slate-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter font-space-grotesk">
              Our <span className="text-slate-500">DNA</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">The core values that define every line of code we write.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`p-10 bg-white border border-slate-100 rounded-[3.5rem] text-center hover:shadow-2xl transition-all duration-700 group relative overflow-hidden hover:border-slate-300`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${v.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700 pointer-events-none`}></div>
                <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${v.color} text-white flex items-center justify-center mx-auto mb-10 shadow-2xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-700`}>
                  <span className="material-symbols-outlined text-4xl">{v.icon}</span>
                </div>
                <h3 className={`text-slate-900 text-2xl font-black mb-4 uppercase tracking-tighter transition-colors duration-500 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r ${v.color}`}>{v.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed font-bold">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Team Modal */}
      {showFullTeam && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-white/95 backdrop-blur-xl"
            onClick={() => setShowFullTeam(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-[3rem] p-12 w-full max-w-6xl max-h-[85vh] overflow-y-auto relative shadow-2xl [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
              onClick={e => e.stopPropagation()}
            >
              <button onClick={() => setShowFullTeam(false)} className="absolute top-8 right-8 text-slate-800 hover:rotate-90 transition-transform">
                <span className="material-symbols-outlined text-4xl">close</span>
              </button>

              <div className="text-center mb-16">
                <h2 className="text-4xl font-black text-slate-800 mb-4">The Entire Force</h2>
                <p className="text-slate-500 font-bold uppercase tracking-widest text-xs">Meet the team behind the innovation</p>
              </div>

              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {fullTeam.map((m, i) => (
                  <div key={i} className="p-6 bg-slate-50 border border-slate-100 rounded-3xl text-center flex flex-col items-center justify-between">
                    <div>
                      <img src={m.image} alt={m.name} className="w-20 h-20 rounded-full mx-auto mb-4 object-cover border-2 border-slate-200 shadow-sm" />
                      <h4 className="font-black text-slate-800 mb-1">{m.name}</h4>
                      <p className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[8px] mb-4">{m.role}</p>
                    </div>
                    {m.portfolio && (
                      <a 
                        href={m.portfolio} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-slate-800 text-white rounded-full text-[9px] font-bold uppercase tracking-widest hover:bg-slate-700 transition-colors"
                      >
                        Portfolio
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </AnimatePresence>
      )}

      {/* Final CTA */}
      <section className="px-6 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8 tracking-tighter font-space-grotesk">
              Ready to <span className="text-slate-500 pb-2">Scale?</span>
            </h2>
            <p className="text-xl text-slate-600 mb-12 font-medium">Join our journey of innovation. Let's build something extraordinary together.</p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-slate-900 via-slate-800 to-slate-600 text-white font-black px-12 py-5 rounded-full text-xl shadow-2xl shadow-slate-900/25 transition-all"
              >
                Work With Us
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
