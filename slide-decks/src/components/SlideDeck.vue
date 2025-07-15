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
import { getSlides } from '@/utils/getSlides'

import SlideCard from './SlideCard.vue'

const slides = getSlides()
</script>
