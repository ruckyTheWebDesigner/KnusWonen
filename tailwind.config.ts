import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "light-blue": "#35BCE7",
        "light-purple": "#9AA4D9",
      },
      backgroundImage: {
        "hero-bg": "url('/assets/images/hero-bg.png')",
        "primary-cta-gradient":
          "linear-gradient(84.67deg, #BFE27D 0%, #35BCE7 100%)",
        "secondary-cta-gradient":
          "linear-gradient(84.67deg, #FF6B38 0%, #FFD201 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
