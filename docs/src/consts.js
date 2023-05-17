"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SIDEBAR = exports.ALGOLIA = exports.COMMUNITY_INVITE_URL = exports.GITHUB_EDIT_URL = exports.KNOWN_LANGUAGE_CODES = exports.KNOWN_LANGUAGES = exports.OPEN_GRAPH = exports.SITE = void 0;
exports.SITE = {
    title: 'Documentation',
    description: 'Your website description.',
    defaultLanguage: 'en-us',
};
exports.OPEN_GRAPH = {
    image: {
        src: 'https://github.com/withastro/astro/blob/main/.github/assets/banner.png?raw=true',
        alt: 'astro logo on a starry expanse of space,' +
            ' with a purple saturn-like planet floating in the right foreground',
    },
    twitter: 'astrodotbuild',
};
exports.KNOWN_LANGUAGES = {
    English: 'en',
};
exports.KNOWN_LANGUAGE_CODES = Object.values(exports.KNOWN_LANGUAGES);
exports.GITHUB_EDIT_URL = `https://github.com/withastro/astro/tree/main/examples/docs`;
exports.COMMUNITY_INVITE_URL = `https://astro.build/chat`;
// See "Algolia" section of the README for more information.
exports.ALGOLIA = {
    indexName: 'XXXXXXXXXX',
    appId: 'XXXXXXXXXX',
    apiKey: 'XXXXXXXXXX',
};
exports.SIDEBAR = {
    en: {
        'Section Header': [
            { text: 'Introduction', link: 'en/introduction' },
            { text: 'Page 2', link: 'en/page-2' },
            { text: 'Page 3', link: 'en/page-3' },
        ],
        'Another Section': [{ text: 'Page 4', link: 'en/page-4' }],
    },
};
