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
    employees: '19',
    clients: '65+',
    locations: ['Rajkot'],
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
      <div className="px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center text-center px-4"
          >
            <h1 className="text-4xl md:text-7xl font-black text-black mb-6 md:mb-8 tracking-tighter leading-[1.2] heading-underline active pt-10">
              Connect With
              <span className="block text-gray-500 pb-2">
                Error Infotech
              </span>
            </h1>

            <p className="text-lg text-gray-500 max-w-3xl leading-relaxed font-medium mx-auto">
              {companyInfo.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* Tab Navigation */}
      <div className="px-6 pt-4 pb-12">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-6 mb-12">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab('contact')}
              className={`px-6 md:px-10 py-4 md:py-5 rounded-2xl font-black transition-all flex items-center gap-3 text-xs md:text-sm tracking-widest uppercase ${activeTab === 'contact'
                ? 'bg-gray-800 text-white shadow-2xl shadow-gray-800/25'
                : 'bg-gray-100 border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-800 shadow-xl'
                }`}
            >
              <span className="material-symbols-outlined text-lg font-black">mail</span>
              Contact Us
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setActiveTab('career')}
              className={`px-6 md:px-10 py-4 md:py-5 rounded-2xl font-black transition-all flex items-center gap-3 text-xs md:text-sm tracking-widest uppercase ${activeTab === 'career'
                ? 'bg-gray-800 text-white shadow-2xl shadow-gray-800/25'
                : 'bg-gray-100 border border-gray-200 text-gray-500 hover:border-gray-400 hover:text-gray-800 shadow-xl'
                }`}
            >
              <span className="material-symbols-outlined text-lg font-black">work</span>
              Join Our Team
            </motion.button>
          </div>
        </div>
      </div>

      <div className="px-6 pb-12">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
          {/* Left Side - Forms */}
          <div>
            {activeTab === 'contact' ? (
              /* Contact Form */
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]"
              >
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tighter heading-underline active">Send Us a Message</h2>
                <form onSubmit={handleContactSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-600 font-bold text-sm mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={contactForm.name}
                        onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-500 focus:bg-white focus:outline-none transition-all"
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
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-500 focus:bg-white focus:outline-none transition-all"
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
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-500 focus:bg-white focus:outline-none transition-all"
                        placeholder="+919876543210"
                      />
                      <p className="text-slate-400 text-[10px] mt-1 font-bold">Format: +919876543210 (no spaces)</p>
                    </div>
                    <div>
                      <label className="block text-slate-400 font-black text-[10px] uppercase tracking-widest mb-2 pl-1">Company</label>
                      <input
                        type="text"
                        value={contactForm.company}
                        onChange={(e) => setContactForm({ ...contactForm, company: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder-slate-400 focus:border-slate-600 focus:bg-white focus:outline-none transition-all font-medium"
                        placeholder="Your company name"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-slate-400 font-black text-[10px] uppercase tracking-widest mb-2 pl-1">Service Interest</label>
                    <select
                      value={contactForm.service}
                      onChange={(e) => setContactForm({ ...contactForm, service: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 focus:border-slate-600 focus:bg-white focus:outline-none transition-all font-medium cursor-pointer"
                    >
                      <option value="">Select a service focus</option>
                      {services.map(service => (
                        <option key={service} value={service} className="bg-white text-slate-900">{service}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-slate-400 font-black text-[10px] uppercase tracking-widest mb-2 pl-1">Message *</label>
                    <textarea
                      required
                      rows="5"
                      value={contactForm.message}
                      onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-2xl px-5 py-4 text-slate-900 placeholder-slate-400 focus:border-slate-600 focus:bg-white focus:outline-none transition-all resize-none font-medium"
                      placeholder="Tell us about your objectives..."
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
                    className={`w-full font-black py-5 rounded-2xl transition-all shadow-2xl flex items-center justify-center gap-3 text-lg ${isSubmitting
                      ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                      : 'bg-gray-800 hover:bg-gray-700 text-white shadow-gray-800/25'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin font-black flex-shrink-0">sync</span>
                        Processing...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined font-black flex-shrink-0">send</span>
                        Send Message
                      </>
                    )}
                  </motion.button>
                </form>

                {/* Live Map Integration */}
                <div className="mt-12 group relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-slate-300 via-slate-400 to-slate-500 rounded-[2.5rem] blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                  <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 shadow-2xl h-[350px] bg-slate-50">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3691.6705603501!2d70.7981!3d22.3015!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3959ca1fb3fd04fb%3A0xe54d6faebf4b0!2sRajkot%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1712517812345"
                      width="100%"
                      height="100%"
                      style={{ border: 0, filter: 'grayscale(0.2) contrast(1.1) brightness(1.1)' }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Error Infotech Location"
                    ></iframe>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-200 shadow-lg flex items-center gap-2">
                      <span className="material-symbols-outlined text-sm font-black text-slate-600">location_on</span>
                      <span className="text-slate-900 font-black text-[10px] uppercase tracking-widest">Rajkot HQ</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ) : (
              /* Career Form */
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 border border-slate-200 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)]"
              >
                <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tighter heading-underline active">Join Our Team</h2>
                <form onSubmit={handleCareerSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-slate-600 font-bold text-sm mb-2">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={careerForm.name}
                        onChange={(e) => setCareerForm({ ...careerForm, name: e.target.value })}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-500 focus:bg-white focus:outline-none transition-all"
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
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-500 focus:bg-white focus:outline-none transition-all"
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
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-500 focus:bg-white focus:outline-none transition-all"
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
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-slate-500 focus:bg-white focus:outline-none transition-all"
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 focus:border-slate-500 focus:bg-white focus:outline-none transition-all"
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
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-slate-800 file:text-white hover:file:bg-slate-700 transition-all font-bold"
                    />
                  </div>

                  <div>
                    <label className="block text-slate-600 font-bold text-sm mb-2">Cover Letter</label>
                    <textarea
                      rows="4"
                      value={careerForm.coverLetter}
                      onChange={(e) => setCareerForm({ ...careerForm, coverLetter: e.target.value })}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-900 placeholder-slate-400 focus:border-slate-500 focus:bg-white focus:outline-none transition-all resize-none"
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
                      : 'bg-gray-800 hover:bg-gray-700 text-white shadow-gray-800/25'
                      }`}
                  >
                    {isSubmitting ? (
                      <>
                        <span className="material-symbols-outlined animate-spin flex-shrink-0">sync</span>
                        Submitting Application...
                      </>
                    ) : (
                      <>
                        <span className="material-symbols-outlined flex-shrink-0">work</span>
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
            className="bg-slate-50 rounded-[2.5rem] md:rounded-[3rem] p-6 md:p-10 border border-slate-200 shadow-xl"
          >
            <h2 className="text-3xl md:text-4xl font-black text-slate-900 mb-8 tracking-tighter heading-underline active">About Error Infotech</h2>

            <div className="space-y-6">
              {/* Company Overview */}
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-3">Company Overview</h3>
                <p className="text-slate-600 mb-4">{companyInfo.description}</p>

                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 gap-6">
                  {[
                    { value: companyInfo.founded, label: 'Founded' },
                    { value: companyInfo.employees, label: 'Employees' },
                    { value: companyInfo.clients, label: 'Clients' },
                    { value: companyInfo.locations.length, label: 'Global Presence' }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ y: -5, borderColor: 'rgba(71,85,105,0.2)' }}
                      className={`text-center p-6 rounded-2xl border border-slate-200 shadow-sm transition-all duration-500 relative overflow-hidden group ${i % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
                    >
                      <div className="text-3xl font-black text-slate-900 mb-1">{stat.value}</div>
                      <div className="text-slate-400 text-[10px] font-black uppercase tracking-[0.2em]">{stat.label}</div>
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
                      <span className="material-symbols-outlined text-gray-400 text-sm font-black">check_circle</span>
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
                    <span key={index} className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-bold uppercase tracking-wider">
                      {location}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-lg">
                <h3 className="text-xl font-black text-slate-900 mb-6 uppercase tracking-tighter">Connect Directly</h3>
                <div className="space-y-6">
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-100">
                      <span className="material-symbols-outlined text-xl font-black">email</span>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest leading-none mb-1">Email us at</div>
                      <span className="text-slate-900 font-bold text-lg">errorinfotech404@gmail.com</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-slate-600 border border-slate-100">
                      <span className="material-symbols-outlined text-xl font-black">phone</span>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest leading-none mb-1">Call our office</div>
                      <span className="text-slate-900 font-bold text-lg">+91 81287 04400</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-5">
                    <div className="w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center text-slate-900 border border-slate-200">
                      <span className="material-symbols-outlined text-xl font-black">location_on</span>
                    </div>
                    <div>
                      <div className="text-slate-400 text-[9px] font-black uppercase tracking-widest leading-none mb-1">Visit our HQ</div>
                      <span className="text-slate-900 font-bold text-lg">Rajkot, India</span>
                    </div>
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
