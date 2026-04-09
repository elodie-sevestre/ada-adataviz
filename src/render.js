// render.js : construit et insère les cartes HTML dans le DOM
// Responsabilité unique : affichage des données reçues

import { requestAPI } from "./api.js";

// Récupération de l'élément HTML qui contiendra la liste des bornes
const list = document.getElementById("born-list");

/**
 * Crée une carte HTML pour une borne wifi et l'ajoute à la liste.
 * @param {Object} result objet représentant une borne wifi
 * @param {string} result.site nom du site
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
  list.appendChild(div); // insère la carte dans le DOM

  const details = div.querySelector(".details");
  const button = div.querySelector(".load-details");

  button.addEventListener("click", () => {
    details.classList.toggle("hidden"); // affiche ou cache details
    // changer le texte du bouton
    if (button.textContent === "Voir plus") {
      button.textContent = "Voir moins";
    } else {
      button.textContent = "Voir plus";
    }
  });
};

// Appel à l'API (await possible ici car le fichier est chargé comme module ES)
const data = await requestAPI();

// Pour chaque borne reçue, on crée et affiche une carte
data.results.forEach((result) => createCard(result));
