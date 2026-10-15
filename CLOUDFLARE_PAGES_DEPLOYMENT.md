# Saltwater Fish Pro — Cloudflare Pages Deployment Guide

This project is a static React/Vite site prepared for deployment through Cloudflare Pages using the connected GitHub repository. Its current hero, feature, testing, lifestyle, and logo images are optimized and tracked under `client/public/images/`, so the site is self-contained for a Git-based Pages build.

## Production configuration

| Cloudflare Pages setting   | Value                                                      |
| -------------------------- | ---------------------------------------------------------- |
| **Repository**             | `darinstapf/saltwaterfish`                                 |
| **Production branch**      | `main`                                                     |
| **Preview branch**         | `dev` and pull-request branches                            |
| **Build command**          | `pnpm build`                                               |
| **Build output directory** | `dist/public`                                              |
| **Root directory**         | `/`                                                        |
| **Node version**           | Use the current Node 22.x LTS-compatible build environment |

The output directory is intentionally `dist/public`. The build command now prerenders every published article, guide, trust page, and `404.html` into unique static HTML files. Each public route therefore ships with its own body content, title, canonical URL, Open Graph data, and JSON-LD before browser JavaScript runs.

## Recommended deployment workflow

1. Connect `darinstapf/saltwaterfish` in the Cloudflare Pages dashboard.
2. Configure the production branch as `main`, the build command as `pnpm build`, and the build output directory as `dist/public`.
3. Use the `dev` branch for implementation changes and review Cloudflare preview deployments before merging a pull request into `main`.
4. Review the `dev` preview, including direct loads of article URLs and a deliberately invalid URL that must receive the static 404 page.
5. Inventory the legacy WordPress URLs before the production switch. Add one-hop 301 redirects from valuable legacy URLs to their closest new equivalent; do not redirect every old URL to the homepage.
6. Add `saltwaterfishpro.com` and `www.saltwaterfishpro.com` in the project’s Custom Domains settings once the first production build is successful. Choose `https://saltwaterfishpro.com/` as the canonical host and force `www` to make a single 301 redirect to it.
7. Confirm that the Google verification meta tag and unique static metadata are visible in the raw homepage and article HTML, then complete verification in Google Search Console and submit `/sitemap.xml`.

## HubSpot activation later

The newsletter area is intentionally inactive until a HubSpot form exists. Before activation, create the newsletter form in HubSpot and configure the following Cloudflare Pages build variables:

| Variable                 | Source                                         |
| ------------------------ | ---------------------------------------------- |
| `VITE_HUBSPOT_PORTAL_ID` | HubSpot portal settings                        |
| `VITE_HUBSPOT_FORM_ID`   | The created Saltwater Fish Pro newsletter form |

The component automatically loads HubSpot’s official embed script only when both variables are present at build time. After setting these values, test a real subscription in a Cloudflare preview deployment, confirm the promised checklist is delivered, and verify consent/unsubscribe settings before merging to `main`. The actual HubSpot IDs should not be committed to the repository.

## SEO assets included

The site includes a Google Search Console verification meta tag, crawl directives in `client/public/robots.txt`, a build-generated sitemap containing only published canonical pages, Article and BreadcrumbList schema, WebSite and Organization schema, route-specific social metadata, optimized Git-tracked image assets, static 404 behavior, and cache/security headers for Cloudflare Pages. The public `robots.txt` also permits broad crawling and explicitly permits `OAI-SearchBot` and `GPTBot`; crawler access is not a substitute for publication-quality content and evidence.

## Final production verification

| Check                                                             | Expected result                                                                           |
| ----------------------------------------------------------------- | ----------------------------------------------------------------------------------------- |
| `https://saltwaterfishpro.com/articles/mixed-saltwater-blueprint` | Returns the complete article HTML without waiting for JavaScript                          |
| `view-source:` of homepage and an article                         | Shows unique title, description, canonical, Open Graph image, and JSON-LD                 |
| `/sitemap.xml`                                                    | Lists only live canonical URLs; no 404s or generic pages                                  |
| Unknown route                                                     | Returns the static `404.html` with HTTP 404 behavior                                      |
| HubSpot form                                                      | Remains inactive with no IDs; submits and delivers the checklist after IDs are configured |
| Legacy WordPress URLs                                             | Redirect in one hop to a relevant new destination after cutover                           |

## Required `www` hostname repair

At the time of this update, `https://www.saltwaterfishpro.com/` returns Cloudflare **522** rather than a redirect. This is a zone and hostname configuration issue, not a repository defect. Complete this configuration in the Cloudflare account before requesting a fresh Ahrefs crawl:

1. In **Workers & Pages → saltwaterfish → Custom domains**, attach `www.saltwaterfishpro.com` as well as `saltwaterfishpro.com` and wait until both show **Active**.
2. In **Bulk Redirects**, create a list entry from `www.saltwaterfishpro.com` to `https://saltwaterfishpro.com` with status **301**, preserving query strings, subpath matching, and the path suffix.
3. Create a Bulk Redirect rule that uses that list.
4. In **DNS**, create or correct a proxied `A` record named `www` with placeholder address `192.0.2.1`. The address is intentionally non-routable because Cloudflare processes the redirect at its edge; Cloudflare’s Pages guidance specifies this pattern for a `www` redirect.
5. Confirm `curl -I https://www.saltwaterfishpro.com/` returns a single 301 response with `Location: https://saltwaterfishpro.com/`. Repeat the check for `/robots.txt` and an article path to ensure the path is preserved.

Do not use the `*.pages.dev` deployment hostname as the redirect target. The `www` host must redirect directly to the production apex URL in one hop.

## References

[1] [Cloudflare Pages: Deploy a React site](https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/) documents Git-based deployment settings and production/preview deployment behavior.

[2] [Vite: Deploying a Static Site](https://vite.dev/guide/static-deploy) documents static build output and Cloudflare Pages Git deployment concepts.

[3] [Cloudflare Pages: Redirecting www to domain apex](https://developers.cloudflare.com/pages/how-to/www-redirect/) documents the custom-domain, Bulk Redirect, and proxied placeholder-DNS configuration for this exact hostname pattern.
