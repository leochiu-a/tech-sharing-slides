---
theme: seriph
background: https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1200&h=800
class: claude-deck
mdc: true
---

# Claude Code
## AI CLI 工具革新開發流程

---
layout: center
---

# 核心理念

> 使用 Claude Code 最核心的理念是**提升效率**
> 不一定要用到最強工作流

- 不一定適合你
- 不一定穩定
- 不一定要追求最新技術

**避免焦慮** ⚠️

---
layout: center
---

# Claude Code 的角色

> **不是去寫，而是陪你去想**

Claude Code 與其說是程式碼生成工具，不如說是開發思路的夥伴

---
layout: center
---

# Claude Code 心法

把 Claude Code 當成 CLI 裡的共同作業夥伴，掌握以下三個心法：

### 1. 效率優先
- 先說清楚要交付什麼，再交給 AI 協助執行
- 小步快跑 + 驗證，保持可控
- 把重複步驟寫成腳本或 slash 指令

### 2. 情境契合
- 把團隊守則、資料庫與測試規範寫進 `CLAUDE.md`
- 不同專案／repo 使用不同技能與記憶
- 明確告訴 Claude 什麼可以、什麼不能自動做

### 3. 穩定心態
- Plan Mode 是安全網，先規劃再執行
- 大型需求拆成多個 plan，方便對外溝通
- 遇到焦慮或不確定時，回到唯讀規劃重新整理

---

# 課程大綱

1. Claude Code 簡介
2. 基礎使用
3. Plan Mode
4. 模型比較
5. MCP (Model Context Protocol)
6. 進階功能：Skills、Subagent、Slash Command

---

# 什麼是 Claude Code？

Claude Code 是 Anthropic 推出的 **AI CLI 工具**，專為自動化開發工作流程設計。

它能夠：

- **理解程式碼庫結構**：深入分析專案架構
- **自主執行任務**：包括檔案編輯、命令執行、測試運行
- **長時間自主運行**：可持續工作數個小時處理複雜的多步驟任務
- **AI 協作**：透過自然語言指令與開發者互動

---

# Claude Code = CLI + AI

Claude Code 透過 AI 整合 Linux 指令做到自動化寫程式的功能

內部包含很多 CLI 相關的指令：
- 文件操作：ls、cat、cd、pwd…
- 文字處理：ripgrep、find、sed…
- 許多 Linux 的指令

就像給 AI 配備了一套完整的工具箱

---

# 業界案例

## Rakuten 的成績

**減少 79% 開發新功能的時間**

- 原本：24 天
- 現在：5 天

---

# 安裝 Claude Code

### Homebrew (macOS, Linux)
```bash
brew install --cask claude-code
```

### macOS, Linux, WSL
```bash
curl -fsSL https://claude.ai/install.sh | bash
```

### Windows PowerShell
```powershell
irm https://claude.ai/install.ps1 | iex
```

### Windows CMD
```cmd
curl -fsSL https://claude.ai/install.cmd -o install.cmd && install.cmd && del install.cmd
```

---

# 開箱 Claude Code

```bash
$ claude

範例：
幫我實作登入驗證的功能，需要呼叫 `/api/auth`，
傳入 username 跟 password，並封裝成 useAuthUser
```

就這麼簡單！

---

# Claude Code 的三種模式

1. **手動模式**（預設）
   - 每次操作都需要確認
   - 最安全，最可控

2. **Auto-accept**
   - 自動化執行 Claude 的建議
   - 適合已信任的任務

3. **Plan Mode** ⭐
   - 只規劃不執行
   - 核心功能之一

---

# Plan Mode 是什麼？

Plan Mode 是 Claude Code 的**核心功能**，將**規劃與執行階段分離**。

它讓 Claude 進入「唯讀」模式：
- ✅ 只能研究和規劃
- ❌ 不能執行任何變更

底部狀態列會顯示：`Plan Mode`

---

# Plan Mode 啟動方式

### 方法 1：快捷鍵
```
Shift + Tab (按兩次)
```

### 方法 2：自訂 Slash 命令
```
/plan

# 在 .claude/plan.md 中建立規劃提示詞
```

---

# Plan Mode vs 傳統提示詞

| 面向 | Plan Mode | 傳統提示詞 |
|------|-----------|-----------|
| 變更防護 | 工具層級唯讀，需你批准才能寫檔 | 完全自由，容易不小心覆寫 |
| 專案透明度 | 輸出步驟、估時、風險，方便溝通 | 回應與決策混在一起，難以複述 |
| 速度與流暢 | 多一步「規劃 → 執行」，速度稍慢 | 想到就輸入，適合快速試錯 |
| 使用情境 | 高風險 refactor、多人協作、需要過稿 | 小改動、原型、個人試驗 |

---

# 常用指令 - `/init`

新增 `CLAUDE.md`，可以用來撰寫 **Project Context**：

```markdown
# Project Context

## Architecture
- Vue frontend with TypeScript
- Node.js backend with Express
- MongoDB database with Mongoose ODM

## Conventions
- Use PascalCase for component files
- All API routes start with /api/v1/
- Test files end with .test.ts

## Dependencies
@components/ui/Button.tsx
@utils/validation.ts
```

---

# 常用指令 - `/model`

用來**切換模型**，每個模型的特性不一樣，選擇合適的模型可以事半功倍：

- **Sonnet 4.5**：目前最好用的模型，價格跟速度都很不錯
- **Opus**：跑分最強模型，但價格昂貴以及速度很慢
- **Haiku 4.5**：跑分略遜 Sonnet 4.5，速度快 1 倍，價格是 1/3

---

# 常用指令 - `/memory`

讓 Claude Code 可以**記得一些重要的 context**：

- **User memory**：儲存在 `~/.claude/CLAUDE.md`
- **Project memory**：在 `./CLAUDE.md`

持久化保存提示詞和背景資訊

---

# 其他常用指令

| 指令 | 功能 |
|------|------|
| `/resume` | 重新回到某個 checkpoint，例如關掉 Claude Code 之後，下次開啟時想回到上次執行的時候 |
| `/clear` | 覺得目前的 context 髒掉了，想要重置 context，讓 Claude Code 可以專心在任務上 |

---

# Dynamic Imports

想要在執行的時候指定檔案，可以用 `@path/to/file`：

```
@src/components/Button.tsx
@utils/api.ts
@types/index.ts
```

在使用這個指令的時候會有 **auto complete**，可以讓 Claude Code 更快找指定的檔案。

---

# 模型比較

| 模型 | 定位 | 速度 | 推理能力 | 成本 | 最適合的任務 |
|------|------|------|--------|------|-----------|
| **Haiku 4.5** | 輕量級 | ⚡⚡⚡ | ⭐⭐⭐ | 💰 | 快速原型、UI 建構 |
| **Sonnet 4.5** | 平衡型 | ⚡⚡ | ⭐⭐⭐⭐ | 💰💰 | 日常開發（推薦）|
| **Opus 4.1** | 深度思考 | ⚡ | ⭐⭐⭐⭐⭐ | 💰💰💰💰💰 | 複雜推理、架構審查 |

---

# 如何選擇模型？

## 快速原型 & UI 建構
→ **Haiku 4.5**

## 日常開發任務
→ **Sonnet 4.5** ⭐ **推薦**

## 複雜推理 & 架構審查
→ **Opus 4.1**

---

# MCP 是什麼？

Model Context Protocol（MCP）是 Anthropic 在 2024 年釋出的協定，讓 Claude 這類模型以統一語言連接工具與資料來源，像插上 USB-C 一樣。

- JSON-RPC + 權限宣告，模型只會呼叫被授權的資源
- Server 可部署在本地或雲端；封裝一次就能給所有支援 MCP 的模型使用
- 讓「研究 → 執行 → 回報」不再依賴 ad-hoc API，流程更可控

---

# MCP Server 範例

| 類型 | 能力 | 常見情境 |
|------|------|---------|
| **Figma Server** | 讀取 frame、樣式與註解 | 將最新設計轉成 UI 程式碼 |
| **GitHub Server** | 讀寫 Issue / PR、觸發 workflow | 更新 PR 描述、整理 reviewer 筆記 |
| **Marketplace** | 社群維護的 server 目錄 | 快速接上 DB、雲服務、PM 工具 |
| **Internal Server** | 自建 API / CI/CD 封裝 | 控管權限、封裝公司流程 |

連接流程：
1. **Discover**：Claude 讀取 server 提供的工具清單。
2. **Authorize**：你選擇要開啟的功能與資料範圍。
3. **Invoke**：在對話中下指令，Claude 透過 MCP 呼叫 server 並回傳結果。

---


---

# 為什麼需要 MCP？

- **各家 AI 平台工具接口不同**，整合困難
- **MCP 統一標準**，簡化模型與外部資源互動
- 讓模型像「**USB 接口**」一樣連接各種服務

---

# Figma MCP Server

Figma MCP server 是官方的工具，幫助開發者：

- 快速、準確地將 Figma 設計轉為程式碼
- 提供 AI agents 設計上下文

讓設計到開發的流程自動化 🎨→💻

---

# GitHub MCP Server

GitHub MCP Server 能將 AI 工具直接連接到 GitHub 平台。

使得 AI agent、AI 助理和聊天機器人能夠：
- 讀取 Repository 與程式碼
- 管理 Issue 與 Pull Request
- 分析程式碼
- 自動化工作流程

```bash
$ claude

請使用 GitHub MCP 幫我更新 PR description
```

---

# MCP 生態

現在有非常多的 MCP Server 可以選擇：

- 數據庫連接 (PostgreSQL, MongoDB)
- 雲服務 (AWS, Google Cloud)
- 開發工具 (GitHub, GitLab)
- 設計工具 (Figma, Sketch)
- 溝通工具 (Slack, Discord)
- 還有更多...

---

# Claude Code 的競品

- **OpenAI Codex CLI**：使用 GPT 模型
- **Gemini CLI**：使用 Gemini 模型
- **Cursor CLI**：Claude、OpenAI、Gemini、Grok 等等模型都可以接

---

# 進階功能 - Subagents

建立和使用**專門的 AI Subagent**，用於特定任務的工作流程

```bash
$ claude --agents '{
  "code-reviewer": {
    "description": "專業程式碼審查員。在程式碼變更後主動使用。",
    "prompt": "您是一位資深程式碼審查員。專注於程式碼品質、安全性和最佳實務。",
    "tools": ["Read", "Grep", "Glob", "Bash"],
    "model": "sonnet"
  }
}'
```

例如：frontend agent、backend agent、code review agent

---

# 進階功能 - Skills

特定工作流程擴展 Claude 的功能

```bash
$ code .claude/skills/python-pptx-skill/SKILL.md

# 該 skill 可以包含：
- 使用 python-pptx 的技術細節
- 如何設置投影片版面
- 字體大小、對齊的最佳實踐
- 如何處理圖表和圖片
```

---

# 進階功能 - Slash Commands

可以建立自己常用的 commands：

```bash
/generate-component
/test-coverage
/refactor-code
/document-api
```

提高工作流程的效率

---

# 進階功能 - Plugins

可以用來外掛別人寫好的：
- Subagents
- Skills
- Commands

社區貢獻 ✨

---

# 配置文件

## CLAUDE.md
全局或項目級別的配置和上下文

```markdown
# Project Context
## Architecture
...
## Dependencies
...
```

---

# 配置文件

## AGENTS.md
定義專案使用的 Subagents

```markdown
# Agents Configuration
...
```

---

# 優秀資源

### GitHub 上的 Awesome 清單
https://github.com/hesreallyhim/awesome-claude-code

### Claude Code 基礎架構示例
https://github.com/diet103/claude-code-infrastructure-showcase

如果對於 Claude Code 在專案中的基本架構有興趣可以參考此 repo

---

# 優秀資源

### Codex Skills 目錄
https://github.com/skills-directory/skill-codex

讓 Claude Code 可以學習 Codex skills，用 Claude Code 成為中控，可以呼叫 Codex。

**這個 skill 不依賴 MCP，而是直接呼叫 Codex CLI**

---
layout: center
---

# 總結

## Claude Code 的三個關鍵點

1. **提升效率**：專注於自動化和工作流程
2. **規劃優先**：Plan Mode 讓你先想清楚再執行
3. **生態完善**：MCP、Subagents、Skills 形成強大生態

---
layout: center
---

# 謝謝

準備好用 AI 提升你的開發效率了嗎？

```bash
$ claude
```

---

<style>
:root {
  --claude-bg: #020212;
  --claude-gridline: rgba(255, 255, 255, 0.05);
  --claude-accent-rgb: 138, 245, 255;
}

:global(body) {
  background: var(--claude-bg);
  color: #f8faff;
}

:global(.slidev-layout) {
  position: relative;
  min-height: 100%;
  padding: clamp(18px, 4vw, 48px);
  display: flex;
  justify-content: center;
  align-items: stretch;
  overflow: hidden;
}

:global(.slidev-layout) > * {
  max-height: calc(100vh - clamp(36px, 8vw, 96px));
  width: min(1120px, 92vw);
  overflow: auto;
  padding: clamp(16px, 3vw, 32px);
  border-radius: 28px;
  border: 1px solid rgba(var(--claude-accent-rgb), 0.18);
  backdrop-filter: blur(6px);
}

:global(.slidev-layout)::before {
  content: '';
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 15% 15%, rgba(108, 255, 243, 0.18), transparent 45%),
    radial-gradient(circle at 85% 10%, rgba(130, 170, 255, 0.2), transparent 40%),
    repeating-linear-gradient(90deg, transparent, transparent 42px, var(--claude-gridline) 42px, var(--claude-gridline) 44px),
    repeating-linear-gradient(0deg, transparent, transparent 42px, var(--claude-gridline) 42px, var(--claude-gridline) 44px);
  opacity: 0.6;
  filter: blur(0.2px);
  pointer-events: none;
  z-index: -1;
}

.claude-deck h1,
.claude-deck h2,
.claude-deck h3 {
  background: linear-gradient(120deg, #fdfbff 0%, rgba(var(--claude-accent-rgb), 0.65) 60%);
  -webkit-background-clip: text;
  color: transparent;
}

.claude-deck blockquote {
  border-left: 4px solid rgba(var(--claude-accent-rgb), 0.6);
  background: rgba(255, 255, 255, 0.03);
  padding: 16px 24px;
  border-radius: 16px;
}

.claude-deck ul li::marker,
.claude-deck ol li::marker {
  color: rgba(var(--claude-accent-rgb), 0.9);
}

.claude-deck code {
  background: rgba(255, 255, 255, 0.04);
  border-radius: 6px;
  padding: 2px 6px;
}

.claude-deck pre code {
  display: block;
  padding: 16px;
  border: 1px solid rgba(var(--claude-accent-rgb), 0.3);
  border-radius: 18px;
  box-shadow: inset 0 0 24px rgba(var(--claude-accent-rgb), 0.12);
}

</style>
