# 📝 Note — C'est quoi Leaflet ?

**Leaflet** est une bibliothèque JavaScript open source qui permet d'afficher des **cartes interactives** dans une page web.

C'est l'alternative légère et gratuite à Google Maps — elle fait tourner des milliers de sites de cartographie.

---

## Ce qu'elle permet de faire

- Afficher une carte du monde (ou d'une zone précise)
- Placer des **marqueurs** à des coordonnées GPS
- Afficher des **popups** au clic sur un marqueur
- Zoomer, déplacer la carte à la souris

---

## Dans le projet concrètement

Chaque borne WiFi a un champ `latitude` et `longitude`. Avec Leaflet on peut les afficher sur une carte :

```javascript
// Créer une carte centrée sur Nantes
const carte = L.map("ma-carte").setView([47.218, -1.553], 12);

// Ajouter les tuiles (le fond de carte visuel)
L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png").addTo(carte);

// Placer un marqueur pour une borne
L.marker([47.218029, -1.542346])
  .addTo(carte)
  .bindPopup("📶 Gare Nord — Nantes"); // popup au clic
```

---

## D'où viennent les images de la carte ?

Leaflet ne fournit pas les images — il a besoin d'une source de **tuiles** (_tiles_). La source gratuite la plus courante est **OpenStreetMap**, la carte collaborative et open source (le Wikipedia des cartes).

```
Leaflet       = le moteur qui gère l'interactivité
OpenStreetMap = les images de la carte
```

---

## Comment l'installer dans le projet

```bash
pnpm add leaflet
```

Puis dans le fichier JS :

```javascript
import L from "leaflet";
import "leaflet/dist/leaflet.css";
```

---

## ⚠️ Point d'attention sur les données

L'entrée `Orvault_Bibliotheque` a des coordonnées GPS incorrectes (`lon: 1.888, lat: 46.6` — centre de la France). Toutes les autres bornes sont bien dans la région nantaise (`lon` autour de `-1.5`, `lat` autour de `47.2`).

Il faudra filtrer cet enregistrement avant de placer les marqueurs sur la carte :

```javascript
// Garder seulement les bornes avec des coordonnées cohérentes
const bornesValides = bornes.filter((b) => b.longitude < 0);
```
