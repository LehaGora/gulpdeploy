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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _functions_validEmail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./functions/validEmail */ \"./src/js/functions/validEmail.js\");\n/* harmony import */ var _functions_validEmail__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_functions_validEmail__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _functions_ymaps__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/ymaps */ \"./src/js/functions/ymaps.js\");\n/* harmony import */ var _functions_ymaps__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_functions_ymaps__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _functions_validFormContacts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/validFormContacts */ \"./src/js/functions/validFormContacts.js\");\n/* harmony import */ var _functions_validFormContacts__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_functions_validFormContacts__WEBPACK_IMPORTED_MODULE_2__);\n// Реализация бургер-меню\n// import { burger } from './functions/burger.js';\n\n\n\n\n//# sourceURL=webpack://test/./src/js/_functions.js?");

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

eval("// search menu\nvar btnSearch = document.querySelector('.header__search-button');\nvar btnSearchClose = document.querySelector('.search-from__button');\nvar formSearch = document.querySelector('.header__search-from');\nbtnSearch.addEventListener('click', function () {\n  formSearch.classList.toggle('active');\n});\nbtnSearchClose.addEventListener('click', function (event) {\n  event.preventDefault();\n  formSearch.classList.remove('active');\n});\n\n// burger menu\nvar burger = document.querySelector('.burger-button');\nvar menuClose = document.querySelector('.menu-close');\nvar menu = document.querySelector('.header-bottom__menu');\nvar menuLinks = menu.querySelectorAll('.header__link');\nburger.addEventListener('click', function () {\n  menu.classList.toggle('header-bottom__menu--active');\n  document.body.classList.toggle('stop-scroll');\n});\nmenuLinks.forEach(function (el) {\n  el.addEventListener('click', function () {\n    menu.classList.remove('header-bottom__menu--active');\n    document.body.classList.remove('stop-scroll');\n  });\n});\nmenuClose.addEventListener('click', function () {\n  menu.classList.remove('header-bottom__menu--active');\n  document.body.classList.remove('stop-scroll');\n});\n\n//# sourceURL=webpack://test/./src/js/components/header.js?");

/***/ }),

/***/ "./src/js/functions/validEmail.js":
/*!****************************************!*\
  !*** ./src/js/functions/validEmail.js ***!
  \****************************************/
/***/ (() => {

eval("var EMAIL_REGEXP = /^(((?:(?![\\t-\\r \"\\(\\),\\.:-<>@\\[\\]\\xA0\\u1680\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000\\uFEFF])[\\s\\S])+(\\.(?:(?![\\t-\\r \"\\(\\),\\.:-<>@\\[\\]\\xA0\\u1680\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000\\uFEFF])[\\s\\S])+)*)|(\"(?:[\\0-\\t\\x0B\\f\\x0E-\\u2027\\u202A-\\uD7FF\\uE000-\\uFFFF]|[\\uD800-\\uDBFF][\\uDC00-\\uDFFF]|[\\uD800-\\uDBFF](?![\\uDC00-\\uDFFF])|(?:[^\\uD800-\\uDBFF]|^)[\\uDC00-\\uDFFF])+\"))@(((?:(?![\\t-\\r \"\\(\\),\\.:-<>@\\[\\]\\xA0\\u1680\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000\\uFEFF])[\\s\\S])+\\.)+(?:(?![\\t-\\r \"\\(\\),\\.:-<>@\\[\\]\\xA0\\u1680\\u2000-\\u200A\\u2028\\u2029\\u202F\\u205F\\u3000\\uFEFF])[\\s\\S]){2,})$/i;\nvar input = document.querySelector('.subscribe__input');\nvar form = document.querySelector('.subscribe__form');\nvar error = document.querySelector('.error');\nfunction validateEmail(value) {\n  return EMAIL_REGEXP.test(value);\n}\nfunction updateinput() {\n  if (validateEmail(input.value)) {\n    error.style.display = 'none';\n    input.value = '';\n    input.blur();\n    input.classList.remove('input-error');\n  } else {\n    error.style.display = 'block';\n    input.classList.add('input-error');\n  }\n}\nform.addEventListener('submit', updateinput);\n\n//# sourceURL=webpack://test/./src/js/functions/validEmail.js?");

/***/ }),

/***/ "./src/js/functions/validFormContacts.js":
/*!***********************************************!*\
  !*** ./src/js/functions/validFormContacts.js ***!
  \***********************************************/
/***/ (() => {

eval("var validator = new JustValidate('.contacts__form');\nvalidator.addField('#contacts_name', [{\n  rule: 'required',\n  errorMessage: 'Поле Имя должно быть заполнено'\n}, {\n  rule: 'customRegexp',\n  value: /^[а-яА-ЯёЁ]+$/gi,\n  errorMessage: 'Недопустимый формат'\n}]).addField('#contacts_email', [{\n  rule: 'required',\n  errorMessage: 'Поле Email должно быть заполнено'\n}, {\n  rule: 'email',\n  errorMessage: 'Недопустимый формат'\n}]);\n\n//# sourceURL=webpack://test/./src/js/functions/validFormContacts.js?");

/***/ }),

/***/ "./src/js/functions/ymaps.js":
/*!***********************************!*\
  !*** ./src/js/functions/ymaps.js ***!
  \***********************************/
/***/ (() => {

eval("var center = [55.760178, 37.618574];\nvar highPass = [55.769535, 37.639985];\nfunction init() {\n  var map = new ymaps.Map('map', {\n    center: center,\n    zoom: 13\n  });\n  var placemark = new ymaps.Placemark(highPass, {}, {\n    iconLayout: 'default#image',\n    iconImageHref: 'img/placemark-icon.svg',\n    iconImageSize: [12, 12],\n    iconImageOffset: [-6, -6]\n  });\n  placemark.events.add('click', function () {\n    document.querySelector('.map__address').classList.add('active');\n  });\n  map.controls.remove('geolocationControl'); // удаляем геолокацию\n  map.controls.remove('searchControl'); // удаляем поиск\n  map.controls.remove('trafficControl'); // удаляем контроль трафика\n  map.controls.remove('typeSelector'); // удаляем тип\n  map.controls.remove('fullscreenControl'); // удаляем кнопку перехода в полноэкранный режим\n  map.controls.remove('zoomControl'); // удаляем контрол зуммирования\n  map.controls.remove('rulerControl'); // удаляем контрол правил\n  map.behaviors.disable(['scrollZoom']); // отключаем скролл карты (опционально)\n\n  map.geoObjects.add(placemark);\n  // placemark.balloon.open();\n}\n\nymaps.ready(init);\ndocument.querySelector('.map__address--close').addEventListener('click', function () {\n  document.querySelector('.map__address').classList.remove('active');\n});\n\n//# sourceURL=webpack://test/./src/js/functions/ymaps.js?");

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