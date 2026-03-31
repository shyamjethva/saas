import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ERPPackagesPage = () => {
  const [activeDepartment, setActiveDepartment] = useState('sales'); // 'main', 'sales', 'marketing', 'support'
  const [openFaq, setOpenFaq] = useState({});
  const [pricingType, setPricingType] = useState('yearly');

  const toggleFaq = (index) => {
    setOpenFaq(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const departments = {
    sales: {
      name: 'Sales Department',
      price: '₹35,000',
      period: pricingType === 'monthly' ? '/mo' : '/yr',
      audience: 'Sales teams and managers',
      features: [
        'Lead Management',
        'Manual Lead Entry',
        'Website Lead Capture',
        'Lead Status Tracking',
        'Lead Assignment',
        'Follow-up Scheduling',
        'Sales Pipeline Management',
        'Visual Stage-wise Deal Tracking',
        'Deal Progress Monitoring',
        'Conversion Analysis',
        'Sales Reports',
        'Performance Analytics',
        'Agent-wise Sales Report',
        'Task Management',
        'Daily Task Allocation',
        'Deadline Tracking',
        'Reminder Notifications',
        'Role & Permission Control',
        'Sales Team Access',
        'Sales Manager Access',
        'Sales Executive Restrictions'
      ],
      discount: '15% on annual commitment',
      cta: 'Contact Sales',
      highlight: true,
      badge: 'MOST POPULAR'
    },
    marketing: {
      name: 'Marketing Department',
      price: pricingType === 'monthly' ? '₹25,000' : '₹275,000',
      period: pricingType === 'monthly' ? '/mo' : '/yr',
      audience: 'Marketing teams and specialists',
      features: [
        'Lead Management',
        'Website Lead Capture',
        'Lead Status Tracking',
        'Lead Categorization',
        'Campaign Management',
        'Lead Scoring',
        'Follow-up Reminder System',
        'Automated Reminders',
        'Email & Notification Alerts',
        'Pending Follow-up Tracking',
        'Marketing Reports',
        'Campaign Performance Analytics',
        'Lead Source Tracking',
        'Marketing Funnel Analysis',
        'Social Media Integration',
        'Email Marketing Tools',
        'Role & Permission Control',
        'Marketing Team Access',
        'Marketing Manager Access',
        'Content Creator Restrictions'
      ],
      discount: '10% on annual commitment',
      cta: 'Get Started',
      highlight: false
    },
    support: {
      name: 'Customer Support',
      price: pricingType === 'monthly' ? '₹20,000' : '₹225,000',
      period: pricingType === 'monthly' ? '/mo' : '/yr',
      audience: 'Customer service teams',
      features: [
        'Customer Database Management',
        'Contact Information',
        'Company Details',
        'Communication History',
        'Notes & Attachments',
        'Ticket Management System',
        'Issue Tracking',
        'Customer Interaction Logs',
        'Support Queue Management',
        'Response Time Tracking',
        'Customer Satisfaction Surveys',
        'Support Reports',
        'Performance Analytics',
        'Follow-up Reminder System',
        'Automated Ticket Assignment',
        'Knowledge Base Integration',
        'Role & Permission Control',
        'Support Agent Access',
        'Team Lead Access',
        'Supervisor Permissions'
      ],
      discount: '10% on annual commitment',
      cta: 'Get Started',
      highlight: false
    }
  };

  const addons = [
    { name: "Extra User", price: "₹1,000 / Year" },
    { name: "Mobile App", price: "₹20,000 / Year" },
    { name: "WhatsApp API Integration", price: "₹5,000 / Year" },
    { name: "Custom Branding", price: "₹5,000" },
    { name: "Dedicated Account Manager", price: "₹25,000 / Year" },
    { name: "Advanced Automation Setup", price: "₹15,000" },
    { name: "Custom Module Development", price: "₹20,000+" },
    { name: "Dedicated Cloud Server", price: "₹15,000 / Year" }
  ];

  const discountOptions = [
    { plan: "Basic Plan", discount: "Max 10%" },
    { plan: "Standard Plan", discount: "Max 15%" },
    { plan: "Premium Plan", discount: "Max 20%" },
    { plan: "Combo Offer", discount: "Max 20% Total" }
  ];

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, credit cards, and UPI payments. For enterprise clients, we also offer invoice-based billing."
    },
    {
      question: "Can I upgrade or downgrade my package?",
      answer: "Yes, you can upgrade or downgrade your package at any time. We'll prorate the charges based on your usage."
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Absolutely! We can customize any package to meet your specific requirements. Contact our sales team for more information."
    },
    {
      question: "What is included in the ERP integration?",
      answer: "Our ERP integration includes automatic lead capture, lead status tracking, follow-up reminders, and performance analytics."
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation timelines vary by service: ERP (immediate to 30 days depending on configuration)."
    }
  ];

  if (activeDepartment !== 'main' && departments[activeDepartment]) {
    const pkg = departments[activeDepartment];
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900">
        {/* Header Section */}
        <div className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-8"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                  {pkg.name} Package
                </span>
              </h1>
              <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                ERP Solution for {pkg.name.toLowerCase()}
              </p>
            </motion.div>
            
            <div className="text-center mb-8">
              <button
                onClick={() => setActiveDepartment('main')}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
              >
                ← Back to Departments
              </button>
            </div>
          </div>
        </div>

        {/* Department Package Card */}
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10  transition-all duration-300 ${
              pkg.highlight ? 'ring-2 ring-cyan-400/50 transform scale-105' : ''
            }`}
          >
            {pkg.badge && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {pkg.badge}
                </span>
              </div>
            )}
            
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">{pkg.name} Package</h3>
              <div className="flex items-baseline justify-center">
                <span className={`text-4xl font-bold bg-gradient-to-r ${
                  pkg.highlight ? 'from-cyan-400 to-blue-500' : 'from-blue-400 to-cyan-500'
                } bg-clip-text text-transparent`}>
                  {pkg.price}
                </span>
                <span className="text-slate-400 ml-2">{pkg.period}</span>
              </div>
              <p className="text-slate-400 text-sm mt-2">{pkg.audience}</p>
            </div>

            <div className="mb-8">
              <h4 className="text-lg font-semibold text-white mb-4">Features:</h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {pkg.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start text-slate-300 text-sm">
                    <span className="text-cyan-400 mr-2 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <p className="text-cyan-400 text-sm font-medium">{pkg.discount}</p>
            </div>

            <div className="text-center">
              <button className={`w-full bg-gradient-to-r ${
                pkg.highlight 
                  ? 'from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600' 
                  : 'from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
              } text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105`}>
                {pkg.cta}
              </button>
            </div>
          </motion.div>

          {/* Add-On Services */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mt-16 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Add-On Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addons.map((addon, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10  transition-all duration-300">
                  <h3 className="text-lg font-semibold text-white mb-2">{addon.name}</h3>
                  <p className="text-cyan-400 font-semibold">{addon.price}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Discount Policy */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-16 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Discount Policy</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {discountOptions.map((discount, index) => (
                <div key={index} className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
                  <h3 className="text-lg font-semibold text-cyan-400 mb-2">{discount.plan}</h3>
                  <p className="text-2xl font-bold text-white">{discount.discount}</p>
                </div>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-red-400 font-semibold">Note: Total discount cannot exceed 20% under any circumstances</p>
            </div>
          </motion.div>

          {/* FAQ Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-gradient-to-b from-white/5 to-white/0 backdrop-blur-xl rounded-2xl p-8 border border-white/10"
          >
            <h2 className="text-3xl font-bold text-white text-center mb-8">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-white/10 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleFaq(index)}
                    className="w-full px-6 py-4 text-left text-white bg-white/5 hover:bg-white/10 transition-colors duration-300 flex justify-between items-center"
                  >
                    <span>{faq.question}</span>
                    <span className={`transform transition-transform duration-300 ${openFaq[index] ? 'rotate-180' : ''}`}>
                      ▼
                    </span>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${openFaq[index] ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="px-6 py-4 bg-white/5 text-slate-300">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  // Main department selection view
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-blue-900">
      {/* Header Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                ERP Solutions
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Department-specific ERP Solutions for modern businesses
            </p>
            
            {/* Pricing Toggle */}
            <div className="mt-8 flex justify-center items-center">
              <span className={`mr-4 text-slate-300 font-medium ${pricingType === 'monthly' ? 'text-cyan-400' : ''}`}>
                Monthly
              </span>
              <button
                onClick={() => setPricingType(pricingType === 'monthly' ? 'yearly' : 'monthly')}
                className="relative inline-flex h-6 w-11 items-center rounded-full bg-gradient-to-r from-cyan-500 to-blue-500 transition-colors"
              >
                <span className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                  pricingType === 'monthly' ? 'translate-x-1' : 'translate-x-6'
                }`} />
              </button>
              <span className={`ml-4 text-slate-300 font-medium ${pricingType === 'yearly' ? 'text-cyan-400' : ''}`}>
                Yearly <span className="text-green-400">(Save 10%)</span>
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Department Selection */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">Choose Your Department</h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">Select a department to view its dedicated ERP package</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {Object.entries(departments).map(([key, dept], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10  transition-all duration-300 cursor-pointer ${
                dept.highlight ? 'ring-2 ring-cyan-400/50 transform scale-105' : ''
              }`}
              onClick={() => setActiveDepartment(key)}
            >
              {dept.badge && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    {dept.badge}
                  </span>
                </div>
              )}
              
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-bold text-white">
                    {dept.name.charAt(0)}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">{dept.name}</h3>
                <div className="flex items-baseline justify-center mb-2">
                  <span className={`text-3xl font-bold bg-gradient-to-r ${
                    dept.highlight ? 'from-cyan-400 to-blue-500' : 'from-blue-400 to-cyan-500'
                  } bg-clip-text text-transparent`}>
                    {dept.price}
                  </span>
                  <span className="text-slate-400 ml-2">{dept.period}</span>
                </div>
                <p className="text-slate-400 text-sm">{dept.audience}</p>
              </div>

              <div className="mb-6">
                <h4 className="text-md font-semibold text-white mb-2">Key Features:</h4>
                <ul className="space-y-1">
                  {dept.features.slice(0, 3).map((feature, idx) => (
                    <li key={idx} className="flex items-start text-slate-300 text-xs">
                      <span className="text-cyan-400 mr-1 mt-0.5">✓</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                  <li className="text-cyan-400 text-xs mt-2">+ {dept.features.length - 3} more features</li>
                </ul>
              </div>

              <div className="text-center">
                <button className={`w-full bg-gradient-to-r ${
                  dept.highlight 
                    ? 'from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600' 
                    : 'from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
                } text-white font-semibold py-2 px-4 rounded-xl transition-all duration-300`}>
                  View Package
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ERPPackagesPage;