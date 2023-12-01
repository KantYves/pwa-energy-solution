import React, { useEffect } from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import InitiativeProjects from "./pages/InitiativeProjects";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <BrowserRouter>
    
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<InitiativeProjects />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
