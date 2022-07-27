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
exports.id = "pages/api/login";
exports.ids = ["pages/api/login"];
exports.modules = {

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("passport");

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("passport-google-oauth20");

/***/ }),

/***/ "next-connect":
/*!*******************************!*\
  !*** external "next-connect" ***!
  \*******************************/
/***/ ((module) => {

module.exports = import("next-connect");;

/***/ }),

/***/ "(api)/./lib/passport-google-auth.ts":
/*!*************************************!*\
  !*** ./lib/passport-google-auth.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var passport_google_oauth20__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! passport-google-oauth20 */ \"passport-google-oauth20\");\n/* harmony import */ var passport_google_oauth20__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(passport_google_oauth20__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! passport */ \"passport\");\n/* harmony import */ var passport__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(passport__WEBPACK_IMPORTED_MODULE_1__);\n\n\n// logic to save your user or check if user exists in your record to proceed.\nconst saveUser = (user)=>{\n    return new Promise((resolve, reject)=>{\n        resolve(\"Successful\");\n    });\n};\npassport__WEBPACK_IMPORTED_MODULE_1___default().use(new passport_google_oauth20__WEBPACK_IMPORTED_MODULE_0__.Strategy({\n    clientID: process.env.GOOGLE_ID,\n    clientSecret: process.env.GOOGLE_SECRET,\n    callbackURL: \"/api/oauth2/redirect/google\"\n}, async (_accessToken, _refreshToken, profile, cb)=>{\n    try {\n        await saveUser(profile);\n        return cb(null, profile);\n    } catch (e) {\n        throw new Error(e);\n    }\n}));\npassport__WEBPACK_IMPORTED_MODULE_1___default().serializeUser((user, cb)=>{\n    process.nextTick(function() {\n        return cb(null, user);\n    });\n});\npassport__WEBPACK_IMPORTED_MODULE_1___default().deserializeUser(function(user, cb) {\n    process.nextTick(function() {\n        return cb(null, user);\n    });\n});\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((passport__WEBPACK_IMPORTED_MODULE_1___default()));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcGFzc3BvcnQtZ29vZ2xlLWF1dGgudHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBOEU7QUFDOUM7QUFFaEMsNkVBQTZFO0FBQzdFLE1BQU1HLFFBQVEsR0FBRyxDQUFDQyxJQUFhLEdBQUs7SUFDbEMsT0FBTyxJQUFJQyxPQUFPLENBQUMsQ0FBQ0MsT0FBTyxFQUFFQyxNQUFNLEdBQUs7UUFDdENELE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztLQUN2QixDQUFDLENBQUM7Q0FDSjtBQUVESixtREFBWSxDQUNWLElBQUlELDZEQUFjLENBQ2hCO0lBQ0VRLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNDLFNBQVM7SUFDL0JDLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNHLGFBQWE7SUFDdkNDLFdBQVcsRUFBRSw2QkFBNkI7Q0FDM0MsRUFDRCxPQUFPQyxZQUFZLEVBQUVDLGFBQWEsRUFBRUMsT0FBTyxFQUFFQyxFQUFPLEdBQUs7SUFDdkQsSUFBSTtRQUNGLE1BQU1oQixRQUFRLENBQUNlLE9BQU8sQ0FBQyxDQUFDO1FBQ3hCLE9BQU9DLEVBQUUsQ0FBQyxJQUFJLEVBQUVELE9BQU8sQ0FBQyxDQUFDO0tBQzFCLENBQUMsT0FBT0UsQ0FBQyxFQUFPO1FBQ2YsTUFBTSxJQUFJQyxLQUFLLENBQUNELENBQUMsQ0FBQyxDQUFDO0tBQ3BCO0NBQ0YsQ0FDRixDQUNGLENBQUM7QUFFRmxCLDZEQUFzQixDQUFDLENBQUNFLElBQUksRUFBRWUsRUFBRSxHQUFLO0lBQ25DVCxPQUFPLENBQUNhLFFBQVEsQ0FBQyxXQUFZO1FBQzNCLE9BQU9KLEVBQUUsQ0FBQyxJQUFJLEVBQUVmLElBQUksQ0FBQyxDQUFDO0tBQ3ZCLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQztBQUVIRiwrREFBd0IsQ0FBQyxTQUN2QkUsSUFBUyxFQUNUZSxFQUFrQyxFQUNsQztJQUNBVCxPQUFPLENBQUNhLFFBQVEsQ0FBQyxXQUFZO1FBQzNCLE9BQU9KLEVBQUUsQ0FBQyxJQUFJLEVBQUVmLElBQUksQ0FBQyxDQUFDO0tBQ3ZCLENBQUMsQ0FBQztDQUNKLENBQUMsQ0FBQztBQUVILGlFQUFlRixpREFBUSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcGktZXhhbXBsZS8uL2xpYi9wYXNzcG9ydC1nb29nbGUtYXV0aC50cz9mODEyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByb2ZpbGUsIFN0cmF0ZWd5IGFzIEdvb2dsZVN0cmF0ZWd5IH0gZnJvbSBcInBhc3Nwb3J0LWdvb2dsZS1vYXV0aDIwXCI7XG5pbXBvcnQgcGFzc3BvcnQgZnJvbSBcInBhc3Nwb3J0XCI7XG5cbi8vIGxvZ2ljIHRvIHNhdmUgeW91ciB1c2VyIG9yIGNoZWNrIGlmIHVzZXIgZXhpc3RzIGluIHlvdXIgcmVjb3JkIHRvIHByb2NlZWQuXG5jb25zdCBzYXZlVXNlciA9ICh1c2VyOiBQcm9maWxlKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgcmVzb2x2ZShcIlN1Y2Nlc3NmdWxcIik7XG4gIH0pO1xufTtcblxucGFzc3BvcnQudXNlKFxuICBuZXcgR29vZ2xlU3RyYXRlZ3koXG4gICAge1xuICAgICAgY2xpZW50SUQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCBhcyBzdHJpbmcsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdPT0dMRV9TRUNSRVQgYXMgc3RyaW5nLFxuICAgICAgY2FsbGJhY2tVUkw6IFwiL2FwaS9vYXV0aDIvcmVkaXJlY3QvZ29vZ2xlXCIsIC8vIGNhbGxiYWNrIHVybCBvbiBvdXIgYXBwIHRvIHZlcmlmeSBhdXRoZW50aWNhdGlvbi5cbiAgICB9LFxuICAgIGFzeW5jIChfYWNjZXNzVG9rZW4sIF9yZWZyZXNoVG9rZW4sIHByb2ZpbGUsIGNiOiBhbnkpID0+IHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHNhdmVVc2VyKHByb2ZpbGUpO1xuICAgICAgICByZXR1cm4gY2IobnVsbCwgcHJvZmlsZSk7XG4gICAgICB9IGNhdGNoIChlOiBhbnkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGUpO1xuICAgICAgfVxuICAgIH1cbiAgKVxuKTtcblxucGFzc3BvcnQuc2VyaWFsaXplVXNlcigodXNlciwgY2IpID0+IHtcbiAgcHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNiKG51bGwsIHVzZXIpO1xuICB9KTtcbn0pO1xuXG5wYXNzcG9ydC5kZXNlcmlhbGl6ZVVzZXIoZnVuY3Rpb24gKFxuICB1c2VyOiBhbnksXG4gIGNiOiAoYXJnMDogbnVsbCwgYXJnMTogYW55KSA9PiBhbnlcbikge1xuICBwcm9jZXNzLm5leHRUaWNrKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2IobnVsbCwgdXNlcik7XG4gIH0pO1xufSk7XG5cbmV4cG9ydCBkZWZhdWx0IHBhc3Nwb3J0OyJdLCJuYW1lcyI6WyJTdHJhdGVneSIsIkdvb2dsZVN0cmF0ZWd5IiwicGFzc3BvcnQiLCJzYXZlVXNlciIsInVzZXIiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInVzZSIsImNsaWVudElEIiwicHJvY2VzcyIsImVudiIsIkdPT0dMRV9JRCIsImNsaWVudFNlY3JldCIsIkdPT0dMRV9TRUNSRVQiLCJjYWxsYmFja1VSTCIsIl9hY2Nlc3NUb2tlbiIsIl9yZWZyZXNoVG9rZW4iLCJwcm9maWxlIiwiY2IiLCJlIiwiRXJyb3IiLCJzZXJpYWxpemVVc2VyIiwibmV4dFRpY2siLCJkZXNlcmlhbGl6ZVVzZXIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./lib/passport-google-auth.ts\n");

/***/ }),

/***/ "(api)/./pages/api/login.ts":
/*!****************************!*\
  !*** ./pages/api/login.ts ***!
  \****************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {\n__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _lib_passport_google_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/passport-google-auth */ \"(api)/./lib/passport-google-auth.ts\");\n/* harmony import */ var next_connect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-connect */ \"next-connect\");\nvar __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([next_connect__WEBPACK_IMPORTED_MODULE_1__]);\nnext_connect__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_connect__WEBPACK_IMPORTED_MODULE_1__[\"default\"])().use(_lib_passport_google_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"].initialize()).get(_lib_passport_google_auth__WEBPACK_IMPORTED_MODULE_0__[\"default\"].authenticate(\"google\", {\n    scope: [\n        \"profile\",\n        \"email\"\n    ]\n})));\n\n__webpack_async_result__();\n} catch(e) { __webpack_async_result__(e); } });//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvbG9naW4udHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQXNEO0FBQ2Y7QUFFdkMsaUVBQWVDLHdEQUFXLEVBQUUsQ0FDekJDLEdBQUcsQ0FBQ0YsNEVBQW1CLEVBQUUsQ0FBQyxDQUMxQkksR0FBRyxDQUNGSiw4RUFBcUIsQ0FBQyxRQUFRLEVBQUU7SUFDOUJNLEtBQUssRUFBRTtRQUFDLFNBQVM7UUFBRSxPQUFPO0tBQUM7Q0FDNUIsQ0FBQyxDQUNILEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LWFwaS1leGFtcGxlLy4vcGFnZXMvYXBpL2xvZ2luLnRzP2MxMjEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHBhc3Nwb3J0IGZyb20gXCIuLi8uLi9saWIvcGFzc3BvcnQtZ29vZ2xlLWF1dGhcIjtcbmltcG9ydCBuZXh0Q29ubmVjdCBmcm9tIFwibmV4dC1jb25uZWN0XCI7XG5cbmV4cG9ydCBkZWZhdWx0IG5leHRDb25uZWN0KClcbiAgLnVzZShwYXNzcG9ydC5pbml0aWFsaXplKCkpXG4gIC5nZXQoXG4gICAgcGFzc3BvcnQuYXV0aGVudGljYXRlKFwiZ29vZ2xlXCIsIHtcbiAgICAgIHNjb3BlOiBbXCJwcm9maWxlXCIsIFwiZW1haWxcIl0sXG4gICAgfSlcbiAgKTsiXSwibmFtZXMiOlsicGFzc3BvcnQiLCJuZXh0Q29ubmVjdCIsInVzZSIsImluaXRpYWxpemUiLCJnZXQiLCJhdXRoZW50aWNhdGUiLCJzY29wZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./pages/api/login.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/login.ts"));
module.exports = __webpack_exports__;

})();