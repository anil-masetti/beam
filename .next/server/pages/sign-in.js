"use strict";
(() => {
var exports = {};
exports.id = 312;
exports.ids = [312];
exports.modules = {

/***/ 159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "h": () => (/* binding */ browserEnv)
/* harmony export */ });
/* harmony import */ var envsafe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9417);
/* harmony import */ var envsafe__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(envsafe__WEBPACK_IMPORTED_MODULE_0__);

const browserEnv = (0,envsafe__WEBPACK_IMPORTED_MODULE_0__.envsafe)({
    NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD: (0,envsafe__WEBPACK_IMPORTED_MODULE_0__.bool)({
        input: process.env.NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD,
        default: false
    })
});


/***/ }),

/***/ 5395:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ sign_in),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./components/button.tsx
var components_button = __webpack_require__(2072);
// EXTERNAL MODULE: ./components/footer.tsx + 1 modules
var footer = __webpack_require__(7338);
// EXTERNAL MODULE: ./components/icons.tsx
var icons = __webpack_require__(4952);
// EXTERNAL MODULE: external "envsafe"
var external_envsafe_ = __webpack_require__(9417);
// EXTERNAL MODULE: ./env/browser.ts
var browser = __webpack_require__(159);
;// CONCATENATED MODULE: ./env/server.ts


if (false) {}
const githubParser = (0,external_envsafe_.makeValidator)((input)=>{
    if (process.env.AUTH_PROVIDER === 'github' && input === '') {
        throw (0,external_envsafe_.invalidEnvError)('github config', input);
    }
    return input;
});
const oktaParser = (0,external_envsafe_.makeValidator)((input)=>{
    if (process.env.AUTH_PROVIDER === 'okta' && input === '') {
        throw (0,external_envsafe_.invalidEnvError)('okta config', input);
    }
    return input;
});
const cloudinaryParser = (0,external_envsafe_.makeValidator)((input)=>{
    if (browser/* browserEnv.NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD */.h.NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD && input === '') {
        throw (0,external_envsafe_.invalidEnvError)('cloudinary config', input);
    }
    return input;
});
const slackParser = (0,external_envsafe_.makeValidator)((input)=>{
    if (process.env.ENABLE_SLACK_POSTING && input === '') {
        throw (0,external_envsafe_.invalidEnvError)('slack config', input);
    }
    return input;
});
const serverEnv = {
    ...browser/* browserEnv */.h,
    ...(0,external_envsafe_.envsafe)({
        DATABASE_URL: (0,external_envsafe_.str)(),
        NEXT_APP_URL: (0,external_envsafe_.url)({
            devDefault: 'http://localhost:3000'
        }),
        NEXTAUTH_SECRET: (0,external_envsafe_.str)({
            devDefault: 'xxx'
        }),
        AUTH_PROVIDER: (0,external_envsafe_.str)({
            choices: [
                'github',
                'okta'
            ]
        }),
        GITHUB_ID: githubParser({
            allowEmpty: true,
            default: ''
        }),
        GITHUB_SECRET: githubParser({
            allowEmpty: true,
            default: ''
        }),
        GITHUB_ALLOWED_ORG: githubParser({
            allowEmpty: true,
            default: ''
        }),
        OKTA_CLIENT_ID: oktaParser({
            allowEmpty: true,
            default: ''
        }),
        OKTA_CLIENT_SECRET: oktaParser({
            allowEmpty: true,
            default: ''
        }),
        OKTA_ISSUER: oktaParser({
            allowEmpty: true,
            default: ''
        }),
        CLOUDINARY_CLOUD_NAME: cloudinaryParser({
            allowEmpty: true,
            default: ''
        }),
        CLOUDINARY_API_KEY: cloudinaryParser({
            allowEmpty: true,
            default: ''
        }),
        CLOUDINARY_API_SECRET: cloudinaryParser({
            allowEmpty: true,
            default: ''
        }),
        ENABLE_SLACK_POSTING: (0,external_envsafe_.bool)({
            default: false
        }),
        SLACK_WEBHOOK_URL: slackParser({
            allowEmpty: true,
            default: ''
        })
    })
};

;// CONCATENATED MODULE: external "@prisma/client"
const client_namespaceObject = require("@prisma/client");
;// CONCATENATED MODULE: ./lib/prisma.ts

const prisma = global.prisma || new client_namespaceObject.PrismaClient();
if (false) {}

;// CONCATENATED MODULE: external "@next-auth/prisma-adapter"
const prisma_adapter_namespaceObject = require("@next-auth/prisma-adapter");
;// CONCATENATED MODULE: external "next-auth/providers/github"
const github_namespaceObject = require("next-auth/providers/github");
var github_default = /*#__PURE__*/__webpack_require__.n(github_namespaceObject);
;// CONCATENATED MODULE: external "next-auth/providers/okta"
const okta_namespaceObject = require("next-auth/providers/okta");
var okta_default = /*#__PURE__*/__webpack_require__.n(okta_namespaceObject);
;// CONCATENATED MODULE: ./lib/auth.ts





const authOptions = {
    adapter: (0,prisma_adapter_namespaceObject.PrismaAdapter)(prisma),
    providers: [
        ...serverEnv.AUTH_PROVIDER === 'github' ? [
            github_default()({
                clientId: serverEnv.GITHUB_ID,
                clientSecret: serverEnv.GITHUB_SECRET,
                authorization: 'https://github.com/login/oauth/authorize?scope=read:user+user:email+read:org',
                userinfo: {
                    url: 'https://api.github.com/user',
                    async request ({ client , tokens  }) {
                        // Get base profile
                        // @ts-ignore
                        const profile = await client.userinfo(tokens);
                        // If user has email hidden, get their primary email from the GitHub API
                        if (!profile.email) {
                            const emails = await (await fetch('https://api.github.com/user/emails', {
                                headers: {
                                    Authorization: `token ${tokens.access_token}`
                                }
                            })).json();
                            if (emails?.length > 0) {
                                // Get primary email
                                profile.email = emails.find((email)=>email.primary
                                )?.email;
                                // And if for some reason it doesn't exist, just use the first
                                if (!profile.email) profile.email = emails[0].email;
                            }
                        }
                        const userOrgs = await (await fetch('https://api.github.com/user/orgs', {
                            headers: {
                                Authorization: `token ${tokens.access_token}`
                            }
                        })).json();
                        // Set flag to deny signIn if allowed org is not found in the user organizations
                        if (!userOrgs.find((org)=>org.login === serverEnv.GITHUB_ALLOWED_ORG
                        )) {
                            profile.notAllowed = true;
                        }
                        return profile;
                    }
                }
            }), 
        ] : [],
        ...serverEnv.AUTH_PROVIDER === 'okta' ? [
            okta_default()({
                clientId: serverEnv.OKTA_CLIENT_ID,
                clientSecret: serverEnv.OKTA_CLIENT_SECRET,
                issuer: serverEnv.OKTA_ISSUER
            }), 
        ] : [], 
    ],
    callbacks: {
        async signIn ({ user , account , profile  }) {
            if (profile.notAllowed) {
                return false;
            }
            return true;
        },
        async session ({ session , user  }) {
            return {
                ...session,
                user: {
                    ...session.user,
                    id: user.id,
                    role: user.role
                }
            };
        }
    },
    pages: {
        signIn: '/sign-in'
    },
    secret: serverEnv.NEXTAUTH_SECRET
};

;// CONCATENATED MODULE: external "next-auth/next"
const next_namespaceObject = require("next-auth/next");
// EXTERNAL MODULE: external "next-auth/react"
var react_ = __webpack_require__(1649);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: external "react-div-100vh"
const external_react_div_100vh_namespaceObject = require("react-div-100vh");
var external_react_div_100vh_default = /*#__PURE__*/__webpack_require__.n(external_react_div_100vh_namespaceObject);
;// CONCATENATED MODULE: ./pages/sign-in.tsx









const SignIn = ({ providers  })=>{
    return(/*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx((head_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("title", {
                    children: "Sign In - Beam"
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx((external_react_div_100vh_default()), {
                children: /*#__PURE__*/ jsx_runtime_.jsx("main", {
                    className: "relative flex items-center justify-center h-full bg-center bg-circle-grid dark:bg-circle-grid-dark",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "relative bottom-16",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(icons/* Logo */.TR, {
                                className: "w-[326px] text-red-light h-[94px] mb-8 bg-primary"
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "w-full space-y-4 text-center bg-primary",
                                children: Object.values(providers).map((provider)=>/*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(components_button/* Button */.z, {
                                            className: "!h-12 !px-5 !text-lg",
                                            onClick: ()=>(0,react_.signIn)(provider.id)
                                            ,
                                            children: [
                                                "Sign in with ",
                                                provider.name
                                            ]
                                        })
                                    }, provider.name)
                                )
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "-mt-4 md:mt-0 w-screen left-1/2 transform -translate-x-1/2 absolute sm:w-[434px] lg:w-[646px] xl:w-[862px] auth-footer",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(footer/* Footer */.$, {})
                            })
                        ]
                    })
                })
            })
        ]
    }));
};
const getServerSideProps = async (context)=>{
    const session = await (0,next_namespaceObject.getServerSession)(context, authOptions);
    const providers = await (0,react_.getProviders)();
    if (session?.user) {
        return {
            redirect: {
                permanent: false,
                destination: '/'
            },
            props: {
                providers
            }
        };
    }
    return {
        props: {
            providers
        }
    };
};
/* harmony default export */ const sign_in = (SignIn);


/***/ }),

/***/ 9417:
/***/ ((module) => {

module.exports = require("envsafe");

/***/ }),

/***/ 1649:
/***/ ((module) => {

module.exports = require("next-auth/react");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [416], () => (__webpack_exec__(5395)));
module.exports = __webpack_exports__;

})();