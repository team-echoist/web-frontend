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
        lightBlack: "#191919",
        pointcolor: "#616FED",
        gray: "#868686",
        gray1: "#686868",
        darkgray: "#121212",
        red: "#E43446",
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
