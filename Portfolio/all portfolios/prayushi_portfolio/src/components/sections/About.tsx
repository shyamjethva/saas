import { motion, useMotionValue, useSpring, animate } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { portfolioData } from '../../data/portfolioData';

// Simple animated counter using framer-motion — no extra dependencies
function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { damping: 50, stiffness: 100 });

  useEffect(() => {
    animate(motionValue, value, { duration: 2.5 });
  }, [motionValue, value]);

  useEffect(() => {
    spring.on('change', (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.round(latest).toString();
      }
    });
  }, [spring]);

  return <span ref={ref}>0</span>;
}

const stats = [
  { label: 'Fresher', value: 0, suffix: '+' },
  { label: 'Projects Completed', value: 2, },
  { label: 'Technologies', value: 9, suffix: '+' },
  { label: 'Worked with Companies', value: 1, suffix: '+' },
];

export const About = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <section id="about" className="pt-24 pb-16 px-6 md:px-10 relative">
      <div className="container mx-auto">
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-20 items-start">
          {/* Text Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <h2 className="text-sm uppercase tracking-[0.4em] text-muted mb-8">
                The Story
              </h2>
              <p className="text-3xl md:text-5xl font-bold tracking-tighter leading-[1.1] mb-8">
                Combining creativity with <span className="text-muted">code</span> Combining creativity with code.
              </p>
              <div className="space-y-6 text-lg text-muted leading-relaxed max-w-xl">
                <p>{portfolioData.summary}</p>
                <p>
                  My journey began with a curiosity for how things work under the hood,
                  which evolved into a passion for creating seamless mobile experiences
                  and robust backend systems.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="glass p-8 rounded-3xl flex flex-col justify-between aspect-square"
              >
                <div className="text-4xl md:text-6xl font-bold tracking-tighter">
                  {inView && <AnimatedNumber value={stat.value} />}
                  <span className="text-muted">{stat.suffix}</span>
                </div>
                <div className="text-xs uppercase tracking-widest text-muted font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
