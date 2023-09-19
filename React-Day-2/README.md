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
<p>The <b>.parcel-cache</b> folder is beneficial for developers because it reduces the time it takes to build or rebuild a project, making the development workflow more efficient. However, it’s generally a good idea to add this folder to your <b>.gitignore</b> file (or equivalent) so that it is not committed in your repository. This is because the cache is a binary file that can be regenerated with a command like <b>.........</b>, and committing it would add a large number of unnecessary changes to your commit history</p>


### What is `npx' ?


### What is difference between 'dependencies' vs 'devDependencies'?


### What is Tree Shaking?


### What is Hot Module Replacement?


### List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.


### What is .gitignore? What should we add and not add into it?


### What is the difference between `package.json' and `package-lock.json'


### Why should I not modify "package-lock.json"?


### What is `node_modules'? Is it a good idea to push that on git?


### What is the 'dist' folder?


### What is 'browserlists' Read about different bundlers: vite, webpack, parcel.


### Read about: ^ - caret and ~ - tilda


### Read about Script types in html (MDN Docs)
