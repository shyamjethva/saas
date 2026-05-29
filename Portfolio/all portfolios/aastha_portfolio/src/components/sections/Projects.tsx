import { motion } from 'framer-motion';
import { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

const ProjectItem = ({ project }: { project: any }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="group relative overflow-hidden border-b border-black/10 py-10 md:py-16 flex items-center justify-between cursor-pointer transition-all duration-500 hover:border-black"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* FLOATING IMAGE - slides from bottom to center */}
      <motion.div
        initial={false}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? '-50%' : '20%',
          scale: isHovered ? 1 : 0.85,
        }}
        transition={{
          duration: 0.7,
          ease: [0.23, 1, 0.32, 1],
        }}
        className="absolute left-1/2 top-1/2 z-20 pointer-events-none"
        style={{
          x: '-50%',
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="w-[260px] h-[160px] md:w-[380px] md:h-[175px] object-cover shadow-[0_25px_60px_rgba(0,0,0,0.22)] rounded-sm"
        />
      </motion.div>

      {/* PROJECT TITLE */}
      <div className="relative z-10 flex-1 min-w-0">
        <motion.h3
          initial={false}
          animate={{
            clipPath: isHovered ? 'inset(0% 0% 0% 0%)' : 'inset(0% 0% 50% 0%)',
          }}
          transition={{
            duration: 0.6,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="text-3xl md:text-6xl font-black tracking-tighter uppercase leading-none text-black whitespace-nowrap"
          style={{
            fontStretch: 'condensed',
          }}
        >
          {project.title}
        </motion.h3>
      </div>

      {/* RIGHT SIDE */}
      <div className="relative z-30 flex items-center gap-8 ml-8 shrink-0">
        {/* TECH STACK */}
        <motion.div
          initial={false}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 0.4,
            ease: [0.23, 1, 0.32, 1],
          }}
          className="hidden md:block min-w-[230px] text-right"
        >
          <p className="text-lg font-medium tracking-tight text-black whitespace-nowrap">
            {project.tech.join(' & ')}
          </p>
        </motion.div>

        {/* ARROW */}
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
          className="h-12 w-12 rounded-full border flex items-center justify-center shrink-0"
        >
          <ArrowUpRight size={20} />
        </motion.div>
      </div>
    </motion.div>
  );
};

export const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-[#fcfcfc] py-24 px-6 md:px-12 relative text-black"
    >
      <div className="container mx-auto max-w-6xl">
        {/* HEADER */}
        <div className="mb-16">
          <p className="text-[13px] font-black uppercase tracking-[0.5em] text-gray-400 mb-4">
            Selected Works
          </p>
          <div className="h-[1px] w-full border-t border-dashed border-black/20" />
        </div>

        {/* PROJECT LIST */}
        <div className="flex flex-col">
          {portfolioData.projects.map((project) => (
            <ProjectItem
              key={project.title}
              project={project}
            />
          ))}
        </div>

        {/* FOOTER */}
        <div className="mt-16 flex justify-center">
          <button className="group relative text-[15px] font-black uppercase tracking-[0.3em] border-b border-black pb-1 overflow-hidden">
            <span className="relative z-10 transition-colors duration-300 group-hover:text-gray-500">
              View all our work
            </span>
            <span className="absolute bottom-0 left-0 w-full h-[1px] bg-black origin-left scale-x-100 group-hover:scale-x-0 transition-transform duration-500" />
          </button>
        </div>
      </div>
    </section>
  );
};