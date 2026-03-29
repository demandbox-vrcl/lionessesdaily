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
        bg: "var(--color-bg)",
        "bg-warm": "var(--color-bg-warm)",
        surface: "var(--color-surface)",
        "surface-2": "var(--color-surface-2)",
        gold: "var(--color-gold)",
        "gold-light": "var(--color-gold-light)",
        "gold-dim": "var(--color-gold-dim)",
        crimson: "var(--color-crimson)",
        "crimson-bright": "var(--color-crimson-bright)",
        cream: "var(--color-cream)",
        "cream-dim": "var(--color-cream-dim)",
        muted: "var(--color-muted)",
        "muted-light": "var(--color-muted-light)",
        border: "var(--color-border)",
        "border-gold": "var(--color-border-gold)",
        "border-warm": "var(--color-border-warm)",
        "score-high": "var(--color-score-high)",
        "score-mid": "var(--color-score-mid)",
        "score-low": "var(--color-score-low)",
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
