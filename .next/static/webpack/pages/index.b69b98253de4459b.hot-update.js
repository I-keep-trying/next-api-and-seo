"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nvar _s = $RefreshSig$();\nfunction Home() {\n    _s();\n    var ref = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)(), session = ref.data;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            !session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \"Not signed in \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Owner\\\\webdev\\\\next-api-and-seo\\\\pages\\\\index.js\",\n                        lineNumber: 10,\n                        columnNumber: 25\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return(// signIn('google', { callbackUrl: 'http://localhost:3002/' })\n                            (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signIn)());\n                        },\n                        children: \"Sign in\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Owner\\\\webdev\\\\next-api-and-seo\\\\pages\\\\index.js\",\n                        lineNumber: 11,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true),\n            session && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    \"Signed in as \",\n                    session.user.name,\n                    \" \",\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"br\", {}, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Owner\\\\webdev\\\\next-api-and-seo\\\\pages\\\\index.js\",\n                        lineNumber: 23,\n                        columnNumber: 44\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        onClick: function() {\n                            return (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.signOut)();\n                        },\n                        children: \"Sign out\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Owner\\\\webdev\\\\next-api-and-seo\\\\pages\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Owner\\\\webdev\\\\next-api-and-seo\\\\pages\\\\index.js\",\n        lineNumber: 6,\n        columnNumber: 5\n    }, this);\n};\n_s(Home, \"xGqsfA9Yc4bug2CeORcyTsHwvXY=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFBO0FBQTZEOztBQUU5QyxTQUFTRyxJQUFJLEdBQUc7O0lBQzdCLElBQTBCRCxHQUFZLEdBQVpBLDJEQUFVLEVBQUUsRUFBOUJFLE9BQWEsR0FBS0YsR0FBWSxDQUE5QkUsSUFBSTtJQUNaLHFCQUNFLDhEQUFDRSxLQUFHOztZQUVELENBQUNELE9BQU8sa0JBQ1A7O29CQUFFLGdCQUNjO2tDQUFBLDhEQUFDRSxJQUFFOzs7OzRCQUFHO2tDQUNwQiw4REFBQ0MsUUFBTTt3QkFDTEMsT0FBTyxFQUFFO21DQUNQLDhEQUE4RDs0QkFDOURULHVEQUFNLEVBQUU7eUJBQUE7a0NBRVgsU0FFRDs7Ozs7NEJBQVM7OzRCQUNSO1lBRUpLLE9BQU8sa0JBQ047O29CQUFFLGVBQ2E7b0JBQUNBLE9BQU8sQ0FBQ0ssSUFBSSxDQUFDQyxJQUFJO29CQUFDLEdBQUM7a0NBQUEsOERBQUNKLElBQUU7Ozs7NEJBQUc7a0NBQ3ZDLDhEQUFDQyxRQUFNO3dCQUFDQyxPQUFPLEVBQUU7bUNBQU1SLHdEQUFPLEVBQUU7eUJBQUE7a0NBQUUsVUFBUTs7Ozs7NEJBQVM7OzRCQUNsRDs7Ozs7O1lBRUQsQ0FDUDtDQUNGO0dBMUJ1QkUsSUFBSTs7UUFDQUQsdURBQVU7OztBQURkQyxLQUFBQSxJQUFJIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2luZGV4LmpzP2JlZTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0LCB1c2VTZXNzaW9uIH0gZnJvbSAnbmV4dC1hdXRoL3JlYWN0J1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcclxuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKVxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICB7LyogICB7bG9hZGluZyAmJiA8cD5Mb2FkaW5nLi48L3A+fSAqL31cclxuICAgICAgeyFzZXNzaW9uICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgTm90IHNpZ25lZCBpbiA8YnIgLz5cclxuICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT5cclxuICAgICAgICAgICAgICAvLyBzaWduSW4oJ2dvb2dsZScsIHsgY2FsbGJhY2tVcmw6ICdodHRwOi8vbG9jYWxob3N0OjMwMDIvJyB9KVxyXG4gICAgICAgICAgICAgIHNpZ25JbigpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgU2lnbiBpblxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC8+XHJcbiAgICAgICl9XHJcbiAgICAgIHtzZXNzaW9uICYmIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgU2lnbmVkIGluIGFzIHtzZXNzaW9uLnVzZXIubmFtZX0gPGJyIC8+XHJcbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHNpZ25PdXQoKX0+U2lnbiBvdXQ8L2J1dHRvbj5cclxuICAgICAgICA8Lz5cclxuICAgICAgKX1cclxuICAgIDwvZGl2PlxyXG4gIClcclxufVxyXG4iXSwibmFtZXMiOlsic2lnbkluIiwic2lnbk91dCIsInVzZVNlc3Npb24iLCJIb21lIiwiZGF0YSIsInNlc3Npb24iLCJkaXYiLCJiciIsImJ1dHRvbiIsIm9uQ2xpY2siLCJ1c2VyIiwibmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.js\n"));

/***/ })

});