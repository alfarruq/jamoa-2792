import { useEffect, useState } from "react";
import { LifeLine } from "react-loading-indicators";
import Header from "./components/Header copy";
import SectionOne from "./components/SectionOne copy";
import SectionTwo from "./components/SectionTwo copy";
import SectionThree from "./components/SectionThree copy";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import Footer from "./components/Footer";


const App = () => {



  return (
    <div className="">

      <Header />
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
      <Footer />


    </div>
  );
};

export default App;