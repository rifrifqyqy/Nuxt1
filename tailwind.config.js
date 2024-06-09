/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      backgroundImage: {
        hotdog1: "url('/images/hotdog1.jpg') ",
        resto1: "url('/images/resto1.jpg')",
      },
    },
  },
  plugins: [],
};
