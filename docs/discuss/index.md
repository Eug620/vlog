---
layout: doc
---

# Discuss

一个基于 Vue 3 + TypeScript + Vite 的现代实时聊天应用，支持好友私聊和群组房间聊天功能，采用 Socket.IO 实现双向实时通信。

## ✨ 功能特性

### 用户系统
- 用户登录认证与权限管理
- 个人信息管理与设置
- Token 持久化存储

### 好友聊天
- 添加好友与好友搜索
- 一对一实时消息推送
- 消息历史记录本地持久化
- 好友在线状态实时同步

### 房间聊天
- 创建和管理聊天房间
- 房间搜索与加入
- 多人实时群聊
- 房间成员在线状态显示
- 消息历史记录本地持久化

### 申请管理
- 好友申请处理（接受/拒绝）
- 房间邀请管理

## 🛠️ 技术栈

### 核心框架
- **Vue 3.5.22** - 渐进式 JavaScript 框架，使用 Composition API
- **TypeScript 5.9.3** - 提供类型安全和更好的开发体验
- **Vite (rolldown-vite 7.1.14)** - 下一代前端构建工具，极速开发体验

### 状态管理与路由
- **Pinia 3.0.4** - Vue 官方状态管理库，替代 Vuex
- **Vue Router 4.6.3** - 官方路由管理器，支持嵌套路由和路由守卫

### UI 与样式
- **Tailwind CSS 4.1.17** - 实用优先的 CSS 框架，快速构建现代 UI
- **Sass 1.93.3** - CSS 预处理器，支持嵌套和模块化

### 网络与数据
- **Axios 1.13.2** - HTTP 客户端，支持请求拦截和响应处理
- **Socket.IO Client 4.8.1** - WebSocket 客户端，实现实时双向通信
- **LocalForage 1.10.0** - 更好的本地存储 API，支持 IndexedDB/WebSQL

### 工具库
- **Day.js 1.11.19** - 轻量级日期处理库，API 与 Moment.js 兼容
- **Lodash-es 4.17.21** - JavaScript 实用工具库，ES Module 版本
- **js-cookie 3.0.5** - Cookie 操作库
- **NProgress 0.2.0** - 页面加载进度条

## 📁 项目结构

```
Discuss/
├── public/                    # 静态资源
│   ├── _headers              # Cloudflare Headers 配置
│   ├── _redirects            # Cloudflare 重定向规则
│   ├── siam.svg              # SVG 图标
│   └── Tiananmen.svg         # SVG 图标
├── src/
│   ├── api/                  # API 接口模块
│   │   ├── apply/            # 申请相关接口
│   │   ├── friend/           # 好友相关接口
│   │   ├── member/           # 成员相关接口
│   │   ├── room/             # 房间相关接口
│   │   ├── sse/              # SSE 相关接口
│   │   └── user/             # 用户相关接口
│   ├── assets/               # 资源文件
│   │   └── style/            # 全局样式
│   │       ├── index.scss    # 主样式文件
│   │       └── taillwind.css # Tailwind CSS 入口
│   ├── components/           # 公共组件
│   │   └── index.ts          # 组件导出入口
│   ├── directives/           # 自定义指令
│   │   └── vEnter.ts         # 回车事件指令
│   ├── layout/               # 布局组件
│   │   └── index.vue         # 主布局
│   ├── plugin/               # 插件配置
│   │   ├── axios.ts          # Axios 实例配置
│   │   └── dayjs.ts          # Dayjs 插件配置
│   ├── router/               # 路由配置
│   │   ├── index.ts          # 路由实例
│   │   └── routes.ts         # 路由定义
│   ├── settings/             # 项目设置
│   │   └── index.ts          # 全局配置
│   ├── store/                # 状态管理
│   │   ├── index.ts          # Pinia 实例
│   │   └── modules/          # Pinia 模块
│   │       ├── apply.ts      # 申请状态
│   │       ├── database.ts   # 数据库状态
│   │       ├── friend.ts     # 好友状态
│   │       ├── menu.ts       # 菜单状态
│   │       ├── room.ts       # 房间状态
│   │       ├── socket.ts     # Socket 状态
│   │       └── user.ts       # 用户状态
│   ├── utils/                # 工具函数
│   │   └── index.ts          # 通用工具
│   ├── views/                # 页面视图
│   │   ├── 404/              # 404 页面
│   │   ├── apply/            # 申请管理页面
│   │   ├── dashboard/        # 首页仪表板
│   │   ├── friend/           # 好友模块
│   │   │   ├── layout.vue    # 好友布局
│   │   │   ├── search.vue    # 搜索好友
│   │   │   └── index.vue     # 好友聊天
│   │   ├── login/            # 登录页面
│   │   ├── room/             # 房间模块
│   │   │   ├── layout.vue    # 房间布局
│   │   │   ├── search.vue    # 搜索房间
│   │   │   ├── create.vue    # 创建房间
│   │   │   └── index.vue     # 房间聊天
│   │   └── setting/          # 设置页面
│   ├── App.vue               # 根组件
│   ├── importRoutercom.ts    # 路由组件导入工具
│   ├── main.ts               # 应用入口
│   └── vite-env.d.ts         # Vite 类型声明
├── .env                      # 开发环境变量
├── .env.prod                 # 生产环境变量
├── .github/
│   └── workflows/
│       └── static.yml        # GitHub Pages 部署配置
├── .gitignore                # Git 忽略文件
├── .vscode/
│   └── extensions.json       # VSCode 推荐扩展
├── dist/                     # 构建输出目录
├── index.html                # HTML 入口
├── package.json              # 项目依赖配置
├── tsconfig.json             # TypeScript 配置
├── tsconfig.app.json         # 应用 TypeScript 配置
├── tsconfig.node.json        # Node TypeScript 配置
└── vite.config.ts            # Vite 配置
```
