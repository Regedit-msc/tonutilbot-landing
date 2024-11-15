/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "440px",
      },
      backgroundSize: { 16: "4rem" },
      boxShadow: {
        card: "0 10px 1500px -30px rgba(0, 0, 0, 0.3)",
        "inner-lg":
          "inset 0 1px 15px 0 rgb(0 0 0 / 0.10), inset 0 4px 6px -2px rgb(0 0 0 / 0.1)",
      },
      colors: {
        ashy: "#141519",
        ashyBorder: "#414249",
        ashyNav: "#272727",
        blue: "#4D5EFF",
        purple: "#8055FF",
        via: "#1C1F38",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
