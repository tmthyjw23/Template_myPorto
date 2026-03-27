import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: "#111111",
        stonebase: "#f5f5f4",
        cloud: "#e7e5e4",
        smoke: "#57534e",
        indigoelectric: "#6366f1",
        cyansignal: "#06b6d4",
      },
      boxShadow: {
        soft: "0 12px 40px rgba(17, 17, 17, 0.08)",
        float: "0 20px 70px rgba(17, 17, 17, 0.12)",
        glow: "0 0 0 1px rgba(99, 102, 241, 0.22), 0 18px 40px rgba(6, 182, 212, 0.14)",
      },
      backgroundImage: {
        grid: "linear-gradient(to right, rgba(17,17,17,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(17,17,17,0.05) 1px, transparent 1px)",
      },
      keyframes: {
        drift: {
          "0%, 100%": { transform: "translate3d(0,0,0) scale(1)" },
          "33%": { transform: "translate3d(24px,-18px,0) scale(1.04)" },
          "66%": { transform: "translate3d(-20px,16px,0) scale(0.98)" },
        },
      },
      animation: {
        drift: "drift 18s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
