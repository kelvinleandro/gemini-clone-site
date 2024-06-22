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
      },
      colors: {
        'gemini-white-100': '#F0F4F9',
        'gemini-white-200': '#E6EAF1',
        'gemini-white-300': '#E2E6EB',
        'gemini-grey-500': '#585858',
        'gemini-grey-700': '#282828',
      },
    },
  },
  plugins: [],
};
export default config;
