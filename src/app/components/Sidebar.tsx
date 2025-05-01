'use client';

import { useState } from 'react';
import Overlay from './Overlay';
import Image from 'next/image';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar vertical para escritorio */}
      <div className="hidden lg:block fixed top-0 left-0 h-full w-20 bg-[#191919] border-r-2 border-white z-20">
        <button
          onClick={toggleSidebar}
          className="absolute top-4 w-full flex items-center justify-center text-white"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? (
            <Image 
              src="/close.svg" 
              alt="Cerrar menú" 
              width={36} 
              height={36} 
            />
          ) : (
            <Image 
              src="/menu.svg" 
              alt="Abrir menú" 
              width={36} 
              height={36} 
            />
          )}
        </button>
      </div>

      {/* Sidebar horizontal para pantallas menores a 1024px */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#191919] border-b-2 border-white z-20">
        <button
          onClick={toggleSidebar}
          className="p-4 text-white flex items-center justify-center"
          aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        >
          {isOpen ? (
            <Image 
              src="/close.svg" 
              alt="Cerrar menú" 
              width={36} 
              height={36} 
            />
          ) : (
            <Image 
              src="/menu.svg" 
              alt="Abrir menú" 
              width={36} 
              height={36} 
            />
          )}
        </button>
      </div>

      <Overlay isOpen={isOpen} />
    </div>
  );
};

export default Sidebar;