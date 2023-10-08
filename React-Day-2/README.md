

# Assignment 02
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

### What is <code>.gitignore</code>? What should we add and not add into it?
<p>A <code>.gitignore</code> file is a text file that tells Git which files or folders to ignore in a project. It’s usually placed in the root directory of a project. The purpose of gitignore files is to ensure that certain files not tracked by Git remain untracked</p>
<ul>
  <li>What to add:
    <ul>
      <li>Dependency caches, such as the contents of <b>/node_modules</b> or <b>/packages</b></li>
      <li>Compiled code, such as <code>.o</code>, <code>.pyc</code>, and <code>.class</code> files</li>
      <li>Build output directories, such as <code>dist</code>, <code>.parcle-cache</code>, <code>/bin</code>, <code>/out</code> or <code>/target</code></li>
      <li>Hidden system files, such as <code>.DS_Store</code> or <code>Thumbs.db</code></li>
      <li>Personal IDE config files, such as <code>.idea/workspace.xml</code></li>
    </ul>
  </li>

  <li>What not to add:
    <ul>
      <li>Files that are part of your source code and needed by others when they check out the project should not be added to <code>.gitignore</code></li>
      <li>Files that are specific to your personal workflow but do not need to be shared with others should go into the <code>$GIT_DIR/info/exclude</code> file</li>
      <li>Files that you want Git to ignore in all situations (e.g., backup or temporary files generated by your editor of choice) generally go into a file specified by core.excludesFile in your <code>~/.gitconfig</code></li>
    </ul><p>Remember, if you want to stop tracking a file that is currently tracked, use <code>git rm --cached</code> to remove the file from the index. The filename can then be added to the <code>.gitignore</code> file to stop the file from being reintroduced in later commits</p>
  </li>
</ul>


### What is the difference between <code>package.json</code> and <code>package-lock.json</code> file.
<p>The <code>package.json</code> and <code>package-lock.json</code> files are both integral parts of a Node.js project, but they serve different purposes:</p>
<ul>
  <li><strong>package.json: </strong>This file defines the rules required to run your application and install dependencies. It contains basic information about the project and also the functional dependencies that are required by the application2. It records the minimum version your app needs. If you update the versions of a particular package, the change is not going to be reflected here.</li>
  <li><strong>package-lock.json: </strong>This file holds detailed information on all the dependencies installed based on the package.json rules. It records the exact version of each installed package which allows you to re-install them. Future installs will be able to build an identical dependency tree. It is created for locking the dependency with the installed version. It will install the exact latest version of that package in your application and save it in package.json.</li>
</ul>
 <p>In summary, the <code>package.json</code> file focuses on project metadata and specifying the desired versions of dependencies, while the <code>package-lock.json</code> file ensures deterministic installations by locking the exact versions of dependencies and their dependencies</p>


### Why should I not modify </code>package-lock.json</code> file?

<p>The package-lock.json file is automatically generated and updated by npm whenever you add or update a package. It’s not recommended to manually modify this file for several reasons:</p>
    <ul>
        <li><strong>Consistency:</strong> The package-lock.json file ensures that the exact same dependency tree is installed across all environments. If you manually edit this file, you might introduce inconsistencies between the dependency tree on your local machine and the trees on other developers’ machines or in production.</li>
        <li><strong>Accuracy:</strong> The package-lock.json file is designed to accurately reflect the state of the node_modules directory. If you manually change package-lock.json, it may no longer match the actual state of node_modules, leading to confusion and potential bugs.</li>
        <li><strong>Automation:</strong> The package-lock.json file is automatically updated by npm whenever you use npm CLI commands to make changes. If you manually change package.json, don’t expect package-lock.json to update.</li>
        <li><strong>Nested Dependencies:</strong> Your package.json contains only your direct dependencies, not the dependencies of your dependencies (sometimes called nested dependencies). The lock file locks in the versions of the full dependency tree. If you manually edit this file, you might unintentionally upgrade or downgrade these nested dependencies, which could break your application.</li>      
    </ul>
    <p>So, it’s best to let npm handle changes to package-lock.json. If you need to update a package, use the appropriate npm commands, which will automatically update both package.json and package-lock.json</p>


### What is <code>node_modules</code>? Is it a good idea to push that on git?
<p>The <code>node_modules</code> directory is a folder in your project where Node.js dependencies and sub-dependencies are stored. When you install a package using npm (Node Package Manager), it gets placed into this directory. Node.js is trained to look for modules in this directory when you import them in your code.</p>
    <p>As for whether it’s a good idea to push the <code>node_modules</code> directory to Git, the general consensus is no, it’s not recommended. Here’s why:</p>
    <ul>
        <li><strong>Size:</strong> The <code>node_modules</code> directory can become quite large, and storing it in Git would inflate the size of your repository, making cloning and fetching slower.</li>
        <li><strong>Transience:</strong> The contents of <code>node_modules</code> are easily reconstructable from the <code>package.json</code> file. Anyone who clones your repository can run <code>npm install</code> to generate an identical <code>node_modules</code> directory.</li>
        <li><strong>Platform-specific binaries:</strong> Some npm packages contain binaries that are compiled upon installation. These binaries are platform-specific, and will not work if you install them on one platform and then move <code>node_modules</code> to another platform.</li>
    </ul>
    <p>Instead of pushing <code>node_modules</code> to Git, it’s better to include a <code>package-lock.json</code> or <code>yarn.lock</code> file in your repository. These files describe the exact tree that was generated when you installed your dependencies, allowing others to replicate it.</p>
    <p>Therefore, you should add <code>node_modules</code> to your <code>.gitignore</code> file to prevent it from being tracked by Git.</p>


### What is the <code>dist</code> folder?
<p>The <code>dist</code> directory, short for <b>distributable</b>, is often used to store the files that are ready to be deployed to a server or run in a browser. These files are often minified and optimized for production. The term dist stands for distributable, referring to the fact that this directory contains files that are ready to be distributed to end-users. Along with the minified code, the dist folder also comprises of all the compiled modules that may or may not be used with other systems.</p>

### What is <code>browserlists</code> Read about different bundlers: vite, webpack, parcel.
 <p>Browserslist is a tool that allows you to specify which browsers should be supported in your frontend app by specifying “queries” in a config file. It’s used by frameworks/libraries such as React, Angular, and Vue, but it’s not limited to them. Browserslist will use caniuse-lite with Can I Use data for these queries. You can check how the config works at the Browserslist playground.</p>
    <ol>
        <li>
            <p><strong>Vite</strong> is a build tool that aims to provide a faster and leaner development experience for modern web projects. It consists of two major parts: A dev server that provides rich feature enhancements over native ES modules, for example extremely fast Hot Module Replacement (HMR), and a build command that bundles your code with Rollup, pre-configured to output highly optimized static assets for production.</p>
        </li>
        <li>
            <p><strong>Webpack</strong> is a free and open-source module bundler for JavaScript. It is made primarily for JavaScript, but it can transform front-end assets such as HTML, CSS, and images if the corresponding loaders are included. Webpack takes modules with dependencies and generates static assets representing those modules.</p>
        </li>
        <li>
            <p><strong>Parcel</strong> is a web application bundler, differentiated by its developer experience. It offers blazing fast performance utilizing multicore processing, and requires zero configuration. Parcel supports many languages and file types out of the box, from web technologies like HTML, CSS, and JavaScript, to assets like images, fonts, videos, and more.</p>
        </li>
    </ol>


### Read about: <code>^ </code>- caret and <code> ~ </code> - tilda.
<p>The caret (^) and tilde (~) symbols are used in package.json to specify rules for dependency versions in Node.js projects</p>
 <ul>
        <li>
            <p><strong>Caret (<b>^</b>)</strong>: The caret is used to specify a "compatible with most recent" version range. This means that you're willing to accept any version of the package that is compatible with the version you specify, as long as it doesn’t break compatibility with the major version. For example, <b>^1.2.3</b> will permit updates within the same major version (e.g., 1.3.0, 1.2.4), but not a jump to a new major version (e.g., 2.0.0) when running <code>npm update</code>.</p>
        </li>
        <li>
            <p><strong>Tilde (<b>~</b>)</strong>: The tilde is used to specify "approximately equivalent to" version. It will update you to all future patch versions, without incrementing the minor version. For example, <b>~1.2.3</b> will use releases from 1.2.3 to &lt;1.3.0. If we were to use <b>~5.0.2</b>, we would obtain version 5.0.3 if it were available, but not 5.1.0.</p>
        </li>
    </ul>
    <p>These symbols provide flexibility in managing dependencies while also ensuring that new updates don't break your project.</p>


