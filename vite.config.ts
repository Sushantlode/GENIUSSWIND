import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Set VITE_BASE_PATH=/GENIUSSWIND/ for GitHub Pages; leave unset for Netlify/root hosting
  base: process.env.VITE_BASE_PATH ?? '/',
})
