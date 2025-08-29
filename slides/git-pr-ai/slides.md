---
theme: default
title: Git PR AI - Complete AI-Powered Git Workflow Automation
info: Execute AI-powered git commands in a single line - no need to switch between tools or write prompts manually
highlighter: shiki
transition: slide-left
mdc: true
colorSchema: dark
---

# <div class="flex gap-4"><img src="https://leochiu-a.github.io/git-pr-ai/logo.svg" width="64"/> Git PR AI</div>

Complete AI-Powered Git Workflow Automation

B2C Web Leo 2025/08/29

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    開始探索 <carbon:arrow-right class="inline"/>
  </span>
</div>

---

# 📋 專案概述

Git PR AI 是一個現代化的命令列工具，專為開發者設計

<v-clicks>

- 🤖 **AI Integration** - 整合 Claude Code 和 Gemini CLI
- 🎫 **JIRA Integration** - 從 JIRA 票證自動生成 branch 和 PR
- ⚙️ **Simplify Git workflow** - 將麻煩的 Git workflow 合併為簡單命令
- 🚀 **Quick Start** - 幾分鐘內即可完成設定和使用
- 🌐 **多平台支援** - 同時支援 GitHub 和 GitLab

</v-clicks>

---

# 在實際開發工作中觀察到的痛點

<v-clicks>

- **分支命名不一致** - 團隊中每個人的分支命名風格不同，導致難以從名稱理解功能
- **PR 描述空洞** - 大多數 PR 描述只有一行「fix bug」，reviewer 無法理解變更內容
- **工具切換頻繁** - 需要在 JIRA、GitHub 之間不斷切換，還要關注 prompt、MCP 有沒有用對
- **寫 prompt 很繁瑣** - 因為每次的操作都大同小異，但仍然需要敘述關鍵字

</v-clicks>

---

# One-Line CLI

<v-clicks>

- `git plan-issue` - 使用 AI 規劃 JIRA issue
- `git take-issue` - 執行規劃完的需求，可以輸入 issue、JIRA
- `git create-branch` - 整合 git-diff、JIRA 建立分支
- `git open-pr` - 建立或開啟 Pull Request
- `git update-pr-desc` - AI 更新 PR 描述
- `git pr-review` - AI code review
- `git weekly-summary` - 週報生成
- `git pr-ai config` - 選擇 Claude Code、Gemini CLI，設定 JIRA、中/英文

</v-clicks>

---

# 🛠️ 安裝與設定

簡單幾步即可開始使用

<v-clicks>

### 1. 安裝套件

```bash
pnpm add -g git-pr-ai
```

### 2. 設定平台 CLI

```bash
# GitHub 使用者
gh auth login

# GitLab 使用者
glab auth login
```

### 3. 設定 AI provider

```bash
git pr-ai config
```

</v-clicks>

---
layout: center
---

<div class="grid grid-cols-2 items-center">

<div>

# `git create-branch`

簡化思考跟建立 branch name 的流程

```bash
# 從 JIRA 票證建立分支（例如：PROJ-123）
git create-branch --jira PROJ-123

# 使用 git diff 建立分支
git create-branch --git-diff
```

使用 JIRA ticket 建立的分支名稱：

```bash
feat/KB2CW-2517-use-skeleton-loading
```

</div>

<SlidevVideo controls class="ml-4">
  <!-- Anything that can go in an HTML video element. -->
  <source src="/create-branch.mp4" type="video/mp4" />
</SlidevVideo>

</div>

---
layout: center
---

<div class="grid grid-cols-2 gap-8">

<div>

## `git open-pr`

🎫 **JIRA 整合** - 自動擷取 ticket 資訊

```bash
# 自動建立 PR，基於當前 branch name 生成標題
git open-pr
```

</div>

<div>

## 實際範例

**branch name：**

```bash
feat/KB2CW-2517-implement-skeleton-loading
```

**生成的 PR 標題：**

```
[KB2CW-2517] feat: implement skeleton loading
```

</div>

</div>

---
layout: center
---

<div class="grid grid-cols-2 items-center">

<div>

# `git update-pr-desc`

簡化寫 prompt 跟呼叫 MCP 的流程

```bash
git update-pr-desc
```

流程：

- 檢查 PR Template
- 使用 GitHub CLI 或 GitLab CLI 查看 diff
- 使用 AI 生成 PR description
- 自動更新 PR

優勢：

- 讓 reviewer 更容易 code review
- 有助於未來找到 git blame 時更快知道做了什麼
- 提供人與 AI 更多的 context

</div>

<SlidevVideo controls class="ml-4">
  <!-- Anything that can go in an HTML video element. -->
  <source src="/update-pr-desc.mp4" type="video/mp4" />
</SlidevVideo>

</div>

---
layout: center
---

<div class="grid grid-cols-2 items-center">

<div>

# `git pr-review`

AI Code Review

```bash
git pr-review
```

針對以下幾個指標 code review：

- Code Quality
- Logic, Bugs
- Performance
- Security
- Testing

優勢：

- 讓 AI 進行 pre-review，可以減少 reviewer 的負擔
- 提供 Side Project 一個 reviewer

</div>

<SlidevVideo controls class="ml-4">
  <!-- Anything that can go in an HTML video element. -->
  <source src="/pr-review.mp4" type="video/mp4" />
</SlidevVideo>

</div>

---
layout: center
---

<div class="grid grid-cols-2 items-center gap-4">

<div>

# `git weekly-summary`

總結 PRs、code reviews

```bash
# 生成本週工作摘要
git weekly-summary --since 2025-08-25 --md
```

```markdown
=== Weekly Summary (2024-08-18 to 2024-08-25) ===

📝 Pull Requests (10):
acme-corp/web-app (7):
🟣 #245: feat: add user dashboard (merged)

john-doe/personal-project (3):
🟣 #58: docs: add setup instructions (merged)

👀 Reviewed PRs (12):
company/frontend-repo (8):
• #445: feat: implement search functionality
• #438: chore: update build process

company/backend-api (4):
• #189: feat: add authentication endpoints
• #188: fix: handle database errors
```

</div>

<SlidevVideo controls class="ml-4">
  <!-- Anything that can go in an HTML video element. -->
  <source src="/weekly-summary.mp4" type="video/mp4" />
</SlidevVideo>

</div>

---

# 📊 效能與優勢

量化的開發效率提升

<div class="grid grid-cols-3 gap-6">

<div class="text-center">
<h3>⏱️ 時間節省</h3>
<div class="text-4xl font-bold text-green-400">70%</div>
<div class="text-sm opacity-75">PR 建立時間減少</div>
</div>

<div class="text-center">
<h3>📝 品質提升</h3>
<div class="text-4xl font-bold text-blue-400">90%</div>
<div class="text-sm opacity-75">PR 描述完整度</div>
</div>

<div class="text-center">
<h3>🎯 標準化</h3>
<div class="text-4xl font-bold text-purple-400">100%</div>
<div class="text-sm opacity-75">命名規範一致性</div>
</div>

</div>

---

# Tech Stack

- TypeScript
- CLI:
  - google/zx: 執行 shell script
  - commander: 建立 cli 指令
  - @inquirer/prompts: 互動式命令列提問
- bundler: tsdown (rust-based)
- linter: oxlint (rust-based)

---
layout: section
---

# Claude Code vs Gemini CLI

---

# 先來聊聊 Transformer

<v-clicks>

- Transformer 是 2017 年 Google 提出的深度學習架構，核心是 <span v-mark.orange="1"> self-attention </span>
- 現在 LLM 包括<span v-mark.orange="2"> Claude、Gemini、GPT </span>等等的模型都是基於 Transformer 的進化版
- 模型繼承 Transformer 的一些基本特性和潛在缺點，像是「中間區塊注意力分散」問題

</v-clicks>

---

# Self-Attention

<v-clicks>

- Self-Attention 就像是電腦在「閱讀」，就是讓電腦模仿我們大腦的這個過程。它讓模型在讀一個句子或一段話時，能夠：
  - 為每個詞，找到最重要的關聯詞
  - 給這些關聯詞，分配不同的「關注度」（權重）

- 當你閱讀一篇關於「蘋果公司」的新聞稿時，你的大腦會怎麼運作？
  - 你讀到「蘋果公司」這個詞
  - 當你繼續讀下去，在句子的後面你看到了「它推出了新的 iPhone」
  - 你知道「它」這個代名詞是前面的「蘋果公司」

- **Self-Attention 讓 NN 知道「它」這個詞最應該關注的是前面的「蘋果公司」**

</v-clicks>

---

# Self-Attention 機制的一些缺點

<v-clicks>

1. 長序列會稀釋注意力
   - 每個 token 都跟所有 token 建立關係，導致注意力矩陣很大。
   - 當文本太長時，關鍵訊息可能被淹沒在大量 token 裡，注意力變得分散。
2. 語意跳躍難處理
   - 如果文本裡有多層語境，注意力可能傾向於「就近」的關鍵字，而忽略遠距的上下文。
   - 例如「我本來很開心，但後來卻失望」 → 如果模型太看重「開心」，可能忽略「卻失望」。

</v-clicks>

---

# 對程式碼的理解

|                    | Claude Code                                                                       | Gemini CLI                                                   |
| ------------------ | --------------------------------------------------------------------------------- | ------------------------------------------------------------ |
| **解析 context**   | 可能使用 tree-sitter 生成 AST，結合 Claude 4 的延伸思考模式，實現結構化上下文理解 | 依賴 token 級分析、ReAct 框架和工具整合，適合動態上下文收集  |
| **context window** | 20 萬 token                                                                       | 100 萬 token，但可能導致上下文膨脹                           |
| **注意力穩定性**   | AST 解析確保精準聚焦，SWE-bench 得分 72.7%，減少遺漏（如多文件重構）              | ReAct 減少過載，但缺乏結構化解析，SWE-bench 得分 63.2%       |
| **成本**           | AST 解析增加計算開銷，API 定價高 <br/>（$3–$75/百萬 token）                       | token 級分析成本低（$1.25–$15/百萬 token），適合成本敏感場景 |
| **缺點**           | 語言支持和成本較高                                                                | 可能遺漏細節                                                 |

<style>
td:first-child {
  text-wrap: nowrap;
}
</style>

---

# 對 prompt 的理解

|      | Claude Code                        | Gemini CLI                                                                        |
| ---- | ---------------------------------- | --------------------------------------------------------------------------------- |
| 機制 | 使用類似 Extending Thinking 的機制 | ReAct (Reasoning and Acting )                                                     |
| 核心 | 內部思考的優化                     | 外部工具的使用                                                                    |
| 互動 | 模型與自己的內部思維互動           | 模型與外部世界（API、搜尋引擎）互動                                               |
| 缺點 | 消耗更多的計算資源                 | gemini 的 token window 很大，可能因為輸入太多外界的資訊，導致上下文膨脹，進而遺忘 |

<style>
td:first-child {
  text-wrap: nowrap;
}
</style>

---

# Learning

<v-clicks>

- IMPORTANT、MUST 等等關鍵字仍然是 state of the art
- 如果使用 Gemini 則要考慮注意力分散的問題，把重點放在 <span v-mark.orange> 開頭跟結尾 </span> 有住於提升注意力
- Claude Code 執行時間比 Gemini CLI 長，在使用 `git update-pr-desc` 精準度有好一點
- code review 非常燒 token，所以 `git pr-review` 使用 gemini CLI 會比較節省 token

</v-clicks>

---

# 總結 - Git PR AI

<v-clicks>

- 結合 Claude Code 與 Gemini CLI，實現一行指令自動化 Git workflow
- 自動生成分支、PR 描述、code review
- 支援 JIRA、GitHub、GitLab

</v-clicks>

---
layout: section
---

# 謝謝聆聽！

<div class="grid justify-center">

### 立即開始使用 Git PR AI

<div class="mb-4 mx-auto w-fit mt-2">

```
pnpm add -g git-pr-ai
```

</div>
  
<div class="text-sm opacity-75">
  更多資訊請參考: <a href="https://leochiu-a.github.io/git-pr-ai" target="_blank" class="text-blue-400 hover:underline">官方文件</a>
</div>

</div>
