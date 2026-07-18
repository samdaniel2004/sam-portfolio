import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#08080A", // deepest background
          900: "#0C0C0F",
          800: "#111114",
          700: "#18181C",
          600: "#232328",
          500: "#3A3A40",
        },
        bone: {
          100: "#F6F5F2", // primary foreground
          200: "#E7E5E0",
          300: "#C9C7C1",
          400: "#9C9A94",
          500: "#6E6C67", // muted foreground
        },
        signal: {
          DEFAULT: "#D9B36C", // restrained brass/amber accent
          dim: "#8C7343",
          bright: "#EFCB86",
        },
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "fluid-hero": "clamp(2.75rem, 6.5vw + 1rem, 7.5rem)",
        "fluid-h2": "clamp(2rem, 4vw + 0.5rem, 4.25rem)",
        "fluid-h3": "clamp(1.5rem, 2.2vw + 0.5rem, 2.5rem)",
        "fluid-body": "clamp(1rem, 0.4vw + 0.9rem, 1.125rem)",
        "fluid-label": "clamp(0.7rem, 0.3vw + 0.6rem, 0.8rem)",
      },
      letterSpacing: {
        tightest2: "-0.045em",
        widest2: "0.28em",
      },
      maxWidth: {
        content: "1440px",
      },
      transitionTimingFunction: {
        editorial: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
export default config;
