/**
 * Saltwater Fish Pro | Static publication rendering
 * Produces unique, crawlable HTML files for Cloudflare Pages from the React publication routes.
 */

import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join } from "node:path";
import { pathToFileURL } from "node:url";

const root = process.cwd();
const outputDir = join(root, "dist", "public");
const template = await readFile(join(outputDir, "index.html"), "utf8");
const { renderPublicationRoute, publicationRoutes } = await import(pathToFileURL(join(root, "dist", "server", "entry-server.js")).href);

const siteUrl = "https://saltwaterfishpro.com";
const defaultImage = `${siteUrl}/images/hero-mixed-reef.jpg`;
const routes = publicationRoutes;

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function metaTags(seo) {
  const title = seo?.title ?? "Saltwater Fish Pro | A Stability-First Field Guide";
  const description = seo?.description ?? "Stability-first mixed saltwater aquarium guidance.";
  const canonical = `${siteUrl}${seo?.path ?? "/"}`;
  const image = seo?.image ?? defaultImage;
  const type = seo?.type ?? "website";
  const jsonLd = seo?.schema ? `<script type="application/ld+json">${JSON.stringify(seo.schema)}</script>` : "";
  return [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<meta property="og:site_name" content="Saltwater Fish Pro" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:type" content="${escapeHtml(type)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    `<meta property="og:image:alt" content="Saltwater Fish Pro editorial guide" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    jsonLd,
  ].join("\n    ");
}

async function writeRoute(route) {
  const { appHtml, seo } = renderPublicationRoute(route);
  const rendered = template
    .replace("<!-- publication-seo -->", metaTags(seo))
    .replace('<div id="root"></div>', `<div id="root">${appHtml}</div>`);

  const destination = route === "/" ? join(outputDir, "index.html") : route === "/404" ? join(outputDir, "404.html") : join(outputDir, route.slice(1), "index.html");
  await mkdir(dirname(destination), { recursive: true });
  await writeFile(destination, rendered, "utf8");
}

await rm(join(outputDir, "404.html"), { force: true });
await Promise.all(routes.map(writeRoute));

const sitemapRoutes = routes.filter((route) => route !== "/404");
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapRoutes.map((route) => `  <url><loc>${siteUrl}${route}</loc><lastmod>2026-09-12</lastmod></url>`).join("\n")}\n</urlset>\n`;
await writeFile(join(outputDir, "sitemap.xml"), sitemap, "utf8");
