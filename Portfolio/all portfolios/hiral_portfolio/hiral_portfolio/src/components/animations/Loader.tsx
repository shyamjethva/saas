import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCounter((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 1000);
          return 100;
        }
        return prev + 1;
      });
    }, 20);
    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100, transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
    >
      <div className="relative overflow-hidden">
        <motion.h1
          initial={{ y: 100 }}
          animate={{ y: 0 }}
          transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
          className="text-4xl font-bold tracking-tighter md:text-7xl"
        >
          Hiral Nadiyapara
        </motion.h1>
      </div>

      <div className="mt-4 h-[1px] w-48 bg-white/10 relative overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${counter}%` }}
          className="absolute inset-y-0 left-0 bg-white"
        />
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="mt-8 font-mono text-sm text-muted"
      >
        {counter}%
      </motion.div>

      <div className="absolute bottom-10 left-10 flex flex-col gap-2 overflow-hidden">
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ delay: 0.9 }}
          className="text-xs uppercase tracking-widest text-muted"
        >
          FULL STACK DEVELOPER WITH.AI
        </motion.p>
      </div>
    </motion.div>
  );
};
