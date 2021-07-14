import {Route, Switch } from 'react-router-dom'; 

import Hello from './Hello.js'
import Projects from './Projects.js'; 
import Courses from './Courses.js'; 
import About from './About.js';



function menu(props) {
    return(
        <div className="menu">
        <Switch>
          <Route exact path="/dvirtayeb-github-.io" component={Hello}/>
          <Route exact path="/dvirtayeb-github-.io/projects" component={Projects}/>
          <Route exact path="/dvirtayeb-github-.io/Courses" component={Courses}/>
          <Route exact path="/dvirtayeb-github-.io/about" component={About}/>
        </Switch>
      </div>
    )
}
export default menu;