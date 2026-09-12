/** Saltwater Fish Pro | Canonical publication route inventory for static generation. */

import { articles } from "./articles";

export const publicationRoutes = [
  "/",
  "/start-here",
  "/guides",
  "/guides/build-plan",
  "/guides/water-stability",
  "/guides/livestock",
  "/guides/equipment",
  "/troubleshoot",
  "/editorial-standards",
  "/disclosure",
  "/about",
  "/privacy",
  "/contact",
  ...articles.map((article) => `/articles/${article.slug}`),
  "/404",
];
