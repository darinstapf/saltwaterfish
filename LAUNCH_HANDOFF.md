# Saltwater Fish Pro — Production Launch Handoff

## What is implemented in this release

The new publication now builds to static, route-specific HTML for the homepage, four topic hubs, twelve articles, troubleshooting, and the required publication-information pages. Every published route receives unique page content, canonical metadata, Open Graph metadata, and JSON-LD before browser JavaScript runs. The build produces a static `404.html`, an updated sitemap with canonical published pages only, open crawl directives, and Cloudflare cache/security headers.

The release also includes a stable editorial article template with a direct answer, source notes, visible author policy, breadcrumb schema, checklists, question sections, and contextual internal links. The HubSpot embed is implemented but deliberately remains inactive until the two required environment variables exist.

## External actions required before production cutover

| Owner | Required action | Completion standard |
|---|---|---|
| Site owner / Cloudflare | Deploy the `dev` branch as a Pages preview | All public routes load as static pages; direct article links work without a client-side redirect |
| Site owner / Cloudflare | Map `saltwaterfishpro.com` and `www.saltwaterfishpro.com`; select the apex domain as canonical | `www` makes a one-hop 301 redirect to `https://saltwaterfishpro.com/` |
| Site owner / Cloudflare | Build and apply the legacy WordPress redirect map | Every valuable legacy URL sends a one-hop 301 to the closest new equivalent, not indiscriminately to the home page |
| Site owner / HubSpot | Create the newsletter form, checklist delivery, consent text, and welcome sequence | Provide `VITE_HUBSPOT_PORTAL_ID` and `VITE_HUBSPOT_FORM_ID`; a preview subscription succeeds and delivers the promised checklist |
| Site owner | Choose and configure a public editorial contact address | Replace the temporary contact-page notice with the working address or contact workflow |
| Site owner / Google | Verify Search Console after domain cutover and submit `/sitemap.xml` | Homepage and first article are indexed or queued with no canonical mismatch |
| Site owner / Bing | Verify Bing Webmaster Tools and submit `/sitemap.xml` | Bing receives the same canonical sitemap |
| Site owner | Add affiliate programs only after approval and testing | Affiliate disclosure appears beside each recommendation; no affiliate link is published before program approval |

## Pre-cutover smoke test

1. Open `view-source:` for the homepage and a published article. Confirm that each contains its unique title, canonical URL, description, Open Graph image, JSON-LD, and visible article content.
2. Open every URL listed in `https://saltwaterfishpro.com/sitemap.xml`. Each must be a canonical 200 response with content that matches its sitemap purpose.
3. Visit a deliberately invalid URL. Cloudflare Pages should serve the site’s static 404 page with an HTTP 404 status; do not add an SPA catch-all redirect.
4. Check mobile navigation and the horizontal Stability Thread on an actual phone after deployment.
5. Confirm the HubSpot newsletter does **not** collect data until it is configured, then test an actual submit after configuration.

## Content operating standard after launch

New articles should be published only when they add an answer that is distinct, accurate, source-aware, and connected to the existing system. Do not manufacture hands-on testing, ratings, testimonials, author credentials, veterinary guidance, or product outcomes. When commercial links begin, disclose the material connection where the reader sees the recommendation and state the system assumptions that make the recommendation relevant.
