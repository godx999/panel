export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  safelist: [
    'backdrop-blur',
    'bg-white/5',
    'bg-white/10',
    'bg-white/15',
    'bg-white/20',
    'border-white/10',
    'border-white/20',
    'border-white/30',
    'text-white/40',
    'text-white/70',
    'text-white/80',
  ],
  theme: {
    extend: {
      backdropBlur: {
        xs: '2px',
      },
      scale: {
        '102': '1.02',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        sans: ['MiSans', 'Inter', 'PingFang SC', 'Microsoft YaHei', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      }
    },
  },
  plugins: [],
};