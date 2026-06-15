<template>
  <div class="babysitter-profile">
    <h2>👥 Mon Profil</h2>
    <div class="profile-container">
      <form @submit.prevent="updateProfile" class="profile-form">
        <div class="form-section">
          <h3>Informations Personnelles</h3>
          <div class="form-row">
            <div class="form-group">
              <label for="nom">Nom</label>
              <input
                id="nom"
                v-model="profile.nom"
                placeholder="Martin"
                required
              >
            </div>
            <div class="form-group">
              <label for="prenom">Prénom</label>
              <input
                id="prenom"
                v-model="profile.prenom"
                placeholder="Sophie"
                required
              >
            </div>
          </div>
          <div class="form-group">
            <label for="adresse">Adresse</label>
            <input
              id="adresse"
              v-model="profile.adresse"
              placeholder="456 Avenue de l'Exemple"
              required
            >
          </div>
          <div class="form-row">
            <div class="form-group">
              <label for="codePostal">Code Postal</label>
              <input
                id="codePostal"
                v-model="profile.codePostal"
                placeholder="75002"
                required
              >
            </div>
            <div class="form-group">
              <label for="ville">Ville</label>
              <input
                id="ville"
                v-model="profile.ville"
                placeholder="Paris"
                required
              >
            </div>
          </div>
          <div class="form-group">
            <label for="telephone">Téléphone</label>
            <input
              id="telephone"
              v-model="profile.telephone"
              type="tel"
              placeholder="06 87 65 43 21"
              required
            >
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="profile.email"
              type="email"
              placeholder="votre.email@example.com"
              required
            >
          </div>
        </div>

        <div class="form-section">
          <h3>Certificats et Diplômes</h3>
          <div class="file-section">
            <label for="documents">Uploader des documents</label>
            <div class="file-input-wrapper">
              <input
                id="documents"
                type="file"
                multiple
                @change="handleFileUpload"
                accept=".pdf,.jpg,.png,.doc,.docx"
              >
              <span class="file-input-text">Cliquez ou glissez vos fichiers ici</span>
            </div>
            <p class="file-info">Formats acceptés: PDF, JPG, PNG, DOC, DOCX</p>
            <div v-if="files.length > 0" class="file-list">
              <p><strong>Nouveaux fichiers ({{ files.length }}):</strong></p>
              <ul>
                <li v-for="(file, index) in files" :key="'new-' + index">📄 {{ file.name }}</li>
              </ul>
            </div>
            <div v-if="existingDocuments.length > 0" class="existing-files">
              <p><strong>Documents existants ({{ existingDocuments.length }}):</strong></p>
              <ul>
                <li v-for="(doc, index) in existingDocuments" :key="'existing-' + index">
                  📄 {{ doc }}
                  <button type="button" class="btn-delete" @click="deleteDocument(doc)">Supprimer</button>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="form-actions">
          <button type="submit" class="btn-primary btn-large">💾 Sauvegarder les modifications</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { useAuthStore } from '../stores/auth'

export default {
  name: 'BabysitterProfile',
  data() {
    return {
      profile: {
        nom: '',
        prenom: '',
        adresse: '',
        codePostal: '',
        ville: '',
        telephone: '',
        email: ''
      },
      files: [],
      existingDocuments: [],
      loading: false
    }
  },
  setup() {
    const authStore = useAuthStore()
    return { authStore }
  },
  mounted() {
    this.loadProfile()
  },
  methods: {
    async loadProfile() {
      this.loading = true
      try {
        const response = await axios.get('/api/profile')
        this.profile = response.data.profile
        this.existingDocuments = response.data.documents || []
      } catch (error) {
        console.error('Erreur lors du chargement du profil')
      } finally {
        this.loading = false
      }
    },
    handleFileUpload(event) {
      this.files = Array.from(event.target.files)
    },
    async updateProfile() {
      try {
        const formData = new FormData()
        Object.keys(this.profile).forEach(key => {
          formData.append(key, this.profile[key])
        })
        for (let file of this.files) {
          formData.append('files', file)
        }
        await axios.put('/api/profile', formData, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
        alert('Profil mis à jour avec succès')
        this.files = []
        this.loadProfile()
      } catch (error) {
        alert('Erreur de mise à jour du profil')
      }
    },
    async deleteDocument(docName) {
      if (confirm('Êtes-vous sûr de vouloir supprimer ce document ?')) {
        try {
          await axios.delete('/api/profile/documents', { params: { doc: docName } })
          this.existingDocuments = this.existingDocuments.filter(d => d !== docName)
          alert('Document supprimé avec succès')
        } catch (error) {
          alert('Erreur lors de la suppression du document')
        }
      }
    }
  }
}
</script>

<style scoped>
.babysitter-profile h2 {
  color: #1e3a8a;
  margin-bottom: 20px;
}

.profile-container {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.profile-form {
  max-width: 600px;
}

.form-section {
  margin-bottom: 30px;
  padding-bottom: 30px;
  border-bottom: 1px solid #eee;
}

.form-section:last-of-type {
  border-bottom: none;
}

.form-section h3 {
  color: #1e3a8a;
  margin-bottom: 15px;
  font-size: 16px;
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #1e3a8a;
  font-size: 14px;
}

.form-group input {
  width: 100%;
  padding: 10px;
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

.file-section label {
  display: block;
  margin-bottom: 15px;
  font-weight: 600;
  color: #2c3e50;
  font-size: 14px;
}

.file-input-wrapper {
  border: 2px dashed #1e3a8a;
  padding: 20px;
  border-radius: 4px;
  text-align: center;
  background-color: #f9f9f9;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 10px;
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
  margin: 10px 0;
}

.file-list, .existing-files {
  margin: 15px 0;
  padding: 10px;
  background-color: #f9f9f9;
  border-radius: 4px;
}

.file-list p, .existing-files p {
  margin: 0 0 8px 0;
  font-size: 13px;
  color: #666;
}

.file-list ul, .existing-files ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

.file-list li, .existing-files li {
  font-size: 12px;
  color: #666;
  margin: 5px 0;
  padding: 8px;
  background-color: white;
  border-radius: 3px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.btn-delete {
  padding: 4px 8px;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  font-size: 11px;
  transition: background-color 0.3s ease;
}

.btn-delete:hover {
  background-color: #dc2626;
}

.form-actions {
  margin-top: 30px;
  text-align: center;
}

.btn-large {
  width: 100%;
  padding: 12px;
  font-size: 16px;
}

@media (max-width: 600px) {
  .profile-container {
    padding: 20px;
  }

  .form-row {
    grid-template-columns: 1fr;
  }

  .form-group input {
    padding: 8px;
    font-size: 13px;
  }

  .file-input-wrapper {
    padding: 15px;
  }
}
</style>
