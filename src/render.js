// render.js : construit et insère les cartes HTML dans le DOM
// Responsabilité unique : affichage des données reçues

import { requestAPI } from "./api.js";

// Récupération de l'élément HTML qui contiendra la liste des bornes
const list = document.getElementById("born-list");

/**
 * Crée une carte HTML pour une borne wifi et l'ajoute à la liste.
 * @param {Object} result objet représentant une borne wifi
 * @param {string} result.site nom du site
 * @param {string} result.adresse adresse de la borne
 */
export const createCard = (result) => {
  const div = document.createElement("div");

  div.innerHTML = `${result.site.replaceAll("_", " ")} - ${result.adresse}`;

  list.appendChild(div); // insère la carte dans le DOM
};

// Appel à l'API (await possible ici car le fichier est chargé comme module ES)
const data = await requestAPI();

// Pour chaque borne reçue, on crée et affiche une carte
data.results.forEach((result) => createCard(result));
