export declare const SITE: {
    readonly title: "Documentation";
    readonly description: "Your website description.";
    readonly defaultLanguage: "en-us";
};
export declare const OPEN_GRAPH: {
    image: {
        src: string;
        alt: string;
    };
    twitter: string;
};
export declare const KNOWN_LANGUAGES: {
    readonly English: "en";
};
export declare const KNOWN_LANGUAGE_CODES: "en"[];
export declare const GITHUB_EDIT_URL = "https://github.com/withastro/astro/tree/main/examples/docs";
export declare const COMMUNITY_INVITE_URL = "https://astro.build/chat";
export declare const ALGOLIA: {
    indexName: string;
    appId: string;
    apiKey: string;
};
export type Sidebar = Record<(typeof KNOWN_LANGUAGE_CODES)[number], Record<string, {
    text: string;
    link: string;
}[]>>;
export declare const SIDEBAR: Sidebar;
//# sourceMappingURL=consts.d.ts.map