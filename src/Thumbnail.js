import React from 'react';
import {Link} from 'react-router-dom';
import './static/css/projects.css';
 
function Thumbnail(props) {
  return (
    <div className="project_thumbnail">
      <Link to={props.link}>
        <div className="project-image">
          <img src={props.image} alt="project_image"/>
        </div>
        <div className="title">{props.title}</div>
        <div className="category">{props.category}</div>
      </Link>
    </div>
  );
}

export default Thumbnail;