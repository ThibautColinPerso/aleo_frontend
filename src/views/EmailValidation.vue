<template>
  <div class="validation-page">
    <div class="validation-card">

      <template v-if="status === 'pending'">
        <div class="spinner" aria-label="Validation en cours…"></div>
        <p class="status-text">Validation en cours…</p>
      </template>

      <template v-else-if="status === 'success'">
        <div class="status-icon">✅</div>
        <h2>Adresse email validée !</h2>
        <p class="status-text">Votre compte est maintenant actif. Vous pouvez vous connecter.</p>
        <router-link to="/login" class="btn-primary">Se connecter</router-link>
      </template>

      <template v-else>
        <div class="status-icon">❌</div>
        <h2>Validation échouée</h2>
        <p class="status-text error-text">{{ errorMessage }}</p>
        <router-link to="/" class="btn-secondary">Retour à l'accueil</router-link>
      </template>

    </div>
  </div>
</template>

<script>
import { authService } from '../services/auth.service'

export default {
  name: 'EmailValidation',
  data() {
    return {
      status: 'pending',
      errorMessage: ''
    }
  },
  async created() {
    const token = this.$route.query.token

    if (!token) {
      this.errorMessage = 'Lien de validation invalide : aucun token fourni.'
      this.status = 'error'
      return
    }

    try {
      await authService.validateEmail(token)
      this.status = 'success'
    } catch (err) {
      this.errorMessage =
        err.response?.data?.message ||
        err.response?.data ||
        'Une erreur est survenue lors de la validation. Le lien est peut-être expiré ou déjà utilisé.'
      this.status = 'error'
    }
  }
}
</script>

<style scoped>
.validation-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 40px 20px;
}

.validation-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 48px 40px;
  text-align: center;
  max-width: 480px;
  width: 100%;
}

.status-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

h2 {
  font-size: 1.6rem;
  color: #1e3a8a;
  margin-bottom: 16px;
}

.status-text {
  color: #555;
  margin-bottom: 32px;
}

.error-text {
  color: #dc2626;
}

.btn-primary,
.btn-secondary {
  display: inline-block;
  padding: 12px 32px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-primary {
  background: #3b82f6;
  color: #fff;
}

.btn-primary:hover {
  background: #2563eb;
}

.btn-secondary {
  background: #e2e8f0;
  color: #1e3a8a;
}

.btn-secondary:hover {
  background: #cbd5e1;
}

/* Spinner */
.spinner {
  width: 48px;
  height: 48px;
  border: 4px solid #e2e8f0;
  border-top-color: #3b82f6;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
  margin: 0 auto 16px;
}

@keyframes spin {
  to { transform: rotate(360deg); }
}
</style>
