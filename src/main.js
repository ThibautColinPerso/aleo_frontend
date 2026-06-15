import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import { useAuthStore } from './stores/auth'
import './styles/global.css'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)

// Restaurer la session avant d'initialiser le router (les guards en ont besoin)
const authStore = useAuthStore()
authStore.initializeAuth()

app.use(router)

app.mount('#app')
