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
exports.id = "pages/_document";
exports.ids = ["pages/_document"];
exports.modules = {

/***/ "./helpers/env.ts":
/*!************************!*\
  !*** ./helpers/env.ts ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   AppEnvTypes: () => (/* binding */ AppEnvTypes),\n/* harmony export */   NodeEnvTypes: () => (/* binding */ NodeEnvTypes),\n/* harmony export */   areWeDebugging: () => (/* binding */ areWeDebugging),\n/* harmony export */   areWeDeveloping: () => (/* binding */ areWeDeveloping),\n/* harmony export */   areWeInProduction: () => (/* binding */ areWeInProduction),\n/* harmony export */   getAPIUrl: () => (/* binding */ getAPIUrl),\n/* harmony export */   getAppEnv: () => (/* binding */ getAppEnv),\n/* harmony export */   getNodeEnv: () => (/* binding */ getNodeEnv),\n/* harmony export */   isDevelopmentServer: () => (/* binding */ isDevelopmentServer),\n/* harmony export */   isProductionServer: () => (/* binding */ isProductionServer)\n/* harmony export */ });\n/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/type */ \"./helpers/type.ts\");\n\nvar NodeEnvTypes;\n(function(NodeEnvTypes) {\n    NodeEnvTypes[\"DEVELOPMENT\"] = \"development\";\n    NodeEnvTypes[\"PRODUCTION\"] = \"production\";\n})(NodeEnvTypes || (NodeEnvTypes = {}));\nvar AppEnvTypes;\n(function(AppEnvTypes) {\n    AppEnvTypes[\"DEVELOPMENT\"] = \"dev\";\n    AppEnvTypes[\"PRODUCTION\"] = \"production\";\n})(AppEnvTypes || (AppEnvTypes = {}));\nconst getNodeEnv = ()=>\"development\";\nconst getAppEnv = ()=>process.env.APP_ENV;\nconst isDevelopmentServer = ()=>getNodeEnv() === \"development\";\nconst isProductionServer = ()=>getNodeEnv() === \"production\";\nconst areWeDebugging = ()=>(0,_type__WEBPACK_IMPORTED_MODULE_0__.isValidString)(process.env.DEBUG);\nconst areWeDeveloping = ()=>getAppEnv() === \"dev\";\nconst areWeInProduction = ()=>getAppEnv() === \"production\";\nconst getAPIUrl = ()=>`${process.env.NEXT_PUBLIC_BASE_PATH}/api`;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL2Vudi50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFzQzs7VUFFcEJDOzs7R0FBQUEsaUJBQUFBOztVQUtBQzs7O0dBQUFBLGdCQUFBQTtBQUtYLE1BQU1DLGFBQWEsSUFaMUIsY0FZNEU7QUFDckUsTUFBTUMsWUFBWSxJQUFjQyxRQUFRQyxHQUFHLENBQUNDLE9BQU8sQ0FBZTtBQUVsRSxNQUFNQyxzQkFBc0IsSUFBZUwsK0JBQXlDO0FBQ3BGLE1BQU1NLHFCQUFxQixJQUFlTiw4QkFBd0M7QUFFbEYsTUFBTU8saUJBQWlCLElBQWVWLG9EQUFhQSxDQUFDSyxRQUFRQyxHQUFHLENBQUNLLEtBQUssRUFBQztBQUN0RSxNQUFNQyxrQkFBa0IsSUFBZVIsc0JBQXVDO0FBQzlFLE1BQU1TLG9CQUFvQixJQUFlVCw2QkFBc0M7QUFFL0UsTUFBTVUsWUFBWSxJQUFjLENBQUMsRUFBRVQsUUFBUUMsR0FBRyxDQUFDUyxxQkFBcUIsQ0FBQyxJQUFJLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9jdi8uL2hlbHBlcnMvZW52LnRzP2Y3MWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaXNWYWxpZFN0cmluZyB9IGZyb20gJ0AvdHlwZSdcblxuZXhwb3J0IGNvbnN0IGVudW0gTm9kZUVudlR5cGVzIHtcbiAgREVWRUxPUE1FTlQgPSAnZGV2ZWxvcG1lbnQnLFxuICBQUk9EVUNUSU9OID0gJ3Byb2R1Y3Rpb24nLFxufVxuXG5leHBvcnQgY29uc3QgZW51bSBBcHBFbnZUeXBlcyB7XG4gIERFVkVMT1BNRU5UID0gJ2RldicsXG4gIFBST0RVQ1RJT04gPSAncHJvZHVjdGlvbicsXG59XG5cbmV4cG9ydCBjb25zdCBnZXROb2RlRW52ID0gKCk6IHN0cmluZyA9PiBwcm9jZXNzLmVudi5OT0RFX0VOViBhcyBOb2RlRW52VHlwZXNcbmV4cG9ydCBjb25zdCBnZXRBcHBFbnYgPSAoKTogc3RyaW5nID0+IHByb2Nlc3MuZW52LkFQUF9FTlYgYXMgQXBwRW52VHlwZXNcblxuZXhwb3J0IGNvbnN0IGlzRGV2ZWxvcG1lbnRTZXJ2ZXIgPSAoKTogYm9vbGVhbiA9PiBnZXROb2RlRW52KCkgPT09IE5vZGVFbnZUeXBlcy5ERVZFTE9QTUVOVFxuZXhwb3J0IGNvbnN0IGlzUHJvZHVjdGlvblNlcnZlciA9ICgpOiBib29sZWFuID0+IGdldE5vZGVFbnYoKSA9PT0gTm9kZUVudlR5cGVzLlBST0RVQ1RJT05cblxuZXhwb3J0IGNvbnN0IGFyZVdlRGVidWdnaW5nID0gKCk6IGJvb2xlYW4gPT4gaXNWYWxpZFN0cmluZyhwcm9jZXNzLmVudi5ERUJVRylcbmV4cG9ydCBjb25zdCBhcmVXZURldmVsb3BpbmcgPSAoKTogYm9vbGVhbiA9PiBnZXRBcHBFbnYoKSA9PT0gQXBwRW52VHlwZXMuREVWRUxPUE1FTlRcbmV4cG9ydCBjb25zdCBhcmVXZUluUHJvZHVjdGlvbiA9ICgpOiBib29sZWFuID0+IGdldEFwcEVudigpID09PSBBcHBFbnZUeXBlcy5QUk9EVUNUSU9OXG5cbmV4cG9ydCBjb25zdCBnZXRBUElVcmwgPSAoKTogc3RyaW5nID0+IGAke3Byb2Nlc3MuZW52Lk5FWFRfUFVCTElDX0JBU0VfUEFUSH0vYXBpYFxuIl0sIm5hbWVzIjpbImlzVmFsaWRTdHJpbmciLCJOb2RlRW52VHlwZXMiLCJBcHBFbnZUeXBlcyIsImdldE5vZGVFbnYiLCJnZXRBcHBFbnYiLCJwcm9jZXNzIiwiZW52IiwiQVBQX0VOViIsImlzRGV2ZWxvcG1lbnRTZXJ2ZXIiLCJpc1Byb2R1Y3Rpb25TZXJ2ZXIiLCJhcmVXZURlYnVnZ2luZyIsIkRFQlVHIiwiYXJlV2VEZXZlbG9waW5nIiwiYXJlV2VJblByb2R1Y3Rpb24iLCJnZXRBUElVcmwiLCJORVhUX1BVQkxJQ19CQVNFX1BBVEgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/env.ts\n");

/***/ }),

/***/ "./helpers/string.ts":
/*!***************************!*\
  !*** ./helpers/string.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   toBase64: () => (/* binding */ toBase64),\n/* harmony export */   trim: () => (/* binding */ trim)\n/* harmony export */ });\nconst trim = (str = \"\")=>`${str}`.trim().replace(/\\s{2,}/g, \" \");\nconst toBase64 = (str)=> true ? Buffer.from(str).toString(\"base64\") : 0;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9oZWxwZXJzL3N0cmluZy50cyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPLE1BQU1BLE9BQU8sQ0FBQ0MsTUFBYyxFQUFFLEdBQ25DLENBQUMsRUFBRUEsSUFBSSxDQUFDLENBQUNELElBQUksR0FBR0UsT0FBTyxDQUFDLFdBQVcsS0FBSTtBQUVsQyxNQUFNQyxXQUFXLENBQUNGLE1BQ3ZCLEtBQWtCLEdBQ2RHLE9BQU9DLElBQUksQ0FBQ0osS0FBS0ssUUFBUSxDQUFDLFlBQzFCQyxDQUFnQk4sQ0FBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2N2Ly4vaGVscGVycy9zdHJpbmcudHM/ZDA2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgdHJpbSA9IChzdHI6IHN0cmluZyA9ICcnKSA9PlxuICBgJHtzdHJ9YC50cmltKCkucmVwbGFjZSgvXFxzezIsfS9nLCAnICcpXG5cbmV4cG9ydCBjb25zdCB0b0Jhc2U2NCA9IChzdHI6IHN0cmluZykgPT5cbiAgdHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCdcbiAgICA/IEJ1ZmZlci5mcm9tKHN0cikudG9TdHJpbmcoJ2Jhc2U2NCcpXG4gICAgOiB3aW5kb3cuYnRvYShzdHIpXG4iXSwibmFtZXMiOlsidHJpbSIsInN0ciIsInJlcGxhY2UiLCJ0b0Jhc2U2NCIsIkJ1ZmZlciIsImZyb20iLCJ0b1N0cmluZyIsIndpbmRvdyIsImJ0b2EiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./helpers/string.ts\n");

/***/ }),

/***/ "./helpers/type.ts":
/*!*************************!*\
  !*** ./helpers/type.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   asArray: () => (/* binding */ asArray),\n/* harmony export */   asFloat: () => (/* binding */ asFloat),\n/* harmony export */   asInteger: () => (/* binding */ asInteger),\n/* harmony export */   getTypeOf: () => (/* binding */ getTypeOf),\n/* harmony export */   isArray: () => (/* binding */ isArray),\n/* harmony export */   isBoolean: () => (/* binding */ isBoolean),\n/* harmony export */   isCollection: () => (/* binding */ isCollection),\n/* harmony export */   isDate: () => (/* binding */ isDate),\n/* harmony export */   isDefined: () => (/* binding */ isDefined),\n/* harmony export */   isEmptyObject: () => (/* binding */ isEmptyObject),\n/* harmony export */   isFloat: () => (/* binding */ isFloat),\n/* harmony export */   isFunction: () => (/* binding */ isFunction),\n/* harmony export */   isInteger: () => (/* binding */ isInteger),\n/* harmony export */   isNotNull: () => (/* binding */ isNotNull),\n/* harmony export */   isNull: () => (/* binding */ isNull),\n/* harmony export */   isNumber: () => (/* binding */ isNumber),\n/* harmony export */   isObject: () => (/* binding */ isObject),\n/* harmony export */   isPositiveFloat: () => (/* binding */ isPositiveFloat),\n/* harmony export */   isPositiveInteger: () => (/* binding */ isPositiveInteger),\n/* harmony export */   isPositiveNumber: () => (/* binding */ isPositiveNumber),\n/* harmony export */   isString: () => (/* binding */ isString),\n/* harmony export */   isStringifiedInteger: () => (/* binding */ isStringifiedInteger),\n/* harmony export */   isURL: () => (/* binding */ isURL),\n/* harmony export */   isUndefined: () => (/* binding */ isUndefined),\n/* harmony export */   isValidString: () => (/* binding */ isValidString)\n/* harmony export */ });\n/* harmony import */ var _string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/string */ \"./helpers/string.ts\");\n\nconst isDefined = (entity)=>entity !== undefined;\nconst isUndefined = (entity)=>!isDefined(entity);\nconst isNull = (entity)=>entity === null;\nconst isNotNull = (entity)=>!isNull(entity);\nconst isBoolean = (entity)=>typeof entity === \"boolean\";\nconst isNumber = (entity)=>typeof entity === \"number\";\nconst isString = (entity)=>typeof entity === \"string\";\nconst isArray = (entity)=>Array.isArray(entity);\nconst isObject = (entity)=>isNotNull(entity) && !isArray(entity) && typeof entity === \"object\";\nconst isCollection = (entity)=>isArray(entity) && entity.some((element)=>isObject(element));\nconst isFunction = (entity)=>typeof entity === \"function\";\nconst isDate = (entity)=>entity instanceof Date;\nconst isPositiveNumber = (entity)=>isNumber(entity) && entity > 0;\nconst isInteger = (entity)=>Number.isInteger(entity);\nconst isPositiveInteger = (entity)=>isInteger(entity) && entity > 0;\nconst isFloat = (entity)=>isNumber(entity) && !isInteger(entity);\nconst isPositiveFloat = (entity)=>isFloat(entity) && entity > 0;\nconst isValidString = (entity)=>isString(entity) && (0,_string__WEBPACK_IMPORTED_MODULE_0__.trim)(entity).length > 0;\nconst isEmptyObject = (entity)=>Object.keys(entity).length === 0;\nconst isURL = (url)=>{\n    try {\n        return isString(url) && Boolean(new URL(url));\n    } catch (error) {\n        return false;\n    }\n};\nconst asInteger = (entity, radix = 10)=>parseInt(`${entity}`, radix);\nconst asFloat = (entity)=>parseFloat(`${entity}`);\nconst asArray = (entity, validator)=>{\n    if (isArray(entity)) {\n        if (!validator) {\n            return entity;\n        }\n        return entity.filter(validator);\n    }\n    if (!validator || validator(entity)) {\n        return [\n            entity\n        ];\n    }\n    return [];\n};\nconst isStringifiedInteger = (entity)=>{\n    const parsed = asInteger(entity);\n    // eslint-disable-next-line eqeqeq\n    return isInteger(parsed) && parsed == entity;\n};\nconst getTypeOf = (entity)=>{\n    if (isArray(entity)) {\n        return entity.length === 0 || !isObject(entity[0]) ? \"array\" : \"collection\";\n    }\n    return typeof entity;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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d0IsTUFBTSxLQUFLLEtBQUssQ0FBQ2QsU0FBU1YsTUFBTSxDQUFDLEVBQUUsSUFDN0MsVUFDQTtJQUNOO0lBQ0EsT0FBTyxPQUFPQTtBQUNoQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vY3YvLi9oZWxwZXJzL3R5cGUudHM/ZTFkNSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0cmltIH0gZnJvbSAnQC9zdHJpbmcnXG5cbmV4cG9ydCBjb25zdCBpc0RlZmluZWQgPSAoZW50aXR5OiBhbnkpID0+IGVudGl0eSAhPT0gdW5kZWZpbmVkXG5leHBvcnQgY29uc3QgaXNVbmRlZmluZWQgPSAoZW50aXR5OiBhbnkpOiBlbnRpdHkgaXMgdW5kZWZpbmVkID0+ICFpc0RlZmluZWQoZW50aXR5KVxuZXhwb3J0IGNvbnN0IGlzTnVsbCA9IChlbnRpdHk6IGFueSk6IGVudGl0eSBpcyBudWxsID0+IGVudGl0eSA9PT0gbnVsbFxuZXhwb3J0IGNvbnN0IGlzTm90TnVsbCA9IChlbnRpdHk6IGFueSkgPT4gIWlzTnVsbChlbnRpdHkpXG5leHBvcnQgY29uc3QgaXNCb29sZWFuID0gKGVudGl0eTogYW55KTogZW50aXR5IGlzIGJvb2xlYW4gPT4gdHlwZW9mIGVudGl0eSA9PT0gJ2Jvb2xlYW4nXG5leHBvcnQgY29uc3QgaXNOdW1iZXIgPSAoZW50aXR5OiBhbnkpOiBlbnRpdHkgaXMgbnVtYmVyID0+IHR5cGVvZiBlbnRpdHkgPT09ICdudW1iZXInXG5leHBvcnQgY29uc3QgaXNTdHJpbmcgPSAoZW50aXR5OiBhbnkpOiBlbnRpdHkgaXMgc3RyaW5nID0+IHR5cGVvZiBlbnRpdHkgPT09ICdzdHJpbmcnXG5leHBvcnQgY29uc3QgaXNBcnJheSA9IDxUPihlbnRpdHk6IGFueSk6IGVudGl0eSBpcyBBcnJheTxUPiA9PiBBcnJheS5pc0FycmF5KGVudGl0eSlcbmV4cG9ydCBjb25zdCBpc09iamVjdCA9IChlbnRpdHk6IGFueSk6IGVudGl0eSBpcyBPYmplY3QgPT4gaXNOb3ROdWxsKGVudGl0eSkgJiYgIWlzQXJyYXkoZW50aXR5KSAmJiB0eXBlb2YgZW50aXR5ID09PSAnb2JqZWN0J1xuZXhwb3J0IGNvbnN0IGlzQ29sbGVjdGlvbiA9IChlbnRpdHk6IGFueSk6IGVudGl0eSBpcyBPYmplY3RbXSA9PiBpc0FycmF5KGVudGl0eSkgJiYgZW50aXR5LnNvbWUoZWxlbWVudCA9PiBpc09iamVjdChlbGVtZW50KSlcbmV4cG9ydCBjb25zdCBpc0Z1bmN0aW9uID0gKGVudGl0eTogYW55KTogZW50aXR5IGlzIEZ1bmN0aW9uID0+IHR5cGVvZiBlbnRpdHkgPT09ICdmdW5jdGlvbidcbmV4cG9ydCBjb25zdCBpc0RhdGUgPSAoZW50aXR5OiBhbnkpOiBlbnRpdHkgaXMgRGF0ZSA9PiBlbnRpdHkgaW5zdGFuY2VvZiBEYXRlXG5cbmV4cG9ydCBjb25zdCBpc1Bvc2l0aXZlTnVtYmVyID0gKGVudGl0eTogYW55KTogZW50aXR5IGlzIG51bWJlciA9PiBpc051bWJlcihlbnRpdHkpICYmIGVudGl0eSA+IDBcbmV4cG9ydCBjb25zdCBpc0ludGVnZXIgPSAoZW50aXR5OiBhbnkpOiBlbnRpdHkgaXMgbnVtYmVyID0+IE51bWJlci5pc0ludGVnZXIoZW50aXR5KVxuZXhwb3J0IGNvbnN0IGlzUG9zaXRpdmVJbnRlZ2VyID0gKGVudGl0eTogYW55KTogZW50aXR5IGlzIG51bWJlciA9PiBpc0ludGVnZXIoZW50aXR5KSAmJiBlbnRpdHkgPiAwXG5leHBvcnQgY29uc3QgaXNGbG9hdCA9IChlbnRpdHk6IGFueSk6IGVudGl0eSBpcyBudW1iZXIgPT4gaXNOdW1iZXIoZW50aXR5KSAmJiAhaXNJbnRlZ2VyKGVudGl0eSlcbmV4cG9ydCBjb25zdCBpc1Bvc2l0aXZlRmxvYXQgPSAoZW50aXR5OiBhbnkpOiBlbnRpdHkgaXMgbnVtYmVyID0+IGlzRmxvYXQoZW50aXR5KSAmJiBlbnRpdHkgPiAwXG5leHBvcnQgY29uc3QgaXNWYWxpZFN0cmluZyA9IChlbnRpdHk6IGFueSk6IGVudGl0eSBpcyBzdHJpbmcgPT4gaXNTdHJpbmcoZW50aXR5KSAmJiB0cmltKGVudGl0eSkubGVuZ3RoID4gMFxuZXhwb3J0IGNvbnN0IGlzRW1wdHlPYmplY3QgPSAoZW50aXR5OiBhbnkpID0+IE9iamVjdC5rZXlzKGVudGl0eSkubGVuZ3RoID09PSAwXG5cbmV4cG9ydCBjb25zdCBpc1VSTCA9ICh1cmw/OiBhbnkpID0+IHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXNTdHJpbmcodXJsKSAmJiBCb29sZWFuKG5ldyBVUkwodXJsKSlcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxufVxuXG5leHBvcnQgY29uc3QgYXNJbnRlZ2VyID0gKGVudGl0eTogYW55LCByYWRpeDogbnVtYmVyID0gMTApOiBudW1iZXIgPT5cbiAgcGFyc2VJbnQoYCR7ZW50aXR5fWAsIHJhZGl4KVxuXG5leHBvcnQgY29uc3QgYXNGbG9hdCA9IChlbnRpdHk6IGFueSk6IG51bWJlciA9PlxuICBwYXJzZUZsb2F0KGAke2VudGl0eX1gKVxuXG5leHBvcnQgY29uc3QgYXNBcnJheSA9IDxUPihlbnRpdHk6IGFueSwgdmFsaWRhdG9yPzogKGl0ZW06IGFueSkgPT4gYm9vbGVhbik6IEFycmF5PFQ+ID0+IHtcbiAgaWYgKGlzQXJyYXk8VD4oZW50aXR5KSkge1xuICAgIGlmICghdmFsaWRhdG9yKSB7XG4gICAgICByZXR1cm4gZW50aXR5XG4gICAgfVxuICAgIHJldHVybiBlbnRpdHkuZmlsdGVyKHZhbGlkYXRvcilcbiAgfVxuICBpZiAoIXZhbGlkYXRvciB8fCB2YWxpZGF0b3IoZW50aXR5KSkge1xuICAgIHJldHVybiBbZW50aXR5XVxuICB9XG5cbiAgcmV0dXJuIFtdXG59XG5cbmV4cG9ydCBjb25zdCBpc1N0cmluZ2lmaWVkSW50ZWdlciA9IChlbnRpdHk6IGFueSkgPT4ge1xuICBjb25zdCBwYXJzZWQgPSBhc0ludGVnZXIoZW50aXR5KVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZXFlcWVxXG4gIHJldHVybiBpc0ludGVnZXIocGFyc2VkKSAmJiBwYXJzZWQgPT0gZW50aXR5XG59XG5cbmV4cG9ydCBjb25zdCBnZXRUeXBlT2YgPSAoZW50aXR5OiBhbnkpID0+IHtcbiAgaWYgKGlzQXJyYXkoZW50aXR5KSkge1xuICAgIHJldHVybiBlbnRpdHkubGVuZ3RoID09PSAwIHx8ICFpc09iamVjdChlbnRpdHlbMF0pXG4gICAgICA/ICdhcnJheSdcbiAgICAgIDogJ2NvbGxlY3Rpb24nXG4gIH1cbiAgcmV0dXJuIHR5cGVvZiBlbnRpdHlcbn1cbiJdLCJuYW1lcyI6WyJ0cmltIiwiaXNEZWZpbmVkIiwiZW50aXR5IiwidW5kZWZpbmVkIiwiaXNVbmRlZmluZWQiLCJpc051bGwiLCJpc05vdE51bGwiLCJpc0Jvb2xlYW4iLCJpc051bWJlciIsImlzU3RyaW5nIiwiaXNBcnJheSIsIkFycmF5IiwiaXNPYmplY3QiLCJpc0NvbGxlY3Rpb24iLCJzb21lIiwiZWxlbWVudCIsImlzRnVuY3Rpb24iLCJpc0RhdGUiLCJEYXRlIiwiaXNQb3NpdGl2ZU51bWJlciIsImlzSW50ZWdlciIsIk51bWJlciIsImlzUG9zaXRpdmVJbnRlZ2VyIiwiaXNGbG9hdCIsImlzUG9zaXRpdmVGbG9hdCIsImlzVmFsaWRTdHJpbmciLCJsZW5ndGgiLCJpc0VtcHR5T2JqZWN0IiwiT2JqZWN0Iiwia2V5cyIsImlzVVJMIiwidXJsIiwiQm9vbGVhbiIsIlVSTCIsImVycm9yIiwiYXNJbnRlZ2VyIiwicmFkaXgiLCJwYXJzZUludCIsImFzRmxvYXQiLCJwYXJzZUZsb2F0IiwiYXNBcnJheSIsInZhbGlkYXRvciIsImZpbHRlciIsImlzU3RyaW5naWZpZWRJbnRlZ2VyIiwicGFyc2VkIiwiZ2V0VHlwZU9mIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./helpers/type.ts\n");

/***/ }),

/***/ "./pages/_document.tsx":
/*!*****************************!*\
  !*** ./pages/_document.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Document)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"clsx\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ \"./node_modules/next/document.js\");\n/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _env__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/env */ \"./helpers/env.ts\");\n\n\n\n\nfunction Document() {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Html, {\n        lang: \"en\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Head, {}, void 0, false, {\n                fileName: \"/Users/max/Documents/Dev/cv/pages/_document.tsx\",\n                lineNumber: 9,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n                className: clsx__WEBPACK_IMPORTED_MODULE_1___default()(\"h-screen\", (0,_env__WEBPACK_IMPORTED_MODULE_3__.areWeDeveloping)() && \"debug-screens\"),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.Main, {}, void 0, false, {\n                        fileName: \"/Users/max/Documents/Dev/cv/pages/_document.tsx\",\n                        lineNumber: 11,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_document__WEBPACK_IMPORTED_MODULE_2__.NextScript, {}, void 0, false, {\n                        fileName: \"/Users/max/Documents/Dev/cv/pages/_document.tsx\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/max/Documents/Dev/cv/pages/_document.tsx\",\n                lineNumber: 10,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/max/Documents/Dev/cv/pages/_document.tsx\",\n        lineNumber: 8,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fZG9jdW1lbnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF1QjtBQUNxQztBQUVyQjtBQUV4QixTQUFTTTtJQUN0QixxQkFDRSw4REFBQ0wsK0NBQUlBO1FBQUNNLE1BQUs7OzBCQUNULDhEQUFDTCwrQ0FBSUE7Ozs7OzBCQUNMLDhEQUFDTTtnQkFBS0MsV0FBV1QsMkNBQUlBLENBQUMsWUFBWUsscURBQWVBLE1BQU07O2tDQUNyRCw4REFBQ0YsK0NBQUlBOzs7OztrQ0FDTCw4REFBQ0MscURBQVVBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUluQiIsInNvdXJjZXMiOlsid2VicGFjazovL2N2Ly4vcGFnZXMvX2RvY3VtZW50LnRzeD9kMzdkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbHN4IGZyb20gJ2Nsc3gnXG5pbXBvcnQgeyBIdG1sLCBIZWFkLCBNYWluLCBOZXh0U2NyaXB0IH0gZnJvbSBcIm5leHQvZG9jdW1lbnRcIlxuXG5pbXBvcnQgeyBhcmVXZURldmVsb3BpbmcgfSBmcm9tICdAL2VudidcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRG9jdW1lbnQoKSB7XG4gIHJldHVybiAoXG4gICAgPEh0bWwgbGFuZz1cImVuXCI+XG4gICAgICA8SGVhZCAvPlxuICAgICAgPGJvZHkgY2xhc3NOYW1lPXtjbHN4KCdoLXNjcmVlbicsIGFyZVdlRGV2ZWxvcGluZygpICYmICdkZWJ1Zy1zY3JlZW5zJyl9PlxuICAgICAgICA8TWFpbiAvPlxuICAgICAgICA8TmV4dFNjcmlwdCAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvSHRtbD5cbiAgKVxufVxuIl0sIm5hbWVzIjpbImNsc3giLCJIdG1sIiwiSGVhZCIsIk1haW4iLCJOZXh0U2NyaXB0IiwiYXJlV2VEZXZlbG9waW5nIiwiRG9jdW1lbnQiLCJsYW5nIiwiYm9keSIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_document.tsx\n");

/***/ }),

/***/ "clsx":
/*!***********************!*\
  !*** external "clsx" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("clsx");

/***/ }),

/***/ "next/dist/compiled/next-server/pages.runtime.dev.js":
/*!**********************************************************************!*\
  !*** external "next/dist/compiled/next-server/pages.runtime.dev.js" ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = require("next/dist/compiled/next-server/pages.runtime.dev.js");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "react/jsx-runtime":
/*!************************************!*\
  !*** external "react/jsx-runtime" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/@swc"], () => (__webpack_exec__("./pages/_document.tsx")));
module.exports = __webpack_exports__;

})();