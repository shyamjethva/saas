
export const SERVICE_SECTIONS = [
    {
        id: 'software-development',
        title: 'Software + APK Development Service',
        subtitle: 'Complete Custom B2B & B2C Solutions',
        description: 'We provide complete custom software development solutions designed for both B2B and B2C companies. Our focus is on business automation, efficiency improvement, scalability, and digital transformation.',
        icon: 'code_blocks',
        color: 'from-green-500 to-emerald-500',
        b2bServices: [
            {
                name: 'CRM Software (All Industries)',
                description: 'Customer data management, lead tracking, sales automation and relationship management',
                features: ['Customer database management', 'Lead tracking and scoring', 'Sales pipeline automation', 'Relationship management tools', 'Reporting and analytics'],
                icon: 'groups'
            },
            {
                name: 'Finance / Accounting / Billing Software',
                description: 'Invoicing, expense tracking, financial reporting and GST management',
                features: ['Automated invoicing system', 'Expense tracking and management', 'Financial reporting dashboard', 'GST compliance management', 'Multi-currency support'],
                icon: 'payments'
            },
            {
                name: 'Project & Task Management Software',
                description: 'Team collaboration, task assignment, workflow automation and productivity tracking',
                features: ['Team collaboration tools', 'Task assignment and tracking', 'Workflow automation', 'Productivity analytics', 'Resource management'],
                icon: 'task'
            },
            {
                name: 'HRMS & Payroll Software',
                description: 'Employee management, attendance, payroll processing and performance tracking',
                features: ['Employee database management', 'Attendance tracking system', 'Payroll processing automation', 'Performance evaluation tools', 'Leave management system'],
                icon: 'badge'
            },
            {
                name: 'Communication & Collaboration Software',
                description: 'Internal chat systems, team collaboration tools and workflow communication',
                features: ['Internal messaging system', 'Video conferencing tools', 'File sharing platform', 'Team collaboration workspace', 'Workflow communication tools'],
                icon: 'chat'
            },
            {
                name: 'Email & Marketing Automation Software',
                description: 'Automated email campaigns, lead nurturing and marketing workflows',
                features: ['Automated email campaigns', 'Lead nurturing workflows', 'Marketing automation tools', 'Campaign performance tracking', 'Customer segmentation'],
                icon: 'mail'
            },
            {
                name: 'Customer Support & Helpdesk Software',
                description: 'Ticket management, complaint handling and support automation',
                features: ['Ticket management system', 'Complaint handling workflow', 'Support automation tools', 'Knowledge base management', 'Customer satisfaction tracking'],
                icon: 'support'
            },
            {
                name: 'Inventory, Supply Chain & Logistics Software',
                description: 'Stock tracking, warehouse management and logistics automation',
                features: ['Real-time inventory tracking', 'Warehouse management system', 'Supply chain optimization', 'Logistics automation', 'Demand forecasting'],
                icon: 'inventory'
            },
            {
                name: 'ERP (Enterprise Resource Planning)',
                description: 'Integrated management of core business processes and resources',
                features: ['Financial management integration', 'Supply chain management', 'Human resources planning', 'Manufacturing operations', 'Real-time business intelligence'],
                icon: 'account_tree'
            }
        ],
        b2cServices: [
            {
                name: 'E-Commerce & Online Store Systems',
                description: 'Online selling platforms, product management and order automation',
                features: ['Online store platform', 'Product catalog management', 'Order processing automation', 'Shopping cart system', 'Customer account management'],
                icon: 'storefront'
            },
            {
                name: 'Payment Gateway & Wallet Systems',
                description: 'Secure online payments, digital wallets and transaction management',
                features: ['Secure payment processing', 'Digital wallet integration', 'Transaction management', 'Multi-payment method support', 'Fraud detection system'],
                icon: 'account_balance_wallet'
            },
            {
                name: 'Appointment Booking Software',
                description: 'Online scheduling systems for services',
                features: ['Online appointment booking', 'Calendar integration', 'Automated reminders', 'Resource scheduling', 'Booking confirmation system'],
                icon: 'event'
            },
            {
                name: 'Delivery & Logistics Software',
                description: 'Order tracking, delivery automation and logistics management',
                features: ['Real-time order tracking', 'Delivery route optimization', 'Logistics management', 'Delivery status updates', 'Customer notification system'],
                icon: 'local_shipping'
            },
            {
                name: 'Customer Support & Chatbot Systems',
                description: 'AI chatbot support, automated responses and customer help systems',
                features: ['AI-powered chatbot', 'Automated response system', 'FAQ knowledge base', 'Ticket management', 'Multi-language support'],
                icon: 'smart_toy'
            }
        ],
        process: [
            { step: 1, title: 'Requirement Analysis', desc: 'Deep understanding of business needs and objectives', icon: 'search' },
            { step: 2, title: 'System Design', desc: 'Architecture planning and technical specification', icon: 'architecture' },
            { step: 3, title: 'Development & Testing', desc: 'Agile development with continuous testing', icon: 'code' },
            { step: 4, title: 'Deployment & Launch', desc: 'Smooth deployment and go-live support', icon: 'rocket_launch' },
            { step: 5, title: 'Maintenance & Support', desc: 'Ongoing support and continuous improvement', icon: 'build' }
        ]
    },
    {
        id: 'digital-marketing',
        title: 'Digital + Performance Marketing Service',
        subtitle: 'Brand Growth & Revenue Generation',
        description: 'Complete end-to-end digital marketing solutions focused on brand growth, lead generation, customer acquisition, and revenue increase through data-driven strategies.',
        icon: 'trending_up',
        color: 'from-blue-500 to-cyan-500',
        categories: [
            {
                name: 'Performance Marketing',
                items: [
                    'Google Search & Display Ads',
                    'Facebook & Instagram Ads',
                    'LinkedIn Ads (B2B targeting)',
                    'Remarketing & Retargeting',
                    'Conversion Tracking (GA4/Pixel)',
                    'ROAS & CPL Optimization'
                ]
            },
            {
                name: 'Social Media Management',
                items: [
                    'Monthly content calendar planning',
                    'Post, reel & story management',
                    'Caption & hashtag strategy',
                    'Community engagement',
                    'Analytics & growth reporting',
                    'Influencer collaboration'
                ]
            },
            {
                name: 'SEO & Organic Growth',
                items: [
                    'Website SEO audit',
                    'Keyword research & strategy',
                    'On-page & Technical SEO',
                    'Local SEO (Google Business Profile)',
                    'Content SEO (Blogs & Landing Pages)',
                    'Backlink Strategy'
                ]
            },
            {
                name: 'Content & Creative',
                items: [
                    'Brand creatives & ad banners',
                    'Short-form reels & ads',
                    'Explainer videos',
                    'CGI / AI-based advertisements',
                    'Product showcase videos',
                    'YouTube thumbnail design'
                ]
            }
        ]
    },
    {
        id: 'physical-marketing',
        title: 'Physical Marketing Services',
        subtitle: 'Complete Offline & Direct Marketing',
        description: 'Comprehensive physical marketing solutions designed to build real-world brand presence and drive direct local engagement through tangible touchpoints.',
        icon: 'storefront',
        color: 'from-orange-500 to-red-500',
        categories: [
            {
                name: 'Print & Promotions',
                items: [
                    'Business cards & brochures',
                    'Banners & hoardings',
                    'Custom promotional merchandise',
                    'Event collateral & rollups'
                ]
            },
            {
                name: 'Direct Mail & Local Outreach',
                items: [
                    'Catalog distribution',
                    'Postcard campaigns',
                    'Local area marketing',
                    'Point of Sale (POS) materials'
                ]
            }
        ]
    },
    {
        id: 'graphical-development',
        title: 'Premium Creative Services',
        subtitle: 'UI/UX & Brand Authority',
        description: 'Transform your brand vision into stunning visual experiences with our comprehensive graphical development and user-centered design solutions.',
        icon: 'design_services',
        color: 'from-pink-500 to-rose-500',
        categories: [
            {
                name: 'UI/UX Design',
                items: [
                    'Website & App UI Design',
                    'Dashboard & Admin Panels',
                    'Interactive Prototypes',
                    'User Journey Mapping',
                    'Usability Testing'
                ]
            },
            {
                name: 'Brand Identity',
                items: [
                    'Logo Design & Branding',
                    'Brand Guidelines Development',
                    'Visual Design Language',
                    'Corporate Presentations'
                ]
            }
        ]
    }
];
