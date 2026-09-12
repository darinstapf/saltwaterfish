/**
 * Saltwater Fish Pro | Marine Field Journal design system
 * Feature articles pair disciplined long-form typography with image-led, stability-first instruction.
 */

import { Link, useRoute } from "wouter";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3, Share2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { pillars } from "@/data/siteContent";
import { getArticle } from "@/data/articles";
import { useSeo } from "@/lib/useSeo";

export default function Article() {
  const [, params] = useRoute("/articles/:slug");
  const article = getArticle(params?.slug ?? "mixed-saltwater-blueprint");
  useSeo({
    title: `${article.title} | Saltwater Fish Pro`,
    description: article.description,
    path: `/articles/${article.slug}`,
    type: "article",
    schema: {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      dateModified: "2026-08-12",
      inLanguage: "en-US",
      mainEntityOfPage: `https://saltwaterfishpro.com/articles/${article.slug}`,
      publisher: { "@type": "Organization", name: "Saltwater Fish Pro" },
    },
  });

  return (
    <div className="site-shell article-page">
      <SiteHeader />
      <main>
        <section className="article-hero">
          <div className="article-hero__image" style={{ backgroundImage: `linear-gradient(90deg, rgba(4,25,37,.86), rgba(4,25,37,.18)), url(${article.image})` }} />
          <div className="article-hero__content">
            <Link href="/start-here" className="back-link"><ArrowLeft size={16} /> Start here</Link>
            <span className="eyebrow eyebrow--aqua">{article.label}</span>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <div className="article-meta article-meta--inverse">
              <span><Clock3 size={15} /> {article.readTime}</span>
              <span><CalendarDays size={15} /> Reviewed {article.reviewed}</span>
            </div>
            <div className="article-hero__record"><span>Field record</span><b>SWF / {article.slug.slice(0, 10).toUpperCase()}</b><span>System type</span><b>Mixed marine</b><span>Review cadence</span><b>Annual</b></div>
          </div>
        </section>

        <section className="reading-layout">
          <aside className="reading-rail">
            <span className="eyebrow">In this guide</span>
            {article.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.heading}</a>)}
            <button className="reading-rail__share" type="button"><Share2 size={16} /> Share guide</button>
          </aside>

          <article className="article-body">
            <p className="article-intro">{article.intro}</p>
            <div className="article-stability-thread" aria-label="The five connected systems: Plan, Water, Equipment, Livestock, and Care">
              <span className="eyebrow">The stability thread</span>
              <div className="article-stability-thread__line" />
              <div className="article-stability-thread__labels">{pillars.map((pillar) => <span key={pillar.number}><b>{pillar.number}</b>{pillar.title}</span>)}</div>
            </div>
            {article.sections.map((section, index) => (
              <section key={section.id}>
                <h2 id={section.id}>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {article.slug === "mixed-saltwater-blueprint" && index === 1 && (
                  <div className="article-pillars">
                    <div className="article-pillars__core"><span className="eyebrow eyebrow--teal">System plate / 01</span><h3>A stable mixed system</h3><p>Every choice has a relationship to the next. Use this reference to locate the system—not a single isolated component.</p></div>
                    <div className="article-pillars__nodes">{pillars.map((pillar) => <div key={pillar.number}><span>{pillar.number}</span><div><h3>{pillar.title}</h3><p>{pillar.summary}</p></div></div>)}</div>
                  </div>
                )}
              </section>
            ))}
            <div className="do-avoid-grid">
              <div><span className="eyebrow eyebrow--teal">Do</span><p>{article.doAvoidWatch.do}</p></div>
              <div><span className="eyebrow eyebrow--sand">Avoid</span><p>{article.doAvoidWatch.avoid}</p></div>
              <div><span className="eyebrow">Watch for</span><p>{article.doAvoidWatch.watch}</p></div>
            </div>
            <Link href="/guides/water-stability" className="text-link">Explore water & stability <ArrowUpRight size={17} /></Link>
          </article>
        </section>
        <div className="article-newsletter-wrap"><NewsletterSignup /></div>
      </main>
      <SiteFooter />
    </div>
  );
}
