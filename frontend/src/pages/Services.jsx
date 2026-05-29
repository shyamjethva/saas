import React, {useState, useEffect} from 'react';
          import {motion} from 'framer-motion';
          import {Link} from 'react-router-dom';

          // Default Home View Data
          const defaultBenefits = [
          {
            title: 'Complete Automation',
          description: 'Eliminate manual repetitive tasks and streamline workflows',
          icon: 'bolt',
          color: 'from-slate-900 to-slate-800',
          stat: '100%',
          statLabel: 'Task Automation'
  },
          {
            title: 'Cost Reduction',
          description: 'Reduce operational costs by up to 80% through intelligent automation',
          icon: 'savings',
          color: 'from-blue-700 to-sky-500',
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
          color: 'from-slate-700 to-slate-600',
          stat: '10X',
          statLabel: 'Scalability'
  }
          ];

          const defaultProcess = [
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
          color: 'from-blue-600 to-indigo-600'
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
          ];

          // Add CSS for dash animation
          const style = document.createElement('style');
          style.innerHTML = `
          @keyframes dash {
            to {
            stroke - dashoffset: -10;
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
                className="absolute rounded-full bg-gradient-to-r from-slate-400/10 to-slate-500/10"
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
            id: 'software-development',
          title: 'Software + APK Development Service',
          subtitle: 'Complete Custom B2B & B2C Solutions',
          description: 'We provide complete custom software development solutions designed for both B2B (Business to Business) and B2C (Business to Customer) companies. Our focus is on business automation, efficiency improvement, scalability, and digital transformation.',
          icon: 'code',
          color: 'from-blue-700 to-sky-500',
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
          color: 'from-slate-700 to-slate-900'
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
          color: 'from-blue-700 to-indigo-800'
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
        },
          {
            name: 'ERP (Enterprise Resource Planning) Software',
          description: 'Integrated management of core business processes and resources',
          features: [
          'Financial management integration',
          'Supply chain management',
          'Human resources planning',
          'Manufacturing operations',
          'Real-time business intelligence'
          ],
          icon: 'account_tree',
          color: 'from-blue-700 to-sky-500'
        },
          {
            name: 'Business Intelligence & Dashboard Software',
          description: 'Advanced analytics and real-time business performance monitoring',
          features: [
          'Real-time data visualization',
          'Interactive dashboards',
          'Advanced analytics reporting',
          'KPI monitoring systems',
          'Predictive business insights'
          ],
          icon: 'insights',
          color: 'from-blue-600 to-indigo-600'
        }
          ],
          developmentProcess: [
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
          color: 'from-blue-600 to-indigo-600'
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
          color: 'from-blue-600 to-indigo-600'
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
          color: 'from-blue-700 to-indigo-800'
        }
          ],
          packages: [
          {
            name: 'Basic Solution',
          price: 'â‚¹50,000/project',
          description: 'Essential software development for startups and small businesses',
          features: [
          'Basic web application',
          'Responsive design',
          'Core functionality implementation',
          'Basic database setup',
          '30 days support',
          'Documentation provided'
          ],
          color: 'from-blue-600 to-indigo-600',
          popular: false
        },
          {
            name: 'Professional Solution',
          price: 'â‚¹2,00,000/project',
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
            id: 'digital-marketing',
          title: 'Digital + Performance Marketing Service',
          subtitle: 'Complete End-to-End B2B & B2C Solutions',
          description: 'We provide complete end-to-end digital marketing solutions designed for both B2B (Business to Business) and B2C (Business to Customer) businesses. Our focus is not just simple marketing â€” but brand growth, lead generation, customer acquisition, and revenue increase. We build strong online presence for your business, reach the right audience, and deliver consistent results through data-driven strategies.',
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
          color: 'from-blue-600 to-indigo-600'
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
          price: 'â‚¹25,000/month',
          description: 'Perfect for small businesses launching their digital presence',
          features: [
          'Basic SEO optimization',
          '2 social media platforms management',
          'Monthly performance reports',
          'Google Ads setup (â‚¹10,000 budget)',
          'Basic content creation',
          'Email support'
          ],
          color: 'from-blue-600 to-indigo-600',
          popular: false
        },
          {
            name: 'Growth Package',
          price: 'â‚¹75,000/month',
          description: 'Ideal for scaling companies seeking significant growth',
          features: [
          'Advanced SEO & content strategy',
          'All major social platforms management',
          'Weekly analytics & insights',
          'Multi-channel advertising (â‚¹50,000 budget)',
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
          price: 'â‚¹1,50,000/month',
          description: 'Enterprise solution for maximum market dominance',
          features: [
          'Enterprise SEO strategy',
          'Full social media ecosystem',
          'Real-time analytics dashboard',
          'Omnichannel advertising (â‚¹1,00,000 budget)',
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
            id: 'physical-marketing',
          title: 'Physical Marketing Services',
          subtitle: 'Complete Offline & Direct Marketing',
          description: 'Comprehensive physical marketing solutions designed to build real-world brand presence and drive direct local engagement.',
          icon: 'storefront',
          color: 'from-orange-500 to-red-500',
          services: [
          {
            category: 'Print & Promotions',
          description: 'High-quality print materials and promotional items',
          items: [
          'Business cards & brochures',
          'Banners & hoardings',
          'Custom promotional merchandise',
          'Event collateral'
          ],
          icon: 'print',
          color: 'from-orange-500 to-red-500'
        },
          {
            category: 'Direct Mail Campaigns',
          description: 'Targeted physical mailings to key demographics',
          items: [
          'Catalog distribution',
          'Postcard campaigns',
          'Local area marketing'
          ],
          icon: 'mail',
          color: 'from-red-500 to-rose-500'
        }
          ],
          packages: [
          {
            name: 'Basic Physical',
          price: 'â‚¹15,000/month',
          description: 'Essential physical marketing for local presence',
          features: [
          'Basic print materials',
          'Local distribution',
          'Monthly physical reports'
          ],
          color: 'from-orange-500 to-red-500',
          popular: false
        }
          ]
    },
          {
            id: 'graphical-development',
          title: 'Core Services',
          subtitle: 'Creative Visual Solutions for Modern Brands',
          description: 'Transform your brand vision into stunning visual experiences with our comprehensive graphical development services. From concept to creation, we deliver pixel-perfect designs that captivate audiences and drive engagement across all digital platforms.',
          icon: 'design_services',
          color: 'from-pink-500 to-rose-500',
          services: [
          {
            category: 'UI/UX Design & Prototyping',
          description: 'User-centered design solutions that enhance user experience and drive conversions',
          subcategories: [
          {
            title: 'User Interface Design',
          items: [
          'Website & App UI Design',
          'Dashboard & Admin Panel Design',
          'Landing Page Design',
          'Interactive Prototypes',
          'Design System Creation',
          'Component Library Development'
          ]
            },
          {
            title: 'User Experience Strategy',
          items: [
          'User Research & Personas',
          'User Journey Mapping',
          'Information Architecture',
          'Usability Testing',
          'Accessibility Compliance',
          'Conversion Rate Optimization'
          ]
            }
          ],
          icon: 'phonelink',
          color: 'from-blue-700 to-sky-500'
        },
          {
            category: 'Brand Identity & Visual Design',
          description: 'Complete brand visual identity solutions that establish your unique market presence',
          items: [
          'Logo Design & Branding',
          'Brand Guidelines Development',
          'Color Palette & Typography',
          'Business Card & Stationery',
          'Brand Style Guide',
          'Visual Identity System'
          ],
          icon: 'badge',
          color: 'from-purple-500 to-pink-500'
        },
          {
            category: 'Digital Marketing Graphics',
          description: 'High-impact visual content designed to maximize marketing campaign performance',
          subcategories: [
          {
            title: 'Social Media Content',
          items: [
          'Instagram & Facebook Posts',
          'LinkedIn Professional Graphics',
          'Twitter/X Visual Content',
          'Social Media Stories & Reels',
          'Profile & Cover Banners',
          'Social Media Templates'
          ]
            },
          {
            title: 'Advertising Creatives',
          items: [
          'Google Ads Banners',
          'Facebook/Instagram Ad Designs',
          'LinkedIn Sponsored Content',
          'YouTube Video Thumbnails',
          'Display Advertising Graphics',
          'Retargeting Ad Creatives'
          ]
            }
          ],
          icon: 'campaign',
          color: 'from-blue-600 to-indigo-600'
        },
          {
            category: '3D Product & CGI Visualization',
          description: 'Professional 3D product rendering and computer-generated imagery for stunning visual presentations',
          subcategories: [
          {
            title: 'Product Visualization',
          items: [
          '3D Product Modeling & Rendering',
          'Product Photorealistic Visualization',
          '360Â° Product Spins & Interactive Views',
          'Product Lifestyle Imagery',
          'Technical Product Illustrations',
          'Product Configuration Visuals'
          ]
            },
          {
            title: 'CGI & Digital Imaging',
          items: [
          'Computer Generated Imagery (CGI)',
          'Digital Product Photography',
          'Scene Recreation & Compositing',
          'Photo Manipulation & Enhancement',
          'Virtual Studio Photography',
          'Background Replacement & Retouching'
          ]
            }
          ],
          icon: 'animation',
          color: 'from-orange-500 to-red-500'
        },
          {
            category: 'Photography & Visual Content',
          description: 'Professional photography services and visual content creation for all your business needs',
          subcategories: [
          {
            title: 'Product Photography',
          items: [
          'E-commerce Product Photography',
          'Lifestyle Product Shoots',
          'White Background Photography',
          'Flat Lay & Overhead Photography',
          'Product Detail & Macro Shots',
          'Seasonal Product Campaigns'
          ]
            },
          {
            title: 'Commercial Photography',
          items: [
          'Corporate Headshots',
          'Team & Staff Photography',
          'Office & Workplace Photography',
          'Event Photography',
          'Architectural Photography',
          'Industrial & Manufacturing Photos'
          ]
            }
          ],
          icon: 'photo_camera',
          color: 'from-cyan-500 to-blue-500'
        },
          {
            category: 'Print & Marketing Materials',
          description: 'Professional print design and marketing collateral for physical and digital distribution',
          subcategories: [
          {
            title: 'Posters & Brochures',
          items: [
          'Event Posters & Flyers',
          'Promotional Posters',
          'Brochure Design (Bi-fold, Tri-fold)',
          'Catalog Design',
          'Menu Design',
          'Exhibition Booth Graphics'
          ]
            },
          {
            title: 'Pamphlets & Templates',
          items: [
          'Informational Pamphlets',
          'Educational Materials',
          'Business Proposal Templates',
          'Presentation Templates',
          'Social Media Templates',
          'Email Newsletter Templates'
          ]
            }
          ],
          icon: 'print',
          color: 'from-purple-500 to-pink-500'
        },
          {
            category: 'Video & Thumbnail Creation',
          description: 'Professional video production and thumbnail design for maximum engagement and conversion',
          subcategories: [
          {
            title: 'Video Production',
          items: [
          'Product Demonstration Videos',
          'Explainer Videos',
          'Company Introduction Videos',
          'Testimonial & Case Study Videos',
          'Training & Tutorial Videos',
          'Event Highlight Videos'
          ]
            },
          {
            title: 'Thumbnails & Cover Design',
          items: [
          'YouTube Video Thumbnails',
          'Social Media Video Covers',
          'Platform-Specific Thumbnails',
          'Thumbnail A/B Testing',
          'Video Title & Description Design',
          'Click-Through Rate Optimization'
          ]
            }
          ],
          icon: 'videocam',
          color: 'from-blue-600 to-indigo-600'
        },
          {
            category: 'Influencer & Social Content',
          description: 'Custom visual content designed for influencer partnerships and social media engagement',
          subcategories: [
          {
            title: 'Influencer Content Creation',
          items: [
          'Sponsored Post Graphics',
          'Influencer Collaboration Visuals',
          'Brand Partnership Assets',
          'Social Media Challenge Graphics',
          'UGC (User Generated Content) Templates',
          'Influencer Kit Design'
          ]
            },
          {
            title: 'Social Media Optimization',
          items: [
          'Platform-Specific Content',
          'Instagram Story Templates',
          'Facebook Post Design',
          'LinkedIn Professional Graphics',
          'TikTok Video Content',
          'Social Media Carousel Posts'
          ]
            }
          ],
          icon: 'groups',
          color: 'from-yellow-500 to-orange-500'
        }
          ]
    },
          {
            id: 'collaboration',
          title: 'Collaboration & Project Management',
          subtitle: 'Streamlined Team Collaboration Solutions',
          description: 'Enhance team productivity and project success with our comprehensive collaboration and project management services. We provide tools, processes, and expertise to help your teams work together more efficiently and deliver exceptional results.',
          icon: 'group_work',
          color: 'from-slate-700 to-slate-800',
          services: [
          {
            category: 'Project Management Solutions',
          description: 'End-to-end project management services ensuring timely delivery and quality outcomes',
          subcategories: [
          {
            title: 'Project Planning & Strategy',
          items: [
          'Project Scope Definition',
          'Timeline & Milestone Planning',
          'Resource Allocation',
          'Risk Assessment & Mitigation',
          'Budget Planning & Tracking',
          'Stakeholder Communication'
          ]
            },
          {
            title: 'Agile & Scrum Implementation',
          items: [
          'Agile Methodology Training',
          'Sprint Planning & Execution',
          'Daily Stand-ups Facilitation',
          'Backlog Management',
          'Retrospective Meetings',
          'Continuous Improvement Processes'
          ]
            }
          ],
          icon: 'task',
          color: 'from-blue-500 to-indigo-500'
        },
          {
            category: 'Team Collaboration Tools',
          description: 'Implementation and optimization of collaboration platforms for seamless teamwork',
          items: [
          'Slack & Microsoft Teams Setup',
          'Notion & Confluence Implementation',
          'Trello & Asana Configuration',
          'Google Workspace Integration',
          'Custom Workflow Automation',
          'Team Communication Protocols'
          ],
          icon: 'groups',
          color: 'from-blue-600 to-indigo-600'
        },
          {
            category: 'Document & Knowledge Management',
          description: 'Centralized systems for document storage, sharing, and knowledge retention',
          subcategories: [
          {
            title: 'Document Management Systems',
          items: [
          'Cloud Storage Solutions',
          'Version Control Systems',
          'Document Sharing Protocols',
          'Access Control & Permissions',
          'Backup & Recovery Systems',
          'Digital Asset Management'
          ]
            },
          {
            title: 'Knowledge Base Creation',
          items: [
          'Internal Wiki Development',
          'Process Documentation',
          'Training Material Creation',
          'Best Practices Repository',
          'FAQ Knowledge Base',
          'Onboarding Documentation'
          ]
            }
          ],
          icon: 'folder_shared',
          color: 'from-purple-500 to-pink-500'
        },
          {
            category: 'Business to Business Collaboration',
          description: 'Strategic partnership solutions for B2B collaborations and enterprise partnerships',
          subcategories: [
          {
            title: 'Strategic Partnerships',
          items: [
          'Partnership Opportunity Assessment',
          'Joint Venture Planning & Structure',
          'B2B Partnership Agreement Drafting',
          'Cross-Company Resource Sharing',
          'Shared Technology Integration',
          'Co-Development Project Management'
          ]
            },
          {
            title: 'Enterprise Alliances',
          items: [
          'Supplier & Vendor Partnership Programs',
          'Technology Integration Partnerships',
          'Distribution Channel Partnerships',
          'White Label & Private Label Solutions',
          'Co-Marketing & Co-Selling Initiatives',
          'Strategic Alliance Management'
          ]
            }
          ],
          icon: 'business',
          color: 'from-blue-500 to-indigo-500'
        },
          {
            category: 'Business to Influencer Collaboration',
          description: 'Professional influencer partnership programs and brand collaboration strategies',
          subcategories: [
          {
            title: 'Influencer Partnership Programs',
          items: [
          'Influencer Identification & Vetting',
          'Partnership Agreement Framework',
          'Brand Ambassador Program Design',
          'Sponsored Content Strategy',
          'Affiliate Marketing Integration',
          'Long-term Collaboration Planning'
          ]
            },
          {
            title: 'Content Collaboration',
          items: [
          'Co-Created Content Development',
          'Brand Integration Guidelines',
          'Campaign Performance Tracking',
          'Social Media Takeover Management',
          'Product Seeding & Review Programs',
          'UGC (User Generated Content) Strategy'
          ]
            }
          ],
          icon: 'groups',
          color: 'from-purple-500 to-pink-500'
        },
          {
            category: 'Business to Investors Collaboration',
          description: 'Investor relations and funding partnership management solutions',
          subcategories: [
          {
            title: 'Investor Relations Management',
          items: [
          'Investor Portfolio Management',
          'Investment Agreement Structuring',
          'Equity Partnership Framework',
          'Investor Communication Protocols',
          'Board Meeting Preparation',
          'Investment Performance Reporting'
          ]
            },
          {
            title: 'Funding Partnership Solutions',
          items: [
          'Venture Capital Partnership Programs',
          'Angel Investor Network Integration',
          'Private Equity Collaboration',
          'Crowdfunding Platform Management',
          'Investment Term Sheet Negotiation',
          'Post-Investment Growth Strategy'
          ]
            }
          ],
          icon: 'trending_up',
          color: 'from-blue-600 to-indigo-600'
        }
          ]
    }
          ];

          const [activeSection, setActiveSection] = useState(null);

          return (
          <div className="homepage-monochrome min-h-screen premium-bg relative overflow-x-hidden pt-12">
            {/* Global Premium Background - Pure White */}
            <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white">
              <div className="absolute inset-0 bg-[url('/images/grid.svg')] opacity-[0.03]"></div>
            </div>

            {/* Hero Section */}
            <div className="relative z-10 px-6 py-8">
              <div className="max-w-6xl mx-auto text-center">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                >

                  <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
                    Professional <span className="text-slate-500">IT Services.</span>
                  </h1>

                  <p className="text-2xl text-slate-500 max-w-3xl mx-auto leading-relaxed mb-6 font-light">
                    Comprehensive technology solutions for modern business growth.
                  </p>
                  <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-12 font-light">
                    From professional digital marketing to custom software development, branding and strategic growth.
                  </p>
                </motion.div>

                {/* Service Navigation */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="flex flex-wrap justify-center gap-3 mb-16"
                >
                  {/* Overview / Home Button */}
                  <button
                    onClick={() => setActiveSection(null)}
                    className={`px-6 py-3 rounded-full font-black uppercase tracking-widest text-[10px] transition-all duration-300 flex items-center gap-2 shadow-sm ${activeSection === null
                      ? 'bg-slate-900 text-white shadow-xl shadow-slate-200/50'
                      : 'bg-white/80 backdrop-blur-sm text-slate-500 border border-slate-200 hover:border-blue-400 hover:text-slate-900'
                      }`}
                  >
                    <span className="material-symbols-outlined text-base">home</span>
                    Home Overview
                  </button>

                  {serviceSections.map((section, index) => (
                    <button
                      key={section.id}
                      onClick={() => setActiveSection(activeSection === section.id ? null : section.id)}
                      className={`px-6 py-3 rounded-full font-black uppercase tracking-widest text-[10px] transition-all duration-300 flex items-center gap-2 shadow-sm ${activeSection === section.id
                        ? 'bg-slate-900 text-white shadow-xl shadow-slate-200/50'
                        : 'bg-white/80 backdrop-blur-sm text-slate-500 border border-slate-200 hover:border-blue-400 hover:text-slate-900'
                        }`}
                    >
                      <span className="material-symbols-outlined text-base">{section.icon}</span>
                      {section.title}
                    </button>
                  ))}
                </motion.div>

                {/* Home View (Portion 1 & 2) */}
                {activeSection === null && (
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="space-y-24 mt-12"
                  >
                    {/* Features/Benefits Cards */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                      {defaultBenefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className="bg-white/80 backdrop-blur-md rounded-3xl p-8 border border-slate-100 transition-all duration-500 shadow-2xl shadow-slate-200/50 text-center relative group overflow-hidden h-full flex flex-col items-center"
                        >
                          <div className={`absolute inset-0 bg-slate-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                          <div className="relative z-10 w-full flex flex-col items-center">
                            <div className={`w-16 h-16 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6 shadow-xl group-hover:bg-slate-900 transition-all duration-500`}>
                              <span className="material-symbols-outlined text-slate-400 group-hover:text-white text-2xl">{benefit.icon}</span>
                            </div>

                            <div className="absolute top-0 right-0 bg-slate-900 text-white text-[10px] font-black px-3 py-1 rounded-full shadow-lg transform translate-x-2 -translate-y-2">
                              {benefit.stat}
                            </div>

                            <h3 className="text-xl font-black text-slate-900 group-hover:text-slate-500 transition-all uppercase tracking-tight leading-tight mb-3">{benefit.title}</h3>
                            <p className="text-slate-500 text-sm leading-relaxed mb-6 flex-grow font-light">{benefit.description}</p>
                            <div className="px-4 py-1.5 rounded-full bg-slate-900/5 border border-slate-200 text-slate-400 text-[10px] font-black tracking-widest uppercase mt-auto">
                              {benefit.statLabel}
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>

                    {/* Development Process (Styled as unique Home Portion) */}
                    <div className="relative mt-12 px-6 py-24 border-y border-slate-100">
                      <div className="max-w-6xl mx-auto">
                        <div className="text-center mb-16">
                          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 mb-6 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-slate-400 animate-pulse"></span>
                            <span className="text-slate-500 text-[10px] tracking-widest uppercase font-black">How We Work</span>
                          </div>
                          <h3 className="text-5xl md:text-7xl font-black text-slate-900 mb-8 tracking-tighter leading-none">
                            Our Development <span className="text-slate-500">Process.</span>
                          </h3>
                          <p className="text-xl text-slate-500 max-w-2xl mx-auto leading-relaxed font-light">
                            From concept to deployment, our streamlined approach ensures quality and precision at every step of your digital journey.
                          </p>
                        </div>

                        <div className="max-w-4xl mx-auto space-y-4">
                          {defaultProcess.map((step, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="group relative"
                            >
                              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${step.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300 blur-xl`}></div>
                              <div className="relative flex items-center gap-6 p-6 rounded-xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-xl transition-all duration-300 backdrop-blur-xl">
                                <div className={`flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg transform group-hover:rotate-6 transition-transform`}>
                                  <span className="text-white text-2xl font-black">{step.step}</span>
                                </div>
                                <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-slate-50 flex items-center justify-center border border-slate-100">
                                  <span className="material-symbols-outlined text-slate-600 text-xl">{step.icon}</span>
                                </div>
                                <div className="flex-1">
                                  <h4 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors uppercase tracking-tight">{step.title}</h4>
                                  <p className="text-slate-600 text-sm leading-relaxed font-medium">{step.description}</p>
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
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
                        <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r ${section.color}/10 border ${section.color.split(' ')[1]}/20 backdrop-blur-sm mb-6`}>
                          <span className="material-symbols-outlined text-slate-400">{section.icon}</span>
                          <span className="text-slate-400 font-bold tracking-wider uppercase text-sm">{section.subtitle}</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 mb-6 leading-tight break-words">{section.title}</h2>
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
                              className="glass-card rounded-2xl p-8 border border-white/10  transition-all duration-300 backdrop-blur-sm"
                            >
                              <div className="flex items-start gap-6">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                                  <span className="material-symbols-outlined text-white text-2xl">{service.icon}</span>
                                </div>

                                <div className="flex-1">
                                  <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 mb-3 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-bold">check_circle</span>
                                    {service.category}
                                  </h3>
                                  <p className="text-slate-600 mb-6 font-medium">{service.description}</p>

                                  {/* Platforms List (for Social Media) */}
                                  {service.platforms && (
                                    <div className="mb-6">
                                      <h4 className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-blue-900 mb-3">Platforms Managed:</h4>
                                      <div className="flex flex-wrap gap-2">
                                        {service.platforms.map((platform, platformIndex) => (
                                          <span
                                            key={platformIndex}
                                            className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm border border-slate-200 font-bold"
                                          >
                                            {platform}
                                          </span>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  {/* Activities List (for Social Media) */}
                                  {service.activities && (
                                    <div className="mb-6">
                                      <h4 className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-indigo-900 mb-3">Social Media Activities:</h4>
                                      <ul className="space-y-2">
                                        {service.activities.map((activity, activityIndex) => (
                                          <li key={activityIndex} className="flex items-center gap-3 text-slate-600 font-medium">
                                            <span className="material-symbols-outlined text-blue-600 text-sm">arrow_right</span>
                                            <span>{activity}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  )}

                                  {/* Subcategories (for Performance Marketing & Content Services) */}
                                  {service.subcategories && (
                                    <div className="grid md:grid-cols-2 gap-6 mb-6">
                                      {service.subcategories.map((subcategory, subIndex) => (
                                        <div key={subIndex} className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                                          <h4 className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 mb-4 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-bold">category</span>
                                            {subcategory.title}
                                          </h4>
                                          <ul className="space-y-2">
                                            {subcategory.items.map((item, itemIndex) => (
                                              <li key={itemIndex} className="flex items-start gap-3 text-slate-600 font-medium">
                                                <span className="material-symbols-outlined text-blue-600 text-sm mt-1">check</span>
                                                <span>{item}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  )}

                                  {/* Simple Items List */}
                                  {service.items && !service.subcategories && !service.platforms && (
                                    <ul className="space-y-3">
                                      {service.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3 text-slate-600 font-medium">
                                          <span className="material-symbols-outlined text-blue-600 text-sm mt-1">arrow_right</span>
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
                              className="glass-card rounded-2xl p-8 border border-white/10  transition-all duration-300 backdrop-blur-sm"
                            >
                              <div className="flex items-start gap-6">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${section.reporting.color} flex items-center justify-center flex-shrink-0`}>
                                  <span className="material-symbols-outlined text-white text-2xl">{section.reporting.icon}</span>
                                </div>

                                <div className="flex-1">
                                  <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 mb-3 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-bold">monitoring</span>
                                    {section.reporting.title}
                                  </h3>
                                  <p className="text-slate-600 mb-6 font-medium">{section.reporting.description}</p>

                                  <ul className="space-y-3">
                                    {section.reporting.features.map((feature, featureIndex) => (
                                      <li key={featureIndex} className="flex items-start gap-3 text-slate-600 font-medium">
                                        <span className="material-symbols-outlined text-blue-600 text-sm mt-1">analytics</span>
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

                      {/* Services Grid (for non-digital marketing sections) */}
                      {section.services && section.id !== 'digital-marketing' && section.id !== 'ai-automation' && section.id !== 'software-development' && (
                        <div className="space-y-12 mb-16">
                          {section.services.map((service, index) => (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: index * 0.1 }}
                              className="glass-card rounded-2xl p-8 border border-white/10  transition-all duration-300 backdrop-blur-sm"
                            >
                              <div className="flex items-start gap-6">
                                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center flex-shrink-0`}>
                                  <span className="material-symbols-outlined text-white text-2xl">{service.icon}</span>
                                </div>

                                <div className="flex-1">
                                  <h3 className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 mb-3 flex items-center gap-3">
                                    <span className="material-symbols-outlined text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-bold">check_circle</span>
                                    {service.category}
                                  </h3>
                                  <p className="text-slate-600 mb-6 font-medium">{service.description}</p>

                                  {/* Subcategories with Items */}
                                  {service.subcategories && (
                                    <div className="space-y-6">
                                      {service.subcategories.map((subcategory, subIndex) => (
                                        <div key={subIndex}>
                                          <h4 className="text-lg font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700 mb-3 flex items-center gap-2">
                                            <span className="material-symbols-outlined text-blue-600">chevron_right</span>
                                            {subcategory.title}
                                          </h4>
                                          <ul className="space-y-2 ml-6">
                                            {subcategory.items.map((item, itemIndex) => (
                                              <li key={itemIndex} className="flex items-start gap-2 text-slate-600 font-medium">
                                                <span className="material-symbols-outlined text-blue-600 text-sm mt-1">check</span>
                                                <span>{item}</span>
                                              </li>
                                            ))}
                                          </ul>
                                        </div>
                                      ))}
                                    </div>
                                  )}

                                  {/* Simple Items List */}
                                  {service.items && !service.subcategories && (
                                    <ul className="space-y-3">
                                      {service.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className="flex items-start gap-3 text-slate-600 font-medium">
                                          <span className="material-symbols-outlined text-blue-600 text-sm mt-1">arrow_right</span>
                                          <span>{item}</span>
                                        </li>
                                      ))}
                                    </ul>
                                  )}
                                </div>
                              </div>
                            </motion.div>
                          ))}
                        </div>
                      )}

                      {/* Software Development - Floating UI */}
                      {section.id === 'software-development' && (
                        <div className="space-y-24 mb-16">
                          {/* B2B Software Solutions */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1 }}
                            className="transition-all duration-300"
                          >
                            <div className="flex items-start gap-8">
                              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-700 to-slate-900 flex items-center justify-center flex-shrink-0 shadow-2xl shadow-slate-900/10">
                                <span className="material-symbols-outlined text-white text-3xl">business</span>
                              </div>
                              <div className="flex-1">
                                <h3 className="text-4xl font-black text-slate-950 mb-4 flex items-center gap-4">
                                  🏢 B2B <span className="text-gray-400">Software Solutions</span>
                                </h3>
                                <p className="text-xl text-slate-600 mb-10 font-medium leading-relaxed">Enterprise-grade software solutions designed for business automation, efficiency improvement, scalability and digital transformation</p>

                                <div className="grid md:grid-cols-2 gap-10">
                                  {section.b2bServices.map((service, index) => (
                                    <div key={index} className="p-2">
                                      <h4 className="text-2xl font-black text-slate-950 mb-6 flex items-center gap-3">
                                        <span className={`material-symbols-outlined text-blue-600 text-3xl`}>{service.icon}</span>
                                        {service.name}
                                      </h4>
                                      <p className="text-slate-500 text-lg mb-6 font-medium leading-relaxed">{service.description}</p>
                                      <ul className="space-y-4">
                                        {service.features.map((feature, featureIndex) => (
                                          <li key={featureIndex} className="flex items-start gap-4 text-slate-700 font-bold text-lg">
                                            <span className="material-symbols-outlined text-blue-600">check_circle</span>
                                            <span>{feature}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>

                          {/* B2C Software Solutions */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="transition-all duration-300"
                          >
                            <div className="flex items-start gap-8">
                              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-slate-800 to-slate-950 flex items-center justify-center flex-shrink-0 shadow-2xl shadow-slate-900/10">
                                <span className="material-symbols-outlined text-white text-3xl">storefront</span>
                              </div>
                              <div className="flex-1">
                                <h3 className="text-4xl font-black text-slate-950 mb-4 flex items-center gap-4">
                                  🛒 B2C <span className="text-gray-400">Software Solutions</span>
                                </h3>
                                <p className="text-xl text-slate-600 mb-10 font-medium leading-relaxed">Customer-facing software platforms for e-commerce, payments, booking, delivery and customer engagement</p>

                                <div className="grid md:grid-cols-3 gap-10">
                                  {section.b2cServices.map((service, index) => (
                                    <div key={index} className="p-2">
                                      <h4 className="text-2xl font-black text-slate-950 mb-6 flex items-center gap-3">
                                        <span className={`material-symbols-outlined text-blue-600 text-3xl`}>{service.icon}</span>
                                        {service.name}
                                      </h4>
                                      <p className="text-slate-500 text-lg mb-6 font-medium leading-relaxed">{service.description}</p>
                                      <ul className="space-y-4">
                                        {service.features.map((feature, featureIndex) => (
                                          <li key={featureIndex} className="flex items-start gap-4 text-slate-700 font-bold text-lg">
                                            <span className="material-symbols-outlined text-blue-600">check_circle</span>
                                            <span>{feature}</span>
                                          </li>
                                        ))}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </motion.div>

                          {/* Development Process - NO BOXES */}
                          <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                            className="transition-all duration-300"
                          >
                            <div className="flex items-start gap-8">
                              <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0 shadow-2xl shadow-purple-500/20">
                                <span className="material-symbols-outlined text-white text-3xl">rocket_launch</span>
                              </div>
                              <div className="flex-1">
                                <h3 className="text-4xl font-black text-slate-950 mb-4 flex items-center gap-4">
                                  Our <span className="text-gray-400">Development Process</span>
                                </h3>
                                <p className="text-xl text-slate-600 mb-10 font-medium leading-relaxed">From initial concept to deployment, we build scalable, secure, and high-performance software solutions</p>

                                <div className="grid md:grid-cols-2 gap-10 mb-12">
                                  {section.developmentProcess.map((step, index) => (
                                    <div key={index} className="p-2">
                                      <h4 className="text-2xl font-black text-slate-950 mb-4 flex items-center gap-4">
                                        <span className={`material-symbols-outlined text-purple-600 text-3xl`}>{step.icon}</span>
                                        Step {step.step}: {step.title}
                                      </h4>
                                      <p className="text-slate-500 text-lg font-medium leading-relaxed">{step.description}</p>
                                    </div>
                                  ))}
                                </div>

                                <div className="grid grid-cols-3 gap-8">
                                  <div className="text-center p-8">
                                    <div className="text-5xl font-black text-slate-900 mb-2 font-['Space_Grotesk']">500+</div>
                                    <div className="text-slate-500 text-xs font-black uppercase tracking-widest">Projects Delivered</div>
                                  </div>
                                  <div className="text-center p-8">
                                    <div className="text-5xl font-black text-slate-900 mb-2 font-['Space_Grotesk']">99.9%</div>
                                    <div className="text-slate-500 text-xs font-black uppercase tracking-widest">Uptime Guarantee</div>
                                  </div>
                                  <div className="text-center p-8">
                                    <div className="text-5xl font-black text-slate-900 mb-2 font-['Space_Grotesk']">24/7</div>
                                    <div className="text-slate-500 text-xs font-black uppercase tracking-widest">Support Available</div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        </div>
                      )}

                      {/* B2B & B2C Services Grid - Floating */}
                      {(section.b2bServices || section.b2cServices) && section.id !== 'software-development' && (
                        <div className="grid md:grid-cols-2 gap-20 mb-24">
                          {section.b2bServices && (
                            <motion.div
                              initial={{ opacity: 0, x: -30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.2 }}
                              className="transition-all duration-300"
                            >
                              <div className="flex items-center gap-6 mb-10">
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center shadow-lg border border-slate-100 group-hover:bg-white transition-colors duration-300">
                                  <span className="material-symbols-outlined text-slate-950 text-2xl">business</span>
                                </div>
                                <h3 className="text-4xl font-black text-slate-950">B2B <span className="text-slate-500">Solutions</span></h3>
                              </div>
                              {section.b2bServices.map((service, index) => (
                                <div key={index} className="mb-10">
                                  <h4 className="text-2xl font-black text-slate-950 mb-6">{service.category}</h4>
                                  <ul className="space-y-4">
                                    {service.items.map((item, itemIndex) => (
                                      <li key={itemIndex} className="flex items-center gap-4 text-lg font-bold text-slate-700">
                                        <span className="material-symbols-outlined text-blue-600">check_circle</span>
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </ul>
                                </div>
                              ))}
                            </motion.div>
                          )}

                          {section.b2cServices && (
                            <motion.div
                              initial={{ opacity: 0, x: 30 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.4 }}
                              className="transition-all duration-300"
                            >
                              <div className="flex items-center gap-6 mb-10">
                                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center shadow-lg border border-slate-100 group-hover:bg-white transition-colors duration-300">
                                  <span className="material-symbols-outlined text-slate-950 text-2xl">storefront</span>
                                </div>
                                <h3 className="text-4xl font-black text-slate-950">B2C <span className="text-slate-500">Solutions</span></h3>
                              </div>
                              {section.b2cServices.map((service, index) => (
                                <div key={index} className="mb-10">
                                  <h4 className="text-2xl font-black text-slate-950 mb-6">{service.category}</h4>
                                  <ul className="space-y-4">
                                    {service.items.map((item, itemIndex) => (
                                      <li key={itemIndex} className="flex items-center gap-4 text-lg font-bold text-slate-700">
                                        <span className="material-symbols-outlined text-blue-600">check_circle</span>
                                        <span>{item}</span>
                                      </li>
                                    ))}
                                  </motion.div>
                    )}                {/* Industry Solutions - Modern Unique Design - NO BOXES */}
                                  {section.industries && (
                                    <div className="space-y-32 mb-32">
                                      {/* Section Header with Modern Design */}
                                      <div className="text-center relative">
                                        <div className="inline-flex items-center gap-4 px-8 py-4 rounded-full bg-blue-50 border border-blue-100 mb-12 relative z-10">
                                          <span className="material-symbols-outlined text-blue-600 text-2xl">apartment</span>
                                          <span className="text-blue-600 font-black tracking-widest uppercase text-sm">INDUSTRY TRANSFORMATION</span>
                                        </div>
                                        <h2 className="text-6xl md:text-8xl font-black text-slate-950 mb-10 relative z-10 tracking-tighter">
                                          Sector-Specific <br />
                                          <span className="text-gray-400">
                                            Digital Solutions
                                          </span>
                                        </h2>
                                        <p className="text-2xl text-slate-600 max-w-4xl mx-auto leading-relaxed relative z-10 font-medium">
                                          Revolutionary technology platforms designed exclusively for education and healthcare sectors
                                        </p>
                                      </div>

                                      {/* Industry Cards - Floating */}
                                      <div className="relative">
                                        <div className="grid lg:grid-cols-2 gap-24 relative z-10 items-stretch">
                                          {section.industries.map((industry, index) => (
                                            <motion.div
                                              key={index}
                                              initial={{ opacity: 0, y: 50 }}
                                              animate={{ opacity: 1, y: 0 }}
                                              transition={{ delay: index * 0.2, duration: 0.6 }}
                                              className="relative group h-full"
                                            >
                                              <div className="relative p-2 flex flex-col h-full">
                                                {/* Industry Header */}
                                                <div className="flex items-start gap-8 mb-10">
                                                  <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${industry.color} flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                                                    <span className="material-symbols-outlined text-white text-4xl">{industry.icon}</span>
                                                  </div>
                                                  <div className="flex-1">
                                                    <h3 className="text-4xl font-black text-slate-950 mb-4">{industry.name}</h3>
                                                    <p className="text-xl text-slate-600 leading-relaxed font-medium">{industry.description}</p>
                                                  </div>
                                                </div>

                                                {/* Solutions Grid */}
                                                <div className="mb-12 flex-grow">
                                                  <h4 className="text-xl font-black text-slate-950 mb-8 flex items-center gap-3">
                                                    <span className={`material-symbols-outlined text-3xl ${index === 0 ? 'text-blue-600' : 'text-orange-600'}`}>checklist</span>
                                                    Core Solutions
                                                  </h4>
                                                  <div className="grid grid-cols-1 gap-4">
                                                    {industry.solutions.slice(0, 6).map((solution, solIndex) => (
                                                      <motion.div
                                                        key={solIndex}
                                                        className="flex items-center gap-4 py-2"
                                                      >
                                                        <div className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center flex-shrink-0`}>
                                                          <span className={`material-symbols-outlined ${index === 0 ? 'text-blue-600' : 'text-slate-400'} text-xl`}>check_circle</span>
                                                        </div>
                                                        <span className="text-slate-800 text-lg font-bold">{solution}</span>
                                                      </motion.div>
                                                    ))}
                                                  </div>
                                                </div>

                                                {/* Benefits */}
                                                <div className="mt-auto">
                                                  <h4 className="text-xl font-black text-slate-950 mb-8 flex items-center gap-3">
                                                    <span className={`material-symbols-outlined text-3xl ${index === 0 ? 'text-purple-600' : 'text-blue-600'}`}>trending_up</span>
                                                    Key Benefits
                                                  </h4>
                                                  <div className="space-y-4">
                                                    {industry.benefits.slice(0, 3).map((benefit, benIndex) => (
                                                      <motion.div
                                                        key={benIndex}
                                                        className="flex items-start gap-4 py-2"
                                                      >
                                                        <div className={`w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 mt-1`}>
                                                          <span className="material-symbols-outlined text-slate-400 text-sm">star</span>
                                                        </div>
                                                        <p className="text-slate-600 text-lg leading-relaxed font-medium">{benefit}</p>
                                                      </motion.div>
                                                    ))}
                                                  </div>
                                                </div>
                                              </div>
                                            </motion.div>
                                          ))}
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {/* AI Agents Grid - NO BOXES */}
                                  {section.aiAgents && (
                                    <div className="mb-32">
                                      <h3 className="text-5xl md:text-7xl font-black text-slate-950 mb-20 text-center tracking-tighter">
                                        Intelligent <span className="text-gray-400">AI Agents</span>
                                      </h3>
                                      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-20">
                                        {section.aiAgents.map((agent, index) => (
                                          <motion.div
                                            key={index}
                                            initial={{ opacity: 0, y: 20 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: index * 0.1 }}
                                            whileHover={{ y: -10 }}
                                            className="transition-all duration-300 group"
                                          >
                                            <div className={`w-24 h-24 rounded-3xl bg-gradient-to-br ${agent.color} flex items-center justify-center mx-auto mb-10 group-hover:scale-110 transition-transform duration-300 shadow-2xl shadow-blue-500/10`}>
                                              <span className="material-symbols-outlined text-white text-4xl">{agent.icon}</span>
                                            </div>
                                            <h4 className="text-3xl font-black text-slate-950 mb-6 text-center">{agent.name}</h4>
                                            <p className="text-lg text-slate-600 text-center mb-8 font-medium leading-relaxed">{agent.description}</p>

                                            {/* Capabilities */}
                                            <div className="space-y-4">
                                              {agent.capabilities.map((capability, capIndex) => (
                                                <div key={capIndex} className="flex items-center gap-4 text-lg text-slate-700 font-bold justify-center">
                                                  <span className="material-symbols-outlined text-purple-600 text-xl">check_circle</span>
                                                  <span>{capability}</span>
                                                </div>
                                              ))}
                                            </div>
                                          </motion.div>
                                        ))}
                                      </div>
                                    </div>
                                  )}

                                  <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className="p-8 text-center relative group"
                                  >
                                    <div className="relative z-10">
                                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${benefit.color} flex items-center justify-center mx-auto mb-6 shadow-2xl group-hover:scale-110 transition-transform`}>
                                        <span className="material-symbols-outlined text-white text-3xl">{benefit.icon}</span>
                                      </div>

                                      <h3 className="text-2xl font-black text-slate-900 mb-3 uppercase tracking-tight">{benefit.title}</h3>
                                      <p className="text-slate-600 text-lg mb-4 font-medium leading-relaxed">{benefit.description}</p>
                                      <div className="text-blue-600 text-sm font-black uppercase tracking-widest">{benefit.stat} {benefit.statLabel}</div>
                                    </div>
                                  </motion.div>
                    ))}
                                </div>
                              )}


                            </motion.div>
                          )
          ))}


                          {/* Universal Bottom Stats */}
                          <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto pb-32"
                          >
                            <div className="text-center p-12 group">
                              <div className="text-6xl font-black text-slate-900 mb-4 group-hover:text-cyan-600 transition-all duration-500 group-hover:scale-110">2-4<span className="text-cyan-600 ml-1">wks</span></div>
                              <div className="text-sm font-black text-slate-400 uppercase tracking-[0.4em]">Avg. Delivery</div>
                            </div>

                            <div className="text-center p-12 group">
                              <div className="text-6xl font-black text-slate-900 mb-4 group-hover:text-slate-500 transition-all duration-500 group-hover:scale-110">100<span className="text-slate-400 ml-1">%</span></div>
                              <div className="text-sm font-black text-slate-400 uppercase tracking-[0.4em]">Satisfaction</div>
                            </div>

                            <div className="text-center p-12 group">
                              <div className="text-6xl font-black text-slate-900 mb-4 group-hover:text-purple-600 transition-all duration-500 group-hover:scale-110">24/7<span className="text-purple-600 ml-1"></span></div>
                              <div className="text-sm font-black text-slate-400 uppercase tracking-[0.4em]">Support</div>
                            </div>
                          </motion.div>
                        </div>
      </div>


    </div>
              );
};

              export default Services;
