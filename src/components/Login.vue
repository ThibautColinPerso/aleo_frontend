<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-card">
        <h2>Connexion</h2>
        <form @submit.prevent="login">
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="email"
              type="email"
              placeholder="votre.email@example.com"
              required
            >
          </div>
          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input
              id="password"
              v-model="password"
              type="password"
              placeholder="••••••••"
              required
            >
          </div>
          <button type="submit" class="btn-primary btn-large">Se connecter</button>
        </form>
        <div class="login-footer">
          <p>Pas de compte ?</p>
          <router-link to="/register-parent" class="register-link">Inscription Parent</router-link>
          <span class="divider">|</span>
          <router-link to="/register-babysitter" class="register-link">Inscription Nourrice</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { authService } from '../services/auth.service'
import { useAuthStore } from '../stores/auth'
import { useNotificationStore } from '../stores/notification'
import { useRouter } from 'vue-router'

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Login',
  data() {
    return {
      email: '',
      password: ''
    }
  },
  setup() {
    const authStore = useAuthStore()
    const notif = useNotificationStore()
    const router = useRouter()
    return { authStore, notif, router }
  },
  methods: {
    async login() {
      try {
        const response = await authService.login(this.email, this.password)
        this.authStore.login(response.data.user, response.data.token)
        if (response.data.user.role === 'parent') {
          this.router.push('/parent-dashboard')
        } else {
          this.router.push('/babysitter-dashboard')
        }
      } catch {
        this.notif.error('Email ou mot de passe incorrect')
      }
    }
  }
}
</script>

<style scoped>
.login-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 140px);
  background: linear-gradient(135deg, #f0f8f5 0%, #e8f5f0 100%);
  padding: 20px;
}

.login-container {
  width: 100%;
  max-width: 400px;
}

.login-card {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.login-card h2 {
  text-align: center;
  color: #1e3a8a;
  margin-bottom: 30px;
  font-size: 28px;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #2c3e50;
  font-size: 14px;
}

.form-group input {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.btn-large {
  width: 100%;
  padding: 12px;
  font-size: 16px;
  margin-top: 10px;
}

.login-footer {
  text-align: center;
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.login-footer p {
  margin: 0 0 10px 0;
  color: #666;
  font-size: 14px;
}

.register-link {
  color: #1e3a8a;
  font-weight: 600;
  text-decoration: none;
  margin: 0 5px;
  transition: color 0.3s ease;
}

.register-link:hover {
  color: #3b82f6;
  text-decoration: underline;
}

.divider {
  color: #ddd;
  margin: 0 5px;
}

@media (max-width: 480px) {
  .login-card {
    padding: 25px;
  }

  .login-card h2 {
    font-size: 22px;
    margin-bottom: 20px;
  }

  .form-group input {
    padding: 10px;
    font-size: 13px;
  }
}
</style>
