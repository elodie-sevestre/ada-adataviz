// api.js : contient fetch et construction de l'url

// 1. url API
const url = `
/api/explore/v2.1/catalog/datasets/244400404_wifi-public-exterieur-nantes-metropole/records?limit=20&offset=0`;
console.log(url);

// 2. envoyer la requête HTTP = fetch
// 2.1. await = "attends que le serveur répode avant de continuer"
const reponse = await fetch(url);
// console.log(reponse);
