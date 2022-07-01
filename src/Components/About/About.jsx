import React from "react";
import "./About.css";
import certificate from "../../img/certificate.jpg";
import download from "../../img/download.png"
import github from "../../img/github.png";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://raw.githubusercontent.com/priyan1995/priyan1995/master/readme-image.gif"
            alt="web developper"
            className="a-img"
          ></img>
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
          I work on building UI
          components using ReactJs, application state management using Redux,
          client side routing management using React-router-dom and Node.js,
          Express.js in backend and MongoDB as NoSQL database. I use Git too as
          version control. I am curious and I like work that pushes me to learn
          something new. I do my best to stay on top of changes. I am a person
          who values ​​self-education. I like collaboration, teamwork and
          knowledge sharing.
        </p>
        
        <div className="link2">
        download my resume
              <a download href={require("../../img/My Resume.pdf")}>
                 <img className="c-icon" src={download} alt="download" />
              </a>
              <div className="link1">
              visit my Github
             <a href="https://github.com/KSarra99"> <img className="c-icon" src={github} alt="github" /></a> 
            </div>
              
            </div>
        <div className="a-award">
          <img
            src={certificate}
            alt="go my code diploma"
            className="a-award-img"
          />
          <div className="a-award-texts">
            <h4 className="a-award-title">
              Go My Code completion certificate in web developpement full stack
              JS{" "}
            </h4>
            <p className="a-award-desc">
              Bootcamp course of five months in front end and back end JS skills
              with practical workshops.
            </p>  
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
