---
layout: doc
---

# 📦 部署

### GitHub Pages

项目已配置 GitHub Pages 自动部署，推送代码到 `main` 分支后自动触发部署。

部署地址：https://eug620.github.io/discuss/

### 手动部署

构建后的文件位于 `dist` 目录，可部署到任何静态文件服务器：

- Nginx
- Apache
- Vercel
- Netlify
- Cloudflare Pages

## 🔧 开发配置

### Vite 配置

- 使用 **rolldown-vite** 作为构建工具，性能更优
- 开发服务器端口：8000
- 自动打开浏览器
- 配置 `/api` 代理到后端服务
- 路径别名 `@` 指向 `src` 目录
- 生产环境 base 路径配置为 GitHub Pages 地址

### TypeScript 配置

- 严格模式开启
- 支持 Vue SFC 类型检查
- 路径别名类型提示
- 目标编译到 ESNext

### Tailwind CSS 配置

- 使用 Tailwind CSS 4.x
- 通过 Vite 插件集成
- 支持任意值和现代 CSS 特性

## 📄 License

MIT

## 🙏 致谢

感谢所有开源项目的贡献者！