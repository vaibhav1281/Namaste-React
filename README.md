# React Day 1 (Inception)
## Assignment 01
### What is Emmet?
<p>Emmet is a free add-on for your text editor that allows you to type shortcuts that are then expanded into full pieces of code.</p>

### Difference between a Library and Framework?
<p>Libraries are collections of reusable code that you can use as needed, giving you more control over your application's structure and flow. Frameworks, on the other hand, provide a structured foundation with predefined rules and control flow, requiring developers to fit their code within the framework's architecture. </p>

### What is CDN? Why do we use it?
<p>A Content Delivery Network (CDN) is essentially a group of servers that are strategically placed across the globe with the purpose of accelerating the delivery of web content. It is a solution that provides faster delivery of content to users distributed worldwide. A CDN stores a cached version of the original content in multiple geographical locations, also known as points of presence (PoPs). Each PoP contains a number of caching servers known as edge servers that are responsible for content delivery to visitors within its proximity.</p>
<h4>CDNs are used for several reasons:</h4>
<ul>
  <li>
    <p>
      <strong>Performance:</strong> CDNs can significantly improve website load times by distributing content closer to website visitors using a nearby CDN server. This leads to faster page loading times, which can reduce bounce rates and increase the amount of time that people spend on the site.
    </p>
  </li>
  <li>
    <p>
      <strong>Reliability:</strong> CDNs can handle more traffic and withstand hardware failure better than many origin servers, thanks to their distributed nature.
    </p>
  </li>
  <li>
    <p>
      <strong>Cost savings: </strong> CDNs can reduce the amount of data an origin server must provide through caching and other optimizations, thus reducing hosting costs for website owners.
    </p>
  </li>
  <li>
    <p>
      <strong>Security: </strong> A properly configured CDN may also help protect websites against some common malicious attacks, such as Distributed Denial of Service (DDOS) attacks.
    </p>
  </li>
</ul>
<p>In summary, a CDN helps to ensure quick, efficient, and secure delivery of content to websites and Internet services3. Today, the majority of web traffic is served through CDNs, including traffic from major sites like Facebook, Netflix, and Amazon.</p>

### Why is React known as React?
<p>React is a <strong>JavaScript library</strong> for building user interfaces. It was developed by <b>Facebook</b>, and the name <strong>“React”</strong> was chosen because it is meant to help developers build user interfaces that are fast and responsive, or "reactive". The library was designed to “react” to changes in data. When data in a React application changes, the components that depend on that data are automatically updated, which allows for efficient and seamless updates to the user interface. The name “React” reflects this reactive nature of the library. The idea behind React is to build reusable components that can be rendered on the front-end, rather than writing a new piece of code every time you need to display something on the screen. This makes it easier and more efficient to build complex user interfaces.</p>

### What is cross-origin in the script tag?
<p>The <strong>crossorigin</strong> attribute in the <strong><script></strong> tag is used to handle Cross-Origin Resource Sharing (CORS) when loading an external script file from a third-party server or domain.</p>
<p>CORS is a standard mechanism that allows web pages to request resources from another domain outside their own. This attribute sets the mode of the CORS request.</p>
<p>The crossorigin attribute can have two values:</p>
<ul>
  <li>
    <p><strong>anonymous:</strong> A cross-origin request is performed, but no credentials are sent.</p>
  </li>
  <li>
    <p><strong>use-credentials:</strong> A cross-origin request is performed, and credentials are sent (e.g., a cookie, a certificate, HTTP Basic authentication).</p>
  </li>
</ul>
<p>This attribute is used to protect sensitive information from the third party when fetching out the results. It’s important to note that this attribute is only valid for use if we try to fetch the resources from the third-party domain.</p>

### What is difference between React and ReactDOM?
<p>React and ReactDOM are both JavaScript libraries used in web development, but they serve different purposes:</p>
<ul>
  <li><p><strong>React </strong>React is a library for building user interfaces, particularly those that are complex and state-driven. It allows you to create reusable UI components, manage component state, and handle the component lifecycle. React can be used in both web and mobile apps.</p></li>
  <li><p><strong>ReactDOM,</strong> on the other hand, is a complimentary library that provides DOM-specific methods. It serves as the glue between React and the DOM, rendering React elements to the DOM. Essentially, ReactDOM is responsible for updating the browser’s UI to match changes in React components.</p></li>
</ul>
<p>The reason these two were split into separate libraries is due to the arrival of React Native, a framework for building native mobile apps using React. This separation allows code that is common to both web and mobile apps to reside in the React library, while code specific to web development lives in ReactDOM.</p>

### What is difference between react.development.js and react.production.js file via CDN?
<p>The <strong>react.development.js</strong> and <strong>react.production.js</strong> files are two versions of the React library that serve different purposes and are typically used in different stages of the development and deployment process:</p>
<ul>
  <li><p><strong>react.development.js:</strong> This file is more developer-friendly and readable. It’s typically larger in size as it contains additional code, comments, and debugging information that aids in development and troubleshooting. It enables and utilizes React developer tools, devtools profiler, debugging environment attached with source code. It also includes functionalities such as Hot Module Replacement, diagnostics so that the development environment will help to debug code.</p></li>
  <li><p><strong>react.production.js:</strong> This file is optimized for performance and is typically used in production environments. It includes various optimizations, such as dead code elimination, to make the React library run more efficiently. The production version has ugly, minified (compressed) version of your JavaScript code, so this makes rendering of file on end user’s browser very quick and performance enhancing.</p></li>
</ul>
<p>When these files are served via a Content Delivery Network (CDN), it provides you with the respective JS file online. The CDN helps in setting up a faster development environment.</p>
<p>Remember that only React files ending with <strong>.production.min.js</strong> are suitable for production.</p>

### What are async and defer? 
<p>In JavaScript, <b>async</b> and <b>defer</b> are attributes that you can add to a <script> tag to control how the script is loaded and executed in relation to the HTML document. Here’s how they work:</p>
<ul>
  <li><p><b>async:</b> When you use the async attribute, the script is downloaded asynchronously with the rest of the page without pausing the HTML parsing. Once the script is downloaded, the HTML parsing will be paused, the script’s execution will happen, and then HTML parsing will resume. The page and other scripts don’t wait for async scripts and async scripts also don’t wait for them. It is great for independent scripts and externally located scripts.</p></li>
  <li><p><b>defer:</b> The defer attribute tells the browser not to wait for the script. Instead, the browser will continue to process the HTML, build DOM. The script loads “in the background”, and then runs when the DOM is fully built. Deferred scripts maintain their relative order which means the first script will be loaded first while all others below it will have to wait.</p></li>
</ul>
<p>In summary, use <b>async</b> for scripts that can run independently and don’t require the DOM to be fully constructed, and use <b>defer</b> for scripts that need access to the fully parsed DOM and need to maintain the order of execution.</p>
