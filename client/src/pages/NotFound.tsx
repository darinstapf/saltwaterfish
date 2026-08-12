/**
 * Saltwater Fish Pro | Marine Field Journal design system
 * The fallback page keeps visitors in the editorial journey with a calm, useful return path.
 */

import { ArrowLeft } from "lucide-react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export default function NotFound() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="not-found"><span className="eyebrow eyebrow--teal">404 · Lost in the current</span><h1>Let’s find a clearer path.</h1><p>The guide you were looking for is not here yet, but the right next decision probably is.</p><Link href="/" className="button-link button-link--primary"><ArrowLeft size={17} /> Return to the field guide</Link></main>
      <SiteFooter />
    </div>
  );
}
