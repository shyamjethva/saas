import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import ConsultationBanner from '../components/ConsultationBanner';
import { contactAPI } from '../services/api';

// Modal Component for Contact Forms
const ContactModal = ({ isOpen, onClose, formType }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: formType,
    message: '',
    projectType: '',
    budget: '',
    timeline: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Format phone number by removing spaces and special characters
      const formattedPhone = formData.phone.replace(/\s+/g, '').replace(/[^0-9+]/g, '');

      const submitData = {
        ...formData,
        phone: formattedPhone,
        service: formType,
        source: 'Homepage Modal'
      };

      const response = await contactAPI.submitContact(submitData);

      if (response.data.success) {
        alert('✅ Success! We\'ll contact you within 24 hours. Thank you for your inquiry!');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: formType,
          message: '',
          projectType: '',
          budget: '',
          timeline: ''
        });
        onClose();
      } else {
        setSubmitError(response.data.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      if (error.response?.data?.details) {
        setSubmitError(`Error: ${error.response.data.details.join(', ')}`);
      } else {
        setSubmitError('Network error. Please try again or contact us directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  const getTitle = () => {
    switch (formType) {
      case 'Free Consultation': return 'Get Free Consultation';
      case 'CRM Demo': return 'Book Free CRM Demo';
      case 'Business Transformation': return 'Transform My Business Now';
      default: return 'Contact Us';
    }
  };

  const getDescription = () => {
    switch (formType) {
      case 'Free Consultation': return 'Get expert business advice from our consultants';
      case 'CRM Demo': return 'See our CRM in action with a personalized demo';
      case 'Business Transformation': return 'Start your digital transformation journey';
      default: return 'Contact our team';
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-md">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-white rounded-consistent-2xl border border-slate-200 shadow-2xl"
      >
        <div className="sticky top-0 z-10 bg-white border-b border-slate-100 p-8">
          <div className="flex justify-between items-start">
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-2 tracking-tighter">{getTitle()}</h2>
              <p className="text-blue-600 font-bold uppercase tracking-wider text-sm">{getDescription()}</p>
            </div>
            <button
              onClick={onClose}
              className="text-slate-400 hover:text-slate-900 transition-colors p-2 rounded-lg hover:bg-slate-50"
            >
              <span className="material-symbols-outlined text-2xl font-black">close</span>
            </button>
          </div>
        </div>

        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <label className="block text-slate-900 font-black text-sm uppercase tracking-widest mb-3">Full Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-consistent-lg text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all font-medium"
                  placeholder="John Smith"
                />
              </div>
              <div>
                <label className="block text-slate-900 font-black text-sm uppercase tracking-widest mb-3">Email Address *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-consistent-lg text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all font-medium"
                  placeholder="john@company.com"
                />
              </div>
              <div>
                <label className="block text-slate-900 font-black text-sm uppercase tracking-widest mb-3">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-consistent-lg text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all font-medium"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-slate-900 font-black text-sm uppercase tracking-widest mb-3">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-consistent-lg text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all font-medium"
                  placeholder="Your Company Ltd"
                />
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Project Type</label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                >
                  <option value="" className="bg-slate-800">Select project type</option>
                  <option value="Web Development" className="bg-slate-800">Web Development</option>
                  <option value="Mobile App" className="bg-slate-800">Mobile App</option>
                  <option value="CRM System" className="bg-slate-800">CRM System</option>
                  <option value="AI/ML Solution" className="bg-slate-800">AI/ML Solution</option>
                  <option value="Cloud Solution" className="bg-slate-800">Cloud Solution</option>
                  <option value="Security Audit" className="bg-slate-800">Security Audit</option>
                  <option value="Other" className="bg-slate-800">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-white font-medium mb-2">Budget Range</label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-lg text-white focus:border-green-500 focus:outline-none transition-colors"
                >
                  <option value="" className="bg-slate-800">Select budget range</option>
                  <option value="Under ₹1L" className="bg-slate-800">Under ₹1L</option>
                  <option value="₹1L - ₹5L" className="bg-slate-800">₹1L - ₹5L</option>
                  <option value="₹5L - ₹20L" className="bg-slate-800">₹5L - ₹20L</option>
                  <option value="Over ₹20L" className="bg-slate-800">Over ₹20L</option>
                  <option value="Confidential" className="bg-slate-800">Confidential</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-slate-900 font-black text-sm uppercase tracking-widest mb-3">Project Details *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-5 py-4 bg-slate-50 border border-slate-200 rounded-consistent-lg text-slate-900 placeholder-slate-400 focus:border-blue-600 focus:ring-1 focus:ring-blue-600 focus:outline-none transition-all font-medium resize-none"
                placeholder="Tell us about your project, goals, and requirements..."
              ></textarea>
            </div>

            <div className="flex justify-end gap-4 pt-6">
              <button
                type="button"
                onClick={onClose}
                className="px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 font-black uppercase tracking-widest text-xs rounded-full border border-slate-200 transition-all"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white font-black uppercase tracking-widest text-xs rounded-full transition-all shadow-xl shadow-blue-500/20"
              >
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

const Homepage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentFormType, setCurrentFormType] = useState('');
  // Animated Particles Component
  const Particles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
      const generateParticles = () => {
        const newParticles = [];
        for (let i = 0; i < 20; i++) {
          newParticles.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 3 + 1,
            duration: Math.random() * 15 + 10,
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
            className="absolute rounded-full bg-gradient-to-r from-green-400/30 to-blue-400/30"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              y: [0, -80, 0],
              x: [0, Math.random() * 20 - 10, 0],
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

  // Performance Metrics
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

  // Subscription Benefits
  const subscriptionBenefits = [
    'No Heavy Upfront Cost',
    'Continuous Improvements',
    'Dedicated Support',
    'AI-Based Insights'
  ];

  // Blog Posts for Homepage
  const homepageBlogs = [
    {
      id: 1,
      title: "Digital Transformation in Manufacturing",
      excerpt: "How IoT and AI are revolutionizing manufacturing processes with 40% productivity gains.",
      author: "Rahul Sharma",
      date: "March 15, 2024",
      readTime: "5 min read",
      category: "Technology",
      content: `
        <h3>The Future of Manufacturing</h3>
        <p>Manufacturing is experiencing a digital revolution like never before. IoT sensors, artificial intelligence, and automation are transforming factory floors across the globe.</p>
        
        <h4>Key Technologies Driving Change</h4>
        <ul>
          <li>IoT sensors for real-time monitoring</li>
          <li>AI-powered quality control systems</li>
          <li>Automated predictive maintenance</li>
          <li>Digital twin technology</li>
        </ul>
        
        <p>Companies implementing these technologies are seeing productivity increases of 30-40% while reducing operational costs significantly.</p>
      `
    },
    {
      id: 2,
      title: "Building Scalable E-commerce Platforms",
      excerpt: "Essential strategies for e-commerce growth and handling 1000% traffic increases.",
      author: "Sneha Gupta",
      date: "April 2, 2024",
      readTime: "7 min read",
      category: "E-commerce",
      content: `
        <h3>E-commerce Scalability Guide</h3>
        <p>Building e-commerce platforms that can grow with your business requires careful planning and the right technology stack.</p>
        
        <h4>Architecture Best Practices</h4>
        <ul>
          <li>Microservices architecture for independent scaling</li>
          <li>Cloud-native deployment strategies</li>
          <li>Database optimization techniques</li>
          <li>Performance monitoring systems</li>
        </ul>
        
        <p>Proper implementation can handle traffic increases of 1000% without performance degradation.</p>
      `
    },
    {
      id: 3,
      title: "AI-Powered Customer Relationship Management",
      excerpt: "Transforming CRM with artificial intelligence for 35% better conversion rates.",
      author: "Deepak Malhotra",
      date: "February 28, 2024",
      readTime: "6 min read",
      category: "AI/ML",
      content: `
        <h3>AI Revolution in CRM</h3>
        <p>Artificial intelligence is fundamentally changing how businesses manage customer relationships and drive sales growth.</p>
        
        <h4>AI Capabilities in Modern CRM</h4>
        <ul>
          <li>Predictive analytics for customer behavior</li>
          <li>Automated lead scoring and qualification</li>
          <li>Personalized recommendation engines</li>
          <li>Natural language processing for communications</li>
        </ul>
        
        <p>Organizations using AI-powered CRM see 25-35% improvement in sales conversion rates.</p>
      `
    }
  ];

  return (
    <div className="min-h-screen premium-bg relative overflow-hidden">
      {/* Animated Background */}
      <Particles />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-500/5 via-blue-500/5 to-cyan-500/5 animate-pulse"></div>

      {/* Hero Section */}
      <div className="relative z-10 px-6 py-32">
        <div className="max-w-7xl mx-auto text-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <span className="material-symbols-outlined text-blue-600">architecture</span>
              <span className="text-blue-600 font-black tracking-widest uppercase text-xs">Enterprise Digital Solutions</span>
            </div>

            <h1 className="text-7xl md:text-9xl font-black text-slate-900 mb-8 leading-none tracking-tighter font-space-grotesk">
              Architecting
              <span className="block text-blue-600">
                Scalable Growth
              </span>
              <span className="block text-slate-900">for Business</span>
            </h1>

            <p className="text-2xl md:text-3xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-16 font-medium">
              We design intelligent digital ecosystems — CRM systems, AI automation, enterprise software,
              and performance-driven marketing strategies that help businesses scale faster and smarter.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-24">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setCurrentFormType('Free Consultation');
                  setModalOpen(true);
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black px-10 py-5 rounded-full transition-all shadow-xl shadow-blue-500/30 flex items-center justify-center gap-3 text-lg min-w-[280px] uppercase tracking-widest"
              >
                <span className="material-symbols-outlined font-black">calendar_today</span>
                <span className="whitespace-nowrap">Free Consultation</span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  setCurrentFormType('CRM Demo');
                  setModalOpen(true);
                }}
                className="bg-white border-2 border-slate-200 hover:border-blue-600 text-slate-900 font-black px-10 py-5 rounded-full transition-all shadow-xl flex items-center justify-center gap-3 text-lg min-w-[280px] uppercase tracking-widest"
              >
                <span className="material-symbols-outlined font-black">smart_toy</span>
                <span className="whitespace-nowrap">Watch CRM Demo</span>
              </motion.button>
            </div>
          </motion.div>

          {/* About Snapshot */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-consistent-2xl p-16 mb-32 border border-slate-200 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 -z-10"></div>
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="text-left">
                <h2 className="text-4xl font-black text-slate-900 mb-8 tracking-tighter">About Error Infotech</h2>
                <div className="space-y-6">
                  <p className="text-slate-600 text-xl leading-relaxed font-medium">
                    Error Infotech is a technology-driven company delivering custom CRM systems, AI automation platforms,
                    enterprise software, and ROI-focused marketing solutions.
                  </p>
                  <p className="text-blue-600 text-2xl leading-relaxed font-black tracking-tight">
                    We don't sell software. We build structured digital systems that scale businesses.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-8">
                {metrics.map((metric, index) => {
                  const [count, ref] = useAnimatedCounter(metric.value, 2500);
                  return (
                    <motion.div
                      key={index}
                      ref={ref}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="text-center p-8 bg-slate-50 rounded-consistent-xl border border-slate-100 shadow-sm group hover:border-blue-300 transition-all"
                    >
                      <div className="text-5xl font-black text-blue-600 mb-2 font-space-grotesk tracking-tighter">
                        {count}{metric.suffix}
                      </div>
                      <div className="text-slate-500 font-black uppercase tracking-widest text-[10px]">{metric.label}</div>
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
            className="mb-32"
          >
            <h2 className="text-4xl font-black text-slate-900 text-center mb-16 tracking-tighter">Who We Serve</h2>
            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="bg-white rounded-consistent-2xl p-10 border border-slate-200 shadow-xl group hover:border-blue-200 transition-all">
                <h3 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4 tracking-tight">
                  <span className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">business</span>
                  </span>
                  B2B Enterprises
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {b2bClients.map((client, index) => (
                    <div key={index} className="flex items-center gap-3 text-slate-600 font-bold group-hover:text-slate-900 transition-colors">
                      <span className="material-symbols-outlined text-blue-600 text-xl">check_circle</span>
                      {client}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-white rounded-consistent-2xl p-10 border border-slate-200 shadow-xl group hover:border-blue-200 transition-all">
                <h3 className="text-3xl font-black text-slate-900 mb-8 flex items-center gap-4 tracking-tight">
                  <span className="w-12 h-12 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:scale-110 transition-transform">
                    <span className="material-symbols-outlined text-2xl">person</span>
                  </span>
                  B2C Ecosystems
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {b2cServices.map((service, index) => (
                    <div key={index} className="flex items-center gap-3 text-slate-600 font-bold group-hover:text-slate-900 transition-colors">
                      <span className="material-symbols-outlined text-blue-600 text-xl">check_circle</span>
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
            className="mb-8"
          >
            <h2 className="text-4xl font-black text-slate-900 text-center mb-20 tracking-tighter">Core Strengths</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
              {coreStrengths.map((strength, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.1 + index * 0.1 }}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-consistent-2xl p-8 border border-slate-200 hover:border-blue-300 transition-all duration-300 text-center group shadow-xl hover:shadow-2xl"
                >
                  <div className="w-16 h-16 bg-slate-50 text-blue-600 rounded-consistent-xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-sm group-hover:shadow-blue-500/20">
                    <span className="material-symbols-outlined text-2xl font-black">{strength.icon}</span>
                  </div>
                  <h3 className="text-sm font-black text-slate-900 uppercase tracking-widest leading-tight">{strength.title}</h3>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Blog Section */}
      <section className="relative z-10 px-6 py-32 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl font-black text-slate-900 mb-6 tracking-tighter font-space-grotesk">Latest from <span className="text-blue-600">Our Blog</span></h2>
            <p className="text-xl text-slate-600 font-medium">Industry insights and technology trends for modern enterprises</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10">
            {homepageBlogs.map((blog, index) => (
              <motion.article
                key={blog.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white rounded-consistent-2xl p-8 border border-slate-200 hover:border-blue-300 transition-all duration-500 shadow-xl hover:shadow-2xl group flex flex-col"
              >
                <div className="mb-6 flex-grow">
                  <span className="inline-block px-4 py-1 bg-blue-50 text-blue-600 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 border border-blue-100">
                    {blog.category}
                  </span>
                  <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors tracking-tight leading-snug">
                    {blog.title}
                  </h3>
                  <p className="text-slate-600 text-sm mb-6 line-clamp-3 font-medium leading-relaxed">
                    {blog.excerpt}
                  </p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-500 pb-6 border-b border-slate-100">
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">person</span>
                      {blog.author}
                    </span>
                    <span className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-xs">schedule</span>
                      {blog.readTime}
                    </span>
                  </div>

                  <button
                    onClick={() => {
                      alert(`${blog.title}\n\n${blog.content.replace(/<[^>]*>/g, '')}`);
                    }}
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black uppercase tracking-widest text-xs py-4 rounded-full transition-all shadow-xl shadow-blue-500/20 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <span className="material-symbols-outlined text-sm font-black">article</span>
                    Read Full Article
                  </button>
                </div>
              </motion.article>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/blog">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white hover:bg-slate-50 text-slate-900 font-black px-12 py-5 rounded-full border-2 border-slate-200 hover:border-blue-600 transition-all flex items-center gap-3 text-sm mx-auto uppercase tracking-widest shadow-xl"
              >
                <span className="material-symbols-outlined font-black">view_list</span>
                Explore All Insights
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Subscription Advantage Section */}
      <section className="relative z-10 px-6 py-32 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 rounded-consistent-3xl p-20 relative overflow-hidden text-center shadow-2xl border border-slate-200"
          >
            {/* Decorative Accents */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-200 to-transparent"></div>
            <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-100/20 blur-[100px] -z-10"></div>

            <h2 className="text-5xl font-black text-slate-900 mb-8 tracking-tighter font-space-grotesk">
              Build Once. <span className="text-blue-600">Scale Forever.</span>
            </h2>
            <p className="text-2xl text-slate-600 mb-16 max-w-3xl mx-auto font-medium leading-relaxed">
              With our monthly CRM model, you don't just buy software —
              you get a dedicated technology partner providing continuous AI upgrades and real-time support.
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {subscriptionBenefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-5 bg-white rounded-consistent-xl border border-slate-200 group hover:border-blue-300 hover:shadow-lg transition-all"
                >
                  <span className="material-symbols-outlined text-blue-600 font-black">check_circle</span>
                  <span className="text-slate-900 font-black uppercase tracking-widest text-[10px]">{benefit}</span>
                </motion.div>
              ))}
            </div>

            <Link to="/crm-pricing">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white font-black px-12 py-6 rounded-full transition-all shadow-2xl shadow-blue-500/40 flex items-center gap-4 text-sm mx-auto uppercase tracking-widest"
              >
                <span className="material-symbols-outlined font-black">workspace_premium</span>
                Explore Pricing Models
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Free Consultation Banner */}
      <ConsultationBanner variant="default" />

      {/* Contact Modals */}
      <ContactModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        formType={currentFormType}
      />
    </div>
  );
};

export default Homepage;