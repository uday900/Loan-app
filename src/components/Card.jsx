import React from 'react';
import { Link, } from 'react-router-dom';

const Card = ({ title, text, path }) => (
  
  <Link to = {path}
  style={{ textDecoration : "none"}} >

      <div className=' card text-dark shadow mb-3'
      style={{ height : "250px"}} >
      <div className="card-header">{title}</div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
      </div>
    </div>
  </Link>
);

export default Card