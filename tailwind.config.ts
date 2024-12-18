import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backgroundImage: {
        "hero-image": "url('/capital-turk-background-img.png')",
      },
      boxShadow: {
        "shadow-1": "rgba(0, 0, 0, 0.24) 0px 3px 8px;",
        "shadow-2": "rgba(0, 0, 0, 0.16) 0px 1px 4px;",
      },
    },
  },
  plugins: [],
} satisfies Config;
