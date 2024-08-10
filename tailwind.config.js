module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#D97706', // Darker Amber
        secondary: '#F6AD55', // Light Amber
        darkBackground: '#1A202C', // Dark Gray
        darkText: '#A0AEC0', // Light Gray
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(90deg, #D97706, #F6AD55)',
      },
    },
  },
  plugins: [],
  darkMode: 'class', // Enables dark mode
}
