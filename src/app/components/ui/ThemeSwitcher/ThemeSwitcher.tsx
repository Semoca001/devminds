'use client';

import { useTheme } from '@/app/contexts/ThemeContext';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useEffect, useState } from 'react';

interface ThemeSwitcherProps {
  className?: string;
}

const ThemeSwitcher: React.FC<ThemeSwitcherProps> = ({ className = '' }) => {
  const [mounted, setMounted] = useState(false);
  
  // Solo usar el hook después de que el componente esté montado
  let theme = 'dark';
  let toggleTheme = () => {};
  
  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
    toggleTheme = themeContext.toggleTheme;
  } catch (error) {
    // Si falla, usar valores por defecto hasta que se monte el provider
  }

  useEffect(() => {
    setMounted(true);
  }, []);

  // No renderizar hasta que esté montado para evitar hydration mismatch
  if (!mounted) {
    return (
      <div className="relative flex items-center justify-center p-2 w-10 h-10">
        <div className="w-6 h-6 rounded-full bg-gray-300 animate-pulse" />
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className={`relative flex items-center justify-center p-2 text-text-primary hover:text-primary transition-colors duration-300 focus:outline-none ${className}`}
      aria-label={theme === 'light' ? 'Cambiar a modo oscuro' : 'Cambiar a modo claro'}
    >
      <motion.div
        initial={false}
        animate={{ 
          rotate: theme === 'light' ? 0 : 180,
          scale: theme === 'light' ? 1 : 0.8
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {theme === 'light' ? (
          <Sun size={24} className="text-yellow-500" />
        ) : (
          <Moon size={24} className="text-blue-400" />
        )}
      </motion.div>
      
      {/* Efecto de fondo sutil */}
      <motion.div
        className="absolute inset-0 rounded-full bg-primary/10"
        initial={{ scale: 0, opacity: 0 }}
        whileHover={{ scale: 1, opacity: 1 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      />
    </button>
  );
};

export default ThemeSwitcher;