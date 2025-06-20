'use client';

import { useTranslations } from 'next-intl';

const Contact = () => {
  const t = useTranslations('Contact');

  return (
    <section className="container-main section-spacing">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="title-section mb-4">
            {t('title')}
          </h2>
          <p className="text-body max-w-2xl mx-auto">
            {t('subtitle')}
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Formulario con glassmorphism */}
          <div className="card-glass">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  {t('form.name')}
                </label>
                <input 
                  type="text" 
                  className="w-full px-4 py-3 bg-white/50 dark:bg-main backdrop-blur-sm border border-white/30 dark:border-border-primary rounded focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-main"
                  placeholder={t('form.namePlaceholder')}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  {t('form.email')}
                </label>
                <input 
                  type="email" 
                  className="w-full px-4 py-3 bg-white/50 dark:bg-main backdrop-blur-sm border border-white/30 dark:border-border-primary rounded focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all text-main"
                  placeholder={t('form.emailPlaceholder')}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-secondary mb-2">
                  {t('form.message')}
                </label>
                <textarea 
                  rows={5}
                  className="w-full px-4 py-3 bg-white/50 dark:bg-main backdrop-blur-sm border border-white/30 dark:border-border-primary rounded focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none text-main"
                  placeholder={t('form.messagePlaceholder')}
                ></textarea>
              </div>
              
              <button type="submit" className="btn-primary w-full">
                {t('form.submit')}
              </button>
            </form>
          </div>
          
          {/* Info de contacto */}
          <div className="space-y-6">
            <div className="card-soft hover:bg-white/80 dark:hover:bg-dark-gray/80 transition-all duration-300">
              <h3 className="title-sub mb-3 text-primary">
                {t('info.responseTime.title')}
              </h3>
              <p className="text-small">
                {t('info.responseTime.description')}
              </p>
            </div>
            
            <div className="card-soft hover:bg-white/80 dark:hover:bg-dark-gray/80 transition-all duration-300">
              <h3 className="title-sub mb-3 text-primary">
                {t('info.email.title')}
              </h3>
              <p className="text-small">
                {t('info.email.description')}
              </p>
            </div>
            
            <div className="text-center">
              <button className="btn-ghost">
                {t('detailedContact')}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;