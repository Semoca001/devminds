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
          {/* Degradado de luz tenue */}
          <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-primary/5 to-transparent" />
          
          {/* Flechas animadas */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
            <motion.div
              animate={{ 
                y: [0, 8, 0],
                opacity: [0.4, 1, 0.4]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="flex flex-col items-center space-y-1"
            >
              <ChevronDown size={20} className="text-primary/60" />
              <ChevronDown size={16} className="text-primary/40" />
              <ChevronDown size={12} className="text-primary/20" />
            </motion.div>
            
            {/* Texto sutil */}
            <motion.p
              animate={{ opacity: [0.6, 1, 0.6] }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="text-xs text-text-tertiary mt-2 font-mono"
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