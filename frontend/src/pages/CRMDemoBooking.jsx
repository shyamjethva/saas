import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CRMDemoBooking = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    role: '',
    companySize: '',
    currentSystem: '',
    demoDate: '',
    demoTime: '',
    requirements: ''
  });

  const [step, setStep] = useState(1); // Multi-step form

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          service: 'CRM Demo Booking',
          message: `CRM Demo Request - ${formData.requirements || 'Standard demo requested'}`
        }),
      });

      const result = await response.json();

      if (result.success) {
        alert('✅ Demo booked successfully! We\'ll send calendar invite within 1 hour. Check your email!');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          role: '',
          companySize: '',
          currentSystem: '',
          demoDate: '',
          demoTime: '',
          requirements: ''
        });
        setStep(1);
      } else {
        alert('❌ Error: ' + result.error);
      }
    } catch (error) {
      console.error('Error booking demo:', error);
      alert('❌ Network error. Please try again or call us directly.');
    }
  };

  const nextStep = () => {
    if (step < 3) setStep(step + 1);
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const companySizes = [
    '1-10 employees',
    '11-50 employees',
    '51-200 employees',
    '201-500 employees',
    '500+ employees'
  ];

  const roles = [
    'CEO/Founder',
    'CTO/Technical Lead',
    'Sales Manager',
    'Marketing Director',
    'Operations Manager',
    'IT Manager',
    'Business Owner',
    'Other'
  ];

  const timeSlots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM'
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-32 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50 border border-blue-100 mb-8">
              <span className="material-symbols-outlined text-blue-600">event_available</span>
              <span className="text-blue-600 font-black tracking-widest uppercase text-[10px]">Strategic Consultation</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-slate-900 mb-8 tracking-tighter font-space-grotesk leading-none">
              Schedule Your <br />
              <span className="text-blue-600">
                Architecture Demo
              </span>
            </h1>

            <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4 font-medium">
              Experience the power of our enterprise CRM platform with a personalized live demonstration.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="px-6 pb-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-12">

          {/* Demo Benefits (Left Sidebar) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="bg-white rounded-consistent-2xl p-10 border border-slate-200 shadow-xl group">
              <h3 className="text-2xl font-black text-slate-900 mb-10 tracking-tight">Interactive Roadmap</h3>
              <div className="space-y-6">
                {[
                  { title: 'Lead Intelligence', icon: 'check_circle', desc: 'Track and convert leads automatically' },
                  { title: 'Visual Pipelines', icon: 'check_circle', desc: 'Enterprise workflow management' },
                  { title: 'Insight Dashboards', icon: 'check_circle', desc: 'Real-time performance analytics' },
                  { title: 'Ops Automation', icon: 'check_circle', desc: 'Reduce manual work by 70%' }
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 rounded-consistent-xl bg-slate-50 border border-slate-100 group-hover:bg-white transition-all">
                    <span className="material-symbols-outlined text-blue-600 mt-1">{item.icon}</span>
                    <div>
                      <div className="text-slate-900 font-black tracking-tight">{item.title}</div>
                      <div className="text-slate-500 text-[10px] font-black uppercase tracking-widest mt-1">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="bg-blue-600 rounded-consistent-2xl p-10 text-white shadow-2xl shadow-blue-500/20 group">
              <div className="text-center">
                <div className="text-5xl font-black font-space-grotesk tracking-tighter mb-2">500+</div>
                <div className="text-blue-100 font-black uppercase tracking-widest text-[10px]">Demos Conducted</div>
              </div>
              <div className="border-t border-white/10 my-8"></div>
              <div className="text-center">
                <div className="text-5xl font-black font-space-grotesk tracking-tighter mb-2">89%</div>
                <div className="text-blue-100 font-black uppercase tracking-widest text-[10px]">Efficiency Gain</div>
              </div>
            </div>

            {/* Demo Promise */}
            <div className="bg-slate-50 rounded-consistent-2xl p-10 border border-slate-200">
              <h3 className="text-xl font-black text-slate-900 mb-8 flex items-center gap-4 tracking-tight">
                <span className="material-symbols-outlined text-blue-600 font-black">verified</span>
                Quality Promise
              </h3>
              <ul className="space-y-4">
                {[
                  'Zero Pressure Consultation',
                  'Real Enterprise Scenarios',
                  'Deep-Dive Architecture Q&A',
                  'Immediate Strategic Follow-up'
                ].map((text, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-600 font-medium">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    {text}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-consistent-2xl p-12 lg:p-16 border border-slate-200 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-blue-600"></div>
              <div className="mb-16">
                {/* Progress Bar */}
                <div className="flex justify-between items-center mb-10">
                  <div className="flex gap-4">
                    {[1, 2, 3].map((num) => (
                      <div key={num} className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center font-black transition-all ${step === num
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                          : step > num ? 'bg-blue-50 text-blue-600 border border-blue-100'
                            : 'bg-slate-50 text-slate-300 border border-slate-100'
                          }`}>
                          {step > num ? <span className="material-symbols-outlined font-black">check</span> : num}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-right">
                    <span className="text-blue-600 font-black uppercase tracking-widest text-[10px] block mb-1">Step {step} of 3</span>
                    <span className="text-slate-900 font-black tracking-tight text-lg">
                      {step === 1 && 'Enterprise Profile'}
                      {step === 2 && 'Architecture Preferences'}
                      {step === 3 && 'Strategic Sync'}
                    </span>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-10">
                {/* Step 1: Business Information */}
                {step === 1 && (
                  <div className="grid md:grid-cols-2 gap-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Full Name *</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 font-bold placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                        placeholder="John Wickman"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Direct Email *</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 font-bold placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                        placeholder="john@company.com"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Direct Line</label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-6 py-5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 font-bold placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                        placeholder="+91 00000 00000"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Organization *</label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 font-bold placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                        placeholder="Enterprise Global Ltd"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Job Title *</label>
                      <select
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all appearance-none"
                      >
                        <option value="">Strategic Position</option>
                        {roles.map((role) => (
                          <option key={role} value={role}>{role}</option>
                        ))}
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Team Scale *</label>
                      <select
                        name="companySize"
                        value={formData.companySize}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all appearance-none"
                      >
                        <option value="">Organization Size</option>
                        {companySizes.map((size) => (
                          <option key={size} value={size}>{size}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {/* Step 2: Demo Preferences */}
                {step === 2 && (
                  <div className="space-y-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Current CRM Infrastructure *</label>
                      <select
                        name="currentSystem"
                        value={formData.currentSystem}
                        onChange={handleChange}
                        required
                        className="w-full px-6 py-5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all appearance-none"
                      >
                        <option value="">Existing System Architecture</option>
                        <option value="Excel/Spreadsheets">Legacy Excel/Spreadsheets</option>
                        <option value="Basic CRM">Standard CRM (Zoho, HubSpot)</option>
                        <option value="No System">Unified System Initialization</option>
                        <option value="Custom Solution">Custom Enterprise Stack</option>
                        <option value="Other">External Ecosystem Integration</option>
                      </select>
                    </div>

                    <div className="grid md:grid-cols-2 gap-10">
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Strategic Window *</label>
                        <input
                          type="date"
                          name="demoDate"
                          value={formData.demoDate}
                          onChange={handleChange}
                          required
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-6 py-5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                        />
                      </div>
                      <div className="space-y-3">
                        <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Alignment Time *</label>
                        <select
                          name="demoTime"
                          value={formData.demoTime}
                          onChange={handleChange}
                          required
                          className="w-full px-6 py-5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 font-bold focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all appearance-none"
                        >
                          <option value="">Select Time Slot</option>
                          {timeSlots.map((slot) => (
                            <option key={slot} value={slot}>{slot}</option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>
                )}

                {/* Step 3: Requirements & Confirmation */}
                {step === 3 && (
                  <div className="space-y-10">
                    <div className="space-y-3">
                      <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Strategic Requirements & Roadmap</label>
                      <textarea
                        name="requirements"
                        value={formData.requirements}
                        onChange={handleChange}
                        rows={4}
                        className="w-full px-8 py-6 rounded-3xl bg-slate-50 border border-slate-200 text-slate-900 font-bold placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all resize-none"
                        placeholder="Detail the specific enterprise challenges you'd like to address in the demo..."
                      ></textarea>
                    </div>

                    {/* Summary */}
                    <div className="bg-slate-50 rounded-consistent-2xl p-10 border border-slate-200 shadow-sm relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600/5 rounded-full -mr-16 -mt-16"></div>
                      <h3 className="text-xl font-black text-slate-900 mb-8 tracking-tight">Sync Review</h3>
                      <div className="grid md:grid-cols-2 gap-8 text-sm">
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 font-black uppercase tracking-widest text-[9px]">Date:</span>
                          <span className="text-slate-900 font-bold tracking-tight">{formData.demoDate}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 font-black uppercase tracking-widest text-[9px]">Time:</span>
                          <span className="text-slate-900 font-bold tracking-tight">{formData.demoTime}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 font-black uppercase tracking-widest text-[9px]">Partner:</span>
                          <span className="text-slate-900 font-bold tracking-tight">{formData.company}</span>
                        </div>
                        <div className="flex items-center gap-3">
                          <span className="text-slate-400 font-black uppercase tracking-widest text-[9px]">Address:</span>
                          <span className="text-slate-900 font-bold tracking-tight">{formData.email}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* Navigation Buttons */}
                <div className="flex gap-6 pt-10">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex-1 py-5 rounded-full bg-white border border-slate-200 text-slate-900 font-black uppercase tracking-widest text-[10px] hover:bg-slate-50 transition-colors flex items-center justify-center gap-3"
                    >
                      <span className="material-symbols-outlined text-sm">arrow_back</span>
                      Back Track
                    </button>
                  )}

                  {step < 3 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      className="flex-[2] py-5 rounded-full bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/40 flex items-center justify-center gap-4 group"
                    >
                      Continue Architecture Setup
                      <span className="material-symbols-outlined text-sm group-hover:translate-x-2 transition-transform">arrow_forward</span>
                    </button>
                  ) : (
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="flex-[2] py-6 rounded-full bg-blue-600 text-white font-black uppercase tracking-widest text-[10px] hover:bg-blue-700 transition-all shadow-2xl shadow-blue-500/40 flex items-center justify-center gap-4"
                    >
                      <span className="material-symbols-outlined font-black">calendar_check</span>
                      Initialize Demo Alignment
                    </motion.button>
                  )}
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CRMDemoBooking;
