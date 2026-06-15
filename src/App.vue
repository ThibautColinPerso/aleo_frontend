<template>
  <div id="app">
    <AppHeader />
    <main class="app-content">
      <router-view />
    </main>
    <AppFooter />
    <AppNotification />
  </div>
</template>

<script>
import AppHeader from './components/AppHeader.vue'
import AppFooter from './components/AppFooter.vue'
import AppNotification from './components/AppNotification.vue'

export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter,
    AppNotification
  }
}
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.app-content {
  flex: 1;
  padding: 40px 20px;
}

@media (max-width: 768px) {
  .app-content {
    padding: 20px 10px;
  }
}
</style>
