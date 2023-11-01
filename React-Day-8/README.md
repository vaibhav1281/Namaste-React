# Assignment 08 

## 1. How do you create Nested Routes react-router-dom cofiguration 

To create nested routes using `createBrowserRouter` in `react-router-dom`, you can follow these steps:

1. **Import Required Components**: First, import the required components from 'react-router-dom':
```jsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
```
2. **Define Routes**: Define your routes as an array of objects, where each object represents a route. Each route object can have a `path`, `element`, and `children` properties. The `path` is the URL path of the route, the `element` is the component that should be rendered when the route is matched, and the `children` is an array of route objects representing nested routes.
```jsx
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'dashboard',
        element: <Dashboard />,
      },
      {
        element: <AuthLayout />,
        children: [
          {
            path: 'login',
            element: <Login />,
          },
          {
            path: 'logout',
            action: logoutUser,
          },
        ],
      },
    ],
  },
]);
```
3. **Use RouterProvider**: Use the `RouterProvider` component to provide the router configuration to your app¹.
```jsx
function App() {
  return <RouterProvider router={router} />;
}
```
## 2. Read abt createHashRouter, createMemory Router from React Router docs.

1. **createHashRouter**: This router is useful if you are unable to configure your web server to direct all traffic to your React Router application. Instead of using normal URLs, it will use the hash (#) portion of the URL to manage the "application URL". However, using hash URLs is not recommended. The `<HashRouter>` is for use in web browsers when the URL should not (or cannot) be sent to the server for some reason. This may happen in some shared hosting scenarios where you do not have full control over the server. In these situations, `<HashRouter>` makes it possible to store the current location in the hash portion of the current URL, so it is never sent to the server.

2. **createMemoryRouter**: Instead of using the browser's history, a memory router manages its own history stack in memory. It's primarily useful for testing and component development tools like Storybook, but can also be used for running React Router in any non-browser environment. A `<MemoryRouter>` stores its locations internally in an array. Unlike `<BrowserHistory>` and `<HashHistory>`, it isn't tied to an external source, like the history stack in a browser. This makes it ideal for scenarios where you need complete control over the history stack, like testing.

## 3. What is the order of life cycle method calls in Class Based Components

In a class-based component in React, the lifecycle methods are called in the following order:

1. **constructor()**: This method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.

2. **getDerivedStateFromProps()**: This method is called right before rendering the elements in the DOM. This is the natural place to set the state object based on the initial props.

3. **render()**: This method is required and will always be called. It is responsible for generating the component's virtual DOM representation based on its current props and state.

4. **componentDidMount()**: This method is called after the component is rendered. This is where you run statements that require that the component is already placed in the DOM.

Please note that this order applies to the mounting phase of a component's lifecycle. There are other lifecycle methods that are called during the updating and unmounting phases of a component's lifecycle.

## 4. Why do we use componentDidMount?

The `componentDidMount()` lifecycle method in React is used for performing actions after a component has been inserted into the DOM, or "mounted". This is typically where you would perform tasks that require the DOM nodes to be available, such as fetching data, setting up subscriptions, or manually changing the DOM. Here are some common use cases:

1. **Data Fetching**: If you need to load data from a remote endpoint, `componentDidMount()` is a good place to instantiate the network request.

2. **Setting up Subscriptions**: If you need to set up a subscription to an external data source (e.g., a WebSocket), you would typically set up the subscription in `componentDidMount()` and clean it up in `componentWillUnmount()`.

3. **DOM Manipulation**: Sometimes, you might need to interact directly with the DOM in a React component. `componentDidMount()` is a good place to do this since it gets called after the component has been rendered to the DOM.

Remember, `componentDidMount()` is only invoked once during the lifecycle of a component, similar to how the constructor function is called once when an instance of a class is created. This makes it a perfect candidate for one-time setup that requires DOM nodes to be present.

## 5. Why do we use component Will Unmount? Show with example.

The `componentWillUnmount()` lifecycle method in React is called just before a component is unmounted and destroyed. This is the appropriate place to perform any necessary cleanup to avoid memory leaks, such as:

- Invalidating timers
- Canceling network requests
- Cleaning up any subscriptions that were created in `componentDidMount()`

Here's an example of how you might use `componentWillUnmount()`:

```jsx
import React, { Component } from 'react';

class MyComponent extends Component {
  componentDidMount() {
    // Assume this._someSubscription is a subscription to some external data source
    this._someSubscription = someDataSource.subscribe();
  }

  componentWillUnmount() {
    // Clean up the subscription
    this._someSubscription.unsubscribe();
  }

  render() {
    // Render your component
  }
}
```

In this example, we subscribe to some external data source in `componentDidMount()`. If we didn't unsubscribe from this data source in `componentWillUnmount()`, we could end up with memory leaks. This is because the subscription would be trying to update state on a component that no longer exists.

It's important to note that you should not call `this.setState()` in `componentWillUnmount()` because the component will never be re-rendered once it is unmounted.

## 6. Why do we use super(props) in constructor?

In a React class component, `super(props)` is used in the constructor to call the constructor of the parent class, which is `React.Component`. This is necessary in order to properly set up the component instance.

When you call `super(props)`, you are essentially calling the constructor of `React.Component`, and it allows the component to inherit properties from its parent component⁴. This is required when you need to access some variables from the parent class.

In React, when you call `super` with `props`, React will make `props` available across the component through `this.props`. This ensures that `this.props` is set even before the constructor exits.

If you don't call `super(props)`, then `this.props` would be undefined in the constructor, which can lead to bugs and errors.

So, even if you don't immediately see a need for it in your constructor, it's considered good practice to always call `super(props)`, as it can help prevent subtle bugs from creeping in later on.

## 7. Why can't we have the callback function of useEffect async?

The `useEffect` hook in React expects its callback function to return either nothing or a cleanup function³⁴⁵. However, an async function implicitly returns a Promise. This is why you can't directly make the callback function in `useEffect` async.

If you need to perform an asynchronous operation within `useEffect`, you can define an async function inside your effect and call it immediately. Here's an example:

```jsx
useEffect(() => {
  const fetchData = async () => {
    const data = await getData(1);
    setData(data);
  }

  fetchData();
}, []);
```

In this example, `fetchData` is an asynchronous function that fetches data and sets it to state. It's defined and called inside `useEffect`. This way, you're not directly passing an async function to `useEffect`, but you're still able to perform asynchronous operations within it.


