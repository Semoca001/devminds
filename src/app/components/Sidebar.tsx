'use client';

import { useState } from 'react';
import Overlay from './Overlay';  // Importamos el componente Overlay

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Sidebar vertical para escritorio */}
      <div className="hidden lg:flex fixed top-0 left-0 h-full w-20 bg-[#191919] border-r-2 border-white z-20">
        <button
          onClick={toggleSidebar}
          className="absolute top-4 left-4 text-white text-3xl"
        >
          {isOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Sidebar horizontal para pantallas menores a 1024px */}
      <div className="lg:hidden fixed top-0 left-0 w-full bg-[#191919] border-b-2 border-white z-20">
        <button
          onClick={toggleSidebar}
          className="p-4 text-white text-3xl"
        >
          {isOpen ? '×' : '☰'}
        </button>
      </div>

      {/* Llamamos al componente Overlay y pasamos el estado de isOpen */}
      <Overlay isOpen={isOpen} />
    </div>
  );
};

export default Sidebar;
