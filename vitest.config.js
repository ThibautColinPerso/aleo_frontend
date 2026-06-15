import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'node',
    setupFiles: ['./tests/setup.js'],
    env: {
      VITE_API_BASE_URL: '',
      VITE_BACKEND_URL: 'http://localhost:8080'
    }
  }
})
