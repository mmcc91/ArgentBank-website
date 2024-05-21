import Feature from './feature.jsx'; // Assurez-vous que le chemin d'importation est correct
import { features } from './../../Data/dataFeatures.json'; // Assurez-vous que le chemin d'importation est correct

const FeaturesList = () => {
  return (
    <section className="features">
      <h2 className="sr-only">Features</h2>
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