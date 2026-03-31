import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PremiumPricingPage = () => {
  const [activeDepartment, setActiveDepartment] = useState(0);
  const [openFaq, setOpenFaq] = useState({});
  const [pricingType, setPricingType] = useState('yearly'); // 'monthly' or 'yearly'

  const departments = [
    {
      id: 'erp',
      name: 'ERP Solutions',
      subtitle: 'Customer Relationship Management for modern businesses',
      plans: [
        {
          name: 'Basic',
          price: pricingType === 'monthly' ? '₹20,000' : '₹225,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Small businesses and startups',
          features: [
            'Up to 10 Users',
            '5GB Storage',
            'Lead Management',
            'Sales Pipeline',
            'Basic Reports',
            'Email Support',
            'ERP Integration'
          ],
          discount: '10% on annual commitment',
          cta: 'Get Started'
        },
        {
          name: 'Standard',
          price: pricingType === 'monthly' ? '₹30,000' : '₹325,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Growing businesses',
          features: [
            'Up to 25 Users',
            '10GB Storage',
            'All Basic Features',
            'Advanced Sales Pipeline',
            'Task Management',
            'Customer Database',
            'Reports & Dashboard',
            'WhatsApp + Email Support',
            'API Integration'
          ],
          discount: '15% on annual commitment',
          cta: 'Contact Sales',
          popular: true
        },
        {
          name: 'Premium',
          price: pricingType === 'monthly' ? '₹45,000' : '₹475,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Enterprises',
          features: [
            'Unlimited Users',
            '20GB Storage',
            'All Standard Features',
            'Advanced Automation',
            'Custom Dashboard',
            'Advanced Reporting',
            'Priority Support',
            'Full API Access',
            'White-label Options'
          ],
          discount: '20% on annual commitment',
          cta: 'Contact Sales'
        }
      ]
    },
    {
      id: 'erp',
      name: 'ERP Solutions',
      subtitle: 'Enterprise Resource Planning for streamlined operations',
      plans: [
        {
          name: 'Basic',
          price: pricingType === 'monthly' ? '₹25,000' : '₹275,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Small businesses and startups',
          features: [
            'Up to 10 Users',
            '5GB Storage',
            'Basic Inventory',
            'GST Billing',
            'Simple Accounting',
            'Basic Reports',
            'Email Support'
          ],
          discount: '10% on annual commitment',
          cta: 'Get Started'
        },
        {
          name: 'Standard',
          price: pricingType === 'monthly' ? '₹40,000' : '₹425,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Growing businesses',
          features: [
            'Up to 25 Users',
            '10GB Storage',
            'All Basic Features',
            'Purchase Module',
            'Vendor Management',
            'Advanced Accounting',
            'Bank Reconciliation',
            'WhatsApp + Email Support',
            'Multi-location Control'
          ],
          discount: '15% on annual commitment',
          cta: 'Contact Sales',
          popular: true
        },
        {
          name: 'Premium',
          price: pricingType === 'monthly' ? '₹60,000' : '₹625,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Enterprises',
          features: [
            'Unlimited Users',
            '25GB Storage',
            'All Standard Features',
            'HR + Payroll',
            'Attendance Management',
            'Approval Workflows',
            'Advanced Reports',
            'Priority Call Support',
            'Dedicated Account Manager'
          ],
          discount: '20% on annual commitment',
          cta: 'Contact Sales'
        }
      ]
    },
    {
      id: 'website',
      name: 'Business Website Development',
      subtitle: 'Professional websites for modern businesses',
      plans: [
        {
          name: 'Basic',
          price: '₹25,000',
          period: '',
          audience: 'Small businesses and local service providers',
          features: [
            '5 Static Pages',
            'Mobile Responsive',
            'ERP Integration',
            'Basic SEO',
            'Google Maps',
            'Contact Forms',
            '1 Month Support'
          ],
          discount: '5% on full advance',
          cta: 'Get Started'
        },
        {
          name: 'Standard',
          price: '₹60,000',
          period: '',
          audience: 'Growing businesses',
          features: [
            'Dynamic Website',
            'Admin Panel',
            'Blog System',
            'Payment Integration',
            'Advanced SEO',
            'ERP Sync',
            '2 Months Support',
            'Analytics Setup'
          ],
          discount: '5% on full advance',
          cta: 'Contact Sales',
          popular: true
        },
        {
          name: 'Premium',
          price: '₹1,80,000',
          period: '',
          audience: 'Large enterprises',
          features: [
            'Custom Dynamic Site',
            'Advanced Admin',
            'Multi-user Access',
            'API Integration',
            'Automation Flows',
            'Custom Dashboard',
            '3 Months Support',
            'Advanced Security'
          ],
          discount: '10% launch offer',
          cta: 'Contact Sales'
        }
      ]
    },
    {
      id: 'mobile',
      name: 'Mobile Application Development',
      subtitle: 'Native and cross-platform mobile solutions',
      plans: [
        {
          name: 'Basic',
          price: '₹55,000',
          period: '',
          audience: 'Small retail shops and coaching institutes',
          features: [
            'Android APK',
            'User Authentication',
            'Basic UI/UX',
            'Contact Forms',
            'ERP Integration',
            'WhatsApp Chat',
            '1 Month Support'
          ],
          discount: '5% on full advance',
          cta: 'Get Started'
        },
        {
          name: 'Standard',
          price: '₹1,10,000',
          period: '',
          audience: 'Growing businesses',
          features: [
            'All Basic Features',
            'User Dashboard',
            'Payment Gateway',
            'Booking System',
            'Push Notifications',
            'Advanced Admin',
            'ERP Sync',
            '2 Months Support'
          ],
          discount: '5% on full advance',
          cta: 'Contact Sales',
          popular: true
        },
        {
          name: 'Premium',
          price: '₹1,95,000',
          period: '',
          audience: 'Enterprises',
          features: [
            'All Standard Features',
            'iOS + Android',
            'Advanced UI/UX',
            'Subscription Management',
            'In-app Support',
            'Multi-role Access',
            'API Integration',
            '3 Months Support'
          ],
          discount: '5% on full advance',
          cta: 'Contact Sales'
        }
      ]
    },
    {
      id: 'saas',
      name: 'SaaS Platform Development',
      subtitle: 'Scalable software-as-a-service solutions',
      plans: [
        {
          name: 'Basic',
          price: '₹1,25,000',
          period: '',
          audience: 'Startups and service companies',
          features: [
            'User Authentication',
            'Basic Dashboard',
            '5 Core Pages',
            'ERP Integration',
            'Payment Gateway',
            'Basic Reports',
            '1 Month Support'
          ],
          discount: '5% on full advance',
          cta: 'Get Started'
        },
        {
          name: 'Standard',
          price: '₹1,90,000',
          period: '',
          audience: 'Growing startups',
          features: [
            'All Basic Features',
            'Dynamic Dashboard',
            'Subscription System',
            'API Integration',
            'Advanced Analytics',
            'ERP Sync',
            '2 Months Support',
            'Email Notifications'
          ],
          discount: '5% on full advance',
          cta: 'Contact Sales',
          popular: true
        },
        {
          name: 'Premium',
          price: '₹2,50,000',
          period: '',
          audience: 'Online platforms',
          features: [
            'All Standard Features',
            'Multi-role Access',
            'Advanced Subscriptions',
            'Custom Dashboard',
            'Third-party APIs',
            'Full ERP Integration',
            '3 Months Support',
            'Scalable Architecture'
          ],
          discount: '10% launch offer',
          cta: 'Contact Sales'
        }
      ]
    },
    {
      id: 'digital',
      name: 'Digital Marketing',
      subtitle: 'Comprehensive online marketing solutions',
      plans: [
        {
          name: 'Basic',
          price: pricingType === 'monthly' ? '₹20,000' : '₹225,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Businesses starting online presence',
          features: [
            '1 Social Platform',
            '12 Posts/Month',
            '4 Stories/Week',
            'Basic Design',
            'ERP Integration',
            'Lead Tracking',
            'Monthly Reports'
          ],
          discount: '5% on 3-month advance',
          cta: 'Get Started'
        },
        {
          name: 'Standard',
          price: pricingType === 'monthly' ? '₹45,000' : '₹475,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Brands focused on growth',
          features: [
            '2 Social Platforms',
            '20 Posts/Month',
            '8 Reels/Month',
            '15 Stories/Month',
            'Engagement Handling',
            'ERP Sync',
            'Bi-weekly Reports',
            'Content Strategy'
          ],
          discount: '5% on 3-month advance',
          cta: 'Contact Sales',
          popular: true
        },
        {
          name: 'Premium',
          price: pricingType === 'monthly' ? '₹90,000' : '₹925,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Enterprises with revenue goals',
          features: [
            '3 Social Platforms',
            '25-30 Posts/Month',
            '12 Reels/Month',
            'Daily Stories',
            'Complete Engagement',
            'Advanced ERP',
            'Weekly Reports',
            'Growth Strategy'
          ],
          discount: '10% on 6-month advance',
          cta: 'Contact Sales'
        }
      ]
    },
    {
      id: 'performance',
      name: 'Performance Marketing',
      subtitle: 'Results-driven paid advertising campaigns',
      plans: [
        {
          name: 'Basic',
          price: pricingType === 'monthly' ? '₹30,000' : '₹325,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Businesses starting paid ads',
          features: [
            'Meta Ads Setup',
            '1 Campaign',
            'Basic Targeting',
            'Conversion Tracking',
            'ERP Integration',
            'Monthly Reports',
            'Lead Generation Focus'
          ],
          discount: '5% on 3-month advance',
          cta: 'Get Started'
        },
        {
          name: 'Standard',
          price: pricingType === 'monthly' ? '₹60,000' : '₹625,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Scalable growth businesses',
          features: [
            'All Basic Features',
            'Meta + Google Ads',
            '3 Campaigns',
            'Retargeting Strategy',
            'A/B Testing',
            'ERP Sync',
            'Bi-weekly Reports',
            'Funnel Optimization'
          ],
          discount: '5% on 3-month advance',
          cta: 'Contact Sales',
          popular: true
        },
        {
          name: 'Premium',
          price: pricingType === 'monthly' ? '₹1,20,000' : '₹1,225,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Revenue-focused enterprises',
          features: [
            'All Standard Features',
            'Multi-platform Ads',
            'Complete Funnel',
            'Advanced Targeting',
            'Scaling Strategy',
            'Full ERP Integration',
            'Weekly Reports',
            'ROI Optimization'
          ],
          discount: '10% on 6-month advance',
          cta: 'Contact Sales'
        }
      ]
    },
    {
      id: 'branding',
      name: 'Branding Services',
      subtitle: 'Professional brand identity and positioning',
      plans: [
        {
          name: 'Basic',
          price: '₹15,000',
          period: '',
          audience: 'Startups building professional identity',
          features: [
            'Logo Design',
            'Color Palette',
            'Basic Guidelines',
            'Social Media Kit',
            'Business Cards',
            'ERP Branding',
            '1 Month Support'
          ],
          discount: '5% on full advance',
          cta: 'Get Started'
        },
        {
          name: 'Standard',
          price: '₹30,000',
          period: '',
          audience: 'Growing businesses with positioning',
          features: [
            'All Basic Features',
            'Logo Variations',
            'Typography',
            'Brand Psychology',
            'Social Media Kit',
            'ERP Customization',
            'Marketing Alignment'
          ],
          discount: '5% on full advance',
          cta: 'Contact Sales',
          popular: true
        },
        {
          name: 'Premium',
          price: '₹60,000',
          period: '',
          audience: 'Enterprises with market leadership',
          features: [
            'All Standard Features',
            'Complete Brand Strategy',
            'Full Identity System',
            'Positioning Strategy',
            'Voice & Tone',
            'Packaging Concepts',
            'Full ERP Integration'
          ],
          discount: 'Maximum 15% discount',
          cta: 'Contact Sales'
        }
      ]
    },
    {
      id: 'creative',
      name: 'Content & Creative Services',
      subtitle: 'Engaging content and creative assets',
      plans: [
        {
          name: 'Basic',
          price: pricingType === 'monthly' ? '₹6,000' : '₹65,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Startups with structured presence',
          features: [
            '12 Graphic Posts/Month',
            '2 Reel Edits',
            'Festival Creatives',
            'Basic Captions',
            'ERP Alignment',
            'Lead Campaign Support',
            'Monthly Reports'
          ],
          discount: '5% on advance payment',
          cta: 'Get Started'
        },
        {
          name: 'Standard',
          price: pricingType === 'monthly' ? '₹12,000' : '₹125,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Brands focused on conversion',
          features: [
            '20 Graphic Designs',
            '6 Reel Projects',
            'Brand Theme',
            'Thumbnails',
            'Content Planning',
            'ERP Strategy',
            'Bi-weekly Reports',
            'Performance Coordination'
          ],
          discount: '5% on 3-month advance',
          cta: 'Contact Sales',
          popular: true
        },
        {
          name: 'Premium',
          price: pricingType === 'monthly' ? '₹20,000' : '₹205,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Enterprises with revenue impact',
          features: [
            '25+ High-Quality Designs',
            '10-12 Advanced Reels',
            'Cinematic Videos',
            'Complete Brand Kit',
            'Advanced Strategy',
            'Full ERP Integration',
            'Weekly Reports',
            'Performance Analysis'
          ],
          discount: '10% on 6-month advance',
          cta: 'Contact Sales'
        }
      ]
    },
    {
      id: 'physical',
      name: 'Physical Marketing',
      subtitle: 'Traditional marketing with digital integration',
      plans: [
        {
          name: 'Basic',
          price: pricingType === 'monthly' ? '₹13,000' : '₹135,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Small businesses with structured approach',
          features: [
            'Calling Agent (50/day)',
            'Chat Agent (50/day)',
            'Lead Gen (50/day)',
            'ERP Integration',
            'Basic Reporting',
            'Lead Assignment',
            'Follow-up Setup'
          ],
          discount: '5% on 6-month advance',
          cta: 'Get Started'
        },
        {
          name: 'Standard',
          price: pricingType === 'monthly' ? '₹22,000' : '₹225,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Growing businesses with conversions',
          features: [
            'Calling Agent (100/day)',
            'Chat Agent (100/day)',
            'Lead Gen (60/day)',
            'ERP Sync',
            'Advanced Reporting',
            'Lead Scoring',
            'Workflow Automation',
            'Performance Tracking'
          ],
          discount: '5% on 6-month advance',
          cta: 'Contact Sales',
          popular: true
        },
        {
          name: 'Premium',
          price: pricingType === 'monthly' ? '₹32,000' : '₹325,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Enterprises with accountability',
          features: [
            'Calling Agent (150/day)',
            'Chat Agent (150/day)',
            'Lead Gen (100/day)',
            'Full ERP Integration',
            'Real-time Sync',
            'Advanced Analytics',
            'Performance Dashboard',
            'Executive Reporting'
          ],
          discount: '5% on 6-month advance',
          cta: 'Contact Sales'
        }
      ]
    },
    {
      id: 'sales',
      name: 'End-to-End Sales Management',
      subtitle: 'Complete outsourced sales department',
      plans: [
        {
          name: 'Basic',
          price: pricingType === 'monthly' ? '₹25,000' : '₹260,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Small businesses starting structured sales',
          features: [
            'Limited Volume Support',
            'ERP Setup',
            '50-70 Calls/Day',
            'Basic Qualification',
            'Appointment Scheduling',
            'Follow-up Tracking',
            'Monthly Reports',
            'Lead Management'
          ],
          discount: '5% on 6-month advance',
          cta: 'Get Started'
        },
        {
          name: 'Standard',
          price: pricingType === 'monthly' ? '₹45,000' : '₹470,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'Consistent conversion focused',
          features: [
            'Dedicated Executive',
            '80-120 Calls/Day',
            'Advanced Qualification',
            'Meeting Coordination',
            'Objection Handling',
            'Deal Support',
            'Bi-weekly Reports',
            'ERP Automation'
          ],
          discount: '5% on 6-month advance',
          cta: 'Contact Sales',
          popular: true
        },
        {
          name: 'Premium',
          price: pricingType === 'monthly' ? '₹75,000' : '₹775,000',
          period: pricingType === 'monthly' ? '/mo' : '/yr',
          audience: 'High-volume enterprise sales',
          features: [
            'Dedicated Team',
            'High-Volume Handling',
            'Advanced Qualification',
            'Negotiation Support',
            'Payment Follow-up',
            'Post-sales Support',
            'Weekly Reports',
            'Advanced Automation'
          ],
          discount: '10% on 6-month advance',
          cta: 'Contact Sales'
        }
      ]
    }
  ];

  const faqs = [
    {
      question: "What payment methods do you accept?",
      answer: "We accept bank transfers, credit cards, and UPI payments. For enterprise clients, we also offer invoice-based billing."
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer: "Yes, you can upgrade or downgrade your plan at any time. We'll prorate the charges based on your usage."
    },
    {
      question: "Do you offer custom solutions?",
      answer: "Absolutely! We can customize any package to meet your specific requirements. Contact our sales team for more information."
    },
    {
      question: "What is your refund policy?",
      answer: "We offer a 30-day money-back guarantee for most of our services. Please contact our support team for more details."
    },
    {
      question: "How long does implementation take?",
      answer: "Implementation timelines vary by service: Websites (30-40 days), Mobile Apps (20-60 days), SaaS (45-75 days), and ERP/ERP (immediate to 30 days)."
    }
  ];

  const addons = [
    { name: "Extra User", price: "₹1,000 / Year" },
    { name: "Mobile App", price: "₹20,000 / Year" },
    { name: "WhatsApp API Integration", price: "₹5,000 / Year" },
    { name: "Custom Branding", price: "₹5,000" },
    { name: "Dedicated Account Manager", price: "₹25,000 / Year" },
    { name: "Advanced Automation Setup", price: "₹15,000" },
    { name: "Custom Module Development", price: "₹20,000+" },
    { name: "Priority Support", price: "₹15,000 / Year" }
  ];

  const toggleFaq = (index) => {
    setOpenFaq(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
                Premium Pricing
              </span>
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto">
              Comprehensive solutions tailored to your business needs with transparent pricing and flexible options
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

      {/* Department Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {departments.map((dept, index) => (
            <button
              key={dept.id}
              onClick={() => setActiveDepartment(index)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeDepartment === index
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25'
                  : 'bg-white/10 text-slate-300 hover:bg-white/20 hover:text-white'
              }`}
            >
              {dept.name}
            </button>
          ))}
        </div>

        {/* Active Department Pricing */}
        {departments.map((dept, deptIndex) => (
          <motion.div
            key={dept.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`${activeDepartment === deptIndex ? 'block' : 'hidden'}`}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">{dept.name}</h2>
              <p className="text-lg text-slate-300 max-w-2xl mx-auto">{dept.subtitle}</p>
            </div>

            {/* Pricing Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
              {dept.plans.map((plan, planIndex) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: planIndex * 0.1 }}
                  className={`relative bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10  transition-all duration-300 ${
                    plan.popular ? 'ring-2 ring-cyan-400/50 transform scale-105' : ''
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                      <span className="bg-gradient-to-r from-cyan-400 to-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                        BEST VALUE
                      </span>
                    </div>
                  )}
                  
                  <div className="text-center mb-8">
                    <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                    <div className="flex items-baseline justify-center">
                      <span className={`text-4xl font-bold bg-gradient-to-r ${
                        plan.popular ? 'from-cyan-400 to-blue-500' : 'from-blue-400 to-cyan-500'
                      } bg-clip-text text-transparent`}>
                        {plan.price}
                      </span>
                      {plan.period && <span className="text-slate-400 ml-2">{plan.period}</span>}
                    </div>
                    <p className="text-slate-400 text-sm mt-2">{plan.audience}</p>
                  </div>

                  <div className="mb-8">
                    <h4 className="text-lg font-semibold text-white mb-4">Features:</h4>
                    <ul className="space-y-3">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start text-slate-300 text-sm">
                          <span className="text-cyan-400 mr-2 mt-0.5">✓</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-cyan-400 text-sm font-medium">{plan.discount}</p>
                  </div>

                  <div className="text-center">
                    <button className={`w-full bg-gradient-to-r ${
                      plan.popular 
                        ? 'from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600' 
                        : 'from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600'
                    } text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105`}>
                      {plan.cta}
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}

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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Basic Plan</h3>
              <p className="text-2xl font-bold text-white">Max 10%</p>
              <p className="text-slate-400 text-sm mt-2">Discount on annual commitment</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Standard Plan</h3>
              <p className="text-2xl font-bold text-white">Max 15%</p>
              <p className="text-slate-400 text-sm mt-2">Discount on annual commitment</p>
            </div>
            <div className="bg-white/5 rounded-xl p-6 border border-white/10 text-center">
              <h3 className="text-lg font-semibold text-cyan-400 mb-2">Premium Plan</h3>
              <p className="text-2xl font-bold text-white">Max 20%</p>
              <p className="text-slate-400 text-sm mt-2">Discount on annual commitment</p>
            </div>
          </div>
          <div className="mt-6 text-center">
            <p className="text-red-400 font-semibold">Note: Combo discounts cannot exceed 20% total</p>
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
};

export default PremiumPricingPage;