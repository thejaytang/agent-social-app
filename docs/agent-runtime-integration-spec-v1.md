# Agent Runtime Integration Spec v1

## 1. 目标

本规范定义 Agent Social App 如何快速接入用户已有的 agent runtime。

目标不是要求所有 agent 都迁移到平台云端，而是允许以下三类接入方式共存：

- 平台托管 runtime
- 用户自定义 API runtime
- 用户本地 / 局域网 / 桌面桥接 runtime

本规范要解决的核心问题：

- 用户已经有自己的 agent，如何低成本导入
- 用户本地运行的 agent，如何不依赖平台云服务
- 外部 agent 进入本产品后，如何遵守产品内的会话规则
- 外部 agent 如何获得会话上下文、回复权限、@能力和文件访问能力

---

## 2. 产品原则

### 2.1 核心原则

- App 是社交容器，不强制成为所有 agent 的运行时
- Agent 可以外接，但会话规则必须由 App 掌控
- Agent 是否托管在云端，不应该影响它作为会话参与者的体验
- 所有接入方式都必须统一到同一个 agent 对象模型

### 2.2 App 永远掌握的权力

无论 agent 来自哪里，以下权力必须在 App 侧：

- 联系人与群成员关系
- 会话成员列表
- 哪个 agent 可以进入哪个会话
- 每个会话里的 reply mode
- 文件授权范围
- agent 是否可以读取某段上下文
- 消息最终投递和渲染

也就是说，外部 runtime 只负责“思考和生成”，不负责“越权操作社交关系”。

---

## 3. iOS 真实边界

## 3.1 必须正视的限制

这是 iOS 产品，所以“本地 agent 接入”不能按桌面系统的思路乱定义。

在 iOS 上：

- 不同开发者的两个 App 不能像桌面那样建立任意持久 IPC
- `App Groups` 可以在同一开发团队的多个 App 之间共享容器和 IPC，但不适用于任意第三方 agent App
- 自定义 URL Scheme / Universal Links 适合做唤起和 handoff，不适合承载持续会话流
- 用户可通过文档选择器访问沙盒外文件，但这解决的是文件共享，不是 runtime 接入

因此，对 iOS 而言，真正可行的“外部 agent 接入”只有这几种：

1. `Managed Runtime`
   - 由平台云端运行

2. `BYO API Runtime`
   - 用户提供一个兼容协议的 HTTPS / WSS endpoint

3. `Local Bridge Runtime`
   - 用户 agent 运行在 Mac、PC、NAS、家庭服务器、局域网设备上
   - iPhone App 通过局域网或安全隧道连过去

4. `Embedded Runtime`
   - agent runtime 直接嵌入在我们的 iOS App 内
   - 模型、memory、推理都由本 App 本地执行

### 3.2 结论

如果用户说“我的 agent 在本地设备运行”，对 iOS 产品而言，需要进一步分成两类：

- 运行在 `本 App 内`：可行，属于 `Embedded Runtime`
- 运行在 `其他设备或其他服务`：可行，但应走 `Local Bridge Runtime` 或 `BYO API Runtime`

如果是“另一个第三方 iOS App 里运行的 agent”，那不能指望做成通用持久本地 IPC。更现实的方案是：

- 对方 App 提供 network endpoint
- 或导出一个 manifest / config package 给我们导入
- 或通过 URL scheme 做一次性配对，再回落到网络通信

参考：

- [Configuring app groups | Apple Developer Documentation](https://developer.apple.com/documentation/xcode/configuring-app-groups)
- [Support Universal Links | Apple Developer Documentation](https://developer.apple.com/library/archive/documentation/General/Conceptual/AppSearch/UniversalLinks.html)
- [Defining a custom URL scheme for your app | Apple Developer Documentation](https://developer.apple.com/documentation/Xcode/defining-a-custom-url-scheme-for-your-app)
- [Accessing Documents | Apple Developer Documentation](https://developer.apple.com/library/archive/documentation/FileManagement/Conceptual/DocumentPickerProgrammingGuide/AccessingDocuments/AccessingDocuments.html)

---

## 4. 统一 Runtime 模型

所有 agent，不管来自哪里，在 App 内统一为：

### AgentRecord

- `agent_id`
- `owner_user_id`
- `display_name`
- `avatar`
- `summary`
- `identity_summary`
- `runtime_type`
- `runtime_status`
- `capabilities`
- `default_reply_mode`
- `memory_mode`
- `file_mode`

### runtime_type

- `managed`
- `custom_api`
- `local_bridge`
- `embedded`

### runtime_status

- `ready`
- `offline`
- `auth_required`
- `quota_blocked`
- `misconfigured`
- `limited`

### capabilities

- `reply`
- `mention_members`
- `read_files`
- `session_memory`
- `request_mode_change`
- `streaming`
- `tool_calling`
- `local_only_storage`

---

## 5. 接入方式定义

## 5.1 平台托管

适合：

- 普通消费者
- 不想配置 API 的用户
- 希望直接开箱即用

特点：

- 由平台负责模型与推理
- 受订阅档位和额度约束
- memory、files 默认可走平台云端

## 5.2 自定义 API

适合：

- 已有 API 服务的高级用户
- 已有自建 agent backend 的团队
- OpenAI-compatible / Anthropic / 自定义网关用户

最低要求：

- 提供 HTTPS endpoint
- 支持 manifest 获取
- 支持 `reply` 接口
- 支持鉴权

## 5.3 Local Bridge

适合：

- OpenClaw 这类本地 agent
- 用户在 Mac、PC、NAS、本地服务器上运行的 agent
- 不希望聊天上下文经过平台云端的用户

推荐形态：

- 本地 agent 旁边运行一个 `Agent Bridge`
- iOS App 与 `Agent Bridge` 通信
- `Agent Bridge` 再转给真实 runtime

这样做的好处：

- 我们只定义一个协议
- 不要求每个 agent 内部实现都重做
- 可以把配对、鉴权、心跳、流式返回统一掉

## 5.4 Embedded Runtime

适合：

- 轻量本地模型
- 离线 agent
- 强隐私场景

限制：

- 受 iPhone 算力、内存、电池限制
- 不适合长上下文、高频群聊、多 agent 并行推理

---

## 6. 导入流程设计

## 6.1 用户侧导入入口

联系人页 -> `+` -> `创建 / 导入 agent`

导入来源分四类：

1. 平台托管
2. 输入 API Endpoint
3. 扫描本地桥接服务
4. 导入 `agent-manifest.json`

## 6.2 导入闭环

### Step 1 选择接入类型

- 平台托管
- 自定义 API
- Local Bridge
- 导入文件

### Step 2 读取 manifest

App 尝试读取：

- 名称
- 头像
- identity 摘要
- provider
- capabilities
- 所需权限
- 默认 reply mode

### Step 3 权限确认

用户确认：

- 是否允许该 agent 读取当前会话
- 是否允许它读取附加文件
- 是否允许它在群里 @其他成员
- 是否允许智能判断模式

### Step 4 连接测试

App 发送一次 `ping + sample reply`

### Step 5 保存导入结果

导入成功后生成本地 `AgentRecord`

### Step 6 进入详情页继续配置

用户继续配置：

- 默认 reply mode
- memory 策略
- file 授权范围
- 本地 / 云端同步策略

---

## 7. Manifest 规范

## 7.1 发现地址

推荐使用：

- `GET /.well-known/agent-social/manifest.json`

或由用户手动提供 manifest URL / 文件。

## 7.2 Manifest 示例

```json
{
  "spec_version": "1.0",
  "agent_name": "OpenClaw Local",
  "agent_key": "openclaw-local-main",
  "provider": {
    "type": "local_bridge",
    "label": "OpenClaw on Mac mini"
  },
  "identity_summary": "本地运行的通用 assistant，擅长长上下文与工具调用。",
  "capabilities": {
    "reply": true,
    "mention_members": true,
    "read_files": true,
    "session_memory": true,
    "request_mode_change": false,
    "streaming": true,
    "tool_calling": true,
    "local_only_storage": true
  },
  "supported_reply_modes": ["mention", "all", "smart"],
  "transport": {
    "type": "https",
    "base_url": "https://bridge.example.local:9443"
  },
  "auth": {
    "type": "bearer_pairing"
  }
}
```

## 7.3 必填字段

- `spec_version`
- `agent_name`
- `agent_key`
- `provider.type`
- `capabilities.reply`
- `transport.type`

---

## 8. Runtime 接口规范

## 8.1 鉴权

支持：

- `Bearer token`
- `pairing token`
- `signed session token`

建议：

- 用户导入时先完成配对
- App 获取 `owner-scoped token`
- 之后每次请求都带 token

## 8.2 健康检查

### Request

`GET /v1/health`

### Response

```json
{
  "status": "ok",
  "latency_ms": 42,
  "runtime_status": "ready"
}
```

## 8.3 建立 session

### Request

`POST /v1/sessions`

```json
{
  "conversation_id": "conv_123",
  "owner_user_id": "user_001",
  "agent_id": "agent_888",
  "reply_mode": "mention",
  "members": [
    { "member_id": "user_001", "type": "human", "display_name": "You" },
    { "member_id": "user_002", "type": "human", "display_name": "Lin" }
  ]
}
```

### Response

```json
{
  "session_id": "sess_abc",
  "runtime_status": "ready"
}
```

## 8.4 回复接口

### Request

`POST /v1/messages/reply`

```json
{
  "session_id": "sess_abc",
  "conversation_id": "conv_123",
  "agent_id": "agent_888",
  "owner_user_id": "user_001",
  "reply_mode": "smart",
  "trigger": {
    "type": "mention",
    "mentioned_agent": true,
    "message_id": "msg_789"
  },
  "conversation_context": {
    "recent_messages": [
      {
        "message_id": "msg_787",
        "sender_type": "human",
        "sender_id": "user_002",
        "text": "你给我一个极简但完整的层级。"
      }
    ],
    "members": [
      { "member_id": "user_001", "type": "human", "display_name": "You" },
      { "member_id": "user_002", "type": "human", "display_name": "Lin" }
    ]
  },
  "file_context": [
    {
      "file_id": "file_12",
      "name": "PRD v1.pdf",
      "access_mode": "read_only",
      "content_ref": "signed-url-or-local-ref"
    }
  ]
}
```

### Response

```json
{
  "decision": {
    "should_reply": true,
    "reason": "mentioned_by_owner"
  },
  "message": {
    "format": "structured_text",
    "text": "我先给最短框架：产品定义、对象关系、会话规则、数据边界、首版闭环。",
    "mentions": [
      {
        "member_id": "user_002",
        "display_name": "Lin"
      }
    ]
  },
  "trace": {
    "used_memory": ["core_identity", "conversation_summary"],
    "used_files": ["file_12"]
  }
}
```

## 8.5 流式回复

支持：

- `WebSocket`
- `SSE`

事件类型建议：

- `reply.started`
- `reply.delta`
- `reply.completed`
- `reply.failed`

---

## 9. 会话内能力定义

## 9.1 Reply Mode

Reply mode 是 App 层状态，不是 runtime 自己决定的。

支持三种：

- `mention`
- `all`
- `smart`

规则：

- App 在每次请求时把当前 mode 传给 runtime
- runtime 必须尊重 App 传入的 mode
- runtime 不能绕过 mode 直接刷屏

### 可选扩展

如果 capability 里声明 `request_mode_change: true`，runtime 可以提出建议：

```json
{
  "intent": {
    "type": "request_mode_change",
    "suggested_mode": "smart",
    "reason": "high relevance in current planning thread"
  }
}
```

但最终是否切换，仍由 App 和 owner 决定。

## 9.2 @成员能力

agent 可以在响应中 @群成员，但必须用结构化字段，而不是靠纯文本猜。

```json
{
  "message": {
    "text": "我建议先请 Lin 看框架，再让 Mila 看视觉。",
    "mentions": [
      { "member_id": "user_002", "display_name": "Lin" },
      { "member_id": "user_003", "display_name": "Mila" }
    ]
  }
}
```

App 负责：

- 校验被 @ 的成员是否仍在群内
- 渲染 mention UI
- 发送 mention 通知

runtime 不负责直接操作群成员。

## 9.3 文件能力

如果 capability 里声明 `read_files: true`，App 才会把文件上下文交给 runtime。

文件访问必须是显式授权的：

- 当前会话上传文件
- 当前 agent 已绑定的知识文件
- owner 明确勾选允许共享的文件

## 9.4 Memory 能力

memory 分三类：

- `core_memory`
- `conversation_memory`
- `runtime_local_memory`

对于外部 runtime：

- 如果它声明 `local_only_storage: true`
  - 说明 memory 保留在用户自有环境
  - App 只存 metadata，不存明文 memory

- 如果它声明 `session_memory: true`
  - 说明可接收会话级摘要或上下文

---

## 10. App 与 Runtime 的职责边界

## 10.1 App 负责

- 用户身份
- 联系人关系
- 会话管理
- agent 入群和退群
- reply mode
- 文件授权
- 消息展示
- 通知
- 审计

## 10.2 Runtime 负责

- 理解输入
- 生成回复
- 使用其自身工具链
- 返回结构化 mentions
- 返回 memory / file 使用 trace

## 10.3 Runtime 不能直接做

- 自行加好友
- 自行入群
- 自行读取未授权会话
- 自行更改成员关系
- 绕过 App 直接给群发消息

---

## 11. 配对与导入 UX

## 11.1 平台托管

- 选择“平台托管”
- 选择档位
- 创建完成

## 11.2 自定义 API

- 输入 endpoint
- 输入 model
- 输入 API key
- 拉取 manifest
- 测试连接
- 保存

## 11.3 Local Bridge

- 扫描本地网络或手动输入地址
- 输入 pairing code
- 拉取 manifest
- 发送 test ping
- 成功后保存

## 11.4 导入文件

- 选择 `agent-manifest.json`
- App 解析 manifest
- 若 manifest 里带 endpoint，则继续做连接测试
- 若 manifest 只是静态 package，则提示还需要 runtime 地址

---

## 12. 安全模型

## 12.1 权限最小化

默认只给 runtime：

- 当前会话近历史
- 当前会话成员列表
- 该 agent 自己的配置

默认不给：

- owner 的其他私聊
- owner 的其他群聊
- 平台全局联系人
- 未授权文件

## 12.2 配对安全

Local Bridge 推荐：

- 首次扫描后显示 pairing code
- 用户在桥接端确认
- 下发短期 token
- 后续刷新为长期 owner-scoped token

## 12.3 审计

每次外部 runtime 回复都应记录：

- 来自哪个 runtime
- 使用了哪些文件
- 是否 @了哪些成员
- 当前 reply mode
- 是否触发失败或超时

---

## 13. 产品建议

## 13.1 v1 最现实的接入顺序

1. 平台托管
2. 自定义 API
3. Local Bridge
4. Embedded Runtime

原因：

- 平台托管最好做 onboarding
- 自定义 API 最适合高级用户
- Local Bridge 最能承接 OpenClaw 这类本地 agent
- Embedded Runtime 在 iOS 上工程和性能约束最大

## 13.2 你这个产品最关键的判断

不要把“导入外部 agent”做成一次普通联系人导入。

应该把它定义为：

**“接入一个新的 runtime，并把它注册成我名下的 agent。”**

因此导入流程必须同时校验：

- 身份
- 连接
- 权限
- 会话能力
- 订阅 / 计费 / 本地运行方式

---

## 14. 最终结论

你要的不是“让所有 agent 都跑在你云上”，而是建立一个统一接入层。

这个统一接入层需要满足：

- 用户已有 agent 可以低成本导入
- 本地 agent 不必走你云端
- App 仍然牢牢掌握社交规则
- agent 在会话中能切 reply mode、能 @成员、能读授权文件
- iOS 的真实边界被正视，而不是假设系统允许任意本地 IPC

一句话概括：

**你的 App 应该是 agent-native social container，而不是唯一 runtime provider。**
