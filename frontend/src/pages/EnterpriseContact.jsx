import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { contactAPI } from '../services/api';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
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
      const submitData = {
        ...formData
      };

      const response = await contactAPI.submitContact(submitData);

      if (response.data.success) {
        alert('✅ Success! We\'ll contact you within 24 hours. Thank you for your inquiry!');
        // Reset form
        setFormData({
          name: '',
          email: '',
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
      detail: '+91 98765 43210',
      icon: 'call',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      title: 'Business Email',
      detail: 'hello@errorinfotech.com',
      icon: 'mail',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'WhatsApp Chat',
      detail: '+91 98765 43210',
      icon: 'chat',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      title: 'Office Visit',
      detail: 'Mumbai, India',
      icon: 'location_on',
      color: 'from-orange-600 to-red-600'
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
    <div className="min-h-screen premium-bg text-slate-900">
      {/* Hero Section */}
      <div className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <span className="inline-block px-4 py-2 bg-blue-600 text-sm font-semibold rounded-full">
              Real Human Connection
            </span>
          </div>

          <h1 className="text-5xl md:text-6xl font-black text-slate-900 mb-6 font-space-grotesk tracking-tighter">
            Talk to a
            <span className="text-blue-600"> Real Expert</span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-4 font-medium">
            We believe in real conversations that drive real business results.
          </p>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto mb-12 font-medium">
            No bots. No automated replies. Just genuine human expertise focused on solving your business challenges.
          </p>
        </div>
      </div>

      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12">

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-blue-50/50 border border-blue-100 rounded-2xl p-8">
              <h2 className="text-3xl font-black text-slate-900 mb-6 tracking-tighter">Why Choose Real Human Support?</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-white">psychology</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Deep Business Understanding</h3>
                    <p className="text-gray-300">Our consultants bring years of experience across industries, understanding not just technology but your specific business context.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="material-symbols-outlined text-white">bolt</span>
                  </div>
                  <div>
                    <h3 className="font-bold mb-2">Immediate Problem-Solving</h3>
                    <p className="text-gray-300">Get instant answers to your technical and strategic questions without waiting for scripted responses.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg shadow-purple-500/20">
                    <span className="material-symbols-outlined text-white">handshake</span>
                  </div>
                  <div>
                    <h3 className="font-black text-slate-900 mb-2">Long-term Partnership</h3>
                    <p className="text-slate-600 font-medium">Build relationships with actual team members who understand your evolving business needs.</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-slate-900 mb-8 tracking-tighter uppercase">How You Can Reach Us</h2>
              <div className="grid md:grid-cols-2 gap-4">
                {contactOptions.map((option, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, borderColor: 'rgba(37,99,235,0.2)' }}
                    className="bg-white border border-slate-200 rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-500 flex flex-col items-center text-center relative overflow-hidden group"
                  >
                    <div className={`absolute inset-0 bg-gradient-to-br ${option.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                    <div className={`w-10 h-10 bg-gradient-to-br ${option.color} rounded-lg flex items-center justify-center shadow-lg mb-3 group-hover:scale-110 transition-transform duration-500`}>
                      <span className="material-symbols-outlined text-white text-lg">{option.icon}</span>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm font-black text-slate-900 mb-1 group-hover:text-blue-600 transition-colors duration-500">{option.title}</h3>
                      <div className="text-blue-600 font-bold text-xs break-all">{option.detail}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 lg:p-8 shadow-2xl self-start">
            <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tighter">Schedule Your Consultation</h2>
            <p className="text-slate-600 mb-6 font-medium text-sm">Let's connect you with the right expert.</p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block font-black text-slate-900 mb-2 tracking-tighter uppercase text-xs">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none placeholder:text-slate-400"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block font-black text-slate-900 mb-2 tracking-tighter uppercase text-xs">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none placeholder:text-slate-400"
                    placeholder="john@company.com"
                  />
                </div>
              </div>

              <div>
                <label className="block font-black text-slate-900 mb-2 tracking-tighter uppercase text-xs">Service Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 focus:border-blue-500 focus:outline-none"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block font-black text-slate-900 mb-2 tracking-tighter uppercase text-xs">Project Details *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-lg text-slate-900 placeholder-slate-400 focus:border-blue-500 focus:outline-none resize-none font-medium"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-black py-4 rounded-lg transition-colors shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
