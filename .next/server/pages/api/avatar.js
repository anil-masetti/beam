"use strict";
(() => {
var exports = {};
exports.id = 403;
exports.ids = [403];
exports.modules = {

/***/ 7129:
/***/ ((module) => {

module.exports = import("crypto-hash");;

/***/ }),

/***/ 6614:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__) => {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var crypto_hash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7129);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([crypto_hash__WEBPACK_IMPORTED_MODULE_0__]);
crypto_hash__WEBPACK_IMPORTED_MODULE_0__ = (__webpack_async_dependencies__.then ? await __webpack_async_dependencies__ : __webpack_async_dependencies__)[0];

const COLOR_NAMES = [
    'red',
    'orange',
    'yellow',
    'green',
    'blue',
    'purple', 
];
const COLOR_SHADES = [
    500,
    600,
    700,
    800
];
const COLORS = {
    red: {
        500: '#ff455d',
        600: '#dd243c',
        700: '#c11027',
        800: '#8f0718'
    },
    orange: {
        500: '#f35815',
        600: '#c43c02',
        700: '#962d00',
        800: '#672002'
    },
    yellow: {
        500: '#a78103',
        600: '#835c01',
        700: '#5c4716',
        800: '#41320c'
    },
    green: {
        500: '#27b648',
        600: '#13862e',
        700: '#19652a',
        800: '#10481d'
    },
    blue: {
        500: '#1e9de7',
        600: '#0e73cc',
        700: '#144eb6',
        800: '#0e3682'
    },
    purple: {
        500: '#8467f3',
        600: '#624bbb',
        700: '#4b3990',
        800: '#3e1f75'
    }
};
async function generateSVG(name) {
    const hash = await (0,crypto_hash__WEBPACK_IMPORTED_MODULE_0__.sha1)(name);
    const colors = [
        ...Array(3)
    ].map((_, idx)=>{
        const colorHash = hash.slice(idx * 2, idx * 2 + 2);
        const nameDecimal = parseInt(colorHash[0], 16);
        const colorName = COLOR_NAMES[nameDecimal % COLOR_NAMES.length];
        const shadeDecimal = parseInt(colorHash[1], 16);
        const colorShade = COLOR_SHADES[shadeDecimal % COLOR_SHADES.length];
        return COLORS[colorName][colorShade];
    });
    const svg = `
<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <circle cx="12" cy="12" r="12" fill="url(#gradient)" transform="rotate(-90, 12, 12)" />
  <defs>
    <radialGradient id="gradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(20.5 2) rotate(127.694) scale(27.8029 21.5408)">
      <stop stop-color="${colors[0]}"/>
      <stop offset="0.751919" stop-color="${colors[1]}"/>
      <stop offset="0.976459" stop-color="${colors[2]}"/>
    </radialGradient>
  </defs>
</svg>
  `.trim();
    return svg;
}
async function handler(req, res) {
    if (req.method !== 'GET') {
        res.setHeader('Allow', [
            'GET'
        ]);
        return res.status(405).json({
            message: `Method ${req.method} Not Allowed`
        });
    }
    const { name  } = req.query;
    if (name == null || typeof name !== 'string') {
        return res.status(400).json({
            error: 'Invalid request'
        });
    }
    try {
        const svg = await generateSVG(name);
        res.setHeader('Content-Type', 'image/svg+xml');
        res.setHeader('Cache-Control', `public, immutable, no-transform, s-maxage=31536000, max-age=31536000`);
        res.statusCode = 200;
        res.send(svg);
    } catch (error) {
        return res.status(500).json({
            message: error.message
        });
    }
};

});

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(6614));
module.exports = __webpack_exports__;

})();