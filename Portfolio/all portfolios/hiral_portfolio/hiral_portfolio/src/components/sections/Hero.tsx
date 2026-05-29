import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import profileImg from '../../assets/profile_image.png';
import { Mail } from 'lucide-react';

const GithubIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const LinkedinIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const InstagramIcon = ({ size = 20 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export const Hero = () => {
  return (
    <section className="relative h-screen w-full flex flex-col text-black">
      {/* Base Background Color Layer (z-0 to stay behind navbar) */}
      <div className="absolute inset-0 bg-[#e5e7eb] z-0" />

      {/* 
          CONTINUOUS BACKGROUND ANIMATION 
          Layered at z-10 so it stays behind the profile image (z-30)
      */}
      <div className="absolute inset-0 z-10 flex items-center overflow-hidden whitespace-nowrap pointer-events-none">
        <motion.div
          animate={{ x: [0, -2800] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex gap-40"
        >
          {/* Repeating the text multiple times to ensure a seamless loop */}
          {[...Array(6)].map((_, i) => (
            <h1 key={i} className="text-[35vw] md:text-[25vw] font-black text-black leading-none select-none tracking-tighter opacity-[0.85]">
              FULL STACK DEVELOPER WITH.AI
            </h1>
          ))}
        </motion.div>
      </div>

      <div className="container relative z-20 px-6 mx-auto flex-1 flex flex-col justify-between pt-24">

        {/* Top Left: Role/Status */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-40 self-start"
        >
          <p className="text-xs md:text-sm font-bold text-black/60 uppercase tracking-[0.3em] leading-tight">
            <br />Full Stack Developer
          </p>
        </motion.div>




      </div>

      {/* Bottom Right: Actions & Socials - Moved outside for global stacking context */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 1, ease: [0.22, 1, 0.36, 1] }}
        className="absolute bottom-16 md:bottom-12 right-6 md:right-12 flex flex-col items-end gap-10 z-[110]"
      >
        <a href="#projects" className="group flex items-center gap-4 text-xs md:text-sm font-bold uppercase tracking-[0.3em] hover:text-black/60 transition-colors">
          <span className='underline-offset-2 font-bold'>View Work</span>
        </a>

        <div className="flex gap-6 md:gap-8 items-center">
          <a
            href={portfolioData.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#24292e] hover:scale-110 transition-all hover:-translate-y-1"
            title="GitHub"
          >
            <GithubIcon size={22} />
          </a>
          <a
            href={portfolioData.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#0077B5] hover:scale-110 transition-all hover:-translate-y-1"
            title="LinkedIn"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href={portfolioData.socials.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#E4405F] hover:scale-110 transition-all hover:-translate-y-1"
            title="Instagram"
          >
            <InstagramIcon size={22} />
          </a>
          <a
            href={portfolioData.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-black hover:scale-110 transition-all hover:-translate-y-1"
            title="X (Twitter)"
          >
            <XIcon size={22} />
          </a>
          <a
            href={portfolioData.socials.email}
            className="text-[#EA4335] hover:scale-110 transition-all hover:-translate-y-1"
            title="Email"
          >
            <Mail size={22} />
          </a>
        </div>
      </motion.div>

      {/* Center: Profile Image Container - Moved outside for global stacking context */}
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.8,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] z-[100] pointer-events-none flex justify-center items-end overflow-hidden"
      >
        <img
          src={profileImg}
          alt={portfolioData.name}
          className="w-full md:w-auto h-[120vh] md:h-[105vh] object-contain object-bottom drop-shadow-[0_40px_100px_rgba(0,0,0,0.2)] scale-[1.9] md:scale-90 origin-bottom over"
        />
      </motion.div>

      {/* Subtle vignette for depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.01)_100%)] z-25" />
    </section>
  );
};