// src/app/effects/OverlayAnimation.tsx
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

  // Variantes de animación
  const overlayVariants = {
    mobile: {
      hidden: { y: '-100%', x: 0 },
      visible: { y: 0, x: 0, transition: { type: 'tween', ease: 'easeOut', duration: 0.3 } },
      exit: { y: '-100%', x: 0, transition: { type: 'tween', ease: 'easeIn', duration: 0.2 } }
    },
    desktop: {
      hidden: { x: '-100%', y: 0 },
      visible: { x: 0, y: 0, transition: { type: 'tween', ease: 'easeOut', duration: 0.3 } },
      exit: { x: '-100%', y: 0, transition: { type: 'tween', ease: 'easeIn', duration: 0.2 } }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bg-[#191919] z-10 border border-white/20"
          variants={overlayVariants[isMobile ? 'mobile' : 'desktop']}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            top: 0,
            left: isMobile ? 0 : sidebarWidth,
            width: isMobile ? '100%' : `calc(100% - ${sidebarWidth})`,
            height: isMobile ? '100vh' : '100%',
          }}
        >
          {children || (
            <div className="h-full w-full flex justify-center items-center">
              <div className="p-10 text-white text-xl">
                Contenido del overlay
              </div>
            </div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
};