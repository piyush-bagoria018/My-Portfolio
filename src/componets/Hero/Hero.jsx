import React from "react";
import "./Hero.css";

const Hero = () => {
  return (
    <section id="hero" className="hero-container">
      <div className="hero-content">
        <h2>Building Digital Experiences That Inspire</h2>
        <p>
          Passionate Frontend Developer | Tranforming Ideas into Seamless and
          Visually Stunning Web Solutions
        </p>
      </div>

      <div className="hero-img">
        <div>
          <div className="tech-icon">
            <img src="public\react.png" alt="" />
          </div>
          <img src="public\Hero.png" alt="" />
        </div>

        <div>
          <div className="tech-icon">
            <img src="public\html.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="public\css.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="public\Js.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
