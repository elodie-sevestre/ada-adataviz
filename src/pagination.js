// ============================================================
// pagination.js — logique du bouton "charger plus"
// ============================================================
// Responsabilité unique : incrémenter l'offset à chaque clic
// et cacher le bouton quand il n'y a plus de résultats.
// ============================================================

// ---- Imports -----------------------------------------------

import { loading } from "./main.js";
import {
  query,
  offset,
  totalCount,
  setOffset,
  initResultToShow,
} from "./state.js";

// ---- Élément du DOM ----------------------------------------

const moreLoadButton = document.getElementById("load-more");

// ---- Événement ---------------------------------------------

moreLoadButton.addEventListener("click", async () => {
  // On avance de 8 dans les résultats (liaison vivante : offset reflète
  // toujours la valeur à jour dans state.js)
  setOffset(offset + initResultToShow);
  // append = true : on ajoute les nouvelles cartes sans effacer les précédentes
  await loading(query, offset, true);

  // Si on a affiché tous les résultats, on cache le bouton
  manageLoadBtnVisibility();
});

// fonction pour gérer apparition/masque charger plus

export const manageLoadBtnVisibility = () => {
  if (offset + initResultToShow >= totalCount) {
    moreLoadButton.classList.add("hidden");
  } else {
    moreLoadButton.classList.remove("hidden");
  }
};
