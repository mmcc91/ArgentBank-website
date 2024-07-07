// Importation des modules nécessaires
import "./Feature.scss";
import { PropTypes } from "prop-types";

// Définition du composant Feature. Ce composant prend quatre props : paragraph, image, title et alt.
const Feature = ({ paragraph, image, title, alt }) => {
  return (
    // Le composant rend un élément div avec une classe pour le style
    <div className="feature-item">
      {/* // Image de la fonctionnalité avec une source et un alt passés en props */}
      <img src={image} alt={alt} className="feature-icon" />
      {/* // Titre de la fonctionnalité passé en prop */}
      <h3 className="feature-item-title">{title}</h3>
      {/* // Paragraphe de la fonctionnalité passé en prop */}
      <p>{paragraph}</p>
    </div>
  );
};

// Définition des propTypes pour le composant Feature. Cela permet de vérifier que les props passées au composant ont le bon type.
Feature.propTypes = {
  paragraph: PropTypes.string.isRequired, // Le paragraphe est requis et doit être une chaîne de caractères.
  image: PropTypes.string.isRequired, // L'image est requise et doit être une chaîne de caractères.
  title: PropTypes.string.isRequired, // Le titre est requis et doit être une chaîne de caractères.
  alt: PropTypes.string.isRequired, // L'alt est requis et doit être une chaîne de caractères.
};

// Exportation du composant Feature pour utilisation dans d'autres parties de l'application.
export default Feature;
