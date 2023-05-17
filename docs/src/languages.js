"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLanguageFromURL = exports.langPathRegex = exports.KNOWN_LANGUAGE_CODES = exports.KNOWN_LANGUAGES = void 0;
const consts_1 = require("./consts");
Object.defineProperty(exports, "KNOWN_LANGUAGES", { enumerable: true, get: function () { return consts_1.KNOWN_LANGUAGES; } });
Object.defineProperty(exports, "KNOWN_LANGUAGE_CODES", { enumerable: true, get: function () { return consts_1.KNOWN_LANGUAGE_CODES; } });
exports.langPathRegex = /\/([a-z]{2}-?[A-Z]{0,2})\//;
function getLanguageFromURL(pathname) {
    const langCodeMatch = pathname.match(exports.langPathRegex);
    const langCode = langCodeMatch ? langCodeMatch[1] : 'en';
    return langCode;
}
exports.getLanguageFromURL = getLanguageFromURL;
