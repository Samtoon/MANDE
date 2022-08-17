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
exports.id = "pages/api/ping";
exports.ids = ["pages/api/ping"];
exports.modules = {

/***/ "pg":
/*!*********************!*\
  !*** external "pg" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("pg");

/***/ }),

/***/ "(api)/./src/pages/api/ping.tsx":
/*!********************************!*\
  !*** ./src/pages/api/ping.tsx ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _src_utils_database_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../../../src/utils/database/index */ \"(api)/./src/utils/database/index.js\");\n\n// eslint-disable-next-line import/no-anonymous-default-export\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n    try {\n        const response = await _src_utils_database_index__WEBPACK_IMPORTED_MODULE_0__.conn.query(`SELECT NOW();`);\n        res.status(200).json(`Conectado a la base de datos. ${response.rows[0].now}.`);\n    } catch (error) {\n        res.status(404).json(`La base de datos no responde.`);\n    }\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3BpbmcudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBRWdEO0FBRWhELDhEQUE4RDtBQUM5RCxpRUFBZSxPQUFPQyxHQUFtQixFQUFFQyxHQUFvQixHQUFLO0lBRWxFLElBQUk7UUFDRixNQUFNQyxRQUFRLEdBQUcsTUFBTUgsaUVBQVUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWxERSxHQUFHLENBQUNHLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsOEJBQThCLEVBQUVILFFBQVEsQ0FBQ0ksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7S0FFL0UsQ0FBQyxPQUFPQyxLQUFLLEVBQUU7UUFDZFAsR0FBRyxDQUFDRyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQyxDQUFDLDZCQUE2QixDQUFDLENBQUM7S0FDdEQ7Q0FDRiIsInNvdXJjZXMiOlsid2VicGFjazovL3BydWViYTEvLi9zcmMvcGFnZXMvYXBpL3BpbmcudHN4PzE1MDIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dEFwaVJlcXVlc3QsIE5leHRBcGlSZXNwb25zZSB9IGZyb20gJ25leHQnXG5cbmltcG9ydCB7IGNvbm4gfSBmcm9tICcvc3JjL3V0aWxzL2RhdGFiYXNlL2luZGV4J1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25vLWFub255bW91cy1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSA9PiB7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGNvbm4ucXVlcnkoYFNFTEVDVCBOT1coKTtgKVxuXG4gICAgcmVzLnN0YXR1cygyMDApLmpzb24oYENvbmVjdGFkbyBhIGxhIGJhc2UgZGUgZGF0b3MuICR7cmVzcG9uc2Uucm93c1swXS5ub3d9LmApXG5cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXMuc3RhdHVzKDQwNCkuanNvbihgTGEgYmFzZSBkZSBkYXRvcyBubyByZXNwb25kZS5gKVxuICB9XG59Il0sIm5hbWVzIjpbImNvbm4iLCJyZXEiLCJyZXMiLCJyZXNwb25zZSIsInF1ZXJ5Iiwic3RhdHVzIiwianNvbiIsInJvd3MiLCJub3ciLCJlcnJvciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/ping.tsx\n");

/***/ }),

/***/ "(api)/./src/utils/database/index.js":
/*!*************************************!*\
  !*** ./src/utils/database/index.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"conn\": () => (/* binding */ conn)\n/* harmony export */ });\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! pg */ \"pg\");\n/* harmony import */ var pg__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(pg__WEBPACK_IMPORTED_MODULE_0__);\n\nlet conn;\nif (!conn) {\n    conn = new pg__WEBPACK_IMPORTED_MODULE_0__.Pool({\n        user: \"iyhodmleuapojt\",\n        password: \"71ae51b3a9149e9cd5c264776a7d297733bfbe1033a8b4ec85d8ade486c8c72c\",\n        host: \"ec2-52-44-13-158.compute-1.amazonaws.com\",\n        port: 5432,\n        database: \"d3m3lc4m466r71\",\n        ssl: {\n            rejectUnauthorized: false\n        }\n    });\n}\nconsole.log(conn.query(\"SELECT NOW()\"));\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvdXRpbHMvZGF0YWJhc2UvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXlCO0FBRXpCLElBQUlDLElBQUk7QUFFUixJQUFJLENBQUNBLElBQUksRUFBRTtJQUNUQSxJQUFJLEdBQUcsSUFBSUQsb0NBQUksQ0FBQztRQUNkRSxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCQyxRQUFRLEVBQUUsa0VBQWtFO1FBQzVFQyxJQUFJLEVBQUUsMENBQTBDO1FBQ2hEQyxJQUFJLEVBQUUsSUFBSTtRQUNWQyxRQUFRLEVBQUUsZ0JBQWdCO1FBQzFCQyxHQUFHLEVBQUU7WUFDSEMsa0JBQWtCLEVBQUUsS0FBSztTQUMxQjtLQUNGLENBQUM7Q0FDSDtBQUVEQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ1QsSUFBSSxDQUFDVSxLQUFLLENBQUMsY0FBYyxDQUFDLENBQUM7QUFFeEIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9wcnVlYmExLy4vc3JjL3V0aWxzL2RhdGFiYXNlL2luZGV4LmpzP2IzZjQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUG9vbCB9IGZyb20gJ3BnJ1xyXG5cclxubGV0IGNvbm5cclxuXHJcbmlmICghY29ubikge1xyXG4gIGNvbm4gPSBuZXcgUG9vbCh7XHJcbiAgICB1c2VyOiAnaXlob2RtbGV1YXBvanQnLFxyXG4gICAgcGFzc3dvcmQ6ICc3MWFlNTFiM2E5MTQ5ZTljZDVjMjY0Nzc2YTdkMjk3NzMzYmZiZTEwMzNhOGI0ZWM4NWQ4YWRlNDg2YzhjNzJjJyxcclxuICAgIGhvc3Q6ICdlYzItNTItNDQtMTMtMTU4LmNvbXB1dGUtMS5hbWF6b25hd3MuY29tJyxcclxuICAgIHBvcnQ6IDU0MzIsXHJcbiAgICBkYXRhYmFzZTogJ2QzbTNsYzRtNDY2cjcxJyxcclxuICAgIHNzbDoge1xyXG4gICAgICByZWplY3RVbmF1dGhvcml6ZWQ6IGZhbHNlXHJcbiAgICB9XHJcbiAgfSlcclxufVxyXG5cclxuY29uc29sZS5sb2coY29ubi5xdWVyeSgnU0VMRUNUIE5PVygpJykpXHJcblxyXG5leHBvcnQgeyBjb25uIH0iXSwibmFtZXMiOlsiUG9vbCIsImNvbm4iLCJ1c2VyIiwicGFzc3dvcmQiLCJob3N0IiwicG9ydCIsImRhdGFiYXNlIiwic3NsIiwicmVqZWN0VW5hdXRob3JpemVkIiwiY29uc29sZSIsImxvZyIsInF1ZXJ5Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./src/utils/database/index.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/ping.tsx"));
module.exports = __webpack_exports__;

})();