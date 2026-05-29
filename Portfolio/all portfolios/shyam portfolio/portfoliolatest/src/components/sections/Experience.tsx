import { motion, useScroll, useSpring } from 'framer-motion';
import { useRef } from 'react';
import { portfolioData } from '../../data/portfolioData';

export const Experience = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="experience" className="py-32 px-6 bg-[#e5e7eb] text-black relative">
      <div className="container mx-auto max-w-4xl relative">
        {/* Slightly bigger section heading */}
        <h2 className="text-lg uppercase tracking-[0.4em] text-black/40 mb-20 text-center">
          Professional Path
        </h2>

        <div ref={containerRef} className="relative">
          {/* Timeline Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="absolute left-0 md:left-1/2 top-0 h-full w-[1px] bg-gradient-to-b from-black/20 via-black/10 to-transparent"
          />

          <div className="space-y-24">
            {portfolioData.experience.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className={`relative flex flex-col md:flex-row gap-8 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
              >
                {/* Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 h-4 w-4 -translate-x-[7.5px] rounded-full bg-black shadow-[0_0_20px_rgba(0,0,0,0.1)] z-10" />

                <div className="flex-1 md:text-right">
                  {i % 2 === 1 && (
                    <div className="md:pr-12 pl-8 md:pl-0">
                      {/* Bigger period */}
                      <span className="text-base font-mono text-black/40 mb-3 block">
                        {exp.period}
                      </span>

                      {/* Bigger company name */}
                      <h3 className="text-4xl font-bold tracking-tighter mb-3">
                        {exp.company}
                      </h3>

                      {/* Bigger role */}
                      <p className="text-xl text-black/60 italic">
                        {exp.role}
                      </p>
                    </div>
                  )}
                </div>

                <div className="flex-1">
                  {i % 2 === 0 && (
                    <div className="md:pl-12 pl-8">
                      {/* Bigger period */}
                      <span className="text-base font-mono text-black/40 mb-3 block">
                        {exp.period}
                      </span>

                      {/* Bigger company name */}
                      <h3 className="text-4xl font-bold tracking-tighter mb-3">
                        {exp.company}
                      </h3>

                      {/* Bigger role */}
                      <p className="text-xl text-black/60 italic mb-5">
                        {exp.role}
                      </p>

                      {/* Bigger description */}
                      <p className="text-black/60 text-lg leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  )}

                  {i % 2 === 1 && (
                    <div className="md:pl-12 pl-8">
                      {/* Bigger description */}
                      <p className="text-black/60 text-lg leading-relaxed">
                        {exp.description}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};