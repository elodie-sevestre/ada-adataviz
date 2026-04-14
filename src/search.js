// ========================================================================
// search.js — barre de recherche
// ========================================================================
// Responsabilité unique : lit saisie user, met à jour l'état
// et déclenche un nouveau chargement
// ========================================================================

// ---- Imports -----------------------------------------------------------

import { loading } from "./loader.js";
import { setQuery, setOffset, query, offset } from "./state.js";
import { manageLoadBtnVisibility } from "./pagination.js";

// ---- Éléments du DOM ---------------------------------------------------

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// ---- Événement ---------------------------------------------------------

searchButton.addEventListener("click", () => {
  search();
});

const search = () => {
  const userSearch = searchInput.value;

  setQuery(userSearch.toLowerCase());
  setOffset(0); // on repart depuis le début à chaque nouvelle recherche

  // append -> false : on vide la liste avant d'afficher les nouveaux résultats
  loading(query, offset, false);

  searchInput.value = "";
  manageLoadBtnVisibility();
};
