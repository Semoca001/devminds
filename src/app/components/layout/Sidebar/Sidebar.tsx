'use client';
import { useState } from 'react';
import Overlay from "@/app/components/layout/Overlay/Overlay";
import Image from 'next/image';
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeSwitcher from "@/app/components/ui/ThemeSwitcher/ThemeSwitcher";
import { useTheme } from '@/app/contexts/ThemeContext';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  // Obtener el tema actual (con fallback)
  let theme = 'light';
  try {
    const themeContext = useTheme();
    theme = themeContext.theme;
  } catch {
    theme = 'light';
  }

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  // Seleccionar iconos según el tema
  const getIconPath = (iconName: string) => {
    return theme === 'light' 
      ? `/images/${iconName}-dark.svg`
      : `/images/${iconName}.svg`;
  };

  return (
    <div>
      {/* Sidebar vertical para escritorio */}
      <div className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-20 bg-secondary border-r border-sidebar shadow-sm z-[9998]">
        {/* Botón de menú en la parte superior */}
        <button 
          onClick={toggleSidebar} 
          className="absolute top-4 w-full flex items-center justify-center text-main hover:text-primary transition-colors duration-300"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <Image 
            src={isOpen ? getIconPath('close') : getIconPath('menu')}
            alt={isOpen ? "Cerrar menú" : "Abrir menú"}
            width={36} 
            height={36}
          />
        </button>

        {/* Theme switcher arriba del selector de idioma */}
        <div className="absolute bottom-16 w-full flex justify-center">
          <ThemeSwitcher />
        </div>

        {/* Selector de idioma en la parte inferior */}
        <div className="absolute bottom-4 w-full flex justify-center">
          <LanguageSwitcher direction="vertical" />
        </div>
      </div>

      {/* Sidebar horizontal para pantallas menores a 1024px */}
      <div className="lg:hidden fixed top-0 left-0 w-full h-20 bg-secondary border-b border-sidebar shadow-sm z-[9998] flex justify-between items-center">
        {/* Botón de menú a la izquierda */}
        <button 
          onClick={toggleSidebar} 
          className="p-4 text-main hover:text-primary transition-colors duration-300 flex items-center justify-center"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          <Image 
            src={isOpen ? getIconPath('close') : getIconPath('menu')}
            alt={isOpen ? "Cerrar menú" : "Abrir menú"}
            width={36} 
            height={36}
          />
        </button>

        {/* Controles a la derecha - Theme switcher y selector de idioma */}
        <div className="flex items-center space-x-2 p-4">
          <ThemeSwitcher />
          <LanguageSwitcher direction="horizontal" />
        </div>
      </div>

      <Overlay isOpen={isOpen} />
    </div>
  );
};

export default Sidebar;