
import React from "react";
import ReactDOM from "react-dom";

function MyInfo() {
    return (
        <div>
            <h1>Ron Palencia</h1>
            <p>Foodie, Techie, and Funny!</p>
            <p>3 vacation spots</p>
            <ol>
                <li>Tokyo</li>
                <li>Galapagos Islands</li>
                <li>Australia</li>
            </ol>
        </div>
    )
}


ReactDOM.render(<MyInfo />, document.getElementById("root"))

