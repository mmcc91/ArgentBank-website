 // Hero component c'est le rectangle blanc {avec dans sass} sur la photo
import "./hero.scss";

const Hero = () => {
    return (
        <div className="hero">
        <section className="hero-content">
          {/* <h2 className="sr-only">Promoted Content</h2> le titre ne doit pas s'afficher pour le moment */}
          <p className="subtitle">No fees.</p>
          <p className="subtitle">No minimum deposit.</p>
          <p className="subtitle">High interest rates.</p>
          <p className="text">Open a savings account with Argent Bank today!</p>
        </section>
      </div>
    );
};

export default Hero;