<template>
  <div
    class="relative bg-white/70 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl group border border-gray-100"
  >
    <div class="overflow-hidden">
      <img
        v-if="image"
        :src="image"
        :alt="title"
        class="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div class="p-5">
      <h2 class="text-lg font-bold mb-2 text-gray-900 font-sans">
        <a :href="url" target="_blank" class="hover:text-blue-600 cursor-pointer">{{ title }}</a>
      </h2>
      <p class="text-gray-600 font-sans text-sm leading-relaxed">{{ description }}</p>
    </div>
    <div class="absolute inset-0 pointer-events-none rounded-2xl border border-white/40"></div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  image?: string
  description?: string
  url: string
}>()
</script>
