"use client";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <div className="hero-container w-full mx-auto px-6 lg:px-12 py-8 md:py-12 lg:py-16">
      {/* Título con animación */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 md:mb-5 lg:mb-6 leading-tight break-words"
        dangerouslySetInnerHTML={{ __html: t.raw("title") }}
      />

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="break-words max-w-3xl text-sm sm:text-base md:text-lg lg:text-xl text-primary-300 mb-5 md:mb-6 lg:mb-8 font-medium"
      >
        {t("subtitle")}
      </motion.h2>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="break-words text-xs sm:text-sm md:text-base lg:text-lg text-gray-300 leading-relaxed md:leading-loose space-y-3"
      >
        {t("aboutText")}
      </motion.div>
    </div>
  );
};

export default Hero;
