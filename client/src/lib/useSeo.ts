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
  image?: string;
};

const siteUrl = "https://saltwaterfishpro.com";
let ssrSeo: SeoOptions | null = null;

export function resetSsrSeo() {
  ssrSeo = null;
}

export function getSsrSeo() {
  return ssrSeo;
}

export function useSeo({ title, description, path, type = "website", schema, image }: SeoOptions) {
  if (typeof document === "undefined") {
    ssrSeo = { title, description, path, type, schema, image };
  }

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
    setMeta('meta[property="og:image"]', "property", image ?? `${siteUrl}/images/hero-mixed-reef.jpg`);
    setMeta('meta[name="twitter:card"]', "name", "summary_large_image");
    setMeta('meta[name="twitter:title"]', "name", title);
    setMeta('meta[name="twitter:description"]', "name", description);
    setMeta('meta[name="twitter:image"]', "name", image ?? `${siteUrl}/images/hero-mixed-reef.jpg`);

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
  }, [title, description, path, type, schema, image]);
}

export const publicationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      name: "Saltwater Fish Pro",
      url: siteUrl,
      description: "A stability-first editorial guide for mixed saltwater aquarium systems.",
      inLanguage: "en-US",
    },
    {
      "@type": "Organization",
      name: "Saltwater Fish Pro",
      url: siteUrl,
      logo: `${siteUrl}/images/saltwater-fish-pro-logo.png`,
    },
  ],
};
