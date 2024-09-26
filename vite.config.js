import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    proxy: {
      '/api': {
        target: 'https://api.schiphol.nl',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
}


})
