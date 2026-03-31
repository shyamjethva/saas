import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

const Homepage = () => {
  // Animated Particles Component
  const Particles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
      const generateParticles = () => {
        const newParticles = [];
        for (let i = 0; i < 15; i++) {
          newParticles.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1,
            duration: Math.random() * 20 + 10,
            delay: Math.random() * 5
          });
        }
        setParticles(newParticles);
      };

      generateParticles();
    }, []);

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-consistent-md bg-primary/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  };

  // Animated Counter Hook
  const useAnimatedCounter = (target, duration = 2000) => {
    const [count, setCount] = useState(0);
    const ref = useRef();

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            const startTime = Date.now();
            const animate = () => {
              const elapsed = Date.now() - startTime;
              const progress = Math.min(elapsed / duration, 1);
              const easedProgress = 1 - Math.pow(1 - progress, 3);
              setCount(Math.floor(target * easedProgress));

              if (progress < 1) {
                requestAnimationFrame(animate);
              } else {
                setCount(target);
              }
            };
            animate();
          }
        },
        { threshold: 0.5 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [target, duration]);

    return [count, ref];
  };

  // Performance Metrics with Animated Counters
  const metrics = [
    { label: 'System Uptime', value: 99.9, suffix: '%' },
    { label: 'On-Time Delivery', value: 98, suffix: '%' },
    { label: 'Client Revenue Growth', value: 3, suffix: 'X' },
    { label: 'Operational Efficiency', value: 40, suffix: '%' }
  ];

  // Who We Serve
  const b2bClients = [
    'Agencies', 'Schools & Institutions', 'Manufacturing Units',
    'Real Estate Companies', 'Corporate Businesses', 'Startups'
  ];

  const b2cServices = [
    'Personal Branding Growth', 'Local Business Marketing',
    'E-commerce Scaling', 'Coaches & Consultants'
  ];

  // Core Strengths
  const coreStrengths = [
    { title: 'Custom CRM Development', icon: 'account_tree', color: 'from-blue-500 to-cyan-500' },
    { title: 'AI Automation Systems', icon: 'auto_mode', color: 'from-purple-500 to-pink-500' },
    { title: 'Performance Marketing', icon: 'trending_up', color: 'from-green-500 to-emerald-500' },
    { title: 'School ERP Software', icon: 'school', color: 'from-amber-500 to-orange-500' },
    { title: 'Web & App Development', icon: 'devices', color: 'from-indigo-500 to-purple-500' }
  ];

  // Subscription Advantages
  const subscriptionBenefits = [
    'No Heavy Upfront Cost',
    'Continuous Improvements',
    'Dedicated Support',
    'AI-Based Insights'
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background-dark via-slate-900 to-green-900/20 relative overflow-hidden">
      {/* Animated Background */}
      <Particles />

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-green-500/5 to-cyan-500/5 animate-pulse"></div>

      {/* Hero Section */}
      <div className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-consistent-full bg-gradient-to-r from-primary/20 to-green-500/20 border border-primary/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-primary">architecture</span>
              <span className="text-primary font-bold tracking-wider uppercase text-sm">Enterprise Digital Solutions</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black text-[var(--text-primary)] mb-8 leading-tight">
              Architecting
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-cyan-400 to-green-400">
                Scalable Digital Growth
              </span>
              <span className="block">for Modern Businesses</span>
            </h1>

            <p className="text-xl md:text-2xl text-[var(--text-secondary)] max-w-4xl mx-auto leading-relaxed mb-12 font-light">
              We design intelligent digital ecosystems — CRM systems, AI automation, enterprise software,
              and performance-driven marketing strategies that help businesses scale faster and smarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-primary to-green-500 hover:from-primary/90 hover:to-green-600 text-white font-bold px-6 py-4 rounded-consistent-full transition-all shadow-[0_0_30px_rgba(56,105,250,0.5)] flex items-center justify-center gap-3 text-lg min-w-[280px]"
                >
                  <span className="material-symbols-outlined">calendar_today</span>
                  <span className="whitespace-nowrap">Get Free Consultation</span>
                </motion.button>
              </Link>
              <Link to="/book-demo">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-green-500 to-cyan-500 hover:from-green-600 hover:to-cyan-600 text-white font-bold px-6 py-4 rounded-consistent-full transition-all shadow-[0_0_30px_rgba(72,187,120,0.5)] flex items-center justify-center gap-3 text-lg min-w-[280px]"
                >
                  <span className="material-symbols-outlined">smart_toy</span>
                  <span className="whitespace-nowrap">Book Free CRM Demo</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>

          {/* About Snapshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-card rounded-consistent-2xl p-12 mb-20 border border-white/10 bg-gradient-to-br from-white/5 to-white/10"
          >
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-[var(--text-primary)] mb-6">About Error Infotech</h2>
                <p className="text-[var(--text-secondary)] text-lg leading-relaxed mb-4">
                  Error Infotech is a technology-driven company delivering custom CRM systems, AI automation platforms,
                  enterprise software, and ROI-focused marketing solutions.
                </p>
                <p className="text-[var(--text-secondary)] text-lg leading-relaxed font-bold text-primary">
                  We don't sell software. We build structured digital systems that scale businesses.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-6">
                {metrics.map((metric, index) => {
                  const [count, ref] = useAnimatedCounter(metric.value, 2500);
                  return (
                    <motion.div
                      key={index}
                      ref={ref}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-center p-6 bg-gradient-to-br from-primary/10 to-green-500/10 rounded-xl border border-white/10"
                    >
                      <div className="text-4xl font-bold text-primary mb-2">
                        {count}{metric.suffix}
                      </div>
                      <div className="text-[var(--text-secondary)] font-medium">{metric.label}</div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Who We Serve */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-[var(--text-primary)] text-center mb-12">Who We Serve</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="glass-card rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-blue-400">business</span>
                  B2B Clients
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {b2bClients.map((client, index) => (
                    <div key={index} className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                      {client}
                    </div>
                  ))}
                </div>
              </div>
              <div className="glass-card rounded-xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6 flex items-center gap-3">
                  <span className="material-symbols-outlined text-purple-400">person</span>
                  B2C Services
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {b2cServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-2 text-[var(--text-secondary)]">
                      <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                      {service}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Core Strengths */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <h2 className="text-4xl font-bold text-[var(--text-primary)] text-center mb-16">Core Strengths</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {coreStrengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="glass-card rounded-xl p-6 border border-white/10 transition-all duration-300 text-center group"
                >
                  <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${strength.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="material-symbols-outlined text-white text-2xl">{strength.icon}</span>
                  </div>
                  <h3 className="text-sm font-bold text-[var(--text-primary)]">{strength.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Subscription Advantage Section */}
      <div className="relative z-10 px-6 py-20 bg-gradient-to-r from-slate-800/50 to-green-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-consistent-2xl p-16 border border-white/10 bg-gradient-to-br from-white/5 to-white/10 text-center"
          >
            <h2 className="text-4xl font-bold text-[var(--text-primary)] mb-6">
              Build Once. Scale Every Month.
            </h2>
            <p className="text-xl text-[var(--text-secondary)] mb-12 max-w-3xl mx-auto">
              With our monthly CRM model, you don't just buy software —
              You get continuous updates, automation improvements, AI upgrades, and real human support.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {subscriptionBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-4 bg-primary/10 rounded-xl border border-primary/20"
                >
                  <span className="material-symbols-outlined text-primary">check_circle</span>
                  <span className="text-[var(--text-primary)] font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/crm-pricing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-primary to-green-500 hover:from-primary/90 hover:to-green-600 text-white font-bold px-10 py-5 rounded-consistent-full transition-all shadow-[0_0_30px_rgba(56,105,250,0.5)] flex items-center gap-3 text-lg mx-auto"
              >
                <span className="material-symbols-outlined">workspace_premium</span>
                View CRM Pricing Plans
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;