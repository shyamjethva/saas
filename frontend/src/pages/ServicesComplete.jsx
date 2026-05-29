import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// Add CSS for dash animation
const style = document.createElement('style');
style.innerHTML = `
  @keyframes dash {
    to {
      stroke-dashoffset: -10;
    }
  }
`;
document.head.appendChild(style);

const Services = () => {
  // Animated Background Particles
  const Particles = () => {
    const [particles, setParticles] = useState([]);

    useEffect(() => {
      const generateParticles = () => {
        const newParticles = [];
        for (let i = 0; i < 50; i++) {
          newParticles.push({
            id: i,
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 4 + 1,
            duration: Math.random() * 30 + 20,
            delay: Math.random() * 10
          });
        }
        setParticles(newParticles);
      };

      generateParticles();
    }, []);

    return (
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map(particle => (
          <motion.div
            key={particle.id}
            className="absolute rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20"
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`
            }}
            animate={{
              y: [0, -150, 0],
              x: [0, Math.random() * 60 - 30, 0],
              opacity: [0, 1, 0],
              scale: [1, 2, 1]
            }}
            transition={{
              duration: particle.duration,
              repeat: Infinity,
              delay: particle.delay,
              ease: "easeInOut"
            }}
          />
        ))}
      </div>
    );
  };

  // Service Sections Data
  const serviceSections = [
    {
      id: 'digital-marketing',
      title: 'Digital Marketing Services',
      subtitle: 'Complete End-to-End B2B & B2C Solutions',
      description: 'We provide complete end-to-end digital marketing solutions designed for both B2B (Business to Business) and B2C (Business to Customer) businesses. Our focus is not just simple marketing — but brand growth, lead generation, customer acquisition, and revenue increase. We build strong online presence for your business, reach the right audience, and deliver consistent results through data-driven strategies.',
      icon: 'trending_up',
      color: 'from-blue-700 to-sky-500',
      services: [
        {
          category: 'Core Digital Marketing Services',
          description: 'These services build strong foundation for your business',
          items: [
            'Digital marketing strategy & planning',
            'Brand positioning & online presence setup',
            'Market & competitor research',
            'Customer journey & funnel mapping',
            'Conversion-focused campaign planning'
          ],
          icon: 'foundation',
          color: 'from-blue-700 to-sky-500'
        },
        {
          category: 'Performance Marketing Services',
          description: 'ROI-focused services for maximum leads and sales generation',
          subcategories: [
            {
              title: 'Paid Advertising Platforms',
              items: [
                'Google Search Ads',
                'Google Display Ads',
                'YouTube Video Ads',
                'Facebook & Instagram Ads',
                'LinkedIn Ads (B2B targeting)',
                'Remarketing & Retargeting Ads'
              ]
            },
            {
              title: 'Performance Operations',
              items: [
                'Campaign setup & structure optimization',
                'Audience research & smart targeting',
                'Creative & copy A/B testing',
                'Landing page optimization',
                'Conversion tracking setup (Pixel, GA4)',
                'ROAS, CPA, CPL optimization',
                'Daily monitoring & scaling strategies'
              ]
            }
          ],
          icon: 'analytics',
          color: 'from-purple-500 to-pink-500'
        },
        {
          category: 'Social Media Management Services',
          description: 'Convert your social media into professional brand growth machine',
          platforms: [
            'Instagram', 'Facebook', 'LinkedIn', 'YouTube', 'Twitter (X)', 'WhatsApp Business'
          ],
          activities: [
            'Account setup & optimization',
            'Monthly content calendar planning',
            'Post, reel & story management',
            'Caption & hashtag strategy',
            'Comment & DM handling',
            'Community engagement',
            'Influencer collaboration (optional)',
            'Analytics & growth reporting'
          ],
          icon: 'share',
          color: 'from-green-500 to-emerald-500'
        },
        {
          category: 'Content & Creative Services',
          description: 'Strong content = Strong brand identity',
          subcategories: [
            {
              title: 'Graphic & Visual Content',
              items: [
                'Brand creatives & ad banners',
                'Social media post & reel designs',
                'YouTube & Ads thumbnail design',
                'Corporate presentations & pitch decks'
              ]
            },
            {
              title: 'Video Content Creation',
              items: [
                'Short-form reels & ads',
                'Promotional videos',
                'Explainer videos',
                'CGI / AI-based advertisements',
                'Product & service showcase videos'
              ]
            }
          ],
          icon: 'palette',
          color: 'from-orange-500 to-red-500'
        },
        {
          category: 'SEO & Organic Growth Services',
          description: 'Help your website rank top in search engines',
          items: [
            'Complete website SEO audit',
            'Keyword research & strategy',
            'On-page SEO optimization',
            'Technical SEO improvements',
            'Local SEO (Google Business Profile)',
            'Content SEO (Blogs & Landing Pages)'
          ],
          icon: 'search',
          color: 'from-indigo-500 to-purple-500'
        }
      ],
      reporting: {
        title: 'Reporting, System & Support',
        description: 'Transparency and continuous improvement is our priority',
        features: [
          'Weekly & monthly performance reports',
          'KPI & growth dashboards',
          'Lead quality analysis',
          'Sales funnel optimization',
          'Strategy review & improvement planning'
        ],
        icon: 'monitoring',
        color: 'from-teal-500 to-cyan-500'
      },
      packages: [
        {
          name: 'Starter Package',
          price: '₹25,000/month',
          description: 'Perfect for small businesses launching their digital presence',
          features: [
            'Basic SEO optimization',
            '2 social media platforms management',
            'Monthly performance reports',
            'Google Ads setup (₹10,000 budget)',
            'Basic content creation',
            'Email support'
          ],
          color: 'from-green-500 to-emerald-500',
          popular: false
        },
        {
          name: 'Growth Package',
          price: '₹75,000/month',
          description: 'Ideal for scaling companies seeking significant growth',
          features: [
            'Advanced SEO & content strategy',
            'All major social platforms management',
            'Weekly analytics & insights',
            'Multi-channel advertising (₹50,000 budget)',
            'Professional video content',
            'Dedicated account manager',
            'A/B testing campaigns',
            'Lead generation optimization'
          ],
          color: 'from-blue-500 to-purple-500',
          popular: true
        },
        {
          name: 'Premium Package',
          price: '₹1,50,000/month',
          description: 'Enterprise solution for maximum market dominance',
          features: [
            'Enterprise SEO strategy',
            'Full social media ecosystem',
            'Real-time analytics dashboard',
            'Omnichannel advertising (₹1,00,000 budget)',
            'Custom video production',
            'Strategic consulting sessions',
            'Advanced automation tools',
            '24/7 premium support',
            'Competitive intelligence',
            'ROI optimization guarantee'
          ],
          color: 'from-purple-500 to-pink-500',
          popular: false
        }
      ]
    },
    {
      id: 'ai-automation',
      title: 'AI Automation Agent Services',
      subtitle: 'Intelligent Business Transformation',
      description: 'Revolutionize your operations with AI-powered automation agents that eliminate repetitive tasks, reduce costs by up to 80%, and enable 24/7 business operations. Our intelligent agents learn from your processes and continuously optimize for maximum efficiency and scalability.',
      icon: 'auto_mode',
      color: 'from-purple-500 to-pink-500',
      aiAgents: [
        {
          name: 'Auto Lead Generation Agent',
          description: 'Intelligent prospect identification and qualification',
          icon: 'person_add',
          color: 'from-blue-700 to-sky-500',
          capabilities: ['Smart prospecting', 'Lead scoring', 'Automated outreach']
        },
        {
          name: 'AI Calling & Voice Agent',
          description: 'Automated voice interactions with natural conversation',
          icon: 'call',
          color: 'from-green-500 to-emerald-500',
          capabilities: ['Natural language processing', 'Voice recognition', '24/7 availability']
        },
        {
          name: 'AI Chatbot Support Agent',
          description: 'Intelligent customer service automation',
          icon: 'chat',
          color: 'from-purple-500 to-pink-500',
          capabilities: ['Multi-language support', 'Context understanding', 'Seamless escalation']
        },
        {
          name: 'AI Website Development Agent',
          description: 'Automated web design and development',
          icon: 'web',
          color: 'from-orange-500 to-red-500',
          capabilities: ['Responsive design', 'Code generation', 'SEO optimization']
        },
        {
          name: 'AI Content Creation Agent',
          description: 'Automated content generation and curation',
          icon: 'edit',
          color: 'from-indigo-500 to-purple-500',
          capabilities: ['Blog writing', 'Social media content', 'Brand voice consistency']
        },
        {
          name: 'Social Media Automation Agent',
          description: 'Intelligent social platform management',
          icon: 'share',
          color: 'from-pink-500 to-rose-500',
          capabilities: ['Content scheduling', 'Engagement optimization', 'Analytics reporting']
        },
        {
          name: 'Performance Marketing AI Agent',
          description: 'Automated advertising optimization',
          icon: 'trending_up',
          color: 'from-cyan-500 to-blue-500',
          capabilities: ['Bid optimization', 'Audience targeting', 'ROI maximization']
        },
        {
          name: 'AI Copywriting Agent',
          description: 'Professional copy generation and editing',
          icon: 'description',
          color: 'from-amber-500 to-yellow-500',
          capabilities: ['Ad copywriting', 'Email campaigns', 'Conversion optimization']
        },
        {
          name: 'AI Graphic Design Agent',
          description: 'Automated visual content creation',
          icon: 'palette',
          color: 'from-teal-500 to-cyan-500',
          capabilities: ['Logo design', 'Marketing materials', 'Brand consistency']
        },
        {
          name: 'AI Video Editing Agent',
          description: 'Intelligent video production and editing',
          icon: 'videocam',
          color: 'from-red-500 to-pink-500',
          capabilities: ['Automated editing', 'Content assembly', 'Style consistency']
        },
        {
          name: 'AI Marketing Strategy Agent',
          description: 'Data-driven marketing planning and execution',
          icon: 'strategy',
          color: 'from-violet-500 to-purple-500',
          capabilities: ['Campaign planning', 'Channel optimization', 'Performance tracking']
        },
        {
          name: 'AI Branding & Digital Growth Agent',
          description: 'Comprehensive brand development and growth',
          icon: 'auto_awesome',
          color: 'from-emerald-500 to-green-500',
          capabilities: ['Brand identity', 'Digital presence', 'Growth acceleration']
        }
      ],
      benefits: [
        {
          title: 'Complete Automation',
          description: 'Eliminate manual repetitive tasks and streamline workflows',
          icon: 'bolt',
          color: 'from-yellow-500 to-orange-500',
          stat: '100%',
          statLabel: 'Task Automation'
        },
        {
          title: 'Cost Reduction',
          description: 'Reduce operational costs by up to 80% through intelligent automation',
          icon: 'savings',
          color: 'from-green-500 to-emerald-500',
          stat: '80%',
          statLabel: 'Cost Savings'
        },
        {
          title: '24/7 Operations',
          description: 'Enable round-the-clock business operations without human intervention',
          icon: 'schedule',
          color: 'from-blue-700 to-sky-500',
          stat: '24/7',
          statLabel: 'Availability'
        },
        {
          title: 'Enhanced Productivity',
          description: 'Free up human resources for strategic and creative work',
          icon: 'auto_graph',
          color: 'from-purple-500 to-pink-500',
          stat: '300%',
          statLabel: 'Productivity Boost'
        },
        {
          title: 'Scalable Growth',
          description: 'Easily scale operations without proportional resource increase',
          icon: 'trending_up',
          color: 'from-cyan-500 to-blue-500',
          stat: '10X',
          statLabel: 'Scalability'
        }
      ],
      packages: [
        {
          name: 'Starter Automation',
          price: '₹35,000/month',
          description: 'Entry-level automation for basic business processes',
          features: [
            'Basic chatbot implementation',
            'Simple workflow automation',
            'Email automation setup',
            'Basic data processing',
            'Standard support'
          ],
          color: 'from-green-500 to-emerald-500',
          popular: false
        },
        {
          name: 'Business Automation',
          price: '₹95,000/month',
          description: 'Comprehensive automation suite for growing businesses',
          features: [
            'Advanced AI chatbots',
            'Multi-channel automation',
            'Intelligent data processing',
            'Custom workflow design',
            'Integration with existing systems',
            'Analytics & reporting',
            'Priority support'
          ],
          color: 'from-blue-500 to-purple-500',
          popular: true
        },
        {
          name: 'Enterprise AI Suite',
          price: '₹2,00,000/month',
          description: 'Full-scale AI transformation for enterprise operations',
          features: [
            'Enterprise-grade AI agents',
            'Complete process automation',
            'Advanced machine learning models',
            'Real-time optimization',
            'Predictive analytics',
            'Custom AI development',
            '24/7 dedicated support',
            'Continuous improvement',
            'Scalable architecture',
            'ROI guarantee'
          ],
          color: 'from-purple-500 to-pink-500',
          popular: false
        }
      ]
    },
    {
      id: 'software-development',
      title: 'Software Development Services',
      subtitle: 'Complete Custom B2B & B2C Solutions',
      description: 'We provide complete custom software development solutions designed for both B2B (Business to Business) and B2C (Business to Customer) companies. Our focus is on business automation, efficiency improvement, scalability, and digital transformation.',
      icon: 'code',
      color: 'from-green-500 to-emerald-500',
      b2bServices: [
        {
          name: 'CRM Software (All Industries)',
          description: 'Customer data management, lead tracking, sales automation and relationship management',
          features: [
            'Customer database management',
            'Lead tracking and scoring',
            'Sales pipeline automation',
            'Relationship management tools',
            'Reporting and analytics'
          ],
          icon: 'groups',
          color: 'from-blue-700 to-sky-500'
        },
        {
          name: 'Finance / Accounting / Billing Software',
          description: 'Invoicing, expense tracking, financial reporting and GST management',
          features: [
            'Automated invoicing system',
            'Expense tracking and management',
            'Financial reporting dashboard',
            'GST compliance management',
            'Multi-currency support'
          ],
          icon: 'payments',
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Project & Task Management Software',
          description: 'Team collaboration, task assignment, workflow automation and productivity tracking',
          features: [
            'Team collaboration tools',
            'Task assignment and tracking',
            'Workflow automation',
            'Productivity analytics',
            'Resource management'
          ],
          icon: 'task',
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'HRMS & Payroll Software',
          description: 'Employee management, attendance, payroll processing and performance tracking',
          features: [
            'Employee database management',
            'Attendance tracking system',
            'Payroll processing automation',
            'Performance evaluation tools',
            'Leave management system'
          ],
          icon: 'badge',
          color: 'from-indigo-500 to-purple-500'
        },
        {
          name: 'Communication & Collaboration Software',
          description: 'Internal chat systems, team collaboration tools and workflow communication',
          features: [
            'Internal messaging system',
            'Video conferencing tools',
            'File sharing platform',
            'Team collaboration workspace',
            'Workflow communication tools'
          ],
          icon: 'chat',
          color: 'from-cyan-500 to-blue-500'
        },
        {
          name: 'Email & Marketing Automation Software',
          description: 'Automated email campaigns, lead nurturing and marketing workflows',
          features: [
            'Automated email campaigns',
            'Lead nurturing workflows',
            'Marketing automation tools',
            'Campaign performance tracking',
            'Customer segmentation'
          ],
          icon: 'mail',
          color: 'from-orange-500 to-red-500'
        },
        {
          name: 'Customer Support & Helpdesk Software',
          description: 'Ticket management, complaint handling and support automation',
          features: [
            'Ticket management system',
            'Complaint handling workflow',
            'Support automation tools',
            'Knowledge base management',
            'Customer satisfaction tracking'
          ],
          icon: 'support',
          color: 'from-teal-500 to-cyan-500'
        },
        {
          name: 'Document Management & E-Signature Software',
          description: 'Secure document storage, sharing and digital signature systems',
          features: [
            'Secure document storage',
            'Document sharing platform',
            'Digital signature integration',
            'Version control system',
            'Access permission management'
          ],
          icon: 'description',
          color: 'from-amber-500 to-yellow-500'
        },
        {
          name: 'Inventory, Supply Chain & Logistics Software',
          description: 'Stock tracking, warehouse management and logistics automation',
          features: [
            'Real-time inventory tracking',
            'Warehouse management system',
            'Supply chain optimization',
            'Logistics automation',
            'Demand forecasting'
          ],
          icon: 'inventory',
          color: 'from-lime-500 to-green-500'
        },
        {
          name: 'Data Analytics, BI & Reporting Software',
          description: 'Business insights, dashboards and performance analytics',
          features: [
            'Business intelligence dashboards',
            'Performance analytics',
            'Data visualization tools',
            'Custom reporting system',
            'Predictive analytics'
          ],
          icon: 'analytics',
          color: 'from-violet-500 to-purple-500'
        }
      ],
      b2cServices: [
        {
          name: 'E-Commerce & Online Store Systems',
          description: 'Online selling platforms, product management and order automation',
          features: [
            'Online store platform',
            'Product catalog management',
            'Order processing automation',
            'Shopping cart system',
            'Customer account management'
          ],
          icon: 'storefront',
          color: 'from-blue-700 to-sky-500'
        },
        {
          name: 'Payment Gateway & Wallet Systems',
          description: 'Secure online payments, digital wallets and transaction management',
          features: [
            'Secure payment processing',
            'Digital wallet integration',
            'Transaction management',
            'Multi-payment method support',
            'Fraud detection system'
          ],
          icon: 'account_balance_wallet',
          color: 'from-green-500 to-emerald-500'
        },
        {
          name: 'Accounting, Billing & GST Software',
          description: 'Retail billing, invoices and tax management',
          features: [
            'Retail billing system',
            'Invoice generation',
            'Tax management (GST)',
            'Financial reporting',
            'Customer billing portal'
          ],
          icon: 'receipt_long',
          color: 'from-purple-500 to-pink-500'
        },
        {
          name: 'Customer Relationship Software (B2C CRM)',
          description: 'Customer data, loyalty programs and engagement tools',
          features: [
            'Customer data management',
            'Loyalty program system',
            'Customer engagement tools',
            'Personalization engine',
            'Customer feedback system'
          ],
          icon: 'group',
          color: 'from-indigo-500 to-purple-500'
        },
        {
          name: 'Appointment Booking Software',
          description: 'Online scheduling systems for services',
          features: [
            'Online appointment booking',
            'Calendar integration',
            'Automated reminders',
            'Resource scheduling',
            'Booking confirmation system'
          ],
          icon: 'event',
          color: 'from-cyan-500 to-blue-500'
        },
        {
          name: 'Delivery, Logistics & Order Tracking Software',
          description: 'Order tracking, delivery automation and logistics management',
          features: [
            'Real-time order tracking',
            'Delivery route optimization',
            'Logistics management',
            'Delivery status updates',
            'Customer notification system'
          ],
          icon: 'local_shipping',
          color: 'from-orange-500 to-red-500'
        },
        {
          name: 'Inventory & Stock Management Software',
          description: 'Real-time stock monitoring and warehouse tracking',
          features: [
            'Real-time stock monitoring',
            'Warehouse tracking system',
            'Stock level alerts',
            'Inventory optimization',
            'Supply chain integration'
          ],
          icon: 'inventory_2',
          color: 'from-teal-500 to-cyan-500'
        },
        {
          name: 'Customer Support, Chatbot & FAQ Systems',
          description: 'AI chatbot support, automated responses and customer help systems',
          features: [
            'AI-powered chatbot',
            'Automated response system',
            'FAQ knowledge base',
            'Ticket management',
            'Multi-language support'
          ],
          icon: 'smart_toy',
          color: 'from-amber-500 to-yellow-500'
        },
        {
          name: 'Data Analytics & Reporting Software',
          description: 'Customer insights, sales reports and performance tracking',
          features: [
            'Customer behavior analytics',
            'Sales performance reports',
            'Marketing campaign tracking',
            'Customer insights dashboard',
            'Performance monitoring'
          ],
          icon: 'monitoring',
          color: 'from-lime-500 to-green-500'
        }
      ],
      developmentProcess: {
        title: 'Our Development Process',
        steps: [
          {
            step: 1,
            title: 'Requirement Analysis',
            description: 'Deep understanding of business needs and objectives',
            icon: 'search',
            color: 'from-blue-700 to-sky-500'
          },
          {
            step: 2,
            title: 'System Design',
            description: 'Architecture planning and technical specification',
            icon: 'architecture',
            color: 'from-purple-500 to-pink-500'
          },
          {
            step: 3,
            title: 'Development & Testing',
            description: 'Agile development with continuous testing',
            icon: 'code',
            color: 'from-green-500 to-emerald-500'
          },
          {
            step: 4,
            title: 'Deployment & Launch',
            description: 'Smooth deployment and go-live support',
            icon: 'rocket_launch',
            color: 'from-orange-500 to-red-500'
          },
          {
            step: 5,
            title: 'Maintenance & Support',
            description: 'Ongoing support and continuous improvement',
            icon: 'build',
            color: 'from-indigo-500 to-purple-500'
          }
        ]
      },
      packages: [
        {
          name: 'Basic Solution',
          price: '₹50,000/project',
          description: 'Essential software development for startups and small businesses',
          features: [
            'Basic web application',
            'Responsive design',
            'Core functionality implementation',
            'Basic database setup',
            '30 days support',
            'Documentation provided'
          ],
          color: 'from-green-500 to-emerald-500',
          popular: false
        },
        {
          name: 'Professional Solution',
          price: '₹2,00,000/project',
          description: 'Advanced software with comprehensive features and integrations',
          features: [
            'Full-stack development',
            'Advanced UI/UX design',
            'Database optimization',
            'API integrations',
            'Security implementation',
            'Performance optimization',
            '6 months support',
            'Complete documentation',
            'Training provided'
          ],
          color: 'from-blue-500 to-purple-500',
          popular: true
        },
        {
          name: 'Enterprise Solution',
          price: 'Custom Pricing',
          description: 'Large-scale enterprise software with advanced capabilities',
          features: [
            'Enterprise architecture',
            'Microservices design',
            'Advanced security protocols',
            'Cloud infrastructure',
            'Real-time processing',
            'AI/ML integration',
            'DevOps implementation',
            '24/7 support',
            'Continuous maintenance',
            'Scalable solutions'
          ],
          color: 'from-purple-500 to-pink-500',
          popular: false
        }
      ]
    },
    {
      id: 'enterprise-solutions',
      title: 'Enterprise Industry Solutions',
      subtitle: 'Sector-Specific Digital Transformation',
      description: 'Transform your industry operations with specialized digital solutions designed for education and healthcare sectors. Our tailored platforms address unique challenges and opportunities in each industry, driving efficiency, compliance, and growth.',
      icon: 'business',
      color: 'from-orange-500 to-red-500',
      industries: [
        {
          name: 'Education Solutions',
          description: 'Comprehensive digital ecosystem for modern educational institutions',
          services: [
            'School management system',
            'Student mobile apps',
            'AI learning platform',
            'Attendance tracking',
            'Parent communication tools',
            'Digital marketing for schools',
            'Online courses platforms',
            'Student engagement systems'
          ],
          benefits: [
            'Enhanced learning experience',
            'Streamlined administration',
            'Improved parent engagement',
            'Data-driven insights',
            'Compliance management'
          ]
        },
        {
          name: 'Healthcare Solutions',
          description: 'Secure and compliant healthcare management systems',
          services: [
            'Hospital management software',
            'Patient record systems',
            'Appointment booking',
            'Telemedicine platform',
            'Billing & insurance integration',
            'Pharmacy management',
            'AI health monitoring',
            'Secure data systems'
          ],
          benefits: [
            'HIPAA compliance',
            'Patient data security',
            'Streamlined operations',
            'Remote healthcare delivery',
            'Regulatory compliance'
          ]
        }
      ],
      packages: [
        {
          name: 'Standard Industry Package',
          price: '₹1,00,000',
          description: 'Comprehensive solution for medium-sized institutions',
          features: [
            'Core management system',
            'Basic reporting tools',
            'User management',
            'Standard integrations',
            '3 months support',
            'Basic training'
          ],
          color: 'from-green-500 to-emerald-500',
          popular: false
        },
        {
          name: 'Advanced Industry Package',
          price: '₹3,50,000',
          description: 'Enhanced solution with advanced features and analytics',
          features: [
            'Advanced management platform',
            'Custom reporting dashboards',
            'Mobile applications',
            'API integrations',
            'Advanced analytics',
            '6 months support',
            'Comprehensive training',
            'Custom development'
          ],
          color: 'from-blue-500 to-purple-500',
          popular: true
        },
        {
          name: 'Enterprise Digital Transformation',
          price: 'Custom Pricing',
          description: 'Complete digital transformation for large institutions',
          features: [
            'Enterprise-grade platform',
            'AI-powered insights',
            'Multi-location management',
            'Advanced security',
            'Custom integrations',
            '24/7 support',
            'Continuous development',
            'Strategic consulting',
            'Change management',
            'Ongoing optimization'
          ],
          color: 'from-purple-500 to-pink-500',
          popular: false
        }
      ]
    }
  ];

  const [activeSection, setActiveSection] = useState('digital-marketing');

  return (
    <div className="min-h-screen bg-white relative overflow-hidden pt-20">
      {/* Global Background Layer */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[800px] h-[800px] bg-[#bae6fd]/40 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] bg-[#e0f2fe]/50 blur-[160px] rounded-full" />
        <div className="absolute top-[30%] right-[15%] w-[500px] h-[500px] bg-[#bae6fd]/25 blur-[140px] rounded-full" />
        <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.025]"></div>
      </div>

      {/* Hero Section */}
      <div className="relative z-10 px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >

            <h1 className="text-5xl md:text-7xl font-black text-slate-950 mb-6 tracking-tight">
              Professional
              <span className="block text-gray-400">
                IT Services
              </span>
            </h1>

            <p className="text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed mb-6 font-medium">
              Comprehensive technology solutions for modern business growth
            </p>
            <p className="text-xl text-slate-500 max-w-2xl mx-auto mb-12">
              From digital marketing to AI automation, software development to industry-specific solutions
            </p>
          </motion.div>

          {/* Service Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {serviceSections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-8 py-4 rounded-full font-bold transition-all duration-300 flex items-center gap-3 border ${activeSection === section.id
                  ? 'bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 text-white shadow-xl shadow-blue-500/20 border-white/20'
                  : 'bg-white/40 text-slate-600 hover:bg-white/80 hover:text-slate-900 border-slate-200 backdrop-blur-sm'
                  }`}
              >
                <span className="material-symbols-outlined">{section.icon}</span>
                {section.title}
              </button>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Service Sections */}
      <div className="relative z-10 px-6 pb-20">
        <div className="max-w-6xl mx-auto">
          {serviceSections.map((section, sectionIndex) => (
            activeSection === section.id && (
              <motion.div
                key={section.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-16"
              >
                {/* Section Header */}
                <div className="text-center mb-16">
                  <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-blue-50 border border-blue-100 backdrop-blur-sm mb-6`}>
                    <span className="material-symbols-outlined text-blue-600">{section.icon}</span>
                    <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">{section.subtitle}</span>
                  </div>
                  <h2 className="text-5xl font-black text-slate-950 mb-6 tracking-tight">
                    {section.title.split(' ')[0]} <span className="text-gray-400">{section.title.split(' ').slice(1).join(' ')}</span>
                  </h2>
                  <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-medium">
                    {section.description}
                  </p>
                </div>

                {/* Enhanced Digital Marketing Services Grid */}
                {section.id === 'digital-marketing' && section.services && (
                  <div className="space-y-12 mb-16">
                    {section.services.map((service, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-4"
                      >
                        <div className="flex items-start gap-8">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-500/10`}>
                            <span className="material-symbols-outlined text-white text-3xl">{service.icon}</span>
                          </div>

                          <div className="flex-1">
                            <h3 className="text-3xl font-black text-slate-950 mb-4 flex items-center gap-3 tracking-tight">
                              {service.category}
                            </h3>
                            <p className="text-lg text-slate-600 mb-8 font-medium">{service.description}</p>

                            {/* Subcategories Grid */}
                            {service.subcategories && (
                              <div className="grid md:grid-cols-2 gap-10">
                                {service.subcategories.map((sub, subIndex) => (
                                  <div key={subIndex} className="space-y-4">
                                    <h4 className="text-xl font-extrabold text-blue-700 uppercase tracking-tighter">{sub.title}</h4>
                                    <ul className="space-y-3">
                                      {sub.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3 text-slate-700 font-medium group">
                                          <span className="material-symbols-outlined text-blue-500 text-sm mt-1 transition-transform group-hover:translate-x-1">arrow_forward</span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Platforms List */}
                            {service.platforms && (
                              <div className="mb-8">
                                <h4 className="text-lg font-black text-slate-900 mb-4 uppercase tracking-widest">Platforms We Master:</h4>
                                <div className="flex flex-wrap gap-3">
                                  {service.platforms.map((platform, pIndex) => (
                                    <span key={pIndex} className="px-5 py-2 bg-blue-50 text-blue-700 rounded-full font-bold text-sm border border-blue-100">
                                      {platform}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            )}

                            {/* Activities List */}
                            {service.activities && (
                              <div className="grid md:grid-cols-2 gap-4">
                                {service.activities.map((activity, aIndex) => (
                                  <div key={aIndex} className="flex items-center gap-3 text-slate-700 font-medium">
                                    <span className="material-symbols-outlined text-emerald-500 text-sm">check_circle</span>
                                    <span>{activity}</span>
                                  </div>
                                ))}
                              </div>
                            )}

                            {/* Simple Items List */}
                            {service.items && !service.subcategories && !service.platforms && (
                              <ul className="grid md:grid-cols-2 gap-4">
                                {service.items.map((item, itemIndex) => (
                                  <li key={itemIndex} className="flex items-start gap-3 text-slate-700 font-medium">
                                    <span className="material-symbols-outlined text-blue-500 text-sm mt-1">check_circle</span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Reporting Section */}
                    {section.reporting && (
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6 }}
                        className="p-10"
                      >
                        <div className="flex items-start gap-8">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${section.reporting.color} flex items-center justify-center flex-shrink-0 shadow-lg shadow-teal-500/10`}>
                            <span className="material-symbols-outlined text-white text-3xl">{section.reporting.icon}</span>
                          </div>

                          <div className="flex-1">
                            <h3 className="text-3xl font-black text-slate-950 mb-4 flex items-center gap-3 tracking-tight">
                              {section.reporting.title}
                            </h3>
                            <p className="text-lg text-slate-600 mb-8 font-medium">{section.reporting.description}</p>

                            <ul className="grid md:grid-cols-2 gap-4">
                              {section.reporting.features.map((feature, featureIndex) => (
                                <li key={featureIndex} className="flex items-start gap-3 text-slate-700 font-medium">
                                  <span className="material-symbols-outlined text-teal-500 text-sm mt-1">analytics</span>
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Enhanced Software Development Section */}
                {section.id === 'software-development' && (
                  <div className="space-y-16 mb-16">
                    {/* B2B Software Solutions */}
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-12 text-center">🏢 B2B Software Solutions</h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {section.b2bServices.map((service, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="glass-card rounded-2xl p-8 border border-white/10  transition-all duration-300 backdrop-blur-sm group"
                          >
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                              <span className="material-symbols-outlined text-white text-2xl">{service.icon}</span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3 text-center">{service.name}</h4>
                            <p className="text-slate-300 text-center mb-6">{service.description}</p>

                            <div className="space-y-2">
                              {service.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2 text-sm text-green-400">
                                  <span className="material-symbols-outlined text-xs">check_circle</span>
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* B2C Software Solutions */}
                    <div>
                      <h3 className="text-3xl font-bold text-white mb-12 text-center">🛒 B2C Software Solutions</h3>
                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {section.b2cServices.map((service, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10, scale: 1.02 }}
                            className="glass-card rounded-2xl p-8 border border-white/10  transition-all duration-300 backdrop-blur-sm group"
                          >
                            <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                              <span className="material-symbols-outlined text-white text-2xl">{service.icon}</span>
                            </div>
                            <h4 className="text-xl font-bold text-white mb-3 text-center">{service.name}</h4>
                            <p className="text-slate-300 text-center mb-6">{service.description}</p>

                            <div className="space-y-2">
                              {service.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="flex items-center gap-2 text-sm text-blue-400">
                                  <span className="material-symbols-outlined text-xs">check_circle</span>
                                  <span>{feature}</span>
                                </div>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    {/* Development Process */}
                    {section.developmentProcess && (
                      <div className="py-12">
                        <h3 className="text-4xl font-black text-slate-900 mb-16 text-center">
                          Our <span className="text-slate-400">Development Process</span>
                        </h3>
                        <div className="relative">
                          {/* Process Timeline */}
                          <div className="flex flex-col md:flex-row justify-between items-start gap-8 mb-12">
                            {section.developmentProcess.steps.map((step, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="flex-1 text-center relative"
                              >
                                {/* Connection Line (not for last item) */}
                                {index < section.developmentProcess.steps.length - 1 && (
                                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-slate-200 -z-10"></div>
                                )}

                                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-6 relative z-10 shadow-lg shadow-blue-500/20`}>
                                  <span className="material-symbols-outlined text-white text-2xl">{step.icon}</span>
                                </div>
                                <div className="p-2">
                                  <div className="text-2xl font-black text-blue-600/20 mb-2">0{step.step}</div>
                                  <h4 className="text-lg font-black text-slate-900 mb-2 uppercase tracking-tight">{step.title}</h4>
                                  <p className="text-slate-600 text-sm font-medium leading-relaxed">{step.description}</p>
                                </div>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* AI Agents Grid */}
                {section.aiAgents && (
                  <div className="mb-24">
                    <h3 className="text-4xl font-black text-slate-950 mb-16 text-center">
                      Intelligent <span className="text-gray-400">AI Agents</span>
                    </h3>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-16">
                      {section.aiAgents.map((agent, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ y: -10 }}
                          className="p-4 group"
                        >
                          <div className={`w-20 h-20 rounded-3xl bg-gradient-to-br ${agent.color} flex items-center justify-center mx-auto mb-8 group-hover:scale-110 transition-transform duration-300 shadow-xl shadow-slate-200`}>
                            <span className="material-symbols-outlined text-white text-3xl">{agent.icon}</span>
                          </div>
                          <h4 className="text-2xl font-black text-slate-950 mb-4 text-center tracking-tight">{agent.name}</h4>
                          <p className="text-slate-600 text-center mb-8 font-medium leading-relaxed">{agent.description}</p>

                          {/* Capabilities */}
                          <div className="space-y-3">
                            {agent.capabilities.map((capability, capIndex) => (
                              <div key={capIndex} className="flex items-center gap-3 text-sm text-blue-600 font-bold bg-blue-50/50 py-2.5 px-5 rounded-xl">
                                <span className="material-symbols-outlined text-xs">check_circle</span>
                                <span className="uppercase tracking-wider">{capability}</span>
                              </div>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Enhanced Industry Solutions Section */}
                {section.id === 'software-development' && section.industries && (
                  <div className="space-y-32 mb-24">
                    {section.industries.map((industry, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        className="py-10"
                      >
                        <div className="flex flex-col md:flex-row gap-16 items-start">
                          <div className="md:w-1/3">
                            <div className="flex items-center gap-4 mb-8">
                              <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${index === 0 ? 'from-blue-600 to-sky-400' : 'from-indigo-600 to-purple-400'} flex items-center justify-center shadow-2xl shadow-blue-500/20`}>
                                <span className="material-symbols-outlined text-white text-3xl">
                                  {index === 0 ? 'school' : 'local_hospital'}
                                </span>
                              </div>
                              <h3 className="text-4xl font-black text-slate-950 tracking-tighter uppercase">{industry.name}</h3>
                            </div>
                            <p className="text-xl text-slate-600 font-medium leading-relaxed mb-8">{industry.description}</p>
                          </div>

                          <div className="md:w-2/3 grid sm:grid-cols-2 gap-12">
                            <div>
                              <h4 className="text-lg font-black text-blue-700 mb-6 uppercase tracking-widest border-l-4 border-blue-600 pl-4">Core Solutions</h4>
                              <ul className="space-y-4">
                                {industry.services.map((service, serviceIndex) => (
                                  <li key={serviceIndex} className="flex items-center gap-4 text-slate-700 font-bold text-lg">
                                    <span className="material-symbols-outlined text-blue-500">check_circle</span>
                                    <span>{service}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>

                            <div>
                              <h4 className="text-lg font-black text-emerald-700 mb-6 uppercase tracking-widest border-l-4 border-emerald-600 pl-4">Strategic Value</h4>
                              <ul className="space-y-4">
                                {industry.benefits.map((benefit, benefitIndex) => (
                                  <li key={benefitIndex} className="flex items-center gap-4 text-slate-700 font-bold text-lg">
                                    <span className="material-symbols-outlined text-emerald-500">star</span>
                                    <span>{benefit}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Development Process */}
                    {section.developmentProcess && (
                      <div className="py-24">
                        <div className="text-center mb-24">
                          <h3 className="text-5xl font-black text-slate-950 tracking-tight">
                            Our <span className="text-gray-400">Development Process</span>
                          </h3>
                          <p className="text-xl text-slate-600 mt-4 font-medium max-w-2xl mx-auto">A systematic approach to engineering excellence</p>
                        </div>

                        <div className="relative">
                          {/* Process Timeline */}
                          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
                            {section.developmentProcess.steps.map((step, index) => (
                              <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.2 }}
                                className="flex-1 text-center relative"
                              >
                                {index < section.developmentProcess.steps.length - 1 && (
                                  <div className="hidden md:block absolute top-12 left-1/2 w-full h-1 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-100 -z-10"></div>
                                )}

                                <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${step.color} flex items-center justify-center mx-auto mb-8 relative z-10 shadow-2xl shadow-blue-500/10 group-hover:scale-110 transition-transform`}>
                                  <span className="material-symbols-outlined text-white text-4xl">{step.icon}</span>
                                </div>
                                
                                <div className="text-3xl font-black text-blue-600/10 mb-2 tracking-tighter">0{step.step}</div>
                                <h4 className="text-xl font-black text-slate-950 mb-4 tracking-tight uppercase">{step.title}</h4>
                                <p className="text-slate-600 font-medium leading-relaxed text-lg px-4">{step.description}</p>
                              </motion.div>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* Enhanced Benefits with Stats */}
                {section.benefits && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-20">
                    {section.benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="text-center group"
                      >
                        <div className="relative inline-block mb-6">
                          <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto shadow-xl shadow-slate-200 group-hover:scale-110 transition-transform duration-300`}>
                            <span className="material-symbols-outlined text-white text-3xl">{benefit.icon}</span>
                          </div>
                          {/* Stat Badge */}
                          <div className="absolute -top-3 -right-3 bg-slate-900 text-white text-xs font-black px-3 py-1.5 rounded-lg shadow-lg">
                            {benefit.stat}
                          </div>
                        </div>

                        <h3 className="text-xl font-black text-slate-950 mb-3 tracking-tight">{benefit.title}</h3>
                        <p className="text-slate-600 text-sm font-medium mb-4 leading-relaxed">{benefit.description}</p>
                        <div className="text-blue-600 text-xs font-black uppercase tracking-widest">{benefit.statLabel}</div>
                      </motion.div>
                    ))}
                  </div>
                )}

                {/* Service Packages */}
                <div className="py-20">
                  <div className="text-center mb-16">
                    <h2 className="text-5xl font-black text-slate-950 mb-4 tracking-tight">
                      Service <span className="text-gray-400">Packages</span>
                    </h2>
                    <p className="text-xl text-slate-600 font-medium">Choose the perfect solution for your business needs</p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-12">
                    {section.packages.map((packageItem, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.2 }}
                        whileHover={{ y: -10 }}
                        className="relative p-2"
                      >
                        {packageItem.popular && (
                          <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 z-20">
                            <span className="px-6 py-2 bg-slate-900 text-white font-black rounded-full text-xs tracking-widest">
                              MOST POPULAR
                            </span>
                          </div>
                        )}

                        <div className="text-center mb-10">
                          <h3 className="text-3xl font-black text-slate-950 mb-3 tracking-tight uppercase">{packageItem.name}</h3>
                          <div className="text-4xl font-black text-blue-600 mb-4">{packageItem.price}</div>
                          <p className="text-slate-600 font-medium leading-relaxed">{packageItem.description}</p>
                        </div>

                        <ul className="space-y-4 mb-12">
                          {packageItem.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3 text-slate-700 font-medium">
                              <span className="material-symbols-outlined text-blue-500 mt-0.5">check_circle</span>
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>

                        <motion.button 
                          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -12px rgba(37, 99, 235, 0.3)" }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-full py-5 rounded-2xl font-black transition-all duration-300 text-lg uppercase tracking-wider ${packageItem.popular
                          ? 'bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 text-white shadow-xl border border-white/20'
                          : 'bg-white border-2 border-slate-200 text-slate-950 hover:border-blue-500'
                          }`}>
                          Get Started
                        </motion.button>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )
          ))}
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="relative z-10 px-6 py-32">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-black text-slate-950 mb-10 tracking-tighter">
              Transform Your
              <span className="block text-gray-400 mt-2">
                Business Today
              </span>
            </h2>

            <p className="text-2xl text-slate-600 mb-16 max-w-3xl mx-auto leading-relaxed font-medium">
              Partner with us for comprehensive digital transformation, innovative AI solutions, and cutting-edge software development.
            </p>

            <div className="grid md:grid-cols-3 gap-12 mb-20">
              {[
                { icon: 'auto_awesome', title: 'Innovation', desc: 'Stay ahead with cutting-edge tech', color: 'from-blue-600 to-cyan-400' },
                { icon: 'trending_up', title: 'Digital Transformation', desc: 'Complete business evolution', color: 'from-indigo-600 to-purple-400' },
                { icon: 'groups', title: 'Business Growth', desc: 'Sustainable expansion tools', color: 'from-emerald-600 to-green-400' }
              ].map((item, i) => (
                <div key={i} className="text-center group">
                  <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${item.color} flex items-center justify-center mx-auto mb-6 shadow-xl shadow-slate-200 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="material-symbols-outlined text-white text-4xl">{item.icon}</span>
                  </div>
                  <h3 className="text-2xl font-black text-slate-950 mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-slate-600 font-medium">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-8 justify-center">
              <Link to="/contact">
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 25px 50px -12px rgba(37, 99, 235, 0.4)" }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500 text-white font-black px-12 py-6 rounded-2xl transition-all shadow-2xl flex items-center gap-4 text-xl uppercase tracking-wider border border-white/20"
                >
                  <span className="material-symbols-outlined font-black text-2xl">contact_support</span>
                  Schedule Consultation
                </motion.button>
              </Link>
              <Link to="/portfolio">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white hover:bg-slate-50 text-slate-950 font-black px-12 py-6 rounded-2xl border-2 border-slate-200 transition-all flex items-center gap-4 text-xl uppercase tracking-wider"
                >
                  <span className="material-symbols-outlined font-black text-2xl">work</span>
                  View Our Work
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
