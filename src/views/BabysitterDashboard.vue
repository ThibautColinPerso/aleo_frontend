<template>
  <DashboardLayout :navLinks="navLinks" />
</template>

<script>
import DashboardLayout from '../components/DashboardLayout.vue'

export default {
  name: 'BabysitterDashboard',
  components: { DashboardLayout },
  setup() {
    const navLinks = [
      { to: '/babysitter-dashboard/messages', label: '💬 Messagerie' },
      { to: '/babysitter-dashboard/profile',  label: '👥 Mon Profil' }
    ]
    return { navLinks }
  }
}
</script>
