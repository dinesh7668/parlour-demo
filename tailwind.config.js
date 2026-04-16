/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf8f6',
          100: '#f5e6e0',
          200: '#ead0c3',
          300: '#dfbaa6',
          400: '#d4a574',
          500: '#c99055',
          600: '#b87c47',
          700: '#9d6639',
          800: '#82522b',
          900: '#673e1d',
        },
        accent: {
          gold: '#D4A574',
          pink: '#F5E6E0',
          nude: '#E8D4C4',
        },
        dark: {
          bg: '#1a1a1a',
          card: '#2d2d2d',
          text: '#e5e5e5',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out',
        'slide-in-left': 'slideInLeft 0.5s ease-out',
        'slide-in-right': 'slideInRight 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        slideInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
      backdropFilter: {
        'glass': 'backdrop-filter blur(10px)',
      },
      boxShadow: {
        'glow': '0 0 20px rgba(212, 165, 116, 0.3)',
        'glow-sm': '0 0 10px rgba(212, 165, 116, 0.2)',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
