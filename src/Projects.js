import React from "react";
import { Route } from "react-router";
import { BrowserRouter} from 'react-router-dom'; 
// Picutre
import logo_Jems from './pictures/logo_Jems.png';
import Management from './pictures/Championship/management.jpg';
// Page
import Thumbnail from './Thumbnail.js';
import jemsPage from './jemsPage.js';
import championship from './Championship.js'; 
// Style
import './static/css/projects.css';
 
function showProjects(props) {
  return (
    <div className="projects">
      <BrowserRouter>
        <div className="Management">
          <h1>Projects</h1>
          <Thumbnail
          link="/Championship"
          image={Management}
          title="Championship Management"
          category="App"
          />
        </div> 
        <div className="Jems">
          <Thumbnail
          link="/jemsPage"
          image={logo_Jems}
          title="Jems-Calculate tips"
          category="Web app"
          />
        <Route path="/JemsPage" component={jemsPage}/>
        <Route path="/Championship" component={championship}/>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default showProjects;