import apiClient from '../api/client'

export const authService = {
  loginParent(login, motDePasse) {
    return apiClient.post('/parents/connexion', { login, motDePasse })
  },
  loginBabysitter(login, motDePasse) {
    return apiClient.post('/nourrices/connexion', { login, motDePasse })
  },
  registerParent(payload) {
    return apiClient.post('/parents/inscription', payload)
  },
  registerBabysitter(payload) {
    return apiClient.post('/nourrices/inscription', payload)
  },
  validateEmailParent(token) {
    return apiClient.put('/parents/validation', null, { params: { token } })
  },
  validateEmailBabysitter(token) {
    return apiClient.put('/nourrices/validation', null, { params: { token } })
  },
  logoutParent() {
    return apiClient.post('/parents/deconnexion')
  },
  logoutBabysitter() {
    return apiClient.post('/nourrices/deconnexion')
  }
}
