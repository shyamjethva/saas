import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

/* ═══════════════════════════════════════
   SECTOR DATA (Informational Only)
═══════════════════════════════════════ */
const sectors = [
  {
    id: 'real-estate', name: 'Real Estate', icon: 'home_work', subLabel: 'Property & Agents',
    color: 'from-blue-600 to-cyan-500',
    description: 'Modernize your property business with automated lead capture, detailed property listings, and seamless follow-up management for faster closures.',
    keywords: ['Lead Tracking', 'Property Portal', 'Agent ERP', 'Follow-up Automation'],
    stats: [{ label: 'Lead Conversion', value: '+40%' }, { label: 'Inquiry Response', value: '< 5 mins' }, { label: 'Property Viewings', value: '+25%' }, { label: 'Agent Efficiency', value: '+30%' }]
  },
  {
    id: 'education', name: 'Education', icon: 'school', subLabel: 'Schools & Courses',
    color: 'from-purple-600 to-pink-600',
    description: 'Streamline school and college operations with centralized admissions, automated fee tracking, and student performance monitoring in one place.',
    keywords: ['Admissions', 'Fee Management', 'Student ERP', 'Parent Portal'],
    stats: [{ label: 'Admission Growth', value: '+35%' }, { label: 'Fee Recovery', value: '98%' }, { label: 'Admin Time Saved', value: '50%' }, { label: 'Parent Satisfaction', value: '+45%' }]
  },
  {
    id: 'e-commerce', name: 'E-Commerce', icon: 'shopping_cart', subLabel: 'Online Stores',
    color: 'from-emerald-600 to-teal-600',
    description: 'Scale your online store with advanced inventory management, customer behavioral analytics, and automated multi-channel marketing tools.',
    keywords: ['Order Mgt', 'Loyalty', 'Funnel Tracking', 'Customer LTV'],
    stats: [{ label: 'Order Volume', value: '+50%' }, { label: 'Cart Abandonment', value: '-30%' }, { label: 'Customer LTV', value: '+25%' }, { label: 'Fulfillment Speed', value: '+40%' }]
  },
  {
    id: 'manufacturing', name: 'Manufacturing', icon: 'precision_manufacturing', subLabel: 'Production & Supply',
    color: 'from-orange-600 to-red-600',
    description: 'Optimize production cycles with real-time supply chain visibility, resource allocation tracking, and predictive maintenance scheduling.',
    keywords: ['Supply Chain', 'Production Tracking', 'ERP System', 'Inventory Control'],
    stats: [{ label: 'Production Uptime', value: '99%' }, { label: 'Material Waste', value: '-20%' }, { label: 'Delivery Accuracy', value: '95%' }, { label: 'Operating Cost', value: '-15%' }]
  },
  {
    id: 'healthcare', name: 'Healthcare', icon: 'medical_services', subLabel: 'Clinics & Care',
    color: 'from-blue-500 to-indigo-500',
    description: 'Enhance patient care through secure digital health records, intelligent appointment scheduling, and automated prescription management.',
    keywords: ['Patient Portal', 'EHR System', 'Appointments', 'Tele-Consult'],
    stats: [{ label: 'Patient Turnaround', value: '+30%' }, { label: 'No-show Rate', value: '-40%' }, { label: 'Staff Productivity', value: '+25%' }, { label: 'Billing Accuracy', value: '100%' }]
  },
  {
    id: 'retail', name: 'Retail', icon: 'store', subLabel: 'Shops & Sales',
    color: 'from-pink-500 to-rose-500',
    description: 'Transform your retail experience with integrated POS, real-time stock alerts, and personalized customer loyalty programs that drive repeat visits.',
    keywords: ['POS Integration', 'Loyalty Program', 'Stock Alerts', 'Customer CX'],
    stats: [{ label: 'Footfall Conv.', value: '+20%' }, { label: 'Inventory Turnover', value: '1.5x' }, { label: 'Customer Retention', value: '+40%' }, { label: 'Avg. Order Value', value: '+15%' }]
  },
  {
    id: 'finance', name: 'Finance', icon: 'account_balance', subLabel: 'Assets & Wealth',
    color: 'from-indigo-600 to-blue-700',
    description: 'Secure and streamline financial operations with automated transaction monitoring, risk assessment tools, and client wealth management dashboards.',
    keywords: ['Portfolio Mgt', 'Audit Trails', 'Risk Engine', 'Client Vault'],
    stats: [{ label: 'Process Automation', value: '85%' }, { label: 'Data Security', value: 'High' }, { label: 'Client Reporting', value: 'Instant' }, { label: 'Risk Mitigation', value: '+50%' }]
  },
  {
    id: 'hospitality', name: 'Hospitality', icon: 'hotel', subLabel: 'Hotels & Dining',
    color: 'from-amber-500 to-orange-600',
    description: 'Deliver world-class guest experiences with automated booking engines, personalized room preferences, and integrated feedback management.',
    keywords: ['PMS System', 'Booking Engine', 'Feedback Loop', 'Guest ERP'],
    stats: [{ label: 'Booking Conversion', value: '+30%' }, { label: 'Guest Re-visits', value: '+25%' }, { label: 'Service Rating', value: '4.8/5' }, { label: 'Rev. Per Room', value: '+20%' }]
  },
  {
    id: 'it-tech', name: 'IT & Tech', icon: 'terminal', subLabel: 'SaaS & Development',
    color: 'from-cyan-600 to-blue-600',
    description: 'Manage complex technology projects with agile sprint tracking, resource load balancing, and integrated service desk for client support.',
    keywords: ['Project Tracking', 'Sprints', 'SLA Mgt', 'DevOps Ops'],
    stats: [{ label: 'Project Delivery', value: '+40%' }, { label: 'Bug Resolution', value: '-50%' }, { label: 'Client Retention', value: '95%' }, { label: 'Team Velocity', value: '+30%' }]
  },
  {
    id: 'logistics', name: 'Logistics', icon: 'hub', subLabel: 'Ships & Fleet',
    color: 'from-slate-600 to-slate-900',
    description: 'Master your supply chain with real-time fleet tracking, automated route optimization, and transparent delivery performance metrics.',
    keywords: ['Fleet Tracking', 'Route Optimizer', 'SLA Tracking', 'Driver Portal'],
    stats: [{ label: 'Route Efficiency', value: '+25%' }, { label: 'Fuel Savings', value: '15%' }, { label: 'On-time Delivery', value: '98%' }, { label: 'Fleet Utilization', value: '+35%' }]
  }
];

/* ═══════════════════════════════════════
   MAIN CATEGORIES (B2B, B2C, D2C, Core)
═══════════════════════════════════════ */
const mainCategories = [
  { id: 'b2b', name: 'B2B', icon: 'business', subLabel: 'Business to Business', color: '#3b82f6' },
  { id: 'b2c', name: 'B2C', icon: 'shopping_bag', subLabel: 'Business to Consumer', color: '#10b981' },
  { id: 'd2c', name: 'D2C', icon: 'storefront', subLabel: 'Direct to Consumer', color: '#f59e0b' },
  { id: 'core', name: 'Core Services', icon: 'grid_view', subLabel: 'Essential Add-ons', color: '#8b5cf6' }
];

/* ═══════════════════════════════════════
   ADD-ONS
═══════════════════════════════════════ */
const erpAddons = [
  { name: 'Extra User', price: '₹1,000 / Year', icon: 'person_add' },
  { name: 'Mobile App', price: '₹20,000 / Year', icon: 'smartphone' },
  { name: 'WhatsApp API', price: '₹5,000 / Year', icon: 'chat' },
  { name: 'Custom Branding', price: '₹5,000', icon: 'brush' },
  { name: 'Account Manager', price: '₹15,000 / Year', icon: 'badge' },
  { name: 'Custom Module', price: '₹15,000+', icon: 'extension' },
];

const commonFeatures = [
  'ERP Dashboard', 'Lead Management', 'Hosting', 'Data Security',
  'Analytics', 'Support', 'Fast Setup', 'Free Updates'
];

/* ═══════════════════════════════════════
   CORE SERVICES DATA (Sub-categories)
═══════════════════════════════════════ */
const coreServicesData = [
  {
    id: 'graphic', name: 'Graphic Designing', icon: 'palette',
    plans: [
      { id: 'basic', title: 'GRAPHIC DESIGN - BASIC', tagline: 'Small Businesses & Simple Design', price: '₹300 - ₹1500', unit: '/project', features: ['Social Media Post', 'Logo Design (Simple)', 'Basic Banner', '1 Color Palatte', 'Single Revision'] },
      { id: 'standard', title: 'GRAPHIC DESIGN - STANDARD', tagline: 'Business Branding & Marketing', price: '₹800 - ₹4000', unit: '/project', features: ['Advanced Logo', 'Brochures & Flyers', 'Social Media Branding', 'Custom Illustrations', '3 Revisions'] },
      { id: 'premium', title: 'GRAPHIC DESIGN - PREMIUM', tagline: 'Full Branding & Professional Projects', price: '₹1200 - ₹10,000+', unit: '/project', features: ['Premium Branding', 'Package Design', 'Complete Brand Identity', 'UI/UX Elements', 'Unlimited Revisions'] }
    ]
  },
  {
    id: 'video-editing', name: 'Video Editing', icon: 'movie_edit',
    plans: [
      { id: 'basic', title: 'VIDEO EDIT - BASIC', tagline: 'Social Media Reels & Shorts', price: '₹1000 - ₹3000', unit: '/project', features: ['Reels / Shorts', 'Basic Cuts', 'Background Music', 'Text Overlays', 'Full HD'] },
      { id: 'standard', title: 'VIDEO EDIT - STANDARD', tagline: 'YouTube & Commercial Videos', price: '₹5000 - ₹12000', unit: '/project', features: ['Commercial Ads', 'Advanced Transitions', 'Color Grading', 'Subtitles', '2K/4K Export'] },
      { id: 'premium', title: 'VIDEO EDIT - PREMIUM', tagline: 'Professional Cinematic / VFX', price: '₹15000 - ₹50,000+', unit: '/project', features: ['Cinematic Edits', 'VFX / Animation', 'Custom Sound Design', 'Multi-cam Editing', 'Premium Assets'] }
    ]
  },
  {
    id: 'content-writing', name: 'Content Writing', icon: 'description',
    plans: [
      { id: 'basic', title: 'CONTENT - BASIC', tagline: 'Simple Ad Copy / Captions', price: '₹500 - ₹2000', unit: '/project', features: ['5 Ad Copies', 'SEO Basic', 'Social Media Caption', 'Plagiarism Check', 'Engaging Tone'] },
      { id: 'standard', title: 'CONTENT - STANDARD', tagline: 'Website Content / Articles', price: '₹3000 - ₹8000', unit: '/project', features: ['Website Pages', 'Detailed Articles', 'Keyword Research', 'Brand Guidelines', 'Unlimited Edits'] },
      { id: 'premium', title: 'CONTENT - PREMIUM', tagline: 'Whitepapers / Case Studies', price: '₹10000 - ₹30,000+', unit: '/project', features: ['Whitepapers', 'Case Studies', 'E-books', 'High-level Research', 'Expert Review'] }
    ]
  },
  {
    id: 'blog-writing', name: 'Blog Writing', icon: 'article',
    plans: [
      { id: 'basic', title: 'BLOG - BASIC', tagline: 'Standard SEO Blogs', price: '₹800 - ₹2000', unit: '/blog', features: ['800-1000 Words', 'SEO Optimization', '1 Image Included', 'Keyword Integration', 'Ready for Post'] },
      { id: 'standard', title: 'BLOG - STANDARD', tagline: 'High Performance Blogs', price: '₹3000 - ₹6000', unit: '/blog', features: ['1500-2000 Words', 'Advanced Research', 'Custom Graphics', 'External Linking', 'SEO Score Max'] },
      { id: 'premium', title: 'BLOG - PREMIUM', tagline: 'Expert & Niche Blogs', price: '₹8000 - ₹15,000+', unit: '/blog', features: ['Niche Specific', 'Full Authority Blog', 'Case Study Driven', 'Interactive Content', 'Ghost Writing'] }
    ]
  },
  {
    id: 'product-photography', name: 'Product Photography', icon: 'photo_camera',
    plans: [
      { id: 'basic', title: 'PHOTO - BASIC', tagline: 'E-commerce White BG', price: '₹1500 - ₹5000', unit: '/session', features: ['10 Images', 'White Background', 'Basic Retouch', 'Web Ready', 'Fast Delivery'] },
      { id: 'standard', title: 'PHOTO - STANDARD', tagline: 'Creative Lifestyle Shots', price: '₹8000 - ₹20000', unit: '/session', features: ['25 Images', 'Product Lifestyle', 'Outdoor Lighting', 'Advanced Retouch', 'High Res Files'] },
      { id: 'premium', title: 'PHOTO - PREMIUM', tagline: 'Full Ad Campaigns', price: '₹25000 - ₹80,000+', unit: '/session', features: ['Premium Shoot', 'Model Integration', 'Studio Setup', 'Full Campaign Rights', 'Premium Retouching'] }
    ]
  },
  {
    id: 'video-shooting', name: 'Video Shooting', icon: 'videocam',
    plans: [
      { id: 'basic', title: 'SHOOT - BASIC', tagline: 'Basic Social Media Shoot', price: '₹5000 - ₹15000', unit: '/shoot', features: ['Half Day Shoot', '1 Cameraman', 'Full HD Output', 'Basic Lighting', 'Phone/DSLR Ops'] },
      { id: 'standard', title: 'SHOOT - STANDARD', tagline: 'Corporate / Ads Shoot', price: '₹20000 - ₹50000', unit: '/shoot', features: ['Full Day Shoot', '2 Cameramen', '4K Output', 'Pro Lighting/Audio', 'Director Support'] },
      { id: 'premium', title: 'SHOOT - PREMIUM', tagline: 'High-end Production', price: '₹75000 - ₹2,00,000+', unit: '/shoot', features: ['Pro Production', 'Cinematic Crew', 'Highest Quality (RED)', 'Studio/Remote Ops', 'Full Crew Mgt'] }
    ]
  },
  {
    id: 'collaboration', name: 'Collaboration Marketing', icon: 'groups',
    plans: [
      { id: 'basic', title: 'COLLAB - BASIC', tagline: 'Micro Influencer Outreach', price: '₹3000 - ₹10000', unit: '/month', features: ['5 Influencers', 'Basic Campaign', 'Lead Tracking', 'Reach Analysis', '1 Post/Inbound'] },
      { id: 'standard', title: 'COLLAB - STANDARD', tagline: 'Mid-Tier Campaigns', price: '₹15000 - ₹50000', unit: '/month', features: ['15 influencers', 'Cross-Platform', 'Engagement Ops', 'Brand Mention Tracking', 'Monthly Strategy'] },
      { id: 'premium', title: 'COLLAB - PREMIUM', tagline: 'Celebrity & Macro Collab', price: '₹1,00,000+', unit: '/month', features: ['Macro Influencers', 'Celebrity Collab', 'Viral Strategies', 'PR Integration', 'ROI Guarantee'] }
    ]
  },
  {
    id: 'hosting', name: 'Hosting Services', icon: 'dns',
    plans: [
      { id: 'basic', title: 'HOSTING - BASIC', tagline: 'Shared / Shared Pro', price: '₹300 - ₹1200', unit: '/month', features: ['Single Domain', 'SSL Certificate', 'Cpanel Access', 'Standard Speed', 'Weekly Backup'] },
      { id: 'standard', title: 'HOSTING - STANDARD', tagline: 'VPS / High Performance', price: '₹2000 - ₹8000', unit: '/month', features: ['Unlimited Domain', 'Dedicated IP', 'Turbo Speed', 'Daily Backup', 'DDoS Protection'] },
      { id: 'premium', title: 'HOSTING - PREMIUM', tagline: 'Dedicated / Managed', price: '₹15000 - ₹50,000+', unit: '/month', features: ['Dedicated Server', 'Full Managed', 'Highest Security', 'Custom Config', 'Global CDN'] }
    ]
  },
  {
    id: 'seo', name: 'SEO', icon: 'search',
    plans: [
      { id: 'basic', title: 'SEO - BASIC', tagline: 'Local SEO / Quick Fixes', price: '₹5000 - ₹12000', unit: '/month', features: ['Google Maps Ops', 'Basic Keywords', 'On-page SEO', 'Search Console Mgt', 'Monthly Report'] },
      { id: 'standard', title: 'SEO - STANDARD', tagline: 'Full SEO Optimization', price: '₹15000 - ₹35000', unit: '/month', features: ['National Rankings', 'Backlink Strategy', 'Content Optim.', 'Speed Optimization', 'Competitor Analysis'] },
      { id: 'premium', title: 'SEO - PREMIUM', tagline: 'Global Power Ranking', price: '₹50000+', unit: '/month', features: ['Global Authority', 'Niche Dominance', 'Technical SEO Extra', 'PR Linking', 'ROI Driven Ops'] }
    ]
  },
  {
    id: 'extra-support', name: 'Any Extra Support Services', icon: 'support_agent',
    plans: [
      { id: 'basic', title: 'SUPPORT - BASIC', tagline: 'General Maintenance', price: '₹2000 - ₹5000', unit: '/month', features: ['Basic Updates', 'Email Support', 'Bug Fixes', 'Performance Check', 'Weekly Report'] },
      { id: 'standard', title: 'SUPPORT - STANDARD', tagline: 'Dedicated Assistance', price: '₹10000 - ₹25000', unit: '/month', features: ['Dedicated Manager', 'Priority Fixes', 'Feature Additions', 'Strategic Advice', 'Full Availability'] },
      { id: 'premium', title: 'SUPPORT - PREMIUM', tagline: 'Full Tech Partnership', price: '₹40000+', unit: '/month', features: ['Partner Grade Support', 'Unlimited Access', 'Tech Consultation', 'Roadmap Planning', 'White-glove Ops'] }
    ]
  }
];

/* ═══════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════ */
const PackagesPage = () => {
  const [selectedSector, setSelectedSector] = useState(null);
  const [activeCategory, setActiveCategory] = useState(null);
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [activeCoreService, setActiveCoreService] = useState(coreServicesData[0]);

  const sectorInfoRef = useRef(null);
  const categorySectionRef = useRef(null);
  const pricingRef = useRef(null);

  const handleSectorClick = (sector) => {
    setSelectedSector(selectedSector?.id === sector.id ? null : sector);
    if (selectedSector?.id !== sector.id) {
      setTimeout(() => sectorInfoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    }
  };

  const handleCategoryClick = (cat) => {
    setActiveCategory(activeCategory?.id === cat.id ? null : cat);
    if (activeCategory?.id !== cat.id) {
      setTimeout(() => pricingRef.current?.scrollIntoView({ behavior: 'smooth' }), 100);
    }
  };

  return (
    <div className="min-h-screen premium-bg pt-32 pb-16 px-4 text-slate-900 selection:bg-blue-500/30">
      {/* Background Decor */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-500/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-500/5 blur-[120px] rounded-full" />
        <div className="absolute top-[40%] right-[20%] w-[30%] h-[30%] bg-emerald-500/3 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">

        {/* ═══════════════════════════════════════
           PAGE HEADER
        ═══════════════════════════════════════ */}
        <div className="text-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-bold mb-10 shadow-sm"

          >
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            Packages & Pricing
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black mb-8 tracking-tighter text-slate-900 py-10 leading-[1.3] overflow-visible"

          >
            Industries We <span className="text-blue-600 pb-4 inline-block">Empower</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 text-lg max-w-2xl mx-auto font-medium"

          >
            Tailored digital ecosystems designed for your specific industry needs. Explore sectors & choose your package below.
          </motion.p>
        </div>

        {/* ═══════════════════════════════════════
           SECTION 1: INDUSTRY SECTORS (Informational)
        ═══════════════════════════════════════ */}
        <section className="mb-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 md:gap-5">
            {sectors.map((sector, idx) => (
              <motion.button
                key={sector.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.04 }}
                whileHover={{ y: -5 }}
                onClick={() => handleSectorClick(sector)}
                className={`p-5 md:p-6 rounded-2xl border transition-all duration-500 relative group flex flex-col items-center text-center overflow-hidden ${selectedSector?.id === sector.id
                  ? 'bg-white shadow-xl ring-1 ring-blue-500/20'
                  : 'bg-white border-slate-200 hover:shadow-xl'
                  } ${sector.color.includes('blue-600') ? (selectedSector?.id === sector.id ? 'border-blue-500' : 'hover:border-blue-500/50') :
                    sector.color.includes('purple-600') ? (selectedSector?.id === sector.id ? 'border-purple-500' : 'hover:border-purple-500/50') :
                      sector.color.includes('emerald-600') ? (selectedSector?.id === sector.id ? 'border-emerald-500' : 'hover:border-emerald-500/50') :
                        sector.color.includes('orange-600') ? (selectedSector?.id === sector.id ? 'border-orange-500' : 'hover:border-orange-500/50') :
                          sector.color.includes('blue-500') ? (selectedSector?.id === sector.id ? 'border-blue-500' : 'hover:border-blue-500/50') :
                            sector.color.includes('pink-500') ? (selectedSector?.id === sector.id ? 'border-pink-500' : 'hover:border-pink-500/50') :
                              sector.color.includes('indigo-600') ? (selectedSector?.id === sector.id ? 'border-indigo-500' : 'hover:border-indigo-500/50') :
                                sector.color.includes('amber-500') ? (selectedSector?.id === sector.id ? 'border-amber-500' : 'hover:border-amber-500/50') :
                                  sector.color.includes('cyan-600') ? (selectedSector?.id === sector.id ? 'border-cyan-500' : 'hover:border-cyan-500/50') :
                                    sector.color.includes('slate-600') ? (selectedSector?.id === sector.id ? 'border-slate-500' : 'hover:border-slate-500/50') :
                                      (selectedSector?.id === sector.id ? 'border-blue-500' : 'hover:border-blue-500/50')
                  }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${sector.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-all duration-500 relative z-10 ${selectedSector?.id === sector.id ? `bg-gradient-to-br ${sector.color} text-white shadow-lg shadow-blue-500/20` : `bg-slate-50 text-slate-400 group-hover:bg-gradient-to-br ${sector.color} group-hover:text-white`
                  }`}>
                  <span className="material-symbols-outlined text-2xl">{sector.icon}</span>
                </div>
                <h3 className={`text-sm font-black mb-1 relative z-10 transition-colors ${selectedSector?.id === sector.id ? 'text-slate-900' : 'text-slate-600 group-hover:text-slate-900'}`}>{sector.name}</h3>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest relative z-10">{sector.subLabel}</p>
              </motion.button>
            ))}
          </div>
        </section>

        {/* SECTOR INFO PANEL (appears on click) */}
        <AnimatePresence>
          {selectedSector && (
            <motion.section
              ref={sectorInfoRef}
              initial={{ opacity: 0, y: 40, height: 0 }}
              animate={{ opacity: 1, y: 0, height: 'auto' }}
              exit={{ opacity: 0, y: -20, height: 0 }}
              transition={{ duration: 0.4 }}
              className="mb-20 overflow-hidden"
            >
              <div className="max-w-5xl mx-auto">
                <div className="bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-2xl">
                  <div className="grid md:grid-cols-2 gap-0">
                    {/* Left: Info */}
                    <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-100">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600">
                          <span className="material-symbols-outlined text-xl">{selectedSector.icon}</span>
                        </div>
                        <h2 className="text-2xl font-black tracking-tight text-slate-900">{selectedSector.name} Solutions</h2>
                      </div>
                      <p className="text-slate-600 text-[15px] leading-relaxed mb-6 font-medium">
                        {selectedSector.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedSector.keywords.map(kw => (
                          <span key={kw} className="px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[10px] uppercase font-bold text-blue-600 tracking-wider">
                            #{kw}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => setSelectedSector(null)}
                        className="text-xs text-slate-500 hover:text-white transition-colors font-bold uppercase tracking-widest flex items-center gap-2"
                      >
                        <span className="material-symbols-outlined text-sm">close</span>
                        Close
                      </button>
                    </div>

                    {/* Right: Stats */}
                    <div className="p-8 md:p-10 bg-slate-50/50">
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-blue-600 mb-6 border-l-2 border-blue-500 pl-3">
                        Why This Works For You
                      </h3>
                      <div className="space-y-4">
                        {selectedSector.stats.map((stat, i) => (
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 + 0.2 }}
                            className="bg-white p-5 rounded-2xl border border-slate-100 flex items-center justify-between group hover:border-blue-300 transition-all shadow-sm"
                          >
                            <span className="text-slate-500 font-semibold text-xs uppercase tracking-wider">{stat.label}</span>
                            <span className="text-2xl font-extrabold text-slate-900 group-hover:text-blue-600 transition-all">
                              {stat.value}
                            </span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.section>
          )}
        </AnimatePresence>

        {/* ═══════════════════════════════════════
           DIVIDER
        ═══════════════════════════════════════ */}
        <div className="flex items-center gap-6 mb-10 max-w-3xl mx-auto">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-white/10" />
          <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
            Choose Your Package
          </span>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-white/10" />
        </div>

        {/* ═══════════════════════════════════════
           SECTION 2: MAIN CATEGORIES (B2B / B2C / D2C / Core)
        ═══════════════════════════════════════ */}
        <section ref={categorySectionRef} className="mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {mainCategories.map((cat, idx) => (
              <motion.button
                key={cat.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.08 + 0.1 }}
                onClick={() => handleCategoryClick(cat)}
                className={`relative p-6 md:p-8 rounded-3xl border transition-all duration-500 group flex flex-col items-center text-center overflow-hidden ${activeCategory?.id === cat.id
                  ? 'border-opacity-60 shadow-[0_0_50px_rgba(59,130,246,0.15)] ring-1 scale-[1.02]'
                  : 'bg-white/[0.03] border-white/10  hover:bg-white/[0.06]'
                  }`}
                style={{
                  borderColor: activeCategory?.id === cat.id ? cat.color : undefined,
                  boxShadow: activeCategory?.id === cat.id ? `0 0 50px ${cat.color}20` : undefined,
                  ringColor: activeCategory?.id === cat.id ? `${cat.color}40` : undefined,
                }}
              >
                {/* Background glow */}
                {activeCategory?.id === cat.id && (
                  <div className="absolute inset-0 opacity-10 rounded-3xl" style={{ background: `radial-gradient(circle at center, ${cat.color}, transparent 70%)` }} />
                )}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-4 transition-all duration-500 relative z-10 ${activeCategory?.id === cat.id
                  ? 'text-white shadow-xl shadow-blue-500/20'
                  : 'bg-slate-50 text-slate-400 group-hover:text-white'
                  }`} style={{ backgroundColor: activeCategory?.id === cat.id ? cat.color : undefined }}>
                  <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`} style={{ backgroundColor: cat.color }}></div>
                  <span className="material-symbols-outlined text-2xl relative z-10">{cat.icon}</span>
                </div>
                <h3 className="text-xl font-black mb-1 relative z-10">{cat.name}</h3>
                <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-widest relative z-10">{cat.subLabel}</p>
                {activeCategory?.id === cat.id && (
                  <motion.div
                    layoutId="categoryIndicator"
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-t-full"
                    style={{ backgroundColor: cat.color }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </section>

        {/* ═══════════════════════════════════════
           SECTION 3: PRICING (appears on category click)
        ═══════════════════════════════════════ */}
        <AnimatePresence mode="wait">
          {activeCategory && (
            <motion.section
              key={activeCategory.id}
              ref={pricingRef}
              initial={{ opacity: 0, y: 60 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="mt-8"
            >
              {/* Category Header */}
              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-black mb-3 pb-8 text-slate-800">
                  {activeCategory.name} <span className="text-blue-600 pb-4">Packages</span>
                </h2>
                <p className="text-slate-400 text-sm max-w-lg mx-auto">
                  Flexible pricing tailored for {activeCategory.subLabel.toLowerCase()} models. Scale as you grow.
                </p>
              </div>

              {/* Billing Toggle */}
              <div className="flex flex-col items-center mb-8 px-4">
                <div className="bg-white/5 p-1.5 rounded-2xl border border-white/10 flex gap-2 backdrop-blur-xl relative">
                  <button
                    onClick={() => setBillingCycle('monthly')}
                    className={`px-8 py-3 rounded-xl font-bold text-sm transition-all relative z-10 ${billingCycle === 'monthly' ? 'text-white' : 'text-slate-400 hover:text-white'}`}

                  >
                    Monthly
                  </button>
                  <button
                    onClick={() => setBillingCycle('yearly')}
                    className={`px-8 py-3 rounded-xl font-bold text-sm transition-all relative z-10 ${billingCycle === 'yearly' ? 'text-white' : 'text-slate-400 hover:text-white'}`}

                  >
                    Yearly (Save 20%)
                  </button>
                  <motion.div
                    animate={{ x: billingCycle === 'monthly' ? 0 : '100%' }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    className="absolute top-1.5 left-1.5 bottom-1.5 w-[calc(50%-6px)] bg-blue-600 rounded-xl shadow-lg z-0"
                  />
                </div>
                {billingCycle === 'yearly' && activeCategory?.id !== 'core' && (
                  <motion.p initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
                    className="mt-4 text-[10px] font-bold uppercase tracking-widest text-emerald-400 flex items-center gap-2"

                  >
                    <span className="material-symbols-outlined text-sm">auto_awesome</span>
                    Annual Billing: 20% Discount Applied
                  </motion.p>
                )}
              </div>

              {/* Core Services Sub-Category Selector (Horizontal Icons) */}
              {activeCategory?.id === 'core' && (
                <div className="max-w-7xl mx-auto mb-16 overflow-x-auto pb-4 scrollbar-hide px-4">
                  <div className="flex gap-4 min-w-max justify-center">
                    {coreServicesData.map((service) => (
                      <button
                        key={service.id}
                        onClick={() => setActiveCoreService(service)}
                        className={`px-8 py-4 rounded-3xl border transition-all duration-300 flex items-center gap-3 group whitespace-nowrap ${activeCoreService.id === service.id
                          ? 'bg-blue-600 border-blue-500 shadow-xl shadow-blue-500/20 text-white'
                          : 'bg-white/[0.03] border-white/10 text-slate-400  hover:bg-white/5'
                          }`}
                      >
                        <span className={`material-symbols-outlined text-xl transition-transform duration-300 ${activeCoreService.id === service.id ? 'scale-110 rotate-12' : 'group-hover:scale-110'}`}>
                          {service.icon}
                        </span>
                        <span className="text-sm font-bold tracking-tight">
                          {service.name}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>
              )}


              {/* Pricing Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                {activeCategory?.id === 'core' ? (
                  activeCoreService.plans.map((p) => (
                    <PricingTier
                      key={p.id}
                      title={p.title}
                      color="#3b82f6"
                      gradient="from-blue-600 to-cyan-500"
                      tagline={p.tagline}
                      isPopular={p.id === 'standard'}
                      dayPrice={p.price}
                      monthPrice="custom"
                      unit={p.unit}
                      features={p.features}
                    />
                  ))
                ) : (
                  <>
                    <PricingTier
                      title="BASIC PLAN"
                      color="#10b981"
                      gradient="from-emerald-600 to-teal-500"
                      tagline="Less than a cup of coffee ☕ per day"
                      dayPrice={billingCycle === 'monthly' ? (activeCategory?.id === 'b2b' ? 633 : activeCategory?.id === 'd2c' ? 233 : 366) : (activeCategory?.id === 'b2b' ? 506 : activeCategory?.id === 'd2c' ? 186 : 299)}
                      monthPrice={billingCycle === 'monthly' ? (activeCategory?.id === 'b2b' ? 19000 : activeCategory?.id === 'd2c' ? 7000 : 11000) : (activeCategory?.id === 'b2b' ? 15200 : activeCategory?.id === 'd2c' ? 5600 : 8800)}
                      features={activeCategory?.id === 'd2c' ? [
                        'Digital Marketing Strategy', 'Performance Marketing', 'Social Media Setup',
                        'Basic Physical Marketing', 'Direct Marketing', 'Monthly Analytics', 'Email Support'
                      ] : [
                        'ERP Access', 'Basic Website', 'Lead Management',
                        'Basic Chatbot & Calling Agent', 'Social Media Marketing',
                        'Performance Marketing', 'Email Support'
                      ]}
                    />
                    <PricingTier
                      title="STANDARD PLAN"
                      color="#3b82f6"
                      gradient="from-blue-600 to-violet-600"
                      tagline="Grow your business daily with AI 🚀"
                      isPopular
                      dayPrice={billingCycle === 'monthly' ? (activeCategory?.id === 'b2b' ? 1633 : activeCategory?.id === 'b2c' ? 966 : activeCategory?.id === 'd2c' ? 500 : 700) : (activeCategory?.id === 'b2b' ? 1306 : activeCategory?.id === 'b2c' ? 773 : activeCategory?.id === 'd2c' ? 400 : 573)}
                      monthPrice={billingCycle === 'monthly' ? (activeCategory?.id === 'b2b' ? 49000 : activeCategory?.id === 'b2c' ? 29000 : activeCategory?.id === 'd2c' ? 15000 : 21000) : (activeCategory?.id === 'b2b' ? 39200 : activeCategory?.id === 'b2c' ? 23200 : activeCategory?.id === 'd2c' ? 12000 : 16800)}
                      features={activeCategory?.id === 'd2c' ? [
                        'Everything in Basic +', 'Advanced Meta & Google Ads', 'Content Strategy',
                        'Standard Physical Marketing', 'Hoardings & Banners',
                        'Social Media Management', 'Campaign Scaling',
                        'Monthly ROI Reports', 'Priority Support'
                      ] : [
                        'Everything in Basic +', 'Advanced ERP', 'Custom Website',
                        'Standard Chatbot & Calling Agent', 'AI Lead Generation',
                        'Social Media Marketing', 'Ads Management',
                        'Performance Marketing', 'Monthly Reports', 'Priority Support'
                      ]}
                    />
                    <PricingTier
                      title="PREMIUM PLAN"
                      color="#d946ef"
                      gradient="from-purple-600 to-pink-600"
                      tagline="Full automation, zero headache 🎯"
                      dayPrice={billingCycle === 'monthly' ? (activeCategory?.id === 'b2b' ? 2500 : activeCategory?.id === 'd2c' ? 700 : 1166) : (activeCategory?.id === 'b2b' ? 2000 : activeCategory?.id === 'd2c' ? 560 : 933)}
                      monthPrice={billingCycle === 'monthly' ? (activeCategory?.id === 'b2b' ? 75000 : activeCategory?.id === 'd2c' ? 21000 : 35000) : (activeCategory?.id === 'b2b' ? 60000 : activeCategory?.id === 'd2c' ? 16800 : 28000)}
                      features={activeCategory?.id === 'd2c' ? [
                        'Everything in Standard +', 'Full Marketing Automation', 'High-Level Funnel Strategy',
                        'Premium Physical Marketing', 'Event & Merchandising',
                        'Influencer Coordination', 'Advanced Scaling Ops',
                        'Dedicated Manager', 'Weekly Strategy Calls'
                      ] : [
                        'Everything in Standard +', 'Advanced ERP+Automation', 'Website+App',
                        'Premium Chatbot & Calling Agent', 'Full Sales Automation',
                        'Social Media Marketing', 'High-Level Ads Strategy',
                        'Performance Marketing', 'Dedicated Manager', 'Weekly Calls'
                      ]}
                    />
                  </>
                )}
              </div>

              {/* Common Features */}
              <div className="mb-12 text-center">
                <p className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.3em] mb-6">Included In Every Plan</p>
                <div className="flex flex-wrap justify-center gap-3">
                  {commonFeatures.map(item => (
                    <span key={item} className="px-5 py-2 rounded-full bg-white/[0.04] border border-white/10 text-xs font-semibold text-slate-300">
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              {/* Add-ons */}
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white border border-slate-200 rounded-3xl p-8 md:p-10 shadow-xl"
              >
                <div className="flex flex-col md:flex-row items-center justify-between gap-5 mb-10">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                      <span className="material-symbols-outlined text-xl">add_circle</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-black text-slate-900">Extra Growth Catalysts</h3>
                      <p className="text-slate-500 text-xs font-medium">Add specific modules to your core plan.</p>
                    </div>
                  </div>
                  <div className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-[9px] font-bold uppercase text-slate-500 tracking-widest">
                    Available For All Plans
                  </div>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                  {erpAddons.map((addon, i) => (
                    <motion.div
                      key={addon.name}
                      whileHover={{ y: -5 }}
                      className="p-6 rounded-[2.5rem] bg-white border border-slate-100 hover:border-blue-500/50 transition-all duration-500 text-center group cursor-pointer shadow-sm hover:shadow-2xl relative overflow-hidden"
                    >
                      <div className={`absolute inset-0 bg-gradient-to-br from-blue-600 to-cyan-500 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700`}></div>
                      <div className="relative z-10">
                        <div className="w-12 h-12 bg-slate-50 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-inner">
                          <span className="material-symbols-outlined text-2xl">{addon.icon}</span>
                        </div>
                        <p className="text-slate-900 text-xs font-black mb-1.5 leading-tight">{addon.name}</p>
                        <p className="text-blue-600 text-[10px] font-black uppercase tracking-wider">{addon.price}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.section>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
};

/* ═══════════════════════════════════════
   PRICING TIER COMPONENT
═══════════════════════════════════════ */
const PricingTier = ({ title, tagline, dayPrice, monthPrice, features, isPopular, color, gradient, unit = '/day' }) => (
  <motion.div
    whileHover={{ y: -15 }}
    className={`relative p-10 md:p-12 rounded-[3rem] border transition-all duration-700 flex flex-col h-full bg-white overflow-hidden group ${isPopular
      ? `shadow-2xl ring-1 ring-blue-500/20 scale-105 z-10 md:mt-[-20px] md:mb-[-20px] ${gradient?.includes('blue') ? 'border-blue-500' : gradient?.includes('purple') ? 'border-purple-500' : gradient?.includes('emerald') ? 'border-emerald-500' : gradient?.includes('pink') ? 'border-pink-500' : 'border-blue-500'}`
      : `border-slate-100 hover:shadow-2xl ${gradient?.includes('blue') ? 'hover:border-blue-500/50' : gradient?.includes('purple') ? 'hover:border-purple-500/50' : gradient?.includes('emerald') ? 'hover:border-emerald-500/50' : gradient?.includes('pink') ? 'hover:border-pink-500/50' : 'hover:border-blue-500/50'}`
      }`}
  >
    <div className={`absolute inset-0 bg-gradient-to-br ${gradient ? gradient : `from-blue-600 to-cyan-500`} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none`}></div>

    {isPopular && (
      <div className="absolute top-0 right-0">
        <div className="bg-blue-600 text-white px-8 py-2 rounded-bl-3xl text-[10px] font-black tracking-widest uppercase shadow-xl">
          Most Popular
        </div>
      </div>
    )}

    <div className="mb-10 text-center">
      <h3 className="text-sm font-black tracking-[0.2em] text-slate-400 mb-8 uppercase">{title}</h3>
      <div className="flex items-center justify-center gap-1.5 mb-2 py-4 overflow-visible">
        {typeof dayPrice === 'number' && <span className="text-2xl font-black text-slate-900 align-top mt-1">₹</span>}
        <span className={`text-5xl font-black tracking-tighter pb-4 pt-2 inline-block leading-tight ${gradient ? `text-transparent bg-clip-text bg-gradient-to-r ${gradient}` : ''}`}>
          {typeof dayPrice === 'number' ? dayPrice.toLocaleString() : dayPrice}
        </span>
        <span className="text-sm font-bold text-slate-400 ml-1 mt-6">{unit}</span>
      </div>
      {monthPrice !== 'custom' && (
        <p className="text-sm font-bold text-slate-500 mb-8">₹{monthPrice.toLocaleString()}/month</p>
      )}
      <div className="px-5 py-3 bg-slate-50 rounded-2xl border border-slate-100 inline-block mt-4">
        <p className="text-xs font-bold text-slate-600 italic">"{tagline}"</p>
      </div>
    </div>

    <div className="h-px bg-slate-100 w-full mb-10"></div>

    <div className="flex-1 mb-10">
      <ul className="space-y-4">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-start gap-4 text-sm font-medium group/feat">
            <span className={`material-symbols-outlined text-lg flex-shrink-0 mt-0.5 transition-transform group-hover/feat:scale-110 bg-clip-text text-transparent bg-gradient-to-r ${gradient ? gradient : `from-blue-600 to-cyan-500`}`}>
              {feature.includes('Everything in') ? 'stars' : 'check_circle'}
            </span>
            <span className={feature.includes('Everything in') ? 'font-black text-slate-900' : 'text-slate-600'}>{feature}</span>
          </li>
        ))}
      </ul>
    </div>

    <button
      className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.2em] transition-all duration-500 shadow-xl hover:shadow-2xl hover:scale-[1.05] active:scale-95 text-white bg-gradient-to-r ${gradient ? gradient : `from-blue-600 to-indigo-600`
        } ${isPopular ? 'shadow-blue-500/20' : 'hover:opacity-90'}`}

    >
      Get Started
    </button>
  </motion.div>
);

export default PackagesPage;
