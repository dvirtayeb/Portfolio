import {React, Component} from "react";
import { Route } from "react-router";
import { BrowserRouter, Switch} from 'react-router-dom'; 
// Picutre
import logo_Jems from './pictures/logo_Jems.png';
import Management from './pictures/Championship/management.jpg';
// Page
import Thumbnail from './Thumbnail.js';
import jemsPage from './jemsPage.js';
import championship from './Championship.js'; 
// Style
import './static/css/projects.css';

function scrollDown (props){
  var scroll = document.getElementById("current_project")
  scroll.scrollIntoView();
}

class showProjects extends Component {
  render(){
  return (
    <div className="projects" onClick={scrollDown}>
      <BrowserRouter>

        {/* Project Championship Management! */}
        <div className="Management" >
          <h1>Projects</h1>
          <Thumbnail
          link="/dvirtayeb-github-.io/projects/Championship"
          image={Management}
          title="Championship Management"
          category="App"
          />
        </div>

        {/* Project Jems! */}
        <div className="Jems">
          <Thumbnail
          link="/dvirtayeb-github-.io/projects/jemsPage"
          image={logo_Jems}
          title="Jems-Calculate tips"
          category="Web app"
          />
        </div>
        <div id = "current_project">
          <Switch>
            <Route exact path="/dvirtayeb-github-.io/projects/JemsPage" component={jemsPage}/>
            <Route exact path="/dvirtayeb-github-.io/projects/Championship" component={championship}/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
  }
}

export default showProjects;