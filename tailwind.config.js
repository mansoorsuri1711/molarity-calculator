/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-outfit)', 'Helvetica Neue', 'Arial', 'sans-serif'],
        display: ['var(--font-sora)', 'var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        // Palette from molarity flask logo: violet tile + cyan liquid
        brand: {
          DEFAULT: '#0C0B1A',
          deep: '#08071A',
          soft: '#16142E',
          glow: '#7B5CFF',
        },
        mist: '#1A1833',
        blush: '#0C0B1A',
        ink: '#EDEAF8',
        pink: {
          DEFAULT: '#7B5CFF',
          soft: '#A78BFF',
          deep: '#4F35D9',
        },
        coral: {
          DEFAULT: '#14B8C9',
          deep: '#0E8FA0',
        },
        violet: {
          DEFAULT: '#7B5CFF',
          soft: '#A78BFF',
          deep: '#4F35D9',
        },
        lilac: '#C4B5FD',
        teal: {
          DEFAULT: '#14B8C9',
          deep: '#0E8FA0',
        },
        sky: '#4FE0E8',
        gold: '#F5C842',
        primary: '#0C0B1A',
        secondary: '#16142E',
        accent: '#7B5CFF',
        sunrise: '#F5C842',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'soft-pulse': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
        'soft-pulse': 'soft-pulse 3s ease-in-out infinite',
        'gradient-shift': 'gradient-shift 8s ease infinite',
      },
    },
  },
  plugins: [],
}
