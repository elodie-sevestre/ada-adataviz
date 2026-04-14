// ========================================================================
// pagination.js — logique du bouton "charger plus"
// ========================================================================
// Responsabilité unique : gère bouton et offset de pagination
// ========================================================================

// ---- Imports -----------------------------------------------------------

import { loading } from "./loader";
import {
  query,
  offset,
  totalCount,
  setOffset,
  initResultToShow,
} from "./state.js";

// ---- Élément du DOM ----------------------------------------------------

const moreLoadButton = document.getElementById("load-more");

// ---- Événement ---------------------------------------------------------

moreLoadButton.addEventListener("click", async () => {
  // avance le point de départ de X résultats
  setOffset(offset + initResultToShow);
  // charge les X résultats suivants sans effacer les précédents
  await loading(query, offset, true);
  // cache le bouton si tous les résultats sont affichés
  manageLoadBtnVisibility();
});

// ---- Visibilité du bouton ----------------------------------------------

export const manageLoadBtnVisibility = () => {
  if (offset + initResultToShow >= totalCount) {
    moreLoadButton.classList.add("hidden");
  } else {
    moreLoadButton.classList.remove("hidden");
  }
};
