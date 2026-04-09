# Notes — render.js

## Ce que fait ce fichier

`render.js` a une seule responsabilité : **transformer les données brutes de l'API en cartes HTML visibles dans la page**.

Il reçoit un objet borne → il crée une carte → il l'insère dans le DOM.

---

## Les pièces du puzzle

### 1. L'import

```javascript
import { requestAPI } from "./api.js";
```

`render.js` a besoin des données. Il les demande à `api.js` via `import`.
Sans ce mot-clé, `requestAPI` n'existe pas dans ce fichier.

---

### 2. Le point d'ancrage dans le DOM

```javascript
const list = document.getElementById("born-list");
```

JavaScript cherche dans le HTML l'élément qui a l'`id="born-list"`.
C'est dans cette `<div>` que toutes les cartes seront ajoutées.

> ⚠️ Si l'`id` dans le HTML et dans le JS ne correspondent pas, `list` vaut `null` et tout plante.

---

### 3. La fonction `createCard`

```javascript
export const createCard = (result) => { ... }
```

Elle reçoit **un objet borne** (`result`) et fait trois choses :

**a) Créer la carte**
```javascript
const div = document.createElement("div");
div.classList.add("card");
```
Crée une `<div>` en mémoire et lui donne la classe CSS `card`.

**b) Remplir la carte avec du HTML**
```javascript
div.innerHTML = `
  <p>${result.site.replaceAll("_", " ")}</p>
  <div class="details hidden">
    <p>${result.adresse}</p>
    <p>${result.code_postal} - ${result.commune}</p>
  </div>
  <button class="load-details">Voir plus</button>
`;
```

- `result.site` → nom du site (les `_` remplacés par des espaces)
- `result.adresse`, `result.code_postal`, `result.commune` → détails cachés par défaut
- La classe `hidden` sur `.details` la cache dès le départ (via CSS : `.hidden { display: none }`)
- Le bouton permet de basculer l'affichage

**c) Insérer la carte dans la page**
```javascript
list.appendChild(div);
```
La carte (créée en mémoire) est maintenant visible dans la page.

---

### 4. Le bouton "Voir plus / Voir moins"

Après avoir inséré la carte, on récupère le bouton et la div details **à l'intérieur de `div`** :

```javascript
const details = div.querySelector(".details");
const button = div.querySelector(".load-details");
```

> ⚠️ On utilise `div.querySelector` et non `document.querySelector`.
> `document` chercherait dans toute la page → trouverait toujours la première carte.
> `div` cherche uniquement dans la carte en cours de création.

On écoute le clic sur le bouton :

```javascript
button.addEventListener("click", () => {
  details.classList.toggle("hidden");
  if (button.textContent === "Voir plus") {
    button.textContent = "Voir moins";
  } else {
    button.textContent = "Voir plus";
  }
});
```

- `classList.toggle("hidden")` : si la classe est là → il l'enlève. Si elle n'est pas là → il l'ajoute. Un seul appel gère les deux sens.
- `textContent` (sans parenthèses) : propriété pour lire ou écrire le texte d'un élément.
  - `=== "Voir plus"` → on lit
  - `= "Voir moins"` → on écrit

---

### 5. L'appel à l'API et l'affichage

```javascript
const data = await requestAPI();
data.results.forEach((result) => createCard(result));
```

- `await` attend que l'API réponde avant de continuer
- `forEach` parcourt chaque borne du tableau et appelle `createCard` pour chacune

---

## Schéma du flux

```
API répond avec data.results (tableau de bornes)
        ↓
forEach parcourt chaque borne
        ↓
createCard(result) crée une <div class="card">
        ↓
innerHTML remplit la carte avec site + details + bouton
        ↓
appendChild colle la carte dans #born-list
        ↓
addEventListener écoute le clic sur le bouton
        ↓
toggle("hidden") + textContent basculent l'affichage
```

---

## Pièges à retenir

| Piège | Ce qu'il faut faire |
|-------|-------------------|
| `document.querySelector` trouve toujours la première carte | Utiliser `div.querySelector` |
| `.details { display: none }` ET classe `hidden` → conflit | Choisir l'un ou l'autre. Ici : classe `hidden` dans le HTML, règle CSS `.hidden { display: none }` |
| `textContent()` avec parenthèses → erreur | `textContent` est une propriété, pas une fonction |
| `===` pour assigner une valeur | `===` compare, `=` assigne |
