import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateUsername } from "../../redux/slices/userSlice";
import "./EditName.scss";

function EditName() {
  const [display, setDisplay] = useState(false);
  const userData = useSelector((state) => state.user.userProfil);
  const token = useSelector((state) => state.user.userToken);
  const dispatch = useDispatch();
  const [error, setError] = useState("");

  const {firstName,lastName } = useSelector((state) => state.user);


  const [userName, setUserName] = useState(userData.userName || "");

  useEffect(() => {
    if (userData.userName) {
      setUserName(userData.userName);
    }
  }, [userData.userName]);

  const handleSubmitUsername = async (event) => {
    event.preventDefault();
    if (!userName) {
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
      dispatch(updateUsername(data.body.userName));
      setDisplay(false);
    } catch (error) {
      setError("A problem occurred with the fetch operation: " + error.message);
    }
  };

 
  return (
    <div className="header">
      {!display ? (
        <button className="edit-button" onClick={() => setDisplay(true)}>
          Edit Name
        </button>
      ) : (
        <div className="edit-content">
          <form onSubmit={handleSubmitUsername}>
            <div className="edit-input">
     
              <label htmlFor="username">User name : </label>
              <input
                type="text"
                id="username"
                value={userName}
                onChange={(event) => setUserName(event.target.value)}
                aria-label="User name"
              />
              
            </div>
            <div className="display-info">
              <p>
                <label htmlFor="firstname">First name : </label>
                <input
                  type="text"
                  id="firstname"
                  disabled
                  value={userData.firstName}
                />
              </p>
              <p>
                  <label htmlFor="lastname">Last Name : </label>
                <input
                  type="text"
                  id="lastname"
                  disabled
                  value={userData.lastName}
                />
              </p>
            </div>
            <div className="buttons">
              <button type="submit" className="edit-username-button">
                Save
              </button>
              <button
                type="button"
                className="edit-username-button"
                onClick={() => setDisplay(false)}
              >
                Cancel
              </button>
            </div>
            {error && <p className="error-message">{error}</p>}
          </form>
        </div>
      )}
    </div>
  );
};

export default EditName;
