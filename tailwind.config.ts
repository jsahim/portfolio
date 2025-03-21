import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        fugaz: ['"Fugaz One"', '"sans-serif"']
      },
      keyframes: {
        refine: { "0%": { left: "-100%" }, "100%": { left: "0%" } },
        fade: { "0%": { opacity: "0" }, "100%": { opacity: "1" } }
      },
      animation: {
        "refine-slidein": "refine 1s",
        "fade-in": "fade 1s",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [
    
  ],
} satisfies Config;
