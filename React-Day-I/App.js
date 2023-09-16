
/**
 * Creating h1-tag, using createElement- it contains 3 Objects
 * First is Tag.
 * Second is Attribute(Text & FOnt size, text color etc.. OR Providing id to the tag.).
 * Third is Content, that we want to Render on the Screen.
 */

const heading = React.createElement(
    
    "h1", 

    // These are "props"
    {id:"heading"}, // This is Attribute
    "Hello World from React!" // This is Children
);

console.log(heading) // Returns Object

// Creating Root, using createRoot
const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering the Heading 
root.render(heading);