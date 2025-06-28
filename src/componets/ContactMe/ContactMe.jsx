import React from "react";
import { motion } from "framer-motion";
import "./ContactMe.css";
import ContactInfoCard from "./ContactInfoCard/ContactInfoCard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <motion.section
      id="contacts"
      className="contact-container"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h5>Contact Me</h5>

      <div className="contact-content">
        <div style={{ flex: 1 }}>
          <ContactInfoCard
            iconUrl="public\\github.png"
            text="GitHub"
            link="https://github.com/piyush-bagoria018"
          />
          <ContactInfoCard
            iconUrl="public\linkendIn.png"
            text="LinkedIn"
            link="https://www.linkedin.com/in/piyush-kumar-a8ab38350/"
          />
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </motion.section>
  );
};

export default ContactMe;
