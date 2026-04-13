// ============================================================
// pagination.js — logique du bouton "charger plus"
// ============================================================
// Responsabilité unique : incrémenter l'offset à chaque clic
// et cacher le bouton quand il n'y a plus de résultats.
// ============================================================

// ---- Imports -----------------------------------------------

import { loading } from "./main.js";
import { query, offset, totalCount, setOffset } from "./state.js";

// ---- Élément du DOM ----------------------------------------

const moreLoadButton = document.getElementById("load-more");

// ---- Événement ---------------------------------------------

moreLoadButton.addEventListener("click", () => {
  // On avance de 8 dans les résultats (liaison vivante : offset reflète
  // toujours la valeur à jour dans state.js)
  setOffset(offset + 8);

  // append = true : on ajoute les nouvelles cartes sans effacer les précédentes
  loading(query, offset, true);

  // Si on a affiché tous les résultats, on cache le bouton
  if (offset >= totalCount) {
    moreLoadButton.classList.add("hidden");
  }
});
