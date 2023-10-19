# Assignment 06

## What is a Microservice?

Microservices, also known as microservices architecture, is a cloud-native architectural approach in which a single application is composed of many loosely coupled and independently deployable smaller components, or services. These services typically have their own technology stack, inclusive of the database and data management model.

Here are some key characteristics of microservices:
- **Autonomous**: Each component service in a microservices architecture can be developed, deployed, operated, and scaled without affecting the functioning of other services.
- **Specialized**: Each service is designed for a set of capabilities and focuses on solving a specific problem.
- **Agility**: Microservices foster an organization of small, independent teams that take ownership of their services.
- **Flexible Scaling**: Microservices allow each service to be independently scaled to meet demand for the application feature it supports.

In contrast to monolithic architectures where all processes are tightly coupled and run as a single service, microservices run each application process as a service. These services communicate via a well-defined interface using lightweight APIs. This makes applications easier to scale and faster to develop, enabling innovation and accelerating time-to-market for new features.

<img width="900px" height="600px" src ="https://microservices.io/i/posts/microservices-teams-subdomains.png"/>

## What is Monolith architecture?
Monolithic architecture is a traditional model of software design where the application is built as a single, unified unit. All components and modules are bundled together and are highly interconnected and dependent on each other. Here are some key characteristics of a monolithic architecture:

- **Single Executable**: The entire application is packaged and deployed as a single executable file.
- **Tight Coupling**: The components and modules within the application are highly interconnected and dependent on each other. Changes made to one component may require modifications in other parts of the application.
- **Shared Memory**: All components within the application share the same memory space. They can directly access and modify shared data structures.
- **Monolithic Deployment**: The entire application is deployed as a single unit. Updates or changes to the application require redeploying the entire monolith.
- **Centralized Control Flow**: The control flow within the application is typically managed by a central module or a main function. The flow of execution moves sequentially from one component to another.

While monolithic architectures can provide high performance and simplicity, they may come with some trade-offs in terms of security, stability, and flexibility. For instance, since all code runs in kernel space, any vulnerabilities or bugs in the kernel can potentially affect the entire system. Additionally, it can be more difficult to customize and extend the operating system.

<img width="900px" height="600px" src="https://wac-cdn.atlassian.com/dam/jcr:95b9a276-c524-42b1-8d06-ded56d589858/Monolithic%20architecture@2x.png?cdnVersion=1269"/>

##  What is the difference between Monolith and Microservice?
Monolithic and Microservices architectures are two different approaches to structuring an application, each with its own advantages and trade-offs. Here are some key differences between them:

1. **Structure**: In a **Monolithic architecture**, all components of the application (like the user interface, business logic, and data access code) are bundled together into a single program. On the other hand, a **Microservices architecture** breaks down the application into small, loosely coupled services that can be developed and deployed independently.

2. **Scalability**: In a Monolithic architecture, scaling requires duplicating the entire application, which can be resource-intensive. Microservices can be scaled individually based on demand, making it a more flexible and efficient approach.

3. **Development & Deployment**: Monolithic applications are developed all at once and any changes require redeploying the entire application. In contrast, Microservices can be developed, updated, and deployed independently, allowing for faster and more frequent updates.

4. **Fault Isolation**: In a Monolithic architecture, a bug or failure in one component can potentially bring down the entire application. Microservices are isolated from each other, so a failure in one service doesn't directly affect others.

5. **Technology Stack**: Monolithic applications typically use a single technology stack for the entire application. Microservices can use different technologies for different services, providing more flexibility.

6. **Complexity**: While Monolithic architectures can be simpler to develop initially due to their unified codebase, they can become complex and difficult to manage as the application grows. Microservices can be more complex to set up due to the need for inter-service communication and coordination, but they can be easier to manage in large applications due to their modularity.

<img src ="https://wac-cdn.atlassian.com/dam/jcr:b2be0d53-f4b2-46d8-9a34-993048cc6225/Monolith%20Vs%20Microservice%20image.png?cdnVersion=1269" />

## Why do we need a useEffect Hook?

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

