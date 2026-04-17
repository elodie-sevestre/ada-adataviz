// ========================================================================
// loader.js — lancement de l'application
// ========================================================================
// Responsabilité unique : définit chargement initial et gère les modules
// ========================================================================

// ---- Imports -----------------------------------------------------------
import { requestAPI } from "./api.js";
import { renderList } from "./render.js";
import { setTotalCount } from "./state.js";
import { addMarkersToMap, clearMarkers } from "./map.js";
// map.js : addMarkersToMap() place les marqueurs sur la carte
//          clearMarkers() vide les marqueurs existants avant un nouveau chargement

import "./search.js";
import "./pagination.js";

// ---- Fonction principale -----------------------------------------------

/**
 * Lance une requête API, affiche les résultats en cartes et sur la carte.
 * @param {string} query : la commune recherchée. Vide = toutes les bornes.
 * @param {number} offset : le point de départ des résultats.
 * @param {boolean} append : si false -> vide liste et marqueurs / si true -> ajoute
 */
export const loading = async (query, offset, append) => {
  const data = await requestAPI(query, offset);
  if (!data) {
    const title = document.getElementById("app-title");
    title.innerText = "Sorry 🤷‍♀️ ça ne fonctionne pas!";
  } else {
    // console.log(data);
    renderList(data.results, append);

    // Synchronise la carte avec la liste :
    // si append === false (nouvelle recherche ou chargement initial) -> repart de zéro
    // si append === true (charger plus) -> ajoute les nouveaux marqueurs
    if (append === false) {
      clearMarkers();
    }
    addMarkersToMap(data.results);

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
  }
};
