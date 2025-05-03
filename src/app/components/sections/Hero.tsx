// src/components/sections/Hero.tsx
'use client';

import { useTranslations } from 'next-intl';

const Hero = () => {
  const t = useTranslations('Hero');
  
  return (
    <div className="about-us-container">
      <p className="text-lg md:text-xl text-justify break-words">
        {t('aboutText')}
      </p>
    </div>
  );
};

export default Hero;