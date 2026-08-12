/**
 * Saltwater Fish Pro | Marine Field Journal design system
 * Representative articles demonstrate the original structured editorial template used for future launch content.
 */

import { assets } from "@/data/siteContent";

export type Article = {
  slug: string;
  category: string;
  label: string;
  title: string;
  description: string;
  readTime: string;
  reviewed: string;
  image: string;
  imageAlt: string;
  intro: string;
  sections: Array<{ id: string; heading: string; paragraphs: string[] }>;
  doAvoidWatch: { do: string; avoid: string; watch: string };
};

export const articles: Article[] = [
  {
    slug: "mixed-saltwater-blueprint",
    category: "Start Here",
    label: "The system foundation",
    title: "The Mixed Saltwater Aquarium Blueprint",
    description: "A stability-first planning guide for a system that looks better because it works better.",
    readTime: "14 min read",
    reviewed: "August 2026",
    image: assets.blueprint,
    imageAlt: "A copperband butterflyfish moving through a carefully maintained mixed reef",
    intro: "The most expensive mistakes in a saltwater aquarium rarely begin with a single bad purchase. They begin when the tank is treated as a collection of parts instead of one living system.",
    sections: [
      { id: "before-you-buy", heading: "Before you buy, define the system you can sustain.", paragraphs: ["Start with the kind of aquarium you can care for with consistency—not only the version that looks best on launch day. Tank volume, placement, livestock ambition, equipment complexity, and maintenance time shape each other.", "A healthier system is usually the one whose routine fits its owner. Make room for maintenance, choose a sensible water source, and understand the full path from cycling to long-term care before choosing any individual piece of equipment."] },
      { id: "stability", heading: "The five systems that must work together.", paragraphs: ["Saltwater Fish Pro uses a simple framework to keep a complex subject legible. Planning, water, equipment, livestock, and care are connected; no component should be selected in isolation.", "This does not mean every system must be elaborate. It means the equipment, livestock, and routine should support the same outcome: stable conditions that make good observation and gradual change possible."] },
      { id: "first-decisions", heading: "The first right decisions are quiet ones.", paragraphs: ["A clean water source, practical equipment access, room for maintenance, and a deliberately paced livestock plan are rarely the things people photograph. They are the choices that give a system time to become resilient.", "This publication’s equipment guidance begins with the use case. It explains the trade-offs before a recommendation, because a piece of hardware cannot be evaluated honestly without the system around it."] },
      { id: "next-step", heading: "Find the next right decision.", paragraphs: ["Use this blueprint as a starting point, then move to the guide that matches your system’s current stage. The aim is not to make every tank identical—it is to make every choice more intentional."] },
    ],
    doAvoidWatch: { do: "Plan the maintenance routine while the tank is still empty.", avoid: "Solving a planning gap by adding more hardware after the fact.", watch: "Any change that alters multiple variables at once." },
  },
  {
    slug: "water-changes-and-stability",
    category: "Water & Stability",
    label: "Routine, without reflex",
    title: "When Water Changes Help—and When They Hide the Real Issue",
    description: "A measured framework for restoring balance without chasing every number in a mixed saltwater system.",
    readTime: "8 min read",
    reviewed: "August 2026",
    image: assets.testing,
    imageAlt: "Careful water testing beside a healthy saltwater aquarium",
    intro: "Water changes are an important part of responsible aquarium care. They are not, however, a substitute for understanding why a system feels unstable.",
    sections: [
      { id: "purpose", heading: "Start with the purpose of the change.", paragraphs: ["Before preparing water, name the outcome you are trying to achieve. Are you maintaining a steady routine, responding to a confirmed parameter concern, or reacting to a visible change in the aquarium? These are different situations and should not be treated as the same problem.", "Routine supports stability because it is predictable. Reactive intervention should be measured, deliberate, and followed by observation rather than a chain of additional adjustments."] },
      { id: "observe", heading: "Observe the system before correcting it.", paragraphs: ["A change in water clarity, algae growth, coral behavior, or fish activity is information. Record what has changed recently: feeding, livestock additions, lighting schedule, equipment performance, or maintenance timing.", "That short pause creates a better next step. It prevents a reader from treating every symptom as a water-change problem when the cause may be a new variable elsewhere in the system."] },
      { id: "routine", heading: "Make the routine easy enough to repeat.", paragraphs: ["The best maintenance process is one that can be completed safely and consistently. Store supplies together, use a schedule that fits real life, and keep simple notes on what was measured and what changed.", "Consistency gives every later observation context. Without that context, it is difficult to know whether an adjustment helped, made no difference, or introduced another variable."] },
    ],
    doAvoidWatch: { do: "Record the reason for a non-routine water change before acting.", avoid: "Making several corrections before observing the result of the first.", watch: "A recurring issue that returns immediately after routine maintenance." },
  },
  {
    slug: "protein-skimmer-context",
    category: "Equipment in Context",
    label: "Decision framework",
    title: "The First Question to Ask Before Choosing a Protein Skimmer",
    description: "Start with bioload, system goals, and maintenance tolerance—not a product list.",
    readTime: "6 min read",
    reviewed: "August 2026",
    image: assets.testing,
    imageAlt: "A careful saltwater aquarium maintenance and testing workspace",
    intro: "A protein skimmer should be selected for the system it will support. The most useful question is not which model is best—it is what the aquarium needs the equipment to do.",
    sections: [
      { id: "use-case", heading: "Define the use case before comparing models.", paragraphs: ["Begin with the actual water volume, expected fish load, feeding style, desired nutrient-management approach, available sump space, and tolerance for noise and maintenance. Those conditions determine whether a particular design is appropriate.", "A capacity figure alone cannot describe the system. It is one input among several, and it should never replace thoughtful observation of how the tank is being cared for."] },
      { id: "tradeoffs", heading: "Every setup has a trade-off.", paragraphs: ["A quieter skimmer may occupy more space. A larger body may require a more deliberate maintenance routine. A compact option may be sensible for a constrained system but not leave much room for future change.", "The best recommendation is therefore contextual. It should explain who the equipment is for, what it asks of the owner, and when a different approach may be more appropriate."] },
      { id: "maintenance", heading: "Maintenance is part of the equipment decision.", paragraphs: ["Equipment performance is connected to accessibility. If a collection cup, pump, or air intake is difficult to reach, the routine becomes less likely to happen on time. Plan access before the installation, not after.", "This is the stability-first approach in practice: choose the equipment that fits the full system and the care pattern it can realistically support."] },
    ],
    doAvoidWatch: { do: "Measure the usable sump space and service clearance before buying.", avoid: "Choosing by a single claimed capacity number.", watch: "A recommendation that does not state the system context it assumes." },
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug) ?? articles[0];
}
