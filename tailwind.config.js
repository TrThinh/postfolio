/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        purple500: "#240046",
        purple400: "#3c096c",
        purple300: "#5a189a",
        purple200: "#7b2cbf",
        purple100: "#9d4edd",
        purplelight: "#e0aaff",
        orange500: "#ff6d00",
        orange400: "#ff7900",
        orange300: "#ff8500",
        orange200: "#ff9100",
        orange100: "#ff9e00",
      }
    },
  },
  plugins: [],
}
