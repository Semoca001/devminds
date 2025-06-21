/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Backgrounds
        carbon: '#0a0a0a',
        'dark-gray': '#191919',
        
        // Primary Brand
        primary: {
          DEFAULT: '#00ff88',
          light: '#33ff99',
          dark: '#00cc6a',
        },
        
        // Text Colors
        text: {
          primary: '#ffffff',
          secondary: '#a3a3a3',
          tertiary: '#525252',
        },
        
        // Status Colors
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
        
        // Border Colors
        border: {
          primary: 'rgba(255, 255, 255, 0.2)',
          secondary: 'rgba(255, 255, 255, 0.1)',
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