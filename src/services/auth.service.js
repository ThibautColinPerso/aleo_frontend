import apiClient from '../api/client'

export const authService = {
  login(email, password) {
    return apiClient.post('/login', { email, password })
  },
  registerParent(payload) {
    return apiClient.post('/parents/inscription', payload)
  },
  registerBabysitter(formData) {
    return apiClient.post('/register', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  },
  validateEmail(token) {
    return apiClient.put('/parents/validation', null, { params: { token } })
  }
}
