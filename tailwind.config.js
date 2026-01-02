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
           DEFAULT: '#0ea5e9', // Sky 500
           foreground: '#f0f9ff',
        },
        secondary: {
           DEFAULT: '#8b5cf6', // Violet 500
           foreground: '#f5f3ff',
        },
        accent: {
            DEFAULT: '#f43f5e', // Rose 500
            foreground: '#fff1f2',
        },
        background: '#020617', // Slate 950
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
        'spin-slow': 'spin 12s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      }
    },
  },
  plugins: [],
}