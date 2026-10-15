/**
 * Validates the generated static publication before deployment.
 * Prevents canonical, sitemap, metadata, and unresolved-template regressions.
 */

import { access, readFile } from "node:fs/promises";
import { constants } from "node:fs";
import { join } from "node:path";

const siteUrl = "https://saltwaterfishpro.com";
const outputDir = join(process.cwd(), "dist", "public");
const sitemap = await readFile(join(outputDir, "sitemap.xml"), "utf8");
const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
  match => match[1]
);

if (urls.length === 0) {
  throw new Error(
    "Publication validation failed: sitemap.xml contains no URLs."
  );
}

const failures = [];

for (const url of urls) {
  if (!url.startsWith(siteUrl)) {
    failures.push(`Sitemap URL uses an unexpected host: ${url}`);
    continue;
  }

  const path = url.slice(siteUrl.length);
  if (path !== "/" && !path.endsWith("/")) {
    failures.push(`Sitemap URL is missing its trailing slash: ${url}`);
  }

  const relativeFile = path === "/" ? "index.html" : join(path, "index.html");
  const file = join(outputDir, relativeFile);

  try {
    await access(file, constants.R_OK);
  } catch {
    failures.push(
      `No generated static HTML exists for ${url}: ${relativeFile}`
    );
    continue;
  }

  const html = await readFile(file, "utf8");
  if (html.includes("%VITE_")) {
    failures.push(`Unresolved Vite placeholder emitted in ${relativeFile}.`);
  }

  const canonical = html.match(/<link rel="canonical" href="([^"]+)"/i)?.[1];
  if (canonical !== url) {
    failures.push(
      `Canonical mismatch in ${relativeFile}: expected ${url}, found ${canonical ?? "none"}.`
    );
  }

  const title = html.match(/<title>([^<]+)<\/title>/i)?.[1]?.trim();
  if (!title) {
    failures.push(`Missing title in ${relativeFile}.`);
  } else if (title.length > 60) {
    failures.push(
      `Title exceeds 60 characters in ${relativeFile}: ${title.length}.`
    );
  }

  const description = html
    .match(/<meta name="description" content="([^"]+)"/i)?.[1]
    ?.trim();
  if (!description) {
    failures.push(`Missing meta description in ${relativeFile}.`);
  } else if (description.length < 110 || description.length > 160) {
    failures.push(
      `Meta description outside the 110–160 character target in ${relativeFile}: ${description.length}.`
    );
  }
}

if (failures.length > 0) {
  throw new Error(`Publication validation failed:\n- ${failures.join("\n- ")}`);
}

console.log(`Publication validation passed for ${urls.length} canonical URLs.`);
