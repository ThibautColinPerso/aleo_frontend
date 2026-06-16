import axios from 'axios'

const isProd = import.meta.env.PROD
const baseURL = import.meta.env.VITE_API_BASE_URL || ''

if (isProd && !baseURL) {
  throw new Error(
    '[api/client] VITE_API_BASE_URL est requis en production.\n' +
    'Définissez-la dans .env.production (ex: https://api.aleoconnect.fr)'
  )
}

const apiClient = axios.create({
  baseURL,
  headers: { 'Content-Type': 'application/json' }
})

// Injecte le token Bearer sur chaque requête
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem('token')
  if (token) {
    config.headers.Authorization = `Bearer ${token}`
  }
  return config
})

// Gestion centralisée des erreurs HTTP
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem('user')
      localStorage.removeItem('token')
      window.location.href = '/login'
    }
    return Promise.reject(error)
  }
)

export default apiClient
