import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { contactAPI } from '../services/api';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
        phone: formattedPhone
      };

      const response = await contactAPI.submitContact(submitData);

      if (response.data.success) {
        alert('✅ Success! We\'ll contact you within 24 hours. Thank you for your inquiry!');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          service: '',
          message: ''
        });
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

  const contactOptions = [
    {
      title: 'Direct Call',
      description: 'Speak directly with our business consultants',
      icon: 'call',
      detail: '+91 98765 43210',
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Business Email',
      description: 'Professional correspondence and proposals',
      icon: 'mail',
      detail: 'hello@errorinfotech.com',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'WhatsApp Chat',
      description: 'Quick discussions and file sharing',
      icon: 'chat',
      detail: '+91 98765 43210',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'Office Visit',
      description: 'Face-to-face meetings at our headquarters',
      icon: 'location_on',
      detail: 'Mumbai, India',
      color: 'from-purple-500 to-pink-500'
    }
  ];

  const services = [
    'Digital Marketing',
    'Custom Software Development',
    'AI/ML Integration',
    'Cloud Migration',
    'Cybersecurity Audit',
    'Business Transformation'
  ];

  return (
    <div className="min-h-screen bg-white pt-20">
      {/* Hero Section */}
      <div className="px-6 py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50 border border-blue-100 mb-8 shadow-sm">
              <span className="material-symbols-outlined text-blue-600">support_agent</span>
              <span className="text-blue-600 font-black uppercase tracking-widest text-[10px]">Strategic Communication Channel</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-none font-space-grotesk">
              Talk to a
              <span className="block text-blue-600">
                Real Expert
              </span>
            </h1>

            <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6 font-medium">
              We prioritize high-fidelity human interaction to drive exponential business outcomes.
            </p>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 font-medium">
              Zero automation. Pure technical expertise focused on architecting your next competitive advantage.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="px-6 py-32 bg-white">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20">

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-12"
          >
            <div className="bg-slate-50 rounded-consistent-3xl p-12 border border-slate-200 shadow-xl">
              <h2 className="text-4xl font-black text-slate-900 mb-10 tracking-tight">The Human Protocol</h2>
              <div className="space-y-10">
                <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:bg-blue-600 transition-all">
                    <span className="material-symbols-outlined text-blue-600 group-hover:text-white text-2xl">psychology</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Deep Technical Insight</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">Our consultants are active technical architects who understand the granular complexities of enterprise-scale systems.</p>
                  </div>
                </div>

                <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:bg-blue-600 transition-all">
                    <span className="material-symbols-outlined text-blue-600 group-hover:text-white text-2xl">bolt</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Accelerated Resolution</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">Immediate access to decision-quality intelligence. No scripts, no delays, just actionable solutions.</p>
                  </div>
                </div>

                <div className="flex items-start gap-8 group">
                  <div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-lg group-hover:bg-blue-600 transition-all">
                    <span className="material-symbols-outlined text-blue-600 group-hover:text-white text-2xl">handshake</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">Institutional Trust</h3>
                    <p className="text-slate-500 font-medium leading-relaxed">We build long-term technical partnerships by delivering consistent, measurable value from the first interaction.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Methods */}
            <div>
              <h2 className="text-4xl font-black text-slate-900 mb-12 tracking-tight">Direct Access Nodes</h2>
              <div className="grid sm:grid-cols-2 gap-8">
                {contactOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white rounded-consistent-2xl p-8 border border-slate-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-300 shadow-md group"
                  >
                    <div className="flex flex-col gap-6">
                      <div className={`w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center border border-slate-100 group-hover:bg-blue-600 transition-all`}>
                        <span className="material-symbols-outlined text-blue-600 group-hover:text-white text-xl">{option.icon}</span>
                      </div>
                      <div>
                        <h3 className="text-xl font-black text-slate-900 mb-2">{option.title}</h3>
                        <p className="text-slate-500 text-sm font-medium mb-4">{option.description}</p>
                        <div className="text-blue-600 font-black uppercase tracking-widest text-[10px]">{option.detail}</div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Response Promise */}
            <div className="bg-blue-50/50 rounded-consistent-2xl p-10 border border-blue-100">
              <div className="flex items-start gap-6">
                <span className="material-symbols-outlined text-3xl text-blue-600">schedule</span>
                <div>
                  <h3 className="text-xl font-black text-slate-900 mb-4 tracking-tight">SLA Commitment</h3>
                  <div className="grid grid-cols-2 gap-6 text-sm">
                    <div>
                      <div className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-1">Standard Response</div>
                      <div className="text-slate-600 font-medium">Within 4 Hours</div>
                    </div>
                    <div>
                      <div className="text-blue-600 font-black uppercase tracking-widest text-[10px] mb-1">Critical Priority</div>
                      <div className="text-slate-600 font-medium">Immediate Uplift</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white rounded-consistent-3xl p-12 lg:p-16 border border-slate-200 shadow-3xl sticky top-32"
          >
            <h2 className="text-4xl font-black text-slate-900 mb-3 tracking-tight">Initialize Engagement</h2>
            <p className="text-slate-600 mb-12 font-medium">Please provide project parameters for a targeted consultation.</p>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-slate-900 font-black uppercase tracking-widest text-[10px]">Institutional Contact *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full h-16 px-6 bg-slate-50 border border-slate-200 rounded-consistent-lg text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none transition-all font-medium"
                    placeholder="E.g. John Doe"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-slate-900 font-black uppercase tracking-widest text-[10px]">Corporate Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full h-16 px-6 bg-slate-50 border border-slate-200 rounded-consistent-lg text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none transition-all font-medium"
                    placeholder="j.doe@enterprise.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-slate-900 font-black uppercase tracking-widest text-[10px]">Direct Node (Phone)</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full h-16 px-6 bg-slate-50 border border-slate-200 rounded-consistent-lg text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none transition-all font-medium"
                    placeholder="+91 00000 00000"
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-slate-900 font-black uppercase tracking-widest text-[10px]">Entity Name (Company)</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full h-16 px-6 bg-slate-50 border border-slate-200 rounded-consistent-lg text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none transition-all font-medium"
                    placeholder="Company Ltd."
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-slate-900 font-black uppercase tracking-widest text-[10px]">Domain of Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full h-16 px-6 bg-slate-50 border border-slate-200 rounded-consistent-lg text-slate-900 focus:border-blue-500 focus:bg-white focus:outline-none transition-all font-bold appearance-none"
                >
                  <option value="" className="bg-white">Select Priority Sector</option>
                  {services.map((service) => (
                    <option key={service} value={service} className="bg-white">{service}</option>
                  ))}
                </select>
              </div>

              <div className="space-y-3">
                <label className="text-slate-900 font-black uppercase tracking-widest text-[10px]">Strategic Requirements *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-6 bg-slate-50 border border-slate-200 rounded-consistent-lg text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none transition-all font-medium resize-none shadow-inner"
                  placeholder="Outline your technical goals, timeline, and security parameters..."
                ></textarea>
              </div>

              {submitError && (
                <div className="p-6 bg-red-50 border border-red-100 rounded-consistent-xl text-red-600 text-sm font-bold flex items-center gap-4">
                  <span className="material-symbols-outlined">error</span>
                  {submitError}
                </div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className={`w-full h-20 rounded-full font-black uppercase tracking-widest text-[10px] transition-all flex items-center justify-center gap-4 ${isSubmitting
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-blue-600 text-white shadow-2xl shadow-blue-500/40 hover:bg-blue-700'
                  }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="material-symbols-outlined animate-spin">sync</span>
                    Processing Transmission...
                  </>
                ) : (
                  <>
                    <span className="material-symbols-outlined">send</span>
                    Initialize Connection
                  </>
                )}
              </motion.button>

              <p className="text-center text-slate-400 text-[10px] font-black uppercase tracking-widest">
                Protected by enterprise-grade 256-bit encryption.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;