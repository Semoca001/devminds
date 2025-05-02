// src/app/components/Overlay.tsx
'use client';
import { OverlayAnimation } from "@/app/components/layout/Overlay/OverlayAnimation";

interface OverlayProps {
  isOpen: boolean;
}

const Overlay: React.FC<OverlayProps> = ({ isOpen }) => {
  return (
    <OverlayAnimation isOpen={isOpen}>
      <div className="h-full w-full flex justify-center items-center">
        <div className="p-10 text-white text-xl">
          Hola Mundo
        </div>
      </div>
    </OverlayAnimation>
  );
};

export default Overlay;