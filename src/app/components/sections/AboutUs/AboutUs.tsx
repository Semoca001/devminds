'use client';

import { useTranslations } from 'next-intl';

const AboutUs = () => {
  const t = useTranslations('AboutUs');

  return (
    <section className="container-main section-spacing">
      <div className="max-w-4xl mx-auto text-center">
        {/* Título */}
        <h2 className="title-section mb-6 md:mb-8">
          {t('title')}
        </h2>
        
        {/* Descripción principal */}
        <p className="text-body mb-8 md:mb-10">
          {t('description')}
        </p>
        
        {/* Valores en cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="card-simple text-center">
            <h3 className="title-sub mb-3 text-primary">
              {t('value1.title')}
            </h3>
            <p className="text-small">
              {t('value1.description')}
            </p>
          </div>
          
          <div className="card-simple text-center">
            <h3 className="title-sub mb-3 text-primary">
              {t('value2.title')}
            </h3>
            <p className="text-small">
              {t('value2.description')}
            </p>
          </div>
          
          <div className="card-simple text-center">
            <h3 className="title-sub mb-3 text-primary">
              {t('value3.title')}
            </h3>
            <p className="text-small">
              {t('value3.description')}
            </p>
          </div>
        </div>
        
        {/* CTA */}
        <button className="btn-secondary">
          {t('ctaButton')}
        </button>
      </div>
    </section>
  );
};

export default AboutUs;