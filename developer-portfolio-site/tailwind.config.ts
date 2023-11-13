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
      fontFamily: {
        header1: ["Montserrat"],
        header2: ["Open Sans"],
        header3: ["Poppins"],
        header4: ["Playfair Display"]
      },
      boxShadow: {
        button: "5px 5px 10px #030712",
        dark: "2px 2px 10px #9ca3af",
      },
      borderWidth: {
        "2.5": "2.5px",
        "3": "3px",
      },
      screens: {
        "3xl": "2560px",
      },
      animation: {
        "text-slide-3":
          "text-slide-3 7.5s cubic-bezier(0.83, 0, 0.17, 1) infinite",
      },
      keyframes: {
        "text-slide-3": {
          "0%, 26.66%": {
            transform: "translateY(0%)",
          },
          "33.33%, 60%": {
            transform: "translateY(-25%)",
          },
          "66.66%, 93.33%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(-75%)",
          },
        },
      },
    },
  },
  plugins: [],
};
export default config;
