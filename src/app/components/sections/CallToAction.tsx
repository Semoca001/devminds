'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

const CallToAction = () => {
  const t = useTranslations('CTA');

  return (
    <div className="w-full mx-auto px-6 lg:px-12 py-12 md:py-16 lg:py-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="text-center max-w-4xl mx-auto"
      >
        {/* Terminal prompt line */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          className="font-mono text-sm md:text-base text-primary-400 mb-6 md:mb-8"
        >
          <span className="text-gray-500">user@devminds:~$</span> {t('terminalCommand')}
        </motion.div>

        {/* Main CTA content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mb-8 md:mb-10"
        >
          <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4 md:mb-6">
            {t('title')}
          </h3>
          <p className="text-gray-300 text-sm md:text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            {t('description')}
          </p>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
        >
          <button className="group relative inline-flex items-center px-8 md:px-10 py-4 md:py-5 bg-transparent border-2 border-primary-400 text-primary-400 font-mono text-sm md:text-base lg:text-lg font-medium transition-all duration-300 hover:bg-primary-400 hover:text-[#191919] hover:shadow-lg hover:shadow-primary-400/25">
            {/* Terminal prompt indicator */}
            <span className="mr-3 transition-transform duration-300 group-hover:scale-110">
              $
            </span>
            
            {/* Button text - fijo, sin cambios */}
            <span>
              {t('buttonText')}
            </span>
            
            {/* Animated cursor */}
            <span className="ml-2 text-primary-400 group-hover:text-[#191919] animate-pulse">
              _
            </span>

            {/* Hover effect overlay */}
            <div className="absolute inset-0 bg-primary-400 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
          </button>
        </motion.div>

        {/* Additional info line */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          className="mt-6 md:mt-8"
        >
          <p className="font-mono text-xs md:text-sm text-gray-500">
            {t('responseTime')}
          </p>
        </motion.div>

        {/* Terminal output simulation */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.6 }}
          className="mt-8 md:mt-10 p-4 md:p-6 bg-[#0a0a0a] border border-white/10 rounded font-mono text-xs md:text-sm text-left max-w-2xl mx-auto"
        >
          <div className="text-green-400 mb-2">
            ✓ {t('feature1')}
          </div>
          <div className="text-green-400 mb-2">
            ✓ {t('feature2')}
          </div>
          <div className="text-green-400 mb-2">
            ✓ {t('feature3')}
          </div>
          <div className="text-primary-400 mt-4">
            {'>'} {t('status')}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default CallToAction;