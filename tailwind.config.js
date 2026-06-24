/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        terracotta: '#C96A3D',
        gold: '#D4A017',
        coral: '#E76F51',
        charcoal: '#1C1C1C',
        slate: '#2A2A2A',
        ivory: '#F8F5F0',
        muted: '#B8B0A7',
        sage: '#7A9E7E',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'grad-tc-gold': 'linear-gradient(135deg, #C96A3D, #D4A017)',
        'grad-coral-tc': 'linear-gradient(135deg, #E76F51, #C96A3D)',
        'grad-gold-beige': 'linear-gradient(135deg, #D4A017, #F0D080)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'spin-slow': 'spin 8s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
  plugins: [],
}
