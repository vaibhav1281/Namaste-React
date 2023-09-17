## In order to Ignite our app we do following Steps:
### Step-1
### npm init ( crteats package.json )
#### It will ask few things before Confugring the npm,such as: package name, version,description,test command,author etc.

### Step-2
## Now we'll download required Dependencies.
#### npm i -D parcel ( crteats node_modules and package-lock.json )

### Step-3
<b>NOTE📝</b>
<p> When we don't want to put <b>"node_modules"</b> on GitHub/production, What we do? We create a file <b>.gitignore</b> and put <b>"node_modules"</b> in it lik <b>/node_modules</b>.</p>

### Step-4 (To run the Application)
#### npx parcel index.html

### Step-5 (Install React as package)
#### npm install react
#### npm i react-dom

### In order to use React and ReactDOM in our Application, we have to import it.
<p>Like this:</p>
<h4>import React from "react";</h4>
<h4>import  ReactDOM  from "react-dom";</h4>