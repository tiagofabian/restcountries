(self["webpackChunklanding_page"] = self["webpackChunklanding_page"] || []).push([["src_components_countries_CardCountries_js"],{

/***/ "./src/components/countries/CardCountries.js":
/*!***************************************************!*\
  !*** ./src/components/countries/CardCountries.js ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var _assets_css_components_countries_cardCountries_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../assets/css/components/countries/cardCountries.css */ "./src/assets/css/components/countries/cardCountries.css");



var cardCountries = function cardCountries(_ref) {
  var countries = _ref.countries;
  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
    className: "cards"
  }, countries && countries.map(function (countrie, index) {
    var capital = countrie.capital,
        flag = countrie.flag,
        name = countrie.name,
        region = countrie.region,
        borders = countrie.borders,
        languages = countrie.languages,
        currencies = countrie.currencies;
    var nativeLang = languages.map(function (language) {
      return language.nativeName;
    }).find(function (l) {
      return l;
    });
    var currencie = currencies.map(function (currencie) {
      return {
        name: currencie.name,
        symbol: currencie.symbol
      };
    }).find(function (c) {
      return c;
    });
    var frontiers = borders.map(function (border) {
      return "".concat(border, ", ");
    });
    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      key: index,
      className: "container"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("ul", {
      className: "elements"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("div", {
      className: "bandera"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("img", {
      src: flag,
      alt: "img"
    }))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Name: "), name), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Capital: "), capital), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Region: "), region), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Lengua: "), nativeLang), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Moneda: "), currencie.name, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, " Simbolo: "), currencie.symbol), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("li", {
      className: "label"
    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement("strong", null, "Paises Limitrofes: "), frontiers)));
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (cardCountries);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/components/countries/cardCountries.css":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/assets/css/components/countries/cardCountries.css ***!
  \*****************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".cards {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    width: auto;\r\n    min-width: 300px;\r\n    max-width: 300px;\r\n    height: auto;\r\n}\r\n\r\n.container {\r\n    background-color: rgba(122, 181, 221, 0.801);\r\n    width: auto;\r\n    height: auto;\r\n    min-height: 150px;\r\n    min-width: 300px;\r\n    max-width: 350px;\r\n    border: 1px solid black;\r\n    padding: 15px;\r\n    margin: 5px;\r\n}\r\n\r\n.container .elements {\r\n    max-height: 250px;\r\n    width: 100%;\r\n    max-width: 500px;\r\n    list-style-type: none;\r\n}\r\n\r\n.bandera {\r\n    border: 2px solid black;\r\n    width: 120px;\r\n    height: 80px;\r\n    float: right;\r\n}\r\n\r\n.bandera img {\r\n    width: 100%;\r\n    height: 100%;\r\n    max-height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.label {\r\n    width: auto;\r\n}", "",{"version":3,"sources":["webpack://./src/assets/css/components/countries/cardCountries.css"],"names":[],"mappings":"AAAA;IACI,aAAa;IACb,mBAAmB;IACnB,eAAe;IACf,6BAA6B;IAC7B,WAAW;IACX,gBAAgB;IAChB,gBAAgB;IAChB,YAAY;AAChB;;AAEA;IACI,4CAA4C;IAC5C,WAAW;IACX,YAAY;IACZ,iBAAiB;IACjB,gBAAgB;IAChB,gBAAgB;IAChB,uBAAuB;IACvB,aAAa;IACb,WAAW;AACf;;AAEA;IACI,iBAAiB;IACjB,WAAW;IACX,gBAAgB;IAChB,qBAAqB;AACzB;;AAEA;IACI,uBAAuB;IACvB,YAAY;IACZ,YAAY;IACZ,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;IAChB,iBAAiB;AACrB;;AAEA;IACI,WAAW;AACf","sourcesContent":[".cards {\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    justify-content: space-evenly;\r\n    width: auto;\r\n    min-width: 300px;\r\n    max-width: 300px;\r\n    height: auto;\r\n}\r\n\r\n.container {\r\n    background-color: rgba(122, 181, 221, 0.801);\r\n    width: auto;\r\n    height: auto;\r\n    min-height: 150px;\r\n    min-width: 300px;\r\n    max-width: 350px;\r\n    border: 1px solid black;\r\n    padding: 15px;\r\n    margin: 5px;\r\n}\r\n\r\n.container .elements {\r\n    max-height: 250px;\r\n    width: 100%;\r\n    max-width: 500px;\r\n    list-style-type: none;\r\n}\r\n\r\n.bandera {\r\n    border: 2px solid black;\r\n    width: 120px;\r\n    height: 80px;\r\n    float: right;\r\n}\r\n\r\n.bandera img {\r\n    width: 100%;\r\n    height: 100%;\r\n    max-height: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.label {\r\n    width: auto;\r\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ __webpack_exports__["default"] = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./src/assets/css/components/countries/cardCountries.css":
/*!***************************************************************!*\
  !*** ./src/assets/css/components/countries/cardCountries.css ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_cardCountries_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../../node_modules/css-loader/dist/cjs.js!./cardCountries.css */ "./node_modules/css-loader/dist/cjs.js!./src/assets/css/components/countries/cardCountries.css");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_cardCountries_css__WEBPACK_IMPORTED_MODULE_1__.default, options);



/* harmony default export */ __webpack_exports__["default"] = (_node_modules_css_loader_dist_cjs_js_cardCountries_css__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});

/***/ })

}]);
//# sourceMappingURL=src_components_countries_CardCountries_js.bundle.js.map