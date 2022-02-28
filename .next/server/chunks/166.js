"use strict";
exports.id = 166;
exports.ids = [166];
exports.modules = {

/***/ 8166:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ PostForm)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2072);
/* harmony import */ var _components_button_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5428);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4952);
/* harmony import */ var _components_markdown_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1195);
/* harmony import */ var _components_text_field__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6498);
/* harmony import */ var _lib_form__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(6696);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_hook_form__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(5641);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_components_markdown_editor__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__]);
([_components_markdown_editor__WEBPACK_IMPORTED_MODULE_4__, react_hook_form__WEBPACK_IMPORTED_MODULE_8__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);









function PostForm({ defaultValues , isSubmitting , backTo , onSubmit  }) {
    const { control , register , formState , getValues , reset , handleSubmit  } = (0,react_hook_form__WEBPACK_IMPORTED_MODULE_8__.useForm)({
        defaultValues
    });
    (0,_lib_form__WEBPACK_IMPORTED_MODULE_6__/* .useLeaveConfirm */ .R)({
        formState
    });
    const { isSubmitSuccessful  } = formState;
    react__WEBPACK_IMPORTED_MODULE_7__.useEffect(()=>{
        if (isSubmitSuccessful) {
            reset(getValues());
        }
    }, [
        isSubmitSuccessful,
        reset,
        getValues
    ]);
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", {
        onSubmit: handleSubmit(onSubmit),
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_text_field__WEBPACK_IMPORTED_MODULE_5__/* .TextField */ .n, {
                ...register('title', {
                    required: true
                }),
                label: "Title",
                autoFocus: true,
                required: true,
                className: "text-lg font-semibold !py-1.5"
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "mt-6",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_hook_form__WEBPACK_IMPORTED_MODULE_8__.Controller, {
                    name: "content",
                    control: control,
                    rules: {
                        required: true
                    },
                    render: ({ field  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_markdown_editor__WEBPACK_IMPORTED_MODULE_4__/* .MarkdownEditor */ .c, {
                            label: "Post",
                            value: field.value,
                            onChange: field.onChange,
                            onTriggerSubmit: handleSubmit(onSubmit),
                            required: true
                        })
                })
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "flex items-center justify-between gap-4 mt-8",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex gap-4",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button__WEBPACK_IMPORTED_MODULE_1__/* .Button */ .z, {
                                type: "submit",
                                isLoading: isSubmitting,
                                loadingChildren: `${defaultValues ? 'Saving' : 'Publishing'}`,
                                children: defaultValues?.title ? 'Save' : 'Publish'
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_button_link__WEBPACK_IMPORTED_MODULE_2__/* .ButtonLink */ .Z, {
                                href: backTo,
                                variant: "secondary",
                                children: "Cancel"
                            })
                        ]
                    }),
                    !isSubmitting && /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("a", {
                        href: "https://docs.github.com/en/github/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax",
                        target: "_blank",
                        rel: "noreferrer",
                        className: "flex items-center gap-2 transition-colors text-secondary hover:text-blue",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_3__/* .MarkdownIcon */ .Bu, {}),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                className: "text-xs",
                                children: "Markdown supported"
                            })
                        ]
                    })
                ]
            })
        ]
    }));
}

});

/***/ }),

/***/ 6498:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "n": () => (/* binding */ TextField)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(370);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const TextField = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ label , id , name , type ='text' , className , ...rest }, forwardedRef)=>{
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                htmlFor: id || name,
                className: "block mb-2 font-semibold",
                children: label
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("input", {
                ...rest,
                ref: forwardedRef,
                id: id || name,
                name: name,
                type: type,
                className: (0,_lib_classnames__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .A)('block w-full py-1 rounded shadow-sm bg-secondary border-secondary focus-ring', className)
            })
        ]
    }));
});
TextField.displayName = 'TextField';


/***/ }),

/***/ 6696:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "R": () => (/* binding */ useLeaveConfirm)
/* harmony export */ });
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_beforeunload__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1734);
/* harmony import */ var react_beforeunload__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_beforeunload__WEBPACK_IMPORTED_MODULE_2__);



const defaultMessage = 'Are you sure to leave without saving?';
function useLeaveConfirm({ formState , message =defaultMessage  }) {
    const Router = (0,next_router__WEBPACK_IMPORTED_MODULE_0__.useRouter)();
    const { isDirty  } = formState;
    const onRouteChangeStart = react__WEBPACK_IMPORTED_MODULE_1__.useCallback(()=>{
        if (isDirty) {
            if (window.confirm(message)) {
                return true;
            }
            throw "Abort route change by user's confirmation.";
        }
    }, [
        isDirty,
        message
    ]);
    react__WEBPACK_IMPORTED_MODULE_1__.useEffect(()=>{
        Router.events.on('routeChangeStart', onRouteChangeStart);
        return ()=>{
            Router.events.off('routeChangeStart', onRouteChangeStart);
        };
    }, [
        Router.events,
        onRouteChangeStart
    ]);
    (0,react_beforeunload__WEBPACK_IMPORTED_MODULE_2__.useBeforeunload)((event)=>{
        if (isDirty) {
            event.preventDefault();
        }
    });
    return;
}


/***/ })

};
;