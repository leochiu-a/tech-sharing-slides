import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from '@tailwindcss/vite'

import { getBaseFromYaml } from './scripts/getBase'
import { slidesPlugin } from './scripts/vite-plugin-slides'

// https://vite.dev/config/
export default defineConfig({
  base: getBaseFromYaml(),
  plugins: [vue(), vueDevTools(), tailwindcss(), slidesPlugin()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: ['.ts', '.js', '.mjs', '.json'],
  },
})
