export function normalizePath(value) {
    const raw = String(value ?? "").trim().toLowerCase();
    if (!raw || raw === "/") return "/";

    const withLeading = raw.startsWith("/") ? raw : `/${raw}`;
    const collapsed = withLeading.replace(/\/+/g, "/");
    return collapsed.endsWith("/") ? collapsed : `${collapsed}/`;
}
