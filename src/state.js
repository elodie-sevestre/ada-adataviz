// ============================================================
// state.js — variables partagées entre tous les fichiers
// ============================================================
// Ce fichier centralise l'état de l'application.
// Les autres fichiers importent ces variables et leurs setters
// au lieu de gérer leur propre copie locale.
// ============================================================

// La recherche en cours (ex: "nantes"). Vide par défaut.
export let query = "";

// Le point de départ des résultats à afficher (ex: 0, 8, 16...).
export let offset = 0;

// Le nombre total de bornes renvoyées par l'API pour la recherche en cours.
export let totalCount = 0;

// ---- Setters -----------------------------------------------
// On ne peut pas modifier directement une variable importée
// depuis un autre fichier. On passe donc par ces fonctions.

export const setQuery = (value) => { query = value; };
export const setOffset = (value) => { offset = value; };
export const setTotalCount = (value) => { totalCount = value; };
