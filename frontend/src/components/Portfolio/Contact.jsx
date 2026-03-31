
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [scale, setScale] = useState('INSTITUTIONAL');

    return (
        <section id="contact" className="py-32 px-6 bg-white relative overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:pt-12"
                    >
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[1.1] mb-12 overflow-visible">
                            Initiate <br />
                            <span className="text-gradient pb-4 -mb-4">Dialogue.</span>
                        </h2>

                        <p className="text-lg text-slate-400 font-light leading-relaxed mb-20 max-w-sm">
                            We selectively partner with organizations ready to redefine their industry through high-precision technology.
                        </p>

                        <div className="space-y-10">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#ecfdf5] flex items-center justify-center text-emerald-600 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-1">Direct Communication</span>
                                    <a href="mailto:errorinfotech404@gmail.com" className="text-lg font-bold text-slate-900 transition-colors hover:text-emerald-600">errorinfotech404@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-[#eff6ff] flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
                                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] mb-1">Our Studio</span>
                                    <address className="text-lg font-bold text-slate-900 not-italic">Malaviya Chowk, Rajkot</address>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="bg-white/50 backdrop-blur-xl p-12 md:p-20 rounded-[4rem] border border-gray-100/50 shadow-[0_60px_120px_-20px_rgba(0,0,0,0.03)] hover:border-emerald-500/30 hover:shadow-[0_80px_160px_-20px_rgba(5,150,105,0.08)] transition-all duration-700 group"
                    >
                        <form className="space-y-12" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-12">
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Identity</label>
                                    <input type="text" placeholder="e.g. Alexander Vance" className="w-full bg-transparent border-b border-gray-100 py-4 focus:border-emerald-500 outline-none transition-all text-lg placeholder:text-gray-200" />
                                </div>
                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Channel</label>
                                    <input type="email" placeholder="name@organization.com" className="w-full bg-transparent border-b border-gray-100 py-4 focus:border-emerald-500 outline-none transition-all text-lg placeholder:text-gray-200" />
                                </div>
                            </div>

                            <div className="space-y-6">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Scale of Engagement</label>
                                <div className="flex flex-wrap gap-4">
                                    {['INSTITUTIONAL', 'VENTURE', 'STRATEGIC'].map((type) => (
                                        <button
                                            key={type}
                                            type="button"
                                            onClick={() => setScale(type)}
                                            className={`px-10 py-4 rounded-2xl text-[10px] font-black transition-all border ${scale === type
                                                ? 'bg-[#0a0f1b] text-white border-[#0a0f1b] shadow-2xl shadow-blue-900/10'
                                                : 'bg-white text-gray-400 border-gray-100 hover:border-gray-200'}`}
                                        >
                                            {type}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-3">
                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Vision Brief</label>
                                <input type="text" placeholder="Outline your project scope..." className="w-full bg-transparent border-b border-gray-100 py-4 focus:border-emerald-500 outline-none transition-all text-lg placeholder:text-gray-200" />
                            </div>

                            <button className="w-full py-6 bg-[#059669] text-white rounded-[2rem] font-black text-[14px] tracking-[0.2em] shadow-[0_25px_50px_-12px_rgba(5,150,105,0.3)] hover:bg-[#047857] hover:scale-[1.02] active:scale-[0.98] transition-all uppercase mt-8">
                                Initiate Contact
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
