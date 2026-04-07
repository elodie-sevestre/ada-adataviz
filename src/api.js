// api.js : contient fetch et construction de l'url

export const requestAPI = async () => {
  try {
    const url = `
        https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_wifi-public-exterieur-nantes-metropole/records?limit=20&offset=0`;
    const reponse = await fetch(url); // requête HTTP
    const data = await reponse.json(); // extraire JSON
    return data;
  } catch (error) {
    console.error("Erreur:", error);
  }
};
