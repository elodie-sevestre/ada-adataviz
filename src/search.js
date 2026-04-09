// search.js : logique de la barre de recherche

// je récupère le bouton et l'input dans le HTML

const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");

// quand on clique sur le bouton :

searchButton.addEventListener("click", () => {
  // je lis ce qu'il y a dans l'input
  const userSearch = searchInput.value;
  // je mets à jour query avec ce texte en minuscules
  query = userSearch.toLowerCase();
  // je remets offset à 0
  offset = 0;
  // j'appelle loading()
  loading();
});
