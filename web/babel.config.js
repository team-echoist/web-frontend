module.exports = {
  presets: [],
  plugins: [],
  env: {
    test: {
      presets: [
        "next/babel",
        "@babel/preset-env",
        "@babel/preset-react",
        "@babel/preset-typescript",
      ],
      plugins: [["styled-components", { ssr: true, displayName: true }]],
    },
  },
};
