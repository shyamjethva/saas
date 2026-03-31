import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ContactForm from '../components/ContactForm';

const Homepage = () => {
  // State for showing packages
  const [showPackages, setShowPackages] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  // Enhanced Animated Particles Component
  const Particles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
      const generateParticles = () => {
        const newParticles = [];
        for (let i = 0; i < 50; i++) { // Increased particles for more visual effect
          newParticles.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 30 + 20,
            delay: Math.random() * 8,
            shape: ['circle', 'square', 'triangle'][Math.floor(Math.random() * 3)]
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
            className={`absolute rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 ${particle.shape === 'square' ? 'rotate-45' :
              particle.shape === 'triangle' ? 'clip-path-triangle' : ''
              }`}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 50 - 25, 0],
              opacity: [0, 1, 0],
              scale: [0.5, 1.5, 0.5],
              rotate: [0, 360]
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

  // Proper Sales CRM Dashboard Component
  const LiveCRMDashboard = () => {
    const [leadsData, setLeadsData] = useState([30, 45, 35, 55, 45, 65, 55, 75, 65, 80]);
    const [conversionData, setConversionData] = useState([20, 25, 22, 30, 28, 35, 32, 40, 38, 45]);
    const [leads, setLeads] = useState(1247);
    const [conversion, setConversion] = useState(12.5);

    useEffect(() => {
      const interval = setInterval(() => {
        setLeadsData(prev => {
          const newData = [...prev.slice(1)];
          const lastPoint = prev[prev.length - 1];
          const nextPoint = Math.min(Math.max(lastPoint + (Math.random() * 20 - 10), 30), 100);
          newData.push(nextPoint);
          return newData;
        });

        setConversionData(prev => {
          const newData = [...prev.slice(1)];
          const lastPoint = prev[prev.length - 1];
          const nextPoint = Math.min(Math.max(lastPoint + (Math.random() * 15 - 7), 15), 60);
          newData.push(nextPoint);
          return newData;
        });

        if (Math.random() > 0.6) setLeads(prev => prev + 1);
        if (Math.random() > 0.8) setConversion(prev => +(prev + 0.1).toFixed(1));
      }, 3000);

      return () => clearInterval(interval);
    }, []);

    // Generate SVG path for line chart
    const generatePath = (data) => {
      if (!data || !Array.isArray(data) || data.length < 2) return "M 0 0";
      const width = 300;
      const height = 100;
      const step = width / (data.length - 1);
      return data.map((val, i) => `${i === 0 ? 'M' : 'L'} ${i * step} ${height - ((Number(val) || 0) / 100) * height}`).join(' ');
    };

    return (
      <div className="relative group perspective-1000 lg:-mt-32">
        <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative glass-card rounded-3xl p-6 bg-white/80 shadow-[0_40px_80px_-20px_rgba(15,23,42,0.1)] overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-blue-600">group</span>
              </div>
              <div>
                <div className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em]">Sales CRM</div>
                <div className="text-xs font-bold text-slate-900 uppercase tracking-tight">Active Pipeline</div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-emerald-500/10 border border-emerald-500/10">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-[9px] font-black text-emerald-600 tracking-widest uppercase">● LIVE</span>
            </div>
          </div>

          {/* CRM Tabs Preview */}
          <div className="flex gap-2 mb-6">
            <div className="px-3 py-1.5 rounded-lg bg-blue-600 text-[9px] font-black text-white cursor-pointer shadow-lg shadow-blue-500/20">LEADS</div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[9px] font-black text-slate-400 cursor-not-allowed uppercase">Tasks</div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[9px] font-black text-slate-400 cursor-not-allowed uppercase">Pipeline</div>
          </div>

          {/* Main Comparison Chart */}
          <div className="h-32 w-full relative mb-8">
            <div className="absolute -top-4 right-0 flex gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-600"></div>
                <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Leads</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                <span className="text-[8px] font-bold text-slate-500 uppercase tracking-wider">Conversion</span>
              </div>
            </div>

            <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
              {[0, 25, 50, 75, 100].map(y => (
                <line key={y} x1="0" y1={y} x2="300" y2={y} stroke="black" strokeOpacity="0.05" strokeWidth="0.5" />
              ))}

              {/* Leads Line */}
              <motion.path
                d={generatePath(leadsData)}
                animate={{ d: generatePath(leadsData) }}
                fill="none"
                stroke="#0f172a"
                strokeWidth="2.5"
                strokeLinecap="round"
                transition={{ duration: 1, ease: "easeInOut" }}
              />

              {/* Conversion Line */}
              <motion.path
                d={generatePath(conversionData)}
                animate={{ d: generatePath(conversionData) }}
                fill="none"
                stroke="#3b82f6"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeDasharray="4 4"
                transition={{ duration: 1, ease: "easeInOut" }}
              />
            </svg>
          </div>

          {/* CRM Quick View Table */}
          <div className="space-y-2.5">
            <div className="text-[9px] font-black text-slate-400 uppercase tracking-[0.2em] mb-3">Hot Leads Queue</div>
            {[
              { name: "Global Tech Inc.", status: "Negotiation", val: "$15.8k", color: "blue" },
              { name: "Digital Pulse Co.", status: "Review", val: "$9.2k", color: "purple" }
            ].map((lead, i) => (
              <div key={i} className="flex items-center justify-between p-3 rounded-2xl bg-slate-50 border border-slate-100 hover:border-slate-200 transition-all cursor-pointer group">
                <div className="flex items-center gap-3">
                  <div className={`w-8 h-8 rounded-xl bg-${lead.color}-500/10 flex items-center justify-center text-[10px] font-black text-${lead.color}-600`}>
                    {lead.name.charAt(0)}
                  </div>
                  <div>
                    <div className="text-[11px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{lead.name}</div>
                    <div className="text-[9px] font-medium text-slate-400 uppercase tracking-widest">{lead.status}</div>
                  </div>
                </div>
                <div className="text-[11px] font-black text-emerald-600 tabular-nums">{lead.val}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // Animated Counter Hook
  const useAnimatedCounter = (target, duration = 2500) => {
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

  // Performance Metrics
  const metrics = [
    { label: 'System Uptime', value: 99.9, suffix: '%' },
    { label: 'On-Time Delivery', value: 98, suffix: '%' },
    { label: 'Client Revenue Growth', value: 3, suffix: 'X' },
    { label: 'Operational Efficiency', value: 40, suffix: '%' }
  ];

  // Who We Serve
  const b2bClients = [
    'Agencies', 'Schools', 'Real Estate', 'Manufacturing', 'Corporates', 'Startups'
  ];

  const b2cServices = [
    'Personal Brands', 'Coaches', 'E-commerce', 'Local Businesses'
  ];

  // Core Strengths
  const coreStrengths = [
    { title: 'AI Automation Agent Service', description: 'Intelligent automation for business processes', icon: 'auto_mode', color: 'from-purple-500 to-pink-500' },
    { title: 'Software+APK Development Service', description: 'Custom digital solutions for all platforms', icon: 'code', color: 'from-blue-500 to-cyan-500' },
    { title: 'Enterprise Industry Solution', description: 'Integrated business management solutions', icon: 'corporate_fare', color: 'from-amber-500 to-orange-500' },
    { title: 'Digital+Performance Marketing Service', description: 'Data-driven marketing strategies with measurable ROI', icon: 'campaign', color: 'from-green-500 to-emerald-500' },
    { title: 'Physical Marketing Services', description: 'Complete offline & direct marketing solutions', icon: 'storefront', color: 'from-red-500 to-rose-500' },
    { title: 'Graphical Development Services', description: 'Stunning visual identity and brand graphics', icon: 'palette', color: 'from-pink-500 to-rose-500' },
    { title: 'Collaboration & Project Management', description: 'Streamlined team collaboration and management tools', icon: 'groups', color: 'from-teal-500 to-cyan-500' },
    { title: 'Cloud & Cybersecurity Solutions', description: 'Secure infrastructure and data protection systems', icon: 'security', color: 'from-blue-600 to-indigo-600' }
  ];

  // Industries We Serve
  const industries = [
    { name: 'Healthcare', icon: 'medical_services', color: 'from-green-500 to-emerald-500' },
    { name: 'Finance', icon: 'account_balance', color: 'from-blue-500 to-cyan-500' },
    { name: 'Education', icon: 'school', color: 'from-amber-500 to-orange-500' },
    { name: 'Retail', icon: 'store', color: 'from-purple-500 to-pink-500' },
    { name: 'Manufacturing', icon: 'factory', color: 'from-indigo-500 to-purple-500' },
    { name: 'Technology', icon: 'developer_board', color: 'from-teal-500 to-cyan-500' }
  ];

  // Success Stories
  const successStories = [
    { company: 'TechCorp Solutions', growth: '350%', time: '12 months', description: 'Complete digital transformation with custom CRM' },
    { company: 'Global Retail Chain', growth: '180%', time: '8 months', description: 'Omnichannel retail platform implementation' },
    { company: 'Healthcare Network', growth: '220%', time: '10 months', description: 'HIPAA-compliant patient management system' },
    { company: 'Financial Services Group', growth: '275%', time: '14 months', description: 'AI-powered fraud detection and analytics' }
  ];

  // Subscription Benefits
  const subscriptionBenefits = [
    'No Heavy Upfront Cost',
    'Continuous Improvements',
    'Dedicated Support',
    'AI-Based Insights'
  ];



  // Custom styles for shapes
  useEffect(() => {
    const style = document.createElement('style');
    style.innerHTML = `
      .clip-path-triangle {
        clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      }
      .floating-animation {
        animation: float 6s ease-in-out infinite;
      }
      .pulse-animation {
        animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
      }
      @keyframes float {
        0%, 100% { transform: translateY(0); }
        50% { transform: translateY(-20px); }
      }
      @keyframes pulse {
        0%, 100% { opacity: 0.7; }
        50% { opacity: 1; }
      }
      .glow-border {
        box-shadow: 0 0 30px rgba(74, 222, 128, 0.3);
      }
      .hover-glow {
        transition: all 0.3s ease;
      }
      .hover-glow:hover {
        box-shadow: 0 0 40px rgba(74, 222, 128, 0.6);
      }
    `;
    document.head.appendChild(style);
    return () => {
      document.head.removeChild(style);
    };
  }, []);

  return (
    <div className="min-h-screen premium-bg relative overflow-hidden">
      {/* Animated Background */}
      <Particles />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-200/5 via-slate-300/5 to-slate-400/5 animate-pulse"></div>

      {/* Hero Section */}
      <div className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              {/* Floating Elements */}
              <motion.div
                className="absolute -top-10 -left-10 w-20 h-20 rounded-full bg-gradient-to-r from-slate-200 to-slate-300 blur-xl opacity-40"
                animate={{
                  y: [-10, 10, -10],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
              <motion.div
                className="absolute -bottom-5 -right-5 w-16 h-16 rounded-full bg-gradient-to-r from-slate-300 to-slate-400 blur-xl opacity-40"
                animate={{
                  y: [10, -10, 10],
                  scale: [1, 1.1, 1]
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />

              <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-slate-100 border border-slate-200 backdrop-blur-sm mb-8 relative z-10">
                <span className="material-symbols-outlined text-slate-800">architecture</span>
                <span className="text-slate-800 font-bold tracking-wider uppercase text-sm">Enterprise Digital Solutions</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-8 leading-[1.05] relative z-10 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
                Architecting
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-indigo-600 py-2">
                  Scalable Digital
                </span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 via-blue-600 to-indigo-600 py-2">
                  Growth
                </span>
                <span className="block font-medium text-slate-500">for Modern</span>
                <span className="block italic text-slate-900 underline decoration-slate-200 underline-offset-8">Businesses</span>
              </h1>

              <p className="text-xl md:text-2xl text-slate-600 max-w-2xl leading-relaxed mb-12 font-light relative z-10">
                We design intelligent digital ecosystems — CRM systems, AI automation, enterprise software,
                and performance-driven marketing strategies that help businesses scale faster and smarter.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 mb-16 relative z-10">
                <Link to="/join-contact">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#10b981] hover:bg-[#059669] text-white font-black px-8 py-5 rounded-3xl transition-all shadow-[0_20px_40px_-12px_rgba(16,185,129,0.3)] flex items-center justify-center gap-3 text-lg min-w-[280px]"
                  >
                    <span className="material-symbols-outlined font-bold">calendar_today</span>
                    <span className="whitespace-nowrap uppercase tracking-widest text-sm">Get Free Consultation</span>
                  </motion.button>
                </Link>
                <Link to="/book-demo">
                  <motion.button
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-black px-8 py-5 rounded-3xl transition-all shadow-[0_20px_40px_-12px_rgba(37,99,235,0.3)] flex items-center justify-center gap-3 text-lg min-w-[280px]"
                  >
                    <span className="material-symbols-outlined font-bold">smart_toy</span>
                    <span className="whitespace-nowrap uppercase tracking-widest text-sm">Book Free CRM Demo</span>
                  </motion.button>
                </Link>
              </div>
            </motion.div>

            {/* Right Side - Live Animated CRM Dashboard */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 1 }}
              className="relative z-20"
            >
              <LiveCRMDashboard />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Proven Results Section */}
      <div className="relative z-10 px-6 pt-10 pb-20 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              Proven Impact
            </h2>
            <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
              Real results from our partnerships with industry leaders
            </p>
          </div>

          {/* Main Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {metrics.map((metric, index) => {
              const [count, ref] = useAnimatedCounter(metric.value, 3000);
              const colors = [
                'from-blue-600 to-cyan-500',
                'from-purple-600 to-pink-600',
                'from-emerald-600 to-teal-600',
                'from-orange-600 to-red-600'
              ];
              return (
                <motion.div
                  key={index}
                  ref={ref}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, type: "spring", stiffness: 80 }}
                  whileHover={{ y: -10, borderColor: 'rgba(37,99,235,0.2)' }}
                  className="bg-white rounded-2xl p-8 border border-slate-200 text-center hover:shadow-2xl transition-all duration-700 relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${colors[index % colors.length]} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                  <div className={`text-6xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-r ${colors[index % colors.length]}`}>
                    {count}{metric.suffix}
                  </div>
                  <div className="text-slate-600 font-semibold text-lg">{metric.label}</div>
                </motion.div>
              );
            })}
          </div>

          {/* Achievement Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="relative"
          >
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="text-right">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="glass-card rounded-2xl p-6 border border-slate-200 backdrop-blur-sm inline-block shadow-lg"
                >
                  <div className="text-slate-900 font-bold text-2xl mb-2">500+</div>
                  <div className="text-slate-600">Enterprise Clients</div>
                </motion.div>
              </div>
              <div className="text-left">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="glass-card rounded-2xl p-6 border border-slate-200 backdrop-blur-sm inline-block shadow-lg"
                >
                  <div className="text-slate-800 font-bold text-2xl mb-2">1000+</div>
                  <div className="text-slate-600">Successful Projects</div>
                </motion.div>
              </div>

              <div className="text-right">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                  className="glass-card rounded-2xl p-6 border border-slate-200 backdrop-blur-sm inline-block shadow-lg"
                >
                  <div className="text-slate-900 font-bold text-2xl mb-2">99.9%</div>
                  <div className="text-slate-600">Client Retention</div>
                </motion.div>
              </div>
              <div className="text-left">
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 }}
                  className="glass-card rounded-2xl p-6 border border-slate-200 backdrop-blur-sm inline-block shadow-lg"
                >
                  <div className="text-slate-900 font-bold text-2xl mb-2">24/7</div>
                  <div className="text-slate-600">Expert Support</div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Industries We Serve */}
      <div className="relative z-10 px-6 py-20 bg-slate-50/50 border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-slate-600">Trusted by organizations across diverse sectors</p>
          </motion.div>

          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10, borderColor: 'rgba(37,99,235,0.2)' }}
                className="bg-white rounded-2xl p-6 border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-700 text-center relative overflow-hidden group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${industry.color} flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <span className="material-symbols-outlined text-white text-2xl">{industry.icon}</span>
                </div>
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-blue-600 transition-colors duration-500">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fresh Who We Serve Section */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-slate-900 mb-4">
              Trusted by Businesses Worldwide
            </h2>
            <p className="text-xl text-slate-600 mt-4 max-w-2xl mx-auto">
              From startups to Fortune 500 companies, we serve diverse industries globally
            </p>
          </div>

          {/* B2B & B2C Cards */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-slate-200 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="relative glass-card rounded-3xl p-10 border border-slate-200 backdrop-blur-sm hover:border-slate-400 transition-all duration-500 bg-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <span className="material-symbols-outlined text-white text-3xl">business</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">B2B Enterprises</h3>
                </div>
                <p className="text-slate-600 mb-6">Comprehensive solutions for enterprise-level organizations</p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    ...b2bClients,
                    "Technology Firms", "Financial Services", "Healthcare Systems", "Government Agencies",
                    "Manufacturing Companies", "Educational Institutions"
                  ].map((client, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl group-hover:bg-blue-50 transition-colors duration-300"
                    >
                      <span className="material-symbols-outlined text-blue-500 text-sm">check_circle</span>
                      <span className="text-slate-700 text-sm">{client}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-blue-600">
                    <span className="material-symbols-outlined text-sm">insights</span>
                    <span className="text-sm">Enterprise-grade solutions</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative group cursor-pointer">
              <div className="absolute inset-0 bg-slate-200 rounded-3xl blur-xl opacity-0 group-hover:opacity-40 transition-opacity duration-700"></div>
              <div className="relative glass-card rounded-3xl p-10 border border-slate-200 backdrop-blur-sm hover:border-slate-400 transition-all duration-500 bg-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
                    <span className="material-symbols-outlined text-white text-3xl">shopping_cart</span>
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">B2C Brands</h3>
                </div>
                <p className="text-slate-600 mb-6">Innovative digital experiences for consumer-facing brands</p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    ...b2cServices,
                    "Fashion Retailers", "Beauty Brands", "Fitness Companies", "Food & Beverage",
                    "Home Decor", "Electronics", "Jewelry", "Pet Care"
                  ].map((service, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-slate-50 rounded-xl group-hover:bg-purple-50 transition-colors duration-300"
                    >
                      <span className="material-symbols-outlined text-purple-500 text-sm">check_circle</span>
                      <span className="text-slate-700 text-sm">{service}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-6 pt-6 border-t border-slate-100">
                  <div className="flex items-center gap-2 text-purple-600">
                    <span className="material-symbols-outlined text-sm">trending_up</span>
                    <span className="text-sm">Growth-focused strategies</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Industry Sectors */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Startups", desc: "Early-stage innovation", icon: "rocket_launch", color: "bg-orange-500" },
              { title: "Enterprises", desc: "Large organization solutions", icon: "apartment", color: "bg-blue-500" },
              { title: "E-commerce", desc: "Online retail growth", icon: "shopping_cart", color: "bg-green-500" },
              { title: "Agencies", desc: "Creative & marketing", icon: "design_services", color: "bg-purple-500" }
            ].map((item, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-6 border border-slate-200 backdrop-blur-sm text-center group hover:border-slate-400 transition-all duration-300 cursor-pointer hover:-translate-y-1"
              >
                <div className={`w-14 h-14 ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4`}>
                  <span className="material-symbols-outlined text-white text-xl">{item.icon}</span>
                </div>
                <h4 className="font-bold text-slate-900 mb-2">{item.title}</h4>
                <p className="text-slate-500 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Strengths */}
      <div className="relative z-10 px-6 py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Core Strengths</h2>
            <p className="text-xl text-slate-600">Our expertise drives your success</p>
          </motion.div>

          {/* Core Strengths Grid (4x2) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreStrengths.map((strength, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-3xl p-8 border border-slate-200 transition-all duration-500 text-center relative overflow-hidden group shadow-xl hover:shadow-2xl h-full flex flex-col ${index === 0 ? 'hover:border-purple-500/50' :
                  index === 1 ? 'hover:border-blue-500/50' :
                    index === 2 ? 'hover:border-orange-500/50' :
                      index === 3 ? 'hover:border-emerald-500/50' :
                        index === 4 ? 'hover:border-red-500/50' :
                          index === 5 ? 'hover:border-pink-500/50' :
                            index === 6 ? 'hover:border-cyan-500/50' :
                              'hover:border-indigo-500/50'
                  }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${strength.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${strength.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-xl shadow-slate-200/50`}>
                  <span className="material-symbols-outlined text-white text-3xl">{strength.icon}</span>
                </div>
                <h3 className="text-xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors duration-500 tracking-tight">{strength.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed flex-grow">{strength.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fresh Innovation Journey Section */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative glass-card rounded-3xl p-10 border border-slate-200 backdrop-blur-sm bg-white">
                <h2 className="text-4xl font-bold text-slate-900 mb-6">
                  Innovation That Evolves With You
                </h2>
                <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                  Our adaptive solutions grow alongside your business — continuously evolving,
                  automatically optimizing, and intelligently scaling to meet tomorrow's challenges today.
                </p>

                <div className="space-y-4">
                  {[
                    { icon: "auto_awesome", text: "Smart Automation" },
                    { icon: "insights", text: "Predictive Analytics" },
                    { icon: "rocket_launch", text: "Rapid Deployment" },
                    { icon: "support_agent", text: "24/7 Expert Support" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 }}
                      whileHover={{ x: 10 }}
                      className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl border border-slate-100 hover:bg-blue-50 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-blue-50 text-blue-600 rounded-lg flex items-center justify-center border border-blue-100">
                        <span className="material-symbols-outlined text-blue-600 text-sm">{item.icon}</span>
                      </div>
                      <span className="text-slate-900 font-medium">{item.text}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative glass-card rounded-3xl p-8 border border-slate-200 backdrop-blur-sm bg-white">
                {!showPackages ? (
                  <>
                    <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Your Growth Journey</h3>

                    {/* Animated Timeline */}
                    <div className="relative space-y-8">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>

                      {[
                        { time: "Phase 1", title: "Launch", desc: "Quick deployment & setup", color: "bg-green-500" },
                        { time: "Phase 2", title: "Scale", desc: "Automatic growth features", color: "bg-blue-500" },
                        { time: "Phase 3", title: "Evolve", desc: "AI-powered optimizations", color: "bg-purple-500" },
                        { time: "Phase 4", title: "Dominate", desc: "Market leadership tools", color: "bg-cyan-500" }
                      ].map((phase, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 30 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: index * 0.2 }}
                          whileHover={{ scale: 1.02 }}
                          className="relative flex items-start gap-4"
                        >
                          <div className={`w-8 h-8 ${phase.color} rounded-full flex items-center justify-center flex-shrink-0`}>
                            <span className="text-white text-xs font-bold">{index + 1}</span>
                          </div>
                          <div className="flex-1">
                            <div className="text-sm text-slate-400">{phase.time}</div>
                            <div className="font-bold text-slate-900">{phase.title}</div>
                            <div className="text-slate-600 text-sm">{phase.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      className="mt-8 text-center"
                    >
                      <Link to="/crm-erp-solutions">
                        <motion.button
                          whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.25)" }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-bold px-8 py-4 rounded-full transition-all shadow-2xl text-lg flex items-center gap-3 mx-auto cursor-pointer"
                        >
                          <span className="material-symbols-outlined font-bold">stars</span>
                          <span className="font-black">Start Your Journey</span>
                          <span className="material-symbols-outlined font-bold">arrow_forward</span>
                        </motion.button>
                      </Link>
                    </motion.div>
                  </>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4 }}
                    className="max-h-[500px] overflow-y-auto pr-2"
                  >
                    {/* Header */}
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200 mb-4">
                        <span className="material-symbols-outlined text-slate-600 text-sm">apps</span>
                        <span className="text-slate-600 text-sm font-medium tracking-wider uppercase">CRM & ERP Solutions</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">Powerful Business Software</h3>
                      <p className="text-slate-500 text-sm">Complete solutions tailored for your business size</p>
                    </div>

                    {/* CRM/ERP Solutions by Business Size */}
                    <div className="space-y-4 mb-6">
                      {/* Small Business */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.1 }}
                        className="relative p-5 rounded-2xl bg-green-50 border border-green-100"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                            <span className="material-symbols-outlined text-white">storefront</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-slate-900">Small Business</h4>
                            <p className="text-green-600 text-xs">Startups & Growing Teams</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">Contact & Lead Management - Track all customer interactions</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">Basic Invoicing & Billing - Simple payment tracking</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">Task & Calendar Management - Organize your daily work</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-green-500 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">Email Integration - Connect with Gmail/Outlook</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Medium Business */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="relative p-5 rounded-2xl bg-blue-50 border border-blue-100"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-blue-500 flex items-center justify-center">
                            <span className="material-symbols-outlined text-white">business_center</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-slate-900">Medium Business</h4>
                            <p className="text-blue-600 text-xs">Established Companies</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-blue-500 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">Advanced CRM + ERP Integration - Complete business suite</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-blue-500 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">Inventory & Supply Chain Management - Track stock & orders</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-blue-500 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">HR & Payroll Management - Employee data & salaries</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-blue-500 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">Analytics Dashboard - Business insights & reports</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-blue-500 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">Multi-user Collaboration - Team access control</span>
                          </div>
                        </div>
                      </motion.div>

                      {/* Large Enterprise */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="relative p-5 rounded-2xl bg-purple-50 border border-purple-100"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-purple-500 flex items-center justify-center">
                            <span className="material-symbols-outlined text-white">corporate_fare</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-slate-900">Large Enterprise</h4>
                            <p className="text-purple-600 text-xs">Organizations with Complex Needs</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-purple-500 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">Full ERP Suite - Finance, HR, Operations, Sales unified</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-purple-500 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">Custom Module Development - Tailored to your workflow</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-purple-500 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">API Integrations - Connect with existing systems</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-purple-500 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">Advanced Security & Compliance - Data protection & GDPR</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-purple-500 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">AI-Powered Insights - Predictive analytics & automation</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-purple-500 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">24/7 Dedicated Support - Priority assistance & training</span>
                          </div>
                        </div>
                      </motion.div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col gap-3">
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => setShowContactForm(true)}
                        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-6 py-3 rounded-full transition-all shadow-xl text-base flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined font-bold">chat</span>
                        <span className="font-extrabold pb-0.5">Discuss Your Requirements</span>
                      </motion.button>
                      <button
                        onClick={() => setShowPackages(false)}
                        className="text-slate-500 text-sm hover:text-slate-900 transition-colors"
                      >
                        ← Back to Journey
                      </button>
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Success Stories */}
      <div className="relative z-10 px-6 py-20 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Success Stories</h2>
            <p className="text-xl text-slate-600">Real results from our valued clients</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="glass-card rounded-2xl p-8 border border-slate-200 backdrop-blur-sm bg-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-bold text-slate-900">{story.company}</h3>
                  <div className="text-3xl font-black text-green-600">{story.growth}</div>
                </div>
                <p className="text-slate-600 mb-4">{story.description}</p>
                <div className="flex items-center gap-4 text-sm text-slate-500">
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-green-500">schedule</span>
                    {story.time}
                  </span>
                  <span className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-blue-500">trending_up</span>
                    Growth
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Banner */}
      <div className="relative z-10 px-6 py-24 bg-slate-50 border-y border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-5xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>Ready to scale your business?</h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
              Join hundreds of successful businesses that have transformed their digital presence with Error Infotech.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/join-contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#2563eb] hover:bg-[#1d4ed8] text-white font-black px-12 py-5 rounded-full text-xl shadow-2xl shadow-blue-500/25 transition-all flex items-center justify-center gap-3"
                >
                  Start Your Journey
                  <span className="material-symbols-outlined font-bold">arrow_forward</span>
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
