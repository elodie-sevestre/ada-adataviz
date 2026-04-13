// ============================================================
// render.js — construction et affichage des cartes dans le DOM
// ============================================================
// Responsabilité unique : recevoir des données et les afficher.
// Ne fait pas de requête API, ne gère pas les événements de recherche.
// ============================================================

const list = document.getElementById("born-list");

// ---- Création d'une carte ----------------------------------

/**
 * Crée une carte HTML pour une borne wifi et l'insère dans la liste.
 * @param {Object} result - Un objet représentant une borne (site, adresse, commune...).
 */
export const createCard = (result) => {
  const div = document.createElement("div");
  div.classList.add("card");
  div.innerHTML = `
  <p>${result.site.replaceAll("_", " ")}</p>
  <div class="details hidden">
    <p>${result.adresse}</p>
    <p>${result.code_postal} - ${result.commune}</p>
  </div>
  <button class="load-details">Voir plus</button>
  `;
  list.appendChild(div);

  const details = div.querySelector(".details");
  const button = div.querySelector(".load-details");

  // Affiche ou cache les détails au clic, et change le texte du bouton
  button.addEventListener("click", () => {
    details.classList.toggle("hidden");
    button.textContent = button.textContent === "Voir plus" ? "Voir moins" : "Voir plus";
  });
};

// ---- Affichage de la liste ---------------------------------

/**
 * Affiche une liste de bornes.
 * @param {Array} results - Le tableau de bornes renvoyé par l'API.
 * @param {boolean} append - Si false, vide la liste avant d'afficher (nouvelle recherche).
 *                           Si true, ajoute à la suite (charger plus).
 */
export const renderList = (results, append) => {
  if (append === false) {
    list.innerHTML = ""; // on efface les cartes précédentes
  }
  results.forEach((result) => createCard(result));
};
