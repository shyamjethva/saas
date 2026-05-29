import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './components/animations/Loader';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { VisionMission } from './components/sections/VisionMission';
import { Strengths } from './components/sections/Strengths';
import { Services } from './components/sections/Services';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { ClientTrust } from './components/sections/ClientTrust';
import { Contact, Footer } from './components/sections/Contact';
import { CustomCursor } from './components/ui/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);
  // Last Updated: 2026-05-16T18:47:00Z (Force Reload)

  useEffect(() => {
    // Only use Lenis smooth scroll on desktop — on mobile it causes lag and scroll overshoots
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    // Initialize Lenis with high-performance linear interpolation (lerp)
    const lenis = new Lenis({
      lerp: 0.1, // Zero input latency, highly responsive and silky smooth
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      infinite: false,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen w-full bg-black text-white selection:bg-white selection:text-black">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <main key="main" className="relative overflow-x-hidden w-full">
            <CustomCursor />
            <div className="noise" />
            <Navbar />
            <Hero />
            <About />
            <VisionMission />
            <Strengths />
            <Services />
            <Experience />
            <Projects />
            <Skills />
            <Education />
            <ClientTrust />
            <Contact />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
