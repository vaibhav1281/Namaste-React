
/**************************************************HOW TO CREATE NESTED ELEMENT********************************************** */

/**Something Like This ->
 * 
 * <div id="parent">
 *  <div id="child">
 *    <h1>I'm an h1 tag</h1>
 *  </div>
 * </div>
 */

const parent = React.createElement(
    "div",
    {id:"parent"},

    React.createElement(
        "div",
        {id:"child"},
        React.createElement(
            "h1",
            {},
            "I'm an h1 tag"
        )
    )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the parent 
root.render(parent); // I'm an h1 tag
