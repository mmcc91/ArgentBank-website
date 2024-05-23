import Feature from './feature.jsx'; 
import { features } from './../../Data/dataFeatures.json'; 


const FeaturesList = () => {
  return (
    <section className="features">
      {/* <h2 className="sr-only">Features</h2> retrait du titre pour coller au design fourni*/}
      {features.map((feature, index) => (
        <Feature
          key={"feature"+index} // Clé unique pour chaque élément de la liste
          paragraph={feature.paragraph} // Paragraphe de la fonctionnalité
          image={feature.image} // Image de la fonctionnalité
          title={feature.title} // Titre de la fonctionnalité
          alt={feature.alt} // Texte alternatif pour l'image de la fonctionnalité
        />
      ))}
    </section>
  );
};

export default FeaturesList;