/**
 * Canonical URL utilities for Saltwater Fish Pro.
 * Cloudflare Pages serves nested static routes as directories, so published
 * routes intentionally end in a trailing slash.
 */

export const siteUrl = "https://saltwaterfishpro.com";

export function canonicalPath(path: string): string {
  if (!path || path === "/" || !path.startsWith("/")) {
    return path;
  }

  const suffixIndex = path.search(/[?#]/);
  const pathname = suffixIndex === -1 ? path : path.slice(0, suffixIndex);
  const suffix = suffixIndex === -1 ? "" : path.slice(suffixIndex);
  const normalizedPathname = pathname.replace(/\/+$/, "") || "/";

  return `${normalizedPathname === "/" ? "/" : `${normalizedPathname}/`}${suffix}`;
}

export function canonicalUrl(path: string): string {
  return `${siteUrl}${canonicalPath(path)}`;
}

export function absoluteUrl(path: string): string {
  return path.startsWith("http") ? path : `${siteUrl}${path}`;
}
