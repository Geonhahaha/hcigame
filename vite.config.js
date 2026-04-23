import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Use relative asset paths so GitHub Pages project sites do not request /assets from domain root.
  base: './',
  plugins: [react()],
})
