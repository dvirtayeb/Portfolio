import {React} from "react";
import { useLocation} from 'react-router-dom'; 
// Picutre
import logo_Jems from './pictures/logo_Jems.png';
import Management from './pictures/Championship/management.jpg';
// Page
import Thumbnail from './Thumbnail.js';
import JemsPage from './jemsPage.js';
import Championship from './Championship.js'; 
// Style
import './static/css/projects.css';

function scrollDown (props){
  var scroll = document.getElementById("current_project")
  scroll.scrollIntoView();
}

function ShowProjects() {
  const { search } = useLocation();
  const match = search.match(/type=(.*)/);
  const type = match?.[1];
  return (
    <div className="projects" onClick={scrollDown}>
        {/* Project Championship Management! */}
        <div className="Management" >
          <h1>Projects</h1>
          <Thumbnail
          link="/Dvir-Portfolio/Projects?type=Championship"
          image={Management}
          title="Championship Management"
          category="App"
          />
        </div>

        {/* Project Jems! */}
        <div className="Jems">
          <Thumbnail
          link="/Dvir-Portfolio/Projects?type=JemsPage"
          image={logo_Jems}
          title="Jems-Calculate tips"
          category="Web app"
          />
        </div>
        <div id = "current_project">
        {type === 'Championship' && <Championship/>}
        {type === 'JemsPage' && <JemsPage/>}
        </div>
    </div>
  )
}

export default ShowProjects;