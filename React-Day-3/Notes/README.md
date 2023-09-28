<h3> <a href="https://github.com/vaibhav1281/Namaste-React/blob/main/React-Day-2/Notes/README.md">Previous<< </a> </h3>

<P>Till now to run our project we use the command <code>npx parcel index.html</code></p>
<P><code>npx</code> means, we are executing <code>npm</code> package parcel, and we give the source file as <code>index.html</code></p>
<P>Now, we create script,that will build our project, instead of writing <code>npx parcel index.html</code> again and again, we use our custom script to run the project</p>
<P>We'll create this script inside the <code>package.josn</code> file</p>

```
 "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html",
    "test": "jest"
  },
  ```
<p>Now to run our project,we'll use <code>npm run start</code> or <code>npm start</code> and for <b>Production build</b> we use <code>npm build</code></p>

<h2>Creating JSX Heading</h2>
<p>For single line of JSX code:</p>

```

const jsxHeading = <h1>Heading Using JSX</h1>

```
<p>For multiple lines of JSX code, we use Round Brackets</p>

```
const jsxHeading = (
    <h1 className="head">
        Heading Using JSX
    </h1>
)
```

<p>JSX is NOt HTML in JavaScript. HTML,React and JSX are thre different thing.</p>

<h3>Creating ReactElement using React</h3>

```
const heading = React.createElement(
  "h1",
  {id:"heading"},
  "Hello WOrld"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
```

<h3>Creating ReactElement using JSX</h3>

```
const jsxHeading = <h1 id="heading">Heading Using JSX</h1> 
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(jsxHeading);
```

<h3>JSX Working</h3>

```

JSX => React.createElement => React Element (JavaScript Object) => (Renders)

```

<h3>React Componenet</h3>
<h4>There are two types of React Components</h4>
<ol>
  <li>Class Based Component</li>
  <li>Functional Component</li>
</ol>
<h3>Functional Component</h3>
<h4>This is how Functional Component are created</h4>
<p>When the code is single lined:</p>

```
const Heading = () => <h1>I am a functional component!</h1>
```
<p>When there multiple lines:</p>

```
Const Heading = () => {
  return (
    <div>
      <h2>I am a functional component!</h2>
    </div>
  )
}
```

<h3>How To Render React Functional Component</h3>

```
const Element1 = () => {
    return(
        <div className="title">

            <h1>Header 1 Using Functional component</h1>
            <h2>Header 2 Using Functional component</h2>
            <h3>Header 3 Using Functional component</h3>
            
        </div>
    );
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Element1/>);

```

<h3>How We Can Render One Component Inside Another Component</h3>
<p>This Process is called <b>Component Composition</b></p>

```
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

            <Element1/>
    
        </div>
    );
}
  
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<ComponentComposition/>);

```

<p></p>
<p></p>
