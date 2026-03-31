import React, { useState } from 'react';

const SimpleCareers = () => {
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
      title: 'Digital Marketer',
      department: 'Marketing',
      type: 'Full-time',
      experience: '2-4 years',
      location: 'Remote',
      salary: '₹40,000 - ₹70,000',
      description: 'Manage performance marketing campaigns across Google, Meta, and LinkedIn platforms.',
      requirements: ['Google Ads Certification', 'Meta Blueprint Certification', 'Analytics Experience']
    },
    {
      title: 'CRM Developer',
      department: 'Technology',
      type: 'Full-time',
      experience: '3-5 years',
      location: 'Hybrid',
      salary: '₹60,000 - ₹1,00,000',
      description: 'Build and customize CRM solutions with advanced automation capabilities.',
      requirements: ['JavaScript/Node.js', 'CRM Platform Experience', 'API Integration']
    },
    {
      title: 'Designer',
      department: 'Creative',
      type: 'Full-time',
      experience: '2-4 years',
      location: 'Remote',
      salary: '₹35,000 - ₹65,000',
      description: 'Create stunning visual designs for websites and marketing materials.',
      requirements: ['Figma/Sketch', 'Adobe Creative Suite', 'UI/UX Design']
    },
    {
      title: 'Automation Specialist',
      department: 'Operations',
      type: 'Full-time',
      experience: '2-3 years',
      location: 'Remote',
      salary: '₹45,000 - ₹80,000',
      description: 'Implement workflow automation solutions using n8n and custom scripts.',
      requirements: ['n8n/Zapier', 'Workflow Design', 'Problem Solving']
    }
  ];

  const whyWorkWithUs = [
    'Cutting-Edge Projects',
    'Growth Opportunities',
    'Work-Life Balance',
    'Competitive Compensation'
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
    alert('Thank you for your application! We will review and contact you soon.');
    setFormData({
      name: '', email: '', phone: '', position: '', experience: '', message: '', resume: null
    });
  };

  return (
    <div className="min-h-screen premium-bg pt-20">
      <div className="px-6 py-12">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-block px-4 py-2 bg-blue-900/30 border border-blue-500/50 rounded-full mb-6">
              <span className="text-blue-400 font-bold">JOIN OUR TEAM</span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-slate-900 mb-6 font-space-grotesk tracking-tighter">
              Build the Future of <span className="text-blue-600">Digital Business</span>
            </h1>

            <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
              Join a team of innovators shaping the next generation of CRM and automation solutions
            </p>
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-white text-center mb-8">Open Positions</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {openPositions.map((job, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-xl p-6 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-black text-slate-900">{job.title}</h3>
                    <div className="text-right">
                      <div className="text-blue-600 font-black">{job.salary}</div>
                      <div className="text-gray-400 text-sm">{job.type}</div>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-blue-50 text-blue-600 rounded text-xs font-black uppercase tracking-widest border border-blue-100">{job.department}</span>
                    <span className="px-2 py-1 bg-green-50 text-green-600 rounded text-xs font-black uppercase tracking-widest border border-green-100">{job.location}</span>
                  </div>

                  <p className="text-slate-600 font-medium mb-4">{job.description}</p>

                  <div className="mb-4">
                    <h4 className="text-slate-900 font-black mb-2 uppercase tracking-tighter">Requirements:</h4>
                    <ul className="text-slate-500 text-sm font-medium">
                      {job.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-center gap-2 mb-1">
                          <span className="text-green-400">✓</span> {req}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 rounded-lg transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Why Work With Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-black text-slate-900 text-center mb-8 uppercase tracking-tighter">Why Work With Us?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyWorkWithUs.map((benefit, index) => (
                <div key={index} className="bg-white border border-slate-200 rounded-lg p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-500/20">
                    <span className="text-white text-xl">★</span>
                  </div>
                  <h3 className="text-slate-900 font-black tracking-tighter uppercase">{benefit}</h3>
                </div>
              ))}
            </div>
          </div>

          {/* Application Form */}
          <div>
            <h2 className="text-3xl font-black text-slate-900 text-center mb-8 uppercase tracking-tighter">Ready to Join Us?</h2>
            <div className="bg-white border border-slate-200 rounded-xl p-8 max-w-2xl mx-auto shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl -mr-32 -mt-32"></div>
              <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
                <div>
                  <label className="block text-slate-900 font-black mb-2 tracking-tighter uppercase text-sm">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-900 font-black mb-2 tracking-tighter uppercase text-sm">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-900 font-black mb-2 tracking-tighter uppercase text-sm">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-900 font-black mb-2 tracking-tighter uppercase text-sm">Position Applying For *</label>
                  <select
                    name="position"
                    value={formData.position}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:border-blue-500 focus:outline-none"
                  >
                    <option value="">Select Position</option>
                    {openPositions.map((job, idx) => (
                      <option key={idx} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-slate-900 font-black mb-2 tracking-tighter uppercase text-sm">Years of Experience *</label>
                  <select
                    name="experience"
                    value={formData.experience}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:border-blue-500 focus:outline-none"
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
                  <label className="block text-slate-900 font-black mb-2 tracking-tighter uppercase text-sm">Upload Resume *</label>
                  <input
                    type="file"
                    name="resume"
                    onChange={handleInputChange}
                    accept=".pdf,.doc,.docx"
                    required
                    className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:border-blue-500 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-slate-900 font-black mb-2 tracking-tighter uppercase text-sm">Cover Letter</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows="4"
                    className="w-full px-4 py-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-900 font-medium focus:border-blue-500 focus:outline-none"
                    placeholder="Tell us why you want to join Error Infotech..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-lg transition-colors"
                >
                  Submit Application
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCareers;