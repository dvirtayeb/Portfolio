import {Route, Switch } from 'react-router-dom'; 

import Hello from './Hello.js'
import Projects from './Projects.js'; 
import Courses from './Courses.js'; 
import About from './About.js';


function Menu(props) {
  // const { search } = useLocation();
  // const match = search.match(/type=(.*)/);
  // const type = match?.[1];
  // const hello = search.match(/(.*)/);
  // const type1 = hello?.[1]
    return(
      <div className="menu">
        <Switch>
          <Route exact path="/Dvir-Portfolio" component={Hello}/>
          <Route path="/Dvir-Portfolio/Projects" component={Projects}/>
          <Route path="/Dvir-Portfolio/Courses" component={Courses}/>
          <Route path="/Dvir-Portfolio/About" component={About}/>
        </Switch>
        {/* {type1 === "" && <Hello/>} */}
        {/* {type === 'Projects' && <Projects/>} */}
        {/* {type === 'Courses' && <Courses/>} */}
        {/* {type === 'About' && <About/>} */}
      </div>
    )
}
export default Menu;

