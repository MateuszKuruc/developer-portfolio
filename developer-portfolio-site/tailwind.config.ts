import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      borderWidth: {
        "2.5": "2.5px",
        "3": "3px",
      },
      screens: {
        "3xl": "2560px",
      },
    },
  },
  plugins: [],
};
export default config;
