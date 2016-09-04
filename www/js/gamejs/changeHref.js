/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(5);


/***/ },

/***/ 5:
/***/ function(module, exports) {

	eval("/*** IMPORTS FROM imports-loader ***/\nvar define = false;\n\nfunction change (i,n) {\n\tif (localStorage.getItem('href')!=null) {\n\t\tvar arr = JSON.parse(localStorage.getItem(\"href\"));\n\t\tarr[i] = n;\n\t\tvar infos = JSON.stringify(arr);\n\t\tlocalStorage.setItem('href',infos);\n\t}\n}\nmodule.exports = {\n\tchange:change,\n}  \n\n\n//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvanMvZ2FtZWpzL2NoYW5nZUhyZWYuanM/YmJhZCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQyIsImZpbGUiOiI1LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyoqKiBJTVBPUlRTIEZST00gaW1wb3J0cy1sb2FkZXIgKioqL1xudmFyIGRlZmluZSA9IGZhbHNlO1xuXG5mdW5jdGlvbiBjaGFuZ2UgKGksbikge1xuXHRpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ2hyZWYnKSE9bnVsbCkge1xuXHRcdHZhciBhcnIgPSBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiaHJlZlwiKSk7XG5cdFx0YXJyW2ldID0gbjtcblx0XHR2YXIgaW5mb3MgPSBKU09OLnN0cmluZ2lmeShhcnIpO1xuXHRcdGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdocmVmJyxpbmZvcyk7XG5cdH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuXHRjaGFuZ2U6Y2hhbmdlLFxufSAgXG5cblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9zcmMvanMvZ2FtZWpzL2NoYW5nZUhyZWYuanNcbiAqKiBtb2R1bGUgaWQgPSA1XG4gKiogbW9kdWxlIGNodW5rcyA9IDEgMiAzXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ }

/******/ });