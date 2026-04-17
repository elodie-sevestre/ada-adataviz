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

// Event si user tape sur la touche "Entrée" après la saisie de sa recherche
searchInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    search();
  }
});

// Event si user clique sur le bouton "Rechercher" après la saisie de sa recherche

searchButton.addEventListener("click", () => {
  search();
});

const search = async () => {
  const userSearch = searchInput.value;
  setQuery(userSearch.toLowerCase());
  setOffset(0); // repart depuis le début à chaque nouvelle recherche
  await loading(query, offset, false); // append -> false : vide la liste avant d'afficher les nouveaux résultats
  searchInput.value = "";
  manageLoadBtnVisibility();
};
