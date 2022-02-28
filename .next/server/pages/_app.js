"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 3064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": () => (/* binding */ trpc),
/* harmony export */   "l": () => (/* binding */ transformer)
/* harmony export */ });
/* harmony import */ var _trpc_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1782);
/* harmony import */ var _trpc_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trpc_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(72);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_1__);


const trpc = (0,_trpc_react__WEBPACK_IMPORTED_MODULE_0__.createReactQueryHooks)();
const transformer = (superjson__WEBPACK_IMPORTED_MODULE_1___default());


/***/ }),

/***/ 2948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./lib/trpc.ts
var trpc = __webpack_require__(3064);
;// CONCATENATED MODULE: external "@trpc/client/links/httpBatchLink"
const httpBatchLink_namespaceObject = require("@trpc/client/links/httpBatchLink");
;// CONCATENATED MODULE: external "@trpc/client/links/loggerLink"
const loggerLink_namespaceObject = require("@trpc/client/links/loggerLink");
// EXTERNAL MODULE: ./node_modules/@trpc/next/dist/trpc-next.cjs.js
var trpc_next_cjs = __webpack_require__(1820);
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "react-hot-toast"
var external_react_hot_toast_ = __webpack_require__(8922);
;// CONCATENATED MODULE: ./pages/_app.tsx










function MyApp({ Component , pageProps: { session , ...pageProps }  }) {
    const getLayout = Component.getLayout ?? ((page)=>page
    );
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.SessionProvider, {
        session: session,
        refetchOnWindowFocus: false,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(external_next_themes_.ThemeProvider, {
            attribute: "class",
            disableTransitionOnChange: true,
            children: [
                Component.auth ? /*#__PURE__*/ jsx_runtime_.jsx(Auth, {
                    children: getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                        ...pageProps
                    }))
                }) : getLayout(/*#__PURE__*/ jsx_runtime_.jsx(Component, {
                    ...pageProps
                })),
                /*#__PURE__*/ jsx_runtime_.jsx(external_react_hot_toast_.Toaster, {})
            ]
        })
    }));
}
function Auth({ children  }) {
    const { data: session , status  } = (0,react_.useSession)();
    const isUser = !!session?.user;
    external_react_.useEffect(()=>{
        if (status === 'loading') return; // Do nothing while loading
        if (!isUser) (0,react_.signIn)() // If not authenticated, force log in
        ;
    }, [
        isUser,
        status
    ]);
    if (isUser) {
        return(/*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
            children: children
        }));
    }
    // Session is being fetched, or no user.
    // If no user, useEffect() will redirect.
    return null;
}
function getBaseUrl() {
    if (false) {}
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    return `http://localhost:${process.env.PORT ?? 3000}`;
}
/* harmony default export */ const _app = ((0,trpc_next_cjs.withTRPC)({
    config () {
        return {
            links: [
                (0,loggerLink_namespaceObject.loggerLink)({
                    enabled: (opts)=> false || opts.direction === 'down' && opts.result instanceof Error
                }),
                (0,httpBatchLink_namespaceObject.httpBatchLink)({
                    url: `${getBaseUrl()}/api/trpc`
                }), 
            ],
            transformer: trpc/* transformer */.l,
            queryClientConfig: {
                defaultOptions: {
                    queries: {
                        retry: (failureCount, error)=>{
                            const trcpErrorCode = error?.data?.code;
                            if (trcpErrorCode === 'NOT_FOUND') {
                                return false;
                            }
                            if (failureCount < 3) {
                                return true;
                            }
                            return false;
                        }
                    }
                }
            }
        };
    }
})(MyApp));


/***/ }),

/***/ 1782:
/***/ ((module) => {

module.exports = require("@trpc/react");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 1162:
/***/ ((module) => {

module.exports = require("next-themes");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 8922:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 1175:
/***/ ((module) => {

module.exports = require("react-query");

/***/ }),

/***/ 9717:
/***/ ((module) => {

module.exports = require("react-query/hydration");

/***/ }),

/***/ 7583:
/***/ ((module) => {

module.exports = require("react-ssr-prepass");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 1671:
/***/ ((module) => {

module.exports = require("regenerator-runtime");

/***/ }),

/***/ 72:
/***/ ((module) => {

module.exports = require("superjson");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [938], () => (__webpack_exec__(2948)));
module.exports = __webpack_exports__;

})();