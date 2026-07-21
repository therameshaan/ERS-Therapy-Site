/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
        sage: '#87A96B',
        softBlue: '#A8DADC',
        coral: '#F4A261',
        cream: '#F8F4E8',
        deepTeal: '#264653',
        mintGreen: '#B7E4C7',
        lavender: '#C8B6E2',
        peach: '#FFB4A2',
        lakers: '#552583',
        lakersGold: '#FDB927',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
        serif: ['var(--font-playfair)', 'serif'],
      },
      animation: {
        'breathe-in': 'breathe-in 4s ease-in-out infinite',
        'breathe-out': 'breathe-out 4s ease-in-out infinite',
        'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        'breathe-in': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.2)' },
        },
        'breathe-out': {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(0.8)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}