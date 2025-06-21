'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import LanguageOptions from './LanguageOptions';
import { useTheme } from '@/app/contexts/ThemeContext';

interface LanguageSwitcherProps {
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ direction = 'vertical', className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  
  // Obtener el tema actual (con fallback)
  let theme = 'light';
  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
  } catch {
    theme = 'light';
  }
  
  const currentLocale = pathname.split('/')[1];
  
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (switcherRef.current && !switcherRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);
  
  const handleLanguageChange = (locale: string) => {
    const pathnameParts = pathname.split('/');
    pathnameParts[1] = locale;
    const newPath = pathnameParts.join('/');
    
    router.push(newPath);
    setIsOpen(false);
  };

  // Seleccionar icono según el tema
  const getTranslateIcon = () => {
    return theme === 'light' 
      ? '/images/translate-dark.svg'
      : '/images/translate.svg';
  };

  return (
    <div className={`relative ${className}`} ref={switcherRef}>
      {/* Botón de idioma */}
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center text-main hover:text-primary transition-colors duration-300 p-2 focus:outline-none"
        aria-label="Cambiar idioma"
      >
        <Image
          src={getTranslateIcon()}
          alt="Cambiar idioma"
          width={24}
          height={24}
        />
      </button>
      
      {/* Componente de opciones de idioma */}
      <LanguageOptions 
        isOpen={isOpen}
        currentLocale={currentLocale}
        direction={direction}
        handleLanguageChange={handleLanguageChange}
      />
    </div>
  );
};

export default LanguageSwitcher;