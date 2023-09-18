<h1>Steps to Create React App with Parcel 🚀</h1>
<h2>Step 1: Initialize npm and create package.json</h2>
<h3>npm init</h3>
<p>This command initiates the creation of a <b>package.json</b> file by prompting for information such as package name, version, description, test command, author, etc.</p>

<h2>Step 2: Download required dependencies</h2>
<h3>npm i -D parcel</h3>
<p>This command installs the Parcel bundler as a development dependency, creating the node_modules directory and package-lock.json.</p>

<h2>Step 3: Run the application using Parcel</h2>
<h3>npx parcel index.html</h3>
<p>This command uses Parcel to bundle and serve the application, starting from the <b>index.html</b> file.</p>

<h2>Step 4: Exclude node_modules, .parcel-cache and dist from version control</h2>
<p>Create a <b>.gitignore</b> file and include the following line to exclude the node_modules directory from being tracked by Git:</p>
<h3>/node_modules</h3>
<h3>/dist</h3>
<h3>.parcel-cache</h3>

<h2>Step 5: Install React and ReactDOM</h2>
<h3>npm install react</h3>
<h3>npm i react-dom</h3>
<p>These commands install React and ReactDOM as dependencies for your project.</p>


<h2>Import React and ReactDOM</h2>
<p>To use React and ReactDOM in your application, import them in your JavaScript files:</p>
<h3>import React from "react";</h3>
<h3>import ReactDOM from "react-dom";</h3>
