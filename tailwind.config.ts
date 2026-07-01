import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          950: "#0B0F0E",
          900: "#111615",
          800: "#181F1D",
          700: "#232C2A",
        },
        mist: "#E9EDEC",
        muted: "#96A3A0",
        teal: {
          300: "#7FE0D3",
          400: "#4ED2C1",
          500: "#2FBFAE",
          600: "#1E9C8D",
          700: "#157064",
          900: "#0C3B36",
        },
      },
      fontFamily: {
        display: ["Fraunces", "Georgia", "serif"],
        sans: ["'Schibsted Grotesk'", "system-ui", "sans-serif"],
        mono: ["'IBM Plex Mono'", "ui-monospace", "monospace"],
      },
      maxWidth: {
        wrap: "72rem",
      },
    },
  },
  plugins: [],
};
export default config;
