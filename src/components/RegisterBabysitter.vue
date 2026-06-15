<template>
  <div class="register-page">
    <div class="register-container">
      <div class="register-card">
        <h2>Inscription Nourrice</h2>
        <form @submit.prevent="register">
          <div class="form-row">
            <div class="form-group">
              <label for="nom">Nom</label>
              <input v-model="form.nom" id="nom" placeholder="Martin" required>
            </div>
            <div class="form-group">
              <label for="prenom">Prénom</label>
              <input v-model="form.prenom" id="prenom" placeholder="Sophie" required>
            </div>
          </div>
          <div class="form-group">
            <label for="adresse">Adresse</label>
            <input v-model="form.adresse" id="adresse" placeholder="456 Avenue de l'Exemple" required>
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="codePostal">Code Postal</label>
              <input v-model="form.codePostal" id="codePostal" placeholder="75002" required>
            </div>
            <div class="form-group">
              <label for="ville">Ville</label>
              <input v-model="form.ville" id="ville" placeholder="Paris" required>
            </div>
          </div>
          <div class="form-group">
            <label for="telephone">Téléphone</label>
            <input v-model="form.telephone" id="telephone" type="tel" placeholder="06 87 65 43 21" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input v-model="form.email" id="email" type="email" placeholder="votre.email@example.com" required>
          </div>
          <div class="form-group">
            <label for="password">Mot de passe</label>
            <input v-model="form.password" id="password" type="password" placeholder="••••••••" required>
          </div>
          <div class="form-group">
            <label for="documents">Certificats/Diplômes</label>
            <div class="file-input-wrapper">
              <input
                id="documents"
                type="file"
                multiple
                @change="handleFileUpload"
                accept=".pdf,.jpg,.png,.doc,.docx"
              >
              <span class="file-input-text">Cliquez pour sélectionner les fichiers</span>
            </div>
            <p class="file-info">Formats acceptés: PDF, JPG, PNG, DOC, DOCX</p>
            <div v-if="files.length > 0" class="file-list">
              <p><strong>Fichiers sélectionnés ({{ files.length }}):</strong></p>
              <ul>
                <li v-for="(file, index) in files" :key="index">📄 {{ file.name }}</li>
              </ul>
            </div>
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
import { authService } from '../services/auth.service'
import { useNotificationStore } from '../stores/notification'
import { useRouter } from 'vue-router'

export default {
  name: 'RegisterBabysitter',
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
        role: 'babysitter'
      },
      files: []
    }
  },
  setup() {
    const notif = useNotificationStore()
    const router = useRouter()
    return { notif, router }
  },
  methods: {
    handleFileUpload(event) {
      this.files = Array.from(event.target.files)
    },
    async register() {
      try {
        const formData = new FormData()
        Object.keys(this.form).forEach(key => formData.append(key, this.form[key]))
        for (const file of this.files) {
          formData.append('files', file)
        }
        const response = await authService.registerBabysitter(formData)
        const email = response.data?.email || this.form.email
        this.router.push({ name: 'RegistrationSuccess', query: { email } })
      } catch {
        this.notif.error('Erreur lors de l\'inscription')
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

.file-input-wrapper {
  border: 2px dashed #1e3a8a;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.file-input-wrapper:hover {
  background-color: #f0f9ff;
}

.file-input-wrapper input[type="file"] {
  display: none;
}

.file-input-wrapper {
  border: 2px dashed #1e3a8a;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.file-input-wrapper:hover {
  background-color: #f0f9ff;
}

.file-input-text {
  display: block;
  color: #1e3a8a;
  font-weight: 600;
}

.file-info {
  font-size: 12px;
  color: #999;
  margin-top: 8px;
  margin-bottom: 0;
}

.file-list {
  margin-top: 15px;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.file-list p {
  margin: 0 0 8px 0;
  font-size: 13px;
  color: #666;
}

.file-list ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.file-list li {
  font-size: 12px;
  color: #666;
  margin: 5px 0;
  padding: 5px;
  background-color: white;
  border-radius: 3px;
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

  .file-input-wrapper {
    padding: 15px;
  }
}
</style>
