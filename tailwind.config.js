


module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}', // Adjust this path based on your project structure
  ],
  darkMode: 'class', // Enable class-based dark mode toggling
  theme: {
    extend: {
        fontFamily: {
        logo: ['"Cute Font"', 'cursive'],
        dancing: ['"Dancing Script"', 'cursive'],
        poppins: ['Poppins', 'sans-serif'],
      },
      colors: {
        primary: '#22c55e', // green-500, you can customize this
      },
    },
  },
  plugins: [],
};
