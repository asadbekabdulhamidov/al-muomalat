import defaultTheme from 'tailwindcss/defaultTheme';

export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        custom: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
