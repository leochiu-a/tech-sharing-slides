<template>
  <div class="min-h-screen bg-gradient-to-br from-gray-100 via-white to-gray-200 py-16 px-4">
    <div class="max-w-5xl mx-auto">
      <h1
        class="text-4xl font-extrabold tracking-tight text-gray-900 mb-10 font-sans drop-shadow-sm"
      >
        Slides Deck
      </h1>
      <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        <SlideCard
          v-for="slide in slides"
          :key="slide.title"
          :title="slide.title"
          :image="slide.image"
          :description="slide.description"
          :url="slide.url"
        />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import SlideCard from './SlideCard.vue'

const baseUrl = import.meta.env.VITE_BASE_URL || '/'

const slides = [
  {
    title: 'Web Vitals in Next.js',
    url: `${baseUrl}how-to-optimize-web-vital-in-nextjs/`,
    description: '最佳化 Next.js 的 Web Vitals 實戰經驗分享。',
    image: `${baseUrl}images/how-to-optimize-web-vital-in-nextjs.png`,
  },
  {
    title: 'pnpm & turborepo',
    url: `${baseUrl}pnpm-workspace-and-turborepo/`,
    description: 'pnpm 與 turborepo 的 monorepo 實戰。',
    image: `${baseUrl}images/pnpm-workspace-and-turborepo.png`,
  },
  {
    title: 'TypeScript Workshop',
    url: `${baseUrl}typescript-workshop/`,
    description: 'TypeScript 進階應用與實作。',
    image: `${baseUrl}images/typescript-workshop.png`,
  },
]
</script>
