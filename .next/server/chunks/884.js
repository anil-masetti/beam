"use strict";
exports.id = 884;
exports.ids = [884];
exports.modules = {

/***/ 3418:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "N": () => (/* binding */ serverEnv)
});

// EXTERNAL MODULE: external "envsafe"
var external_envsafe_ = __webpack_require__(9417);
;// CONCATENATED MODULE: ./env/browser.ts

const browserEnv = (0,external_envsafe_.envsafe)({
    NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD: (0,external_envsafe_.bool)({
        input: process.env.NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD,
        default: false
    })
});

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
    if (browserEnv.NEXT_PUBLIC_ENABLE_IMAGE_UPLOAD && input === '') {
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
    ...browserEnv,
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


/***/ }),

/***/ 4884:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L": () => (/* binding */ authOptions)
/* harmony export */ });
/* harmony import */ var _env_server__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3418);
/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8047);
/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2104);
/* harmony import */ var _next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(7459);
/* harmony import */ var next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_auth_providers_okta__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5654);
/* harmony import */ var next_auth_providers_okta__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_okta__WEBPACK_IMPORTED_MODULE_4__);





const authOptions = {
    adapter: (0,_next_auth_prisma_adapter__WEBPACK_IMPORTED_MODULE_2__.PrismaAdapter)(_lib_prisma__WEBPACK_IMPORTED_MODULE_1__/* .prisma */ ._),
    providers: [
        ..._env_server__WEBPACK_IMPORTED_MODULE_0__/* .serverEnv.AUTH_PROVIDER */ .N.AUTH_PROVIDER === 'github' ? [
            next_auth_providers_github__WEBPACK_IMPORTED_MODULE_3___default()({
                clientId: _env_server__WEBPACK_IMPORTED_MODULE_0__/* .serverEnv.GITHUB_ID */ .N.GITHUB_ID,
                clientSecret: _env_server__WEBPACK_IMPORTED_MODULE_0__/* .serverEnv.GITHUB_SECRET */ .N.GITHUB_SECRET,
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
                        if (!userOrgs.find((org)=>org.login === _env_server__WEBPACK_IMPORTED_MODULE_0__/* .serverEnv.GITHUB_ALLOWED_ORG */ .N.GITHUB_ALLOWED_ORG
                        )) {
                            profile.notAllowed = true;
                        }
                        return profile;
                    }
                }
            }), 
        ] : [],
        ..._env_server__WEBPACK_IMPORTED_MODULE_0__/* .serverEnv.AUTH_PROVIDER */ .N.AUTH_PROVIDER === 'okta' ? [
            next_auth_providers_okta__WEBPACK_IMPORTED_MODULE_4___default()({
                clientId: _env_server__WEBPACK_IMPORTED_MODULE_0__/* .serverEnv.OKTA_CLIENT_ID */ .N.OKTA_CLIENT_ID,
                clientSecret: _env_server__WEBPACK_IMPORTED_MODULE_0__/* .serverEnv.OKTA_CLIENT_SECRET */ .N.OKTA_CLIENT_SECRET,
                issuer: _env_server__WEBPACK_IMPORTED_MODULE_0__/* .serverEnv.OKTA_ISSUER */ .N.OKTA_ISSUER
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
    secret: _env_server__WEBPACK_IMPORTED_MODULE_0__/* .serverEnv.NEXTAUTH_SECRET */ .N.NEXTAUTH_SECRET
};


/***/ }),

/***/ 8047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "_": () => (/* binding */ prisma)
/* harmony export */ });
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3524);
/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);

const prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();
if (false) {}


/***/ })

};
;