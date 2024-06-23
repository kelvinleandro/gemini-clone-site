import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "text-gradient": "linear-gradient(16deg, #4b90ff, #ff5546)",
      },
      backgroundClip: {
        text: "text",
      },
      textFillColor: {
        transparent: "transparent",
      },
      colors: {
        "gemini-white-100": "#F0F4F9",
        "gemini-white-150": "#DFE4EA",
        "gemini-white-200": "#E6EAF1",
        "gemini-white-300": "#E2E6EB",
        "gemini-grey-200": "#C4C7C5",
        "gemini-grey-500": "#585858",
        "gemini-grey-700": "#282828",
      },
      animation: {
        loader: "loader 3s infinite linear",
      },
      keyframes: {
        loader: {
          "0%": { backgroundPosition: "-800px 0px" },
          "100%": { backgroundPosition: "800px 0px" },
        },
      },
    },
  },
  variants: {
    backgroundClip: ['responsive'],
    textFillColor: ['responsive'],
  },
  plugins: [
    function ({ addUtilities }: {addUtilities: any}) {
      addUtilities({
        '.bg-clip-text': {
          'background-clip': 'text',
          '-webkit-background-clip': 'text',
        },
        '.text-transparent': {
          'color': 'transparent',
          '-webkit-text-fill-color': 'transparent',
        },
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', /* IE and Edge */
          'scrollbar-width': 'none', /* Firefox */
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none', /* Safari and Chrome */
        },
      })
    },
  ],
};
export default config;
