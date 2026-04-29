import { useEffect, useState } from "react";
import { LifeLine } from "react-loading-indicators";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import Footer from "./components/Footer";
import Rasm1 from "../src/assets/img1.png"

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