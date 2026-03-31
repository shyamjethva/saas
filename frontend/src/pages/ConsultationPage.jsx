import { useState } from 'react';
import { motion } from 'framer-motion';
import { contactAPI } from '../services/api';

const ConsultationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: '',
    companySize: '',
    website: '',
    projectType: '',
    budget: '',
    timeline: '',
    goals: '',
    challenges: '',
    preferredContact: 'email',
    consultationType: 'strategy'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('🚀 Form submission started', formData);
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Format phone number
      const formattedPhone = formData.phone.replace(/\s+/g, '').replace(/[^0-9+]/g, '');

      const submitData = {
        ...formData,
        phone: formattedPhone,
        service: 'Free Consultation',
        source: 'Consultation Page',
        message: `Consultation Type: ${formData.consultationType}\nGoals: ${formData.goals}\nChallenges: ${formData.challenges}`
      };

      console.log('📤 Sending data to API:', submitData);

      const response = await contactAPI.submitContact(submitData);
      console.log('✅ API Response:', response.data);

      if (response.data.success) {
        setSubmitStatus({ type: 'success' });
        alert('Consultation Request Submitted Successfully! We will contact you soon.');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          industry: '',
          companySize: '',
          website: '',
          projectType: '',
          budget: '',
          timeline: '',
          goals: '',
          challenges: '',
          preferredContact: 'email',
          consultationType: 'strategy'
        });
      } else {
        console.error('❌ API responded with success:false', response.data);
        setSubmitStatus({
          type: 'error',
          message: response.data.error || 'Submission failed'
        });
        alert('Submission failed: ' + (response.data.error || 'Unknown error'));
      }
    } catch (error) {
      console.error('💥 Catch block error:', error);
      const errorMessage = error.response?.data?.error || error.message || 'Something went wrong';
      const errorDetails = error.response?.data?.details || [];
      setSubmitStatus({
        type: 'error',
        message: errorMessage,
        details: errorDetails
      });
      alert('Error: ' + errorMessage);
    } finally {
      setIsSubmitting(false);
      console.log('🏁 Form submission process ended');
    }
  };

  const consultationTypes = [
    { value: 'strategy', label: 'Business Strategy Consultation', desc: '30-minute session to discuss your business goals and digital transformation roadmap' },
    { value: 'technical', label: 'Technical Architecture Review', desc: 'Deep dive into your current tech stack and improvement opportunities' },
    { value: 'marketing', label: 'Digital Marketing Strategy', desc: 'Custom marketing plan to boost your online presence and customer acquisition' },
    { value: 'ai', label: 'AI & Automation Consultation', desc: 'Explore how AI can optimize your business processes and decision-making' }
  ];

  const industries = [
    'Technology', 'Finance', 'Healthcare', 'Retail', 'Manufacturing',
    'Education', 'Real Estate', 'Hospitality', 'Professional Services', 'Other'
  ];

  const companySizes = [
    '1-10 employees', '11-50 employees', '51-200 employees',
    '201-500 employees', '501-1000 employees', '1000+ employees'
  ];

  const projectTypes = [
    'Website Development', 'Mobile App', 'CRM System', 'ERP System',
    'AI/ML Solution', 'Cloud Migration', 'Digital Marketing', 'UI/UX Design',
    'Security Audit', 'Business Process Automation', 'Other'
  ];

  const budgets = [
    '₹50,000 - ₹2,00,000', '₹2,00,000 - ₹5,00,000', '₹5,00,000 - ₹10,00,000',
    '₹10,00,000 - ₹25,00,000', '₹25,00,000+', 'Not sure yet'
  ];

  const timelines = [
    'Immediate (within 1 month)', 'Short term (1-3 months)',
    'Medium term (3-6 months)', 'Long term (6+ months)', 'Flexible timeline'
  ];

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <div className="relative py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
              <span className="material-symbols-outlined text-green-600">chat</span>
              <span className="text-green-600 font-black">FREE CONSULTATION</span>
            </div>

            <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tighter">
              <span className="text-gradient">Transform Your Business <br /> with Expert Guidance.</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-12 font-bold leading-relaxed">
              Get personalized recommendations from our digital transformation experts.
              Discover how we can accelerate your business growth by 300% with proven strategies.
            </p>
          </motion.div>
        </div>
      </div>

      {/* Form Section */}
      <div className="px-6 pb-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl p-8 md:p-12 border border-slate-200 shadow-2xl relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/5 rounded-full blur-3xl -mr-32 -mt-32"></div>

            <h2 className="text-3xl font-black mb-2 text-center tracking-tighter">
              <span className="text-gradient">Schedule Your Free Consultation.</span>
            </h2>
            <p className="text-slate-500 text-center mb-10 font-bold">
              Fill out the form below and we'll connect you with the right expert
            </p>

            {submitStatus?.type === 'success' && (
              <div className="mb-8 p-6 bg-emerald-50 border border-emerald-100 rounded-3xl text-center shadow-sm">
                <div className="text-emerald-600 font-black mb-2 flex items-center justify-center gap-2">
                  <span className="material-symbols-outlined">check_circle</span>
                  SUCCESSFULLY SUBMITTED
                </div>
                <p className="text-slate-600 font-medium">
                  We've received your request. An expert will contact you within 24 hours.
                </p>
              </div>
            )}

            {submitStatus?.type === 'error' && (
              <div className="mb-8 p-6 bg-red-50 border border-red-100 rounded-3xl text-center shadow-sm">
                <div className="text-red-600 font-black mb-2 flex items-center justify-center gap-2 uppercase tracking-tight">
                  <span className="material-symbols-outlined">error</span>
                  {submitStatus.message}
                </div>
                {submitStatus.details?.length > 0 && (
                  <ul className="text-red-500 text-xs font-bold space-y-1 mt-2">
                    {submitStatus.details.map((detail, i) => (
                      <li key={i}>• {detail}</li>
                    ))}
                  </ul>
                )}
                <p className="text-slate-400 text-[10px] mt-4 font-black uppercase tracking-widest">
                  Contact support: errorinfotech404@gmail.com
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Consultation Type */}
              <div>
                <label className="block text-slate-700 font-bold mb-4 uppercase tracking-wider text-xs">
                  Consultation Type <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {consultationTypes.map((type) => (
                    <div
                      key={type.value}
                      className={`p-6 rounded-2xl border-2 cursor-pointer transition-all duration-300 ${formData.consultationType === type.value
                        ? 'border-green-600 bg-green-50/50 shadow-lg scale-[1.02]'
                        : 'border-slate-100 bg-slate-50/50 hover:bg-slate-50 hover:border-slate-200'
                        }`}
                      onClick={() => setFormData(prev => ({ ...prev, consultationType: type.value }))}
                    >
                      <div className="flex items-start gap-4">
                        <div className={`mt-1.5 w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors ${formData.consultationType === type.value
                          ? 'border-green-600'
                          : 'border-slate-300'
                          }`}>
                          {formData.consultationType === type.value && (
                            <div className="w-2.5 h-2.5 rounded-full bg-green-600"></div>
                          )}
                        </div>
                        <div>
                          <div className={`font-black tracking-tight ${formData.consultationType === type.value ? 'text-green-700' : 'text-slate-900'}`}>{type.label}</div>
                          <div className="text-sm text-slate-500 mt-1 font-bold leading-relaxed">{type.desc}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Personal Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-slate-700 font-bold mb-2 uppercase tracking-wider text-xs">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/50 transition-all font-bold"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-2 uppercase tracking-wider text-xs">
                    Work Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/50 transition-all font-bold"
                    placeholder="name@company.com"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-2 uppercase tracking-wider text-xs">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/50 transition-all font-bold"
                    placeholder="+91 98765 43210"
                  />
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-2 uppercase tracking-wider text-xs">
                    Company Name
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/50 transition-all font-bold"
                    placeholder="Your company name"
                  />
                </div>
              </div>

              {/* Company Information */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div>
                  <label className="block text-slate-700 font-bold mb-2 uppercase tracking-wider text-xs">
                    Industry
                  </label>
                  <select
                    name="industry"
                    value={formData.industry}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/50 transition-all font-bold"
                  >
                    <option value="">Select Industry</option>
                    {industries.map(industry => (
                      <option key={industry} value={industry}>{industry}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-2 uppercase tracking-wider text-xs">
                    Company Size
                  </label>
                  <select
                    name="companySize"
                    value={formData.companySize}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/50 transition-all font-bold"
                  >
                    <option value="">Select Size</option>
                    {companySizes.map(size => (
                      <option key={size} value={size}>{size}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-2 uppercase tracking-wider text-xs">
                    Website
                  </label>
                  <input
                    type="url"
                    name="website"
                    value={formData.website}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/50 transition-all font-bold"
                    placeholder="https://yourcompany.com"
                  />
                </div>
              </div>

              {/* Project Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-slate-700 font-bold mb-2 uppercase tracking-wider text-xs">
                    Project Type
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/50 transition-all font-bold"
                  >
                    <option value="">Select Project Type</option>
                    {projectTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-2 uppercase tracking-wider text-xs">
                    Budget Range
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/50 transition-all font-bold"
                  >
                    <option value="">Select Budget</option>
                    {budgets.map(budget => (
                      <option key={budget} value={budget}>{budget}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-slate-700 font-bold mb-2 uppercase tracking-wider text-xs">
                  Timeline
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/50 transition-all font-bold"
                >
                  <option value="">Select Timeline</option>
                  {timelines.map(timeline => (
                    <option key={timeline} value={timeline}>{timeline}</option>
                  ))}
                </select>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-slate-700 font-bold mb-2 uppercase tracking-wider text-xs">
                    What are your main business goals?
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/50 transition-all font-bold resize-none"
                    placeholder="E.g., Increase online sales, improve customer experience, automate processes..."
                  ></textarea>
                </div>

                <div>
                  <label className="block text-slate-700 font-bold mb-2 uppercase tracking-wider text-xs">
                    What challenges are you currently facing?
                  </label>
                  <textarea
                    name="challenges"
                    value={formData.challenges}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-5 py-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-green-500/20 focus:border-green-500/50 transition-all font-bold resize-none"
                    placeholder="E.g., Low conversion rates, outdated technology, limited digital presence..."
                  ></textarea>
                </div>
              </div>

              {/* Preferred Contact Method */}
              <div>
                <label className="block text-slate-700 font-bold mb-4 uppercase tracking-wider text-xs">
                  Preferred Contact Method
                </label>
                <div className="flex gap-8">
                  {[
                    { value: 'email', label: 'Email', icon: 'email' },
                    { value: 'phone', label: 'Phone Call', icon: 'phone' },
                    { value: 'whatsapp', label: 'WhatsApp', icon: 'chat' }
                  ].map((method) => (
                    <label key={method.value} className="flex items-center gap-3 cursor-pointer group">
                      <div className="relative flex items-center justify-center">
                        <input
                          type="radio"
                          name="preferredContact"
                          value={method.value}
                          checked={formData.preferredContact === method.value}
                          onChange={handleInputChange}
                          className="w-5 h-5 text-green-600 border-slate-300 focus:ring-green-500/20"
                        />
                      </div>
                      <span className={`material-symbols-outlined text-xl transition-colors ${formData.preferredContact === method.value ? 'text-green-600' : 'text-slate-400 group-hover:text-slate-500'}`}>{method.icon}</span>
                      <span className={`font-bold transition-colors ${formData.preferredContact === method.value ? 'text-green-700' : 'text-slate-600 group-hover:text-slate-900'}`}>{method.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 disabled:opacity-50 text-white font-bold px-12 py-4 rounded-full transition-all shadow-2xl hover:shadow-green-500/25 flex items-center gap-3 text-lg mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <span className="material-symbols-outlined animate-spin">progress_activity</span>
                      Processing...
                    </>
                  ) : (
                    <>
                      <span className="material-symbols-outlined">send</span>
                      Schedule Free Consultation
                    </>
                  )}
                </motion.button>

                <p className="text-slate-500 text-sm mt-4">
                  ✓ No obligations • ✓ Free of charge • ✓ 24-hour response time
                </p>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ConsultationPage;