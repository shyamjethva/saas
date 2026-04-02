
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PROJECTS } from '../../data/portfolioData';

const Work = () => {
    const [activeCategory, setActiveCategory] = useState('Sectors');
    const categories = ['Sectors', 'B2B', 'Retail', 'Healthcare', 'Tech', 'Institutional', 'Professional'];

    const filteredProjects = activeCategory === 'Sectors'
        ? PROJECTS
        : PROJECTS.filter(project => project.category === activeCategory);

    return (
        <section id="work" className="py-24 px-6 relative bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-black mb-4 tracking-tighter leading-none text-premium-gradient pb-2" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif" }}>
                            Case <span className="text-blue-gradient">Archives.</span>
                        </h2>
                        <p className="text-gray-700 text-lg font-light leading-relaxed">A selection of technical milestones where high-fidelity design meets strategic engineering across key industrial verticals.</p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-wrap gap-2"
                    >
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-[0.1em] transition-all duration-300 ${activeCategory === cat
                                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/20'
                                    : 'border border-gray-100 text-gray-500 hover:border-blue-300 hover:text-blue-600 bg-white'
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </motion.div>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, idx) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                whileHover={{ y: -8 }}
                                className="group relative rounded-3xl bg-white overflow-hidden cursor-pointer border border-gray-100 hover:border-emerald-300 transition-all duration-500 shadow-sm hover:shadow-2xl"
                            >
                                <div className="aspect-[4/3] overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-all duration-1000 ease-[cubic-bezier(0.22,1,0.36,1)]"
                                    />
                                </div>

                                <div className="p-10">
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="flex flex-col gap-1">
                                            {project.clientName && (
                                                <span className="text-[10px] font-black text-emerald-600 uppercase tracking-[0.2em]">{project.clientName}</span>
                                            )}
                                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-widest">{project.category}</span>
                                        </div>
                                        <a
                                            href="https://404.errorinfotech.in/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-0 group-hover:scale-100 hover:bg-emerald-600 hover:text-white"
                                        >
                                            <svg className="w-5 h-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>

                                    <h3 className="text-2xl font-black mb-4 leading-tight group-hover:text-emerald-700 transition-colors tracking-tighter text-slate-900">{project.title}</h3>
                                    <p className="text-gray-700 font-light text-sm leading-relaxed mb-8">{project.description}</p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[8px] px-3 py-1 bg-gray-50 border border-gray-100 rounded-lg text-gray-500 uppercase font-black tracking-widest">{tag}</span>
                                            ))}
                                        </div>
                                        <a
                                            href="https://404.errorinfotech.in/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[9px] font-black text-emerald-600 uppercase tracking-widest border-b-2 border-emerald-500/0 hover:border-emerald-500 transition-all pb-0.5"
                                        >
                                            VIEW DETAILS
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Work;
