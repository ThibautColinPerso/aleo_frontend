<template>
  <div class="parent-messages">
    <h2>💬 Messagerie</h2>
    <div class="messages-container">
      <div v-if="loading" class="loading">Chargement des messages...</div>
      <div v-else-if="messages.length === 0" class="no-messages">
        <p>Aucun message pour le moment</p>
      </div>
      <div v-else class="messages-list">
        <div v-for="message in messages" :key="message.id" class="message-card">
          <div class="message-header">
            <div class="message-from">
              <strong>De: {{ message.sender }}</strong>
              <span class="message-date">{{ formatDate(message.date) }}</span>
            </div>
          </div>
          <div class="message-body">
            <p>{{ message.content }}</p>
          </div>
          <div class="message-footer">
            <button class="btn-reply">↩️ Répondre</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ParentMessages',
  data() {
    return {
      messages: [],
      loading: false
    }
  },
  mounted() {
    this.loadMessages()
  },
  methods: {
    async loadMessages() {
      this.loading = true
      try {
        const response = await axios.get('/api/messages')
        this.messages = response.data
      } catch (error) {
        console.error('Erreur lors du chargement des messages')
      } finally {
        this.loading = false
      }
    },
    formatDate(dateString) {
      const date = new Date(dateString)
      return date.toLocaleDateString('fr-FR', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    }
  }
}
</script>

<style scoped>
.parent-messages h2 {
  color: #2c3e50;
  margin-bottom: 20px;
}

.messages-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.loading, .no-messages {
  background-color: white;
  padding: 30px;
  border-radius: 8px;
  text-align: center;
  color: #666;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.messages-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.message-card {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.message-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.message-header {
  background-color: #f9f9f9;
  padding: 15px;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.message-from {
  display: flex;
  gap: 15px;
  align-items: center;
}

.message-from strong {
  color: #2c3e50;
  font-size: 14px;
}

.message-date {
  color: #999;
  font-size: 12px;
  white-space: nowrap;
}

.message-body {
  padding: 15px;
  color: #555;
  line-height: 1.6;
}

.message-body p {
  margin: 0;
}

.message-footer {
  padding: 10px 15px;
  background-color: #f9f9f9;
  border-top: 1px solid #eee;
}

.btn-reply {
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

.btn-reply:hover {
  background-color: #2563eb;
  transform: translateY(-2px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

@media (max-width: 768px) {
  .parent-messages h2 {
    font-size: 18px;
  }

  .message-header {
    flex-direction: column;
    align-items: flex-start;
  }

  .message-from {
    flex-direction: column;
    gap: 5px;
  }

  .message-date {
    margin-left: 0;
  }
}
</style>
