import React from "react";
import "./ContactInfoCard.css";

const ContactInfoCard = ({ iconUrl, text, link }) => {
  return (
    <div className="contact-details-card">
      {link ? (
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="icon-link"
        >
          <div className="icon">
            <img src={iconUrl} alt={text} />
          </div>
          {text}
        </a>
      ) : (
        <>
          <div className="icon">
            <img src={iconUrl} alt={text} />
          </div>
          <p>{text}</p>
        </>
      )}
    </div>
  );
};

export default ContactInfoCard;
