// src/app/components/backgrounds/index.ts

// Importar el componente primero
import DiagonalFlowBackground from './DiagonalFlowBackground';

// Exportar todos los fondos disponibles desde aquí
export { default as DiagonalFlowBackground } from './DiagonalFlowBackground';

// Aquí puedes agregar más fondos en el futuro:
// export { default as PulseBackground } from './PulseBackground';
// export { default as WaveBackground } from './WaveBackground';
// export { default as ParticleBackground } from './ParticleBackground';

// Tipos para los fondos
export type BackgroundVariant = 'diagonal-flow' | 'pulse' | 'wave' | 'particle';

// Hook para obtener el componente de fondo por nombre
export const getBackgroundComponent = (variant: BackgroundVariant) => {
  switch (variant) {
    case 'diagonal-flow':
      return DiagonalFlowBackground;
    // case 'pulse':
    //   return PulseBackground;
    // case 'wave':
    //   return WaveBackground;
    // case 'particle':
    //   return ParticleBackground;
    default:
      return DiagonalFlowBackground;
  }
};