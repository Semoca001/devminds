'use client';

import { ReactNode, useEffect, useState } from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';
import DiagonalFlowBackground from './DiagonalFlowBackground';
import CorporateBackground from './CorporateBackground';

interface AdaptiveBackgroundProps {
  children: ReactNode;
  className?: string;
}

const AdaptiveBackground = ({ children, className = '' }: AdaptiveBackgroundProps) => {
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

  // Usar CorporateBackground para modo claro, DiagonalFlowBackground para modo oscuro
  const BackgroundComponent = (mounted && theme === 'dark') 
    ? DiagonalFlowBackground 
    : CorporateBackground;

  return (
    <BackgroundComponent className={className}>
      {children}
    </BackgroundComponent>
  );
};

export default AdaptiveBackground;