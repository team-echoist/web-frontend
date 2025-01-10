/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#FFFFFF",
        black: "#000",
        black1: "#202020",
        black2: "#171717",
        black3: "#0f0f0f",
        lightBlack: "#191919",
        pointcolor: "#616FED",
        gray: "#868686",
        gray1: "#686868",
        darkgray: "#121212",
        red: "#E43446",
      },
      perspective: {
        '1000': '1000px',
      },
      transformStyle: {
        'preserve-3d': 'preserve-3d',
      },
      rotate: {
        '360': '360deg',
      },
      backfaceVisibility: {
        hidden: 'hidden',
      },
    },
  },
  plugins: [   function ({ addUtilities }) {
    addUtilities({
      '.all-unset': {
        all: 'unset',
      },
    });
  },],
};
