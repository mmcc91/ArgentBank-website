import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import Logo from "../../../designs/img/argentBankLogo.webp";
import "./Header.scss";
import { updateUsername, cleanStore, setUserInfo } from "../../redux/slices/userSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Utilisation avec react-router-dom@6
  const userToken = useSelector((state) => state.user.userToken);
  const userProfil = useSelector((state) => state.user.userProfil);

  const handleLogout = () => {
    dispatch(cleanStore());
    localStorage.clear();
    sessionStorage.clear();
    navigate("/home"); // Redirection avec navigate
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/home">
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {!userToken ? (
        <Link className="main-nav-item" to="/login">
          <i className="fa fa-user-circle"></i> Sign In
        </Link>
      ) : (
        <div>
          <i className="fa fa-user-circle"></i>
          <Link className="main-nav-item" to="/user">
            {userProfil ? userProfil.userName : "User"}
          </Link>
          <button onClick={handleLogout} className="main-nav-item">
            <i className="fa fa-sign-out"></i> Sign Out
          </button>
        </div>
      )}
    </nav>
  );
};

export default Header;
