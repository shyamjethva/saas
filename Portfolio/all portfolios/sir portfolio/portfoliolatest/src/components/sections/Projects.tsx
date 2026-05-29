import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

const ProjectItem = ({ project }: { project: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden border-b border-black/10 py-10 md:py-16 flex flex-col md:flex-row md:items-center justify-between cursor-pointer transition-all duration-500 hover:border-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Project Title & Description */}
      <div className="relative z-10 flex-1 min-w-0">
        <motion.h3
          className="text-2xl md:text-5xl font-black tracking-tighter uppercase leading-none text-black mb-4"
          style={{ fontStretch: 'condensed' }}
        >
          {project.title}
        </motion.h3>
        <p className="text-black/60 text-lg md:text-xl font-medium max-w-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          {project.description}
        </p>
      </div>

      {/* RIGHT SIDE: Arrow */}
      <div className="relative z-30 flex items-center gap-8 mt-6 md:mt-0 shrink-0">
        <motion.div
          animate={{
            rotate: isHovered ? 45 : 0,
            backgroundColor: isHovered ? '#000' : '#fff',
            color: isHovered ? '#fff' : '#000',
            borderColor: isHovered ? '#000' : 'rgba(0,0,0,0.15)',
          }}
          transition={{
            duration: 0.45,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="h-12 w-12 md:h-16 md:w-16 rounded-full border flex items-center justify-center shrink-0"
        >
          <ArrowUpRight size={isHovered ? 32 : 24} />
        </motion.div>
      </div>

      {/* Hover Background Accent */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: isHovered ? 1 : 0 }}
        transition={{ duration: 0.6, ease: [0.23, 1, 0.32, 1] }}
        className="absolute bottom-0 left-0 h-[2px] w-full bg-black origin-left"
      />
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section id="projects" className="bg-[#fcfcfc] py-32 px-6 md:px-12 relative text-black">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-20">
          <p className="text-sm font-black uppercase tracking-[0.5em] text-black/40 mb-4">
            {portfolioData.projects.heading}
          </p>
          <h2 className="text-4xl md:text-7xl font-black tracking-tighter uppercase">
            Scalable Systems & <span className="text-black/40">Digital Ecosystems</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {portfolioData.projects.items.map((project, idx) => (
            <ProjectItem key={idx} project={project} />
          ))}
        </div>

        <div className="mt-20 flex justify-center">
          <a href="#contact" className="group px-10 py-5 bg-black text-white font-bold uppercase tracking-widest hover:bg-black/80 transition-all flex items-center gap-4">
            Build Your Own Solution
            <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};