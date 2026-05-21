# 🚗 Baabur Auto — Site Web v1.0

> Tous les services auto à Djibouti, au même endroit.

Site statique React + Vite + Tailwind CSS, hébergeable gratuitement sur GitHub Pages.

---

## 📁 Structure du projet

```
baabur-auto/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation responsive
│   │   ├── Hero.jsx            # Section d'accueil
│   │   ├── Services.jsx        # Vue d'ensemble des services
│   │   ├── VehicleRental.jsx   # Location & achat véhicules
│   │   ├── SpareParts.jsx      # Formulaire pièces détachées
│   │   ├── Emergency.jsx       # Formulaire urgence
│   │   ├── Cleaning.jsx        # Services nettoyage
│   │   ├── Workshop.jsx        # Ateliers & maintenance
│   │   ├── HowItWorks.jsx      # Comment ça marche (4 étapes)
│   │   ├── About.jsx           # À propos
│   │   ├── Contact.jsx         # Contact + formulaire
│   │   └── Footer.jsx          # Pied de page
│   ├── config.js               # ⚙️ CONFIG DU CANAL DE CONTACT
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## ⚙️ Configuration du canal de contact

**Tout se passe dans un seul fichier : `src/config.js`**

```js
export const CONTACT_CONFIG = {
  mode: 'whatsapp',           // 'whatsapp' | 'email' | 'tel'
  whatsappNumber: '25377000000',   // Numéro international sans +
  email: 'contact@baabuauto.dj',
  phone: '+253 77 00 00 00',
  address: 'Djibouti, République de Djibouti',
}
```

Remplacez les valeurs et le site enverra automatiquement toutes les demandes vers ce canal.

---

## 🚀 Lancer le projet localement

### Prérequis
- Node.js 18+ ([nodejs.org](https://nodejs.org))
- npm (inclus avec Node.js)

### Installation

```bash
# 1. Clonez ou téléchargez le projet
cd baabur-auto

# 2. Installez les dépendances
npm install

# 3. Lancez le serveur de développement
npm run dev
```

Le site sera accessible sur **http://localhost:5173**

---

## 🌐 Déploiement sur GitHub Pages

### Étape 1 — Créez un dépôt GitHub

1. Allez sur [github.com](https://github.com) et connectez-vous
2. Cliquez sur **"New repository"**
3. Nommez-le `baabur-auto` (ou le nom de votre choix)
4. Laissez-le **Public**
5. Cliquez **"Create repository"**

### Étape 2 — Configurez le nom du dépôt

Dans `vite.config.js`, remplacez :
```js
const REPO_NAME = 'baabur-auto'  // ← mettez le nom exact de votre dépôt GitHub
```

### Étape 3 — Dans package.json, vérifiez que le champ homepage est correct

Ajoutez si nécessaire :
```json
"homepage": "https://VOTRE_USERNAME.github.io/baabur-auto"
```

### Étape 4 — Déployez

```bash
# Méthode A : avec gh-pages (recommandé)
npm install
npm run deploy
```

Ou manuellement :
```bash
# Méthode B : déploiement manuel
npm run build
# Pushez le contenu du dossier dist/ sur la branche gh-pages
```

### Étape 5 — Activez GitHub Pages

1. Dans votre dépôt GitHub → **Settings** → **Pages**
2. Source : **Deploy from a branch**
3. Branch : **gh-pages** / **/ (root)**
4. Cliquez **Save**

Votre site sera en ligne sur :
```
https://VOTRE_USERNAME.github.io/baabur-auto/
```

---

## 🎨 Personnalisation rapide

| Élément | Fichier |
|---|---|
| Canal de contact | `src/config.js` |
| Couleurs & fonts | `tailwind.config.js` + `src/index.css` |
| Véhicules affichés | `src/components/VehicleRental.jsx` |
| Services nettoyage | `src/components/Cleaning.jsx` |
| Services atelier | `src/components/Workshop.jsx` |
| Infos contact | `src/config.js` |

---

## 🛠️ Stack technique

- **React 18** — UI
- **Vite 5** — Build & dev server
- **Tailwind CSS 3** — Styles
- **Lucide React** — Icônes
- **gh-pages** — Déploiement GitHub Pages

---

## 📝 Roadmap v2 (futures versions)

- [ ] Nom de domaine personnalisé (ex: baabuauto.dj)
- [ ] Galerie photos réelles des véhicules
- [ ] Catalogue pièces détachées en ligne
- [ ] Carte interactive des ateliers partenaires
- [ ] Formulaire de devis en ligne
- [ ] Tableau de bord admin (gestion des demandes)
- [ ] Notifications par email automatisées
- [ ] Version mobile app (PWA)

---

Fait avec ❤️ à Djibouti 🇩🇯 — Baabur Auto © 2025
