type MetaEntry = {
    slug?: string;
    meta_title?: string;
    meta_description?: string;
    meta_keywords?: string | string[];
    canonical_link?: string;
    og_image?: string;
    status?: string;
    [key: string]: unknown;
};

type UseMetaTagsOptions = {
    getPath?: () => string;
    includeTwitter?: boolean;
    twitterCard?: string;
    setOgUrl?: boolean;
};

declare function useMetaTags(
    metaArray: MetaEntry[],
    options?: UseMetaTagsOptions
): void;

export default useMetaTags;
