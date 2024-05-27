// Définition du composant Account qui prend en entrée plusieurs props : title, type, accountnumber, amount et description
const Account = ({ title, type, accountnumber, amount, description }) => {
  return (
    // Début du composant Account
    <section className="account">
      {/* // Conteneur pour le contenu du compte */}
      <div className="account-content-wrapper">
        {/* // Titre du compte, qui affiche le titre, le type et le numéro de compte */}
        <h3 className="account-title">{title} {type} {accountnumber}</h3>
        {/* // Montant du compte */}
        <p className="account-amount">{amount}</p>
        {/* // Description du montant du compte */}
        <p className="account-amount-description">{description}</p>
      </div>
      {/* // Conteneur pour le bouton d'action */}
      <div className="account-content-wrapper cta">
        {/* // Bouton pour afficher les transactions */}
        <button className="transaction-button">View transactions</button>
      </div>

    </section>
  );
};

// Exportation du composant Account pour utilisation dans d'autres parties de l'application
export default Account;