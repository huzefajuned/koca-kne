/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        hero_background: "url('./assets/bg.jpg')",
        contact_background: "url('./assets/contact_bg.jpg')",
      },
    },
    keyframes: {
      blink: {
        "0%, 100%": { opacity: 1 },
        "50%": { opacity: 0 },
      },
    },
    animation: {
      blink: "blink 1.4s infinite both",
    },
  },
  plugins: [],
};
