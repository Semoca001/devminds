'use client';

import { useTranslations } from 'next-intl';

const CallToAction = () => {
  const t = useTranslations('CTA');

  return (
    <div className="container-main section-spacing">
      <div className="text-center max-w-4xl mx-auto">
        
        {/* Título principal */}
        <h3 className="title-section mb-4 md:mb-6">
          {t('title')}
        </h3>
        
        {/* Descripción */}
        <p className="text-body max-w-2xl mx-auto mb-8 md:mb-10">
          {t('description')}
        </p>

        {/* Botón CTA */}
        <button className="btn-primary text-sm md:text-base lg:text-lg px-8 md:px-10 py-4 md:py-5">
          {t('buttonText')}
        </button>

        {/* Información adicional */}
        <p className="text-small mt-6 md:mt-8">
          {t('responseTime')}
        </p>

        {/* Lista de características */}
        <div className="card mt-8 md:mt-10 max-w-2xl mx-auto">
          <ul className="text-left space-y-2 text-base">
            <li className="text-success">✓ {t('feature1')}</li>
            <li className="text-success">✓ {t('feature2')}</li>
            <li className="text-success">✓ {t('feature3')}</li>
          </ul>
          <p className="text-primary mt-4 text-sm">
            {t('status')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;