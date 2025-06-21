'use client';

import { useTranslations } from 'next-intl';

const Projects = () => {
  const t = useTranslations('Projects');

  const projects = [
    { key: 'project1', tech: 'React, Node.js, MongoDB' },
    { key: 'project2', tech: 'Next.js, TypeScript, PostgreSQL' },
    { key: 'project3', tech: 'Vue.js, Express, MySQL' }
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
        
        {/* Grid de proyectos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {projects.map((project) => (
            <div key={project.key} className="card hover:border-primary transition-colors duration-300">
              {/* Placeholder para imagen */}
              <div className="w-full h-48 bg-carbon rounded mb-4 flex items-center justify-center">
                <span className="text-text-tertiary text-sm">Imagen del proyecto</span>
              </div>
              
              <h3 className="title-sub mb-2">
                {t(`${project.key}.title`)}
              </h3>
              
              <p className="text-small mb-3">
                {t(`${project.key}.description`)}
              </p>
              
              <div className="text-code text-xs">
                {project.tech}
              </div>
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

export default Projects;