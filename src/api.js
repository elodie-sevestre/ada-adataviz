// api.js : contient fetch et construction de l'url

export const requestAPI = async () => {
  try {
    // new : permet de créer un objet (instance)
    // URLSearchParams() : classe qui gère des paramètres d'URL
    // .set() : méthode de l'objet qui ajoute des paramètres
    const URLparameters = new URLSearchParams();
    URLparameters.set("limit", "20");
    URLparameters.set("offset", "0");

    const url = `https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_wifi-public-exterieur-nantes-metropole/records`;
    const reponse = await fetch(`${url}?${URLparameters}`); // requête HTTP
    console.log(reponse);
    const data = await reponse.json(); // extraire JSON
    // console.log(data.total_count);
    // console.log(data.results);
    return data;
  } catch (error) {
    console.error("Erreur:", error);
  }
};
