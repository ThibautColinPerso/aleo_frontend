<template>
  <div class="login-page">
    <div class="login-container">
      <div class="login-card">
        <h2>Connexion</h2>

        <!-- Switch Parent / Nourrice -->
        <div class="role-switch">
          <button
            type="button"
            class="role-btn"
            :class="{ active: role === 'parent' }"
            @click="role = 'parent'"
          >
            Parent
          </button>
          <button
            type="button"
            class="role-btn"
            :class="{ active: role === 'babysitter' }"
            @click="role = 'babysitter'"
          >
            Nourrice
          </button>
        </div>

        <form @submit.prevent="submitLogin">
          <div class="form-group">
            <label for="login">Pseudo ou email</label>
            <input
              id="login"
              v-model="loginInput"
              type="text"
              placeholder="Votre pseudo ou email"
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
      role: 'parent',
      loginInput: '',
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
    async submitLogin() {
      try {
        const response = this.role === 'parent'
          ? await authService.loginParent(this.loginInput, this.password)
          : await authService.loginBabysitter(this.loginInput, this.password)
        const token = response.data.token
        const user = response.data.user ?? { role: this.role }
        this.authStore.login(user, token)
        this.router.push(this.role === 'parent' ? '/parent-dashboard' : '/babysitter-dashboard')
      } catch {
        this.notif.error('Identifiant ou mot de passe incorrect')
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
  margin-bottom: 24px;
  font-size: 28px;
}

/* Switch Parent / Nourrice */
.role-switch {
  display: flex;
  background: #f1f5f9;
  border-radius: 8px;
  padding: 4px;
  margin-bottom: 28px;
  gap: 4px;
}

.role-btn {
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  background: transparent;
  color: #64748b;
  transition: background 0.2s, color 0.2s;
}

.role-btn.active {
  background: #3b82f6;
  color: #fff;
  box-shadow: 0 1px 4px rgba(59, 130, 246, 0.3);
}

.role-btn:not(.active):hover {
  background: #e2e8f0;
  color: #1e3a8a;
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
  box-sizing: border-box;
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
    margin-bottom: 16px;
  }

  .form-group input {
    padding: 10px;
    font-size: 13px;
  }
}
</style>


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
