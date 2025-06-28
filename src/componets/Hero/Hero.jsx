import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./Hero.css";

const descriptions = [
  "Fullstack Developer | Crafting Scalable, Modern Web Applications from Concept to Deployment",
  "React Enthusiast | Creating Interactive User Experiences",
  "Node.js & Express | Building Robust Backends",
  "Transforming Ideas into Seamless Digital Solutions",
];

const Hero = () => {
  const [typedName, setTypedName] = useState("");
  const [isDeletingName, setIsDeletingName] = useState(false);
  const [typedDesc, setTypedDesc] = useState("");
  const [isDeletingDesc, setIsDeletingDesc] = useState(false);
  const [descIndex, setDescIndex] = useState(0);
  const name = "Piyush Kumar";

  // Typewriter for name
  useEffect(() => {
    let i = isDeletingName ? typedName.length - 1 : typedName.length + 1;
    let timeout;
    if (!isDeletingName && i <= name.length) {
      timeout = setTimeout(() => setTypedName(name.slice(0, i)), 120);
      if (i === name.length) setTimeout(() => setIsDeletingName(true), 1200);
    } else if (isDeletingName && i >= 0) {
      timeout = setTimeout(() => setTypedName(name.slice(0, i)), 60);
      if (i === 0) setTimeout(() => setIsDeletingName(false), 500);
    }
    return () => clearTimeout(timeout);
  }, [typedName, isDeletingName, name]);

  // Typewriter for description
  useEffect(() => {
    const desc = descriptions[descIndex];
    let i = isDeletingDesc ? typedDesc.length - 1 : typedDesc.length + 1;
    let timeout;
    if (!isDeletingDesc && i <= desc.length) {
      timeout = setTimeout(() => setTypedDesc(desc.slice(0, i)), 40);
      if (i === desc.length) setTimeout(() => setIsDeletingDesc(true), 1200);
    } else if (isDeletingDesc && i >= 0) {
      timeout = setTimeout(() => setTypedDesc(desc.slice(0, i)), 20);
      if (i === 0)
        setTimeout(() => {
          setIsDeletingDesc(false);
          setDescIndex((prev) => (prev + 1) % descriptions.length);
        }, 400);
    }
    return () => clearTimeout(timeout);
  }, [typedDesc, isDeletingDesc, descIndex]);

  return (
    <motion.section
      id="hero"
      className="hero-container"
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <motion.div
        className="hero-content"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.7 }}
      >
        <h2>
          <motion.span
            style={{ color: "#7c66e3", fontWeight: 700 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            {typedName}
            <span className="blinking-cursor">|</span>
          </motion.span>
          <br />
          Building Digital Experiences That Inspire
        </h2>
        <motion.p
          style={{ minHeight: 60 }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.6 }}
        >
          {typedDesc}
          <span className="blinking-cursor">|</span>
        </motion.p>
        <a
          href="/Piyush_Resume.pdf"
          download
          className="download-resume-btn"
        >
          Download Resume
        </a>
      </motion.div>

      <motion.div
        className="hero-img"
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        <div>
          <div className="tech-icon">
            <img src="/react.png" alt="" />
          </div>
          <motion.div
            className="hero-img-profile-wrapper"
            whileHover={{
              scale: 1.06,
              boxShadow: "0 8px 36px rgba(44, 62, 80, 0.22)",
            }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <img src="/piyush.jpg" alt="Piyush Kumar" />
          </motion.div>
        </div>

        <div>
          <div className="tech-icon">
            <img src="/html.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="/css.png" alt="" />
          </div>
          <div className="tech-icon">
            <img src="/Js.png" alt="" />
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
