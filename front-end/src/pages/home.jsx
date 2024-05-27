import React from 'react';
import Footer from "../components/footer/footer";
import Header from "../components/header/header";

import FeaturesList from '../components/feature/FeaturesList';
import Hero from "../components/hero/hero";



const Home = () => {
  return (
    <main>
      <Header />
    <Hero />
  
   <FeaturesList />
      <Footer />
    </main>
  );
};
export default Home;
