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

let query = "";
let offset = 0;

const loading = async () => {
  const data = await requestAPI(query, offset);
  renderList(data.results);
};

loading();
