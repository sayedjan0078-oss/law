module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#3b82f6',
          DEFAULT: '#1e40af',
          dark: '#1e3a8a',
        },
        secondary: {
          light: '#06b6d4',
          DEFAULT: '#0891b2',
          dark: '#0e7490',
        },
      },
      fontFamily: {
        sans: ['Vazirmatn', 'Tahoma', 'sans-serif'],
      },
    },
  },
  plugins: [],
}