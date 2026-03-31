import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ContactForm = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    hrEmail: '',
    bdeEmail: '',
    company: '',
    companyMail: '',
    companyPhone: '',
    website: '',
    serviceType: 'consultation',
    projectBudget: '',
    message: '',
    subject: 'Free Consultation Request'
  });

  const serviceOptions = [
    { value: 'consultation', label: 'Free Consultation' },
    { value: 'web-development', label: 'Website Development' },
    { value: 'mobile-app', label: 'Mobile Application' },
    { value: 'ai-solution', label: 'AI Solution' },
    { value: 'crm-erp', label: 'CRM/ERP System' },
    { value: 'ecommerce', label: 'E-commerce Platform' },
    { value: 'digital-marketing', label: 'Digital Marketing' },
    { value: 'cloud-migration', label: 'Cloud Migration' },
    { value: 'cybersecurity', label: 'Cybersecurity' },
    { value: 'data-analytics', label: 'Data Analytics' },
    { value: 'custom-software', label: 'Custom Software Development' },
    { value: 'ui-ux', label: 'UI/UX Design' },
    { value: 'maintenance', label: 'IT Maintenance & Support' }
  ];

  const budgetOptions = [
    { value: '', label: 'Select Budget Range' },
    { value: 'under-5k', label: 'Under ₹5,000' },
    { value: '5k-10k', label: '₹5,000 - ₹10,000' },
    { value: '10k-25k', label: '₹10,000 - ₹25,000' },
    { value: '25k-50k', label: '₹25,000 - ₹50,000' },
    { value: '50k-100k', label: '₹50,000 - ₹1,00,000' },
    { value: 'above-100k', label: 'Above ₹1,00,000' }
  ];

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // In a real application, you would send the form data to a server here
    alert('Thank you for your consultation request! We will contact you shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      hrEmail: '',
      bdeEmail: '',
      company: '',
      companyMail: '',
      companyPhone: '',
      website: '',
      serviceType: 'consultation',
      projectBudget: '',
      message: '',
      subject: 'Free Consultation Request'
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-4xl bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 rounded-3xl border border-white/20 shadow-2xl shadow-cyan-500/10 overflow-hidden"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: 'spring', damping: 25 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Decorative Elements */}
        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500"></div>
        <div className="absolute top-10 right-10 w-20 h-20 bg-cyan-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 left-10 w-32 h-32 bg-purple-500/10 rounded-full blur-xl"></div>
        
        <div className="p-8 relative z-10">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Get Free Consultation
            </h2>
            <button
              onClick={onClose}
              className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-all text-white flex items-center justify-center"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-slate-300 font-medium mb-2">Your Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                  placeholder="Enter your full name"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 font-medium mb-2">Your Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 font-medium mb-2">Your Phone</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 font-medium mb-2">HR Email</label>
                <input
                  type="email"
                  name="hrEmail"
                  value={formData.hrEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                  placeholder="hr@company.com"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 font-medium mb-2">BDE Email</label>
                <input
                  type="email"
                  name="bdeEmail"
                  value={formData.bdeEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                  placeholder="bde@company.com"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 font-medium mb-2">Company Name</label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                  placeholder="Your company name"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 font-medium mb-2">Company Email</label>
                <input
                  type="email"
                  name="companyMail"
                  value={formData.companyMail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                  placeholder="company@domain.com"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 font-medium mb-2">Company Phone</label>
                <input
                  type="tel"
                  name="companyPhone"
                  value={formData.companyPhone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                  placeholder="+1 (555) 123-4567"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 font-medium mb-2">Company Website</label>
                <input
                  type="url"
                  name="website"
                  value={formData.website}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                  placeholder="https://www.yourcompany.com"
                />
              </div>
              
              <div>
                <label className="block text-slate-300 font-medium mb-2">Service Type</label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                >
                  {serviceOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
              
              <div>
                <label className="block text-slate-300 font-medium mb-2">Project Budget (Optional)</label>
                <select
                  name="projectBudget"
                  value={formData.projectBudget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                >
                  {budgetOptions.map(option => (
                    <option key={option.value} value={option.value}>{option.label}</option>
                  ))}
                </select>
              </div>
            </div>
            
            <div>
              <label className="block text-slate-300 font-medium mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all"
                placeholder="Enter subject for your inquiry"
              />
            </div>
            
            <div>
              <label className="block text-slate-300 font-medium mb-2">Your Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 focus:border-cyan-500/50 transition-all resize-none"
                placeholder="Tell us about your project, requirements, and how we can help you achieve your goals. Share any specific challenges you're facing or goals you'd like to accomplish..."
              ></textarea>
            </div>
            
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-4 rounded-xl border border-cyan-500/20">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Why Choose Error Infotech?</h3>
              <ul className="text-slate-300 text-sm space-y-1">
                <li>• 5+ years of experience in custom software development</li>
                <li>• Proven track record with 200+ successful projects</li>
                <li>• Expertise in latest technologies (AI, Cloud, Mobile)</li>
                <li>• Dedicated support and maintenance services</li>
                <li>• Competitive pricing with transparent billing</li>
              </ul>
            </div>
            
            <div className="flex gap-4 pt-4">
              <button
                type="button"
                onClick={onClose}
                className="flex-1 px-6 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium transition-all border border-white/10"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="flex-1 px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-medium transition-all shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40"
              >
                Send Consultation Request
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ContactForm;