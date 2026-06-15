<template>
  <div class="register-page">
    <div class="register-container">
      <div class="register-card">
        <h2>Inscription Parent</h2>
        <form @submit.prevent="register">
          <div class="form-row">
            <div class="form-group">
              <label for="nom">Nom</label>
              <input v-model="form.nom" id="nom" placeholder="Dupont" required>
            </div>
            <div class="form-group">
              <label for="prenom">Prénom</label>
              <input v-model="form.prenom" id="prenom" placeholder="Marie" required>
            </div>
          </div>
          <div class="form-group">
            <label for="adresse">Adresse</label>
            <input v-model="form.adresse" id="adresse" placeholder="123 Rue de l'Exemple" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="codePostal">Code Postal</label>
              <input v-model="form.codePostal" id="codePostal" placeholder="75001" required>
            </div>
            <div class="form-group">
              <label for="ville">Ville</label>
              <input v-model="form.ville" id="ville" placeholder="Paris" required>
            </div>
          </div>
          <div class="form-group">
            <label for="telephone">Téléphone</label>
            <input v-model="form.telephone" id="telephone" type="tel" placeholder="06 12 34 56 78" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="form.email" id="email" type="email" placeholder="votre.email@example.com" required>
          </div>
          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input v-model="form.password" id="password" type="password" placeholder="••••••••" required>
          </div>
          <button type="submit" class="btn-primary btn-large">S'inscrire</button>
        </form>
        <div class="register-footer">
          <p>Déjà un compte ? <router-link to="/login" class="login-link">Se connecter</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useRouter } from 'vue-router'

export default {
  name: 'RegisterParent',
  data() {
    return {
      form: {
        nom: '',
        prenom: '',
        adresse: '',
        codePostal: '',
        ville: '',
        telephone: '',
        email: '',
        password: '',
        role: 'parent'
      }
    }
  },
  setup() {
    const router = useRouter()
    return { router }
  },
  methods: {
    async register() {
      try {
        await axios.post('/api/register', this.form)
        alert('Inscription réussie')
        this.router.push('/login')
      } catch (error) {
        alert('Erreur d\'inscription')
      }
    }
  }
}
</script>

<style scoped>
.register-page {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: auto;
  background: linear-gradient(135deg, #f0f8f5 0%, #e8f5f0 100%);
  padding: 40px 20px;
}

.register-container {
  width: 100%;
  max-width: 500px;
}

.register-card {
  background: white;
  padding: 40px;
  border-radius: 8px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.register-card h2 {
  text-align: center;
  color: #1e3a8a;
  margin-bottom: 30px;
  font-size: 28px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
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

.register-footer {
  text-align: center;
  margin-top: 25px;
  padding-top: 20px;
  border-top: 1px solid #eee;
}

.register-footer p {
  margin: 0;
  color: #666;
  font-size: 14px;
}

.login-link {
  color: #1e3a8a;
  font-weight: 600;
  text-decoration: none;
  transition: color 0.3s ease;
}

.login-link:hover {
  color: #3b82f6;
  text-decoration: underline;
}

@media (max-width: 600px) {
  .register-page {
    padding: 20px 10px;
  }

  .register-card {
    padding: 25px;
  }

  .register-card h2 {
    font-size: 22px;
    margin-bottom: 20px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .form-group input {
    padding: 10px;
    font-size: 13px;
  }
}
</style>
