/**
 * Saltwater Fish Pro | Marine Field Journal design system
 * Guide pages preserve the same editorial cadence while helping readers self-select a useful next path.
 */

import { ArrowUpRight, Compass, Droplets, Fish, Wrench } from "lucide-react";
import { Link, useLocation } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { NewsletterSignup } from "@/components/NewsletterSignup";
import { useSeo } from "@/lib/useSeo";
import { assets, pillars } from "@/data/siteContent";

const guides = [
  { slug: "build-plan", icon: Compass, label: "Build & Plan", title: "Plan the system before you fill it.", copy: "Tank size, location, equipment architecture, cycling, and a practical maintenance plan.", to: "/articles/mixed-saltwater-blueprint" },
  { slug: "water-stability", icon: Droplets, label: "Water & Stability", title: "Protect the conditions that make everything else possible.", copy: "Measurement, water changes, nutrient balance, flow, and the restraint to change one variable at a time.", to: "/articles/water-changes-and-stability" },
  { slug: "livestock", icon: Fish, label: "Livestock", title: "Choose a community—not a collection.", copy: "Compatibility, introduction order, care context, and the patient pace of a healthy mixed system.", to: "/articles/mixed-saltwater-blueprint" },
  { slug: "equipment", icon: Wrench, label: "Equipment", title: "Select hardware in context.", copy: "Honest selection criteria for lighting, skimming, circulation, testing, and resilient system care.", to: "/articles/protein-skimmer-context" },
];

const guideVisuals: Record<string, { image?: string; alt?: string; observation: string }> = {
  "build-plan": { observation: "A stable display begins as a serviceable, sustainable plan—not an equipment list." },
  "water-stability": { image: assets.testing, alt: "Careful saltwater testing beside a healthy aquarium", observation: "Measure the pattern before you decide what the water is asking for." },
  livestock: { image: assets.hero, alt: "A healthy mixed saltwater system with compatible fish and coral", observation: "Compatibility is revealed in the whole living system, not a single species profile." },
  equipment: { image: assets.realSystem, alt: "A refined saltwater aquarium integrated into a calm home setting", observation: "The best hardware makes care calmer, more visible, and easier to repeat." },
};

export default function GuideIndex() {
  const [location] = useLocation();
  const activeGuide = guides.find((guide) => location === `/guides/${guide.slug}`);
  const heading = activeGuide ? activeGuide.title : "Find the next right decision for your system.";
  const intro = activeGuide ? activeGuide.copy : "Start at the stage that matches your aquarium today. Each guide is designed to reduce uncertainty without oversimplifying the system.";
  const guideFeature = activeGuide ? {
    "build-plan": { image: assets.blueprint, alt: "A copperband butterflyfish in a carefully planned mixed reef", label: "Field observation · system design", heading: "The display starts with decisions you cannot see later.", copy: "Placement, service access, water preparation, and the pace of the first additions shape the kind of system you will be able to sustain." },
    "water-stability": { image: assets.testing, alt: "Careful saltwater testing beside a healthy aquarium", label: "Field observation · water stability", heading: "Measure the pattern before you adjust it.", copy: "A calm testing routine makes the aquarium easier to understand. The result is not a number to chase—it is context for a more measured next step." },
    livestock: { image: assets.hero, alt: "A healthy mixed saltwater system with compatible fish and coral", label: "Field observation · livestock", heading: "A successful mixed system is a community with room to settle.", copy: "Compatibility is more than a species list. It includes territory, pace, feeding, water conditions, and the time each animal needs to acclimate." },
    equipment: { image: assets.realSystem, alt: "A refined saltwater aquarium integrated into a calm home setting", label: "Field observation · equipment", heading: "The right equipment supports a routine you can actually keep.", copy: "A thoughtful system makes testing, cleaning, and observation easier. Start with access, use case, and maintenance before a model number." },
  }[activeGuide.slug] : null;
  useSeo({ title: `${activeGuide?.label ?? "Saltwater Aquarium Guides"} | Saltwater Fish Pro`, description: intro, path: location, schema: { "@context": "https://schema.org", "@type": "CollectionPage", name: activeGuide?.label ?? "Saltwater Aquarium Guides", description: intro } });

  return (
    <div className="site-shell">
      <SiteHeader />
      <main>
        <section className={`guide-hero ${activeGuide ? "guide-hero--chapter" : "guide-hero--index"}`}><div className="guide-hero__content"><span className="eyebrow eyebrow--aqua">Saltwater Fish Pro guides</span><h1>{heading}</h1><p>{intro}</p></div></section>
        {guideFeature ? <>
          <section className="guide-feature">
            <div className="guide-feature__image reef-window"><img src={guideFeature.image} alt={guideFeature.alt} /></div>
            <div className="guide-feature__content"><span className="eyebrow eyebrow--teal">{guideFeature.label}</span><h2>{guideFeature.heading}</h2><p>{guideFeature.copy}</p><span className="guide-feature__folio">SWF / {activeGuide?.label}</span></div>
          </section>
          <section className="guide-thread-section">
            <div className="guide-thread-section__intro"><span className="eyebrow">The stability thread</span><p>This guide is one chapter in a connected system. Follow the thread to understand the decision in context.</p></div>
            <div className="guide-thread" aria-hidden="true" />
            <div className="guide-thread__list">{pillars.map((pillar) => <div className={pillar.title.toLowerCase() === activeGuide?.label.split(" ")[0].toLowerCase() ? "guide-thread__item guide-thread__item--current" : "guide-thread__item"} key={pillar.number}><span>{pillar.number}</span><strong>{pillar.title}</strong></div>)}</div>
          </section>
          <section className="guide-relations"><div><span className="eyebrow">Related field guides</span><h2>Keep the full system in view.</h2></div><div className="guide-relations__list">{guides.filter((guide) => guide.slug !== activeGuide?.slug).map((guide) => <Link href={`/guides/${guide.slug}`} className="guide-relation" key={guide.slug}><span>{guide.label}</span><ArrowUpRight size={18} /></Link>)}</div></section>
        </> : <>
          <section className="guide-index-observation">
            <div className="guide-index-observation__image reef-window"><img src={assets.blueprint} alt="A copperband butterflyfish moving through a carefully maintained mixed reef" /></div>
            <div className="guide-index-observation__copy"><span className="eyebrow eyebrow--teal">Field observation / 01.01</span><h2>Every system has a next right decision.</h2><p>Start from the conditions you can observe today. These chapters turn broad reefkeeping advice into an ordered, calmer path through the living system.</p><div className="guide-index-observation__record"><span>System map</span><b>Plan → Water → Equipment → Livestock → Care</b></div></div>
          </section>
          <section className="guide-index-thread" aria-label="Saltwater Fish Pro stability thread">{pillars.map((pillar) => <div key={pillar.number}><span>{pillar.number}</span><strong>{pillar.title}</strong><small>{pillar.summary}</small></div>)}</section>
          <section className="guide-chapters">{guides.map((guide, index) => { const Icon = guide.icon; const visual = guideVisuals[guide.slug]; return <Link href={guide.to} className={`guide-chapter guide-chapter--${index + 1}`} key={guide.label}><div className="guide-chapter__index"><span>Chapter</span><strong>0{index + 1}</strong></div><div className="guide-chapter__copy"><div className="guide-chapter__label"><Icon size={18} strokeWidth={1.5} /><span>{guide.label}</span></div><h2>{guide.title}</h2><p>{guide.copy}</p><div className="guide-chapter__observation"><span>Field direction</span><p>{visual.observation}</p></div></div>{visual.image && <div className="guide-chapter__image reef-window"><img src={visual.image} alt={visual.alt} /></div>}<ArrowUpRight className="guide-chapter__arrow" size={21} /></Link>; })}</section>
        </>}
        <section className="guide-feature-strip"><div><span className="eyebrow eyebrow--aqua">Start with the foundation</span><h2>The Mixed Saltwater Aquarium Blueprint</h2><p>A thoughtful planning path before the first purchase or first livestock addition.</p></div><Link href="/articles/mixed-saltwater-blueprint" className="button-link button-link--light">Read the blueprint <ArrowUpRight size={17} /></Link></section>
        <div className="newsletter-wrap"><NewsletterSignup /></div>
      </main>
      <SiteFooter />
    </div>
  );
}
