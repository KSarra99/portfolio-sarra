import React from "react";
import "./Intro.css";
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
              Web Developer Full Stack JS (Mern)
</div>
              <div className="i-title-item">
              Freshly certified from GoMyCode
              </div>
              <div className="i-title-item">
              and Skilled in: 
              </div>
            </div>
          </div>
          <div className="i-desc">
  
           
              <div className="icons1">
            Javascript <i class="devicon-javascript-plain colored"></i> 
            HTML <i class="devicon-html5-plain colored"></i>
            CSS <i class="devicon-css3-plain colored"></i>
            ReactJs <i class="devicon-react-original colored"></i> 
            ExpressJs <i class="devicon-express-original colored"></i>
            </div>
            <div className="icons2">
            Redux <i class="devicon-redux-original colored"></i>
            Bootstrap <i class="devicon-bootstrap-plain colored"></i>
            NodeJs <i class="devicon-nodejs-plain colored"></i>
            Git <i class="devicon-git-plain colored"></i>
            MongoDB<i class="devicon-mongodb-plain colored"></i>
            </div>
            
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
