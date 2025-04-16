# 為什麼使用 Turborepo 同時需要使用 pnpm workspace？

## 簡介

> 這個技術分享同時發佈在 Medium：https://medium.com/%E6%89%8B%E5%AF%AB%E7%AD%86%E8%A8%98/%E7%82%BA%E4%BB%80%E9%BA%BC%E4%BD%BF%E7%94%A8-turborepo-%E5%90%8C%E6%99%82%E9%9C%80%E8%A6%81%E4%BD%BF%E7%94%A8-pnpm-workspace-9f0899c90d44

這篇文章主要想解釋的是為什麼 Turborepo 跟 pnpm workspace 一起使用的問題，在看完文章之後你可以知道 Turborepo 並沒有提供下載套件以及管理 workspace 套件的功能，真正提供 monorepo 功能的是 pnpm workspace 本上，而 Turborepo 是讓 monorepo 有更佳的開發體驗，不論是在雲端上或是本地開發上。

在文章中我們還瞭解了 pnpm 想解決的三個問題，分別是節省硬碟空間、加快安裝套件速度、解決扁平化 node_modules 的問題，因為在其軟硬連結的設計上還順便解決了幽靈依賴的問題。

Turborepo 作為 Vercel 開源的 monorepo 解決方案，解決了 workspace 在開發體驗以及速度上瓶頸，可以偵測任務的依賴關係依序執行，並且同時提供平行處理及 cache 的優化，在雲端上同樣也支援 cache 的功能。

## 在本地啟動 Slidev

執行以下指令:

- `pnpm install`
- `pnpm dev`
- visit http://localhost:3030
