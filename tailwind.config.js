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
  },
  plugins: [],
};
