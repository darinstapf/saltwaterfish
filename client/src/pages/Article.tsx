/**
 * Saltwater Fish Pro | Publication article template
 * Every article presents a clear answer, transparent authorship, source notes, and practical next actions.
 */

import { Link, useRoute } from "wouter";
import { ArrowLeft, ArrowUpRight, CalendarDays, Clock3, ExternalLink, Share2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { StabilityThreadNav } from "@/components/StabilityThreadNav";
import { pillars } from "@/data/siteContent";
import { getArticle } from "@/data/articles";
import { useSeo } from "@/lib/useSeo";
import NotFound from "./NotFound";

const siteUrl = "https://saltwaterfishpro.com";

export default function Article() {
  const [, params] = useRoute("/articles/:slug");
  const article = getArticle(params?.slug ?? "mixed-saltwater-blueprint");

  if (!article) return <NotFound />;

  const articleUrl = `${siteUrl}/articles/${article.slug}`;
  const imageUrl = `${siteUrl}${article.image}`;

  useSeo({
    title: `${article.title} | Saltwater Fish Pro`,
    description: article.description,
    path: `/articles/${article.slug}`,
    type: "article",
    image: imageUrl,
    schema: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          headline: article.title,
          description: article.description,
          image: imageUrl,
          datePublished: article.published,
          dateModified: article.published,
          inLanguage: "en-US",
          mainEntityOfPage: articleUrl,
          author: { "@type": "Organization", name: "Saltwater Fish Pro Editorial Desk", url: `${siteUrl}/about` },
          publisher: { "@type": "Organization", name: "Saltwater Fish Pro", url: siteUrl, logo: { "@type": "ImageObject", url: `${siteUrl}/images/saltwater-fish-pro-logo.png` } },
          about: ["mixed saltwater aquarium", "aquarium stability", article.category],
        },
        {
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Field Guide", item: siteUrl },
            { "@type": "ListItem", position: 2, name: article.category, item: `${siteUrl}/guides/${article.category === "Equipment" ? "equipment" : article.category === "Livestock" ? "livestock" : article.category === "Water & Stability" ? "water-stability" : "build-plan"}` },
            { "@type": "ListItem", position: 3, name: article.title, item: articleUrl },
          ],
        },
      ],
    },
  });

  return (
    <div className="site-shell article-page">
      <SiteHeader />
      <main>
        <StabilityThreadNav current={article.category === "Equipment" ? "Equipment" : article.category === "Livestock" ? "Livestock" : article.category === "Water & Stability" ? "Water" : "Plan"} />
        <section className="article-hero">
          <div className="article-hero__image" style={{ backgroundImage: `linear-gradient(90deg, rgba(4,25,37,.88), rgba(4,25,37,.20)), url(${article.image})` }} />
          <div className="article-hero__content">
            <nav className="breadcrumbs breadcrumbs--inverse" aria-label="Breadcrumb"><Link href="/">Field guide</Link><span>/</span><Link href={`/guides/${article.category === "Equipment" ? "equipment" : article.category === "Livestock" ? "livestock" : article.category === "Water & Stability" ? "water-stability" : "build-plan"}`}>{article.category}</Link></nav>
            <Link href="/start-here" className="back-link"><ArrowLeft size={16} /> Start here</Link>
            <span className="eyebrow eyebrow--aqua">{article.label}</span>
            <h1>{article.title}</h1>
            <p>{article.description}</p>
            <div className="article-meta article-meta--inverse"><span><Clock3 size={15} /> {article.readTime}</span><span><CalendarDays size={15} /> Published {article.published}</span></div>
            <div className="article-hero__record"><span>By</span><b>Saltwater Fish Pro Editorial Desk</b><span>System type</span><b>Mixed marine</b><span>Reviewed</span><b>{article.reviewed}</b></div>
          </div>
        </section>

        <section className="reading-layout">
          <aside className="reading-rail">
            <span className="eyebrow">In this guide</span>
            {article.sections.map((section) => <a href={`#${section.id}`} key={section.id}>{section.heading}</a>)}
            <a href="#sources">Sources & notes</a>
            <button className="reading-rail__share" type="button" aria-label="Share guide"><Share2 size={16} /> Share guide</button>
          </aside>

          <article className="article-body">
            <p className="article-intro">{article.intro}</p>
            <section className="article-answer" aria-labelledby="direct-answer-heading"><span className="eyebrow eyebrow--teal">Direct answer</span><h2 id="direct-answer-heading">The short version</h2><p>{article.answer}</p></section>
            <div className="article-stability-thread" aria-label="The five connected systems: Plan, Water, Equipment, Livestock, and Care"><span className="eyebrow">The stability thread</span><div className="article-stability-thread__line" /><div className="article-stability-thread__labels">{pillars.map((pillar) => <span key={pillar.number}><b>{pillar.number}</b>{pillar.title}</span>)}</div></div>
            {article.sections.map((section, index) => (
              <section key={section.id}>
                <h2 id={section.id}>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {article.slug === "mixed-saltwater-blueprint" && index === 1 && <div className="article-pillars"><div className="article-pillars__core"><span className="eyebrow eyebrow--teal">System plate / 01</span><h3>A stable mixed system</h3><p>Every choice has a relationship to the next. Use this reference to locate the system—not a single isolated component.</p></div><div className="article-pillars__nodes">{pillars.map((pillar) => <div key={pillar.number}><span>{pillar.number}</span><div><h3>{pillar.title}</h3><p>{pillar.summary}</p></div></div>)}</div></div>}
              </section>
            ))}

            <section className="article-checklist" aria-labelledby="checklist-heading"><span className="eyebrow eyebrow--teal">Field checklist</span><h2 id="checklist-heading">Before the next change</h2><ul>{article.checklist.map((item) => <li key={item}>{item}</li>)}</ul></section>
            <div className="do-avoid-grid"><div><span className="eyebrow eyebrow--teal">Do</span><p>{article.doAvoidWatch.do}</p></div><div><span className="eyebrow eyebrow--sand">Avoid</span><p>{article.doAvoidWatch.avoid}</p></div><div><span className="eyebrow">Watch for</span><p>{article.doAvoidWatch.watch}</p></div></div>

            <section className="article-faq" aria-labelledby="faq-heading"><span className="eyebrow">Questions readers ask</span><h2 id="faq-heading">Context changes the answer.</h2>{article.faqs.map((faq) => <div key={faq.question}><h3>{faq.question}</h3><p>{faq.answer}</p></div>)}</section>
            <section className="article-sources" id="sources" aria-labelledby="sources-heading"><span className="eyebrow">Editorial notes</span><h2 id="sources-heading">Sources and further reading</h2><p>Saltwater Fish Pro publishes original editorial analysis. These resources are provided for verification and further study; they do not replace species-specific advice or qualified veterinary care.</p><ol>{article.sources.map((source) => <li key={source.url}><a href={source.url} target="_blank" rel="noreferrer">{source.label} <ExternalLink size={13} /></a><span>{source.note}</span></li>)}</ol></section>
            <section className="article-related" aria-labelledby="related-heading"><span className="eyebrow eyebrow--teal">Continue the field guide</span><h2 id="related-heading">The next useful decision</h2><div>{article.related.map((item) => item.href.startsWith("http") ? <a href={item.href} target="_blank" rel="noreferrer" key={item.href}>{item.label} <ExternalLink size={16} /></a> : <Link href={item.href} key={item.href}>{item.label} <ArrowUpRight size={16} /></Link>)}</div></section>
          </article>
        </section>
        <div className="article-newsletter-wrap"><NewsletterSignup /></div>
      </main>
      <SiteFooter />
    </div>
  );
}
