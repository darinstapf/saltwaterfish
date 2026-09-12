/** Saltwater Fish Pro | Troubleshooting index with only published, contextual guide destinations. */

import { ArrowUpRight } from "lucide-react";
import { Link } from "wouter";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { StabilityThreadNav } from "@/components/StabilityThreadNav";
import { useSeo } from "@/lib/useSeo";
import { assets } from "@/data/siteContent";

const questions = [
  ["The tank feels unstable", "Start with measurement, change history, and a calm testing workflow.", "/articles/mixed-system-water-testing-workflow"],
  ["Water changes are not solving the issue", "Use a clear-purpose framework before layering more corrections.", "/articles/water-changes-and-stability"],
  ["Algae is taking over attention", "Document the pattern and recent system context before selecting a treatment.", "/articles/algae-diagnostic-before-treatment"],
  ["A new fish needs a careful plan", "Build an observation and escalation framework before display introduction.", "/articles/quarantine-decision-framework"],
  ["Equipment does not fit the routine", "Return to the use case, service access, and maintenance tolerance.", "/articles/protein-skimmer-context"],
];

export default function Troubleshoot() {
  useSeo({ title: "Saltwater Aquarium Troubleshooting | Saltwater Fish Pro", description: "Start a saltwater aquarium troubleshooting process with observation, context, and published stability-first guides.", path: "/troubleshoot", schema: { "@context": "https://schema.org", "@type": "WebPage", name: "Saltwater Aquarium Troubleshooting", url: "https://saltwaterfishpro.com/troubleshoot" } });
  return <div className="site-shell troubleshoot-page"><SiteHeader /><main><StabilityThreadNav current="Care" /><section className="troubleshoot-intro"><div><span className="eyebrow eyebrow--teal">Troubleshooting field index</span><h1>Start with a better question.</h1><p>These guides are built to slow down a rushed response. Choose the system question that best matches what you can observe today.</p><span className="troubleshoot-intro__note">Observe → document → make one measured next move</span></div><div className="reef-window"><img src={assets.testing} alt="A careful saltwater aquarium testing workspace" width="1200" height="800" /></div></section><section className="troubleshoot-list">{questions.map(([title, copy, href], index) => <Link href={href} key={href} className="troubleshoot-list__item"><span>0{index + 1}</span><div><h2>{title}</h2><p>{copy}</p></div><ArrowUpRight size={20} /></Link>)}</section></main><SiteFooter /></div>;
}
