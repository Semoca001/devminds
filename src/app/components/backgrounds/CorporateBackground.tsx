'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';

interface CorporateBackgroundProps {
  children: ReactNode;
  className?: string;
}

const CorporateBackground = ({ children, className = '' }: CorporateBackgroundProps) => {
  const [mounted, setMounted] = useState(false);
  
  let theme = 'light';
  
  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
  } catch {
    theme = 'light';
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  const darkThemeStyles = {
    // Grid corporativo sutil
    grid: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
    // Accent corporativo
    accent: 'linear-gradient(45deg, transparent 49%, rgba(0, 255, 136, 0.05) 50%, transparent 51%)',
    // Vignette profesional
    vignette: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.1) 100%)'
  };

  const lightThemeStyles = {
    // Grid corporativo más visible
    grid: 'linear-gradient(rgba(0, 0, 0, 0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 0, 0, 0.15) 1px, transparent 1px)',
    // Accent verde más intenso
    accent: 'linear-gradient(45deg, transparent 49%, rgba(0, 160, 90, 0.2) 50%, transparent 51%)',
    // Vignette más pronunciado
    vignette: 'radial-gradient(ellipse at center, transparent 0%, rgba(0, 0, 0, 0.08) 100%)'
  };

  const currentStyles = (mounted && theme === 'dark') ? darkThemeStyles : lightThemeStyles;

  return (
    <div className={`relative ${className}`}>
      {/* Grid de fondo corporativo con difuminado */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: currentStyles.grid,
          backgroundSize: '40px 40px',
          filter: 'blur(0.5px)', // Difuminado sutil para suavizar las líneas
        }}
      />
      
      {/* Líneas de acento dinámicas con difuminado */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: currentStyles.accent,
          backgroundSize: '80px 80px',
          filter: 'blur(0.3px)', // Difuminado muy sutil para las líneas de acento
        }}
        animate={{
          backgroundPosition: ['0px 0px', '80px 80px'],
        }}
        transition={{
          duration: 25,
          ease: 'linear',
          repeat: Infinity,
        }}
      />

      {/* Vignette para profundidad */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: currentStyles.vignette,
        }}
      />

      {/* Efecto de brillo sutil en la parte superior */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-1/3"
        style={{
          background: theme === 'dark' 
            ? 'linear-gradient(180deg, rgba(0, 255, 136, 0.02) 0%, transparent 100%)'
            : 'linear-gradient(180deg, rgba(0, 140, 80, 0.12) 0%, transparent 100%)',
          filter: 'blur(1px)', // Difuminado para el efecto de brillo
        }}
        animate={{
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 6,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      {/* Capa de difuminado general muy sutil para unificar todo */}
      <div 
        className="absolute inset-0 backdrop-blur-[0.5px]"
        style={{
          background: theme === 'dark' 
            ? 'rgba(0, 0, 0, 0.01)' 
            : 'rgba(255, 255, 255, 0.02)',
        }}
      />
      
      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default CorporateBackground;