// render.js : création des cartes HTML

// ============================== IMPORT ==============================

import { requestAPI } from "./api.js";

// ============================== DOM ==============================

const data = await requestAPI();
const list = document.getElementById("born-list");

export const createCard = (result) => {
  const results = data.results;
  results.forEach((result) => {
    const div = document.createElement("div");
    div.innerHTML = `${result.site.replaceAll("_", " ")} - ${result.adresse}`;
    list.appendChild(div);
  });
};

createCard();
