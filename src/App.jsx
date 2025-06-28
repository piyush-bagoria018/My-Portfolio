import './App.css';
import Navbar from "./componets/Navbar";
import Hero from "./componets/Hero/Hero";
import Skills from "./componets/Skills/Skills";
import MyProjects from "./componets/MyProjects/MyProjects";
import ContactMe from "./componets/ContactMe/ContactMe";
import Footer from "./componets/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      <ToastContainer position="top-right" autoClose={2500} theme="colored" />
    </>
  );
}

export default App;
