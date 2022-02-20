import React, {useState} from "react";
import NavBar from "../components/Navbar/index";
import SideBar from "../components/SideBar/index";
import Hero from "../components/Hero/Hero";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact"
import Footer from "../components/Footer/Footer";
import Projects from "../components/Projects/Projects";

function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <SideBar isOpen={isOpen} toggle={toggle} />
      <NavBar toggle={toggle} />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
     
    </>
  );
}

export default Home;
