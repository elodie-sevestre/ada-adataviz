// ========================================================================
// laoder.js — lancement de
// ========================================================================
// Responsabilité unique : définit chargement initial et gère les modules
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
 * @param {string} query : la commune recherchée. Vide = toutes les bornes.
 * @param {number} offset : le point de départ des résultats.
 * @param {boolean} append : si false -> vide liste affichée / si true -> ajoute
 */
export const loading = async (query, offset, append) => {
  const data = await requestAPI(query, offset); //! voir pour remonter une erreur ici
  renderList(data.results, append);

  // Stock le total pour savoir quand cacher le bouton "charger plus"
  // API : loading() reçoit total_count puis setTotalCount() le stocke dans state.js et pagination.js le lit
  setTotalCount(data.total_count);

  // Cache le compteur par défaut et l'affiche seulement si une recherche est active
  const counterContainer = document.getElementById("counter");
  counterContainer.classList.add("hidden");
  if (query) {
    counterContainer.classList.remove("hidden");
    const counterResult = document.querySelector("span");
    counterResult.textContent = `${data.total_count}`;
  }
};
