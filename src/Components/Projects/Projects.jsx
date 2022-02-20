import React from "react";
import Projectscards from "../Projects cards/Projectscards";
import "./Projects.css";
import { projects } from "../../data";
import github from "../../img/github.png";

const Projects = () => {
  return (
    <div>
      <div className="Projects">
        <div className="projects-texts">
          <h1 className="projects-title"> some of my projects</h1>
          <p className="projects-desc">
            {" "}
            you may find all my projects on my github account
            <br />
          </p>
          <div className="links">
            <div className="link1">
              <img className="c-icon" src={github} alt="github" />
             <a href="https://github.com/KSarra99">Visit My Github account</a> 
            </div>
            
          </div>
          <div className="projects-list">
            {projects.map((item) => (
              <Projectscards key={item.id} img={item.img} link={item.link} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
