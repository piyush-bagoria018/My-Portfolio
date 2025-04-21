import React, { useRef } from "react";
import "./MyProjects.css";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import { PROJECTS } from "../../utils/data";
import Slider from "react-slick";

const MyProjects = () => {
  const slideRef = useRef();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const slideRight = () => {
    slideRef.current.slickNext();
  };

  const slideLeft = () => {
    slideRef.current.slickPrev();
  };

  return (
    <section id="projects" className="projects-container">
      <h5>My Projects</h5>

      <div className="projects-content">
        <div className="arrow-right" onClick={slideRight}>
          <img src="public\right arrow.png" alt="right arrow" />
        </div>
        <div className="arrow-left" onClick={slideLeft}>
          <img src="public\left arrow.png" alt="left arrow" />
        </div>

        <Slider ref={slideRef} {...settings}>
          {PROJECTS.map((item) => (
            <ProjectsCard key={item.title} details={item} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default MyProjects;
