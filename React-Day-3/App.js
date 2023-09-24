import React from "react";
import  ReactDOM  from "react-dom";

/**
 *  <div className="title">
 *      <h1>
 *          <h2>
 *              <h3></h3>
 *          </h2>
 *      </h1>
 *  </div>
 */


const heading = React.createElement(
    "div",
    {className:"title"},
    React.createElement(
        "h1",
        {},
        React.createElement(
            "h2",
            {},
            React.createElement(
                "h3",
                {},
                "hello world"
            )
        )
    )
);

/**
*   <div className="title">
*       <h1></h1>
*       <h1></h1>
*       <h1></h1>
*   </div>
*/
const element = React.createElement(
    'div',
    { className: 'title' },
    React.createElement('h1', {}, 'Header 1'),
    React.createElement('h2', null, 'Header 2'),
    React.createElement('h3', {}, 'Header 3')
);

// Creating Same element using JSX
const jsxElement = (
    <div className="title">
        <h1>Header 1 Using JSX</h1>
        <h2>Header 2 Using JSX</h2>
        <h3>Header 3 Using JSX</h3>
    </div>
);

// Create a functional component of the same with JSX
const Element1 = () => {
    return(
        <div className="title">

            <h1>Header 1 Using Functional component</h1>
            <h2>Header 2 Using Functional component</h2>
            <h3>Header 3 Using Functional component</h3>
            
        </div>
    );
};

// Component Composition
const ComponentComposition = () => {
    return(
        <div>
            <h1>Here is the Component Composition</h1>
            {heading}
            <Element1/>
            {element}
            {jsxElement}
        </div>
    );
}
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Element1/>);