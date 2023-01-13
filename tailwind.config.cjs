/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "default-color": "#271A45",
      },
    },
    container: {
      center: true,
      padding: "2rem",
    },
  },
  plugins: [],
}
