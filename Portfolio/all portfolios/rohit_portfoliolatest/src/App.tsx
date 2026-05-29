import { useEffect, useState } from 'react';
import Lenis from 'lenis';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './components/animations/Loader';
import { Navbar } from './components/layout/Navbar';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Projects } from './components/sections/Projects';
import { Skills } from './components/sections/Skills';
import { Experience } from './components/sections/Experience';
import { Education } from './components/sections/Education';
import { Contact, Footer } from './components/sections/Contact';
import { CustomCursor } from './components/ui/CustomCursor';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Silence internal library deprecation warnings that can't be fixed without updating packages
    const originalWarn = console.warn;
    console.warn = (...args) => {
      if (
        args[0]?.includes?.('THREE.Clock') || 
        args[0]?.includes?.('deprecated parameters for the initialization function') ||
        args[0]?.includes?.('non-static position') ||
        args[0]?.includes?.('X3595') ||
        args[0]?.includes?.('gradient instruction')
      ) {
        return;
      }
      originalWarn(...args);
    };

    // Initialize Lenis
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
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
          <main key="main" className="relative">
            <CustomCursor />
            <div className="noise" />
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Experience />
            <Education />
            <Contact />
            <Footer />
          </main>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
