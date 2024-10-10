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
        green_400: "#3FFFB5",
        yellow_50: "#fffceb",
        yellow_100: "#FFF6C0",
        yellow_200: "#fff095",
        yellow_950: "#3d3500",
        dark_yellow: "#FFDC00",
        light_brown: "rgba(61, 53, 0, 0.24)",
        light_blue: "rgba(0, 61, 38, 0.24)",
        neutral_black: "rgba(6, 5, 15, 0.40)"
      },
      boxShadow: {
        card_green: "0px 0px 10px rgba(0, 235, 144, 0.40)",
        tech_card: "0.181px 0.723px 1.043px -1px rgba(56, 58, 61, 0.05), 0.687px 2.746px 3.963px -2px rgba(56, 58, 61, 0.04), 3px 12px 17.317px -3px rgba(56, 58, 61, 0.03)"
      },
      backgroundImage: {
        blue_gradient: 'linear-gradient(180deg, #7289F7 0.67%, #69F3BE 51.32%, #FFF 99.98%)',
        yellow_gradient: 'linear-gradient(180deg, #FFF6C0 0%, #FFEB6A 100%)',
        button_gradient: 'linear-gradient(102deg, #3F5EF4 0%, #00EB90 100%)',
      },
      padding: {
        card_padding: '90px 144px 100px 144px'
      },
    },
  },
  plugins: [],
};
export default config;
