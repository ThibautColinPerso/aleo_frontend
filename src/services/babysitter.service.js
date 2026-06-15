import apiClient from '../api/client'

export const babysitterService = {
  search(filters) {
    return apiClient.get('/babysitters', { params: filters })
  }
}
