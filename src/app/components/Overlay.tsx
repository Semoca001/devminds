// src/app/components/Overlay.tsx
'use client';

import { useState } from 'react';

interface OverlayProps {
  isOpen: boolean;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen }) => {
  return (
    isOpen ? (
      <div className="fixed inset-0 bg-black bg-opacity-60 z-10">
        {/* Recuadro central */}
        <div className="absolute top-0 left-0 right-0 bottom-0 lg:left-20 lg:top-0 lg:right-0 lg:bottom-0 bg-[#191919] z-20">
          <div className="flex justify-center items-center h-full">
            <div className="bg-[#191919] p-10 rounded-lg text-white text-xl">
              Hola Mundo
            </div>
          </div>
        </div>
      </div>
    ) : null
  );
};

export default Overlay;
