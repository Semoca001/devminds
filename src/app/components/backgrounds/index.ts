// src/app/components/backgrounds/index.ts

// Importar todos los componentes de fondo
import DiagonalFlowBackground from './DiagonalFlowBackground';
import CorporateBackground from './CorporateBackground';
import AdaptiveBackground from './AdaptiveBackground';

// Exportar todos los fondos disponibles
export { default as DiagonalFlowBackground } from './DiagonalFlowBackground';
export { default as CorporateBackground } from './CorporateBackground';
export { default as AdaptiveBackground } from './AdaptiveBackground';

// Tipos para los fondos
export type BackgroundVariant = 'adaptive' | 'diagonal-flow' | 'corporate' | 'pulse' | 'wave' | 'particle';

// Hook para obtener el componente de fondo por nombre
export const getBackgroundComponent = (variant: BackgroundVariant) => {
  switch (variant) {
    case 'adaptive':
      return AdaptiveBackground;
    case 'diagonal-flow':
      return DiagonalFlowBackground;
    case 'corporate':
      return CorporateBackground;
    // case 'pulse':
    //   return PulseBackground;
    // case 'wave':
    //   return WaveBackground;
    // case 'particle':
    //   return ParticleBackground;
    default:
      return AdaptiveBackground;
  }
};