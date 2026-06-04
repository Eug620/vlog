---
layout: doc
---

# 🚀 快速开始

### 前置要求

- Node.js >= 18.x
- MySQL 5.x 或 8.x
- pnpm 包管理器

### 安装依赖

```bash
pnpm install
```

### 配置环境

1. 复制环境配置文件：
```bash
cp .env.dev .env.local
```

2. 修改 `.env.local` 中的数据库配置和 JWT 密钥

### 启动开发服务器

```bash
# 开发模式（热重载）
pnpm run start:dev

# 调试模式
pnpm run start:debug
```
