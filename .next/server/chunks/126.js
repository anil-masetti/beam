"use strict";
exports.id = 126;
exports.ids = [126];
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

/***/ 5712:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ uploadImage)
/* harmony export */ });
async function uploadImage(file) {
    const signResponse = await fetch('/api/sign-cloudinary', {
        method: 'POST'
    });
    const signData = await signResponse.json();
    const formData = new FormData();
    formData.append('file', file);
    formData.append('api_key', signData.apiKey);
    formData.append('timestamp', signData.timestamp);
    formData.append('signature', signData.signature);
    formData.append('folder', signData.folder);
    formData.append('image_metadata', 'true');
    const response = await fetch(`https://api.cloudinary.com/v1_1/${signData.cloudName}/image/upload`, {
        method: 'POST',
        body: formData
    });
    const data = await response.json();
    if (data.error) {
        throw Error(data.error.message);
    }
    return {
        url: data.secure_url,
        originalFilename: data.original_filename,
        width: data.width,
        dpi: Number(data.image_metadata.DPI)
    };
}


/***/ })

};
;