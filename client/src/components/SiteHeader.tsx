/**
 * Saltwater Fish Pro | Marine Field Journal design system
 * Header uses calm, high-contrast ocean framing and concise editorial navigation.
 */

import { useState } from "react";
import { useLocation } from "wouter";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PublicationLink } from "@/components/PublicationLink";
import { canonicalPath } from "@/lib/urls";
import { assets, navigation } from "@/data/siteContent";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [rawLocation] = useLocation();
  const location = canonicalPath(rawLocation);
  const isHome = location === "/";

  return (
    <header className={`site-header ${isHome ? "site-header--home" : ""}`}>
      <div className="site-header__inner">
        <PublicationLink
          href="/"
          className="brand"
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

        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map(item => (
            <PublicationLink
              key={item.href}
              href={item.href}
              className={`site-nav__link ${location === canonicalPath(item.href) ? "site-nav__link--active" : ""}`}
            >
              <span>{item.label}</span>
              <i aria-hidden="true" />
            </PublicationLink>
          ))}
        </nav>

        <div className="site-header__actions">
          <PublicationLink
            href="/guides"
            className="icon-action"
            aria-label="Browse Saltwater Fish Pro guides"
          >
            <Search size={19} strokeWidth={1.7} />
          </PublicationLink>
          <Button
            type="button"
            variant="ghost"
            className="menu-trigger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(open => !open)}
          >
            <span className="menu-trigger__label">
              {menuOpen ? "Close" : "Menu"}
            </span>
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-menu__index">
            <span>Field index</span>
            <span>01—05</span>
          </div>
          {navigation.map((item, index) => (
            <PublicationLink
              key={item.href}
              href={item.href}
              className={`mobile-menu__link ${location === canonicalPath(item.href) ? "mobile-menu__link--active" : ""}`}
              onClick={() => setMenuOpen(false)}
            >
              <small>0{index + 1}</small>
              <span>{item.label}</span>
            </PublicationLink>
          ))}
          <PublicationLink
            href="/troubleshoot"
            className="mobile-menu__link mobile-menu__link--accent"
            onClick={() => setMenuOpen(false)}
          >
            <small>↗</small>
            <span>Solve a Tank Problem</span>
          </PublicationLink>
          <div className="mobile-menu__seal" aria-hidden="true">
            <img src={assets.mark} alt="" />
          </div>
        </div>
      )}
    </header>
  );
}
