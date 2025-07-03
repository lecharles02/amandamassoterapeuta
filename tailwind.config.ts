import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        terracotta: {
          50: '#faf8f5',
          100: '#f5f0e8',
          200: '#ebe0d1',
          300: '#dcc9b3',
          400: '#d5bb99',
          500: '#c8a87f',
          600: '#b89466',
          700: '#9a7a52',
          800: '#7d6345',
          900: '#66523a',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'bumble': 'bumble 1.2s infinite cubic-bezier(0.68, -0.55, 0.27, 1.55)',
        'jump': 'jump 1s infinite cubic-bezier(0.28, 0.84, 0.42, 1)'
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        bumble: {
          '0%, 100%': { transform: 'scale(1)' },
          '10%': { transform: 'scale(1.08) rotate(-2deg)' },
          '20%': { transform: 'scale(0.96) rotate(2deg)' },
          '30%': { transform: 'scale(1.04) rotate(-1deg)' },
          '40%': { transform: 'scale(0.98) rotate(1deg)' },
          '50%': { transform: 'scale(1.02)' },
          '60%': { transform: 'scale(0.98)' },
          '70%': { transform: 'scale(1.04)' },
          '80%': { transform: 'scale(0.96)' },
          '90%': { transform: 'scale(1.08)' },
        },
        jump: {
          '0%, 100%': { transform: 'translateY(0)' },
          '10%': { transform: 'translateY(-8px)' },
          '20%': { transform: 'translateY(-16px)' },
          '30%': { transform: 'translateY(-8px)' },
          '40%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-4px)' },
          '60%': { transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [
    plugin(function({ addUtilities }) {
      addUtilities({
        '.text-shadow-lg': {
          textShadow: '2px 4px 12px rgba(0,0,0,0.18)',
        },
      })
    })
  ],
}
export default config 