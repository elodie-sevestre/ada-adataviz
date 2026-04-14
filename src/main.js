// ========================================================================
// main.js — point d'entrée de l'application
// ========================================================================
// Responsabilité unique : importer le CSS et lancer l'affichage initial
// ========================================================================

// ---- Imports -----------------------------------------------------------

import "./style.css";
import { loading } from "./loader.js";
import { query, offset } from "./state.js";

// ---- Initialisation ----------------------------------------------------

// offset = 0, pas de recherche, liste vide au départ
loading(query, offset, true);
