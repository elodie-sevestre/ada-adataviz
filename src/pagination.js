// pagination.js : logique offset / charger plus

// import
import { loading } from "./main.js";
import "./state.js";

// je récupère le bouton "charger plus" dans le HTML
const moreLoadButton = document.getElementById("load-more");

export let currentOffset = 0;
// quand on clique sur le bouton :
moreLoadButton.addEventListener("click", () => {
  // j'augmente offset de 8
  currentOffset += 8;
  // j'appelle loading() en mode "ajouter" (append = true)
  loading(query, currentOffset, true);
  if (currentOffset >= totalCount) {
    moreLoadButton.classList.add("hidden");
  }
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
