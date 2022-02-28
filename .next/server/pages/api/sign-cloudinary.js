"use strict";
(() => {
var exports = {};
exports.id = 294;
exports.ids = [294];
exports.modules = {

/***/ 2104:
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 9417:
/***/ ((module) => {

module.exports = require("envsafe");

/***/ }),

/***/ 2113:
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ 7459:
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ 5654:
/***/ ((module) => {

module.exports = require("next-auth/providers/okta");

/***/ }),

/***/ 7891:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ handler)
});

// EXTERNAL MODULE: ./env/server.ts + 1 modules
var server = __webpack_require__(3418);
// EXTERNAL MODULE: ./lib/auth.ts
var auth = __webpack_require__(4884);
;// CONCATENATED MODULE: external "cloudinary"
const external_cloudinary_namespaceObject = require("cloudinary");
// EXTERNAL MODULE: external "next-auth/next"
var next_ = __webpack_require__(2113);
;// CONCATENATED MODULE: ./pages/api/sign-cloudinary.ts




external_cloudinary_namespaceObject.v2.config({
    cloud_name: server/* serverEnv.CLOUDINARY_CLOUD_NAME */.N.CLOUDINARY_CLOUD_NAME,
    api_key: server/* serverEnv.CLOUDINARY_API_KEY */.N.CLOUDINARY_API_KEY,
    api_secret: server/* serverEnv.CLOUDINARY_API_SECRET */.N.CLOUDINARY_API_SECRET,
    secure: true
});
const cloudName = external_cloudinary_namespaceObject.v2.config().cloud_name;
const apiSecret = external_cloudinary_namespaceObject.v2.config().api_secret;
const apiKey = external_cloudinary_namespaceObject.v2.config().api_key;
const folder = 'beam';
async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', [
            'POST'
        ]);
        return res.status(405).json({
            message: `Method ${req.method} Not Allowed`
        });
    }
    const session = await (0,next_.getServerSession)({
        req,
        res
    }, auth/* authOptions */.L);
    if (!session) {
        return res.status(401).json({
            message: 'Unauthorized'
        });
    }
    const timestamp = Math.round(new Date().getTime() / 1000);
    const signature = external_cloudinary_namespaceObject.v2.utils.api_sign_request({
        timestamp,
        folder,
        image_metadata: true
    }, apiSecret);
    res.status(200).json({
        timestamp,
        folder,
        signature,
        apiKey,
        cloudName
    });
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [884], () => (__webpack_exec__(7891)));
module.exports = __webpack_exports__;

})();