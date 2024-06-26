import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsername } from "./../../redux/slices/userSlice";
import "./editName.scss";

function EditName() {
  const [display, setDisplay] = useState(false); // Modifiez cette ligne
  const userData = useSelector((state) => state.user.userProfil);
  const token = useSelector((state) => state.user.userToken);
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  // Utilisez useEffect pour initialiser userName avec la valeur actuelle dès que userData est disponible ou modifié
  const [userName, setUserName] = useState(userData.userName || "");

  useEffect(() => {
    if (userData.userName) {
      console.log("Mise à jour de userName avec :", userData.userName);
      setUserName(userData.userName);
    }
  }, [userData.userName]);

  const handleSubmitUsername = async (event) => {
    event.preventDefault();
    if (!userName) {
      console.log("Username is required");
      setError("Username is required");
      return;
    }

    try {
      const response = await fetch("http://localhost:3001/api/v1/user/profile", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ userName }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      // debugger utlisé pour vérifier les valeurs de userName et data.body.userName et trouver l'erreur  de pourquoi le nom d'utilisateur n'estait pas affiche
      dispatch(updateUsername(data.body.userName));
      setDisplay(false);
    } catch (error) {
      console.log("A problem occurred with the fetch operation: " + error.message);
      setError("A problem occurred with the fetch operation: " + error.message);
    }
  };

  return (
    <div className="header">
      <button className="edit-button" onClick={() => setDisplay(true)}>
        Edit Name
      </button>
      {display && (
        <div className="modal" onClick={() => setDisplay(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <form onSubmit={handleSubmitUsername}>
              <div className="edit-input">
                <label htmlFor="username">User name:</label>
                <input type="text" id="username" value={userName} onChange={(event) => setUserName(event.target.value)} aria-label="User name" />
              </div>
              <div className="buttons">
                <button type="submit" className="edit-username-button">
                  Save
                </button>
                <button type="button" className="edit-username-button" onClick={() => setDisplay(false)}>
                  Cancel
                </button>
              </div>
              {error && <p className="error-message">{error}</p>}
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default EditName;
