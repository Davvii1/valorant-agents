import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      scrollbar: {
        hide: {
          "::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      },
      colors: {
        primary: "#FF4654",
        secondary: "#0D1925",
      },
      fontFamily: {
        tungsten: ["Tungsten", "sans-serif"],
      },
      animation: {
        flowDown: "flowDown 1s ease-in-out",
        flowUp: "flowUp 1s ease-in-out",
        flowRight: "flowRight 0.5s ease-in-out",
        abilityFlow: "abilityFlow ease-in-out",
      },
      keyframes: {
        flowDown: {
          "0%": { transform: "translateY(-50%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "20" },
        },
        flowUp: {
          "0%": { transform: "translateY(50%)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "20" },
        },
        flowRight: {
          "0%": { transform: "translateX(-50%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "100" },
        },
        abilityFlow: {
          "0%": { transform: "translateX(-10%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "100" },
        },
      },
    },
    variants: {
      scrollbar: ["responsive"],
    },
  },
  plugins: [
    plugin(function ({ addUtilities }) {
      addUtilities({
        ".no-scrollbar": {
          "::-webkit-scrollbar": {
            display: "none",
          },
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
        },
      });
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-delay": (value) => ({
            animationDelay: value,
          }),
        },
        { values: theme("transitionDelay") }
      );
    }),
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities(
        {
          "animate-duration": (value) => ({
            animationDuration: value,
          }),
        },
        { values: theme("transitionDuration") }
      );
    }),
  ],
};
export default config;
