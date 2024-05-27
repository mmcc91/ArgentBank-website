// Importation des modules nécessaires
import React, { useState } from "react"; 
import { useDispatch } from "react-redux"; 
import { useNavigate } from "react-router-dom"; 
import "./connexion.scss"; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from '@fortawesome/free-solid-svg-icons';

// Assurez-vous que loginUser et infoUser sont correctement importés
// import { loginUser, infoUser } from 'path_to_actions';

// Création du composant Connexion
const Connexion = () => {
    // Utilisation du hook useState pour gérer l'état local
    const [email, setEmail] = useState(""); 
    const [password, setPassword] = useState("");     
    const [rememberMe, setRememberMe] = useState(false);
    const [erreur, setErreur] = useState("");
  
    // Utilisation du hook useDispatch pour envoyer des actions au store Redux
    const dispatch = useDispatch();
  
    // Utilisation du hook useNavigate pour la navigation entre les pages
    const navigate = useNavigate(); 
  
    // Fonction pour gérer la connexion de l'utilisateur
    const handleLogin = async (e) => { 
      e.preventDefault();
      try {
        // Appel de la fonction logUser pour se connecter
        const userData = await logUser(email, password); 
        const token = userData.body.token;
  
        // Dispatch de l'action loginUser avec le token en paramètre
        await dispatch(loginUser(token));
        
        // Si l'utilisateur a choisi de se souvenir de lui, on stocke le token dans le localStorage
        if (rememberMe) {
          localStorage.setItem('token', token);
        }
        
        // Récupération des informations de l'utilisateur
        const userInfo = await getUserProfile(token); // Utilisation de la fonction getUserProfile
        const userInfos = {
          email: userInfo.body.email,
          firstName: userInfo.body.firstName,
          lastName: userInfo.body.lastName,
          userName: userInfo.body.userName,
        };
  
        // Dispatch de l'action infoUser avec les informations de l'utilisateur en paramètre
        await dispatch(infoUser(userInfos));
  
        // Redirection vers la page de l'utilisateur
        navigate("/user");
      } catch (error) {
        // Gestion des erreurs
        console.error("Erreur lors de la connexion:", error);
        setErreur("Identifiants incorrects");
      }
    };

  // Fonction pour gérer la connexion à l'API
  const logUser = async (email, password) => {
    try {
      // Envoi de la requête à l'API
      const response = await fetch("http://localhost:3001/v1/user/login", {
        // a verifier car pour le moment ne marche pas . reprise schema sophie bluel +
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      // Récupération de la réponse en JSON
      const data = await response.json();
      return data;
    } catch (error) {
      // Gestion des erreurs
      console.error("Erreur lors de la connexion:", error);
      throw error;
    }
  };

  // Fonction pour gérer le choix de l'utilisateur de se souvenir de lui
  const handleRememberMe = (e) => {
    setRememberMe(e.target.checked);
  };

  // Rendu du composant
  return (
    // Conteneur principal avec une classe pour le style
    <main className="main bg-dark">
      {/* // Section pour le contenu de la connexion */}
      <section className="sign-in-content">
        {/* // Icône pour la connexion */}
        <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
        {/* // Titre de la page de connexion */}
        <h1>Sign In</h1>
        {/* // Formulaire pour la connexion */}
        <form onSubmit={handleLogin}>
          {/* // Conteneur pour l'input de l'email */}
          <div className="input-wrapper">
            {/* // Label pour l'email */}
            <label htmlFor="email">Email</label>
            {/* // Input pour l'email avec une fonction pour gérer les changements */}
            <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          {/* // Conteneur pour l'input du mot de passe */}
          <div className="input-wrapper">
            {/* // Label pour le mot de passe */}
            <label htmlFor="password">Password</label>
            {/* // Input pour le mot de passe avec une fonction pour gérer les changements */}
            <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          {/* // Conteneur pour l'input de la case à cocher "Se souvenir de moi" */}
          <div className="input-remember">
            {/* // Input pour la case à cocher "Se souvenir de moi" avec une fonction pour gérer les changements */}
            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={handleRememberMe} />
            {/* // Label pour la case à cocher "Se souvenir de moi" */}
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {/* // Bouton pour soumettre le formulaire de connexion */}
          <button className="sign-in-button">Sign In</button>
          {/* // Affichage conditionnel d'un message d'erreur si la variable erreur est vraie */}
          {erreur && <p className='error-message'>{erreur}</p>}
        </form>
      </section>     
    </main>    
  );
};
// Exportation du composant Connexion pour utilisation dans d'autres parties de l'application
export default Connexion;