import apiClient from '../api/client'

export const profileService = {
  getProfile() {
    return apiClient.get('/profile')
  },
  updateProfile(formData) {
    return apiClient.put('/profile', formData, {
      headers: { 'Content-Type': 'multipart/form-data' }
    })
  },
  deleteDocument(docName) {
    return apiClient.delete('/profile/documents', { params: { doc: docName } })
  }
}
