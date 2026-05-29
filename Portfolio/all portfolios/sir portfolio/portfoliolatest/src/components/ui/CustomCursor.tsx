import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const CustomCursor = () => {
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    const detectTouch = () => {
      const touchCapable = 
        'ontouchstart' in window || 
        navigator.maxTouchPoints > 0 || 
        (window.matchMedia && window.matchMedia('(pointer: coarse)').matches);
      setIsTouch(touchCapable);
    };
    detectTouch();
  }, []);

  const [isHovered, setIsHovered] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const cursorXOuter = useSpring(cursorX, { damping: 40, stiffness: 200 });
  const cursorYOuter = useSpring(cursorY, { damping: 40, stiffness: 200 });

  useEffect(() => {
    if (isTouch) return;
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A' || target.tagName === 'BUTTON' || target.closest('a') || target.closest('button')) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleHover);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY]);

  if (isTouch) return null;

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-white/50 pointer-events-none z-[10000] mix-blend-difference"
        style={{ x: cursorXOuter, y: cursorYOuter, translateX: '-50%', translateY: '-50%' }}
        animate={{ scale: isHovered ? 1.5 : 1 }}
      />
      <motion.div
        className="fixed top-0 left-0 w-1.5 h-1.5 rounded-full bg-white pointer-events-none z-[10000] mix-blend-difference"
        style={{ x, y, translateX: '-50%', translateY: '-50%' }}
      />
    </>
  );
};
