"use strict";
exports.id = 229;
exports.ids = [229];
exports.modules = {

/***/ 8229:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ applyRateLimit)
/* harmony export */ });
/* unused harmony export getRateLimitMiddlewares */
/* harmony import */ var express_rate_limit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3564);
/* harmony import */ var express_slow_down__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3554);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([express_rate_limit__WEBPACK_IMPORTED_MODULE_0__, express_slow_down__WEBPACK_IMPORTED_MODULE_1__]);
([express_rate_limit__WEBPACK_IMPORTED_MODULE_0__, express_slow_down__WEBPACK_IMPORTED_MODULE_1__] = __webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__);


const applyMiddleware = (middleware)=>(request, response)=>new Promise((resolve, reject)=>{
            middleware(request, response, (result)=>result instanceof Error ? reject(result) : resolve(result));
        });
const getIP = (request)=>request.ip || request.headers["x-forwarded-for"] || request.headers["x-real-ip"] || request.connection.remoteAddress;
const getRateLimitMiddlewares = ({ limit = 10, windowMs = 60 * 1000, delayAfter = Math.round(10 / 2), delayMs = ()=>500 } = {})=>[
        (0,express_slow_down__WEBPACK_IMPORTED_MODULE_1__["default"])({
            keyGenerator: getIP,
            windowMs,
            delayAfter,
            delayMs
        }),
        (0,express_rate_limit__WEBPACK_IMPORTED_MODULE_0__["default"])({
            keyGenerator: getIP,
            windowMs,
            max: limit
        })
    ];
const middlewares = getRateLimitMiddlewares();
const applyRateLimit = async (request, response, next)=>{
    await Promise.all(middlewares.map(applyMiddleware).map((middleware)=>middleware(request, response)));
    next();
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;