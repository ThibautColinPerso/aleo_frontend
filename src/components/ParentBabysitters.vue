<template>
  <div class="parent-babysitters">
    <h2>📋 Liste des Nourrices</h2>
    <div class="filters-section">
      <div class="filters">
        <input
          v-model="filters.ville"
          placeholder="Ville"
          class="filter-input"
        >
        <input
          v-model="filters.diplomes"
          placeholder="Diplômes"
          class="filter-input"
        >
        <button @click="search" class="btn-primary">🔍 Rechercher</button>
      </div>
    </div>
    <div v-if="loading" class="loading">Chargement...</div>
    <div v-else-if="babysitters.length === 0" class="no-results">
      <p>Aucune nourrice trouvée. Modifiez vos critères de recherche.</p>
    </div>
    <div v-else class="table-responsive">
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prénom</th>
            <th>Adresse Complète</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="babysitter in babysitters" :key="babysitter.id">
            <td>{{ babysitter.nom }}</td>
            <td>{{ babysitter.prenom }}</td>
            <td>{{ babysitter.adresse }}, {{ babysitter.codePostal }} {{ babysitter.ville }}</td>
            <td><button @click="viewDetails(babysitter)" class="btn-details">Détails</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ParentBabysitters',
  data() {
    return {
      filters: {
        ville: '',
        diplomes: ''
      },
      babysitters: [],
      loading: false
    }
  },
  mounted() {
    this.search()
  },
  methods: {
    async search() {
      this.loading = true
      try {
        const response = await axios.get('/api/babysitters', { params: this.filters })
        this.babysitters = response.data
      } catch (error) {
        console.error('Erreur lors de la recherche')
      } finally {
        this.loading = false
      }
    },
    viewDetails(babysitter) {
      // Modal ou page détails à implémenter
      alert(`Détails de ${babysitter.prenom} ${babysitter.nom}`)
    }
  }
}
</script>

<style scoped>
.parent-babysitters h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.filters-section {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 20px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.filters {
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.filter-input {
  flex: 1;
  min-width: 150px;
  padding: 10px;
  border: 2px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  transition: border-color 0.3s ease;
}

.filter-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.filters button {
  padding: 10px 20px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: background-color 0.3s ease;
}

.filters button:hover {
  background-color: #2563eb;
}

.loading, .no-results {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  color: #666;
}

.table-responsive {
  overflow-x: auto;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

table {
  width: 100%;
  border-collapse: collapse;
}

thead {
  background-color: #f9f9f9;
}

th {
  padding: 15px;
  text-align: left;
  font-weight: 600;
  color: #2c3e50;
  border-bottom: 2px solid #ddd;
}

td {
  padding: 15px;
  border-bottom: 1px solid #eee;
  color: #555;
}

tbody tr:hover {
  background-color: #f9f9f9;
}

.btn-details {
  padding: 8px 16px;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.3s ease;
  font-size: 13px;
}

.btn-details:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .filters {
    flex-direction: column;
  }

  .filter-input {
    min-width: auto;
  }

  .filters button {
    width: 100%;
  }

  th, td {
    padding: 10px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .parent-babysitters h2 {
    font-size: 18px;
  }

  .table-responsive {
    overflow-x: scroll;
  }

  table {
    font-size: 12px;
  }

  th, td {
    padding: 8px;
  }

  .btn-details {
    padding: 6px 12px;
    font-size: 11px;
  }
}
</style>
