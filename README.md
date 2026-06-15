# AléoConnect - Plateforme de Mise en Relation Parents-Nourrices

Une plateforme moderne et responsive développée avec Vue.js 3 pour connecter les parents avec des nourrices qualifiées.

## 🚀 Technologies Utilisées

- **Vue.js 3.4.0** - Framework JavaScript progressif
- **Vue Router 4.2.5** - Routage officiel pour Vue.js
- **Pinia 2.1.7** - Gestion d'état intuitive pour Vue.js
- **Axios 1.6.0** - Client HTTP basé sur les promesses
- **Vitest 1.0.0** - Framework de test rapide et moderne

## 📋 Prérequis

### Node.js et npm
- **Node.js**: `v18.17.0` (LTS recommandé)
- **npm**: `v9.x` ou `v10.x`

### Installation de Node.js
```bash
# Via nvm (recommandé)
nvm install 18.17.0
nvm use 18.17.0

# Via winget (Windows)
winget install OpenJS.NodeJS.LTS

# Via Chocolatey
choco install nodejs-lts
```

## 🛠️ Installation et Configuration

### 1. Cloner le projet
```bash
git clone <repository-url>
cd aleo_frontend
```

### 2. Installer les dépendances
```bash
npm install
```

### 3. Vérifier l'installation
```bash
# Vérifier les versions
node --version  # v18.17.0
npm --version   # 9.x ou 10.x

# Vérifier les dépendances
npm run deps:check
```

## 🚀 Scripts Disponibles

### Développement
```bash
# Démarrer le serveur de développement
npm run serve

# Construire pour la production
npm run build

# Prévisualiser la build
npm run preview
```

### Qualité du Code
```bash
# Linter les fichiers
npm run lint

# Corriger automatiquement les erreurs de linting
npm run lint:fix
```

### Tests
```bash
# Exécuter les tests
npm run test

# Interface utilisateur des tests
npm run test:ui
```

### Gestion des Dépendances
```bash
# Vérifier les vulnérabilités
npm run deps:check

# Mettre à jour les dépendances
npm run deps:update

# Nettoyer et réinstaller
npm run clean
```

## 📁 Structure du Projet

```
aleo_frontend/
├── src/
│   ├── assets/
│   │   └── images/          # Images du projet
│   ├── components/          # Composants réutilisables
│   ├── views/              # Pages principales
│   ├── stores/             # Stores Pinia
│   ├── router/             # Configuration du routage
│   ├── styles/             # Styles globaux
│   ├── App.vue             # Composant racine
│   └── main.js             # Point d'entrée
├── tests/                  # Tests unitaires
├── public/                 # Assets statiques
├── package.json            # Configuration npm
├── vue.config.js           # Configuration Vue CLI
├── vitest.config.js        # Configuration Vitest
└── .nvmrc                  # Version Node.js recommandée
```

## 🎨 Fonctionnalités

- ✅ **Interface Responsive** - Compatible desktop, tablette et mobile
- ✅ **Authentification** - Système de connexion pour parents et nourrices
- ✅ **Profils Utilisateur** - Gestion des profils avec upload de documents
- ✅ **Messagerie** - Communication intégrée entre utilisateurs
- ✅ **Recherche** - Filtres avancés pour trouver des nourrices
- ✅ **Sécurité** - Protection des données et authentification sécurisée

## 🔧 Configuration

### Variables d'Environnement
Créer un fichier `.env` à la racine :
```env
VUE_APP_API_BASE_URL=http://localhost:8080/api
VUE_APP_APP_NAME=AléoConnect
```

### Configuration ESLint
Le projet utilise ESLint avec les règles suivantes :
- `vue/multi-word-component-names: off` - Permet les noms de composants simples

## 📊 Compatibilité

### Versions Testées
- ✅ Node.js 18.17.0 LTS
- ✅ npm 9.6.7
- ✅ Vue CLI 5.0.8
- ✅ Chrome 118+
- ✅ Firefox 118+
- ✅ Safari 16+
- ✅ Edge 118+

### Navigateurs Supportés
- Chrome (dernières 2 versions)
- Firefox (dernières 2 versions)
- Safari (dernières 2 versions)
- Edge (dernières 2 versions)
- Pas de support IE11

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📝 Licence

Ce projet est sous licence MIT - voir le fichier [LICENSE](LICENSE) pour plus de détails.

## 📞 Support

Pour toute question ou problème :
- Ouvrir une issue sur GitHub
- Contacter l'équipe de développement

---

**Développé avec ❤️ par l'équipe AléoConnect**
