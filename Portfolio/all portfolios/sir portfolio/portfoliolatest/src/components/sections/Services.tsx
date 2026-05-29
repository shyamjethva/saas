import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

export const Services = () => {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-20">
          <div className="lg:w-1/3">
            <h2 className="text-sm uppercase tracking-[0.4em] text-white/40 mb-6">
              Expertise
            </h2>
            <h3 className="text-5xl md:text-7xl font-black tracking-tighter uppercase leading-none">
              {portfolioData.services.heading}
            </h3>
          </div>
          
          <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-16">
            {portfolioData.services.list.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group cursor-default"
              >
                <span className="text-white/20 font-mono text-lg mb-4 block group-hover:text-white transition-colors">
                  0{(idx + 1).toString().padStart(2, '0')}
                </span>
                <h4 className="text-3xl font-bold tracking-tight text-white/80 group-hover:text-white transition-colors">
                  {service}
                </h4>
                <div className="h-[1px] w-0 bg-white group-hover:w-full transition-all duration-500 mt-4" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
