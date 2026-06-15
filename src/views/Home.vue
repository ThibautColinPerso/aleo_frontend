<template>
  <div class="home">
    <section class="hero">
      <div class="hero-content">
        <div class="hero-text">
          <h1>Le trait d'union de confiance entre parents et nounou</h1>
          <p>Trouvez la nourrice idéale pour votre famille ou partagez vos services de garde</p>
          <div class="hero-buttons">
            <router-link to="/register-parent">
              <button class="btn-primary">Inscription Parent</button>
            </router-link>
            <router-link to="/register-babysitter">
              <button class="btn-secondary">Inscription Nourrice</button>
            </router-link>
          </div>
        </div>
        <div class="hero-image">
          <img src="@/assets/images/pexels-alexander-mass-748453803-30015484.jpg" alt="Famille heureuse avec bébé">
        </div>
      </div>
    </section>

    <section class="services">
      <div class="container">
        <h2>Nos Services</h2>
        <div class="grid">
          <div class="card">
            <div class="card-icon">🔍</div>
            <h3>Recherche Facile</h3>
            <p>Trouvez une nounou près de chez vous en quelques secondes. Notre moteur de recherche simple vous permet de filtrer les profils selon vos critères précis et vos besoins géographiques.</p>
          </div>
          <div class="card">
            <div class="card-icon">💬</div>
            <h3>Messagerie Intégrée</h3>
            <p>Échangez librement et instantanément avec les nounou via notre interface sécurisée. Posez vos questions et organisez vos rencontres sans intermédiaire.</p>
          </div>
          <div class="card">
            <div class="card-icon">📅</div>
            <h3>Réservation rapide</h3>
            <p>Ne perdez plus de temps en démarches interminables. Une fois la perle rare trouvée, la mise en relation se fait instantanément pour bloquer vos créneaux de garde.</p>
          </div>
          <div class="card">
            <div class="card-icon">📄</div>
            <h3>Profils vérifiés</h3>
            <p>La sécurité avant tout. Nous veillons à la qualité des profils inscrits sur la plateforme pour vous offrir une expérience sereine et une confiance totale envers les intervenants.</p>
          </div>
          <div class="card">
            <div class="card-icon">🚨</div>
            <h3>Mode SOS (Urgence)</h3>
            <p>Une réunion imprévue ou une nounou habituelle malade ? Activez le Mode SOS pour trouver une solution de garde en un temps record, même à la dernière minute.</p>
          </div>
          <div class="card">
            <div class="card-icon">👍</div>
            <h3>Avis et Recommandations</h3>
            <p>Fiez-vous à l'expérience de la communauté. Consultez les notes et les commentaires laissés par d'autres parents pour choisir votre nounou en toute connaissance de cause.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="features">
      <div class="container">
        <div class="feature-row">
          <div class="feature-content">
            <h2>Pour les Parents</h2>
            <h3>Trouvez votre perle rare en quelques clics</h3>
            <ul class="feature-list">
              <li>✅ Accès gratuit à une sélection de profils qualifiés près de chez vous</li>
              <li>✅ Que ce soit pour une garde régulière ou un besoin urgent</li>
              <li>✅ Trouvez la personne idéale pour veiller sur vos enfants en toute sérénité</li>
            </ul>
            <router-link to="/register-parent">
              <button class="btn-primary">S'inscrire comme Parent</button>
            </router-link>
          </div>
          <div class="feature-image">
            <img src="@/assets/images/pexels-william-fortunato-6393374.jpg" alt="Parent avec enfant">
          </div>
        </div>

        <div class="feature-row reverse">
          <div class="feature-content">
            <h2>Pour les Nourrices</h2>
            <h3>Donnez de l'élan à votre activité</h3>
            <ul class="feature-list">
              <li>✅ Créez votre profil gratuitement et rapidement</li>
              <li>✅ Gérez votre disponibilité</li>
              <li>✅ Soyez mis en relation directe avec des familles qui ont besoin de vous</li>
              <li>✅ Construisez votre réputation</li>
            </ul>
            <router-link to="/register-babysitter">
              <button class="btn-primary">S'inscrire comme Nourrice</button>
            </router-link>
          </div>
          <div class="feature-image">
            <img src="@/assets/images/pexels-jonathanborba-3763583.jpg" alt="Nourrice avec enfants">
          </div>
        </div>
      </div>
    </section>

    <section class="cta">
      <div class="container">
        <h2>Prêt à commencer ?</h2>
        <p>Rejoignez des milliers de familles qui ont trouvé la nourrice idéale</p>
        <router-link to="/register-parent">
          <button class="btn-primary btn-large">S'inscrire maintenant</button>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'Home'
}
</script>

<style scoped>
.home {
  width: 100%;
}

.hero {
  background: linear-gradient(135deg, #1e3a8a 0%, #0f172a 100%);
  color: white;
  padding: 60px 20px;
  text-align: left;
  margin: -40px -20px 0 -20px;
}

.hero-content {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
}

.hero-text h1 {
  color: white;
  font-size: 44px;
  margin-bottom: 15px;
  font-weight: 700;
  line-height: 1.2;
}

.hero-text p {
  font-size: 18px;
  margin-bottom: 30px;
  opacity: 0.95;
}

.hero-buttons {
  display: flex;
  gap: 15px;
  flex-wrap: wrap;
}

.hero-buttons a {
  text-decoration: none;
}

.hero-buttons .btn-primary,
.hero-buttons .btn-secondary {
  padding: 12px 30px;
  font-size: 16px;
  border: 2px solid white;
}

.hero-buttons .btn-primary {
  background-color: white;
  color: #1e3a8a;
}

.hero-buttons .btn-primary:hover {
  background-color: rgba(255, 255, 255, 0.9);
}

.hero-buttons .btn-secondary {
  background-color: transparent;
  color: white;
}

.hero-buttons .btn-secondary:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

.hero-image {
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 400px;
  overflow: hidden;
}

.hero-image img {
  width: 100%;
  max-width: 500px;
  max-height: 400px;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
  object-fit: cover;
}

.services {
  padding: 60px 20px;
  background-color: white;
}

.services h2 {
  text-align: center;
  margin-bottom: 40px;
  font-size: 32px;
}

.services .grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
}

.card {
  background: white;
  padding: 25px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

.card-icon {
  font-size: 40px;
  margin-bottom: 15px;
}

.card h3 {
  color: #1e3a8a;
  margin-bottom: 12px;
  font-size: 20px;
}

.card p {
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

.features {
  padding: 60px 20px;
  background-color: #f8fafc;
}

.feature-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin-bottom: 60px;
}

.feature-row.reverse {
  direction: rtl;
}

.feature-row.reverse > * {
  direction: ltr;
}

.feature-content h2 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #1e3a8a;
}

.feature-list {
  list-style: none;
  padding: 0;
  margin-bottom: 25px;
}

.feature-list li {
  font-size: 16px;
  margin-bottom: 12px;
  color: #334155;
  font-weight: 500;
}

.feature-image {
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  max-height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.feature-image img {
  width: 100%;
  height: 100%;
  display: block;
  border-radius: 12px;
  object-fit: cover;
}

.cta {
  background-color: #f0f9ff;
  padding: 60px 20px;
  text-align: center;
  border-top: 3px solid #3b82f6;
}

.cta h2 {
  font-size: 32px;
  margin-bottom: 15px;
}

.cta p {
  font-size: 18px;
  color: #666;
  margin-bottom: 30px;
}

.btn-large {
  padding: 14px 40px;
  font-size: 16px;
}

@media (max-width: 768px) {
  .hero {
    padding: 40px 20px;
  }

  .hero-content {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .hero-text h1 {
    font-size: 28px;
  }

  .hero-text p {
    font-size: 16px;
  }

  .hero-image img {
    max-width: 100%;
    max-height: 300px;
  }

  .services h2,
  .cta h2 {
    font-size: 24px;
  }

  .services {
    padding: 40px 20px;
  }

  .cta {
    padding: 40px 20px;
  }

  .hero-buttons {
    gap: 10px;
  }

  .feature-row {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .feature-row.reverse {
    direction: ltr;
  }

  .feature-image {
    max-width: 100%;
    max-height: 250px;
  }
}

@media (max-width: 480px) {
  .hero {
    padding: 30px 10px;
  }

  .hero-text h1 {
    font-size: 20px;
  }

  .hero-text p {
    font-size: 14px;
  }

  .hero-buttons {
    flex-direction: column;
  }

  .hero-buttons a {
    width: 100%;
  }

  .hero-buttons .btn-primary,
  .hero-buttons .btn-secondary {
    width: 100%;
  }

  .services .grid {
    grid-template-columns: 1fr;
  }

  .card {
    padding: 20px;
  }

  .feature-row {
    gap: 15px;
  }

  .feature-content h2 {
    font-size: 20px;
  }

  .feature-list li {
    font-size: 14px;
  }
}
</style>
