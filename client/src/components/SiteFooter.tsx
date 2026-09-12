/**
 * Saltwater Fish Pro | Marine Field Journal design system
 * Footer closes the experience with deep-ocean framing, transparent standards, and useful reading paths.
 */

import { Link } from "wouter";
import { assets } from "@/data/siteContent";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <Link href="/" className="brand brand--footer" aria-label="Saltwater Fish Pro home">
            <img src={assets.mark} alt="Saltwater Fish Pro" className="brand__mark brand__mark--full" />
            <span className="brand__caption"><strong>Marine Field Journal</strong><small>Stability-first guidance</small></span>
          </Link>
          <p className="site-footer__statement">Clear guidance for healthier, more stable mixed saltwater systems.</p>
        </div>
        <div className="site-footer__links">
          <div>
            <span className="eyebrow eyebrow--aqua">Explore</span>
            <Link href="/start-here">Start here</Link>
            <Link href="/guides/water-stability">Water & stability</Link>
            <Link href="/guides/equipment">Equipment</Link>
          </div>
          <div>
            <span className="eyebrow eyebrow--aqua">Standards</span>
            <Link href="/editorial-standards">Editorial standards</Link>
            <Link href="/disclosure">Affiliate disclosure</Link>
            <Link href="/about">About the publication</Link>
          </div>
        </div>
      </div>
      <div className="site-footer__bottom">
        <span>© {new Date().getFullYear()} Saltwater Fish Pro</span>
        <span>Built for thoughtful systems, not quick fixes.</span>
      </div>
    </footer>
  );
}
