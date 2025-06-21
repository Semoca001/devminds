'use client';

import { useState, useEffect } from 'react';

export const useScrollReveal = (threshold: number = 100) => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      
      if (currentScrollY > threshold && !hasScrolled) {
        setHasScrolled(true);
      }
    };

    // Verificar posición inicial
    handleScroll();

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, hasScrolled]);

  return { hasScrolled, scrollY };
};