// search.js : logique de la barre de recherche

// IMPORTS
import "./state";
import { loading } from "./main";
import { currentOffset } from "./pagination";

// je récupère le bouton et l'input dans le HTML

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// quand on clique sur le bouton :

searchButton.addEventListener("click", () => {
  // je lis ce qu'il y a dans l'input
  const userSearch = searchInput.value;
  // je mets à jour query avec ce texte en minuscules
  setQuery(userSearch.toLowerCase());

  // je remets offset à 0
  setOffset(0);
  // j'appelle loading()
  loading(query, currentOffset, false);
  searchInput.value = "";
});
