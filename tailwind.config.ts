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
        bg: "#0F0D0B",
        surface: "#1A1612",
        gold: "#C9943A",
        crimson: "#8B2E2E",
        cream: "#F5EFE6",
        muted: "#8A7F74",
        border: "#2C2620",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body: ["var(--font-instrument)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
