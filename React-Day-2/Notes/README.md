<h1>Steps to Create React App with Parcel 🚀</h1>
<h2>Step 1: Initialize npm and create package.json</h2>
<h3>npm init</h3>
<p>This command initiates the creation of a <b>package.json</b> file by prompting for information such as package name, version, description, test command, author, etc.</p>

<h2>Step 2: Download required dependencies</h2>
<h3>npm i -D parcel</h3>
<p>This command installs the Parcel bundler as a development dependency, creating the <b>node_modules</b> directory and <b>package-lock.json</b>.</p>

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

</br>
</br>
</br>
</br>

<h1>Production Build Setup 🚀</h1>

<h2>To create a production build, execute the following command:</h2>
<h3>npx parcel build index.html</h3>

<h1>Package.json Configuration</h1>
<b>Remove the "main": "App.js" entry from package.json.</b>
<b>The "main" field in package.json specifies the entry point for the application.</b>

<h2>Compatibility with Older Browsers</h2>
<b>To make your application compatible with older versions of browsers, you can use something called BrowsersList.</b>

<h3>BrowsersList Configuration</h3>
<b>Configure BrowsersList by adding the following section in your package.json:</b>
<pre>
    "browserslist": [
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 versions"
    ]
</pre>

