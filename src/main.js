// main.js : point d'entrée de l'application
// Responsabilité unique : importer les modules et initialiser l'app

// Import du fichier de styles global
import "./style.css";

// Import du module API (déclenche son initialisation si nécessaire)
import { requestAPI } from "./api.js";

// Import du module de rendu — déclenche automatiquement :
// 1. la requête à l'API
// 2. la création et l'affichage des cartes dans le DOM
import { renderList } from "./render.js";

// Import du module de recherche
import "./search.js";

// Import du module de pagination/charger plus
import "./pagination.js";

// ==============================================================================

export let query = "";
export let offset = 0;
export let totalCount = 0;

export const setQuery = (value) => {
  query = value;
};
export const setOffset = (value) => {
  offset = value;
};

export const setTotalCount = (value) => {
  totalCount = value;
};

export const loading = async (query, offset) => {
  // console.log("query :", query);
  const data = await requestAPI(query, offset);
  renderList(data.results);
  setTotalCount(data.total_count);
  // masquer par défaut <p id="counter">"X bornes trouvées"</p>
  const counterContainer = document.getElementById("counter");
  counterContainer.classList.add("hidden");
  // afficher quand une recherche est effectuée
  if (query) {
    counterContainer.classList.remove("hidden");
    // modifier la valeur de X en fonction du nombre de résultats
    const counterBorn = document.querySelector("span");
    counterBorn.textContent = `${data.total_count}`;
  }
};

loading(query, offset);
