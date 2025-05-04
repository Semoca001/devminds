'use client';
import { useState } from 'react';
import Overlay from "@/app/components/layout/Overlay/Overlay";
import Image from 'next/image';
import LanguageSwitcher from "./LanguageSwitcher";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar vertical para escritorio */}
      <div className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-20 bg-[#191919] border-r border-white/20 z-20">
        {/* Botón de menú en la parte superior */}
        <button 
          onClick={toggleSidebar} 
          className="absolute top-4 w-full flex items-center justify-center text-white"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? (
            <Image src="/images/close.svg" alt="Cerrar menú" width={36} height={36} />
          ) : (
            <Image src="/images/menu.svg" alt="Abrir menú" width={36} height={36} />
          )}
        </button>

        {/* Selector de idioma en la parte inferior */}
        <div className="absolute bottom-4 w-full flex items-center justify-center">
          <LanguageSwitcher direction="vertical" />
        </div>
      </div>

      {/* Sidebar horizontal para pantallas menores a 1024px */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#191919] border-b border-white/20 z-20 flex justify-between items-center">
        {/* Botón de menú a la izquierda */}
        <button 
          onClick={toggleSidebar} 
          className="p-4 text-white flex items-center justify-center"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? (
            <Image src="/images/close.svg" alt="Cerrar menú" width={36} height={36} />
          ) : (
            <Image src="/images/menu.svg" alt="Abrir menú" width={36} height={36} />
          )}
        </button>

        {/* Selector de idioma a la derecha */}
        <div className="p-4 relative">
          <LanguageSwitcher direction="horizontal" />
        </div>
      </div>

      <Overlay isOpen={isOpen} />
    </div>
  );
};

export default Sidebar;