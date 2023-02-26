/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n    margin: 0;\\n    box-sizing: border-box;\\n    cursor:default;\\n}\\n\\nbody{\\n    min-height: 100vh;\\n    display: flex;\\n    flex-direction: column;\\n}\\n\\nfooter {\\n    display: flex;\\n    flex-direction: row-reverse;\\n    align-items: center;\\n    justify-content: center;\\n    margin-top: auto;\\n    padding: 10px 0;\\n    gap: 20px;\\n    border-top: 1px solid black;\\n    background-color: #aeaaaa;\\n}\\n\\nfooter img:hover {\\n    cursor: pointer;\\n    transform: scale(1.13);\\n    transition: ease-in;\\n}\\n\\nh1{\\n    display: flex;\\n    justify-content: center;\\n    margin-top: 2rem;\\n    margin-bottom: 5rem;\\n    font-size: 3rem;\\n}\\n\\n.wrapper {\\n    margin: 0 auto;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n}\\n\\n.boards{\\n    display: flex;\\n    flex-direction: row;\\n    gap: 150px ;\\n}\\n\\n.player-board, .computer-board {\\n    display: flex;\\n}\\n\\n.player-side, .computer-side {\\n    background-color: rgb(26, 24, 24);\\n    padding: 10px;\\n}\\n\\n.rows {\\n    display: flex;\\n    flex-direction: row;\\n    width: 500px;\\n}\\n\\n.marker {\\n    color: #d9d9d9;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    margin-right: 10px;\\n    font-size: x-large;\\n    font-weight: 600;\\n}\\n\\n.cells {\\n    flex: 1;\\n    height: 50px;\\n    background-color: #e8e5e5;\\n    outline: .5px solid rgb(154, 154, 250);\\n    display: inline-flex;\\n    justify-content: center;\\n    align-items: center;\\n    font-size: 3rem;\\n}\\n\\n\\n\\n#computer-board .cells:hover:empty {\\n    z-index: 3;\\n    background-color: #dcfce7;\\n    outline: 4px solid #4ade80;\\n    cursor: pointer;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://battleship/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://battleship/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://battleship/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _modules_Dom_helpers_initializeDOM_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/Dom helpers/initializeDOM.js */ \"./src/modules/Dom helpers/initializeDOM.js\");\n/* harmony import */ var _modules_initializeData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/initializeData.js */ \"./src/modules/initializeData.js\");\n/* harmony import */ var _modules_Dom_helpers_cellListener_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/Dom helpers/cellListener.js */ \"./src/modules/Dom helpers/cellListener.js\");\n/* harmony import */ var _modules_ship_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/ship.js */ \"./src/modules/ship.js\");\n/* eslint-disable import/extensions */\n\n\n\n\n\n\nfunction attackEnemyBoard(cells) {\n  cells.forEach((cell) => {\n    cell.addEventListener('click', () => {\n      (0,_modules_Dom_helpers_cellListener_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(cell, _modules_initializeData_js__WEBPACK_IMPORTED_MODULE_2__.player1, _modules_initializeData_js__WEBPACK_IMPORTED_MODULE_2__.enemyBoard);\n    }, { once: true });\n  });\n}\n\nconst ship = (0,_modules_ship_js__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(3);\nship.isVertical = true;\n_modules_initializeData_js__WEBPACK_IMPORTED_MODULE_2__.enemyBoard.setShip(ship, [7, 0]);\n\n(0,_modules_Dom_helpers_initializeDOM_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\nconst enemyBoardCells = document.querySelectorAll('#computer-board .cells');\nattackEnemyBoard(enemyBoardCells, _modules_initializeData_js__WEBPACK_IMPORTED_MODULE_2__.player1.name);\n\n\n//# sourceURL=webpack://battleship/./src/index.js?");

/***/ }),

/***/ "./src/modules/Dom helpers/cellListener.js":
/*!*************************************************!*\
  !*** ./src/modules/Dom helpers/cellListener.js ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ cellListener)\n/* harmony export */ });\nfunction cellListener(cell, player, board) {\n  // Attack enemy Board\n  const element = cell;\n  const value = player.attackTo(\n    [cell.parentNode.dataset.row,\n      cell.dataset.column,\n      cell],\n    board,\n  );\n    // Render it on the DOM\n  if (value === '☒') {\n    element.style.backgroundColor = '#fecaca';\n    element.style.color = '#ef4444';\n  } else {\n    element.style.backgroundColor = '#9292a7';\n    element.style.color = '#9f9fb';\n    element.style.fontSize = '2rem';\n  }\n  element.appendChild(document.createTextNode(value));\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/Dom_helpers/cellListener.js?");

/***/ }),

/***/ "./src/modules/Dom helpers/initializeDOM.js":
/*!**************************************************!*\
  !*** ./src/modules/Dom helpers/initializeDOM.js ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ initializeDOM)\n/* harmony export */ });\n/* harmony import */ var _renderBoard_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./renderBoard.js */ \"./src/modules/Dom helpers/renderBoard.js\");\n/* eslint-disable import/extensions */\n\n\nfunction initializeBoards(boardSize) {\n  // References to static elements in the DOM\n  const playerBoard = document.querySelector('#player-board');\n  const aiBoard = document.querySelector('#computer-board');\n  // Rendering boards into the DOM\n  (0,_renderBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(boardSize, playerBoard);\n  (0,_renderBoard_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(boardSize, aiBoard);\n}\n\nfunction domHelper(tag, ...children) {\n  const element = document.createElement(tag);\n  if (children) children.forEach((child) => element.appendChild(child));\n  return element;\n}\n\nfunction setFooter() {\n  const body = document.querySelector('body');\n  const p = domHelper('p');\n  const img = domHelper('img');\n  const a = domHelper('a', img);\n  const footer = domHelper('footer', p, a);\n  p.innerHTML = 'Developed by avatec2312.';\n  img.src = '../src/assets/github-logo.svg';\n  a.href = 'https://github.com/WillAvatec/battleship';\n  body.appendChild(footer);\n}\n\nfunction initializeDOM() {\n  initializeBoards(10);\n  setFooter();\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/Dom_helpers/initializeDOM.js?");

/***/ }),

/***/ "./src/modules/Dom helpers/renderBoard.js":
/*!************************************************!*\
  !*** ./src/modules/Dom helpers/renderBoard.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ renderBoard)\n/* harmony export */ });\nfunction createMarker(text) {\n  const marker = document.createElement('div');\n  marker.className = 'marker';\n  marker.textContent = text;\n  return marker;\n}\n\nfunction createRow(rowNumber) {\n  const row = document.createElement('div');\n  row.setAttribute('class', 'rows');\n  row.dataset.row = rowNumber;\n  return row;\n}\n\nfunction createCell(columnNumber) {\n  const cell = document.createElement('div');\n  cell.setAttribute('class', 'cells');\n  cell.dataset.column = columnNumber;\n  return cell;\n}\n\n/* function appendListeners(cells) {\n  cells.forEach((cell) => {\n    cell.addEventListener('click', () => {\n      console.log([cell.parentNode().dataset.row, cell.dataset.column]);\n    });\n  });\n} */\n\n// This renders a board in the DOM(Is not related to the GameBoard function yet)\nfunction renderBoard(size, parent) {\n  for (let i = 0; i < size; i += 1) {\n    const row = createRow(i);\n    row.appendChild(createMarker(i));\n    for (let j = 0; j < size; j += 1) {\n      const cell = createCell(j);\n      row.appendChild(cell);\n    }\n    parent.appendChild(row);\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/Dom_helpers/renderBoard.js?");

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ GameBoard)\n/* harmony export */ });\nfunction GameBoard(boardSize = 10) {\n  const board = new Array(boardSize).fill()\n    .map(() => Array(boardSize).fill(null));\n  const shipPositions = [];\n  function getBoard(coord) {\n    if (coord) {\n      return board[coord[0]][coord[1]];\n    }\n    return board;\n  }\n\n  function isAvailable(coord, s, b) {\n    const [x, y] = coord;\n    const vert = s.isVertical;\n    const max = b.length;\n    let isOccupied = false;\n    const size = s.getSize();\n    const isInsideBoard = ((x >= 0 && x < max) && (y >= 0 && y < max));\n    const couldOverflow = b?.[x + size] === undefined && b?.[x]?.[y + size] === undefined;\n    if (isInsideBoard) {\n      for (let i = 0; i < s.getSize(); i += 1) {\n        if (vert && !isOccupied) {\n          isOccupied = b[x][y + i] === 1;\n        }\n        if (!vert && !isOccupied) {\n          isOccupied = b[x + i][y] === 1;\n        }\n      }\n    }\n    return (isInsideBoard && !isOccupied && !couldOverflow);\n  }\n\n  function setShip(ship, coord) {\n    const [x, y] = coord;\n    const size = ship.getSize();\n    const { isVertical } = ship;\n    if (!isAvailable(coord, ship, board)) return 'invalid coordinates';\n    if (!isVertical && size >= 1) {\n      for (let i = 0; i < size; i += 1) {\n        board[x][y + i] = 1;\n      }\n    }\n    if (isVertical && size >= 1) {\n      for (let i = 0; i < size; i += 1) {\n        board[x + i][y] = 1;\n      }\n    }\n    shipPositions.push({ start: { x, y }, ship });\n    return board;\n  }\n\n  // {start:{x,y},ship}\n  function checkBoatPosition(set, coord) {\n    const [row, column] = coord; // 0 - 0\n    const [startX, startY] = [set.start.x, set.start.y]; // 0 - 2 * Ship Starting position\n    const length = set.ship.getSize(); // 3\n    let result = false;\n    for (let i = 0; i < length; i += 1) {\n      if (set.ship.isVertical && startX + i === +row) {\n        result = true;\n        break;\n      }\n      if (!set.ship.isVertical && startY + i === +column) {\n        result = true;\n        break;\n      }\n    }\n    return result;\n  }\n\n  function findBoat(coord) {\n    const result = shipPositions.find((ship) => checkBoatPosition(ship, coord));\n    if (result) return result.ship;\n    return false;\n  }\n\n  function receiveAttack(coord) {\n    const [x, y] = coord;\n    let value = '◦';\n    if (board[x][y] === 1) {\n      findBoat(coord).hit();\n      value = '☒';\n    }\n    board[x][y] = value;\n\n    return value;\n  }\n  function AreAllSunked() {\n    // Check if the board is full of boats\n    let counter = 0;\n    if (shipPositions.length > 0) {\n      shipPositions.forEach((obj) => {\n        if (obj.ship.isSunk()) counter += 1;\n      });\n      return counter === shipPositions.length;\n    }\n  }\n\n  return {\n    getBoard,\n    setShip,\n    receiveAttack,\n    AreAllSunked,\n  };\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/gameboard.js?");

/***/ }),

/***/ "./src/modules/initializeData.js":
/*!***************************************!*\
  !*** ./src/modules/initializeData.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"computer\": () => (/* binding */ computer),\n/* harmony export */   \"enemyBoard\": () => (/* binding */ enemyBoard),\n/* harmony export */   \"isGameOver\": () => (/* binding */ isGameOver),\n/* harmony export */   \"player1\": () => (/* binding */ player1),\n/* harmony export */   \"playerBoard\": () => (/* binding */ playerBoard)\n/* harmony export */ });\n/* harmony import */ var _player_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./player.js */ \"./src/modules/player.js\");\n/* harmony import */ var _gameboard_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gameboard.js */ \"./src/modules/gameboard.js\");\n/* eslint-disable import/extensions */\n\n\n\nconst player1 = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]();\nconst computer = new _player_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]('computer');\nconst isGameOver = false;\nconst playerBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst enemyBoard = (0,_gameboard_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n\n\n\n\n//# sourceURL=webpack://battleship/./src/modules/initializeData.js?");

/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Player)\n/* harmony export */ });\nclass Player {\n  constructor(name = 'Player1') {\n    this.name = name;\n    this.record = [];\n  }\n\n  attackTo(coord, board) {\n    const [x, y] = coord;\n    if (this.record.find((obj) => obj.row === x && obj.column === y)) return false;\n    this.record.push({ row: x, column: y });\n    return board.receiveAttack(coord);\n  }\n\n  randomAttack(board) {\n    if (this.record.length === 100) return false;\n    let row = Math.floor(Math.random() * 10);\n    let column = Math.floor(Math.random() * 10);\n\n    while (this.hasAlreadyHit(row, column)) {\n      row = Math.floor(Math.random() * 10);\n      column = Math.floor(Math.random() * 10);\n    }\n\n    this.attackTo([row, column], board);\n\n    return true;\n  }\n\n  hasAlreadyHit(row, column) {\n    for (let i = 0; i < this.record.length; i += 1) {\n      if (\n        this.record[i].row === row\n          && this.record[i].column === column\n      ) {\n        return true;\n      }\n    }\n    return false;\n  }\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/player.js?");

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Ship)\n/* harmony export */ });\nfunction Ship(size = 1) {\n  const length = size;\n  let sunked = false;\n  let hits = 0;\n  const isVertical = false;\n\n  function hit(damage = 1) {\n    if (hits < length) {\n      hits += damage;\n    }\n    return hits;\n  }\n  function getSize() {\n    return length;\n  }\n  function isSunk() {\n    sunked = hits >= length;\n    return { sunked, hits };\n  }\n  return {\n    isSunk,\n    hit,\n    getSize,\n    isVertical,\n  };\n}\n\n\n//# sourceURL=webpack://battleship/./src/modules/ship.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;