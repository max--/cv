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

/***/ "./components/Tag.tsx":
/*!****************************!*\
  !*** ./components/Tag.tsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"./node_modules/clsx/dist/clsx.m.js\");\n\n\nconst Tag = (param)=>{\n    let { classes = \"\", color = \"blue\", children, ...props } = param;\n    let colorClasses = \"\";\n    switch(color){\n        case \"purple\":\n            colorClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"bg-purple-500 ring-purple-600\", \"hover:bg-purple-600\");\n            break;\n        case \"red\":\n            colorClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"bg-red-500 ring-red-600\", \"hover:bg-red-600\");\n            break;\n        case \"yellow\":\n            colorClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"bg-yellow-500 ring-yellow-600\", \"hover:bg-yellow-600\");\n            break;\n        case \"green\":\n            colorClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"bg-green-500 ring-green-600\", \"hover:bg-green-600\");\n            break;\n        case \"blue\":\n            colorClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"bg-blue-500 ring-blue-600\", \"hover:bg-blue-600\");\n            break;\n        case \"gray\":\n            colorClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"bg-gray-600 ring-gray-400\", \"hover:bg-black\");\n            break;\n        case \"black\":\n            colorClasses = (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"bg-black ring-gray-700\", \"hover:bg-gray-500\");\n            break;\n        default:\n            break;\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n        className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"my-1 px-2 py-1 rounded-md text-white cursor-default\", classes, colorClasses),\n        ...props,\n        children: children\n    }, void 0, false, {\n        fileName: \"/Users/max/Documents/Dev/cv/components/Tag.tsx\",\n        lineNumber: 74,\n        columnNumber: 5\n    }, undefined);\n};\n_c = Tag;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Tag);\nvar _c;\n$RefreshReg$(_c, \"Tag\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RhZy50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBdUI7QUFVdkIsTUFBTUMsTUFBTTtRQUFDLEVBQ1hDLFVBQVUsRUFBRSxFQUNaQyxRQUFRLE1BQU0sRUFDZEMsUUFBUSxFQUNSLEdBQUdDLE9BQ007SUFDVCxJQUFJQyxlQUFlO0lBQ25CLE9BQVFIO1FBRU4sS0FBSztZQUNIRyxlQUFlTixnREFBSUEsQ0FDakIsaUNBQ0E7WUFFRjtRQUVGLEtBQUs7WUFDSE0sZUFBZU4sZ0RBQUlBLENBQ2pCLDJCQUNBO1lBRUY7UUFFRixLQUFLO1lBQ0hNLGVBQWVOLGdEQUFJQSxDQUNqQixpQ0FDQTtZQUVGO1FBRUYsS0FBSztZQUNITSxlQUFlTixnREFBSUEsQ0FDakIsK0JBQ0E7WUFFRjtRQUVGLEtBQUs7WUFDSE0sZUFBZU4sZ0RBQUlBLENBQ2pCLDZCQUNBO1lBRUY7UUFFRixLQUFLO1lBQ0hNLGVBQWVOLGdEQUFJQSxDQUNqQiw2QkFDQTtZQUVGO1FBRUYsS0FBSztZQUNITSxlQUFlTixnREFBSUEsQ0FDakIsMEJBQ0E7WUFFRjtRQUVGO1lBQ0U7SUFDSjtJQUVBLHFCQUNFLDhEQUFDTztRQUNDQyxXQUFXUixnREFBSUEsQ0FDYix1REFDQUUsU0FDQUk7UUFFRCxHQUFHRCxLQUFLO2tCQUVSRDs7Ozs7O0FBR1A7S0ExRU1IO0FBNEVOLCtEQUFlQSxHQUFHQSxFQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVGFnLnRzeD9kMWU4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5pbXBvcnQgeyBBbGxIVE1MQXR0cmlidXRlcyB9IGZyb20gJ3JlYWN0J1xuXG5pbnRlcmZhY2UgVGFnUHJvcHMgZXh0ZW5kcyBBbGxIVE1MQXR0cmlidXRlczxIVE1MU3BhbkVsZW1lbnQ+IHtcbiAgY2xhc3Nlcz86IHN0cmluZ1xuICBjb2xvcj86IHN0cmluZ1xuICB0b25lPzogc3RyaW5nXG4gIGNoaWxkcmVuOiBzdHJpbmcgfCBKU1guRWxlbWVudFxufVxuXG5jb25zdCBUYWcgPSAoe1xuICBjbGFzc2VzID0gJycsXG4gIGNvbG9yID0gJ2JsdWUnLFxuICBjaGlsZHJlbixcbiAgLi4ucHJvcHNcbn06IFRhZ1Byb3BzKSA9PiB7XG4gIGxldCBjb2xvckNsYXNzZXMgPSAnJ1xuICBzd2l0Y2ggKGNvbG9yKSB7XG5cbiAgICBjYXNlICdwdXJwbGUnOlxuICAgICAgY29sb3JDbGFzc2VzID0gY2xzeChcbiAgICAgICAgJ2JnLXB1cnBsZS01MDAgcmluZy1wdXJwbGUtNjAwJyxcbiAgICAgICAgJ2hvdmVyOmJnLXB1cnBsZS02MDAnXG4gICAgICApXG4gICAgICBicmVha1xuXG4gICAgY2FzZSAncmVkJzpcbiAgICAgIGNvbG9yQ2xhc3NlcyA9IGNsc3goXG4gICAgICAgICdiZy1yZWQtNTAwIHJpbmctcmVkLTYwMCcsXG4gICAgICAgICdob3ZlcjpiZy1yZWQtNjAwJ1xuICAgICAgKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgJ3llbGxvdyc6XG4gICAgICBjb2xvckNsYXNzZXMgPSBjbHN4KFxuICAgICAgICAnYmcteWVsbG93LTUwMCByaW5nLXllbGxvdy02MDAnLFxuICAgICAgICAnaG92ZXI6YmcteWVsbG93LTYwMCdcbiAgICAgIClcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlICdncmVlbic6XG4gICAgICBjb2xvckNsYXNzZXMgPSBjbHN4KFxuICAgICAgICAnYmctZ3JlZW4tNTAwIHJpbmctZ3JlZW4tNjAwJyxcbiAgICAgICAgJ2hvdmVyOmJnLWdyZWVuLTYwMCdcbiAgICAgIClcbiAgICAgIGJyZWFrXG5cbiAgICBjYXNlICdibHVlJzpcbiAgICAgIGNvbG9yQ2xhc3NlcyA9IGNsc3goXG4gICAgICAgICdiZy1ibHVlLTUwMCByaW5nLWJsdWUtNjAwJyxcbiAgICAgICAgJ2hvdmVyOmJnLWJsdWUtNjAwJ1xuICAgICAgKVxuICAgICAgYnJlYWtcblxuICAgIGNhc2UgJ2dyYXknOlxuICAgICAgY29sb3JDbGFzc2VzID0gY2xzeChcbiAgICAgICAgJ2JnLWdyYXktNjAwIHJpbmctZ3JheS00MDAnLFxuICAgICAgICAnaG92ZXI6YmctYmxhY2snXG4gICAgICApXG4gICAgICBicmVha1xuXG4gICAgY2FzZSAnYmxhY2snOlxuICAgICAgY29sb3JDbGFzc2VzID0gY2xzeChcbiAgICAgICAgJ2JnLWJsYWNrIHJpbmctZ3JheS03MDAnLFxuICAgICAgICAnaG92ZXI6YmctZ3JheS01MDAnXG4gICAgICApXG4gICAgICBicmVha1xuXG4gICAgZGVmYXVsdDpcbiAgICAgIGJyZWFrXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxzcGFuXG4gICAgICBjbGFzc05hbWU9e2Nsc3goXG4gICAgICAgICdteS0xIHB4LTIgcHktMSByb3VuZGVkLW1kIHRleHQtd2hpdGUgY3Vyc29yLWRlZmF1bHQnLFxuICAgICAgICBjbGFzc2VzLFxuICAgICAgICBjb2xvckNsYXNzZXMsXG4gICAgICApfVxuICAgICAgey4uLnByb3BzfVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L3NwYW4+XG4gIClcbn1cblxuZXhwb3J0IGRlZmF1bHQgVGFnXG4iXSwibmFtZXMiOlsiY2xzeCIsIlRhZyIsImNsYXNzZXMiLCJjb2xvciIsImNoaWxkcmVuIiwicHJvcHMiLCJjb2xvckNsYXNzZXMiLCJzcGFuIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Tag.tsx\n"));

/***/ })

});