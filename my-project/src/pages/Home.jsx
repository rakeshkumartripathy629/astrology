import React from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Astrologers from "../components/Astrologers";
import ComplimentaryAstrologyServices from "../components/ComplimentaryAstrologyServices";
import StatisticsSection from "../components/StatisticsSection";

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <ComplimentaryAstrologyServices/>
      <StatisticsSection />
      <Astrologers />
      
    </div>
  );
};

export default Home;
