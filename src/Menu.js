import {Route } from 'react-router-dom'; 

import Hello from './Hello.js'
import Projects from './Projects.js'; 
import Courses from './Courses.js'; 
import About from './About.js';

function menu(props) {
    return(
        <div className="menu">
        <Route exact path="/dvirtayeb-github-.io/" component={Hello}/>
        <Route exact path="/projects" component={Projects}/>
        <Route exact path="/Courses" component={Courses}/>
        <Route exact path="/about" component={About}/>
      </div>
    )
}
export default menu;