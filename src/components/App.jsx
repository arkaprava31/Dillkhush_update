import React from "react";
import Nav from "./Nav";
import Home from "./Home";
import About from "./about";
import Why from "./Why";
import Service from "./Service";
import Contact from "./Contact";
import Footer from "./Footer";

function App ()
{
  return (
    <div>
      <Nav />
      <Home />
      <About />
      <Why />
      <Service />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;