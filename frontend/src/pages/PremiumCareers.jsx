import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const Careers = () => {
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [applicationData, setApplicationData] = useState({
    fullName: '',
    email: '',
    phone: '',
    currentPosition: '',
    linkedin: '',
    github: '',
    portfolio: '',
    coverLetter: '',
    resume: null
  });

  // AI-focused open positions
  const openPositions = [
    {
      id: 1,
      title: "AI Solutions Architect",
      department: "AI/ML",
      location: "Rajkot, Gujarat / Remote",
      type: "Full-time",
      experience: "5+ years",
      salary: "₹15L - ₹25L PA",
      responsibilities: [
        "Design and architect end-to-end AI solutions for enterprise clients",
        "Lead AI/ML project implementations from conception to deployment",
        "Evaluate and select appropriate AI technologies and frameworks",
        "Collaborate with cross-functional teams to integrate AI capabilities",
        "Mentor team members on AI best practices and emerging technologies"
      ],
      requirements: [
        "Bachelor's/Master's degree in Computer Science, AI, or related field",
        "5+ years of experience in AI/ML solution architecture",
        "Expertise in TensorFlow, PyTorch, and OpenAI APIs",
        "Experience with LLMs, NLP, and Generative AI technologies",
        "Strong knowledge of cloud AI services (AWS SageMaker, Azure ML, GCP AI)"
      ]
    },
    {
      id: 2,
      title: "n8n Automation Engineer",
      department: "AI Automation",
      location: "Rajkot, Gujarat / Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹8L - ₹15L PA",
      responsibilities: [
        "Design and build automated workflows using n8n and other automation tools",
        "Integrate AI services into business process automations",
        "Develop custom n8n nodes and workflows for client requirements",
        "Optimize existing automation pipelines for performance and reliability",
        "Train clients on automation best practices and self-service capabilities"
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of experience with workflow automation tools (n8n, Zapier, Make)",
        "Strong JavaScript/TypeScript and Node.js skills",
        "Experience integrating REST APIs and webhooks",
        "Knowledge of AI/ML APIs (OpenAI, Anthropic, Google AI)"
      ]
    },
    {
      id: 3,
      title: "AI Coding Specialist",
      department: "AI Development",
      location: "Rajkot, Gujarat / Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹10L - ₹18L PA",
      responsibilities: [
        "Develop AI-powered coding assistants and code generation tools",
        "Implement AI pair programming solutions using GitHub Copilot, Cursor",
        "Build custom AI code review and optimization systems",
        "Create AI documentation and test generation tools",
        "Research and implement latest AI coding technologies"
      ],
      requirements: [
        "Bachelor's degree in Computer Science or equivalent",
        "3+ years of software development experience",
        "Strong expertise in Python, JavaScript, and modern frameworks",
        "Experience with AI coding tools (Copilot, CodeWhisperer, TabNine)",
        "Knowledge of LLMs and prompt engineering for code generation"
      ]
    },
    {
      id: 4,
      title: "AI Tools Integration Specialist",
      department: "AI Integration",
      location: "Rajkot, Gujarat / Remote",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹6L - ₹12L PA",
      responsibilities: [
        "Integrate AI tools and platforms into client applications",
        "Configure and customize AI SaaS products for business needs",
        "Develop connectors between AI services and existing systems",
        "Train clients on AI tool usage and optimization",
        "Stay updated with latest AI tools and integration patterns"
      ],
      requirements: [
        "Bachelor's degree in IT, Computer Science, or related field",
        "2+ years of experience with API integrations",
        "Hands-on experience with AI tools (ChatGPT, Claude, Midjourney, etc.)",
        "Strong understanding of REST APIs and web services",
        "Basic knowledge of AI/ML concepts and terminology"
      ]
    },
    {
      id: 5,
      title: "AI Agent Frontend Developer",
      department: "AI Development",
      location: "Rajkot, Gujarat / Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹10L - ₹18L PA",
      responsibilities: [
        "Build intuitive user interfaces for AI agents and chatbots",
        "Integrate AI APIs and streaming responses into frontend applications",
        "Develop real-time conversation interfaces with WebSocket",
        "Optimize UI performance for AI-powered features",
        "Collaborate with AI/ML teams to implement agent capabilities"
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of React/Vue/Angular experience",
        "Experience with AI integration (OpenAI, Anthropic APIs)",
        "Strong TypeScript and modern JavaScript skills",
        "Knowledge of real-time web technologies"
      ]
    },
    {
      id: 6,
      title: "AI Agent Backend Developer",
      department: "AI Development",
      location: "Rajkot, Gujarat / Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹12L - ₹20L PA",
      responsibilities: [
        "Design and build scalable backend systems for AI agents",
        "Develop AI agent orchestration and workflow engines",
        "Implement LLM integrations and prompt management systems",
        "Build APIs for agent-to-agent and agent-to-human communication",
        "Optimize system performance for AI inference and responses"
      ],
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "3+ years of Node.js/Python backend development",
        "Experience with LLM APIs and AI frameworks",
        "Knowledge of database design and message queues",
        "Understanding of microservices architecture"
      ]
    },
    {
      id: 7,
      title: "AI/ML Developer",
      department: "AI/ML",
      location: "Rajkot, Gujarat / Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹12L - ₹22L PA",
      responsibilities: [
        "Develop and deploy machine learning models for production",
        "Build AI-powered features using TensorFlow, PyTorch, or similar",
        "Implement NLP solutions for text analysis and generation",
        "Create computer vision applications for image processing",
        "Optimize ML models for performance and accuracy"
      ],
      requirements: [
        "Bachelor's/Master's in Computer Science or AI/ML",
        "3+ years of AI/ML development experience",
        "Proficiency in Python and ML frameworks",
        "Experience with cloud ML platforms (AWS SageMaker, etc.)",
        "Strong mathematics and statistics background"
      ]
    },
    {
      id: 8,
      title: "Full Stack Developer",
      department: "Engineering",
      location: "Rajkot, Gujarat / Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹10L - ₹20L PA",
      responsibilities: [
        "Build end-to-end web applications with AI integration",
        "Develop RESTful APIs and database architectures",
        "Implement frontend interfaces with React/Vue/Angular",
        "Deploy and manage applications on cloud platforms",
        "Collaborate across teams to deliver complete solutions"
      ],
      requirements: [
        "Bachelor's degree in Computer Science or equivalent",
        "3+ years of full stack development experience",
        "Strong JavaScript/TypeScript and Node.js skills",
        "Experience with databases (SQL and NoSQL)",
        "Knowledge of cloud deployment and DevOps"
      ]
    },
    {
      id: 9,
      title: "AI Agent Copywriter",
      department: "Content",
      location: "Rajkot, Gujarat / Remote",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹5L - ₹10L PA",
      responsibilities: [
        "Create compelling content for AI products and services",
        "Write conversational scripts for AI agents and chatbots",
        "Develop brand voice guidelines for AI interactions",
        "Craft user-facing content that explains AI capabilities",
        "Collaborate with AI teams to improve agent responses"
      ],
      requirements: [
        "Bachelor's degree in English, Journalism, or related field",
        "2+ years of copywriting or content creation experience",
        "Understanding of AI/ML concepts and terminology",
        "Excellent writing and communication skills",
        "Experience with conversational UI writing preferred"
      ]
    },
    {
      id: 10,
      title: "AI Digital Marketing Specialist",
      department: "Marketing",
      location: "Rajkot, Gujarat / Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹6L - ₹12L PA",
      responsibilities: [
        "Develop AI-powered marketing strategies and campaigns",
        "Use AI tools for audience targeting and segmentation",
        "Implement predictive analytics for marketing optimization",
        "Leverage AI for content personalization and recommendations",
        "Analyze marketing data using AI-driven insights"
      ],
      requirements: [
        "Bachelor's degree in Marketing, Business, or related field",
        "3+ years of digital marketing experience",
        "Experience with AI marketing tools and platforms",
        "Strong analytical and data interpretation skills",
        "Knowledge of SEO, SEM, and social media marketing"
      ]
    },
    {
      id: 11,
      title: "AI-Powered Social Media Manager",
      department: "Marketing",
      location: "Rajkot, Gujarat / Remote",
      type: "Full-time",
      experience: "2+ years",
      salary: "₹5L - ₹10L PA",
      responsibilities: [
        "Manage social media presence using AI scheduling and analytics tools",
        "Create AI-assisted content for multiple social platforms",
        "Monitor social trends and engagement using AI insights",
        "Implement chatbots for social media customer service",
        "Analyze performance metrics and optimize strategies"
      ],
      requirements: [
        "Bachelor's degree in Marketing, Communications, or related",
        "2+ years of social media management experience",
        "Experience with AI social media tools (Buffer AI, Hootsuite, etc.)",
        "Strong creative and copywriting skills",
        "Understanding of social media algorithms and trends"
      ]
    },
    {
      id: 12,
      title: "AI Performance Marketer",
      department: "Marketing",
      location: "Rajkot, Gujarat / Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹7L - ₹14L PA",
      responsibilities: [
        "Optimize paid campaigns using AI bidding and targeting tools",
        "Implement AI-driven A/B testing and conversion optimization",
        "Analyze campaign performance with AI analytics platforms",
        "Manage programmatic advertising and AI ad platforms",
        "Drive ROI through data-driven performance strategies"
      ],
      requirements: [
        "Bachelor's degree in Marketing, Analytics, or related field",
        "3+ years of performance marketing experience",
        "Experience with AI advertising platforms (Google Smart Bidding, etc.)",
        "Strong data analysis and Excel/spreadsheet skills",
        "Knowledge of attribution modeling and marketing analytics"
      ]
    },
    {
      id: 13,
      title: "AI Creative Designer",
      department: "Design",
      location: "Rajkot, Gujarat / Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "₹8L - ₹15L PA",
      responsibilities: [
        "Create visual designs using AI-powered design tools",
        "Develop brand assets and marketing materials with AI assistance",
        "Design UI/UX for AI products and agent interfaces",
        "Experiment with generative AI for creative concepts",
        "Collaborate with AI teams on visual agent representations"
      ],
      requirements: [
        "Bachelor's degree in Design, Fine Arts, or related field",
        "3+ years of graphic/UI design experience",
        "Proficiency in AI design tools (Midjourney, DALL-E, etc.)",
        "Strong portfolio demonstrating creative skills",
        "Experience with Figma, Adobe Creative Suite"
      ]
    },
    {
      id: 14,
      title: "AI Product Manager",
      department: "AI Product",
      location: "Rajkot, Gujarat",
      type: "Full-time",
      experience: "5+ years",
      salary: "₹18L - ₹30L PA",
      responsibilities: [
        "Define product strategy for AI-powered solutions",
        "Lead AI product development from ideation to launch",
        "Collaborate with engineering, design, and business teams",
        "Analyze AI market trends and competitive landscape",
        "Manage AI product roadmap and feature prioritization"
      ],
      requirements: [
        "Bachelor's/Master's degree in Business, Engineering, or AI",
        "5+ years of product management experience, 2+ in AI products",
        "Strong understanding of AI/ML technologies and capabilities",
        "Experience with Agile methodologies and product lifecycle management",
        "Excellent communication skills to bridge technical and business teams"
      ]
    }
  ];

  // Enhanced benefits
  const benefits = [
    {
      title: "Competitive Compensation",
      icon: "payments",
      desc: "Market-leading salary with performance bonuses and stock options",
      color: "from-blue-600 to-cyan-500"
    },
    {
      title: "Comprehensive Health",
      icon: "local_hospital",
      desc: "Medical, dental, vision, and mental health coverage",
      color: "from-purple-600 to-pink-600"
    },
    {
      title: "Flexible Work Arrangements",
      icon: "schedule",
      desc: "Hybrid and remote work options with flexible hours",
      color: "from-emerald-600 to-teal-600"
    },
    {
      title: "Professional Development",
      icon: "school",
      desc: "$5,000 annual learning budget for conferences and courses",
      color: "from-orange-600 to-red-600"
    },
    {
      title: "Stock Equity Program",
      icon: "trending_up",
      desc: "Competitive equity package for all full-time employees",
      color: "from-pink-600 to-purple-600"
    },
    {
      title: "Wellness Program",
      icon: "fitness_center",
      desc: "Gym membership, wellness stipend, and mental health days",
      color: "from-cyan-600 to-blue-600"
    },
    {
      title: "Unlimited PTO",
      icon: "beach_access",
      desc: "Generous vacation policy to promote work-life balance",
      color: "from-teal-600 to-emerald-600"
    },
    {
      title: "Family Benefits",
      icon: "family_restroom",
      desc: "Parental leave, childcare support, and family health coverage",
      color: "from-blue-600 to-indigo-600"
    }
  ];

  // Enhanced hiring process
  const hiringProcess = [
    { step: 1, title: "Application Review", desc: "Our talent team reviews your application and resume", color: "from-blue-600 to-indigo-600" },
    { step: 2, title: "Initial Screening", desc: "30-minute phone/video call with HR", color: "from-purple-600 to-pink-600" },
    { step: 3, title: "Technical Assessment", desc: "Skills evaluation and coding challenges", color: "from-emerald-600 to-teal-600" },
    { step: 4, title: "Team Interviews", desc: "Meet with your potential teammates", color: "from-orange-600 to-red-600" },
    { step: 5, title: "Leadership Interview", desc: "Final interview with department leadership", color: "from-pink-600 to-purple-600" },
    { step: 6, title: "Offer & Onboarding", desc: "Job offer and seamless onboarding process", color: "from-cyan-600 to-blue-600" }
  ];

  // Enhanced company culture values - AI Focus
  const cultureValues = [
    {
      title: "AI Innovation First",
      desc: "We pioneer cutting-edge AI solutions and encourage experimentation with emerging technologies",
      icon: "lightbulb",
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Continuous AI Learning",
      desc: "Stay ahead with dedicated time for learning latest AI tools, frameworks, and methodologies",
      icon: "school",
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "AI for Everyone",
      desc: "Democratizing AI technology to solve real-world business problems",
      icon: "smart_toy",
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Automation Excellence",
      desc: "Building intelligent automation solutions that transform how businesses operate",
      icon: "auto_mode",
      color: "from-amber-500 to-orange-500"
    }
  ];

  // Application Handlers
  const openApplicationModal = (position) => {
    setSelectedPosition(position);
    setIsApplicationOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeApplicationModal = () => {
    setIsApplicationOpen(false);
    setSelectedPosition(null);
    document.body.style.overflow = 'unset';
    // Reset form
    setApplicationData({
      fullName: '',
      email: '',
      phone: '',
      currentPosition: '',
      linkedin: '',
      github: '',
      portfolio: '',
      coverLetter: '',
      resume: null
    });
  };

  const handleApplicationSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      Object.keys(applicationData).forEach(key => {
        if (key === 'resume' && applicationData[key]) {
          formData.append(key, applicationData[key]);
        } else {
          formData.append(key, applicationData[key]);
        }
      });
      formData.append('positionId', selectedPosition.id);
      formData.append('positionTitle', selectedPosition.title);

      const response = await fetch('http://localhost:5000/api/applications', {
        method: 'POST',
        body: formData
      });

      if (response.ok) {
        alert('Application submitted successfully! Our HR team will review your application and contact you soon.');
        closeApplicationModal();
      } else {
        alert('Error submitting application. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Network error. Please try again.');
    }
  };

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setApplicationData({
      ...applicationData,
      [name]: files ? files[0] : value
    });
  };

  return (
    <main className="pt-24 pb-12 px-6 min-h-screen premium-bg">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-500/20 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0, 1, 0],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 15 + 15,
                repeat: Infinity,
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-black text-slate-800 mb-6 tracking-tighter">
              Build the <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-400">Future</span> With Us
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
              Join our team of innovators and help shape the next generation of enterprise technology solutions.
            </p>
          </motion.div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { value: '150+', label: 'Team Members', color: 'from-blue-600 to-cyan-500' },
              { value: '4.9', label: 'Rating', color: 'from-purple-600 to-pink-600' },
              { value: '98%', label: 'Retention', color: 'from-emerald-600 to-teal-600' },
              { value: '24/7', label: 'Support', color: 'from-orange-600 to-red-600' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-[2rem] p-8 border border-slate-100 shadow-2xl relative overflow-hidden group transition-all duration-700"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                <div className={`text-4xl font-black mb-2 transition-all duration-700 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>{stat.value}</div>
                <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-20 bg-slate-50/50 rounded-3xl mb-20 border border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 font-space-grotesk tracking-tighter uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-900 to-blue-600">Our Culture</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl">What makes Error Infotech a great place to work</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {cultureValues.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-2xl p-8 text-center border border-slate-200 transition-all duration-700 group shadow-lg hover:shadow-2xl relative overflow-hidden ${index % 4 === 0 ? 'hover:border-blue-500/50' :
                  index % 4 === 1 ? 'hover:border-emerald-500/50' :
                    index % 4 === 2 ? 'hover:border-purple-500/50' :
                      'hover:border-orange-500/50'
                  }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <span className="material-symbols-outlined text-white text-3xl">{value.icon}</span>
                </div>
                <h3 className="text-slate-800 font-bold text-xl mb-4">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 font-space-grotesk tracking-tighter uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-slate-800 to-blue-600">Why Error Infotech?</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl">Join India's leading AI-powered technology solutions company</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-First Environment",
                desc: "Work with cutting-edge AI technologies like GPT, LLMs, n8n, and automation tools daily",
                icon: "smart_toy",
                color: "from-blue-600 to-cyan-500"
              },
              {
                title: "Learn AI Tools",
                desc: "Master the latest AI coding tools, automation platforms, and ML frameworks",
                icon: "school",
                color: "from-purple-600 to-pink-600"
              },
              {
                title: "Build AI Products",
                desc: "Create intelligent solutions that transform businesses across industries",
                icon: "rocket_launch",
                color: "from-emerald-600 to-teal-600"
              },
              {
                title: "AI Research Time",
                desc: "Dedicated time to experiment with new AI models, tools, and technologies",
                icon: "science",
                color: "from-orange-600 to-red-600"
              },
              {
                title: "Flexible & Remote",
                desc: "Work from anywhere with flexible hours and AI-powered collaboration tools",
                icon: "laptop",
                color: "from-pink-600 to-purple-600"
              },
              {
                title: "Growth in AI",
                desc: "Fast-track your career in the booming AI industry with mentorship and training",
                icon: "trending_up",
                color: "from-blue-600 to-indigo-600"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-2xl p-8 text-center border border-slate-200 transition-all duration-700 group shadow-lg hover:shadow-2xl relative overflow-hidden ${index % 4 === 0 ? 'hover:border-blue-500/50' :
                  index % 4 === 1 ? 'hover:border-purple-500/50' :
                    index % 4 === 2 ? 'hover:border-emerald-500/50' :
                      'hover:border-orange-500/50'
                  }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <span className="material-symbols-outlined text-white text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-slate-800 font-bold text-xl mb-4 group-hover:text-blue-600 transition-colors duration-500">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-slate-50/50 rounded-3xl mb-20 border border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 font-space-grotesk tracking-tighter uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 via-blue-900 to-blue-600">Open Positions</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl">Join our growing team and help build tomorrow's technology</p>
          </motion.div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group relative rounded-[2.5rem] p-10 border border-slate-200 bg-white transition-all duration-700 cursor-pointer shadow-xl hover:shadow-2xl overflow-hidden ${index % 4 === 0 ? 'hover:border-blue-500/50' :
                  index % 4 === 1 ? 'hover:border-purple-500/50' :
                    index % 4 === 2 ? 'hover:border-emerald-500/50' :
                      'hover:border-orange-500/50'
                  }`}
                onClick={() => openApplicationModal(position)}
              >
                <div className={`absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-10">
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-blue-600 transition-colors">{position.title}</h3>
                    <div className="flex flex-wrap gap-5 text-slate-500 mb-6">
                      <span className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        <span className="material-symbols-outlined text-sm text-blue-600">business</span>
                        {position.department}
                      </span>
                      <span className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        <span className="material-symbols-outlined text-sm text-purple-600">location_on</span>
                        {position.location}
                      </span>
                      <span className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        <span className="material-symbols-outlined text-sm text-emerald-600">schedule</span>
                        {position.type}
                      </span>
                      <span className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
                        <span className="material-symbols-outlined text-sm text-orange-600">work</span>
                        {position.experience} exp.
                      </span>
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-black text-xl">{position.salary}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openApplicationModal(position);
                      }}
                      className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black px-10 py-4 rounded-2xl hover:scale-105 transition-all whitespace-nowrap shadow-xl shadow-blue-500/20 uppercase tracking-widest text-[10px]"
                    >
                      Apply Now
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-slate-800 mb-6 font-space-grotesk tracking-tighter uppercase">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-slate-800 to-blue-600">Employee Benefits</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl">We believe in taking care of our team members</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`bg-white rounded-2xl p-8 text-center border border-slate-200 transition-all duration-700 group shadow-lg hover:shadow-2xl relative overflow-hidden ${index % 4 === 0 ? 'hover:border-blue-500/50' :
                  index % 4 === 1 ? 'hover:border-purple-500/50' :
                    index % 4 === 2 ? 'hover:border-emerald-500/50' :
                      'hover:border-orange-500/50'
                  }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                  <span className="material-symbols-outlined text-white text-3xl">{benefit.icon}</span>
                </div>
                <h3 className="text-slate-800 font-bold text-xl mb-4 group-hover:text-blue-600 transition-colors duration-500">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-20 bg-slate-50/50 rounded-3xl mt-20 border border-slate-100">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6 font-space-grotesk">Our Hiring Process</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl">Simple, transparent, and respectful</p>
          </motion.div>

          <div className="relative">
            <div className="grid lg:grid-cols-6 gap-8 relative">
              {hiringProcess.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative z-10 text-center"
                >
                  <div className="flex flex-col items-center">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className={`w-24 h-24 rounded-full bg-gradient-to-br ${process.color} flex items-center justify-center mb-6 shadow-xl border-4 border-white`}
                    >
                      <span className="text-white font-black text-xl">{process.step}</span>
                    </motion.div>
                    <h3 className="text-slate-800 font-bold text-lg mb-3">{process.title}</h3>
                    <p className="text-slate-600 text-sm font-medium">{process.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Application Modal */}
      <AnimatePresence>
        {isApplicationOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeApplicationModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-2xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-200 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-slate-800 font-space-grotesk">Apply for {selectedPosition?.title}</h3>
                <button
                  onClick={closeApplicationModal}
                  className="text-slate-400 hover:text-slate-600 text-2xl"
                >
                  ×
                </button>
              </div>

              <form onSubmit={handleApplicationSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      value={applicationData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={applicationData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={applicationData.phone}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">Current Position</label>
                    <input
                      type="text"
                      name="currentPosition"
                      value={applicationData.currentPosition}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 transition-all font-medium"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">LinkedIn Profile</label>
                    <input
                      type="url"
                      name="linkedin"
                      value={applicationData.linkedin}
                      onChange={handleInputChange}
                      placeholder="https://linkedin.com/in/your-profile"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">GitHub Profile</label>
                    <input
                      type="url"
                      name="github"
                      value={applicationData.github}
                      onChange={handleInputChange}
                      placeholder="https://github.com/your-profile"
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 transition-all font-medium"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Portfolio URL</label>
                  <input
                    type="url"
                    name="portfolio"
                    value={applicationData.portfolio}
                    onChange={handleInputChange}
                    placeholder="https://your-portfolio.com"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Resume *</label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleInputChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 transition-all font-medium"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-semibold mb-2">Cover Letter *</label>
                  <textarea
                    name="coverLetter"
                    value={applicationData.coverLetter}
                    onChange={handleInputChange}
                    required
                    rows="6"
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-blue-500 transition-all font-medium resize-none"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-black py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-xl shadow-blue-500/20"
                  >
                    Submit Application
                  </button>
                  <button
                    type="button"
                    onClick={closeApplicationModal}
                    className="px-8 py-4 bg-slate-100 text-slate-700 font-bold rounded-xl hover:bg-slate-200 transition-colors"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
};

export default Careers;