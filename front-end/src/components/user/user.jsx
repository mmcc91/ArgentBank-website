// Importation des modules nécessaires
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import "./user.scss";
import Button from "../button/button";
import Account from "../account/account"; 
import Accounts from "../../Data/dataAccount.json";



// Définition du composant User
const User = () => {
  // Récupération du nom d'utilisateur depuis le state Redux
  const username = useSelector(state => state?.login?.userProfil?.userName || null);

  // Récupération du token utilisateur depuis le state Redux
  // Assurez-vous que le chemin d'accès est correct
  const userToken = useSelector(state => state?.login?.userToken || null);

  // Initialisation de la fonction navigate pour naviguer entre les routes
  const navigate = useNavigate();

  // Fonction pour gérer l'affichage du formulaire de modification du nom d'utilisateur
  const handleDisplayEdit = (e) => {
    e.preventDefault();
    navigate("/editUser");
  };

  // Rendu du composant
  return (
    <main className="main bg-dark2">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {username ? username : 'Guest'}!
        </h1>
        {/* Bouton pour afficher le formulaire de modification du nom d'utilisateur */}
        <Button className={"edit-button"} btnText={"Edit Name"} onClick={handleDisplayEdit}></Button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      {/* Affichage de la liste des comptes de l'utilisateur */}
      {Accounts.map((account, index) => (
        <Account
          key={"account" + index}
          title={account.title}
          amount={account.amount}
          description={account.description}
        />
      ))}
    </main>
  );
};

// Exportation du composant User pour utilisation dans d'autres parties de l'application
export default User;