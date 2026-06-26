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

  // Real open positions
  const openPositions = [
    {
      id: 1,
      title: "Business Development Executive (BDE)",
      department: "Sales",
      location: "Rajkot, Gujarat",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹4.20L - ₹6L PA",
      responsibilities: [
        "Identify and develop new business opportunities (1 Opening)",
        "Build and maintain strong client relationships",
        "Achieve sales targets and organizational goals",
        "Conduct market research to identify new trends",
        "Collaborate with the technical team to deliver solutions"
      ],
      requirements: [
        "Proven experience as a Business Development Executive",
        "Strong communication and negotiation skills",
        "Ability to build rapport with clients",
        "Time management and planning skills",
        "Bachelor's degree in Business Administration or relevant field"
      ]
    },
    {
      id: 2,
      title: "Sales Executive",
      department: "Sales",
      location: "Rajkot, Gujarat",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹2.40L - ₹3.60L PA",
      responsibilities: [
        "Actively seek out new sales opportunities (4 Openings)",
        "Conduct market research to identify selling possibilities",
        "Set up meetings with potential clients",
        "Prepare and deliver appropriate presentations on products and services",
        "Ensure the availability of stock for sales and demonstrations"
      ],
      requirements: [
        "Proven experience as a Sales Executive or relevant role",
        "Fast learner and passion for sales",
        "Self-motivated with a results-driven approach",
        "Aptitude in delivering attractive presentations",
        "High school degree; BSc/BA is a plus"
      ]
    },
    {
      id: 3,
      title: "HR Executive",
      department: "Human Resources",
      location: "Rajkot, Gujarat",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹1.80L - ₹2.40L PA",
      responsibilities: [
        "Manage the full recruitment lifecycle (1 Opening)",
        "Maintain employee records and update HR databases",
        "Assist in performance management processes",
        "Handle employee grievances and disciplinary issues",
        "Ensure compliance with labor regulations"
      ],
      requirements: [
        "Proven experience as an HR Executive or similar role",
        "Familiarity with Human Resources Management Systems",
        "Understanding of labor laws and disciplinary procedures",
        "Excellent communication and interpersonal skills",
        "BSc/BA in HR, Business Administration or relevant field"
      ]
    },
    {
      id: 4,
      title: "Digital Marketing Executive",
      department: "Marketing",
      location: "Rajkot, Gujarat",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹1.80L - ₹2.64L PA",
      responsibilities: [
        "Assist in the formulation of strategies to build a lasting digital connection with consumers (1 Opening)",
        "Launch optimized online adverts through Google Adwords, Facebook etc.",
        "Be actively involved in SEO efforts (keyword, image optimization etc.)",
        "Provide creative ideas for content marketing",
        "Measure performance of digital marketing efforts"
      ],
      requirements: [
        "Proven experience as Digital Marketing Executive or similar role",
        "Excellent understanding of digital marketing concepts",
        "Experience with B2C social media, Google Adwords and SEO",
        "Perfect knowledge of web analytics tools",
        "Skills and experience in creative content writing"
      ]
    },
    {
      id: 5,
      title: "Physical Marketing Executive",
      department: "Marketing",
      location: "Rajkot, Gujarat",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹1.80L - ₹2.64L PA",
      responsibilities: [
        "Plan and execute physical marketing campaigns and events (1 Opening)",
        "Distribute promotional materials in target areas",
        "Engage with potential customers in physical locations",
        "Track and report on the success of physical marketing initiatives",
        "Collaborate with the digital marketing team for integrated campaigns"
      ],
      requirements: [
        "Experience in physical or field marketing",
        "Outgoing personality with excellent interpersonal skills",
        "Ability to work independently and manage time effectively",
        "Strong organizational and planning skills",
        "Willingness to travel locally as required"
      ]
    },
    {
      id: 6,
      title: "Developer",
      department: "Engineering",
      location: "Rajkot, Gujarat",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹1.80L - ₹3L PA",
      responsibilities: [
        "Produce clean, efficient code based on specifications (6 Openings)",
        "Integrate software components and third-party programs",
        "Verify and deploy programs and systems",
        "Troubleshoot, debug and upgrade existing software",
        "Gather and evaluate user feedback"
      ],
      requirements: [
        "Proven experience as a Software Developer",
        "Familiarity with Agile development methodologies",
        "Experience with software design and development",
        "Knowledge of coding languages and frameworks",
        "BSc/BA in Computer Science, Engineering or a related field"
      ]
    },
    {
      id: 7,
      title: "QA Tester",
      department: "Engineering",
      location: "Rajkot, Gujarat",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹1.80L - ₹3L PA",
      responsibilities: [
        "Review and analyze system specifications (1 Opening)",
        "Execute test cases (manual or automated) and analyze results",
        "Evaluate product code according to specifications",
        "Create logs to document testing phases and defects",
        "Report bugs and errors to development teams"
      ],
      requirements: [
        "Proven experience as a Quality Assurance Tester or similar role",
        "Experience in project management and QA methodology",
        "Familiarity with Agile frameworks and regression testing",
        "Ability to document and troubleshoot errors",
        "BSc/BA in Computer Science, Engineering or a related field"
      ]
    },
    {
      id: 8,
      title: "Data Analytics",
      department: "Data Analytics",
      location: "Rajkot, Gujarat",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹1.80L - ₹3L PA",
      responsibilities: [
        "Interpret data, analyze results using statistical techniques (1 Opening)",
        "Develop and implement data analyses, data collection systems",
        "Acquire data from primary or secondary data sources",
        "Identify, analyze, and interpret trends or patterns in complex data sets",
        "Work with management to prioritize business and information needs"
      ],
      requirements: [
        "Proven working experience as a Data Analyst or Business Data Analyst",
        "Technical expertise regarding data models, database design development",
        "Strong knowledge of and experience with reporting packages",
        "Knowledge of statistics and experience using statistical packages",
        "BS in Mathematics, Economics, Computer Science, Information Management or Statistics"
      ]
    },
    {
      id: 9,
      title: "Digital Marketing",
      department: "Marketing",
      location: "Rajkot, Gujarat",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹1.80L - ₹3L PA",
      responsibilities: [
        "Design and oversee all aspects of our digital marketing department (3 Openings)",
        "Develop and monitor campaign budgets",
        "Plan and manage our social media platforms",
        "Prepare accurate reports on our marketing campaign's overall performance",
        "Identify the latest trends and technologies affecting our industry"
      ],
      requirements: [
        "Bachelor's degree in Marketing or relevant field",
        "A minimum of 2 years experience in a digital marketing or advertising position",
        "In-depth knowledge of various social media platforms, best practices, and website analytics",
        "Highly creative with excellent analytical abilities",
        "Outstanding communication and interpersonal skills"
      ]
    },
    {
      id: 10,
      title: "Graphics & Video Editing",
      department: "Design",
      location: "Rajkot, Gujarat",
      type: "Full-time",
      experience: "1-3 years",
      salary: "₹1.80L - ₹2.40L PA",
      responsibilities: [
        "Create engaging graphic designs and video content (2 Openings)",
        "Edit and assemble recorded raw material into a suitable, finished product",
        "Ensure logical sequencing and smooth running of videos",
        "Design graphics, banners, and promotional materials",
        "Collaborate with the marketing team to align with brand guidelines"
      ],
      requirements: [
        "Proven experience as a Video Editor and Graphic Designer",
        "Solid experience with digital technology and editing software packages (e.g. Premiere, After Effects, Photoshop)",
        "Demonstrable video editing ability with a strong portfolio",
        "Thorough knowledge of timing, motivation, and continuity",
        "Creative mind and storytelling skills"
      ]
    }
  ];

  // Enhanced benefits
  const benefits = [
    {
      title: "Competitive Compensation",
      icon: "payments",
      desc: "Market-leading salary with performance bonuses and stock options",
      color: "from-slate-900 to-slate-600"
    },
    {
      title: "Comprehensive Health",
      icon: "local_hospital",
      desc: "Medical, dental, vision, and mental health coverage",
      color: "from-slate-500 to-slate-400"
    },
    {
      title: "Flexible Work Arrangements",
      icon: "schedule",
      desc: "Hybrid and remote work options with flexible hours",
      color: "from-slate-900 to-slate-600"
    },
    {
      title: "Professional Development",
      icon: "school",
      desc: "$5,000 annual learning budget for conferences and courses",
      color: "from-slate-500 to-slate-400"
    },
    {
      title: "Stock Equity Program",
      icon: "trending_up",
      desc: "Competitive equity package for all full-time employees",
      color: "from-slate-900 to-slate-600"
    },
    {
      title: "Wellness Program",
      icon: "fitness_center",
      desc: "Gym membership, wellness stipend, and mental health days",
      color: "from-slate-500 to-slate-400"
    },
    {
      title: "Unlimited PTO",
      icon: "beach_access",
      desc: "Generous vacation policy to promote work-life balance",
      color: "from-slate-900 to-slate-600"
    },
    {
      title: "Family Benefits",
      icon: "family_restroom",
      desc: "Parental leave, childcare support, and family health coverage",
      color: "from-slate-500 to-slate-400"
    }
  ];

  // Enhanced hiring process
  const hiringProcess = [
    { step: 1, title: "Application Review", desc: "Our talent team reviews your application and resume", color: "from-slate-900 to-slate-600" },
    { step: 2, title: "Initial Screening", desc: "30-minute phone/video call with HR", color: "from-slate-500 to-slate-400" },
    { step: 3, title: "Technical Assessment", desc: "Skills evaluation and coding challenges", color: "from-slate-900 to-slate-600" },
    { step: 4, title: "Team Interviews", desc: "Meet with your potential teammates", color: "from-slate-500 to-slate-400" },
    { step: 5, title: "Leadership Interview", desc: "Final interview with department leadership", color: "from-slate-900 to-slate-600" },
    { step: 6, title: "Offer & Onboarding", desc: "Job offer and seamless onboarding process", color: "from-slate-500 to-slate-400" }
  ];

  // Enhanced company culture values - AI Focus
  const cultureValues = [
    {
      title: "AI Innovation First",
      desc: "We pioneer cutting-edge AI solutions and encourage experimentation with emerging technologies",
      icon: "lightbulb",
      color: "from-slate-900 to-slate-600"
    },
    {
      title: "Continuous AI Learning",
      desc: "Stay ahead with dedicated time for learning latest AI tools, frameworks, and methodologies",
      icon: "school",
      color: "from-slate-500 to-slate-400"
    },
    {
      title: "AI for Everyone",
      desc: "Democratizing AI technology to solve real-world business problems",
      icon: "smart_toy",
      color: "from-slate-900 to-slate-600"
    },
    {
      title: "Automation Excellence",
      desc: "Building intelligent automation solutions that transform how businesses operate",
      icon: "auto_mode",
      color: "from-slate-500 to-slate-400"
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
      const payload = {
        name: applicationData.fullName || 'Applicant',
        email: applicationData.email || 'applicant@example.com',
        phone: applicationData.phone || '0000000000',
        service: 'Job Application',
        message: `Job Application for ${selectedPosition?.title || 'Unknown Position'}\n\nPhone: ${applicationData.phone}\nCurrent Position: ${applicationData.currentPosition}\nLinkedIn: ${applicationData.linkedin}\nGitHub: ${applicationData.github}\nPortfolio: ${applicationData.portfolio}\nCover Letter: ${applicationData.coverLetter}`
      };

      const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:5006/api';
      const response = await fetch(`${apiUrl}/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
      });

      if (response.ok) {
        alert('Application submitted successfully! Our HR team will review your application and contact you soon.');
        closeApplicationModal();
      } else {
        const errorData = await response.json().catch(() => ({}));
        alert(`Error submitting application: ${errorData.error || 'Please try again.'}`);
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
      <section className="py-12 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-slate-400/20 rounded-full"
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
            <h1 className="text-4xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tighter font-space-grotesk">
              <span className="heading-underline active pb-2 inline-block">
                Build the <span className="text-slate-500">Future</span> With Us
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
              Join our team of innovators and help shape the next generation of enterprise technology solutions.
            </p>
          </motion.div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16">
            {[
              { value: '15+', label: 'Team Members', color: 'from-slate-900 to-slate-600' },
              { value: '4.9', label: 'Rating', color: 'from-slate-500 to-slate-400' },
              { value: '98%', label: 'Retention', color: 'from-slate-900 to-slate-600' },
              { value: '24/7', label: 'Support', color: 'from-slate-500 to-slate-400' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-6 relative overflow-hidden md:border-r border-slate-200/60 last:border-0 group transition-all duration-500"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none`}></div>
                <div className={`text-5xl font-black mb-3 transition-all duration-500 bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>{stat.value}</div>
                <div className="text-slate-500 text-[11px] font-black uppercase tracking-widest leading-none">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Culture */}
      <section className="py-24 mb-12 border-y border-slate-100 bg-slate-50/30">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter font-space-grotesk">
              Our <span className="text-slate-500">Culture</span>
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
                whileHover={{ y: -8 }}
                className="p-6 relative overflow-hidden md:border-r border-slate-200/60 last:border-0 group transition-all duration-500 text-center"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${value.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none`}></div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md`}>
                  <span className="material-symbols-outlined text-white text-2xl">{value.icon}</span>
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-3 group-hover:text-slate-800 transition-colors">{value.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter font-space-grotesk">
              Why <span className="text-slate-500">Error</span> Infotech?
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl">Join India's leading AI-powered technology solutions company</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "AI-First Environment",
                desc: "Work with cutting-edge AI technologies like GPT, LLMs, n8n, and automation tools daily",
                icon: "smart_toy",
                color: "from-slate-900 to-slate-600"
              },
              {
                title: "Learn AI Tools",
                desc: "Master the latest AI coding tools, automation platforms, and ML frameworks",
                icon: "school",
                color: "from-slate-500 to-slate-400"
              },
              {
                title: "Build AI Products",
                desc: "Create intelligent solutions that transform businesses across industries",
                icon: "rocket_launch",
                color: "from-slate-900 to-slate-600"
              },
              {
                title: "AI Research Time",
                desc: "Dedicated time to experiment with new AI models, tools, and technologies",
                icon: "science",
                color: "from-slate-500 to-slate-400"
              },
              {
                title: "Flexible & Remote",
                desc: "Work from anywhere with flexible hours and AI-powered collaboration tools",
                icon: "laptop",
                color: "from-slate-900 to-slate-600"
              },
              {
                title: "Growth in AI",
                desc: "Fast-track your career in the booming AI industry with mentorship and training",
                icon: "trending_up",
                color: "from-slate-500 to-slate-400"
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className="p-8 relative overflow-hidden border-b md:border-r border-slate-200/60 last:border-b-0 group transition-all duration-500 text-center"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none`}></div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md`}>
                  <span className="material-symbols-outlined text-white text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-3 group-hover:text-slate-800 transition-colors duration-500">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-24 border-y border-slate-100 bg-slate-50/30 mb-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter font-space-grotesk">
              Open <span className="text-slate-500">Positions</span>
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
                className="group relative py-10 px-8 border-b border-slate-200/80 last:border-0 bg-transparent transition-all duration-300 cursor-pointer hover:bg-slate-50/30 rounded-3xl overflow-hidden"
                onClick={() => openApplicationModal(position)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-700 opacity-0 group-hover:opacity-[0.02] transition-opacity duration-700 pointer-events-none"></div>
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8 relative z-10">
                  <div className="flex-1">
                    <h3 className="text-2xl font-black text-slate-800 mb-4 group-hover:text-slate-900 transition-colors">{position.title}</h3>
                    <div className="flex flex-wrap gap-5 text-slate-500 mb-6">
                      <span className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest bg-white px-3 py-1.5 rounded-lg border border-slate-200/60">
                        <span className="material-symbols-outlined text-sm text-slate-600">business</span>
                        {position.department}
                      </span>
                      <span className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest bg-white px-3 py-1.5 rounded-lg border border-slate-200/60">
                        <span className="material-symbols-outlined text-sm text-slate-500">location_on</span>
                        {position.location}
                      </span>
                      <span className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest bg-white px-3 py-1.5 rounded-lg border border-slate-200/60">
                        <span className="material-symbols-outlined text-sm text-slate-600">schedule</span>
                        {position.type}
                      </span>
                      <span className="flex items-center gap-2 font-bold text-[10px] uppercase tracking-widest bg-white px-3 py-1.5 rounded-lg border border-slate-200/60">
                        <span className="material-symbols-outlined text-sm text-slate-500">work</span>
                        {position.experience} exp.
                      </span>
                    </div>
                    <div className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600 font-black text-xl">{position.salary}</div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openApplicationModal(position);
                      }}
                      className="bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 text-white font-black px-10 py-4 rounded-2xl hover:scale-105 transition-all whitespace-nowrap shadow-xl shadow-slate-900/10 uppercase tracking-widest text-[10px]"
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
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter font-space-grotesk">
              Employee <span className="text-slate-500">Benefits</span>
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
                whileHover={{ y: -8 }}
                className="p-6 relative overflow-hidden md:border-r border-slate-200/60 last:border-0 group transition-all duration-500 text-center"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${benefit.color} opacity-0 group-hover:opacity-[0.02] transition-opacity duration-500 pointer-events-none`}></div>
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-500 shadow-md`}>
                  <span className="material-symbols-outlined text-white text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-slate-900 font-bold text-lg mb-3 group-hover:text-slate-800 transition-colors duration-500">{benefit.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-24 border-t border-slate-100 bg-slate-50/30 mt-12">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 tracking-tighter font-space-grotesk">
              Our Hiring <span className="text-slate-500">Process</span>
            </h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-xl">Simple, transparent, and respectful</p>
          </motion.div>

          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 relative">
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
                      className={`w-24 h-24 rounded-full bg-gradient-to-br from-slate-100 to-slate-200 flex items-center justify-center mb-6 shadow-xl border-4 border-white`}
                    >
                      <span className="text-slate-600 font-black text-xl">{process.step}</span>
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-slate-800 transition-all font-medium"
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-slate-800 transition-all font-medium"
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-slate-800 transition-all font-medium"
                    />
                  </div>
                  <div>
                    <label className="block text-slate-700 font-semibold mb-2">Current Position</label>
                    <input
                      type="text"
                      name="currentPosition"
                      value={applicationData.currentPosition}
                      onChange={handleInputChange}
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-slate-800 transition-all font-medium"
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-slate-800 transition-all font-medium"
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-slate-800 transition-all font-medium"
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-slate-800 transition-all font-medium"
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-slate-800 transition-all font-medium"
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
                    className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-slate-800 focus:outline-none focus:border-slate-800 transition-all font-medium resize-none"
                    placeholder="Tell us why you're interested in this position and what makes you a great fit..."
                  />
                </div>

                <div className="flex gap-4">
                  <button
                    type="submit"
                    className="flex-1 bg-slate-900 hover:bg-slate-800 text-white font-black py-4 rounded-xl transition-all shadow-xl shadow-slate-900/10"
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
