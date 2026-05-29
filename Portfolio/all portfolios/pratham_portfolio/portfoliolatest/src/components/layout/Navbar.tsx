import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { portfolioData } from '../../data/portfolioData';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Work', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
      // CHANGE: Lower the z-index to 10
      className="fixed top-6 left-0 right-0 z-40 flex justify-center px-4" >
      <nav className="w-full max-w-6xl bg-white/90 backdrop-blur-md border border-black/5 rounded-2xl px-4 md:px-8 py-3 md:py-4 flex items-center justify-between shadow-[0_20px_50px_rgba(0,0,0,0.1)]">

        {/* Logo / Branding */}
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 rounded-lg bg-black flex items-center justify-center shrink-0 shadow-lg">
            <span className="text-white font-bold text-lg leading-none">PU</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-center md:gap-2 leading-none">
            <span className="text-sm md:text-base font-bold uppercase tracking-tighter text-black">{portfolioData.firstName}{' '}{' '}{portfolioData.lastName}</span>
          </div>
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-16">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-xs font-bold uppercase tracking-[0.2em] text-black/40 hover:text-black transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Action Button */}
        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <a
              href="#contact"
              className="px-8 py-3 border border-black/10 rounded-lg text-xs font-bold uppercase tracking-[0.2em] text-black hover:bg-black hover:text-white transition-all"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden h-10 w-10 flex items-center justify-center text-black"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-0 top-24 z-40 px-4 md:hidden pointer-events-none"
          >
            <div className="bg-white/95 backdrop-blur-2xl rounded-2xl p-8 shadow-2xl border border-black/5 pointer-events-auto">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, i) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-base font-bold uppercase tracking-[0.0em] text-black"
                  >
                    {link.name}
                  </motion.a>
                ))}
                <motion.a
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navLinks.length * 0.1 }}
                  href="#contact"
                  onClick={() => setIsOpen(false)}
                  className="mt-4 w-full py-4 bg-black text-white text-center rounded-xl font-bold uppercase tracking-widest text-xs"
                >
                  Hire Me
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

