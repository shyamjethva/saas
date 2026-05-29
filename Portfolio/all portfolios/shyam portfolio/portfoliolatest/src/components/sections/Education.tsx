import { motion } from 'framer-motion';
import { Award, GraduationCap } from 'lucide-react';
import { portfolioData } from '../../data/portfolioData';

export const Education = () => {
  return (
    <section className="py-32 px-6 bg-black/50 relative">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          {/* Education */}
          <div className="lg:pl-13">
            {/* Increased heading size */}
            <h2 className="text-lg uppercase tracking-[0.4em] text-muted mb-12">
              Education
            </h2>

            <div className="space-y-12">
              {portfolioData.education.map((edu, i) => (
                <motion.div
                  key={edu.school}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="relative pl-8 border-l border-white/10"
                >
                  <div className="absolute -left-[5px] top-0 h-2.5 w-2.5 rounded-full bg-white" />

                  {/* Increased period font */}
                  <span className="text-base font-mono text-muted mb-3 block">
                    {edu.period}
                  </span>

                  {/* Increased school name font */}
                  <h3 className="text-3xl font-bold mb-2 tracking-tight">
                    {edu.school}
                  </h3>

                  {/* Increased degree font */}
                  <p className="text-muted text-lg leading-relaxed">
                    {edu.degree}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            {/* Increased section heading */}
            <h2 className="text-lg uppercase tracking-[0.4em] text-muted mb-12">
              Certifications & Achievements
            </h2>

            {/* Increased card spacing */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {portfolioData.certifications.map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="glass p-8 rounded-2xl flex items-center gap-5 hover:bg-white/5 transition-colors min-h-[110px]"
                >
                  {/* Bigger icon container */}
                  <div className="h-14 w-14 rounded-2xl bg-white/5 flex items-center justify-center shrink-0">
                    <Award size={28} className="text-white" />
                  </div>

                  {/* Bigger certification text */}
                  <span className="text-xl font-semibold leading-snug tracking-tight">
                    {cert}
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