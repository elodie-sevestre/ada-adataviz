// ============================================================
// api.js — communication avec l'API Nantes Métropole
// ============================================================
// Responsabilité unique : construire l'URL et récupérer
// les données brutes. Ne touche pas au DOM.
// ============================================================

const url = `https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_wifi-public-exterieur-nantes-metropole/records`;

// ---- Requête principale ------------------------------------

/**
 * Récupère les bornes wifi depuis l'API.
 * @param {string} query - La commune recherchée (ex: "nantes"). Vide = tout afficher.
 * @param {number} offset - Le point de départ des résultats (0 = depuis le début).
 * @returns {Promise<Object>} - Un objet avec total_count (nombre total) et results (tableau de bornes).
 */
export const requestAPI = async (query, offset) => {
  try {
    // URLSearchParams construit les paramètres proprement
    // sans avoir à coller des chaînes à la main dans l'URL
    const URLparameters = new URLSearchParams();
    URLparameters.set("limit", "8");   // nombre de résultats par page
    URLparameters.set("offset", offset); // depuis quel résultat on commence
    if (query) {
      URLparameters.set("where", `commune like '${query}'`);
    }
    const response = await fetch(`${url}?${URLparameters}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};
