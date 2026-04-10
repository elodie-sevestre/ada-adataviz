const url = `https://data.nantesmetropole.fr/api/explore/v2.1/catalog/datasets/244400404_wifi-public-exterieur-nantes-metropole/records`;

export const requestAPI = async (query, offset) => {
  try {
    const URLparameters = new URLSearchParams();
    URLparameters.set("limit", "8");
    URLparameters.set("offset", offset);
    if (query) {
      URLparameters.set("where", `commune like '${query}'`);
    }
    const response = await fetch(`${url}?${URLparameters}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
  }
};
