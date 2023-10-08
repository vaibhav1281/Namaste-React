# Assignment 5

## Q 1. What is the difference between Named Export, Default export and as export?
In JavaScript, including React, there are two main ways to export values: **default exports** and **named exports**¹²⁴.

**Default exports**:
- Each module can have only one default export⁴.
- Default exports are used to export a single value as the default export⁴.
- They are imported without specifying a name⁴.
- For example:
```javascript
function MyComponent () {  ... }  
export default MyComponent;
```
This is commonly used in React when you have a single component being exported from a file³.

**Named exports**:
- You can have multiple named exports in a module⁴.
- Named exports are explicitly imported using their names⁴.
- For example:
```javascript
export function ComponentOne () {  ... }
export function ComponentTwo () {  ... }
```
This is useful when you have multiple components or functions in a single file that you want to export³.

The difference shows up when you import. For instance, if you have a named export, you would import it like this: `import {MyComponent} from 'module'`. But if it's a default export, you would import it like this: `import MyComponent from 'module'`⁵.

As for "as export", it's not a type of export in JavaScript. However, the `as` keyword is used in import statements to rename the specific imports². For example, `import {MyComponent as Component} from 'module'` will import the named export `MyComponent` from `module` and rename it to `Component` in the current scope.

  ## Q 2. What is the importance of config.js file

  The `config.js` file in a React application serves several important purposes:

1. **Centralization of Configuration**: It allows you to centralize the configuration of your application. This means you can manage all your configuration data from one place, which improves the maintainability of the codebase.

2. **Environment-Specific Settings**: You can use a `config.js` file to set up environment-specific settings. For example, you might have different API endpoints for development, testing, and production environments.

3. **Code Reusability**: If you have data or settings that are used across multiple components or files in your application, placing them in a `config.js` file allows you to import and use them wherever needed.

4. **Improved Deployment Process**: Having a separate configuration file improves the deployment process as the core application remains intact, and you can deploy to different servers with different configurations quickly.

Here's an example of how you might structure a `config.js` file:

```javascript
export const config = {
  apiUrl: 'http://localhost:3000/api',
  // other configuration data...
};
```

And then in your React components, you can import this configuration:

```javascript
import { config } from './config.js';

// Now you can use config.apiUrl and other configuration data in your component.
```

Remember, the `config.js` file is just a regular JavaScript module, so you can export anything from it (functions, objects, primitives) and import them in other files.

## Q 3. What are React Hooks?

React Hooks are a feature introduced in React 16.8 that allow you to use state and other React features without writing a class. They are functions that let you "hook into" React state and lifecycle features from function components. 

Here are some key points about React Hooks:

- **Simplicity**: Hooks are simple JavaScript functions that can be used to isolate the reusable part from a functional component.
- **Stateful Logic Reuse**: Hooks allow you to extract stateful logic from a component so it can be tested independently and reused.
- **Component Organization**: Hooks allow you to organize the logic inside a component into reusable isolated units.
- **Classes Not Required**: Hooks don’t work inside classes — they let you use React without classes.

An example of a Hook is `useState`, which lets you add React state to function components¹. Here's an example of how it's used:

```javascript
import React, { useState } from 'react';

function Example() {
  const [count, setCount] = useState(0);

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

In this example, `useState` is a Hook that adds React state to the function component `Example`. The `count` variable holds the current state (initialized to `0`), and `setCount` is a function to update that state.

## Q 4. Why do we need a useState Hook?
The `useState` Hook is a special function that lets you add React state to function components. Here are some reasons why we need the `useState` Hook:

1. **State in Function Components**: Before Hooks were introduced, you could only use state in class components. But with `useState`, you can now use state in function components.

2. **Re-rendering**: When the state changes, the component re-renders. Without `useState`, if you try to increment a counter by clicking on a button, the count will not change because React rendered the component only once and since there is no state change, it won't get re-rendered.

3. **Simplicity**: The `useState` Hook simplifies the React API overall and makes it much easier for developers to add state to their functional components.

4. **Isolation of Stateful Logic**: Each call to `useState` creates a separate piece of state, and each piece of state is isolated from each other. This makes it easier to reason about your state as you can avoid bugs that come from state being merged together.

5. **Functional Updates**: The update function returned by `useState` (the second element in the array) can accept a function as an argument for functional updates. This is useful when the new state depends on the previous one.

