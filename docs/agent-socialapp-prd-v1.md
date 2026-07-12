# Agent Social App PRD v1

## 1. 文档目标

本文件定义一款以极简主义为设计原则、以 `agent` 与 `human` 和谐共存为核心价值观的 iOS 社交聊天产品。本文档同时覆盖：

- 产品经理视角的完整功能设计
- UI / UX 视角的完整设计思路
- 前端工程视角的完整设计思路
- 后端工程视角的完整设计思路
- 消费者视角的体验设计思路

本文档的核心要求是：**所有功能、交互、状态变化、异常处理都必须闭环**。

---

## 2. 产品定义

### 2.1 一句话定义

这是一个 `human` 与 `agent` 共同参与聊天的社交产品。`human` 是关系主体，`agent` 是由用户拥有并控制的并行智能实体，可被带入会话、群聊和关系场景中，参与表达、协作、总结与陪伴。

### 2.2 核心价值观

- `human first, agent present`
  - 人始终是关系发起者和责任主体，agent 是高可见、高可控的参与者。
- `minimal by default`
  - 首页结构简单，默认路径短，复杂能力折叠到二级界面。
- `no hidden behavior`
  - agent 何时能看、何时能说、说了什么、为什么说，都必须可解释、可关闭。
- `trust through control`
  - 用户对自己的 agent 有明确控制权，对会话内 agent 的参与边界有明确感知。

### 2.3 产品定位

本产品不是传统 IM 的功能复制品，也不是单独的 AI 聊天工具，而是一个新的社交对象模型：

- 会话中存在两类成员：`human` 与 `agent`
- `agent` 不是工具入口，而是会话成员
- `agent` 不可脱离 owner 独立存在
- `agent` 不可被别人单独添加为联系人
- 一个用户可以创建多个并行 agent

---

## 3. 产品边界

### 3.1 v1 必做

- 账号注册与登录
- 三栏结构：`聊天 / 联系人 / 设置`
- 人与人一对一聊天
- 群聊
- 用户创建多个 agent
- 在会话中添加自己的 agent
- 会话内 agent 的三种回复模式：
  - `仅 @ 回复`
  - `全部回复`
  - `智能判断`
- agent 详情页查看和管理：
  - profile
  - identity
  - memory
  - files
  - skills
  - participation settings
- 云端主存储，本地缓存
- 完整通知、失败恢复、删除确认、退出确认闭环

### 3.2 v1 不做

- 公开 agent 市场
- 其他用户将我的 agent 加为联系人
- agent 独立发起加好友
- 语音/视频聊天
- 朋友圈 / feed
- 支付
- 企业组织架构
- 第三方插件生态

---

## 4. 信息架构

### 4.1 一级导航

1. `聊天`
2. `联系人`
3. `设置`

### 4.2 二级结构

#### 聊天

- 会话列表
- 新建聊天 / 新建群聊
- 会话详情
- 群成员管理
- agent 参与面板

#### 联系人

- `全部`
- `真人`
- `我的 Agents`

每个 agent 都在联系人页中以独立卡片展示，但它不是任何其他用户可添加的公共联系人。

#### 设置

- 账号与安全
- 通知
- 存储与同步
- 隐私与数据
- 模型与性能偏好
- 帮助与反馈

---

## 5. 核心对象模型

### 5.1 User

- 平台用户
- 可拥有多个 agent
- 可添加真人联系人
- 可发起或加入会话
- 对自己拥有的 agent 具有全部控制权

### 5.2 Agent

- 必须有 owner
- 不可脱离 owner 独立存在
- 可作为会话内独立发言者
- 不可被其他用户单独添加到联系人
- 可进入 owner 所在的一对一聊天或群聊

### 5.3 Contact

- 联系人关系只在人与人之间建立
- agent 在联系人页中可见，仅作为 owner 的资产与入口存在

### 5.4 Conversation

- 类型：
  - `direct`
  - `group`
- 成员的主体是 `human`
- `agent` 是会话成员，但进入前提是 owner 已在该会话中

### 5.5 Agent Presence

- 指 agent 在某个会话中的参与状态
- 包含：
  - 是否已加入
  - 回复模式
  - 可见知识范围
  - 最近一次发言时间
  - 是否被静音

### 5.6 Memory

- `Core Memory`
  - agent 的长期身份信息、偏好、规则
- `Conversation Memory`
  - agent 在某个会话里的摘要与长期记忆
- `Attached Knowledge`
  - owner 上传给 agent 的文件和结构化资料

---

## 6. 系统级规则

### 6.1 Agent 生命周期规则

- 创建 agent 时必须绑定 owner
- owner 注销账号后，agent 进入冻结期，冻结期结束后删除
- owner 删除 agent 时，系统必须提示：
  - 将退出所有会话
  - 删除云端 memory
  - 删除关联文件
  - 删除后不可恢复，除非开启回收站机制
- v1 建议保留 `7 天软删除`

### 6.2 会话准入规则

- agent 只能进入 owner 已加入的会话
- direct chat 中，owner 可带入自己的 agent
- group chat 中，每个成员可带入自己的 agent
- owner 退出群聊时，owner 名下在该群的所有 agent 自动退出
- owner 被移出群聊时，owner 名下 agent 自动被移除

### 6.3 发言规则

- 每个 agent 在每个会话中有独立的回复模式
- 默认模式为 `仅 @ 回复`
- `全部回复` 必须二次确认
- `智能判断` 需明确说明：
  - 仅在相关性高时响应
  - 可能漏答
  - 可随时切回 `仅 @ 回复`

### 6.4 数据边界规则

- agent 默认只读取：
  - 自身 core memory
  - 当前会话的上下文
  - owner 显式授权的附加文件
- agent 默认不读取 owner 的其他私聊或其他群聊内容
- 若用户要开放更多知识范围，必须在 agent 详情页中显式授权

### 6.5 可解释性规则

- 所有 agent 发言必须显示：
  - agent 名称
  - owner 归属
  - 本次发言触发方式
    - 被 @
    - 自动响应
    - 智能判断
- 用户可查看“为什么它会回复”

---

## 7. 产品经理视角：完整功能设计

## 7.1 Onboarding

### 目标

让用户在最短路径内理解三件事：

- 这里既有人类聊天，也有 agent 参与
- agent 是我的资产，不是公共 bot
- 我可以把 agent 带入对话

### 流程

1. 注册 / 登录
2. 选择用户名与头像
3. 创建第一个 agent
   - agent 名称
   - identity 模板
   - 语气风格
4. 导入联系人或跳过
5. 进入首页

### 闭环要求

- 创建完成后必须立即展示 agent 卡片
- 若用户跳过创建 agent，系统仍保留空状态入口
- onboarding 中任何一步退出，都可从设置中继续补完

## 7.2 聊天功能

### 会话列表

- 展示最近会话
- 展示未读数
- 展示会话内 active agents 数量
- 展示 agent 触发提示
  - 如“你的 agent 被 @ 了”

### 新建会话

- 新建一对一聊天
- 新建群聊
- 从联系人中选人
- 创建后可立即添加自己的 agent

### 会话页面

- 消息流同时展示 human 和 agent 消息
- agent 消息需明显区分但不喧宾夺主
- 顶部展示成员数和 active agents 数
- 提供 `Manage Agents` 入口

### 消息输入

- 文本输入
- @ human
- @ agent
- 附件
- 快捷调用自己的 agent

### 闭环要求

- 发送成功后立即本地回显
- 发送失败明确提示并支持重试
- 被 @ 的 agent 若未在会话中，先提示是否邀请加入
- agent 响应前显示状态：
  - thinking
  - reading files
  - waiting for permission

## 7.3 群聊功能

### 建群

- 选择真人联系人
- 输入群名
- 创建成功后进入群详情
- 允许群成员分别添加自己的 agent

### 群成员管理

- 只允许 human 邀请 human
- 每个 human 只能管理自己名下 agent
- 群主可移除 human
- human 被移除时，其 agent 自动退出

### 闭环要求

- 新增 agent 时，群消息流产生系统消息
- 修改回复模式时，消息流产生轻提示
- 移除 human 时，系统同步说明相关 agent 已退出

## 7.4 联系人功能

### 联系人列表

- `全部 / 真人 / 我的 Agents`
- 支持搜索
- 支持固定联系人与固定 agent

### 真人联系人

- 查看 profile
- 发起聊天
- 建群

### 我的 Agents

- 查看 agent 状态
- 查看最近活跃会话
- 打开 agent 详情页

### 闭环要求

- 添加真人联系人后，列表即时更新
- 创建 agent 后，自动出现在“我的 Agents”
- 删除 agent 后，列表即时移除并提示受影响会话数

## 7.5 Agent 详情页

### 信息结构

- `Profile`
  - 头像、名称、简介、owner
- `Identity`
  - system prompt、人格设定、说话风格
- `Memory`
  - core memory
  - conversation summaries
- `Files`
  - 已上传资料
  - 文件大小
  - 最近更新时间
- `Skills`
  - 可用能力
- `Participation`
  - 默认回复模式
  - 默认是否自动进群

### 闭环要求

- 修改 identity 后，明确显示“已保存”
- 上传文件后显示上传进度、解析进度、索引完成状态
- 删除 memory 前必须二次确认
- 删除文件后要提示是否影响当前会话表现

## 7.6 通知

### 类型

- human 消息通知
- agent 被 @ 通知
- agent 自动回复完成通知
- 文件索引完成通知
- 同步失败通知

### 闭环要求

- 点通知必须能跳到对应上下文
- 失败类通知必须能直达修复入口

## 7.7 存储与同步

### 原则

- 云端主存储
- 本地缓存
- 显示缓存大小
- 用户可清理缓存

### 闭环要求

- 上传文件后显示是否已同步
- 网络中断时明确提示“仅保存在本地草稿”
- 恢复网络后自动续传并提示结果

---

## 8. UI / UX 视角：完整设计思路

## 8.1 设计理念

- 极简不是信息少，而是路径短、层级清、噪音低
- agent 必须被清晰标记，但不应视觉污染主聊天流
- 所有重要动作都必须让用户知道：
  - 现在发生了什么
  - 为什么会这样
  - 下一步能做什么

## 8.2 视觉风格

- 主视觉语言：克制、安静、可信
- 色彩：
  - 大面积中性色
  - human 与 agent 使用不同辅助色
  - 破坏性操作使用警示色
- 字体：
  - 系统字体优先，强调可读性
- 动效：
  - 仅用于状态切换、上传进度、agent thinking
  - 禁止过度拟物或情绪化动画

## 8.3 导航设计

- 底部 tab 只保留三项
- 一级页面不超过 3 个主要操作
- 复杂设置收纳到二级页

## 8.4 聊天页设计

### 视觉层级

- human 消息气泡为主
- agent 消息气泡更轻，带标签
- 系统消息最轻

### Agent 呈现

- agent 头像较小
- 消息头部显示：
  - agent name
  - owner name
- 展开后可看触发原因和知识来源摘要

### 输入体验

- 输入框上方提供快捷 chips：
  - `@我的 agent`
  - `加文件`
  - `切换模式`

## 8.5 联系人页设计

- 顶部搜索
- 下方筛选切换
- 列表中 human 和 agent 样式统一，但 agent 必有明显身份标识
- 点击 human 打开资料页
- 点击 agent 打开 agent 详情页

## 8.6 Agent 详情页设计

- 使用卡片式信息结构
- 重要信息前置：
  - 名称
  - 简介
  - 最近活跃
  - 已进入的会话数量
- 二级标签页：
  - `身份`
  - `记忆`
  - `文件`
  - `技能`
  - `参与`

## 8.7 闭环交互规范

- 任何异步操作都必须出现处理中状态
- 任何 destructive 操作都必须二次确认
- 任何自动行为都必须可追溯
- 任何失败都必须给出恢复路径

### 标准状态模板

- `idle`
- `loading`
- `success`
- `failed`
- `retryable`

## 8.8 空状态设计

- 无聊天时：
  - 引导新建聊天
  - 引导将 agent 带入第一段对话
- 无联系人时：
  - 引导添加联系人
- 无 agent 时：
  - 引导创建第一个 agent

## 8.9 可访问性

- 支持动态字体
- VoiceOver 全量覆盖
- 颜色不可作为唯一状态表达
- 触控面积不小于 iOS 标准

---

## 9. 前端工程师视角：完整设计思路

## 9.1 技术栈建议

- 平台：iOS
- UI：SwiftUI
- 并发：Swift Concurrency
- 架构：Modular Clean Architecture
- 本地数据：SQLite / Core Data 作为缓存层
- 实时通信：WebSocket
- 媒体与文件：系统文件选择器 + 后台上传队列

## 9.2 模块划分

- `AppShell`
- `Auth`
- `ChatList`
- `Conversation`
- `Contacts`
- `AgentDetail`
- `Settings`
- `Sync`
- `DesignSystem`
- `Networking`
- `StorageCache`
- `Analytics`

## 9.3 页面状态设计

每个页面必须统一处理：

- 首次加载
- 下拉刷新
- 空状态
- 分页
- 网络断开
- 局部失败
- 重新同步

## 9.4 会话页工程要求

- 消息列表使用增量渲染
- 支持大群加载优化
- 输入状态、agent 状态和消息流分离建模
- 本地先回显，服务端确认后修正
- agent thinking 使用独立事件流，不与普通消息混写

## 9.5 联系人页工程要求

- human / agent 统一列表模型，UI 通过 type 分发
- 支持本地搜索和远程搜索
- agent 卡片数据按需加载

## 9.6 Agent 详情页工程要求

- memory、files、skills 独立分页加载
- 大文件列表懒加载
- 文件上传使用后台任务
- 编辑表单需支持草稿与离开保护

## 9.7 本地缓存策略

- 最近 30 天会话缓存
- 最近查看的 agent metadata 缓存
- 文件只缓存缩略信息与最近访问内容
- 缓存清理后不影响云端主数据

## 9.8 埋点与诊断

- 创建 agent 成功率
- 首次把 agent 带入聊天的转化率
- agent 回复模式切换率
- 消息发送失败率
- 文件上传完成率

## 9.9 测试策略

- 单元测试
  - view model
  - state reducer
  - repository
- UI 自动化测试
  - onboarding
  - 新建聊天
  - 添加 agent
  - 切换回复模式
- 弱网测试
- 大会话滚动性能测试

---

## 10. 后端工程师视角：完整设计思路

## 10.1 架构目标

- 支撑实时聊天
- 支撑多 agent 并行参与
- 支撑云端 memory 和文件存储
- 明确权限边界
- 控制模型调用成本

## 10.2 服务拆分建议

- `Auth Service`
- `User Service`
- `Contact Service`
- `Conversation Service`
- `Message Service`
- `Agent Service`
- `Agent Memory Service`
- `File Service`
- `Inference Orchestrator`
- `Notification Service`
- `Moderation & Safety Service`
- `Analytics Service`

## 10.3 核心数据存储

- 主库：PostgreSQL
- 缓存 / 队列：Redis
- 文件存储：Object Storage
- 检索 / 向量：pgvector 或独立 vector store
- 搜索：OpenSearch / PostgreSQL FTS

## 10.4 核心数据模型

### users

- id
- profile
- auth credentials
- settings

### agents

- id
- owner_id
- name
- avatar
- identity_config
- default_participation_mode
- status

### contacts

- id
- user_id
- contact_user_id
- remark
- relation_status

### conversations

- id
- type
- title
- created_by

### conversation_members

- conversation_id
- user_id
- role

### conversation_agents

- conversation_id
- agent_id
- owner_id
- participation_mode
- status

### messages

- id
- conversation_id
- sender_type
- sender_id
- content
- message_type
- status

### agent_memories

- id
- agent_id
- memory_type
- scope
- content
- source_ref

### files

- id
- owner_id
- agent_id
- storage_key
- mime_type
- size
- parsing_status

## 10.5 核心业务流程

### 用户发送消息

1. 客户端提交消息
2. Message Service 持久化
3. 广播给会话成员
4. 检查是否命中 agent 触发条件
5. 若命中，调用 Inference Orchestrator
6. 产出 agent response event
7. 消息落库并广播

### 用户将 agent 加入会话

1. 校验 owner 是否在会话中
2. 校验 agent 是否归属当前用户
3. 创建 conversation_agents 记录
4. 广播系统消息
5. 返回最新会话状态

### owner 退出群聊

1. 移除 conversation_member
2. 查找 owner 名下 conversation_agents
3. 批量移除
4. 写入系统消息
5. 推送给剩余成员

## 10.6 推理编排

Inference Orchestrator 负责：

- 整理上下文
- 拉取允许范围内的 memory
- 拉取授权文件摘要
- 根据 participation mode 决定是否触发
- 调用模型
- 写入结果和 trace

### 模型触发策略

- `仅 @ 回复`
  - 只有被明确 @ 才触发
- `全部回复`
  - 每条新消息都评估
- `智能判断`
  - 先用轻量分类器判断是否应答，再决定是否调用大模型

## 10.7 安全与隐私

- 所有 agent 请求都带 owner 校验
- agent 永远不能越权读取未授权会话
- 文件检索按 agent scope 过滤
- 删除 agent 时需级联清理 memory 与文件引用
- 审计日志保留关键权限操作

## 10.8 成本控制

- 智能判断模式先做廉价路由
- 长上下文使用摘要而非全量回放
- 文件采用 chunk + embedding 去重
- 高频群聊启用节流
- 提供每个 agent 的 token / cost dashboard

## 10.9 可观测性

- 消息发送延迟
- agent 首 token 延迟
- 模型错误率
- 文件解析耗时
- memory 检索命中率
- agent 被静音率

---

## 11. 消费者视角：完整体验设计

## 11.1 用户为什么要来

用户不是为了“再装一个聊天软件”，而是为了：

- 把自己的 agent 带进真实关系场景
- 让 agent 参与表达、总结、提醒、陪伴
- 在一个安静、简单的产品里体验 human 与 agent 共存

## 11.2 第一日体验

- 5 分钟内完成注册和第一个 agent 创建
- 10 分钟内完成第一段“人 + agent”会话
- 让用户看到明确差异：
  - 不是跟 bot 单聊
  - 是在真实聊天中让 agent 共同参与

## 11.3 日常体验目标

- 打开 app 后能立刻看到：
  - 谁找我
  - 哪个 agent 在场
  - 哪些 agent 需要我处理
- 不需要理解复杂概念也能完成基本操作

## 11.4 信任感来源

- agent 身份永远清晰标注
- agent 发言原因可追溯
- memory 可查看可删除
- 文件是否上传成功、是否同步成功完全透明

## 11.5 挫败点与解决策略

### 挫败点 1：群里太吵

- 默认 `仅 @ 回复`
- 可快速静音 agent
- 群里显示当前 active agents 数

### 挫败点 2：担心隐私泄露

- 默认只读当前会话
- 清晰显示数据范围
- 可一键清空会话 memory

### 挫败点 3：担心占空间

- 强调云端保存
- 本地缓存可清理
- 文件页显示云端状态

## 11.6 付费感知

消费者愿意为以下内容付费：

- 更多 agent 数量
- 更大文件存储
- 更强模型
- 更长记忆
- 更快响应

但 v1 首先要卖的是体验，不是套餐复杂度。

---

## 12. 全链路闭环清单

### 12.1 创建 agent

- 入口：联系人页 / 首次引导
- 动作：填写名称与设定
- 状态：创建中
- 结果：成功后出现在“我的 Agents”
- 失败：提示原因并保留草稿

### 12.2 邀请 agent 进入会话

- 入口：会话页 `Manage Agents`
- 动作：选择自己的 agent
- 校验：owner 是否在当前会话
- 结果：agent 入场并显示系统消息
- 失败：提示原因并保留当前页

### 12.3 切换回复模式

- 入口：会话内 agent 设置
- 动作：选择模式
- 结果：即时生效并提示当前模式
- 风险：切到 `全部回复` 时需二次确认
- 回退：可随时切回

### 12.4 上传文件给 agent

- 入口：agent 详情页 `Files`
- 动作：选择文件
- 状态：上传中 -> 解析中 -> 可用
- 成功：展示文件状态
- 失败：可重试或删除

### 12.5 删除 agent

- 入口：agent 详情页
- 动作：点击删除
- 二次确认：显示影响会话数与数据删除范围
- 成功：进入软删除，列表消失
- 恢复：7 天内可撤销

### 12.6 owner 离开群聊

- 触发：用户主动退出或被移除
- 系统动作：同时移除 owner 名下所有 agent
- 反馈：群内系统消息说明
- 结果：会话状态一致，不留孤立 agent

---

## 13. MVP 决策

### 13.1 推荐 v1 限制

- 每位用户最多创建 5 个 agent
- direct chat 中每位用户最多激活 1 个 agent
- group chat 中每位用户最多激活 2 个 agent
- 文件上传类型先支持：
  - pdf
  - txt
  - md
  - images

### 13.2 为什么这样限制

- 保持极简
- 控制消息噪音
- 控制推理成本
- 减少工程复杂度
- 让首版验证“agent 参与聊天”这一核心价值

---

## 14. 成功指标

### 产品指标

- 注册后 24 小时内创建首个 agent 的比例
- 创建 agent 后 24 小时内将其带入会话的比例
- 周活跃会话数
- agent 参与会话比例
- 7 日留存 / 30 日留存

### 体验指标

- 消息发送成功率
- agent 首次响应时延
- 文件上传完成率
- agent 被关闭或移除的频率

### 风险指标

- 群聊中 agent 过度发言率
- 隐私相关投诉率
- 推理成本超标率

---

## 15. 最终结论

这个产品的本质不是“聊天 + AI”，而是一个新的会话结构：

- 人与人建立关系
- agent 作为 owner 控制下的并行智能实体进入关系
- 极简 UI 承载复杂能力
- 云端存储保证 agent 的长期存在和多端同步
- 所有操作必须状态透明、失败可恢复、权限可解释

v1 只做一件事：

**验证用户是否真的愿意把自己的 agent 带入真实聊天。**
