import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],

  output: 'static',

  build: {
    format: 'file',
    inlineStylesheets: 'always'
  },

  experimental: {
    clientPrerender: true,
  },

  vite: {
    build: {
      cssMinify: 'lightningcss',
      chunkSizeWarningLimit: 1000,
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