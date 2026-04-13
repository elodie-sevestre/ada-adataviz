// ============================================================
// state.js — variables partagées entre tous les fichiers
// ============================================================
// Ce fichier centralise l'état de l'application
// Les autres fichiers importent ces variables et leurs setters
// ============================================================

// Nombre de résultats affichés au départ
export const initResultToShow = 8;

// Recherche en cours (ex: "nantes") -> vide par défaut
export let query = "";

// Point de départ des résultats à afficher
export let offset = 0;

// Nombre total de bornes renvoyées par l'API pour la recherche en cours
export let totalCount = 0;

// ---- Setters -----------------------------------------------
// Fonction permettant de modifier les variables importées

export const setQuery = (value) => {
  query = value;
};
export const setOffset = (value) => {
  offset = value;
};
export const setTotalCount = (value) => {
  totalCount = value;
};
