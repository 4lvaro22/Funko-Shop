import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Proyecto-Interfaces-Grupo-H/#',
  build: {
    outDir: 'build'
  }
})
