/// <reference path="../../.astro/types.d.ts" />
import { z } from 'astro:content';
export declare const collections: {
    docs: {
        schema?: z.ZodObject<{
            title: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            lang: z.ZodDefault<z.ZodLiteral<"en-us">>;
            dir: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"ltr">, z.ZodLiteral<"rtl">]>>;
            image: z.ZodOptional<z.ZodObject<{
                src: z.ZodString;
                alt: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                src: string;
                alt: string;
            }, {
                src: string;
                alt: string;
            }>>;
            ogLocale: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            description: string;
            lang: "en-us";
            dir: "ltr" | "rtl";
            image?: {
                src: string;
                alt: string;
            } | undefined;
            ogLocale?: string | undefined;
        }, {
            title?: string | undefined;
            description?: string | undefined;
            lang?: "en-us" | undefined;
            dir?: "ltr" | "rtl" | undefined;
            image?: {
                src: string;
                alt: string;
            } | undefined;
            ogLocale?: string | undefined;
        }> | ((context: import("astro:content").SchemaContext) => z.ZodObject<{
            title: z.ZodDefault<z.ZodString>;
            description: z.ZodDefault<z.ZodString>;
            lang: z.ZodDefault<z.ZodLiteral<"en-us">>;
            dir: z.ZodDefault<z.ZodUnion<[z.ZodLiteral<"ltr">, z.ZodLiteral<"rtl">]>>;
            image: z.ZodOptional<z.ZodObject<{
                src: z.ZodString;
                alt: z.ZodString;
            }, "strip", z.ZodTypeAny, {
                src: string;
                alt: string;
            }, {
                src: string;
                alt: string;
            }>>;
            ogLocale: z.ZodOptional<z.ZodString>;
        }, "strip", z.ZodTypeAny, {
            title: string;
            description: string;
            lang: "en-us";
            dir: "ltr" | "rtl";
            image?: {
                src: string;
                alt: string;
            } | undefined;
            ogLocale?: string | undefined;
        }, {
            title?: string | undefined;
            description?: string | undefined;
            lang?: "en-us" | undefined;
            dir?: "ltr" | "rtl" | undefined;
            image?: {
                src: string;
                alt: string;
            } | undefined;
            ogLocale?: string | undefined;
        }>) | undefined;
    };
};
//# sourceMappingURL=config.d.ts.map