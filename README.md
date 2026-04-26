# adataviz 📡

Visualisation des bornes wifi publiques de Nantes Métropole.

> Projet réalisé dans le cadre de ma formation à Ada Tech School (2026).

---

## À quoi ça sert ?

Une web app qui permet de trouver les bornes wifi gratuites de Nantes Métropole — filtrables par commune, affichées en cartes et sur une carte interactive.

---

## Fonctionnalité principale

La recherche synchronisée : quand on cherche une commune, la liste de cartes, la carte Mapbox et le compteur de résultats se mettent à jour simultanément.

---

## Stack technique

- JavaScript vanilla — modules ES6
- API REST Nantes Métropole Open Data
- Mapbox GL JS (développé par Maélie)
- Vite

---

## Architecture

Chaque fichier a une seule responsabilité :

| Fichier         | Rôle                                |
| --------------- | ----------------------------------- |
| `main.js`       | Point d'entrée                      |
| `state.js`      | Données partagées de l'app          |
| `search.js`     | Gestion de la saisie utilisateur    |
| `loader.js`     | Fait le lien entre tous les modules |
| `api.js`        | Requêtes vers l'API                 |
| `render.js`     | Affichage des cartes dans le DOM    |
| `pagination.js` | Bouton "charger plus"               |
| `map.js`        | Carte Mapbox — développé par Maélie |

---

## Lancer le projet

```bash
npm install
npm run dev
```

Ajouter un fichier `.env` à la racine avec :

```
VITE_MAPBOX_TOKEN=votre_token_ici
```

---

## Données

[Nantes Métropole Open Data](https://data.nantesmetropole.fr) — bornes wifi publiques extérieures.

---

_© 2026 Elodie Sevestre — Ada Tech School_
