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
    // Patrón de puntos empresarial
    dots: 'radial-gradient(circle at 1px 1px, rgba(255, 255, 255, 0.15) 1px, transparent 0)',
    // Líneas sutiles horizontales
    lines: 'linear-gradient(90deg, transparent 24px, rgba(255, 255, 255, 0.05) 25px, rgba(255, 255, 255, 0.05) 26px, transparent 27px)',
    // Gradiente diagonal profesional
    gradient: 'linear-gradient(135deg, rgba(0, 255, 136, 0.03) 0%, transparent 25%, rgba(0, 255, 136, 0.08) 50%, transparent 75%, rgba(0, 255, 136, 0.03) 100%)',
    // Efecto de profundidad
    depth: 'radial-gradient(ellipse at top, rgba(0, 255, 136, 0.1) 0%, transparent 50%)'
  };

  const lightThemeStyles = {
    // Patrón de puntos más visibles
    dots: 'radial-gradient(circle at 1px 1px, rgba(0, 0, 0, 0.25) 1px, transparent 0)',
    // Líneas más contrastantes 
    lines: 'linear-gradient(90deg, transparent 24px, rgba(0, 0, 0, 0.12) 25px, rgba(0, 0, 0, 0.12) 26px, transparent 27px)',
    // Gradiente verde más intenso y visible
    gradient: 'linear-gradient(135deg, rgba(0, 180, 100, 0.15) 0%, transparent 25%, rgba(0, 200, 120, 0.25) 50%, transparent 75%, rgba(0, 180, 100, 0.15) 100%)',
    // Efecto de luz más prominente
    depth: 'radial-gradient(ellipse at top, rgba(0, 150, 90, 0.2) 0%, transparent 40%)'
  };

  // Usar tema claro por defecto hasta que se monte, luego usar el tema actual
  const currentStyles = (mounted && theme === 'dark') ? darkThemeStyles : lightThemeStyles;

  return (
    <div className={`relative ${className}`}>
      {/* Capa 1: Patrón de puntos empresarial */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: currentStyles.dots,
          backgroundSize: '25px 25px',
        }}
      />
      
      {/* Capa 2: Líneas sutiles */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: currentStyles.lines,
          backgroundSize: '50px 50px',
        }}
      />
      
      {/* Capa 3: Gradiente diagonal animado profesional */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: currentStyles.gradient,
          backgroundSize: '200% 200%',
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
          repeatType: 'reverse'
        }}
      />
      
      {/* Capa 4: Efecto de profundidad sutil */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: currentStyles.depth,
          backgroundSize: '100% 100%',
        }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
        }}
        transition={{
          duration: 8,
          ease: 'easeInOut',
          repeat: Infinity,
        }}
      />

      {/* Capa 5: Overlay para mejor legibilidad - adaptativo */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/5 dark:to-main/5" />
      
      {/* Contenido */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default DiagonalFlowBackground;