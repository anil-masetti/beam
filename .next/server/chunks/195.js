"use strict";
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 7949:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "u": () => (/* binding */ HtmlView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lib_classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(370);


function HtmlView({ html , className  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: (0,_lib_classnames__WEBPACK_IMPORTED_MODULE_1__/* .classNames */ .A)('prose max-w-none', className),
        dangerouslySetInnerHTML: {
            __html: html
        }
    }));
}


/***/ }),

/***/ 1195:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c": () => (/* binding */ MarkdownEditor)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_html_view__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7949);
/* harmony import */ var _components_icons__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4952);
/* harmony import */ var _env_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(159);
/* harmony import */ var _lib_classnames__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(370);
/* harmony import */ var _lib_editor__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(9655);
/* harmony import */ var _lib_trpc__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3064);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(7505);
/* harmony import */ var _headlessui_react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5875);
/* harmony import */ var match_sorter__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(match_sorter__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_detect_click_outside__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(2066);
/* harmony import */ var react_detect_click_outside__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_detect_click_outside__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(1175);
/* harmony import */ var react_query__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_query__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(649);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var textarea_caret__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(484);
/* harmony import */ var textarea_caret__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(textarea_caret__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var textarea_markdown_editor__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(3966);
/* harmony import */ var textarea_markdown_editor__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(textarea_markdown_editor__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var use_item_list__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(7414);
/* harmony import */ var use_item_list__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(use_item_list__WEBPACK_IMPORTED_MODULE_14__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_lib_editor__WEBPACK_IMPORTED_MODULE_4__]);
_lib_editor__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];
















function suggestionReducer(state, action) {
    switch(action.type){
        case 'open':
            return {
                isOpen: true,
                type: action.payload.type,
                position: action.payload.position,
                triggerIdx: action.payload.triggerIdx,
                query: action.payload.query
            };
        case 'close':
            return {
                isOpen: false,
                type: null,
                position: null,
                triggerIdx: null,
                query: ''
            };
        case 'updateQuery':
            return {
                ...state,
                query: action.payload
            };
        default:
            throw new Error();
    }
}
const TOOLBAR_ITEMS = [
    {
        commandTrigger: 'bold',
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .BoldIcon */ .mY, {
            className: "w-4 h-4"
        }),
        name: 'Bold'
    },
    {
        commandTrigger: 'italic',
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .ItalicIcon */ .h3, {
            className: "w-4 h-4"
        }),
        name: 'Italic'
    },
    {
        commandTrigger: 'unordered-list',
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .ListIcon */ .DE, {
            className: "w-4 h-4"
        }),
        name: 'Unordered List'
    },
    {
        commandTrigger: 'link',
        icon: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_icons__WEBPACK_IMPORTED_MODULE_2__/* .LinkIcon */ .xP, {
            className: "w-4 h-4"
        }),
        name: 'Link'
    }, 
];
function MarkdownPreview({ markdown  }) {
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "pb-6 mt-8 border-b",
        children: markdown ? /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_components_html_view__WEBPACK_IMPORTED_MODULE_1__/* .HtmlView */ .u, {
            html: (0,_lib_editor__WEBPACK_IMPORTED_MODULE_4__/* .markdownToHtml */ .c8)(markdown)
        }) : /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
            children: "Nothing to preview"
        })
    }));
}
function MarkdownEditor({ label , value: value1 , minRows =15 , onChange , onTriggerSubmit , ...rest }) {
    const textareaMarkdownRef = react__WEBPACK_IMPORTED_MODULE_8__.useRef(null);
    const [showPreview, setShowPreview] = react__WEBPACK_IMPORTED_MODULE_8__.useState(false);
    const [suggestionState, suggestionDispatch] = react__WEBPACK_IMPORTED_MODULE_8__.useReducer(suggestionReducer, {
        isOpen: false,
        type: null,
        position: null,
        triggerIdx: null,
        query: ''
    });
    function closeSuggestion() {
        suggestionDispatch({
            type: 'close'
        });
    }
    return(/*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        children: [
            label && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("label", {
                className: "block mb-2 font-semibold",
                children: label
            }),
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "flex items-center justify-between gap-4 px-4 py-px border rounded bg-primary",
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "flex gap-2 -ml-2",
                                children: TOOLBAR_ITEMS.map((toolbarItem)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                                        type: "button",
                                        onClick: ()=>{
                                            textareaMarkdownRef.current?.trigger(toolbarItem.commandTrigger);
                                        },
                                        className: (0,_lib_classnames__WEBPACK_IMPORTED_MODULE_15__/* .classNames */ .A)('rounded inline-flex items-center justify-center h-8 w-8 disabled:opacity-50 disabled:cursor-default focus:border focus-ring', !showPreview && 'transition-colors hover:text-blue'),
                                        disabled: showPreview,
                                        title: toolbarItem.name,
                                        children: toolbarItem.icon
                                    }, toolbarItem.commandTrigger)
                                )
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Switch.Group, {
                                as: "div",
                                className: "flex items-center",
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Switch, {
                                        checked: showPreview,
                                        onChange: (value)=>{
                                            if (value === false) {
                                                textareaMarkdownRef.current?.focus();
                                            }
                                            setShowPreview(value);
                                        },
                                        className: (0,_lib_classnames__WEBPACK_IMPORTED_MODULE_15__/* .classNames */ .A)(showPreview ? 'bg-blue-500' : 'bg-gray-300 dark:bg-gray-700', 'relative inline-flex flex-shrink-0 items-center h-[18px] w-8 rounded-full transition-colors ease-in-out duration-200 focus-ring'),
                                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("span", {
                                            className: (0,_lib_classnames__WEBPACK_IMPORTED_MODULE_15__/* .classNames */ .A)(showPreview ? 'translate-x-4' : 'translate-x-0.5', 'inline-block w-3.5 h-3.5 transform bg-white dark:bg-gray-100 rounded-full transition-transform ease-in-out duration-200')
                                        })
                                    }),
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_headlessui_react__WEBPACK_IMPORTED_MODULE_6__.Switch.Label, {
                                        as: "span",
                                        className: "ml-2 text-xs cursor-pointer select-none",
                                        children: "Preview"
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: (0,_lib_classnames__WEBPACK_IMPORTED_MODULE_15__/* .classNames */ .A)('mt-2 relative', showPreview && 'sr-only'),
                        children: [
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((textarea_markdown_editor__WEBPACK_IMPORTED_MODULE_13___default().Wrapper), {
                                ref: textareaMarkdownRef,
                                commands: [
                                    {
                                        name: 'indent',
                                        enable: false
                                    }, 
                                ],
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_textarea_autosize__WEBPACK_IMPORTED_MODULE_11___default()), {
                                    ...rest,
                                    value: value1,
                                    onChange: (event)=>{
                                        onChange(event.target.value);
                                        const { keystrokeTriggered , triggerIdx , type , query  } = (0,_lib_editor__WEBPACK_IMPORTED_MODULE_4__/* .getSuggestionData */ .FX)(event.currentTarget);
                                        if (!keystrokeTriggered) {
                                            if (suggestionState.isOpen) {
                                                closeSuggestion();
                                            }
                                            return;
                                        }
                                        if (suggestionState.isOpen) {
                                            suggestionDispatch({
                                                type: 'updateQuery',
                                                payload: query
                                            });
                                        } else {
                                            const coords = textarea_caret__WEBPACK_IMPORTED_MODULE_12___default()(event.currentTarget, triggerIdx + 1);
                                            suggestionDispatch({
                                                type: 'open',
                                                payload: {
                                                    type,
                                                    position: {
                                                        top: coords.top + coords.height,
                                                        left: coords.left
                                                    },
                                                    triggerIdx,
                                                    query
                                                }
                                            });
                                        }
                                    },
                                    onKeyDown: (event)=>{
                                        const { code , metaKey  } = event;
                                        if (code === 'Enter' && metaKey) {
                                            onTriggerSubmit?.();
                                        }
                                    },
                                    onPaste: (event)=>{
                                        if (_env_browser__WEBPACK_IMPORTED_MODULE_3__/* .browserEnv.NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD */ .h.NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD) {
                                            const filesArray = Array.from(event.clipboardData.files);
                                            if (filesArray.length === 0) {
                                                return;
                                            }
                                            const imageFiles = filesArray.filter((file)=>/image/i.test(file.type)
                                            );
                                            if (imageFiles.length === 0) {
                                                return;
                                            }
                                            event.preventDefault();
                                            (0,_lib_editor__WEBPACK_IMPORTED_MODULE_4__/* .handleUploadImages */ .GQ)(event.currentTarget, imageFiles);
                                        }
                                    },
                                    onDrop: (event)=>{
                                        if (_env_browser__WEBPACK_IMPORTED_MODULE_3__/* .browserEnv.NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD */ .h.NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD) {
                                            const filesArray = Array.from(event.dataTransfer.files);
                                            if (filesArray.length === 0) {
                                                return;
                                            }
                                            const imageFiles = filesArray.filter((file)=>/image/i.test(file.type)
                                            );
                                            if (imageFiles.length === 0) {
                                                return;
                                            }
                                            event.preventDefault();
                                            (0,_lib_editor__WEBPACK_IMPORTED_MODULE_4__/* .handleUploadImages */ .GQ)(event.currentTarget, imageFiles);
                                        }
                                    },
                                    className: "block w-full rounded shadow-sm bg-secondary border-secondary focus-ring",
                                    minRows: minRows
                                })
                            }),
                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Suggestion, {
                                state: suggestionState,
                                onSelect: (suggestionResult)=>{
                                    const preSuggestion = value1.slice(0, suggestionState.triggerIdx);
                                    const postSuggestion = value1.slice(textareaMarkdownRef.current?.selectionStart);
                                    let suggestionInsertion = '';
                                    if (suggestionState.type === 'mention') {
                                        suggestionInsertion = `[${suggestionResult.label}](/profile/${suggestionResult.value})`;
                                    }
                                    if (suggestionState.type === 'emoji') {
                                        suggestionInsertion = suggestionResult.value;
                                    }
                                    const newEditorValue = `${preSuggestion}${suggestionInsertion} ${postSuggestion}`;
                                    onChange(newEditorValue);
                                    closeSuggestion();
                                    setTimeout(()=>{
                                        const caretPosition = newEditorValue.length - postSuggestion.length;
                                        textareaMarkdownRef.current?.focus();
                                        textareaMarkdownRef.current?.setSelectionRange(caretPosition, caretPosition);
                                    }, 0);
                                },
                                onClose: closeSuggestion
                            })
                        ]
                    }),
                    showPreview && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(MarkdownPreview, {
                        markdown: value1
                    })
                ]
            })
        ]
    }));
}
function Suggestion({ state , onSelect , onClose  }) {
    const isMentionType = state.type === 'mention';
    const isEmojiType = state.type === 'emoji';
    const emojiListQuery = (0,react_query__WEBPACK_IMPORTED_MODULE_10__.useQuery)('emojiList', async ()=>{
        const gemoji = (await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 2406))).gemoji;
        return gemoji;
    }, {
        enabled: state.isOpen && isEmojiType,
        staleTime: Infinity
    });
    const mentionListQuery = _lib_trpc__WEBPACK_IMPORTED_MODULE_5__/* .trpc.useQuery */ .S.useQuery([
        'user.mentionList'
    ], {
        enabled: state.isOpen && isMentionType,
        staleTime: 5 * 60 * 1000
    });
    let suggestionList = [];
    if (isMentionType && mentionListQuery.data) {
        suggestionList = (0,match_sorter__WEBPACK_IMPORTED_MODULE_7__.matchSorter)(mentionListQuery.data, state.query, {
            keys: [
                'name'
            ]
        }).slice(0, 5).map((item)=>({
                label: item.name,
                value: item.id
            })
        );
    }
    if (isEmojiType && emojiListQuery.data) {
        suggestionList = (0,match_sorter__WEBPACK_IMPORTED_MODULE_7__.matchSorter)(emojiListQuery.data, state.query, {
            keys: [
                'names',
                'tags'
            ],
            threshold: match_sorter__WEBPACK_IMPORTED_MODULE_7__.matchSorter.rankings.STARTS_WITH
        }).slice(0, 5).map((item)=>({
                label: `${item.emoji} ${item.names[0]}`,
                value: item.emoji
            })
        );
    }
    if (!state.isOpen || !state.position || suggestionList.length === 0) {
        return null;
    }
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SuggestionList, {
        suggestionList: suggestionList,
        position: state.position,
        onSelect: onSelect,
        onClose: onClose
    }));
}
function SuggestionList({ suggestionList , position , onSelect , onClose  }) {
    const ref = (0,react_detect_click_outside__WEBPACK_IMPORTED_MODULE_9__.useDetectClickOutside)({
        onTriggered: onClose
    });
    const { moveHighlightedItem , selectHighlightedItem , useItem  } = (0,use_item_list__WEBPACK_IMPORTED_MODULE_14__.useItemList)({
        onSelect: (item)=>{
            onSelect(item.value);
        }
    });
    react__WEBPACK_IMPORTED_MODULE_8__.useEffect(()=>{
        function handleKeydownEvent(event) {
            const { code  } = event;
            const preventDefaultCodes = [
                'ArrowUp',
                'ArrowDown',
                'Enter',
                'Tab'
            ];
            if (preventDefaultCodes.includes(code)) {
                event.preventDefault();
            }
            if (code === 'ArrowUp') {
                moveHighlightedItem(-1);
            }
            if (code === 'ArrowDown') {
                moveHighlightedItem(1);
            }
            if (code === 'Enter' || code === 'Tab') {
                selectHighlightedItem();
            }
        }
        document.addEventListener('keydown', handleKeydownEvent);
        return ()=>{
            document.removeEventListener('keydown', handleKeydownEvent);
        };
    }, [
        moveHighlightedItem,
        selectHighlightedItem
    ]);
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        ref: ref,
        className: "absolute w-56 max-h-[286px] border rounded shadow-lg bg-primary overflow-y-auto",
        style: {
            top: position.top,
            left: position.left
        },
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
            role: "listbox",
            className: "divide-y divide-primary",
            children: suggestionList.map((suggestionResult)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(SuggestionResult, {
                    useItem: useItem,
                    suggestionResult: suggestionResult
                }, suggestionResult.value)
            )
        })
    }));
}
function SuggestionResult({ useItem , suggestionResult  }) {
    const ref = react__WEBPACK_IMPORTED_MODULE_8__.useRef(null);
    const { id , index , highlight , select , useHighlighted  } = useItem({
        ref,
        value: suggestionResult
    });
    const highlighted = useHighlighted();
    return(/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
        ref: ref,
        id: id,
        onMouseEnter: highlight,
        onClick: select,
        role: "option",
        "aria-selected": highlighted ? 'true' : 'false',
        className: (0,_lib_classnames__WEBPACK_IMPORTED_MODULE_15__/* .classNames */ .A)('px-4 py-2 text-sm text-left transition-colors cursor-pointer ', highlighted ? 'bg-blue-600 text-white' : 'text-primary'),
        children: suggestionResult.label
    }));
}

});

/***/ }),

/***/ 9655:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c8": () => (/* binding */ markdownToHtml),
/* harmony export */   "GQ": () => (/* binding */ handleUploadImages),
/* harmony export */   "FX": () => (/* binding */ getSuggestionData)
/* harmony export */ });
/* harmony import */ var _lib_cloudinary__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5712);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3059);
/* harmony import */ var isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8974);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8922);
/* harmony import */ var react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_hot_toast__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var textarea_markdown_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3966);
/* harmony import */ var textarea_markdown_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(textarea_markdown_editor__WEBPACK_IMPORTED_MODULE_3__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([marked__WEBPACK_IMPORTED_MODULE_1__]);
marked__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];





function markdownToHtml(markdown) {
    return isomorphic_dompurify__WEBPACK_IMPORTED_MODULE_0___default().sanitize(marked__WEBPACK_IMPORTED_MODULE_1__.marked.parse(markdown, {
        breaks: true
    }));
}
function replacePlaceholder(cursor, placeholder, replaceWith) {
    cursor.setText(cursor.getText().replace(placeholder, replaceWith));
}
function handleUploadImages(textareaEl, files) {
    const cursor = new textarea_markdown_editor__WEBPACK_IMPORTED_MODULE_3__.Cursor(textareaEl);
    const currentLineNumber = cursor.getCurrentPosition().lineNumber;
    files.forEach(async (file, idx)=>{
        const placeholder = `![Uploading ${file.name}...]()`;
        cursor.spliceContent(textarea_markdown_editor__WEBPACK_IMPORTED_MODULE_3__.Cursor.raw`${placeholder}${textarea_markdown_editor__WEBPACK_IMPORTED_MODULE_3__.Cursor.$}`, {
            startLineNumber: currentLineNumber + idx
        });
        try {
            const uploadedImage = await (0,_lib_cloudinary__WEBPACK_IMPORTED_MODULE_4__/* .uploadImage */ .I)(file);
            replacePlaceholder(cursor, placeholder, `<img width="${uploadedImage.dpi >= 144 ? Math.round(uploadedImage.width / 2) : uploadedImage.width}" alt="${uploadedImage.originalFilename}" src="${uploadedImage.url}">`);
        } catch (error) {
            console.log(error);
            replacePlaceholder(cursor, placeholder, '');
            react_hot_toast__WEBPACK_IMPORTED_MODULE_2___default().error(`Error uploading image: ${error.message}`);
        }
    });
}
function getSuggestionData(textareaEl) {
    const positionIndex = textareaEl.selectionStart;
    const textBeforeCaret = textareaEl.value.slice(0, positionIndex);
    const tokens = textBeforeCaret.split(/\s/);
    const lastToken = tokens[tokens.length - 1];
    const triggerIdx = textBeforeCaret.endsWith(lastToken) ? textBeforeCaret.length - lastToken.length : -1;
    const maybeTrigger = textBeforeCaret[triggerIdx];
    const mentionKeystrokeTriggered = maybeTrigger === '@';
    const emojiKeystrokeTriggered = maybeTrigger === ':';
    const keystrokeTriggered = mentionKeystrokeTriggered || emojiKeystrokeTriggered;
    const type = mentionKeystrokeTriggered ? 'mention' : 'emoji';
    const query = textBeforeCaret.slice(triggerIdx + 1);
    return {
        keystrokeTriggered,
        triggerIdx,
        type,
        query
    };
}

});

/***/ })

};
;