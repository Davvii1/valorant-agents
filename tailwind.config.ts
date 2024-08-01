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
  ],
};
export default config;
