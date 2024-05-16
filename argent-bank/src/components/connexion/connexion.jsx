import React, { useState } from "react"; 
import { useDispatch } from "react-redux"; 
import { useNavigate } from "react-router-dom"; 
import Button from "../button/button"; 
import "./connexion.scss"; 

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
      const response = await fetch("http://localhost:3001/api/user/login", {
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

  return (
    <div className="connexion">
      <h1> Sign In COMPONNENT CONNEXION</h1>
      <h2>Connexion</h2>
      <main className="main bg-dark">
        <section className="sign-in-content">
          <i className="fa fa-user-circle sign-in-icon"></i>
          <h1>Sign In</h1>
          <form onSubmit={handleLogin}>
            <div className="input-wrapper">
              <label htmlFor="userEmail">User Email</label>
              <input
                type="email"
                id="userEmail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder=" exemple@gmail.com"
                required
              />
            </div>
            <div className="input-wrapper">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="input-remember">
              <input
                type="checkbox"
                id="remember-me"
                checked={rememberMe}
                onChange={handleRememberMe}
              />
              <label htmlFor="remember-me">Remember me</label>
            </div>
            <Button btnText={"Sign In"} className={"sign-in-button"} /> 
          </form>
          {erreur && <p className="errorConexion">{erreur}</p>} 
        </section>
      </main>
    </div>
  );
};

export default Connexion;