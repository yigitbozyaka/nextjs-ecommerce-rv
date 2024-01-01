"use strict";
(() => {
var exports = {};
exports.id = 325;
exports.ids = [325];
exports.modules = {

/***/ 730:
/***/ ((module) => {

module.exports = require("next/dist/server/api-utils/node.js");

/***/ }),

/***/ 3076:
/***/ ((module) => {

module.exports = require("next/dist/server/future/route-modules/route-module.js");

/***/ }),

/***/ 1351:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  config: () => (/* binding */ config),
  "default": () => (/* binding */ next_route_loaderkind_PAGES_API_page_2Fapi_2Fcreate_2Frv_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fcreate_2Frv_ts_middlewareConfigBase64_e30_3D_),
  routeModule: () => (/* binding */ routeModule)
});

// NAMESPACE OBJECT: ./src/pages/api/create/rv.ts
var rv_namespaceObject = {};
__webpack_require__.r(rv_namespaceObject);
__webpack_require__.d(rv_namespaceObject, {
  "default": () => (handler)
});

// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-modules/pages-api/module.js
var pages_api_module = __webpack_require__(6429);
// EXTERNAL MODULE: ./node_modules/next/dist/server/future/route-kind.js
var route_kind = __webpack_require__(7153);
// EXTERNAL MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/helpers.js
var helpers = __webpack_require__(7305);
// EXTERNAL MODULE: ./src/libs/prismadb.ts + 1 modules
var prismadb = __webpack_require__(7442);
;// CONCATENATED MODULE: ./src/pages/api/create/rv.ts

async function handler(req, res) {
    if (req.method !== "POST") {
        res.status(405).json({
            success: false,
            message: "Method not allowed!"
        });
    }
    if (req.method === "POST") {
        const { price, year, make, model, type, status, length, fuelType, odometer, weight, sleeps, slideOuts, vin, imgCount, exteriorColour, description1, description2, description3, description4 } = req.body;
        const response = await prismadb/* default */.Z.rV.create({
            data: {
                price,
                year,
                make,
                model,
                type,
                status,
                length,
                fuelType,
                odometer,
                weight,
                sleeps,
                slideOuts,
                vin,
                imgCount,
                exteriorColour,
                description1,
                description2,
                description3,
                description4,
                slug: make.toLowerCase().replaceAll(" ", "-") + "-" + model.toLowerCase().replaceAll(" ", "-")
            }
        });
        const id = response.id;
        res.status(200).json({
            success: true,
            message: "RV created successfully!",
            id: id
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/next/dist/build/webpack/loaders/next-route-loader/index.js?kind=PAGES_API&page=%2Fapi%2Fcreate%2Frv&preferredRegion=&absolutePagePath=private-next-pages%2Fapi%2Fcreate%2Frv.ts&middlewareConfigBase64=e30%3D!
// @ts-ignore this need to be imported from next/dist to be external



const PagesAPIRouteModule = pages_api_module.PagesAPIRouteModule;
// Import the userland code.
// @ts-expect-error - replaced by webpack/turbopack loader

// Re-export the handler (should be the default export).
/* harmony default export */ const next_route_loaderkind_PAGES_API_page_2Fapi_2Fcreate_2Frv_preferredRegion_absolutePagePath_private_next_pages_2Fapi_2Fcreate_2Frv_ts_middlewareConfigBase64_e30_3D_ = ((0,helpers/* hoist */.l)(rv_namespaceObject, "default"));
// Re-export config.
const config = (0,helpers/* hoist */.l)(rv_namespaceObject, "config");
// Create and export the route module that will be consumed.
const routeModule = new PagesAPIRouteModule({
    definition: {
        kind: route_kind/* RouteKind */.x.PAGES_API,
        page: "/api/create/rv",
        pathname: "/api/create/rv",
        // The following aren't used in production.
        bundlePath: "",
        filename: ""
    },
    userland: rv_namespaceObject
});

//# sourceMappingURL=pages-api.js.map

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


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [172], () => (__webpack_exec__(1351)));
module.exports = __webpack_exports__;

})();