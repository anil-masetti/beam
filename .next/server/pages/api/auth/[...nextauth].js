"use strict";
(() => {
var exports = {};
exports.id = 748;
exports.ids = [748];
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

/***/ 7459:
/***/ ((module) => {

module.exports = require("next-auth/providers/github");

/***/ }),

/***/ 5654:
/***/ ((module) => {

module.exports = require("next-auth/providers/okta");

/***/ }),

/***/ 1837:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _nextauth_)
});

// EXTERNAL MODULE: ./lib/auth.ts
var auth = __webpack_require__(4884);
;// CONCATENATED MODULE: external "next-auth"
const external_next_auth_namespaceObject = require("next-auth");
var external_next_auth_default = /*#__PURE__*/__webpack_require__.n(external_next_auth_namespaceObject);
;// CONCATENATED MODULE: ./pages/api/auth/[...nextauth].ts


/* harmony default export */ const _nextauth_ = (external_next_auth_default()(auth/* authOptions */.L));


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [884], () => (__webpack_exec__(1837)));
module.exports = __webpack_exports__;

})();