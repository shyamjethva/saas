import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const CRMDemoPage = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your interest! Our team will contact you shortly to schedule your CRM demo.');
    setFormData({ name: '', email: '', company: '', phone: '', message: '' });
  };

  const features = [
    {
      icon: 'people',
      title: 'Customer Management',
      description: 'Centralized customer database with complete profiles, interaction history, and personalized touchpoints'
    },
    {
      icon: 'trending_up',
      title: 'Sales Pipeline',
      description: 'Visual pipeline management to track deals from lead to close with automated workflows'
    },
    {
      icon: 'auto_graph',
      title: 'Analytics Dashboard',
      description: 'Real-time insights and customizable reports to drive data-driven decisions'
    },
    {
      icon: 'campaign',
      title: 'Marketing Automation',
      description: 'Automated campaigns, lead scoring, and nurturing sequences to maximize conversions'
    },
    {
      icon: 'notifications',
      title: 'Task Management',
      description: 'Team collaboration tools with task assignments, deadlines, and progress tracking'
    },
    {
      icon: 'schedule',
      title: 'Calendar Integration',
      description: 'Seamless sync with Google Calendar, Outlook, and scheduling tools'
    }
  ];

  const tabs = [
    { id: 'dashboard', label: 'Dashboard', icon: 'dashboard' },
    { id: 'customers', label: 'Customers', icon: 'people' },
    { id: 'leads', label: 'Leads', icon: 'person_add' },
    { id: 'sales', label: 'Sales', icon: 'trending_up' },
    { id: 'reports', label: 'Reports', icon: 'bar_chart' },
    { id: 'settings', label: 'Settings', icon: 'settings' }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative py-12 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-8xl font-black text-black mb-8 tracking-tighter font-space-grotesk leading-[1.1] heading-underline active pb-2 pt-8">
              Experience Our <br />
              <span className="text-premium-gradient">
                Enterprise CRM
              </span>
            </h1>

            <p className="text-2xl text-slate-600 max-w-3xl mx-auto mb-16 font-medium leading-relaxed">
              Book a personalized demo and see how our advanced CRM system can transform your business operations.
              Boost productivity, enhance customer relationships, and accelerate growth.
            </p>
          </motion.div>
        </div>
      </div>

      {/* CRM Interface Preview */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-black text-black mb-6 tracking-tighter heading-underline active inline-block">Live <span className="text-premium-gradient">CRM Interface</span></h2>
            <p className="text-xl text-slate-600 font-medium">Explore our intuitive dashboard and powerful enterprise features</p>
          </div>

          {/* CRM Dashboard Preview */}
          <div className="bg-white rounded-consistent-2xl p-8 border border-slate-200 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-2 bg-blue-emerald"></div>
            {/* Tab Navigation */}
            <div className="flex flex-wrap gap-2 mb-10 bg-slate-50 rounded-consistent-xl p-2 border border-slate-100">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-3 px-6 py-3 rounded-consistent-lg transition-all font-black uppercase tracking-widest text-[10px] ${activeTab === tab.id
                    ? 'bg-blue-emerald text-white shadow-lg shadow-blue-500/20'
                    : 'text-slate-500 hover:bg-white hover:text-slate-900'
                    }`}
                >
                  <span className="material-symbols-outlined text-sm">{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dashboard Content */}
            <div className="bg-slate-50 rounded-consistent-xl p-10 min-h-[500px] border border-slate-100">
              {activeTab === 'dashboard' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Dashboard Overview</h3>
                  <div className="grid md:grid-cols-3 gap-8 mb-10">
                    <div className="bg-white rounded-consistent-xl p-8 border border-slate-200 shadow-sm group hover:border-blue-300 transition-all">
                      <div className="text-4xl font-black text-blue-emerald mb-2 font-space-grotesk tracking-tighter">1,247</div>
                      <div className="text-slate-500 font-black uppercase tracking-widest text-[10px]">Total Customers</div>
                    </div>
                    <div className="bg-white rounded-consistent-xl p-8 border border-slate-200 shadow-sm group hover:border-blue-300 transition-all">
                      <div className="text-4xl font-black text-blue-emerald mb-2 font-space-grotesk tracking-tighter">89</div>
                      <div className="text-slate-500 font-black uppercase tracking-widest text-[10px]">Active Deals</div>
                    </div>
                    <div className="bg-white rounded-consistent-xl p-8 border border-slate-200 shadow-sm group hover:border-blue-300 transition-all">
                      <div className="text-4xl font-black text-blue-emerald mb-2 font-space-grotesk tracking-tighter">₹2.4M</div>
                      <div className="text-slate-500 font-black uppercase tracking-widest text-[10px]">Revenue This Month</div>
                    </div>
                  </div>
                  <div className="bg-white rounded-consistent-xl p-8 border border-slate-200 shadow-sm">
                    <div className="flex justify-between items-center mb-8 pb-4 border-b border-slate-100">
                      <h4 className="text-xl font-black text-slate-900 tracking-tight">Recent Activity</h4>
                      <span className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Real-time Updates</span>
                    </div>
                    <div className="space-y-4">
                      {[
                        { label: 'John Doe signed contract', time: '2 minutes ago', color: 'bg-blue-emerald' },
                        { label: 'New lead from website', time: '15 minutes ago', color: 'bg-emerald-400' },
                        { label: 'Meeting scheduled with ABC Corp', time: '1 hour ago', color: 'bg-emerald-200' }
                      ].map((activity, i) => (activity && (
                        <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-consistent-lg group hover:bg-slate-100 transition-colors">
                          <div className={`w-2 h-2 ${activity.color} rounded-full`}></div>
                          <div>
                            <div className="text-slate-900 font-bold text-sm tracking-tight">{activity.label}</div>
                            <div className="text-slate-400 text-[10px] font-black uppercase tracking-widest mt-1">{activity.time}</div>
                          </div>
                        </div>
                      )))}
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'customers' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Customer Database</h3>
                  <div className="space-y-4">
                    {[
                      { name: 'TechCorp Solutions', email: 'contact@techcorp.com', status: 'Active', value: '₹1.2M' },
                      { name: 'Global Retail Inc', email: 'info@globalretail.com', status: 'Prospect', value: '₹800K' },
                      { name: 'MarketingPro Agency', email: 'hello@marketingpro.com', status: 'Active', value: '₹2.1M' }
                    ].map((customer, index) => (
                      <div key={index} className="flex items-center justify-between p-6 bg-white border border-slate-200 rounded-consistent-xl hover:shadow-md transition-shadow">
                        <div>
                          <div className="text-slate-900 font-black tracking-tight text-lg">{customer.name}</div>
                          <div className="text-slate-500 font-medium text-sm">{customer.email}</div>
                        </div>
                        <div className="flex items-center gap-8">
                          <span className={`px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest border ${customer.status === 'Active' ? 'bg-emerald-50 text-blue-emerald border-emerald-100' :
                            'bg-slate-100 text-slate-500 border-slate-200'
                            }`}>
                            {customer.status}
                          </span>
                          <span className="text-blue-emerald font-black font-space-grotesk">{customer.value}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'leads' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h3 className="text-3xl font-black text-slate-900 mb-10 tracking-tight">Lead Intelligence</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    {[
                      { name: 'Sarah Johnson', company: 'Innovate Labs', score: 92, source: 'Website' },
                      { name: 'Michael Chen', company: 'Global Systems', score: 87, source: 'Referral' },
                      { name: 'Emma Rodriguez', company: 'Digital Solutions', score: 95, source: 'Social Media' }
                    ].map((lead, index) => (
                      <div key={index} className="p-8 bg-white border border-slate-200 rounded-consistent-xl group hover:border-blue-300 transition-all">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <div className="text-slate-900 font-black text-xl tracking-tight mb-1">{lead.name}</div>
                            <div className="text-slate-500 font-bold uppercase tracking-widest text-[10px]">{lead.company}</div>
                          </div>
                          <div className="flex flex-col items-end">
                            <span className="text-blue-600 font-black text-3xl font-space-grotesk">{lead.score}%</span>
                            <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">Score</span>
                          </div>
                        </div>
                        <div className="flex justify-between items-center pt-6 border-t border-slate-50">
                          <span className="text-slate-400 font-black uppercase tracking-widest text-[10px]">Source: {lead.source}</span>
                          <button className="text-blue-600 hover:text-blue-700 font-black uppercase tracking-widest text-[10px]">Convert Lead</button>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* ... Other tabs ... */}
              {(activeTab === 'sales' || activeTab === 'reports' || activeTab === 'settings') && (
                <div className="flex items-center justify-center min-h-[300px] text-center">
                  <div>
                    <span className="material-symbols-outlined text-6xl text-slate-200 mb-6 font-black">{tabs.find(t => t.id === activeTab).icon}</span>
                    <h3 className="text-2xl font-black text-slate-400 uppercase tracking-widest leading-none mb-2">{activeTab} View Placeholder</h3>
                    <p className="text-slate-300 font-medium">Ready for your custom enterprise configuration</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="px-6 py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-black mb-8 tracking-tighter heading-underline active inline-block">Powerful <span className="text-premium-gradient">CRM Features</span></h2>
            <p className="text-xl text-slate-600 font-medium max-w-3xl mx-auto">Everything you need to manage customers and scale your enterprise at peak performance.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-consistent-2xl p-10 border border-slate-200 hover:border-blue-300 transition-all shadow-xl group"
              >
                <div className="w-16 h-16 rounded-consistent-xl bg-slate-50 flex items-center justify-center mb-8 group-hover:bg-blue-600 transition-all shadow-sm group-hover:shadow-blue-500/20">
                  <span className="material-symbols-outlined text-3xl text-blue-600 group-hover:text-white transition-colors">{feature.icon}</span>
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{feature.title}</h3>
                <p className="text-slate-600 font-medium leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12">
            {[
              { number: '98%', label: 'CSAT Score', icon: 'thumb_up' },
              { number: '500+', label: 'Enterprise Partners', icon: 'groups' },
              { number: '24/7', label: 'Technical Ops', icon: 'support_agent' },
              { number: '99.9%', label: 'System Uptime', icon: 'cloud_done' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-20 h-20 rounded-full bg-slate-50 flex items-center justify-center mx-auto mb-8 border border-slate-100 group-hover:bg-blue-600 group-hover:border-blue-500 transition-all shadow-sm group-hover:shadow-xl group-hover:shadow-blue-500/20">
                  <span className="material-symbols-outlined text-3xl text-blue-600 group-hover:text-white transition-colors">{stat.icon}</span>
                </div>
                <div className="text-5xl font-black text-slate-900 mb-4 font-space-grotesk tracking-tighter">{stat.number}</div>
                <div className="text-slate-500 font-black uppercase tracking-widest text-[10px]">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="px-6 py-12 bg-slate-50 border-y border-slate-200">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-consistent-2xl p-16 border border-slate-200 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-slate-50 rounded-full -mr-32 -mt-32 -z-10"></div>
            <h2 className="text-4xl font-black text-black mb-4 text-center tracking-tighter heading-underline active inline-block">
              Ready to See It <span className="text-premium-gradient">In Action?</span>
            </h2>
            <p className="text-xl text-slate-600 text-center mb-16 font-medium">
              Book a personalized enterprise walkthrough and see how the CRM scales with your data.
            </p>

            <form onSubmit={handleSubmit} className="space-y-10">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 font-bold placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Work Email *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-6 py-5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 font-bold placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-blue-600/10 focus:border-blue-600 transition-all"
                    placeholder="name@company.com"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Company Name</label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-6 py-5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 font-bold placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all"
                    placeholder="Your company name"
                  />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-6 py-5 rounded-full bg-slate-50 border border-slate-200 text-slate-900 font-bold placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all"
                    placeholder="+91 00000 00000"
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-black uppercase tracking-widest text-slate-500 ml-4">Strategic Requirements</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows="4"
                  className="w-full px-8 py-6 rounded-3xl bg-slate-50 border border-slate-200 text-slate-900 font-bold placeholder-slate-400 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all resize-none"
                  placeholder="Tell us about your business goals and what you'd like to see in the system..."
                ></textarea>
              </div>

              <div className="text-center pt-8">
                <button
                  type="submit"
                  className="bg-blue-emerald hover:bg-blue-600/90 text-white font-black px-12 py-6 rounded-full transition-all shadow-2xl shadow-blue-500/40 flex items-center gap-4 text-sm mx-auto uppercase tracking-widest"
                >
                  <span className="material-symbols-outlined font-black">calendar_today</span>
                  Initialize Demo Booking
                </button>

                <p className="text-slate-500 font-black uppercase tracking-widest text-[9px] mt-8">
                  Security Verified • 24-Hour Response • Custom Architecture Demo
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-5xl font-black text-black mb-6 tracking-tighter heading-underline active inline-block">Strategic <span className="text-premium-gradient">Impact</span></h2>
            <p className="text-xl text-slate-600 font-medium">Quantified results from our global enterprise partners</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                quote: "Our sales increased by 300% after implementing their CRM system. The automation features saved us 20+ hours per week.",
                author: "Sarah Johnson",
                role: "Sales Director, TechCorp Solutions",
                rating: 5
              },
              {
                quote: "The customer management features are exceptional. We reduced manual errors by 95% and improved client satisfaction.",
                author: "Michael Chen",
                role: "Operations Manager, Global Retail Inc",
                rating: 5
              },
              {
                quote: "Best investment we made for our business. The reporting dashboard gives us insights we never had before.",
                author: "Emma Rodriguez",
                role: "CEO, MarketingPro Agency",
                rating: 5
              }
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-slate-50 rounded-consistent-2xl p-10 border border-slate-200 hover:border-blue-300 transition-all flex flex-col group"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="material-symbols-outlined text-blue-emerald text-xl font-black">star</span>
                  ))}
                </div>
                <p className="text-slate-600 text-xl leading-relaxed font-medium mb-10 flex-grow italic">"{testimonial.quote}"</p>
                <div className="pt-8 border-t border-slate-200">
                  <div className="font-black text-slate-900 tracking-tight text-lg">{testimonial.author}</div>
                  <div className="text-slate-400 font-black uppercase tracking-widest text-[10px] mt-1">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default CRMDemoPage;
