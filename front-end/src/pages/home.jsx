import React from "react";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import FeaturesList from "../components/Feature/FeaturesList";
import Hero from "../components/Hero/Hero";

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
