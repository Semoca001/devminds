'use client';
import { OverlayAnimation } from "@/app/components/layout/Overlay/OverlayAnimation";
import { useTranslations } from 'next-intl';

interface OverlayProps {
  isOpen: boolean;
}

interface MenuItem {
  id: number;
  translationKey: string;
  path: string;
  enabled?: boolean;
  comingSoon?: boolean;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen }) => {
  const t = useTranslations('Menu');
  
  const menuItems: MenuItem[] = [
    { id: 1, translationKey: 'projects', path: '/projects', enabled: false, comingSoon: true },
    { id: 2, translationKey: 'services', path: '/services', enabled: false, comingSoon: true },
    { id: 3, translationKey: 'about', path: '/about', enabled: false, comingSoon: true },
    { id: 4, translationKey: 'contact', path: '/contact', enabled: false, comingSoon: true }
  ];

  const handleItemClick = (item: MenuItem, e: React.MouseEvent) => {
    if (!item.enabled) {
      e.preventDefault();
    }
  };

  return (
    <OverlayAnimation isOpen={isOpen}>
      <div className="h-full w-full flex flex-col justify-center items-center p-8 relative z-[10000]">
        
        {/* Título */}
        <div className="mb-12 text-center">
          <h2 className="title-section mb-4">
            DevMinds
          </h2>
          <p className="text-body">Menú de navegación</p>
        </div>

        {/* Menú de navegación */}
        <nav className="w-full max-w-md">
          <ul className="space-y-6">
            {menuItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.enabled ? item.path : '#'}
                  onClick={(e) => handleItemClick(item, e)}
                  className={`block title-sub transition-colors duration-300 text-center ${
                    item.enabled 
                      ? 'text-main hover:text-primary' 
                      : 'text-tertiary cursor-not-allowed'
                  }`}
                >
                  {t(item.translationKey)}
                  {item.comingSoon && (
                    <span className="ml-3 text-small text-primary">
                      ({t('soon')})
                    </span>
                  )}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Footer */}
        <div className="mt-16 text-center">
          <p className="text-small text-secondary">© 2025 DevMinds</p>
        </div>
      </div>
    </OverlayAnimation>
  );
};

export default Overlay;