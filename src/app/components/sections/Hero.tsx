'use client';
import { useTranslations } from 'next-intl';
import { motion } from 'framer-motion';

const Hero = () => {
  const t = useTranslations('Hero');

  return (
    <div className="hero-container max-w-7xl mx-auto px-6 lg:px-12 py-12 md:py-16 lg:py-20">
      {/* Título con animación */}
      <motion.h1
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 md:mb-8 lg:mb-10 leading-tight break-words text-balance"
  dangerouslySetInnerHTML={{ __html: t.raw('title') }}
/>


      {/* Subtítulo */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="break-words max-w-3xl text-lg sm:text-xl md:text-2xl lg:text-3xl text-primary-300 mb-8 md:mb-10 lg:mb-12 font-medium"
      >
        {t('subtitle')}
      </motion.h2>

      {/* Texto principal con animación */}
      <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  className="break-words text-base sm:text-lg md:text-xl lg:text-2xl text-gray-300 leading-relaxed md:leading-loose space-y-6"
>
  {t('aboutText')}
</motion.div>
    </div>
  );
};

export default Hero;
