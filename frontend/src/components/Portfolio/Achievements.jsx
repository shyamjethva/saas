
import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../../data/portfolioData';

const Achievements = () => {
    return (
        <section id="achievement" className="py-32 px-6 bg-white relative overflow-hidden text-center">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20">
                    <h2 className="text-5xl md:text-6xl font-black tracking-tighter mb-6 leading-tight">
                        Company <span className="text-gradient">Achievements.</span>
                    </h2>
                    <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                        A testament to our engineering excellence. We take pride in our certified milestones and technical recognition.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                    {ACHIEVEMENTS.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative aspect-[4/3] rounded-[3rem] overflow-hidden border border-gray-100 shadow-xl shadow-gray-100/50 bg-white cursor-pointer"
                        >
                            {/* Certificate Image */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 group-hover:opacity-40"
                            />

                            {/* Hover Content Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-white/90 backdrop-blur-sm text-left border-t border-gray-50">
                                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em] mb-3 block">
                                    {item.label}
                                </span>
                                <h4 className="text-xl font-black text-slate-900 leading-tight tracking-tight">
                                    {item.title}
                                </h4>
                            </div>

                            {/* Subtle Glass Border on Hover */}
                            <div className="absolute inset-0 border-[12px] border-emerald-500/0 group-hover:border-emerald-500/5 transition-all duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
