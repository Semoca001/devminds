'use client';
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface OverlayAnimationProps {
  isOpen: boolean;
  sidebarWidth?: string;
  children?: React.ReactNode;
  onClose?: () => void;
}

export const OverlayAnimation = ({ 
  isOpen, 
  sidebarWidth = '5rem', 
  children,
  onClose
}: OverlayAnimationProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Variantes de animación mejoradas
  const overlayVariants = {
    mobile: {
      hidden: { y: '-100%', opacity: 0 },
      visible: { 
        y: 0, 
        opacity: 1,
        transition: { 
          type: 'spring', 
          damping: 20,
          stiffness: 100,
          duration: 0.3 
        } 
      },
      exit: { 
        y: '-100%', 
        opacity: 0,
        transition: { 
          ease: 'easeIn', 
          duration: 0.2 
        } 
      }
    },
    desktop: {
      hidden: { x: '-100%', opacity: 0 },
      visible: { 
        x: 0, 
        opacity: 1,
        transition: { 
          type: 'spring',
          damping: 20,
          stiffness: 80,
          duration: 0.4
        } 
      },
      exit: { 
        x: '-100%', 
        opacity: 0,
        transition: { 
          ease: 'easeIn', 
          duration: 0.25 
        } 
      }
    }
  };

  // Cerrar al hacer clic fuera en móvil
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (isMobile && e.target === e.currentTarget && onClose) {
      onClose();
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
          onClick={handleOverlayClick}
          style={{
            top: 0,
            left: isMobile ? 0 : sidebarWidth,
            width: isMobile ? '100%' : `calc(100% - ${sidebarWidth})`,
            height: isMobile ? '100vh' : '100%',
            overflowY: 'auto'
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