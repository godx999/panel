# Personal Dashboard 🎯

一个简洁、高效的个人导航仪表板，用于快速访问常用网站和工具。

## 📋 项目简介

Personal Dashboard 是一个使用 **Astro** 和 **Tailwind CSS** 构建的现代化个人导航网站，提供：

- 🔍 **多搜索引擎支持** - Google、Bing、Baidu 快速搜索
- 🌐 **分类导航** - 个人网站、常用工具、学校资源等
- 🎨 **现代 UI** - 基于 Tailwind CSS 的精致设计
- ⚡ **高性能** - 静态生成，秒级加载
- 📱 **响应式设计** - 完美支持各种设备

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
│   └── icons/          # 图标文件
├── src/
│   ├── assets/         # 图片资源
│   ├── components/     # 可复用组件
│   │   └── Welcome.astro
│   ├── data/           # 数据文件
│   │   └── links.ts    # 导航链接配置
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
  { id: 'google', name: 'Google', url: 'https://www.google.com/search?q=', icon: 'fab fa-google' },
  { id: 'bing', name: 'Bing', url: 'https://cn.bing.com/search?q=', icon: 'fab fa-microsoft' },
  { id: 'baidu', name: 'Baidu', url: 'https://www.baidu.com/s?wd=', icon: 'fas fa-paw' }
];
```

## 🛠️ 技术栈

- **框架**: [Astro](https://astro.build) - 静态站点生成器
- **样式**: [Tailwind CSS](https://tailwindcss.com) - 实用型 CSS 框架  
- **图标**: [Font Awesome](https://fontawesome.com) - 丰富的图标库
- **HTTP 请求**: [Axios](https://axios-http.com) - Promise 基础的 HTTP 库

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

### 添加新分类

1. 编辑 `src/data/links.ts`
2. 在 `CATEGORIES` 数组中添加新的分类对象
3. 重启开发服务器即可看到效果

### 修改图标

使用 [Font Awesome](https://fontawesome.com/icons) 提供的图标类名，例如：
- `fas fa-link` - 普通图标
- `fab fa-google` - 品牌图标

## 📱 兼容性

- 现代浏览器 (Chrome, Firefox, Safari, Edge)
- 移动设备
- 平板设备

## 📝 许可证

MIT License

## 🤝 贡献

欢迎提交 Issue 和 Pull Request！

---

**Made with ❤️ by lvcdy**
