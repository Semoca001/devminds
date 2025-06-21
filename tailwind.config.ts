/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Backgrounds - Dark Theme
        carbon: '#0a0a0a',
        'dark-gray': '#191919',
        
        // Backgrounds - Light Theme
        snow: '#fffafa',
        ivory: '#fffff0',
        'alice-blue': '#f0f8ff',
        'ghost-white': '#f8f8ff',
        'light-gray': '#f5f5f5',
        'light-border': '#e5e5e5',
        
        // Primary Brand (same for both themes)
        primary: {
          DEFAULT: '#00ff88',
          light: '#33ff99',
          dark: '#00cc6a',
          'dark-contrast': '#00a855', // Verde más oscuro para modo claro
        },
        
        // Text Colors - adaptable
        text: {
          primary: '#ffffff', // dark theme
          secondary: '#a3a3a3', // dark theme
          tertiary: '#525252', // dark theme
          'primary-light': '#111827', // light theme - negro más intenso
          'secondary-light': '#374151', // light theme - gris más oscuro
          'tertiary-light': '#6b7280', // light theme - gris medio más oscuro
        },
        
        // Status Colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
        
        // Border Colors - adaptable
        border: {
          primary: 'rgba(255, 255, 255, 0.2)', // dark theme
          secondary: 'rgba(255, 255, 255, 0.1)', // dark theme
          'primary-light': 'rgba(0, 0, 0, 0.12)', // light theme - sutil
          'secondary-light': 'rgba(0, 0, 0, 0.08)', // light theme - muy sutil
        },
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        doto: ['var(--font-doto)', 'monospace'],
      },
      fontSize: {
        // Custom sizes for consistency
        'title-hero': ['clamp(2.5rem, 11vw, 9rem)', { lineHeight: '1.1' }],
        'title-section': ['clamp(1.5rem, 4vw, 2.5rem)', { lineHeight: '1.2' }],
        'title-sub': ['clamp(1.125rem, 2vw, 1.5rem)', { lineHeight: '1.3' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      borderWidth: {
        '3': '3px',
      },
    },
  },
  plugins: [],
}