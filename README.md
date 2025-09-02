# 技術分享簡報集

這個 repository 收錄了我過去在不同時間點所做的技術分享簡報，希望透過這些內容能對開發者有所幫助，也紀錄自己一路上的學習與成長。

🔗 **線上預覽連結**： [leochiu-a.github.io/tech-sharing-slides](https://leochiu-a.github.io/tech-sharing-slides/)

## 📂 簡報主題一覽

### 最新簡報
- [**Git PR AI**](https://leochiu-a.github.io/tech-sharing-slides/git-pr-ai/1) (2025/08/29)  
  Complete AI-Powered Git Workflow Automation - 使用 AI 自動化完整的 Git 工作流程

### 歷史簡報
- [**Web Vitals in Next.js**](https://leochiu-a.github.io/tech-sharing-slides/how-to-optimize-web-vital-in-nextjs/1)  
  從 Next.js 的角度了解如何優化 Core Web Vitals
- [**pnpm & Turborepo**](https://leochiu-a.github.io/tech-sharing-slides/pnpm-workspace-and-turborepo/1)  
  使用 pnpm workspace 跟 Turborepo 管理 monorepo
- [**TypeScript Workshop**](https://leochiu-a.github.io/tech-sharing-slides/typescript-workshop/)  
  入門 TypeScript 的 workshop 簡報

## 🛠 技術架構

### 簡報引擎
- **Slidev** - 基於 Vue 3 的簡報框架
- **Markdown** - 簡報內容編寫

### 專案管理
- **pnpm workspace** - Monorepo 管理
- **GitHub Pages** - 自動部署

### 開發工具
- **Vue 3 + TypeScript** - slide-decks 應用程式
- **Tailwind CSS** - 樣式框架
- **Vite** - 建置工具
- **ESLint + Prettier** - 程式碼品質管理

## 🏗 專案結構

```
tech-sharing-slides/
├── slides/                    # 各個簡報資料夾
│   ├── git-pr-ai/            # Git PR AI 簡報
│   ├── how-to-optimize-web-vital-in-nextjs/
│   ├── pnpm-workspace-and-turborepo/
│   └── typescript-workshop/
├── slide-decks/              # 簡報總覽應用程式
│   ├── src/                  # Vue 3 應用程式原始碼
│   └── package.json
└── pnpm-workspace.yaml       # workspace 配置
```

## 🚀 本地開發

```bash
# 安裝依賴
pnpm install

# 開發簡報總覽頁面
cd slide-decks
pnpm dev

# 開發特定簡報（例如 git-pr-ai）
cd slides/git-pr-ai
pnpm dev
```
