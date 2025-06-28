import React from "react";
import { Link } from "react-scroll";
import { useState } from "react";
import "./Navbar.css";
import MobileNav from "./mobileNavbar/MobileNav";

const Navbar = () => {

  const [openMenu, setOpenMenu] = useState(false)

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
      <nav className="nav-wrapper">
        <div className="nav-content">
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

          <button className="menu-btn" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="64"
              height="64"
              viewBox="0 0 72 72"
              style={{
                fill: "#FFFFFF",
                maxWidth: "100%", 
                maxHeight: "100%",
              }} 
            >
              <path d="M56 48c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 48 54.798 48 56 48zM56 32c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 32 54.798 32 56 32zM56 16c2.209 0 4 1.791 4 4 0 2.209-1.791 4-4 4-1.202 0-38.798 0-40 0-2.209 0-4-1.791-4-4 0-2.209 1.791-4 4-4C17.202 16 54.798 16 56 16z"></path>
            </svg>
            {openMenu ? "" : ""}
          </button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
