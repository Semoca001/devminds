'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface DiagonalFlowBackgroundProps {
  children: ReactNode;
  className?: string;
}

const DiagonalFlowBackground = ({ children, className = '' }: DiagonalFlowBackgroundProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* Capa 1: Líneas horizontales */}
      <motion.div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 49px, rgba(255, 255, 255, 0.08) 49px, rgba(255, 255, 255, 0.08) 50px)',
        }}
      />
      
      {/* Capa 2: Líneas verticales */}
      <motion.div
        className="absolute inset-0 opacity-8"
        style={{
          backgroundImage: 'repeating-linear-gradient(90deg, transparent, transparent 49px, rgba(255, 255, 255, 0.08) 49px, rgba(255, 255, 255, 0.08) 50px)',
        }}
      />
      
      {/* Capa 3: Degradado diagonal animado */}
      <motion.div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(135deg, transparent 25%, rgba(0, 255, 136, 0.1) 50%, transparent 75%)',
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