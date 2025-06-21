'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

interface ScrollIndicatorProps {
  show: boolean;
}

const ScrollIndicator = ({ show }: ScrollIndicatorProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 h-32 pointer-events-none z-20"
        >
          {/* Degradado más intenso para modo claro */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/20 via-primary/10 to-transparent dark:from-primary/10 dark:via-primary/5" />
          
          {/* Flechas animadas con colores más oscuros */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <motion.div
              animate={{ 
                y: [0, 8, 0],
                opacity: [0.6, 1, 0.6]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center space-y-1"
            >
              <ChevronDown size={20} className="text-primary dark:text-primary/60 light:text-green-700" />
              <ChevronDown size={16} className="text-primary/80 dark:text-primary/40 light:text-green-600" />
              <ChevronDown size={12} className="text-primary/60 dark:text-primary/20 light:text-green-500" />
            </motion.div>
            
            {/* Texto más visible */}
            <motion.p
              animate={{ opacity: [0.7, 1, 0.7] }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-xs text-gray-800 dark:text-text-tertiary mt-2 font-mono font-medium"
            >
              Desliza para ver más
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;