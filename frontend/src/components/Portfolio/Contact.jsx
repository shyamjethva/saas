
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
    const [scale, setScale] = useState('INSTITUTIONAL');

    return (
        <section id="contact" className="py-20 px-6 bg-slate-50/50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[100px] -mr-64 -mt-64"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-500/5 rounded-full blur-[100px] -ml-64 -mb-64"></div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-5"
                    >
                        <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-600 text-[10px] font-black uppercase tracking-[0.2em] mb-8 shadow-sm">
                            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                            Next-Gen Partnership
                        </div>

                        <h2 className="text-4xl md:text-6xl font-black tracking-tighter leading-none mb-8 text-slate-800 pb-8">
                            Initiate <br />
                            <span className="text-blue-600 pb-4">Dialogue.</span>
                        </h2>

                        <p className="text-lg text-slate-600 font-medium leading-relaxed mb-12 max-w-sm">
                            We selectively partner with organizations ready to redefine their industry through high-precision technology.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200 transition-all duration-500 shadow-sm">
                                    <span className="material-symbols-outlined text-2xl">mail</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Direct Communication</span>
                                    <a href="mailto:errorinfotech404@gmail.com" className="text-lg font-black text-slate-800 transition-colors hover:text-blue-600">errorinfotech404@gmail.com</a>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 group-hover:text-blue-600 group-hover:border-blue-200 transition-all duration-500 shadow-sm">
                                    <span className="material-symbols-outlined text-2xl">location_on</span>
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-[10px] font-black text-slate-400 uppercase tracking-[0.2em] mb-1">Our Studio</span>
                                    <address className="text-lg font-black text-slate-800 not-italic">Malaviya Chowk, Rajkot</address>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="lg:col-span-7"
                    >
                        <div className="bg-white p-10 md:p-14 rounded-[3.5rem] border border-slate-200 shadow-2xl relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

                            <form className="space-y-8 relative z-10" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] ml-2">Identity Profile</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 text-xl">person</span>
                                            <input type="text" placeholder="Alexander Vance" className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] pl-16 pr-8 py-5 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-base font-black text-slate-800 placeholder:text-slate-300 shadow-inner" />
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <label className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] ml-2">Digital Channel</label>
                                        <div className="relative">
                                            <span className="material-symbols-outlined absolute left-6 top-1/2 -translate-y-1/2 text-slate-300 text-xl">mail</span>
                                            <input type="email" placeholder="name@org.com" className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] pl-16 pr-8 py-5 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-base font-black text-slate-800 placeholder:text-slate-300 shadow-inner" />
                                        </div>
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <label className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] ml-2">Engagement Scale</label>
                                    <div className="flex flex-wrap gap-3">
                                        {['INSTITUTIONAL', 'VENTURE', 'STRATEGIC'].map((type) => (
                                            <button
                                                key={type}
                                                type="button"
                                                onClick={() => setScale(type)}
                                                className={`px-8 py-4 rounded-2xl text-[10px] font-black transition-all border tracking-widest ${scale === type
                                                    ? 'bg-blue-600 text-white border-blue-600 shadow-xl shadow-blue-500/20 scale-105'
                                                    : 'bg-white text-slate-400 border-slate-200 hover:border-slate-300 hover:text-slate-600'}`}
                                            >
                                                {type}
                                            </button>
                                        ))}
                                    </div>
                                </div>

                                <div className="space-y-3">
                                    <label className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] ml-2">Strategic Vision</label>
                                    <textarea rows="4" placeholder="Outline your project scope..." className="w-full bg-slate-50 border border-slate-100 rounded-[2rem] px-8 py-6 focus:bg-white focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 outline-none transition-all text-base font-black text-slate-800 placeholder:text-slate-300 shadow-inner resize-none"></textarea>
                                </div>

                                <button className="w-full py-6 bg-slate-900 text-white rounded-[2rem] font-black text-[12px] tracking-[0.3em] shadow-2xl hover:bg-blue-600 hover:scale-[1.02] active:scale-[0.98] transition-all uppercase">
                                    Initiate Strategic Dialogue
                                </button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
