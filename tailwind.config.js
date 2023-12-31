const px0_10 = { ...Array.from(Array(11)).map((_, i) => `${i}px`) };
const px0_100 = { ...Array.from(Array(101)).map((_, i) => `${i}px`) };
const px0_1000 = { ...Array.from(Array(1001)).map((_, i) => `${i}px`) };

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      padding: px0_100,
      margin: px0_100,
      borderWidth: px0_10,
      width: px0_1000,
      maxWidth: px0_1000,
      height: px0_1000,
      gap: px0_100,
      borderRadius: px0_100,
      colors: {
        gray: "#9E9E9E",
      },
    },
  },
  plugins: [],
};
