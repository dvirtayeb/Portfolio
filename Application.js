import React from 'react';
import { useHistory } from 'react-router-dom';
// Pages:
import Menu from './Menu.js'
import SideBar from './SideBar.js';
// Style:
import './static/css/Application.css';
import './static/css/SideBar.css';
// picture
import Header from './pictures/header5_black.jpg';

function Application() {  
  const history = useHistory();
  console.log(history);
      return (
            <div>
              <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
              <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
              <div className="portfolio-header">
                <h1 id="portfolio">My Portfolio!</h1>
                <picture>
                  <img id="header-img" src={Header} alt=""/>
                </picture>
              </div>
              <Menu/>
            </div>
            
      );
}


export default Application;