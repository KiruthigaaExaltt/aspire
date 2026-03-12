import { useEffect } from "react";

function normalizePath(value) {
  const raw = String(value ?? "").trim().toLowerCase();
  if (!raw || raw === "/") return "/";

  const withLeading = raw.startsWith("/") ? raw : `/${raw}`;
  const collapsed = withLeading.replace(/\/+/g, "/");
  return collapsed.endsWith("/") ? collapsed : `${collapsed}/`;
}

function upsertMeta(attrName, attrValue, content) {
  if (!content) return;
  // Try to find the element by the specific attribute (e.g. name="description" or property="og:title")
  let el = document.head.querySelector(`meta[${attrName}="${attrValue}"]`);

  // If not found, try finding by name instead of property and vice-versa
  if (!el && attrName === 'property') {
    el = document.head.querySelector(`meta[name="${attrValue}"]`);
  } else if (!el && attrName === 'name') {
    el = document.head.querySelector(`meta[property="${attrValue}"]`);
  }

  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attrName, attrValue);
    document.head.appendChild(el);
  }

  // Update the content attribute
  el.setAttribute("content", content);
}

function upsertLink(rel, href) {
  if (!href) return;
  const el = document?.head?.querySelector?.(
    `link[rel="${rel}"]`,
  ) || null;
  if (!el) {
    const newEl = document.createElement("link");
    newEl.setAttribute("rel", rel);
    document.head.appendChild(newEl);
    newEl.setAttribute("href", href);
    return;
  }
  el.setAttribute("href", href);
}

export default function useMetaTags(metaArray, options = {}) {
  useEffect(() => {
    const getPath =
      options.getPath ||
      (() => {
        if (typeof window === "undefined") return "/";
        return normalizePath(window.location.pathname || "/");
      });
    if (
      typeof document === "undefined" ||
      !Array.isArray(metaArray) ||
      !metaArray.length
    )
      return;

    const path = normalizePath(getPath());

    // Create a map with normalized paths for faster lookup
    const map = Object.fromEntries(
      metaArray.map((m) => [normalizePath(m?.slug || "/"), m]),
    );

    const fallback =
      map["/"] ||
      metaArray.find((item) => normalizePath(item?.slug) === "/") ||
      map["/services/"] ||
      metaArray[0];

    // First try exact match
    let found = map[path];

    // If no exact match and path starts with /service/, try fallback to /services
    if (!found && path.startsWith("/service/")) {
      found = map["/services/"] || fallback;
    }

    // Blog post pages are routed as /blog/:slug/ while blog metadata slugs are /:slug/
    if (!found && path.startsWith("/blog/") && path !== "/blog/") {
      const blogSegment = path.replace(/^\/blog\//, "").replace(/\/+$/, "");
      found =
        map[`/${blogSegment}/`] ||
        map[`/blog/${blogSegment}/`] ||
        map["/blog/"] ||
        found;
    }

    // If still no match, use fallback
    if (!found) {
      found = fallback;
    }

    const title = found?.meta_title || fallback?.meta_title || "";
    const desc = found?.meta_description || fallback?.meta_description || "";
    const keywords = found?.meta_keywords || fallback?.meta_keywords || "";
    const canonical = found?.canonical_link || fallback?.canonical_link || (typeof window !== "undefined" ? window.location.href : "");


    // <title>
    if (title) document.title = title;

    // <meta name="description">
    upsertMeta("name", "description", desc);

    // <meta name="keywords">
    if (keywords) {
      upsertMeta("name", "keywords", keywords);
    }

    // Open Graph
    upsertMeta("property", "og:title", title);
    upsertMeta("property", "og:description", desc);
    if (found?.og_image || fallback?.og_image) {
      upsertMeta("property", "og:image", found?.og_image || fallback?.og_image);
      upsertMeta("property", "og:image:alt", title);
    }

    // Optional extras (toggle via options)
    if (options.includeTwitter !== false) {
      upsertMeta("name", "twitter:title", title);
      upsertMeta("name", "twitter:description", desc);
      if (found?.og_image || fallback?.og_image) {
        upsertMeta("name", "twitter:image", found?.og_image || fallback?.og_image);
      }
      upsertMeta(
        "name",
        "twitter:card",
        options.twitterCard || "summary_large_image"
      );
    }
    if (options.setOgUrl !== false && typeof window !== "undefined") {
      upsertMeta("property", "og:url", window.location.href);
    }
    upsertLink("canonical", canonical);
  }, [
    metaArray,
    options.getPath,
    options.includeTwitter,
    options.setOgUrl,
    options.twitterCard,
  ]);
}