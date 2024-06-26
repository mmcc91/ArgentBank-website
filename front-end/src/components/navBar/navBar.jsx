// Importation des modules nécessaires
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import logo from '../../../designs/img/argentBankLogo.webp';
import  {logout } from '../../redux/slices/auth.js';
import './navBar.scss';

// Définition du composant navBar
function navBar (){
  // Récupération du token pour savoir si l'utilisateur est connecté
  const isConnected = useSelector((state) => state.auth.token);

  // Initialisation du dispatch pour envoyer des actions à Redux
  const dispatch = useDispatch();

  // Initialisation de la fonction navigate pour naviguer entre les routes
  const navigate = useNavigate();

  // Récupération du nom d'utilisateur
  const userData = useSelector((state) => state.user.userData);

  // Fonction pour gérer la déconnexion de l'utilisateur
  const handleLogout = () => {
    // Dispatch de l'action logout pour déconnecter l'utilisateur
    dispatch(logout());

    // Suppression du token de la session et du local storage
    sessionStorage.removeItem('token');
    localStorage.removeItem('token');

    // Redirection vers la page d'accueil
    navigate('/');
  }

  // Rendu du composant
  return (
    <nav className='main-nav'>
      <NavLink to='/' className='main-nav-logo'>
        <img src={logo} alt='Argent Bank Logo' className='main-nav-logo-image' />
        <h1 className='sr-only'>Argent Bank</h1>
      </NavLink>
      {isConnected ? (
        // Si l'utilisateur est connecté, affichage du nom d'utilisateur et du lien de déconnexion
        <div className="link-container">
          <Link to='/profile'>
            <i className='fa fa-circle-user' />
            {userData.userName}
          </Link>
          <Link to='/' onClick={handleLogout}>   
          <i className='fa-solid fa-right-from-bracket' />
             Sign out 
          </Link>
        </div>
      ) : (
        // Si l'utilisateur n'est pas connecté, affichage du lien de connexion
        <div>
          <NavLink to='/login' className='main-nav-item'>
            <i className='fa fa-user-circle'></i>Sign In
          </NavLink>
        </div>
      )}
    </nav>
  );
}
  
// Exportation du composant navBar pour utilisation dans d'autres parties de l'application
export default navBar;