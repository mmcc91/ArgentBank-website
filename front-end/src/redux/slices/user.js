// Importation des types d'actions
import { GET_USERPROFILE, EDIT_USERNAME } from "./types";

// Action pour récupérer les données de l'utilisateur
export const userProfile = (userData) => {
    return {
        type: GET_USERPROFILE, // Type de l'action
        payload: userData, // Données à passer avec l'action
    }
}

// Action pour mettre à jour le nom d'utilisateur
export const updateUsername = (userName) => {
    // Log pour le débogage
    console.log("Dispatching updateUsername with", userName);

    return {
        type: EDIT_USERNAME, // Type de l'action
        payload: userName, // Données à passer avec l'action
    }
}