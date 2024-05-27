// Importation des modules nécessaires
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUsername } from './../../redux/slices/user';
import { useState } from 'react';

// Définition du composant EditName
function EditName () {
  // Initialisation des états locaux
  const [display, setDisplay] = useState(true); // État pour gérer l'affichage du formulaire d'édition
  const [userName, setUserName] = useState(''); // État pour gérer le nom d'utilisateur

  // Initialisation du dispatch pour envoyer des actions à Redux
  const dispatch = useDispatch();

  // Fonction pour gérer la soumission du formulaire de modification du nom d'utilisateur
  const handleSubmitUsername = async (event) => {
    event.preventDefault();

    // Vérification de la validité du nom d'utilisateur
    if (!userName) {
      console.log("Username is required");
      return;
    }
    
    // Tentative d'envoi de la requête de modification du nom d'utilisateur
    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({userName}),
      });
    
      // Vérification de la réponse de la requête
      if (!response.ok) {
        console.log("Invalid Fields");
        return;
      }    
      
      // Récupération et affichage des données de la réponse
      const data = await response.json();
      console.log(data);
      console.log("userName:", userName);

      // Dispatch de l'action updateUsername pour mettre à jour le nom d'utilisateur dans le store Redux    
      dispatch(updateUsername(userName));
      setDisplay(!display); // Changement de l'état d'affichage pour cacher le formulaire

    } catch (error) {
      // Gestion des erreurs
      console.error(error);
    }
  }

  // Rendu du composant
  return (
      <div className="header">
          { display ? 
              // Si display est vrai, affichage du message de bienvenue et du bouton d'édition
              <div>
                  <h1>Welcome back 
                      <br />
                      {/* {userData.firstName} {userData.lastName} ! */}
                  </h1>
                  <button className="edit-button" onClick={() => setDisplay(!display)}>Edit Name</button>
              </div>
              :
              // Si display est faux, affichage du formulaire d'édition
              <div>
                  <h2>Edit user info</h2>
                  <form>
                      <div className="edit-input">
                          <label htmlFor="username">User name:</label>
                          <input
                              type="text"
                              id="username"
                              defaultValue={userData.userName}
                              onChange={(event) => setUserName(event.target.value)}
                          />
                      </div>
                      <div className="edit-input">
                          <label htmlFor="firstname">First name:</label>
                          <input
                              type="text"
                              id="firstname" 
                              defaultValue={userData.firstName}
                              disabled={true}
                          />
                      </div>
                      <div className="edit-input">
                          <label htmlFor="lastname">Last name:</label>
                          <input
                              type="text"
                              id="lastname" 
                              defaultValue={userData.lastName}
                              disabled={true}
                          />
                      </div>
                      <div className="buttons">
                          <button className="edit-username-button" onClick={handleSubmitUsername}>Save</button>
                          <button className="edit-username-button" onClick={() => setDisplay(!display)}>Cancel</button>
                      </div>
                  </form>
              </div>
          }
      </div>
  )
}

// Exportation du composant EditName pour utilisation dans d'autres parties de l'application
export default EditName;