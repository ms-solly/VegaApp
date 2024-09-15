module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'martel-sans': ['"Martel Sans"', 'sans-serif'],
      },
      colors: {
        'light-bg': '#f9f9f9',
        'dark-bg': '#1a1a1a',
        'light-card': '#ffffff',
        'dark-card': '#2a2a2a',
        'light-sidebar': '#f1f1f1',
        'dark-sidebar': '#2e2e2e',
        'light-footer': '#f9f9f9',
        'dark-footer': '#1a1a1a',
      },
    },
  },
  plugins: [],
  darkMode: 'class'
}