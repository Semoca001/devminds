import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#191919",  // Fondo principal
        whiteText: "#F5F5F5", // Textos y elementos destacados
      },
      fontFamily: {
        roboto: ['var(--font-roboto)', 'sans-serif'],
        doto: ['var(--font-doto)', 'sans-serif'],
      },
    },
  },
  plugins: [],
} satisfies Config;
