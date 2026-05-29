import { motion } from 'framer-motion';
import { portfolioData } from '../../data/portfolioData';
import profileImg from '../../assets/profile_image.png';
import { Mail } from 'lucide-react';
import { useState, useEffect } from 'react';



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
  const [sectionHeight, setSectionHeight] = useState('100vh');
  const [imgHeight, setImgHeight] = useState('90vh');

  useEffect(() => {
    const update = () => {
      const mobile = window.innerWidth < 768;
      if (mobile) {
        setSectionHeight(`${window.innerHeight}px`);
        setImgHeight(`${Math.round(window.innerHeight * 0.88)}px`);
      } else {
        setSectionHeight('100vh');
        setImgHeight('100vh');
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <section
      className="relative w-full flex flex-col text-black bg-[#e5e7eb] overflow-hidden"
      style={{ height: sectionHeight }}
    >

      {/* 1. BACKGROUND ANIMATION (z-10) */}
      <div className="absolute inset-0 w-full h-full z-10 flex items-center overflow-hidden whitespace-nowrap pointer-events-none">
        <motion.div
          animate={{ x: [0, -2800] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex gap-40 will-change-transform"
        >
          {[...Array(6)].map((_, i) => (
            <h1 key={i} className="text-[35vw] md:text-[25vw] font-black text-black leading-none select-none tracking-tighter opacity-[0.85]">
              FOUNDER
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
            <br />ERROR INFOTECH
          </p>
        </motion.div>
      </div>


      {/* 2. PROFILE IMAGE (z-[200]) - Center foreground */}
      <motion.div
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 1.8,
          ease: [0.16, 1, 0.3, 1]
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[1350px] z-[200] pointer-events-none flex justify-center items-end"
      >
        <img
          src={profileImg}
          alt={portfolioData.name}
          className="w-full md:w-auto object-contain object-bottom drop-shadow-[0_40px_100px_rgba(0,0,0,0.15)] scale-[1.6] md:scale-[0.97] origin-bottom"
          style={{ height: imgHeight }}
        />
      </motion.div>

      {/* 3. MINIMAL ACTION LAYER */}
      <div className="container relative z-[120] px-6 mx-auto h-full flex flex-col justify-end pb-12">
      </div>

      {/* 4. SOCIALS & COLORFUL ICONS (z-[300]) */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-12 right-6 md:right-12 flex flex-col items-end gap-8 z-[300]"
      >
        <div className="flex gap-6 md:gap-8 items-center ">
          <a href={portfolioData.socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#0077B5] hover:scale-110 transition-all"><LinkedinIcon size={24} /></a>
          <a href={portfolioData.socials.instagram} target="_blank" rel="noopener noreferrer" className="text-[#E4405F] hover:scale-110 transition-all"><InstagramIcon size={24} /></a>
          <a href={portfolioData.socials.twitter} target="_blank" rel="noopener noreferrer" className="text-black hover:scale-110 transition-all"><XIcon size={24} /></a>
          <a href={portfolioData.socials.email} className="text-[#EA4335] hover:scale-110 transition-all"><Mail size={24} /></a>
        </div>
      </motion.div>

      {/* Subtle vignette for depth */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.01)_100%)] z-25" />
    </section>
  );
};