import React from "react";
import NavBar from "../composants/NavBar";
import Footer from "../composants/Footer";
import ContentHome from "../composants/ContentHome";
import Banniere from "../composants/Banniere";

const Home = () => {
  
  return (
    <div className="overflow-x-hidden font-Inter bg-slate-50 ">
      <NavBar />
      <Banniere />
      <ContentHome />
      <Footer />
    </div>
  );
};

export default Home;
