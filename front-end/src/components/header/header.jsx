import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Logo from "../../../designs/img/argentBankLogo.png";
import "./header.scss";
import { getUserInfo, cleanStore } from '../../redux/slices/userSlice';

const Header = () => {
  const dispatch = useDispatch();

  // Récupération du token et des données de l'utilisateur
  const userToken = useSelector((state) => state.user.userToken);
  const userProfil = useSelector((state) => state.user.userProfil);
  
  const [display, setDisplay] = useState(true);
  const [userName, setUserName] = useState('');

  const handleLogout = () => {
    dispatch(cleanStore(null));
    localStorage.removeItem("token");
  };

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
          'Authorization': `Bearer ${userToken}`,
        },
        body: JSON.stringify({ userName }),
      });

      if (!response.ok) {
        console.log("Invalid Fields");
        return;
      }

      const data = await response.json();
      console.log(data);
      console.log("userName:", userName);

      // Dispatch de l'action pour mettre à jour le nom d'utilisateur dans le store Redux
      dispatch(getUserInfo({ ...userProfil, userName }));
      setDisplay(!display);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </a>

      {!userToken ? (
        <a className="main-nav-item" href="login">
          <i className="fa fa-user-circle"></i>
          <span> </span>
          Sign In
        </a>
      ) : (
        <div>
          <i className="fa fa-user-circle"></i>
          <span> </span>
          <a className="main-nav-item" href="user">
            {userProfil ? userProfil.userName : "User"}
          </a>
          <span>- </span>
          <a className="main-nav-item" href="login" onClick={handleLogout}>
            Sign Out
          </a>
        </div>
      )}
    </nav>
  );
};

export default Header;