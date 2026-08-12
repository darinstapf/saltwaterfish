/**
 * Saltwater Fish Pro | Marine Field Journal design system
 * Header uses calm, high-contrast ocean framing and concise editorial navigation.
 */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { assets, navigation } from "@/data/siteContent";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [location] = useLocation();
  const isHome = location === "/";

  return (
    <header className={`site-header ${isHome ? "site-header--home" : ""}`}>
      <div className="site-header__inner">
        <Link href="/" className="brand" aria-label="Saltwater Fish Pro home">
          <img src={assets.mark} alt="" className="brand__mark" />
          <span>Saltwater Fish Pro</span>
        </Link>

        <nav className="site-nav" aria-label="Primary navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="site-nav__link">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="site-header__actions">
          <Link href="/search" className="icon-action" aria-label="Search Saltwater Fish Pro">
            <Search size={19} strokeWidth={1.7} />
          </Link>
          <Button
            type="button"
            variant="ghost"
            className="menu-trigger"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </Button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="mobile-menu__link"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link href="/troubleshoot" className="mobile-menu__link mobile-menu__link--accent" onClick={() => setMenuOpen(false)}>
            Solve a Tank Problem
          </Link>
        </div>
      )}
    </header>
  );
}
