<template>
  <div class="why-us">
    <div class="container">
      <h1>Pourquoi nous choisir ?</h1>
      <section class="content">
        <div class="intro">
          <p>Découvrez les avantages de notre plateforme pour trouver la nourrice idéale ou partager vos services.</p>
        </div>

        <h2>Avantages pour les Parents</h2>
        <div class="advantages-grid">
          <div class="advantage-card">
            <h3>🔍 Recherche Intelligent</h3>
            <p>Filtrez les nourrices par ville, diplômes, expérience et disponibilité pour trouver la correspondance parfaite.</p>
          </div>
          <div class="advantage-card">
            <h3>✅ Profils Vérifiés</h3>
            <p>Tous les profils sont vérifiés et les documents sont authentifiés pour votre tranquillité d'esprit.</p>
          </div>
          <div class="advantage-card">
            <h3>💬 Communication Sécurisée</h3>
            <p>Communiquez directement avec les nourrices via notre messagerie intégrée et sécurisée.</p>
          </div>
          <div class="advantage-card">
            <h3>📋 Historique Complet</h3>
            <p>Accédez aux profils détaillés avec expérience, qualifications, et avis d'autres parents.</p>
          </div>
          <div class="advantage-card">
            <h3>🔐 Protection des Données</h3>
            <p>Vos informations personnelles sont protégées par les standards de sécurité les plus élevés.</p>
          </div>
          <div class="advantage-card">
            <h3>📱 Accessible Partout</h3>
            <p>Utilisez la plateforme sur votre téléphone, tablette ou ordinateur, n'importe où, n'importe quand.</p>
          </div>
        </div>

        <div class="feature-section">
          <img src="@/assets/images/pexels-projectartebr-9845942.jpg" alt="Parents cherchant une nourrice" class="feature-img">
          <div class="feature-text">
            <h2>Une Solution Complète pour les Parents</h2>
            <p>Trouvez facilement une nourrice de confiance adaptée à vos besoins spécifiques et à votre budget. Notre plateforme vous permet de comparer plusieurs profils, de consulter les qualifications vérifiées et de communiquer directement pour clarifier tous les détails avant de confier vos enfants.</p>
          </div>
        </div>

        <h2>Avantages pour les Nourrices</h2>
        <div class="advantages-grid">
          <div class="advantage-card">
            <h3>👥 Accès aux Familles</h3>
            <p>Accédez à un large réseau de familles à la recherche de services de garde de qualité.</p>
          </div>
          <div class="advantage-card">
            <h3>📄 Vitrine Professionnelle</h3>
            <p>Créez un profil complet avec vos diplômes, certificats et expérience professionnelle.</p>
          </div>
          <div class="advantage-card">
            <h3>🎓 Valoriser vos Compétences</h3>
            <p>Téléchargez vos certificats et diplômes pour prouver vos qualifications.</p>
          </div>
          <div class="advantage-card">
            <h3>💬 Contact Direct</h3>
            <p>Communiquez directement avec les parents intéressés par vos services.</p>
          </div>
          <div class="advantage-card">
            <h3>⭐ Avis et Recommandations</h3>
            <p>Construisez votre réputation grâce aux avis positifs des parents satisfaits.</p>
          </div>
          <div class="advantage-card">
            <h3>🎯 Contrôle Total</h3>
            <p>Mettez à jour votre profil, vos disponibilités et votre tarif à tout moment.</p>
          </div>
        </div>

        <div class="feature-section">
          <div class="feature-text">
            <h2>Développez votre Activité de Nourrice</h2>
            <p>Élargissez votre clientèle en présentant un profil professionnel complet. Nos parents recherchent activement des nourrices qualifiées et fiables. Avec notre plateforme, vous pouvez mettre en avant vos certificats, votre expérience et construire progressivement une excellente réputation.</p>
          </div>
          <img src="@/assets/images/pexels-andressa-chagas-2152629641-32447389.jpg" alt="Nourrice jouant avec les enfants" class="feature-img">
        </div>

        <section class="comparison">
          <h2>Comparaison avec d'autres solutions</h2>
          <table>
            <thead>
              <tr>
                <th>Fonctionnalité</th>
                <th>Aleo Nounou</th>
                <th>Méthode Classique</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Recherche en ligne</td>
                <td class="yes">✅</td>
                <td class="no">❌</td>
              </tr>
              <tr>
                <td>Profils vérifiés</td>
                <td class="yes">✅</td>
                <td class="no">❌</td>
              </tr>
              <tr>
                <td>Messagerie intégrée</td>
                <td class="yes">✅</td>
                <td class="no">❌</td>
              </tr>
              <tr>
                <td>Documents vérifiés</td>
                <td class="yes">✅</td>
                <td class="no">❌</td>
              </tr>
              <tr>
                <td>Disponibilité 24/7</td>
                <td class="yes">✅</td>
                <td class="no">❌</td>
              </tr>
              <tr>
                <td>Support utilisateur</td>
                <td class="yes">✅</td>
                <td class="limited">⚠️ Limité</td>
              </tr>
            </tbody>
          </table>
        </section>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  name: 'WhyUs'
}
</script>

<style scoped>
.why-us {
  background-color: white;
  padding: 40px 20px;
}

.container {
  max-width: 1000px;
  margin: 0 auto;
}

h1 {
  color: #1e3a8a;
  font-size: 36px;
  margin-bottom: 30px;
  text-align: center;
}

h2 {
  color: #1e3a8a;
  font-size: 24px;
  margin-top: 40px;
  margin-bottom: 25px;
  border-bottom: 2px solid #3b82f6;
  padding-bottom: 10px;
}

.intro {
  background-color: #f0f9ff;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  border-left: 4px solid #3b82f6;
}

.intro p {
  margin: 0;
  font-size: 16px;
  color: #333;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.advantage-card {
  background-color: #f9f9f9;
  padding: 25px;
  border-radius: 8px;
  border-top: 4px solid #3b82f6;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.advantage-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
}

.advantage-card h3 {
  color: #1e3a8a;
  font-size: 18px;
  margin: 0 0 10px 0;
}

.advantage-card p {
  margin: 0;
  color: #666;
  font-size: 14px;
  line-height: 1.6;
}

.comparison {
  margin-top: 40px;
}

.comparison table {
  width: 100%;
  border-collapse: collapse;
  background-color: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.comparison th {
  background-color: #3b82f6;
  color: white;
  padding: 15px;
  text-align: left;
  font-weight: 600;
  border: none;
}

.comparison td {
  padding: 15px;
  border-bottom: 1px solid #eee;
}

.comparison tr:last-child td {
  border-bottom: none;
}

.comparison tr:nth-child(even) {
  background-color: #f9f9f9;
}

.comparison .yes {
  color: #27ae60;
  font-weight: 600;
}

.comparison .no {
  color: #e74c3c;
  font-weight: 600;
}

.comparison .limited {
  color: #f39c12;
  font-weight: 600;
}

.feature-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  align-items: center;
  margin: 50px 0;
  padding: 40px;
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}

.feature-img {
  width: 100%;
  max-height: 380px;
  height: 380px;
  border-radius: 12px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
  object-fit: cover;
}

.feature-text h2 {
  margin-top: 0;
  color: #1e3a8a;
}

.feature-text p {
  line-height: 1.8;
  color: #555;
}

@media (max-width: 768px) {
  .why-us {
    padding: 20px 10px;
  }

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 20px;
  }

  .advantages-grid {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .advantage-card {
    padding: 20px;
  }

  .comparison table {
    font-size: 13px;
  }

  .comparison th,
  .comparison td {
    padding: 10px;
  }
}

@media (max-width: 1000px) {
  .feature-section {
    grid-template-columns: 1fr;
    gap: 25px;
  }

  .feature-img {
    max-height: 280px;
    height: 280px;
  }
}
</style>
