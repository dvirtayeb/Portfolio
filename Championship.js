import React from "react";
import { BrowserRouter} from 'react-router-dom';
import exampleTip from './pictures/Championship/1.1.png';
import exampleTip2 from './pictures/Championship/1.2.png';
import exampleTip3 from './pictures/Championship/2.png';
import exampleTip4 from './pictures/Championship/3.png';
import exampleTip5 from './pictures/Championship/4.png';

function show(props) {
        return (
        <BrowserRouter>
        <div className="Championship">
            <h1>Championship Management - Project </h1>
            <h4>
                This project presents the uses of the elements of OOP that I learned in the academy.
                <br></br>the purpse of the project is to management the competition until one of the team\player win,
                <br></br>we got 3 types of games: Basketball, Tennis, Soccer.
                <br></br> I wrote the project in Java, using JavaFX and the Model "MVC". 
            </h4>
            <br></br>
            <img id="management" src={exampleTip} alt=""></img>
            <img id="management" src={exampleTip2} alt=""></img>
            <img id="management" src={exampleTip3} alt=""></img>
            <img id="management" src={exampleTip4} alt=""></img>
            <img id="management" src={exampleTip5} alt=""></img>
           
        </div>
        </BrowserRouter>
        );
}

export default show;