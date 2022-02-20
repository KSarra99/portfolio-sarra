import React from "react";
import "./Intro.css";
import download from "../../img/download.png"
const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">hello, My Name is</h2>
          <h1 className="i-name">Sarra Khmila</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">
              Certified Full Stack JS Web Developer
</div>
              <div className="i-title-item">
                Senior technician in chemical engineering
              </div>
              <div className="i-title-item">
                first aid volunteer in the Tunisian red crescent
              </div>
              <div className="i-title-item">
                active member in the Junior chamber international of Gafsa JCI
              </div>
            </div>
          </div>
          <div className="i-desc">
            Hello I'm sarra khmila a Junior web developer Full stack JS (Mern). <br/>
            Skilled in: <br/>  JavaScript, HTML, CSS, ReactJs, Express.Js, Redux, Bootstrap, Node.js, Git and MongoDB as NoSQL database.
          </div>
          <div className="link2">
          <img className="c-icon" src={download} alt="download" />
              <a download href={require("../../img/My_CV.pdf")}>
                Download My Resume 
              </a>
              
            </div>
          
        </div>
      </div>
      <div className="i-right">
      
        <div className="i-bg"></div>

        <img src={require('../../img/sarra.png')} alt="sarra" className="i-img"/>
      </div>
    </div>
  );
};

export default Intro;
