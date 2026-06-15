<template>
  <div class="about">
    <div class="container">
      <h1>Notre Histoire</h1>
      <section class="content">
        <div class="about-intro">
          <h3>Le trait d’union entre vos besoins et les meilleurs nounous</h3>
        </div>

        <h2>Quand l’amour rencontre l’épuisement</h2>
        <p>Tout a commencé avec deux miracles : Alexia et Leo.</p>
        <p>Être maman de jumeaux est une aventure extraordinaire, mais c’est aussi un tourbillon qui ne s’arrête jamais. Je me souviens de ces nuits interminables, somnolant avec mes bébés dans les bras, comptant les minutes avant le prochain biberon. À cette époque, mon mari faisait son maximum durant son congé paternité, mais une fois qu’il a repris le travail, le silence de la nuit est devenu pesant.</p>
        <p>Je me revois encore, attendant 9h que ma nounou de jour arrive pour enfin pouvoir fermer les yeux une ou deux heures. Mais dès 18h, la course reprenait : les bains, les pleurs, les biberons… Nos dîners en amoureux se transformaient en repas pris sur le pouce à minuit, épuisés.</p>
        <p>J’ai pleuré. J’ai connu les nuits blanches. J’ai ressenti ce besoin viscéral d’avoir une main tendue quand la fatigue devient trop lourde à porter.</p>
        <p>C’est dans ces moments vulnérables que l’idée d’Aleo est née. J’ai compris qu’avoir besoin d’aide n’est pas un signe de faiblesse, mais un acte d’amour envers soi et ses enfants. Un parent reposé est un parent plus serein, plus patient, plus présent.</p>
        <p>Forte de cette expérience personnelle et de mes années passées auprès des enfants, j’ai décidé de créer ce trait d’union que j’aurais tant aimé avoir. Aleo Nounou n’est pas une agence classique, c’est une plateforme de mise en relation simple et accessible. Mon rôle ? Vous mettre en contact direct avec des profils de confiance pour vous offrir ce cadeau inestimable : le repos.</p>

        <h2>Chez Aleo, nous vous proposons :</h2>
        <ul>
          <li><strong>Transparence :</strong> Parce que je suis passée par là, je comprends vos doutes sans jugement</li>
          <li><strong>Liberté :</strong> Vous gérez votre organisation directement avec votre nounou, sans intermédiaire complexe</li>
          <li><strong>Sérénité :</strong> Nous veillons à la qualité des profils inscrits pour que vous puissiez enfin dormir une nuit entière, sachant que vos enfants sont entre de bonnes mains</li>
        </ul>

        <h3>Aujourd’hui, nous voulons offrir aux parents ce relais indispensable. Parce que pour bien s’occuper d’eux, il faut d’abord pouvoir s’occuper de soi.</h3>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'About'
}
</script>

<style scoped>
.about {
  background-color: white;
  padding: 40px 20px;
}

.container {
  max-width: 800px;
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
  margin-top: 30px;
  margin-bottom: 15px;
  border-bottom: 2px solid #3b82f6;
  padding-bottom: 10px;
}

.about-intro {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  margin-bottom: 30px;
  font-size: 16px;
  line-height: 1.8;
}

.about-intro p {
  margin: 0;
  color: #333;
}

p {
  line-height: 1.8;
  color: #555;
  margin-bottom: 15px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
  line-height: 1.8;
}

li:last-child {
  border-bottom: none;
}

li strong {
  color: #1e3a8a;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.feature {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  border-left: 4px solid #3b82f6;
}

.feature h3 {
  color: #1e3a8a;
  margin: 0 0 10px 0;
  font-size: 18px;
}

.feature p {
  margin: 0;
  font-size: 14px;
  color: #666;
}

@media (max-width: 768px) {
  .about {
    padding: 20px 10px;
  }

  h1 {
    font-size: 28px;
  }

  h2 {
    font-size: 20px;
  }

  .features-grid {
    grid-template-columns: 1fr;
  }
}
</style>
