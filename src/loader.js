// ========================================================================
// laoder.js — lancement de
// ========================================================================
// Responsabilité unique : définit chargement initial et gère les modules.
// ========================================================================

// ---- Imports -----------------------------------------------------------
import { requestAPI } from "./api.js";
import { renderList } from "./render.js";
import { setTotalCount } from "./state.js";

import "./search.js";
import "./pagination.js";

// ---- Fonction principale -----------------------------------------------

/**
 * Lance une requête API et affiche les résultats.
 * @param {string} query - La commune recherchée. Vide = toutes les bornes.
 * @param {number} offset - Le point de départ des résultats.
 * @param {boolean} append - Si false, vide la liste avant d'afficher.
 *                           Si true, ajoute à la suite.
 */
export const loading = async (query, offset, append) => {
  const data = await requestAPI(query, offset);
  renderList(data.results, append);

  // On mémorise le total pour savoir quand cacher le bouton "charger plus"
  setTotalCount(data.total_count);

  // On cache le compteur par défaut, on l'affiche seulement si une recherche est active
  const counterContainer = document.getElementById("counter");
  counterContainer.classList.add("hidden");
  if (query) {
    counterContainer.classList.remove("hidden");
    const counterResult = document.querySelector("span");
    counterResult.textContent = `${data.total_count}`;
  }
};
