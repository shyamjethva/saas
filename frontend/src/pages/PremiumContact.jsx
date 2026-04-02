import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
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
      setSubmitError('Network error. Please try again or contact us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactOptions = [
    {
      title: 'Direct Call',
      description: 'Speak directly with our consultants',
      icon: 'call',
      detail: '+91 98765 43210',
      color: 'from-blue-600 to-cyan-500'
    },
    {
      title: 'Business Email',
      description: 'Professional correspondence',
      icon: 'mail',
      detail: 'hello@errorinfotech.com',
      color: 'from-purple-600 to-pink-600'
    },
    {
      title: 'WhatsApp Chat',
      description: 'Quick discussions',
      icon: 'chat',
      detail: '+91 98765 43210',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      title: 'Office Visit',
      description: 'Visit our headquarters',
      icon: 'location_on',
      detail: 'Mumbai, India',
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
    <div className="min-h-screen premium-bg pt-20">
      {/* Hero Section */}
      <section className="px-6 py-24 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-slate-100 rounded-full blur-3xl -mr-48 -mt-48 opacity-50"></div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border border-slate-200 mb-8 shadow-sm">
              <span className="material-symbols-outlined text-slate-900">support_agent</span>
              <span className="text-slate-900 font-black uppercase tracking-widest text-xs">Expert Consultation</span>
            </div>

            <h1 className="text-5xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter leading-[1.1]">
              Talk to an
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-700 to-slate-500 py-2">
                Industry Expert
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed font-medium">
              We believe in real human conversations that drive real business results. No bots, just genuine expertise.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-5 gap-16">

          {/* Contact Info - 2 cols */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 border border-slate-100 rounded-[2.5rem] p-8 text-slate-900 shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <div className="relative z-10">
                <h2 className="text-3xl font-black mb-4 tracking-tight"> Start Your Success Story</h2>
                <p className="text-slate-600 mb-8 font-medium">
                  Expert-led strategies for your business growth.
                </p>
                <div className="grid gap-4">
                  {[
                    { icon: 'bolt', label: 'Fast Response', value: '4h SLA' },
                    { icon: 'psychology', label: 'Deep Insight', value: 'Expert-led' },
                    { icon: 'verified', label: 'Global Standards', value: 'Enterprise-grade' }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl bg-white border border-slate-100 shadow-sm transition-all hover:shadow-md">
                      <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center shadow-sm">
                        <span className="material-symbols-outlined text-blue-600 text-lg">{item.icon}</span>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-slate-900 font-bold text-sm leading-tight">{item.label}</div>
                        <div className="text-slate-400 font-medium text-[10px]">{item.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {contactOptions.map((opt, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, borderColor: 'rgba(37,99,235,0.2)' }}
                  className="p-5 bg-white rounded-3xl border border-slate-200 shadow-lg flex flex-col items-center text-center transition-all duration-500 relative overflow-hidden group"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${opt.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                  <div className={`w-9 h-9 rounded-xl bg-gradient-to-br ${opt.color} flex items-center justify-center mb-3 shadow-lg group-hover:scale-110 transition-transform duration-500`}>
                    <span className="material-symbols-outlined text-white text-base">{opt.icon}</span>
                  </div>
                  <h3 className="text-xs font-black text-slate-900 mb-0.5 group-hover:text-blue-600 transition-colors duration-500">{opt.title}</h3>
                  <div className="text-slate-900 font-bold text-[10px] break-all mb-1">{opt.detail}</div>
                  <p className="text-slate-400 text-[9px] font-bold uppercase tracking-widest">{opt.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Contact Form - 3 cols */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 bg-white rounded-[2.5rem] p-8 lg:p-10 border border-slate-200 shadow-2xl self-start"
          >
            <h2 className="text-3xl font-black text-slate-900 mb-2 tracking-tight">Project Inquiry</h2>
            <p className="text-slate-500 font-medium mb-6 leading-relaxed">Let's connect you with the right specialist.</p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-slate-900 font-black uppercase tracking-widest text-[10px] ml-1">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:bg-white focus:border-slate-900 focus:ring-0 transition-all font-medium"
                    placeholder="John Smith"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-slate-900 font-black uppercase tracking-widest text-[10px] ml-1">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:bg-white focus:border-slate-900 focus:ring-0 transition-all font-medium"
                    placeholder="john@enterprise.com"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-slate-900 font-black uppercase tracking-widest text-[10px] ml-1">Service Interest</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:bg-white focus:border-slate-900 focus:ring-0 transition-all font-medium"
                >
                  <option value="">Select Service</option>
                  {services.map(s => <option key={s} value={s}>{s}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-slate-900 font-black uppercase tracking-widest text-[10px] ml-1">Project Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={3}
                  className="w-full px-5 py-3.5 bg-slate-50 border border-slate-200 rounded-2xl text-slate-900 focus:bg-white focus:border-slate-900 focus:ring-0 transition-all font-medium resize-none"
                  placeholder="Tell us about your requirements..."
                ></textarea>
              </div>

              {submitError && (
                <div className="p-4 bg-red-50 rounded-2xl border border-red-100 text-red-600 text-sm font-bold text-center">
                  {submitError}
                </div>
              )}

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={isSubmitting}
                className="w-full py-5 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl text-lg shadow-2xl shadow-blue-500/25 flex items-center justify-center gap-3 transition-all disabled:opacity-50"
              >
                {isSubmitting ? (
                  <><span className="material-symbols-outlined animate-spin flex-shrink-0">sync</span>Processing...</>
                ) : (
                  <><span className="material-symbols-outlined flex-shrink-0">send</span>Schedule Consultation</>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </section >
    </div >
  );
};

export default ContactPage;