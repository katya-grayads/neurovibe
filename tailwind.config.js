/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
      },
      fontFamily: {
        'unbounded': ['Unbounded', 'sans-serif'],
      },
      colors: {
        'primary': {
          500: '#2c346b',
          600: '#252b59',
          700: '#1f2447',
          800: '#181c35',
          900: '#121523',
        },
        'slate': {
          900: '#0f172a',
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        'spin-slow': 'spin 20s linear infinite',
        'float': 'float 15s ease-in-out infinite',
        'sendPath': 'sendPath 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s infinite',
        'pulse-slow': 'pulse 3s infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translate(0, 0) rotate(0deg)' },
          '25%': { transform: 'translate(10px, 10px) rotate(5deg)' },
          '50%': { transform: 'translate(-5px, 20px) rotate(-5deg)' },
          '75%': { transform: 'translate(-10px, -5px) rotate(3deg)' },
        },
        sendPath: {
          '0%': { transform: 'scaleX(0)', transformOrigin: 'left' },
          '50%': { transform: 'scaleX(1)', transformOrigin: 'left' },
          '50.1%': { transform: 'scaleX(1)', transformOrigin: 'right' },
          '100%': { transform: 'scaleX(0)', transformOrigin: 'right' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        'dust-float': {
          '0%, 100%': { 
            transform: 'translate(0, 0) rotate(0deg)',
            opacity: '0.3'
          },
          '10%': {
            transform: 'translate(2px, -4px) rotate(5deg)',
            opacity: '0.6'
          },
          '25%': {
            transform: 'translate(-3px, -7px) rotate(-5deg)',
            opacity: '0.4'
          },
          '40%': {
            transform: 'translate(1px, -12px) rotate(2deg)',
            opacity: '0.7'
          },
          '60%': {
            transform: 'translate(-2px, -9px) rotate(-3deg)',
            opacity: '0.5'
          },
          '75%': {
            transform: 'translate(3px, -15px) rotate(1deg)',
            opacity: '0.3'
          },
          '90%': {
            transform: 'translate(-1px, -3px) rotate(-2deg)',
            opacity: '0.6'
          }
        },
      },
    },
  },
  plugins: [
    function({ addVariant }) {
      addVariant('supports-blur', '@supports (backdrop-filter: blur(0))');
      addVariant('supports-grid', '@supports (display: grid)');
      addVariant('supports-sticky', '@supports (position: sticky)');
      addVariant('children', '& > *');
      addVariant('hover-children', '&:hover > *');
    },
  ],
};