import React, {Component} from 'react';
import { BrowserRouter } from 'react-router-dom'; 
import { MediaQuery } from 'react-responsive'
// Pages:
import Menu from './Menu.js'
import SideBar from './SideBar.js';
// Style:
import './static/css/Application.css';
import './static/css/SideBar.css';
// picture
import Header from './pictures/header.jpg';

const Example = () => {
  const isDesktopOrLaptop = MediaQuery({
    query: '(min-device-width: 1224px)'
  })
  const isBigScreen = MediaQuery({ query: '(min-device-width: 1824px)' })
  const isTabletOrMobile = MediaQuery({ query: '(max-width: 1224px)' })
  const isTabletOrMobileDevice = MediaQuery({
    query: '(max-device-width: 1224px)'
  })
  const isPortrait = MediaQuery({ query: '(orientation: portrait)' })
  const isRetina = MediaQuery({ query: '(min-resolution: 2dppx)' })
 
  return (
    <div>
      <h1> test </h1>
             {isBigScreen && <>
              <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
              <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
              <div className="portfolio-header">
                <h1 id="portfolio">My Portfolio!</h1>
                <picture>
                  <img id="header-img" src={Header} alt=""/>
                </picture>
              </div>
              <Menu/>

              {isDesktopOrLaptop && <>
              <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
              <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
              <div className="portfolio-header">
                <h1 id="portfolio">My Portfolio!</h1>
                <picture>
                  <img id="header-img" src={Header} alt=""/>
                </picture>
              </div>
              <Menu/></>}

              {isTabletOrMobile && <>
              <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
              <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
              <div className="portfolio-header">
                <h1 id="portfolio">My Portfolio!</h1>
                <picture>
                  <img id="header-img" src={Header} alt=""/>
                </picture>
              </div>
              <Menu/></>}

              {isTabletOrMobileDevice && <>
              <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
              <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
              <div className="portfolio-header">
                <h1 id="portfolio">My Portfolio!</h1>
                <picture>
                  <img id="header-img" src={Header} alt=""/>
                </picture>
              </div>
              <Menu/></>}
              </>}
    </div>
  )
}


class Application extends Component {
  constructor() {
		super();
		this.state = {
			open: false
    };
    
  }
  
    render(){  
        return (
            <BrowserRouter>
            <Example></Example>
            </BrowserRouter>
        );
  }
}

export default Application;

// class Application extends Component {
//   constructor() {
// 		super();
// 		this.state = {
// 			open: false
//     };
//     Example()
    
//   }
  
//     render(){  
//         return (
//             <BrowserRouter>
//               <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
//               <SideBar pageWrapId={'page-wrap'} outerContainerId={'outer-container'}/>
//               <div className="portfolio-header">
//                 <h1 id="portfolio">My Portfolio!</h1>
//                 <picture>
//                   <img id="header-img" src={Header} alt=""/>
//                 </picture>
//               </div>
//               <Menu/>
//             </BrowserRouter>
//               );
//     }
// }

// export default Application;