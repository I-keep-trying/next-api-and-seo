"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/examples/jwt";
exports.ids = ["pages/api/examples/jwt"];
exports.modules = {

/***/ "next-auth/jwt":
/*!********************************!*\
  !*** external "next-auth/jwt" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("next-auth/jwt");

/***/ }),

/***/ "(api)/./pages/api/examples/jwt.ts":
/*!***********************************!*\
  !*** ./pages/api/examples/jwt.ts ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/jwt */ \"next-auth/jwt\");\n/* harmony import */ var next_auth_jwt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__);\n// This is an example of how to read a JSON Web Token from an API route\n\nasync function handler(req, res) {\n    // If you don't have the NEXTAUTH_SECRET environment variable set,\n    // you will have to pass your secret as `secret` to `getToken`\n    const token = await (0,next_auth_jwt__WEBPACK_IMPORTED_MODULE_0__.getToken)({\n        req\n    });\n    res.send(JSON.stringify(token, null, 2));\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZXhhbXBsZXMvand0LnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLHVFQUF1RTtBQUMvQjtBQUl6QixlQUFlQyxPQUFPLENBQ25DQyxHQUFtQixFQUNuQkMsR0FBb0IsRUFDcEI7SUFDQSxrRUFBa0U7SUFDbEUsOERBQThEO0lBQzlELE1BQU1DLEtBQUssR0FBRyxNQUFNSix1REFBUSxDQUFDO1FBQUVFLEdBQUc7S0FBRSxDQUFDO0lBQ3JDQyxHQUFHLENBQUNFLElBQUksQ0FBQ0MsSUFBSSxDQUFDQyxTQUFTLENBQUNILEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLENBQUM7Q0FDekMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwaS1leGFtcGxlLy4vcGFnZXMvYXBpL2V4YW1wbGVzL2p3dC50cz81MGQwIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoaXMgaXMgYW4gZXhhbXBsZSBvZiBob3cgdG8gcmVhZCBhIEpTT04gV2ViIFRva2VuIGZyb20gYW4gQVBJIHJvdXRlXG5pbXBvcnQgeyBnZXRUb2tlbiB9IGZyb20gXCJuZXh0LWF1dGgvand0XCJcblxuaW1wb3J0IHR5cGUgeyBOZXh0QXBpUmVxdWVzdCwgTmV4dEFwaVJlc3BvbnNlIH0gZnJvbSBcIm5leHRcIlxuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZVxuKSB7XG4gIC8vIElmIHlvdSBkb24ndCBoYXZlIHRoZSBORVhUQVVUSF9TRUNSRVQgZW52aXJvbm1lbnQgdmFyaWFibGUgc2V0LFxuICAvLyB5b3Ugd2lsbCBoYXZlIHRvIHBhc3MgeW91ciBzZWNyZXQgYXMgYHNlY3JldGAgdG8gYGdldFRva2VuYFxuICBjb25zdCB0b2tlbiA9IGF3YWl0IGdldFRva2VuKHsgcmVxIH0pXG4gIHJlcy5zZW5kKEpTT04uc3RyaW5naWZ5KHRva2VuLCBudWxsLCAyKSlcbn0iXSwibmFtZXMiOlsiZ2V0VG9rZW4iLCJoYW5kbGVyIiwicmVxIiwicmVzIiwidG9rZW4iLCJzZW5kIiwiSlNPTiIsInN0cmluZ2lmeSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/examples/jwt.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/examples/jwt.ts"));
module.exports = __webpack_exports__;

})();