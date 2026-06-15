<template>
  <div class="notification-container" aria-live="polite">
    <transition-group name="notif">
      <div
        v-for="notif in store.notifications"
        :key="notif.id"
        :class="['notification', `notification--${notif.type}`]"
        @click="store.remove(notif.id)"
      >
        <span class="notification-icon">{{ icons[notif.type] }}</span>
        <span>{{ notif.message }}</span>
      </div>
    </transition-group>
  </div>
</template>

<script>
import { useNotificationStore } from '../stores/notification'

export default {
  name: 'AppNotification',
  setup() {
    const store = useNotificationStore()
    const icons = { success: '✅', error: '❌', info: 'ℹ️' }
    return { store, icons }
  }
}
</script>

<style scoped>
.notification-container {
  position: fixed;
  bottom: 24px;
  right: 24px;
  z-index: 9999;
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-width: 360px;
}

.notification {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 18px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: opacity 0.3s ease;
}

.notification--success { background: #d1fae5; color: #065f46; border-left: 4px solid #10b981; }
.notification--error   { background: #fee2e2; color: #991b1b; border-left: 4px solid #ef4444; }
.notification--info    { background: #dbeafe; color: #1e40af; border-left: 4px solid #3b82f6; }

.notif-enter-active, .notif-leave-active { transition: all 0.3s ease; }
.notif-enter-from { opacity: 0; transform: translateX(30px); }
.notif-leave-to   { opacity: 0; transform: translateX(30px); }
</style>
