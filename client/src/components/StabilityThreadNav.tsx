/**
 * Saltwater Fish Pro | Stability Thread
 * A recurring publication navigation system that connects every guide to the five-part mixed-system framework.
 */

import { Link } from "wouter";

const steps = [
  { number: "01", label: "Plan", href: "/guides/build-plan" },
  { number: "02", label: "Water", href: "/guides/water-stability" },
  { number: "03", label: "Equipment", href: "/guides/equipment" },
  { number: "04", label: "Livestock", href: "/guides/livestock" },
  { number: "05", label: "Care", href: "/troubleshoot" },
];

export function StabilityThreadNav({ current }: { current?: string }) {
  return <nav className="stability-thread-nav" aria-label="The Saltwater Fish Pro Stability Thread"><span className="stability-thread-nav__label">System thread</span><div>{steps.map((step) => <Link href={step.href} key={step.label} className={current === step.label ? "stability-thread-nav__step stability-thread-nav__step--current" : "stability-thread-nav__step"}><b>{step.number}</b><span>{step.label}</span></Link>)}</div></nav>;
}
