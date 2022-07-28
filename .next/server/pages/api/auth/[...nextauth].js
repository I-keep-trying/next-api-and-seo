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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth":
/*!****************************!*\
  !*** external "next-auth" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next-auth");

/***/ }),

/***/ "next-auth/providers/auth0":
/*!********************************************!*\
  !*** external "next-auth/providers/auth0" ***!
  \********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/auth0");

/***/ }),

/***/ "next-auth/providers/facebook":
/*!***********************************************!*\
  !*** external "next-auth/providers/facebook" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/facebook");

/***/ }),

/***/ "next-auth/providers/github":
/*!*********************************************!*\
  !*** external "next-auth/providers/github" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ "next-auth/providers/google":
/*!*********************************************!*\
  !*** external "next-auth/providers/google" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/google");

/***/ }),

/***/ "next-auth/providers/twitter":
/*!**********************************************!*\
  !*** external "next-auth/providers/twitter" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/twitter");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"authOptions\": () => (/* binding */ authOptions),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth */ \"next-auth\");\n/* harmony import */ var next_auth__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/google */ \"next-auth/providers/google\");\n/* harmony import */ var next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next-auth/providers/facebook */ \"next-auth/providers/facebook\");\n/* harmony import */ var next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next-auth/providers/github */ \"next-auth/providers/github\");\n/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-auth/providers/twitter */ \"next-auth/providers/twitter\");\n/* harmony import */ var next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-auth/providers/auth0 */ \"next-auth/providers/auth0\");\n/* harmony import */ var next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5__);\n\n\n\n\n\n\n// import AppleProvider from \"next-auth/providers/apple\"\n// import EmailProvider from \"next-auth/providers/email\"\n// For more information on each option (and a full list of options) go to\n// https://next-auth.js.org/configuration/options\nconst authOptions = {\n    // https://next-auth.js.org/configuration/providers/oauth\n    providers: [\n        /* EmailProvider({\n         server: process.env.EMAIL_SERVER,\n         from: process.env.EMAIL_FROM,\n       }),\n    // Temporarily removing the Apple provider from the demo site as the\n    // callback URL for it needs updating due to Vercel changing domains\n    Providers.Apple({\n      clientId: process.env.APPLE_ID,\n      clientSecret: {\n        appleId: process.env.APPLE_ID,\n        teamId: process.env.APPLE_TEAM_ID,\n        privateKey: process.env.APPLE_PRIVATE_KEY,\n        keyId: process.env.APPLE_KEY_ID,\n      },\n    }),\n    */ next_auth_providers_facebook__WEBPACK_IMPORTED_MODULE_2___default()({\n            clientId: process.env.FACEBOOK_ID,\n            clientSecret: process.env.FACEBOOK_SECRET\n        }),\n        next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default()({\n            clientId: process.env.GITHUB_ID,\n            clientSecret: process.env.GITHUB_SECRET\n        }),\n        next_auth_providers_google__WEBPACK_IMPORTED_MODULE_1___default()({\n            clientId: process.env.GOOGLE_ID,\n            clientSecret: process.env.GOOGLE_SECRET,\n            authorizationUrl: \"https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code\"\n        }),\n        next_auth_providers_twitter__WEBPACK_IMPORTED_MODULE_4___default()({\n            clientId: process.env.TWITTER_ID,\n            clientSecret: process.env.TWITTER_SECRET\n        }),\n        next_auth_providers_auth0__WEBPACK_IMPORTED_MODULE_5___default()({\n            clientId: process.env.AUTH0_ID,\n            clientSecret: process.env.AUTH0_SECRET,\n            issuer: process.env.AUTH0_ISSUER\n        }), \n    ],\n    theme: {\n        colorScheme: \"light\"\n    },\n    callbacks: {\n        async jwt ({ token  }) {\n            token.userRole = \"admin\";\n            return token;\n        }\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth__WEBPACK_IMPORTED_MODULE_0___default()(authOptions));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ0U7QUFDSTtBQUNKO0FBQ0U7QUFDSjtBQUNyRCx3REFBd0Q7QUFDeEQsd0RBQXdEO0FBRXhELHlFQUF5RTtBQUN6RSxpREFBaUQ7QUFDMUMsTUFBTU0sV0FBVyxHQUFvQjtJQUMxQyx5REFBeUQ7SUFDekRDLFNBQVMsRUFBRTtRQUNUOzs7Ozs7Ozs7Ozs7Ozs7TUFlRSxDQUNGTCxtRUFBZ0IsQ0FBQztZQUNmTSxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXO1lBQ2pDQyxZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDRyxlQUFlO1NBQzFDLENBQUM7UUFDRlYsaUVBQWMsQ0FBQztZQUNiSyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSSxTQUFTO1lBQy9CRixZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSyxhQUFhO1NBQ3hDLENBQUM7UUFDRmQsaUVBQWMsQ0FBQztZQUNiTyxRQUFRLEVBQUVDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTSxTQUFTO1lBQy9CSixZQUFZLEVBQUVILE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTyxhQUFhO1lBQ3ZDQyxnQkFBZ0IsRUFBRSxvR0FBb0c7U0FDdkgsQ0FBQztRQUNGZCxrRUFBZSxDQUFDO1lBQ2RJLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNTLFVBQVU7WUFDaENQLFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNVLGNBQWM7U0FDekMsQ0FBQztRQUNGZixnRUFBYSxDQUFDO1lBQ1pHLFFBQVEsRUFBRUMsT0FBTyxDQUFDQyxHQUFHLENBQUNXLFFBQVE7WUFDOUJULFlBQVksRUFBRUgsT0FBTyxDQUFDQyxHQUFHLENBQUNZLFlBQVk7WUFDdENDLE1BQU0sRUFBRWQsT0FBTyxDQUFDQyxHQUFHLENBQUNjLFlBQVk7U0FDakMsQ0FBQztLQUNIO0lBQ0RDLEtBQUssRUFBRTtRQUNMQyxXQUFXLEVBQUUsT0FBTztLQUNyQjtJQUNEQyxTQUFTLEVBQUU7UUFDVCxNQUFNQyxHQUFHLEVBQUMsRUFBRUMsS0FBSyxHQUFFLEVBQUU7WUFDbkJBLEtBQUssQ0FBQ0MsUUFBUSxHQUFHLE9BQU87WUFDeEIsT0FBT0QsS0FBSztTQUNiO0tBQ0Y7Q0FDRjtBQUVELGlFQUFlN0IsZ0RBQVEsQ0FBQ00sV0FBVyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4dC1hcGktZXhhbXBsZS8uL3BhZ2VzL2FwaS9hdXRoL1suLi5uZXh0YXV0aF0udHM/MmU4YiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTmV4dEF1dGgsIHsgTmV4dEF1dGhPcHRpb25zIH0gZnJvbSBcIm5leHQtYXV0aFwiXG5pbXBvcnQgR29vZ2xlUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvZ29vZ2xlXCJcbmltcG9ydCBGYWNlYm9va1Byb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2ZhY2Vib29rXCJcbmltcG9ydCBHaXRodWJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy9naXRodWJcIlxuaW1wb3J0IFR3aXR0ZXJQcm92aWRlciBmcm9tIFwibmV4dC1hdXRoL3Byb3ZpZGVycy90d2l0dGVyXCJcbmltcG9ydCBBdXRoMFByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2F1dGgwXCJcbi8vIGltcG9ydCBBcHBsZVByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2FwcGxlXCJcbi8vIGltcG9ydCBFbWFpbFByb3ZpZGVyIGZyb20gXCJuZXh0LWF1dGgvcHJvdmlkZXJzL2VtYWlsXCJcblxuLy8gRm9yIG1vcmUgaW5mb3JtYXRpb24gb24gZWFjaCBvcHRpb24gKGFuZCBhIGZ1bGwgbGlzdCBvZiBvcHRpb25zKSBnbyB0b1xuLy8gaHR0cHM6Ly9uZXh0LWF1dGguanMub3JnL2NvbmZpZ3VyYXRpb24vb3B0aW9uc1xuZXhwb3J0IGNvbnN0IGF1dGhPcHRpb25zOiBOZXh0QXV0aE9wdGlvbnMgPSB7XG4gIC8vIGh0dHBzOi8vbmV4dC1hdXRoLmpzLm9yZy9jb25maWd1cmF0aW9uL3Byb3ZpZGVycy9vYXV0aFxuICBwcm92aWRlcnM6IFtcbiAgICAvKiBFbWFpbFByb3ZpZGVyKHtcbiAgICAgICAgIHNlcnZlcjogcHJvY2Vzcy5lbnYuRU1BSUxfU0VSVkVSLFxuICAgICAgICAgZnJvbTogcHJvY2Vzcy5lbnYuRU1BSUxfRlJPTSxcbiAgICAgICB9KSxcbiAgICAvLyBUZW1wb3JhcmlseSByZW1vdmluZyB0aGUgQXBwbGUgcHJvdmlkZXIgZnJvbSB0aGUgZGVtbyBzaXRlIGFzIHRoZVxuICAgIC8vIGNhbGxiYWNrIFVSTCBmb3IgaXQgbmVlZHMgdXBkYXRpbmcgZHVlIHRvIFZlcmNlbCBjaGFuZ2luZyBkb21haW5zXG4gICAgUHJvdmlkZXJzLkFwcGxlKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5BUFBMRV9JRCxcbiAgICAgIGNsaWVudFNlY3JldDoge1xuICAgICAgICBhcHBsZUlkOiBwcm9jZXNzLmVudi5BUFBMRV9JRCxcbiAgICAgICAgdGVhbUlkOiBwcm9jZXNzLmVudi5BUFBMRV9URUFNX0lELFxuICAgICAgICBwcml2YXRlS2V5OiBwcm9jZXNzLmVudi5BUFBMRV9QUklWQVRFX0tFWSxcbiAgICAgICAga2V5SWQ6IHByb2Nlc3MuZW52LkFQUExFX0tFWV9JRCxcbiAgICAgIH0sXG4gICAgfSksXG4gICAgKi9cbiAgICBGYWNlYm9va1Byb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5GQUNFQk9PS19JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuRkFDRUJPT0tfU0VDUkVULFxuICAgIH0pLFxuICAgIEdpdGh1YlByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5HSVRIVUJfSUQsXG4gICAgICBjbGllbnRTZWNyZXQ6IHByb2Nlc3MuZW52LkdJVEhVQl9TRUNSRVQsXG4gICAgfSksXG4gICAgR29vZ2xlUHJvdmlkZXIoe1xuICAgICAgY2xpZW50SWQ6IHByb2Nlc3MuZW52LkdPT0dMRV9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuR09PR0xFX1NFQ1JFVCxcbiAgICAgIGF1dGhvcml6YXRpb25Vcmw6ICdodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20vby9vYXV0aDIvdjIvYXV0aD9wcm9tcHQ9Y29uc2VudCZhY2Nlc3NfdHlwZT1vZmZsaW5lJnJlc3BvbnNlX3R5cGU9Y29kZScsXG4gICAgfSksXG4gICAgVHdpdHRlclByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5UV0lUVEVSX0lELFxuICAgICAgY2xpZW50U2VjcmV0OiBwcm9jZXNzLmVudi5UV0lUVEVSX1NFQ1JFVCxcbiAgICB9KSxcbiAgICBBdXRoMFByb3ZpZGVyKHtcbiAgICAgIGNsaWVudElkOiBwcm9jZXNzLmVudi5BVVRIMF9JRCxcbiAgICAgIGNsaWVudFNlY3JldDogcHJvY2Vzcy5lbnYuQVVUSDBfU0VDUkVULFxuICAgICAgaXNzdWVyOiBwcm9jZXNzLmVudi5BVVRIMF9JU1NVRVIsXG4gICAgfSksXG4gIF0sXG4gIHRoZW1lOiB7XG4gICAgY29sb3JTY2hlbWU6IFwibGlnaHRcIixcbiAgfSxcbiAgY2FsbGJhY2tzOiB7XG4gICAgYXN5bmMgand0KHsgdG9rZW4gfSkge1xuICAgICAgdG9rZW4udXNlclJvbGUgPSBcImFkbWluXCJcbiAgICAgIHJldHVybiB0b2tlblxuICAgIH0sXG4gIH0sXG59XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKGF1dGhPcHRpb25zKSJdLCJuYW1lcyI6WyJOZXh0QXV0aCIsIkdvb2dsZVByb3ZpZGVyIiwiRmFjZWJvb2tQcm92aWRlciIsIkdpdGh1YlByb3ZpZGVyIiwiVHdpdHRlclByb3ZpZGVyIiwiQXV0aDBQcm92aWRlciIsImF1dGhPcHRpb25zIiwicHJvdmlkZXJzIiwiY2xpZW50SWQiLCJwcm9jZXNzIiwiZW52IiwiRkFDRUJPT0tfSUQiLCJjbGllbnRTZWNyZXQiLCJGQUNFQk9PS19TRUNSRVQiLCJHSVRIVUJfSUQiLCJHSVRIVUJfU0VDUkVUIiwiR09PR0xFX0lEIiwiR09PR0xFX1NFQ1JFVCIsImF1dGhvcml6YXRpb25VcmwiLCJUV0lUVEVSX0lEIiwiVFdJVFRFUl9TRUNSRVQiLCJBVVRIMF9JRCIsIkFVVEgwX1NFQ1JFVCIsImlzc3VlciIsIkFVVEgwX0lTU1VFUiIsInRoZW1lIiwiY29sb3JTY2hlbWUiLCJjYWxsYmFja3MiLCJqd3QiLCJ0b2tlbiIsInVzZXJSb2xlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();