# Architecture des Composants AléoConnect

## Structure Modulaire

Le projet utilise une architecture modulaire avec des composants réutilisables pour garantir la maintenabilité et la scalabilité.

### 📁 Hiérarchie des Composants

```
src/
├── App.vue (Composant racine)
│   ├── components/
│   │   ├── AppHeader.vue (Header réutilisable)
│   │   ├── AppFooter.vue (Footer réutilisable)
│   │   ├── Login.vue
│   │   ├── RegisterParent.vue
│   │   ├── RegisterBabysitter.vue
│   │   ├── ParentBabysitters.vue
│   │   ├── ParentMessages.vue
│   │   ├── BabysitterMessages.vue
│   │   └── BabysitterProfile.vue
│   ├── views/
│   │   ├── Home.vue
│   │   ├── About.vue
│   │   ├── WhyUs.vue
│   │   ├── ParentDashboard.vue
│   │   └── BabysitterDashboard.vue
│   └── router-view (rendu dynamique des pages)
```

## 🔄 Flux de Rendu

```
App.vue
  │
  ├─► <AppHeader />        (Menu principal - Réutilisable)
  │    ├─► Logo
  │    ├─► Navigation
  │    └─► Boutons Auth
  │
  ├─► <router-view />      (Contenu dynamique)
  │    └─► Pages / Vues
  │
  └─► <AppFooter />        (Footer - Réutilisable)
       └─► Copyright
```

## 📝 Composants Réutilisables

### AppHeader.vue
- **Localisation:** `src/components/AppHeader.vue`
- **Usage:** Importé dans `App.vue`
- **Responsabilités:**
  - Affichage du logo
  - Navigation vers pages publiques (Accueil, À propos, Pourquoi Nous)
  - Boutons d'inscription (Parent, Nourrice)
  - Bouton de connexion
  - Responsive design (mobile, tablette, desktop)

**Import:**
```vue
import AppHeader from './components/AppHeader.vue'
```

**Utilisation:**
```vue
<AppHeader />
```

### AppFooter.vue
- **Localisation:** `src/components/AppFooter.vue`
- **Usage:** Importé dans `App.vue`
- **Responsabilités:**
  - Affichage du copyright
  - Style cohérent avec le header

**Import:**
```vue
import AppFooter from './components/AppFooter.vue'
```

**Utilisation:**
```vue
<AppFooter />
```

## 🎨 Composants de Page (Views)

### Pages Publiques
- **Home.vue** - Page d'accueil avec héro banner
- **About.vue** - Informations sur la plateforme
- **WhyUs.vue** - Avantages et comparaison

### Pages d'Authentification
- **Login.vue** - Formulaire de connexion
- **RegisterParent.vue** - Inscription pour parents
- **RegisterBabysitter.vue** - Inscription pour nourrices

### Pages Protégées (Dashboard)
- **ParentDashboard.vue** - Dashboard pour parents
  - Sous-composants: ParentBabysitters, ParentMessages
- **BabysitterDashboard.vue** - Dashboard pour nourrices
  - Sous-composants: BabysitterMessages, BabysitterProfile

## ✅ Bonnes Pratiques Appliquées

### 1. **DRY (Don't Repeat Yourself)**
- ✅ Header et footer ne sont définis qu'une fois
- ✅ Réutilisables dans toutes les pages

### 2. **Modularité**
- ✅ Chaque composant a une responsabilité unique
- ✅ Facile à maintenir et tester

### 3. **Scalabilité**
- ✅ Structure prête pour l'ajout de nouveaux composants
- ✅ Architecture extensible

### 4. **Maintenabilité**
- ✅ Modification du header/footer une seule fois
- ✅ Impact automatique sur toutes les pages
- ✅ Pas de duplication de code

## 🔧 Modifier les Composants Réutilisables

### Modifier le Header
1. Éditer `src/components/AppHeader.vue`
2. Les changements s'appliquent automatiquement à toutes les pages

**Exemple - Ajouter un lien de navigation:**
```vue
<nav class="nav-menu">
  <router-link to="/">Accueil</router-link>
  <!-- Ajouter ici -->
  <router-link to="/nouveau-lien">Nouveau Lien</router-link>
</nav>
```

### Modifier le Footer
1. Éditer `src/components/AppFooter.vue`
2. Les changements s'appliquent automatiquement à toutes les pages

**Exemple - Ajouter des liens:**
```vue
<footer class="app-footer">
  <p>&copy; 2026 Aleo Nounou.</p>
  <!-- Ajouter ici -->
</footer>
```

## 📊 Avantages de cette Architecture

| Aspect | Bénéfice |
|--------|----------|
| **Réutilisabilité** | Header/Footer utilisables partout |
| **Maintenabilité** | Modification en un seul endroit |
| **Scalabilité** | Facile d'ajouter des variantes |
| **Performance** | Composants compilés une seule fois |
| **Testabilité** | Composants isolés et testables |
| **Clarté** | Code moins dupliqué et plus lisible |

## 🚀 Évolutions Futures Possibles

- Créer un composant `Navigation.vue` pour plus de flexibilité
- Créer un composant `Button.vue` réutilisable
- Créer un composant `Modal.vue` pour les confirmations
- Créer un composant `Alert.vue` pour les notifications
- Créer un composant `Loading.vue` pour les chargements

## 📚 Ressources Vue.js

- [Vue 3 Components](https://vuejs.org/guide/extras/web-components.html)
- [Scoped Styles](https://vue-loader.vuejs.org/guide/scoped-css.html)
- [Component Registration](https://vuejs.org/guide/components/registration.html)

