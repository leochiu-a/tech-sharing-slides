<template>
  <Card class="group hover:shadow-lg transition-all duration-200 cursor-pointer" @click="openSlide">
    <div class="relative overflow-hidden rounded-t-lg">
      <img
        :src="image || '/placeholder.svg'"
        :alt="title"
        class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-200"
      />
    </div>

    <CardHeader class="pb-2">
      <CardTitle class="text-lg line-clamp-2 group-hover:text-primary transition-colors">
        {{ title }}
      </CardTitle>
    </CardHeader>

    <CardContent class="space-y-3">
      <CardDescription class="line-clamp-3 text-sm">{{ description }}</CardDescription>

      <div class="flex items-center justify-between text-xs text-muted-foreground pt-2 border-t">
        <div class="flex items-center gap-1">
          <User class="h-3 w-3" />
          <span>{{ author }}</span>
        </div>
        <div class="flex items-center gap-1">
          <Calendar class="h-3 w-3" />
          <span>{{ date }}</span>
        </div>
      </div>
    </CardContent>
  </Card>
</template>

<script setup lang="ts">
import { Calendar, User } from 'lucide-vue-next'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

const props = defineProps<{
  title: string
  image?: string
  description?: string
  url: string
  author: string
  date: string
}>()

const openSlide = () => {
  const baseUrl = import.meta.env.BASE_URL || '/'
  // Remove trailing slash from baseUrl if it exists, and ensure proper URL construction
  const cleanBase = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
  window.open(`${cleanBase}/${props.url}`, '_blank')
}
</script>
