"use strict";
(() => {
var exports = {};
exports.id = 991;
exports.ids = [991];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 3564:
/***/ ((module) => {

module.exports = import("express-rate-limit");;

/***/ }),

/***/ 3554:
/***/ ((module) => {

module.exports = import("express-slow-down");;

/***/ }),

/***/ 655:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   config: () => (/* binding */ config),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   routeModule: () => (/* binding */ routeModule)
/* harmony export */ });
/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6429);
/* harmony import */ var next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7153);
/* harmony import */ var next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(7305);
/* harmony import */ var private_next_pages_api_admin_featured_rvs_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5453);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([private_next_pages_api_admin_featured_rvs_ts__WEBPACK_IMPORTED_MODULE_3__]);
private_next_pages_api_admin_featured_rvs_ts__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = next_dist_server_future_route_modules_pages_api_module__WEBPACK_IMPORTED_MODULE_0__.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_admin_featured_rvs_ts__WEBPACK_IMPORTED_MODULE_3__, "default"));
// Re-export config.
const config = (0,next_dist_build_webpack_loaders_next_route_loader_helpers__WEBPACK_IMPORTED_MODULE_2__/* .hoist */ .l)(private_next_pages_api_admin_featured_rvs_ts__WEBPACK_IMPORTED_MODULE_3__, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: next_dist_server_future_route_kind__WEBPACK_IMPORTED_MODULE_1__/* .RouteKind */ .x.PAGES_API,
        page: "/api/admin/featured-rvs",
        pathname: "/api/admin/featured-rvs",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: private_next_pages_api_admin_featured_rvs_ts__WEBPACK_IMPORTED_MODULE_3__
});

//# sourceMappingURL=pages-api.js.map
__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 7442:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ prismadb)
});

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./src/libs/prismadb.ts

let prisma;
if (true) {
    prisma = new client_namespaceObject.PrismaClient();
} else {}
/* harmony default export */ const prismadb = (prisma);


/***/ }),

/***/ 5453:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7442);
/* harmony import */ var _middlewares_rateLimit__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8229);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_middlewares_rateLimit__WEBPACK_IMPORTED_MODULE_1__]);
_middlewares_rateLimit__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];


async function handler(req, res) {
    if (req.method === "GET") {
        const rvs = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.featuredRVs.findMany({
            select: {
                id: true,
                rvId: true
            }
        });
        res.status(200).json({
            success: true,
            data: rvs
        });
    }
    if (req.method === "POST") {
        const { id, newId } = req.body;
        const rv = await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.featuredRVs.findUnique({
            where: {
                id: id
            }
        });
        try {
            if (rv) {
                await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.featuredRVs.update({
                    where: {
                        id: id
                    },
                    data: {
                        rvId: newId
                    }
                });
                await (0,_middlewares_rateLimit__WEBPACK_IMPORTED_MODULE_1__/* .applyRateLimit */ .I)(req, res, ()=>{
                    res.status(200).json({
                        success: true,
                        data: "Featured Rv updated successfully!"
                    });
                });
            } else {
                await _libs_prismadb__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z.featuredRVs.create({
                    data: {
                        rv: {
                            connect: {
                                id: id
                            }
                        }
                    }
                });
                await (0,_middlewares_rateLimit__WEBPACK_IMPORTED_MODULE_1__/* .applyRateLimit */ .I)(req, res, ()=>{
                    res.status(200).json({
                        success: true,
                        data: "Featured Heavy created successfully!"
                    });
                });
            }
        } catch (err) {
            console.error(err);
            await (0,_middlewares_rateLimit__WEBPACK_IMPORTED_MODULE_1__/* .applyRateLimit */ .I)(req, res, ()=>{
                res.status(500).json({
                    success: false,
                    data: "Internal Server Error"
                });
            });
        }
    }
}

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172,229], () => (__webpack_exec__(655)));
module.exports = __webpack_exports__;

})();