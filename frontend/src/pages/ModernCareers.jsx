import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Careers = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    message: '',
    resume: null
  });

  const openPositions = [
    {
      id: 1,
      title: 'Digital Marketer',
      department: 'Marketing',
      type: 'Full-time',
      experience: '2-4 years',
      location: 'Remote',
      salary: '₹40,000 - ₹70,000',
      description: 'Manage performance marketing campaigns across Google, Meta, and LinkedIn platforms with data-driven optimization strategies.',
      requirements: ['Google Ads Certification', 'Meta Blueprint Certification', 'Analytics Experience', 'Campaign Management'],
      benefits: ['Performance Bonuses', 'Learning Budget', 'Flexible Hours']
    },
    {
      id: 2,
      title: 'CRM Developer',
      department: 'Technology',
      type: 'Full-time',
      experience: '3-5 years',
      location: 'Hybrid',
      salary: '₹60,000 - ₹1,00,000',
      description: 'Build and customize CRM solutions with advanced automation, integrations, and reporting capabilities for enterprise clients.',
      requirements: ['JavaScript/Node.js', 'CRM Platform Experience', 'API Integration', 'Database Management'],
      benefits: ['Stock Options', 'Health Insurance', 'Professional Development']
    },
    {
      id: 3,
      title: 'Designer',
      department: 'Creative',
      type: 'Full-time',
      experience: '2-4 years',
      location: 'Remote',
      salary: '₹35,000 - ₹65,000',
      description: 'Create stunning visual designs for websites, applications, and marketing materials with modern UI/UX principles.',
      requirements: ['Figma/Sketch', 'Adobe Creative Suite', 'UI/UX Design', 'Prototyping Skills'],
      benefits: ['Creative Freedom', 'MacBook Provided', 'Design Community Access']
    },
    {
      id: 4,
      title: 'Automation Specialist',
      department: 'Operations',
      type: 'Full-time',
      experience: '2-3 years',
      location: 'Remote',
      salary: '₹45,000 - ₹80,000',
      description: 'Implement workflow automation solutions using n8n, Zapier, and custom scripts to streamline business processes.',
      requirements: ['n8n/Zapier', 'Workflow Design', 'Problem Solving', 'Technical Documentation'],
      benefits: ['Process Ownership', 'Innovation Time', 'Tool Budget']
    }
  ];

  const whyWorkWithUs = [
    {
      title: 'Cutting-Edge Projects',
      description: 'Work on revolutionary CRM and automation solutions that transform how businesses operate globally.',
      icon: 'rocket_launch'
    },
    {
      title: 'Growth Opportunities',
      description: 'Unlimited learning budget, certifications, and career advancement in a rapidly growing tech company.',
      icon: 'trending_up'
    },
    {
      title: 'Work-Life Balance',
      description: 'Flexible hours, remote work options, and a culture that values personal time and well-being.',
      icon: 'balance'
    },
    {
      title: 'Competitive Compensation',
      description: 'Above-market salaries, performance bonuses, and equity options for key contributors.',
      icon: 'payments'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value, files } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Application submitted:', formData);
    alert('Thank you for your application! We will review and contact you soon.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      position: '',
      experience: '',
      message: '',
      resume: null
    });
  };

  const filteredPositions = activeFilter === 'all' 
    ? openPositions 
    : openPositions.filter(job => job.department.toLowerCase() === activeFilter);

  return (
    <div className="min-h-screen premium-bg pt-20">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-blue-600">work</span>
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">JOIN OUR TEAM</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tighter">
              Build the Future of 
              <span className="block text-slate-500">
                Digital Business
              </span>
            </h1>
            
            <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed font-medium">
              Join a team of innovators shaping the next generation of CRM and automation solutions
            </p>
          </motion.div>
        </div>
      </div>

      {/* Open Positions */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Open Positions</h2>
            <p className="text-xl text-slate-500 font-medium">Join our growing team of talented professionals</p>
          </div>

          {/* Department Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'marketing', 'technology', 'creative', 'operations'].map(filter => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  activeFilter === filter
                    ? 'bg-gradient-to-r from-blue-700 to-sky-500 text-white shadow-lg'
                    : 'bg-white/10 text-slate-300 hover:bg-white/20'
                }`}
              >
                {filter.charAt(0).toUpperCase() + filter.slice(1)}
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredPositions.map((job, index) => (
              <motion.div
                key={job.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="glass-card rounded-2xl p-8 border border-white/10  transition-all duration-300 backdrop-blur-sm"
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{job.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                        {job.type}
                      </span>
                      <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm">
                        {job.location}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-white">{job.salary}</div>
                    <div className="text-slate-400 text-sm">{job.experience}</div>
                  </div>
                </div>
                
                <p className="text-slate-300 mb-6">{job.description}</p>
                
                <div className="mb-6">
                  <h4 className="text-white font-bold mb-2">Requirements:</h4>
                  <ul className="text-slate-300 text-sm space-y-1">
                    {job.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-green-400 text-sm">check_circle</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="mb-6">
                  <h4 className="text-white font-bold mb-2">Benefits:</h4>
                  <div className="flex flex-wrap gap-2">
                    {job.benefits.map((benefit, idx) => (
                      <span key={idx} className="px-2 py-1 bg-purple-500/20 text-purple-400 rounded text-xs">
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-700 to-sky-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-3 rounded-full transition-all">
                  Apply Now
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Work With Us */}
      <div className="px-6 py-20 bg-gradient-to-r from-slate-800/50 to-blue-900/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Why Work With Us?</h2>
            <p className="text-xl text-slate-300">What makes Error Infotech a great place to build your career</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyWorkWithUs.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="glass-card rounded-2xl p-8 border border-white/10 backdrop-blur-sm text-center group"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-700 to-sky-500 flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <span className="material-symbols-outlined text-white text-2xl">{benefit.icon}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{benefit.title}</h3>
                <p className="text-slate-300">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div className="px-6 py-20">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Join Us?</h2>
            <p className="text-xl text-slate-300">Submit your application and become part of our innovative team</p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card rounded-2xl p-8 border border-white/10 backdrop-blur-sm"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-bold mb-2">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-white font-bold mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-bold mb-2">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                    placeholder="+91 XXXXXXXXXX"
                  />
                </div>
                <div>
                  <label className="block text-white font-bold mb-2">Position Applying For *</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-500"
                  >
                    <option value="">Select Position</option>
                    {openPositions.map(job => (
                      <option key={job.id} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-white font-bold mb-2">Years of Experience *</label>
                <select
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-blue-500"
                >
                  <option value="">Select Experience Level</option>
                  <option value="0-1">0-1 years</option>
                  <option value="1-2">1-2 years</option>
                  <option value="2-4">2-4 years</option>
                  <option value="4-6">4-6 years</option>
                  <option value="6+">6+ years</option>
                </select>
              </div>
              
              <div>
                <label className="block text-white font-bold mb-2">Upload Resume *</label>
                <input
                  type="file"
                  name="resume"
                  onChange={handleInputChange}
                  accept=".pdf,.doc,.docx"
                  required
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-500 file:text-white hover:file:bg-blue-600"
                />
              </div>
              
              <div>
                <label className="block text-white font-bold mb-2">Cover Letter / Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-slate-400 focus:outline-none focus:border-blue-500"
                  placeholder="Tell us why you're interested in joining Error Infotech..."
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-700 to-sky-500 hover:from-blue-600 hover:to-cyan-600 text-white font-bold py-4 rounded-full transition-all text-lg"
              >
                Submit Application
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Careers;
