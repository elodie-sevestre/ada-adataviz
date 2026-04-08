# `await` en dehors d'une fonction `async`

Normalement, `await` ne peut s'utiliser qu'à l'intérieur d'une fonction marquée `async` :

```js
// ✅ usage classique
const maFonction = async () => {
  const data = await requestAPI();
};
```

Si tu essaies de faire `await` directement dans un fichier "normal", tu obtiens une erreur :

```js
// ❌ erreur dans un script classique
const data = await requestAPI(); // SyntaxError: await is only valid in async functions
```

---

## Pourquoi ça fonctionne ici ?

Parce que le fichier est chargé comme un **module ES** — c'est-à-dire qu'il utilise `import` / `export`. Or les modules ES ont une règle spéciale : **le `await` est autorisé directement à la racine du fichier** (on appelle ça le _top-level await_).

Ce qui rend le fichier un module ES, c'est cette ligne dans `index.html` :

```html
<script type="module" src="/src/main.js"></script>
```

`type="module"` dit au navigateur : _"traite ce fichier (et tous les fichiers qu'il importe) comme des modules ES"_. Du coup `render.js`, importé par `main.js`, bénéficie aussi de cette règle.

---

## Ce que ça change concrètement

Le navigateur attend que `requestAPI()` ait terminé **avant** d'exécuter la ligne suivante — exactement comme dans une fonction `async`, mais à l'échelle du fichier entier :

```js
const data = await requestAPI(); // ← le navigateur attend ici...
data.results.forEach(...);       // ← ...avant d'arriver ici
```

Sans `await`, `data` serait une `Promise` non résolue, et `data.results` serait `undefined`.
