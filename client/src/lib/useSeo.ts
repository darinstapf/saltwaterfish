/**
 * Saltwater Fish Pro | Marine Field Journal design system
 * SEO metadata stays precise, human-readable, and consistent with the stability-first editorial standard.
 */

import { useEffect } from "react";

type SeoOptions = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  schema?: Record<string, unknown>;
};

const siteUrl = "https://saltwaterfishpro.com";

export function useSeo({ title, description, path, type = "website", schema }: SeoOptions) {
  useEffect(() => {
    document.title = title;
    const canonicalUrl = `${siteUrl}${path}`;
    const setMeta = (selector: string, attribute: "name" | "property", value: string) => {
      let element = document.head.querySelector<HTMLMetaElement>(selector);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute(attribute, selector.includes("og:") ? "property" : "name");
        document.head.appendChild(element);
      }
      element.content = value;
    };

    setMeta('meta[name="description"]', "name", description);
    setMeta('meta[property="og:title"]', "property", title);
    setMeta('meta[property="og:description"]', "property", description);
    setMeta('meta[property="og:type"]', "property", type);
    setMeta('meta[property="og:url"]', "property", canonicalUrl);
    setMeta('meta[name="twitter:card"]', "name", "summary_large_image");

    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = canonicalUrl;

    const schemaId = "saltwaterfishpro-schema";
    document.getElementById(schemaId)?.remove();
    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = schemaId;
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => document.getElementById(schemaId)?.remove();
  }, [title, description, path, type, schema]);
}

export const publicationSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Saltwater Fish Pro",
  url: siteUrl,
  description: "A stability-first editorial guide for mixed saltwater aquarium systems.",
  inLanguage: "en-US",
};
