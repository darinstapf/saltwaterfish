# Cloudflare Pages Parity Investigation

## Initial direct-deployment finding

On 2026-09-12, `https://80fbc44b.saltwaterfish.pages.dev/` served the Saltwater Fish Pro homepage successfully. The rendered homepage matched the current general design direction and returned the expected logo, reef hero, butterflyfish, testing, and real-system image paths under `/images/`.

The reported visual and asset mismatch is therefore not a root-page platform 404 on this deployment. The next checks must focus on secondary routes, the exact deployment commit/branch, and whether the user is comparing this revision against the newer local `dev` revision that has not yet been merged into `main`.

## Secondary-route finding

The deployed Equipment URL is served by Cloudflare Pages with a trailing slash (`/guides/equipment/`). The client guide code compared this literal URL with slash-free guide slugs, so it hydrated the generic Guides index instead of the Equipment topic hub. All five deployed image files returned HTTP 200, so the reported image issue is caused by the incorrect guide state and an older deployed revision—not a missing-file failure.

The deployed article route `articles/protein-skimmer-context/` renders its correct article, hero image, source notes, and Stability Thread. The trailing-slash failure is isolated to the guide topic-hub selector and has been corrected locally by normalizing trailing slashes before guide matching.
