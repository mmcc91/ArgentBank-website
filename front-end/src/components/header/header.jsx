// Importation des modules nécessaires
import React from "react";
// import { useSelector} from "react-redux";
import Logo from "../../../designs/img/argentBankLogo.png";
import "./header.scss";

const Header = () => {
  // const pseudo = useSelector((state) => state.userSlice.userProfil.userName);

  const handleLogout = () => {
    localStorage.removeItem("token");
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
     
        <img className="main-nav-logo-image" src={Logo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
     
        {!localStorage.getItem("token") ? (
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
              {pseudo}
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