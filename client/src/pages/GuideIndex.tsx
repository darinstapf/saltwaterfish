/**
 * Saltwater Fish Pro | Topic hub template
 * Hubs collect complete, evidence-led articles around one recurring mixed-system decision.
 */

import { ArrowUpRight, Compass, Droplets, Fish, Wrench } from "lucide-react";
import { useLocation } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { PublicationLink } from "@/components/PublicationLink";
import { SiteFooter } from "@/components/SiteFooter";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { StabilityThreadNav } from "@/components/StabilityThreadNav";
import { useSeo } from "@/lib/useSeo";
import { canonicalUrl } from "@/lib/urls";
import { assets, pillars } from "@/data/siteContent";
import { articles } from "@/data/articles";

const guides = [
  {
    slug: "build-plan",
    icon: Compass,
    label: "Build & Plan",
    title: "Plan the system before you fill it.",
    copy: "Tank size, service access, cycling, water preparation, and a practical maintenance plan.",
    topic: "Build & Plan",
    image: assets.blueprint,
    alt: "A copperband butterflyfish in a carefully planned mixed reef",
  },
  {
    slug: "water-stability",
    icon: Droplets,
    label: "Water & Stability",
    title: "Protect the conditions that make everything else possible.",
    copy: "Measurement, water changes, algae context, and the restraint to change one variable at a time.",
    topic: "Water & Stability",
    image: assets.testing,
    alt: "Careful saltwater testing beside a healthy aquarium",
  },
  {
    slug: "livestock",
    icon: Fish,
    label: "Livestock",
    title: "Choose a community—not a collection.",
    copy: "Compatibility, introduction order, health-risk planning, and patient observation.",
    topic: "Livestock",
    image: assets.hero,
    alt: "A healthy mixed saltwater system with compatible fish and coral",
  },
  {
    slug: "equipment",
    icon: Wrench,
    label: "Equipment",
    title: "Select hardware in context.",
    copy: "Decision frameworks for skimming, circulation, redundancy, testing, and maintainable care.",
    topic: "Equipment",
    image: assets.realSystem,
    alt: "A refined saltwater aquarium integrated into a calm home setting",
  },
];

const guideSeo: Record<string, { title: string; description: string }> = {
  "/start-here": {
    title: "Start Here: Saltwater Aquarium Guides | Saltwater Fish Pro",
    description:
      "Start with the saltwater aquarium guide that fits your current stage, then connect each practical decision to the whole mixed-system care plan.",
  },
  "/guides": {
    title: "Saltwater Aquarium Guides | Saltwater Fish Pro",
    description:
      "Explore stability-first saltwater aquarium guides for planning, water care, equipment, livestock, troubleshooting, and long-term mixed-system decisions.",
  },
  "/guides/build-plan": {
    title: "Build & Plan | Saltwater Fish Pro",
    description:
      "Explore practical guides for planning a stable saltwater aquarium, from tank size and cycling to water preparation, service access, and sustainable care.",
  },
  "/guides/water-stability": {
    title: "Water & Stability | Saltwater Fish Pro",
    description:
      "Use stability-first guidance for water testing, water changes, algae context, and deliberate adjustments in a mixed saltwater aquarium system.",
  },
  "/guides/livestock": {
    title: "Livestock | Saltwater Fish Pro",
    description:
      "Plan a compatible mixed saltwater community with thoughtful introduction order, health-risk awareness, and patient daily observation.",
  },
  "/guides/equipment": {
    title: "Equipment | Saltwater Fish Pro",
    description:
      "Choose aquarium equipment based on your system, with practical frameworks for skimming, circulation, redundancy, testing, and service access.",
  },
};

export default function GuideIndex() {
  const [rawLocation] = useLocation();
  // Cloudflare Pages serves nested static routes as directories and may retain a trailing slash after hydration.
  // Normalize it so /guides/equipment/ resolves to the same topic hub as /guides/equipment.
  const location =
    rawLocation.length > 1 ? rawLocation.replace(/\/+$/, "") : rawLocation;
  const activeGuide = guides.find(
    guide => location === `/guides/${guide.slug}`
  );
  const heading = activeGuide
    ? activeGuide.title
    : "Find the next right decision for your system.";
  const intro = activeGuide
    ? activeGuide.copy
    : "Start at the stage that matches your aquarium today. Each field guide links a practical decision to the whole living system.";
  const visibleArticles = activeGuide
    ? articles.filter(article => article.category === activeGuide.topic)
    : articles;
  const seo = guideSeo[location] ?? guideSeo["/guides"];

  useSeo({
    title: seo.title,
    description: seo.description,
    path: location,
    schema: {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: activeGuide?.label ?? "Saltwater Aquarium Guides",
      description: seo.description,
      url: canonicalUrl(location),
    },
  });

  return (
    <div className="site-shell guide-page">
      <SiteHeader />
      <main>
        <section
          className={`guide-hero ${activeGuide ? "guide-hero--chapter" : "guide-hero--index"}`}
        >
          <div className="guide-hero__content">
            <nav
              className="breadcrumbs breadcrumbs--inverse"
              aria-label="Breadcrumb"
            >
              <PublicationLink href="/">Field guide</PublicationLink>
              <span>/</span>
              <span>{activeGuide?.label ?? "Guides"}</span>
            </nav>
            <span className="eyebrow eyebrow--aqua">
              Saltwater Fish Pro guides
            </span>
            <h1>{heading}</h1>
            <p>{intro}</p>
          </div>
          {activeGuide && (
            <div className="guide-hero__visual reef-window">
              <img
                src={activeGuide.image}
                alt={activeGuide.alt}
                width="1200"
                height="800"
              />
            </div>
          )}
        </section>
        <StabilityThreadNav
          current={
            activeGuide?.topic === "Build & Plan"
              ? "Plan"
              : activeGuide?.topic === "Water & Stability"
                ? "Water"
                : activeGuide?.topic === "Equipment"
                  ? "Equipment"
                  : activeGuide?.topic === "Livestock"
                    ? "Livestock"
                    : undefined
          }
        />
        {activeGuide ? (
          <>
            <section className="guide-feature">
              <div className="guide-feature__image reef-window">
                <img
                  src={activeGuide.image}
                  alt={activeGuide.alt}
                  width="1200"
                  height="800"
                />
              </div>
              <div className="guide-feature__content">
                <span className="eyebrow eyebrow--teal">
                  In context · {activeGuide.label}
                </span>
                <h2>Use the system to frame the decision.</h2>
                <p>
                  {activeGuide.copy} Each article below identifies the
                  assumption, trade-off, and next observation—not only the
                  answer that looks neat in a list.
                </p>
                <span className="guide-feature__folio">
                  SWF / {activeGuide.label}
                </span>
              </div>
            </section>
            <section className="guide-thread-section">
              <div className="guide-thread-section__intro">
                <span className="eyebrow">The stability thread</span>
                <p>
                  This chapter is one connected part of a mixed system. Follow
                  the thread before treating a single component in isolation.
                </p>
              </div>
              <div className="guide-thread" aria-hidden="true" />
              <div className="guide-thread__list">
                {pillars.map(pillar => (
                  <div
                    className={
                      pillar.title === activeGuide.label.split(" ")[0]
                        ? "guide-thread__item guide-thread__item--current"
                        : "guide-thread__item"
                    }
                    key={pillar.number}
                  >
                    <span>{pillar.number}</span>
                    <strong>{pillar.title}</strong>
                  </div>
                ))}
              </div>
            </section>
          </>
        ) : (
          <>
            <section className="guide-index-observation">
              <div className="guide-index-observation__image reef-window">
                <img
                  src={assets.blueprint}
                  alt="A copperband butterflyfish moving through a carefully maintained mixed reef"
                  width="1200"
                  height="800"
                />
              </div>
              <div className="guide-index-observation__copy">
                <span className="eyebrow eyebrow--teal">
                  System map / 01.01
                </span>
                <h2>Every system has a next right decision.</h2>
                <p>
                  Start from conditions you can observe today. These chapters
                  turn broad reefkeeping advice into an ordered, calmer path
                  through a living system.
                </p>
                <div className="guide-index-observation__record">
                  <span>System map</span>
                  <b>Plan → Water → Equipment → Livestock → Care</b>
                </div>
              </div>
            </section>
            <section
              className="guide-index-thread"
              aria-label="Saltwater Fish Pro stability thread"
            >
              {pillars.map(pillar => (
                <div key={pillar.number}>
                  <span>{pillar.number}</span>
                  <strong>{pillar.title}</strong>
                  <small>{pillar.summary}</small>
                </div>
              ))}
            </section>
            <section className="guide-chapters">
              {guides.map((guide, index) => {
                const Icon = guide.icon;
                return (
                  <PublicationLink
                    href={`/guides/${guide.slug}`}
                    className={`guide-chapter guide-chapter--${index + 1}`}
                    key={guide.label}
                  >
                    <div className="guide-chapter__index">
                      <span>Chapter</span>
                      <strong>0{index + 1}</strong>
                    </div>
                    <div className="guide-chapter__copy">
                      <div className="guide-chapter__label">
                        <Icon size={18} strokeWidth={1.5} />
                        <span>{guide.label}</span>
                      </div>
                      <h2>{guide.title}</h2>
                      <p>{guide.copy}</p>
                      <div className="guide-chapter__observation">
                        <span>Field direction</span>
                        <p>
                          Explore the decisions, source notes, and practical
                          checklists that keep this chapter connected to the
                          full system.
                        </p>
                      </div>
                    </div>
                    <div className="guide-chapter__image reef-window">
                      <img
                        src={guide.image}
                        alt={guide.alt}
                        width="1200"
                        height="800"
                      />
                    </div>
                    <ArrowUpRight className="guide-chapter__arrow" size={21} />
                  </PublicationLink>
                );
              })}
            </section>
          </>
        )}
        <section
          className="guide-article-list"
          aria-labelledby="guide-article-heading"
        >
          <div>
            <span className="eyebrow eyebrow--teal">
              Published field guides
            </span>
            <h2 id="guide-article-heading">Useful now. Relevant later.</h2>
            <p>
              Every guide includes a direct answer, contextual trade-offs,
              source notes, and a practical next action.
            </p>
          </div>
          <div className="guide-article-list__items">
            {visibleArticles.map(article => (
              <PublicationLink
                href={`/articles/${article.slug}`}
                className="guide-article-list__item"
                key={article.slug}
              >
                <span>{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <small>
                  {article.readTime} · Reviewed {article.reviewed}
                </small>
                <ArrowUpRight size={19} />
              </PublicationLink>
            ))}
          </div>
        </section>
        <div className="newsletter-wrap">
          <NewsletterSignup />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
