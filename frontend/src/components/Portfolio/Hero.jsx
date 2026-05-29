
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
    return (
        <section className="relative flex flex-col items-center pt-4 md:pt-8 pb-24 px-6 overflow-hidden">
            {/* Dynamic Background Elements */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.03, 0.05, 0.03],
                    rotate: [0, 5, 0]
                }}
                transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-1/4 -left-20 w-[40rem] h-[40rem] bg-blue-400/5 rounded-full blur-[140px] pointer-events-none"
            />
            <motion.div
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.03, 0.05, 0.03],
                    rotate: [0, -5, 0]
                }}
                transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-1/4 -right-20 w-[40rem] h-[40rem] bg-indigo-400/5 rounded-full blur-[140px] pointer-events-none"
            />

            <div className="max-w-6xl w-full text-center relative z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                    className="text-6xl md:text-8xl font-bold text-black mb-8 tracking-tighter leading-none"
                >
                    Engineered for scale. <br />
                    <span className="heading-underline active pb-2 inline-block">
                        Built for <span className="text-gray-500">real humans.</span>
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="text-xl md:text-xl text-slate-500 mb-14 max-w-3xl mx-auto font-light leading-relaxed tracking-tight"
                >
                    Error Infotech bridges the threshold between vision and execution. We build high-stakes digital infrastructure for the world's most ambitious entities.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="flex flex-col sm:flex-row items-center justify-center gap-6"
                >
                    <motion.a
                        href="#achievement"
                        whileHover={{ scale: 1.02, y: -2 }}
                        whileTap={{ scale: 0.98 }}
                        className="w-full sm:w-auto relative group overflow-hidden px-14 py-4 bg-slate-900 rounded-2xl transition-all shadow-[0_20px_40px_rgba(0,0,0,0.1)]"
                    >
                        <div className="absolute inset-0 bg-blue-600 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                        <span className="relative z-10 text-white font-black text-[13px] tracking-[0.15em] flex items-center justify-center gap-3">
                            EXPLORE ACHIEVEMENTS
                            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </span>
                    </motion.a>

                    <a href="#contact" className="w-full sm:w-auto px-12 py-4 bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-blue-400/50 rounded-2xl transition-all group flex items-center justify-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.03)] uppercase">
                        <span className="text-slate-900 font-black text-[13px] tracking-[0.15em] group-hover:text-blue-600 transition-colors">INITIATE ENGAGEMENT</span>
                    </a>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
            >
                <div className="w-[1px] h-12 bg-gradient-to-b from-blue-500 to-transparent animate-bounce" />
            </motion.div>
        </section>
    );
};

export default Hero;
