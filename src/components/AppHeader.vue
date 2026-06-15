<template>
  <header class="app-header">
    <div class="header-container">
      <div class="logo">
        <router-link to="/" class="logo-text">👶 Aleo Nounou</router-link>
      </div>
      <nav class="nav-menu">
        <router-link to="/" class="nav-link">Accueil</router-link>
        <router-link to="/about" class="nav-link">Notre Histoire</router-link>
        <router-link to="/why-us" class="nav-link">Pourquoi Nous</router-link>
      </nav>
      <div class="nav-buttons">
        <router-link to="/register-parent">
          <button class="btn-auth btn-register">S'inscrire Parent</button>
        </router-link>
        <router-link to="/register-babysitter">
          <button class="btn-auth btn-register">S'inscrire Nourrice</button>
        </router-link>
        <router-link to="/login">
          <button class="btn-auth btn-login">Se connecter</button>
        </router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader'
}
</script>

<style scoped>
.app-header {
  background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.logo {
  flex-shrink: 0;
}

.logo-text {
  font-size: 24px;
  font-weight: 700;
  color: white;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 8px;
}

.logo-text:hover {
  opacity: 0.9;
}

.nav-menu {
  display: flex;
  gap: 30px;
  flex: 1;
  margin-left: 40px;
}

.nav-link {
  color: white;
  font-weight: 500;
  transition: opacity 0.3s ease;
  border-bottom: 2px solid transparent;
  padding-bottom: 5px;
}

.nav-link:hover {
  opacity: 0.9;
  border-bottom-color: white;
}

.nav-buttons {
  display: flex;
  gap: 10px;
  flex-shrink: 0;
}

.nav-buttons a {
  text-decoration: none;
}

.btn-auth {
  padding: 8px 16px;
  border: 2px solid white;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 13px;
}

.btn-register {
  background-color: white;
  color: #1e3a8a;
}

.btn-register:hover {
  background-color: transparent;
  color: white;
}

.btn-login {
  background-color: transparent;
  color: white;
}

.btn-login:hover {
  background-color: white;
  color: #1e3a8a;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .header-container {
    flex-wrap: wrap;
    height: auto;
    padding: 10px 20px;
    gap: 15px;
  }

  .logo-text {
    font-size: 18px;
    width: 100%;
    margin-bottom: 10px;
  }

  .nav-menu {
    flex: 1;
    gap: 15px;
    margin-left: 0;
    font-size: 13px;
  }

  .nav-buttons {
    flex-wrap: wrap;
    width: 100%;
    gap: 8px;
  }

  .nav-buttons a {
    flex: 1;
    min-width: 150px;
  }

  .btn-auth {
    width: 100%;
    padding: 8px 12px;
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .header-container {
    padding: 8px 10px;
  }

  .logo-text {
    font-size: 16px;
  }

  .nav-menu {
    width: 100%;
    gap: 10px;
    font-size: 12px;
  }

  .nav-buttons {
    width: 100%;
  }

  .nav-buttons a {
    flex: 1;
  }

  .btn-auth {
    font-size: 11px;
    padding: 6px 8px;
  }
}
</style>

