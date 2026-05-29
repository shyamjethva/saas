
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Portfolio/Hero';
import Work from '../components/Portfolio/Work';
import Achievements from '../components/Portfolio/Achievements';
import Contact from '../components/Portfolio/Contact';
import { CLIENT_SECTORS, METHODOLOGY } from '../data/portfolioData';

const PremiumPortfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="homepage-monochrome min-h-screen premium-bg relative overflow-x-hidden pt-12 md:pt-16">
      <main>
        <Hero />

        {/* Client Sector Data Section */}
        <section id="demographic" className="py-12 px-6 relative border-y border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="mb-12 text-center">
              <span className="text-[12px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 block">Client Demographics</span>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tighter text-slate-900 pb-2">
                Total Client <span className="text-slate-500">Data Ecosystem.</span>
              </h2>
              <p className="mt-4 text-slate-500 max-w-2xl mx-auto font-light text-base">Analyzing our global footprint across key industrial verticals and emerging sectors with absolute precision.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CLIENT_SECTORS.map((sector, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 rounded-[2.5rem] bg-white/80 backdrop-blur-md border border-slate-100 hover:border-blue-300/50 transition-all duration-300 group hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-sky-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

                  <h3 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8 group-hover:text-blue-600 transition-colors">{sector.sector}</h3>

                  <div className="mb-6 flex items-baseline gap-3">
                    <span className="text-5xl font-black text-slate-900 tracking-tighter group-hover:scale-105 transition-transform duration-300 origin-left inline-block">{sector.clients}</span>
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-50 border border-slate-100 px-2 py-1 rounded-md transition-colors">{sector.growth} YOY</span>
                  </div>

                  <p className="text-slate-500 text-sm font-light leading-relaxed group-hover:text-slate-900 transition-colors">{sector.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Work />
        <Achievements />

        {/* The Methodology Section - The Protocol */}
        <section id="about" className="py-12 px-6 relative border-t border-slate-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
              <div className="lg:col-span-7">
                <span className="text-[12px] font-black text-slate-500 uppercase tracking-[0.4em] mb-4 block">Operational Excellence</span>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-8 text-slate-900 pb-2">
                  The Error Infotech <br />
                  <span className="text-slate-500 pb-2">Protocol.</span>
                </h2>
                <p className="text-lg text-slate-500 font-light leading-relaxed max-w-xl">
                  Our methodology is designed to minimize friction and maximize technical output. We don't just build software; we architect for global scalability.
                </p>
              </div>
              <div className="lg:col-span-5 flex items-center justify-center gap-16 lg:border-l lg:border-slate-100 lg:pl-12">
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">94%</div>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-tight text-center">Efficiency <br /> Gains</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-black text-slate-900 mb-2 tracking-tighter">0.1ms</div>
                  <p className="text-[11px] font-black text-slate-400 uppercase tracking-widest leading-tight text-center">Core <br /> Latency</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-slate-100 rounded-[3.5rem] overflow-hidden shadow-2xl shadow-slate-200/50 bg-white/80 backdrop-blur-md">
              {METHODOLOGY.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-14 bg-transparent hover:bg-slate-50/50 border-r border-b border-slate-100 last:border-r-0 transition-all group cursor-default"
                >
                  <div className="text-6xl font-black transition-all duration-500 mb-12 select-none tracking-tighter text-sky-400/20 group-hover:text-sky-400 group-hover:scale-110 origin-left">
                    {step.phase}
                  </div>
                  <h4 className="text-2xl font-black mb-6 tracking-tighter text-slate-900 transition-colors uppercase leading-none group-hover:text-blue-600">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 text-sm leading-relaxed group-hover:text-slate-900 transition-colors font-light">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
      </main>
    </div>
  );
};

export default PremiumPortfolio;
