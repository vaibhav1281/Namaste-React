/**************************************************HOW TO CREATE NESTED ELEMENT with Sibilings********************************************** */

/**Something Like This ->
 * 
 * <div id="parent">
 *  <div id="child">
 *    <h1>I'm an h1 tag</h1>
 *    <h2>I'm an h2 tag</h2>
 *  </div>
 * </div>
 */

/** If we want to create Siblings, We have to pass Children as an Array */

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
                "h2",
                {},
                "I'm an h2 tag"
            )
        ]
    )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the parent 
root.render(parent); 

/** It will Render the content on Screen but,
 * in console it will throungh an Error :
 *  Warning: Each child in a list should have a unique "key" prop.
 */
