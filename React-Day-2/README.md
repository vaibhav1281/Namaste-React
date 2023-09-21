# React Day 2 (Ignite Our App🚀)
## Assignment 02
### What is NPM?
<p>NPM does not stands for Node Package Manager. It is the world’s largest software library (registry) and also a software package manager and installer.</p>
<p>NPM can manage dependencies. It can install all the dependencies of a project in one command line1. Dependencies are also defined in <b>package.json</b></p>

### What is `Parcel/Webpack'? Why do we need it?
<p><b>Parcel</b> and <b>Webpack</b> are both popular <b>bundlers</b> used primarily for JavaScript or TypeScript code. They help to <b>minify</b>, <b>clean</b>, and make your code <b>compact</b>, making it easier to send a request or receive a response from the server. This is particularly useful when you need to transfer multiple files without using any bundler for loading the page of your application. Both of these bundlers substantially reduce the time it takes for the transfer of data and files to the server from the application.</p>
<b>Here’s a brief comparison between the two:</b>
<ul>
  <li><b>Parcel:</b>
    <ul>
      <li><p>Parcel provides defaults (for babel-preset-env, post-css, html, etc) that fit most scenarios and works for everybody.</p></li>
      <li><p>You don’t have to worry about configuring anything.</p></li>
      <li><p>Parcel automatically tracks all of the files, configuration, plugins, and dev dependencies that are involved in your build, and granularly invalidates the cache when something changes.</p></li>
    </ul>
  </li>

  <li><b>Webpack:</b>
    <ul>
      <li><p>If you need more customization, you should go with webpack.</p></li>
      <li><p>Keep in mind that you will have to set up everything that you need, explicitly set those things.</p></li>
      <li><p>Webpack has the advantage of providing a great load time and also doing this in minimal work by using a methodology called code splitting.</p></li>
    </ul>
  </li>

</ul>
<p>In summary, these tools are used to improve the performance of your application by reducing the size of your code and making it more efficient for network transfer. They also provide additional features like automatic reloading during development and handling circular dependencies.</p>

### What is '.parcel-cache'?
<p>The <b>.parcel-cache</b> folder is used by Parcel, a web application bundler, to store information about your project when it builds it. This allows Parcel to avoid having to <b>re-parse</b> and <b>re-analyze</b> everything from scratch when it rebuilds your project. This is a key reason why Parcel can be so fast in development mode.</p>
<p>The <b>.parcel-cache</b> folder is beneficial for developers because it reduces the time it takes to build or rebuild a project, making the development workflow more efficient. However, it’s generally a good idea to add this folder to your <b>.gitignore</b> file (or equivalent) so that it is not committed in your repository. This is because the cache is a binary file that can be regenerated with a command like <code>npx parcel build index.html</code>, and committing it would add a large number of unnecessary changes to your commit history.</p>

### What is 'npx' ?
<p>npx stands for <b>Node Package Execute</b> and it comes with npm. When you installed npm above 5.2.0 version then automatically npx will be installed. It is an npm package runner that can execute any package that you want from the npm registry without even installing that package. This is particularly useful for single-use packages or for testing out a package before deciding to install it.</p>
 <b>Key Features of npx:</b>
    <ul>
        <li>It can execute any package from the npm registry without installing it.</li>
        <li>If a package isn't already installed, npx will install it automatically.</li>
        <li>Packages used by npx are not installed globally, so you don't have to worry about pollution in the long term.</li>
        <li>You can execute a locally installed package easily by typing: <code>npx your-package-name</code>.</li>
    </ul>
    <p>In summary, npx is a handy tool that complements npm, making it easier to run packages and manage dependencies hosted in the npm registry.</p>

### What is difference between 'dependencies' vs 'devDependencies'?
<b></b>
<ul>
  <li>
    <p><strong>dependencies:</strong> These are the packages that your application relies on to run properly. They are required for your production-ready site or app to work. This means they are necessary for the online version of your website or app that the audience experiences. They are installed on both: <code>npm install</code> from a directory that contains <code>package.json</code> and <code>npm install $package</code> on any other directory.</p>
  </li>

  <li>
     <p><strong>devDependencies:</strong> These are packages used for development purposes, e.g., for running tests or transpiling your code. They are tools and utilities that assist in development and testing. They are only needed for local development and testing. They are also installed on <code>npm install</code> on a directory that contains <code>package.json</code>, unless you pass the <code>--production</code> flag. They are not installed on <code>npm install "$package"</code> on any other directory, unless you give it the <code>--dev</code> option. They are not installed transitively.</p>
  </li>
  
</ul>
<p>In summary, <strong>dependencies</strong> are needed for your application to function correctly, while <strong>devDependencies</strong> are only needed during the development process.</p>

### What is Tree Shaking?
<p>In Parcel, "Tree Shaking" is a process that statically analyzes the imports and exports of each module, and removes everything that isn't used. This is also known as <b>"dead code elimination"</b>. Tree shaking is supported for both static and dynamic imports, CommonJS and ES modules, and even across languages with CSS modules. When Parcel can determine which exports of a dynamically imported module you use, it will tree shake the unused exports from that module. This process helps in reducing the file sizes and initialization times of bundles considerably.</p>

### What is Hot Module Replacement?
<p> With HMR, you can exchange, add, or remove modules while an application is running without a full page refresh. This is particularly useful during development as it allows you to see your changes in real time without losing your application state. This leads to a faster and more seamless development experience.</p>

### List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
<h4>Here are my top 5 superpowers of Parcel:</h4>
<ol>
  <li> <strong>Zero Configuration: </strong>Parcel requires zero configuration to get started with.</li>
  <li> <strong>Fast Bundling: </strong>Parcel is known for its fast bundling speed.</li>
  <li><strong>Hot Module Replacement (HMR): </strong>Parcel supports HMR which allows modules to be updated at runtime without needing a full page refresh.</li>
  <li><strong>Code Splitting: </strong>Parcel supports out-of-the-box code splitting.</li>
  <li> <strong>Tree Shaking: </strong>Parcel supports tree shaking to remove unused code.</li>
</ol>
<h4>Now, let’s dive deeper into three of them:</h4>
<ol>
   <li>
            <strong>Zero Configuration:</strong>
            One of the most powerful features of Parcel is its zero-configuration nature. This means that you don't have to spend time setting up a complex build process with tools like webpack or rollup. You can just point Parcel at the entry point of your application, and it figures out the rest. This makes it incredibly easy to get started with, and you can focus more on writing your application rather than setting up your build process.
        </li>
        <li>
            <strong>Fast Bundling:</strong>
            Parcel uses worker processes to enable multicore compilation, and has a filesystem cache for fast rebuilds even after a restart. This means that your project builds quickly, making your development process smoother and more efficient.
        </li>
        <li>
            <strong>Code Splitting: </strong>
             Code splitting is a feature supported by Parcel that allows you to split your code into various bundles which can then be loaded on demand or in parallel. It can be used to achieve smaller bundles and control resource load prioritization which, if used correctly, can have a major impact on load time.
        </li>
</ol>

### What is .gitignore? What should we add and not add into it?


### What is the difference between `package.json' and `package-lock.json'


### Why should I not modify "package-lock.json"?


### What is `node_modules'? Is it a good idea to push that on git?


### What is the 'dist' folder?


### What is 'browserlists' Read about different bundlers: vite, webpack, parcel.


### Read about: ^ - caret and ~ - tilda


### Read about Script types in html (MDN Docs)
