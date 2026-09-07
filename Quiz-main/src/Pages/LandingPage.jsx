import React from "react";
import Header from "../Components/Header.jsx";
import Hero from "../Components/Hero.jsx";
import Properties from "../Components/Properties.jsx";
import Filter from "../Components/Filter.jsx";
import Info from "../Components/Info.jsx";
import Sliderr from "../Components/Slider.jsx";
import Faq from "../Components/Faq.jsx";
import Footer from "../Components/Footer.jsx";
function LandingPage() {
  return (
    <div>
      <Hero />
      <Properties />
      <Filter />
      <Info />
      <Sliderr />
      <Faq />
    </div>
  );
}

export default LandingPage;
