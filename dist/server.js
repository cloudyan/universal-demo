module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./chunk-manifest.json":
/*!****************************************!*\
  !*** external "./chunk-manifest.json" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("./chunk-manifest.json");

/***/ }),

/***/ "./src/Html.js":
/*!*********************!*\
  !*** ./src/Html.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/dwd/github/cloudyan/temp/universal-demo/src/Html.js";


class Html extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    const {
      title,
      styles,
      scripts,
      app,
      children,
      insertVar
    } = this.props;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", {
      className: "no-js",
      lang: "en",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 6
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 7
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      charSet: "utf-8",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      httpEquiv: "x-ua-compatible",
      content: "ie=edge",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }), scripts.map(script => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      key: script,
      rel: "preload",
      href: script,
      as: "script",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 13
      },
      __self: this
    })), styles.map(style => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
      key: style,
      rel: "stylesheet",
      href: style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 16
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      dangerouslySetInnerHTML: {
        __html: insertVar
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 20
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      id: "app",
      dangerouslySetInnerHTML: {
        __html: children
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 21
      },
      __self: this
    }), scripts.map(script => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
      key: script,
      src: script,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 22
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Html);

/***/ }),

/***/ "./src/components/App.js":
/*!*******************************!*\
  !*** ./src/components/App.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-hot-loader/root */ "react-hot-loader/root");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "/Users/dwd/github/cloudyan/temp/universal-demo/src/components/App.js";



class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }, "test"), this.props.children);
  }

}

let HotApp = App;

if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (HotApp);

/***/ }),

/***/ "./src/router.js":
/*!***********************!*\
  !*** ./src/router.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./routes */ "./src/routes/index.js");

/* harmony default export */ __webpack_exports__["default"] = (function (ctx) {
  const route = _routes__WEBPACK_IMPORTED_MODULE_0__["default"].find(route => route.path === ctx.path);
  return route && route.load();
});

/***/ }),

/***/ "./src/routes/about/About.js":
/*!***********************************!*\
  !*** ./src/routes/about/About.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/dwd/github/cloudyan/temp/universal-demo/src/routes/about/About.js";


class About extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 'about page'
    };
  }

  render() {
    const {
      test
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 15
      },
      __self: this
    }, "dfdfdf", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      },
      __self: this
    }, test));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/routes/about/index.js":
/*!***********************************!*\
  !*** ./src/routes/about/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./About */ "./src/routes/about/About.js");
var _jsxFileName = "/Users/dwd/github/cloudyan/temp/universal-demo/src/routes/about/index.js";



async function controller() {
  /**
   * fetch data
   */
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, 500);
  });
  return {
    title: 'about page',
    chunks: ['about'],
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_About__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })
  };
}

/* harmony default export */ __webpack_exports__["default"] = (controller);

/***/ }),

/***/ "./src/routes/countdown/CountDown.js":
/*!*******************************************!*\
  !*** ./src/routes/countdown/CountDown.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/Users/dwd/github/cloudyan/temp/universal-demo/src/routes/countdown/CountDown.js";


const parseTime = function (strTime) {
  if (!strTime) return 0; // let tt = strTime.split(/\D+/g);
  // let t = new Date(tt[0], tt[1] - 1, tt[2], tt[3] || 0, tt[4] || 0, tt[5] || 0);
  // return t.getTime();

  return strTime;
};

class CountDown extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      diff: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    };
  }

  componentWillMount() {
    console.log('componentWillMount');
  }

  componentDidMount() {
    const now = +new Date();
    const end = now + 1000000;
    const {
      serverTime = now,
      startTime = now,
      endTime = end
    } = this.props;

    let _serverTime = parseTime(serverTime);

    let _startTime = parseTime(startTime);

    let _endTime = parseTime(endTime);

    if (_endTime < _serverTime || _startTime > _serverTime) {
      return;
    }

    let _diff = Math.round((_endTime - _serverTime) / 1000);

    this.setState({
      diff: _diff
    });
    setInterval(() => {
      this.countdown();
      console.log(1111);
      this.setState({
        diff: _diff--
      });
    }, 1000);
  }

  countdown() {
    let _diff = this.state.diff;
    let _result = {
      diff: 0,
      day: 0,
      hour: 0,
      minute: 0,
      second: 0
    };

    if (_diff > 0) {
      _result.day = Math.floor(_diff / 86400);
      _diff = _diff % 86400;
      _result.hour = Math.floor(_diff / 3600);
      _diff = _diff % 3600;
      _result.minute = Math.floor(_diff / 60);
      _diff = _diff % 60;
      _result.second = _diff;
    }

    _result.diff = _diff;
    this.setState(_result);
  }

  render() {
    const {
      day,
      hour,
      minute,
      second
    } = this.state;
    const {
      fontColor,
      backgroundColor,
      timeColor
    } = this.props;
    const _root_style = {
      width: '100%',
      display: 'flex',
      'alignItems': 'center',
      background: backgroundColor,
      'justifyContent': 'center',
      color: fontColor
    };
    const _time_style = {
      color: timeColor,
      margin: '5px',
      'fontWeight': 'bold'
    };
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: _root_style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 84
      },
      __self: this
    }, "\u8DDD\u6D3B\u52A8\u7ED3\u675F\u4EC5\u5269", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: _time_style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, day), "\u5929", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: _time_style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, hour), "\u65F6", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: _time_style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, minute), "\u5206", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
      style: _time_style,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 85
      },
      __self: this
    }, second), "\u79D2");
  }

}

/* harmony default export */ __webpack_exports__["default"] = (CountDown);

/***/ }),

/***/ "./src/routes/countdown/index.js":
/*!***************************************!*\
  !*** ./src/routes/countdown/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CountDown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CountDown */ "./src/routes/countdown/CountDown.js");
var _jsxFileName = "/Users/dwd/github/cloudyan/temp/universal-demo/src/routes/countdown/index.js";



async function controller() {
  /**
   * fetch data
   */
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, 500);
  });
  return {
    title: 'countdown page',
    chunks: ['countdown'],
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CountDown__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })
  };
}

/* harmony default export */ __webpack_exports__["default"] = (controller);

/***/ }),

/***/ "./src/routes/home/Home.css":
/*!**********************************!*\
  !*** ./src/routes/home/Home.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"root":"src-routes-home-_root","image":"src-routes-home-_image"};

/***/ }),

/***/ "./src/routes/home/Home.js":
/*!*********************************!*\
  !*** ./src/routes/home/Home.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.css */ "./src/routes/home/Home.css");
/* harmony import */ var _Home_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_Home_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _test_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./test.jpg */ "./src/routes/home/test.jpg");
/* harmony import */ var _test_jpg__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_test_jpg__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-hot-loader/root */ "react-hot-loader/root");
/* harmony import */ var react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_hot_loader_root__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/dwd/github/cloudyan/temp/universal-demo/src/routes/home/Home.js";





class Home extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  constructor(props) {
    super(props);
    this.state = {
      test: 4344
    };
  }

  componentWillMount() {
    if (false) {}
  }

  componentDidMount() {
    setInterval(() => {
      console.log(11111);
    }, 2000);
  }

  render() {
    const {
      test
    } = this.state;
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Home_css__WEBPACK_IMPORTED_MODULE_1___default.a.root,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 30
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 31
      },
      __self: this
    }, "acfefdfd"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 32
      },
      __self: this
    }, "acfefdfd"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      onClick: () => {
        console.log('hahaha');
      },
      __source: {
        fileName: _jsxFileName,
        lineNumber: 33
      },
      __self: this
    }, "b"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: _Home_css__WEBPACK_IMPORTED_MODULE_1___default.a.image,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 34
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
      src: _test_jpg__WEBPACK_IMPORTED_MODULE_2___default.a,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 35
      },
      __self: this
    }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 36
      },
      __self: this
    }, test));
  }

}

let HotApp = Home;

if (false) {}

/* harmony default export */ __webpack_exports__["default"] = (HotApp);

/***/ }),

/***/ "./src/routes/home/index.js":
/*!**********************************!*\
  !*** ./src/routes/home/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home */ "./src/routes/home/Home.js");
var _jsxFileName = "/Users/dwd/github/cloudyan/temp/universal-demo/src/routes/home/index.js";



async function controller() {
  /**
   * fetch data
   */
  await new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, 1000);
  });
  return {
    title: 'universal',
    chunks: ['home'],
    component: react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      },
      __self: this
    })
  };
}

/* harmony default export */ __webpack_exports__["default"] = (controller);

/***/ }),

/***/ "./src/routes/home/test.jpg":
/*!**********************************!*\
  !*** ./src/routes/home/test.jpg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/test.jpg";

/***/ }),

/***/ "./src/routes/index.js":
/*!*****************************!*\
  !*** ./src/routes/index.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const routes = [{
  path: '/',
  load: () => {
    if (false) {} else {
      return __webpack_require__(/*! ./home */ "./src/routes/home/index.js");
    }
  }
}, {
  path: '/about',
  load: () => {
    if (false) {} else {
      return __webpack_require__(/*! ./about */ "./src/routes/about/index.js");
    }
  }
}, {
  path: '/countdown',
  load: () => {
    if (false) {} else {
      return __webpack_require__(/*! ./countdown */ "./src/routes/countdown/index.js");
    }
  }
}];
/* harmony default export */ __webpack_exports__["default"] = (routes);

/***/ }),

/***/ "./src/server.js":
/*!***********************!*\
  !*** ./src/server.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "@babel/runtime/helpers/extends");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom/server */ "react-dom/server");
/* harmony import */ var react_dom_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Html__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Html */ "./src/Html.js");
/* harmony import */ var _components_App__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/App */ "./src/components/App.js");
/* harmony import */ var _chunk_manifest_json__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./chunk-manifest.json */ "./chunk-manifest.json");
/* harmony import */ var _chunk_manifest_json__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_chunk_manifest_json__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router */ "./src/router.js");

var _jsxFileName = "/Users/dwd/github/cloudyan/temp/universal-demo/src/server.js";







async function serverRender(ctx) {
  const styles = new Set();
  const scripts = new Set(); // console.log(ctx);

  const moduleName = '/countdown'; // ctx = moduleName;
  // ctx = {
  //   path: moduleName,
  // };

  const addChunk = chunk => {
    if (_chunk_manifest_json__WEBPACK_IMPORTED_MODULE_5___default.a[chunk]) {
      _chunk_manifest_json__WEBPACK_IMPORTED_MODULE_5___default.a[chunk].filter(asset => asset.endsWith('.js')).forEach(asset => scripts.add(asset));
      _chunk_manifest_json__WEBPACK_IMPORTED_MODULE_5___default.a[chunk].filter(asset => asset.endsWith('.css')).forEach(asset => styles.add(asset));
    } else if (__DEV__) {
      throw new Error(`Chunk with name '${chunk}' cannot be found`);
    }
  };

  const route = Object(_router__WEBPACK_IMPORTED_MODULE_6__["default"])(ctx);
  let content = {};

  if (route) {
    content = await route.default();
  }

  addChunk('client');
  if (content.chunk) addChunk(content.chunk);
  if (content.chunks) content.chunks.forEach(addChunk);
  const insertVar = `window.moduleName = '${moduleName}';`;
  const data = {
    styles: Array.from(styles),
    scripts: Array.from(scripts),
    title: content.title,
    app: {},
    insertVar,
    children: react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToString(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_App__WEBPACK_IMPORTED_MODULE_4__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 51
      },
      __self: this
    }, content.component ? content.component : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 55
      },
      __self: this
    }, "not found")))
  };
  const html = react_dom_server__WEBPACK_IMPORTED_MODULE_2___default.a.renderToStaticMarkup(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Html__WEBPACK_IMPORTED_MODULE_3__["default"], _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, data, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  })));
  return html;
}

/* harmony default export */ __webpack_exports__["default"] = (serverRender);

/***/ }),

/***/ 0:
/*!*****************************!*\
  !*** multi ./src/server.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/server.js */"./src/server.js");


/***/ }),

/***/ "@babel/runtime/helpers/extends":
/*!*************************************************!*\
  !*** external "@babel/runtime/helpers/extends" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),

/***/ "react-hot-loader/root":
/*!****************************************!*\
  !*** external "react-hot-loader/root" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-hot-loader/root");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovLy9leHRlcm5hbCBcIi4vY2h1bmstbWFuaWZlc3QuanNvblwiIiwid2VicGFjazovLy8uL3NyYy9IdG1sLmpzIiwid2VicGFjazovLy8uL3NyYy9jb21wb25lbnRzL0FwcC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVyLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvYWJvdXQvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9hYm91dC9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2NvdW50ZG93bi9Db3VudERvd24uanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9jb3VudGRvd24vaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9ob21lL0hvbWUuY3NzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvaG9tZS9Ib21lLmpzIiwid2VicGFjazovLy8uL3NyYy9yb3V0ZXMvaG9tZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcm91dGVzL2hvbWUvdGVzdC5qcGciLCJ3ZWJwYWNrOi8vLy4vc3JjL3JvdXRlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VydmVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtZG9tL3NlcnZlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWhvdC1sb2FkZXIvcm9vdFwiIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuL2NodW5rLW1hbmlmZXN0Lmpzb25cIik7IiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG5jbGFzcyBIdG1sIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGl0bGUsIHN0eWxlcywgc2NyaXB0cywgYXBwLCBjaGlsZHJlbiwgaW5zZXJ0VmFyIH0gPSB0aGlzLnByb3BzXG4gICAgcmV0dXJuIDxodG1sIGNsYXNzTmFtZT1cIm5vLWpzXCIgbGFuZz1cImVuXCI+XG4gICAgICA8aGVhZD5cbiAgICAgICAgPG1ldGEgY2hhclNldD1cInV0Zi04XCIgLz5cbiAgICAgICAgPG1ldGEgaHR0cEVxdWl2PVwieC11YS1jb21wYXRpYmxlXCIgY29udGVudD1cImllPWVkZ2VcIiAvPlxuICAgICAgICA8dGl0bGU+e3RpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9XCJ2aWV3cG9ydFwiIGNvbnRlbnQ9XCJ3aWR0aD1kZXZpY2Utd2lkdGgsIGluaXRpYWwtc2NhbGU9MVwiIC8+XG4gICAgICAgIHtzY3JpcHRzLm1hcChzY3JpcHQgPT4gKFxuICAgICAgICAgIDxsaW5rIGtleT17c2NyaXB0fSByZWw9XCJwcmVsb2FkXCIgaHJlZj17c2NyaXB0fSBhcz1cInNjcmlwdFwiIC8+XG4gICAgICAgICkpfVxuICAgICAgICB7c3R5bGVzLm1hcChzdHlsZSA9PiAoXG4gICAgICAgICAgPGxpbmsga2V5PXtzdHlsZX0gcmVsPVwic3R5bGVzaGVldFwiIGhyZWY9e3N0eWxlfSAvPlxuICAgICAgICApKX1cbiAgICAgICAgPHNjcmlwdCBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IGluc2VydFZhciB9fT48L3NjcmlwdD5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2IGlkPVwiYXBwXCIgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBjaGlsZHJlbiB9fSAvPlxuICAgICAgICB7c2NyaXB0cy5tYXAoc2NyaXB0ID0+IDxzY3JpcHQga2V5PXtzY3JpcHR9IHNyYz17c2NyaXB0fSAvPil9XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEh0bWxcbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgeyBob3QgfSBmcm9tICdyZWFjdC1ob3QtbG9hZGVyL3Jvb3QnO1xuXG5jbGFzcyBBcHAgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gIH1cblxuICByZW5kZXIoKSB7XG4gICAgcmV0dXJuIDxkaXY+XG4gICAgPGRpdj50ZXN0PC9kaXY+XG4gICAge3RoaXMucHJvcHMuY2hpbGRyZW59XG4gICAgPC9kaXY+O1xuICB9XG59XG5cbmxldCBIb3RBcHAgPSBBcHBcblxuaWYgKF9faXNDbGllbnRfXykge1xuICBIb3RBcHAgPSBob3QoQXBwKVxufVxuXG5leHBvcnQgZGVmYXVsdCBIb3RBcHAiLCJpbXBvcnQgcm91dGVzIGZyb20gJy4vcm91dGVzJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24oY3R4KSB7XG4gIGNvbnN0IHJvdXRlID0gcm91dGVzLmZpbmQocm91dGUgPT4gcm91dGUucGF0aCA9PT0gY3R4LnBhdGgpXG4gIHJldHVybiByb3V0ZSAmJiByb3V0ZS5sb2FkKClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmNsYXNzIEFib3V0IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcblxuICAgIHRoaXMuc3RhdGUgPSB7XG4gICAgICB0ZXN0OiAnYWJvdXQgcGFnZScsXG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGVzdCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiA8ZGl2PlxuICAgIGRmZGZkZlxuICAgICAgPGRpdj57dGVzdH08L2Rpdj5cbiAgICA8L2Rpdj5cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBBYm91dFxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBBYm91dCBmcm9tICcuL0Fib3V0JztcblxuYXN5bmMgZnVuY3Rpb24gY29udHJvbGxlcigpIHtcbiAgLyoqXG4gICAqIGZldGNoIGRhdGFcbiAgICovXG5cbiAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNvbHZlKDIpXG4gICAgfSwgNTAwKVxuICB9KVxuICBcbiAgcmV0dXJuIHtcbiAgICB0aXRsZTogJ2Fib3V0IHBhZ2UnLFxuICAgIGNodW5rczogWydhYm91dCddLFxuICAgIGNvbXBvbmVudDogPEFib3V0IC8+LFxuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGNvbnRyb2xsZXIiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuXG5jb25zdCBwYXJzZVRpbWUgPSBmdW5jdGlvbiAoc3RyVGltZSkge1xuICBpZighc3RyVGltZSkgcmV0dXJuIDA7XG4gIC8vIGxldCB0dCA9IHN0clRpbWUuc3BsaXQoL1xcRCsvZyk7XG4gIC8vIGxldCB0ID0gbmV3IERhdGUodHRbMF0sIHR0WzFdIC0gMSwgdHRbMl0sIHR0WzNdIHx8IDAsIHR0WzRdIHx8IDAsIHR0WzVdIHx8IDApO1xuICAvLyByZXR1cm4gdC5nZXRUaW1lKCk7XG4gIHJldHVybiBzdHJUaW1lO1xufVxuY2xhc3MgQ291bnREb3duIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcylcbiAgICB0aGlzLnN0YXRlID0ge1xuICAgICAgZGlmZjogMCxcbiAgICAgIGRheTogMCxcbiAgICAgIGhvdXI6IDAsXG4gICAgICBtaW51dGU6IDAsXG4gICAgICBzZWNvbmQ6IDBcbiAgICB9XG4gIH1cblxuICBjb21wb25lbnRXaWxsTW91bnQoKSB7XG4gICAgY29uc29sZS5sb2coJ2NvbXBvbmVudFdpbGxNb3VudCcpO1xuICB9XG5cbiAgY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgY29uc3Qgbm93ID0gK25ldyBEYXRlKCk7XG4gICAgY29uc3QgZW5kID0gbm93ICsgMTAwMDAwMDtcbiAgICBjb25zdCB7IHNlcnZlclRpbWUgPSBub3csIHN0YXJ0VGltZSA9IG5vdywgZW5kVGltZSA9IGVuZCB9ID0gdGhpcy5wcm9wcztcbiAgICBsZXQgX3NlcnZlclRpbWUgPSBwYXJzZVRpbWUoc2VydmVyVGltZSk7XG4gICAgbGV0IF9zdGFydFRpbWUgPSBwYXJzZVRpbWUoc3RhcnRUaW1lKTtcbiAgICBsZXQgX2VuZFRpbWUgPSBwYXJzZVRpbWUoZW5kVGltZSk7XG4gICAgaWYgKF9lbmRUaW1lIDwgX3NlcnZlclRpbWUgfHwgX3N0YXJ0VGltZSA+IF9zZXJ2ZXJUaW1lKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGxldCBfZGlmZiA9IE1hdGgucm91bmQoKF9lbmRUaW1lIC0gX3NlcnZlclRpbWUpIC8gMTAwMCk7XG4gICAgdGhpcy5zZXRTdGF0ZSh7IGRpZmY6IF9kaWZmIH0pO1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIHRoaXMuY291bnRkb3duKCk7XG4gICAgICBjb25zb2xlLmxvZygxMTExKTtcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyBkaWZmOiBfZGlmZi0tIH0pO1xuICAgIH0sIDEwMDApO1xuICB9XG5cbiAgY291bnRkb3duKCkge1xuICAgIGxldCBfZGlmZiA9IHRoaXMuc3RhdGUuZGlmZjtcbiAgICBsZXQgX3Jlc3VsdCA9IHtcbiAgICAgIGRpZmY6IDAsXG4gICAgICBkYXk6IDAsXG4gICAgICBob3VyOiAwLFxuICAgICAgbWludXRlOiAwLFxuICAgICAgc2Vjb25kOiAwXG4gICAgfVxuICAgIGlmIChfZGlmZiA+IDApIHtcbiAgICAgIF9yZXN1bHQuZGF5ID0gTWF0aC5mbG9vcihfZGlmZiAvIDg2NDAwKTtcbiAgICAgIF9kaWZmID0gX2RpZmYgJSA4NjQwMDtcbiAgICAgIF9yZXN1bHQuaG91ciA9IE1hdGguZmxvb3IoX2RpZmYgLyAzNjAwKTtcbiAgICAgIF9kaWZmID0gX2RpZmYgJSAzNjAwO1xuICAgICAgX3Jlc3VsdC5taW51dGUgPSBNYXRoLmZsb29yKF9kaWZmIC8gNjApO1xuICAgICAgX2RpZmYgPSBfZGlmZiAlIDYwO1xuICAgICAgX3Jlc3VsdC5zZWNvbmQgPSBfZGlmZjtcbiAgICB9XG4gICAgX3Jlc3VsdC5kaWZmID0gX2RpZmY7XG4gICAgdGhpcy5zZXRTdGF0ZShfcmVzdWx0KTtcbiAgfVxuXG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF5LCBob3VyLCBtaW51dGUsIHNlY29uZCB9ID0gdGhpcy5zdGF0ZTtcbiAgICBjb25zdCB7IGZvbnRDb2xvciwgYmFja2dyb3VuZENvbG9yLCB0aW1lQ29sb3IgfSA9IHRoaXMucHJvcHM7XG4gICAgY29uc3QgX3Jvb3Rfc3R5bGUgPSB7XG4gICAgICB3aWR0aDogJzEwMCUnLFxuICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgJ2FsaWduSXRlbXMnOiAnY2VudGVyJyxcbiAgICAgIGJhY2tncm91bmQ6IGJhY2tncm91bmRDb2xvcixcbiAgICAgICdqdXN0aWZ5Q29udGVudCc6ICdjZW50ZXInLFxuICAgICAgY29sb3I6IGZvbnRDb2xvcixcbiAgICB9XG4gICAgY29uc3QgX3RpbWVfc3R5bGUgPSB7XG4gICAgICBjb2xvcjogdGltZUNvbG9yLFxuICAgICAgbWFyZ2luOiAnNXB4JyxcbiAgICAgICdmb250V2VpZ2h0JzogJ2JvbGQnLFxuICAgIH1cbiAgICByZXR1cm4gKDxkaXYgc3R5bGU9e19yb290X3N0eWxlfT5cbiAgICAgIOi3nea0u+WKqOe7k+adn+S7heWJqTxpIHN0eWxlPXtfdGltZV9zdHlsZX0+e2RheX08L2k+5aSpPGkgc3R5bGU9e190aW1lX3N0eWxlfT57aG91cn08L2k+5pe2PGkgc3R5bGU9e190aW1lX3N0eWxlfT57bWludXRlfTwvaT7liIY8aSBzdHlsZT17X3RpbWVfc3R5bGV9PntzZWNvbmR9PC9pPuenklxuICAgICAgICAgICAgPC9kaXY+KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBDb3VudERvd25cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5pbXBvcnQgQ291bnREb3duIGZyb20gJy4vQ291bnREb3duJztcblxuYXN5bmMgZnVuY3Rpb24gY29udHJvbGxlcigpIHtcbiAgLyoqXG4gICAqIGZldGNoIGRhdGFcbiAgICovXG5cbiAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNvbHZlKDIpXG4gICAgfSwgNTAwKVxuICB9KVxuXG4gIHJldHVybiB7XG4gICAgdGl0bGU6ICdjb3VudGRvd24gcGFnZScsXG4gICAgY2h1bmtzOiBbJ2NvdW50ZG93biddLFxuICAgIGNvbXBvbmVudDogPENvdW50RG93biAvPixcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBjb250cm9sbGVyXG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbm1vZHVsZS5leHBvcnRzID0ge1wicm9vdFwiOlwic3JjLXJvdXRlcy1ob21lLV9yb290XCIsXCJpbWFnZVwiOlwic3JjLXJvdXRlcy1ob21lLV9pbWFnZVwifTsiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL0hvbWUuY3NzJztcbmltcG9ydCBpbWFnZSBmcm9tICcuL3Rlc3QuanBnJztcbmltcG9ydCB7IGhvdCB9IGZyb20gJ3JlYWN0LWhvdC1sb2FkZXIvcm9vdCc7XG5cbmNsYXNzIEhvbWUgZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQge1xuICBjb25zdHJ1Y3Rvcihwcm9wcykge1xuICAgIHN1cGVyKHByb3BzKVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIHRlc3Q6IDQzNDQsXG4gICAgfVxuICB9XG5cbiAgY29tcG9uZW50V2lsbE1vdW50KCkge1xuICAgIGlmIChfX2lzQ2xpZW50X18pIHtcblxuICAgIH1cbiAgfVxuXG4gIGNvbXBvbmVudERpZE1vdW50KCkge1xuICAgIHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKDExMTExKTtcbiAgICB9LCAyMDAwKVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgdGVzdCB9ID0gdGhpcy5zdGF0ZTtcblxuICAgIHJldHVybiA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnJvb3R9PlxuICAgICAgPGRpdj5hY2ZlZmRmZDwvZGl2PlxuICAgICAgPGRpdj5hY2ZlZmRmZDwvZGl2PlxuICAgICAgPGRpdiBvbkNsaWNrPXsoKSA9PiB7Y29uc29sZS5sb2coJ2hhaGFoYScpfX0+YjwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZX0+PC9kaXY+XG4gICAgICA8aW1nIHNyYz17aW1hZ2V9Lz5cbiAgICAgIDxkaXY+e3Rlc3R9PC9kaXY+XG4gICAgPC9kaXY+XG4gIH1cbn1cblxubGV0IEhvdEFwcCA9IEhvbWVcblxuaWYgKF9faXNDbGllbnRfXykge1xuICBIb3RBcHAgPSBob3QoSG9tZSlcbn1cblxuZXhwb3J0IGRlZmF1bHQgSG90QXBwXG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEhvbWUgZnJvbSAnLi9Ib21lJztcblxuYXN5bmMgZnVuY3Rpb24gY29udHJvbGxlcigpIHtcbiAgLyoqXG4gICAqIGZldGNoIGRhdGFcbiAgICovXG5cbiAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICByZXNvbHZlKDIpXG4gICAgfSwgMTAwMClcbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHRpdGxlOiAndW5pdmVyc2FsJyxcbiAgICBjaHVua3M6IFsnaG9tZSddLFxuICAgIGNvbXBvbmVudDogPEhvbWUgLz4sXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY29udHJvbGxlclxuIiwibW9kdWxlLmV4cG9ydHMgPSBfX3dlYnBhY2tfcHVibGljX3BhdGhfXyArIFwiYXNzZXRzL3Rlc3QuanBnXCI7IiwiY29uc3Qgcm91dGVzID0gW1xuICB7XG4gICAgcGF0aDogJy8nLFxuICAgIGxvYWQ6ICgpID0+IHtcbiAgICAgIGlmIChfX2lzQ2xpZW50X18pIHtcbiAgICAgICAgcmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnaG9tZScgKi8gJy4vaG9tZScpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoJy4vaG9tZScpO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG4gIHtcbiAgICBwYXRoOiAnL2Fib3V0JyxcbiAgICBsb2FkOiAoKSA9PiB7XG4gICAgICBpZiAoX19pc0NsaWVudF9fKSB7XG4gICAgICAgIHJldHVybiBpbXBvcnQoLyogd2VicGFja0NodW5rTmFtZTogJ2Fib3V0JyAqLyAnLi9hYm91dCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlcXVpcmUoJy4vYWJvdXQnKTtcbiAgICAgIH1cbiAgICB9LFxuICB9LFxuICB7XG4gICAgcGF0aDogJy9jb3VudGRvd24nLFxuICAgIGxvYWQ6ICgpID0+IHtcbiAgICAgIGlmIChfX2lzQ2xpZW50X18pIHtcbiAgICAgICAgcmV0dXJuIGltcG9ydCgvKiB3ZWJwYWNrQ2h1bmtOYW1lOiAnY291bnRkb3duJyAqLyAnLi9jb3VudGRvd24nKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZXF1aXJlKCcuL2NvdW50ZG93bicpO1xuICAgICAgfVxuICAgIH0sXG4gIH0sXG5dO1xuXG5leHBvcnQgZGVmYXVsdCByb3V0ZXM7XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IFJlYWN0RE9NU2VydmVyIGZyb20gJ3JlYWN0LWRvbS9zZXJ2ZXInO1xuaW1wb3J0IEh0bWwgZnJvbSAnLi9IdG1sJztcbmltcG9ydCBBcHAgZnJvbSAnLi9jb21wb25lbnRzL0FwcCc7XG5pbXBvcnQgbWFuaWZlc3QgZnJvbSAnLi9jaHVuay1tYW5pZmVzdC5qc29uJztcbmltcG9ydCByb3V0ZXIgZnJvbSAnLi9yb3V0ZXInO1xuXG5hc3luYyBmdW5jdGlvbiBzZXJ2ZXJSZW5kZXIoY3R4KSB7XG4gIGNvbnN0IHN0eWxlcyA9IG5ldyBTZXQoKTtcbiAgY29uc3Qgc2NyaXB0cyA9IG5ldyBTZXQoKTtcblxuICAvLyBjb25zb2xlLmxvZyhjdHgpO1xuICBjb25zdCBtb2R1bGVOYW1lID0gJy9jb3VudGRvd24nO1xuICAvLyBjdHggPSBtb2R1bGVOYW1lO1xuICAvLyBjdHggPSB7XG4gIC8vICAgcGF0aDogbW9kdWxlTmFtZSxcbiAgLy8gfTtcblxuICBjb25zdCBhZGRDaHVuayA9IGNodW5rID0+IHtcbiAgICBpZiAobWFuaWZlc3RbY2h1bmtdKSB7XG4gICAgICBtYW5pZmVzdFtjaHVua11cbiAgICAgICAgLmZpbHRlcihhc3NldCA9PiBhc3NldC5lbmRzV2l0aCgnLmpzJykpXG4gICAgICAgIC5mb3JFYWNoKGFzc2V0ID0+IHNjcmlwdHMuYWRkKGFzc2V0KSk7XG4gICAgICBtYW5pZmVzdFtjaHVua11cbiAgICAgICAgLmZpbHRlcihhc3NldCA9PiBhc3NldC5lbmRzV2l0aCgnLmNzcycpKVxuICAgICAgICAuZm9yRWFjaChhc3NldCA9PiBzdHlsZXMuYWRkKGFzc2V0KSk7XG4gICAgfSBlbHNlIGlmIChfX0RFVl9fKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYENodW5rIHdpdGggbmFtZSAnJHtjaHVua30nIGNhbm5vdCBiZSBmb3VuZGApO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCByb3V0ZSA9IHJvdXRlcihjdHgpXG4gIGxldCBjb250ZW50ID0ge31cbiAgaWYgKHJvdXRlKSB7XG4gICAgY29udGVudCA9IGF3YWl0IHJvdXRlLmRlZmF1bHQoKVxuICB9XG5cbiAgYWRkQ2h1bmsoJ2NsaWVudCcpO1xuXG4gIGlmIChjb250ZW50LmNodW5rKSBhZGRDaHVuayhjb250ZW50LmNodW5rKTtcbiAgaWYgKGNvbnRlbnQuY2h1bmtzKSBjb250ZW50LmNodW5rcy5mb3JFYWNoKGFkZENodW5rKTtcblxuICBjb25zdCBpbnNlcnRWYXIgPSBgd2luZG93Lm1vZHVsZU5hbWUgPSAnJHttb2R1bGVOYW1lfSc7YDtcblxuICBjb25zdCBkYXRhID0ge1xuICAgIHN0eWxlczogQXJyYXkuZnJvbShzdHlsZXMpLFxuICAgIHNjcmlwdHM6IEFycmF5LmZyb20oc2NyaXB0cyksXG4gICAgdGl0bGU6IGNvbnRlbnQudGl0bGUsXG4gICAgYXBwOiB7fSxcbiAgICBpbnNlcnRWYXIsXG4gICAgY2hpbGRyZW46IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RyaW5nKDxBcHA+XG4gICAgICB7XG4gICAgICAgIGNvbnRlbnQuY29tcG9uZW50XG4gICAgICAgICAgPyBjb250ZW50LmNvbXBvbmVudFxuICAgICAgICAgIDogPGRpdj5ub3QgZm91bmQ8L2Rpdj5cbiAgICAgIH1cbiAgICA8L0FwcD4pXG4gIH1cbiAgY29uc3QgaHRtbCA9IFJlYWN0RE9NU2VydmVyLnJlbmRlclRvU3RhdGljTWFya3VwKDxIdG1sIHsuLi5kYXRhfSAvPilcblxuICByZXR1cm4gaHRtbFxufVxuXG5leHBvcnQgZGVmYXVsdCBzZXJ2ZXJSZW5kZXJcbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1kb20vc2VydmVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0LWhvdC1sb2FkZXIvcm9vdFwiKTsiXSwibWFwcGluZ3MiOiI7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBOzs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFDQTtBQXZCQTtBQUNBO0FBd0JBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUNBO0FBWkE7QUFDQTtBQWFBO0FBQ0E7QUFDQSxhQUVBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDdkJBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQWpCQTtBQUNBO0FBa0JBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7OztBQ3JCQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUxBO0FBQ0E7QUFNQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBSEE7QUFLQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBOUVBO0FBQ0E7QUErRUE7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDekZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUlBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhBO0FBS0E7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQ3JCQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBakNBO0FBQ0E7QUFrQ0E7QUFDQTtBQUNBLGFBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFIQTtBQUtBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7QUNyQkE7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFFQTtBQUNBO0FBQ0EsaUJBRUE7QUFDQTtBQUNBO0FBQ0E7QUFSQTtBQVdBO0FBQ0E7QUFDQSxpQkFFQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBV0E7QUFDQTtBQUNBLGlCQUVBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFZQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFWQTtBQWNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0RBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7OztBQ0FBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=