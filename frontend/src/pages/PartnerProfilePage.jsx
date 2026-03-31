import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useParams, useNavigate, Link } from 'react-router-dom';

const PartnerProfilePage = () => {
    const { type, name } = useParams();
    const navigate = useNavigate();
    const [profileData, setProfileData] = useState({
        name: name || 'Real Estate Agent',
        contactPerson: 'John Doe',
        email: 'john@realty.com',
        phone: '+1 234 567 8901',
        location: 'Ahmedabad',
        category: type ? type.toUpperCase() + ' Client' : 'Basic CRM Client',
        website: 'www.reagent.com',
        description: 'Certified real estate professional specializing in residential properties.',
        icon: 'business'
    });

    const otherClients = [
        { name: 'INSURANCE AGENT', tier: 'BASIC CRM CLIENT', location: 'SURAT' },
        { name: 'LOAN DSA', tier: 'BASIC CRM CLIENT', location: 'RAJKOT' },
        { name: 'COACHING CLASS', tier: 'BASIC CRM CLIENT', location: 'BARODA' },
        { name: 'REAL ESTATE BUILDER', tier: 'STANDARD CRM CLIENT', location: 'AHMEDABAD' },
        { name: 'INSURANCE AGENCY', tier: 'STANDARD CRM CLIENT', location: 'SURAT' },
        { name: 'REAL ESTATE DEVELOPER', tier: 'PREMIUM CRM CLIENT', location: 'MUMBAI' },
        { name: 'HOSPITAL CHAIN', tier: 'PREMIUM CRM CLIENT', location: 'DELHI' }
    ];

    useEffect(() => {
        // If name is provided in URL, update the profile name
        if (name) {
            setProfileData(prev => ({ ...prev, name: name.replace(/-/g, ' ') }));
        }
        window.scrollTo(0, 0);
    }, [name]);

    return (
        <div className="min-h-screen bg-[#020617] text-white pt-24 pb-12 px-6">
            {/* Breadcrumbs & Header Navigation */}
            <div className="max-w-7xl mx-auto mb-8 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <motion.button
                        whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.1)' }}
                        whileTap={{ scale: 0.9 }}
                        onClick={() => navigate(-1)}
                        className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center"
                    >
                        <span className="material-symbols-outlined text-sm">arrow_back</span>
                    </motion.button>
                    <div className="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] text-slate-400">
                        <span>OUR NETWORK</span>
                        <span className="text-primary">/</span>
                        <span className="text-white">CLIENT PROFILE</span>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column: Profile Card */}
                <div className="lg:col-span-2 space-y-8">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-[#0f172a]/40 border border-white/5 rounded-[40px] p-10 backdrop-blur-3xl shadow-2xl relative overflow-hidden"
                    >
                        {/* Background Glow */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px] -mr-32 -mt-32"></div>

                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 mb-12">
                            <div className="flex items-center gap-6">
                                <div className="w-24 h-24 rounded-3xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center shadow-[0_0_30px_rgba(37,99,235,0.3)] relative group">
                                    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl"></div>
                                    <span className="material-symbols-outlined text-white text-5xl">apartment</span>
                                </div>
                                <div>
                                    <h1 className="text-4xl font-black tracking-tighter mb-2">{profileData.name}</h1>
                                    <div className="flex items-center gap-3">
                                        <div className="flex items-center gap-2 text-emerald-400 text-[10px] font-black uppercase tracking-widest">
                                            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                            VERIFIED PROFILE
                                        </div>
                                        <div className="w-4 h-4 rounded-full border border-white/20 flex items-center justify-center">
                                            <div className="w-1.5 h-1.5 rounded-full bg-blue-400"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                className="px-6 py-3 rounded-2xl border border-white/10 bg-white/5 text-[10px] font-black uppercase tracking-widest flex items-center gap-3 hover:bg-white/10 transition-all text-slate-400"
                            >
                                <span className="material-symbols-outlined text-lg">edit_note</span>
                                SELF EDITING MODE
                            </motion.button>
                        </div>

                        <div className="mb-10">
                            <h2 className="text-[12px] font-black text-white uppercase tracking-[0.3em] mb-8 border-b border-white/5 pb-4 inline-block">YOUR DETAILS</h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                {/* Name */}
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">CLIENT NAME</label>
                                    <div className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center px-6 font-bold text-slate-200">
                                        {profileData.contactPerson}
                                    </div>
                                </div>

                                {/* Company */}
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">COMPANY NAME</label>
                                    <div className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center px-6 font-bold text-slate-200">
                                        {profileData.name}
                                    </div>
                                </div>

                                {/* Email */}
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">EMAIL ADDRESS</label>
                                    <div className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center px-6 font-bold text-slate-200">
                                        {profileData.email}
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">PHONE NUMBER</label>
                                    <div className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center px-6 font-bold text-slate-200">
                                        {profileData.phone}
                                    </div>
                                </div>

                                {/* City */}
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">CITY / LOCATION</label>
                                    <div className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center px-6 font-bold text-slate-200">
                                        {profileData.location}
                                    </div>
                                </div>

                                {/* Category */}
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">BUSINESS CATEGORY</label>
                                    <div className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center px-6 font-bold text-slate-200">
                                        {profileData.category}
                                    </div>
                                </div>

                                {/* Website */}
                                <div className="space-y-3 md:col-span-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">WEBSITE (OPTIONAL)</label>
                                    <div className="w-full h-16 bg-white/5 border border-white/10 rounded-2xl flex items-center px-6 font-bold text-slate-200">
                                        {profileData.website}
                                    </div>
                                </div>

                                {/* Description */}
                                <div className="space-y-3 md:col-span-2">
                                    <label className="text-[10px] font-black text-slate-500 uppercase tracking-widest">SHORT COMPANY DESCRIPTION</label>
                                    <div className="w-full min-h-32 bg-white/5 border border-white/10 rounded-3xl p-6 font-bold text-slate-200 leading-relaxed">
                                        {profileData.description}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <motion.button
                            whileHover={{ scale: 1.02, boxShadow: '0 0 30px rgba(37,99,235,0.4)' }}
                            whileTap={{ scale: 0.98 }}
                            className="w-full h-20 bg-blue-600 rounded-3xl flex items-center justify-center gap-4 text-[12px] font-black uppercase tracking-[0.4em] shadow-xl relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 shimmer opacity-20 group-hover:opacity-40 transition-opacity"></div>
                            <span className="material-symbols-outlined">save</span>
                            SAVE PROFILE
                        </motion.button>
                    </motion.div>
                </div>

                {/* Right Column: Other Clients */}
                <div className="space-y-8">
                    <div className="sticky top-24">
                        <h2 className="text-[14px] font-black text-white uppercase tracking-[0.4em] mb-10 pl-2">OTHER CLIENTS</h2>

                        <div className="space-y-4">
                            {otherClients.map((client, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: i * 0.1 }}
                                    className="bg-[#0f172a]/40 border border-white/5 rounded-3xl p-6  transition-all group/card overflow-hidden relative"
                                >
                                    <div className="flex justify-between items-start mb-4">
                                        <div>
                                            <h3 className="font-black text-sm tracking-tight mb-2 group-hover/card:text-primary transition-colors">{client.name}</h3>
                                            <div className="flex items-center gap-2 text-[8px] font-bold text-slate-500 uppercase tracking-widest">
                                                <span className="material-symbols-outlined text-[12px]">category</span>
                                                {client.tier}
                                            </div>
                                        </div>
                                        <span className="text-[8px] font-black bg-blue-500/10 text-blue-400 px-3 py-1 rounded-full border border-blue-500/20">{client.location}</span>
                                    </div>

                                    <motion.button
                                        whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.05)' }}
                                        className="w-full py-3 rounded-xl border border-white/10 text-[9px] font-black uppercase tracking-widest text-slate-400 group-hover/card:border-primary/30 group-hover/card:text-primary transition-all relative overflow-hidden"
                                    >
                                        VIEW DETAILS
                                        <div className="absolute bottom-0 left-0 w-full h-[2px] bg-primary scale-x-0 group-hover/card:scale-x-100 transition-transform duration-500 origin-left"></div>
                                    </motion.button>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PartnerProfilePage;
