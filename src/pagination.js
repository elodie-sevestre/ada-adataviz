// pagination.js : logique offset / charger plus

// import
import { query, loading } from "./main.js";

// je récupère le bouton "charger plus" dans le HTML
const moreLoadButton = document.getElementById("load-more");

// quand on clique sur le bouton :
moreLoadButton.addEventListener("click", () => {
  // j'augmente offset de 8
  // j'appelle loading() en mode "ajouter" (append = true)
  loading(query, 8);
});

// render.js

// renderList reçoit maintenant deux paramètres : results et append
// si append est false :
// vider la liste
// pour chaque borne, créer une carte

// main.js

// loading reçoit un paramètre append
// elle passe append à renderList
// au chargement initial → loading(false)
// au clic "charger plus" → loading(true)
