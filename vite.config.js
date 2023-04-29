import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://arifian853.github.io/vite-gh-pages',
  plugins: [react()],
})
