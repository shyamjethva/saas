import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const AnimatedCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMoving, setIsMoving] = useState(false);
  const [cursorVariant, setCursorVariant] = useState('default');
  const [isMobile, setIsMobile] = useState(false);
  const timeoutRef = useRef(null);
  const cursorRef = useRef(null);

  // Check for mobile on mount and resize
  useEffect(() => {
    const checkMobile = () => {
      const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
      setIsMobile(window.innerWidth < 1024 || isTouchDevice);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Mouse movement tracking
  useEffect(() => {
    const handleMouseMove = (e) => {
      setIsMoving(true);
      setPosition({
        x: e.clientX,
        y: e.clientY
      });

      // Clear existing timeout
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Set timeout to return to default state
      timeoutRef.current = setTimeout(() => {
        setIsMoving(false);
      }, 300);
    };

    const handleMouseLeave = () => {
      setIsMoving(false);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.tagName === 'BUTTON' || target.tagName === 'A' || target.classList.contains('interactive')) {
        setCursorVariant('hover');
      } else if (target.classList.contains('card') || target.classList.contains('glass-card')) {
        setCursorVariant('card');
      } else {
        setCursorVariant('default');
      }
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
      window.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('mouseover', handleMouseOver);
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [isMobile]);

  // Cursor variants
  const cursorVariants = {
    default: {
      scale: 1,
      opacity: 0.7,
      backgroundColor: 'rgba(56, 189, 248, 0.3)',
      boxShadow: '0 0 20px rgba(56, 189, 248, 0.5)',
      width: '20px',
      height: '20px'
    },
    hover: {
      scale: 1.5,
      opacity: 0.9,
      backgroundColor: 'rgba(139, 92, 246, 0.5)',
      boxShadow: '0 0 30px rgba(139, 92, 246, 0.7)',
      width: '30px',
      height: '30px'
    },
    card: {
      scale: 2,
      opacity: 0.6,
      backgroundColor: 'rgba(16, 185, 129, 0.4)',
      boxShadow: '0 0 40px rgba(16, 185, 129, 0.6)',
      width: '40px',
      height: '40px'
    }
  };

  // Trail effect
  const [trail, setTrail] = useState([]);

  useEffect(() => {
    if (isMoving) {
      setTrail(prev => [
        { x: position.x, y: position.y, id: Date.now() },
        ...prev.slice(0, 8)
      ]);
    }
  }, [position, isMoving]);

  if (isMobile) return null;

  return (
    <>
      {/* Cursor Trail */}
      {trail.map((point, index) => (
        <motion.div
          key={point.id}
          className="fixed pointer-events-none z-50 rounded-full"
          style={{
            left: point.x,
            top: point.y,
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'rgba(56, 189, 248, 0.2)',
            width: `${20 - index * 2}px`,
            height: `${20 - index * 2}px`,
            zIndex: 40 + index
          }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{
            scale: 1,
            opacity: 0.3 - index * 0.03,
            x: [0, (Math.random() - 0.5) * 20],
            y: [0, (Math.random() - 0.5) * 20]
          }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        />
      ))}

      {/* Main Animated Cursor */}
      <motion.div
        ref={cursorRef}
        className="fixed pointer-events-none z-50 rounded-full border-2 border-cyan-400 backdrop-blur-sm"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)'
        }}
        animate={cursorVariant}
        variants={cursorVariants}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          duration: 0.1
        }}
      >
        {/* Inner glow */}
        <div className="absolute inset-2 rounded-full bg-gradient-to-br from-white/20 to-transparent" />

        {/* Animated ring */}
        {isMoving && (
          <motion.div
            className="absolute -inset-2 rounded-full border-2 border-cyan-400/50"
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.7, 0, 0.7]
            }}
            transition={{
              duration: 0.8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        )}
      </motion.div>

      {/* Magnetic Effect Area */}
      <div
        className="fixed pointer-events-none z-45"
        style={{
          left: position.x - 50,
          top: position.y - 50,
          width: '100px',
          height: '100px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.1) 0%, transparent 70%)'
        }}
      />
    </>
  );
};

export default AnimatedCursor;