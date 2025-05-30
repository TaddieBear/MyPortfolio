/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class", // Enable class-based dark mode
    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-sans)', 'sans-serif'],
          mono: ['var(--font-mono)', 'monospace'],
        },
      },
    }
    ,
    plugins: [],
    
  }
  