import apiClient from '../api/client'

export const messageService = {
  getMessages() {
    return apiClient.get('/messages')
  }
}
