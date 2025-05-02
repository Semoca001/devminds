/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  }
};

const withNextIntl = require('next-intl/plugin')(
  './i18n.ts'
);

module.exports = withNextIntl(nextConfig);