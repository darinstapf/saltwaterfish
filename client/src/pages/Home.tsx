/**
 * Saltwater Fish Pro | Marine Field Journal design system
 * Homepage follows an editorial current: image-led authority, reader pathways, and stability-first learning.
 */

import { ArrowDown, ArrowUpRight, Compass, Droplets, Fish, Wrench } from "lucide-react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { ArticleCard } from "@/components/ArticleCard";
import { assets, latestStories, pillars } from "@/data/siteContent";
import { useSeo, publicationSchema } from "@/lib/useSeo";

const readerPaths = [
  { icon: Compass, label: "Planning a tank", title: "Start with a system you can sustain.", copy: "Build with intention before the first equipment purchase.", to: "/articles/mixed-saltwater-blueprint" },
  { icon: Droplets, label: "Improving a system", title: "Restore balance with context.", copy: "Move from symptoms to a calmer, measured next step.", to: "/guides/water-stability" },
  { icon: Wrench, label: "Optimizing a mature system", title: "Refine the details that matter.", copy: "Make deliberate upgrades to flow, care, and resilience.", to: "/guides/equipment" },
];

export default function Home() {
  useSeo({ title: "Saltwater Fish Pro | A Stability-First Field Guide", description: "Plan, care for, and improve a mixed saltwater aquarium with stability-first guides for water, equipment, livestock, and long-term system care.", path: "/", schema: publicationSchema });
  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className="home-hero" style={{ backgroundImage: `linear-gradient(90deg, rgba(3, 24, 36, .94) 0%, rgba(3, 24, 36, .71) 34%, rgba(3, 24, 36, .10) 67%), url(${assets.hero})` }}>
          <div className="home-hero__content"><span className="eyebrow eyebrow--aqua">The stability-first field guide</span><h1>Build a healthier,<br />more stable<br />saltwater aquarium.</h1><p>Expert guidance for real mixed saltwater systems—from the first plan to the next right decision.</p><div className="hero-actions"><Link href="/articles/mixed-saltwater-blueprint" className="button-link button-link--primary">Build a stable system <ArrowUpRight size={18} /></Link><Link href="/troubleshoot" className="button-link button-link--outline">Solve a tank problem <ArrowUpRight size={18} /></Link></div></div>
          <a className="hero-scroll" href="#reader-paths"><span>Explore the field guide</span><ArrowDown size={18} /></a>
        </section>
        <section className="reader-paths" id="reader-paths"><div className="section-intro"><span className="eyebrow">Start where your system is today</span><p>Whether you are planning, recovering, or refining, a stable system begins with the next decision—not all of them at once.</p></div><div className="reader-paths__grid">{readerPaths.map((path) => { const Icon = path.icon; return <Link href={path.to} className="reader-path" key={path.label}><div className="reader-path__icon"><Icon size={23} strokeWidth={1.4} /></div><span className="eyebrow">{path.label}</span><h2>{path.title}</h2><p>{path.copy}</p><ArrowUpRight size={20} className="reader-path__arrow" /></Link>; })}</div></section>
        <section className="feature-story"><div className="feature-story__image reef-window"><img src={assets.blueprint} alt="A copperband butterflyfish moving through a carefully maintained mixed reef" /></div><div className="feature-story__content"><span className="eyebrow eyebrow--teal">Start here · 14 min read</span><h2>The Mixed Saltwater Aquarium Blueprint</h2><p>Build the full system before you build the display. This guide connects planning, water, equipment, livestock, and care into one calmer path forward.</p><div className="feature-story__metadata"><span>Reviewed August 2026</span><span>Field guide</span></div><Link href="/articles/mixed-saltwater-blueprint" className="text-link">Read the blueprint <ArrowUpRight size={17} /></Link></div></section>
        <section className="stability-framework"><div className="stability-framework__heading"><span className="eyebrow eyebrow--aqua">The Saltwater Fish Pro method</span><h2>Stability is not one number.<br />It is a living relationship.</h2></div><div className="stability-thread" aria-hidden="true" /><div className="stability-framework__list">{pillars.map((pillar) => <article className="pillar" key={pillar.number}><span className="pillar__number">{pillar.number}</span><h3>{pillar.title}</h3><p>{pillar.summary}</p></article>)}</div></section>
        <section className="problem-section"><div className="problem-section__intro"><span className="eyebrow">When the tank feels off</span><h2>Start with a better question.</h2><p>Skip the quick fix. Find a guide that helps you observe the system, isolate the change, and make the next move with confidence.</p></div><div className="problem-links">{["Cloudy water", "Unwanted algae", "Unstable parameters", "Fish acting differently", "Coral decline", "New-tank uncertainty"].map((problem) => <Link href="/guides/water-stability" className="problem-link" key={problem}><span>{problem}</span><ArrowUpRight size={18} /></Link>)}</div></section>
        <section className="equipment-feature"><div className="equipment-feature__image reef-window"><img src={assets.testing} alt="Careful saltwater testing beside a healthy aquarium" /></div><div className="equipment-feature__content"><span className="eyebrow eyebrow--teal">Equipment in context</span><h2>Tools are only useful when the system tells you what to measure.</h2><p>Every equipment guide begins with the environment, maintenance routine, and decision it needs to support. We explain the trade-offs before the recommendation.</p><Link href="/articles/protein-skimmer-context" className="text-link">Explore equipment guidance <ArrowUpRight size={17} /></Link></div></section>
        <section className="stories-section"><div className="stories-section__heading"><span className="eyebrow">Latest field notes</span><h2>Useful now. Relevant later.</h2><Link href="/guides" className="text-link">Browse all guidance <ArrowUpRight size={17} /></Link></div><div className="story-grid">{latestStories.map((story) => <ArticleCard key={story.title} {...story} />)}</div></section>
        <section className="real-systems"><div className="real-systems__content"><span className="eyebrow eyebrow--aqua">Real systems, real lessons</span><h2>Every thriving display has a history worth studying.</h2><p>See how intent, routine, and patient adjustments shape a system long after the aquascape is complete.</p><Link href="/guides" className="button-link button-link--light">Explore real systems <ArrowUpRight size={18} /></Link></div><div className="real-systems__image"><img src={assets.realSystem} alt="A refined mixed saltwater aquarium installed in a calm modern coastal home" /></div></section>
        <div className="newsletter-wrap"><NewsletterSignup /></div>
        <section className="standards-strip"><Fish size={22} strokeWidth={1.3} /><p><strong>Carefully considered.</strong> Original analysis, review dates, transparent recommendations, and a welfare-first perspective—because trust is part of a healthy system.</p><Link href="/editorial-standards">Our standards <ArrowUpRight size={16} /></Link></section>
      </main>
      <SiteFooter />
    </div>
  );
}
