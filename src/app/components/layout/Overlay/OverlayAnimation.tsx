'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface OverlayAnimationProps {
  isOpen: boolean;
  sidebarWidth?: string;
  children?: React.ReactNode;
}

export const OverlayAnimation = ({ isOpen, sidebarWidth = '5rem', children }: OverlayAnimationProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const overlayVariants = {
    mobile: {
      hidden: { y: '-100%', x: 0 },
      visible: { 
        y: 0, 
        x: 0, 
        transition: { 
          type: 'tween', 
          ease: 'easeOut', 
          duration: 0.5 
        } 
      },
      exit: { 
        y: '-100%', 
        x: 0, 
        transition: { 
          type: 'tween', 
          ease: 'easeIn', 
          duration: 0.3 
        } 
      }
    },
    desktop: {
      hidden: { x: '-100%', y: 0 },
      visible: { 
        x: 0, 
        y: 0, 
        transition: { 
          type: 'tween', 
          ease: 'easeOut', 
          duration: 0.5 
        } 
      },
      exit: { 
        x: '-100%', 
        y: 0, 
        transition: { 
          type: 'tween', 
          ease: 'easeIn', 
          duration: 0.3 
        } 
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bg-dark-gray z-[9999] border border-border-primary"
          variants={overlayVariants[isMobile ? 'mobile' : 'desktop']}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            top: isMobile ? '5rem' : 0, // En mobile empieza después del sidebar horizontal
            left: isMobile ? 0 : sidebarWidth, // En desktop empieza después del sidebar vertical
            width: isMobile ? '100%' : `calc(100% - ${sidebarWidth})`,
            height: isMobile ? 'calc(100vh - 5rem)' : '100vh', // En mobile resta la altura del sidebar
          }}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};