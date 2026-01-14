# Personal Dashboard 🎯

一个简洁、高效的个人导航仪表板，用于快速访问常用网站和工具。

## 📋 项目简介

Personal Dashboard 是一个使用 **Astro** 和 **Tailwind CSS** 构建的现代化个人导航网站，提供：

- 🔍 **多搜索引擎支持** - Google、Bing、Baidu、GitHub 快速搜索
- 🌐 **分类导航** - 个人网站、常用工具、学校资源、文献数据库等
- 🎨 **现代 UI** - 基于 Tailwind CSS 的精致毛玻璃设计
- ⚡ **高性能** - 静态生成，秒级加载
- 📱 **响应式设计** - 完美支持各种设备
- 🌍 **IP 地址显示** - 自动显示当前公网 IP 和所在位置
- 📄 **页脚组件** - 支持备案信息和平台说明

## 🚀 快速开始

### 环境要求

- Node.js 18+
- pnpm 或 npm

### 安装依赖

```bash
pnpm install
```

### 本地开发

```bash
pnpm dev
```

启动开发服务器，访问 `http://localhost:4321` 查看效果。

### 生产构建

```bash
pnpm build
```

生成静态文件到 `./dist/` 目录。

### 预览构建结果

```bash
pnpm preview
```

## 📁 项目结构

```
/
├── public/              # 静态资源
│   └── favicon.svg     # 网站图标
├── src/
│   ├── assets/         # 图片资源
│   ├── components/     # 可复用组件
│   │   ├── Footer.astro       # 页脚组件（包含备案信息）
│   │   └── Welcome.astro
│   ├── data/           # 数据文件
│   │   └── links.ts    # 导航链接与搜索引擎配置
│   ├── layouts/        # 页面布局
│   │   └── Layout.astro
│   ├── pages/          # 页面文件
│   │   └── index.astro
│   └── styles/         # 全局样式
│       └── global.css
├── astro.config.mjs    # Astro 配置
├── tailwind.config.mjs  # Tailwind 配置
└── package.json        # 项目配置
```

## ⚙️ 配置说明

### 修改导航链接

编辑 `src/data/links.ts` 文件：

```typescript
export const CATEGORIES = [
  {
    title: "分类名称",
    links: [
      { 
        name: "链接名称", 
        url: "https://example.com", 
        icon: "fas fa-icon-name", 
        color: "#ffffff" 
      }
    ]
  }
];
```

### 修改搜索引擎

在 `src/data/links.ts` 中编辑 `SEARCH_ENGINES` 数组：

```typescript
export const SEARCH_ENGINES = [
  { id: 'baidu', name: 'Baidu', url: 'https://www.baidu.com/s?wd=', icon: 'fas fa-paw' },
  { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=', icon: 'fab fa-google' },
  { id: 'bing', name: 'Bing', url: 'https://cn.bing.com/search?q=', icon: 'fab fa-microsoft' },
  { id: 'github', name: 'GitHub', url: 'https://github.com/search?q=', icon: 'fab fa-github' }
];
```

## 🛠️ 技术栈

- **框架**: [Astro](https://astro.build) - 静态站点生成器
- **样式**: [Tailwind CSS](https://tailwindcss.com) - 实用型 CSS 框架  
- **图标**: [Font Awesome](https://fontawesome.com) - 丰富的图标库
- **组件化**: Astro 组件 + TypeScript

## 📦 可用命令

| 命令 | 描述 |
|------|------|
| `pnpm install` | 安装依赖 |
| `pnpm dev` | 启动本地开发服务器 |
| `pnpm build` | 构建生产环境 |
| `pnpm preview` | 预览构建结果 |
| `pnpm astro` | 运行 Astro CLI 命令 |

## 🎨 自定义指南

### 修改背景图

在 `src/pages/index.astro` 中修改：

```javascript
const BG_URL = "https://t.alcy.cc/ycy"; // 修改为你的背景图片 URL
```

### 修改页脚信息

编辑 `src/components/Footer.astro` 中的 `profileConfig` 对象：

```typescript
const profileConfig = {
    name: "你的名字", // 修改为你的名字
};

const currentYear = new Date().getFullYear();
```

同时可以自定义备案号和平台说明。

### IP 地址显示

项目默认启用 IP 地址显示功能，使用 `v2.xxapi.cn`和`api.ip.sb` API：
- 支持显示当前公网 IP 和城市位置会显示到区
- 如果 API 无法访问，会显示"欢迎回来"

**关闭 IP 显示**：可以在 `src/pages/index.astro` 中移除 IP 逻辑代码块。

### 添加新分类

1. 编辑 `src/data/links.ts`
2. 在 `CATEGORIES` 数组中添加新的分类对象，例如：

```typescript
{
  title: "新分类",
  links: [
    { 
      name: "示例链接", 
      url: "https://example.com", 
      icon: "fas fa-icon", 
      color: "#3498db" 
    }
  ]
}
```

3. 重启开发服务器即可看到效果

### 修改图标

使用 [Font Awesome](https://fontawesome.com/icons) 提供的图标类名，例如：
- `fas fa-link` - 普通图标
- `fab fa-google` - 品牌图标

## 📱 兼容性

- 现代浏览器 (Chrome, Firefox, Safari, Edge)
- 移动设备 (iPhone, Android)
- 平板设备 (iPad, Android 平板)

## 🔧 开发相关

### 项目依赖

主要使用的 npm 包：
- `astro` - 核心框架
- `tailwindcss` - CSS 工具库
- `@astrojs/react` - React 集成（可选）
- `typescript` - 类型检查

### 浏览器兼容性

使用了现代 CSS 特性（如 `backdrop-filter`），请确保在较新版本的浏览器中使用。

## 🚀 部署指南

### 部署到 Vercel

1. 将代码推送到 GitHub
2. 在 [Vercel](https://vercel.com) 中导入项目
3. 选择 Astro 框架预设
4. 点击部署

### 部署到其他平台

本项目构建输出为静态文件，可以部署到任何支持静态文件托管的平台：
- GitHub Pages
- Netlify
- Cloudflare Pages
- 自有服务器

## 📝 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**Made with ❤️ by lvcdy**
