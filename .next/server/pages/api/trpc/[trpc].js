"use strict";
(() => {
var exports = {};
exports.id = 829;
exports.ids = [829];
exports.modules = {

/***/ 2104:
/***/ ((module) => {

module.exports = require("@next-auth/prisma-adapter");

/***/ }),

/***/ 3524:
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ 2756:
/***/ ((module) => {

module.exports = require("@trpc/server");

/***/ }),

/***/ 9417:
/***/ ((module) => {

module.exports = require("envsafe");

/***/ }),

/***/ 3059:
/***/ ((module) => {

module.exports = require("isomorphic-dompurify");

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

/***/ 8922:
/***/ ((module) => {

module.exports = require("react-hot-toast");

/***/ }),

/***/ 72:
/***/ ((module) => {

module.exports = require("superjson");

/***/ }),

/***/ 3966:
/***/ ((module) => {

module.exports = require("textarea-markdown-editor");

/***/ }),

/***/ 8974:
/***/ ((module) => {

module.exports = import("marked");;

/***/ }),

/***/ 9926:
/***/ ((module) => {

module.exports = import("zod");;

/***/ }),

/***/ 7310:
/***/ ((module) => {

module.exports = require("url");

/***/ }),

/***/ 3861:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "c8": () => (/* binding */ markdownToHtml)
/* harmony export */ });
/* unused harmony exports handleUploadImages, getSuggestionData */
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
    const cursor = new Cursor(textareaEl);
    const currentLineNumber = cursor.getCurrentPosition().lineNumber;
    files.forEach(async (file, idx)=>{
        const placeholder = `![Uploading ${file.name}...]()`;
        cursor.spliceContent(Cursor.raw`${placeholder}${Cursor.$}`, {
            startLineNumber: currentLineNumber + idx
        });
        try {
            const uploadedImage = await uploadImage(file);
            replacePlaceholder(cursor, placeholder, `<img width="${uploadedImage.dpi >= 144 ? Math.round(uploadedImage.width / 2) : uploadedImage.width}" alt="${uploadedImage.originalFilename}" src="${uploadedImage.url}">`);
        } catch (error) {
            console.log(error);
            replacePlaceholder(cursor, placeholder, '');
            toast.error(`Error uploading image: ${error.message}`);
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

/***/ }),

/***/ 3565:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ postToSlackIfEnabled)
/* harmony export */ });
/* harmony import */ var _env_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3418);

function postToSlackIfEnabled({ post , authorName  }) {
    if (_env_server__WEBPACK_IMPORTED_MODULE_0__/* .serverEnv.ENABLE_SLACK_POSTING */ .N.ENABLE_SLACK_POSTING && _env_server__WEBPACK_IMPORTED_MODULE_0__/* .serverEnv.SLACK_WEBHOOK_URL */ .N.SLACK_WEBHOOK_URL) {
        return fetch(_env_server__WEBPACK_IMPORTED_MODULE_0__/* .serverEnv.SLACK_WEBHOOK_URL */ .N.SLACK_WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                blocks: [
                    {
                        type: 'section',
                        text: {
                            type: 'mrkdwn',
                            text: `*<${_env_server__WEBPACK_IMPORTED_MODULE_0__/* .serverEnv.NEXT_APP_URL */ .N.NEXT_APP_URL}/post/${post.id}|${post.title}>*`
                        }
                    },
                    {
                        type: 'context',
                        elements: [
                            {
                                type: 'plain_text',
                                text: authorName,
                                emoji: true
                            }, 
                        ]
                    }, 
                ]
            })
        });
    }
}


/***/ }),

/***/ 8562:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _server_context__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4836);
/* harmony import */ var _server_routers_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8992);
/* harmony import */ var _trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5445);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_server_routers_app__WEBPACK_IMPORTED_MODULE_1__]);
_server_routers_app__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_trpc_server_adapters_next__WEBPACK_IMPORTED_MODULE_2__.createNextApiHandler({
    router: _server_routers_app__WEBPACK_IMPORTED_MODULE_1__/* .appRouter */ .q,
    createContext: _server_context__WEBPACK_IMPORTED_MODULE_0__/* .createContext */ .k,
    onError ({ error  }) {
        if (error.code === 'INTERNAL_SERVER_ERROR') {
            // send to bug reporting
            console.error('Something went wrong', error);
        }
    },
    batching: {
        enabled: true
    }
}));

});

/***/ }),

/***/ 4836:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ createContext)
/* harmony export */ });
/* harmony import */ var _lib_auth__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4884);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8047);
/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2113);
/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_2__);



const createContext = async ({ req , res  })=>{
    const session = await (0,next_auth_next__WEBPACK_IMPORTED_MODULE_2__.getServerSession)({
        req,
        res
    }, _lib_auth__WEBPACK_IMPORTED_MODULE_0__/* .authOptions */ .L);
    return {
        req,
        res,
        prisma: _lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ ._,
        session
    };
};


/***/ }),

/***/ 2298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "K": () => (/* binding */ createProtectedRouter)
/* harmony export */ });
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2756);
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trpc_server__WEBPACK_IMPORTED_MODULE_0__);

function createProtectedRouter() {
    return _trpc_server__WEBPACK_IMPORTED_MODULE_0__.router().middleware(({ ctx , next  })=>{
        if (!ctx.session) {
            throw new _trpc_server__WEBPACK_IMPORTED_MODULE_0__.TRPCError({
                code: 'UNAUTHORIZED'
            });
        }
        const isUserAdmin = ctx.session.user.role === 'ADMIN';
        return next({
            ctx: {
                ...ctx,
                session: ctx.session,
                isUserAdmin
            }
        });
    });
}


/***/ }),

/***/ 3930:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "p": () => (/* binding */ createRouter)
/* harmony export */ });
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2756);
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trpc_server__WEBPACK_IMPORTED_MODULE_0__);

function createRouter() {
    return _trpc_server__WEBPACK_IMPORTED_MODULE_0__.router();
}


/***/ }),

/***/ 8992:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "q": () => (/* binding */ appRouter)
/* harmony export */ });
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(72);
/* harmony import */ var superjson__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(superjson__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _create_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3930);
/* harmony import */ var _comment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6639);
/* harmony import */ var _post__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2483);
/* harmony import */ var _user__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7251);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_user__WEBPACK_IMPORTED_MODULE_4__, _comment__WEBPACK_IMPORTED_MODULE_2__, _post__WEBPACK_IMPORTED_MODULE_3__]);
([_user__WEBPACK_IMPORTED_MODULE_4__, _comment__WEBPACK_IMPORTED_MODULE_2__, _post__WEBPACK_IMPORTED_MODULE_3__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





const appRouter = (0,_create_router__WEBPACK_IMPORTED_MODULE_1__/* .createRouter */ .p)().transformer((superjson__WEBPACK_IMPORTED_MODULE_0___default())).merge('post.', _post__WEBPACK_IMPORTED_MODULE_3__/* .postRouter */ .F).merge('comment.', _comment__WEBPACK_IMPORTED_MODULE_2__/* .commentRouter */ .N).merge('user.', _user__WEBPACK_IMPORTED_MODULE_4__/* .userRouter */ .O);

});

/***/ }),

/***/ 6639:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "N": () => (/* binding */ commentRouter)
/* harmony export */ });
/* harmony import */ var _lib_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3861);
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2756);
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_trpc_server__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9926);
/* harmony import */ var _create_protected_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2298);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_2__, _lib_editor__WEBPACK_IMPORTED_MODULE_0__]);
([zod__WEBPACK_IMPORTED_MODULE_2__, _lib_editor__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);




const commentRouter = (0,_create_protected_router__WEBPACK_IMPORTED_MODULE_3__/* .createProtectedRouter */ .K)().mutation('add', {
    input: zod__WEBPACK_IMPORTED_MODULE_2__.z.object({
        postId: zod__WEBPACK_IMPORTED_MODULE_2__.z.number(),
        content: zod__WEBPACK_IMPORTED_MODULE_2__.z.string().min(1)
    }),
    async resolve ({ ctx , input  }) {
        const comment = await ctx.prisma.comment.create({
            data: {
                content: input.content,
                contentHtml: (0,_lib_editor__WEBPACK_IMPORTED_MODULE_0__/* .markdownToHtml */ .c8)(input.content),
                author: {
                    connect: {
                        id: ctx.session.user.id
                    }
                },
                post: {
                    connect: {
                        id: input.postId
                    }
                }
            }
        });
        return comment;
    }
}).mutation('edit', {
    input: zod__WEBPACK_IMPORTED_MODULE_2__.z.object({
        id: zod__WEBPACK_IMPORTED_MODULE_2__.z.number(),
        data: zod__WEBPACK_IMPORTED_MODULE_2__.z.object({
            content: zod__WEBPACK_IMPORTED_MODULE_2__.z.string().min(1)
        })
    }),
    async resolve ({ ctx , input  }) {
        const { id , data  } = input;
        const comment = await ctx.prisma.comment.findUnique({
            where: {
                id
            },
            select: {
                author: {
                    select: {
                        id: true
                    }
                }
            }
        });
        const commentBelongsToUser = comment?.author.id === ctx.session.user.id;
        if (!commentBelongsToUser) {
            throw new _trpc_server__WEBPACK_IMPORTED_MODULE_1__.TRPCError({
                code: 'FORBIDDEN'
            });
        }
        const updatedComment = await ctx.prisma.comment.update({
            where: {
                id
            },
            data: {
                content: data.content,
                contentHtml: (0,_lib_editor__WEBPACK_IMPORTED_MODULE_0__/* .markdownToHtml */ .c8)(data.content)
            }
        });
        return updatedComment;
    }
}).mutation('delete', {
    input: zod__WEBPACK_IMPORTED_MODULE_2__.z.number(),
    async resolve ({ input: id , ctx  }) {
        const comment = await ctx.prisma.comment.findUnique({
            where: {
                id
            },
            select: {
                author: {
                    select: {
                        id: true
                    }
                }
            }
        });
        const commentBelongsToUser = comment?.author.id === ctx.session.user.id;
        if (!commentBelongsToUser) {
            throw new _trpc_server__WEBPACK_IMPORTED_MODULE_1__.TRPCError({
                code: 'FORBIDDEN'
            });
        }
        await ctx.prisma.comment.delete({
            where: {
                id
            }
        });
        return id;
    }
});

});

/***/ }),

/***/ 2483:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ postRouter)
/* harmony export */ });
/* harmony import */ var _lib_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3861);
/* harmony import */ var _lib_slack__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3565);
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2756);
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_trpc_server__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(9926);
/* harmony import */ var _create_protected_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(2298);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_3__, _lib_editor__WEBPACK_IMPORTED_MODULE_0__]);
([zod__WEBPACK_IMPORTED_MODULE_3__, _lib_editor__WEBPACK_IMPORTED_MODULE_0__] = __webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__);





const postRouter = (0,_create_protected_router__WEBPACK_IMPORTED_MODULE_4__/* .createProtectedRouter */ .K)().query('feed', {
    input: zod__WEBPACK_IMPORTED_MODULE_3__.z.object({
        take: zod__WEBPACK_IMPORTED_MODULE_3__.z.number().min(1).max(50).optional(),
        skip: zod__WEBPACK_IMPORTED_MODULE_3__.z.number().min(1).optional(),
        authorId: zod__WEBPACK_IMPORTED_MODULE_3__.z.string().optional()
    }).optional(),
    async resolve ({ input , ctx  }) {
        const take = input?.take ?? 50;
        const skip = input?.skip;
        const where = {
            hidden: ctx.isUserAdmin ? undefined : false,
            authorId: input?.authorId
        };
        const posts = await ctx.prisma.post.findMany({
            take,
            skip,
            orderBy: {
                createdAt: 'desc'
            },
            where,
            select: {
                id: true,
                title: true,
                contentHtml: true,
                createdAt: true,
                hidden: true,
                author: {
                    select: {
                        id: true,
                        name: true,
                        image: true
                    }
                },
                likedBy: {
                    orderBy: {
                        createdAt: 'asc'
                    },
                    select: {
                        user: {
                            select: {
                                id: true,
                                name: true
                            }
                        }
                    }
                },
                _count: {
                    select: {
                        comments: true
                    }
                }
            }
        });
        const postCount = await ctx.prisma.post.count({
            where
        });
        return {
            posts,
            postCount
        };
    }
}).query('detail', {
    input: zod__WEBPACK_IMPORTED_MODULE_3__.z.object({
        id: zod__WEBPACK_IMPORTED_MODULE_3__.z.number()
    }),
    async resolve ({ ctx , input  }) {
        const { id  } = input;
        const post = await ctx.prisma.post.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                title: true,
                content: true,
                contentHtml: true,
                createdAt: true,
                hidden: true,
                author: {
                    select: {
                        id: true,
                        name: true,
                        image: true
                    }
                },
                likedBy: {
                    orderBy: {
                        createdAt: 'asc'
                    },
                    select: {
                        user: {
                            select: {
                                id: true,
                                name: true
                            }
                        }
                    }
                },
                comments: {
                    orderBy: {
                        createdAt: 'asc'
                    },
                    select: {
                        id: true,
                        content: true,
                        contentHtml: true,
                        createdAt: true,
                        author: {
                            select: {
                                id: true,
                                name: true,
                                image: true
                            }
                        }
                    }
                },
                _count: {
                    select: {
                        comments: true,
                        likedBy: true
                    }
                }
            }
        });
        const postBelongsToUser = post?.author.id === ctx.session.user.id;
        if (!post || post.hidden && !postBelongsToUser && !ctx.isUserAdmin) {
            throw new _trpc_server__WEBPACK_IMPORTED_MODULE_2__.TRPCError({
                code: 'NOT_FOUND',
                message: `No post with id '${id}'`
            });
        }
        return post;
    }
}).query('search', {
    input: zod__WEBPACK_IMPORTED_MODULE_3__.z.object({
        query: zod__WEBPACK_IMPORTED_MODULE_3__.z.string().min(1)
    }),
    async resolve ({ input , ctx  }) {
        const posts = await ctx.prisma.post.findMany({
            take: 10,
            where: {
                hidden: false,
                title: {
                    search: input.query
                },
                content: {
                    search: input.query
                }
            },
            select: {
                id: true,
                title: true
            }
        });
        return posts;
    }
}).mutation('add', {
    input: zod__WEBPACK_IMPORTED_MODULE_3__.z.object({
        title: zod__WEBPACK_IMPORTED_MODULE_3__.z.string().min(1),
        content: zod__WEBPACK_IMPORTED_MODULE_3__.z.string().min(1)
    }),
    async resolve ({ ctx , input  }) {
        const post = await ctx.prisma.post.create({
            data: {
                title: input.title,
                content: input.content,
                contentHtml: (0,_lib_editor__WEBPACK_IMPORTED_MODULE_0__/* .markdownToHtml */ .c8)(input.content),
                author: {
                    connect: {
                        id: ctx.session.user.id
                    }
                }
            }
        });
        (0,_lib_slack__WEBPACK_IMPORTED_MODULE_1__/* .postToSlackIfEnabled */ .s)({
            post,
            authorName: ctx.session.user.name
        });
        return post;
    }
}).mutation('edit', {
    input: zod__WEBPACK_IMPORTED_MODULE_3__.z.object({
        id: zod__WEBPACK_IMPORTED_MODULE_3__.z.number(),
        data: zod__WEBPACK_IMPORTED_MODULE_3__.z.object({
            title: zod__WEBPACK_IMPORTED_MODULE_3__.z.string().min(1),
            content: zod__WEBPACK_IMPORTED_MODULE_3__.z.string().min(1)
        })
    }),
    async resolve ({ ctx , input  }) {
        const { id , data  } = input;
        const post = await ctx.prisma.post.findUnique({
            where: {
                id
            },
            select: {
                author: {
                    select: {
                        id: true
                    }
                }
            }
        });
        const postBelongsToUser = post?.author.id === ctx.session.user.id;
        if (!postBelongsToUser) {
            throw new _trpc_server__WEBPACK_IMPORTED_MODULE_2__.TRPCError({
                code: 'FORBIDDEN'
            });
        }
        const updatedPost = await ctx.prisma.post.update({
            where: {
                id
            },
            data: {
                title: data.title,
                content: data.content,
                contentHtml: (0,_lib_editor__WEBPACK_IMPORTED_MODULE_0__/* .markdownToHtml */ .c8)(data.content)
            }
        });
        return updatedPost;
    }
}).mutation('delete', {
    input: zod__WEBPACK_IMPORTED_MODULE_3__.z.number(),
    async resolve ({ input: id , ctx  }) {
        const post = await ctx.prisma.post.findUnique({
            where: {
                id
            },
            select: {
                author: {
                    select: {
                        id: true
                    }
                }
            }
        });
        const postBelongsToUser = post?.author.id === ctx.session.user.id;
        if (!postBelongsToUser) {
            throw new _trpc_server__WEBPACK_IMPORTED_MODULE_2__.TRPCError({
                code: 'FORBIDDEN'
            });
        }
        await ctx.prisma.post.delete({
            where: {
                id
            }
        });
        return id;
    }
}).mutation('like', {
    input: zod__WEBPACK_IMPORTED_MODULE_3__.z.number(),
    async resolve ({ input: id , ctx  }) {
        await ctx.prisma.likedPosts.create({
            data: {
                post: {
                    connect: {
                        id
                    }
                },
                user: {
                    connect: {
                        id: ctx.session.user.id
                    }
                }
            }
        });
        return id;
    }
}).mutation('unlike', {
    input: zod__WEBPACK_IMPORTED_MODULE_3__.z.number(),
    async resolve ({ input: id , ctx  }) {
        await ctx.prisma.likedPosts.delete({
            where: {
                postId_userId: {
                    postId: id,
                    userId: ctx.session.user.id
                }
            }
        });
        return id;
    }
}).mutation('hide', {
    input: zod__WEBPACK_IMPORTED_MODULE_3__.z.number(),
    async resolve ({ input: id , ctx  }) {
        if (!ctx.isUserAdmin) {
            throw new _trpc_server__WEBPACK_IMPORTED_MODULE_2__.TRPCError({
                code: 'FORBIDDEN'
            });
        }
        const post = await ctx.prisma.post.update({
            where: {
                id
            },
            data: {
                hidden: true
            },
            select: {
                id: true
            }
        });
        return post;
    }
}).mutation('unhide', {
    input: zod__WEBPACK_IMPORTED_MODULE_3__.z.number(),
    async resolve ({ input: id , ctx  }) {
        if (!ctx.isUserAdmin) {
            throw new _trpc_server__WEBPACK_IMPORTED_MODULE_2__.TRPCError({
                code: 'FORBIDDEN'
            });
        }
        const post = await ctx.prisma.post.update({
            where: {
                id
            },
            data: {
                hidden: false
            },
            select: {
                id: true
            }
        });
        return post;
    }
});

});

/***/ }),

/***/ 7251:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "O": () => (/* binding */ userRouter)
/* harmony export */ });
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2756);
/* harmony import */ var _trpc_server__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_trpc_server__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var zod__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9926);
/* harmony import */ var _create_protected_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2298);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([zod__WEBPACK_IMPORTED_MODULE_1__]);
zod__WEBPACK_IMPORTED_MODULE_1__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];



const userRouter = (0,_create_protected_router__WEBPACK_IMPORTED_MODULE_2__/* .createProtectedRouter */ .K)().query('profile', {
    input: zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        id: zod__WEBPACK_IMPORTED_MODULE_1__.z.string()
    }),
    async resolve ({ ctx , input  }) {
        const { id  } = input;
        const user = await ctx.prisma.user.findUnique({
            where: {
                id
            },
            select: {
                id: true,
                name: true,
                image: true,
                title: true
            }
        });
        if (!user) {
            throw new _trpc_server__WEBPACK_IMPORTED_MODULE_0__.TRPCError({
                code: 'NOT_FOUND',
                message: `No profile with id '${id}'`
            });
        }
        return user;
    }
}).mutation('edit', {
    input: zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        name: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().min(1),
        title: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().nullish()
    }),
    async resolve ({ ctx , input  }) {
        const user = await ctx.prisma.user.update({
            where: {
                id: ctx.session.user.id
            },
            data: {
                name: input.name,
                title: input.title
            }
        });
        return user;
    }
}).mutation('update-avatar', {
    input: zod__WEBPACK_IMPORTED_MODULE_1__.z.object({
        image: zod__WEBPACK_IMPORTED_MODULE_1__.z.string().nullish()
    }),
    async resolve ({ ctx , input  }) {
        const user = await ctx.prisma.user.update({
            where: {
                id: ctx.session.user.id
            },
            data: {
                image: input.image
            }
        });
        return user;
    }
}).query('mentionList', {
    async resolve ({ ctx  }) {
        const users = await ctx.prisma.user.findMany({
            select: {
                id: true,
                name: true
            },
            orderBy: {
                name: 'asc'
            }
        });
        return users;
    }
});

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [445,884], () => (__webpack_exec__(8562)));
module.exports = __webpack_exports__;

})();