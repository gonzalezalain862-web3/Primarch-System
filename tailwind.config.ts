import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'cyber-blue': '#00d4ff',
        'cyber-purple': '#b829dd',
        'cyber-pink': '#ff00ff',
      },
    },
  },
  plugins: [],
  // ✅ IMPORTANTE: Evita que Tailwind elimine tus clases personalizadas en producción
  safelist: [
    { pattern: /cyber-/ },
    { pattern: /bg-cyber-/ },
    { pattern: /hamburger-/ },
    { pattern: /feature-/ },
    { pattern: /light-streak/ },
    { pattern: /animate-/ },
  ],
};
export default config;
