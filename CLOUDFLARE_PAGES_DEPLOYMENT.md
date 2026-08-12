# Saltwater Fish Pro — Cloudflare Pages Deployment Guide

This project is a static React/Vite site prepared for deployment through Cloudflare Pages using the connected GitHub repository.

## Production configuration

| Cloudflare Pages setting | Value |
|---|---|
| **Repository** | `darinstapf/saltwaterfish` |
| **Production branch** | `main` |
| **Preview branch** | `dev` and pull-request branches |
| **Build command** | `pnpm build` |
| **Build output directory** | `dist/public` |
| **Root directory** | `/` |
| **Node version** | Use the current Node 22.x LTS-compatible build environment |

The output directory is intentionally `dist/public`: the project’s build command bundles the static client into that folder while retaining a separate local development server artifact under `dist`.

## Recommended deployment workflow

1. Connect `darinstapf/saltwaterfish` in the Cloudflare Pages dashboard.
2. Configure the production branch as `main`, the build command as `pnpm build`, and the build output directory as `dist/public`.
3. Use the `dev` branch for implementation changes and review Cloudflare preview deployments before merging a pull request into `main`.
4. Add `saltwaterfishpro.com` and `www.saltwaterfishpro.com` in the project’s Custom Domains settings once the first production build is successful.
5. Confirm that the Google verification meta tag is visible in the rendered homepage source, then complete verification in Google Search Console.

## HubSpot activation later

The newsletter area is currently a clearly labeled, non-submitting placeholder. Before activating it, create the newsletter form in HubSpot and supply its portal ID and form ID. Then configure the following Cloudflare Pages build variables and update the form component to load HubSpot’s embed script:

| Variable | Source |
|---|---|
| `VITE_HUBSPOT_PORTAL_ID` | HubSpot portal settings |
| `VITE_HUBSPOT_FORM_ID` | The created Saltwater Fish Pro newsletter form |

After setting these values, test a real subscription in a Cloudflare preview deployment before merging to `main`. The actual HubSpot IDs should not be committed to the repository.

## SEO assets included

The site includes a Google Search Console verification meta tag, crawl directives in `client/public/robots.txt`, an initial sitemap at `client/public/sitemap.xml`, page-specific metadata and structured data for the home and representative article pages, Open Graph metadata, and SPA routing support through `client/public/_redirects`.

## References

[1] [Cloudflare Pages: Deploy a React site](https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/) documents Git-based deployment settings and production/preview deployment behavior.

[2] [Vite: Deploying a Static Site](https://vite.dev/guide/static-deploy) documents static build output and Cloudflare Pages Git deployment concepts.
