<p align="center">
  <a href="https://www.gatsbyjs.org" style="margin-right: 12px; vertical-align:middle">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
  <a href="https://">
	<img alt="Kentico Kontent" src="https://kontent.ai/img/general/logo.svg" />
  </a>
</p>
<h1 align="center">
  Boilerplatev Gatsby Kontent Starter
</h1>

Kick off your project with this boilerplate which is based on [BoilerplateV](https://github.com/viperfx07/generator-boilerplatev) style. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the default starter.

    ```shell
    # create a new Gatsby site using the default starter
    gatsby new my-boilerplatev-starter https://github.com/viperfx07/gatsby-starter-boilerplatev-kontent
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    _Note:_ on Windows machine, please make sure the drive letter in the path is in **capital letter**.

    ```shell
    cd my-boilerplatev-starter/
    gatsby develop
    ```

    or

    ```shell
    cd my-boilerplatev-starter/
    yarn d
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-boilerplatev-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .babelrc
    ├── .editorconfig
    ├── .eslintrc.js
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

1.  **`.babelrc`**: This is a configuration file for [Babel](https://babeljs.io/). It has [@babel/plugin-proposal-nullish-coalescing-operator](https://babeljs.io/docs/en/babel-plugin-proposal-nullish-coalescing-operator) and [@babel/plugin-proposal-optional-chaining
    ](https://babeljs.io/docs/en/babel-plugin-proposal-optional-chaining) pre-installed on this starter

1.  **`.editorconfig`**: This file will ensure the code editor uses the same styling. If you're using Visual Studio Code, please install **EditorConfig for VS Code**

1.  **`.eslintrc.js`**: This is a configuration file for [ESLint](https://eslint.org/)

1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

1.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

1.  **`jsconfig.json`**: This file is telling the code editor i.e. **Visual Studio Code** that indicates that the directory is the root of a JavaScript Project. Also, any aliases used such as `@` or `@@` can be picked up by the editor to resolve the path

1.  **`LICENSE`**: Gatsby is licensed under the MIT license.

1.  **`yarn.lock`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how Yarn knows which packages to install for your project.

1.  **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 🐛 Known issues

-   **Multiple "root" queries found in file**

    This happens most likely on Windows machine. This issue has been reported on Github ([here](https://github.com/gatsbyjs/gatsby/issues/19863)). To fix it, you need to make sure the drive you change to in the Command Prompt, is in capital letter. e.g.

    ```shell
    cd C:\dev\my-boilerplatev-starter
    ```

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/viperfx07/gatsby-starter-boilerplatev-kontent)
