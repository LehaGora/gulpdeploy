/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/_components.js":
/*!*******************************!*\
  !*** ./src/js/_components.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/header.js */ \"./src/js/components/header.js\");\n/* harmony import */ var _components_header_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_components_header_js__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack://test/./src/js/_components.js?");

/***/ }),

/***/ "./src/js/_functions.js":
/*!******************************!*\
  !*** ./src/js/_functions.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_burger_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/burger.js */ \"./src/js/functions/burger.js\");\n// Реализация бургер-меню\n\n\n//# sourceURL=webpack://test/./src/js/_functions.js?");

/***/ }),

/***/ "./src/js/_vars.js":
/*!*************************!*\
  !*** ./src/js/_vars.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({\n  windowEl: window,\n  documentEl: document,\n  htmlEl: document.documentElement,\n  bodyEl: document.body\n});\n\n//# sourceURL=webpack://test/./src/js/_vars.js?");

/***/ }),

/***/ "./src/js/_vendor.js":
/*!***************************!*\
  !*** ./src/js/_vendor.js ***!
  \***************************/
/***/ (() => {

eval("\n\n//# sourceURL=webpack://test/./src/js/_vendor.js?");

/***/ }),

/***/ "./src/js/components/header.js":
/*!*************************************!*\
  !*** ./src/js/components/header.js ***!
  \*************************************/
/***/ (() => {

eval("console.log('header.js');\nconsole.log('header.jssssssss');\n\n//# sourceURL=webpack://test/./src/js/components/header.js?");

/***/ }),

/***/ "./src/js/functions/burger.js":
/*!************************************!*\
  !*** ./src/js/functions/burger.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/disable-scroll */ \"./src/js/functions/disable-scroll.js\");\n/* harmony import */ var _functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/enable-scroll */ \"./src/js/functions/enable-scroll.js\");\n\n\n(function () {\n  var _document, _document2, _document3, _document4;\n  var burger = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelector('[data-burger]');\n  var menu = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.querySelector('[data-menu]');\n  var menuItems = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.querySelectorAll('[data-menu-item]');\n  var overlay = (_document4 = document) === null || _document4 === void 0 ? void 0 : _document4.querySelector('[data-menu-overlay]');\n  burger === null || burger === void 0 ? void 0 : burger.addEventListener('click', function (e) {\n    burger === null || burger === void 0 ? void 0 : burger.classList.toggle('burger--active');\n    menu === null || menu === void 0 ? void 0 : menu.classList.toggle('menu--active');\n    if (menu !== null && menu !== void 0 && menu.classList.contains('menu--active')) {\n      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'true');\n      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Закрыть меню');\n      (0,_functions_disable_scroll__WEBPACK_IMPORTED_MODULE_0__.disableScroll)();\n    } else {\n      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');\n      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');\n      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();\n    }\n  });\n  overlay === null || overlay === void 0 ? void 0 : overlay.addEventListener('click', function () {\n    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');\n    burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');\n    burger.classList.remove('burger--active');\n    menu.classList.remove('menu--active');\n    (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();\n  });\n  menuItems === null || menuItems === void 0 ? void 0 : menuItems.forEach(function (el) {\n    el.addEventListener('click', function () {\n      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-expanded', 'false');\n      burger === null || burger === void 0 ? void 0 : burger.setAttribute('aria-label', 'Открыть меню');\n      burger.classList.remove('burger--active');\n      menu.classList.remove('menu--active');\n      (0,_functions_enable_scroll__WEBPACK_IMPORTED_MODULE_1__.enableScroll)();\n    });\n  });\n})();\n\n//# sourceURL=webpack://test/./src/js/functions/burger.js?");

/***/ }),

/***/ "./src/js/functions/disable-scroll.js":
/*!********************************************!*\
  !*** ./src/js/functions/disable-scroll.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"disableScroll\": () => (/* binding */ disableScroll)\n/* harmony export */ });\n/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ \"./src/js/_vars.js\");\n\nvar disableScroll = function disableScroll() {\n  var _document;\n  var fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');\n  var pagePosition = window.scrollY;\n  var paddingOffset = \"\".concat(window.innerWidth - _vars__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bodyEl.offsetWidth, \"px\");\n  _vars__WEBPACK_IMPORTED_MODULE_0__[\"default\"].htmlEl.style.scrollBehavior = 'none';\n  fixBlocks.forEach(function (el) {\n    el.style.paddingRight = paddingOffset;\n  });\n  _vars__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bodyEl.style.paddingRight = paddingOffset;\n  _vars__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bodyEl.classList.add('dis-scroll');\n  _vars__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bodyEl.dataset.position = pagePosition;\n  _vars__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bodyEl.style.top = \"-\".concat(pagePosition, \"px\");\n};\n\n//# sourceURL=webpack://test/./src/js/functions/disable-scroll.js?");

/***/ }),

/***/ "./src/js/functions/enable-scroll.js":
/*!*******************************************!*\
  !*** ./src/js/functions/enable-scroll.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"enableScroll\": () => (/* binding */ enableScroll)\n/* harmony export */ });\n/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_vars */ \"./src/js/_vars.js\");\n\nvar enableScroll = function enableScroll() {\n  var _document;\n  var fixBlocks = (_document = document) === null || _document === void 0 ? void 0 : _document.querySelectorAll('.fixed-block');\n  var body = document.body;\n  var pagePosition = parseInt(_vars__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bodyEl.dataset.position, 10);\n  fixBlocks.forEach(function (el) {\n    el.style.paddingRight = '0px';\n  });\n  _vars__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bodyEl.style.paddingRight = '0px';\n  _vars__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bodyEl.style.top = 'auto';\n  _vars__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bodyEl.classList.remove('dis-scroll');\n  window.scroll({\n    top: pagePosition,\n    left: 0\n  });\n  _vars__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bodyEl.removeAttribute('data-position');\n  _vars__WEBPACK_IMPORTED_MODULE_0__[\"default\"].htmlEl.style.scrollBehavior = 'smooth';\n};\n\n//# sourceURL=webpack://test/./src/js/functions/enable-scroll.js?");

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_vendor */ \"./src/js/_vendor.js\");\n/* harmony import */ var _vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_vendor__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _vars__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./_vars */ \"./src/js/_vars.js\");\n/* harmony import */ var _functions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./_functions */ \"./src/js/_functions.js\");\n/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_components */ \"./src/js/_components.js\");\n\n\n\n\n\n//# sourceURL=webpack://test/./src/js/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/main.js");
/******/ 	
/******/ })()
;