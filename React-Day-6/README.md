# Assignment 06

## 1. What is a Microservice?

Microservices, also known as microservices architecture, is a cloud-native architectural approach in which a single application is composed of many loosely coupled and independently deployable smaller components, or services. These services typically have their own technology stack, inclusive of the database and data management model.

Here are some key characteristics of microservices:
- **Autonomous**: Each component service in a microservices architecture can be developed, deployed, operated, and scaled without affecting the functioning of other services.
- **Specialized**: Each service is designed for a set of capabilities and focuses on solving a specific problem.
- **Agility**: Microservices foster an organization of small, independent teams that take ownership of their services.
- **Flexible Scaling**: Microservices allow each service to be independently scaled to meet demand for the application feature it supports.

In contrast to monolithic architectures where all processes are tightly coupled and run as a single service, microservices run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. This makes applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.

<img width="900px" height="600px" src ="https://microservices.io/i/posts/microservices-teams-subdomains.png"/>

## 2. What is Monolith architecture?
Monolithic architecture is a traditional model of software design where the application is built as a single, unified unit. All components and modules are bundled together and are highly interconnected and dependent on each other. Here are some key characteristics of a monolithic architecture:

- **Single Executable**: The entire application is packaged and deployed as a single executable file.
- **Tight Coupling**: The components and modules within the application are highly interconnected and dependent on each other. Changes made to one component may require modifications in other parts of the application.
- **Shared Memory**: All components within the application share the same memory space. They can directly access and modify shared data structures.
- **Monolithic Deployment**: The entire application is deployed as a single unit. Updates or changes to the application require redeploying the entire monolith.
- **Centralized Control Flow**: The control flow within the application is typically managed by a central module or a main function. The flow of execution moves sequentially from one component to another.

While monolithic architectures can provide high performance and simplicity, they may come with some trade-offs in terms of security, stability, and flexibility. For instance, since all code runs in kernel space, any vulnerabilities or bugs in the kernel can potentially affect the entire system. Additionally, it can be more difficult to customize and extend the operating system.

<img width="900px" height="600px" src="https://wac-cdn.atlassian.com/dam/jcr:95b9a276-c524-42b1-8d06-ded56d589858/Monolithic%20architecture@2x.png?cdnVersion=1269"/>

##  3. What is the difference between Monolith and Microservice?
Monolithic and Microservices architectures are two different approaches to structuring an application, each with its own advantages and trade-offs. Here are some key differences between them:

1. **Structure**: In a **Monolithic architecture**, all components of the application (like the user interface, business logic, and data access code) are bundled together into a single program. On the other hand, a **Microservices architecture** breaks down the application into small, loosely coupled services that can be developed and deployed independently.

2. **Scalability**: In a Monolithic architecture, scaling requires duplicating the entire application, which can be resource-intensive. Microservices can be scaled individually based on demand, making it a more flexible and efficient approach.

3. **Development & Deployment**: Monolithic applications are developed all at once and any changes require redeploying the entire application. In contrast, Microservices can be developed, updated, and deployed independently, allowing for faster and more frequent updates.

4. **Fault Isolation**: In a Monolithic architecture, a bug or failure in one component can potentially bring down the entire application. Microservices are isolated from each other, so a failure in one service doesn't directly affect others.

5. **Technology Stack**: Monolithic applications typically use a single technology stack for the entire application. Microservices can use different technologies for different services, providing more flexibility.

6. **Complexity**: While Monolithic architectures can be simpler to develop initially due to their unified codebase, they can become complex and difficult to manage as the application grows. Microservices can be more complex to set up due to the need for inter-service communication and coordination, but they can be easier to manage in large applications due to their modularity.

<img src ="https://wac-cdn.atlassian.com/dam/jcr:b2be0d53-f4b2-46d8-9a34-993048cc6225/Monolith%20Vs%20Microservice%20image.png?cdnVersion=1269" />

## 4. Why do we need a useEffect Hook?

The `useEffect` Hook in React is used to handle side effects in your components⁴. Here are some reasons why we need the `useEffect` Hook:

1. **Synchronization with External Systems**: `useEffect` allows you to synchronize a component with an external system¹. This could be anything from setting up a subscription to an external data source, or manually changing the DOM in response to prop or state changes.

2. **Code Organization**: It helps in organizing the code related to side effects in a separate place, making the functional components cleaner and easier to understand¹.

3. **Lifecycle Methods Replacement**: `useEffect` Hook can replicate the behavior of `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` lifecycle methods in class components. This makes it easier to write equivalent code in functional components.

4. **Conditional & Controlled Execution**: The `useEffect` Hook runs after every render by default, but it can be controlled by passing an array of dependencies². The effect will only run when the specified dependencies have changed.

5. **Cleanup**: The `useEffect` Hook allows for cleanup logic, which is run before the component is removed from the UI to prevent memory leaks².

Here is an example of how to use the `useEffect` Hook:

```jsx
import { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 1);
    }, 1000);
  }, []); // <- add empty brackets here

  return <h1>I've rendered {count} times!</h1>;
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Timer />);
```

In this example, a timer is set up that increases a count state variable every second. The `useEffect` Hook is used to set up this side effect¹. The empty array passed as the second argument to `useEffect` means that the effect will only run once after the initial render, and not on subsequent re-renders¹.

## 5. What is Optional Chaining?
Optional Chaining, represented by `?.` in JavaScript, is a feature that allows you to access properties of an object or call a function in a safer way. If the object accessed or function called using this operator is undefined or null, the expression short circuits and evaluates to undefined instead of throwing an error.

Here's how it works:

- **Object Property Access**: `obj.val?.prop` or `obj.val?.[expr]`
- **Function Call**: `obj.func?.(args)`

This operator is like the `. chaining operator`, except that instead of causing an error if a reference is nullish (null or undefined), the expression short-circuits with a return value of undefined.

For example, consider an object `obj` which has a nested structure. Without optional chaining, looking up a deeply-nested subproperty requires validating the references in between, such as: 

```javascript
const nestedProp = obj.first && obj.first.second;
```

With the optional chaining operator (?.), however, you don't have to explicitly test and short-circuit based on the state of `obj.first` before trying to access `obj.first.second`:

```javascript
const nestedProp = obj.first?.second;
```

By using the `?.` operator instead of just `.`, JavaScript knows to implicitly check to be sure `obj.first` is not null or undefined before attempting to access `obj.first.second`. If `obj.first` is null or undefined, the expression automatically short-circuits, returning undefined.

## 6. What is Shimmer UI?

Shimmer UI is a user interface design pattern used to indicate loading states in applications. Instead of using traditional loading indicators like spinners or progress bars, Shimmer UI displays a placeholder that mimics the layout and shapes of the content that will eventually appear.

It uses a gradient animation to create a shimmering effect over these placeholders, giving the user a sense of motion and progress. This approach has several benefits:
- It improves the perceived performance of the app by making it seem faster and more responsive.
- It reduces the cognitive load on the user by providing visual cues about the type and structure of the content that is being loaded.
- It eliminates surprises and confusion by showing a consistent and predictable UI before and after loading.
- It enhances the aesthetic appeal and user satisfaction by creating a smooth and elegant transition from loading to loaded.

Shimmer UI can be implemented in different ways depending on the platform and framework you are using. For example, if you are using React, you can use the Shimmer package which provides a component that creates a shimmer effect over any component. If you are using Microsoft Fluent UI for Shiny, you can use the Shimmer component that creates a temporary animation placeholder for when a service call takes time to return data. If you are using HTML and CSS, you can create your own shimmer UI by using some basic techniques.

Examples of Shimmer UI in action include Facebook, which uses shimmer UI to show loading states for posts, comments, stories, and other elements in its app and website. LinkedIn uses shimmer UI to show loading states for profiles, articles, jobs, and other elements in its app. Netflix uses shimmer UI to show loading states for movies, shows, genres, and other elements in its app.

## 7. What is the difference between JS expression and JS statement ?

In JavaScript, the key difference between a statement and an expression is that statements perform an action, while expressions produce a value.

**Expressions** are any valid unit of code that resolves to a value. They can be used as an rvalue. Expressions can have side effects. For example, `a=2` is an expression as it has a value (2) and also assigns a value to a variable. Here are some examples of expressions:
- `x;` // Resolves to 0
- `3 + x;` // Resolves to 3
- `add(1, 2);` // Resolves to 3

**Statements**, on the other hand, are executed for their side effects. Each statement is an instruction to do something, like create a variable, run an if/else condition, or start a loop. Here are some examples of statements:
- `let x = 0;`
- `function add(a, b) { return a + b; }`
- `if (true) { console.log('Hi'); }`

It's important to note that wherever JavaScript expects a statement, you can also write an expression. Such a statement is called an expression statement. The reverse does not hold: you cannot write a statement where JavaScript expects an expression.

## 8. What is Conditional Rendering, explain with a code example. 

Conditional rendering in React is a way to render different user interface (UI) markup if a condition is true or false. It allows us to render different elements or components based on a condition. This concept is applied often in scenarios such as rendering external data from an API, showing or hiding elements, toggling application functionality, implementing permission levels, and handling authentication and authorization.

Here's an example of conditional rendering in React:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

function Message (props) {
  if (props.isLoggedIn)
    return <h1>Welcome User</h1>;
  else
    return <h1>Please Login</h1>;
}

function Login (props) {
  return( <button onClick = {props.clickFunc}> Login </button> );
}

function Logout (props) {
  return( <button onClick = {props.clickFunc}> Logout </button> );
}

class Homepage extends React.Component {
  constructor (props) {
    super(props);
    this.state = {isLoggedIn : false};
    this.ifLoginClicked = this.ifLoginClicked.bind(this);
    this.ifLogoutClicked = this.ifLogoutClicked.bind(this);
  }

  ifLoginClicked () {
    this.setState({isLoggedIn : true});
  }

  ifLogoutClicked () {
    this.setState({isLoggedIn : false});
  }

  render () {
    return(
      <div>
        <Message isLoggedIn = {this.state.isLoggedIn}/>
        { (this.state.isLoggedIn)?
          (<Logout clickFunc = {this.ifLogoutClicked} />) :
          (<Login clickFunc = {this.ifLoginClicked} />)
        }
      </div>
    );
  }
}

ReactDOM.render(<Homepage />, document.getElementById('root'));
```

In the above example, the `Homepage` component maintains a state variable `isLoggedIn` that tracks whether the user is logged in or not. Depending on the value of `isLoggedIn`, either the `Login` or `Logout` component is rendered. The `Message` component also uses the value of `isLoggedIn` to display a different message. When the `Login` or `Logout` button is clicked, the corresponding function is called to update the state of `isLoggedIn`, which triggers a re-render of the `Homepage` component.

## 9. What is CORS ?

Cross-Origin Resource Sharing (CORS) is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources. 

CORS is a mechanism by which data or any other resource of a site could be shared intentionally to a third party website when there is a need. Generally, access to resources that are residing in a third party site is restricted by the browser clients for security purposes.

For example, if the front-end JavaScript code served from [domain-a.com](^4^) uses XMLHttpRequest to make a request for [domain-b.com/data.json](^5^), this would be a cross-origin request. For security reasons, browsers restrict cross-origin HTTP requests initiated from scripts. For example, XMLHttpRequest and the Fetch API follow the same-origin policy.

The CORS mechanism supports secure cross-origin requests and data transfers between browsers and servers. Modern browsers use CORS in APIs such as XMLHttpRequest or Fetch to mitigate the risks of cross-origin HTTP requests.

CORS works by adding new HTTP headers that let servers describe which origins are permitted to read that information from a web browser. Servers can also inform clients whether "credentials" (such as Cookies and HTTP Authentication) should be sent with requests.

CORS failures result in errors but for security reasons, specifics about the error are not available to JavaScript. All the code knows is that an error occurred. The only way to determine what specifically went wrong is to look at the browser's console for details.

## 10. What is async and await ?

The `async` and `await` keywords are used in JavaScript to work with promises in a more comfortable fashion.

The `async` keyword can be placed before a function, which means the function will always return a promise. If the function returns a value that is not a promise, it will be automatically wrapped in a resolved promise. For example:

```javascript
async function f() {
  return 1;
}
f().then(alert); // 1
```

The `await` keyword can only be used inside an `async` function. It makes the function wait until the promise settles and returns its result. For example:

```javascript
async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("done!"), 1000)
  });
  let result = await promise; // wait until the promise resolves
  alert(result); // "done!"
}
f();
```

In this example, the function execution "pauses" at the line with `await` and resumes when the promise settles, with `result` becoming its result. So the code above shows "done!" in one second.

It's important to note that `await` only makes the async function where it's used wait, and not the whole program execution. This allows other tasks to continue running in the meantime.

## 11. What is the use of `const json = await data.json();` in `getRestaurants()`

The line `const json = await data.json();` in the `getRestaurants()` function is used to parse the response data into a JSON object.

When you make a fetch request (or any promise-based HTTP request), the response is a stream. The `.json()` method is an asynchronous function that returns a Promise which resolves with the result of parsing the body text as JSON.

The `await` keyword is used to pause and wait for the Promise to resolve or reject, and then it returns the resolved value. This means that `data.json()` will return a Promise that resolves with the JSON object, and `await data.json()` will pause until that Promise resolves and then return the resulting JSON object.

So, `const json = await data.json();` is essentially reading the entire contents of the response stream and converting it into a JSON object. This JSON object (`json`) can then be used in your code to access the data returned from the fetch request.

