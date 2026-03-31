import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const ClientsProjects = () => {
  const [activeSegment, setActiveSegment] = useState('b2b-crm');
  const [deployStatus, setDeployStatus] = useState('idle'); // idle, loading, success
  const navigate = useNavigate();

  const segments = [
    { id: 'b2b-crm', name: 'B2B', desc: 'CRM Based Clients', icon: 'business_center', color: 'blue' },
    { id: 'b2c-erp', name: 'B2C', desc: 'ERP Based Industry Clients', icon: 'corporate_fare', color: 'purple' },
    { id: 'd2c-brands', name: 'D2C', desc: 'Brand & E-commerce Clients', icon: 'shopping_bag', color: 'emerald' }
  ];

  const b2bCrmData = [
    {
      tier: 'BASIC',
      subtitle: 'Small Lead Based Business',
      industries: ['Real Estate Agent', 'Insurance Agent', 'Loan DSA', 'Coaching Class', 'Immigration Consultant', 'Interior Designer', 'Solar Dealer', 'Digital Marketing Freelancer', 'Small Clinic / Hospital'],
      services: ['CRM Software', 'Lead Capture Website', 'Digital Marketing', 'Social Media Management', 'Branding', 'Performance Marketing', 'Physical Marketing', 'Calling Agents', 'Chat Support', 'Lead Generation Agents']
    },
    {
      tier: 'STANDARD',
      subtitle: 'Growing Company (Team Based)',
      industries: ['Real Estate Builder', 'Insurance Agency', 'Loan Company', 'Coaching Institute', 'Education Franchise', 'Automobile Showroom', 'IT Service Company', 'SaaS Startup', 'Solar Company', 'Recruitment Agency', 'Mid Size Hospital'],
      services: ['CRM System', 'Client Website / Portal', 'Digital Marketing', 'Social Media Management', 'Branding', 'Performance Marketing', 'Physical Campaigns', 'Sales Support', 'Calling Team', 'Chat Agents', 'Lead Generation']
    },
    {
      tier: 'PREMIUM',
      subtitle: 'Enterprise Level Clients',
      industries: ['Real Estate Developer', 'National Insurance Company', 'NBFC Loan Company', 'Education Group', 'Hospital Chain', 'Automobile Dealer Network', 'Enterprise SaaS Company', 'Large IT Company', 'National Solar EPC Company', 'Recruitment & Staffing Company'],
      services: ['Enterprise CRM', 'Portal / App Development', 'National Digital Marketing', 'Social Media Branding', 'High Budget Performance Campaign', 'Physical Campaign Events', 'Sales Team Support', 'Calling Centers', 'Lead Generation Engine']
    }
  ];

  const b2cErpData = [
    {
      tier: 'BASIC',
      subtitle: 'Small Manufacturing / Industrial Units',
      industries: ['Small Manufacturing Unit', 'Textile Workshop', 'Pharma Distributor', 'Packaging Unit', 'Auto Parts Workshop', 'Machinery Fabricator', 'Small Retail Chain', 'Dairy Farm', 'Food Processing Unit'],
      services: ['ERP Software', 'Website Development', 'Digital Marketing', 'Branding', 'Performance Marketing', 'Dealer Expansion Campaign']
    },
    {
      tier: 'STANDARD',
      subtitle: 'Mid Size Industry',
      industries: ['Textile Mill', 'Pharma Manufacturer', 'FMCG Manufacturer', 'Packaging Industry', 'Machinery Manufacturer', 'Automobile Parts Manufacturer', 'Export Company', 'Logistics Company', 'Retail Chain'],
      services: ['ERP System', 'Dealer Portal', 'Distributor Management', 'Industrial Marketing', 'Export Lead Campaign', 'Sales Team Automation']
    },
    {
      tier: 'PREMIUM',
      subtitle: 'Large Industrial Companies',
      industries: ['Large Manufacturing Group', 'Textile Exporter', 'Pharma Manufacturer', 'FMCG Brand', 'Infrastructure Company', 'Retail Chain', 'Logistics Company', 'Cement Industry', 'Steel Industry'],
      services: ['Enterprise ERP', 'Corporate Portal', 'Dealer Management System', 'National Marketing Campaign', 'Distributor Expansion', 'Industrial Lead Funnels']
    }
  ];

  const d2cData = {
    industries: ['Fashion & Apparel', 'Beauty & Personal Care', 'Food & Beverage', 'Home & Lifestyle', 'Health & Fitness', 'Tech & Gadgets'],
    example: {
      title: 'Fashion Clients',
      brands: ['Designer Brand', 'Bridal Wear Brand', 'Ethnic Wear Brand', 'Streetwear Brand', 'Footwear Brand']
    },
    services: ['Branding', 'E-commerce Website', 'Performance Marketing', 'Influencer Marketing', 'Social Media Marketing']
  };

  const handleDeploy = () => {
    if (deployStatus !== 'idle') return;
    setDeployStatus('loading');
    setTimeout(() => setDeployStatus('success'), 4000);
    setTimeout(() => setDeployStatus('idle'), 7000);
  };

  const renderTierCard = (tierData, index) => {
    const isPremium = tierData.tier === 'PREMIUM';
    return (
      <motion.div
        key={index}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: index * 0.1 }}
        className={`relative p-8 rounded-[30px] backdrop-blur-xl border transition-all duration-700 flex flex-col h-full overflow-hidden group ${isPremium
          ? 'bg-white border-amber-500/40 shadow-[0_20px_50px_rgba(251,191,36,0.15)] ring-1 ring-amber-500/20'
          : index === 1 ? 'bg-white border-blue-500/40 shadow-[0_20px_50px_rgba(59,130,246,0.15)] ring-1 ring-blue-500/20'
            : 'bg-white border-slate-200 shadow-xl '
          }`}
        whileHover={{
          y: -10,
          borderColor: isPremium ? 'rgba(251, 191, 36, 0.6)' : index === 1 ? 'rgba(59, 130, 246, 0.6)' : 'rgba(16, 185, 129, 0.6)'
        }}
      >
        {/* Hover Gradient Overlay */}
        <div className={`absolute inset-0 opacity-0 group-hover:opacity-[0.03] transition-opacity duration-700 pointer-events-none bg-gradient-to-br ${isPremium ? 'from-amber-500 to-orange-500' : index === 1 ? 'from-blue-600 to-cyan-500' : 'from-emerald-500 to-teal-500'}`}></div>

        {/* Tier Header */}
        <div className="text-center mb-10 border-b border-white/10 pb-8 relative">
          {isPremium && (
            <div className="absolute top-0 right-0">
              <span className="bg-gradient-to-r from-amber-400 to-orange-500 text-slate-900 text-[10px] font-black px-3 py-1 rounded-full uppercase tracking-tighter shadow-lg shadow-amber-500/20">
                Enterprise
              </span>
            </div>
          )}
          <h3 className={`text-4xl font-black mb-3 tracking-tighter ${isPremium ? 'text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-orange-400' : 'text-white'}`}>
            {tierData.tier}
          </h3>
          <p className="text-slate-400 font-semibold tracking-wide text-sm">{tierData.subtitle}</p>
        </div>

        {/* Card Content */}
        <div className="flex-1 space-y-10">
          {/* Industries Section */}
          <div>
            <h4 className="flex items-center gap-3 text-lg font-black text-white mb-5 uppercase tracking-widest text-[14px]">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isPremium ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'}`}>
                <span className="material-symbols-outlined text-[18px]">business</span>
              </div>
              Industries
            </h4>
            <ul className="space-y-3 max-h-56 overflow-y-auto pr-3 custom-scrollbar">
              {tierData.industries.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-slate-300 text-sm group/item">
                  <span className={`material-symbols-outlined text-[16px] mt-0.5 transition-transform group-hover/item:scale-125 ${isPremium ? 'text-amber-400' : 'text-green-400'}`}>
                    {isPremium ? 'verified' : 'check_circle'}
                  </span>
                  <span className="group-hover/item:text-white transition-colors">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Your Partner Button */}
          <div className="py-2">
            <motion.button
              whileHover={{
                scale: 1.02,
                backgroundColor: isPremium ? 'rgba(251, 191, 36, 0.2)' : index === 1 ? 'rgba(59, 130, 246, 0.2)' : 'rgba(16, 185, 129, 0.2)',
                boxShadow: isPremium ? '0 10px 30px rgba(251, 191, 36, 0.3)' : index === 1 ? '0 10px 30px rgba(59, 130, 246, 0.3)' : '0 10px 30px rgba(16, 185, 129, 0.3)'
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => navigate(`/partner-profile/${activeSegment}/${tierData.industries[0].replace(/\s+/g, '-').toLowerCase()}`)}
              className={`w-full py-4 rounded-2xl border transition-all duration-500 flex items-center justify-center gap-3 group/partner overflow-hidden relative shadow-lg ${isPremium
                ? 'border-amber-500/50 text-amber-600 bg-amber-500/10 '
                : index === 1 ? 'border-blue-500/50 text-blue-600 bg-blue-500/10 '
                  : 'border-emerald-500/50 text-emerald-600 bg-emerald-500/10 '
                }`}
            >
              {/* Shimmer Effect */}
              <div className="absolute inset-0 shimmer opacity-30 pointer-events-none"></div>

              <span className="material-symbols-outlined text-[22px] group-hover/partner:rotate-12 transition-transform relative z-10">handshake</span>
              <span className="font-black uppercase tracking-[0.2em] text-[11px] relative z-10">Your Partner</span>

              {/* Internal Glow */}
              <div className={`absolute inset-0 opacity-0 group-hover/partner:opacity-100 transition-opacity duration-500 blur-xl ${isPremium ? 'bg-amber-500/10' : 'bg-blue-500/10'}`}></div>
            </motion.button>
          </div>

          {/* Services Section */}
          <div>
            <h4 className="flex items-center gap-3 text-lg font-black text-white mb-5 uppercase tracking-widest text-[14px]">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isPremium ? 'bg-amber-500/20 text-amber-400' : 'bg-blue-500/20 text-blue-400'}`}>
                <span className="material-symbols-outlined text-[18px]">bolt</span>
              </div>
              Core Services
            </h4>
            <div className="flex flex-wrap gap-2">
              {tierData.services.map((item, i) => (
                <span key={i} className={`px-4 py-2 rounded-xl text-[11px] font-bold tracking-wide transition-all duration-300 border ${isPremium
                  ? 'bg-amber-500/5 text-amber-300 border-amber-500/20 hover:bg-amber-500/20 '
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 '}`}>
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card Glow Effect */}
        <div className={`absolute -bottom-20 -right-20 w-40 h-40 rounded-full blur-[80px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity duration-700 ${isPremium ? 'bg-amber-500' : 'bg-blue-500'}`}></div>
      </motion.div>
    );
  };

  const renderD2CSection = () => {
    return (
      <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Industries */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden group"
          >
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-cyan-500/20 flex items-center justify-center text-cyan-400">
                <span className="material-symbols-outlined text-3xl">category</span>
              </div>
              Industries
            </h3>
            <div className="grid grid-cols-1 gap-3">
              {d2cData.industries.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5  hover:bg-cyan-500/5 transition-all group/item">
                  <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover/item:scale-150 transition-transform"></div>
                  <span className="text-slate-300 font-bold group-hover/item:text-white">{item}</span>
                </div>
              ))}
            </div>

            {/* Your Partner Button */}
            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(6, 182, 212, 0.15)', boxShadow: '0 0 20px rgba(6, 182, 212, 0.2)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/partner-profile/d2c/${d2cData.industries[0].replace(/\s+/g, '-').toLowerCase()}`)}
                className="w-full py-4 rounded-2xl border border-cyan-500/30 text-cyan-400 bg-cyan-500/5  transition-all duration-300 flex items-center justify-center gap-3 group/partner overflow-hidden relative"
              >
                <div className="absolute inset-0 shimmer opacity-30 pointer-events-none"></div>
                <span className="material-symbols-outlined text-[22px] group-hover/partner:rotate-12 transition-transform relative z-10">handshake</span>
                <span className="font-black uppercase tracking-[0.2em] text-[11px] relative z-10">Your Partner</span>
              </motion.button>
            </div>
          </motion.div>

          {/* Featured Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-gradient-to-br from-purple-600/20 via-pink-600/10 to-transparent border border-purple-500/30 rounded-[30px] p-10 backdrop-blur-xl shadow-[0_30px_60px_rgba(168,85,247,0.2)] relative overflow-hidden group"
          >
            <div className="mb-10 flex justify-between items-start">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-purple-300 bg-purple-500/30 px-4 py-1.5 rounded-full border border-purple-500/30 shadow-lg shadow-purple-500/20 mb-4 inline-block">Featured Case</span>
                <h3 className="text-3xl font-black text-white tracking-tighter">{d2cData.example.title}</h3>
              </div>
              <span className="material-symbols-outlined text-purple-400 text-4xl opacity-50">auto_awesome</span>
            </div>
            <div className="space-y-3">
              {d2cData.example.brands.map((item, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl bg-purple-500/10 border border-purple-500/20 hover:translate-x-2 transition-transform group/brand">
                  <span className="material-symbols-outlined text-purple-400">checkroom</span>
                  <span className="text-purple-100 font-bold">{item}</span>
                </div>
              ))}
            </div>

            {/* Your Partner Button */}
            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(168, 85, 247, 0.15)', boxShadow: '0 0 20px rgba(168, 85, 247, 0.2)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/partner-profile/d2c/${d2cData.example.brands[0].replace(/\s+/g, '-').toLowerCase()}`)}
                className="w-full py-4 rounded-2xl border border-purple-500/30 text-purple-300 bg-purple-500/5  transition-all duration-300 flex items-center justify-center gap-3 group/partner overflow-hidden relative"
              >
                <div className="absolute inset-0 shimmer opacity-30 pointer-events-none"></div>
                <span className="material-symbols-outlined text-[22px] group-hover/partner:rotate-12 transition-transform relative z-10">handshake</span>
                <span className="font-black uppercase tracking-[0.2em] text-[11px] relative z-10">Your Partner</span>
              </motion.button>
            </div>

            <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-purple-500 rounded-full blur-[80px] opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity"></div>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-xl shadow-2xl relative overflow-hidden"
          >
            <h3 className="text-2xl font-black text-white mb-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                <span className="material-symbols-outlined text-3xl">token</span>
              </div>
              Marketing Suite
            </h3>
            <div className="space-y-4">
              {d2cData.services.map((item, i) => (
                <div key={i} className="relative group/s">
                  <div className="px-6 py-4 rounded-2xl bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 font-black tracking-wide flex items-center justify-between hover:bg-emerald-500/20  transition-all cursor-default">
                    {item}
                    <span className="material-symbols-outlined text-emerald-500/50 group-hover/s:translate-x-2 transition-transform">trending_up</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Your Partner Button */}
            <div className="mt-8">
              <motion.button
                whileHover={{ scale: 1.02, backgroundColor: 'rgba(16, 185, 129, 0.15)', boxShadow: '0 0 20px rgba(16, 185, 129, 0.2)' }}
                whileTap={{ scale: 0.98 }}
                onClick={() => navigate(`/partner-profile/d2c/${d2cData.services[0].replace(/\s+/g, '-').toLowerCase()}`)}
                className="w-full py-4 rounded-2xl border border-emerald-500/30 text-emerald-400 bg-emerald-500/5  transition-all duration-300 flex items-center justify-center gap-3 group/partner overflow-hidden relative"
              >
                <div className="absolute inset-0 shimmer opacity-30 pointer-events-none"></div>
                <span className="material-symbols-outlined text-[22px] group-hover/partner:rotate-12 transition-transform relative z-10">handshake</span>
                <span className="font-black uppercase tracking-[0.2em] text-[11px] relative z-10">Your Partner</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#020617] via-[#0f172a] to-[#020617] pt-20 overflow-x-hidden">

      <style dangerouslySetInnerHTML={{
        __html: `
        .custom-scrollbar::-webkit-scrollbar {
          width: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          border: 1px solid rgba(255, 255, 255, 0.05);
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
        @keyframes subtle-float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
        .float-animation {
            animation: subtle-float 6s ease-in-out infinite;
        }
        .grid-bg {
            background-image: radial-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px);
            background-size: 30px 30px;
        }
        .shimmer {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
          background-size: 200% 100%;
          animation: shimmer 2s infinite;
        }
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
      `}} />

      {/* Hero Section */}
      <div className="px-6 py-28 relative overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl pointer-events-none opacity-20">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-[150px]"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl mb-10 shadow-2xl  transition-colors group cursor-default">
              <span className="material-symbols-outlined text-blue-400 group-hover:scale-110 transition-transform">hub</span>
              <span className="text-white font-black tracking-[0.2em] uppercase text-xs">The Global Client Network</span>
            </div>

            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
              Client
              <span className="block mt-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">
                Segmentation
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-20 font-medium">
              We provide enterprise-grade digital architecture across diverse business models, from B2B CRM systems to global D2C brand scaling.
            </p>
          </motion.div>

          {/* Segment Selector Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto p-2 rounded-[40px] bg-white/5 border border-white/5 backdrop-blur-3xl shadow-3xl">
            {segments.map((segment) => {
              const isActive = activeSegment === segment.id;

              const themes = {
                'b2b-crm': { glow: 'bg-blue-500', active: 'border-blue-500 bg-blue-500/10', text: 'text-blue-400' },
                'b2c-erp': { glow: 'bg-purple-500', active: 'border-purple-500 bg-purple-500/10', text: 'text-purple-400' },
                'd2c-brands': { glow: 'bg-emerald-500', active: 'border-emerald-500 bg-emerald-500/10', text: 'text-emerald-400' }
              };

              return (
                <motion.button
                  key={segment.id}
                  onClick={() => setActiveSegment(segment.id)}
                  whileHover={{ y: -5 }}
                  whileTap={{ scale: 0.96 }}
                  className={`relative px-8 py-8 rounded-[32px] text-left border transition-all duration-500 overflow-hidden group ${isActive ? themes[segment.id].active + ' shadow-2xl' : 'border-white/5 hover:bg-white/5 '
                    }`}
                >
                  <div className={`w-14 h-14 rounded-2xl mb-6 flex items-center justify-center transition-all duration-500 ${isActive ? 'bg-white shadow-xl rotate-6' : 'bg-white/5 group-hover:bg-white/10'
                    }`}>
                    <span className={`material-symbols-outlined text-3xl ${isActive ? `text-${segment.color}-600` : 'text-slate-400 group-hover:text-white'
                      }`}>
                      {segment.icon}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-white mb-2 leading-tight uppercase tracking-tight">{segment.name}</h3>
                  <p className={`text-xs font-bold transition-colors ${isActive ? 'text-white' : 'text-slate-500 group-hover:text-slate-300'
                    }`}>
                    {segment.desc}
                  </p>

                  <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${segment.id === 'b2b-crm' ? 'from-blue-500 to-cyan-500' :
                    segment.id === 'b2c-erp' ? 'from-purple-500 to-pink-500' :
                      'from-emerald-500 to-teal-500'
                    } opacity-0 transition-opacity duration-300 ${isActive ? 'opacity-100' : ''}`} />
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Content Area */}
      <div className="max-w-7xl mx-auto px-6 pb-40">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSegment}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.5, ease: "circOut" }}
          >
            <div className="mb-16 text-center">
              <h2 className="text-2xl font-black text-white uppercase tracking-[0.4em] inline-block relative">
                {segments.find(s => s.id === activeSegment).desc}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-blue-500 rounded-full"></div>
              </h2>
            </div>

            {/* Conditional Data Rendering */}
            {activeSegment === 'b2b-crm' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {b2bCrmData.map((data, idx) => renderTierCard(data, idx))}
              </div>
            )}

            {activeSegment === 'b2c-erp' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {b2cErpData.map((data, idx) => renderTierCard(data, idx))}
              </div>
            )}

            {activeSegment === 'd2c-brands' && (
              renderD2CSection()
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* High-End Redesigned CTA Section */}
      <div className="relative py-24 px-6 overflow-hidden">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-transparent to-[#020617] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Trust Badges - More Compact */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              { label: 'Partners', value: '500+', icon: 'handshake', bgColor: 'bg-blue-500/20', textColor: 'text-blue-400' },
              { label: 'Retention', value: '98%', icon: 'verified_user', bgColor: 'bg-emerald-500/20', textColor: 'text-emerald-400' },
              { label: 'Live Support', value: '24/7', icon: 'public', bgColor: 'bg-purple-500/20', textColor: 'text-purple-400' }
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl backdrop-blur-xl flex items-center gap-5  transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl ${stat.bgColor} flex items-center justify-center ${stat.textColor} group-hover:scale-110 transition-transform shadow-lg`}>
                  <span className="material-symbols-outlined text-2xl tracking-normal">{stat.icon}</span>
                </div>
                <div>
                  <div className="text-2xl font-black text-white tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-white/[0.05] to-transparent border border-white/10 p-12 md:p-16 rounded-[48px] backdrop-blur-3xl shadow-3xl text-center relative overflow-hidden group"
          >
            {/* Visual Orbs */}
            <div className="absolute -top-32 -left-32 w-80 h-80 bg-blue-600/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-emerald-600/20 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }}></div>

            <div className="relative z-10">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-blue-400 font-black text-[9px] uppercase tracking-[0.3em] mb-8"
              >
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-blue-500"></span>
                </span>
                Digital Intelligence Architecture
              </motion.div>

              <h2 className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tighter leading-[1.1] transition-transform duration-700">
                Scale Your <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Empire Today</span>
              </h2>

              <p className="text-base md:text-lg text-slate-400 mb-10 max-w-xl mx-auto font-medium leading-relaxed opacity-80">
                Build a structured digital ecosystem that operates with precision
                and scales with intelligence.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-6">
                <div className="relative">
                  <motion.button
                    onClick={handleDeploy}
                    disabled={deployStatus !== 'idle'}
                    whileHover={deployStatus === 'idle' ? { scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.4)' } : {}}
                    whileTap={deployStatus === 'idle' ? { scale: 0.95 } : {}}
                    className={`w-full sm:w-80 h-16 rounded-2xl shadow-giant flex items-center justify-center gap-4 text-xs font-black uppercase tracking-[0.2em] transition-all relative overflow-hidden ${deployStatus === 'idle' ? 'bg-white text-slate-900' :
                      deployStatus === 'loading' ? 'bg-blue-600 text-white cursor-wait' :
                        'bg-emerald-500 text-white'
                      }`}
                  >
                    <AnimatePresence mode="wait">
                      {deployStatus === 'idle' && (
                        <motion.div
                          key="idle"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-4"
                        >
                          <span className="material-symbols-outlined font-black text-2xl">rocket_launch</span>
                          <span>Deploy Solution</span>
                        </motion.div>
                      )}
                      {deployStatus === 'loading' && (
                        <motion.div
                          key="loading"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="flex items-center gap-4"
                        >
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <motion.span
                            animate={{ opacity: [0.5, 1, 0.5] }}
                            transition={{ duration: 1.5, repeat: Infinity }}
                          >
                            Architecting Ecosystem...
                          </motion.span>
                        </motion.div>
                      )}
                      {deployStatus === 'success' && (
                        <motion.div
                          key="success"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="flex items-center gap-4"
                        >
                          <span className="material-symbols-outlined text-2xl font-black">verified_user</span>
                          <span>System Deployed</span>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Scanning Light Effect */}
                    {deployStatus === 'loading' && (
                      <motion.div
                        initial={{ left: '-100%' }}
                        animate={{ left: '100%' }}
                        transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
                        className="absolute top-0 w-1/2 h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                      />
                    )}
                  </motion.button>
                </div>

                <Link to="/book-demo" className="group/btn">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto h-16 bg-white/5 border border-white/10  text-white font-black px-12 py-4 rounded-2xl flex items-center justify-center gap-4 text-xs uppercase tracking-widest transition-all backdrop-blur-xl"
                  >
                    <span className="material-symbols-outlined text-xl group-hover/btn:rotate-12 transition-transform">analytics</span>
                    Strategy Audit
                  </motion.button>
                </Link>
              </div>
            </div>

            {/* Glow Line */}
            <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/30 to-transparent"></div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ClientsProjects;