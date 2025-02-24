import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "320px",
        sm: "375px",
        sml: "500px",
        md: "667px",
        mdl: "768px",
        lg: "960px",
        lgl: "1024px",
        xl: "1280px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        amazon_blue: "#131921",
        amazon_light: "#232f3e",
        amazon_yellow: "#febd69",
        lightText: "#ccc",
      },
      fontFamily: {
        bodyFont: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
} satisfies Config;
