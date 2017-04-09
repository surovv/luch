(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("form-data"), require("isomorphic-fetch"));
	else if(typeof define === 'function' && define.amd)
		define(["form-data", "isomorphic-fetch"], factory);
	else if(typeof exports === 'object')
		exports["library"] = factory(require("form-data"), require("isomorphic-fetch"));
	else
		root["library"] = factory(root["form-data"], root["isomorphic-fetch"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_0__;\n\n//////////////////\n// WEBPACK FOOTER\n// external {\"root\":\"form-data\",\"commonjs2\":\"form-data\",\"commonjs\":\"form-data\",\"amd\":\"form-data\"}\n// module id = 0\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%7B%22root%22:%22form-data%22,%22commonjs2%22:%22form-data%22,%22commonjs%22:%22form-data%22,%22amd%22:%22form-data%22%7D?");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_1__;\n\n//////////////////\n// WEBPACK FOOTER\n// external {\"root\":\"isomorphic-fetch\",\"commonjs2\":\"isomorphic-fetch\",\"commonjs\":\"isomorphic-fetch\",\"amd\":\"isomorphic-fetch\"}\n// module id = 1\n// module chunks = 0\n\n//# sourceURL=webpack:///external_%7B%22root%22:%22isomorphic-fetch%22,%22commonjs2%22:%22isomorphic-fetch%22,%22commonjs%22:%22isomorphic-fetch%22,%22amd%22:%22isomorphic-fetch%22%7D?");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.luch = exports.getJson = exports.appendToFormData = exports.convertToQuery = undefined;\n\nvar _isomorphicFetch = __webpack_require__(1);\n\nvar _isomorphicFetch2 = _interopRequireDefault(_isomorphicFetch);\n\nvar _formData = __webpack_require__(0);\n\nvar _formData2 = _interopRequireDefault(_formData);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar convertToQuery = exports.convertToQuery = function convertToQuery(obj) {\n  return '' + Object.keys(obj).map(function (k) {\n    return k + '=' + obj[k];\n  }).join('&');\n};\n\n// export const appendToFormData = (obj, fd = new FormData(), res = Object.keys(obj).map(key => fd.append(key, obj[key]))) => res;\nvar appendToFormData = exports.appendToFormData = function appendToFormData(obj) {\n  var fd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _formData2.default();\n\n  Object.keys(obj).map(function (key) {\n    return fd.append(key, obj[key]);\n  });\n  return fd;\n};\n\nvar genFdReqOptions = function genFdReqOptions(method, data) {\n  return {\n    method: method,\n    body: appendToFormData(data)\n  };\n};\nvar genQueryReqOptions = function genQueryReqOptions(method) {\n  return { method: method };\n};\n\nvar genFdRequest = function genFdRequest(method) {\n  return function (url) {\n    var data = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    return (0, _isomorphicFetch2.default)(url, Object.assign({}, genFdReqOptions(method, data), options));\n  };\n};\nvar genQueryRequest = function genQueryRequest(method) {\n  return function (url, params) {\n    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};\n    return (0, _isomorphicFetch2.default)('' + url + (params ? '?' + convertToQuery(params) : ''), Object.assign({}, genQueryReqOptions(method), options));\n  };\n};\n\nvar methods = {\n  get: genQueryRequest('GET'),\n  head: genQueryRequest('HEAD'),\n  delete: genQueryRequest('DELETE'),\n  post: genFdRequest('POST'),\n  put: genFdRequest('PUT'),\n  patch: genFdRequest('PATCH')\n};\n\nvar getJson = exports.getJson = function getJson(resp) {\n  return resp.json();\n};\n\nvar luch = exports.luch = Object.assign(function (url) {\n  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};\n  return (0, _isomorphicFetch2.default)(url, options);\n}, methods);\n\nexports.default = luch;\n\n//////////////////\n// WEBPACK FOOTER\n// ./src/luch.js\n// module id = 2\n// module chunks = 0\n\n//# sourceURL=webpack:///./src/luch.js?");

/***/ })
/******/ ]);
});