const fs = require('fs');

const code = fs.readFileSync('PremiumServices.jsx', 'utf8');

const newServices = `  const services = [
    {
      id: 1,
      title: 'AI Automation Agent Service',
      icon: 'auto_mode',
      color: 'from-purple-500 to-pink-500',
      description: 'Advanced business automation using AI agents to streamline operations, save time, and scale your business efficiently.',
      features: [
        'Auto Lead Generation Agent',
        'AI Calling & Voice Agent',
        'AI Chatbot Support Agent',
        'AI Website Development Agent',
        'AI Content Creation Agent',
        'Social Media Automation Agent',
        'Performance Marketing AI Agent',
        'AI Copywriting Agent',
        'AI Graphic Design Agent',
        'AI Video Editing Agent',
        'AI Marketing Strategy Agent',
        'AI Branding & Digital Growth Agent',
        'Automation & Time Saving Solutions',
        'Scalability & Cost Reduction',
        '24/7 Operations Management',
        'Intelligent Decision Making',
        'Predictive Analytics & Insights',
        'Custom AI Agent Development',
        'AI Training & Implementation',
        'AI Performance Monitoring'
      ],
      cta: 'Schedule Strategy Call'
    },
    {
      id: 2,
      title: 'Software + APK Development Service',
      icon: 'code',
      color: 'from-blue-500 to-cyan-500',
      description: 'Custom software solutions for B2B and B2C businesses with advanced functionality and seamless user experience.',
      features: [
        'CRM systems',
        'ERP software',
        'HR & payroll systems',
        'Project management tools',
        'Accounting & billing systems',
        'Communication & collaboration tools',
        'Email marketing automation',
        'Customer support systems',
        'Document & e-signature software',
        'Inventory & logistics software',
        'Business analytics dashboards',
        'E-commerce platforms',
        'Online booking systems',
        'Payment gateway integration',
        'Customer relationship apps',
        'Mobile applications',
        'Delivery & order tracking systems',
        'Appointment scheduling software',
        'Stock management systems',
        'Customer support chat systems',
        'Data reporting tools',
        'User Experience Design',
        'API Integration',
        'Cloud Solutions',
        'Security & Compliance'
      ],
      cta: 'Schedule Strategy Call'
    },
    {
      id: 3,
      title: 'Enterprise Industry Solution',
      icon: 'corporate_fare',
      color: 'from-amber-500 to-orange-500',
      description: 'Specialized solutions for Education, Healthcare, Real Estate, and more industries with advanced features and compliance standards.',
      features: [
        'School management system',
        'Student mobile application',
        'AI learning platform',
        'Attendance & performance tracking',
        'Parent communication tools',
        'Digital marketing for schools',
        'Online courses & mentorship',
        'Student engagement systems',
        'Hospital management software',
        'Patient record systems',
        'Online appointment booking',
        'Telemedicine platform',
        'Billing & insurance integration',
        'Pharmacy management',
        'AI health monitoring tools',
        'Secure data management',
        'HIPAA Compliance',
        'Medical Records Security',
        'Patient Privacy Protection',
        'Regulatory Compliance'
      ],
      cta: 'Schedule Strategy Call'
    },
    {
      id: 4,
      title: 'Digital + Performance Marketing Service',
      icon: 'campaign',
      color: 'from-green-500 to-emerald-500',
      description: 'ROI-focused digital marketing solutions designed to maximize your business growth through data-driven strategies and performance optimization.',
      features: [
        'Digital marketing strategy & planning',
        'Brand positioning & online presence setup',
        'Market & competitor research',
        'Funnel & customer journey mapping',
        'Conversion campaign planning',
        'Google Ads (Search, Display, YouTube)',
        'Meta Ads (Facebook & Instagram)',
        'LinkedIn Ads (B2B)',
        'Remarketing campaigns',
        'Campaign optimization & scaling',
        'Conversion tracking & analytics',
        'Account setup & optimization',
        'Content calendar planning',
        'Post, reel, story management',
        'Engagement & community management',
        'Influencer coordination',
        'Growth analytics reporting',
        'Graphic design & ad creatives',
        'Video production & editing',
        'Promotional & explainer videos',
        'Branding materials',
        'AI creative ads',
        'Website SEO audit',
        'Keyword research',
        'On-page & technical SEO',
        'Local SEO',
        'Content SEO',
        'Weekly & monthly reports',
        'KPI dashboards',
        'Lead quality analysis',
        'Strategy improvement'
      ],
      cta: 'Schedule Strategy Call'
    },
    {
      id: 5,
      title: 'Physical Marketing Services',
      icon: 'storefront',
      color: 'from-red-500 to-rose-500',
      description: 'Comprehensive physical marketing solutions designed to build real-world brand presence and drive direct local engagement.',
      features: [
        'Business cards & brochures',
        'Banners & hoardings',
        'Custom promotional merchandise',
        'Event collateral',
        'Catalog distribution',
        'Postcard campaigns',
        'Local area marketing',
        'In-store promotional displays',
        'Direct mail campaigns',
        'Print advertising'
      ],
      cta: 'Schedule Strategy Call'
    },
    {
      id: 6,
      title: 'Graphical Development Services',
      icon: 'palette',
      color: 'from-pink-500 to-rose-500',
      description: 'Stunning visual identity and graphics that communicate your brand effectively across all touchpoints.',
      features: [
        'Brand Identity Design',
        'Logo & Typography',
        'Marketing Collateral',
        'Social Media Graphics',
        'UI/UX Design',
        'Packaging Design',
        'Presentation Design',
        'Custom Illustrations'
      ],
      cta: 'Schedule Strategy Call'
    },
    {
      id: 7,
      title: 'Collaboration and Project Management',
      icon: 'groups',
      color: 'from-teal-500 to-cyan-500',
      description: 'Streamlined team collaboration solutions and project management expertise to ensure your team works effectively.',
      features: [
        'Project Scope Definition',
        'Timeline & Milestone Planning',
        'Agile Methodology Training',
        'Sprint Planning & Execution',
        'Slack & Microsoft Teams Setup',
        'Notion & Confluence Implementation',
        'Strategic Partnerships',
        'Investor Relations Management'
      ],
      cta: 'Schedule Strategy Call'
    }
  ];`;

const startIdx = code.indexOf('  const services = [');
const endIdx = code.indexOf('  // Service Benefits');

const newCode = code.substring(0, startIdx) + newServices + '\n\n' + code.substring(endIdx);

fs.writeFileSync('PremiumServices.jsx', newCode);
console.log('PremiumServices.jsx updated');
