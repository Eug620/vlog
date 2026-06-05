---
layout: doc
---

# 🚀 快速开始

### 环境要求

- **Node.js** >= 18
- **npm** 或 **pnpm**

### 安装依赖

```bash
npm install
```

### 配置环境变量

复制 `.env` 文件并根据实际情况修改配置：

```bash
# 构建信息
VITE_APP_BUILD_INFO=development

# API 基础路径
VITE_APP_BASE_API=/api

# 路由基础路径
VITE_APP_BASE_URL=/

# 是否使用 Mock 数据
VITE_APP_BUILD_MODE=false

# 路由路径
VITE_BASE=/

# 应用标题
VITE_APP_TITLE=dev

# 接口请求地址
VITE_APP_API_BASE_URL=http://192.168.58.190:3000
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:8000

### 生产构建

```bash
npm run build
```

构建产物输出到 `dist` 目录。

### 预览构建

```bash
npm run preview
```

## 🔌 核心功能说明

### WebSocket 实时通信

项目使用 Socket.IO 实现前后端实时双向通信，支持以下事件：

| 事件 | 说明 |
|------|------|
| `connect` | WebSocket 连接建立 |
| `disconnect` | WebSocket 连接断开 |
| `exception` | 异常处理（触发登出） |
| `user` | 接收好友发送的消息 |
| `sender` | 接收已发送消息的回显 |
| `room` | 接收房间消息 |
| `online` | 房间成员在线状态更新 |
| `status` | 好友状态更新 |
| `onlineFriends` | 初始化获取所有在线好友列表 |

### 本地存储策略

使用 **LocalForage** 和 **Pinia** 实现消息历史记录的本地持久化：

- **User_Message** - 用户消息历史存储
- **Room_Message** - 房间消息历史存储
- 采用防抖机制（1秒延迟）避免频繁写入
- 支持 IndexedDB/WebSQL，存储容量更大

### 路由结构

| 路径 | 说明 | 认证 |
|------|------|------|
| `/login` | 登录页面 | 否 |
| `/dashboard` | 首页仪表板 | 是 |
| `/friend/dashboard` | 好友欢迎页 | 是 |
| `/friend/search` | 搜索好友 | 是 |
| `/friend/:id` | 与好友聊天 | 是 |
| `/room/dashboard` | 房间欢迎页 | 是 |
| `/room/search` | 搜索房间 | 是 |
| `/room/create` | 创建房间 | 是 |
| `/room/:id` | 房间聊天 | 是 |
| `/apply` | 申请管理 | 是 |
| `/setting` | 设置页面 | 是 |

### API 模块

项目采用模块化的 API 设计，各模块职责清晰：

- **api/user** - 用户登录、登出、信息获取
- **api/friend** - 好友添加、搜索、列表获取
- **api/member** - 成员管理
- **api/room** - 房间创建、搜索、加入
- **api/apply** - 申请处理（好友/房间）
- **api/sse** - SSE 事件推送

### 状态管理

使用 Pinia 管理应用状态，各模块独立管理：

- **user** - 用户信息、Token、登录状态
- **friend** - 好友列表、好友状态
- **room** - 房间列表、房间信息
- **socket** - WebSocket 连接、消息存储
- **database** - LocalForage 数据库实例
- **apply** - 申请列表
- **menu** - 菜单状态

