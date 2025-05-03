// next.config.mjs
import createNextIntlPlugin from 'next-intl/plugin';

// Importante: pasar la ruta al archivo i18n.ts como argumento
const withNextIntl = createNextIntlPlugin('./src/i18n.ts');

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tu configuración de Next.js aquí
};

export default withNextIntl(nextConfig);