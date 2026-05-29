import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

export const Education = () => {
  return (
    <section className="py-32 px-6 bg-black text-white relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Education & Learning */}
          <div className="lg:pl-12">
            <h2 className="text-sm uppercase tracking-[0.4em] text-white/40 mb-12">
              {portfolioData.education.heading}
            </h2>

            <div className="space-y-6">
              {portfolioData.education.items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-white/20 group-hover:bg-white transition-colors" />
                  <p className="text-xl md:text-2xl font-bold tracking-tight text-white/80 group-hover:text-white transition-colors">
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Expertise & Capabilities */}
          <div>
            <h2 className="text-sm uppercase tracking-[0.4em] text-white/40 mb-12">
              {portfolioData.expertise.heading}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {portfolioData.expertise.cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                  className="p-6 border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all group cursor-default"
                >
                  <span className="text-lg font-bold tracking-tight">
                    {card}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};