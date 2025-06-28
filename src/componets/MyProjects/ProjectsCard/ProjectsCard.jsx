import React from "react";
import "./ProjectsCard.css";

const ProjectsCard = ({ details }) => {
  return (
    <div className="projects-card">
      <h3 className="project-title">
        {details.title.replace(" [LINK]", "")}
        {details.link && (
          <a
            href={details.link}
            target="_blank"
            rel="noopener noreferrer"
            className="project-link"
          >
            [LINK]
          </a>
        )}
      </h3>
      <div className="project-techstack">{details.stack}</div>
      <ul>
        {details.responsibilities.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectsCard;
