import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#16211d",
        forest: "#145c43",
        mint: "#dff5ec",
        amber: "#f6b73c",
        coral: "#e86f51"
      },
      boxShadow: {
        soft: "0 18px 50px rgba(22, 33, 29, 0.12)"
      }
    }
  },
  plugins: []
};

export default config;
