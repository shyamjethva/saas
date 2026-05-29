import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../../data/portfolioData';



export const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-10 relative bg-black text-white overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-white/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto max-w-6xl">
        <div ref={ref} className="space-y-32">
          
          {/* 1. POWERFUL HEADLINE (Moved from Hero) */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="border-l-8 border-white pl-8 md:pl-12"
          >
            <h2 className="text-sm uppercase tracking-[0.5em] text-white/40 mb-8">
              The Vision
            </h2>
            <h3 className="text-4xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9] uppercase">
              Building Digital <span className="text-white/20 italic">Systems</span> That Help Businesses <span className="text-white/20 italic">Grow Faster</span>
            </h3>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
            {/* 2. THE STORY */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 1, delay: 0.3 }}
              className="space-y-10"
            >
              <h4 className="text-sm uppercase tracking-[0.4em] text-white/40">
                {portfolioData.about.heading}
              </h4>
              <div className="space-y-8 text-xl md:text-2xl text-white/70 leading-relaxed font-medium">
                {portfolioData.about.content.map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </motion.div>

            {/* 3. BUSINESS STATS (Moved from Hero) */}
            <div className="grid grid-cols-2 gap-6 md:gap-8">
              {portfolioData.stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.8, delay: 0.5 + i * 0.1 }}
                  className="group p-8 border border-white/10 bg-white/5 hover:bg-white hover:text-black transition-all duration-500 flex flex-col justify-between aspect-square"
                >
                  <span className="text-sm font-black uppercase tracking-widest text-white/40 group-hover:text-black/40">
                    {stat.label}
                  </span>
                  <span className="text-5xl md:text-6xl font-black tracking-tighter">
                    {stat.value}
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
