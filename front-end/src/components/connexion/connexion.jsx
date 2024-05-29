// Importation des modules nécessaires
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./connexion.scss";
import { loginSuccess } from '../../redux/slices/auth';
import { loginFailed } from '../../redux/slices/auth';



const Connexion = () => {
  // Etats pour les champs email et mot de passe
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Etat pour la case "Remember me"
  const [rememberMe, setRememberMe] = useState(false); 


  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Fonction pour gérer la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault(); // Empêche le rechargement de la page
  
    // Vérifie si les champs email et mot de passe sont vides
    if (email === '' || password === '') {
      setErrorMessage('Les champs Email et mot de passe ne doivent pas être vides'); // Met à jour le message d'erreur
      return; // Arrête l'exécution de la fonction
    }
    console.log(`Email: ${email}, Password: ${password}`); // Affiche l'email et le mot de passe dans la console
  
    try {
      // Envoie une requête à l'API
      const response = await fetch("http://localhost:3001/api/v1/user/login", {
        method: "POST", // Méthode POST
        headers: { "Content-Type": "application/json" }, // En-têtes de la requête
        body: JSON.stringify({email, password}), // Corps de la requête
      });
  
      // Vérifie si la réponse est OK
      if (response.ok) {
        const data = await response.json(); // Récupère les données de la réponse
        const token = data.body.token; // Récupère le token de la réponse
        dispatch(loginSuccess(token)); // Dispatch de l'action loginSuccess pour mettre à jour le store Redux
        window.sessionStorage.setItem("token", token) // Stocke le token dans sessionStorage
        if (rememberMe) { // Si la case "Remember me" est cochée, utilise localStorage          
          window.localStorage.setItem("token", token) // Stocke le token dans localStorage
        }
        if (token){ // Si le token est valide, redirige vers la page de profil
          navigate('/profile');
        } else {
          const error = "Utilisateur inconnu" // Message d'erreur
          dispatch(loginFailed(error)); // Dispatch de l'action loginFailed avec le message d'erreur
        }
      }
    } catch (error) {
      console.error(error); // Affiche l'erreur dans la console
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-wrapper">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" value={password} onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" checked={rememberMe} onChange={(event) => setRememberMe(event.target.checked)} />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button className="sign-in-button">Sign In</button>
          {errorMessage && <p className='error-message'>{errorMessage}</p>}
        </form>
      </section>     
    </main>    
  );
};

export default Connexion;