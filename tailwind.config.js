// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {
//       colors: {
//         primary: {
//           300: '#7dd3fc',
//           400: '#38bdf8',
//           500: '#0ea5e9',
//           600: '#0284c7',
//         },
//         secondary: {
//           400: '#a78bfa',
//           500: '#8b5cf6',
//         },
//       },
//       backdropBlur: {
//         xs: '2px',
//         sm: '4px',
//       },
//       animation: {
//         'progress': 'progress 1.5s ease-in-out infinite',
//       },
//       keyframes: {
//         progress: {
//           '0%': { transform: 'scaleX(0)' },
//           '100%': { transform: 'scaleX(1)' },
//         }
//       }
//     }, // Correct closing brace for 'extend'
//   }, // Correct closing brace for 'theme'
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 3s ease-in-out infinite',
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