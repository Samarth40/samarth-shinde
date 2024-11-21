import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
      scale: 1,
    },
    hover: {
      x: mousePosition.x - 40,
      y: mousePosition.y - 40,
      scale: 2,
    },
  };

  return (
    <>
      <motion.div
        className="cursor-dot-outline fixed top-0 left-0 w-8 h-8 pointer-events-none z-50"
        animate={isHovering ? 'hover' : 'default'}
        variants={variants}
        transition={{
          type: 'spring',
          stiffness: 500,
          damping: 28,
        }}
      >
        <svg width="100%" height="100%" viewBox="0 0 32 32">
          <circle
            cx="16"
            cy="16"
            r="12"
            fill="none"
            stroke="#64ffda"
            strokeWidth="1"
            strokeDasharray="60 60"
            strokeDashoffset={isHovering ? -180 : 0}
            className="transition-all duration-300"
          />
        </svg>
      </motion.div>
      <motion.div
        className="cursor-dot fixed top-0 left-0 w-3 h-3 bg-primary rounded-full pointer-events-none z-50 mix-blend-difference"
        animate={{
          x: mousePosition.x - 6,
          y: mousePosition.y - 6,
        }}
        transition={{
          type: 'spring',
          stiffness: 1000,
          damping: 28,
        }}
      />
    </>
  );
};

export default CustomCursor;
