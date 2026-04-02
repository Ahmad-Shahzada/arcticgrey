/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        // Defines the animation name, duration, timing, and loop
        scrollUp: 'scrollUp 20s linear infinite',
      },
      keyframes: {
        scrollUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-50%)' }, // Moves half the list height for a seamless loop
        },
      },
    },
  },
  plugins: [],
}