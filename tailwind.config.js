/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        "spin-slow": "spin 1.5s linear infinite",
        "bounce-once": "bounce 1s infinite",
        "drop-down": "drop-down .7s linear 1",
      },
      keyframes: {
        "drop-down": {
          "0%": { top: "-80px" },
          "70%": { top: "-80px" },
          "95%": { top: "80px" },
          "100%": { top: 0 },
        },
      },
    },
  },
  plugins: [],
};
