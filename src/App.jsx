import "./App.css";
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero/Hero";
import Skills from "./componets/Skills/Skills";
import MyProjects from "./componets/MyProjects/MyProjects";
import ContactMe from "./componets/ContactMe/ContactMe";
import Footer from "./componets/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
      <Hero />
      <Skills />
      <MyProjects />
      <ContactMe/>
      </div>
      <Footer/>
    </>
  );
}

export default App;
