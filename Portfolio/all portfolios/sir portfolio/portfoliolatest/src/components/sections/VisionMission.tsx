import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';

export const VisionMission = () => {
  return (
    <section className="py-32 px-6 bg-black text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Vision Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-12 border border-white/10 bg-white/5 backdrop-blur-xl group hover:border-white/40 transition-all"
          >
            <h2 className="text-sm uppercase tracking-[0.4em] text-white/40 mb-8">
              {portfolioData.visionMission.vision.heading}
            </h2>
            <p className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
              {portfolioData.visionMission.vision.text}
            </p>
          </motion.div>

          {/* Mission Card */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="p-12 border border-white/10 bg-white/5 backdrop-blur-xl group hover:border-white/40 transition-all"
          >
            <h2 className="text-sm uppercase tracking-[0.4em] text-white/40 mb-8">
              {portfolioData.visionMission.mission.heading}
            </h2>
            <p className="text-3xl md:text-5xl font-black tracking-tighter leading-tight">
              {portfolioData.visionMission.mission.text}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
