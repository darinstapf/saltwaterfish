/**
 * Saltwater Fish Pro | Marine Field Journal design system
 * Original editorial content is organized around clarity, stability, and calm decision support.
 */

export const assets = {
  hero: "/images/hero-mixed-reef.jpg",
  blueprint: "/images/blueprint-butterflyfish.jpg",
  testing: "/images/stability-testing.jpg",
  realSystem: "/images/real-system-home.jpg",
  mark: "/images/reef-window-mark.png",
};

export const navigation = [
  { label: "Start Here", href: "/start-here" },
  { label: "Build & Plan", href: "/guides/build-plan" },
  { label: "Water & Stability", href: "/guides/water-stability" },
  { label: "Livestock", href: "/guides/livestock" },
  { label: "Equipment", href: "/guides/equipment" },
];

export const pillars = [
  { number: "01", title: "Plan", summary: "Define the system before the first purchase." },
  { number: "02", title: "Water", summary: "Measure what matters and protect consistency." },
  { number: "03", title: "Equipment", summary: "Choose equipment for the system—not the spec sheet." },
  { number: "04", title: "Livestock", summary: "Build a community that can thrive together." },
  { number: "05", title: "Care", summary: "Use calm routines to prevent urgent problems." },
];

export const latestStories = [
  {
    category: "Water & Stability",
    title: "When water changes help—and when they hide the real issue",
    description: "A measured framework for restoring balance without chasing every number.",
    to: "/articles/water-changes-and-stability",
    readTime: "8 min read",
  },
  {
    category: "Equipment in Context",
    title: "The first question to ask before choosing a protein skimmer",
    description: "Start with bioload, system goals, and maintenance tolerance—not a product list.",
    to: "/articles/protein-skimmer-context",
    readTime: "6 min read",
  },
  {
    category: "Real Systems",
    title: "A calm first year: documenting a balanced mixed-system build",
    description: "The decisions that made the difference long after the first equipment purchase.",
    to: "/articles/first-year-case-study",
    readTime: "11 min read",
  },
];
