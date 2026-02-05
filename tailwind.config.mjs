export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  safelist: [
    'backdrop-blur',
    {
      pattern: /^bg-white\/(5|10|15|20)$/,
    },
    {
      pattern: /^border-white\/(10|20|30)$/,
    },
    {
      pattern: /^text-white\/(40|70|80)$/,
    },
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
        'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.23, 1, 0.32, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      fontFamily: {
        sans: ['MiSans', 'Inter', 'PingFang SC', 'Microsoft YaHei', '--system-ui', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(0, 0, 0, 0.37)',
      },
    },
  },
  plugins: [],
  // 启用CSS变量用法检查
  corePlugins: {
    preflight: true,
  },
};