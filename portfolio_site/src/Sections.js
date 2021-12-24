import React from "react";
import contactpic from "./contactpic.png";
import project from "./project.png";
import linkedln from "./linkedln.png";
import gmail from "./Gmail-icon.png";
import { Link } from "react-router-dom";

function Sections() {
  return (
    <React.Fragment>
      <section className="section four" id="projects-section">
        <div className="div-44">
          <img src={project} alt="project" className="project" />
        </div>
        <div className="div-4">
          <Link to="/project">
            <h1>Projects</h1>
          </Link>
        </div>
      </section>
      <section className="section five" id="contacts-section">
        <div className="div-sec5">
          <h1> Contact Details </h1>
          <a href="mailto: lencybhalodiya2111@gmail.com">
            <img src={gmail} alt="gmail tag" className="linkedln" />
          </a>
          <a
            href="https://www.linkedin.com/in/lency-bhalodiya"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedln} alt="linkedln tag" className="linkedln" />
          </a>
        </div>
        <img src={contactpic} className="contactpic" alt="icon" />
      </section>
    </React.Fragment>
  );
}

export default Sections;
