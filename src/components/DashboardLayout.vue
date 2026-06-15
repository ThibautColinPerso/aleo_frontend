<template>
  <div class="dashboard-layout">
    <nav class="sidebar">
      <div class="user-info">
        <div class="user-avatar">👤</div>
        <p class="user-name">{{ authStore.user?.prenom }} {{ authStore.user?.nom }}</p>
      </div>
      <ul class="menu">
        <li v-for="link in navLinks" :key="link.to">
          <router-link :to="link.to" class="menu-link">
            {{ link.label }}
          </router-link>
        </li>
      </ul>
      <button @click="logout" class="btn-logout">Déconnexion</button>
    </nav>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<script>
import { useAuthStore } from '../stores/auth'
import { useRouter } from 'vue-router'

export default {
  name: 'DashboardLayout',
  props: {
    navLinks: {
      type: Array,
      required: true
    }
  },
  setup() {
    const authStore = useAuthStore()
    const router = useRouter()
    const logout = () => {
      authStore.logout()
      router.push('/')
    }
    return { authStore, logout }
  }
}
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  min-height: calc(100vh - 140px);
  background-color: #f5f5f5;
}

.sidebar {
  width: 250px;
  background-color: white;
  padding: 20px;
  box-shadow: 2px 0 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
}

.user-info {
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 30px;
  padding-bottom: 20px;
  border-bottom: 2px solid #eee;
}

.user-avatar {
  font-size: 40px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f0f9ff;
  border-radius: 50%;
}

.user-name {
  margin: 0;
  font-weight: 600;
  color: #2c3e50;
  font-size: 14px;
}

.menu {
  list-style: none;
  padding: 0;
  margin: 0;
  flex: 1;
}

.menu li {
  margin: 0;
  padding: 0;
}

.menu-link {
  display: block;
  padding: 12px 15px;
  color: #333;
  text-decoration: none;
  border-radius: 4px;
  transition: all 0.3s ease;
  font-weight: 500;
  margin-bottom: 5px;
}

.menu-link:hover {
  background-color: #f0f9ff;
  color: #1e3a8a;
}

.menu-link.router-link-active {
  background-color: #3b82f6;
  color: white;
}

.btn-logout {
  width: 100%;
  padding: 10px;
  background-color: #e74c3c;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.btn-logout:hover {
  background-color: #c0392b;
}

.content {
  flex: 1;
  padding: 30px;
  overflow-y: auto;
}

@media (max-width: 768px) {
  .dashboard-layout {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    padding: 15px;
    flex-direction: row;
    align-items: center;
    gap: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .user-info {
    margin-bottom: 0;
    padding-bottom: 0;
    border-bottom: none;
  }

  .menu {
    display: flex;
    gap: 10px;
    flex: 1;
  }

  .menu-link {
    margin-bottom: 0;
    padding: 8px 12px;
    font-size: 13px;
  }

  .btn-logout {
    width: auto;
    padding: 8px 16px;
    font-size: 13px;
  }

  .content {
    padding: 20px;
  }
}

@media (max-width: 480px) {
  .sidebar {
    flex-wrap: wrap;
    padding: 10px;
  }

  .user-info {
    width: 100%;
  }

  .menu {
    flex-direction: column;
    width: 100%;
  }

  .menu-link {
    padding: 10px;
    font-size: 12px;
  }

  .btn-logout {
    width: 100%;
    font-size: 12px;
  }

  .content {
    padding: 15px;
  }
}
</style>
