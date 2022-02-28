"use strict";
exports.id = 153;
exports.ids = [153];
exports.modules = {

/***/ 4036:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "z": () => (/* binding */ getQueryPaginationInput),
/* harmony export */   "t": () => (/* binding */ Pagination)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_button_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5428);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4952);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




function getQueryPaginationInput(itemsPerPage, currentPageNumber) {
    return {
        take: itemsPerPage,
        skip: currentPageNumber === 1 ? undefined : itemsPerPage * (currentPageNumber - 1)
    };
}
function Pagination({ itemCount , itemsPerPage , currentPageNumber  }) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    const totalPages = Math.ceil(itemCount / itemsPerPage);
    if (totalPages <= 1) {
        return null;
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "flex justify-center gap-4 mt-12",
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_button_link__WEBPACK_IMPORTED_MODULE_1__/* .ButtonLink */ .Z, {
                href: {
                    pathname: router.pathname,
                    query: {
                        ...router.query,
                        page: currentPageNumber - 1
                    }
                },
                variant: "secondary",
                className: currentPageNumber === 1 ? 'pointer-events-none opacity-50' : '',
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "mr-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .ChevronLeftIcon */ .wy, {})
                    }),
                    "Newer posts"
                ]
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_components_button_link__WEBPACK_IMPORTED_MODULE_1__/* .ButtonLink */ .Z, {
                href: {
                    pathname: router.pathname,
                    query: {
                        ...router.query,
                        page: currentPageNumber + 1
                    }
                },
                variant: "secondary",
                className: currentPageNumber === totalPages ? 'pointer-events-none opacity-50' : '',
                children: [
                    "Older posts",
                    ' ',
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                        className: "ml-1",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .ChevronRightIcon */ .XC, {})
                    })
                ]
            })
        ]
    }));
}


/***/ }),

/***/ 8137:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "b": () => (/* binding */ PostSummarySkeleton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(370);


function PostSummarySkeleton({ hideAuthor  }) {
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "animate-pulse",
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-3/4 h-8 bg-gray-200 rounded dark:bg-gray-700"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (0,_lib_classnames__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .A)('flex items-center justify-between gap-4', hideAuthor ? 'mt-2' : 'mt-6'),
                children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                    className: "flex items-center gap-4",
                    children: [
                        !hideAuthor && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                            className: "w-12 h-12 bg-gray-200 rounded-full dark:bg-gray-700"
                        }),
                        /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                            className: "flex-1",
                            children: [
                                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-24 h-4 bg-gray-200 rounded dark:bg-gray-700"
                                }),
                                !hideAuthor && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                    className: "w-32 h-3 mt-2 bg-gray-200 rounded dark:bg-gray-700"
                                })
                            ]
                        })
                    ]
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "space-y-3 mt-7",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "grid grid-cols-3 gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-5 col-span-2 bg-gray-200 rounded dark:bg-gray-700"
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "h-5 col-span-1 bg-gray-200 rounded dark:bg-gray-700"
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-1/2 h-5 bg-gray-200 rounded dark:bg-gray-700"
                    })
                ]
            })
        ]
    }));
}


/***/ })

};
;