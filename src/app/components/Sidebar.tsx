'use client';

import { useState } from 'react';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`fixed top-0 left-0 w-20 h-full bg-transparent border-r-2 border-white`}>
      <button
        onClick={toggleSidebar}
        className="absolute top-4 left-4 text-white text-3xl"
      >
        {isOpen ? '×' : '☰'} {/* Cambia el icono dependiendo del estado */}
      </button>
    </div>
  );
};

export default Sidebar;
