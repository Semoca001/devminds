// src/app/components/Overlay.tsx
'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

interface OverlayProps {
  isOpen: boolean;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Variantes de animación optimizadas
  const overlayVariants = {
    mobile: {
      hidden: { y: '-100%', x: 0 }, // Solo animación vertical
      visible: { 
        y: 0, 
        x: 0,
        transition: { 
          type: 'tween', 
          ease: 'easeOut', 
          duration: 0.3 
        } 
      },
      exit: { 
        y: '-100%', // Solo se desliza hacia arriba
        x: 0,
        transition: { 
          type: 'tween', 
          ease: 'easeIn', 
          duration: 0.2 
        } 
      }
    },
    desktop: {
      hidden: { x: '-100%', y: 0 }, // Solo animación horizontal
      visible: { 
        x: 0, 
        y: 0,
        transition: { 
          type: 'tween', 
          ease: 'easeOut', 
          duration: 0.3 
        } 
      },
      exit: { 
        x: '-100%', // Solo se desliza hacia la izquierda
        y: 0,
        transition: { 
          type: 'tween', 
          ease: 'easeIn', 
          duration: 0.2 
        } 
      }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed bg-[#191919] z-10 border-2 border-white"
          variants={overlayVariants[isMobile ? 'mobile' : 'desktop']}
          initial="hidden"
          animate="visible"
          exit="exit"
          style={{
            top: 0,
            left: isMobile ? 0 : '5rem', // Ajusta según ancho del sidebar
            width: isMobile ? '100%' : 'calc(100% - 5rem)',
            height: isMobile ? '100vh' : '100%', // Altura completa en móvil
          }}
        >
          <div className="h-full w-full flex justify-center items-center">
            <div className="p-10 text-white text-xl">
              Hola Mundo
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Overlay;