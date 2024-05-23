
import logo from './../../../designs/img/argentBankLogo.png';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import './header.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-solid-svg-icons'

const Header = () => {

  
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="/">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        {/* <h1 className="sr-only">Argent Bank</h1>  titre en gris a effacer apres relecture*/}
      </a>
      <div>
        {!localStorage.getItem('token') ? (
          <a className="main-nav-item" href="login">
            <FontAwesomeIcon icon={faCircleUser} />
            <span> </span>
            Sign In
          </a>
        ) : (
          <div>
      <FontAwesomeIcon icon={faCircleUser} />
            <span> </span>
            <a className="main-nav-item" href="user">{pseudo}</a>
            <span>- </span>
            <a className="main-nav-item" href="login" onClick={handleLogout}>Sign Out</a>
          </div>
        )}
      </div>
    </nav>
  );
};


export default Header;
