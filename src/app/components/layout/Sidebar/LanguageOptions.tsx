'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { locales } from '@/config/i18n-config';

interface LanguageOptionsProps {
  isOpen: boolean;
  currentLocale: string;
  direction: 'horizontal' | 'vertical';
  handleLanguageChange: (locale: string) => void;
}

const LanguageOptions: React.FC<LanguageOptionsProps> = ({ 
  isOpen, 
  currentLocale, 
  direction, 
  handleLanguageChange 
}) => {
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
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={containerVariants[direction]}
          transition={{ duration: 0.2 }}
          className={`
            z-40 
            ${direction === 'vertical' 
              ? 'absolute bottom-full left-0 right-0 mb-2 flex justify-center' 
              : 'absolute right-full top-0 bottom-0 mr-2 flex items-center'
            }
          `}
        >
          <ul className={`
            bg-secondary border-2 border-sidebar rounded-lg p-1 shadow-lg
            ${direction === 'vertical' 
              ? 'flex flex-col items-center space-y-1' 
              : 'flex space-x-1'
            }
          `}>
            {locales.map((locale) => (
              <li key={locale}>
                <button
                  onClick={() => handleLanguageChange(locale)}
                  className={`px-3 py-1 text-sm rounded transition-colors duration-300 ${
                    currentLocale === locale 
                      ? 'bg-primary text-black font-medium' 
                      : 'text-main hover:bg-primary hover:text-black'
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
  );
};

export default LanguageOptions;