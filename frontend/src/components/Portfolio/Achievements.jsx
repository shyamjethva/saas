
import React from 'react';
import { motion } from 'framer-motion';
import { ACHIEVEMENTS } from '../../data/portfolioData';

const Achievements = () => {
    return (
        <section id="achievement" className="py-32 px-6 relative overflow-hidden text-center">
            <div className="max-w-7xl mx-auto relative z-10">
                <div className="mb-20">
                    <h2 className="text-5xl md:text-6xl font-bold tracking-tighter mb-6 leading-tight text-slate-900">
                        Company <span className="text-slate-500">Achievements.</span>
                    </h2>
                    <p className="text-slate-500 text-lg font-light max-w-2xl mx-auto leading-relaxed">
                        A testament to our engineering excellence. We take pride in our certified milestones and technical recognition.
                    </p>
                </div>

                <div className="block sm:columns-2 lg:flex lg:flex-wrap justify-center items-start gap-10 w-full">
                    {ACHIEVEMENTS.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative rounded-[2rem] overflow-hidden border border-slate-100 shadow-xl shadow-slate-200/50 bg-white cursor-pointer w-full lg:w-[calc(33.33%-1.67rem)] mb-10 lg:mb-0 break-inside-avoid inline-block lg:block"
                        >
                            {/* Certificate Image - Never cut, never stretched, no padding */}
                            <img
                                src={item.image}
                                alt={item.title}
                                className={`w-full h-auto block transition-transform duration-700 group-hover:scale-105 group-hover:opacity-90 ${idx === 1 ? 'scale-[1.08] -translate-x-4' : ''}`}
                            />

                            {/* Hover Content Overlay */}
                            <div className="absolute inset-x-0 bottom-0 p-8 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out bg-white/95 backdrop-blur-md text-left border-t border-slate-50">
                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em] mb-2 block">
                                    {item.label}
                                </span>
                                <h4 className="text-lg font-black text-slate-800 leading-tight tracking-tight group-hover:text-blue-600 transition-colors duration-300">
                                    {item.title}
                                </h4>
                            </div>

                            {/* Subtle Glass Border on Hover */}
                            <div className="absolute inset-0 border-[12px] border-blue-500/0 group-hover:border-blue-500/5 transition-all duration-500 pointer-events-none" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Achievements;
