import { defineStore } from 'pinia'

export const useNotificationStore = defineStore('notification', {
  state: () => ({
    notifications: []
  }),
  actions: {
    add(message, type = 'info') {
      const id = Date.now()
      this.notifications.push({ id, message, type })
      setTimeout(() => this.remove(id), 4000)
    },
    success(message) { this.add(message, 'success') },
    error(message) { this.add(message, 'error') },
    remove(id) {
      this.notifications = this.notifications.filter(n => n.id !== id)
    }
  }
})
