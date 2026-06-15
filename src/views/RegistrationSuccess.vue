<template>
  <div class="success-page">
    <div class="success-card">
      <div class="success-icon">✅</div>
      <h2>Compte créé avec succès !</h2>
      <p class="success-message">
        Un email de validation a été envoyé à
      </p>
      <p class="email-highlight">{{ email }}</p>
      <p class="success-hint">
        Consultez votre boîte de réception et cliquez sur le lien pour activer votre compte.
      </p>
      <router-link to="/login" class="btn-login">
        Aller à la connexion
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationSuccess',
  computed: {
    email() {
      return this.$route.query.email || 'votre adresse email'
    }
  }
}
</script>

<style scoped>
.success-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 60vh;
  padding: 40px 20px;
}

.success-card {
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.1);
  padding: 48px 40px;
  text-align: center;
  max-width: 480px;
  width: 100%;
}

.success-icon {
  font-size: 3rem;
  margin-bottom: 16px;
}

h2 {
  font-size: 1.6rem;
  color: #1e3a8a;
  margin-bottom: 16px;
}

.success-message {
  color: #555;
  margin-bottom: 6px;
}

.email-highlight {
  font-weight: 600;
  color: #1e3a8a;
  font-size: 1.05rem;
  margin-bottom: 20px;
  word-break: break-all;
}

.success-hint {
  color: #777;
  font-size: 0.9rem;
  margin-bottom: 32px;
}

.btn-login {
  display: inline-block;
  padding: 12px 32px;
  background: #3b82f6;
  color: #fff;
  border-radius: 8px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.2s;
}

.btn-login:hover {
  background: #2563eb;
}
</style>
