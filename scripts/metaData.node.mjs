import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const normalizeSlug = (value) => {
    const slug = String(value ?? "").trim();
    if (!slug || slug === "/") return "/";

    const withLeading = slug.startsWith("/") ? slug : `/${slug}`;
    const collapsed = withLeading.replace(/\/+/g, "/");
    return collapsed.endsWith("/") ? collapsed : `${collapsed}/`;
};

const normalizeCanonical = (value) => {
    const canonical = String(value ?? "").trim();
    if (!canonical) return canonical;

    try {
        const url = new URL(canonical);
        url.pathname = normalizeSlug(url.pathname);
        return url.toString();
    } catch {
        return canonical;
    }
};

const __dirname = dirname(fileURLToPath(import.meta.url));
const configDir = resolve(__dirname, "../src/components/constants");

// Read metaData.json
const data = JSON.parse(
    readFileSync(resolve(configDir, "metaData.json"), "utf-8"),
);

// Read blogData.json
let blogData = [];
try {
    blogData = JSON.parse(
        readFileSync(resolve(configDir, "blogData.json"), "utf-8"),
    );
} catch (e) {
    console.warn("⚠️ Could not read blogData.json, using empty array.");
}

// Extract blog path from paths.ts to avoid .ts import issues in Node
let blogPath = "/engineering-industry-insights-blog/";
try {
    const pathsContent = readFileSync(resolve(configDir, "paths.ts"), "utf-8");
    const blogPathMatch = pathsContent.match(/blog:\s*["']([^"']+)["']/);
    if (blogPathMatch) {
        blogPath = blogPathMatch[1];
    }
} catch (e) {
    console.warn("⚠️ Could not read paths.ts, using default blog path.");
}

const publishedData = data.filter((item) => String(item?.status).toLowerCase() === "published") ?? [];

const blogsData =
    blogData
        ?.filter((item) => String(item?.status).toLowerCase() === "published")
        ?.sort((a, b) => new Date(b.created_at) - new Date(a.created_at)) ?? [];

const blogMetaData =
    publishedData.find((item) => normalizeSlug(item?.slug) === normalizeSlug(blogPath)) ??
    publishedData[0];

const metaData = [
    ...publishedData.map((item) => ({
        ...item,
        slug: normalizeSlug(item?.slug),
        canonical_link: normalizeCanonical(item?.canonical_link),
        meta_keywords: Array.isArray(item?.meta_keywords) ? item?.meta_keywords?.join(", ") : item?.meta_keywords,
    })),
    ...[
        ...(blogsData?.length > 0
            ? blogsData.map((b) => ({
                slug: normalizeSlug(b?.slug ?? blogMetaData?.slug),
                meta_title: b?.meta_title ?? blogMetaData?.meta_title,
                meta_description:
                    b?.meta_description ?? blogMetaData?.meta_description,
                og_image: b?.og_image ?? blogMetaData?.og_image,
                meta_keywords:
                    Array.isArray(b?.meta_keywords) ? b?.meta_keywords?.join(", ") : (b?.meta_keywords ?? (Array.isArray(blogMetaData?.meta_keywords) ? blogMetaData?.meta_keywords?.join(", ") : blogMetaData?.meta_keywords)),
                canonical_link: normalizeCanonical(
                    b?.canonical_link ?? blogMetaData?.canonical_link,
                ),
                priority: 0.8,
            }))
            : []),
    ],
];

export default metaData;
