// api.js : contient fetch et construction de l'url

const url = `https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_wifi-public-exterieur-nantes-metropole/records`;

export const requestAPI = async () => {
  try {
    // new : permet de créer un objet (instance)
    // URLSearchParams() : classe qui gère des paramètres d'URL
    // .set() : méthode de l'objet qui ajoute des paramètres
    const URLparameters = new URLSearchParams();
    URLparameters.set("limit", "20");
    URLparameters.set("offset", "0");
    const response = await fetch(`${url}?${URLparameters}`); // requête HTTP
    console.log(response);
    const data = await response.json(); // extraire JSON pour que JS le manipule facilement
    return data;
  } catch (error) {
    console.error("Erreur:", error);
  }
};
