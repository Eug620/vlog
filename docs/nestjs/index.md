---
layout: doc
---
# server-nestjs

基于 NestJS 框架开发的后端服务项目，提供完整的 Web 服务功能，包括 RESTful API、WebSocket 实时通信、SSE 服务器推送、用户认证授权等。

## 技术栈

- **框架**: NestJS ^11.0.1
- **运行环境**: Node.js >= 18.x
- **数据库**: MySQL 5.x/8.x
- **ORM**: TypeORM ^0.3.27
- **API 文档**: Swagger ^11.2.1
- **认证授权**: JWT (JSON Web Token) ^11.0.1 + Passport ^0.7.0
- **实时通信**: Socket.IO ^4.8.1
- **服务器推送**: SSE (Server-Sent Events)
- **定时任务**: @nestjs/schedule ^6.1.0
- **日志管理**: Winston ^3.18.3 + nest-winston ^1.10.2
- **验证**: class-validator ^0.14.2
- **加密**: bcrypt ^6.0.0
- **会话管理**: express-session ^1.18.2
- **文件上传**: multer ^2.0.2
- **验证码**: svg-captcha ^1.4.0
- **包管理器**: pnpm

## 项目结构

```
src/
├── common/              # 公共模块
│   ├── filter/         # 全局异常过滤器
│   └── interceptor/    # 全局拦截器（响应转换）
├── config/             # 配置文件
├── logger/             # 日志服务
├── modules/            # 业务模块
│   ├── alert/          # 系统警报模块
│   ├── apply/          # 申请模块
│   ├── auth/           # 认证授权模块
│   ├── captcha/        # 验证码模块
│   ├── friend/         # 好友模块
│   ├── member/         # 成员模块
│   ├── room/           # 房间模块
│   ├── sse/            # SSE实时推送模块
│   └── user/           # 用户模块
├── socket/             # WebSocket 网关
├── app.module.ts       # 根模块
└── main.ts             # 应用入口
```

## 主要功能

### 1. 用户系统
- 用户注册、登录、信息管理
- 密码加密存储（bcrypt）
- 用户搜索

### 2. 认证授权
- JWT 令牌认证
- Passport 策略集成
- WebSocket 连接认证
- 支持 query 参数传递 JWT（用于 SSE）

### 3. 房间与成员管理
- 创建和管理聊天房间
- 房间成员管理
- 申请加入房间流程

### 4. 好友系统
- 添加好友
- 好友列表管理
- 好友在线状态通知

### 5. WebSocket 实时通信
- **服务端口**: 与主服务相同（默认 3000）
- **连接路径**: `/websocket`
- **支持跨域**: 允许所有来源
- **认证方式**: JWT 令牌（通过 `auth.token` 传递）
- **消息类型**:
  - `message` - 普通消息
  - `user` - 单对单消息
  - `room` - 房间群聊消息
  - `init` - 初始化用户连接
  - `online` - 房间成员在线列表
  - `onlineFriends` - 在线好友列表
  - `status` - 好友状态变更通知
  - `sender` - 消息发送回执
  - `alert` - 系统警报消息

### 6. SSE 服务器推送
- **接口地址**: `GET /sse?token={jwt_token}`
- **功能特性**:
  - 向指定用户推送消息
  - 向所有用户广播消息
  - 自动连接断开清理
  - JWT 认证支持（从 query 参数获取 token）
- **使用场景**: 系统通知、实时数据推送等

### 7. 定时任务
- 每日凌晨自动清空 `public` 目录下的所有文件夹
- 保留 public 目录下的文件

### 8. 验证码
- SVG 图形验证码生成
- 4位数字验证码
- 过滤易混淆字符（0o1i）

### 9. 系统警报
- 通过 WebSocket 广播系统通知
- REST API 接口触发警报
- 支持自定义警报消息内容

### 10. API 文档
- Swagger 自动生成（访问路径：`/docs`）
- 支持 Bearer Token 认证

### 11. 静态资源
- 支持静态文件访问（前缀：`/public`）
- 自动映射 public 目录

### 12. 会话管理
- 基于 express-session 的会话管理
- 默认会话过期时间 60 秒
- 支持 HTTP-only Cookie

### 13. 定时任务
- 每日凌晨自动清空 `public` 目录下的所有文件夹
- 保留 public 目录下的文件
- 递归删除文件夹及其内容

## 环境配置

根据环境选择对应的配置文件：

- 开发环境：`.env.dev`
- 生产环境：`.env.prod`

### 配置项说明

```bash
# 数据库配置
DB_HOST=localhost          # 数据库地址
DB_PORT=3306              # 数据库端口
DB_USER=root              # 数据库用户名
DB_PASSWD=root            # 数据库密码
DB_DATABASE=database_nest # 数据库名

# 环境配置
NODE_ENV=dev              # 环境标识（dev/prod）
PORT=3000                 # 服务端口（默认 3000）

# JWT 配置
JWT_SECRET=server-nestjs-jwt-secret  # JWT 密钥
JWT_EXPIRES_IN=24h                 # JWT 过期时间

# Session 配置（在 main.ts 中配置）
SESSION_SECRET=your-secret-key     # Session 密钥
```
