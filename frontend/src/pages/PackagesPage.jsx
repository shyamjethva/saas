import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

/* ═══════════════════════════════════════
   SECTOR DATA (Informational Only)
═══════════════════════════════════════ */
const sectors = [
  {
    id: 'service-business', name: 'Service Business', icon: 'business', subLabel: 'Professional Services',
    color: 'from-slate-600 to-slate-400',
    bgImage: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?w=800&q=80',
    description: 'Modernize your professional service business with automated scheduling, client management, and digital workflow tools.',
    keywords: ['CRM', 'Scheduling', 'Invoicing', 'Client Portal'],
    stats: [{ label: 'Efficiency', value: '+40%' }, { label: 'Client Satisfaction', value: '95%' }, { label: 'Admin Time', value: '-30%' }, { label: 'Revenue', value: '+20%' }]
  },
  {
    id: 'manufacturing', name: 'Manufacturing', icon: 'precision_manufacturing', subLabel: 'Factory & Production',
    color: 'from-orange-600 to-red-600',
    bgImage: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    description: 'Optimize production cycles with real-time supply chain visibility and intelligent resource allocation.',
    keywords: ['Production Tracking', 'Supply Chain', 'Inventory', 'Quality Control'],
    stats: [{ label: 'Uptime', value: '99%' }, { label: 'Waste', value: '-25%' }, { label: 'Accuracy', value: '98%' }, { label: 'Output', value: '+30%' }]
  },
  {
    id: 'retail-shopping', name: 'Retail & Shopping', icon: 'shopping_bag', subLabel: 'Consumer Goods',
    color: 'from-pink-500 to-rose-500',
    bgImage: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80',
    description: 'Transform your retail store with integrated POS, stock alerts, and personalized customer loyalty programs.',
    keywords: ['POS', 'Stock Management', 'Loyalty', 'E-commerce'],
    stats: [{ label: 'Sales', value: '+25%' }, { label: 'Retention', value: '+40%' }, { label: 'Inventory Turn', value: '2x' }, { label: 'AOV', value: '+15%' }]
  },
  {
    id: 'food-beverages', name: 'Food & Beverages', icon: 'restaurant', subLabel: 'Cafes & Dining',
    color: 'from-amber-500 to-orange-600',
    bgImage: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&q=80',
    description: 'Streamline restaurant operations with digital menus, online ordering, and table management systems.',
    keywords: ['Online Ordering', 'Reservation', 'Kitchen Ops', 'Feedback'],
    stats: [{ label: 'Order Speed', value: '+35%' }, { label: 'Table Turn', value: '+20%' }, { label: 'Rating', value: '4.7/5' }, { label: 'Waste', value: '-15%' }]
  },
  {
    id: 'health-wellness', name: 'Health & Wellness', icon: 'medical_services', subLabel: 'Clinics & Gyms',
    color: 'from-slate-500 to-slate-700',
    bgImage: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80',
    description: 'Enhance patient care and fitness management with secure records and intelligent scheduling.',
    keywords: ['EHR', 'Booking', 'Patient Care', 'Membership'],
    stats: [{ label: 'Patient Flow', value: '+30%' }, { label: 'No-shows', value: '-45%' }, { label: 'Efficiency', value: '+25%' }, { label: 'Compliance', value: '100%' }]
  },
  {
    id: 'education', name: 'Education', icon: 'school', subLabel: 'Learning & Growth',
    color: 'from-purple-600 to-pink-600',
    bgImage: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80',
    description: 'Manage admissions, student progress, and parent communication in a unified digital campus.',
    keywords: ['LMS', 'Admissions', 'Student ERP', 'Parent App'],
    stats: [{ label: 'Admissions', value: '+40%' }, { label: 'Fees Recovery', value: '97%' }, { label: 'Admin Ease', value: 'High' }, { label: 'Engagement', value: '+50%' }]
  },
  {
    id: 'automobile', name: 'Automobile', icon: 'directions_car', subLabel: 'Showrooms & Repair',
    color: 'from-slate-600 to-slate-900',
    bgImage: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=800&q=80',
    description: 'Revolutionize auto sales and service with digital inventory, service booking, and customer history.',
    keywords: ['Inventory', 'Service Booking', 'Leads', 'Warranties'],
    stats: [{ label: 'Lead Conv.', value: '+30%' }, { label: 'Service Uptime', value: '95%' }, { label: 'AOV', value: '+20%' }, { label: 'Loyalty', value: '+35%' }]
  },
  {
    id: 'home-lifestyle', name: 'Home & Lifestyle', icon: 'cottage', subLabel: 'Interior & Decor',
    color: 'from-teal-600 to-emerald-600',
    bgImage: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=800&q=80',
    description: 'Grow your lifestyle brand with visual portfolio management and direct-to-consumer sales tools.',
    keywords: ['Portfolio', 'E-commerce', 'Design CRM', 'Social Selling'],
    stats: [{ label: 'Leads', value: '+50%' }, { label: 'Engagement', value: '+40%' }, { label: 'Project Dev', value: 'Fast' }, { label: 'Retention', value: '+25%' }]
  },
  {
    id: 'entertainment', name: 'Entertainment', icon: 'theater_comedy', subLabel: 'Events & Media',
    color: 'from-red-600 to-pink-600',
    bgImage: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?w=800&q=80',
    description: 'Master event management and media distribution with intelligent ticketing and audience analytics.',
    keywords: ['Ticketing', 'Booking', 'Analytics', 'Media Hub'],
    stats: [{ label: 'Attendance', value: '+45%' }, { label: 'Ticket Sales', value: '+30%' }, { label: 'Reach', value: '2x' }, { label: 'Engagement', value: '+60%' }]
  },
  {
    id: 'travel', name: 'Travel', icon: 'flight_takeoff', subLabel: 'Tours & Packages',
    color: 'from-slate-400 to-slate-600',
    bgImage: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=800&q=80',
    description: 'Simplify travel planning with automated itineraries, booking engines, and travel agent portals.',
    keywords: ['Itineraries', 'Bookings', 'Agent Portal', 'Reviews'],
    stats: [{ label: 'Bookings', value: '+35%' }, { label: 'Service Time', value: '-50%' }, { label: 'Rating', value: '4.8/5' }, { label: 'Growth', value: '+30%' }]
  },
  {
    id: 'repair-services', name: 'Repair & Services', icon: 'handyman', subLabel: 'Maintenance & Fixing',
    color: 'from-slate-600 to-slate-500',
    bgImage: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=800&q=80',
    description: 'Organize field services with real-time technician tracking, job scheduling, and mobile payments.',
    keywords: ['Field Service', 'Tracking', 'Maintenance', 'Billing'],
    stats: [{ label: 'Job Completion', value: '+40%' }, { label: 'Response Time', value: '-60%' }, { label: 'Collection', value: '99%' }, { label: 'Efficiency', value: '+30%' }]
  },
  {
    id: 'additional-retail-events', name: 'Additional Retail & Events', icon: 'event', subLabel: 'Special Occasions',
    color: 'from-indigo-600 to-purple-600',
    bgImage: 'https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=800&q=80',
    description: 'Customized solutions for specialized retail niches and large-scale event coordination.',
    keywords: ['Specialized CRM', 'Mass Events', 'Logistics', 'Suppliers'],
    stats: [{ label: 'Coordination', value: 'Seamless' }, { label: 'User Satisfaction', value: '98%' }, { label: 'Scale', value: 'Unlimited' }, { label: 'Impact', value: '+40%' }]
  }
];

/* ═══════════════════════════════════════
   SMART GROWTH MODEL DATA
═══════════════════════════════════════ */
const smallBusinessPlans = [
  {
    id: 'sb-starter',
    title: 'STARTER PLAN',
    tagline: 'Starting stage business',
    price: 9999,
    gradient: 'from-slate-400 to-slate-500',
    features: [
      { category: 'DEVELOPMENT', items: ['Website', 'CRM / ERP'] },
      { category: 'DIGITAL MARKETING', items: ['Social Media Post', 'Influencer Reel', 'Promotion Reel', 'Content + Blog Writing', 'SEO'] },
      { category: 'PERFORMANCE MARKETING', items: ['Google Ads', 'Discount Coupon Selling', 'Collaboration Outreach'] },
      { category: 'PHYSICAL MARKETING', items: ['Lead Generation Agent', 'Calling Agent', 'Chat Agent'] },
      { category: 'END TO END SALES', items: ['Banners / Standee / Brochure', 'Catalog', 'NFC / Visiting Card'] }
    ],
    result: 'Online presence + brand visibility'
  },
  {
    id: 'sb-growth',
    title: 'GROWTH PLAN',
    tagline: 'Growing local business',
    price: 19999,
    gradient: 'from-slate-600 to-slate-700',
    hasYearlyDiscount: true,
    yearlyDiscountPercent: 30,
    features: [
      { category: 'DEVELOPMENT', items: ['Website', 'CRM / ERP'] },
      { category: 'DIGITAL MARKETING', items: ['Social Media Post', 'Influencer Reel', 'Promotion Reel', 'Content + Blog Writing', 'SEO'] },
      { category: 'PERFORMANCE MARKETING', items: ['Google Ads', 'Discount Coupon Selling', 'Collaboration Outreach'] },
      { category: 'PHYSICAL MARKETING', items: ['Lead Generation Agent', 'Calling Agent', 'Chat Agent'] },
      { category: 'END TO END SALES', items: ['Banners / Standee / Brochure', 'Catalog', 'NFC / Visiting Card'] }
    ],
    result: 'Consistent leads + structured system'
  },
  {
    id: 'sb-pro',
    title: 'PRO PLAN',
    tagline: 'Advanced growth-focused',
    price: 24999,
    gradient: 'from-slate-900 to-slate-800',
    isPopular: true,
    hasYearlyDiscount: true,
    yearlyDiscountPercent: 50,
    features: [
      { category: 'DEVELOPMENT', items: ['Website', 'CRM / ERP'] },
      { category: 'DIGITAL MARKETING', items: ['Social Media Post', 'Influencer Reel', 'Promotion Reel', 'Content + Blog Writing', 'SEO'] },
      { category: 'PERFORMANCE MARKETING', items: ['Google Ads', 'Discount Coupon Selling', 'Collaboration Outreach'] },
      { category: 'PHYSICAL MARKETING', items: ['Lead Generation Agent', 'Calling Agent', 'Chat Agent'] },
      { category: 'END TO END SALES', items: ['Banners / Standee / Brochure', 'Catalog', 'NFC / Visiting Card'] }
    ],
    result: 'Strong growth + semi automation'
  }
];

const bigBusinessPlans = [
  {
    id: 'bb-standard',
    title: 'STANDARD PLAN',
    tagline: 'Established businesses',
    price: 29999,
    gradient: 'from-slate-400 to-slate-500',
    features: [
      { category: 'DEVELOPMENT', items: ['Website', 'CRM / ERP'] },
      { category: 'DIGITAL MARKETING', items: ['Social Media Post', 'Influencer Reel', 'Promotion Reel', 'Content + Blog Writing', 'SEO'] },
      { category: 'PERFORMANCE MARKETING', items: ['Google Ads', 'Discount Coupon Selling', 'Collaboration Outreach'] },
      { category: 'PHYSICAL MARKETING', items: ['Lead Generation Agent', 'Calling Agent', 'Chat Agent'] },
      { category: 'END TO END SALES', items: ['Banners / Standee / Brochure', 'Catalog', 'NFC / Visiting Card'] }
    ],
    result: 'Scalable lead system'
  },
  {
    id: 'bb-business',
    title: 'BUSINESS PLAN',
    tagline: 'High growth businesses',
    price: 39999,
    gradient: 'from-slate-600 to-slate-700',
    hasYearlyDiscount: true,
    yearlyDiscountPercent: 30,
    features: [
      { category: 'DEVELOPMENT', items: ['Website', 'CRM / ERP'] },
      { category: 'DIGITAL MARKETING', items: ['Social Media Post', 'Influencer Reel', 'Promotion Reel', 'Content + Blog Writing', 'SEO'] },
      { category: 'PERFORMANCE MARKETING', items: ['Google Ads', 'Discount Coupon Selling', 'Collaboration Outreach'] },
      { category: 'PHYSICAL MARKETING', items: ['Lead Generation Agent', 'Calling Agent', 'Chat Agent'] },
      { category: 'END TO END SALES', items: ['Banners / Standee / Brochure', 'Catalog', 'NFC / Visiting Card'] }
    ],
    result: 'High volume leads + automation'
  },
  {
    id: 'bb-enterprise',
    title: 'ENTERPRISE PLAN',
    tagline: 'Aggressive scaling',
    price: 49999,
    gradient: 'from-slate-900 to-slate-800',
    isPopular: true,
    hasYearlyDiscount: true,
    yearlyDiscountPercent: 50,
    features: [
      { category: 'DEVELOPMENT', items: ['Website', 'CRM / ERP'] },
      { category: 'DIGITAL MARKETING', items: ['Social Media Post', 'Influencer Reel', 'Promotion Reel', 'Content + Blog Writing', 'SEO'] },
      { category: 'PERFORMANCE MARKETING', items: ['Google Ads', 'Discount Coupon Selling', 'Collaboration Outreach'] },
      { category: 'PHYSICAL MARKETING', items: ['Lead Generation Agent', 'Calling Agent', 'Chat Agent'] },
      { category: 'END TO END SALES', items: ['Banners / Standee / Brochure', 'Catalog', 'NFC / Visiting Card'] }
    ],
    result: 'Fully automated growth machine'
  }
];

const errorEnfotecPlans = [
  {
    id: 'ee-core1',
    title: 'CORE 1 SOLUTIONS',
    tagline: 'Premium Infrastructure',
    price: 100000,
    gradient: 'from-slate-400 to-slate-500',
    hasYearlyDiscount: true,
    features: [
      { category: 'DEVELOPMENT', items: ['Website', 'CRM / ERP'] },
      { category: 'DIGITAL MARKETING', items: ['Social Media Post', 'Influencer Reel', 'Promotion Reel', 'Content + Blog Writing', 'SEO'] },
      { category: 'PERFORMANCE MARKETING', items: ['Google Ads', 'Discount Coupon Selling', 'Collaboration Outreach'] },
      { category: 'PHYSICAL MARKETING', items: ['Lead Generation Agent', 'Calling Agent', 'Chat Agent'] },
      { category: 'END TO END SALES', items: ['Banners / Standee / Brochure', 'Catalog', 'NFC / Visiting Card'] }
    ],
    result: 'Scalable Enterprise Backbone'
  },
  {
    id: 'ee-core2',
    title: 'CORE 2 SOLUTIONS',
    tagline: 'Maximum Market Dominance',
    price: 150000,
    gradient: 'from-slate-600 to-slate-700',
    hasYearlyDiscount: true,
    yearlyDiscountPercent: 30,
    features: [
      { category: 'DEVELOPMENT', items: ['Website', 'CRM / ERP'] },
      { category: 'DIGITAL MARKETING', items: ['Social Media Post', 'Influencer Reel', 'Promotion Reel', 'Content + Blog Writing', 'SEO'] },
      { category: 'PERFORMANCE MARKETING', items: ['Google Ads', 'Discount Coupon Selling', 'Collaboration Outreach'] },
      { category: 'PHYSICAL MARKETING', items: ['Lead Generation Agent', 'Calling Agent', 'Chat Agent'] },
      { category: 'END TO END SALES', items: ['Banners / Standee / Brochure', 'Catalog', 'NFC / Visiting Card'] }
    ],
    result: 'Market Leader Positioning'
  },
  {
    id: 'ee-core3',
    title: 'CORE 3 SOLUTIONS',
    tagline: 'The Ultimate Growth Engine',
    price: 200000,
    gradient: 'from-slate-900 to-slate-800',
    isPopular: true,
    hasYearlyDiscount: true,
    yearlyDiscountPercent: 50,
    features: [
      { category: 'DEVELOPMENT', items: ['Website', 'CRM / ERP'] },
      { category: 'DIGITAL MARKETING', items: ['Social Media Post', 'Influencer Reel', 'Promotion Reel', 'Content + Blog Writing', 'SEO'] },
      { category: 'PERFORMANCE MARKETING', items: ['Google Ads', 'Discount Coupon Selling', 'Collaboration Outreach'] },
      { category: 'PHYSICAL MARKETING', items: ['Lead Generation Agent', 'Calling Agent', 'Chat Agent'] },
      { category: 'END TO END SALES', items: ['Banners / Standee / Brochure', 'Catalog', 'NFC / Visiting Card'] }
    ],
    result: 'Unstoppable Market Authority'
  }
];

/* ═══════════════════════════════════════
   MAIN COMPONENT
═══════════════════════════════════════ */
const PackagesPage = () => {
  const [selectedSector, setSelectedSector] = useState(null);
  const [businessType, setBusinessType] = useState('small'); // 'small', 'big', or 'special'
  const [billingCycle, setBillingCycle] = useState('monthly'); // 'monthly' or 'yearly'
  const sectorInfoRef = useRef(null);

  const handleSectorClick = (sector) => {
    setSelectedSector(selectedSector?.id === sector.id ? null : sector);
    if (selectedSector?.id !== sector.id) {
      setTimeout(() => sectorInfoRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' }), 100);
    }
  };

  const activePlans =
    businessType === 'small' ? smallBusinessPlans :
      businessType === 'big' ? bigBusinessPlans :
        errorEnfotecPlans;

  return (
    <div className="homepage-monochrome min-h-screen premium-bg relative overflow-x-hidden pt-24 pb-12 px-4 text-slate-900 selection:bg-slate-900/30">
      {/* Global Premium Background Shades - Metallic Sky Blue Theme */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-white"></div>

      <div className="max-w-7xl mx-auto relative z-10 transition-colors duration-700 text-slate-900">

        {/* PAGE HEADER */}
        <div className="text-center mb-8 px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-7xl font-black mb-8 tracking-tighter py-4 leading-[1.1] overflow-visible heading-underline active text-slate-900"
          >
            Industries We <span className="text-slate-500 pb-2 inline-block">Empower</span>
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

        {/* SECTION 1: INDUSTRY SECTORS */}
        <section className="mb-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {sectors.map((sector, idx) => (
              <motion.button
                key={sector.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                whileHover={{ y: -10 }}
                onClick={() => handleSectorClick(sector)}
                className={`group relative h-48 md:h-52 rounded-[2rem] overflow-hidden transition-all duration-500 bg-white border border-slate-200 hover:border-slate-900 hover:shadow-2xl shadow-lg cursor-pointer ${selectedSector?.id === sector.id ? 'ring-2 ring-slate-900 border-transparent' : ''}`}
              >
                {/* Background Image with Blur Effect on Hover */}
                <div
                  className="absolute inset-0 z-0 opacity-50 transition-all duration-700 group-hover:scale-110 group-hover:blur-[2px]"
                  style={{
                    backgroundImage: `url(${sector.bgImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                />

                {/* Constant Visibility Overlay (Pre-hover) */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-100 group-hover:opacity-0 transition-opacity duration-500" />

                {/* Default Bottom Title (Visible when not hovered) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 group-hover:opacity-0 transition-opacity duration-300">
                  <h3 className="text-lg md:text-xl font-black text-white tracking-tight drop-shadow-lg">{sector.name}</h3>
                </div>

                {/* UNIQUE HOVER EFFECT: Glassmorphic Panel Slide-up */}
                <div className="absolute inset-0 z-30 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center p-6 translate-y-full group-hover:translate-y-0 bg-white/10 backdrop-blur-xl border-t border-white/20">
                  {/* Background Gradient matching sector color */}
                  <div className={`absolute inset-0 opacity-20 bg-gradient-to-br ${sector.color}`} />

                  <div className="relative z-40 flex flex-col items-center text-center">
                    <motion.div
                      whileHover={{ scale: 1.2, rotate: 10 }}
                      className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 bg-gradient-to-br ${sector.color} text-white shadow-xl shadow-slate-900/20`}
                    >
                      <span className="material-symbols-outlined text-3xl">{sector.icon}</span>
                    </motion.div>

                    <h3 className="text-xl font-black text-white mb-2 tracking-tight">{sector.name}</h3>
                    <p className="text-xs font-bold text-white/80 uppercase tracking-[0.2em] mb-4 bg-white/10 px-3 py-1 rounded-full">{sector.subLabel}</p>

                    <div className="flex gap-1">
                      {[1, 2, 3].map(i => (
                        <span key={i} className="w-1.5 h-1.5 rounded-full bg-slate-900 animate-pulse" />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Selection Indicator */}
                {selectedSector?.id === sector.id && (
                  <div className="absolute top-4 right-4 z-40 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center shadow-lg border border-white/20">
                    <span className="material-symbols-outlined text-sm font-bold">check</span>
                  </div>
                )}
              </motion.button>
            ))}
          </div>
        </section>

        {/* SECTOR INFO PANEL */}
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
                    <div className="p-8 md:p-10 border-b md:border-b-0 md:border-r border-slate-100">
                      <div className="flex items-center gap-3 mb-5">
                        <div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-900">
                          <span className="material-symbols-outlined text-xl">{selectedSector.icon}</span>
                        </div>
                        <h2 className="text-2xl font-black tracking-tight text-slate-900">{selectedSector.name} Solutions</h2>
                      </div>
                      <p className="text-slate-600 text-[15px] leading-relaxed mb-6 font-medium">
                        {selectedSector.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-6">
                        {selectedSector.keywords.map(kw => (
                          <span key={kw} className="px-3 py-1 rounded-full bg-slate-100 border border-slate-200 text-[10px] uppercase font-bold text-slate-900 tracking-wider">
                            #{kw}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => setSelectedSector(null)}
                        className="text-xs text-slate-500 hover:text-slate-900 transition-colors font-bold uppercase tracking-widest flex items-center gap-2"
                      >
                        <span className="material-symbols-outlined text-sm">close</span>
                        Close
                      </button>
                    </div>

                    <div className="p-8 md:p-10 bg-slate-50/50">
                      <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-900 mb-6 border-l-2 border-slate-900 pl-3">
                        Why This Works For You
                      </h3>
                      <div className="space-y-4">
                        {selectedSector.stats.map((stat, i) => (
                          <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.08 + 0.2 }}
                            className="bg-white p-5 rounded-2xl border border-slate-100 flex items-center justify-between group hover:border-slate-900 transition-all shadow-sm"
                          >
                            <span className="text-slate-500 font-semibold text-xs uppercase tracking-wider">{stat.label}</span>
                            <span className="text-2xl font-extrabold text-slate-900 group-hover:text-slate-900 transition-all">
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
           SMART GROWTH MODEL - NEW UI
        ═══════════════════════════════════════ */}
        <div className="pt-12 pb-8 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">
            One System. One Solution. <span className="text-slate-500">Scaled for Your Business Size</span>
          </h2>
          <p className="text-lg font-bold text-slate-500 uppercase tracking-widest mb-10">
            All Services Included – Only Limitations & Scale Change
          </p>

          {/* Qualification Info Card */}
          <div className="mb-16 bg-white/50 border border-slate-200 p-8 md:p-10 rounded-[2rem] max-w-4xl mx-auto shadow-sm backdrop-blur-sm text-left">
            <div className="flex flex-col md:flex-row items-center gap-8 justify-between">
              <div className="flex-1">
                <h3 className="text-xl font-black text-slate-800 mb-2">How We Decide Your Plan</h3>
                <p className="text-slate-500 text-sm font-medium mb-6">Simple qualification system based on your yearly turnover.</p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-slate-400"></span>
                    <p className="text-sm font-bold text-slate-700 uppercase tracking-widest">Small Business: <span className="font-semibold text-slate-500 normal-case tracking-normal">Yearly Turnover below ₹15–17 Lakhs</span></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-slate-600"></span>
                    <p className="text-sm font-bold text-slate-700 uppercase tracking-widest">Big Business: <span className="font-semibold text-slate-500 normal-case tracking-normal">Yearly Turnover above ₹15–17 Lakhs</span></p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="w-3 h-3 rounded-full bg-slate-900"></span>
                    <p className="text-sm font-bold text-slate-700 uppercase tracking-widest">Specialized: <span className="font-semibold text-slate-500 normal-case tracking-normal">Enterprise & Custom Solutions</span></p>
                  </div>
                </div>
              </div>
              <div className="w-full md:w-auto p-5 bg-amber-50 border border-amber-200 rounded-2xl flex items-center md:items-start gap-4 mt-6 md:mt-0">
                <span className="material-symbols-outlined text-amber-600 text-3xl">warning</span>
                <p className="text-sm font-bold text-amber-800 leading-relaxed max-w-full md:max-w-[200px] text-left">Same services for both — only execution level changes.</p>
              </div>
            </div>
          </div>

          {/* Business Type & Billing Cycle Toggles */}
          <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12 mb-16 px-4">
            {/* Business Type Switch Toggle */}
            <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200 flex items-center relative shadow-inner w-full max-w-[400px] overflow-hidden">
              {['small', 'big', 'special'].map((type) => (
                <button
                  key={type}
                  onClick={() => setBusinessType(type)}
                  className={`flex-1 py-3 px-1 rounded-xl font-black text-[10px] md:text-[11px] lg:text-xs tracking-widest uppercase transition-all z-10 relative ${businessType === type ? 'text-white' : 'text-slate-500 hover:text-slate-800'
                    }`}
                >
                  {type === 'small' ? 'Small Biz' : type === 'big' ? 'Big Biz' : 'Specialized'}
                  {businessType === type && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-black rounded-xl -z-10 shadow-lg"
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Monthly / Yearly Toggle */}
            <div className="relative group">
              {/* Special Offer Badge */}
              <div className="absolute -top-3 -right-2 z-20 pointer-events-none">
                <span className="bg-slate-900 text-white text-[8px] font-black px-2.5 py-1 rounded-full uppercase tracking-tighter shadow-xl animate-bounce whitespace-nowrap border border-white/20">Special Offer</span>
              </div>
              <div className="bg-slate-100 p-1.5 rounded-2xl border border-slate-200 flex gap-1 relative shadow-inner w-full max-w-[260px] overflow-hidden">
                {['monthly', 'yearly'].map((cycle) => (
                  <button
                    key={cycle}
                    onClick={() => setBillingCycle(cycle)}
                    className={`flex-1 px-6 py-3 rounded-xl font-black text-[11px] tracking-widest uppercase transition-all z-10 relative ${billingCycle === cycle ? 'text-white' : 'text-slate-500 hover:text-slate-800'
                      }`}
                  >
                    {cycle}
                    {billingCycle === cycle && (
                      <motion.div
                        layoutId="activeBilling"
                        className="absolute inset-0 bg-black rounded-xl -z-10 shadow-lg"
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <AnimatePresence>
              {activePlans.map((p, i) => (
                <motion.div
                  key={`${p.id}-${billingCycle}`}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                >
                  <PricingTier {...p} billingCycle={billingCycle} />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>

          {/* Important Clarity */}
          <div className="max-w-4xl mx-auto mt-12 mb-16 bg-white border border-slate-200 rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-14 text-slate-900 shadow-xl relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 w-80 h-80 bg-slate-300 rounded-full blur-[100px] opacity-20 -mr-20 -mt-20"></div>
            <div className="relative z-10 flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1">
                <h3 className="text-3xl font-black mb-4 tracking-tight text-slate-900">Important Clarity</h3>
                <p className="text-slate-500 font-medium mb-8">All packages include our complete digital ecosystem out-of-the-box:</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    'Website + Software + App + SaaS',
                    'Digital + Performance Marketing',
                    'BDE + Sales Support',
                    'AI Agents + Automation',
                    'Offline Marketing'
                  ].map(item => (
                    <div key={item} className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-slate-500">task_alt</span>
                      <span className="text-sm font-bold text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="md:w-[40%] bg-slate-50 border border-slate-100 p-8 rounded-[2rem] text-center shadow-inner">
                <span className="material-symbols-outlined text-5xl text-amber-500 mb-4 block">rocket_launch</span>
                <p className="text-sm font-black tracking-widest text-slate-600 uppercase leading-relaxed">
                  Only difference =<br /><span className="text-slate-900 text-[18px] md:text-xl mt-2 block tracking-tight">Limit, Speed &<br />Automation Level</span>
                </p>
              </div>
            </div>
          </div>

          {/* CTA Section - Horizontal Banner Strip (White Theme) */}
          <div className="max-w-7xl mx-auto mb-20">
            <div className="bg-white rounded-3xl md:rounded-full py-8 md:py-6 px-8 md:px-12 text-slate-900 shadow-xl relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-8 border border-slate-200">
              <div className="absolute inset-0 bg-slate-50/50 bg-[radial-gradient(#e2e8f0_1px,transparent_1px)] [background-size:20px_20px] opacity-40"></div>

              <div className="relative z-10 text-left lg:flex-1">
                <h2 className="text-xl md:text-2xl font-black leading-tight tracking-tight mb-1">Let’s Find the Right Plan for Your Business</h2>
                <p className="text-slate-400 font-medium text-xs uppercase tracking-widest">Tailored solutions for your specific goals</p>
              </div>

              <div className="relative z-10 flex flex-wrap gap-4 justify-center">
                <Link to="/consultation" className="px-8 py-3 rounded-full bg-gradient-to-br from-slate-900 to-slate-800 text-white font-black text-[10px] uppercase tracking-[0.2em] shadow-xl hover:scale-105 transition-transform whitespace-nowrap">Free Consultation</Link>
                <Link to="/contact" className="px-8 py-3 rounded-full bg-slate-100 text-slate-600 font-black text-[10px] uppercase tracking-[0.2em] hover:bg-slate-200 transition-colors border border-slate-200 hover:scale-105 whitespace-nowrap">Growth Plan</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ═══════════════════════════════════════
   PRICING TIER COMPONENT
═══════════════════════════════════════ */
const PricingTier = ({ title, tagline, price, features, result, isPopular, gradient, hasYearlyDiscount, billingCycle, yearlyDiscountPercent }) => {
  const monthlyPrice = price;
  const yearlyPrice = hasYearlyDiscount && yearlyDiscountPercent
    ? (price * 12) * (1 - yearlyDiscountPercent / 100)
    : price * 12;

  const displayPrice = billingCycle === 'monthly' ? monthlyPrice : Math.round(yearlyPrice / 12);
  const perDayPrice = Math.round(displayPrice / 30);

  return (
    <motion.div
      whileHover={{ y: -10 }}
      className={`relative p-5 md:p-8 rounded-[2rem] md:rounded-[3rem] border transition-all duration-500 flex flex-col h-full bg-white text-left overflow-hidden group ${isPopular ? 'shadow-2xl ring-1 ring-slate-900/10 scale-[1.02] z-10 md:mt-[-15px] border-slate-300' : 'border-slate-100 hover:border-slate-300 shadow-lg'
        }`}
    >

      {/* Top Right Circle Badge - Per Day Price */}
      <motion.div
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        whileHover={{ scale: 1.1 }}
        className={`absolute ${isPopular ? 'top-10 md:top-12 lg:top-12' : 'top-4 lg:top-6'} right-4 lg:right-6 w-[100px] h-[100px] md:w-[85px] md:h-[85px] lg:w-[110px] lg:h-[110px] rounded-full bg-gradient-to-br ${gradient} flex flex-col items-center justify-center text-white shadow-xl z-20 border-4 border-white`}
      >
        <span className="text-[10px] md:text-[8px] lg:text-[11px] font-black uppercase tracking-tighter opacity-80 leading-none">Only</span>
        <span className="text-[20px] md:text-[18px] lg:text-[24px] font-black tracking-tighter mt-0.5">₹{perDayPrice.toLocaleString()}</span>
        <span className="text-[10px] md:text-[8px] lg:text-[11px] font-bold opacity-70 leading-none mt-0.5">/day</span>
      </motion.div>

      {isPopular && (
        <div className="absolute top-0 left-6 md:left-4 lg:left-8 bg-slate-900 text-white px-4 md:px-6 py-2 rounded-b-2xl text-[9px] md:text-[10px] font-black uppercase tracking-widest z-10">
          Highly Recommended
        </div>
      )}

      <div className={`mb-4 border-b border-slate-100 pb-4 ${isPopular ? 'mt-12 md:mt-10 lg:mt-12' : 'mt-6 md:mt-2 lg:mt-4'}`}>
        <h4 className="text-[18px] md:text-[16px] lg:text-[22px] font-black tracking-tighter text-slate-800 mb-1 pr-[110px] md:pr-[95px] lg:pr-[120px]">{title}</h4>
        <p className="text-[11px] md:text-[10px] lg:text-[13px] font-bold text-slate-500 mb-4 italic pr-[110px] md:pr-[95px] lg:pr-[120px]">"{tagline}"</p>
        <div className="flex flex-col gap-1 mb-2">
          <div className="flex items-baseline gap-2 flex-nowrap whitespace-nowrap">
            <span className="text-[32px] font-black tracking-tighter text-slate-900">₹{displayPrice.toLocaleString()}</span>
            <div className="flex flex-col ml-1">
              <span className="text-[14px] font-bold text-slate-400">/ month</span>
              {billingCycle === 'yearly' && (
                <div className="flex flex-col">
                  <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest leading-none">(billed yearly)</span>
                  <span className="text-[10px] font-bold text-slate-400 leading-none mt-1">₹{(price * 12 * (1 - (hasYearlyDiscount ? yearlyDiscountPercent / 100 : 0))).toLocaleString()}/year</span>
                </div>
              )}
            </div>
          </div>

          {billingCycle === 'yearly' && hasYearlyDiscount && yearlyDiscountPercent && (
            <div className="flex flex-col gap-1 mt-3">
              <span className="text-[12px] font-black line-through text-slate-400">₹{price.toLocaleString()}/mo</span>
              <span className="text-slate-900 text-[12px] font-black uppercase tracking-widest">{yearlyDiscountPercent}% OFF · FOR FIRST 3 MONTHS</span>
            </div>
          )}

          <div className="mt-6">
            <span className="text-[12px] font-black text-slate-500 uppercase tracking-[0.2em]">Full System Implementation</span>
          </div>
        </div>
      </div>

      <div className="flex-1 mb-4">
        <div className="space-y-4">
          {features.map((cat, idx) => (
            <div key={idx} className="mb-6">
              <div className="flex items-center gap-3 mb-3">
                <span className="text-[16px] font-black uppercase tracking-[0.2em] text-slate-600">{cat.category}</span>
                <div className="h-[1px] flex-1 bg-slate-200"></div>
              </div>
              <ul className="space-y-2">
                {cat.items.map((f, i) => {
                  const parts = f.split(':');
                  const label = parts[0];
                  const val = parts.slice(1).join(':').trim();
                  return (
                    <li key={i} className="flex gap-3 items-center">
                      <span className={`material-symbols-outlined text-[18px] text-slate-400 flex-shrink-0`}>check_circle</span>
                      <div className="flex items-baseline flex-wrap">
                        {val ? (
                          <>
                            <span className="text-[18px] font-black text-slate-700 uppercase tracking-wider">{label}:</span>
                            <span className="text-[16px] font-bold text-slate-500 ml-3 tracking-normal">
                              {val}
                            </span>
                          </>
                        ) : (
                          <span className="text-[16px] font-bold text-slate-500 tracking-normal">
                            {f}
                          </span>
                        )}
                      </div>
                    </li>
                  )
                })}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-auto border-t border-slate-100 pt-4">
        <a
          href="https://packages.errorinfotech.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="block bg-slate-50 rounded-2xl p-4 mb-4 hover:bg-slate-100 transition-all border border-transparent hover:border-slate-200 group/result"
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-black text-slate-600 uppercase tracking-widest">Expected Result / Impact:</span>
            <span className="text-[12px] font-bold text-slate-400 underline uppercase group-hover/result:text-slate-600 transition-colors">Details →</span>
          </div>
          <p className="text-[8px] font-bold text-slate-800 uppercase tracking-tight">{result}</p>
        </a>

        <motion.button
          whileTap={{ scale: 0.98 }}
          className={`w-full py-4 rounded-2xl font-black uppercase tracking-widest text-[13px] shadow-lg bg-gradient-to-r ${gradient} text-white hover:opacity-90 transition-opacity`}
        >
          Select Plan
        </motion.button>
      </div>
    </motion.div>
  );
};

export default PackagesPage;
