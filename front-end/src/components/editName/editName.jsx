import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUsername } from './../../redux/slices/userSlice';

function EditName () {
  const [display, setDisplay] = useState(true);
  const [userName, setUserName] = useState('');
  const userData = useSelector((state) => state.user.userProfil);

  const dispatch = useDispatch();

  // Get the token from Redux state
  const token = useSelector(state => state?.login?.userToken || null);

  const handleSubmitUsername = async (event) => {
    event.preventDefault();

    if (!userName) {
      console.log("Username is required");
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({userName}),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Dispatch the updateUsername action with the new username
      dispatch(updateUsername(data.userName));

      // Hide the form after successful submission
      setDisplay(false);

    } catch (error) {
      console.log("A problem occurred with the fetch operation: " + error.message);
    }
  };

  // Rendu du composant
  return (
      <div className="header">
          { display ? 
              // Si display est vrai, affichage du message de bienvenue et du bouton d'édition
              <div>
                  <h1>Welcome back 
                      <br />
                      {userData.firstName} {userData.lastName} !
                  </h1>
                  <button className="edit-button" onClick={() => setDisplay(!display)}>Edit Name</button>
              </div>
              :
              // Si display est faux, affichage du formulaire d'édition
            
               
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
          
          }
      </div>
  )
}

// Exportation du composant EditName pour utilisation dans d'autres parties de l'application
export default EditName;