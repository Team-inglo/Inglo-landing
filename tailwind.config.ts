import type { Config } from "tailwindcss";

const config: Config = {
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
        white: "#FFFFFF",
        black: "#000000",
        light_black: "#1F1F1F",
        primary: "#00EB90",
        secondary: "#FFDC00",
        light_green: "#EBFFF7",
        deep_gray: "#434343",
        gray: "#A4A4A4",
        light_gray: "#919191",
        white_900: "#343434",
        white_800: "#494949",
        green_200: "#95FFD6",
        yellow_50: "#fffceb",
        yellow_950: "#3d3500",
        light_brown: "rgba(61, 53, 0, 0.24)"
      },
      boxShadow: {
        card_green: "0px 0px 10px rgba(0, 235, 144, 0.40)",
      },
      backgroundImage: {
        custom_gradient: 'linear-gradient(180deg, #7289F7 0.67%, #69F3BE 51.32%, #FFF 99.98%)',
        yellow_gradient: 'linear-gradient(180deg, #FFF6C0 0%, #FFEB6A 100%)'
      },
      padding: {
        card_padding: '90px 144px 100px 144px'
      },
    },
  },
  plugins: [],
};
export default config;
