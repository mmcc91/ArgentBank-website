// Importation du style spécifique au composant Hero
import "./Hero.scss";

// Définition du composant Hero. Ce composant ne prend pas de props.
const Hero = () => {
  return (
    // Le composant rend un élément div avec une classe "hero"
    <div className="hero">
      {/* // Dans cette div, on a une section avec une classe "hero-content" */}
      <section className="hero-content">
        {/* // Un titre de niveau 2 est présent mais est caché pour les utilisateurs visuels (classe "sr-only") */}
        <h2 className="sr-only">Promoted Content</h2>
        {/* // Plusieurs sous-titres présentant les avantages de l'offre */}
        <p className="subtitle">No fees.</p>
        <p className="subtitle">No minimum deposit.</p>
        <p className="subtitle">High interest rates.</p>
        {/* // Un texte encourageant l'utilisateur à ouvrir un compte */}
        <p className="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
};

// Exportation du composant Hero pour utilisation dans d'autres parties de l'application.
export default Hero;
