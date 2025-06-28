import React from "react";
import { Link } from "react-scroll"
import "./MobileNav.css";

const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
      <div
        className={`mobile-menu ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <div className="mobile-menu-container">
          <img className="Logo" src="/Logo.png" alt="" />

          <ul>
          <li>
              <Link activeClass="active" to="hero" smooth spy offset={-60} className="menu-item">Home</Link>
            </li>

            <li>
              <Link activeClass="active" to="skills" smooth spy offset={-120} className="menu-item">Skills</Link>
            </li>

            <li>
              <Link activeClass="active" to="projects" smooth spy offset={-100} className="menu-item">My Projects</Link>
            </li>

            <li>
              <Link activeClass="active" to="contacts" smooth spy offset={-100} className="menu-item">Contact Me</Link>
            </li>

            <button className="contact-btn" onClick={() => {}}>
            <Link activeClass="active" to="contacts" smooth spy offset={-100}>Hire Me</Link>
            </button>
          </ul>
        </div>
      </div>
    </>
  );
};

export default MobileNav;
