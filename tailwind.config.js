/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx,mdx}",
    "./data/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Palet "Danau Toba di malam hari" — ubah di sini untuk mengganti warna seluruh website
        danau: { DEFAULT: "#0D2230", deep: "#091A25", 2: "#123041", 3: "#183A4D" },
        garis: "#26495C",
        kabut: { DEFAULT: "#E7EEF0", redup: "#9DB5C1", samar: "#6E8C9B" },
        gorga: { DEFAULT: "#EF6A4C", tua: "#C94A30" },
        emas: "#E9B949",
      },
      fontFamily: {
        display: ['"Bricolage Grotesque Variable"', "system-ui", "sans-serif"],
        sans: ['"Instrument Sans Variable"', "system-ui", "sans-serif"],
      },
      maxWidth: { prose: "65ch" },
      keyframes: {
        drift: { from: { transform: "translateX(0)" }, to: { transform: "translateX(-50%)" } },
        blink: { "0%,49%": { opacity: "1" }, "50%,100%": { opacity: "0" } },
      },
      animation: {
        drift: "drift 40s linear infinite",
        "drift-slow": "drift 70s linear infinite",
        marquee: "drift 70s linear infinite",
        blink: "blink 1s step-end infinite",
      },
    },
  },
  plugins: [],
};
