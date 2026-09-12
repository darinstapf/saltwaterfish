/**
 * Saltwater Fish Pro | Static publication rendering
 * This entry point renders every canonical route at build time so readers, search engines,
 * social crawlers, and answer engines receive complete content without waiting for JavaScript.
 */

import { renderToString } from "react-dom/server";
import App from "./App";
export { publicationRoutes } from "./data/publicationRoutes";
import { getSsrSeo, resetSsrSeo } from "./lib/useSeo";

export function renderPublicationRoute(path: string) {
  resetSsrSeo();
  const appHtml = renderToString(<App ssrPath={path} />);
  return { appHtml, seo: getSsrSeo() };
}
