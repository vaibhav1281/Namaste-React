


<h1>Steps to Create React App with Parcel 🚀</h1>
<h2>Step 1: Initialize npm and create package.json</h2>
<h3><code>npm init</code></h3>
<p>This command initiates the creation of a <b>package.json</b> file by prompting for information such as package name, version, description, test command, author, etc.</p>

<h2>Step 2: Download required dependencies</h2>
<h3><code>npm i -D parcel</code></h3>
<p>This command installs the Parcel bundler as a development dependency, creating the <b>node_modules</b> directory and <b>package-lock.json</b>.</p>

<h2>Step 3: Run the application using Parcel</h2>
<h3><code>npx parcel index.html</code></h3>
<p>This command uses Parcel to bundle and serve the application, starting from the <b>index.html</b> file.</p>

<h2>Step 4: Exclude node_modules, .parcel-cache and dist from version control</h2>
<p>Create a <b>.gitignore</b> file and include the following line to exclude the node_modules directory from being tracked by Git:</p>
<h3><code>/node_modules</code></h3>
<h3><code>/dist</code></h3>
<h3><code>.parcel-cache</code></h3>

<h2>Step 5: Install React and ReactDOM</h2>
<h3><code>npm install react</code></h3>
<h3><code>npm i react-dom</code></h3>
<p>These commands install React and ReactDOM as dependencies for your project.</p>


<h2>Import React and ReactDOM</h2>
<p>To use React and ReactDOM in your application, import them in your JavaScript files:</p>
<h3><code>import React from "react";</code></h3>
<h3><code>import ReactDOM from "react-dom";</code></h3>

</br>
</br>
</br>
</br>

<h1>Production Build Setup 🚀</h1>

<h2>To create a production build, execute the following command:</h2>
<h3><code>npx parcel build index.html</code></h3>

<h1>Package.json Configuration</h1>
<b>Remove the "main": "App.js" entry from package.json.</b>
<b>The "main" field in package.json specifies the entry point for the application.</b>

<h2>Compatibility with Older Browsers</h2>
<b>To make your application compatible with older versions of browsers, you can use something called BrowsersList.</b>

<h3>BrowsersList Configuration</h3>
<b>Configure BrowsersList by adding the following section in your package.json:</b></br>
<code>
    "browserslist": [
        "last 2 Chrome versions",
        "last 2 Firefox versions",
        "last 2 versions"
    ]
</code>



