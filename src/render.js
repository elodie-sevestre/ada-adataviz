const list = document.getElementById("born-list");

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

  button.addEventListener("click", () => {
    details.classList.toggle("hidden");
    button.textContent = button.textContent === "Voir plus" ? "Voir moins" : "Voir plus";
  });
};

export const renderList = (results, append) => {
  if (append === false) {
    list.innerHTML = "";
  }
  results.forEach((result) => createCard(result));
};
