---
layout: doc
---

# 📦 部署

```bash
# 构建项目
pnpm run build

# 启动生产服务
pnpm run start:prod

# 使用 PM2 部署
pnpm run pm2start
```

## 可用脚本

| 命令 | 说明 |
|------|------|
| `pnpm run build` | 构建项目 |
| `pnpm run start` | 启动应用 |
| `pnpm run start:dev` | 开发模式启动（热重载） |
| `pnpm run start:debug` | 调试模式启动 |
| `pnpm run start:prod` | 生产模式启动 |
| `pnpm run format` | 格式化代码 |
| `pnpm run lint` | 代码检查并自动修复 |
| `pnpm run test` | 运行单元测试 |
| `pnpm run test:watch` | 监听模式运行测试 |
| `pnpm run test:cov` | 生成测试覆盖率报告 |
| `pnpm run test:e2e` | 运行端到端测试 |
| `pnpm run pm2start` | 使用 PM2 启动服务 |
| `pnpm run commit` | 提交代码（遵循 Conventional Commits 规范） |

## WebSocket 使用示例

### 客户端连接

```javascript
import { io } from 'socket.io-client';

const socket = io('http://localhost:3000', {
  path: '/websocket',
  auth: {
    token: 'your-jwt-token'
  }
});

// 监听连接成功
socket.on('connect', () => {
  console.log('Connected to WebSocket server');

  // 初始化用户
  socket.emit('init');
});

// 监听普通消息
socket.on('message', (data) => {
  console.log('Received message:', data);
});

// 监听单对单消息
socket.on('user', (data) => {
  console.log('Received private message:', data);
});

// 监听房间消息
socket.on('room', (data) => {
  console.log('Received room message:', data);
});

// 监听在线状态
socket.on('online', (data) => {
  console.log('Online users in room:', data);
});

// 监听好友状态
socket.on('status', (data) => {
  console.log('Friend status changed:', data);
});

// 监听系统警报
socket.on('alert', (data) => {
  console.log('System alert:', data);
});

// 发送单对单消息
socket.emit('user', {
  sender: 'target-user-id',
  message: 'Hello!'
});

// 发送房间消息
socket.emit('room', {
  room: 'room-id',
  message: 'Hello room!'
});
```

## SSE 使用示例

### 前端使用示例

```javascript
// 建立 SSE 连接
const token = 'your-jwt-token';
const eventSource = new EventSource(`/sse?token=${token}`);

// 监听消息
eventSource.onmessage = (event) => {
  const data = JSON.parse(event.data);
  console.log('收到消息:', data);
};

// 监听错误
eventSource.onerror = (error) => {
  console.error('SSE连接错误:', error);
};

// 关闭连接
eventSource.close();
```

### 后端推送消息

```typescript
import { SseService } from '@/modules/sse/sse.service';

@Injectable()
export class YourService {
  constructor(private readonly sseService: SseService) {}

  // 向指定用户推送消息
  async notifyUser(userId: string) {
    this.sseService.sendDataToUser(userId, {
      type: 'notification',
      message: '您有新的消息',
      timestamp: new Date()
    });
  }

  // 向所有用户广播消息
  async broadcastMessage() {
    this.sseService.broadcast({
      type: 'system',
      message: '系统通知',
      timestamp: new Date()
    });
  }
}
```

## 数据库实体

项目包含以下数据表实体：

- **UserEntity** - 用户表
- **RoomEntity** - 房间表
- **MemberEntity** - 房间成员表
- **ApplyEntity** - 申请记录表
- **FriendEntity** - 好友关系表

## 开发规范

项目已配置以下开发工具：

- **ESLint** - 代码质量检查
- **Prettier** - 代码格式化
- **Husky** - Git 钩子
- **lint-staged** - 提交前代码检查
- **Commitlint** - 提交信息规范

提交代码时请遵循 Conventional Commits 规范：

```bash
pnpm run commit
```

## 访问地址

启动服务后，可通过以下地址访问：

- **API 服务**: http://localhost:3000
- **Swagger 文档**: http://localhost:3000/docs
- **WebSocket 服务**: ws://localhost:3000/websocket
- **静态资源**: http://localhost:3000/public
- **SSE 服务**: http://localhost:3000/sse
- **系统警报 API**: POST http://localhost:3000/alert

## 注意事项

1. **生产环境安全**：
   - 生产环境请关闭 TypeORM 的 `synchronize` 选项，使用数据库迁移
   - 请修改 JWT 密钥和 Session 密钥为实际生产环境的强密码
   - 生产环境请配置 HTTPS 和 CORS 策略
   - Session 的 `secure` 选项在生产环境应设置为 `true`

2. **WebSocket 认证**：
   - WebSocket 连接需要在连接时携带 JWT 令牌进行认证
   - 在 `auth.token` 字段中传递 token
   - 使用 `WsJwtAuthGuard` 守卫保护整个网关

3. **SSE 认证**：
   - SSE 连接需要在 query 参数中传递 JWT token
   - 格式：`/sse?token={jwt_token}`
   - 使用 `JwtQueryGuard` 进行认证

4. **定时任务**：
   - 定时任务默认每天凌晨执行（00:00）
   - 会清空 `public` 目录下的所有文件夹，但保留文件
   - 使用 `CronExpression.EVERY_DAY_AT_MIDNIGHT` 表达式

5. **环境判断**：
   - Docker 环境需要手动设置 `NODE_ENV` 变量
   - 默认使用 `.env.dev` 配置文件（当 `NODE_ENV !== 'dev'` 时使用 `.env.prod`）

6. **Session 配置**：
   - 默认会话过期时间为 60 秒
   - Cookie 设置为 `httpOnly: true`
   - 生产环境需根据实际需求调整 `maxAge`

7. **验证码配置**：
   - 使用 4 位数字验证码
   - 自动过滤易混淆字符（0o1i）
   - 添加 2 条干扰线增强安全性

## License

UNLICENSED