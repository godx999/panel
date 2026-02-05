import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind({
    applyBaseStyles: false,
  })],

  output: 'static',

  build: {
    format: 'file',
    assets: '_assets',
    inlineStylesheets: 'auto',
    // 启用CSS最小化
    cssMinify: 'lightningcss',
  },

  compressHTML: true,

  // 启用增量静态生成缓存
  cacheDir: './.astro/cache',

  // 优化vite配置
  vite: {
    build: {
      cssMinify: 'lightningcss',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
          passes: 2,
        },
        mangle: true,
        output: {
          comments: false,
        },
      },
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['uapi-sdk-typescript']
          }
        }
      },
      // 启用源码映射以便调试
      sourcemap: false,
    },
    ssr: {
      external: ['uapi-sdk-typescript']
    }
  }
});
