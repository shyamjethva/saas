
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
        <section id="work" className="py-24 px-6 relative">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="max-w-2xl"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tighter leading-none text-slate-900 pb-2">
                            Case <span className="text-slate-500">Archives.</span>
                        </h2>
                        <p className="text-slate-500 text-lg font-light leading-relaxed">A selection of technical milestones where high-fidelity design meets strategic engineering across key industrial verticals.</p>
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
                                    ? 'bg-slate-900 text-white shadow-lg shadow-slate-200'
                                    : 'border border-slate-200 text-slate-500 hover:border-blue-400/50 hover:text-blue-600 bg-white/50 backdrop-blur-sm'
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
                                className="group relative rounded-3xl bg-white/80 backdrop-blur-md overflow-hidden cursor-pointer border border-slate-100 hover:border-blue-400/50 transition-all duration-500 shadow-sm hover:shadow-2xl hover:shadow-slate-200/50"
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
                                                <span className="text-[10px] font-black text-blue-600 uppercase tracking-[0.2em]">{project.clientName}</span>
                                            )}
                                            <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest">{project.category}</span>
                                        </div>
                                        <a
                                            href="https://404.errorinfotech.in/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center transition-all duration-300 group-hover:bg-slate-900 group-hover:text-white border border-slate-100"
                                        >
                                            <svg className="w-5 h-5 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                            </svg>
                                        </a>
                                    </div>

                                    <h3 className="text-2xl font-black mb-4 leading-tight transition-all tracking-tighter text-slate-900 group-hover:text-blue-600">{project.title}</h3>
                                    <p className="text-slate-500 font-light text-sm leading-relaxed mb-8">{project.description}</p>

                                    <div className="flex items-center justify-between">
                                        <div className="flex flex-wrap gap-2">
                                            {project.tags.map(tag => (
                                                <span key={tag} className="text-[8px] px-3 py-1 bg-slate-50 border border-slate-100 rounded-lg text-slate-500 uppercase font-black tracking-widest">{tag}</span>
                                            ))}
                                        </div>
                                        <a
                                            href="https://404.errorinfotech.in/"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-[9px] font-black text-slate-900 uppercase tracking-widest border-b-2 border-slate-900/0 hover:border-slate-900 transition-all pb-0.5"
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
