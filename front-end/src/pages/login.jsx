import React from "react";
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Connexion from "../components/connexion/connexion";
import Navigation from "../components/navigation/navigation";

const Login = () => {
  return (
    <div>
      <Header />
         <Navigation />
      <h1>page ecrire ici LOGIN </h1>
      <Connexion />
   
      <Footer />
    </div>
  );
};
export default Login;