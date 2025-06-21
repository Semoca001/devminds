'use client';

import { motion } from 'framer-motion';
import { ReactNode, useEffect, useState } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';

interface DiagonalFlowBackgroundProps {
  children: ReactNode;
  className?: string;
}

const DiagonalFlowBackground = ({ children, className = '' }: DiagonalFlowBackgroundProps) => {
  const [mounted, setMounted] = useState(false);
  
  // Solo usar el hook después de que el componente esté montado
  let theme = 'light';
  
  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
  } catch {
    // Si falla, usar tema claro por defecto hasta que se monte el provider
    theme = 'light';
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  const darkThemeStyles = {
    // Líneas horizontales oscuras
    horizontal: 'repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255, 255, 255, 0.08) 49px, rgba(255, 255, 255, 0.08) 50px)',
    // Líneas verticales oscuras  
    vertical: 'repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255, 255, 255, 0.08) 49px, rgba(255, 255, 255, 0.08) 50px)',
    // Degradado diagonal oscuro
    diagonal: 'linear-gradient(135deg, transparent 25%, rgba(0, 255, 136, 0.1) 50%, transparent 75%)'
  };

  const lightThemeStyles = {
    // Líneas horizontales claras
    horizontal: 'repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(0, 0, 0, 0.05) 49px, rgba(0, 0, 0, 0.05) 50px)',
    // Líneas verticales claras
    vertical: 'repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(0, 0, 0, 0.05) 49px, rgba(0, 0, 0, 0.05) 50px)',
    // Degradado diagonal claro
    diagonal: 'linear-gradient(135deg, transparent 25%, rgba(0, 255, 136, 0.08) 50%, transparent 75%)'
  };

  // Usar tema claro por defecto hasta que se monte, luego usar el tema actual
  const currentStyles = (mounted && theme === 'dark') ? darkThemeStyles : lightThemeStyles;

  return (
    <div className={`relative ${className}`}>
      {/* Capa 1: Líneas horizontales */}
      <motion.div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: currentStyles.horizontal,
        }}
      />
      
      {/* Capa 2: Líneas verticales */}
      <motion.div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: currentStyles.vertical,
        }}
      />
      
      {/* Capa 3: Degradado diagonal animado */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: currentStyles.diagonal,
          backgroundSize: '400% 400%',
        }}
        animate={{
          backgroundPosition: ['-200% -200%', '200% 200%'],
        }}
        transition={{
          duration: 14,
          ease: 'linear',
          repeat: Infinity,
        }}
      />
      
      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DiagonalFlowBackground;