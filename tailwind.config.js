/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundSize: { 16: "4rem" },
      boxShadow: {
        card: "0 10px 1500px -30px rgba(0, 0, 0, 0.3)",
      },
      colors: {
        myGray: "#141519",
      },
    },
  },
  plugins: [],
};
