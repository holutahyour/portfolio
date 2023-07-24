/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html","./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Lobster': ["Lobster", "cursive"],
        'Inter': ["Inter", "sans-serif"],
        'Righteous': ["Righteous", "cursive"],
      },
      backgroundImage: {
        "deer": "url('assets/images/deer.jpg')",
        "winter_sunset": "url('assets/images/winter_sunset.jpg')",
        "over_the_sky": "url('assets/images/over_the_sky.jpg')",
        "waterfall": "url('assets/images/waterfall.jpg')",
        "parachute": "url('assets/images/parachute.jpg')",
      }
    },
  },
  plugins: [],
}

