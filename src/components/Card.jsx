import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Card = ({ bgColor = 'bg-light', title, text, path }) => (
  
  <Link to = {path}
  style={{ textDecoration : "none"}} >
    <div className={`card text-dark bg-light mb-3`}
//    style={{ maxWidth: '18rem' }}
    >
    <div className="card-header">{title}</div>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{text}</p>
    </div>
  </div>
  </Link>
);

export default Card