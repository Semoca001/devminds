'use client';

import { useState, useEffect, useRef } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { locales } from '@/config/i18n-config';

interface LanguageSwitcherProps {
  direction?: 'horizontal' | 'vertical';
  className?: string;
}

const LanguageSwitcher: React.FC<LanguageSwitcherProps> = ({ direction = 'vertical', className = '' }) => {
  const [isOpen, setIsOpen] = useState(false);
  const switcherRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  const router = useRouter();
  
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

  const containerVariants = {
    vertical: {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0 },
      exit: { opacity: 0, y: 20 }
    },
    horizontal: {
      hidden: { opacity: 0, x: 20 },
      visible: { opacity: 1, x: 0 },
      exit: { opacity: 0, x: 20 }
    }
  };
  
  return (
    <div className={`relative ${className}`} ref={switcherRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="text-white p-2 focus:outline-none relative z-20"
        aria-label="Cambiar idioma"
      >
        <Image
          src="/images/translate.svg"
          alt="Cambiar idioma"
          width={24}
          height={24}
        />
      </button>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={containerVariants[direction]}
            transition={{ duration: 0.2 }}
            className={`absolute z-10 ${
              direction === 'vertical' 
                ? 'bottom-full left-0 mb-2'
                : 'top-0 right-full mr-2'
            }`}
          >
            <ul className={`${
              direction === 'vertical' 
                ? 'flex flex-col space-y-2'
                : 'flex space-x-2'
            }`}>
              {locales.map((locale) => (
                <li key={locale}>
                  <button
                    onClick={() => handleLanguageChange(locale)}
                    className={`px-3 py-1 text-sm rounded transition-colors ${
                      currentLocale === locale 
                        ? 'bg-white text-[#191919]' 
                        : 'text-white hover:bg-white/10'
                    }`}
                  >
                    {locale.toUpperCase()}
                  </button>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguageSwitcher;