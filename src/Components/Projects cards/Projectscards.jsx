import React from 'react';
import "./Projectscards.css"
const Projectscards = ({img,link}) => {
  return <div className="Pcard">
<div className="card-browser">
  <div className="card-circle"></div>
  <div className="card-circle"></div>
  <div className="card-circle"></div>
</div>
<a href={link} target="_blank" rel="noreferrer">
  <img src={img} alt="" className="card-img"/>
</a>
  </div>;
};

export default Projectscards;
