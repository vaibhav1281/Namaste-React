# Assignment 07

## 1. What are various ways to add images into our App? Explain with code examples .

There are several ways to add images into a React application. Here are a few examples:

1. **Importing an Image File Directly**

You can import an image file directly into your component and use it in an `img` tag.

```jsx
import React from 'react';
import logo from './logo.png'; // relative path to image 

const App = () => {
  return (
    <div className="App">
      <img src={logo} alt="Logo" />
    </div>
  );
};

export default App;
```

2. **Using Public Folder**

You can also place your image in the public folder and refer to it by its path.

```jsx
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <img src={process.env.PUBLIC_URL + '/logo.png'} alt="Logo" />
    </div>
  );
};

export default App;
```

3. **Using an External URL**

If your image is hosted on an external server, you can refer to it directly using its URL.

```jsx
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <img src="https://example.com/logo.png" alt="Logo" />
    </div>
  );
};

export default App;
```

4. **Using Base64 Encoded Image**

You can also use base64 encoded images directly in your components.

```jsx
import React from 'react';

const App = () => {
  return (
    <div className="App">
      <img src="data:image/png;base64,iVBORw0KGg..." alt="Logo" />
    </div>
  );
};

export default App;
```

Remember to replace `"data:image/png;base64,iVBORw0KGg..."` with your actual base64 string.

These are just a few ways to add images in a React application. The method you choose depends on your specific needs and the structure of your project.

## 2. What would happen if we do console.log(useState()) ?

The `useState()` function is a Hook that lets you add React state to function components. When you call `useState()`, it returns a pair: the current state value and a function that lets you update it. 

If you do `console.log(useState())` without passing an initial state, it will log an array with two elements. The first element is the initial state, which is `undefined` in this case since no initial state was provided. The second element is a function to update the state.

Here's an example of what you might see in the console:

```javascript
[undefined, ƒ]
```

The `ƒ` represents the state updating function.

However, it's important to note that Hooks like `useState()` must be called at the top level of your React function components. They should not be called inside loops, conditions, or nested functions to ensure that they are called in the same order on every render. This is crucial for React to correctly preserve the state of Hooks between multiple useState and useEffect calls. If you try to call `console.log(useState())` outside of a functional component, it will throw an error.

## 3. How will use Effect behave if we don't add a dependency array ?

The `useEffect` hook in React runs after every render by default. If you don't provide a dependency array, it means there's no way to tell React when to run or not to run your effect, so it will run the effect after every render.

This can be useful in some cases, but it can also lead to unnecessary computations and side effects, which can slow down your app. If your effect is doing something computationally expensive, or if it's making a network request, you probably don't want it to run too often.

Here's an example:

```jsx
import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
  });

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}
```

In this example, the `useEffect` hook will run after every render, updating the document title with the number of times the button has been clicked. This happens because we didn't provide a dependency array.

If we only wanted to update the title when the `count` changes, we would include `count` in the dependency array like so:

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```

In this case, the effect would only run when the component mounts and whenever the `count` state changes.

## 4. What is SPA ?

A Single Page Application (SPA) is a type of web application or website that interacts with the user by dynamically rewriting the current web page with new data from the web server, instead of the default method of a web browser loading entire new pages. SPAs load a single HTML page and only a part of the page gets updated with every user interaction. This ensures high performance and faster page loading. 

Please note that SPA also stands for other terms such as Sales and Purchase Agreement in business context, and it's also a term used in wellness industry. However, in the context of web development, SPA usually refers to Single Page Application.



## 5. What is difference between Client Side Routing and Server Side Routing ?

**Server-side routing** and **client-side routing** are two approaches to routing in web applications, each with its own advantages and use cases.

1. **Server-Side Routing**
   - When a user clicks on a link or changes the URL, the server receives a request for a new page. The server processes this request and sends back the appropriate resources (usually an HTML document). This is known as server-side routing.
   - Every request results in a full-page refresh because a new GET request is sent to the server, which responds with a new document.
   - A server-side route will only request the data that’s needed.
   - Because server-side routing has been the standard for a long time, search engines are optimized for webpages that come from the server.
   - However, every request results in a full-page refresh, which means that unnecessary data may be requested.

2. **Client-Side Routing**
   - In client-side routing, the routing is handled internally by the JavaScript loaded on the page. When a user clicks on a link or changes the URL, instead of making a new request to the server, the state of the application changes and this change in state results in a change in view within the application.
   - The whole page doesn’t refresh when using client-side routing. Only certain elements inside the application change.
   - Because less data is processed, routing between views is generally faster.
   - Smooth transitions and animations between views are easier to implement.
   - However, the whole website or web-application needs to be loaded on the first request. That’s why the initial loading time usually takes longer.

In summary, server-side routing involves making requests to the server each time a route changes, while client-side routing handles route changes internally without making additional requests to the server after the initial page load⁵. The choice between server-side and client-side routing depends on the specific needs of your application.

