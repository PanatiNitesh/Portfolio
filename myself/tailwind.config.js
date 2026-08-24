/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        display: ['Outfit', '"Plus Jakarta Sans"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cream: {
          50: '#FAF8F5',
          100: '#F5F2EA',
          200: '#ECE6D9',
          300: '#DFD6C3',
          400: '#C5B79F',
          500: '#9E8E72',
        },
        stoneBg: '#F7F5EE',
        stoneDark: '#121214',
        accentSage: '#6B7E63',
        "light-content": "#6B6862",
        "dark-heading": "#1A1917",
        "dark-content": "#5C5850",
        "light-heading": "#F4F0E8",
        "dark-mode": "#121214",
        "dark-card": "#19191C",
        "green-text": "#6B7E63",
        "greenbg": "#E8EFE6",
      },
      animation: {
        'float-slow': 'float 5s ease-in-out infinite',
        'pulse-subtle': 'pulseSubtle 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '0.35', transform: 'scale(1)' },
          '50%': { opacity: '0.65', transform: 'scale(1.04)' },
        }
      }
    },
  },
  plugins: [],
};

