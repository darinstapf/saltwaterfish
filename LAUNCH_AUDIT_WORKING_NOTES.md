# Saltwater Fish Pro — Launch Audit Working Notes

## Initial public-domain observation — 2026-09-12

`https://saltwaterfishpro.com/` currently resolves to a legacy WordPress homepage titled **“Saltwater Aquariums.”** It is not the new Saltwater Fish Pro experience. Its visible navigation, introductory copy, branding, content URLs, and footer all differ from the new site.

**Launch implication:** Do not submit the new sitemap, add the new canonical domain to Google Search Console, or promote the new site publicly until the Cloudflare Pages cutover is ready. The deployment must be accompanied by a domain mapping and redirect plan, preferably preserving or 301-redirecting any legacy URLs that have traffic, links, or search value.

## New release observation — 2026-09-12

The new release at `https://saltfishpro-uk57fqog.manus.space/` renders a crawlable home page with a descriptive title, a clear H1, substantial editorial copy, visible internal links, descriptive image alternative text, an original editorial architecture, and category/article paths.

**Immediate concern:** the release is on a temporary Manus domain while document canonical markup references `https://saltwaterfishpro.com/`. This mismatch is correct only once the intended production domain serves this exact release. Until then, the canonical points to a materially different legacy page.

## Next checks

- Inspect production headers, `robots.txt`, sitemap, redirect behavior, and client-rendering implications.
- Validate title/meta/canonical/structured data across article and guide routes.
- Evaluate content depth, answer formatting, entity signals, author evidence, citation practices, affiliate disclosure, email conversion readiness, and monetization economics.

## Route and article findings — 2026-09-12

The homepage links to `/articles/protein-skimmer-context`, but that exact route renders the site’s designed 404 page. The same issue is likely to affect other story paths not explicitly declared in `App.tsx`, including the water-change article and the cited first-year case-study.

**Launch implication:** the home page, sitemap, and topical content plan advertise pages that do not currently exist. This creates broken internal links, an invalid sitemap, undermines user confidence, wastes crawler resources, and prevents topical clusters from forming.

The primary blueprint article has a strong visual hierarchy, an unambiguous H1, a concise introductory claim, headings, internal section anchors, reviewed date, topic framework, and practical Do/Avoid/Watch content. It currently lacks visible named author credentials, clear primary-source or expert citations, a standalone short answer/summary block, comparison tables, FAQ schema, FAQ content, and deeper contextual outbound references. Article structured data is injected only after client-side JavaScript runs.

## External platform guidance — 2026-09-12

Google’s current generative-AI guidance states that foundational SEO continues to govern visibility in Google AI features. Its stated priorities are non-commodity, unique and first-hand content; a clear technical structure; crawlable/indexed content eligible for snippets; and good page experience. Google explicitly says special AI markup, `llms.txt`, artificial “chunking,” keyword-variant page proliferation, and inauthentic mentions are not required for Google AI features. Google recommends using Search Console’s Generative AI performance reporting when available. Source: <https://developers.google.com/search/docs/fundamentals/ai-optimization-guide>

Google’s people-first content guidance emphasizes original information or analysis, clear author/source information, demonstrable experience and expertise, accurate bylines that lead to author background, and transparent explanation of how content (including AI-assisted content where relevant) was produced. Source: <https://developers.google.com/search/docs/fundamentals/creating-helpful-content>

Google’s Article structured-data documentation recommends applicable article properties including author identity and URL, `datePublished`, `dateModified`, a representative crawlable image, headline, and publisher details. It recommends validating structured data and testing how Google renders URLs through Search Console. Source: <https://developers.google.com/search/docs/appearance/structured-data/article>

OpenAI states that `OAI-SearchBot` is used to surface websites in ChatGPT search features and recommends allowing it in `robots.txt` for sites that want to appear in those search results. The current generic `User-agent: *` allow rule does not block it. Source: <https://developers.openai.com/api/docs/bots>

## Affiliate compliance and revenue findings — 2026-09-12

Amazon’s current U.S. Associates agreement requires a clear, prominent disclosure substantially similar to: **“As an Amazon Associate I earn from qualifying purchases.”** It prohibits implying Amazon endorsement and requires compliance with the program’s policies. Amazon’s disclosure FAQ adds that disclosures should be conspicuous and near the affiliate link or recommendation. Sources: <https://affiliate-program.amazon.com/help/operating/agreement> and <https://affiliate-program.amazon.com/help/node/topic/GHQNZAU6669EZS98>

The current Amazon rate statement lists a 3% fixed standard rate for categories relevant to much aquarium equipment and supplies, including Home Improvement, Pets Products, Lawn & Garden, Outdoors, Tools, and Business & Industrial Supplies. This makes an Amazon-only $1,000/month strategy volume-dependent. Source: <https://affiliate-program.amazon.com/help/node/topic/GRXPHT8U84RAYDXZ>

Amazon’s operating documents say it does not guarantee traffic or commission income, prices/program rates can change, and program content/special links must be used in accordance with the policies. This supports a diversified, not Amazon-only, revenue plan. Sources: <https://affiliate-program.amazon.com/help/operating/agreement> and <https://affiliate-program.amazon.com/help/operating/policies>

## Rendering, payload, and disclosure findings — 2026-09-12

The raw HTTP response for the primary article contains only the app-shell title and an empty `<div id="root"></div>`; it does not include the article headline or body. The article content, route-specific metadata, canonical tag, and Article JSON-LD appear only after client-side JavaScript executes. This is a material crawl/rendering risk for a new site and an avoidable limitation for social crawlers, AI retrieval systems, and users on constrained devices.

The current compiled release has one approximately 617 KB JavaScript bundle and approximately 122 KB CSS bundle before compression. The five image assets are optimized but still account for roughly 1.25 MB in aggregate; the hero image is approximately 375 KB. This does not establish a Core Web Vitals score, but it signals a pre-launch need to measure and optimize LCP/INP/CLS on the production Cloudflare domain.

The current newsletter form simulates success after preventing its submit event and explicitly says that no email was submitted. No HubSpot portal or form ID is configured. Until it is activated, the site has no working owned-audience capture mechanism.

The FTC says material financial or product relationships should be disclosed clearly and conspicuously with the endorsement itself; disclosures should be hard to miss and not be confined to an About/profile page or hidden among links. Reviews must reflect honest opinions, and claims needing substantiation should not be made without support. Sources: <https://www.ftc.gov/business-guidance/resources/ftcs-endorsement-guides-what-people-are-asking> and <https://www.ftc.gov/business-guidance/resources/disclosures-101-social-media-influencers>

## Content, authority, and answer-engine findings — 2026-09-12

The four category hub URLs provide visually distinct guide framing but do not deliver distinct, substantive topic libraries. Their principal calls-to-action point to only one working article or to missing article routes. Several trust links (`/editorial-standards`, `/disclosure`, `/about`) route to the generic guide index rather than a real standards, disclosure, or publication page.

The content inventory contains three draft article records, while only `/articles/mixed-saltwater-blueprint` is registered as an article route. The homepage also promotes a first-year case study that is not in the inventory. There is therefore not yet sufficient topical depth, unique evidence, or reliable internal linking to demonstrate subject-matter coverage to readers, search systems, or LLM retrieval systems.

The site’s generic `User-agent: *` `Allow: /` robots rule should allow current OpenAI search crawling, but crawler permission alone cannot compensate for the production-domain mismatch, missing pages, app-shell-only raw HTML, lack of named expertise, lack of citations, and thin topical clusters.

The strongest answer-engine asset is the site’s stability-first framework, which is distinctive and consistently named. It should become the organizing entity across real guides, field records, glossary definitions, checklists, question-led sections, and firsthand evidence rather than simply a visual motif.

## Monetization model — working assumptions, not a forecast

An Amazon-only approach is inefficient for the proposed category mix. Using a working average order value of $240 and Amazon’s current 3% rate for common relevant categories, $1,000 of monthly commission requires approximately 139 attributed orders and approximately $33,333 in qualifying revenue. At a modeled 4% Amazon click-to-order rate and a 25% article-to-Amazon click-through rate, that equates to roughly 3,472 affiliate click-outs and 13,888 commercial-intent article sessions per month. These are planning assumptions, not expected results.

A diversified illustrative mix reaches approximately $1,000 with lower reliance on any one channel: 42 Amazon orders at a modeled $7.20 commission = $302.40; 17 specialty-retailer orders at a modeled $250 average order value and 7% commission = $297.50; 11 sales of an original $19.99 digital planning toolkit = $219.89; and one clearly labeled $180 sponsor placement = $999.79. Every rate, order value, approval condition, and audience response must be validated before use.

## Recommended 90-day order of operations

**Days 0–14:** Complete the technical/domain cutover, repair all broken internal links, activate real audience capture, create legal/trust pages, verify Search Console and Bing Webmaster Tools, set analytics events for email capture and affiliate click-outs, and choose a static-prerender/SSG path.

**Days 15–45:** Publish 10–12 substantive original guides in four linked clusters: setup and cycling; water chemistry and maintenance; livestock compatibility/health; equipment decision frameworks. Each must have a named author or accurate editorial reviewer, source notes, a concise direct answer, original observation or test evidence where claimed, a decision table/checklist, and relevant internal links.

**Days 46–90:** Launch 3–4 buyer-intent decision guides only where real research/testing supports them; activate selected specialty-retailer or manufacturer relationships in addition to Amazon; launch the first original digital product (for example, a mixed-system planner and maintenance log); and run a five-email welcome sequence that leads subscribers from a useful checklist to relevant evergreen guides rather than immediate product pitches.
