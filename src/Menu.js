import {Route, Switch } from 'react-router-dom'; 

import Hello from './Hello.js'
import Projects from './Projects.js'; 
import Courses from './Courses.js'; 
import About from './About.js';


function Menu(props) {
    return(
      <div className="menu">
        <Switch>
          <Route exact path="/" component={Hello}/>
          <Route exact path="/Dvir-Portfolio/Projects" component={Projects}/>
          <Route path="/Dvir-Portfolio/Courses" component={Courses}/>
          <Route path="/Dvir-Portfolio/About" component={About}/>
          <Route path="/Dvir-Portfolio/Projects/:type">
            <Projects/>
          </Route>
        </Switch>
      </div>
    )
}
export default Menu;

