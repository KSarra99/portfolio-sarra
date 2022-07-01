import React from "react";
import Projectscards from "../Projects cards/Projectscards";
import "./Projects.css";
import { projects } from "../../data";

const Projects = () => {
  return (
    <div>
      <div className="Projects">
        <div className="projects-texts">
          <h1 className="projects-title"> Some of my projects</h1>
          <p className="projects-desc">
            {" "}
            when you click on every project picture, it takes you to its link on my Github account
            <br />
          </p>
          <div className="projects-list">
          <a href="projects.link"> </a>

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