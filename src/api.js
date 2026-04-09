// api.js : gère la communication avec l'API externe
// Responsabilité unique : construire l'URL et récupérer les données brutes

// IMPORTS

// import { renderList } from "./render";

// URL de base de l'API open data de Nantes Métropole
const url = `https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_wifi-public-exterieur-nantes-metropole/records`;

/**
 * Récupère les données des bornes wifi depuis l'API Nantes Métropole.
 * @returns {Promise<Object>} - Un objet contenant total_count et results (tableau de bornes)
 */
export const requestAPI = async (query, offset) => {
  try {
    // URLSearchParams permet de construire les paramètres de l'URL proprement
    // sans concaténer des chaînes à la main
    const URLparameters = new URLSearchParams();
    URLparameters.set("limit", "8"); // nombre de résultats par page
    URLparameters.set("offset", offset); // point de départ (0 = depuis le début)
    if (query) {
      URLparameters.set("where", `commune like '${query}'`);
    }
    console.log(url);

    const response = await fetch(`${url}?${URLparameters}`); // requête HTTP GET
    console.log(response);
    const data = await response.json(); // convertit la réponse en objet JavaScript
    return data;
  } catch (error) {
    // En cas d'échec réseau ou de réponse invalide
    console.error("Erreur lors de la récupération des données :", error);
  }
};
