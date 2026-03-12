/**
 * Normalizes a URL slug/path to ensure it:
 * 1. Has a leading slash
 * 2. Has a trailing slash
 * 3. Has no duplicate slashes
 * 4. Is lowercase (optional, but standard for SEO)
 */
export function normalizePath(value: string | undefined | null): string {
    if (!value) return "/";

    let raw = String(value).trim().toLowerCase();
    try {
        raw = decodeURIComponent(raw);
    } catch (e) {
        // Fallback to raw if decode fails
    }
    if (!raw || raw === "/") return "/";

    // Ensure leading slash
    const withLeading = raw.startsWith("/") ? raw : `/${raw}`;

    // Collapse multiple slashes
    const collapsed = withLeading.replace(/\/+/g, "/");

    // Ensure trailing slash
    return collapsed.endsWith("/") ? collapsed : `${collapsed}/`;
}
