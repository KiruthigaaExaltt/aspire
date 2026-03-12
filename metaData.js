import data from "./src/components/constants/metaData.json";
// import blogsData from "./src/constants/blogsData.ts";
import { paths } from "./src/components/constants/paths.ts";

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

const publishedData = data.filter((item) => String(item?.status).toLowerCase() === "published") ?? [];

const metaData = [
  ...publishedData.map((item) => ({
    ...item,
    slug: normalizeSlug(item?.slug),
    canonical_link: normalizeCanonical(item?.canonical_link),
    meta_keywords: Array.isArray(item?.meta_keywords) ? item?.meta_keywords?.join(", ") : item?.meta_keywords,
  })),
];

export default metaData;
