/**
 * Saltwater Fish Pro | Marine Field Journal design system
 * Footer closes the experience with deep-ocean framing, transparent standards, and useful reading paths.
 */

import { PublicationLink } from "@/components/PublicationLink";
import { assets } from "@/data/siteContent";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="site-footer__grid">
        <div>
          <PublicationLink
            href="/"
            className="brand brand--footer"
            aria-label="Saltwater Fish Pro home"
          >
            <img
              src={assets.mark}
              alt="Saltwater Fish Pro"
              className="brand__mark brand__mark--full"
            />
            <span className="brand__caption">
              <strong>Saltwater Fish Pro</strong>
              <small>Marine Field Journal · Stability-first guidance</small>
            </span>
          </PublicationLink>
          <p className="site-footer__statement">
            Clear guidance for healthier, more stable mixed saltwater systems.
          </p>
        </div>
        <div className="site-footer__links">
          <div>
            <span className="eyebrow eyebrow--aqua">Explore</span>
            <PublicationLink href="/start-here">Start here</PublicationLink>
            <PublicationLink href="/guides/water-stability">
              Water & stability
            </PublicationLink>
            <PublicationLink href="/guides/equipment">
              Equipment
            </PublicationLink>
          </div>
          <div>
            <span className="eyebrow eyebrow--aqua">Standards</span>
            <PublicationLink href="/editorial-standards">
              Editorial standards
            </PublicationLink>
            <PublicationLink href="/disclosure">
              Affiliate disclosure
            </PublicationLink>
            <PublicationLink href="/about">
              About the publication
            </PublicationLink>
            <PublicationLink href="/privacy">Privacy</PublicationLink>
            <PublicationLink href="/contact">Contact</PublicationLink>
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
