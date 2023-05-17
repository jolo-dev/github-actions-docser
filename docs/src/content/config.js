"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.collections = void 0;
const astro_content_1 = require("astro:content");
const consts_1 = require("../consts");
const docs = (0, astro_content_1.defineCollection)({
    schema: astro_content_1.z.object({
        title: astro_content_1.z.string().default(consts_1.SITE.title),
        description: astro_content_1.z.string().default(consts_1.SITE.description),
        lang: astro_content_1.z.literal('en-us').default(consts_1.SITE.defaultLanguage),
        dir: astro_content_1.z.union([astro_content_1.z.literal('ltr'), astro_content_1.z.literal('rtl')]).default('ltr'),
        image: astro_content_1.z
            .object({
            src: astro_content_1.z.string(),
            alt: astro_content_1.z.string(),
        })
            .optional(),
        ogLocale: astro_content_1.z.string().optional(),
    }),
});
exports.collections = { docs };
