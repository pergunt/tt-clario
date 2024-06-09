export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        grey: {
          600: '#151D5133'
        },
      green: {
          400: '#009796'
        },
        red: {
          400: '#ED5F59'
        },
        primary: {
          600: '#151D51',
          500: '#27338F',
          400: '#404C9F'
          },
      },
    },
  },
  plugins: [],
}
