'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface ScrollRevealWrapperProps {
  children: ReactNode;
  isVisible: boolean;
  delay?: number;
  className?: string;
}

const ScrollRevealWrapper = ({ 
  children, 
  isVisible, 
  delay = 0,
  className = '' 
}: ScrollRevealWrapperProps) => {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 60,
        filter: 'blur(10px)'
      }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 60,
        filter: isVisible ? 'blur(0px)' : 'blur(10px)'
      }}
      transition={{ 
        duration: 0.8,
        delay: delay,
        ease: [0.25, 0.25, 0, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollRevealWrapper;