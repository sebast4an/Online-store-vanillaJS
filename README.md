# Online Store 🛒
It is e-commerce project build in vanillaJS (pure JavaScript). Data is from REST API ([FakeStoreAPI](https://fakestoreapi.com)). Compliant with the rules DRY, mobile first and BEM methodology. Currently I work in commercial project so, this project is **temporary** stopped.

## Table of contents:
📝  [Project description and technology](#-project-brief)  
📋  [The current status of the project](https://github.com/sebast4an/online-store-vanillaJS/projects/1)  
💾  [How to install and run](#-installation)  
📁  [All dependences list](#-installation)  

***

## 📝 Project brief:
- **Only pure JavaScript**
- Getting data from the REST API
- Frontend routing (window.history)
- Support for old browsers
- Shopping cart service
- Drag and scroll for mobile (RWD)
- Generating a full product card

## Technologies:
| Name | Description |
|---|---|
| [Webpack 5](https://webpack.js.org/) | Builder |
| [ESlint](https://eslint.org/) | Static code analysis |
| [Prettier](https://prettier.io/) | Code formatter |
| [Babel](https://babeljs.io/) | Compiler new JS into a backwards version  |
| [Autoprefixer](https://github.com/postcss/autoprefixer) | Add prefixes for browsers
| [normalize.css](https://github.com/necolas/normalize.css) | CSS resets |
| [SASS](https://github.com/sass/dart-sass) | SCSS syntax |
| [ES6+](https://262.ecma-international.org/6.0/) |  E.g fetch, promise, ES modules |

[All dependencies list...](https://github.com/sebast4an/online-store-vanillaJS#-dependencies)

## 💾 Installation:
Clone this repository and install by typing:
``` bash
npm i
```

## Using:

Development server:
``` bash
npm run serve
```

Build:
``` bash
npm run build
```

Format all files by prettier:
``` bash
npm run format
```


## 📁 Dependencies:

``` json
"devDependencies": {
    "@babel/core": "^7.15.0",
    "@babel/eslint-parser": "^7.15.0",
    "@babel/plugin-syntax-top-level-await": "^7.14.5",
    "@babel/plugin-transform-runtime": "^7.15.0",
    "@babel/preset-env": "^7.15.0",
    "@babel/runtime": "^7.15.3",
    "autoprefixer": "^10.3.1",
    "babel-eslint": "^10.1.0",
    "babel-loader": "^8.2.2",
    "css-loader": "^6.2.0",
    "eslint": "^7.32.0",
    "eslint-config-prettier": "^8.3.0",
    "eslint-plugin-prettier": "^3.4.0",
    "eslint-webpack-plugin": "^3.0.1",
    "html-webpack-plugin": "^5.3.2",
    "mini-css-extract-plugin": "^2.2.0",
    "postcss": "^8.3.6",
    "postcss-loader": "^6.1.1",
    "prettier": "^2.3.2",
    "sass": "^1.38.0",
    "sass-loader": "^12.1.0",
    "style-loader": "^3.2.1",
    "webpack": "^5.51.1",
    "webpack-cli": "^4.8.0",
    "webpack-dev-server": "^4.0.0"
  },
  "dependencies": {
    "normalize.css": "^8.0.1"
  }
```
