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
  },

  compressHTML: true,

  vite: {
    build: {
      cssMinify: 'lightningcss',
      minify: 'terser',
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true,
        },
      },
      chunkSizeWarningLimit: 800,
      rollupOptions: {
        output: {
          manualChunks: {
            vendor: ['uapi-sdk-typescript']
          }
        }
      }
    },
    ssr: {
      external: ['uapi-sdk-typescript']
    }
  }
});
