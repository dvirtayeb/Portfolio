import React from 'react';
import {elastic as Menu } from 'react-burger-menu';
import {Link } from 'react-router-dom'; 

function showSideBar(props) {
  return (
    <div className="navigation">
        <div className="navigation-sub">
            <li id="nav_item"><Link to="/dvirtayeb-github-.io/" className="item">Home </Link></li>
            <Menu>
            {/* <li ><Link to="/dvirtayeb-github-.io/" className="bm-item">Home </Link></li> */}
            {/* <li ><Link to="/projects" className="bm-item">Projects </Link></li> */}
            <li ><a href="/dvirtayeb-github-.io/" className="bm-item"> Home A</a></li>
            <li ><a href="/projects" className="bm-item"> Projects A</a></li>
            <li ><a href="/Courses" className="bm-item"> Courses A</a></li>
            <li ><a href="/about" className="bm-item"> about A</a></li>
            {/* <li ><Link to="/Courses" className="bm-item">Courses </Link></li> */}
            {/* <li ><Link to="/about" className="bm-item">About </Link></li> */}
            </Menu>
        </div>
    </div>
  );
};

export default showSideBar;