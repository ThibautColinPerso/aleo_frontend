<template>
  <div class="register-page">
    <div class="register-container">
      <div class="register-card">
        <h2>Inscription Parent</h2>
        <form @submit.prevent="register">

          <!-- Informations personnelles -->
          <div class="form-section">
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
              <label for="identifiant">Identifiant</label>
              <input v-model="form.identifiant" id="identifiant" placeholder="parent42" required>
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
              <input v-model="form.telephone" id="telephone" type="tel" placeholder="0612345678" required>
            </div>
            <div class="form-group">
              <label for="email">Email</label>
              <input v-model="form.email" id="email" type="email" placeholder="votre.email@example.com" required>
            </div>
            <div class="form-group">
              <label for="password">Mot de passe</label>
              <input v-model="form.motDePasse" id="password" type="password" placeholder="••••••••" required>
            </div>
          </div>

          <!-- Section enfants -->
          <div class="enfants-section">
            <div class="enfants-header">
              <h3>👶 Mes enfants</h3>
              <button type="button" class="btn-add-child" @click="addEnfant">+ Ajouter un enfant</button>
            </div>

            <div
              v-for="(enfant, index) in form.enfants"
              :key="index"
              class="enfant-card"
            >
              <div class="enfant-card-header">
                <span class="enfant-title">Enfant {{ index + 1 }}</span>
                <button
                  v-if="form.enfants.length > 1"
                  type="button"
                  class="btn-remove-child"
                  @click="removeEnfant(index)"
                  :aria-label="`Supprimer l'enfant ${index + 1}`"
                >✕</button>
              </div>
              <div class="form-row">
                <div class="form-group">
                  <label :for="`enfant-prenom-${index}`">Prénom</label>
                  <input
                    :id="`enfant-prenom-${index}`"
                    v-model="enfant.prenom"
                    placeholder="Léa"
                    required
                  >
                </div>
                <div class="form-group">
                  <label :for="`enfant-ddn-${index}`">Date de naissance</label>
                  <input
                    :id="`enfant-ddn-${index}`"
                    v-model="enfant.dateDeNaissance"
                    type="date"
                    required
                  >
                </div>
              </div>
              <div class="form-group">
                <label :for="`enfant-sexe-${index}`">Sexe</label>
                <select :id="`enfant-sexe-${index}`" v-model="enfant.sexe" required>
                  <option value="" disabled>-- Sélectionner --</option>
                  <option value="FEMININ">Féminin</option>
                  <option value="MASCULIN">Masculin</option>
                </select>
              </div>
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
  name: 'RegisterParent',
  data() {
    return {
      form: {
        identifiant: '',
        motDePasse: '',
        nom: '',
        prenom: '',
        adresse: '',
        codePostal: '',
        ville: '',
        telephone: '',
        email: '',
        enfants: [
          { prenom: '', dateDeNaissance: '', sexe: '' }
        ]
      }
    }
  },
  setup() {
    const notif = useNotificationStore()
    const router = useRouter()
    return { notif, router }
  },
  methods: {
    addEnfant() {
      this.form.enfants.push({ prenom: '', dateDeNaissance: '', sexe: '' })
    },
    removeEnfant(index) {
      this.form.enfants.splice(index, 1)
    },
    async register() {
      try {
        const payload = {
          identifiant: this.form.identifiant,
          motDePasse: this.form.motDePasse,
          nom: this.form.nom,
          prenom: this.form.prenom,
          adresse: this.form.adresse,
          codePostal: this.form.codePostal,
          ville: this.form.ville,
          telephone: this.form.telephone,
          email: this.form.email,
          enfants: this.form.enfants
        }
        const response = await authService.registerParent(payload)
        const email = response.data?.email || payload.email
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
  max-width: 540px;
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

/* Section infos parent */
.form-section {
  margin-bottom: 10px;
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

.form-group input,
.form-group select {
  width: 100%;
  padding: 12px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  background: white;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group select:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

/* Section enfants */
.enfants-section {
  background: #f8faff;
  border: 2px solid #c7d9f8;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 24px;
}

.enfants-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.enfants-header h3 {
  margin: 0;
  color: #1e3a8a;
  font-size: 16px;
  font-weight: 700;
}

.btn-add-child {
  padding: 7px 14px;
  background-color: #1e3a8a;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 600;
  transition: background-color 0.2s ease;
}

.btn-add-child:hover {
  background-color: #3b82f6;
}

.enfant-card {
  background: white;
  border: 1px solid #dbe8fb;
  border-radius: 6px;
  padding: 16px;
  margin-bottom: 14px;
}

.enfant-card:last-child {
  margin-bottom: 0;
}

.enfant-card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 14px;
}

.enfant-title {
  font-weight: 700;
  color: #3b82f6;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.btn-remove-child {
  background: none;
  border: 1px solid #e74c3c;
  color: #e74c3c;
  border-radius: 4px;
  padding: 2px 8px;
  cursor: pointer;
  font-size: 12px;
  transition: all 0.2s ease;
}

.btn-remove-child:hover {
  background-color: #e74c3c;
  color: white;
}

/* Bouton submit */
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

  .form-group input,
  .form-group select {
    padding: 10px;
    font-size: 13px;
  }

  .enfants-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
}
</style>


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
