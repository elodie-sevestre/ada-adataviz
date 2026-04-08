// render.js : création des cartes HTML

const data = await requestAPI();
// console.log(data);
const container = document.getElementById("data");

data.results.forEach((item) => {
  const div = document.createElement("div");
  div.innerHTML = `<h3>${item.site.replaceAll("_", " ") || "Sans nom"}</h3>`;
  container.appendChild(div);
});
