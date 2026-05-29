import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ContactForm from '../components/ContactForm';
import FlowingMenu from '../components/FlowingMenu';

const GALAXY_FRAME_COUNT = 294; // Virtual steps for scroll locking


const Homepage = () => {
  // State for showing packages
  const [showPackages, setShowPackages] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);
  const homepageRef = useRef(null);
  const galaxyRef = useRef(null);
  const galaxyVideoRef = useRef(null);
  const galaxyCanvasRef = useRef(null);
  const galaxyIsSeekingRef = useRef(false);
  const galaxyRafRef = useRef(null);
  const galaxyBlobUrlRef = useRef(null);

  const galaxyFrameIndexRef = useRef(0);
  const galaxyTargetFrameRef = useRef(0);
  const galaxyRenderedFrameRef = useRef(0);
  const galaxyScrollAccumulatorRef = useRef(0);
  const galaxyTouchYRef = useRef(null);
  const [galaxyFrameIndex, setGalaxyFrameIndex] = useState(0);
  const [videoDuration, setVideoDuration] = useState(0);
  const [isVideoReady, setIsVideoReady] = useState(false);


  const galaxyFrameProgress = GALAXY_FRAME_COUNT > 1 ? galaxyFrameIndex / (GALAXY_FRAME_COUNT - 1) : 0;
  const galaxyPhaseSplit = 0.48;
  const galaxyNextGenOpacity = galaxyFrameProgress < galaxyPhaseSplit
    ? Math.max(0, Math.min(1, 1 - Math.max(galaxyFrameProgress - 0.34, 0) / 0.1))
    : 0;
  const galaxyEngineeringOpacity = galaxyFrameProgress > galaxyPhaseSplit
    ? Math.max(0, Math.min(1, (galaxyFrameProgress - galaxyPhaseSplit) / 0.07))
    : 0;
  const galaxyNextGenShift = Math.max(0, (galaxyFrameProgress - 0.3) / 0.14) * 24;
  const galaxyEngineeringShift = Math.max(0, 18 - galaxyEngineeringOpacity * 18);

  // Enhanced Animated Particles Component
  const Particles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
      const generateParticles = () => {
        const isMobile = window.innerWidth < 768;
        const count = isMobile ? 8 : 28;
        const newParticles = [];
        for (let i = 0; i < count; i++) {
          newParticles.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: isMobile ? (Math.random() * 20 + 20) : (Math.random() * 30 + 20),
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
            className={`absolute rounded-full bg-gradient-to-r from-slate-400/10 to-slate-500/10 ${particle.shape === 'square' ? 'rotate-45' :
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
    const [leadsData, setLeadsData] = useState([30, 45, 35, 55, 45, 65, 55, 75, 65, 80, 70, 85, 75, 90, 85]);
    const [conversionData, setConversionData] = useState([20, 25, 22, 30, 28, 35, 32, 40, 38, 45, 42, 50, 48, 55, 52]);
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

        if (Math.random() > 0.6) setLeads(prev => prev + Math.floor(Math.random() * 3) + 1);
        if (Math.random() > 0.4) setConversion(prev => {
          const change = (Math.random() * 0.8 - 0.4).toFixed(1);
          return Math.min(100, Math.max(60, +(prev + parseFloat(change)).toFixed(1)));
        });
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    // Smooth Area Chart Component
    const SmoothAreaChart = ({ data, color }) => {
      const width = 300;
      const height = 100;
      const step = width / (data.length - 1);

      const generatePath = (d) => {
        if (!d || d.length < 2) return "";
        return d.reduce((path, val, i, arr) => {
          const x = i * step;
          const y = height - (val / 100) * height;
          if (i === 0) return `M ${x} ${y}`;
          const cpX = (i - 1) * step + (x - (i - 1) * step) / 2;
          return `${path} C ${cpX} ${height - (arr[i - 1] / 100) * height}, ${cpX} ${y}, ${x} ${y}`;
        }, "");
      };

      const path = generatePath(data);

      return (
        <svg viewBox="0 0 300 100" className="w-full h-full overflow-visible">
          <defs>
            <linearGradient id="areaGrad" x1="0" y1="0" x2="0" y2="100%">
              <stop offset="0%" stopColor={color} stopOpacity="0.4" />
              <stop offset="100%" stopColor={color} stopOpacity="0" />
            </linearGradient>
          </defs>
          <motion.path
            d={`${path} L 300 100 L 0 100 Z`}
            animate={{ d: `${path} L 300 100 L 0 100 Z` }}
            fill="url(#areaGrad)"
            transition={{ duration: 1, ease: "easeInOut" }}
          />
          <motion.path
            d={path}
            animate={{ d: path }}
            fill="none" stroke={color} strokeWidth="3" strokeLinecap="round"
            transition={{ duration: 1, ease: "easeInOut" }}
          />

          {/* Live Tip Indicator */}
          {data.length > 0 && (
            <motion.g
              animate={{
                x: 300,
                y: 100 - (data[data.length - 1] / 100) * 100
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <circle r="4" fill={color} className="animate-pulse" />
              <circle r="8" fill={color} fillOpacity="0.2" className="animate-ping" />
            </motion.g>
          )}
        </svg>
      );
    };

    return (
      <div className="relative group perspective-1000 lg:-mt-32">
        <div className="absolute -inset-1 bg-gradient-to-r from-slate-200 to-slate-300 rounded-3xl blur-2xl opacity-20 group-hover:opacity-40 transition duration-1000"></div>
        <div className="relative rounded-3xl p-6 overflow-hidden">
          {/* Header */}
          <div className="flex items-center justify-between mb-8 pb-4 border-b border-slate-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-900/10 border border-slate-900/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-900">group</span>
              </div>
              <div>
                <div className="text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em]">Sales CRM</div>
                <div className="flex items-center gap-2">
                  <div className="text-xs font-bold text-slate-900 uppercase tracking-tight">Active Pipeline</div>
                  <div className="text-[10px] font-black text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">
                    {leads.toLocaleString()}
                  </div>
                  <div className="text-[10px] font-black text-slate-900 bg-slate-100 px-1.5 py-0.5 rounded">
                    {conversion}%
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg bg-slate-900/10 border border-slate-900/10">
              <span className="w-1.5 h-1.5 rounded-full bg-slate-900 animate-pulse"></span>
              <span className="text-[9px] font-bold text-slate-900 tracking-widest uppercase">● LIVE</span>
            </div>
          </div>

          {/* CRM Tabs Preview */}
          <div className="flex gap-2 mb-6">
            <div className="px-3 py-1.5 rounded-lg bg-slate-900 text-[9px] font-bold text-white cursor-pointer shadow-lg shadow-slate-900/20">LEADS</div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[9px] font-bold text-slate-400 cursor-not-allowed uppercase">Tasks</div>
            <div className="px-3 py-1.5 rounded-lg bg-slate-50 border border-slate-100 text-[9px] font-bold text-slate-400 cursor-not-allowed uppercase">Pipeline</div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-slate-100 flex items-center justify-center">
                <span className="material-symbols-outlined text-slate-900 text-sm">analytics</span>
              </div>
              <div>
                <div className="text-[9px] font-bold text-slate-400 underline-offset-2 uppercase tracking-widest">Performance</div>
                <div className="text-xs font-black text-slate-900 leading-none">Sales Monitoring</div>
              </div>
            </div>
            <div className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center cursor-pointer hover:bg-slate-50">
              <span className="material-symbols-outlined text-slate-400 text-sm">more_horiz</span>
            </div>
          </div>

          {/* Performance Metric */}
          <div className="mb-4">
            <div className="text-[10px] font-bold text-slate-400 uppercase mb-1">New Pipeline Value</div>
            <div className="flex items-center gap-3">
              <div className="flex items-baseline gap-1">
                <span className="material-symbols-outlined text-slate-900 text-lg font-black">keyboard_arrow_up</span>
                <motion.span
                  key={conversion}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-4xl font-black text-slate-900 tracking-tighter"
                >
                  {conversion}%
                </motion.span>
              </div>
              <div className="text-xs font-bold text-slate-900 bg-slate-100 px-2 py-0.5 rounded-full">+14</div>
            </div>
          </div>

          {/* Main Area Chart */}
          <div className="h-28 w-full relative mb-6">
            <SmoothAreaChart data={leadsData.slice(-12)} color="#10b981" />
          </div>

          {/* Sales Progress */}
          <div className="pt-4 border-t border-slate-50">
            <div className="flex justify-between items-end mb-2">
              <div>
                <div className="text-[10px] font-bold text-slate-500 uppercase">Total Orders</div>
                <div className="text-[9px] text-slate-400 font-medium">Last year expenses</div>
              </div>
              <motion.div
                key={leads}
                initial={{ opacity: 0.8 }}
                animate={{ opacity: 1 }}
                className="text-lg font-black text-slate-900"
              >
                ${leads.toLocaleString()}
              </motion.div>
            </div>
            <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-slate-900"
                animate={{ width: `${(leads / 2000) * 100}%` }}
                transition={{ duration: 1 }}
              />
            </div>
            <div className="flex justify-between mt-1 text-[9px] font-black text-slate-400">
              <span>YoY Growth</span>
              <span>100%</span>
            </div>
          </div>
        </div>

        {/* Activity Timeline Mini */}
        <div className="mt-4 p-4 rounded-2xl bg-slate-50 border border-slate-200">
          <div className="flex items-center gap-2 mb-3">
            <span className="material-symbols-outlined text-pink-500 text-sm">history</span>
            <span className="text-[10px] font-black text-slate-900 uppercase">Activity Log</span>
          </div>
          <div className="space-y-3">
            {[
              { time: "11:42", label: "New Tech Lead", color: "blue" },
              { time: "09:15", label: "Deal Closed", color: "blue" },
              { time: "Yesterday", label: "System Sync", color: "slate" }
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 relative">
                <div className={`w-1.5 h-1.5 rounded-full bg-${item.color}-500 relative z-10`} />
                <div className="text-[10px] font-bold text-slate-400 w-12">{item.time}</div>
                <div className="text-[10px] font-black text-slate-700">{item.label}</div>
                {i < 2 && <div className="absolute left-[2.5px] top-3 w-[1px] h-3 bg-slate-200" />}
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
    { label: 'System Uptime', value: 99.9, suffix: '%', color: 'text-slate-400' },
    { label: 'On-Time Delivery', value: 98, suffix: '%', color: 'text-slate-900' },
    { label: 'Client Revenue Growth', value: 3, suffix: 'X', color: 'text-slate-400' },
    { label: 'Operational Efficiency', value: 40, suffix: '%', color: 'text-slate-900' }
  ];

  const notificationMetrics = [
    { label: 'Enterprise Clients', value: 65, suffix: '+', color: 'text-slate-900' },
    { label: 'Successful Projects', value: 75, suffix: '+', color: 'text-slate-900' },
    { label: 'Client Retention', value: 99.9, suffix: '%', color: 'text-slate-900' },
    { label: 'Expert Support', value: 24, suffix: '/7', color: 'text-slate-900' }
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
    { title: 'Business Website', description: 'Brand presence, lead capture, and high-converting web journeys.', icon: 'language', color: 'from-slate-700 to-slate-900', accent: '#1e293b' },
    { title: 'Digital Marketing', description: 'SEO, content, social growth, branding, and audience engagement.', icon: 'hub', color: 'from-slate-600 to-slate-800', accent: '#334155' },
    { title: 'Performance Marketing', description: 'ROI-focused paid campaigns built for measurable conversions.', icon: 'trending_up', color: 'from-slate-500 to-slate-700', accent: '#475569' },
    { title: 'Physical Marketing', description: 'Local branding, field campaigns, and on-ground market presence.', icon: 'campaign', color: 'from-slate-700 to-slate-900', accent: '#0f172a' },
    { title: 'End to End Sales Support', description: 'Lead handling, follow-ups, CRM tracking, and close support.', icon: 'support_agent', color: 'from-slate-400 to-slate-600', accent: '#64748b' },
    { title: 'Graphical Development Services', description: 'Stunning visual identity and brand graphics', icon: 'palette', color: 'from-slate-500 to-slate-700', accent: '#475569' },
    { title: 'Collaboration & Project Management', description: 'Streamlined team collaboration and management tools', icon: 'groups', color: 'from-slate-300 to-slate-500', accent: '#94a3b8' },
    { title: 'Cloud & Cybersecurity Solutions', description: 'Secure infrastructure and data protection systems', icon: 'security', color: 'from-slate-800 to-slate-900', accent: '#1e293b' }
  ];

  const coreSignalPositions = [
    { left: '6%', top: '52px' },
    { left: '50%', bottom: '-20px', transform: 'translateX(-50%)' },
    { right: '6%', top: '52px' },
    { left: '6%', bottom: '52px' },
    { right: '6%', bottom: '52px' }
  ];

  // Industries We Serve
  const industries = [
    { name: 'Healthcare', icon: 'medical_services', color: 'from-slate-500 to-slate-700' },
    { name: 'Finance', icon: 'account_balance', color: 'from-slate-700 to-slate-900' },
    { name: 'Education', icon: 'school', color: 'from-slate-400 to-slate-600' },
    { name: 'Retail', icon: 'store', color: 'from-slate-600 to-slate-800' },
    { name: 'Manufacturing', icon: 'factory', color: 'from-slate-700 to-slate-900' },
    { name: 'Technology', icon: 'developer_board', color: 'from-slate-800 to-slate-950' }
  ];

  const industryMenuItems = industries.map((industry, index) => {
    const images = [
      '/images/insights-blog/healthcare.png',
      '/images/insights-blog/b2b-solutions.png',
      '/images/insights-blog/edutend.jpeg',
      '/images/insights-blog/b2c-solutions.png',
      '/images/frames/b2b_bg.png',
      '/images/insights-blog/ai-revolution.png'
    ];

    return {
      link: '#',
      text: industry.name,
      image: images[index % images.length],
      marqueeBgColor: index % 2 === 0 ? '#2563eb' : '#0f172a'
    };
  });

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

  useEffect(() => {
    const root = homepageRef.current;
    if (!root) return;

    const revealSections = Array.from(root.querySelectorAll('[data-home-reveal]'));
    if (revealSections.length === 0) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) {
      revealSections.forEach(section => section.classList.add('is-revealed'));
      return;
    }

    root.classList.add('home-reveal-ready');

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.16,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    revealSections.forEach((section, index) => {
      section.style.setProperty('--section-reveal-delay', `${Math.min(index * 55, 220)}ms`);
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
      root.classList.remove('home-reveal-ready');
    };
  }, []);

  // Advanced Video Preloader (Blob Caching)
  useEffect(() => {
    const videoPath = '/videos/home-galaxy-scroll-new.webm';
    let isMounted = true;

    fetch(videoPath)
      .then(res => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.blob();
      })
      .then(blob => {
        if (!isMounted) return;
        const url = URL.createObjectURL(blob);
        galaxyBlobUrlRef.current = url;
        if (galaxyVideoRef.current) {
          galaxyVideoRef.current.src = url;
        }
      })
      .catch(err => {
        console.error('Video preload failed, falling back to direct path:', err);
        if (isMounted && galaxyVideoRef.current) {
          galaxyVideoRef.current.src = videoPath;
        }
      });

    return () => {
      isMounted = false;
      if (galaxyBlobUrlRef.current) {
        URL.revokeObjectURL(galaxyBlobUrlRef.current);
      }
    };
  }, []);

  const handleVideoMetadata = (e) => {
    setVideoDuration(e.target.duration);
    setIsVideoReady(true);
  };


  useEffect(() => {
    const section = galaxyRef.current;
    if (!section) return;

    const clampFrame = frame => Math.min(Math.max(frame, 0), GALAXY_FRAME_COUNT - 1);

    const setFrame = frame => {
      const nextFrame = clampFrame(frame);
      galaxyTargetFrameRef.current = nextFrame;

      if (Math.abs(galaxyRenderedFrameRef.current - nextFrame) < 0.02) {
        galaxyRenderedFrameRef.current = nextFrame;
        galaxyFrameIndexRef.current = nextFrame;
        setGalaxyFrameIndex(currentFrame => (currentFrame === nextFrame ? currentFrame : nextFrame));
      }
    };

    let isSectionActive = false;
    let accumulatedDelta = 0;
    let lastTouchY = 0;

    const moveFrames = delta => {
      const nextFrame = clampFrame(galaxyTargetFrameRef.current + delta);
      setFrame(nextFrame);
      return nextFrame;
    };

    const handleWheel = event => {
      if (!isSectionActive) return;

      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const currentFrame = galaxyTargetFrameRef.current;
      const scrollingDown = event.deltaY > 0;
      const scrollingUp = event.deltaY < 0;

      const isInSweetSpot = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;

      if (isInSweetSpot) {
        const shouldLock =
          (scrollingDown && currentFrame < GALAXY_FRAME_COUNT - 1) ||
          (scrollingUp && currentFrame > 0);

        if (shouldLock) {
          event.preventDefault();
          accumulatedDelta += event.deltaY;

          if (Math.abs(accumulatedDelta) > 10) {
            const deltaFrames = (accumulatedDelta / 100) * 15.0;
            moveFrames(deltaFrames);
            accumulatedDelta = 0;
          }
        }
      }
    };

    const handleTouchStart = event => {
      if (isSectionActive) {
        lastTouchY = event.touches[0].clientY;
      }
    };

    const handleTouchMove = event => {
      if (!isSectionActive) return;

      const currentY = event.touches[0].clientY;
      const deltaY = lastTouchY - currentY;
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const currentFrame = galaxyTargetFrameRef.current;

      const scrollingDown = deltaY > 0;
      const scrollingUp = deltaY < 0;

      const isInSweetSpot = rect.top < windowHeight * 0.8 && rect.bottom > windowHeight * 0.2;

      if (isInSweetSpot) {
        const shouldLock =
          (scrollingDown && currentFrame < GALAXY_FRAME_COUNT - 1) ||
          (scrollingUp && currentFrame > 0);

        if (shouldLock) {
          event.preventDefault();
          moveFrames(deltaY * 0.15); // Fine-tuned for 5-6 scrolls
        }
      }

      lastTouchY = currentY;
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isSectionActive = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: false });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      observer.disconnect();
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  useEffect(() => {
    const animateFrame = () => {
      const targetFrame = galaxyTargetFrameRef.current;
      const currentFrame = galaxyRenderedFrameRef.current;
      const delta = targetFrame - currentFrame;

      let nextFrame = currentFrame + delta * 0.06;
      if (Math.abs(delta) < 0.02) {
        nextFrame = targetFrame;
      }

      galaxyRenderedFrameRef.current = nextFrame;
      const roundedFrame = Math.round(nextFrame);
      if (roundedFrame !== galaxyFrameIndexRef.current) {
        galaxyFrameIndexRef.current = roundedFrame;
        setGalaxyFrameIndex(prev => (prev === roundedFrame ? prev : roundedFrame));

        // Smooth scrubbing with seeking guard
        if (galaxyVideoRef.current && videoDuration && !galaxyIsSeekingRef.current) {
          const progress = nextFrame / (GALAXY_FRAME_COUNT - 1);
          const targetTime = progress * videoDuration;

          // Only seek if the difference is meaningful to prevent micro-stutter
          if (Math.abs(galaxyVideoRef.current.currentTime - targetTime) > 0.01) {
            galaxyIsSeekingRef.current = true;
            galaxyVideoRef.current.currentTime = targetTime;
          }
        }
      }



      galaxyRafRef.current = window.requestAnimationFrame(animateFrame);
    };

    galaxyRafRef.current = window.requestAnimationFrame(animateFrame);

    const handleSeeked = () => {
      galaxyIsSeekingRef.current = false;
      drawCurrentFrame();
    };

    const drawCurrentFrame = () => {
      const video = galaxyVideoRef.current;
      const canvas = galaxyCanvasRef.current;
      if (!video || !canvas) return;

      const ctx = canvas.getContext('2d', { alpha: false });
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 3); // Support up to 3x for Retina/4K screens
      const width = Math.floor(rect.width * dpr);
      const height = Math.floor(rect.height * dpr);

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }

      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';

      // Enhance clarity with subtle contrast and sharpening
      ctx.filter = 'contrast(1.08) saturate(1.05) brightness(1.02)';

      const videoAspect = video.videoWidth / video.videoHeight || 16 / 9;
      const canvasAspect = width / height;
      const zoom = 1.02 + (galaxyRenderedFrameRef.current / GALAXY_FRAME_COUNT) * 0.02;

      let drawWidth, drawHeight;
      if (videoAspect > canvasAspect) {
        drawHeight = height * zoom;
        drawWidth = drawHeight * videoAspect;
      } else {
        drawWidth = width * zoom;
        drawHeight = drawWidth / videoAspect;
      }

      ctx.drawImage(video, (width - drawWidth) / 2, (height - drawHeight) / 2, drawWidth, drawHeight);
    };

    const video = galaxyVideoRef.current;
    if (video) {
      video.addEventListener('seeked', handleSeeked);
      // Fallback for browsers that don't emit seeked quickly enough
      if (video.requestVideoFrameCallback) {
        const frameCallback = () => {
          drawCurrentFrame();
          video.requestVideoFrameCallback(frameCallback);
        };
        video.requestVideoFrameCallback(frameCallback);
      }
    }

    return () => {
      if (galaxyRafRef.current) {
        window.cancelAnimationFrame(galaxyRafRef.current);
      }
      if (video) {
        video.removeEventListener('seeked', handleSeeked);
      }
    };
  }, [videoDuration]);



  // Removed legacy canvas drawing effect


  return (
    <div ref={homepageRef} className="homepage-monochrome min-h-screen bg-white relative w-full overflow-x-hidden">
      {/* BACKGROUND ELEMENTS - CROSS PATTERN */}
      {/* Background set to pure white via parent class */}

      {/* Hero Section */}
      <div data-home-reveal className="relative z-10">
        <section className="hero-home-section relative min-h-[760px] lg:min-h-[calc(100vh+80px)] xl:min-h-[calc(100vh+120px)] overflow-hidden bg-transparent">
          <div className="hero-home-bg-content absolute inset-0 z-0 flex items-center justify-center pointer-events-none">
            {/* Removed blue blur */}
          </div>
          <video
            className="hero-home-video absolute -inset-y-0 -inset-x-[5%] h-full w-[110%] max-w-[110%] object-cover object-[50%_bottom] md:object-[45%_bottom] mix-blend-multiply pointer-events-none scale-[1.5] translate-x-[8%] -translate-y-[10%] md:scale-[1.85] md:translate-x-[10%] md:-translate-y-[12%]"
            src="/videos/hero-full-background.mp4"
            autoPlay
            muted
            playsInline
            preload="auto"
            aria-hidden="true"
          />
          <div className="hero-home-wash absolute inset-0 bg-gradient-to-r from-white/90 via-white/50 to-black/5 pointer-events-none" />
          <div className="hero-home-fade absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-white/30 pointer-events-none" />

          <div className="hero-home-inner relative z-20 flex min-h-[760px] items-center justify-center px-6 py-20 sm:px-10 lg:min-h-[calc(100vh+80px)] lg:px-16 xl:min-h-[calc(100vh+120px)]">
            {/* Center Content */}
            <motion.div
              initial="hidden"
              animate="visible"
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    delayChildren: 7.2,
                    staggerChildren: 0.15
                  }
                }
              }}
              className="hero-home-copy relative mx-auto w-full max-w-4xl px-6 text-center"
            >
              {/* Floating Elements */}
              <motion.div
                className="hidden"
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
                className="hidden"
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

              <h1 className="hero-home-title relative z-10 mb-6 font-sora text-3xl font-semibold leading-[1.1] text-slate-950 sm:text-4xl md:text-5xl lg:text-6xl lg:leading-[0.98]">
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  Architecting
                </motion.span>
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  Scalable Digital
                </motion.span>
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  Success
                </motion.span>
                <motion.span
                  variants={{
                    hidden: { opacity: 0, y: 20, filter: 'blur(10px)' },
                    visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                  }}
                  transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                  className="block text-gray-500"
                >
                  for Modern Businesses
                </motion.span>
              </h1>

              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 15, filter: 'blur(8px)' },
                  visible: { opacity: 1, y: 0, filter: 'blur(0px)' }
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="hero-home-desc mx-auto mb-10 max-w-2xl font-normal leading-relaxed text-slate-600 px-4 text-sm sm:text-base md:text-lg"
              >
                Precision-engineered platforms for high-growth enterprises and disruptive startups.
              </motion.p>

              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
              >
                <Link to="/join-contact">
                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full max-w-[280px] rounded-full border border-slate-950/15 bg-white/78 px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-950 shadow-sm backdrop-blur-md transition-all hover:bg-white sm:w-auto sm:px-6 sm:py-2.5 sm:text-[10px]"
                  >
                    <span className="whitespace-nowrap">Get Free Consultation</span>
                  </motion.button>
                </Link>
                <Link to="/book-demo">
                  <motion.button
                    whileHover={{ scale: 1.04, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full max-w-[280px] rounded-full border border-slate-950/15 bg-white/45 px-4 py-3 text-[10px] font-bold uppercase tracking-widest text-slate-950 shadow-sm backdrop-blur-md transition-all hover:bg-white sm:w-auto sm:px-6 sm:py-2.5 sm:text-[10px]"
                  >
                    <span className="whitespace-nowrap">Book Free CRM Demo</span>
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>

          </div>
        </section>
      </div>


      {/* Proven Results Section */}
      <section data-home-reveal className="relative z-10 min-h-[720px] overflow-hidden bg-transparent px-6 pt-12 pb-24 md:pt-4 -mt-16 md:mt-8 lg:-mt-32">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />
        <div className="mx-auto flex min-h-[560px] max-w-6xl flex-col justify-center relative z-10">
          <div className="mb-14 text-center">
            <h2 className="text-4xl sm:text-5xl md:text-6xl heading-premium text-black mb-4 heading-underline active">
              Proven <span className="text-gray-400">Impact</span>
            </h2>
            <p className="text-lg sm:text-xl text-slate-500 mt-4 max-w-2xl mx-auto font-medium px-4">
              Real results from our partnerships with industry leaders
            </p>
          </div>

          <div className="proven-impact-grid grid items-center justify-between gap-16 md:gap-20 lg:gap-[8rem] xl:gap-[14rem] lg:grid-cols-[230px_minmax(0,720px)]">
            <div className="proven-impact-stats grid grid-cols-2 gap-4 sm:gap-8 md:block md:space-y-9">
              {metrics.map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, x: -24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.11, duration: 0.95, ease: [0.22, 1, 0.36, 1] }}
                  className="notification-stat-row p-2 md:p-0 bg-transparent rounded-2xl md:border-0"
                >
                  <div className={`font-sora text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight text-black`}>
                    {metric.value}{metric.suffix}
                  </div>
                  <div className="mt-1 md:mt-2 text-[9px] md:text-[10px] font-bold uppercase tracking-tight text-slate-400">
                    {metric.label}
                  </div>
                  <span className="notification-stat-dot hidden md:block" />
                </motion.div>
              ))}
            </div>

            <div className="notification-stack relative min-h-[300px] sm:min-h-[420px] scale-[0.8] sm:scale-100">
              <div className="notification-stream-bg" aria-hidden="true">
                <span className="notification-stream-line notification-stream-line-1" />
                <span className="notification-stream-line notification-stream-line-2" />
                <span className="notification-stream-dot notification-stream-dot-1" />
                <span className="notification-stream-dot notification-stream-dot-2" />
                <span className="notification-stream-dot notification-stream-dot-3" />
              </div>
              {notificationMetrics.map((metric, index) => (
                <motion.div
                  key={`notification-${metric.label}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? 180 : -180, y: 14, filter: 'blur(10px)' }}
                  whileInView={{ opacity: 1, x: 0, y: 0, filter: 'blur(0px)' }}
                  viewport={{ once: true, amount: 0.32 }}
                  transition={{ delay: 0.14 + index * 0.11, duration: 1.25, ease: [0.22, 1, 0.36, 1] }}
                  className={`notification-pill notification-pill-${index + 1} ${index % 2 === 0 ? 'notification-from-right' : 'notification-from-left'}`}
                >
                  <span className="notification-knob" />
                  <span className="notification-pill-label">
                    <span className={`notification-pill-value ${metric.color}`}>{metric.value}{metric.suffix}</span>
                    <span>{metric.label}</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries We Serve */}
      <div data-home-reveal className="relative z-10 px-6 py-16 bg-transparent border-y border-slate-100">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl heading-premium text-black mb-4 heading-underline active">Industries We <span className="text-gray-500">Serve</span></h2>
            <p className="text-xl text-slate-500 font-medium">Trusted by organizations across diverse sectors</p>
          </motion.div>

          <div className="relative left-1/2 h-[380px] sm:h-[480px] md:h-[560px] w-screen -translate-x-1/2 overflow-hidden">
            <FlowingMenu
              items={industryMenuItems}
              speed={13}
              textColor="#0f172a"
              bgColor="#f1f5f9"
              marqueeBgColor="#0f172a"
              marqueeTextColor="#ffffff"
              borderColor="rgba(15,23,42,0.12)"
            />
          </div>
        </div>
      </div>

      {/* Fresh Who We Serve Section */}
      <div data-home-reveal className="relative z-10 px-6 py-20">
        <div className="max-w-7xl mx-auto">
          <div className="trusted-text-loop relative left-1/2 z-10 mb-20 w-screen -translate-x-1/2 overflow-hidden py-10">
            <div className="trusted-text-track trusted-text-track-left">
              {[...Array(4)].map((_, index) => (
                <div key={`trusted-title-${index}`} className="trusted-text-group">
                  <span>Trusted by Businesses</span>
                  <span className="trusted-text-muted">Worldwide</span>
                </div>
              ))}
            </div>
            <div className="trusted-text-track trusted-text-track-right">
              {[...Array(4)].map((_, index) => (
                <div key={`trusted-copy-${index}`} className="trusted-copy-group">
                  From startups to Fortune 500 companies, we serve diverse industries globally
                </div>
              ))}
            </div>
          </div>

          <div className="audience-map mb-20">

            <motion.div
              initial={{ opacity: 0, x: -42 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="audience-column audience-column-b2b"
            >
              <div className="audience-heading">
                <span className="audience-icon audience-icon-b2b">
                  <span className="material-symbols-outlined">business</span>
                </span>
                <div>
                  <h3>B2B Enterprises</h3>
                  <p>Comprehensive solutions for enterprise-level organizations</p>
                </div>
              </div>

              <div className="audience-list">
                {[
                  ...b2bClients,
                  "Technology Firms", "Financial Services", "Healthcare Systems", "Government Agencies",
                  "Manufacturing Companies", "Educational Institutions"
                ].map((client, index) => (
                  <motion.div
                    key={client}
                    initial={{ opacity: 0, x: -22 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.035, duration: 0.45 }}
                    whileHover={{ x: 8 }}
                    className="audience-item audience-item-b2b"
                  >
                    <span className="material-symbols-outlined text-slate-400">check_circle</span>
                    <span>{client}</span>
                  </motion.div>
                ))}
              </div>

              <div className="audience-footnote">
                <span className="material-symbols-outlined">insights</span>
                <span>Enterprise-grade digital infrastructure</span>
              </div>
            </motion.div>

            <div className="audience-divider" aria-hidden="true">
              <span />
              <strong>Serve</strong>
              <span />
            </div>

            <motion.div
              initial={{ opacity: 0, x: 42 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="audience-column audience-column-b2c"
            >
              <div className="audience-heading">
                <span className="audience-icon audience-icon-b2c">
                  <span className="material-symbols-outlined">shopping_cart</span>
                </span>
                <div>
                  <h3>B2C Brands</h3>
                  <p>Innovative digital experiences for consumer-facing brands</p>
                </div>
              </div>

              <div className="audience-list">
                {[
                  ...b2cServices,
                  "Fashion Retailers", "Beauty Brands", "Fitness Companies", "Food & Beverage",
                  "Home Decor", "Electronics", "Jewelry", "Pet Care"
                ].map((service, index) => (
                  <motion.div
                    key={service}
                    initial={{ opacity: 0, x: 22 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.035, duration: 0.45 }}
                    whileHover={{ x: -8 }}
                    className="audience-item audience-item-b2c"
                  >
                    <span className="material-symbols-outlined text-slate-400">check_circle</span>
                    <span>{service}</span>
                  </motion.div>
                ))}
              </div>

              <div className="audience-footnote audience-footnote-b2c">
                <span className="material-symbols-outlined">trending_up</span>
                <span>Scalable Consumer Growth Engines</span>
              </div>
            </motion.div>
          </div>

          <div className="audience-sector-strip">
            {[
              { title: "Startups", desc: "Early-stage innovation", icon: "rocket_launch", color: "bg-gradient-to-br from-slate-800 to-slate-600" },
              { title: "Enterprises", desc: "Large organization solutions", icon: "apartment", color: "bg-gradient-to-br from-slate-800 to-slate-600" },
              { title: "E-commerce", desc: "Online retail growth", icon: "shopping_cart", color: "bg-gradient-to-br from-slate-800 to-slate-600" },
              { title: "Agencies", desc: "Creative & marketing", icon: "design_services", color: "bg-gradient-to-br from-slate-800 to-slate-600" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: [390, 130, -130, -390][index],
                  y: [34, 12, -12, -34][index],
                  rotate: [-8, -3, 3, 8][index],
                  scale: 0.86
                }}
                whileInView={{
                  opacity: 1,
                  x: 0,
                  y: 0,
                  rotate: 0,
                  scale: 1
                }}
                viewport={{ once: true, amount: 0.45 }}
                transition={{
                  delay: index * 0.08,
                  duration: 0.9,
                  ease: [0.16, 1, 0.3, 1]
                }}
                whileHover={{ y: -8, scale: 1.04 }}
                className="audience-sector-marker"
              >
                <div className={`audience-sector-icon ${item.color}`}>
                  <span className="material-symbols-outlined text-white text-xl">{item.icon}</span>
                </div>
                <div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Core Strengths */}
      <div data-home-reveal className="relative z-10 overflow-hidden px-0 py-20 bg-transparent">
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12 px-4"
          >
            <h2 className="text-4xl sm:text-5xl md:text-6xl heading-premium text-black mb-6 pb-6 tracking-tight heading-underline active">Core <span className="text-gray-400 pb-2">Strengths</span></h2>
            <p className="text-lg sm:text-xl text-slate-500 font-normal">Our expertise drives your success</p>
          </motion.div>

          {/* Desktop Version: Complex Map */}
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="core-signal-map hidden lg:block"
          >
            <div className="core-signal-grid"></div>
            <svg className="core-signal-lines" viewBox="0 0 1000 520" aria-hidden="true">
              <path className="core-signal-path core-signal-path-1" d="M500 260 C395 145 245 94 118 86" />
              <path className="core-signal-path core-signal-path-2" d="M500 260 C500 348 500 418 500 490" />
              <path className="core-signal-path core-signal-path-3" d="M500 260 C605 145 755 94 882 86" />
              <path className="core-signal-path core-signal-path-4" d="M500 260 C384 338 252 392 118 402" />
              <path className="core-signal-path core-signal-path-5" d="M500 260 C616 338 748 392 882 402" />
              <circle className="core-signal-endpoint" cx="118" cy="86" r="5" />
              <circle className="core-signal-endpoint" cx="500" cy="490" r="5" />
              <circle className="core-signal-endpoint" cx="882" cy="86" r="5" />
              <circle className="core-signal-endpoint" cx="118" cy="402" r="5" />
              <circle className="core-signal-endpoint" cx="882" cy="402" r="5" />
            </svg>

            <motion.div
              className="core-signal-center"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="core-signal-center-ring"></div>
              <div className="core-signal-center-core scale-110">
                <span className="material-symbols-outlined">auto_awesome</span>
                <strong>Growth Engine</strong>
                <small className="font-normal text-slate-400">strategy + execution</small>
              </div>
            </motion.div>

            {coreStrengths.slice(0, 5).map((strength, index) => (
              <div
                key={strength.title}
                className={`core-signal-node-anchor core-signal-node-anchor-${index + 1}`}
                style={coreSignalPositions[index]}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.82, y: 34 }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                    y: [0, index % 2 === 0 ? -10 : 10, 0]
                  }}
                  viewport={{ once: false, amount: 0.35 }}
                  transition={{
                    delay: index * 0.1,
                    opacity: { duration: 0.45 },
                    scale: { duration: 0.45 },
                    y: { duration: 4.2 + index * 0.25, repeat: Infinity, ease: 'easeInOut' }
                  }}
                  whileHover={{ scale: 1.06 }}
                  className="core-signal-node"
                  style={{ '--node-accent': strength.accent }}
                >
                  <div className="core-signal-node-orb">
                    <span className="material-symbols-outlined">{strength.icon}</span>
                  </div>
                  <div className="core-signal-node-copy">
                    <h3>{strength.title}</h3>
                    <p>{strength.description}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </motion.div>

          {/* Mobile Version: Simple Grid */}
          <div className="lg:hidden grid gap-6 sm:grid-cols-2 px-2">
            {coreStrengths.slice(0, 5).map((strength, index) => (
              <motion.div
                key={strength.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-3xl bg-slate-50 border border-slate-100 flex flex-col gap-4"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shadow-sm">
                  <span className="material-symbols-outlined text-slate-600">{strength.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">{strength.title}</h3>
                  <p className="text-sm text-slate-500 font-medium leading-relaxed">{strength.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Fresh Innovation Journey Section */}
      <div data-home-reveal className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="innovation-no-border relative rounded-3xl p-10">
                <h2 className="text-4xl font-black text-slate-900 mb-6 pb-2 tracking-tight">
                  Innovation That <span className="text-slate-400">Evolves With You</span>
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
                      className="flex items-center gap-4 p-4 bg-slate-50 rounded-xl hover:bg-slate-100 transition-all duration-300"
                    >
                      <div className="w-10 h-10 bg-slate-100 text-slate-400 rounded-lg flex items-center justify-center">
                        <span className="material-symbols-outlined text-slate-400 text-sm">{item.icon}</span>
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
              <div className="innovation-no-border relative glass-card rounded-3xl p-8 backdrop-blur-sm bg-white shadow-2xl shadow-slate-200/50">
                {!showPackages ? (
                  <>
                    <h3 className="text-2xl font-black text-slate-900 mb-6 text-center">
                      Your <span className="text-slate-400">Growth Journey</span>
                    </h3>

                    {/* Animated Timeline */}
                    <div className="relative space-y-8">
                      <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-slate-200"></div>

                      {[
                        { time: "Phase 1", title: "Launch", desc: "Quick deployment & setup", color: "bg-gradient-to-br from-slate-800 to-slate-600" },
                        { time: "Phase 2", title: "Scale", desc: "Automatic growth features", color: "bg-gradient-to-br from-slate-800 to-slate-600" },
                        { time: "Phase 3", title: "Evolve", desc: "AI-powered optimizations", color: "bg-gradient-to-br from-slate-800 to-slate-600" },
                        { time: "Phase 4", title: "Dominate", desc: "Market leadership tools", color: "bg-gradient-to-br from-slate-800 to-slate-600" }
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
                            <div className="font-black text-slate-900 uppercase tracking-wider text-xs mb-0.5">{phase.time}</div>
                            <div className="font-extrabold text-slate-900 uppercase tracking-tight">{phase.title}</div>
                            <div className="text-slate-700 text-sm font-normal">{phase.desc}</div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 }}
                      className="mt-8 flex justify-center w-full"
                    >
                      <Link to="/crm-erp-solutions" className="inline-block">
                        <motion.button
                          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)" }}
                          whileTap={{ scale: 0.95 }}
                          className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-500 text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg text-lg flex items-center gap-3 cursor-pointer border border-white/20"
                        >
                          <span className="material-symbols-outlined font-bold">stars</span>
                          <span className="font-bold">Start Your Journey</span>
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
                      <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 mb-2 pb-2">Powerful Business Software</h3>
                      <p className="text-slate-500 text-xs font-normal">Complete solutions tailored for your business size</p>
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
                            <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-green-900">Small Business</h4>
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
                        className="relative p-5 rounded-2xl bg-slate-50 border border-slate-100"
                      >
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-12 h-12 rounded-xl bg-slate-900 flex items-center justify-center">
                            <span className="material-symbols-outlined text-white">business_center</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-400">Medium Business</h4>
                            <p className="text-slate-400 text-xs">Established Companies</p>
                          </div>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-slate-400 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">Advanced CRM + ERP Integration - Complete business suite</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-slate-400 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">Inventory & Supply Chain Management - Track stock & orders</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-slate-400 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">HR & Payroll Management - Employee data & salaries</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-slate-400 text-sm mt-0.5">check_circle</span>
                            <span className="text-slate-600 text-sm">Analytics Dashboard - Business insights & reports</span>
                          </div>
                          <div className="flex items-start gap-2">
                            <span className="material-symbols-outlined text-slate-400 text-sm mt-0.5">check_circle</span>
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
                            <h4 className="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-purple-900">Large Enterprise</h4>
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
                        className="w-full bg-slate-900 text-white font-bold px-6 py-3 rounded-full transition-all shadow-xl text-base flex items-center justify-center gap-2"
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
      <div data-home-reveal className="success-stories-section relative z-10 overflow-hidden px-6 py-20 bg-white">

        <div className="relative z-10 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-black mb-6 pb-2">Success <span className="text-gray-500">Stories</span></h2>
            <p className="text-2xl text-slate-600 font-medium tracking-tight">Real results from our valued clients</p>
          </motion.div>

          <div className="success-stories-timeline relative mx-auto max-w-5xl">
            {successStories.map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -44 : 44 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className={`success-story-row ${index % 2 === 0 ? 'success-story-row-left' : 'success-story-row-right'}`}
                style={{ '--story-index': index }}
              >
                <span className="success-story-node" aria-hidden="true" />
                <div className="success-story-content">
                  <div className="success-story-index">0{index + 1}</div>
                  <div className="min-w-0">
                    <h3 className="text-2xl font-bold text-slate-900 pb-1">{story.company}</h3>
                    <p className="text-slate-600 text-lg font-medium leading-relaxed">{story.description}</p>
                    <div className="mt-5 flex flex-wrap items-center gap-4 text-sm font-semibold text-slate-500">
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-500">schedule</span>
                        {story.time}
                      </span>
                      <span className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-slate-400">trending_up</span>
                        Growth
                      </span>
                    </div>
                  </div>
                  <div className="success-story-growth">{story.growth}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Banner */}
      <div data-home-reveal className="relative z-10 px-6 py-24 bg-transparent border-y border-slate-100 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-5"></div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-8 text-black tracking-tighter pb-4 px-4">Ready to scale your <span className="text-gray-500">business?</span></h2>
            <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto font-medium">
              Join hundreds of successful businesses that have transformed their digital presence with Error Infotech.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link to="/join-contact">
                <motion.button
                  whileHover={{ scale: 1.05, y: -5, boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-500 text-white font-bold px-12 py-5 rounded-full text-xl shadow-lg transition-all flex items-center justify-center gap-3 border border-white/20"
                >
                  Start Your Journey
                  <span className="pl-5px material-symbols-outlined font-bold">arrow_forward</span>
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
