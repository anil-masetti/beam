"use strict";
exports.id = 135;
exports.ids = [135];
exports.modules = {

/***/ 8063:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ Avatar)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_text__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5675);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);




const dimension = {
    sm: 34,
    md: 48,
    lg: 128
};
const initialSize = {
    sm: 'w-5 h-5',
    md: 'w-6 h-6',
    lg: 'w-16 h-16'
};
function Avatar({ size ='md' , name , src  }) {
    const initial = name.charAt(0).toLocaleLowerCase();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "relative inline-flex flex-shrink-0 rounded-full",
        children: src ? /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_image__WEBPACK_IMPORTED_MODULE_1__["default"], {
                    src: src,
                    alt: name,
                    layout: "fixed",
                    width: dimension[size],
                    height: dimension[size],
                    className: "object-cover rounded-full"
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "absolute border border-[rgba(0,0,0,0.04)] rounded-full inset-0"
                })
            ]
        }) : /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "grid",
            children: [
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "flex col-start-1 col-end-1 row-start-1 row-end-1",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: `/api/avatar?name=${encodeURIComponent(name)}`,
                        alt: name,
                        width: dimension[size],
                        height: dimension[size]
                    })
                }),
                (0,_lib_text__WEBPACK_IMPORTED_MODULE_3__/* .isCharacterALetter */ .x)(initial) && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "relative flex items-center justify-center col-start-1 col-end-1 row-start-1 row-end-1",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("img", {
                        src: `/images/letters/${initial}.svg`,
                        className: initialSize[size],
                        alt: ""
                    })
                })
            ]
        })
    }));
}


/***/ }),

/***/ 5428:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ ButtonLink)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2072);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);




const ButtonLink = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_3__.forwardRef(({ href , as , replace , scroll , shallow , passHref , prefetch , locale , className , variant ='primary' , responsive , ...rest }, forwardedRef)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: href,
        as: as,
        replace: replace,
        scroll: scroll,
        shallow: shallow,
        passHref: passHref,
        prefetch: prefetch,
        locale: locale,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            ...rest,
            ref: forwardedRef,
            className: (0,_components_button__WEBPACK_IMPORTED_MODULE_1__/* .buttonClasses */ .J)({
                className,
                variant,
                responsive
            })
        })
    }));
});
ButtonLink.displayName = 'ButtonLink';


/***/ }),

/***/ 8848:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ IconButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(370);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



const IconButton = /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_1__.forwardRef(({ className , variant ='primary' , type ='button' , ...rest }, forwardedRef)=>{
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
        ...rest,
        ref: forwardedRef,
        type: type,
        className: (0,_lib_classnames__WEBPACK_IMPORTED_MODULE_2__/* .classNames */ .A)('inline-flex items-center justify-center flex-shrink-0 transition-colors rounded-full h-button w-icon-button focus-ring', variant === 'primary' && 'text-secondary-inverse bg-secondary-inverse hover:text-primary-inverse hover:bg-primary-inverse', variant === 'secondary' && 'border text-primary border-secondary bg-primary hover:bg-secondary', className)
    }));
});
IconButton.displayName = 'IconButton';


/***/ }),

/***/ 7135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "A": () => (/* binding */ Layout)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/avatar.tsx
var avatar = __webpack_require__(8063);
// EXTERNAL MODULE: ./components/button-link.tsx
var button_link = __webpack_require__(5428);
// EXTERNAL MODULE: ./components/footer.tsx + 1 modules
var footer = __webpack_require__(7338);
// EXTERNAL MODULE: ./components/icon-button.tsx
var icon_button = __webpack_require__(8848);
// EXTERNAL MODULE: ./components/icons.tsx
var icons = __webpack_require__(4952);
// EXTERNAL MODULE: ./components/menu.tsx
var menu = __webpack_require__(801);
// EXTERNAL MODULE: ./lib/classnames.ts
var classnames = __webpack_require__(370);
// EXTERNAL MODULE: ./lib/trpc.ts
var trpc = __webpack_require__(3064);
// EXTERNAL MODULE: external "@headlessui/react"
var react_ = __webpack_require__(7505);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "use-debounce"
var external_use_debounce_ = __webpack_require__(9097);
// EXTERNAL MODULE: external "use-item-list"
var external_use_item_list_ = __webpack_require__(7414);
;// CONCATENATED MODULE: ./components/search-dialog.tsx










function SearchResult({ useItem , result  }) {
    const ref = external_react_.useRef(null);
    const { id , index , highlight , select , useHighlighted  } = useItem({
        ref,
        value: result
    });
    const highlighted = useHighlighted();
    return(/*#__PURE__*/ jsx_runtime_.jsx("li", {
        ref: ref,
        id: id,
        onMouseEnter: highlight,
        onClick: select,
        children: /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
            href: `/post/${result.id}`,
            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                className: (0,classnames/* classNames */.A)('block py-3.5 pl-10 pr-3 transition-colors leading-tight', highlighted && 'bg-blue-600 text-white'),
                children: result.title
            })
        })
    }));
}
function SearchField({ onSelect  }) {
    const [value, setValue] = external_react_.useState('');
    const [debouncedValue] = (0,external_use_debounce_.useDebounce)(value, 1000);
    const router = (0,router_.useRouter)();
    const feedQuery = trpc/* trpc.useQuery */.S.useQuery([
        'post.search',
        {
            query: debouncedValue
        }, 
    ], {
        enabled: debouncedValue.trim().length > 0
    });
    const { moveHighlightedItem , selectHighlightedItem , useItem  } = (0,external_use_item_list_.useItemList)({
        onSelect: (item)=>{
            router.push(`/post/${item.value.id}`);
            onSelect();
        }
    });
    external_react_.useEffect(()=>{
        function handleKeydownEvent(event) {
            const { code  } = event;
            if (code === 'ArrowUp' || code === 'ArrowDown' || code === 'Enter') {
                event.preventDefault();
            }
            if (code === 'ArrowUp') {
                moveHighlightedItem(-1);
            }
            if (code === 'ArrowDown') {
                moveHighlightedItem(1);
            }
            if (code === 'Enter') {
                selectHighlightedItem();
            }
        }
        document.addEventListener('keydown', handleKeydownEvent);
        return ()=>{
            document.removeEventListener('keydown', handleKeydownEvent);
        };
    }, [
        moveHighlightedItem,
        selectHighlightedItem,
        router
    ]);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "relative",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (0,classnames/* classNames */.A)('absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none transition-opacity', feedQuery.isLoading ? 'opacity-100' : 'opacity-0'),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* SpinnerIcon */.L4, {
                            className: "w-4 h-4 animate-spin"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: (0,classnames/* classNames */.A)('absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none transition-opacity', feedQuery.isLoading ? 'opacity-0' : 'opacity-100'),
                        children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* SearchIcon */.W1, {
                            className: "w-4 h-4",
                            "aria-hidden": "true"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("input", {
                        type: "text",
                        autoComplete: "off",
                        autoCorrect: "off",
                        autoCapitalize: "off",
                        spellCheck: false,
                        placeholder: "Search",
                        className: "block w-full py-3 pl-10 bg-transparent border-0 focus:ring-0",
                        role: "combobox",
                        "aria-controls": "search-results",
                        "aria-expanded": true,
                        value: value,
                        onChange: (event)=>{
                            setValue(event.target.value);
                        }
                    })
                ]
            }),
            feedQuery.data && (feedQuery.data.length > 0 ? /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                id: "search-results",
                role: "listbox",
                className: "max-h-[286px] border-t overflow-y-auto",
                children: feedQuery.data.map((result)=>/*#__PURE__*/ jsx_runtime_.jsx(SearchResult, {
                        useItem: useItem,
                        result: result
                    }, result.id)
                )
            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "border-t py-3.5 px-3 text-center leading-tight",
                children: "No results. Try something else"
            })),
            feedQuery.isError && /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "border-t py-3.5 px-3 text-center leading-tight",
                children: [
                    "Error: ",
                    feedQuery.error.message
                ]
            })
        ]
    }));
}
function SearchDialog({ isOpen , onClose  }) {
    return(/*#__PURE__*/ jsx_runtime_.jsx(react_.Transition.Root, {
        show: isOpen,
        as: external_react_.Fragment,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Dialog, {
            as: "div",
            className: "fixed inset-0 z-10 overflow-y-auto",
            onClose: onClose,
            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "min-h-screen px-4 text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Transition.Child, {
                        as: external_react_.Fragment,
                        enter: "ease-out duration-100",
                        enterFrom: "opacity-0",
                        enterTo: "opacity-100",
                        leave: "ease-in duration-50",
                        leaveFrom: "opacity-100",
                        leaveTo: "opacity-0",
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Dialog.Overlay, {
                            className: "fixed inset-0 transition-opacity bg-gray-700 opacity-90 dark:bg-gray-900"
                        })
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx(react_.Transition.Child, {
                        as: external_react_.Fragment,
                        enter: "ease-out duration-100",
                        enterFrom: "opacity-0 scale-95",
                        enterTo: "opacity-100 scale-100",
                        leave: "ease-in duration-50",
                        leaveFrom: "opacity-100 scale-100",
                        leaveTo: "opacity-0 scale-95",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "inline-block w-full max-w-md mt-[10vh] mb-8 overflow-hidden text-left align-middle transition-all transform bg-primary rounded-lg shadow-xl dark:border",
                            children: isOpen ? /*#__PURE__*/ jsx_runtime_.jsx(SearchField, {
                                onSelect: onClose
                            }) : /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "h-12"
                            })
                        })
                    })
                ]
            })
        })
    }));
}

// EXTERNAL MODULE: ./lib/text.ts
var lib_text = __webpack_require__(1675);
// EXTERNAL MODULE: external "next-auth/react"
var external_next_auth_react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next-themes"
var external_next_themes_ = __webpack_require__(1162);
;// CONCATENATED MODULE: ./components/layout.tsx













function Layout({ children  }) {
    const { data: session  } = (0,external_next_auth_react_.useSession)();
    const { theme: theme1 , themes , setTheme  } = (0,external_next_themes_.useTheme)();
    const [isSearchDialogOpen, setIsSearchDialogOpen] = external_react_.useState(false);
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "max-w-3xl px-6 mx-auto",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("header", {
                className: "flex items-center justify-between gap-4 py-12 md:py-20",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(next_link["default"], {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* Logo */.TR, {
                                className: "w-auto text-red-light h-[34px]"
                            })
                        })
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center gap-2 md:gap-4",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icon_button/* IconButton */.h, {
                                variant: "secondary",
                                onClick: ()=>{
                                    setIsSearchDialogOpen(true);
                                },
                                children: /*#__PURE__*/ jsx_runtime_.jsx(icons/* SearchIcon */.W1, {
                                    className: "w-4 h-4"
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* Menu */.v2, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(menu/* MenuButton */.j2, {
                                        className: "relative inline-flex rounded-full group focus-ring",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(avatar/* Avatar */.q, {
                                            name: session.user.name,
                                            src: session.user.image,
                                            size: "sm"
                                        })
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* MenuItems */.sd, {
                                        className: "w-48",
                                        children: [
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(menu/* MenuItemsContent */.Cz, {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx(menu/* MenuItemLink */.AB, {
                                                        href: `/profile/${session.user.id}`,
                                                        children: "Profile"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx(menu/* MenuItemButton */.ci, {
                                                        onClick: ()=>(0,external_next_auth_react_.signOut)()
                                                        ,
                                                        children: "Log out"
                                                    })
                                                ]
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                className: "flex items-center gap-4 px-4 py-3 rounded-b bg-secondary",
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("label", {
                                                        htmlFor: "theme",
                                                        className: "text-sm",
                                                        children: "Theme"
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("select", {
                                                        id: "theme",
                                                        name: "theme",
                                                        value: theme1,
                                                        onChange: (event)=>{
                                                            setTheme(event.target.value);
                                                        },
                                                        className: "block w-full py-1.5 text-xs border rounded shadow-sm bg-primary border-secondary",
                                                        children: themes.map((theme)=>/*#__PURE__*/ jsx_runtime_.jsx("option", {
                                                                value: theme,
                                                                children: (0,lib_text/* capitalize */.k)(theme)
                                                            }, theme)
                                                        )
                                                    })
                                                ]
                                            })
                                        ]
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)(button_link/* ButtonLink */.Z, {
                                href: "/new",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "sm:hidden",
                                        children: "Post"
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        className: "hidden sm:block shrink-0",
                                        children: "New post"
                                    })
                                ]
                            })
                        ]
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "py-20",
                children: /*#__PURE__*/ jsx_runtime_.jsx(footer/* Footer */.$, {})
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(SearchDialog, {
                isOpen: isSearchDialogOpen,
                onClose: ()=>{
                    setIsSearchDialogOpen(false);
                }
            })
        ]
    }));
}


/***/ }),

/***/ 801:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "v2": () => (/* binding */ Menu),
/* harmony export */   "j2": () => (/* binding */ MenuButton),
/* harmony export */   "sd": () => (/* binding */ MenuItems),
/* harmony export */   "Cz": () => (/* binding */ MenuItemsContent),
/* harmony export */   "AB": () => (/* binding */ MenuItemLink),
/* harmony export */   "ci": () => (/* binding */ MenuItemButton)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_classnames__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(370);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7505);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1664);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);





function Menu({ children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu, {
        as: "div",
        className: "relative inline-flex",
        children: children
    }));
}
const MenuButton = _headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Button;
function MenuItems({ children , className  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Transition, {
        as: react__WEBPACK_IMPORTED_MODULE_3__.Fragment,
        enter: "transition ease-out duration-100",
        enterFrom: "transform opacity-0 scale-95",
        enterTo: "transform opacity-100 scale-100",
        leave: "transition ease-in duration-75",
        leaveFrom: "transform opacity-100 scale-100",
        leaveTo: "transform opacity-0 scale-95",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Items, {
            className: (0,_lib_classnames__WEBPACK_IMPORTED_MODULE_4__/* .classNames */ .A)('absolute right-0 z-10 mt-2 origin-top-right border divide-y rounded shadow-lg bg-primary divide-primary top-full focus:outline-none', className),
            children: children
        })
    }));
}
function MenuItemsContent({ children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "py-2",
        children: children
    }));
}
function NextLink({ href , children , ...rest }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(next_link__WEBPACK_IMPORTED_MODULE_2__["default"], {
        href: href,
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
            ...rest,
            children: children
        })
    }));
}
function menuItemClasses({ active , className  }) {
    return (0,_lib_classnames__WEBPACK_IMPORTED_MODULE_4__/* .classNames */ .A)(active && 'bg-secondary', 'block w-full text-left px-4 py-2 text-sm text-primary transition-colors', className);
}
function MenuItemLink({ className , href , children  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
        children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(NextLink, {
                href: href,
                className: menuItemClasses({
                    active,
                    className
                }),
                children: children
            })
    }));
}
function MenuItemButton({ className , children , onClick  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_1__.Menu.Item, {
        children: ({ active  })=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                type: "button",
                className: menuItemClasses({
                    active,
                    className
                }),
                onClick: onClick,
                children: children
            })
    }));
}


/***/ }),

/***/ 1675:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ capitalize),
/* harmony export */   "x": () => (/* binding */ isCharacterALetter)
/* harmony export */ });
function capitalize(string) {
    if (!string) return string;
    return string[0].toUpperCase() + string.substring(1);
}
function isCharacterALetter(char) {
    return /[a-zA-Z]/.test(char);
}


/***/ }),

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


/***/ })

};
;