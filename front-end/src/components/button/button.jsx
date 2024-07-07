import React from "react";
import PropTypes from "prop-types";

// Définition du composant Button. Ce composant prend trois props : btnText, onClick et className.
const Button = ({ btnText, onClick, className }) => {
  return (
    // Le composant rend un élément bouton avec le texte, la fonction onClick et la classe passés en props.
    <button className={className} onClick={onClick}>
      {btnText}
    </button>
  );
};

// Définition des propTypes pour le composant Button. Cela permet de vérifier que les props passées au composant ont le bon type.
Button.propTypes = {
  btnText: PropTypes.string.isRequired, // Le texte du bouton est requis et doit être une chaîne de caractères.
  onClick: PropTypes.func, // La fonction onClick doit être une fonction.
  className: PropTypes.string, // La classe doit être une chaîne de caractères.
};

export default Button;
