<template>
  <DashboardLayout :navLinks="navLinks" />
</template>

<script>
import DashboardLayout from '../components/DashboardLayout.vue'

export default {
  name: 'ParentDashboard',
  components: { DashboardLayout },
  setup() {
    const navLinks = [
      { to: '/parent-dashboard/babysitters', label: '🔍 Liste des Nourrices' },
      { to: '/parent-dashboard/messages',    label: '💬 Messagerie' }
    ]
    return { navLinks }
  }
}
</script>
