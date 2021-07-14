import {React, Component } from 'react';
import {elastic as Menu } from 'react-burger-menu';
import {Link} from 'react-router-dom';


class SideBar extends Component {
  constructor(props){
    super(props)
    this.state = {
      sidebar: false
    }
  }
  
  handleStateChange(state) {
    this.setState({sidebar: state.isOpen});
  }
  closeSidebar () {
    this.setState({sidebar: false});
  }
  toggleSidebar() {
    this.setState(state => ({sidebar: !state.sidebar}));
  }
  render() {
    return(
        <div className="navigation">
          <div className="navigation-sub">
            <li id="nav_item"><Link to="/dvirtayeb-github-.io" className="item">Home </Link></li>
            <Menu isOpen={this.state.sidebar} onStateChange={(state) => this.handleStateChange(state)}>
                <li ><Link to="/dvirtayeb-github-.io/projects" className="bm-item" onClick={() => this.closeSidebar()}>
                  Projects 
                  </Link></li>
                <li ><Link to="/dvirtayeb-github-.io/Courses" className="bm-item" onClick={() => this.closeSidebar()}>
                  Courses 
                  </Link></li>
                <li ><Link to="/dvirtayeb-github-.io/about" className="bm-item" onClick={() => this.closeSidebar()}>
                  About 
                  </Link></li>
            </Menu>
          </div>
        </div>
    )
  }
}

export default SideBar;