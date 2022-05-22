module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "bleu": "#547acc",
        "bleufonce": "#123456",
        "bleutransparent": "#03a9f4",
        "gris": "#b0b0b0",
        "noir": "#282C2C"
      },
      "fontFamily": {
        "inter": "Inter, system-ui, sans-serif"
      },

    },
  },
  plugins: [],
}
