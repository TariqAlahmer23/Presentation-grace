import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "rgb(var(--bg-rgb) / <alpha-value>)",
        panel: "rgb(var(--panel-rgb) / <alpha-value>)",
        panelAlt: "rgb(var(--panel-alt-rgb) / <alpha-value>)",
        text: "rgb(var(--text-rgb) / <alpha-value>)",
        muted: "rgb(var(--muted-rgb) / <alpha-value>)",
        primary: "rgb(var(--primary-rgb) / <alpha-value>)",
        primaryStrong: "rgb(var(--primary-strong-rgb) / <alpha-value>)",
        primary2: "rgb(var(--primary-strong-rgb) / <alpha-value>)",
        secondary: "rgb(var(--secondary-rgb) / <alpha-value>)",
        border: "rgb(var(--border-rgb) / <alpha-value>)"
      },
      fontFamily: {
        sans: ["var(--font-inter)"]
      },
      boxShadow: {
        glow: "0 24px 80px rgba(16, 176, 160, 0.15)",
        panel: "0 22px 60px rgba(7, 18, 24, 0.22)",
        "panel-light": "0 4px 20px rgba(30, 60, 90, 0.05)"
      },
      backgroundImage: {
        "hero-grid":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)"
      }
    }
  },
  plugins: []
};

export default config;
