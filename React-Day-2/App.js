import React from "react";
import  ReactDOM  from "react-dom";

const parent = React.createElement(
    "div",
    {id:"parent"},

    React.createElement(
        "div",
        {id:"child"},
        // Pass children As an Array 
        [
            React.createElement(
                "h1",
                {},
                "I'm an h1 tag"
            ),
            React.createElement(
                "h1",
                {},
                "I'm an h2 tag"
            )
        ]
    )
);



const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the parent 
root.render(parent); 
