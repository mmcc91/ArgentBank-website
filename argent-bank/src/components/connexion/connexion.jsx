import React, { useState } from "react"; 
import { useDispatch } from "react-redux"; 
import { useNavigate } from "react-router-dom"; 
import Button from "./../button"; 
import "./connexion.scss"; 

const Connexion = () => {
  const [email, setEmail] = useState(""); 
  const [password, setPassword] = useState("");     
  const [rememberMe, setRememberMe] = useState(false);
  const [erreur, setErreur] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate(); 

  const handleLogin = async (e) => { 
    e.preventDefault();
    try {
      const userData = await logUser(email, password); 
      const token = userData.body.token;
      await dispatch(loginUser(token));
      
      if (rememberMe) {
        localStorage.setItem('token', token);
      }
      
      const userInfo = await getUserProfile(token); // Utilisation de la fonction getUserProfile
      const userInfos = {
        email: userInfo.body.email,
        firstName: userInfo.body.firstName,
        lastName: userInfo.body.lastName,
        userName: userInfo.body.userName,
      };
      await dispatch(infoUser(userInfos));
      navigate("/user");
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      setErreur("Identifiants incorrects");
    }
  };

  const logUser = async (email, password) => {
    try {
      const response = await fetch("http://localhost:3001/api/user/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
      throw error;
    }
  };

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