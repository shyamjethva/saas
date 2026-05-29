import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import { Rocket, Zap, Bot, TrendingUp, ShieldCheck, Target } from 'lucide-react';

const icons = [Rocket, Zap, Bot, TrendingUp, ShieldCheck, Target];

export const Strengths = () => {
  return (
    <section className="py-32 px-6 bg-[#fcfcfc] text-black">
      <div className="container mx-auto">
        <div className="mb-20 text-center">
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase mb-6">
            {portfolioData.strengths.heading}
          </h2>
          <div className="h-1 w-24 bg-black mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.strengths.cards.map((card, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="p-10 border border-black/5 bg-white shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all group"
              >
                <div className="h-14 w-14 rounded-2xl bg-black/5 flex items-center justify-center mb-8 group-hover:bg-black group-hover:text-white transition-all">
                  <Icon size={28} />
                </div>
                <h3 className="text-2xl font-black tracking-tight mb-4">{card.title}</h3>
                <p className="text-black/60 text-lg font-medium leading-relaxed">{card.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
