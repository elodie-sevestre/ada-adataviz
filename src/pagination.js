// pagination.js : logique offset / charger plus

// import
import { loading } from "./main.js";
import { query, offset, totalCount, setOffset } from "./state.js";

// je récupère le bouton "charger plus" dans le HTML
const moreLoadButton = document.getElementById("load-more");

// quand on clique sur le bouton :
moreLoadButton.addEventListener("click", () => {
  // j'augmente offset de 8
  setOffset(offset + 8);
  // j'appelle loading() en mode "ajouter" (append = true)
  loading(query, offset, true);
  if (offset >= totalCount) {
    moreLoadButton.classList.add("hidden");
  }
});
