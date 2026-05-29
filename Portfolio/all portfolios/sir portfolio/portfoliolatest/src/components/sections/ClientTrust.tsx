import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

export const ClientTrust = () => {
  return (
    <section className="py-32 px-6 bg-white text-black">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-sm uppercase tracking-[0.4em] text-black/40 mb-8"
          >
            {portfolioData.clientTrust.heading}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-6xl font-black tracking-tighter leading-tight"
          >
            {portfolioData.clientTrust.text}
          </motion.p>
          
          <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
            {/* Placeholders for client logos or types of businesses */}
            {['Startups', 'Local Businesses', 'Institutes', 'Enterprises'].map((item, i) => (
              <div key={i} className="flex items-center justify-center font-black text-2xl tracking-widest border-2 border-black p-8">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
