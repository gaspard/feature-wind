import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { vitePluginMdToJson } from './vite-plugin-md-to-json'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginMdToJson()],
  build: {
    // Ensure Vite doesn't clean the dist directory
    emptyOutDir: false,
  },
})
