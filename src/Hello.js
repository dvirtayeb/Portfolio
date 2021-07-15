import React from "react";
import { BrowserRouter} from 'react-router-dom';

function sayHello(props) {
        return (
        <BrowserRouter>
        <div className="hello">
            <h1>Welcome!</h1>
            <h4>This is a part of my journy in Software Engineer.</h4>
            <h4>
                on this website you can see some of my projects I did while studing at the academy,
                <br></br>in my free time and as part of the courses I took.
                <br></br>
                <br></br>
                * This website is written in JavaScript - React
                <br></br>
            </h4>
        </div>
        </BrowserRouter>
        );
}

export default sayHello;