import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0b1220",
        navyDeep: "#070d18",
        navySoft: "#111a2b",
        mist: "#e6edf6",
        haze: "#a9b6c8",
        accent: "#4ea0ff",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
