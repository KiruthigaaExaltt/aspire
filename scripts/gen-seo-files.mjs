import { readFile, writeFile, mkdir } from "fs/promises";
import { join, dirname } from "path";
import metaData from "./metaData.node.mjs";

const SITE = "https://aspireexcel.com";
const OUT_DIR = "dist";
const iso = new Date().toISOString().split("T")[0]; // sitemap lastmod
const DEFAULT_OG_IMAGE = "/favIcon.png";

function normalizeSlug(value) {
  const slug = String(value ?? "").trim();
  if (!slug || slug === "/") return "/";
  const withLeading = slug.startsWith("/") ? slug : `/${slug}`;
  const collapsed = withLeading.replace(/\/+/g, "/");
  return collapsed.endsWith("/") ? collapsed : `${collapsed}/`;
}

function slugToOutputDir(slug) {
  const normalized = normalizeSlug(slug);
  if (normalized === "/") return "";
  return normalized.replace(/^\/+|\/+$/g, "");
}

// Read base index.html
const baseHtmlPath = join(OUT_DIR, "index.html");
const baseHtml = await readFile(baseHtmlPath, "utf8");

console.log("🔍 DEBUG: Base HTML content snippet:");
console.log(baseHtml.substring(0, 1000));
console.log("🔍 DEBUG: Looking for placeholders in base HTML:");
console.log("  __TITLE_PLACEHOLDER__ found:", baseHtml.includes("__TITLE_PLACEHOLDER__"));
console.log("  __DESCRIPTION_PLACEHOLDER__ found:", baseHtml.includes("__DESCRIPTION_PLACEHOLDER__"));

function normalizeKeywords(pageMeta) {
  if (typeof pageMeta?.meta_keyword === "string") return pageMeta.meta_keyword;
  if (typeof pageMeta?.meta_keywords === "string") return pageMeta.meta_keywords;
  if (Array.isArray(pageMeta?.meta_keywords)) return pageMeta.meta_keywords.join(", ");
  return "";
}

function resolveOgImage(pageMeta) {
  const image = pageMeta?.og_image || pageMeta?.ogImage || DEFAULT_OG_IMAGE;
  if (!image) return `${SITE}${DEFAULT_OG_IMAGE}`;
  if (/^https?:\/\//i.test(image)) return image;
  return `${SITE}${image.startsWith("/") ? image : `/${image}`}`;
}

// Function to write HTML with meta for each page
async function generatePage(pageMeta) {
  const normalizedSlug = normalizeSlug(pageMeta?.slug);

  let html = baseHtml
    .replaceAll("__TITLE_PLACEHOLDER__", pageMeta.meta_title)
    .replaceAll("__DESCRIPTION_PLACEHOLDER__", pageMeta.meta_description)
    .replaceAll("__KEYWORDS_PLACEHOLDER__", normalizeKeywords(pageMeta))
    .replaceAll("__OG_TITLE_PLACEHOLDER__", pageMeta.meta_title)
    .replaceAll("__OG_DESCRIPTION_PLACEHOLDER__", pageMeta.meta_description)
    .replaceAll("__OG_URL_PLACEHOLDER__", `${SITE}${normalizedSlug}`)
    .replaceAll("__OG_IMAGE_PLACEHOLDER__", resolveOgImage(pageMeta))
    .replaceAll("__OG_IMAGE_ALT_PLACEHOLDER__", pageMeta.meta_title)
    .replaceAll("__CANONICAL_PLACEHOLDER__", pageMeta.canonical_link || `${SITE}`)
    .replaceAll("__H1_PLACEHOLDER__", pageMeta.meta_title);

  // Debug: Check if replacement worked
  if (normalizedSlug === "/engineering-industry-insights-blog/") {
    console.log("🔍 DEBUG: After replacement for blog page:");
    console.log("  Title in HTML:", html.match(/<title[^>]*>([^<]*)<\/title>/)?.[1] || "NOT FOUND");
    console.log("  Expected title:", pageMeta.meta_title);
    console.log("  HTML snippet:", html.substring(html.indexOf("<title"), html.indexOf("</title>") + 8));
  }

  // Determine file path for route
  const routePath =
    normalizedSlug === "/"
      ? join(OUT_DIR, "index.html")
      : join(OUT_DIR, slugToOutputDir(normalizedSlug), "index.html");

  // Create folder if needed
  await mkdir(dirname(routePath), { recursive: true });
  await writeFile(routePath, html, "utf8");

  // Debug: Verify what was actually written
  if (normalizedSlug === "/engineering-industry-insights-blog/") {
    const writtenContent = await readFile(routePath, "utf8");
    console.log("🔍 DEBUG: Verification - what was actually written:");
    console.log("  Title in written file:", writtenContent.match(/<title[^>]*>([^<]*)<\/title>/)?.[1] || "NOT FOUND");
  }

  console.log(`✅ Generated HTML with meta for: ${normalizedSlug}`);
}

// Generate HTML files for all pages
for (const pageMeta of metaData) {
  await generatePage(pageMeta);
}

// Ensure root index.html is always rendered with real meta tags
const homeMeta =
  metaData.find((m) => {
    const canonical = String(m?.canonical_link || "").replace(/\/+$/, "");
    return canonical === SITE;
  }) || metaData[0];

if (homeMeta) {
  await generatePage({ ...homeMeta, slug: "/" });
}

// -----------------------------
// 2️⃣ Generate sitemap.xml
// -----------------------------
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${metaData
    .map(
      (p) => `  <url>
    <loc>${SITE}${normalizeSlug(p.slug)}</loc>
    <lastmod>${iso}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${p.priority ?? 0.8}</priority>
  </url>`
    )
    .join("\n")}
</urlset>
`;

await writeFile(join(OUT_DIR, "sitemap.xml"), sitemap.trim() + "\n");
console.log("✅ sitemap.xml generated");

// -----------------------------
// 3️⃣ Generate robots.txt
// -----------------------------
const robots = `# Robots.txt for aspireexcel.com

User-agent: *
Allow: /
Disallow: /privacy-policy

Sitemap: ${SITE}/sitemap.xml
`;

await writeFile(join(OUT_DIR, "robots.txt"), robots.trim() + "\n");
console.log("✅ robots.txt generated");

console.log(`\n🎉 Generated ${metaData.length} pages with SEO meta tags!`);
