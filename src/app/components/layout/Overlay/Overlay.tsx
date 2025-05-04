'use client';
import { OverlayAnimation } from "@/app/components/layout/Overlay/OverlayAnimation";
import { motion } from 'framer-motion';

interface OverlayProps {
  isOpen: boolean;
}

interface MenuItem {
  id: number;
  label: string;
  path: string;
  enabled?: boolean;
  comingSoon?: boolean;
}

const menuItems: MenuItem[] = [
  { id: 1, label: 'PROJECTS', path: '/projects', enabled: false, comingSoon: true },
  { id: 2, label: 'SERVICES', path: '/services', enabled: false, comingSoon: true },
  { id: 3, label: 'ABOUT', path: '/about', enabled: false, comingSoon: true },
  { id: 4, label: 'CONTACT', path: '/contact', enabled: false, comingSoon: true }
];

const Overlay: React.FC<OverlayProps> = ({ isOpen }) => {
  const handleItemClick = (item: MenuItem, e: React.MouseEvent) => {
    if (!item.enabled) {
      e.preventDefault();
      // Efecto visual al hacer clic en item deshabilitado
      const target = e.currentTarget;
      target.classList.add('animate-pulse');
      setTimeout(() => target.classList.remove('animate-pulse'), 500);
    }
  };

  return (
    <OverlayAnimation isOpen={isOpen}>
      <div className="h-full w-full flex flex-col justify-center items-center p-8">
        {/* Título con estilo terminal */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mb-12 text-center"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-mono tracking-widest text-primary-400 mb-2">
            DEVMINDS_TERMINAL
          </h2>
          <div className="h-px w-32 mx-auto bg-gradient-to-r from-transparent via-white to-transparent" />
        </motion.div>

        {/* Menú de navegación */}
        <nav className="w-full max-w-md">
          <ul className="space-y-6">
            {menuItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: 0.3 + index * 0.1,
                  duration: 0.3
                }}
              >
                <a
                  href={item.enabled ? item.path : '#'}
                  onClick={(e) => handleItemClick(item, e)}
                  className={`block group font-mono text-lg sm:text-xl md:text-2xl transition-colors duration-300 relative ${
                    item.enabled 
                      ? 'text-white hover:text-primary-400' 
                      : 'text-gray-500 cursor-not-allowed'
                  }`}
                >
                  <span className="text-primary-400 mr-2">$</span>
                  <span className={`group-hover:underline ${!item.enabled && 'line-through'}`}>
                    {item.label}
                  </span>
                  {item.comingSoon && (
                    <span className="absolute right-0 top-0 text-xs text-primary-400 opacity-70">
                      SOON
                    </span>
                  )}
                  {item.enabled && (
                    <span className="ml-2 text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      _
                    </span>
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>

        {/* Footer del overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.8, duration: 0.4 }}
          className="mt-16 text-center text-xs sm:text-sm text-gray-400 font-mono"
        >
          <p>SYSTEM READY</p>
          <p className="mt-1">v1.0.0</p>
        </motion.div>
      </div>
    </OverlayAnimation>
  );
};

export default Overlay;