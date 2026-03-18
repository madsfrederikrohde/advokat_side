import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1200px',
        '2xl': '1200px',
      },
    },
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Lora', 'serif'],
        editorial: ['Fraunces', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        'slide-up': 'slideUp 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [animate],
} satisfies Config;
