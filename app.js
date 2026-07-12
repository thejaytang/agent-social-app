const STORAGE_KEY = "agent-socialapp-prototype-v11-en";
const PRODUCT_NAME = "Parallel";

const PLAN_CATALOG = {
  basic: {
    name: "Basic",
    monthlyPrice: "$0",
    managedBotLimit: 2,
  },
  creator: {
    name: "Creator",
    monthlyPrice: "$19",
    managedBotLimit: 6,
  },
  studio: {
    name: "Studio",
    monthlyPrice: "$49",
    managedBotLimit: 16,
  },
};

const SUPPORTED_LOCALES = ["en-US"];

const I18N = {
  "zh-CN": {
    tabs: { chats: "聊天", contacts: "联系人", settings: "设置" },
    common: {
      all: "全部",
      human: "人类",
      bot: "Agent",
      open: "打开",
      unread: "未读",
      create: "创建",
      manage: "管理",
      save: "保存",
      cancel: "取消",
      done: "完成",
      delete: "删除",
      retry: "重试",
      upload: "上传",
      remove: "移除",
      invite: "邀请",
      add: "添加",
      request: "请求",
      accept: "接受",
      ignore: "忽略",
      back: "返回",
      language: "语言",
      account: "账号",
      notifications: "通知",
      privacy: "隐私与同步",
      subscription: "订阅",
      paymentMethod: "付款方式",
      localCache: "本地缓存",
      recentInvoice: "最近账单",
      active: "正常",
      available: "可用",
      missing: "缺失",
    },
    pages: {
      chats: "聊天",
      contacts: "联系人",
      settings: "设置",
    },
    actions: {
      createGroup: "创建群聊",
      soloRoom: "Solo Room",
      inviteMembers: "邀请成员",
      startChat: "发起聊天",
      openChat: "打开聊天",
      deleteFriend: "删除好友",
      deleteBot: "删除 Agent",
      uploadFile: "上传文件",
      manageSubscription: "管理订阅",
      retryConnection: "重试连接",
      recheck: "重新检测",
      editIntegration: "编辑接入",
      configureExistingBot: "配置已有 Agent",
      createNewBot: "创建新 Agent",
      testConnection: "测试连接",
      confirmPayment: "确认支付",
      managePayment: "管理付款方式",
      setDefault: "设为默认",
      addCard: "新增卡片",
      saveIntegration: "保存接入",
      saveChanges: "保存更改",
      manageBot: "管理 Agent",
    },
    labels: {
      directChat: "私聊",
      searchChats: "搜索聊天、成员或 @agent",
      searchContacts: "搜索联系人或我的 Agents",
      currentAccount: "当前账号",
      runtime: "运行时",
      overview: "概览",
      memory: "记忆",
      files: "文件",
      package: "套餐",
      connectionStatus: "连接状态",
      runtimeMethod: "接入方式",
      configuration: "配置",
      memoryStorage: "记忆存储",
      source: "来源",
      capabilities: "能力",
      identity: "身份设定",
      languageCard: "语言",
      cardReady: "已就绪",
      latestCheck: "最近检查",
      recentRequests: "待处理关系",
      latestBilling: "最新账单",
    },
  },
  "en-US": {
    tabs: { chats: "Chats", contacts: "Contacts", settings: "Settings" },
    common: {
      all: "All",
      human: "Humans",
      bot: "Agents",
      open: "Open",
      unread: "unread",
      create: "Create",
      manage: "Manage",
      save: "Save",
      cancel: "Cancel",
      done: "Done",
      delete: "Delete",
      retry: "Retry",
      upload: "Upload",
      remove: "Remove",
      invite: "Invite",
      add: "Add",
      request: "Request",
      accept: "Accept",
      ignore: "Ignore",
      back: "Back",
      language: "Language",
      account: "Account",
      notifications: "Notifications",
      privacy: "Privacy & Sync",
      subscription: "Subscription",
      paymentMethod: "Payment Method",
      localCache: "Local Cache",
      recentInvoice: "Latest Invoice",
      active: "Active",
      available: "Available",
      missing: "Missing",
    },
    pages: {
      chats: "Chats",
      contacts: "Contacts",
      settings: "Settings",
    },
    actions: {
      createGroup: "New Group",
      soloRoom: "Solo Room",
      inviteMembers: "Invite",
      startChat: "Start Chat",
      openChat: "Open Chat",
      deleteFriend: "Remove Friend",
      deleteBot: "Delete Agent",
      uploadFile: "Upload File",
      manageSubscription: "Manage Plan",
      retryConnection: "Reconnect",
      recheck: "Recheck",
      editIntegration: "Edit Runtime",
      configureExistingBot: "Add Existing Agent",
      createNewBot: "Create Managed Agent",
      testConnection: "Test Connection",
      confirmPayment: "Confirm Payment",
      managePayment: "Manage Payment",
      setDefault: "Set Default",
      addCard: "Add Card",
      saveIntegration: "Save Runtime",
      saveChanges: "Save Changes",
      manageBot: "Manage Agent",
    },
    labels: {
      directChat: "Direct Chat",
      searchChats: "Search chats, people, or @agent",
      searchContacts: "Search contacts or my agents",
      currentAccount: "Current Account",
      runtime: "Runtime",
      overview: "Overview",
      memory: "Memory",
      files: "Files",
      package: "Plan",
      connectionStatus: "Connection",
      runtimeMethod: "Runtime Type",
      configuration: "Configuration",
      memoryStorage: "Memory Storage",
      source: "Source",
      capabilities: "Capabilities",
      identity: "Identity",
      languageCard: "Language",
      cardReady: "Ready",
      latestCheck: "Latest Check",
      recentRequests: "Requests",
      latestBilling: "Latest Billing",
    },
  },
  "de-DE": {
    tabs: { chats: "Chats", contacts: "Kontakte", settings: "Einstellungen" },
    common: {
      all: "Alle",
      human: "Menschen",
      bot: "Agents",
      open: "Öffnen",
      unread: "ungelesen",
      create: "Erstellen",
      manage: "Verwalten",
      save: "Speichern",
      cancel: "Abbrechen",
      done: "Fertig",
      delete: "Löschen",
      retry: "Erneut",
      upload: "Hochladen",
      remove: "Entfernen",
      invite: "Einladen",
      add: "Hinzufügen",
      request: "Anfragen",
      accept: "Annehmen",
      ignore: "Ignorieren",
      back: "Zurück",
      language: "Sprache",
      account: "Account",
      notifications: "Mitteilungen",
      privacy: "Datenschutz & Sync",
      subscription: "Abo",
      paymentMethod: "Zahlungsmethode",
      localCache: "Lokaler Cache",
      recentInvoice: "Letzte Rechnung",
      active: "Aktiv",
      available: "Verfügbar",
      missing: "Fehlt",
    },
    pages: {
      chats: "Chats",
      contacts: "Kontakte",
      settings: "Einstellungen",
    },
    actions: {
      createGroup: "Gruppe",
      soloRoom: "Solo-Raum",
      inviteMembers: "Einladen",
      startChat: "Chat starten",
      openChat: "Chat öffnen",
      deleteFriend: "Kontakt löschen",
      deleteBot: "Agent löschen",
      uploadFile: "Datei hochladen",
      manageSubscription: "Abo verwalten",
      retryConnection: "Neu verbinden",
      recheck: "Neu prüfen",
      editIntegration: "Runtime bearbeiten",
      configureExistingBot: "Vorhandenen Agent verbinden",
      createNewBot: "Managed Agent erstellen",
      testConnection: "Verbindung testen",
      confirmPayment: "Zahlung bestätigen",
      managePayment: "Zahlung verwalten",
      setDefault: "Standard",
      addCard: "Karte hinzufügen",
      saveIntegration: "Runtime speichern",
      saveChanges: "Änderungen speichern",
      manageBot: "Agent verwalten",
    },
    labels: {
      directChat: "Direktchat",
      searchChats: "Chats, Personen oder @agent suchen",
      searchContacts: "Kontakte oder meine Agents suchen",
      currentAccount: "Aktueller Account",
      runtime: "Runtime",
      overview: "Überblick",
      memory: "Erinnerungen",
      files: "Dateien",
      package: "Paket",
      connectionStatus: "Verbindung",
      runtimeMethod: "Runtime-Typ",
      configuration: "Konfiguration",
      memoryStorage: "Memory-Speicher",
      source: "Quelle",
      capabilities: "Fähigkeiten",
      identity: "Identität",
      languageCard: "Sprache",
      cardReady: "Bereit",
      latestCheck: "Letzte Prüfung",
      recentRequests: "Anfragen",
      latestBilling: "Letzte Abrechnung",
    },
  },
};

const initialState = {
  appStage: "onboarding",
  onboardingStep: 0,
  activeTab: "chats",
  chatView: "list",
  contactsView: "list",
  selectedConversationId: "conv-launch",
  selectedContactId: null,
  selectedContactType: null,
  contactFilter: "all",
  search: {
    chats: "",
    contacts: "",
  },
  locale: "en-US",
  botDetailTab: "overview",
  sheet: null,
  composeDrafts: {
    "conv-support": "Make FAQ item 3 shorter.",
  },
  toasts: [],
  pendingReplies: [],
  humanContactIds: ["u-lin", "u-mila", "u-ren"],
  humanRequestIds: {
    incoming: ["u-sora"],
    outgoing: ["u-noah"],
  },
  humans: [
    {
      id: "u-self",
      name: "You",
      handle: "@you",
      avatar: "Y",
      bio: "Owner of all local contacts and bots.",
    },
    {
      id: "u-lin",
      name: "Lin",
      handle: "@lin",
      avatar: "L",
      bio: "Product strategist",
    },
    {
      id: "u-mila",
      name: "Mila",
      handle: "@mila",
      avatar: "M",
      bio: "Brand and visual designer",
    },
    {
      id: "u-ren",
      name: "Ren",
      handle: "@ren",
      avatar: "R",
      bio: "Community lead",
    },
    {
      id: "u-sora",
      name: "Sora",
      handle: "@sora",
      avatar: "S",
      bio: "Growth operator",
      friendPolicy: "manual",
    },
    {
      id: "u-kai",
      name: "Kai",
      handle: "@kai",
      avatar: "K",
      bio: "Mobile engineer",
      friendPolicy: "auto_accept",
    },
    {
      id: "u-noah",
      name: "Noah",
      handle: "@noah",
      avatar: "N",
      bio: "Creator economy advisor",
      friendPolicy: "manual",
    },
  ],
  botTemplates: [
    {
      id: "tpl-openclaw",
      name: "OpenClaw Local Bridge",
      sourceType: "local_bridge",
      sourceLabel: "OpenClaw Local Bridge",
      description: "Connect an OpenClaw runtime already running on your Mac, NAS, or local server.",
      summary:
        "For users who already run local agents. Context can stay outside the platform cloud and pass through the local bridge.",
      badges: ["local", "bridge", "bring your own runtime"],
      fieldDefs: [
        {
          key: "bridgeUrl",
          label: "Bridge URL",
          placeholder: "https://openclaw.local:9443",
        },
        {
          key: "pairingCode",
          label: "Pairing Code",
          placeholder: "6-digit pairing code",
        },
      ],
      capabilities: [
        "Custom reply mode",
        "Mention members",
        "Read authorized files",
        "Local memory",
      ],
      defaultModel: "OpenClaw Runtime",
    },
    {
      id: "tpl-openai",
      name: "OpenAI-Compatible Bot",
      sourceType: "custom_api",
      sourceLabel: "OpenAI-Compatible API",
      description: "Connect an API endpoint you already own and use it as an in-chat bot.",
      summary:
        "For users with an existing agent backend. The app owns chat rules, while the runtime handles replies.",
      badges: ["api", "custom", "https"],
      fieldDefs: [
        {
          key: "endpoint",
          label: "API Endpoint",
          placeholder: "https://api.openai.com/v1",
        },
        {
          key: "model",
          label: "Model",
          placeholder: "gpt-4.1-mini",
        },
        {
          key: "apiKey",
          label: "API Key",
          placeholder: "sk-...",
          secret: true,
        },
      ],
      capabilities: ["Custom reply mode", "Mention members", "Streaming replies"],
      defaultModel: "gpt-4.1-mini",
    },
    {
      id: "tpl-telegram",
      name: "Telegram Bot Connector",
      sourceType: "plugin",
      sourceLabel: "Telegram Connector",
      description: "Connect an existing Telegram bot to this app.",
      summary:
        "Use an existing bot as a connector without moving its original logic.",
      badges: ["plugin", "telegram", "connector"],
      fieldDefs: [
        {
          key: "botToken",
          label: "Bot Token",
          placeholder: "123456:ABC-DEF...",
          secret: true,
        },
        {
          key: "bridgeUrl",
          label: "Bridge URL",
          placeholder: "https://your-bridge.example.com",
        },
      ],
      capabilities: ["Custom reply mode", "Mention members"],
      defaultModel: "External Plugin Runtime",
    },
    {
      id: "tpl-wechat",
      name: "WeChat Service Bot",
      sourceType: "plugin",
      sourceLabel: "WeChat Service Connector",
      description: "Connect an existing WeChat or WeCom service bot as a connector.",
      summary:
        "Use this chat layer while your existing runtime keeps executing the bot logic.",
      badges: ["plugin", "wechat", "connector"],
      fieldDefs: [
        {
          key: "appId",
          label: "App ID",
          placeholder: "wx_app_id",
        },
        {
          key: "appSecret",
          label: "App Secret",
          placeholder: "app secret",
          secret: true,
        },
        {
          key: "bridgeUrl",
          label: "Bridge URL",
          placeholder: "https://your-bridge.example.com",
        },
      ],
      capabilities: ["Custom reply mode", "Mention members"],
      defaultModel: "External Plugin Runtime",
    },
  ],
  bots: [
    {
      id: "b-atlas",
      name: "Atlas",
      avatar: "A",
      summary: "A strategy agent for framing, group summaries, and decision capture.",
      identity:
        "Calm, clear, and concise. Speak only when relevant, and never make decisions for the owner.",
      sourceType: "managed",
      sourceLabel: "Managed Bot Package",
      packageTier: "Pro",
      monthlyPrice: "¥99 / month",
      encryptedCloudMemory: true,
      subscriptionStatus: "active",
      renewalDate: "2026-04-12",
      defaultMode: "mention",
      activeConversations: 2,
      capabilities: ["Custom reply mode", "Mention members", "Read authorized files", "E2E cloud memory"],
      runtimeConfig: {
        model: "Managed Reasoning Pro",
        region: "eu-west",
        status: "active",
      },
      runtimeCheck: {
        status: "success",
        message: "Managed runtime is healthy. Billing and key status are valid.",
        lastCheckedAt: "Today 11:08",
        latency: "132 ms",
      },
      memory: [
        {
          id: "mem-atlas-1",
          title: "Core memory",
          copy: "Lead with structure, then judgment. Avoid long single-message replies.",
        },
        {
          id: "mem-atlas-2",
          title: "Relationship memory · Lin",
          copy: "Lin prefers the smallest useful frame before going into detail.",
        },
      ],
      files: [
        {
          id: "file-atlas-1",
          name: "Product Narrative.pdf",
          size: "2.4 MB",
          sizeBytes: 2516582,
          status: "synced",
          progress: 100,
        },
      ],
      skills: ["Conversation Summary", "Decision Capture", "Role Framing"],
    },
    {
      id: "b-claw",
      name: "OpenClaw",
      avatar: "C",
      summary: "A local general-purpose agent connected through a local bridge.",
      identity:
        "Execution-oriented and practical. It can mention people in groups while respecting the current reply mode.",
      sourceType: "local_bridge",
      sourceLabel: "OpenClaw Local Bridge",
      packageTier: null,
      monthlyPrice: null,
      encryptedCloudMemory: false,
      templateId: "tpl-openclaw",
      defaultMode: "smart",
      activeConversations: 2,
      capabilities: ["Custom reply mode", "Mention members", "Read authorized files", "Local memory"],
      runtimeConfig: {
        model: "OpenClaw Runtime",
        bridgeUrl: "https://mac-mini.local:9443",
        status: "connected",
        pairing: "owner scoped token",
      },
      runtimeFields: {
        bridgeUrl: "https://mac-mini.local:9443",
        pairingCode: "736291",
      },
      runtimeCheck: {
        status: "success",
        message: "Local Bridge is paired. Manifest and capabilities are synced.",
        lastCheckedAt: "Today 13:18",
        latency: "42 ms",
      },
      memory: [
        {
          id: "mem-claw-1",
          title: "Runtime note",
          copy: "Memory stays inside the local bridge. The platform only sees metadata.",
        },
      ],
      files: [
        {
          id: "file-claw-1",
          name: "Local Ops Handbook.md",
          size: "116 KB",
          sizeBytes: 118784,
          status: "synced",
          progress: 100,
        },
      ],
      skills: ["Task Breakdown", "Local Tool Routing", "Mention Members"],
    },
    {
      id: "b-relay",
      name: "Relay",
      avatar: "R",
      summary: "A Telegram connector agent for distribution and alerts. The bridge needs reconnecting.",
      identity:
        "Low-volume by default. Speak only for pushes, reminders, or status syncs.",
      sourceType: "plugin",
      sourceLabel: "Telegram Connector",
      packageTier: null,
      monthlyPrice: null,
      encryptedCloudMemory: false,
      templateId: "tpl-telegram",
      defaultMode: "mention",
      activeConversations: 1,
      capabilities: ["Custom reply mode", "Mention members"],
      runtimeConfig: {
        model: "External Plugin Runtime",
        bridgeUrl: "https://relay-bridge.example.com",
        status: "error",
      },
      runtimeFields: {
        bridgeUrl: "https://relay-bridge.example.com",
        botToken: "123456:relay-token",
      },
      runtimeCheck: {
        status: "error",
        message: "Bridge returned 401. The bot token or signature is no longer valid.",
        lastCheckedAt: "Today 12:54",
        latency: "—",
      },
      memory: [
        {
          id: "mem-relay-1",
          title: "Plugin note",
          copy: "This bot is imported as a connector. Long-running logic remains in the original backend.",
        },
      ],
      files: [],
      skills: ["Status Sync", "Alert Push"],
    },
  ],
  conversations: [
    {
      id: "conv-lin",
      title: "Lin",
      type: "direct",
      humanIds: ["u-self", "u-lin"],
      botPresence: [{ botId: "b-atlas", mode: "mention" }],
      unread: 2,
      pinned: true,
      muted: false,
      updatedAt: Date.UTC(2026, 2, 31, 13, 42),
      lastTime: "13:42",
      messages: [
        {
          id: "msg-lin-1",
          type: "human",
          senderId: "u-lin",
          text: "Let's lock the Oslo private beta list tonight. I want to bring in a support agent to help split the work.",
          time: "13:21",
        },
        {
          id: "msg-lin-2",
          type: "agent",
          senderId: "b-atlas",
          ownerId: "u-self",
          text: "I can separate the guest list, schedule, and open confirmations, then mention the right people if anything is missing.",
          time: "13:24",
          trigger: "@ mention",
          source: "Core memory + current conversation",
          mentions: [],
        },
        {
          id: "msg-lin-3",
          type: "human",
          senderId: "u-self",
          text: "Good. List the RSVP items and venue constraints first, then I will prioritize them.",
          time: "13:42",
        },
      ],
    },
    {
      id: "conv-launch",
      title: "Launch Circle",
      type: "group",
      humanIds: ["u-self", "u-mila", "u-ren"],
      botPresence: [
        { botId: "b-atlas", mode: "smart" },
        { botId: "b-claw", mode: "mention" },
      ],
      unread: 0,
      pinned: false,
      muted: false,
      updatedAt: Date.UTC(2026, 2, 31, 11, 8),
      lastTime: "11:08",
      messages: [
        {
          id: "msg-launch-1",
          type: "system",
          text: "Atlas and OpenClaw joined the conversation.",
          time: "10:56",
        },
        {
          id: "msg-launch-2",
          type: "human",
          senderId: "u-mila",
          text: "The Berlin creator dinner is set for Thursday. We need an agent in the group to handle RSVPs and reminders.",
          time: "10:58",
        },
        {
          id: "msg-launch-3",
          type: "agent",
          senderId: "b-atlas",
          ownerId: "u-self",
          text: "I can maintain the guest list and mention Ren when dietary restrictions or schedule conflicts need follow-up.",
          time: "11:02",
          trigger: "Smart",
          source: "Core memory + current conversation",
          mentions: [{ id: "u-ren", name: "Ren", type: "human" }],
        },
        {
          id: "msg-launch-4",
          type: "human",
          senderId: "u-ren",
          text: "Let's do that. Today we only need to lock the invite list.",
          time: "11:08",
        },
      ],
    },
    {
      id: "conv-botlab",
      title: "Bot Lab",
      type: "group",
      humanIds: ["u-self"],
      botPresence: [{ botId: "b-claw", mode: "all" }],
      unread: 0,
      pinned: false,
      muted: true,
      updatedAt: Date.UTC(2026, 2, 30, 19, 24),
      lastTime: "Yesterday",
      messages: [
        {
          id: "msg-botlab-1",
          type: "system",
          text: "This space only contains you and OpenClaw.",
          time: "Yesterday",
        },
        {
          id: "msg-botlab-2",
          type: "agent",
          senderId: "b-claw",
          ownerId: "u-self",
          text: "I am online through the local bridge, so I can organize device logs and local files without routing content through the platform cloud.",
          time: "Yesterday",
          trigger: "Reply to all",
          source: "Local bridge runtime",
          mentions: [],
        },
      ],
    },
  ],
  forms: {
    createGroup: {
      name: "",
      selectedHumanIds: [],
      selectedBotIds: [],
    },
    addHuman: {
      query: "",
    },
    importBot: {
      templateId: null,
      displayName: "",
      values: {},
      connectionCheck: null,
      editBotId: null,
    },
    createManagedBot: {
      name: "",
      summary: "",
      identity: "",
      packageTier: "starter",
      processing: false,
    },
    manageManagedBot: {
      botId: null,
      packageTier: "starter",
      renewalEnabled: true,
    },
  },
  settings: {
    notifications: true,
    biometricLock: false,
    cloudSync: true,
    localBridgeCellular: false,
    cacheMB: 168,
    cloudGB: 1.8,
  },
  billing: {
    planCode: "basic",
    planName: "Basic",
    paymentMethod: "Visa •• 2048",
    paymentMethods: [
      {
        id: "pm-visa-2048",
        label: "Visa •• 2048",
        status: "ready",
        isDefault: true,
      },
      {
        id: "pm-master-1024",
        label: "Mastercard •• 1024",
        status: "expired",
        isDefault: false,
      },
    ],
    managedBotPrices: {
      starter: "¥39 / month",
      pro: "¥99 / month",
    },
    e2eCloudMemory: true,
    invoices: [
      {
        id: "inv-atlas-pro",
        title: "Atlas Pro · monthly renewal",
        amount: "¥99",
        status: "paid",
        date: "2026-03-12",
      },
    ],
  },
};

seedMockData();

let state = loadState();
let toastSeed = 0;
let pendingTimers = new Map();
let uploadTargetBotId = null;
let longPressTimer = null;
let suppressConversationOpen = false;

const appEl = document.getElementById("app");
const hiddenFileInput = document.getElementById("hidden-file-input");

applyDocumentLocale();
render();

document.addEventListener("click", handleClick);
document.addEventListener("contextmenu", handleContextMenu);
document.addEventListener("pointerdown", handlePointerDown);
document.addEventListener("pointerup", clearLongPress);
document.addEventListener("pointercancel", clearLongPress);
document.addEventListener("pointermove", clearLongPress);
document.addEventListener("input", handleInput);
hiddenFileInput.addEventListener("change", handleFileSelection);

function seedMockData() {
  const extraHumans = [
    {
      id: "u-alex",
      name: "Alexandra Rivera-Santoro",
      handle: "@alexandra.rivera",
      avatar: "A",
      bio: "Product lead for consumer growth",
      friendPolicy: "auto_accept",
    },
    {
      id: "u-yuki",
      name: "Yuki Tanaka",
      handle: "@yuki",
      avatar: "Y",
      bio: "Localization editor",
      friendPolicy: "manual",
    },
    {
      id: "u-max",
      name: "Maximilian König",
      handle: "@max.koenig",
      avatar: "K",
      bio: "Go-to-market manager, Berlin",
      friendPolicy: "manual",
    },
    {
      id: "u-fatima",
      name: "Fatima Al-Hassan",
      handle: "@fatima",
      avatar: "F",
      bio: "Community partnerships",
      friendPolicy: "auto_accept",
    },
  ];

  extraHumans.forEach((human) => {
    if (!initialState.humans.some((item) => item.id === human.id)) {
      initialState.humans.push(human);
    }
  });

  ["u-alex", "u-fatima", "u-kai"].forEach((id) => {
    if (!initialState.humanContactIds.includes(id)) {
      initialState.humanContactIds.push(id);
    }
  });

  if (!initialState.humanRequestIds.incoming.includes("u-yuki")) {
    initialState.humanRequestIds.incoming.push("u-yuki");
  }
  if (!initialState.humanRequestIds.outgoing.includes("u-max")) {
    initialState.humanRequestIds.outgoing.push("u-max");
  }

  const extraBots = [
    {
      id: "b-orbit",
      name: "Research & Translation Copilot",
      avatar: "R",
      summary: "A custom API agent for cross-language synthesis, translation, and fact checks.",
      identity: "Preserve the original tone first. Add a bilingual version only when it helps.",
      sourceType: "custom_api",
      sourceLabel: "OpenAI-Compatible API",
      templateId: "tpl-openai",
      packageTier: null,
      monthlyPrice: null,
      encryptedCloudMemory: false,
      defaultMode: "smart",
      activeConversations: 3,
      capabilities: ["Custom reply mode", "Mention members", "Streaming replies"],
      runtimeFields: {
        endpoint: "https://api.company-agent.example/v1",
        model: "gpt-4.1-mini",
        apiKey: "sk-orbit-demo-key",
      },
      runtimeConfig: {
        model: "gpt-4.1-mini",
        endpoint: "https://api.company-agent.example/v1",
        apiKey: "sk-...key",
        status: "connected",
      },
      runtimeCheck: {
        status: "success",
        message: "API endpoint is available. Reply and mention capabilities are healthy.",
        lastCheckedAt: "Today 14:12",
        latency: "188 ms",
      },
      memory: [
        {
          id: "mem-orbit-1",
          title: "Style memory",
          copy: "When bilingual output is required, place English first.",
        },
      ],
      files: [
        {
          id: "file-orbit-1",
          name: "Localization QA Checklist.pdf",
          size: "1.2 MB",
          sizeBytes: 1258291,
          status: "synced",
          progress: 100,
        },
      ],
      skills: ["Translation", "Terminology QA", "Source Citation"],
    },
    {
      id: "b-luma",
      name: "Luma Support Operator",
      avatar: "L",
      summary: "A managed support agent for feedback triage, ticket routing, and action extraction.",
      identity: "Brief, stable, and traceable. Do not make team decisions on your own.",
      sourceType: "managed",
      sourceLabel: "Managed Bot Package",
      templateId: null,
      packageTier: "Starter",
      monthlyPrice: "¥39 / month",
      encryptedCloudMemory: true,
      subscriptionStatus: "active",
      renewalDate: "2026-04-18",
      defaultMode: "mention",
      activeConversations: 2,
      capabilities: ["Custom reply mode", "Mention members", "Read authorized files", "E2E cloud memory"],
      runtimeConfig: {
        model: "Managed Fast Core",
        region: "eu-west",
        status: "active",
      },
      runtimeCheck: {
        status: "success",
        message: "Managed runtime is healthy. Billing status is valid.",
        lastCheckedAt: "Today 13:48",
        latency: "116 ms",
      },
      memory: [
        {
          id: "mem-luma-1",
          title: "Support policy",
          copy: "Summarize the pattern first, then propose next actions. Do not promise timing.",
        },
      ],
      files: [],
      skills: ["Feedback Triage", "Summary", "Action Extraction"],
    },
  ];

  extraBots.forEach((bot) => {
    if (!initialState.bots.some((item) => item.id === bot.id)) {
      initialState.bots.push(bot);
    }
  });

  const extraConversations = [
    {
      id: "conv-alex",
      title: "Alexandra Rivera-Santoro",
      type: "direct",
      humanIds: ["u-self", "u-alex"],
      botPresence: [{ botId: "b-orbit", mode: "smart" }],
      unread: 0,
      pinned: false,
      muted: false,
      updatedAt: Date.UTC(2026, 2, 31, 9, 12),
      lastTime: "09:12",
      messages: [
        {
          id: "msg-alex-1",
          type: "human",
          senderId: "u-alex",
          text: "Can you turn today’s creator feedback into a two-language summary for the product review?",
          time: "09:02",
        },
        {
          id: "msg-alex-2",
          type: "agent",
          senderId: "b-orbit",
          ownerId: "u-self",
          text: "I can summarize in English first and append a concise action version underneath. I’ll preserve the original terminology for policy-sensitive items.",
          time: "09:12",
          trigger: "Smart",
          source: "API memory + current conversation",
          mentions: [],
        },
      ],
    },
    {
      id: "conv-loc-qa",
      title: "Localization QA",
      type: "group",
      humanIds: ["u-self", "u-kai", "u-fatima"],
      botPresence: [
        { botId: "b-orbit", mode: "smart" },
        { botId: "b-luma", mode: "mention" },
      ],
      unread: 3,
      pinned: true,
      muted: true,
      updatedAt: Date.UTC(2026, 2, 31, 8, 44),
      lastTime: "08:44",
      messages: [
        {
          id: "msg-locqa-1",
          type: "human",
          senderId: "u-kai",
          text: "Button labels still stretch some components. We should tighten those layouts again.",
          time: "08:33",
        },
        {
          id: "msg-locqa-2",
          type: "human",
          senderId: "u-fatima",
          text: "Also check long agent names in the contact list and the group creation sheet.",
          time: "08:35",
        },
        {
          id: "msg-locqa-3",
          type: "agent",
          senderId: "b-orbit",
          ownerId: "u-self",
          text: "I flagged 4 strings that expand significantly: Settings, Payment Method, Save Changes, and Manage Subscription.",
          time: "08:44",
          trigger: "Smart",
          source: "Custom API runtime",
          mentions: [],
        },
      ],
    },
    {
      id: "conv-berlin",
      title: "Berlin Creator Sprint",
      type: "group",
      humanIds: ["u-self", "u-max", "u-alex", "u-ren"],
      botPresence: [{ botId: "b-atlas", mode: "mention" }],
      unread: 0,
      pinned: false,
      muted: false,
      updatedAt: Date.UTC(2026, 2, 30, 21, 10),
      lastTime: "Yesterday",
      messages: [
        {
          id: "msg-berlin-1",
          type: "human",
          senderId: "u-max",
          text: "We need one launch checklist for creators, ops, and support. Keep it small enough for mobile.",
          time: "Yesterday",
        },
      ],
    },
    {
      id: "conv-support",
      title: "Support Ops",
      type: "group",
      humanIds: ["u-self", "u-lin", "u-fatima"],
      botPresence: [{ botId: "b-luma", mode: "all" }],
      unread: 1,
      pinned: false,
      muted: false,
      updatedAt: Date.UTC(2026, 2, 30, 10, 15),
      lastTime: "Mon",
      messages: [
        {
          id: "msg-support-1",
          type: "agent",
          senderId: "b-luma",
          ownerId: "u-self",
          text: "Collected 18 user reports today. The top themes are onboarding friction, long German labels, and unclear payment recovery.",
          time: "Mon",
          trigger: "Reply to all",
          source: "Managed runtime",
          mentions: [],
        },
      ],
    },
  ];

  extraConversations.forEach((conversation) => {
    if (!initialState.conversations.some((item) => item.id === conversation.id)) {
      initialState.conversations.push(conversation);
    }
  });
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return structuredClone(initialState);
    const parsed = JSON.parse(raw);
    return {
      ...structuredClone(initialState),
      ...parsed,
      locale: "en-US",
      toasts: [],
      pendingReplies: [],
      humanRequestIds: {
        ...structuredClone(initialState).humanRequestIds,
        ...(parsed.humanRequestIds || {}),
      },
      forms: {
        ...structuredClone(initialState).forms,
        ...(parsed.forms || {}),
        createGroup: {
          ...structuredClone(initialState).forms.createGroup,
          ...(parsed.forms?.createGroup || {}),
        },
        addHuman: {
          ...structuredClone(initialState).forms.addHuman,
          ...(parsed.forms?.addHuman || {}),
        },
        importBot: {
          ...structuredClone(initialState).forms.importBot,
          ...(parsed.forms?.importBot || {}),
          values: {
            ...structuredClone(initialState).forms.importBot.values,
            ...(parsed.forms?.importBot?.values || {}),
          },
        },
        createManagedBot: {
          ...structuredClone(initialState).forms.createManagedBot,
          ...(parsed.forms?.createManagedBot || {}),
        },
        manageManagedBot: {
          ...structuredClone(initialState).forms.manageManagedBot,
          ...(parsed.forms?.manageManagedBot || {}),
        },
      },
      settings: {
        ...structuredClone(initialState).settings,
        ...(parsed.settings || {}),
      },
      billing: {
        ...structuredClone(initialState).billing,
        ...(parsed.billing || {}),
        paymentMethods:
          parsed.billing?.paymentMethods || structuredClone(initialState).billing.paymentMethods,
        invoices: parsed.billing?.invoices || structuredClone(initialState).billing.invoices,
      },
      conversations: normalizeConversations(
        parsed.conversations || structuredClone(initialState).conversations
      ),
      composeDrafts: {
        ...structuredClone(initialState).composeDrafts,
        ...(parsed.composeDrafts || {}),
      },
    };
  } catch {
    return structuredClone(initialState);
  }
}

function localeDict() {
  return I18N["en-US"];
}

function t(path, fallback = "") {
  const value = path.split(".").reduce((acc, key) => acc?.[key], localeDict());
  return value ?? fallback ?? path;
}

function applyDocumentLocale() {
  state.locale = "en-US";
  document.documentElement.lang = "en-US";
  document.documentElement.dir = "ltr";
}

function persist() {
  const payload = {
    ...state,
    toasts: [],
    pendingReplies: [],
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  } catch {
    // Some file:// previews block storage. Keep the UI interactive without persistence.
  }
}

function update(mutator) {
  mutator(state);
  persist();
  render();
}

function render() {
  applyDocumentLocale();
  const isWechatHome = state.appStage === "live" && state.activeTab === "chats" && state.chatView === "list";
  if (state.appStage !== "live") {
    appEl.innerHTML = renderLaunchExperience();
    return;
  }
  appEl.innerHTML = `
    <div class="app-shell ${isWechatHome ? "wechat-home-shell" : ""}">
      ${renderToasts()}
      <div class="status-bar">
        <div>9:41</div>
        <div class="status-icons">
          <span class="signal-dot"></span>
          <span class="signal-dot"></span>
          <span class="battery-pill"></span>
        </div>
      </div>
      <div class="screen-content">
        ${renderCurrentPage()}
        ${renderSheet()}
      </div>
      ${renderTabBar()}
    </div>
  `;
  syncConversationScroll();
}

function syncConversationScroll() {
  if (state.activeTab !== "chats" || state.chatView !== "conversation") return;
  requestAnimationFrame(() => {
    const messageScroll = appEl.querySelector(".message-scroll");
    if (messageScroll) {
      messageScroll.scrollTop = messageScroll.scrollHeight;
    }
  });
}

function renderCurrentPage() {
  if (state.activeTab === "chats") {
    return state.chatView === "conversation"
      ? renderConversationPage()
      : renderChatsPage();
  }

  if (state.activeTab === "contacts") {
    return state.contactsView === "detail"
      ? renderContactDetailPage()
      : renderContactsPage();
  }

  return renderSettingsPage();
}

function renderLaunchExperience() {
  const slides = [
    {
      eyebrow: copy("Human + Agent", "Human + Agent", "Human + Agent"),
      title: copy("让人和 Agent 在同一层关系里交流", "Messaging where humans and agents coexist", "Messaging, in dem Menschen und Agents gleichberechtigt zusammenarbeiten"),
      body: copy(
        "创建群聊、邀请真人和 Agent，或者单独带着你的 Agent 开一个房间。",
        "Create group chats, invite people and agents, or open a room with just your agents.",
        "Erstelle Gruppen, lade Menschen und Agents ein oder öffne einen Raum nur mit deinen Agents."
      ),
    },
    {
      eyebrow: copy("Bring Your Runtime", "Bring Your Runtime", "Bring Your Runtime"),
      title: copy("导入已有 Agent，或直接购买托管 Agent", "Import your existing runtime or buy a managed agent", "Bestehende Runtimes importieren oder Managed Agents direkt starten"),
      body: copy(
        "本地桥接、自定义 API、插件接入和托管服务都在同一个产品里闭环。",
        "Local bridge, custom API, plugin connectors, and managed agents all live in one product loop.",
        "Local Bridge, Custom API, Plugin-Connectoren und Managed Agents laufen in einem gemeinsamen Produktfluss zusammen."
      ),
    },
    {
      eyebrow: copy("Private by Default", "Private by Default", "Private by Default"),
      title: copy("会话规则由你控制，记忆按 runtime 或云端加密存放", "You control reply rules and memory storage", "Du steuerst Antwortregeln und Speicherort der Memory"),
      body: copy(
        "先用 demo 工作区体验，再决定是否升级到更高的托管额度。",
        "Start in the demo workspace, then upgrade when you need more managed capacity.",
        "Starte im Demo-Workspace und upgrade erst, wenn du mehr Managed-Kapazität brauchst."
      ),
    },
  ];
  const slide = slides[state.onboardingStep] || slides[0];

  return `
    <div class="launch-shell">
      <div class="launch-card">
        <div class="launch-brand-row">
          <div class="brand-mark">P</div>
          <div>
            <div class="launch-brand">${PRODUCT_NAME}</div>
            <div class="launch-plan">${copy("Agent-native social messaging", "Agent-native social messaging", "Agent-native Social Messaging")}</div>
          </div>
        </div>
        <div class="launch-copy">
          <div class="launch-eyebrow">${slide.eyebrow}</div>
          <h1 class="launch-title">${slide.title}</h1>
          <p class="launch-body">${slide.body}</p>
        </div>
        <div class="launch-progress">
          ${slides
            .map(
              (_, index) =>
                `<span class="launch-dot ${index === state.onboardingStep ? "active" : ""}"></span>`
            )
            .join("")}
        </div>
        <div class="launch-actions">
          ${
            state.onboardingStep > 0
              ? `<button class="pill-button secondary" data-action="back-onboarding">${t("common.back")}</button>`
              : ""
          }
          ${
            state.onboardingStep < slides.length - 1
              ? `<button class="pill-button" data-action="advance-onboarding">${copy("继续", "Continue", "Weiter")}</button>`
              : `<button class="pill-button" data-action="finish-onboarding">${copy(
                  "通过 Apple 继续",
                  "Continue with Apple",
                  "Mit Apple fortfahren"
                )}</button>`
          }
        </div>
        <div class="launch-secondary">
          <button class="inline-button" data-action="finish-onboarding">${copy(
            "使用 Demo 工作区继续",
            "Continue with demo workspace",
            "Mit Demo-Workspace fortfahren"
          )}</button>
        </div>
      </div>
    </div>
  `;
}

function renderChatsPage() {
  const query = state.search.chats.trim().toLowerCase();
  const conversationRows = getSortedConversations()
    .filter((conversation) => matchesConversationSearch(conversation, query))
    .map((conversation) => {
      return `
        <button
          class="list-button wechat-chat-row ${conversation.pinned ? "pinned" : ""}"
          data-action="open-conversation"
          data-conversation-id="${conversation.id}"
          data-conversation-row="true"
        >
          <div class="wechat-chat-avatar-wrap">
            <div class="wechat-chat-avatar">${renderConversationAvatar(conversation)}</div>
            ${
              conversation.unread
                ? `<span class="wechat-avatar-unread-badge">${escapeHtml(
                    conversation.unread > 99 ? "99+" : String(conversation.unread)
                  )}</span>`
                : ""
            }
          </div>
          <div class="wechat-chat-main">
            <div class="wechat-chat-title">${escapeHtml(conversation.title)}</div>
            <div class="wechat-chat-preview">${renderConversationListPreview(conversation)}</div>
          </div>
          <div class="wechat-chat-side">
            <div class="wechat-chat-time">${escapeHtml(
              formatConversationListTime(conversation.updatedAt)
            )}</div>
            <div class="wechat-chat-status">${renderConversationStatusMeta(conversation)}</div>
          </div>
        </button>
      `;
    })
    .join("");

  return `
    <div class="page wechat-page">
      <div class="wechat-page-header">
        <div class="wechat-nav-bar">
          <h1 class="wechat-page-title">${t("pages.chats")}</h1>
          <div class="wechat-nav-actions">
            <button class="wechat-nav-icon-button" data-action="open-chat-search" aria-label="search">${renderUiIcon("search")}</button>
            <button class="wechat-nav-icon-button" data-action="open-sheet" data-sheet="chat-plus-menu" aria-label="chat menu">${renderUiIcon("plus-circle")}</button>
          </div>
        </div>
        <div class="wechat-search-wrap">
          <label class="wechat-search-bar">
            <span class="wechat-search-icon">${renderUiIcon("search")}</span>
            <input
              class="wechat-search-input"
              type="search"
              data-search="chats"
              value="${escapeAttribute(state.search.chats)}"
              placeholder="${escapeAttribute(t("labels.searchChats"))}"
            />
          </label>
        </div>
      </div>
      <div class="wechat-chat-scroll">
        <div class="wechat-chat-list">
        ${conversationRows || renderEmptyStateCard(
          copy("没有匹配的聊天。", "No matching chats.", "Keine passenden Chats."),
          copy("试试搜索人名、Agent 名或群聊标题。", "Try a person, agent, or group title.", "Versuche es mit einem Namen, Agent oder Gruppentitel.")
        )}
        </div>
      </div>
    </div>
  `;
}

function renderConversationPage() {
  const conversation = getConversation(state.selectedConversationId);
  if (!conversation) return "";

  const subtitle =
    conversation.type === "group"
      ? `${formatMemberCount("human", conversation.humanIds.length)} · ${formatMemberCount(
          "bot",
          conversation.botPresence.length
        )}`
      : `${getOtherHuman(conversation)?.name || t("labels.directChat")} · ${formatMemberCount(
          "bot",
          conversation.botPresence.length
        )}`;

  return `
    <div class="conversation-shell page">
      <div class="conversation-header">
        <button class="icon-button" data-action="back-to-chats" aria-label="back">${renderUiIcon("chevron-left")}</button>
        <div class="conversation-info">
          <div class="avatar ${conversation.type === "group" ? "agent" : "human"}">${conversation.type === "group" ? "G" : getOtherHuman(conversation)?.avatar || "D"}</div>
          <div class="conversation-title-group">
            <div class="conversation-title">${conversation.title}</div>
            <div class="conversation-meta">${subtitle}</div>
          </div>
        </div>
        <button class="pill-button secondary" data-action="open-sheet" data-sheet="manage-conversation">${t(
          "common.manage"
        )}</button>
      </div>
      <div class="chip-row">
        ${conversation.botPresence
          .map((presence) => {
            const bot = getBot(presence.botId);
            return `<button class="chip-button" data-action="prepend-draft" data-text="@${bot.name} ">@${bot.name}</button>`;
          })
          .join("")}
        <button class="chip-button" data-action="open-sheet" data-sheet="manage-conversation">${t(
          "actions.inviteMembers"
        )}</button>
      </div>
      <div class="message-scroll">
        ${conversation.messages.map(renderMessage).join("")}
        ${renderThinkingCards(conversation.id)}
      </div>
      <div class="composer">
        <div class="composer-box">
          <textarea class="composer-textarea" rows="1" placeholder="${escapeAttribute(
            copy("输入消息或 @Agent", "Type a message or @agent", "Nachricht eingeben oder @agent")
          )}" data-role="composer" data-conversation-id="${conversation.id}">${escapeHtml(
    state.composeDrafts[conversation.id] || ""
  )}</textarea>
          <div class="composer-actions">
            <button class="send-button" data-action="send-message" data-conversation-id="${conversation.id}" aria-label="send">${renderUiIcon("arrow-up")}</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderMessage(message) {
  if (message.type === "runtime-error") {
    const bot = getBot(message.botId);
    return `
      <div class="message-group runtime-error">
        <div class="message-bubble">
          <div class="message-head">
            <span>${escapeHtml(bot?.name || copy("Agent", "Agent", "Agent"))}</span>
            ${message.time ? `<span>· ${escapeHtml(localizeRelativeLabel(message.time))}</span>` : ""}
          </div>
          <div class="message-text">${escapeHtml(message.reason)}</div>
          <div class="message-tail">
            <span class="tiny-label">${copy("运行异常", "Runtime issue", "Runtime-Problem")}</span>
            <button
              class="chip-button"
              data-action="retry-bot-reply"
              data-conversation-id="${escapeAttribute(message.conversationId)}"
              data-bot-id="${escapeAttribute(message.botId)}"
              data-input="${escapeAttribute(message.inputSnapshot || "")}"
              data-mode="${escapeAttribute(message.mode || "mention")}"
            >
              ${t("common.retry")}
            </button>
          </div>
        </div>
      </div>
    `;
  }

  if (message.type === "system") {
    return `
      <div class="message-group system">
        <div class="message-bubble">
          <div class="message-text">${escapeHtml(message.text)}</div>
        </div>
      </div>
    `;
  }

  const isHuman = message.type === "human";
  const isSelf = isHuman && message.senderId === "u-self";
  const sender = isHuman ? getHuman(message.senderId) : getBot(message.senderId);
  const owner = !isHuman ? getHuman(message.ownerId) : null;

  return `
    <div class="message-group ${message.type} ${isSelf ? "self" : ""}">
      <div class="message-bubble">
        <div class="message-head">
          <span>${escapeHtml(sender?.name || copy("未知", "Unknown", "Unbekannt"))}</span>
          ${owner ? `<span>· ${escapeHtml(owner.name)}</span>` : ""}
          ${message.time ? `<span>· ${escapeHtml(localizeRelativeLabel(message.time))}</span>` : ""}
        </div>
        <div class="message-text">${escapeHtml(message.text)}</div>
        ${
          !isHuman
            ? `
              <div class="message-tail">
                <span class="tiny-label">${escapeHtml(message.trigger || copy("自动", "Auto", "Auto"))}</span>
                <button class="chip-button" data-action="toast" data-message="${escapeAttribute(
                  formatBotWhyToast(sender?.name || copy("Agent", "Agent", "Agent"), message.trigger, message.source)
                )}">${copy("详情", "Why", "Warum")}</button>
                ${renderMentionChips(message.mentions || [])}
              </div>
            `
            : ""
        }
      </div>
    </div>
  `;
}

function renderMentionChips(mentions) {
  if (!mentions.length) return "";
  return mentions
    .map(
      (mention) =>
        `<span class="mention-chip">@${escapeHtml(mention.name)}</span>`
    )
    .join("");
}

function renderThinkingCards(conversationId) {
  return state.pendingReplies
    .filter((item) => item.conversationId === conversationId)
    .map((item) => {
      const bot = getBot(item.botId);
      return `
        <div class="thinking-card">
          <div class="typing-dots"><span></span><span></span><span></span></div>
          <div>${escapeHtml(bot?.name || copy("Agent", "Agent", "Agent"))} ${escapeHtml(formatThinkingStage(item.stage))}</div>
        </div>
      `;
    })
    .join("");
}

function renderContactsPage() {
  const query = state.search.contacts.trim().toLowerCase();
  const items = getContactItems().filter((item) => matchesContactSearch(item, query));

  return `
    <div class="page">
      <div class="page-header">
        <div class="page-header-row">
          <div>
            <h1 class="page-title">${t("pages.contacts")}</h1>
          </div>
          <button class="icon-button" data-action="open-sheet" data-sheet="add-menu" aria-label="add contact">${renderUiIcon("plus")}</button>
        </div>
      </div>
      <div class="search-wrap">
        <label class="search-bar search-input-wrap">
          <span class="search-icon">${renderUiIcon("search")}</span>
          <input
            class="search-input"
            type="search"
            data-search="contacts"
            value="${escapeAttribute(state.search.contacts)}"
            placeholder="${escapeAttribute(t("labels.searchContacts"))}"
          />
        </label>
      </div>
      <div class="chip-row">
        ${renderFilterChip("all", t("common.all"))}
        ${renderFilterChip("human", t("common.human"))}
        ${renderFilterChip("bot", t("common.bot"))}
      </div>
      <div class="list-scroll">
        ${renderPendingRequestsSection()}
        ${items.length
          ? items.map(renderContactCard).join("")
          : renderEmptyStateCard(
              copy("没有匹配的联系人。", "No matching contacts.", "Keine passenden Kontakte."),
              copy("试试搜索姓名、账号或 Agent 名。", "Try a name, handle, or agent title.", "Versuche es mit Name, Handle oder Agent.")
            )}
      </div>
    </div>
  `;
}

function renderFilterChip(filter, label) {
  return `<button class="${
    state.contactFilter === filter ? "segment active" : "segment"
  }" data-action="set-contact-filter" data-filter="${filter}">${label}</button>`;
}

function renderContactCard(item) {
  const isHuman = item.kind === "human";
  const runtimeStatus =
    !isHuman && item.runtimeConfig?.status
      ? `<span class="badge ${
          item.runtimeConfig.status === "connected" ||
          item.runtimeConfig.status === "active"
            ? "human"
            : "agent"
        }">${escapeHtml(formatRuntimeStatus(item.runtimeConfig.status))}</span>`
      : "";
  return `
    <button class="list-button contact-card" data-action="open-contact" data-contact-id="${item.id}" data-contact-type="${item.kind}">
      <div class="contact-card-head">
        <div class="contact-leading">
          <div class="avatar ${isHuman ? "human" : "agent"}">${escapeHtml(
    item.avatar
  )}</div>
          <div class="contact-main">
            <div class="contact-name">${escapeHtml(item.name)}</div>
            <div class="contact-meta">${escapeHtml(
              isHuman ? item.bio : item.summary
            )}</div>
          </div>
        </div>
        <div class="contact-actions">
          <span class="contact-mini">${isHuman ? "H" : "AI"}</span>
        </div>
      </div>
      <div class="badge-row">
        ${
          isHuman
            ? `<span class="badge human">${escapeHtml(item.handle)}</span>`
            : `<span class="badge agent">${escapeHtml(
                formatBotSourceLabel(item)
              )}</span>${runtimeStatus}<span class="badge">${
                item.encryptedCloudMemory
                  ? copy("云端 E2E", "E2E Cloud", "E2E-Cloud")
                  : copy("外部持有", "Runtime Owned", "Runtime-basiert")
              }</span>`
        }
      </div>
    </button>
  `;
}

function renderContactDetailPage() {
  if (state.selectedContactType === "human") {
    const human = getHuman(state.selectedContactId);
    if (!human) return "";
    return renderHumanDetail(human);
  }

  const bot = getBot(state.selectedContactId);
  if (!bot) return "";
  return renderBotDetail(bot);
}

function renderHumanDetail(human) {
  const existingConversation = findDirectConversationWith(human.id);
  return `
    <div class="page">
      <div class="page-header">
        <button class="ghost-button" data-action="back-to-contacts">${renderUiIcon("chevron-left")} ${t("common.back")}</button>
      </div>
      <div class="detail-scroll">
        <div class="hero-card">
          <div class="hero-top">
            <div class="avatar human">${escapeHtml(human.avatar)}</div>
            <div class="hero-copy">
              <h2 class="hero-title">${escapeHtml(human.name)}</h2>
              <div class="hero-description">${escapeHtml(human.handle)} · ${escapeHtml(
    human.bio
  )}</div>
            </div>
          </div>
          <div class="inline-actions">
            <button class="pill-button" data-action="open-direct-chat" data-human-id="${human.id}">${
    existingConversation ? t("actions.openChat") : t("actions.startChat")
  }</button>
            <button class="inline-button danger" data-action="delete-human-contact" data-human-id="${human.id}">${t(
    "actions.deleteFriend"
  )}</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderBotDetail(bot) {
  const sections = [
    ["overview", t("labels.overview")],
    ["memory", t("labels.memory")],
    ["files", t("labels.files")],
    ["runtime", t("labels.runtime")],
  ];

  return `
    <div class="page">
      <div class="page-header">
        <button class="ghost-button" data-action="back-to-contacts">${renderUiIcon("chevron-left")} ${t("common.back")}</button>
      </div>
      <div class="detail-scroll">
        <div class="hero-card">
          <div class="hero-top">
            <div class="avatar agent">${escapeHtml(bot.avatar)}</div>
            <div class="hero-copy">
              <h2 class="hero-title">${escapeHtml(bot.name)}</h2>
              <div class="hero-description">${escapeHtml(bot.summary)}</div>
            </div>
          </div>
          <div class="hero-stats">
            <div class="stat-box">
              <div class="stat-label">${t("labels.runtime")}</div>
              <div class="stat-value">${escapeHtml(
                bot.sourceType === "managed"
                  ? copy("托管", "Managed", "Managed")
                  : copy("外接", "External", "Extern")
              )}</div>
            </div>
            <div class="stat-box">
              <div class="stat-label">${copy("会话", "Chats", "Chats")}</div>
              <div class="stat-value">${bot.activeConversations}</div>
            </div>
            <div class="stat-box">
              <div class="stat-label">${copy("模式", "Mode", "Modus")}</div>
              <div class="stat-value">${escapeHtml(shortMode(bot.defaultMode))}</div>
            </div>
          </div>
          <div class="inline-actions">
            <button class="pill-button" data-action="open-solo-bot-room" data-bot-id="${bot.id}">${t(
              "actions.soloRoom"
            )}</button>
            <button class="inline-button" data-action="upload-file" data-bot-id="${bot.id}">${t(
              "actions.uploadFile"
            )}</button>
            <button class="inline-button danger" data-action="delete-bot" data-bot-id="${bot.id}">${t(
              "actions.deleteBot"
            )}</button>
          </div>
        </div>
        <div class="chip-row" style="padding: 0 0 14px;">
          ${sections
            .map(
              ([id, label]) =>
                `<button class="${
                  state.botDetailTab === id ? "segment active" : "segment"
                }" data-action="set-bot-tab" data-bot-tab="${id}">${t(
                  `labels.${id}`,
                  label
                )}</button>`
            )
            .join("")}
        </div>
        ${renderBotSection(bot)}
      </div>
    </div>
  `;
}

function renderBotSection(bot) {
  if (state.botDetailTab === "overview") {
    return `
      <div class="detail-card">
        <h3>${t("labels.overview")}</h3>
        <div class="detail-grid">
          <div class="detail-item">
            <div class="detail-item-title">${t("labels.identity")}</div>
            <div class="detail-item-copy">${escapeHtml(bot.identity)}</div>
          </div>
          <div class="detail-item">
            <div class="detail-item-title">${t("labels.source")}</div>
            <div class="detail-item-copy">${escapeHtml(
              formatBotRuntimeSummary(bot)
            )}</div>
          </div>
          <div class="detail-item">
            <div class="detail-item-title">${t("labels.connectionStatus")}</div>
              <div class="detail-item-copy">${escapeHtml(
                formatRuntimeStatus(bot.runtimeConfig.status)
              )} · ${escapeHtml(bot.runtimeCheck?.message || copy("尚未检测", "Not checked yet", "Noch nicht geprüft"))}</div>
            </div>
          <div class="detail-item">
            <div class="detail-item-title">${t("labels.capabilities")}</div>
            <div class="detail-item-copy">${escapeHtml(
              bot.capabilities.map(formatCapabilityLabel).join(" · ")
            )}</div>
          </div>
        </div>
      </div>
    `;
  }

  if (state.botDetailTab === "memory") {
    return `
      <div class="detail-card">
        <h3>${t("labels.memory")}</h3>
        ${bot.memory
          .map(
            (memory) => `
          <div class="memory-item">
            <div class="detail-row">
              <div class="detail-item-title">${escapeHtml(memory.title)}</div>
              <button class="inline-button danger" data-action="delete-bot-memory" data-bot-id="${bot.id}" data-memory-id="${memory.id}">${t(
                "common.delete"
              )}</button>
            </div>
            <div class="detail-item-copy">${escapeHtml(memory.copy)}</div>
          </div>
        `
          )
          .join("")}
        <div class="inline-actions">
          <button class="inline-button" data-action="add-bot-memory" data-bot-id="${bot.id}">${t(
            "common.add"
          )} ${t("labels.memory")}</button>
        </div>
      </div>
    `;
  }

  if (state.botDetailTab === "files") {
    return `
      <div class="detail-card">
        <h3>${t("labels.files")}</h3>
        ${
          bot.files.length
            ? bot.files
                .map(
                  (file) => `
                <div class="file-item">
                  <div class="detail-row">
                    <div>
                      <div class="detail-item-title">${escapeHtml(file.name)}</div>
                      <div class="detail-item-copy">${escapeHtml(file.size)} · ${escapeHtml(
                    file.status
                  )}</div>
                    </div>
                    <span class="status-pill ${statusClassName(
                      file.status
                    )}">${escapeHtml(formatFileStatus(file.status))}</span>
                  </div>
                  ${
                    file.errorMessage
                      ? `<div class="detail-item-copy">${escapeHtml(file.errorMessage)}</div>`
                      : ""
                  }
                  ${
                    file.status !== "synced"
                      ? `<div class="progress-bar"><div class="progress-value" style="width:${file.progress}%"></div></div>`
                      : ""
                  }
                  <div class="inline-actions">
                    ${
                      file.status === "failed"
                        ? `<button class="inline-button" data-action="retry-bot-file" data-bot-id="${bot.id}" data-file-id="${file.id}">${t(
                            "common.retry"
                          )}</button>`
                        : ""
                    }
                    <button class="inline-button danger" data-action="delete-bot-file" data-bot-id="${bot.id}" data-file-id="${file.id}">${t(
                      "common.delete"
                    )}</button>
                  </div>
                </div>
              `
                )
                .join("")
            : `<div class="detail-item"><div class="detail-item-copy">${copy(
                "还没有文件。",
                "No files yet.",
                "Noch keine Dateien."
              )}</div></div>`
        }
      </div>
    `;
  }

  return `
    <div class="detail-card">
      <h3>${t("labels.runtime")}</h3>
      <div class="detail-grid">
        <div class="detail-item">
          <div class="detail-row">
            <div class="detail-item-title">${t("labels.connectionStatus")}</div>
            <span class="status-pill ${statusClassName(
              bot.runtimeCheck?.status || bot.runtimeConfig.status
            )}">${escapeHtml(
    formatRuntimeStatus(bot.runtimeCheck?.status || bot.runtimeConfig.status)
  )}</span>
          </div>
          <div class="detail-item-copy">${escapeHtml(
            bot.runtimeCheck?.message || copy("还没有检测结果。", "No checks yet.", "Noch keine Prüfung.")
          )}</div>
          <div class="detail-item-copy">${t("labels.latestCheck")}：${escapeHtml(
            localizeRelativeLabel(bot.runtimeCheck?.lastCheckedAt || copy("未检测", "Not checked", "Nicht geprüft"))
          )}${bot.runtimeCheck?.latency ? ` · ${escapeHtml(bot.runtimeCheck.latency)}` : ""}</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">${t("labels.runtimeMethod")}</div>
          <div class="detail-item-copy">${escapeHtml(
            formatBotRuntimeSummary(bot)
          )}</div>
        </div>
        <div class="detail-item">
          <div class="detail-item-title">${t("labels.configuration")}</div>
          <div class="detail-item-copy">${escapeHtml(
            formatRuntimeConfig(bot.runtimeConfig)
          )}</div>
        </div>
          <div class="detail-item">
            <div class="detail-item-title">${t("labels.memoryStorage")}</div>
            <div class="detail-item-copy">${
              bot.encryptedCloudMemory
                ? copy("端到端加密云端记忆", "End-to-end encrypted cloud memory", "Ende-zu-Ende verschlüsselter Cloud-Speicher")
                : copy("由 runtime 持有", "Owned by the runtime", "Vom Runtime verwaltet")
            }</div>
          </div>
        ${
          bot.sourceType === "managed"
            ? `<div class="detail-item">
                <div class="detail-item-title">${t("common.subscription")}</div>
                <div class="detail-item-copy">${escapeHtml(
                  formatManagedSubscription(bot)
                )}</div>
              </div>`
            : ""
        }
      </div>
      <div class="inline-actions">
        ${
          bot.sourceType === "managed"
            ? `<button class="inline-button" data-action="open-manage-managed-bot" data-bot-id="${bot.id}">${t(
                "actions.manageSubscription"
              )}</button>`
            : `<button class="inline-button" data-action="health-check-bot" data-bot-id="${bot.id}">${
                bot.runtimeConfig.status === "connected"
                  ? t("actions.recheck")
                  : t("actions.retryConnection")
              }</button>
               <button class="inline-button" data-action="edit-bot-runtime" data-bot-id="${bot.id}">${t(
                 "actions.editIntegration"
               )}</button>`
        }
      </div>
    </div>
  `;
}

function renderSettingsPage() {
  const managedCount = state.bots.filter((bot) => bot.sourceType === "managed").length;
  const defaultMethod = getDefaultPaymentMethod();
  const latestInvoice = state.billing.invoices[0];
  const currentPlan = getCurrentPlan();
  return `
    <div class="page">
      <div class="page-header">
        <div class="page-header-row">
          <div>
            <h1 class="page-title">${t("pages.settings")}</h1>
          </div>
        </div>
      </div>
      <div class="detail-scroll">
        <div class="settings-card">
          <div class="card-title">${t("common.account")}</div>
          <div class="settings-row">
            <div>
              <div class="detail-item-title">${t("labels.currentAccount")}</div>
              <div class="detail-item-copy">${copy("@you · human 主账号", "@you · primary human account", "@you · primärer Human-Account")}</div>
            </div>
            <span class="status-pill success">${t("common.active")}</span>
          </div>
          <div class="settings-row">
            <div>
              <div class="detail-item-title">${t("common.paymentMethod")}</div>
              <div class="detail-item-copy">${escapeHtml(
                defaultMethod?.label || copy("未设置付款方式", "No payment method", "Keine Zahlungsmethode")
              )} · ${escapeHtml(formatPaymentStatus(defaultMethod?.status || "missing"))}</div>
            </div>
            <button class="inline-button" data-action="open-sheet" data-sheet="payment-methods">${t(
              "common.manage"
            )}</button>
          </div>
        </div>
        <div class="settings-card">
          <div class="card-title">${t("common.notifications")}</div>
          ${renderToggleRow("notifications", translateSettingTitle("notifications"), translateSettingDescription("notifications"))}
          ${renderToggleRow("biometricLock", translateSettingTitle("biometricLock"), translateSettingDescription("biometricLock"))}
        </div>
        <div class="settings-card">
          <div class="card-title">${t("common.privacy")}</div>
          ${renderToggleRow("cloudSync", translateSettingTitle("cloudSync"), translateSettingDescription("cloudSync"))}
          ${renderToggleRow("localBridgeCellular", translateSettingTitle("localBridgeCellular"), translateSettingDescription("localBridgeCellular"))}
          <div class="settings-row">
            <div>
              <div class="detail-item-title">${t("common.localCache")}</div>
              <div class="detail-item-copy">${state.settings.cacheMB} MB · ${copy(
                "仅缓存最近会话",
                "recent chats only",
                "nur aktuelle Chats"
              )}</div>
            </div>
            <button class="inline-button" data-action="clear-cache">${t("common.delete")}</button>
          </div>
        </div>
        <div class="settings-card">
          <div class="card-title">${t("common.subscription")}</div>
          <div class="settings-row">
            <div>
              <div class="detail-item-title">${escapeHtml(currentPlan.name)}</div>
              <div class="detail-item-copy">${copy(
                `已用 ${managedCount} / ${currentPlan.managedBotLimit} 个托管 Agent`,
                `${managedCount} / ${currentPlan.managedBotLimit} managed agents used`,
                `${managedCount} / ${currentPlan.managedBotLimit} Managed Agents genutzt`
              )}</div>
            </div>
            <span class="status-pill ${statusClassName(
              defaultMethod?.status || "missing"
            )}">${escapeHtml(formatPaymentStatus(defaultMethod?.status || "missing"))}</span>
          </div>
          <div class="settings-row">
            <div>
              <div class="detail-item-title">${copy("升级计划", "Upgrade Plan", "Plan upgraden")}</div>
              <div class="detail-item-copy">${copy(
                `${PLAN_CATALOG.creator.name} ${PLAN_CATALOG.creator.monthlyPrice} / ${copy("月", "mo", "Monat")} · ${PLAN_CATALOG.studio.name} ${PLAN_CATALOG.studio.monthlyPrice} / ${copy("月", "mo", "Monat")}`,
                `${PLAN_CATALOG.creator.name} ${PLAN_CATALOG.creator.monthlyPrice}/mo · ${PLAN_CATALOG.studio.name} ${PLAN_CATALOG.studio.monthlyPrice}/mo`,
                `${PLAN_CATALOG.creator.name} ${PLAN_CATALOG.creator.monthlyPrice}/Monat · ${PLAN_CATALOG.studio.name} ${PLAN_CATALOG.studio.monthlyPrice}/Monat`
              )}</div>
            </div>
            <button class="inline-button" data-action="open-upgrade-sheet" data-source="settings">${copy(
              "升级",
              "Upgrade",
              "Upgrade"
            )}</button>
          </div>
          <div class="settings-row">
            <div>
              <div class="detail-item-title">${t("actions.createNewBot")}</div>
              <div class="detail-item-copy">${copy(
                "创建新的托管 Agent",
                "Create another managed agent",
                "Einen weiteren Managed Agent erstellen"
              )}</div>
            </div>
            <button class="inline-button" data-action="open-sheet" data-sheet="create-managed-bot">${t("common.create")}</button>
          </div>
          <div class="settings-row">
            <div>
              <div class="detail-item-title">${t("common.recentInvoice")}</div>
              <div class="detail-item-copy">${
                latestInvoice
                  ? `${escapeHtml(latestInvoice.title)} · ${escapeHtml(
                      latestInvoice.amount
                    )} · ${escapeHtml(latestInvoice.date)}`
                  : copy("还没有账单。", "No invoices yet.", "Noch keine Rechnungen.")
              }</div>
            </div>
            <span class="status-pill ${statusClassName(
              latestInvoice?.status || "missing"
            )}">${escapeHtml(formatInvoiceStatus(latestInvoice?.status || "missing"))}</span>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderToggleRow(settingKey, title, description) {
  const active = state.settings[settingKey];
  return `
    <div class="settings-row">
      <div>
        <div class="detail-item-title">${title}</div>
        <div class="detail-item-copy">${description}</div>
      </div>
      <button class="toggle ${active ? "active" : ""}" data-action="toggle-setting" data-setting-key="${settingKey}">
        <span class="toggle-thumb"></span>
      </button>
    </div>
  `;
}

function renderSheet() {
  if (!state.sheet) return "";

  switch (state.sheet.type) {
    case "chat-plus-menu":
      return renderChatPlusMenuSheet();
    case "chat-search":
      return renderChatSearchSheet();
    case "chat-list-actions":
      return renderChatListActionsSheet();
    case "direct-chat-picker":
      return renderDirectChatPickerSheet();
    case "create-group":
      return renderCreateGroupSheet();
    case "manage-conversation":
      return renderManageConversationSheet();
    case "add-menu":
      return renderAddMenuSheet();
    case "add-human":
      return renderAddHumanSheet();
    case "bot-menu":
      return renderBotMenuSheet();
    case "import-bot-picker":
      return renderImportBotPickerSheet();
    case "import-bot-config":
      return renderImportBotConfigSheet();
    case "create-managed-bot":
      return renderCreateManagedBotSheet();
    case "confirm-managed-bot":
      return renderConfirmManagedBotSheet();
    case "payment-methods":
      return renderPaymentMethodsSheet();
    case "manage-managed-bot":
      return renderManageManagedBotSheet();
    case "upgrade-plan":
      return renderUpgradePlanSheet();
    default:
      return "";
  }
}

function renderChatPlusMenuSheet() {
  return `
    <div class="sheet-overlay">
      <button class="sheet-backdrop" data-action="close-sheet" aria-label="close"></button>
      <div class="sheet-panel wechat-action-sheet">
        <div class="sheet-handle"></div>
        <div class="sheet-list wechat-action-list">
          <button class="list-button sheet-card wechat-action-card" data-action="open-direct-from-contacts">
            <div class="sheet-card-head">
              <div>
                <div class="contact-name">${escapeHtml(copy("发起聊天", "New Chat", "Neuer Chat"))}</div>
              </div>
            </div>
          </button>
          <button class="list-button sheet-card wechat-action-card" data-action="open-sheet" data-sheet="create-group">
            <div class="sheet-card-head">
              <div>
                <div class="contact-name">${t("actions.createGroup")}</div>
              </div>
            </div>
          </button>
          <button class="list-button sheet-card wechat-action-card" data-action="open-sheet" data-sheet="add-human">
            <div class="sheet-card-head">
              <div>
                <div class="contact-name">${escapeHtml(copy("添加朋友", "Add Human", "Kontakt hinzufügen"))}</div>
              </div>
            </div>
          </button>
          <button class="list-button sheet-card wechat-action-card" data-action="open-sheet" data-sheet="bot-menu">
            <div class="sheet-card-head">
              <div>
                <div class="contact-name">${escapeHtml(copy("添加 Agent", "Add Agent", "Agent hinzufügen"))}</div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderChatSearchSheet() {
  const query = state.search.chats.trim().toLowerCase();
  const results = getSortedConversations()
    .filter((conversation) => matchesConversationSearch(conversation, query))
    .map(
      (conversation) => `
        <button class="list-button wechat-chat-row" data-action="open-conversation" data-conversation-id="${conversation.id}">
          <div class="wechat-chat-avatar-wrap">
            <div class="wechat-chat-avatar">${renderConversationAvatar(conversation)}</div>
          </div>
          <div class="wechat-chat-main">
            <div class="wechat-chat-title">${escapeHtml(conversation.title)}</div>
            <div class="wechat-chat-preview">${renderConversationListPreview(conversation)}</div>
          </div>
          <div class="wechat-chat-side">
            <div class="wechat-chat-time">${escapeHtml(
              formatConversationListTime(conversation.updatedAt)
            )}</div>
            <div class="wechat-chat-status">${renderConversationStatusMeta(conversation)}</div>
          </div>
        </button>
      `
    )
    .join("");

  return `
    <div class="sheet-overlay">
      <button class="sheet-backdrop" data-action="close-sheet" aria-label="close"></button>
      <div class="sheet-panel wechat-search-sheet">
        <div class="sheet-handle"></div>
        <div class="wechat-search-wrap wechat-search-sheet-wrap">
          <label class="wechat-search-bar">
            <span class="wechat-search-icon">${renderUiIcon("search")}</span>
            <input
              class="wechat-search-input"
              type="search"
              data-search="chats"
              value="${escapeAttribute(state.search.chats)}"
              placeholder="${escapeAttribute(t("labels.searchChats"))}"
            />
          </label>
        </div>
        <div class="sheet-list wechat-search-results">
          <div class="wechat-chat-list">
            ${results || renderEmptyStateCard(
              copy("没有匹配的聊天。", "No matching chats.", "Keine passenden Chats."),
              copy("试试搜索人名、Agent 名或群聊标题。", "Try a person, agent, or group title.", "Versuche es mit einem Namen, Agent oder Gruppentitel.")
            )}
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderChatListActionsSheet() {
  const conversation = getConversation(state.sheet?.conversationId);
  if (!conversation) return "";

  return `
    <div class="sheet-overlay">
      <button class="sheet-backdrop" data-action="close-sheet" aria-label="close"></button>
      <div class="sheet-panel wechat-action-sheet">
        <div class="sheet-handle"></div>
        <div class="sheet-title">${escapeHtml(conversation.title)}</div>
        <div class="sheet-list wechat-action-list">
          <button class="list-button sheet-card wechat-action-card" data-action="toggle-pin-conversation" data-conversation-id="${conversation.id}">
            <div class="sheet-card-head">
              <div class="contact-name">${escapeHtml(
                conversation.pinned ? copy("取消置顶", "Unpin", "Lösen") : copy("置顶聊天", "Pin Chat", "Chat fixieren")
              )}</div>
            </div>
          </button>
          <button class="list-button sheet-card wechat-action-card" data-action="toggle-mute-conversation" data-conversation-id="${conversation.id}">
            <div class="sheet-card-head">
              <div class="contact-name">${escapeHtml(
                conversation.muted ? copy("关闭免打扰", "Unmute", "Stumm aus") : copy("消息免打扰", "Mute Notifications", "Stummschalten")
              )}</div>
            </div>
          </button>
          <button class="list-button sheet-card wechat-action-card" data-action="toggle-read-conversation" data-conversation-id="${conversation.id}">
            <div class="sheet-card-head">
              <div class="contact-name">${escapeHtml(
                conversation.unread ? copy("标为已读", "Mark Read", "Als gelesen markieren") : copy("标为未读", "Mark Unread", "Als ungelesen markieren")
              )}</div>
            </div>
          </button>
          <button class="list-button sheet-card wechat-action-card danger" data-action="delete-conversation" data-conversation-id="${conversation.id}">
            <div class="sheet-card-head">
              <div class="contact-name">${escapeHtml(copy("删除聊天", "Delete Chat", "Chat löschen"))}</div>
            </div>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderDirectChatPickerSheet() {
  const contacts = getHumanContacts();

  return `
    <div class="sheet-overlay">
      <button class="sheet-backdrop" data-action="close-sheet" aria-label="close"></button>
      <div class="sheet-panel">
        <div class="sheet-handle"></div>
        <div class="sheet-title">${escapeHtml(copy("选择联系人", "Select Contact", "Kontakt auswählen"))}</div>
        <div class="sheet-list">
          <div class="sheet-card">
            <div class="selection-list">
              ${
                contacts.length
                  ? contacts
                      .map(
                        (human) => `
                    <button class="selection-row" data-action="open-direct-chat" data-human-id="${human.id}">
                      <div class="selection-main">
                        <div class="avatar human small">${escapeHtml(human.avatar)}</div>
                        <div>
                          <div class="detail-item-title">${escapeHtml(human.name)}</div>
                          <div class="detail-item-copy">${escapeHtml(human.handle)}</div>
                        </div>
                      </div>
                      <span class="selection-toggle">${escapeHtml(copy("聊天", "Chat", "Chat"))}</span>
                    </button>
                  `
                      )
                      .join("")
                  : `<div class="detail-item-copy">${escapeHtml(
                      copy("还没有联系人。", "No contacts yet.", "Noch keine Kontakte.")
                    )}</div>`
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderCreateGroupSheet() {
  const form = state.forms.createGroup;
  const humanContacts = getHumanContacts();

  return `
    <div class="sheet-overlay">
      <button class="sheet-backdrop" data-action="close-sheet" aria-label="close"></button>
      <div class="sheet-panel">
        <div class="sheet-handle"></div>
        <div class="sheet-title">${t("actions.createGroup")}</div>
        <div class="sheet-list">
          <div class="sheet-card">
            <label class="field">
              <span class="field-label">${copy("群聊名称", "Group Name", "Gruppenname")}</span>
              <input class="text-input" type="text" placeholder="${escapeAttribute(
                copy("例如 Berlin Creator Dinner", "e.g. Berlin Creator Dinner", "z. B. Berlin Creator Dinner")
              )}" data-form="createGroup" data-field="name" value="${escapeAttribute(
                form.name
              )}" />
            </label>
          </div>
          <div class="sheet-card">
            <div class="detail-item-title">${t("common.human")}</div>
            <div class="selection-list">
              ${
                humanContacts.length
                  ? humanContacts
                      .map(
                        (human) => `
                    <button class="selection-row ${
                      form.selectedHumanIds.includes(human.id) ? "selected" : ""
                    }" data-action="toggle-create-group-human" data-human-id="${human.id}">
                      <div class="selection-main">
                        <div class="avatar human small">${escapeHtml(
                          human.avatar
                        )}</div>
                        <div>
                          <div class="detail-item-title">${escapeHtml(human.name)}</div>
                          <div class="detail-item-copy">${escapeHtml(human.handle)}</div>
                        </div>
                      </div>
                      <span class="selection-toggle">${
                        form.selectedHumanIds.includes(human.id)
                          ? copy("已选", "Selected", "Ausgewählt")
                          : t("common.add")
                      }</span>
                    </button>
                  `
                      )
                      .join("")
                  : `<div class="detail-item-copy">—</div>`
              }
            </div>
          </div>
          <div class="sheet-card">
            <div class="detail-item-title">${t("common.bot")}</div>
            <div class="selection-list">
              ${state.bots
                .map(
                  (bot) => `
                <button class="selection-row ${
                  form.selectedBotIds.includes(bot.id) ? "selected" : ""
                }" data-action="toggle-create-group-bot" data-bot-id="${bot.id}">
                  <div class="selection-main">
                    <div class="avatar agent small">${escapeHtml(bot.avatar)}</div>
                      <div>
                        <div class="detail-item-title">${escapeHtml(bot.name)}</div>
                        <div class="detail-item-copy">${escapeHtml(
                          `${formatBotSourceLabel(bot)} · ${formatRuntimeStatus(
                            bot.runtimeConfig.status
                          )}`
                        )}</div>
                      </div>
                  </div>
                  <span class="selection-toggle">${
                    form.selectedBotIds.includes(bot.id)
                      ? copy("已选", "Selected", "Ausgewählt")
                      : t("common.add")
                  }</span>
                </button>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
        <div class="sheet-footer dual-actions">
          <button class="pill-button secondary" data-action="close-sheet">${t("common.cancel")}</button>
          <button class="pill-button" data-action="submit-create-group">${t("common.create")}</button>
        </div>
      </div>
    </div>
  `;
}

function renderManageConversationSheet() {
  const conversation = getConversation(state.selectedConversationId);
  if (!conversation) return "";

  const availableHumans = getHumanContacts();
  const isGroup = conversation.type === "group";

  return `
    <div class="sheet-overlay">
      <button class="sheet-backdrop" data-action="close-sheet" aria-label="close"></button>
      <div class="sheet-panel">
        <div class="sheet-handle"></div>
        <div class="sheet-title">${t("common.manage")}</div>
        <div class="sheet-list">
          <div class="sheet-card">
            <div class="detail-item-title">${t("pages.chats")}</div>
            <div class="detail-item-copy">${escapeHtml(
              conversation.title
            )} · ${formatMemberCount("human", conversation.humanIds.length)} · ${formatMemberCount(
    "bot",
    conversation.botPresence.length
  )}</div>
          </div>
          <div class="sheet-card">
            <div class="detail-item-title">${t("common.human")}</div>
            ${
              isGroup
                ? `
                  <div class="selection-list">
                    ${availableHumans
                      .map((human) => {
                        const inConversation = conversation.humanIds.includes(human.id);
                        return `
                          <button class="selection-row ${
                            inConversation ? "selected" : ""
                          }" data-action="toggle-conversation-human" data-human-id="${human.id}">
                            <div class="selection-main">
                              <div class="avatar human small">${escapeHtml(
                                human.avatar
                              )}</div>
                              <div>
                                <div class="detail-item-title">${escapeHtml(
                                  human.name
                                )}</div>
                                <div class="detail-item-copy">${escapeHtml(
                                  human.handle
                                )}</div>
                              </div>
                            </div>
                            <span class="selection-toggle">${
                              inConversation ? t("common.remove") : t("common.invite")
                            }</span>
                          </button>
                        `;
                      })
                      .join("")}
                  </div>
                `
                : `<div class="detail-item-copy">${copy(
                    "私聊成员固定。",
                    "Direct chat members are fixed.",
                    "Direktchat-Mitglieder sind fest."
                  )}</div>`
            }
          </div>
          <div class="sheet-card">
            <div class="detail-item-title">${t("common.bot")}</div>
            <div class="selection-list">
              ${state.bots
                .map((bot) => {
                  const presence = conversation.botPresence.find(
                    (item) => item.botId === bot.id
                  );
                  return `
                    <div class="selection-row ${presence ? "selected" : ""}">
                      <div class="selection-main">
                        <div class="avatar agent small">${escapeHtml(bot.avatar)}</div>
                        <div>
                          <div class="detail-item-title">${escapeHtml(bot.name)}</div>
                          <div class="detail-item-copy">${escapeHtml(
                            `${formatBotSourceLabel(bot)} · ${formatRuntimeStatus(
                              bot.runtimeConfig.status
                            )}`
                          )}</div>
                        </div>
                      </div>
                      <button class="selection-toggle action-pill" data-action="${
                        presence ? "remove-conversation-bot" : "add-conversation-bot"
                      }" data-bot-id="${bot.id}">${
                    presence ? t("common.remove") : t("common.invite")
                  }</button>
                    </div>
                    ${
                      presence
                        ? `<div class="mode-selector inline-mode-list">
                            ${renderBotModePill(bot.id, presence.mode, "mention")}
                            ${renderBotModePill(bot.id, presence.mode, "all")}
                            ${renderBotModePill(bot.id, presence.mode, "smart")}
                          </div>`
                        : ""
                    }
                  `;
                })
                .join("")}
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderBotModePill(botId, currentMode, mode) {
  return `<button class="mode-pill ${
    currentMode === mode ? "active" : ""
  }" data-action="set-conversation-bot-mode" data-bot-id="${botId}" data-mode="${mode}">${formatMode(mode)}</button>`;
}

function renderAddMenuSheet() {
  return `
    <div class="sheet-overlay">
      <button class="sheet-backdrop" data-action="close-sheet" aria-label="close"></button>
      <div class="sheet-panel">
        <div class="sheet-handle"></div>
        <div class="sheet-title">${t("common.add")}</div>
        <div class="sheet-list">
          <button class="list-button sheet-card" data-action="open-sheet" data-sheet="add-human">
            <div class="sheet-card-head">
              <div>
                <div class="contact-name">${t("common.human")}</div>
              </div>
              <span class="status-pill">${copy("账号", "Account", "Account")}</span>
            </div>
          </button>
          <button class="list-button sheet-card" data-action="open-sheet" data-sheet="bot-menu">
            <div class="sheet-card-head">
              <div>
                <div class="contact-name">${t("common.bot")}</div>
              </div>
              <span class="status-pill">${t("labels.runtime")}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderAddHumanSheet() {
  const form = state.forms.addHuman;
  const results = getAccountSearchResults(form.query).filter(
    (human) => getHumanRelationshipStatus(human.id) === "available"
  );
  const incomingRequests = getIncomingHumanRequests();
  const outgoingRequests = getOutgoingHumanRequests();

  return `
    <div class="sheet-overlay">
      <button class="sheet-backdrop" data-action="close-sheet" aria-label="close"></button>
      <div class="sheet-panel">
        <div class="sheet-handle"></div>
        <div class="sheet-title">${t("common.human")}</div>
        <div class="sheet-list">
          <div class="sheet-card">
            <label class="field">
              <span class="field-label">${t("common.account")}</span>
              <input class="text-input" type="text" placeholder="@sora / Sora" data-form="addHuman" data-field="query" value="${escapeAttribute(
                form.query
              )}" />
            </label>
          </div>
          ${
            incomingRequests.length || outgoingRequests.length
              ? `<div class="sheet-card">
                  <div class="detail-item-title">${t("labels.recentRequests")}</div>
                  <div class="selection-list">
                    ${incomingRequests
                      .map(
                        (human) => `
                      <div class="selection-row">
                        <div class="selection-main">
                          <div class="avatar human small">${escapeHtml(human.avatar)}</div>
                          <div>
                            <div class="detail-item-title">${escapeHtml(human.name)}</div>
                            <div class="detail-item-copy">${escapeHtml(
                              human.handle
                            )} ${copy("向你发送了好友请求", "sent you a request", "hat dir eine Anfrage gesendet")}</div>
                          </div>
                        </div>
                        <div class="action-group">
                          <button class="selection-toggle action-pill" data-action="accept-human-request" data-human-id="${human.id}">${t(
                            "common.accept"
                          )}</button>
                          <button class="selection-toggle action-pill" data-action="decline-human-request" data-human-id="${human.id}">${t(
                            "common.ignore"
                          )}</button>
                        </div>
                      </div>
                    `
                      )
                      .join("")}
                    ${outgoingRequests
                      .map(
                        (human) => `
                      <div class="selection-row">
                        <div class="selection-main">
                          <div class="avatar human small">${escapeHtml(human.avatar)}</div>
                          <div>
                            <div class="detail-item-title">${escapeHtml(human.name)}</div>
                            <div class="detail-item-copy">${copy("已向", "Sent to", "Gesendet an")} ${escapeHtml(
                              human.handle
                            )} ${copy("，等待确认", " · waiting", " · wartet")}</div>
                          </div>
                        </div>
                        <div class="action-group">
                          <span class="status-pill warning">${copy("等待中", "Pending", "Wartet")}</span>
                          <button class="selection-toggle action-pill" data-action="cancel-human-request" data-human-id="${human.id}">${t(
                            "common.remove"
                          )}</button>
                        </div>
                      </div>
                    `
                      )
                      .join("")}
                  </div>
                </div>`
              : ""
          }
          <div class="sheet-card">
            <div class="detail-item-title">${t("common.account")}</div>
            <div class="selection-list">
              ${
                results.length
                  ? results
                      .map(
                        (human) => `
                    <div class="selection-row">
                      <div class="selection-main">
                        <div class="avatar human small">${escapeHtml(human.avatar)}</div>
                        <div>
                          <div class="detail-item-title">${escapeHtml(human.name)}</div>
                          <div class="detail-item-copy">${escapeHtml(
                            human.handle
                          )} · ${escapeHtml(human.bio)} · ${escapeHtml(
                            formatRelationshipStatus(getHumanRelationshipStatus(human.id))
                          )}</div>
                        </div>
                      </div>
                      ${renderHumanSearchAction(human)}
                    </div>
                  `
                      )
                      .join("")
                  : `<div class="detail-item-copy">${copy(
                      "没有匹配结果。",
                      "No matches.",
                      "Keine Treffer."
                    )}</div>`
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
}

function renderBotMenuSheet() {
  return `
    <div class="sheet-overlay">
      <button class="sheet-backdrop" data-action="close-sheet" aria-label="close"></button>
      <div class="sheet-panel">
        <div class="sheet-handle"></div>
        <div class="sheet-title">${copy("新增 Agent", "Add Agent", "Agent hinzufügen")}</div>
        <div class="sheet-list">
          <button class="list-button sheet-card" data-action="open-sheet" data-sheet="import-bot-picker">
            <div class="sheet-card-head">
              <div>
                <div class="contact-name">${t("actions.configureExistingBot")}</div>
              </div>
              <span class="status-pill">${copy("已有", "Existing", "Vorhanden")}</span>
            </div>
          </button>
          <button class="list-button sheet-card" data-action="open-sheet" data-sheet="create-managed-bot">
            <div class="sheet-card-head">
              <div>
                <div class="contact-name">${t("actions.createNewBot")}</div>
              </div>
              <span class="status-pill success">${copy("托管", "Managed", "Managed")}</span>
            </div>
          </button>
        </div>
      </div>
    </div>
  `;
}

function renderImportBotPickerSheet() {
  return `
    <div class="sheet-overlay">
      <button class="sheet-backdrop" data-action="close-sheet" aria-label="close"></button>
      <div class="sheet-panel">
        <div class="sheet-handle"></div>
        <div class="sheet-title">${t("actions.configureExistingBot")}</div>
        <div class="sheet-list">
          ${state.botTemplates
            .map(
              (template) => `
            <button class="list-button sheet-card" data-action="select-import-template" data-template-id="${template.id}">
              <div class="sheet-card-head">
                <div>
                  <div class="contact-name">${escapeHtml(template.name)}</div>
                </div>
                <span class="status-pill">${escapeHtml(formatSourceTypeLabel(template.sourceType))}</span>
              </div>
              <div class="badge-row">
                ${template.badges
                  .map((badge) => `<span class="badge">${escapeHtml(badge)}</span>`)
                  .join("")}
              </div>
            </button>
          `
            )
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderImportBotConfigSheet() {
  const template = getSelectedTemplate();
  if (!template) return "";
  const form = state.forms.importBot;
  const isEditing = Boolean(form.editBotId);
  const check = form.connectionCheck;

  return `
    <div class="sheet-overlay">
      <button class="sheet-backdrop" data-action="close-sheet" aria-label="close"></button>
      <div class="sheet-panel">
        <div class="sheet-handle"></div>
        <div class="sheet-title">${isEditing ? t("actions.editIntegration") : t("actions.configureExistingBot")}</div>
        <div class="sheet-list">
          <div class="sheet-card">
            <div class="detail-item-title">${escapeHtml(template.name)}</div>
            <div class="badge-row">
              ${template.capabilities
                .map(
                  (capability) =>
                    `<span class="badge agent">${escapeHtml(formatCapabilityLabel(capability))}</span>`
                )
                .join("")}
            </div>
          </div>
          <div class="sheet-card">
            <label class="field">
              <span class="field-label">${copy("显示名称", "Display Name", "Anzeigename")}</span>
              <input class="text-input" type="text" placeholder="${escapeAttribute(
                template.name
              )}" data-form="importBot" data-field="displayName" value="${escapeAttribute(
    form.displayName
  )}" />
            </label>
            ${template.fieldDefs
              .map(
                (field) => `
              <label class="field">
                <span class="field-label">${escapeHtml(field.label)}</span>
                <input class="text-input" type="${
                  field.secret ? "password" : "text"
                }" placeholder="${escapeAttribute(
                  field.placeholder
                )}" data-form="importBotField" data-field="${field.key}" value="${escapeAttribute(
                  form.values[field.key] || ""
                )}" />
              </label>
            `
              )
              .join("")}
          </div>
          <div class="sheet-card">
            <div class="detail-row">
              <div class="detail-item-title">${t("actions.testConnection")}</div>
              <span class="status-pill ${statusClassName(
                check?.status || "idle"
              )}">${escapeHtml(formatRuntimeStatus(check?.status || "idle"))}</span>
            </div>
            <div class="detail-item-copy">${escapeHtml(
              check?.message || copy("等待测试。", "Waiting for a check.", "Warten auf Prüfung.")
            )}</div>
            ${
              check?.capabilities?.length
                ? `<div class="badge-row">${check.capabilities
                    .map((capability) => `<span class="badge agent">${escapeHtml(formatCapabilityLabel(capability))}</span>`)
                    .join("")}</div>`
                : ""
            }
            ${
              check?.lastCheckedAt
                ? `<div class="detail-item-copy">${t("labels.latestCheck")}：${escapeHtml(localizeRelativeLabel(check.lastCheckedAt))}${
                    check.latency ? ` · ${escapeHtml(check.latency)}` : ""
                  }</div>`
                : ""
            }
          </div>
        </div>
        <div class="sheet-footer triple-actions">
          <button class="pill-button secondary" data-action="${
            isEditing ? "close-sheet" : "open-sheet"
          }" data-sheet="import-bot-picker">${isEditing ? t("common.cancel") : t("common.back")}</button>
          <button class="pill-button secondary" data-action="test-import-bot">${
            check?.status === "testing"
              ? copy("测试中…", "Testing…", "Prüfe…")
              : t("actions.testConnection")
          }</button>
          <button class="pill-button" data-action="submit-import-bot">${isEditing ? t("actions.saveChanges") : t("actions.saveIntegration")}</button>
        </div>
      </div>
    </div>
  `;
}

function renderCreateManagedBotSheet() {
  const form = state.forms.createManagedBot;
  const currentPrice = state.billing.managedBotPrices[form.packageTier];
  const defaultMethod = getDefaultPaymentMethod();

  return `
    <div class="sheet-overlay">
      <button class="sheet-backdrop" data-action="close-sheet" aria-label="close"></button>
      <div class="sheet-panel">
        <div class="sheet-handle"></div>
        <div class="sheet-title">${t("actions.createNewBot")}</div>
        <div class="sheet-list">
          <div class="sheet-card">
            <label class="field">
              <span class="field-label">${copy("Agent 名称", "Agent Name", "Agent-Name")}</span>
              <input class="text-input" type="text" placeholder="${escapeAttribute(
                copy("例如 Nova", "e.g. Nova", "z. B. Nova")
              )}" data-form="createManagedBot" data-field="name" value="${escapeAttribute(
                form.name
              )}" />
            </label>
            <label class="field">
              <span class="field-label">${copy("简介", "Summary", "Kurzbeschreibung")}</span>
              <textarea class="text-area" rows="2" placeholder="${escapeAttribute(
                copy("例如 负责活动协调", "e.g. event coordination", "z. B. Event-Koordination")
              )}" data-form="createManagedBot" data-field="summary">${escapeHtml(
                form.summary
              )}</textarea>
            </label>
            <label class="field">
              <span class="field-label">${t("labels.identity")}</span>
              <textarea class="text-area" rows="4" placeholder="${escapeAttribute(
                copy("描述语气、边界和职责", "Describe tone, scope, and rules", "Ton, Rahmen und Regeln beschreiben")
              )}" data-form="createManagedBot" data-field="identity">${escapeHtml(
                form.identity
              )}</textarea>
            </label>
          </div>
          <div class="sheet-card">
            <div class="detail-item-title">${t("labels.package")}</div>
            <div class="pricing-grid">
              <button class="plan-card ${
                form.packageTier === "starter" ? "selected" : ""
              }" data-action="set-managed-package-tier" data-tier="starter">
                <div class="detail-item-title">Starter</div>
                <div class="detail-item-copy">${escapeHtml(
                  state.billing.managedBotPrices.starter
                )}</div>
                <div class="detail-item-copy">${copy("轻量会话 · 20 files", "Light sessions · 20 files", "Leichte Chats · 20 Dateien")}</div>
              </button>
              <button class="plan-card ${
                form.packageTier === "pro" ? "selected" : ""
              }" data-action="set-managed-package-tier" data-tier="pro">
                <div class="detail-item-title">Pro</div>
                <div class="detail-item-copy">${escapeHtml(
                  state.billing.managedBotPrices.pro
                )}</div>
                <div class="detail-item-copy">${copy("更长记忆 · 80 files", "Longer memory · 80 files", "Längere Memory · 80 Dateien")}</div>
              </button>
            </div>
            <div class="detail-item-copy">${escapeHtml(
              defaultMethod?.label || copy("未设置", "Not set", "Nicht festgelegt")
            )} · ${escapeHtml(formatPaymentStatus(defaultMethod?.status || "missing"))}</div>
          </div>
        </div>
        <div class="sheet-footer dual-actions">
          <button class="pill-button secondary" data-action="close-sheet">${t("common.cancel")}</button>
          <button class="pill-button" data-action="submit-create-managed-bot">${t("actions.confirmPayment")} · ${escapeHtml(
            currentPrice
          )}</button>
        </div>
      </div>
    </div>
  `;
}

function renderConfirmManagedBotSheet() {
  const form = state.forms.createManagedBot;
  const defaultMethod = getDefaultPaymentMethod();
  const price = state.billing.managedBotPrices[form.packageTier];
  const methodReady = defaultMethod?.status === "ready";

  return `
    <div class="sheet-overlay">
      <button class="sheet-backdrop" data-action="close-sheet" aria-label="close"></button>
      <div class="sheet-panel">
        <div class="sheet-handle"></div>
        <div class="sheet-title">${t("actions.confirmPayment")}</div>
        <div class="sheet-list">
          <div class="sheet-card">
            <div class="detail-grid">
              <div class="detail-item">
                <div class="detail-item-title">${copy("Agent", "Agent", "Agent")}</div>
                <div class="detail-item-copy">${escapeHtml(form.name.trim() || copy("未命名 Agent", "Untitled Agent", "Unbenannter Agent"))}</div>
              </div>
              <div class="detail-item">
                <div class="detail-item-title">${t("labels.package")}</div>
                <div class="detail-item-copy">${escapeHtml(capitalize(form.packageTier))} · ${escapeHtml(price)}</div>
              </div>
              <div class="detail-item">
                <div class="detail-item-title">${t("common.paymentMethod")}</div>
                <div class="detail-item-copy">${escapeHtml(
                  defaultMethod?.label || copy("未设置付款方式", "No payment method", "Keine Zahlungsmethode")
                )} · ${escapeHtml(formatPaymentStatus(defaultMethod?.status || "missing"))}</div>
              </div>
            </div>
          </div>
          <div class="sheet-card">
            <div class="detail-row">
              <div class="detail-item-title">${copy("支付状态", "Payment Status", "Zahlungsstatus")}</div>
              <span class="status-pill ${statusClassName(
                methodReady ? "ready" : defaultMethod?.status || "missing"
              )}">${escapeHtml(formatPaymentStatus(methodReady ? "ready" : defaultMethod?.status || "missing"))}</span>
            </div>
            <div class="detail-item-copy">${
              methodReady
                ? copy("付款方式可用。", "Payment method is ready.", "Zahlungsmethode ist bereit.")
                : copy("当前默认付款方式不可用。", "Default payment method is unavailable.", "Die Standardzahlungsmethode ist nicht verfügbar.")
            }</div>
          </div>
        </div>
        <div class="sheet-footer dual-actions">
          <button class="pill-button secondary" data-action="open-sheet" data-sheet="create-managed-bot">${t("common.back")}</button>
          <button class="pill-button" data-action="${
            methodReady ? "confirm-managed-bot-purchase" : "open-sheet"
          }" data-sheet="payment-methods">${
            methodReady
              ? form.processing
                ? copy("支付中…", "Paying…", "Zahlung läuft…")
                : `${t("actions.confirmPayment")} · ${escapeHtml(price)}`
              : t("actions.managePayment")
          }</button>
        </div>
      </div>
    </div>
  `;
}

function renderPaymentMethodsSheet() {
  const paymentMethods = state.billing.paymentMethods;

  return `
    <div class="sheet-overlay">
      <button class="sheet-backdrop" data-action="close-sheet" aria-label="close"></button>
      <div class="sheet-panel">
        <div class="sheet-handle"></div>
        <div class="sheet-title">${t("common.paymentMethod")}</div>
        <div class="sheet-list">
          <div class="sheet-card">
            <div class="selection-list">
              ${paymentMethods
                .map(
                  (method) => `
                <div class="selection-row">
                  <div class="selection-main">
                    <div>
                      <div class="detail-item-title">${escapeHtml(method.label)}</div>
                      <div class="detail-item-copy">${escapeHtml(
                        formatPaymentStatus(method.status)
                      )}${method.isDefault ? ` · ${copy("默认", "Default", "Standard")}` : ""}</div>
                    </div>
                  </div>
                  <div class="action-group">
                    ${
                      !method.isDefault && method.status === "ready"
                        ? `<button class="selection-toggle action-pill" data-action="set-default-payment-method" data-payment-method-id="${method.id}">${t("actions.setDefault")}</button>`
                        : ""
                    }
                    ${
                      paymentMethods.length > 1
                        ? `<button class="selection-toggle action-pill" data-action="remove-payment-method" data-payment-method-id="${method.id}">${t("common.delete")}</button>`
                        : ""
                    }
                  </div>
                </div>
              `
                )
                .join("")}
            </div>
            <div class="inline-actions">
              <button class="inline-button" data-action="add-payment-method">${t("actions.addCard")}</button>
            </div>
          </div>
          <div class="sheet-card">
            <div class="detail-item-title">${t("common.recentInvoice")}</div>
            <div class="selection-list">
              ${state.billing.invoices
                .slice(0, 3)
                .map(
                  (invoice) => `
                <div class="selection-row">
                  <div class="selection-main">
                    <div>
                      <div class="detail-item-title">${escapeHtml(invoice.title)}</div>
                      <div class="detail-item-copy">${escapeHtml(invoice.date)} · ${escapeHtml(
                    invoice.amount
                  )}</div>
                    </div>
                  </div>
                  <span class="status-pill ${statusClassName(invoice.status)}">${escapeHtml(
                    formatInvoiceStatus(invoice.status)
                  )}</span>
                </div>
              `
                )
                .join("")}
            </div>
          </div>
        </div>
        <div class="sheet-footer">
          <button class="pill-button" data-action="close-sheet">${t("common.done")}</button>
        </div>
      </div>
    </div>
  `;
}

function renderManageManagedBotSheet() {
  const form = state.forms.manageManagedBot;
  const bot = getBot(form.botId);
  if (!bot) return "";

  return `
    <div class="sheet-overlay">
      <button class="sheet-backdrop" data-action="close-sheet" aria-label="close"></button>
      <div class="sheet-panel">
        <div class="sheet-handle"></div>
        <div class="sheet-title">${t("actions.manageSubscription")}</div>
        <div class="sheet-list">
          <div class="sheet-card">
            <div class="detail-item-title">${copy("当前状态", "Current Status", "Aktueller Status")}</div>
            <div class="detail-item-copy">${escapeHtml(
              formatManagedSubscription(bot)
            )}</div>
          </div>
          <div class="sheet-card">
            <div class="detail-item-title">${t("labels.package")}</div>
            <div class="pricing-grid">
              ${["starter", "pro"]
                .map(
                  (tier) => `
                <button class="plan-card ${
                  form.packageTier === tier ? "selected" : ""
                }" data-action="set-manage-bot-tier" data-tier="${tier}">
                  <div class="detail-item-title">${escapeHtml(capitalize(tier))}</div>
                  <div class="detail-item-copy">${escapeHtml(
                    state.billing.managedBotPrices[tier]
                  )}</div>
                </button>
              `
                )
                .join("")}
            </div>
          </div>
          <div class="sheet-card">
            <div class="settings-row">
              <div>
                <div class="detail-item-title">${copy("自动续费", "Auto Renew", "Automatische Verlängerung")}</div>
                <div class="detail-item-copy">${copy(
                  "关闭后会在当前周期结束后停用。",
                  "Turns off at the end of the current billing cycle.",
                  "Wird am Ende des aktuellen Abrechnungszeitraums deaktiviert."
                )}</div>
              </div>
              <button class="toggle ${
                form.renewalEnabled ? "active" : ""
              }" data-action="toggle-manage-bot-renewal">
                <span class="toggle-thumb"></span>
              </button>
            </div>
          </div>
        </div>
        <div class="sheet-footer dual-actions">
          <button class="pill-button secondary" data-action="close-sheet">${t("common.cancel")}</button>
          <button class="pill-button" data-action="save-managed-bot-settings" data-bot-id="${bot.id}">${t("actions.saveChanges")}</button>
        </div>
      </div>
    </div>
  `;
}

function renderUpgradePlanSheet() {
  const currentPlan = getCurrentPlan();

  return `
    <div class="sheet-overlay">
      <button class="sheet-backdrop" data-action="close-sheet" aria-label="close"></button>
      <div class="sheet-panel">
        <div class="sheet-handle"></div>
        <div class="sheet-title">${copy("升级计划", "Upgrade Plan", "Plan upgraden")}</div>
        <div class="sheet-list">
          ${Object.entries(PLAN_CATALOG)
            .map(([planCode, plan]) => {
              const isCurrent = state.billing.planCode === planCode;
              return `
                <div class="sheet-card">
                  <div class="detail-row">
                    <div>
                      <div class="detail-item-title">${escapeHtml(plan.name)}</div>
                      <div class="detail-item-copy">${escapeHtml(plan.monthlyPrice)} / ${escapeHtml(
                        copy("月", "month", "Monat")
                      )}</div>
                    </div>
                    <span class="status-pill ${isCurrent ? "success" : ""}">${escapeHtml(
                      isCurrent ? copy("当前", "Current", "Aktuell") : copy("可升级", "Available", "Verfügbar")
                    )}</span>
                  </div>
                  <div class="badge-row">
                    <span class="badge human">${escapeHtml(
                      copy(
                        `${plan.managedBotLimit} 个托管 Agent`,
                        `${plan.managedBotLimit} managed agents`,
                        `${plan.managedBotLimit} Managed Agents`
                      )
                    )}</span>
                    <span class="badge">${escapeHtml(
                      planCode === "basic"
                        ? copy("个人试用", "Personal", "Persönlich")
                        : planCode === "creator"
                        ? copy("创作者", "Creator", "Creator")
                        : copy("团队", "Team", "Team")
                    )}</span>
                  </div>
                  <div class="inline-actions">
                    ${
                      isCurrent
                        ? `<button class="inline-button" data-action="close-sheet">${t("common.done")}</button>`
                        : `<button class="inline-button" data-action="upgrade-plan" data-plan-code="${planCode}">${copy(
                            "切换到这个计划",
                            "Choose this plan",
                            "Diesen Plan wählen"
                          )}</button>`
                    }
                  </div>
                </div>
              `;
            })
            .join("")}
        </div>
      </div>
    </div>
  `;
}

function renderPendingRequestsSection() {
  const incomingRequests = getIncomingHumanRequests();
  const outgoingRequests = getOutgoingHumanRequests();
  if (!incomingRequests.length && !outgoingRequests.length) return "";

  return `
    <div class="detail-card compact">
      <h3>${t("labels.recentRequests")}</h3>
      <div class="selection-list">
        ${incomingRequests
          .map(
            (human) => `
          <div class="selection-row">
            <div class="selection-main">
              <div class="avatar human small">${escapeHtml(human.avatar)}</div>
              <div>
                <div class="detail-item-title">${escapeHtml(human.name)}</div>
                <div class="detail-item-copy">${escapeHtml(human.handle)} ${copy("请求加你为好友", "wants to connect", "möchte sich verbinden")}</div>
              </div>
            </div>
            <div class="action-group">
              <button class="selection-toggle action-pill" data-action="accept-human-request" data-human-id="${human.id}">${t("common.accept")}</button>
              <button class="selection-toggle action-pill" data-action="decline-human-request" data-human-id="${human.id}">${t("common.ignore")}</button>
            </div>
          </div>
        `
          )
          .join("")}
        ${outgoingRequests
          .map(
            (human) => `
          <div class="selection-row">
            <div class="selection-main">
              <div class="avatar human small">${escapeHtml(human.avatar)}</div>
              <div>
                <div class="detail-item-title">${escapeHtml(human.name)}</div>
                <div class="detail-item-copy">${copy("等待", "Waiting for", "Wartet auf")} ${escapeHtml(human.handle)} ${copy("确认", "approval", "Bestätigung")}</div>
              </div>
            </div>
            <div class="action-group">
              <span class="status-pill warning">${copy("等待中", "Pending", "Wartet")}</span>
              <button class="selection-toggle action-pill" data-action="cancel-human-request" data-human-id="${human.id}">${copy("撤回", "Cancel", "Zurückziehen")}</button>
            </div>
          </div>
        `
          )
          .join("")}
      </div>
    </div>
  `;
}

function renderHumanSearchAction(human) {
  const status = getHumanRelationshipStatus(human.id);
  if (status === "incoming") {
    return `
      <div class="action-group">
        <button class="selection-toggle action-pill" data-action="accept-human-request" data-human-id="${human.id}">${t("common.accept")}</button>
        <button class="selection-toggle action-pill" data-action="decline-human-request" data-human-id="${human.id}">${t("common.ignore")}</button>
      </div>
    `;
  }

  if (status === "outgoing") {
    return `
      <div class="action-group">
        <span class="status-pill warning">${copy("已请求", "Requested", "Angefragt")}</span>
        <button class="selection-toggle action-pill" data-action="cancel-human-request" data-human-id="${human.id}">${copy("撤回", "Cancel", "Zurückziehen")}</button>
      </div>
    `;
  }

  return `<button class="selection-toggle action-pill" data-action="add-human-contact" data-human-id="${human.id}">${
    human.friendPolicy === "auto_accept" ? t("common.add") : t("common.request")
  }</button>`;
}

function renderTabBar() {
  const items = [
    ["chats", renderTabIcon("chat"), t("tabs.chats")],
    ["contacts", renderTabIcon("contacts"), t("tabs.contacts")],
    ["settings", renderTabIcon("me"), t("tabs.settings")],
  ];

  return `
    <div class="tab-bar">
      ${items
        .map(
          ([id, icon, label]) => `
            <button class="tab-item ${state.activeTab === id ? "active" : ""}" data-action="switch-tab" data-tab="${id}">
              <div class="tab-icon">${icon}</div>
              <div>${label}</div>
            </button>
          `
        )
        .join("")}
    </div>
  `;
}

function renderUiIcon(type) {
  const icons = {
    search: `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="10.5" cy="10.5" r="5.5" fill="none" stroke="currentColor" stroke-width="2"/><path d="m15 15 4 4" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    "plus-circle": `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="12" r="8" fill="none" stroke="currentColor" stroke-width="2"/><path d="M12 8v8M8 12h8" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    plus: `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 5v14M5 12h14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    "chevron-left": `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m14.5 6-6 6 6 6" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    "arrow-up": `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 19V6M7 11l5-5 5 5" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    pin: `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 17v5M6 17h12M9 3h6l1 7 3 3v4H5v-4l3-3Z" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    "bell-off": `<svg class="ui-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="m4 4 16 16M9 20h6M7 16h10M8 12V9a4 4 0 0 1 6.4-3.2M16 9v2" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
  };
  return icons[type] || "";
}

function renderTabIcon(type) {
  if (type === "chat") {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 6.5a3.5 3.5 0 0 1 3.5-3.5h7A3.5 3.5 0 0 1 19 6.5v5A3.5 3.5 0 0 1 15.5 15H10l-3.4 2.7a.8.8 0 0 1-1.3-.63V15.6A3.48 3.48 0 0 1 5 11.5z" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linejoin="round"/></svg>`;
  }
  if (type === "contacts") {
    return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a3 3 0 1 0-3-3 3 3 0 0 0 3 3Zm-5.5 6a5.5 5.5 0 0 1 11 0" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/><path d="M18 8h3m-1.5-1.5v3" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`;
  }
  return `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 12a3.2 3.2 0 1 0-3.2-3.2A3.2 3.2 0 0 0 12 12Zm-5.8 7a5.8 5.8 0 0 1 11.6 0" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round"/></svg>`;
}

function renderToasts() {
  if (!state.toasts.length) return "";
  return `
    <div class="toast-stack">
      ${state.toasts
        .map(
          (toast) => `
            <div class="toast">
              <span>${escapeHtml(toast.icon)}</span>
              <span>${escapeHtml(toast.message)}</span>
            </div>
          `
        )
        .join("")}
    </div>
  `;
}

function openChatListActions(conversationId) {
  update((draft) => {
    draft.sheet = { type: "chat-list-actions", conversationId };
  });
}

function handleContextMenu(event) {
  const row = event.target.closest('[data-conversation-row="true"]');
  if (!row) return;
  event.preventDefault();
  suppressConversationOpen = true;
  openChatListActions(row.dataset.conversationId);
  setTimeout(() => {
    suppressConversationOpen = false;
  }, 450);
}

function handlePointerDown(event) {
  const row = event.target.closest('[data-conversation-row="true"]');
  if (!row || event.pointerType === "mouse") return;
  clearLongPress();
  longPressTimer = window.setTimeout(() => {
    suppressConversationOpen = true;
    openChatListActions(row.dataset.conversationId);
    setTimeout(() => {
      suppressConversationOpen = false;
    }, 450);
    clearLongPress();
  }, 420);
}

function clearLongPress() {
  if (!longPressTimer) return;
  clearTimeout(longPressTimer);
  longPressTimer = null;
}

function handleClick(event) {
  const target = event.target.closest("[data-action]");
  if (!target) return;

  const action = target.dataset.action;

  switch (action) {
    case "advance-onboarding":
      return update((draft) => {
        draft.onboardingStep = Math.min(2, draft.onboardingStep + 1);
      });
    case "back-onboarding":
      return update((draft) => {
        draft.onboardingStep = Math.max(0, draft.onboardingStep - 1);
      });
    case "finish-onboarding":
      return update((draft) => {
        draft.appStage = "live";
      });
    case "switch-tab":
      return update((draft) => {
        draft.activeTab = target.dataset.tab;
      });
    case "back-to-chats":
      return update((draft) => {
        draft.chatView = "list";
      });
    case "open-conversation":
      if (suppressConversationOpen) {
        suppressConversationOpen = false;
        return null;
      }
      return update((draft) => {
        draft.activeTab = "chats";
        draft.chatView = "conversation";
        draft.selectedConversationId = target.dataset.conversationId;
        draft.sheet = null;
        const conversation = draft.conversations.find(
          (item) => item.id === target.dataset.conversationId
        );
        if (conversation) conversation.unread = 0;
      });
    case "open-sheet":
      return openSheet(target.dataset.sheet);
    case "open-direct-from-contacts":
      return update((draft) => {
        draft.sheet = { type: "direct-chat-picker" };
      });
    case "open-upgrade-sheet":
      return update((draft) => {
        draft.sheet = { type: "upgrade-plan", source: target.dataset.source || null };
      });
    case "open-chat-search":
      return update((draft) => {
        draft.sheet = { type: "chat-search" };
      });
    case "close-sheet":
      return update((draft) => {
        draft.sheet = null;
      });
    case "send-message":
      return sendMessage(target.dataset.conversationId);
    case "prepend-draft":
      state.composeDrafts[state.selectedConversationId] =
        (state.composeDrafts[state.selectedConversationId] || "") +
        target.dataset.text;
      persist();
      return render();
    case "set-contact-filter":
      return update((draft) => {
        draft.contactFilter = target.dataset.filter;
      });
    case "set-locale":
      return update((draft) => {
        draft.locale = target.dataset.locale;
      });
    case "open-contact":
      return update((draft) => {
        draft.activeTab = "contacts";
        draft.contactsView = "detail";
        draft.selectedContactId = target.dataset.contactId;
        draft.selectedContactType = target.dataset.contactType;
        draft.botDetailTab = "overview";
      });
    case "back-to-contacts":
      return update((draft) => {
        draft.contactsView = "list";
        draft.selectedContactId = null;
        draft.selectedContactType = null;
      });
    case "set-bot-tab":
      return update((draft) => {
        draft.botDetailTab = target.dataset.botTab;
      });
    case "toggle-setting":
      return update((draft) => {
        const key = target.dataset.settingKey;
        draft.settings[key] = !draft.settings[key];
        queueToast(
          copy(
            `${settingLabel(key)} 已${draft.settings[key] ? "开启" : "关闭"}`,
            `${settingLabel(key)} ${draft.settings[key] ? "enabled" : "disabled"}.`,
            `${settingLabel(key)} ${draft.settings[key] ? "aktiviert" : "deaktiviert"}.`
          ),
          draft.settings[key] ? "✓" : "○"
        );
      });
    case "clear-cache":
      return update((draft) => {
        draft.settings.cacheMB = 32;
        queueToast(copy("本地缓存已清理。", "Local cache cleared.", "Lokaler Cache geleert."), "✓");
      });
    case "submit-create-group":
      return submitCreateGroup();
    case "toggle-create-group-human":
      return update((draft) => {
        toggleId(draft.forms.createGroup.selectedHumanIds, target.dataset.humanId);
      });
    case "toggle-create-group-bot":
      return update((draft) => {
        toggleId(draft.forms.createGroup.selectedBotIds, target.dataset.botId);
      });
    case "toggle-conversation-human":
      return toggleConversationHuman(target.dataset.humanId);
    case "toggle-pin-conversation":
      return togglePinConversation(target.dataset.conversationId);
    case "toggle-mute-conversation":
      return toggleMuteConversation(target.dataset.conversationId);
    case "toggle-read-conversation":
      return toggleReadConversation(target.dataset.conversationId);
    case "delete-conversation":
      return deleteConversation(target.dataset.conversationId);
    case "add-conversation-bot":
      return addBotToConversation(target.dataset.botId);
    case "remove-conversation-bot":
      return removeBotFromConversation(target.dataset.botId);
    case "set-conversation-bot-mode":
      return setConversationBotMode(target.dataset.botId, target.dataset.mode);
    case "add-human-contact":
      return addHumanContact(target.dataset.humanId);
    case "accept-human-request":
      return acceptHumanRequest(target.dataset.humanId);
    case "decline-human-request":
      return declineHumanRequest(target.dataset.humanId);
    case "cancel-human-request":
      return cancelHumanRequest(target.dataset.humanId);
    case "select-import-template":
      return update((draft) => {
        draft.forms.importBot = {
          templateId: target.dataset.templateId,
          displayName: "",
          values: {},
          connectionCheck: null,
          editBotId: null,
        };
        draft.sheet = { type: "import-bot-config" };
      });
    case "test-import-bot":
      return testImportBotConnection();
    case "submit-import-bot":
      return submitImportBot();
    case "set-managed-package-tier":
      return update((draft) => {
        draft.forms.createManagedBot.packageTier = target.dataset.tier;
      });
    case "submit-create-managed-bot":
      return submitCreateManagedBot();
    case "confirm-managed-bot-purchase":
      return confirmManagedBotPurchase();
    case "set-default-payment-method":
      return setDefaultPaymentMethod(target.dataset.paymentMethodId);
    case "remove-payment-method":
      return removePaymentMethod(target.dataset.paymentMethodId);
    case "add-payment-method":
      return addPaymentMethod();
    case "upgrade-plan":
      return upgradePlan(target.dataset.planCode);
    case "open-direct-chat":
      return openOrCreateDirectChat(target.dataset.humanId);
    case "delete-human-contact":
      return deleteHumanContact(target.dataset.humanId);
    case "delete-bot":
      return deleteBot(target.dataset.botId);
    case "edit-bot-runtime":
      return openEditBotRuntime(target.dataset.botId);
    case "health-check-bot":
      return healthCheckBot(target.dataset.botId);
    case "open-manage-managed-bot":
      return openManageManagedBot(target.dataset.botId);
    case "set-manage-bot-tier":
      return update((draft) => {
        draft.forms.manageManagedBot.packageTier = target.dataset.tier;
      });
    case "toggle-manage-bot-renewal":
      return update((draft) => {
        draft.forms.manageManagedBot.renewalEnabled =
          !draft.forms.manageManagedBot.renewalEnabled;
      });
    case "save-managed-bot-settings":
      return saveManagedBotSettings(target.dataset.botId);
    case "open-solo-bot-room":
      return openSoloBotRoom(target.dataset.botId);
    case "upload-file":
      return triggerUpload(target.dataset.botId);
    case "retry-bot-file":
      return retryBotFile(target.dataset.botId, target.dataset.fileId);
    case "delete-bot-file":
      return deleteBotFile(target.dataset.botId, target.dataset.fileId);
    case "delete-bot-memory":
      return deleteBotMemory(target.dataset.botId, target.dataset.memoryId);
    case "add-bot-memory":
      return addBotMemory(target.dataset.botId);
    case "retry-bot-reply":
      return retryBotReply(
        target.dataset.conversationId,
        target.dataset.botId,
        target.dataset.input,
        target.dataset.mode
      );
    case "toast":
      return queueToast(target.dataset.message, "i");
    default:
      return null;
  }
}

function handleInput(event) {
  const target = event.target;

  if (target.dataset.role === "composer") {
    state.composeDrafts[target.dataset.conversationId] = target.value;
    persist();
    return;
  }

  if (target.dataset.search) {
    const searchKey = target.dataset.search;
    const value = target.value;
    state.search[searchKey] = value;
    persist();
    render();
    requestAnimationFrame(() => {
      const nextInput = appEl.querySelector(`[data-search="${searchKey}"]`);
      if (nextInput) {
        nextInput.focus();
        nextInput.setSelectionRange(value.length, value.length);
      }
    });
    return;
  }

  if (!target.dataset.form) return;

  const form = target.dataset.form;
  const field = target.dataset.field;

  if (form === "importBotField") {
    state.forms.importBot.values[field] = target.value;
    state.forms.importBot.connectionCheck = null;
    persist();
    return;
  }

  if (state.forms[form] && field in state.forms[form]) {
    state.forms[form][field] = target.value;
    persist();
  }
}

function handleFileSelection(event) {
  const file = event.target.files?.[0];
  if (!file || !uploadTargetBotId) return;
  handleFileUpload(file, uploadTargetBotId);
  uploadTargetBotId = null;
  hiddenFileInput.value = "";
}

function openSheet(type) {
  update((draft) => {
    if (type === "create-managed-bot" && hasReachedManagedBotLimit()) {
      draft.sheet = { type: "upgrade-plan", source: "create-managed-bot" };
      queueToast(
        copy(
          "当前计划的托管 Agent 数量已达上限。",
          "Your current plan has reached the managed agent limit.",
          "Dein aktueller Plan hat das Limit für Managed Agents erreicht."
        ),
        "!"
      );
      return;
    }
    if (type === "create-group") {
      draft.forms.createGroup = {
        name: "",
        selectedHumanIds: [],
        selectedBotIds: [],
      };
    }

    if (type === "add-human") {
      draft.forms.addHuman.query = "";
    }

    if (type === "create-managed-bot" && draft.sheet?.type !== "confirm-managed-bot") {
      draft.forms.createManagedBot = structuredClone(
        initialState.forms.createManagedBot
      );
    }

    if (type === "import-bot-picker") {
      draft.forms.importBot = structuredClone(initialState.forms.importBot);
    }

    if (type === "manage-conversation" && !draft.selectedConversationId) {
      draft.sheet = null;
      return;
    }

    draft.sheet = { type };
  });
}

function submitCreateGroup() {
  const form = state.forms.createGroup;
  const title = form.name.trim() || buildGroupTitle(form.selectedHumanIds, form.selectedBotIds);

  update((draft) => {
    const conversationId = uid("conv");
    const botPresence = form.selectedBotIds.map((botId) => ({
      botId,
      mode: getBot(botId)?.defaultMode || "mention",
    }));

    draft.conversations.unshift({
      id: conversationId,
      title,
      type: "group",
      humanIds: ["u-self", ...form.selectedHumanIds],
      botPresence,
      unread: 0,
      pinned: false,
      muted: false,
      updatedAt: Date.now(),
      lastTime: copy("刚刚", "Just now", "Gerade eben"),
      messages: [
        {
          id: uid("sys"),
          type: "system",
          text: buildGroupCreationSystemMessage(form.selectedHumanIds, form.selectedBotIds),
          time: currentTime(),
        },
      ],
    });
    draft.composeDrafts[conversationId] = "";
    draft.selectedConversationId = conversationId;
    draft.chatView = "conversation";
    draft.activeTab = "chats";
    draft.sheet = null;
    draft.forms.createGroup = structuredClone(initialState.forms.createGroup);
    incrementBotConversationCount(form.selectedBotIds, 1);
    queueToast(copy(`群聊「${title}」已创建。`, `Group "${title}" created.`, `Gruppe "${title}" erstellt.`), "✓");
  });
}

function togglePinConversation(conversationId) {
  update((draft) => {
    const conversation = draft.conversations.find((item) => item.id === conversationId);
    if (!conversation) return;
    conversation.pinned = !conversation.pinned;
    draft.sheet = null;
    queueToast(
      conversation.pinned
        ? copy("聊天已置顶。", "Chat pinned.", "Chat fixiert.")
        : copy("已取消置顶。", "Chat unpinned.", "Fixierung entfernt."),
      "✓"
    );
  });
}

function toggleMuteConversation(conversationId) {
  update((draft) => {
    const conversation = draft.conversations.find((item) => item.id === conversationId);
    if (!conversation) return;
    conversation.muted = !conversation.muted;
    draft.sheet = null;
    queueToast(
      conversation.muted
        ? copy("已开启免打扰。", "Notifications muted.", "Stummgeschaltet.")
        : copy("已恢复提醒。", "Notifications restored.", "Benachrichtigungen wieder aktiv."),
      conversation.muted ? "i" : "✓"
    );
  });
}

function toggleReadConversation(conversationId) {
  update((draft) => {
    const conversation = draft.conversations.find((item) => item.id === conversationId);
    if (!conversation) return;
    conversation.unread = conversation.unread ? 0 : 1;
    draft.sheet = null;
    queueToast(
      conversation.unread
        ? copy("已标为未读。", "Marked unread.", "Als ungelesen markiert.")
        : copy("已标为已读。", "Marked read.", "Als gelesen markiert."),
      "✓"
    );
  });
}

function deleteConversation(conversationId) {
  const conversation = getConversation(conversationId);
  if (!conversation) return;
  const confirmed = window.confirm(
    copy(
      `删除聊天「${conversation.title}」？聊天记录将从列表中移除。`,
      `Delete "${conversation.title}"? This chat will be removed from the list.`,
      `"${conversation.title}" löschen? Dieser Chat wird aus der Liste entfernt.`
    )
  );
  if (!confirmed) return;

  update((draft) => {
    const target = draft.conversations.find((item) => item.id === conversationId);
    if (!target) return;
    incrementBotConversationCount(
      target.botPresence.map((presence) => presence.botId),
      -1
    );
    draft.conversations = draft.conversations.filter((item) => item.id !== conversationId);
    delete draft.composeDrafts[conversationId];
    if (draft.selectedConversationId === conversationId) {
      draft.chatView = "list";
      draft.selectedConversationId = draft.conversations[0]?.id || null;
    }
    draft.sheet = null;
    queueToast(copy("聊天已删除。", "Chat deleted.", "Chat gelöscht."), "✓");
  });
}

function toggleConversationHuman(humanId) {
  const conversation = getConversation(state.selectedConversationId);
  if (!conversation || conversation.type !== "group") return;

  update((draft) => {
    const targetConversation = draft.conversations.find(
      (item) => item.id === state.selectedConversationId
    );
    if (!targetConversation) return;
    const exists = targetConversation.humanIds.includes(humanId);
    if (exists) {
      targetConversation.humanIds = targetConversation.humanIds.filter(
        (id) => id !== humanId
      );
      targetConversation.messages.push({
        id: uid("sys"),
        type: "system",
        text: copy(
          `${getHuman(humanId).name} 已离开会话。`,
          `${getHuman(humanId).name} left the conversation.`,
          `${getHuman(humanId).name} hat die Unterhaltung verlassen.`
        ),
        time: currentTime(),
      });
      recordConversationActivity(targetConversation);
      queueToast(copy(
        `${getHuman(humanId).name} 已从群聊移除。`,
        `${getHuman(humanId).name} removed from the group.`,
        `${getHuman(humanId).name} wurde aus der Gruppe entfernt.`
      ), "✓");
    } else {
      targetConversation.humanIds.push(humanId);
      targetConversation.messages.push({
        id: uid("sys"),
        type: "system",
        text: copy(
          `${getHuman(humanId).name} 已加入会话。`,
          `${getHuman(humanId).name} joined the conversation.`,
          `${getHuman(humanId).name} ist der Unterhaltung beigetreten.`
        ),
        time: currentTime(),
      });
      recordConversationActivity(targetConversation);
      queueToast(copy(
        `${getHuman(humanId).name} 已加入群聊。`,
        `${getHuman(humanId).name} joined the group.`,
        `${getHuman(humanId).name} ist der Gruppe beigetreten.`
      ), "✓");
    }
  });
}

function addBotToConversation(botId) {
  update((draft) => {
    const conversation = draft.conversations.find(
      (item) => item.id === draft.selectedConversationId
    );
    const bot = draft.bots.find((item) => item.id === botId);
    if (!conversation || !bot) return;
    if (conversation.botPresence.some((item) => item.botId === botId)) return;
    conversation.botPresence.push({
      botId,
      mode: bot.defaultMode,
    });
    conversation.messages.push({
      id: uid("sys"),
      type: "system",
      text: copy(
        `${bot.name} 已加入会话。`,
        `${bot.name} joined the conversation.`,
        `${bot.name} ist der Unterhaltung beigetreten.`
      ),
      time: currentTime(),
    });
    recordConversationActivity(conversation);
    bot.activeConversations += 1;
    queueToast(copy(
      `${bot.name} 已进入当前会话。`,
      `${bot.name} joined this chat.`,
      `${bot.name} ist diesem Chat beigetreten.`
    ), "✓");
  });
}

function removeBotFromConversation(botId) {
  update((draft) => {
    const conversation = draft.conversations.find(
      (item) => item.id === draft.selectedConversationId
    );
    const bot = draft.bots.find((item) => item.id === botId);
    if (!conversation || !bot) return;
    conversation.botPresence = conversation.botPresence.filter(
      (item) => item.botId !== botId
    );
    conversation.messages.push({
      id: uid("sys"),
      type: "system",
      text: copy(
        `${bot.name} 已退出会话。`,
        `${bot.name} left the conversation.`,
        `${bot.name} hat die Unterhaltung verlassen.`
      ),
      time: currentTime(),
    });
    recordConversationActivity(conversation);
    bot.activeConversations = Math.max(0, bot.activeConversations - 1);
    queueToast(copy(
      `${bot.name} 已退出当前会话。`,
      `${bot.name} left this chat.`,
      `${bot.name} hat diesen Chat verlassen.`
    ), "✓");
  });
}

function setConversationBotMode(botId, mode) {
  update((draft) => {
    const conversation = draft.conversations.find(
      (item) => item.id === draft.selectedConversationId
    );
    if (!conversation) return;
    const presence = conversation.botPresence.find((item) => item.botId === botId);
    if (!presence) return;
    presence.mode = mode;
    conversation.messages.push({
      id: uid("sys"),
      type: "system",
      text: copy(
        `${getBot(botId).name} 已切换到 ${formatMode(mode)}。`,
        `${getBot(botId).name} switched to ${formatMode(mode)}.`,
        `${getBot(botId).name} wurde auf ${formatMode(mode)} umgestellt.`
      ),
      time: currentTime(),
    });
    recordConversationActivity(conversation);
    queueToast(copy(
      `${getBot(botId).name} 已切换到 ${formatMode(mode)}。`,
      `${getBot(botId).name} switched to ${formatMode(mode)}.`,
      `${getBot(botId).name} wurde auf ${formatMode(mode)} umgestellt.`
    ), "✓");
  });
}

function addHumanContact(humanId) {
  update((draft) => {
    const human = draft.humans.find((item) => item.id === humanId);
    if (!human) return;
    if (draft.humanContactIds.includes(humanId)) {
      queueToast(copy(
        `${human.name} 已经是好友。`,
        `${human.name} is already in contacts.`,
        `${human.name} ist bereits in den Kontakten.`
      ), "i");
      return;
    }
    if (draft.humanRequestIds.incoming.includes(humanId)) {
      draft.humanRequestIds.incoming = draft.humanRequestIds.incoming.filter(
        (id) => id !== humanId
      );
      draft.humanContactIds.push(humanId);
      draft.sheet = null;
      draft.contactFilter = "human";
      queueToast(copy(
        `已接受 ${human.name} 的好友请求。`,
        `Accepted ${human.name}'s request.`,
        `${human.name}s Anfrage wurde angenommen.`
      ), "✓");
      return;
    }
    if (draft.humanRequestIds.outgoing.includes(humanId)) {
      queueToast(copy(
        `已经向 ${human.name} 发送过请求。`,
        `Request to ${human.name} already sent.`,
        `Anfrage an ${human.name} wurde bereits gesendet.`
      ), "i");
      return;
    }

    if (human.friendPolicy === "auto_accept") {
      draft.humanContactIds.push(humanId);
      draft.sheet = null;
      draft.contactFilter = "human";
      queueToast(copy(
        `${human.name} 已添加为好友。`,
        `${human.name} added to contacts.`,
        `${human.name} wurde zu den Kontakten hinzugefügt.`
      ), "✓");
      return;
    }

    draft.humanRequestIds.outgoing.push(humanId);
    queueToast(copy(
      `已向 ${human.name} 发送好友请求。`,
      `Sent a request to ${human.name}.`,
      `Anfrage an ${human.name} gesendet.`
    ), "→");
  });
}

function acceptHumanRequest(humanId) {
  update((draft) => {
    const human = draft.humans.find((item) => item.id === humanId);
    if (!human) return;
    draft.humanRequestIds.incoming = draft.humanRequestIds.incoming.filter(
      (id) => id !== humanId
    );
    if (!draft.humanContactIds.includes(humanId)) {
      draft.humanContactIds.push(humanId);
    }
    draft.contactFilter = "human";
    queueToast(copy(
      `已接受 ${human.name} 的好友请求。`,
      `Accepted ${human.name}'s request.`,
      `${human.name}s Anfrage wurde angenommen.`
    ), "✓");
  });
}

function declineHumanRequest(humanId) {
  update((draft) => {
    const human = draft.humans.find((item) => item.id === humanId);
    if (!human) return;
    draft.humanRequestIds.incoming = draft.humanRequestIds.incoming.filter(
      (id) => id !== humanId
    );
    queueToast(copy(
      `已忽略 ${human.name} 的好友请求。`,
      `Ignored ${human.name}'s request.`,
      `${human.name}s Anfrage wurde ignoriert.`
    ), "○");
  });
}

function cancelHumanRequest(humanId) {
  update((draft) => {
    const human = draft.humans.find((item) => item.id === humanId);
    if (!human) return;
    draft.humanRequestIds.outgoing = draft.humanRequestIds.outgoing.filter(
      (id) => id !== humanId
    );
    queueToast(copy(
      `已撤回发给 ${human.name} 的好友请求。`,
      `Cancelled the request to ${human.name}.`,
      `Die Anfrage an ${human.name} wurde zurückgezogen.`
    ), "○");
  });
}

function testImportBotConnection() {
  const template = getSelectedTemplate();
  const form = state.forms.importBot;
  if (!template) return;

  const missingField = template.fieldDefs.find(
    (field) => !(form.values[field.key] || "").trim()
  );

  if (missingField) {
    queueToast(copy(
      `先填写 ${missingField.label}。`,
      `Fill in ${missingField.label} first.`,
      `${missingField.label} zuerst ausfüllen.`
    ), "!");
    return;
  }

  const checkId = uid("check");
  update((draft) => {
      draft.forms.importBot.connectionCheck = {
        id: checkId,
        status: "testing",
        message: copy(
          "正在检查连接…",
          "Checking connection…",
          "Verbindung wird geprüft…"
        ),
      };
  });

  setTimeout(() => {
    const latestForm = state.forms.importBot;
    if (latestForm.connectionCheck?.id !== checkId) return;
    const result = simulateRuntimeCheck(template, latestForm.values);
    update((draft) => {
      if (draft.forms.importBot.connectionCheck?.id !== checkId) return;
      draft.forms.importBot.connectionCheck = {
        ...result,
        id: checkId,
      };
      queueToast(
        result.status === "success"
          ? copy(`${template.name} 连接测试成功。`, `${template.name} connection succeeded.`, `${template.name} Verbindung erfolgreich.`)
          : copy(`${template.name} 连接测试失败。`, `${template.name} connection failed.`, `${template.name} Verbindung fehlgeschlagen.`),
        result.status === "success" ? "✓" : "!"
      );
    });
  }, 900);
}

function submitImportBot() {
  const template = getSelectedTemplate();
  const form = state.forms.importBot;
  if (!template) return;

  const missingField = template.fieldDefs.find(
    (field) => !(form.values[field.key] || "").trim()
  );

  if (missingField) {
    queueToast(copy(
      `先填写 ${missingField.label}。`,
      `Fill in ${missingField.label} first.`,
      `${missingField.label} zuerst ausfüllen.`
    ), "!");
    return;
  }

  if (!form.connectionCheck || form.connectionCheck.status === "testing") {
    queueToast(copy(
      "请先测试连接。",
      "Run a connection test first.",
      "Bitte zuerst die Verbindung testen."
    ), "!");
    return;
  }

  const name = form.displayName.trim() || template.name;

  update((draft) => {
    const check = draft.forms.importBot.connectionCheck;
    const targetBot = form.editBotId
      ? draft.bots.find((item) => item.id === form.editBotId)
      : null;
    const botId = targetBot?.id || uid("bot");
    const runtimeConfig = buildRuntimeConfigFromTemplate(template, form.values, check);
    const runtimeCheck = {
      status: check.status,
      message: check.message,
      capabilities: check.capabilities,
      lastCheckedAt: check.lastCheckedAt,
      latency: check.latency,
    };

    if (targetBot) {
      targetBot.name = name;
      targetBot.avatar = firstGlyph(name);
      targetBot.summary =
        check.status === "success"
          ? copy(`${template.name} 已连接。`, `${template.name} connected.`, `${template.name} verbunden.`)
          : copy(`${template.name} 已保存，连接异常。`, `${template.name} saved with a connection issue.`, `${template.name} wurde mit einem Verbindungsproblem gespeichert.`);
      targetBot.sourceType = template.sourceType;
      targetBot.sourceLabel = template.sourceLabel;
      targetBot.templateId = template.id;
      targetBot.capabilities = check.capabilities?.length
        ? check.capabilities
        : template.capabilities;
      targetBot.runtimeFields = structuredClone(form.values);
      targetBot.runtimeConfig = runtimeConfig;
      targetBot.runtimeCheck = runtimeCheck;
      targetBot.identity = copy(
        `${template.name} 导入实例。遵守当前会话规则。`,
        `${template.name} imported runtime. Obeys current chat rules.`,
        `${template.name} importiertes Runtime. Befolgt die aktuellen Chat-Regeln.`
      );
      if (targetBot.memory.length) {
        targetBot.memory[0].copy =
          check.status === "success"
            ? copy("来自外部 runtime。连接测试通过。", "Comes from an external runtime. Connection test passed.", "Kommt von einem externen Runtime. Verbindungstest bestanden.")
            : copy("来自外部 runtime。最近一次连接测试失败。", "Comes from an external runtime. The latest connection test failed.", "Kommt von einem externen Runtime. Der letzte Verbindungstest ist fehlgeschlagen.");
      }
    } else {
      draft.bots.unshift({
        id: botId,
        name,
        avatar: firstGlyph(name),
        summary:
          check.status === "success"
            ? copy(`${template.name} 已导入。`, `${template.name} imported.`, `${template.name} importiert.`)
            : copy(`${template.name} 已保存，连接异常。`, `${template.name} saved with a connection issue.`, `${template.name} wurde mit einem Verbindungsproblem gespeichert.`),
        identity: copy(
          `${template.name} 导入实例。遵守当前会话规则。`,
          `${template.name} imported runtime. Obeys current chat rules.`,
          `${template.name} importiertes Runtime. Befolgt die aktuellen Chat-Regeln.`
        ),
        sourceType: template.sourceType,
        sourceLabel: template.sourceLabel,
        packageTier: null,
        monthlyPrice: null,
        encryptedCloudMemory: false,
        templateId: template.id,
        defaultMode: "mention",
        activeConversations: 0,
        capabilities: check.capabilities?.length ? check.capabilities : template.capabilities,
        runtimeFields: structuredClone(form.values),
        runtimeConfig,
        runtimeCheck,
        memory: [
          {
            id: uid("mem"),
            title: "Imported runtime note",
            copy:
              check.status === "success"
                ? copy("来自外部 runtime。", "Connected to an external runtime.", "Mit einem externen Runtime verbunden.")
                : copy("当前 runtime 未连通。", "The runtime is currently offline.", "Das Runtime ist derzeit offline."),
          },
        ],
        files: [],
        skills: check.capabilities?.length ? check.capabilities : template.capabilities,
      });
    }
    draft.contactsView = "detail";
    draft.selectedContactId = botId;
    draft.selectedContactType = "bot";
    draft.botDetailTab = "overview";
    draft.activeTab = "contacts";
    draft.sheet = null;
    draft.forms.importBot = structuredClone(initialState.forms.importBot);
    queueToast(
      check.status === "success"
        ? copy(`${name} 已完成导入。`, `${name} imported.`, `${name} importiert.`)
        : copy(`${name} 已保存，待修复。`, `${name} saved for later repair.`, `${name} wurde für spätere Reparatur gespeichert.`),
      check.status === "success" ? "✓" : "!"
    );
  });
}

function submitCreateManagedBot() {
  const form = state.forms.createManagedBot;
  const name = form.name.trim();
  if (hasReachedManagedBotLimit()) {
    return openSheet("create-managed-bot");
  }
  if (!name) {
    queueToast(copy("先填写 Agent 名称。", "Enter an agent name first.", "Bitte zuerst einen Agent-Namen eingeben."), "!");
    return;
  }

  if (!form.identity.trim()) {
    queueToast(copy("请填写身份设定。", "Add an identity description first.", "Bitte zuerst eine Identitätsbeschreibung eingeben."), "!");
    return;
  }

  update((draft) => {
    draft.forms.createManagedBot.processing = false;
    draft.sheet = { type: "confirm-managed-bot" };
  });
}

function confirmManagedBotPurchase() {
  const form = state.forms.createManagedBot;
  const defaultMethod = getDefaultPaymentMethod();
  if (!defaultMethod || defaultMethod.status !== "ready") {
    queueToast(copy("当前默认付款方式不可用。", "Default payment method is unavailable.", "Die Standardzahlungsmethode ist nicht verfügbar."), "!");
    return;
  }

  if (form.processing) return;

  update((draft) => {
    draft.forms.createManagedBot.processing = true;
    draft.sheet = { type: "confirm-managed-bot" };
  });

  setTimeout(() => {
    const latestForm = state.forms.createManagedBot;
    update((draft) => {
      const name = latestForm.name.trim();
      const botId = uid("bot");
      const price = draft.billing.managedBotPrices[latestForm.packageTier];
      draft.bots.unshift({
        id: botId,
        name,
        avatar: firstGlyph(name),
        summary:
          latestForm.summary.trim() ||
          copy(
            "通过平台托管服务创建。",
            "Created with the managed service.",
            "Mit dem Managed Service erstellt."
          ),
        identity: latestForm.identity.trim(),
        sourceType: "managed",
        sourceLabel: "Managed Bot Package",
        packageTier: capitalize(latestForm.packageTier),
        monthlyPrice: price,
        encryptedCloudMemory: true,
        subscriptionStatus: "active",
        renewalDate: nextRenewalDate(),
        defaultMode: "mention",
        activeConversations: 0,
        capabilities: [
          "自定义 reply mode",
          "@群成员",
          "读取授权文件",
          "云端 E2E memory",
        ],
        runtimeConfig: {
          model:
            latestForm.packageTier === "pro"
              ? "Managed Reasoning Pro"
              : "Managed Fast Core",
          region: "eu-west",
          status: "active",
        },
        runtimeCheck: {
          status: "success",
          message: "托管 runtime 已开通，密钥与加密存储准备完毕。",
          lastCheckedAt: `${copy("今天", "Today", "Heute")} ${currentTime()}`,
          latency: "126 ms",
        },
        memory: [
          {
            id: uid("mem"),
            title: "Core memory",
            copy: copy(
              "新创建的托管 Agent。",
              "New managed agent.",
              "Neuer Managed Agent."
            ),
          },
        ],
        files: [],
        skills: ["Conversation Summary"],
      });
      draft.billing.invoices.unshift({
        id: uid("inv"),
        title: `${name} ${capitalize(latestForm.packageTier)} · 首次购买`,
        amount: price.replace(" / month", ""),
        status: "paid",
        date: currentDateLabel(),
      });
      draft.contactsView = "detail";
      draft.selectedContactId = botId;
      draft.selectedContactType = "bot";
      draft.botDetailTab = "overview";
      draft.activeTab = "contacts";
      draft.sheet = null;
      draft.forms.createManagedBot = structuredClone(initialState.forms.createManagedBot);
      queueToast(copy(
        `已创建 ${name}，并按 ${price} 开始计费。`,
        `${name} created. Billing started at ${price}.`,
        `${name} wurde erstellt. Abrechnung startet mit ${price}.`
      ), "✓");
    });
  }, 850);
}

function setDefaultPaymentMethod(paymentMethodId) {
  update((draft) => {
    const target = draft.billing.paymentMethods.find((item) => item.id === paymentMethodId);
    if (!target || target.status !== "ready") {
      queueToast(copy("只能把可用卡片设为默认。", "Only a ready card can be set as default.", "Nur eine verfügbare Karte kann als Standard gesetzt werden."), "!");
      return;
    }
    draft.billing.paymentMethods.forEach((item) => {
      item.isDefault = item.id === paymentMethodId;
    });
    draft.billing.paymentMethod = target.label;
    queueToast(copy(
      `${target.label} 已设为默认付款方式。`,
      `${target.label} set as default.`,
      `${target.label} als Standard gesetzt.`
    ), "✓");
  });
}

function removePaymentMethod(paymentMethodId) {
  update((draft) => {
    if (draft.billing.paymentMethods.length <= 1) {
      queueToast(copy("至少保留一张卡片。", "Keep at least one card.", "Mindestens eine Karte muss bleiben."), "!");
      return;
    }
    const target = draft.billing.paymentMethods.find((item) => item.id === paymentMethodId);
    if (!target) return;
    draft.billing.paymentMethods = draft.billing.paymentMethods.filter(
      (item) => item.id !== paymentMethodId
    );
    if (target.isDefault) {
      const fallback =
        draft.billing.paymentMethods.find((item) => item.status === "ready") ||
        draft.billing.paymentMethods[0];
      draft.billing.paymentMethods.forEach((item) => {
        item.isDefault = item.id === fallback.id;
      });
      draft.billing.paymentMethod = fallback.label;
    }
    queueToast(copy(`${target.label} 已移除。`, `${target.label} removed.`, `${target.label} entfernt.`), "✓");
  });
}

function addPaymentMethod() {
  update((draft) => {
    const newMethod = {
      id: uid("pm"),
      label: `UnionPay •• ${String(Math.floor(Math.random() * 9000) + 1000)}`,
      status: "ready",
      isDefault: false,
    };
    draft.billing.paymentMethods.push(newMethod);
    queueToast(copy(`${newMethod.label} 已添加。`, `${newMethod.label} added.`, `${newMethod.label} hinzugefügt.`), "✓");
  });
}

function upgradePlan(planCode) {
  if (!PLAN_CATALOG[planCode]) return;
  update((draft) => {
    const plan = PLAN_CATALOG[planCode];
    draft.billing.planCode = planCode;
    draft.billing.planName = plan.name;
    draft.sheet =
      draft.sheet?.source === "create-managed-bot"
        ? { type: "create-managed-bot" }
        : null;
    queueToast(
      copy(
        `已切换到 ${plan.name}。`,
        `Switched to ${plan.name}.`,
        `Zu ${plan.name} gewechselt.`
      ),
      "✓"
    );
  });
}

function openEditBotRuntime(botId) {
  const bot = getBot(botId);
  const template = getTemplateForBot(bot);
  if (!bot || !template) return;

  update((draft) => {
    draft.forms.importBot = {
      templateId: template.id,
      displayName: bot.name,
      values: structuredClone(bot.runtimeFields || {}),
      connectionCheck: bot.runtimeCheck
        ? {
            ...bot.runtimeCheck,
            id: uid("check"),
          }
        : null,
      editBotId: bot.id,
    };
    draft.sheet = { type: "import-bot-config" };
  });
}

function healthCheckBot(botId) {
  const bot = getBot(botId);
  const template = getTemplateForBot(bot);
  if (!bot || !template) return;

  update((draft) => {
    const target = draft.bots.find((item) => item.id === botId);
    if (!target) return;
    target.runtimeCheck = {
      status: "testing",
      message: copy("正在重新检测连接…", "Rechecking connection…", "Verbindung wird erneut geprüft…"),
      lastCheckedAt: `${copy("今天", "Today", "Heute")} ${currentTime()}`,
    };
  });

  setTimeout(() => {
    const latestBot = getBot(botId);
    if (!latestBot) return;
    const result = simulateRuntimeCheck(template, latestBot.runtimeFields || {});
    update((draft) => {
      const target = draft.bots.find((item) => item.id === botId);
      if (!target) return;
      target.runtimeCheck = result;
      target.runtimeConfig = buildRuntimeConfigFromTemplate(
        template,
        target.runtimeFields || {},
        result
      );
      target.summary =
        result.status === "success"
          ? copy(`${template.name} 已连接。`, `${template.name} connected.`, `${template.name} verbunden.`)
          : copy(`${template.name} 当前连接异常。`, `${template.name} has a connection issue.`, `${template.name} hat ein Verbindungsproblem.`);
      queueToast(
        result.status === "success"
          ? copy(`${target.name} 已恢复连接。`, `${target.name} is back online.`, `${target.name} ist wieder online.`)
          : copy(`${target.name} 仍未连接成功。`, `${target.name} is still offline.`, `${target.name} ist weiterhin offline.`),
        result.status === "success" ? "✓" : "!"
      );
    });
  }, 800);
}

function openManageManagedBot(botId) {
  const bot = getBot(botId);
  if (!bot || bot.sourceType !== "managed") return;

  update((draft) => {
    draft.forms.manageManagedBot = {
      botId,
      packageTier: bot.packageTier.toLowerCase(),
      renewalEnabled: bot.subscriptionStatus !== "scheduled_cancel",
    };
    draft.sheet = { type: "manage-managed-bot" };
  });
}

function saveManagedBotSettings(botId) {
  update((draft) => {
    const bot = draft.bots.find((item) => item.id === botId);
    const form = draft.forms.manageManagedBot;
    if (!bot || bot.sourceType !== "managed") return;

    const nextTier = capitalize(form.packageTier);
    const tierChanged = bot.packageTier !== nextTier;
    bot.packageTier = nextTier;
    bot.monthlyPrice = draft.billing.managedBotPrices[form.packageTier];
    bot.runtimeConfig.model =
      form.packageTier === "pro" ? "Managed Reasoning Pro" : "Managed Fast Core";
    bot.subscriptionStatus = form.renewalEnabled ? "active" : "scheduled_cancel";
    bot.renewalDate = nextRenewalDate();
    bot.runtimeCheck = {
      status: "success",
      message: form.renewalEnabled
        ? copy("订阅设置已更新。", "Subscription settings updated.", "Abo-Einstellungen aktualisiert.")
        : copy("已关闭自动续费。", "Auto renew turned off.", "Automatische Verlängerung deaktiviert."),
      lastCheckedAt: `${copy("今天", "Today", "Heute")} ${currentTime()}`,
      latency: bot.runtimeCheck?.latency || "126 ms",
    };
    if (tierChanged) {
      draft.billing.invoices.unshift({
        id: uid("inv"),
        title: `${bot.name} ${nextTier} · 套餐变更`,
        amount: bot.monthlyPrice.replace(" / month", ""),
        status: "paid",
        date: currentDateLabel(),
      });
    }
    draft.sheet = null;
    queueToast(copy(
      `${bot.name} 的订阅设置已更新。`,
      `${bot.name} subscription updated.`,
      `Das Abo von ${bot.name} wurde aktualisiert.`
    ), "✓");
  });
}

function openOrCreateDirectChat(humanId) {
  const existing = findDirectConversationWith(humanId);
  if (existing) {
    update((draft) => {
      draft.activeTab = "chats";
      draft.chatView = "conversation";
      draft.selectedConversationId = existing.id;
      draft.sheet = null;
      const conversation = draft.conversations.find((item) => item.id === existing.id);
      if (conversation) conversation.unread = 0;
    });
    return;
  }

  update((draft) => {
    const conversationId = uid("conv");
    draft.conversations.unshift({
      id: conversationId,
      title: getHuman(humanId).name,
      type: "direct",
      humanIds: ["u-self", humanId],
      botPresence: [],
      unread: 0,
      pinned: false,
      muted: false,
      updatedAt: Date.now(),
      lastTime: copy("刚刚", "Just now", "Gerade eben"),
      messages: [
        {
          id: uid("sys"),
          type: "system",
          text: copy(
            `已创建与 ${getHuman(humanId).name} 的私聊。`,
            `Direct chat with ${getHuman(humanId).name} created.`,
            `Direktchat mit ${getHuman(humanId).name} erstellt.`
          ),
          time: currentTime(),
        },
      ],
    });
    draft.composeDrafts[conversationId] = "";
    draft.activeTab = "chats";
    draft.chatView = "conversation";
    draft.selectedConversationId = conversationId;
    draft.sheet = null;
    queueToast(copy(
      `已与 ${getHuman(humanId).name} 创建聊天。`,
      `Chat with ${getHuman(humanId).name} created.`,
      `Chat mit ${getHuman(humanId).name} erstellt.`
    ), "✓");
  });
}

function deleteHumanContact(humanId) {
  const human = getHuman(humanId);
  const confirmed = window.confirm(copy(
    `删除好友 ${human.name}？已有会话会保留，但它将不再出现在联系人列表。`,
    `Remove ${human.name} from contacts? Existing chats will stay.`,
    `${human.name} aus den Kontakten entfernen? Bestehende Chats bleiben erhalten.`
  ));
  if (!confirmed) return;

  update((draft) => {
    draft.humanContactIds = draft.humanContactIds.filter((id) => id !== humanId);
    draft.humanRequestIds.incoming = draft.humanRequestIds.incoming.filter(
      (id) => id !== humanId
    );
    draft.humanRequestIds.outgoing = draft.humanRequestIds.outgoing.filter(
      (id) => id !== humanId
    );
    draft.contactsView = "list";
    draft.selectedContactId = null;
    draft.selectedContactType = null;
    queueToast(copy(
      `${human.name} 已从联系人中删除。`,
      `${human.name} removed from contacts.`,
      `${human.name} wurde aus den Kontakten entfernt.`
    ), "✓");
  });
}

function deleteBot(botId) {
  const bot = getBot(botId);
  const confirmed = window.confirm(
    copy(
      `删除 Agent ${bot.name}？它会退出所有会话。`,
      `Delete ${bot.name}? It will leave all chats.`,
      `${bot.name} löschen? Der Agent verlässt alle Chats.`
    )
  );
  if (!confirmed) return;

  state.pendingReplies
    .filter((item) => item.botId === botId)
    .forEach((item) => {
      const timer = pendingTimers.get(item.id);
      if (timer) clearTimeout(timer);
      pendingTimers.delete(item.id);
    });

  update((draft) => {
    draft.bots = draft.bots.filter((item) => item.id !== botId);
    draft.conversations.forEach((conversation) => {
      const hadBot = conversation.botPresence.some((item) => item.botId === botId);
      if (hadBot) {
        conversation.botPresence = conversation.botPresence.filter(
          (item) => item.botId !== botId
        );
        conversation.messages.push({
          id: uid("sys"),
          type: "system",
          text: copy(
            `${bot.name} 已从会话中移除。`,
            `${bot.name} was removed from the conversation.`,
            `${bot.name} wurde aus der Unterhaltung entfernt.`
          ),
          time: currentTime(),
        });
        recordConversationActivity(conversation);
      }
    });
    draft.contactsView = "list";
    draft.selectedContactId = null;
    draft.selectedContactType = null;
    draft.pendingReplies = draft.pendingReplies.filter((item) => item.botId !== botId);
    queueToast(copy(`${bot.name} 已删除。`, `${bot.name} deleted.`, `${bot.name} gelöscht.`), "✓");
  });
}

function openSoloBotRoom(botId) {
  const bot = getBot(botId);
  const existing = state.conversations.find(
    (conversation) =>
      conversation.humanIds.length === 1 &&
      conversation.humanIds[0] === "u-self" &&
      conversation.botPresence.length === 1 &&
      conversation.botPresence[0].botId === botId
  );

  if (existing) {
    update((draft) => {
      draft.activeTab = "chats";
      draft.chatView = "conversation";
      draft.selectedConversationId = existing.id;
      draft.sheet = null;
    });
    return;
  }

  update((draft) => {
    const conversationId = uid("conv");
    draft.conversations.unshift({
      id: conversationId,
      title: `${bot.name} Space`,
      type: "group",
      humanIds: ["u-self"],
      botPresence: [{ botId, mode: bot.defaultMode }],
      unread: 0,
      pinned: false,
      muted: false,
      updatedAt: Date.now(),
      lastTime: copy("刚刚", "Just now", "Gerade eben"),
      messages: [
        {
          id: uid("sys"),
          type: "system",
          text: copy(
            `${bot.name} 已进入这个单独会话。`,
            `${bot.name} joined this solo room.`,
            `${bot.name} ist diesem Solo-Raum beigetreten.`
          ),
          time: currentTime(),
        },
      ],
    });
    draft.composeDrafts[conversationId] = "";
    draft.activeTab = "chats";
    draft.chatView = "conversation";
    draft.selectedConversationId = conversationId;
    draft.sheet = null;
    bot.activeConversations += 1;
    queueToast(copy(
      `已创建 ${bot.name} 的 Solo Room。`,
      `${bot.name} solo room created.`,
      `Solo-Raum für ${bot.name} erstellt.`
    ), "✓");
  });
}

function triggerUpload(botId) {
  uploadTargetBotId = botId;
  hiddenFileInput.click();
}

function handleFileUpload(file, botId) {
  const fileId = uid("file");
  beginFileUpload(botId, {
    id: fileId,
    name: file.name,
    sizeBytes: file.size,
  });
}

function beginFileUpload(botId, fileLike) {
  const fileId = fileLike.id || uid("file");
  const failureReason = getFileUploadFailure(getBot(botId), fileLike);

  update((draft) => {
    const bot = draft.bots.find((item) => item.id === botId);
    if (!bot) return;
    bot.files = bot.files.filter((item) => item.id !== fileId);
    bot.files.unshift({
      id: fileId,
      name: fileLike.name,
      size: formatBytes(fileLike.sizeBytes),
      sizeBytes: fileLike.sizeBytes,
      status: "uploading",
      progress: 16,
      errorMessage: "",
    });
    queueToast(copy(`${fileLike.name} 开始上传。`, `${fileLike.name} upload started.`, `${fileLike.name} Upload gestartet.`), "i");
  });

  setTimeout(() => {
    update((draft) => {
      const bot = draft.bots.find((item) => item.id === botId);
      const currentFile = bot?.files.find((item) => item.id === fileId);
      if (!currentFile) return;
      currentFile.status = "parsing";
      currentFile.progress = 64;
    });
  }, 650);

  setTimeout(() => {
    update((draft) => {
      const bot = draft.bots.find((item) => item.id === botId);
      const currentFile = bot?.files.find((item) => item.id === fileId);
      if (!currentFile || !bot) return;
      if (failureReason) {
        currentFile.status = "failed";
        currentFile.progress = 100;
        currentFile.errorMessage = failureReason;
        queueToast(copy(`${fileLike.name} 上传失败。`, `${fileLike.name} upload failed.`, `${fileLike.name} Upload fehlgeschlagen.`), "!");
        return;
      }
      currentFile.status = "synced";
      currentFile.progress = 100;
      currentFile.errorMessage = "";
      queueToast(
        bot.encryptedCloudMemory
          ? copy(`${fileLike.name} 已加密上传到云端。`, `${fileLike.name} uploaded to encrypted cloud storage.`, `${fileLike.name} wurde in den verschlüsselten Cloud-Speicher hochgeladen.`)
          : copy(`${fileLike.name} 已同步到 Agent runtime。`, `${fileLike.name} synced to the agent runtime.`, `${fileLike.name} wurde mit dem Agent-Runtime synchronisiert.`),
        "✓"
      );
    });
  }, 1650);
}

function retryBotFile(botId, fileId) {
  const bot = getBot(botId);
  const file = bot?.files.find((item) => item.id === fileId);
  if (!bot || !file) return;
  beginFileUpload(botId, {
    id: file.id,
    name: file.name,
    sizeBytes: file.sizeBytes || 1024,
  });
}

function deleteBotFile(botId, fileId) {
  update((draft) => {
    const bot = draft.bots.find((item) => item.id === botId);
    if (!bot) return;
    const file = bot.files.find((item) => item.id === fileId);
    if (!file) return;
    bot.files = bot.files.filter((item) => item.id !== fileId);
    queueToast(copy(`${file.name} 已从 ${bot.name} 中移除。`, `${file.name} removed from ${bot.name}.`, `${file.name} wurde aus ${bot.name} entfernt.`), "✓");
  });
}

function deleteBotMemory(botId, memoryId) {
  const bot = getBot(botId);
  const memory = bot.memory.find((item) => item.id === memoryId);
  const confirmed = window.confirm(copy(`删除记忆「${memory.title}」？`, `Delete memory "${memory.title}"?`, `Memory "${memory.title}" löschen?`));
  if (!confirmed) return;

  update((draft) => {
    const targetBot = draft.bots.find((item) => item.id === botId);
    if (!targetBot) return;
    targetBot.memory = targetBot.memory.filter((item) => item.id !== memoryId);
    queueToast(copy(`${memory.title} 已删除。`, `${memory.title} deleted.`, `${memory.title} gelöscht.`), "✓");
  });
}

function addBotMemory(botId) {
  update((draft) => {
    const bot = draft.bots.find((item) => item.id === botId);
    if (!bot) return;
    bot.memory.unshift({
      id: uid("mem"),
      title: copy(`手动记忆 ${bot.memory.length + 1}`, `Manual memory ${bot.memory.length + 1}`, `Manuelle Memory ${bot.memory.length + 1}`),
      copy: copy("手动补充的一条短记忆。", "A short manual memory.", "Eine kurze manuelle Memory."),
    });
    queueToast(copy(`${bot.name} 新增了一条记忆。`, `A new memory was added to ${bot.name}.`, `Eine neue Memory wurde zu ${bot.name} hinzugefügt.`), "✓");
  });
}

function sendMessage(conversationId) {
  const text = (state.composeDrafts[conversationId] || "").trim();
  if (!text) {
    queueToast(copy("先输入一点内容。", "Enter a message first.", "Bitte zuerst eine Nachricht eingeben."), "i");
    return;
  }

  update((draft) => {
    const conversation = draft.conversations.find((item) => item.id === conversationId);
    if (!conversation) return;
    conversation.messages.push({
      id: uid("msg"),
      type: "human",
      senderId: "u-self",
      text,
      time: currentTime(),
    });
    recordConversationActivity(conversation);
    draft.composeDrafts[conversationId] = "";
  });

  queueToast(copy("消息已发送。", "Message sent.", "Nachricht gesendet."), "✓");
  queueBotReplies(conversationId, text);
}

function queueBotReplies(conversationId, input) {
  const conversation = getConversation(conversationId);
  if (!conversation) return;

  const triggeredBots = conversation.botPresence.filter((presence) => {
    const bot = getBot(presence.botId);
    return shouldBotReply(bot, input, presence.mode);
  });

  triggeredBots.forEach((presence, index) => {
    scheduleBotReply(conversationId, presence.botId, input, presence.mode, index);
  });
}

function scheduleBotReply(conversationId, botId, input, mode, index = 0) {
  const bot = getBot(botId);
  const failureReason = getBotReplyFailure(bot);
  if (failureReason) {
    appendRuntimeErrorMessage(conversationId, botId, input, mode, failureReason);
    return;
  }

  const pendingId = uid("pending");
  update((draft) => {
    draft.pendingReplies.push({
      id: pendingId,
      conversationId,
      botId,
      stage: index % 2 === 0 ? "thinking" : "reading files",
    });
  });

  const timer = setTimeout(() => {
    const latestBot = getBot(botId);
    const latestFailure = getBotReplyFailure(latestBot);
    if (latestFailure) {
      update((draft) => {
        draft.pendingReplies = draft.pendingReplies.filter((item) => item.id !== pendingId);
      });
      appendRuntimeErrorMessage(conversationId, botId, input, mode, latestFailure);
      pendingTimers.delete(pendingId);
      return;
    }

    const reply = buildBotReply(latestBot, getConversation(conversationId), input, mode);
    update((draft) => {
      const conversationDraft = draft.conversations.find((item) => item.id === conversationId);
      if (!conversationDraft || !latestBot) return;
      conversationDraft.messages = conversationDraft.messages.filter(
        (message) =>
          !(
            message.type === "runtime-error" &&
            message.botId === botId &&
            message.inputSnapshot === input
          )
      );
      conversationDraft.messages.push({
        id: uid("msg"),
        type: "agent",
        senderId: latestBot.id,
        ownerId: "u-self",
        text: reply.text,
        time: currentTime(),
        trigger: reply.trigger,
        source: reply.source,
        mentions: reply.mentions,
      });
      recordConversationActivity(conversationDraft);
      draft.pendingReplies = draft.pendingReplies.filter((item) => item.id !== pendingId);
    });
    pendingTimers.delete(pendingId);
  }, 950 + index * 420);

  pendingTimers.set(pendingId, timer);
}

function appendRuntimeErrorMessage(conversationId, botId, input, mode, reason) {
  update((draft) => {
    const conversation = draft.conversations.find((item) => item.id === conversationId);
    if (!conversation) return;
    conversation.messages.push({
      id: uid("msg"),
      type: "runtime-error",
      botId,
      conversationId,
      inputSnapshot: input,
      mode,
      reason,
      time: currentTime(),
    });
    recordConversationActivity(conversation);
  });
}

function retryBotReply(conversationId, botId, input, mode) {
  update((draft) => {
    const conversation = draft.conversations.find((item) => item.id === conversationId);
    if (!conversation) return;
    conversation.messages = conversation.messages.filter(
      (message) =>
        !(
          message.type === "runtime-error" &&
          message.botId === botId &&
          message.inputSnapshot === input
        )
    );
  });
  scheduleBotReply(conversationId, botId, input, mode, 0);
}

function shouldBotReply(bot, input, mode) {
  if (!bot) return false;
  const normalized = input.toLowerCase();
  const mention = normalized.includes(`@${bot.name.toLowerCase()}`);

  if (mode === "mention") return mention;
  if (mode === "all") return true;

  const keywords = [
    "总结",
    "设计",
    "bot",
    "group",
    "who",
    "负责",
    "邀请",
    "runtime",
    "api",
    "付费",
  ];

  return mention || keywords.some((keyword) => normalized.includes(keyword));
}

function buildBotReply(bot, conversation, input, mode) {
  const normalized = input.toLowerCase();
  const otherHumans = conversation.humanIds
    .filter((id) => id !== "u-self")
    .map((id) => getHuman(id))
    .filter(Boolean);

  const trigger = formatMode(mode);

  if (bot.id === "b-atlas") {
    if (normalized.includes("group") || normalized.includes("群")) {
      const mentions = otherHumans.slice(0, 1).map((human) => ({
        id: human.id,
        name: human.name,
        type: "human",
      }));
      return {
        text: mentions.length
          ? copy(
              `我建议先锁定群聊名单、时间和待确认项。@${mentions[0].name} 可以先确认 owner。`,
              `I suggest locking the guest list, timing, and open items first. @${mentions[0].name} can confirm the owner next.`,
              `Ich würde zuerst Teilnehmerliste, Zeit und offene Punkte festhalten. @${mentions[0].name} kann als Nächstes die Verantwortung bestätigen.`
            )
          : copy(
              "我建议先锁定名单、时间和待确认项。",
              "I suggest locking the list, timing, and open items first.",
              "Ich würde zuerst Liste, Zeit und offene Punkte festhalten."
            ),
        trigger,
        source: copy("核心记忆 + 当前会话", "Core memory + current chat", "Kern-Memory + aktueller Chat"),
        mentions,
      };
    }
    return {
      text: copy(
        "我建议先明确目标、参与人和截止时间，再把分工写回群里。",
        "I suggest defining the goal, participants, and deadline first, then writing assignments back into the group.",
        "Ich würde zuerst Ziel, Beteiligte und Frist festlegen und danach die Aufgaben in die Gruppe zurückschreiben."
      ),
      trigger,
      source: copy("核心记忆 + 当前会话", "Core memory + current chat", "Kern-Memory + aktueller Chat"),
      mentions: [],
    };
  }

  if (bot.id === "b-claw") {
    const mentions = otherHumans.slice(0, 2).map((human) => ({
      id: human.id,
      name: human.name,
      type: "human",
    }));
    if (normalized.includes("谁") || normalized.includes("负责") || normalized.includes("assign")) {
      return {
        text: mentions.length
          ? copy(
              `我建议先让 @${mentions[0].name} 负责名单，再让 @${mentions[1]?.name || mentions[0].name} 负责提醒。`,
              `I suggest @${mentions[0].name} owns the list first, and @${mentions[1]?.name || mentions[0].name} handles reminders.`,
              `Ich schlage vor, dass @${mentions[0].name} zuerst die Liste übernimmt und @${mentions[1]?.name || mentions[0].name} die Erinnerungen übernimmt.`
            )
          : copy(
              "当前没有其他成员，我建议先补一个 owner。",
              "There are no other members yet. I suggest assigning an owner first.",
              "Es gibt noch keine anderen Mitglieder. Ich schlage vor, zuerst eine verantwortliche Person festzulegen."
            ),
        trigger,
        source: copy("本地桥接运行时", "Local bridge runtime", "Local-Bridge-Runtime"),
        mentions,
      };
    }
    return {
      text: copy(
        "我可以直接整理本地文件和设备侧状态，必要时再回写一条简短结论到群里。",
        "I can work directly with local files and device state, then post a short conclusion back into the group.",
        "Ich kann direkt mit lokalen Dateien und Gerätestatus arbeiten und anschließend eine kurze Zusammenfassung in die Gruppe schreiben."
      ),
      trigger,
      source: copy("本地桥接运行时", "Local bridge runtime", "Local-Bridge-Runtime"),
      mentions: [],
    };
  }

  if (bot.sourceType === "managed") {
    return {
      text: copy(
        "我可以先整理今天的反馈，再按优先级拆成需要立即处理和稍后跟进两类。",
        "I can summarize today's feedback first, then split it into urgent items and later follow-ups.",
        "Ich kann zuerst das heutige Feedback zusammenfassen und es dann in dringende Punkte und spätere Nachverfolgung aufteilen."
      ),
      trigger,
      source: copy("托管运行时", "Managed runtime", "Managed Runtime"),
      mentions: [],
    };
  }

  if (bot.sourceType === "custom_api") {
    return {
      text: copy(
        "我可以把这一段整理成双语版本，并保持术语一致。",
        "I can turn this into a bilingual version and keep the terminology consistent.",
        "Ich kann das in eine zweisprachige Fassung umwandeln und die Terminologie konsistent halten."
      ),
      trigger,
      source: copy("自定义 API 运行时", "Custom API runtime", "Custom-API-Runtime"),
      mentions: [],
    };
  }

  return {
    text: copy(
      "我会保持低频参与，只在需要同步状态或发送提醒时发言。",
      "I'll stay low-frequency and only speak when a status sync or reminder is needed.",
      "Ich bleibe zurückhaltend und melde mich nur, wenn ein Statusabgleich oder eine Erinnerung nötig ist."
    ),
    trigger,
    source: copy("外部插件运行时", "External plugin runtime", "Externes Plugin-Runtime"),
    mentions: [],
  };
}

function normalizeConversations(conversations) {
  return (conversations || []).map((conversation, index) => ({
    ...conversation,
    pinned: Boolean(conversation.pinned),
    muted: Boolean(conversation.muted),
    unread: Number.isFinite(conversation.unread) ? conversation.unread : 0,
    updatedAt:
      Number.isFinite(conversation.updatedAt) && conversation.updatedAt > 0
        ? conversation.updatedAt
        : inferConversationTimestamp(index),
  }));
}

function inferConversationTimestamp(index) {
  return Date.now() - index * 36e5;
}

function recordConversationActivity(conversation, timestamp = Date.now()) {
  conversation.updatedAt = timestamp;
  conversation.lastTime = currentTimeFromTimestamp(timestamp);
}

function getSortedConversations() {
  return [...state.conversations].sort((left, right) => {
    if (left.pinned !== right.pinned) return left.pinned ? -1 : 1;
    return (right.updatedAt || 0) - (left.updatedAt || 0);
  });
}

function formatConversationListTime(timestamp) {
  if (!timestamp) return "";
  const date = new Date(timestamp);
  const now = new Date();
  const startOfToday = new Date(now.getFullYear(), now.getMonth(), now.getDate()).getTime();
  const startOfTarget = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  const diffDays = Math.round((startOfToday - startOfTarget) / 86400000);

  if (diffDays <= 0) {
    return new Intl.DateTimeFormat(state.locale, {
      hour: "2-digit",
      minute: "2-digit",
    }).format(date);
  }

  if (diffDays === 1) return copy("昨天", "Yesterday", "Gestern");

  if (diffDays < 7) {
    return new Intl.DateTimeFormat(state.locale, { weekday: "short" }).format(date);
  }

  return new Intl.DateTimeFormat(state.locale, {
    month: "numeric",
    day: "numeric",
  }).format(date);
}

function renderConversationStatusMeta(conversation) {
  if (conversation.muted) {
    return `<span class="wechat-status-icon" aria-label="${escapeAttribute(
      copy("免打扰", "Muted", "Stumm")
    )}">${renderUiIcon("bell-off")}</span>`;
  }
  if (conversation.pinned) {
    return `<span class="wechat-status-icon" aria-label="${escapeAttribute(
      copy("置顶", "Pinned", "Fixiert")
    )}">${renderUiIcon("pin")}</span>`;
  }
  return "";
}

function getConversationLastMessage(conversation) {
  return conversation?.messages?.[conversation.messages.length - 1] || null;
}

function getConversationSenderLabel(conversation, message) {
  if (!message) return "";
  if (message.type === "agent") return getBot(message.senderId)?.name || copy("Agent", "Agent", "Agent");
  if (message.type === "human") {
    if (message.senderId === "u-self") return copy("我", "You", "Du");
    return getHuman(message.senderId)?.name || copy("成员", "Member", "Mitglied");
  }
  return "";
}

function renderConversationListPreview(conversation) {
  const draft = (state.composeDrafts[conversation.id] || "").trim();
  if (draft) {
    return `
      <span class="wechat-draft-label">${escapeHtml(copy("草稿", "Draft", "Entwurf"))}</span>
      <span class="wechat-preview-text">${escapeHtml(truncate(draft, 60))}</span>
    `;
  }

  const message = getConversationLastMessage(conversation);
  const preview = truncate(getMessagePreview(message), 72);
  const sender = conversation.type === "group" ? getConversationSenderLabel(conversation, message) : "";

  if (!message) {
    return `<span class="wechat-preview-text">${escapeHtml(copy("还没有消息", "No messages yet", "Noch keine Nachrichten"))}</span>`;
  }

  if (sender && !["system", "runtime-error"].includes(message.type)) {
    return `
      <span class="wechat-preview-sender">${escapeHtml(sender)}:</span>
      <span class="wechat-preview-text">${escapeHtml(preview)}</span>
    `;
  }

  return `<span class="wechat-preview-text">${escapeHtml(preview)}</span>`;
}

function getConversationAvatarItems(conversation) {
  if (conversation.type === "direct") {
    const human = getOtherHuman(conversation);
    if (human) {
      return [{ glyph: human.avatar, kind: "human" }];
    }
  }

  const humans = conversation.humanIds
    .filter((id) => id !== "u-self")
    .map((id) => getHuman(id))
    .filter(Boolean)
    .map((human) => ({ glyph: human.avatar, kind: "human" }));
  const bots = conversation.botPresence
    .map((presence) => getBot(presence.botId))
    .filter(Boolean)
    .map((bot) => ({ glyph: bot.avatar, kind: "agent" }));

  const items = [...humans, ...bots];
  if (!items.length) return [{ glyph: "Y", kind: "human" }];
  return items.slice(0, 4);
}

function renderConversationAvatar(conversation) {
  const items = getConversationAvatarItems(conversation);
  if (items.length === 1) {
    const item = items[0];
    return `<div class="avatar ${item.kind} wechat-avatar-single">${escapeHtml(item.glyph)}</div>`;
  }

  return `
    <div class="wechat-group-avatar tiles-${items.length}">
      ${items
        .map(
          (item) =>
            `<span class="wechat-group-avatar-tile ${item.kind}">${escapeHtml(item.glyph)}</span>`
        )
        .join("")}
    </div>
  `;
}

function getConversation(id) {
  return state.conversations.find((conversation) => conversation.id === id);
}

function getHuman(id) {
  return state.humans.find((human) => human.id === id);
}

function getBot(id) {
  return state.bots.find((bot) => bot.id === id);
}

function getIncomingHumanRequests() {
  return state.humans.filter((human) => state.humanRequestIds.incoming.includes(human.id));
}

function getOutgoingHumanRequests() {
  return state.humans.filter((human) => state.humanRequestIds.outgoing.includes(human.id));
}

function getHumanRelationshipStatus(humanId) {
  if (state.humanContactIds.includes(humanId)) return "friend";
  if (state.humanRequestIds.incoming.includes(humanId)) return "incoming";
  if (state.humanRequestIds.outgoing.includes(humanId)) return "outgoing";
  return "available";
}

function getHumanContacts() {
  return state.humans.filter((human) => state.humanContactIds.includes(human.id));
}

function getContactItems() {
  const humanItems = getHumanContacts().map((human) => ({
    kind: "human",
    ...human,
  }));
  const botItems = state.bots.map((bot) => ({
    kind: "bot",
    ...bot,
  }));

  if (state.contactFilter === "human") return humanItems;
  if (state.contactFilter === "bot") return botItems;
  return [...humanItems, ...botItems];
}

function matchesConversationSearch(conversation, query) {
  if (!query) return true;
  const title = conversation.title.toLowerCase();
  const message = getMessagePreview(conversation.messages[conversation.messages.length - 1]).toLowerCase();
  const draft = (state.composeDrafts[conversation.id] || "").toLowerCase();
  const humans = conversation.humanIds
    .map((id) => getHuman(id)?.name || "")
    .join(" ")
    .toLowerCase();
  const bots = conversation.botPresence
    .map((item) => getBot(item.botId)?.name || "")
    .join(" ")
    .toLowerCase();
  return [title, message, draft, humans, bots].some((value) => value.includes(query));
}

function matchesContactSearch(item, query) {
  if (!query) return true;
  const haystack = [item.name, item.handle, item.bio, item.summary, item.sourceLabel]
    .filter(Boolean)
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function renderEmptyStateCard(title, body) {
  return `
    <div class="detail-card compact empty-state-card">
      <div class="detail-item-title">${escapeHtml(title)}</div>
      <div class="detail-item-copy">${escapeHtml(body)}</div>
    </div>
  `;
}

function getCurrentPlan() {
  return PLAN_CATALOG[state.billing.planCode] || PLAN_CATALOG.basic;
}

function hasReachedManagedBotLimit() {
  const managedCount = state.bots.filter((bot) => bot.sourceType === "managed").length;
  return managedCount >= getCurrentPlan().managedBotLimit;
}

function getOtherHuman(conversation) {
  return conversation.humanIds
    .filter((id) => id !== "u-self")
    .map((id) => getHuman(id))[0];
}

function getAccountSearchResults(query) {
  const normalized = query.trim().toLowerCase();
  return state.humans
    .filter((human) => human.id !== "u-self")
    .filter((human) => !state.humanContactIds.includes(human.id))
    .filter((human) => {
      if (!normalized) return true;
      return (
        human.name.toLowerCase().includes(normalized) ||
        human.handle.toLowerCase().includes(normalized)
      );
    });
}

function getSelectedTemplate() {
  return state.botTemplates.find(
    (template) => template.id === state.forms.importBot.templateId
  );
}

function getTemplateForBot(bot) {
  if (!bot?.templateId) return null;
  return state.botTemplates.find((template) => template.id === bot.templateId) || null;
}

function findDirectConversationWith(humanId) {
  return state.conversations.find(
    (conversation) =>
      conversation.type === "direct" &&
      conversation.humanIds.length === 2 &&
      conversation.humanIds.includes("u-self") &&
      conversation.humanIds.includes(humanId)
  );
}

function buildRuntimeConfigFromTemplate(template, values, connectionCheck) {
  const status = connectionCheck?.status === "success" ? "connected" : "error";
  switch (template.sourceType) {
    case "local_bridge":
      return {
        model: template.defaultModel,
        bridgeUrl: values.bridgeUrl.trim(),
        pairing: maskSecret(values.pairingCode.trim()),
        status,
      };
    case "custom_api":
      return {
        model: values.model.trim(),
        endpoint: values.endpoint.trim(),
        apiKey: maskSecret(values.apiKey.trim()),
        status,
      };
    default:
      return {
        model: template.defaultModel,
        bridgeUrl: values.bridgeUrl?.trim() || "configured",
        status,
      };
  }
}

function buildGroupTitle(humanIds, botIds) {
  if (!humanIds.length && !botIds.length) return copy("新空间", "New Space", "Neuer Raum");
  if (!humanIds.length && botIds.length === 1) return `${getBot(botIds[0]).name} ${copy("空间", "Space", "Raum")}`;
  if (humanIds.length === 1 && !botIds.length) return `${getHuman(humanIds[0]).name} ${copy("群聊", "Group", "Gruppe")}`;
  return copy("新群聊", "New Group", "Neue Gruppe");
}

function buildGroupCreationSystemMessage(humanIds, botIds) {
  const humans = humanIds.map((id) => getHuman(id)?.name).filter(Boolean);
  const bots = botIds.map((id) => getBot(id)?.name).filter(Boolean);
  if (!humans.length && !bots.length) {
    return copy(
      "已创建空白空间，稍后可继续邀请成员。",
      "A new empty space was created. You can invite members later.",
      "Ein neuer leerer Raum wurde erstellt. Du kannst später Mitglieder einladen."
    );
  }
  if (!humans.length) {
    return copy(
      `已创建新群聊，并加入 Agent：${bots.join("、")}。`,
      `A new group was created with agents: ${bots.join(", ")}.`,
      `Eine neue Gruppe wurde mit Agents erstellt: ${bots.join(", ")}.`
    );
  }
  if (!bots.length) {
    return copy(
      `已创建新群聊，并加入成员：${humans.join("、")}。`,
      `A new group was created with people: ${humans.join(", ")}.`,
      `Eine neue Gruppe wurde mit Personen erstellt: ${humans.join(", ")}.`
    );
  }
  return copy(
    `已创建新群聊，并加入成员 ${humans.join("、")} 与 Agent ${bots.join("、")}。`,
    `A new group was created with people: ${humans.join(", ")} and agents: ${bots.join(", ")}.`,
    `Eine neue Gruppe wurde mit Personen ${humans.join(", ")} und Agents ${bots.join(", ")} erstellt.`
  );
}

function incrementBotConversationCount(botIds, delta) {
  botIds.forEach((botId) => {
    const bot = getBot(botId);
    if (bot) {
      bot.activeConversations = Math.max(0, bot.activeConversations + delta);
    }
  });
}

function toggleId(collection, id) {
  const index = collection.indexOf(id);
  if (index >= 0) {
    collection.splice(index, 1);
  } else {
    collection.push(id);
  }
}

function formatMode(mode) {
  if (mode === "mention") return copy("仅 @ 回复", "@ Only", "Nur bei @");
  if (mode === "all") return copy("全部回复", "Reply to All", "Antwortet immer");
  return copy("智能判断", "Smart", "Intelligent");
}

function shortMode(mode) {
  if (mode === "mention") return "@";
  if (mode === "all") return copy("全", "All", "Alle");
  return copy("智", "Smart", "Smart");
}

function formatBotSourceLabel(bot) {
  if (bot.sourceType === "managed") return copy("托管", "Managed", "Managed");
  if (bot.sourceType === "local_bridge") return copy("本地桥接", "Local Bridge", "Local Bridge");
  if (bot.sourceType === "custom_api") return copy("自定义 API", "Custom API", "Custom API");
  return copy("插件", "Plugin", "Plugin");
}

function formatCapabilityLabel(capability) {
  const map = {
    "自定义 reply mode": copy("自定义回复模式", "Custom reply mode", "Eigener Antwortmodus"),
    "Custom reply mode": copy("自定义回复模式", "Custom reply mode", "Eigener Antwortmodus"),
    "@群成员": copy("@ 成员", "@ members", "@ Mitglieder"),
    "Mention members": copy("@ 成员", "@ members", "@ Mitglieder"),
    "读取授权文件": copy("读取授权文件", "Read authorized files", "Freigegebene Dateien lesen"),
    "本地 memory": copy("本地记忆", "Local memory", "Lokale Memory"),
    "流式回复": copy("流式回复", "Streaming replies", "Streaming-Antworten"),
    "云端 E2E memory": copy("云端 E2E 记忆", "E2E cloud memory", "E2E-Cloud-Memory"),
  };
  return map[capability] || capability;
}

function formatSourceTypeLabel(sourceType) {
  if (sourceType === "managed") return copy("托管", "Managed", "Managed");
  if (sourceType === "local_bridge") return copy("本地桥接", "Local Bridge", "Local Bridge");
  if (sourceType === "custom_api") return copy("自定义 API", "Custom API", "Custom API");
  return copy("插件", "Plugin", "Plugin");
}

function formatBotRuntimeSummary(bot) {
  if (bot.sourceType === "managed") {
    return `${bot.sourceLabel} · ${bot.packageTier} · ${bot.monthlyPrice}`;
  }
  return `${bot.sourceLabel} · ${copy("外部运行时", "external runtime", "externes Runtime")}`;
}

function formatRuntimeConfig(runtimeConfig) {
  return Object.values(runtimeConfig)
    .filter(Boolean)
    .join(" · ");
}

function getDefaultPaymentMethod() {
  return state.billing.paymentMethods.find((item) => item.isDefault) || null;
}

function simulateRuntimeCheck(template, values) {
  const normalizedValues = Object.fromEntries(
    Object.entries(values).map(([key, value]) => [key, String(value || "").trim()])
  );
  const joined = Object.values(normalizedValues).join(" ").toLowerCase();
  const hasOfflineMarker =
    joined.includes("offline") ||
    joined.includes("fail") ||
    joined.includes("401") ||
    joined.includes("invalid");

  let status = "success";
  let message = copy(
    `${template.name} 已返回 manifest，可继续接入。`,
    `${template.name} manifest is reachable.`,
    `${template.name} Manifest ist erreichbar.`
  );

  if (template.sourceType === "local_bridge") {
    if (!normalizedValues.bridgeUrl.startsWith("https://")) {
      status = "error";
      message = copy("Bridge URL 必须是 https 地址。", "Bridge URL must use https.", "Die Bridge-URL muss https verwenden.");
    } else if (normalizedValues.pairingCode.length < 6 || hasOfflineMarker) {
      status = "error";
      message = copy(
        "本地 bridge 配对失败。",
        "Local bridge pairing failed.",
        "Local-Bridge-Kopplung fehlgeschlagen."
      );
    } else {
      message = copy(
        "Local Bridge 可达，配对完成。",
        "Local bridge is reachable.",
        "Local Bridge ist erreichbar."
      );
    }
  } else if (template.sourceType === "custom_api") {
    if (!normalizedValues.endpoint.startsWith("https://")) {
      status = "error";
      message = copy("API endpoint 必须是 https 地址。", "API endpoint must use https.", "API-Endpunkt muss https verwenden.");
    } else if (!normalizedValues.apiKey || hasOfflineMarker) {
      status = "error";
      message = copy("API 鉴权失败。", "API authentication failed.", "API-Authentifizierung fehlgeschlagen.");
    } else {
      message = copy("API endpoint 可达。", "API endpoint is reachable.", "API-Endpunkt ist erreichbar.");
    }
  } else if (hasOfflineMarker) {
    status = "error";
    message = copy("插件 bridge 鉴权失败。", "Plugin bridge authentication failed.", "Plugin-Bridge-Authentifizierung fehlgeschlagen.");
  } else {
    message = copy("插件 bridge 可达。", "Plugin bridge is reachable.", "Plugin Bridge ist erreichbar.");
  }

  return {
    status,
    message,
    capabilities: template.capabilities,
    lastCheckedAt: `${copy("今天", "Today", "Heute")} ${currentTime()}`,
    latency: status === "success" ? `${40 + Math.floor(Math.random() * 120)} ms` : "—",
  };
}

function getBotReplyFailure(bot) {
  if (!bot) return copy("Agent 不存在，无法继续回复。", "Agent no longer exists.", "Agent existiert nicht mehr.");
  if (bot.sourceType === "managed") {
    if (bot.runtimeConfig.status !== "active") {
      return copy("托管运行时当前不可用。", "Managed runtime is unavailable.", "Managed Runtime ist nicht verfügbar.");
    }
    return null;
  }

  if (bot.runtimeConfig.status !== "connected") {
    return bot.runtimeCheck?.message || copy(
      `${bot.name} 当前没有连上 runtime。`,
      `${bot.name} is not connected to its runtime.`,
      `${bot.name} ist nicht mit seinem Runtime verbunden.`
    );
  }

  return null;
}

function getFileUploadFailure(bot, fileLike) {
  if (!bot) return copy("Agent 已不存在。", "Agent no longer exists.", "Agent existiert nicht mehr.");
  if (bot.sourceType !== "managed" && bot.runtimeConfig.status !== "connected") {
    return copy("当前 runtime 未连通。", "Runtime is offline.", "Runtime ist offline.");
  }
  if (bot.sourceType === "plugin" && fileLike.sizeBytes > 5 * 1024 * 1024) {
    return copy("插件型 Agent 当前只接受 5 MB 以内的文件。", "Plugin agents accept files up to 5 MB.", "Plugin-Agents akzeptieren Dateien bis 5 MB.");
  }
  if (fileLike.name.toLowerCase().includes("fail")) {
    return copy("文件解析失败。", "File parsing failed.", "Datei konnte nicht verarbeitet werden.");
  }
  return null;
}

function formatRuntimeStatus(status) {
  const zh = {
    idle: "未检测",
    testing: "检测中",
    success: "已连接",
    error: "连接失败",
    connected: "已连接",
    active: "运行中",
    ready: "可用",
    missing: "缺失",
  };
  const en = {
    idle: "Not checked",
    testing: "Checking",
    success: "Connected",
    error: "Failed",
    connected: "Connected",
    active: "Active",
    ready: "Ready",
    missing: "Missing",
  };
  const de = {
    idle: "Nicht geprüft",
    testing: "Prüfung läuft",
    success: "Verbunden",
    error: "Fehlgeschlagen",
    connected: "Verbunden",
    active: "Aktiv",
    ready: "Bereit",
    missing: "Fehlt",
  };
  const map = state.locale === "en-US" ? en : state.locale === "de-DE" ? de : zh;
  return map[status] || status;
}

function formatRelationshipStatus(status) {
  const zh = {
    friend: "已是好友",
    incoming: "对方向你发起请求",
    outgoing: "等待对方通过",
    available: "可发起好友请求",
  };
  const en = {
    friend: "Already connected",
    incoming: "Incoming request",
    outgoing: "Waiting for approval",
    available: "Available to add",
  };
  const de = {
    friend: "Schon verbunden",
    incoming: "Eingehende Anfrage",
    outgoing: "Wartet auf Bestätigung",
    available: "Kann hinzugefügt werden",
  };
  const map = state.locale === "en-US" ? en : state.locale === "de-DE" ? de : zh;
  return map[status];
}

function formatFileStatus(status) {
  const zh = { uploading: "上传中", parsing: "解析中", synced: "已同步", failed: "失败" };
  const en = { uploading: "Uploading", parsing: "Parsing", synced: "Synced", failed: "Failed" };
  const de = { uploading: "Upload läuft", parsing: "Wird analysiert", synced: "Synchronisiert", failed: "Fehler" };
  const map = state.locale === "en-US" ? en : state.locale === "de-DE" ? de : zh;
  return map[status] || status;
}

function formatManagedSubscription(bot) {
  if (bot.subscriptionStatus === "scheduled_cancel") {
    if (state.locale === "en-US") {
      return `${bot.packageTier} · ${bot.monthlyPrice} · ends on ${bot.renewalDate}`;
    }
    if (state.locale === "de-DE") {
      return `${bot.packageTier} · ${bot.monthlyPrice} · endet am ${bot.renewalDate}`;
    }
    return `${bot.packageTier} · ${bot.monthlyPrice} · 将于 ${bot.renewalDate} 停止续费`;
  }
  if (state.locale === "en-US") {
    return `${bot.packageTier} · ${bot.monthlyPrice} · renews ${bot.renewalDate}`;
  }
  if (state.locale === "de-DE") {
    return `${bot.packageTier} · ${bot.monthlyPrice} · Verlängerung ${bot.renewalDate}`;
  }
  return `${bot.packageTier} · ${bot.monthlyPrice} · 下次续费 ${bot.renewalDate}`;
}

function formatPaymentStatus(status) {
  const zh = { ready: "可用", expired: "已过期", missing: "未配置" };
  const en = { ready: "Ready", expired: "Expired", missing: "Missing" };
  const de = { ready: "Bereit", expired: "Abgelaufen", missing: "Fehlt" };
  const map = state.locale === "en-US" ? en : state.locale === "de-DE" ? de : zh;
  return map[status] || status;
}

function formatInvoiceStatus(status) {
  const zh = { paid: "已支付", failed: "支付失败", missing: "无" };
  const en = { paid: "Paid", failed: "Failed", missing: "None" };
  const de = { paid: "Bezahlt", failed: "Fehlgeschlagen", missing: "Keine" };
  const map = state.locale === "en-US" ? en : state.locale === "de-DE" ? de : zh;
  return map[status] || status;
}

function statusClassName(status) {
  if (["success", "connected", "active", "synced", "ready", "paid"].includes(status)) {
    return "success";
  }
  if (["warning", "scheduled_cancel"].includes(status)) {
    return "warning";
  }
  if (["error", "failed", "expired", "missing"].includes(status)) {
    return "danger";
  }
  return "";
}

function getMessagePreview(message) {
  if (!message) return "";
  if (message.type === "runtime-error") return message.reason;
  return message.text || "";
}

function settingLabel(settingKey) {
  return translateSettingTitle(settingKey);
}

function translateSettingTitle(settingKey) {
  const zh = {
    notifications: "消息通知",
    biometricLock: "生物识别锁",
    cloudSync: "云端同步",
    localBridgeCellular: "Local Bridge 蜂窝网络",
  };
  const en = {
    notifications: "Notifications",
    biometricLock: "Face ID / Touch ID",
    cloudSync: "Cloud Sync",
    localBridgeCellular: "Local Bridge on Cellular",
  };
  const de = {
    notifications: "Mitteilungen",
    biometricLock: "Face ID / Touch ID",
    cloudSync: "Cloud-Synchronisierung",
    localBridgeCellular: "Local Bridge über Mobilfunk",
  };
  const map = state.locale === "en-US" ? en : state.locale === "de-DE" ? de : zh;
  return map[settingKey];
}

function translateSettingDescription(settingKey) {
  const zh = {
    notifications: "human 消息和 bot 的 @提醒",
    biometricLock: "进入 App 时做基础保护",
    cloudSync: "聊天 metadata 和托管 bot 状态跨设备同步",
    localBridgeCellular: "默认只在 Wi‑Fi 下连接本地 bridge",
  };
  const en = {
    notifications: "Human messages and @agent mentions",
    biometricLock: "Protect the app on open",
    cloudSync: "Sync chat metadata and managed agent state",
    localBridgeCellular: "Connect local bridges on Wi-Fi only by default",
  };
  const de = {
    notifications: "Nachrichten von Menschen und @agent Hinweise",
    biometricLock: "Schützt die App beim Öffnen",
    cloudSync: "Synchronisiert Chat-Metadaten und Managed-Agent-Status",
    localBridgeCellular: "Lokale Bridges standardmäßig nur über WLAN",
  };
  const map = state.locale === "en-US" ? en : state.locale === "de-DE" ? de : zh;
  return map[settingKey];
}

function formatMemberCount(kind, count) {
  if (state.locale === "zh-CN") {
    return `${count}${kind === "human" ? "人" : "个 Agent"}`;
  }
  if (state.locale === "de-DE") {
    if (kind === "human") return `${count} ${count === 1 ? "Person" : "Menschen"}`;
    return `${count} ${count === 1 ? "Agent" : "Agents"}`;
  }
  if (kind === "human") return `${count} ${count === 1 ? "human" : "humans"}`;
  return `${count} ${count === 1 ? "agent" : "agents"}`;
}

function localeShortLabel(locale) {
  return {
    "zh-CN": "中文",
    "en-US": "EN",
    "de-DE": "DE",
  }[locale];
}

function formatLocaleLabel(locale) {
  return {
    "zh-CN": "简体中文",
    "en-US": "English (US)",
    "de-DE": "Deutsch",
  }[locale];
}

function queueToast(message, icon = "i") {
  const toast = { id: ++toastSeed, message, icon };
  state.toasts = [...state.toasts, toast].slice(-3);
  render();
  setTimeout(() => {
    state.toasts = state.toasts.filter((item) => item.id !== toast.id);
    render();
  }, 2200);
}

function getChatsHomeTitle() {
  return `${PRODUCT_NAME}(${state.conversations.length})`;
}

function copy(zh, en, de) {
  return en;
}

function localizeRelativeLabel(value) {
  if (!value) return "";
  return String(value)
    .replace(/^刚刚$/, copy("刚刚", "Just now", "Gerade eben"))
    .replace(/^昨天$/, copy("昨天", "Yesterday", "Gestern"))
    .replace(/^周一$/, copy("周一", "Mon", "Mo"))
    .replace(/^今天 /, `${copy("今天", "Today", "Heute")} `);
}

function formatThinkingStage(stage) {
  if (stage === "thinking") return copy("正在思考", "is thinking", "denkt nach");
  if (stage === "reading files") return copy("正在读取文件", "is reading files", "liest Dateien");
  return stage;
}

function formatBotWhyToast(name, trigger, source) {
  return copy(
    `${name} 通过 ${trigger} 回复，来源：${source}。`,
    `${name} replied via ${trigger}. Source: ${source}.`,
    `${name} hat über ${trigger} geantwortet. Quelle: ${source}.`
  );
}

function currentTime() {
  return currentTimeFromTimestamp(Date.now());
}

function currentTimeFromTimestamp(timestamp) {
  const date = new Date(timestamp);
  return `${String(date.getHours()).padStart(2, "0")}:${String(
    date.getMinutes()
  ).padStart(2, "0")}`;
}

function currentDateLabel() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function nextRenewalDate() {
  const next = new Date();
  next.setDate(next.getDate() + 30);
  const year = next.getFullYear();
  const month = String(next.getMonth() + 1).padStart(2, "0");
  const day = String(next.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function uid(prefix) {
  return `${prefix}-${Math.random().toString(36).slice(2, 10)}`;
}

function firstGlyph(value) {
  return (value || "?").trim().charAt(0).toUpperCase() || "?";
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function maskSecret(value) {
  if (!value) return "";
  if (value.length <= 6) return "••••••";
  return `${value.slice(0, 3)}...${value.slice(-3)}`;
}

function truncate(value, max) {
  const text = String(value || "");
  return text.length > max ? `${text.slice(0, max)}…` : text;
}

function formatBytes(bytes) {
  if (bytes >= 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  if (bytes >= 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${bytes} B`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function escapeAttribute(value) {
  return escapeHtml(value).replaceAll("'", "&#39;");
}
