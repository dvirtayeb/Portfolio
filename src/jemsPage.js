import React from "react"
import './static/css/projects.css';
import exampleTip from './pictures/example_tips3.png';
function show(props) {
    return (
      <div className="jemsPage">
          <h1>Jems - Calculate tips Project</h1>
          <h4>
            the purpose of the project was to improve
             the way we count the money in the end of the shift<br></br>, by calculate the money more faster.
             <br></br> I wrote this project in Python, using Flask, SQLAlchemy, HTML, CSS.
             <br></br>
          </h4>
          <img id="tips" src={exampleTip} alt=""></img>
    </div>
  )
}

export default show;