<div align="right">
  
  ## [Assignment 04 Code](https://github.com/vaibhav1281/Namaste-React/blob/main/Assignments%20(Code%20Section)/Assignment%2004%20/README.md)
</div>


# Assignment 04
## Theory
### Q-01. Is JSX mandatory for React ?
<p>No, JSX is not mandatory for React. However, it is highly recommended as it makes the development process easier and the code becomes easier to write and read. JSX allows us to write HTML directly within the JavaScript code. It also allows React to show more useful error and warning messages. But you can write components in plain JS. So, while it's not a requirement, using JSX can enhance your experience when working with React.</p></br>

### Q-02. Is ES6 mandatory for React ?
<p>No, ES6 is not mandatory for React. While React uses ES6, and you should be familiar with some of the new features like classes, arrow functions, variables (let, const, var), array methods like .map(), destructuring, modules, ternary operator, spread operator, it’s not a requirement. If you don’t use ES6 in React, there is an alternative to perform. You can use create-react-class instead of ES63. So while it’s beneficial to know ES6 when working with React, it’s not a strict necessity.</p></br>

### Q-03. <code>{titleComponent}</code> vs <code>&lt;TitleComponent/&gt;</code> vs <code>&lt;TitleComponent&gt;&lt;/TitleComponent&gt;</code> in JSX element

<p>In JSX, the difference between <code>{titleComponent}</code>, <code>&lt;TitleComponent/&gt;</code>, and <code>&lt;TitleComponent&gt;&lt;/TitleComponent&gt;</code> is as follows:</p>

<ul>
  <li><code>{titleComponent}</code>: This value in JSX is considered as a JSX expression or variable. If no such variable is present, no output will be shown in the browser.</li>
  <li><code>&lt;TitleComponent/&gt;</code>: This is a self-closing tag that renders the <code>TitleComponent</code>. It's used when a component doesn't have any children.</li>
  <li><code>&lt;TitleComponent&gt;&lt;/TitleComponent&gt;</code>: This is used when you are rendering a component that has child components or content between the opening and closing tags.</li>
</ul>

<p>So, <code>&lt;TitleComponent/&gt;</code> and <code>&lt;TitleComponent&gt;&lt;/TitleComponent&gt;</code> are equivalent only when <code>TitleComponent</code> doesn't have any children.</p></br>

### Q-04. How can I write comments in JSX ?
<p>In JSX, you can write comments using the following syntax:</p>

```
{/* This is a JSX comment */}
```
<p>JSX comments begin and end with curly braces <code>{}</code>. Inside the curly braces, you start the comment with a forward slash and an asterisk <code>/*</code>, then write your comment, and finally close it with an asterisk and a forward slash <code>*/</code></p>
<p>Here’s an example of how to use it in a component:</p>

```
function ExampleComponent() {
  return (
    <div>
      {/* This is a comment inside JSX */}
      <h1>Hello, world!</h1>
    </div>
  );
}

```
<p>In this example, the comment will not be rendered in the HTML output. It’s a good practice to use comments to explain your code and make it easier to understand.</p></br>


### Q-05. What <code><React.Fragment></React.Fragment></code> and <code><></></code> ?
<p>In React, both <code>&lt;React.Fragment&gt;&lt;/React.Fragment&gt;</code> and <code>&lt;&gt;&lt;/&gt;</code> are used to group multiple elements without adding an extra node to the DOM. This is useful when a component needs to return multiple elements, but you don't want to wrap them in a div or another HTML element.</p>

<p>The difference between the two lies in their usage:</p>

<ul>
  <li><code>&lt;React.Fragment&gt;&lt;/React.Fragment&gt;</code>: This is the full syntax. It allows you to pass attributes like <code>key</code>, which is often needed when creating lists of components.</li>
  <li><code>&lt;&gt;&lt;/&gt;</code>: This is the shorthand syntax. It does not support attributes or keys.</li>
</ul>

<p>Here's an example of how you might use each:</p>

<pre>
// Using &lt;React.Fragment&gt;
&lt;React.Fragment key={item.id}&gt;
  &lt;ComponentA /&gt;
  &lt;ComponentB /&gt;
&lt;/React.Fragment&gt;

// Using &lt;&gt;
&lt;&gt;
  &lt;ComponentA /&gt;
  &lt;ComponentB /&gt;
&lt;/&gt;
</pre>

<p>In the first example, we're able to pass a <code>key</code> prop to <code>React.Fragment</code>, which is necessary when rendering lists of components. In the second example, we're grouping <code>ComponentA</code> and <code>ComponentB</code> without adding an extra node to the DOM, but we can't pass any props.</p></br>

### Q-06. What in Virtual DOM ?
<p>The Virtual DOM in React is a lightweight copy of the actual DOM (a virtual representation of the DOM). For every object that exists in the original DOM, there is an object for that in React Virtual DOM. It is exactly the same, but it does not have the power to directly change the layout of the document. Manipulating DOM is slow, but manipulating Virtual DOM is fast as nothing gets drawn on the screen.</p>

<p>When anything new is added to the application, a virtual DOM is created and it is represented as a tree. Each element in the application is a node in this tree. So, whenever there is a change in the state of any element, a new Virtual DOM tree is created. This new Virtual DOM tree is then compared with the previous Virtual DOM tree and make a note of the changes. After this, it finds the best possible ways to make these changes to the real DOM. Now only the updated elements will get rendered on the page again.</p>

<p><b>This approach makes React faster and optimizes re-rendering.</b></p></br>

### Q-07. What is Reconciliation in React ?
<p>Reconciliation is the process through which React updates the DOM. When a component’s state changes, React has to calculate if it is necessary to update the DOM. It does this by creating a virtual DOM and comparing it with the current DOM. In this context, the virtual DOM will contain the new state of the component.</p>

<p>React uses a Virtual DOM (VDOM) to perform reconciliation, which is used to compare a component’s current and previous states. When diffing two trees, React first compares the two root elements. The behavior is different depending on the types of the root elements.</p>

<p>Whenever the root elements have different types, React will tear down the old tree and build the new tree from scratch. When comparing two React DOM elements of the same type, React looks at the attributes of both, keeps the same underlying DOM node, and only updates the changed attributes.</p>

<p>React uses optimizations so that a minimal difference can be calculated in <code>O (N) </code>efficiently using this Algorithm. This changes the efficiency of an application tremendously.</p></br>

### Q-08. Why we need keys in React ? When do we need keys in React ?
<p>Keys in React are used to identify which items in a list are changed, updated, or deleted. They give an identity to the elements in the lists. React uses the key attribute during its reconciliation phase to decide which elements can be reused for the next render. They are important for dynamic lists.</p>

<p>You need keys in React when you’re creating lists of elements. For example, when you’re using the <code> .map() </code>function to create a list of components, each component needs a key. A good rule of thumb is that elements inside the <code> .map() </code> call need keys.</p>

<p>Keys should be given to the elements inside the array to give the elements a stable identity. The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys. When you don’t have stable IDs for rendered items,<code> you may use the item index as a key as a last resort. </code></p></br>


### Q-09. Can we use index as keys in React ?
<p>Yes, we can use index as keys in React, but it’s not recommended. Using indexes as keys can lead to issues if the order of items may change. This can negatively impact performance and may cause issues with component state.</p>

<p>If you choose not to assign an explicit key to list items then React will default to using indexes as keys. However, if you are not adding or removing items from the list, then it is fine to use index as keys. Otherwise, it will be good to use some <code>id</code> which uniquely identifies the item.</p>

<p>So, while it’s possible to use index as a key in React, it’s generally better to use unique identifiers if they are available.</p></br>


### Q-10. What is props in React ? Ways to use props in React.
<p>In React, props are used to pass data from one component to another. <code>They are like function arguments in JavaScript and attributes in HTML.</code> <code>Props stand for properties and they are read-only components.</code> They give a way to pass data from one component to other components. It is an object which stores the value of attributes of a tag and works similar to the HTML attributes.</p>
<p>1. <strong>There are two ways to use props in a React app :</strong></p>
<p><strong>Without destructuring: </strong>Here, you define props without destructuring. For example:</p>

```
function Course (props) {

   return <div>{props.courseName}</div>

}

```
<p>2. <strong>With destructuring: </strong> Here, you define props as a destructuring argument. For example:</p>

```
function Course ({ courseName }) {

   return <div>{courseName}</div>

}

```
<p>In both cases, you’re passing data from a parent component to a child component using props.</p>
</br>

### Q-11. What is a Config Driven UI ?
<p>A Config Driven UI is a technique that allows you to create user interfaces based on a configuration file, such as JSON, or a TypeScript file that defines the layout and content of the UI components. This can be useful for creating dynamic and customizable UIs without hard coding them. 

In Configuration Driven Development (CDD), applications are built in a way that they are dynamically composed and based on configuration. This means that you can build an application that can easily adapt with just a few changes in this configuration. 

At its core, CDD is a way of using modularity to build a loosely coupled set of components that are then composed together using a common interface. This approach can make it easier to onboard new UI scenarios quickly and with minimal regression in the old UI Flows, resulting in a significant reduction in development efforts.</p>
</br>
