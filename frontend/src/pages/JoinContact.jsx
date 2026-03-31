import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactAPI } from '../services/api';

const JoinContact = () => {
  const [activeTab, setActiveTab] = useState('contact');
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: ''
  });
  const [careerForm, setCareerForm] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    coverLetter: ''
  });

  const services = [
    'Custom Software Development',
    'AI/ML Integration',
    'Digital Marketing',
    'SEO Optimization',
    'Social Media Marketing',
    'Content Marketing',
    'PPC Advertising',
    'Cloud Migration',
    'Cybersecurity Audit',
    'Business Transformation',
    'Graphical Development',
    'Collaboration & Project Management',
    'General Inquiry'
  ];

  const positions = [
    'Software Developer',
    'Frontend Developer',
    'Backend Developer',
    'Full Stack Developer',
    'UI/UX Designer',
    'Digital Marketing Specialist',
    'Project Manager',
    'Business Analyst',
    'QA Engineer',
    'DevOps Engineer',
    'AI/ML Engineer',
    'Data Scientist',
    'Cybersecurity Specialist',
    'Cloud Architect'
  ];

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  const handleContactSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Format phone number by removing spaces and special characters
      const formattedPhone = contactForm.phone.replace(/\s+/g, '').replace(/[^0-9+]/g, '');

      const formData = {
        ...contactForm,
        phone: formattedPhone
      };

      const response = await contactAPI.submitContact(formData);

      if (response.data.success) {
        alert('✅ Success! We\'ll contact you within 24 hours. Thank you for your inquiry!');
        // Reset form
        setContactForm({
          name: '',
          email: '',
          phone: '',
          company: '',
          message: '',
          service: ''
        });
      } else {
        setSubmitError(response.data.error || 'Failed to submit form');
      }
    } catch (error) {
      console.error('Error submitting contact form:', error);
      if (error.response?.data?.details) {
        setSubmitError(`Error: ${error.response.data.details.join(', ')}`);
      } else {
        setSubmitError('Network error. Please try again or contact us directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCareerSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError('');

    try {
      // Format phone number by removing spaces and special characters
      const formattedPhone = careerForm.phone.replace(/\s+/g, '').replace(/[^0-9+]/g, '');

      // For career form, we'll use 'General Inquiry' as service type and include position in message
      const careerData = {
        ...careerForm,
        phone: formattedPhone,
        service: 'General Inquiry',
        message: `Job Application for: ${careerForm.position}\nExperience: ${careerForm.experience} years\nCover Letter: ${careerForm.coverLetter || 'Not provided'}`
      };

      const response = await contactAPI.submitContact(careerData);

      if (response.data.success) {
        alert('✅ Application submitted successfully! We\'ll review your profile and contact you soon.');
        // Reset form
        setCareerForm({
          name: '',
          email: '',
          phone: '',
          position: '',
          experience: '',
          resume: null,
          coverLetter: ''
        });
      } else {
        setSubmitError(response.data.error || 'Failed to submit application');
      }
    } catch (error) {
      console.error('Error submitting career form:', error);
      if (error.response?.data?.details) {
        setSubmitError(`Error: ${error.response.data.details.join(', ')}`);
      } else {
        setSubmitError('Network error. Please try again or contact us directly.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const companyInfo = {
    name: 'Error Infotech',
    tagline: 'Engineering Structured Digital Growth',
    description: 'We design intelligent digital ecosystems that help businesses scale faster and smarter through cutting-edge technology solutions.',
    founded: '2019',
    employees: '50+',
    clients: '200+',
    locations: ['Mumbai', 'Delhi', 'Bangalore', 'Hyderabad'],
    services: [
      'Enterprise Software Development',
      'AI & Automation Solutions',
      'Digital Transformation',
      'Cloud Infrastructure',
      'Cybersecurity Services',
      'Data Analytics & BI'
    ]
  };

  return (
    <div className="min-h-screen premium-bg pt-20">
      {/* Header Section */}
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-500/30 backdrop-blur-sm mb-8">
              <span className="material-symbols-outlined text-blue-400">group_add</span>
              <span className="text-blue-400 font-bold tracking-wider uppercase text-sm">JOIN & CONTACT</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 font-black tracking-tight" style={{ fontFamily: "'Space Grotesk', sans-serif" }}>
              Connect With
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600">
                Error Infotech
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl leading-relaxed font-medium">
              {companyInfo.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('contact')}
              className={`px-8 py-4 rounded-full font-bold transition-all flex items-center gap-3 ${activeTab === 'contact'
                ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white shadow-lg shadow-blue-500/25'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
            >
              <span className="material-symbols-outlined">mail</span>
              Contact Us
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab('career')}
              className={`px-8 py-4 rounded-full font-bold transition-all flex items-center gap-3 ${activeTab === 'career'
                ? 'bg-gradient-to-r from-green-600 to-emerald-600 text-white shadow-lg shadow-green-500/25'
                : 'bg-white border border-slate-200 text-slate-600 hover:bg-slate-50'
                }`}
            >
              <span className="material-symbols-outlined">work</span>
              Join Our Team
            </motion.button>
          </div>
        </div>
      </div>

      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">
          {/* Left Side - Forms */}
          <div>
            {activeTab === 'contact' ? (
              /* Contact Form */
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card rounded-2xl p-8 border border-slate-100 shadow-xl bg-white/90 backdrop-blur-md"
              >
                <h2 className="text-3xl font-black text-slate-900 mb-6">Send Us a Message</h2>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-600 font-bold text-sm mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 font-bold text-sm mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={contactForm.email}
                        onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-600 font-bold text-sm mb-2">Phone Number</label>
                      <input
                        type="tel"
                        value={contactForm.phone}
                        onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                        placeholder="+919876543210"
                      />
                      <p className="text-slate-400 text-[10px] mt-1 font-bold">Format: +919876543210 (no spaces)</p>
                    </div>
                    <div>
                      <label className="block text-slate-600 font-bold text-sm mb-2">Company</label>
                      <input
                        type="text"
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-300 mb-2">Service Interest</label>
                    <select
                      value={contactForm.service}
                      onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none transition-all"
                    >
                      <option value="">Select a service</option>
                      {services.map(service => (
                        <option key={service} value={service} className="bg-white text-slate-900">{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-600 font-bold text-sm mb-2">Message *</label>
                    <textarea
                      required
                      rows="5"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none transition-all resize-none"
                      placeholder="Tell us about your project or inquiry..."
                    ></textarea>
                  </div>

                  {submitError && (
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-center">
                      ❌ {submitError}
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 ${isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin">sync</span>
                        Sending Message...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined">send</span>
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            ) : (
              /* Career Form */
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="glass-card rounded-2xl p-8 border border-slate-100 shadow-xl bg-white/90 backdrop-blur-md"
              >
                <h2 className="text-3xl font-black text-slate-900 mb-6">Join Our Team</h2>
                <form onSubmit={handleCareerSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-600 font-bold text-sm mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={careerForm.name}
                        onChange={(e) => setCareerForm({ ...careerForm, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-green-500 focus:bg-white focus:outline-none transition-all"
                        placeholder="Enter your name"
                      />
                    </div>
                    <div>
                      <label className="block text-slate-600 font-bold text-sm mb-2">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={careerForm.email}
                        onChange={(e) => setCareerForm({ ...careerForm, email: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-green-500 focus:bg-white focus:outline-none transition-all"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-600 font-bold text-sm mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={careerForm.phone}
                        onChange={(e) => setCareerForm({ ...careerForm, phone: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-green-500 focus:bg-white focus:outline-none transition-all"
                        placeholder="+919876543210"
                      />
                      <p className="text-slate-400 text-[10px] mt-1 font-bold">Format: +919876543210 (no spaces)</p>
                    </div>
                    <div>
                      <label className="block text-slate-600 font-bold text-sm mb-2">Position Applying For *</label>
                      <select
                        required
                        value={careerForm.position}
                        onChange={(e) => setCareerForm({ ...careerForm, position: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-green-500 focus:bg-white focus:outline-none transition-all"
                      >
                        <option value="">Select position</option>
                        {positions.map(position => (
                          <option key={position} value={position} className="bg-white text-slate-900">{position}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-600 font-bold text-sm mb-2">Years of Experience *</label>
                    <select
                      required
                      value={careerForm.experience}
                      onChange={(e) => setCareerForm({ ...careerForm, experience: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-green-500 focus:bg-white focus:outline-none transition-all"
                    >
                      <option value="">Select experience level</option>
                      <option value="0-1" className="bg-white">0-1 years</option>
                      <option value="1-3" className="bg-white">1-3 years</option>
                      <option value="3-5" className="bg-white">3-5 years</option>
                      <option value="5-10" className="bg-white">5-10 years</option>
                      <option value="10+" className="bg-white">10+ years</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-600 font-bold text-sm mb-2">Upload Resume *</label>
                    <input
                      type="file"
                      required
                      accept=".pdf,.doc,.docx"
                      onChange={(e) => setCareerForm({ ...careerForm, resume: e.target.files[0] })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-blue-600 file:text-white hover:file:bg-blue-700 transition-all font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 font-bold text-sm mb-2">Cover Letter</label>
                    <textarea
                      rows="4"
                      value={careerForm.coverLetter}
                      onChange={(e) => setCareerForm({ ...careerForm, coverLetter: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-green-500 focus:bg-white focus:outline-none transition-all resize-none"
                      placeholder="Tell us why you want to join Error Infotech..."
                    ></textarea>
                  </div>

                  {submitError && (
                    <div className="p-4 bg-red-500/20 border border-red-500/30 rounded-xl text-red-300 text-center">
                      ❌ {submitError}
                    </div>
                  )}

                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-3 ${isSubmitting
                      ? 'bg-gray-600 cursor-not-allowed'
                      : 'bg-gradient-to-r from-green-500 to-emerald-500 hover:from-green-600 hover:to-emerald-600 text-white'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin">sync</span>
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined">work</span>
                        Submit Application
                      </>
                    )}
                  </motion.button>
                </form>
              </motion.div>
            )}
          </div>

          {/* Right Side - Company Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-card rounded-2xl p-8 border border-slate-100 shadow-xl bg-white/90 backdrop-blur-md"
          >
            <h2 className="text-3xl font-black text-slate-900 mb-6">About Error Infotech</h2>

            <div className="space-y-6">
              {/* Company Overview */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Company Overview</h3>
                <p className="text-slate-600 mb-4">{companyInfo.description}</p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { value: companyInfo.founded, label: 'Founded', color: 'from-blue-600 to-cyan-600' },
                    { value: companyInfo.employees, label: 'Employees', color: 'from-emerald-600 to-teal-600' },
                    { value: companyInfo.clients, label: 'Clients', color: 'from-purple-600 to-pink-600' },
                    { value: companyInfo.locations.length, label: 'Locations', color: 'from-orange-600 to-red-600' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, borderColor: 'rgba(37,99,235,0.4)' }}
                      className="text-center p-4 bg-white rounded-xl border border-slate-200 shadow-sm transition-all duration-500 relative overflow-hidden group"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                      <div className={`text-2xl font-black bg-clip-text text-transparent bg-gradient-to-r ${stat.color}`}>{stat.value}</div>
                      <div className="text-slate-500 text-xs font-bold uppercase tracking-wider">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Our Services</h3>
                <div className="space-y-2">
                  {companyInfo.services.map((service, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-emerald-600 text-sm font-black">check_circle</span>
                      <span className="text-slate-600 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Locations */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Locations</h3>
                <div className="flex flex-wrap gap-2">
                  {companyInfo.locations.map((location, index) => (
                    <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider">
                      {location}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-600">email</span>
                    <span className="text-slate-600 font-medium">info@errorinfotech.com</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-600">phone</span>
                    <span className="text-slate-600 font-medium">+91 98765 43210</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-blue-600">location_on</span>
                    <span className="text-slate-600 font-medium">Mumbai, India (HQ)</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default JoinContact;