import React from 'react';
import Footer from "../components/footer/footer";
import Header from "../components/header/header";
import Banniere from "../components/banniere/banniere";
import Hero from "../components/hero/hero";

const Home = () => {
  return (
    <main>
      <Header />
      <Banniere />
    <Hero />
      <Footer />

    </main>
  );
};
export default Home;
