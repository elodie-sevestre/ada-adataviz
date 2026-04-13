// ============================================================
// search.js — logique de la barre de recherche
// ============================================================
// Responsabilité unique : lire la saisie de l'utilisateur,
// mettre à jour l'état et déclencher un nouveau chargement.
// ============================================================

// ---- Imports -----------------------------------------------

import { loading } from "./main";
import { setQuery, setOffset, query, offset } from "./state";

// ---- Éléments du DOM ---------------------------------------

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// ---- Événement ---------------------------------------------

searchButton.addEventListener("click", () => {
  const userSearch = searchInput.value;

  setQuery(userSearch.toLowerCase()); // on met à jour la recherche dans state.js
  setOffset(0); // on repart depuis le début à chaque nouvelle recherche

  // append = false : on vide la liste avant d'afficher les nouveaux résultats
  loading(query, offset, false);

  searchInput.value = ""; // on vide le champ de saisie
});
