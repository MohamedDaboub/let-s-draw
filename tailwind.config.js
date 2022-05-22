module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        bleu1: { '900': '#2D3548' },
        bleu2: { '600': '#547ACC' }

      },
      "fontFamily": {
        "inter": "Inter, system-ui, sans-serif"
      },

    },
  },
  plugins: [],
}
