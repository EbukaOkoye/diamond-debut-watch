/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#020202',
        foreground: '#f8f8f8',
        card: {
          DEFAULT: '#040404',
          foreground: '#f8f8f8',
        },
        popover: {
          DEFAULT: '#040404',
          foreground: '#f8f8f8',
        },
        primary: {
          DEFAULT: '#005d32',
          foreground: '#f8f8f8',
        },
        secondary: {
          DEFAULT: '#090909',
          foreground: '#f8f8f8',
        },
        muted: {
          DEFAULT: '#0d0d0d',
          foreground: '#a4a4a4',
        },
        accent: {
          DEFAULT: '#005d32',
          foreground: '#f8f8f8',
        },
        destructive: {
          DEFAULT: '#c53829',
          foreground: '#f8f8f8',
        },
        border: '#161616',
        input: '#0d0d0d',
        ring: '#005d32',
        onyx: '#020202',
        silver: '#c4c4c4',
        gold: '#ddb049',
      },
      fontFamily: {
        sans: ['Inter', 'Manrope', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
        'serif-lux': ['Cormorant Garamond', 'serif'],
      },
      boxShadow: {
        luxury: '0 30px 80px -20px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
        'red-glow': '0 20px 60px -10px rgba(0, 93, 50, 0.55)',
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #006738 0%, #003416 100%)',
        'gradient-dark': 'radial-gradient(ellipse at top, #090909 0%, #000000 70%)',
        'gradient-metal': 'linear-gradient(135deg, #c4c4c4 0%, #717171 50%, #c4c4c4 100%)',
      },
      animation: {
        shimmer: 'shimmer 3s linear infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
    },
  },
  plugins: [],
};
