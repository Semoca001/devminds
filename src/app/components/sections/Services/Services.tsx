'use client';

import { useTranslations } from 'next-intl';

const Services = () => {
  const t = useTranslations('Services');

  const services = [
    { key: 'web', icon: '🌐' },
    { key: 'software', icon: '💻' },
    { key: 'consulting', icon: '🔍' },
    { key: 'support', icon: '🛠️' }
  ];

  return (
    <section className="container-main section-spacing">
      <div className="max-w-6xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="title-section mb-4">
            {t('title')}
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        {/* Grid de servicios */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {services.map((service) => (
            <div key={service.key} className="card text-center hover:border-primary transition-colors duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="title-sub mb-3">
                {t(`${service.key}.title`)}
              </h3>
              <p className="text-small mb-4">
                {t(`${service.key}.description`)}
              </p>
            </div>
          ))}
        </div>
        
        {/* CTA */}
        <div className="text-center">
          <button className="btn-secondary">
            {t('ctaButton')}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;