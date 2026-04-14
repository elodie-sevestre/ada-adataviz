// ========================================================================
// render.js — affichage des cartes
// ========================================================================
// Responsabilité unique : reçoit données et les affiche
// ========================================================================

const list = document.getElementById("born-list");

// ---- Création d'une carte ----------------------------------------------

/**
 * Crée et insère une carte pour une borne wifi.
 * @param {Object} result : borne wifi
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

  // affiche ou cache les détails et adapte le texte du bouton
  button.addEventListener("click", () => {
    details.classList.toggle("hidden");
    button.textContent =
      button.textContent === "Voir plus" ? "Voir moins" : "Voir plus";
  });
};

// ---- Affichage de la liste ---------------------------------------------

/**
 * Affiche une liste de bornes
 * @param {Array} results : tableau de bornes renvoyé par API
 * @param {boolean} append : si false -> liste vidée
 *                           si true -> ajoute à la suite
 */
export const renderList = (results, append) => {
  if (append === false) {
    list.innerHTML = "";
  }
  results.forEach((result) => createCard(result));
};
