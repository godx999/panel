import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  // 保持现有的 Tailwind 集成
  integrations: [tailwind()],
  
  // 优化 Vite 处理逻辑
  vite: {
    ssr: {
      // 确保内联脚本和第三方图标库能正确解析
      noExternal: ['@fortawesome/fontawesome-free'],
    },
    // 如果你以后需要使用环境变量（如 API URL），可以在这里配置
    define: {
      'process.env': {}
    }
  }
});