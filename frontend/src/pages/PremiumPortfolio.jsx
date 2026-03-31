
import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import Hero from '../components/Portfolio/Hero';
import Work from '../components/Portfolio/Work';
import Achievements from '../components/Portfolio/Achievements';
import Contact from '../components/Portfolio/Contact';
import GeminiAssistant from '../components/Portfolio/GeminiAssistant';
import { CLIENT_SECTORS, METHODOLOGY } from '../data/portfolioData';

const PremiumPortfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <main>
        <Hero />

        {/* Client Sector Data Section */}
        <section id="demographic" className="py-24 px-6 relative border-y border-gray-100 bg-gray-50/30">
          <div className="max-w-7xl mx-auto">
            <div className="mb-16 text-center">
              <span className="text-[12px] font-black text-emerald-600 uppercase tracking-[0.4em] mb-4 block">Client Demographics</span>
              <h2 className="text-3xl md:text-4xl font-black tracking-tighter text-black" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif" }}>
                Total Client <span className="text-gradient">Data Ecosystem.</span>
              </h2>
              <p className="mt-4 text-slate-600 max-w-2xl mx-auto font-light text-base">Analyzing our global footprint across key industrial verticals and emerging sectors with absolute precision.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {CLIENT_SECTORS.map((sector, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-10 rounded-[2.5rem] bg-white border border-gray-100 hover:border-blue-300/50 transition-all duration-300 group hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] relative overflow-hidden"
                >
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 to-blue-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500" />

                  <h3 className="text-xs font-black text-emerald-600 uppercase tracking-[0.2em] mb-8 group-hover:text-blue-600 transition-colors">{sector.sector}</h3>

                  <div className="mb-6 flex items-baseline gap-3">
                    <span className="text-5xl font-black text-slate-900 tracking-tighter group-hover:scale-105 transition-transform duration-300 origin-left inline-block">{sector.clients}</span>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-2 py-1 rounded-md group-hover:text-blue-700 group-hover:bg-blue-50 group-hover:border-blue-100 transition-colors">{sector.growth} YOY</span>
                  </div>

                  <p className="text-slate-600 text-sm font-light leading-relaxed group-hover:text-slate-900 transition-colors">{sector.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Work />
        <Achievements />

        {/* The Methodology Section - The Protocol */}
        <section id="about" className="py-32 px-6 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-24">
              <div className="lg:col-span-7">
                <span className="text-[12px] font-black text-emerald-600 uppercase tracking-[0.4em] mb-4 block">Operational Excellence</span>
                <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.1] mb-8 text-black" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif" }}>
                  The Error Infotech <br />
                  <span className="text-gradient">Protocol.</span>
                </h2>
                <p className="text-lg text-slate-600 font-light leading-relaxed max-w-xl">
                  Our methodology is designed to minimize friction and maximize technical output. We don't just build software; we architect for global scalability.
                </p>
              </div>
              <div className="lg:col-span-5 flex items-center justify-center gap-16 lg:border-l lg:border-gray-100 lg:pl-12">
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-black text-black mb-2 tracking-tighter" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif" }}>94%</div>
                  <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest leading-tight text-center">Efficiency <br /> Gains</p>
                </div>
                <div className="flex flex-col items-center">
                  <div className="text-5xl font-black text-black mb-2 tracking-tighter" style={{ fontFamily: "'Product Sans', 'Google Sans', sans-serif" }}>0.1ms</div>
                  <p className="text-[11px] font-black text-gray-400 uppercase tracking-widest leading-tight text-center">Core <br /> Latency</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border border-gray-100 rounded-[3.5rem] overflow-hidden shadow-2xl shadow-gray-200/50 bg-white">
              {METHODOLOGY.map((step, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="p-14 bg-white hover:bg-gray-50 border-r border-b border-gray-100 last:border-r-0 transition-all group cursor-default"
                >
                  <div className="text-6xl font-black text-emerald-100 group-hover:text-emerald-600 transition-colors mb-12 select-none tracking-tighter">{step.phase}</div>
                  <h4 className="text-2xl font-black mb-6 tracking-tighter text-slate-900 group-hover:text-emerald-600 transition-colors uppercase leading-none">{step.title}</h4>
                  <p className="text-slate-600 text-sm leading-relaxed group-hover:text-slate-900 transition-colors font-light">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <Contact />
        <GeminiAssistant />
      </main>
    </div>
  );
};

export default PremiumPortfolio;