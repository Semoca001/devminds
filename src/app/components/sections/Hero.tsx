"use client";
import { useTranslations } from "next-intl";

const Hero = () => {
  const t = useTranslations("Hero");

  return (
    <div className="container-main section-spacing">
      <h1
        className="title-section mb-4 md:mb-6"
        dangerouslySetInnerHTML={{ __html: t.raw("title") }}
      />

      <h2 className="title-sub text-primary mb-6 md:mb-8">
        {t("subtitle")}
      </h2>

      <p className="text-body max-w-4xl">
        {t("aboutText")}
      </p>
    </div>
  );
};

export default Hero;