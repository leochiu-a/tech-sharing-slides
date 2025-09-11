---
theme: dracula
class: text-center
lineNumbers: false
transition: slide-left
title: 使用 pnpm workspace 跟 Tuborepo 管理 monorepo
mdc: true
routerMode: hash
---

# 使用 pnpm workspace 跟 Tuborepo 管理 monorepo

Leo Chiu 2023/12/26


---
transition: fade-out
---

# Outline

- 前言
- pnpm 簡介
- Turborepo 簡介
- 是否要選擇 pnpm？
- 是否要選擇 Turborepo？
- 總結

---

# 前言

最近關注到一個 GitHub 專案 TypeHero，這個專案中同時有 `pnpm-workspace.yaml` 跟 `turbo.json`，於事冒出了兩個問題：

- 不能只用 Turburepo 作為 monorepo 的解決方案嗎？
- 為什麼有了 pnpm workspace 還需要 Turborepo？

---
transition: slide-up
layout: two-cols
---

# 誰在使用 pnpm

<v-clicks>

- Vue (pnpm workspace)
- Nuxt (pnpm workspace)
- Next.js (pnpm workspace + turbo)
- Svelte (pnpm workspace)
- Solid (pnpm workspace + turbo)
- Astro (pnpm workspace + turbo)
- Qwik (pnpm workspace)
- Vite (pnpm workspace)
- Turbo (pnpm workspace + turbo)

</v-clicks>

<v-click>

**不就是現在前端主流的框架跟套件都在用 pnpm 了嗎!!**

</v-click>

---
transition: slide-up
---

# 為什麼許多開源專案都願意使用 pnpm 作為 package manager 呢？

這就要了解 pnpm 解決的三個問題：

<v-clicks>

1. 節省硬碟空間
2. 加快安裝套件速度
3. 解決扁平化 node_modules 的問題

</v-clicks>


---
transition: slide-up
---

# pnpm 怎麼節省硬碟空間

<v-clicks>

- pnpm 會使用 **硬連結 (hard link)** 將相同版本的套件放到了全域的空間，所以當 A 跟 B 專案都使用了同版本的套件時，就會使用 hard link 存取共同的套件。
- 如果使用了不同版本的套件時， `pnpm update` 會只把有更動的檔案放到該專案的資料夾中，所以如果該套件有 100 個檔案，而變動的只有 1 個檔案，則只會有一個檔案會被放到該專案的資料夾。

</v-clicks>

<v-click>

![](/images/saving-disk-space.svg)

</v-click>

---
transition: slide-up
---

# 加快安裝套件速度

pnpm 會平行化處理分析**套件、下載、鏈結套件**三個流程，而且因為有 **hard link 跟 soft link** 的關係，所以在處理共用套件時就會因為鏈結的關係重複利用。

![](/images/pnpm-download.svg)

---
transition: slide-up
---

# 扁平化 node_modules 是什麼？

- npm 2 (2015 年以前) 用巢狀的方式儲存 `node_modules` 的結構
- npm 3 ~ npm 10 (2015 年以後) 跟現在的 yarn 都是用攤平的方式解決**巢狀地獄**的問題

![](/images/npm2-npm3.png){width=500px}

---
transition: slide-up
---


# 扁平化 node_modules 會有什麼問題

- 會有幽靈依賴 (phantom dependencies) 的問題
- 攤平套件的演算法非常複雜，意味著需要花費大量時間在計算上

<v-click>

**幽靈依賴**

`package.json`：

```json
{
  "dependencies": {
    "minimatch": "^3.0.4"
  },
  "devDependencies": {
    "rimraf": "^2.6.2"
  }
}
```

`index.js`:

```javascript
import lodash from 'lodash'
```

</v-click>

---
transition: slide-up
---

# pnpm 如何解決扁平化 node_modules 的問題

<div grid="~ cols-[1fr_auto] gap-10">

<div>

以下是 `pnpm add express` 的結果，在 `node_modules` 只會看到 `express` 這個套件：

```
node_modules/
  .pnpm
  .modules.yaml
  express
```

<v-click>

而 `express` 是一個 **軟連結（soft link）**，真的檔案會讓在 `.pnpm` 裡面，而 `.pnpm` 裡面存放的套件又會再被使用 **硬連結 (hard link)** 到全域的空間。

</v-click>

<v-click>

會讓上述的幽靈依賴失效的可能性：

- `node-linker=hoisted`
- `shamefully-hoist=true`


</v-click>

</div>

<div>

![](/images/pnpm-add-express-example.svg)
</div>

</div>

---
transition: slide-up
---

# pnpm workspace

- pnpm 有原生支援 monorepo 的能力
- 使用 `pnpm-workspace.yaml` 定義不同的 monorepo

```yaml
packages:
  # all packages in direct subdirs of packages/
  - 'packages/*'
  # all packages in subdirs of components/
  - 'components/**'
  # exclude packages that are inside test directories
  - '!**/test/**'
```

- workspace protocol(workspace:)

```json
{
	"dependencies": {
		"foo": "workspace:*",
		"bar": "workspace:~",
		"qar": "workspace:^",
		"zoo": "workspace:^1.5.0"
	}
}
```


---
transition: slide-up
layout: center
---

# **其實 npm, yarn, pnpm 原生都已經有 workspace**

---
transition: slide-up
---

# Next.js migrate 至 pnpm 的原因

<v-clicks>

- 在 2022/05 的時候 PR#37259 從 yarn 轉移到了 pnpm
- 原因是使用 pnpm 幫助他們 **降低了下載套件的大小**
- 並且找到了一些 **幽靈依賴**
- 在 CI 上安裝套件的速度從 **4 分降低到了 2 分鐘**

</v-clicks>

---

# 小結

<v-clicks>

- pnpm 解決了三個問題：
  - 節省硬碟空間
  - 加快安裝套件速度
  - 解決扁平化 node_modules 的問題
- pnpm 原生提供 workspace(monorepo) 的能力
- 現在有許多開源專案都使用了 pnpm 跟 pnpm workspace

</v-clicks>

---
transition: slide-up
---

# Turborepo 簡介

<v-clicks>

Turborepo 是 Vercel 基於 Golang 開源的 monorepo 解決方案，其核心理念是想要**解決 monorepo 擴展的問題**。

Monorepo 會有 **test、lint、build** 等等不同任務，隨著軟體的增長，這些任務也會隨之增加。

Turborepo 可以幫助我們很好的管理建構流程，透過已經在 `package.json` 中寫好的 scripts 與 `turbo.json` 就可以管理 CI 以及任務相依及順序，以及使用 cache 讓加快 CI 的速度。

![](/images/why-turborepo-solution.webp){width=500px}

</v-clicks>

---
transition: slide-up
layout: center
---

# Turborepo 沒有解決的問題是什麼？

---
transition: slide-up
layout: center
---

# **Package installation 以及 workspace**

---
transition: slide-up
---

# Package installation

- **Turborepo 並不會處理套件下載相關的功能** ，而是讓 package manager 來做這件事
- Turborepo 支援的 package manager 共有四個：
  - npm
  - pnpm
  - yarn 1
  - yarn berry (yarn ≥ 2)

---
transition: slide-up
layout: center
---

# Package manager 沒有做的事情是什麼？

---
transition: slide-up
layout: center
---

# **Package manager 並沒有辦法很有效率的處理任務**

![](/images/why-turborepo-problem.webp)

---
transition: slide-up
layout: center
---

# Turborepo - Run tasks

![](/images/your-monorepo-excalidraw.webp){width=600px}

---
transition: slide-up
layout: center
---

# Turborepo - Parallel

![](/images/turborepo-excalidraw.webp){width=600px}

---
transition: slide-up
layout: center
---

# Turborepo - Cache

![](/images/cache-hit.webp){width=600px}

---

# 小結

<v-clicks>

- Turborepo 是 Vercel 基於 Golang 的開源專案
- Turborepo 沒有 workspace 跟 package installation 的功能，這兩個功能是由 package manager 提供
- Turborepo 彌補了 package manager 在執行任務沒有效率的部分
- Monorepo 的功能實際上是由 workspace 提供，而不是 Turborepo
- Turborepo 與其說是 monorepo 解決方案，不如說是 build system 解決方案

![](/images/turborepo-build-system.png){width=400px}

</v-clicks>

---
transition: slide-up
layout: center
---

# 是否要選擇 pnpm？

https://pnpm.io/benchmarks

---
transition: slide-up
layout: iframe
url: /images/benchmark.png
---


---
transition: slide-up
layout: center
---

# 是否要選擇 pnpm？

<v-clicks>

- pnpm 在 yarn 4 之後差距在伯仲之間
- npm 基本上不會是 package manager 的選擇

</v-clicks>

---
transition: slide-up
layout: center
---

# 是否要選擇 Turborepo?

---
transition: slide-up
layout: center
---

|Nx|Turborepo|
|-|-|
|從 Lerna migrate 過去很直覺|你已經在 Vercel 的生態系|
|你需要建立非常多的 libs|你的專案並不是太複雜|
|你需要有非常制式化的流程以及管理 libs 的方式|設定 CI/CD 容易|
|你的專案非常複雜，需要有好的視覺化工具|文件比 Nx 好讀|
|Nx 的 cache 比 Turborepo 快|使用起來比 Nx 簡單|
|集中化管理 packages|packages 被分散在各個 libs 底下|

---
layout: center
---

# npm trend - nx vs turbo

![](/images/npm-trend-nx-vs-turbo.png)


---

# 總結

- 介紹了 pnpm 解決什麼問題
- Turborepo 為什麼要跟 pnpm workspace 一起使用
- 比較 npm、yarn、pnpm 的 benchmark
- 微比較 Nx 跟 Turborepo

<!-- 
- pnpm 解決了三個問題：
  - 節省硬碟空間
  - 加快安裝套件速度
  - 解決扁平化 node_modules 的問題
-->

---
layout: center
---

# Thank you
