import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderRadius: {

        'tl-30': '35%',
        'br-30': '35%',
      },
      textColor: {
        blue : '#17414F',
        lightCol : '#727272',
        whiteLight : '#D9D9D9',
      },
      backgroundColor: {
        blue : '#17414F',
      }
    },
  },
  plugins: [],
} satisfies Config;
